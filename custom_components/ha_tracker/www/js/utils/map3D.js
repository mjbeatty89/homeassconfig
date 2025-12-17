// utils/map3D.js — MapLibre GL (3D) con shim Leaflet COMPLETO (edición de zonas)
// Claves:
//  - Compat Leaflet: map.addLayer / map.hasLayer / map.removeLayer
//  - L.marker: options + flags __ml_type/__marker/__added + cursor:pointer + stopPropagation + togglePopup en click
//  - L.polyline: options + __ml_id + _ensureAdded() + AUTO-ADD + throttle setData (rAF) + simplificación RDP por zoom
//                + listeners SIEMPRE + compuerta de click + popup único compartido + autocierre al remove
//  - L.circle:  options + edición + __ml_id + _ensureAdded() + AUTO-ADD + throttle setData (rAF) + menos vértices según zoom/radio
//                + selección por menor radio (cola por clic) + popup único compartido + autocierre al remove
//  - Panes: stub que NO bloquea eventos
//  - OSM por defecto; Esri como fallback si OSM falla por CORS.
//  - OpenFreeMap (vector style) incluído como tercera base; reinsertamos overlays tras setStyle().

import { loadCSSOnce, loadScriptOnce } from './loader.js';
import { t } from './i18n.js';
import { use_imperial } from '../globals.js'; // <-- usar variable importada

export let map;
let _ml, _popup, _views = {};
// NEW: registro global de todos los popups (marcadores y overlays)
const _allPopups = new Set();
let _cooperativeGestures = false;
// NEW: suprimir efectos secundarios del on('close') del popup cuando lo cerramos programáticamente (p.ej. durante drag)
let _suppressPopupCloseSideEffects = false;

// Geocoder (control oficial) para mostrar/ocultar e inyectar junto al botón
let _geocoderCtrl = null, _geocoderEl = null, _searchCtlRef = null;
// AbortController para evitar carreras al teclear
let _geocodeAbort = null;

// Escala dinámica según use_imperial importado
let _scaleCtrl = null, _lastImperial = null, _unitsPollId = null;

// Listeners globales para poder limpiar
let _onResize = null, _onVis = null;
// NEW: listener para pausar/reanudar el poll de unidades
let _onUnitsVis = null;

// >>> rastreo de origen UI (tabla de zonas) para decidir dónde anclar el popup
let _onUiPointer = null, _onUiClick = null;
let _lastUITrigger = {
    src: '',
    ts: 0
};

// === Límites de zoom (ajusta a tu gusto) ===
const ZOOM_LIMITS = {
    MIN: 2,
    MAX: 18
}; // p.ej. 18
const OSM_TILE_MAX_Z = 19; // OSM no sirve >19 (400)
const clampZoom = (z) => Math.min(Math.max(z ?? 0, ZOOM_LIMITS.MIN), ZOOM_LIMITS.MAX);

function _isInsideZonesTable(node) {
    let el = node;
    while (el && el !== document) {
        // admite tanto tabla completa como filas del tbody
        if (el.id === 'zones-table' || el.id === 'zones-table-body')
            return true;
        if (el.dataset && ('zoneId' in el.dataset))
            return true; // <tr data-zone-id="...">
        el = el.parentElement;
    }
    return false;
}
function _markUiSource(ev) {
    try {
        const src = _isInsideZonesTable(ev.target) ? 'zones-table' : 'other';
        _lastUITrigger = {
            src,
            ts: Date.now()
        };
    } catch {}
}
function _lastPressFromZones(ms = 1200) {
    return _lastUITrigger.src === 'zones-table' && (Date.now() - _lastUITrigger.ts) < ms;
}

const v = '1.0.8';
const CDN = {
    maplibreCSS: ['./vendor/maplibre-gl/maplibre-gl.css?v=' + v],
    maplibreJS: ['./vendor/maplibre-gl/maplibre-gl.js?v=' + v],
    geocCSS: ['./vendor/maplibre-gl-geocoder/maplibre-gl-geocoder.css?v=' + v],
    geocJS: ['./vendor/maplibre-gl-geocoder/maplibre-gl-geocoder.min.js?v=' + v]
};

// OpenFreeMap (estilo vectorial)
const OPENFREEMAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';

// Registro de overlays vectoriales (polylines/circles) para reinsertarlos tras setStyle()
const _vectorOverlays = new Set();
function _readdVectorOverlays() {
    _vectorOverlays.forEach(o => {
        try {
            o.__readd?.();
        } catch (e) {
            console.error(e);
        }
    });
}

async function tryLoadCSS(urls) {
    for (const u of urls) {
        try {
            await loadCSSOnce(u);
            return true;
        } catch {}
    }
    return false;
}
async function tryLoadJS(urls, test) {
    for (const u of urls) {
        try {
            await loadScriptOnce(u, {
                test
            });
            if (!test || test())
                return true;
        } catch {}
    }
    return false;
}
function injectMinimalGeocoderCSS() {
    if (document.getElementById('mlgeoc-mincss'))
        return;
    const css = `
  /* Caja base del geocoder (ligero) */
  #map .maplibregl-ctrl-geocoder{
    font:12px/1.2 system-ui;
    background:#fff;
    border-radius:6px;
    box-shadow:0 2px 8px rgba(0,0,0,.2);
    padding:0;
  }
  #map .maplibregl-ctrl-geocoder *{ box-sizing:border-box; }
  `;
    const s = document.createElement('style');
    s.id = 'mlgeoc-mincss';
    s.textContent = css;
    document.head.appendChild(s);
}

// Overrides SIEMPRE activos para agrandar botones nativos y personalizados
function injectUIOverridesCSS() {
    const css = `
  /* === Controles SIEMPRE por encima, sin tocar su posicionamiento absoluto === */
  #map .maplibregl-ctrl-top-left,
  #map .maplibregl-ctrl-top-right,
  #map .maplibregl-ctrl-bottom-left,
  #map .maplibregl-ctrl-bottom-right{
    /* NO cambiar position aquí (MapLibre ya usa absolute) */
    z-index: 2147483647 !important;
  }

  /* Popups por encima de marcadores pero por debajo de controles */
  #map .maplibregl-popup{
    z-index: 2147483000 !important;
  }

  /* Marcadores por defecto debajo de controles; se puede elevar con setZIndexOffset() */
  #map .maplibregl-marker{
    z-index: 0;
  }

  /* === Botones del mapa más grandes (scope: #map) === */
  #map .maplibregl-ctrl-group > button{
    width:40px !important;
    height:40px !important;
    padding:0 !important;
    line-height:normal !important;
    display:grid !important;
    place-items:center !important;
    font-size:18px;
  }
  /* Zoom (+/-) y compás usan background en el propio botón */
  #map .maplibregl-ctrl-zoom-in,
  #map .maplibregl-ctrl-zoom-out,
  #map .maplibregl-ctrl-compass{
    background-position:center center !important;
    background-repeat:no-repeat !important;
    background-size:30px 30px !important;
  }
  /* Si existe nodo interno .maplibregl-ctrl-icon, escálalo y céntralo */
  #map .maplibregl-ctrl-group > button .maplibregl-ctrl-icon{
    width:30px !important;
    height:30px !important;
    margin:0 auto !important;
    background-size:30px 30px !important;
    background-position:center center !important;
  }
  /* Flecha interna del compás */
  #map .maplibregl-ctrl-compass .maplibregl-ctrl-compass-arrow,
  #map .maplibregl-ctrl-compass svg{
    width:30px !important;
    height:30px !important;
    display:block !important;
    margin:0 auto !important;
    transform-origin:center center !important;
  }
  /* OCULTAR EL MARCADOR EN LOS RESULTADOS */
  #map .maplibregl-ctrl-geocoder .maplibregl-ctrl-geocoder--result-icon{ display:none !important; }
  /* === Geocoder: fuente más pequeña (input + lista de resultados) === */
  #map .maplibregl-ctrl-geocoder{
    font-size:12px !important;
    line-height:1.25 !important;
  }
  #map .maplibregl-ctrl-geocoder .maplibregl-ctrl-geocoder--input{
    font-size:inherit !important;
  }
  #map .maplibregl-ctrl-geocoder .suggestions, #map .maplibregl-ctrl-geocoder .suggestions *{
    font-size:inherit !important; line-height:1.25 !important;
  }  
  /* === Handles de edición: borde sólido + relleno opaco más claro === */
  #map .ml-handle{
    width:22px; height:22px; border-radius:50%;
    box-sizing:border-box;
    pointer-events:auto; user-select:none; touch-action:none;
    transition: box-shadow .12s ease;
  }
  /* Centro: azul */
  #map .ml-handle--move{
    border:3px solid #1677ff;       /* borde sólido */
    background:#aac4ff;             /* azul claro opaco */
    cursor: move;
  }
  /* Radio: rojo */
  #map .ml-handle--radius{
    border:3px solid #ff3b30;       /* borde sólido */
    background:#ffb5b0;             /* rojo claro opaco */
    cursor: ew-resize;
  }
  #map .ml-handle:hover{ box-shadow:0 0 0 3px rgba(0,0,0,.08); }
  #map .ml-handle:focus-visible{ outline:2px solid currentColor; outline-offset:2px; }
  `;

    let s = document.getElementById('ml-ui-overrides');
    if (s) {
        s.textContent = css;
        return;
    }
    s = document.createElement('style');
    s.id = 'ml-ui-overrides';
    s.textContent = css;
    document.head.appendChild(s);
}

// --- Traducir títulos/aria-label de los botones nativos de navegación ---
function _localizeNavTitles() {
    const root = _ml?.getContainer?.();
    if (!root)
        return;
    const q = (sel) => root.querySelector(sel);
    const apply = (el, s) => {
        if (!el)
            return;
        el.title = s;
        el.setAttribute('aria-label', s);
    };
    apply(q('.maplibregl-ctrl-zoom-in'), t('zoom_in'));
    apply(q('.maplibregl-ctrl-zoom-out'), t('zoom_out'));
    apply(q('.maplibregl-ctrl-compass'), t('reset_to_north'));
}

async function ensureMapLibreLoaded() {
    const cssOK = await tryLoadCSS(CDN.maplibreCSS);
    const jsOK = await tryLoadJS(CDN.maplibreJS, () => !!window.maplibregl);
    if (!cssOK || !jsOK)
        throw new Error('MapLibre core failed to load');
    const geocCssOK = await tryLoadCSS(CDN.geocCSS);
    const geocJsOK = await tryLoadJS(CDN.geocJS, () => !!window.MaplibreGeocoder);
    if (!geocCssOK)
        injectMinimalGeocoderCSS();
    // Inyecta SIEMPRE los overrides de UI tras cargar el CSS base
    injectUIOverridesCSS();
    // Considera el geocoder disponible si el JS está cargado (aunque el CSS falte)
    return {
        geocoderOk: !!geocJsOK
    };
}

// ==== cola hasta que el estilo esté listo ====
const _readyQueue = [];
function whenStyleReady(fn) {
    if (_ml?.isStyleLoaded?.())
        fn();
    else
        _readyQueue.push(fn);
}
function _flushReadyQueue() {
    if (!_ml?.isStyleLoaded?.())
        return; // no ejecutar antes de tiempo
    while (_readyQueue.length) {
        try {
            _readyQueue.shift()();
        } catch (e) {
            console.error(e);
        }
    }
}

// === util UI ====
function addRasterBasesIfMissing() {
    if (!_ml.getSource('osm') && !_ml.getSource('esri')) {
        _ml.addSource('osm', {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors',
            maxzoom: 19
        });
        _ml.addLayer({
            id: 'osm',
            type: 'raster',
            source: 'osm',
            layout: {
                visibility: 'visible'
            }
        });
        _ml.addSource('esri', {
            type: 'raster',
            tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
            tileSize: 256,
            attribution: '© Esri, Maxar, Earthstar Geographics'
        });
        _ml.addLayer({
            id: 'esri',
            type: 'raster',
            source: 'esri',
            layout: {
                visibility: 'none'
            }
        });
    }
}

function switchBase(name) {
    const id = _views[name];
    if (!id)
        return;

    // Caso especial: OpenFreeMap (vector style)
    if (id === 'ofm') {
        // Diagnóstico + guard + fallback
        let done = false;
        const finish = () => {
            if (done)
                return;
            done = true;
            try {
                _flushReadyQueue();
            } catch {}
            _readdVectorOverlays();
            try {
                _ml.off('error', onErr);
            } catch {}
        };
        const onErr = (e) => {
            console.warn('[OFM] style error:', e);
        };

        _ml.once('error', onErr);
        _ml.setStyle(OPENFREEMAP_STYLE);
        _ml.once('styledata', finish);
        _ml.once('idle', finish);

        // Fallback si no se completó en un tiempo razonable
        setTimeout(() => {
            if (!done) {
                console.warn('[OFM] No se completó la carga del estilo. Volviendo a raster base.');
                try {
                    _ml.off('error', onErr);
                } catch {}
                _ml.setStyle({
                    version: 8,
                    sources: {},
                    layers: []
                });
                _ml.once('styledata', () => {
                    addRasterBasesIfMissing();
                });
            }
        }, 4000);

        return;
    }

    // Asegura que estamos en el estilo "raster básico" (no el de OFM)
    if (!_ml.getSource('osm') && !_ml.getSource('esri')) {
        _ml.setStyle({
            version: 8,
            sources: {},
            layers: []
        });
        _ml.once('styledata', () => {
            addRasterBasesIfMissing();
            setTimeout(() => switchBase(name), 0);
        });
        return;
    }

    // OSM no sirve z>19 → clamp para evitar 400
    if (name === 'OpenStreetMap') {
        const osmMax = Math.min(ZOOM_LIMITS.MAX, OSM_TILE_MAX_Z);
        if (_ml.getZoom() > osmMax) {
            _ml.easeTo({
                zoom: osmMax
            });
        }
    }

    // Cambia la visibilidad entre OSM/Esri
    for (const [label, layerId] of Object.entries(_views)) {
        if (layerId === 'ofm')
            continue;
        const vis = (label === name) ? 'visible' : 'none';
        if (_ml.getLayer(layerId))
            _ml.setLayoutProperty(layerId, 'visibility', vis);
    }
}

// === util: detectar click fuera de un nodo para cerrarlo ===
function _wireOutsideClose(container, onClose) {
    function cleanup() {
        document.removeEventListener('pointerdown', down, true);
        document.removeEventListener('keydown', key, true);
    }
    function down(ev) {
        if (!container.contains(ev.target)) {
            cleanup();
            onClose();
        }
    }
    function key(ev) {
        if (ev.key === 'Escape') {
            cleanup();
            onClose();
        }
    }
    document.addEventListener('pointerdown', down, true);
    document.addEventListener('keydown', key, true);
}

// Helper común para (des)suscribir eventos de layer (click/enter/leave)
function bindLayerEvents(id, handlers) {
    const { click, enter, leave } = handlers || {};
    if (click)
        _ml.on('click', id, click);
    if (enter)
        _ml.on('mouseenter', id, enter);
    if (leave)
        _ml.on('mouseleave', id, leave);
    return () => {
        try {
            if (click)
                _ml.off('click', id, click);
        } catch {}
        try {
            if (enter)
                _ml.off('mouseenter', id, enter);
        } catch {}
        try {
            if (leave)
                _ml.off('mouseleave', id, leave);
        } catch {}
    };
}

// === Mostrar/Ocultar geocoder + foco ===
function _getGeocoderInput() {
    if (!_geocoderEl)
        return null;
    return _geocoderEl.querySelector('input[type="text"]');
}
function showGeocoder() {
    if (!_geocoderEl)
        return;
    _geocoderEl.style.display = '';
    // habilitar clicks en el slot cuando está visible
    try {
        _geocoderEl.parentElement.style.pointerEvents = 'auto';
    } catch {}
    const inp = _getGeocoderInput();
    _wireOutsideClose(_geocoderEl, hideGeocoder);
    // Autofocus para mejor UX
    requestAnimationFrame(() => inp?.focus());
}
function hideGeocoder() {
    if (!_geocoderEl)
        return;
    _geocoderEl.style.display = 'none';
    // volver a no bloquear cuando esté oculto
    try {
        _geocoderEl.parentElement.style.pointerEvents = 'none';
    } catch {}
}
function toggleGeocoder() {
    if (!_geocoderEl)
        return;
    const vis = getComputedStyle(_geocoderEl).display !== 'none';
    vis ? hideGeocoder() : showGeocoder();
}

// ===== Control botón Buscar (muestra/oculta el geocoder) con SLOT a la derecha =====
class SearchToggleControl {
    constructor() {
        this._slot = null;
        this._btn = null;
    }
    onAdd(map) {
        this._map = map;
        // contenedor horizontal: botón (grupo estándar) + slot geocoder
        const c = document.createElement('div');
        c.className = 'maplibregl-ctrl';
        c.style.display = 'flex';
        c.style.gap = '6px';
        c.style.alignItems = 'stretch';

        const grp = document.createElement('div');
        grp.className = 'maplibregl-ctrl-group';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.title = t('search');
        btn.setAttribute('aria-label', t('search'));
        btn.innerText = '🔍';
        btn.onclick = toggleGeocoder;
        grp.appendChild(btn);
        c.appendChild(grp);
        this._btn = btn;

        // Slot para geocoder (alineado a la derecha del botón)
        const slot = document.createElement('div');
        slot.className = 'ml-search-inline-slot';
        slot.style.display = 'flex';
        slot.style.alignItems = 'stretch';
        // Que no bloquee clics cuando está vacío/oculto:
        slot.style.pointerEvents = 'none';
        // Que no reserve ancho si no es necesario:
        slot.style.minWidth = '280px';
        slot.style.maxWidth = '280px';
        c.appendChild(slot);
        this._slot = slot;

        return (this._container = c);
    }
    onRemove() {
        this._container?.remove();
        this._map = undefined;
    }
    attach(el) {
        if (!el || !this._slot)
            return;
        // reset de estilos absolutos por si venía en modo independiente
        el.style.position = '';
        el.style.left = '';
        el.style.bottom = '';
        el.style.display = 'none';
        el.style.margin = '0';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,.15)';
        // el contenedor interno del geocoder debe ser flexible
        el.style.flex = '1 1 280px';
        el.style.alignSelf = 'stretch';

        // forzar altura del input = altura del botón
        const btnH = this._btn ? (parseFloat(getComputedStyle(this._btn).height) || 40) : 40;
        const inp = el.querySelector('input[type="text"]');
        if (inp) {
            inp.style.height = btnH + 'px';
            inp.style.lineHeight = btnH + 'px';
            inp.style.padding = '0 8px';
            inp.placeholder = t('search_place') || 'Search…';
        }
        this._slot.appendChild(el);
    }
}

// ===== Control Capas (botón que abre un menú a la DERECHA) =====
class LayerControl {
    onAdd(map) {
        this._map = map;
        const wrap = document.createElement('div');
        wrap.className = 'maplibregl-ctrl maplibregl-ctrl-group';
        wrap.style.position = 'relative';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.title = t('layers');
        btn.setAttribute('aria-label', t('layers'));
        btn.innerText = '🗺️';
        wrap.appendChild(btn);

        const menu = document.createElement('div');
        menu.className = 'ml-layers-menu';
        menu.style.cssText = `
      position:absolute; left:calc(100% + 6px); top:0;
      background:#fff; border-radius:6px; box-shadow:0 2px 8px rgba(0,0,0,.25);
      overflow:hidden; display:none; z-index:10; min-width:180px; font:12px/1.2 system-ui;
    `;
        const mkItem = (label) => {
            const it = document.createElement('button');
            it.type = 'button';
            it.textContent = label;
            it.style.cssText = 'display:block;width:100%;text-align:left;padding:6px 8px;border:0;border-bottom:1px solid #eee;background:#fff;cursor:pointer';
            it.onclick = () => {
                switchBase(label);
                menu.style.display = 'none';
            };
            return it;
        };
        const fillMenu = () => {
            menu.innerHTML = '';
            Object.keys(_views || {}).forEach((lab, idx) => {
                const el = mkItem(lab);
                if (idx === Object.keys(_views).length - 1)
                    el.style.borderBottom = '0';
                menu.appendChild(el);
            });
        };
        btn.onclick = () => {
            fillMenu();
            const v = getComputedStyle(menu).display !== 'none';
            if (v) {
                menu.style.display = 'none';
            } else {
                menu.style.display = '';
                _wireOutsideClose(menu, () => menu.style.display = 'none');
            }
        };
        wrap.appendChild(menu);
        return (this._container = wrap);
    }
    onRemove() {
        this._container?.remove();
        this._map = undefined;
    }
}

// ==== Escala dinámica según use_imperial importado ====
function _applyScaleUnit(wantImperial) {
    if (_scaleCtrl) {
        try {
            _ml.removeControl(_scaleCtrl);
        } catch {}
    }
    _scaleCtrl = new maplibregl.ScaleControl({
        unit: wantImperial ? 'imperial' : 'metric'
    });
    _ml.addControl(_scaleCtrl, 'bottom-left');
    _lastImperial = !!wantImperial;
}
function _syncScaleFromGlobals() {
    const want = !!use_imperial; // binding vivo de ES modules
    if (want !== _lastImperial)
        _applyScaleUnit(want);
}

// ==== API pública ====
export function setInteraction({
    cooperativeGestures = null,
    dragRotate = null
} = {}) {
    if (!_ml) {
        _cooperativeGestures = !!cooperativeGestures;
        return;
    }
    if (cooperativeGestures != null)
        try {
            _ml.setCooperativeGestures(!!cooperativeGestures);
        } catch {}
    if (dragRotate != null) {
        if (dragRotate)
            _ml.dragRotate.enable();
        else
            _ml.dragRotate.disable();
    }
}
// Helper público para cambiar base desde fuera
export function setBaseLayer(name) {
    switchBase(name);
}

export async function initMap() {
    const { geocoderOk } = await ensureMapLibreLoaded();

    const start = [40.4168, -3.7038]; // Madrid [lat,lng]
    _ml = new maplibregl.Map({
        container: 'map',
        center: [start[1], start[0]],
        zoom: 6,
        minZoom: ZOOM_LIMITS.MIN,
        maxZoom: ZOOM_LIMITS.MAX,
        pitch: 45,
        bearing: -17,
        // OPT: baja coste de render
        antialias: false,
        preserveDrawingBuffer: true,
        style: {
            version: 8,
            sources: {},
            layers: []
        },
        cooperativeGestures: _cooperativeGestures,
        attributionControl: false,
        validate: false
    });

    // Evitar warnings de iconos faltantes (añadimos un 1x1 transparente)
    _ml.on('styleimagemissing', (e) => {
        const id = e?.id;
        if (!id)
            return;
        try {
            if (!_ml.hasImage(id)) {
                const data = new Uint8Array([0, 0, 0, 0]); // 1x1 transparente RGBA
                _ml.addImage(id, {
                    width: 1,
                    height: 1,
                    data
                });
            }
        } catch (_) {}
    });

    // Controles a la izquierda
    _ml.addControl(new maplibregl.NavigationControl({
            visualizePitch: true
        }), 'top-left');
    _localizeNavTitles();

    // Botón BUSCAR (slot inline a la derecha). El control como tal se crea ya.
    _searchCtlRef = new SearchToggleControl();
    _ml.addControl(_searchCtlRef, 'top-left');

    // Botón CAPAS (menú se abre a la derecha)
    _ml.addControl(new LayerControl(), 'top-left');

    // >>> escuchar interacciones globales para detectar si la apertura viene desde la tabla
    _onUiPointer = (ev) => _markUiSource(ev);
    document.addEventListener('pointerdown', _onUiPointer, true);
    _onUiClick = (ev) => _markUiSource(ev);
    document.addEventListener('click', _onUiClick, true);

    // === Proveedor de geocodificación definido AQUÍ dentro ===
    // Usa Nominatim como backend; puedes cambiar el endpoint si prefieres un proxy.
    const geocoderApi = {
        forwardGeocode: async(config) => {
            const q = (config?.query || '').trim();
            if (!q)
                return {
                    features: []
                };
            try {
                const lang = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
                const url = `https://nominatim.openstreetmap.org/search?format=json&limit=5&accept-language=${encodeURIComponent(lang)}&q=${encodeURIComponent(q)}`;

                // Cancelar petición anterior si existe
                _geocodeAbort?.abort();
                _geocodeAbort = new AbortController();

                const res = await fetch(url, {
                    headers: {
                        'Accept': 'application/json'
                    },
                    signal: _geocodeAbort.signal
                });
                if (!res.ok)
                    return {
                        features: []
                    };
                const data = await res.json();

                // Nominatim: boundingbox = [south, north, west, east]
                const features = (Array.isArray(data) ? data : []).map(g => {
                    const lon = +g.lon,
                    lat = +g.lat;
                    const bbox = Array.isArray(g.boundingbox) && g.boundingbox.length === 4
                         ? [+g.boundingbox[2], +g.boundingbox[0], +g.boundingbox[3], +g.boundingbox[1]]// [w,s,e,n]
                         : null;
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [lon, lat]
                        },
                        center: [lon, lat],
                        bbox,
                        place_name: g.display_name,
                        text: g.type || g.class || g.display_name,
                        properties: {
                            osm_id: g.osm_id,
                            osm_type: g.osm_type,
                            category: g.class,
                            type: g.type,
                            display_name: g.display_name
                        }
                    };
                });
                return {
                    features
                };
            } catch (err) {
                if (err?.name === 'AbortError')
                    return {
                        features: []
                    };
                console.warn('[geocoder] forwardGeocode error:', err);
                return {
                    features: []
                };
            }
        }
    };

    // Monta el geocoder oficial y lo acopla al slot del botón 🔍
    if (geocoderOk && window.MaplibreGeocoder) {
        try {
            _geocoderCtrl = new window.MaplibreGeocoder(geocoderApi, {
                maplibregl: window.maplibregl,
                marker: false,
                placeholder: t('search_place') || 'Search…',
                zoom: 14,
                showResultsWhileTyping: true,
                minLength: 2,
                debounceSearch: 200
            });
            _geocoderCtrl.on('error', (e) => console.warn('[geocoder] error:', e));
            _geocoderCtrl.on('result', (e) => {
                try {
                    const r = e?.result;
                    if (!r)
                        return;
                    if (Array.isArray(r.bbox) && r.bbox.length === 4) {
                        const [w, s, e2, n] = r.bbox;
                        _ml.fitBounds([[w, s], [e2, n]], {
                            padding: 40,
                            duration: 900
                        });
                    } else if (Array.isArray(r.center)) {
                        _ml.flyTo({
                            center: r.center,
                            zoom: 14,
                            duration: 900
                        });
                    }
                    if (r.center) {
                        const gp = new maplibregl.Popup()
                            .setLngLat(r.center)
                            .setHTML(r.place_name || '')
                            .addTo(_ml);
                        try {
                            _allPopups.add(gp);
                        } catch {}
                    }
                    try {
                        _geocoderCtrl.setInput(r.place_name || r.text || '');
                    } catch (_) {}
                } catch (err) {
                    console.warn('result handler error:', err);
                } finally {
                    requestAnimationFrame(() => {
                        // Vaciar caja + sugerencias (según versión)
                        try {
                            if (typeof _geocoderCtrl?.clear === 'function') {
                                _geocoderCtrl.clear(); // limpia input y resultados
                            } else {
                                _geocoderCtrl?.setInput('');
                                const inp = _getGeocoderInput?.();
                                if (inp) {
                                    inp.value = '';
                                    inp.blur();
                                }
                            }
                        } catch {}
                        hideGeocoder();
                    });
                }
            });
            _geocoderEl = _geocoderCtrl.onAdd(_ml);
            _searchCtlRef.attach(_geocoderEl);
            try {
                _geocoderEl.querySelector('.maplibregl-ctrl-geocoder--icon.maplibregl-ctrl-geocoder--icon-search')?.remove();
            } catch (_) {}
        } catch (err) {
            console.error('Error montando MaplibreGeocoder:', err);
        }
    } else {
        console.info('[map] Plugin geocoder no disponible; el botón 🔍 no mostrará input.');
    }

    // Escala: métrica/imperial dinámica según use_imperial importado
    _syncScaleFromGlobals();

    // Atribución abajo a la izquierda (compacta)
    _ml.addControl(new maplibregl.AttributionControl({
            compact: true
        }), 'bottom-left');

    if (_unitsPollId) {
        try {
            clearInterval(_unitsPollId);
        } catch {}
    }
    _unitsPollId = setInterval(_syncScaleFromGlobals, 1000);

    // NEW: pausar/reanudar el poll cuando la pestaña se oculta
    _onUnitsVis = () => {
        if (document.hidden) {
            try {
                if (_unitsPollId)
                    clearInterval(_unitsPollId);
            } catch {}
            _unitsPollId = null;
        } else {
            if (!_unitsPollId)
                _unitsPollId = setInterval(_syncScaleFromGlobals, 1000);
        }
    };
    document.addEventListener('visibilitychange', _onUnitsVis);

    _ml.dragRotate.enable();
    _ml.touchZoomRotate.enableRotation();

    // Vaciar cola SOLO cuando el estilo esté listo
    const tryFlush = () => {
        try {
            if (_ml?.isStyleLoaded?.())
                _flushReadyQueue();
        } catch (e) {
            console.error(e);
        }
    };

    _ml.on('load', () => {
        // OSM visible por defecto (Esri oculto, fallback)
        if (!_ml.getSource('osm')) {
            _ml.addSource('osm', {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '© OpenStreetMap contributors',
                maxzoom: 19
            });
            _ml.addLayer({
                id: 'osm',
                type: 'raster',
                source: 'osm',
                layout: {
                    visibility: 'visible'
                }
            });
        }
        if (!_ml.getSource('esri')) {
            _ml.addSource('esri', {
                type: 'raster',
                tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
                tileSize: 256,
                attribution: '© Esri, Maxar, Earthstar Geographics'
            });
            _ml.addLayer({
                id: 'esri',
                type: 'raster',
                source: 'esri',
                layout: {
                    visibility: 'none'
                }
            });
        }
        // Bases para el menú de capas
        _views = {
            "OpenStreetMap": "osm",
            "Esri Satélite": "esri",
            "OpenFreeMap": "ofm"
        };
        tryFlush();
    });

    // Flushear cola y reinsertar overlays cuando el mapa queda inactivo (estilo cargado)
    _ml.on('idle', () => {
        tryFlush();
        if (_ml?.isStyleLoaded?.())
            _readdVectorOverlays();
    });

    _ml.on('error', (e) => {
        if (e?.sourceId === 'osm') {
            const status = e?.error?.status ?? e?.error?.statusCode ?? e?.status;
            const msg = (e?.error?.message || '').toLowerCase();
            const looksCors = msg.includes('cors') || msg.includes('cross-origin');

            // Caso típico: OSM sólo llega hasta z=19 → 400 si pedimos z=20
            if (status === 400) {
                const osmMax = Math.min(ZOOM_LIMITS.MAX, OSM_TILE_MAX_Z);
                if (_ml.getZoom() > osmMax)
                    _ml.easeTo({
                        zoom: osmMax
                    });
                console.warn('[OSM] 400 Bad Request (posible zoom > tile max). Se mantiene OSM y se reescala.');
                return;
            }
            // Rate limit
            if (status === 429) {
                try {
                    _ml.setLayoutProperty('osm', 'visibility', 'none');
                } catch {}
                try {
                    _ml.setLayoutProperty('esri', 'visibility', 'visible');
                } catch {}
                console.warn('OSM rate-limited (429). Mostrando Esri.');
                return;
            }
            // Fallback sólo para errores reales de CORS/permisos
            if (status === 0 || status === 401 || status === 403 || looksCors) {
                try {
                    _ml.setLayoutProperty('osm', 'visibility', 'none');
                } catch {}
                try {
                    _ml.setLayoutProperty('esri', 'visibility', 'visible');
                } catch {}
                console.warn('OSM desactivado (CORS/permisos). Mostrando Esri.');
            }
        }
    });

    // ===== Comp. de click: sólo el primer handler por clic actúa (para capas no-agrupadas) =====
    function _gateLayerClick(e) {
        const oe = e && e.originalEvent;
        if (!oe)
            return false; // sin originalEvent, no gateamos
        if (oe.__mlHandled)
            return true; // ya gestionado por otra capa
        oe.__mlHandled = true; // marcamos como gestionado
        return false;
    }

    // ===== Cola de selección para CÍRCULOS (elige el de menor radio en el mismo clic) =====
    const _circleClickQueue = new WeakMap();
    function _queueCircleClick(e, openFn, radius) {
        const oe = e?.originalEvent || e;
        if (!oe) {
            openFn();
            return;
        }
        let list = _circleClickQueue.get(oe);
        if (!list) {
            list = [];
            _circleClickQueue.set(oe, list);
            // Resolvemos en el próximo macrotick: elegimos el menor radio y abrimos sólo ese
            setTimeout(() => {
                try {
                    if (!list.length)
                        return;
                    list.sort((a, b) => a.radius - b.radius);
                    // Cierra cualquier popup de overlays que se haya abierto antes en este mismo clic (ej. polylines)
                    try {
                        _popup?.remove();
                    } catch {}
                    list[0].open();
                } finally {
                    _circleClickQueue.delete(oe);
                }
            }, 0);
        }
        list.push({
            open: openFn,
            radius: Number.isFinite(radius) ? radius : 0
        });
    }

    // Listeners globales (nombrados) y primer resize
    _onResize = () => _ml && _ml.resize();
    window.addEventListener('resize', _onResize);
    _onVis = () => {
        if (!document.hidden)
            requestAnimationFrame(_onResize);
    };
    document.addEventListener('visibilitychange', _onVis);
    setTimeout(() => {
        _onResize && _onResize();
    }, 350);

    // Popup único reutilizable para overlays (rutas/zonas) + selección activa de edición
    let _activeOverlayPopupOwner = null;

    // === NUEVO: sólo mostrar handles en el círculo activo (zona seleccionada)
    let _activeEditCircle = null;
    function _setActiveEditableCircle(c) {
        _activeEditCircle = c || null;
        try {
            _vectorOverlays.forEach(o => {
                if (o && o.__ml_type === 'circle' && typeof o.__maybeUpdateHandleVisibility === 'function') {
                    o.__maybeUpdateHandleVisibility(o === _activeEditCircle);
                }
            });
        } catch (e) {
            console.warn(e);
        }
    }

    _popup = new maplibregl.Popup({
        closeButton: true,
        closeOnClick: true
    });
    try {
        _popup.on('close', () => {
            _activeOverlayPopupOwner = null;
            // Si estamos cerrando el popup de forma programática (p.ej. durante drag), no desactivar edición
            if (_suppressPopupCloseSideEffects) {
                _suppressPopupCloseSideEffects = false;
                return;
            }
            _setActiveEditableCircle(null); // al cerrar el popup manualmente, ocultar handles
        });
    } catch {}

    // Objeto map “tipo Leaflet”
    map = {
        getZoom: () => _ml.getZoom(),
        setView: (pos, zoom = null, opts = {}) => {
            let lat,
            lng;
            if (Array.isArray(pos))
                [lat, lng] = pos;
            else if (pos && typeof pos === 'object' && 'lat' in pos && 'lng' in pos) {
                lat = pos.lat;
                lng = pos.lng;
            } else {
                console.warn('setView expects [lat,lng] or {lat,lng}');
                return;
            }
            const o = {
                center: [lng, lat]
            };
            if (zoom != null)
                o.zoom = clampZoom(zoom);
            if (opts?.animate === false) {
                _ml.jumpTo(o); // sin animación
            } else {
                _ml.easeTo(o); // animado como antes
            }
        },
        fitBounds: (bbox, opts = {}) => {
            let sw,
            ne;
            if (Array.isArray(bbox) && Array.isArray(bbox[0])) {
                sw = [bbox[0][1], bbox[0][0]];
                ne = [bbox[1][1], bbox[1][0]];
            } else if (bbox?.getSouthWest) {
                const s = bbox.getSouthWest(),
                n = bbox.getNorthEast();
                sw = [s.lng, s.lat];
                ne = [n.lng, n.lat];
            } else
                return;
            const mlOpts = {
                padding: opts?.padding || 24
            };
            if (opts?.animate === false)
                mlOpts.duration = 0;
            _ml.fitBounds([sw, ne], mlOpts);
        },
        fitWorld: () => _ml.fitBounds([[-180, -85], [180, 85]], {
            padding: 24
        }),
        getCenter: () => {
            const c = _ml.getCenter();
            return {
                lat: c.lat,
                lng: c.lng
            };
        },
        invalidateSize: () => _ml.resize(),
        closePopup: () => {
            // Cierra el popup compartido de overlays y limpia el owner
            try {
                _popup?.remove();
            } finally {
                try {
                    _activeOverlayPopupOwner = null;
                } catch {}
            }
            // Cierra los popups registrados que estén abiertos (no los borres del Set)
            try {
                for (const p of _allPopups) {
                    try {
                        if (p && p._map)
                            p.remove();
                    } catch {}
                }
            } catch {}
            return map; // opcional, por encadenamiento
        },
        on: (ev, fn) => _ml.on(ev, fn),
        off: (ev, fn) => _ml.off(ev, fn),

        // --- Compat Leaflet ---
        addLayer: (layerLike) => {
            try {
                if (typeof layerLike?.addTo === 'function') {
                    layerLike.addTo(map);
                }
                if (typeof layerLike === 'object')
                    layerLike.__added = true;
            } catch (e) {
                console.error('addLayer failed', e);
            }
            return map;
        },
        removeLayer: (layerLike) => {
            try {
                if (typeof layerLike?.remove === 'function') {
                    layerLike.remove();
                }
                if (typeof layerLike === 'object')
                    layerLike.__added = false;
            } catch (e) {
                console.error('removeLayer failed', e);
            }
            return map;
        },
        hasLayer: (layerLike) => {
            if (!layerLike)
                return false;
            if (layerLike.__ml_type === 'marker') {
                // Evitar depender de internals, pero permitir fallback si añadieron directo al mapa
                return !!(layerLike.__added || layerLike.__marker?._map);
            }
            const id = layerLike.__ml_id;
            if (id && _ml) {
                if (_ml.getSource(id))
                    return true;
                if (_ml.getLayer(id))
                    return true;
                if (_ml.getLayer(id + '-fill'))
                    return true;
                if (_ml.getLayer(id + '-line'))
                    return true;
            }
            return !!layerLike.__added;
        },

        getBounds: () => _ml.getBounds(),
        // Panes “stub” que NO bloquean el mapa
        _panes: Object.create(null),
        getPane: (name) => map._panes[name] || null,
        createPane: (name) => {
            if (map._panes[name])
                return map._panes[name];
            const stub = {
                className: `pane-${name}`,
                style: {},
                remove: () => {}
            };
            map._panes[name] = stub;
            return stub;
        },
        _openPopupHTML: (lat, lng, html) => {
            _popup.setLngLat([lng, lat]).setHTML(html).addTo(_ml);
        },
        _ml
    };

    // ===== Shim Leaflet =====
    const L = {};

    L.canvas = (opts = {}) => ({
        __ml_type: 'canvas_renderer',
        options: opts
    });

    L.icon = (opts = {}) => ({
        __type: 'icon',
        ...opts
    });
    L.divIcon = (opts = {}) => ({
        __type: 'divicon',
        html: opts.html || '',
        ...opts
    });

    L.latLngBounds = (latlngs = []) => {
        let minLat = 90,
        minLng = 180,
        maxLat = -90,
        maxLng = -180;
        for (const ll of latlngs) {
            if (!ll)
                continue;
            const [lat, lng] = ll;
            if (!Number.isFinite(lat) || !Number.isFinite(lng))
                continue;
            if (lat < minLat)
                minLat = lat;
            if (lat > maxLat)
                maxLat = lat;
            if (lng < minLng)
                minLng = lng;
            if (lng > maxLng)
                maxLng = lng;
        }
        const sw = {
            lat: minLat,
            lng: minLng
        },
        ne = {
            lat: maxLat,
            lng: maxLng
        };
        return {
            getSouthWest() {
                return sw;
            },
            getNorthEast() {
                return ne;
            }
        };
    };

    // --- Popup helper (único y compartido) ---
    function _openPopupAtHTML(lngLat, html, owner = null) {
        if (!_popup)
            _popup = new maplibregl.Popup({
                closeButton: true,
                closeOnClick: true
            });
        _popup.setLngLat(lngLat).setHTML(html).addTo(_ml);
        // registra propietario para autocierre en remove()
        try {
            _activeOverlayPopupOwner = owner;
        } catch {}
    }

    // --- Marker (con setIcon) ---
    L.marker = ([lat, lng], opts = {}) => {
        const wrap = document.createElement('div');
        wrap.style.pointerEvents = 'auto';
        // cursor de mano y evitar que el click atraviese al canvas del mapa
        wrap.style.cursor = 'pointer';
        ['click', 'mousedown', 'mouseup', 'dblclick', 'contextmenu', 'touchstart', 'touchend'].forEach(ev => {
            wrap.addEventListener(ev, e => {
                e.stopPropagation();
            }, {
                passive: true
            });
        });

        const content = document.createElement('div');
        wrap.appendChild(content);
        function applyIcon(icn) {
            content.className = '';
            content.style.cssText = '';
            content.innerHTML = '';
            if (icn?.__type === 'divicon') {
                content.className = icn.className || '';
                if (icn.iconSize) {
                    const [w, h] = icn.iconSize;
                    content.style.width = w + 'px';
                    content.style.height = h + 'px';
                }
                content.innerHTML = icn.html || '';
                content.style.pointerEvents = 'auto';
            } else if (icn?.__type === 'icon') {
                const img = document.createElement('img');
                img.src = icn.iconUrl || '';
                const [w, h] = icn.iconSize || [24, 24];
                img.style.width = w + 'px';
                img.style.height = h + 'px';
                img.style.objectFit = 'contain';
                img.style.display = 'block';
                content.appendChild(img);
            } else {
                content.style.width = '10px';
                content.style.height = '10px';
                content.style.borderRadius = '50%';
                content.style.background = '#06f';
            }
        }
        applyIcon(opts.icon);
        const m = new maplibregl.Marker({
            element: wrap,
            anchor: 'center'
        }).setLngLat([lng, lat]);
        let _pWrap = null,
        _handlers = Object.create(null);
        function emit(ev, detail) {
            (_handlers[ev] || []).forEach(fn => {
                try {
                    fn(detail);
                } catch (e) {
                    console.error(e);
                }
            });
        }
        // Forzamos togglePopup si hay popup ligado (algunos entornos no lo hacen por defecto con elementos custom)
        wrap.addEventListener('click', e => {
            emit('click', e);
            if (!_pWrap)
                return;

            const isOpen = !!(_pWrap.__p && _pWrap.__p._map);
            if (isOpen) {
                // estaba abierto → ciérralo (y ya)
                try {
                    m.togglePopup();
                } catch {}
                return;
            }

            // estaba cerrado → cierra los demás y ábrelo
            try {
                map?.closePopup?.();
            } catch {}
            try {
                m.togglePopup();
            } catch {}
        });
        const api = {
            __ml_type: 'marker',
            __marker: m,
            __added: false,
            options: {
                ...(opts || {})
            },
            addTo() {
                m.addTo(_ml);
                api.__added = true;
                return api;
            },
            remove() {
                try {
                    _pWrap?.remove();
                } catch {}
                try {
                    m.remove();
                    api.__added = false;
                } catch {}
            },
            setLatLng([la, ln]) {
                m.setLngLat([ln, la]);
                return api;
            },
            getLatLng() {
                const p = m.getLngLat();
                return {
                    lat: p.lat,
                    lng: p.lng
                };
            },
            setIcon(icn) {
                applyIcon(icn);
                return api;
            },
            bindPopup(htmlOrPopup) {
                if (htmlOrPopup?.__isLeafletPopupShim) {
                    _pWrap = htmlOrPopup;
                    m.setPopup(_pWrap.__p);
                } else {
                    const p = new maplibregl.Popup({
                        closeButton: true,
                        closeOnClick: true
                    });
                    p.setHTML(String(htmlOrPopup ?? ''));
                    _pWrap = makePopupWrapper(p);
                    m.setPopup(p);
                }
                return api;
            },
            getPopup() {
                return _pWrap;
            },
            openPopup() {
                // NEW: abrir sólo si está cerrado (no toggle)
                if (_pWrap) {
                    if (!m._map)
                        m.addTo(_ml);
                    const isOpen = !!(_pWrap.__p && _pWrap.__p._map);
                    if (!isOpen) {
                        m.togglePopup();
                    }
                }
                return api;
            },
            closePopup() {
                try {
                    _pWrap?.remove();
                } catch {}
                return api;
            },
            setZIndexOffset(z) {
                wrap.style.zIndex = z;
                return api;
            },
            on(event, handler) {
                (_handlers[event] ??= []).push(handler);
                return api;
            },
            off(event, handler) {
                if (!_handlers[event])
                    return api;
                _handlers[event] = _handlers[event].filter(h => h !== handler);
                return api;
            }
        };
        return api;
    };

    // util: impedir que los eventos de los handles burbujeen al mapa
    function _stopMapClicks(el) {
        ['click', 'dblclick', 'contextmenu'].forEach(ev => {
            el.addEventListener(ev, e => e.stopPropagation(), {
                capture: false
            });
        });
    }

    // --- Popup wrapper con setContent ---
    function makePopupWrapper(p) {
        const w = {
            __isLeafletPopupShim: true,
            __p: p,
            __register: (() => {
                try {
                    _allPopups.add(p);
                } catch {}
            })(),
            setLatLng([lat, lng]) {
                p.setLngLat([lng, lat]);
                return w;
            },
            setContent(html) {
                p.setHTML(html);
                return w;
            },
            openOn() {
                try {
                    _allPopups.add(p);
                } catch {}
                p.addTo(_ml);
                return w;
            },
            addTo() {
                try {
                    _allPopups.add(p);
                } catch {}
                p.addTo(_ml);
                return w;
            },
            remove() {
                try {
                    p.remove();
                } catch {}
                try {
                    _allPopups.delete(p);
                } catch {}
                return w;
            }
        };
        return w;
    }
    L.popup = (options = {}) => makePopupWrapper(new maplibregl.Popup({
            closeButton: true,
            closeOnClick: true,
            ...options
        }));

    // Util común
    const R_EARTH = 6371000;
    const toRad = (d) => d * Math.PI / 180;
    const toDeg = (r) => r * 180 / Math.PI;

    // === Proyección WebMercator (metros) + simplificación RDP ===
    const R_MERC = 6378137; // radio esférico para mercator
    function projectMercator(lng, lat) {
        const x = R_MERC * toRad(lng);
        const y = R_MERC * Math.log(Math.tan(Math.PI / 4 + toRad(lat) / 2));
        return [x, y];
    }
    function metersPerPixelAtLat(lat, z) {
        const equatorMpp = 40075016.68557849 / (256 * Math.pow(2, z));
        return equatorMpp * Math.cos(toRad(lat));
    }
    // RDP iterativo: pts = [[x,y], ...], devuelve boolean[] keep
    function rdpKeepMask(pts, epsilon) {
        const n = pts.length;
        if (n <= 2)
            return new Array(n).fill(true);
        const stack = [[0, n - 1]];
        const keep = new Array(n).fill(false);
        keep[0] = keep[n - 1] = true;
        const eps2 = epsilon * epsilon;

        while (stack.length) {
            const [a, b] = stack.pop();
            let idx = -1,
            maxDist = 0;
            const [ax, ay] = pts[a],
            [bx, by] = pts[b];
            const dx = bx - ax,
            dy = by - ay;
            const denom = dx * dx + dy * dy || 1e-12;
            for (let i = a + 1; i > b ? false : i < b; i++) {
                const [px, py] = pts[i];
                // distancia al segmento AB
                let t = ((px - ax) * dx + (py - ay) * dy) / denom;
                t = Math.max(0, Math.min(1, t));
                const qx = ax + t * dx,
                qy = ay + t * dy;
                const dd = (px - qx) * (px - qx) + (py - qy) * (py - qy);
                if (dd > maxDist) {
                    maxDist = dd;
                    idx = i;
                }
            }
            if (maxDist > eps2 && idx >= 0) {
                keep[idx] = true;
                stack.push([a, idx], [idx, b]);
            }
        }
        return keep;
    }
    function simplifyLatLngsRDP(latlngs, epsilonMeters, hardCap = 1500) {
        const n = latlngs?.length || 0;
        if (n <= 2)
            return latlngs || [];
        // proyecta
        const proj = new Array(n);
        for (let i = 0; i < n; i++) {
            const [la, ln] = latlngs[i];
            proj[i] = projectMercator(ln, la);
        }
        const keep = rdpKeepMask(proj, epsilonMeters);
        const out = [];
        for (let i = 0; i < n; i++)
            if (keep[i])
                out.push(latlngs[i]);

        // Decimación suave si aún quedan demasiados
        if (out.length > hardCap) {
            const step = Math.ceil(out.length / hardCap);
            const dec = [];
            for (let i = 0; i < out.length; i += step)
                dec.push(out[i]);
            if (dec[dec.length - 1] !== out[out.length - 1])
                dec.push(out[out.length - 1]);
            return dec;
        }
        return out;
    }

    // --- Polyline con lineMetrics seguro y repintado determinista
    L.polyline = (latlngs = [], options = {}) => {
        const id = `ll-${Date.now()}-${Math.random().toString(36).slice(2)}`;
        let _alive = true;
        let original = Array.isArray(latlngs) ? latlngs : [];
        let simplified = original;
        let _lastZoomBucket = null;
        let _lastSetRef = 0;

        const toCoords = (arr) => arr.map(([la, ln]) => [ln, la]);
        const srcData = () => ({
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: toCoords(simplified)
            },
            properties: {}
        });
        let _popupHTML = null,
        _popupWrap = null,
        _handlers = Object.create(null);
        let _added = false,
        _dirty = false;

        // evitar listeners duplicados
        let _onZoom = null;
        let _zoomBound = false;

        // NUEVO: recordamos si la source tiene lineMetrics habilitado
        let _srcHasLineMetrics = false;

        // refs para desuscripción de eventos del layer
        let _layerHandlers = null;
        let _unbindLayer = null;

        const opts = {
            color: options.color ?? '#3388ff',
            weight: options.weight ?? 3,
            opacity: options.opacity ?? 1,
            lineGradient: options.lineGradient ?? null,
            interactive: options.interactive ?? false,
            simplifyPx: options.simplifyPx ?? 1.5,
            simplifyHardCap: options.simplifyHardCap ?? 1800,
            autoAdd: options.autoAdd !== false,
            ...options
        };

        function applyLinePaint() {
            if (!_ml?.getLayer?.(id))
                return;
            try {
                // Quita cualquier gradiente previo
                _ml.setPaintProperty(id, 'line-gradient', null);
            } catch (_) {}
            try {
                // Reaplica color/ancho/opacidad SIEMPRE
                _ml.setPaintProperty(id, 'line-color', opts.color ?? '#3388ff');
                _ml.setPaintProperty(id, 'line-width', Number.isFinite(opts.weight) ? opts.weight : 3);
                _ml.setPaintProperty(id, 'line-opacity', opts.opacity ?? 1);
            } catch (e) {
                console.warn('applyLinePaint(base):', e);
            }
            // Sólo aplica gradiente si la source tiene lineMetrics
            if (opts.lineGradient && _srcHasLineMetrics) {
                try {
                    _ml.setPaintProperty(id, 'line-gradient', opts.lineGradient);
                } catch (e) {
                    console.warn('applyLinePaint(gradient):', e);
                }
            }
        }

        function zoomBucket() {
            return Math.floor(_ml?.getZoom?.() ?? 0);
        }
        function recomputeSimplified(force = false) {
            if (!original || original.length <= 2) {
                simplified = original;
                return;
            }
            const zb = zoomBucket();
            if (!force && zb === _lastZoomBucket)
                return;
            _lastZoomBucket = zb;

            // usa lat media para m/px
            let avgLat = 0,
            c = 0;
            for (const p of original) {
                if (p) {
                    avgLat += p[0];
                    c++;
                }
            }
            avgLat = c ? (avgLat / c) : 0;

            const mpp = metersPerPixelAtLat(avgLat, zb || 0);
            const epsilonM = Math.max(0, opts.simplifyPx) * (mpp || 1);
            simplified = simplifyLatLngsRDP(original, epsilonM, opts.simplifyHardCap);
        }

        const add = () => {
            if (!_alive)
                return;
            _layerHandlers = null;
            _unbindLayer = null;
            recomputeSimplified(true);
            if (!_ml.getSource(id)) {
                try {
                    _ml.addSource(id, {
                        type: 'geojson',
                        data: srcData(),
                        lineMetrics: true
                    });
                    _srcHasLineMetrics = true;
                } catch (e) {
                    console.warn('GeoJSON lineMetrics no disponible, continúo sin ello:', e);
                    _ml.addSource(id, {
                        type: 'geojson',
                        data: srcData()
                    });
                    _srcHasLineMetrics = false;
                }
            }
            if (!_ml.getLayer(id)) {
                _ml.addLayer({
                    id,
                    type: 'line',
                    source: id,
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': opts.color,
                        'line-width': opts.weight,
                        'line-opacity': opts.opacity
                    }
                });
            }

            // Reaplica pintura de forma determinista (y gradiente sólo si procede)
            applyLinePaint();

            // Garantiza que queda por encima de las bases
            try {
                _ml.moveLayer(id);
            } catch (_) {}

            // === Eventos SIEMPRE (handler tolera bindPopup tardío) + compuerta ===
            const layerClick = (e) => {
                const willHandle = !!(_popupWrap || _popupHTML || opts.interactive);
                if (!willHandle)
                    return; // no bloquear; deja pasar a capas de abajo
                if (_gateLayerClick(e))
                    return; // ya gestionado por otra capa
                (_handlers['click'] || []).forEach(fn => {
                    try {
                        fn(e);
                    } catch (err) {
                        console.error(err);
                    }
                });
                if (_popupWrap) {
                    _popupWrap.setLatLng([e.lngLat.lat, e.lngLat.lng]).openOn(map);
                } else if (_popupHTML) {
                    _openPopupAtHTML([e.lngLat.lng, e.lngLat.lat], _popupHTML, api);
                }
            };
            const onEnter = () => {
                const willHandle = !!(_popupWrap || _popupHTML || opts.interactive);
                if (willHandle)
                    _ml.getCanvas().style.cursor = 'pointer';
                (_handlers['mouseenter'] || []).forEach(fn => {
                    try {
                        fn();
                    } catch (err) {
                        console.error(err);
                    }
                });
            };
            const onLeave = () => {
                _ml.getCanvas().style.cursor = '';
                (_handlers['mouseleave'] || []).forEach(fn => {
                    try {
                        fn();
                    } catch (err) {
                        console.error(err);
                    }
                });
            };

            _layerHandlers = {
                click: layerClick,
                enter: onEnter,
                leave: onLeave
            };
            _unbindLayer = bindLayerEvents(id, _layerHandlers);

            if (!_zoomBound) {
                _onZoom = () => {
                    scheduleRefresh(true);
                };
                _ml.on('zoom', _onZoom);
                _zoomBound = true;
            }

            _added = true;
        };

        function _ensureAdded() {
            if (!_alive)
                return;
            const ok = _ml?.getSource?.(id) && _ml?.getLayer?.(id);
            if (_added && ok)
                return;
            whenStyleReady(add);
        }

        // throttle setData a 1/frame
        function refreshSourceNow(force = false) {
            _ensureAdded();
            recomputeSimplified(force);
            const s = _ml.getSource(id);
            if (s)
                s.setData(srcData());
        }
        function scheduleRefresh(force = false) {
            if (_dirty && !force)
                return;
            _dirty = true;
            const ref = ++_lastSetRef;
            requestAnimationFrame(() => {
                if (ref !== _lastSetRef)
                    return;
                _dirty = false;
                refreshSourceNow(force);
            });
        }

        function emit(ev, detail) {
            (_handlers[ev] || []).forEach(fn => {
                try {
                    fn(detail);
                } catch (e) {
                    console.error(e);
                }
            });
        }

        const api = {
            __ml_type: 'line',
            __ml_id: id,
            __added: false,
            options: opts,
            __readd() {
                try {
                    _ensureAdded();
                    // al reinsertar, reaplica pintura y refresca datos (sin props internas)
                    whenStyleReady(() => applyLinePaint());
                    scheduleRefresh(true);
                } catch {}
            },
            addTo() {
                whenStyleReady(() => {
                    add();
                    api.__added = true;
                });
                return api;
            },
            remove() {
                try {
                    _vectorOverlays.delete(api);
                } catch {}
                // autocierra si era el propietario del popup
                try {
                    if (_activeOverlayPopupOwner === api) {
                        _popup?.remove();
                        _activeOverlayPopupOwner = null;
                    }
                } catch {}
                _alive = false;
                if (_zoomBound && _onZoom) {
                    try {
                        _ml.off('zoom', _onZoom);
                    } catch {}
                    _zoomBound = false;
                }
                // Desuscripción de eventos de layer
                try {
                    _unbindLayer?.();
                } catch {}
                _unbindLayer = null;
                _layerHandlers = null;

                try {
                    if (_ml.getLayer(id))
                        _ml.removeLayer(id);
                } catch {};
                try {
                    if (_ml.getSource(id))
                        _ml.removeSource(id);
                } catch {};
                _added = false;
                api.__added = false;
                return api;
            },
            setLatLngs(newLatLngs) {
                original = newLatLngs || [];
                _lastZoomBucket = null;
                scheduleRefresh(true);
                return api;
            },
            setStyle({
                color,
                weight,
                opacity,
                lineGradient
            } = {}) {
                _ensureAdded();
                if (color != null) {
                    opts.color = color;
                    api.options.color = color;
                }
                if (weight != null) {
                    opts.weight = weight;
                    api.options.weight = weight;
                }
                if (opacity != null) {
                    opts.opacity = opacity;
                    api.options.opacity = opacity;
                }
                if (lineGradient !== undefined) {
                    opts.lineGradient = lineGradient;
                    api.options.lineGradient = lineGradient;
                }
                whenStyleReady(() => applyLinePaint());
                return api;
            },
            bindPopup(htmlOrPopup) {
                if (htmlOrPopup?.__isLeafletPopupShim) {
                    _popupWrap = htmlOrPopup;
                    _popupHTML = null;
                } else {
                    _popupHTML = String(htmlOrPopup ?? '');
                    _popupWrap = null;
                }
                return api;
            },
            // === NUEVO: API de popup para compatibilidad con Leaflet ===
            getPopup() {
                return {
                    getContent() {
                        return _popupHTML || '';
                    },
                    setContent(html) {
                        _popupHTML = String(html ?? '');
                        try {
                            if (_activeOverlayPopupOwner === api && _popup) {
                                _popup.setHTML(_popupHTML);
                            }
                        } catch {}
                        return this;
                    }
                };
            },
            // Método directo (atajo) usado por tu código de zonas
            setPopupContent(html) {
                _popupHTML = String(html ?? '');
                try {
                    if (_activeOverlayPopupOwner === api && _popup) {
                        _popup.setHTML(_popupHTML);
                    }
                } catch {}
                return api;
            },
            openPopup() {
                _ensureAdded();
                const coords = toCoords(simplified || original || []);
                if (!coords.length)
                    return api;
                const mid = coords[Math.floor(coords.length / 2)];
                if (_popupWrap)
                    _popupWrap.setLatLng([mid[1], mid[0]]).openOn(map);
                else
                    _openPopupAtHTML(mid, _popupHTML || '', api);
                return api;
            },
            closePopup() {
                try {
                    if (_activeOverlayPopupOwner === api) {
                        _popup?.remove();
                        _activeOverlayPopupOwner = null;
                    }
                } catch {}
                return api;
            },
            on(ev, fn) {
                (_handlers[ev] ??= []).push(fn);
                return api;
            },
            off(ev, fn) {
                if (!_handlers[ev])
                    return api;
                _handlers[ev] = _handlers[ev].filter(h => h !== fn);
                return api;
            }
        };

        try {
            _vectorOverlays.add(api);
        } catch {}

        if (opts.autoAdd !== false) {
            whenStyleReady(() => {
                add();
                api.__added = true;
            });
        }

        return api;
    };

    // --- Circle con options + edición + compat + _ensureAdded() + AUTO-ADD + throttle + menos vértices ---
    L.circle = ([lat, lng], {
        radius = 100,
        color = '#3388ff',
        weight = 2,
        fillColor = '#3388ff',
        fillOpacity = 0.2,
        autoAdd = true
    } = {}) => {
        let _alive = true;
        let _lat = lat,
        _lng = lng,
        _radius = radius;
        const id = `lc-${Date.now()}-${Math.random().toString(36).slice(2)}`;

        const opts = {
            color: color ?? '#3388ff',
            weight: Math.max(1, weight ?? 2),
            fillColor: fillColor ?? '#3388ff',
            fillOpacity: fillOpacity ?? 0.2,
            autoAdd
        };

        // zoom listener control
        let _onZoom = null;
        let _circleZoomHooked = false;

        const srcData = () => ({
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [circlePoly()]
            },
            properties: {}
        });
        let _popupHTML = null,
        _popupWrap = null,
        _handlers = Object.create(null);
        let _centerHandle = null,
        _radiusHandle = null;
        let _added = false,
        _dirty = false;
        // refs para desuscribir handlers de layers del círculo
        let _circleHandlers = null;
        let _unbindCircle = null;

        // === NUEVO: edición permitida (sin mostrar handles por defecto)
        let _editAllowed = false;

        // === NUEVO: estado de drag y control de re-clic post-drag
        let _dragging = false;
        let _lastDragEnd = 0;
        const DRAG_CLICK_SUPPRESS_MS = 300;

        function circleSteps() {
            const z = _ml?.getZoom?.() ?? 10;
            const rkm = _radius / 1000;
            let s = 12 + Math.round(z * 2 + Math.log2(rkm + 1) * 3);
            return Math.max(16, Math.min(80, s));
        }
        const circlePoly = () => {
            const steps = circleSteps();
            const d = _radius / R_EARTH;
            const cl = toRad(_lat),
            cln = toRad(_lng);
            const coords = [];
            for (let i = 0; i <= steps; i++) {
                const br = 2 * Math.PI * i / steps;
                const la2 = Math.asin(Math.sin(cl) * Math.cos(d) + Math.cos(cl) * Math.sin(d) * Math.cos(br));
                const ln2 = cln + Math.atan2(Math.sin(br) * Math.sin(d) * Math.cos(cl), Math.cos(d) - Math.sin(cl) * Math.sin(la2));
                coords.push([toDeg(ln2), toDeg(la2)]);
            }
            return coords;
        };

        const add = () => {
            if (!_alive)
                return;

            // limpiar restos anteriores del mismo id (por cambios de estilo)
            if (_ml.getLayer(id + '-line'))
                try {
                    _ml.removeLayer(id + '-line');
                } catch (e) {}
            if (_ml.getLayer(id + '-fill'))
                try {
                    _ml.removeLayer(id + '-fill');
                } catch (e) {}
            if (_ml.getSource(id))
                try {
                    _ml.removeSource(id);
                } catch (e) {}

            _ml.addSource(id, {
                type: 'geojson',
                data: srcData()
            });
            _ml.addLayer({
                id: id + '-fill',
                type: 'fill',
                source: id,
                layout: {
                    visibility: 'visible'
                },
                paint: {
                    'fill-color': opts.fillColor,
                    'fill-opacity': opts.fillOpacity,
                    'fill-antialias': true
                }
            });
            _ml.addLayer({
                id: id + '-line',
                type: 'line',
                source: id,
                layout: {
                    visibility: 'visible'
                },
                paint: {
                    'line-color': opts.color,
                    'line-width': opts.weight,
                    'line-opacity': 1
                }
            });

            // subir a lo más alto (mantener línea por encima del fill)
            try {
                _ml.moveLayer(id + '-fill');
                _ml.moveLayer(id + '-line');
            } catch (e) {}

            const clicker = (e) => {
                // Mientras se arrastra, o inmediatamente después, NO abrir popup
                if (_dragging)
                    return;
                if (Date.now() - _lastDragEnd < DRAG_CLICK_SUPPRESS_MS)
                    return;
                // No aplicamos compuerta aquí: acumulamos candidatos y resolvemos por menor radio
                const ll = [e.lngLat.lng, e.lngLat.lat];
                _queueCircleClick(
                    e,
                    () => {
                    emit('click', e);
                    if (_popupWrap)
                        _popupWrap.setLatLng([ll[1], ll[0]]).openOn(map);
                    else if (_popupHTML)
                        _openPopupAtHTML(ll, _popupHTML, api);
                    // NUEVO: este círculo pasa a ser el activo para edición
                    _setActiveEditableCircle(api);
                },
                    _radius);
            };
            const onEnterFill = () => {
                const willHandle = !!(_popupWrap || _popupHTML || opts.interactive);
                if (willHandle)
                    _ml.getCanvas().style.cursor = 'pointer';
            };
            const onLeaveFill = () => {
                _ml.getCanvas().style.cursor = '';
            };

            _circleHandlers = {
                click: clicker,
                enter: onEnterFill,
                leave: onLeaveFill
            };
            // bind en fill y en line
            const unbindFill = bindLayerEvents(id + '-fill', _circleHandlers);
            const unbindLine = bindLayerEvents(id + '-line', {
                click: clicker
            });
            _unbindCircle = () => {
                try {
                    unbindFill();
                } catch {}
                try {
                    unbindLine();
                } catch {}
            };

            // reaproxima con menos vértices al cambiar el zoom (una sola vez)
            if (!_circleZoomHooked) {
                _onZoom = () => scheduleRefresh();
                _ml.on('zoom', _onZoom);
                _circleZoomHooked = true;
            }
            _added = true;
        };
        function _ensureAdded() {
            if (!_alive)
                return;
            const ok = _ml?.getSource?.(id) && _ml?.getLayer?.(id + '-fill') && _ml?.getLayer?.(id + '-line');
            if (_added && ok)
                return;
            whenStyleReady(add);
        }

        function refreshSourceNow() {
            _ensureAdded();
            const s = _ml.getSource(id);
            if (s)
                s.setData(srcData());
        }
        function scheduleRefresh() {
            if (_dirty)
                return;
            _dirty = true;
            requestAnimationFrame(() => {
                _dirty = false;
                refreshSourceNow();
            });
        }

        function emit(ev, detail) {
            (_handlers[ev] || []).forEach(fn => {
                try {
                    fn(detail);
                } catch (e) {
                    console.error(e);
                }
            });
        }

        // >>> helper de anclaje hacia el norte
        function northOffsetLatLng(fraction = 0.6) {
            const f = Math.max(0, Math.min(1, fraction));
            const dLat = toDeg((_radius * f) / R_EARTH); // f·radio hacia el norte
            return {
                lat: _lat + dLat,
                lng: _lng
            };
        }

        // === NUEVO: helpers para montar/desmontar handles bajo demanda
        function mountHandles() {
            if (_centerHandle || _radiusHandle)
                return;

            // helper: ocultar popup si este círculo es el dueño actual (sin disparar efectos de cierre)
            function _hideOverlayPopupIfMine() {
                try {
                    if (_popupWrap) {
                        try {
                            _popupWrap.remove();
                        } catch {}
                    }
                    if (_activeOverlayPopupOwner === api) {
                        _suppressPopupCloseSideEffects = true;
                        _popup?.remove();
                    }
                } catch {}
            }

            const centerEl = document.createElement('span');
            centerEl.className = 'ml-handle ml-handle--move';
            _centerHandle = new maplibregl.Marker({
                element: centerEl,
                draggable: true,
                anchor: 'center'
            })
                .setLngLat([_lng, _lat]).addTo(_ml);
            _stopMapClicks(centerEl);
            try {
                _centerHandle.getElement().style.cursor = 'move';
            } catch {}

            _centerHandle.on('dragstart', () => {
                _dragging = true;
                _setActiveEditableCircle?.(api);
                _hideOverlayPopupIfMine(); // ocultar popup mientras se arrastra
                emit('editable:vertex:dragstart');
            });
            _centerHandle.on('dragend', (e) => {
                const { lng, lat } = e.target.getLngLat();
                _lng = lng;
                _lat = lat;
                scheduleRefresh();
                updateRadiusHandle();
                _dragging = false;
                _lastDragEnd = Date.now();
                api.openPopupAtNorth(0.6);
                emit('editable:vertex:dragend');
            });
            _centerHandle.on('drag', (e) => {
                const { lng, lat } = e.target.getLngLat();
                _lng = lng;
                _lat = lat;
                scheduleRefresh();
                updateRadiusHandle();
            });

            const radiusEl = document.createElement('span');
            radiusEl.className = 'ml-handle ml-handle--radius';
            _radiusHandle = new maplibregl.Marker({
                element: radiusEl,
                draggable: true,
                anchor: 'center'
            })
                .setLngLat([_lng, _lat]).addTo(_ml);
            _stopMapClicks(radiusEl);
            updateRadiusHandle();

            _radiusHandle.on('dragstart', () => {
                _dragging = true;
                _setActiveEditableCircle?.(api);
                _hideOverlayPopupIfMine(); // ocultar popup mientras se arrastra
                emit('editable:vertex:dragstart');
            });
            _radiusHandle.on('dragend', (e) => {
                const { lng, lat } = e.target.getLngLat();
                const dxm = getDistanceFromLatLonInMeters(_lat, _lng, lat, lng);
                _radius = Math.max(1, dxm);
                scheduleRefresh();
                updateRadiusHandle();
                _dragging = false;
                _lastDragEnd = Date.now();
                api.openPopupAtNorth(0.6);
                emit('editable:vertex:dragend');
            });
            _radiusHandle.on('drag', (e) => {
                const { lng, lat } = e.target.getLngLat();
                const dxm = getDistanceFromLatLonInMeters(_lat, _lng, lat, lng);
                _radius = Math.max(1, dxm);
                scheduleRefresh();
            });
        }
        function unmountHandles() {
            try {
                _centerHandle?.remove();
            } catch {};
            _centerHandle = null;
            try {
                _radiusHandle?.remove();
            } catch {};
            _radiusHandle = null;
        }

        const api = {
            __ml_type: 'circle',
            __ml_id: id,
            __added: false,
            options: opts,
            __readd() {
                try {
                    _ensureAdded();
                    scheduleRefresh();
                } catch {}
            },
            addTo() {
                whenStyleReady(() => {
                    add();
                    api.__added = true;
                });
                return api;
            },
            remove() {
                try {
                    _vectorOverlays.delete(api);
                } catch {}
                // autocierra si este círculo tenía abierto el popup
                try {
                    if (_activeOverlayPopupOwner === api) {
                        _popup?.remove();
                        _activeOverlayPopupOwner = null;
                    }
                } catch {}
                // Si era el activo de edición, límpialo
                if (typeof _setActiveEditableCircle === 'function') {
                    if (_activeEditCircle === api)
                        _setActiveEditableCircle(null);
                }
                _alive = false; // marca como “muerto”
                if (_circleZoomHooked && _onZoom) {
                    try {
                        _ml.off('zoom', _onZoom);
                    } catch {}
                    _circleZoomHooked = false;
                }
                // Desuscripción de eventos de layers del círculo
                try {
                    _unbindCircle?.();
                } catch {}
                _unbindCircle = null;
                _circleHandlers = null;

                try {
                    if (_ml.getLayer(id + '-fill'))
                        _ml.removeLayer(id + '-fill');
                } catch {};
                try {
                    if (_ml.getLayer(id + '-line'))
                        _ml.removeLayer(id + '-line');
                } catch {};
                try {
                    if (_ml.getSource(id))
                        _ml.removeSource(id);
                } catch {};
                try {
                    _centerHandle?.remove();
                } catch {};
                _centerHandle = null;
                try {
                    _radiusHandle?.remove();
                } catch {};
                _radiusHandle = null;
                _added = false;
                api.__added = false;
                return api;
            },
            setLatLng([la, ln]) {
                _lat = la;
                _lng = ln;
                _ensureAdded();
                scheduleRefresh();
                if (_centerHandle)
                    _centerHandle.setLngLat([_lng, _lat]);
                updateRadiusHandle();
                return api;
            },
            getLatLng() {
                return {
                    lat: _lat,
                    lng: _lng
                };
            },
            setRadius(r) {
                _radius = r;
                _ensureAdded();
                scheduleRefresh();
                updateRadiusHandle();
                return api;
            },
            getRadius() {
                return _radius;
            },
            getBounds() {
                const dLat = toDeg(_radius / R_EARTH);
                const dLon = toDeg(_radius / (R_EARTH * Math.max(Math.cos(toRad(_lat)), 1e-6)));
                const sw = {
                    lat: _lat - dLat,
                    lng: _lng - dLon
                },
                ne = {
                    lat: _lat + dLat,
                    lng: _lng + dLon
                };
                return {
                    getSouthWest() {
                        return sw;
                    },
                    getNorthEast() {
                        return ne;
                    }
                };
            },
            setStyle({
                color: c,
                weight: w,
                fillColor: fc,
                fillOpacity: fo
            } = {}) {
                _ensureAdded();
                if (c != null) {
                    api.options.color = c;
                    if (_ml.getLayer(id + '-line'))
                        _ml.setPaintProperty(id + '-line', 'line-color', c);
                }
                if (w != null) {
                    api.options.weight = Math.max(1, w);
                    if (_ml.getLayer(id + '-line'))
                        _ml.setPaintProperty(id + '-line', 'line-width', Math.max(1, w));
                }
                if (fc != null) {
                    api.options.fillColor = fc;
                    if (_ml.getLayer(id + '-fill'))
                        _ml.setPaintProperty(id + '-fill', 'fill-color', fc);
                }
                if (fo != null) {
                    api.options.fillOpacity = fo;
                    if (_ml.getLayer(id + '-fill'))
                        _ml.setPaintProperty(id + '-fill', 'fill-opacity', fo);
                }
                return api;
            },
            bindPopup(htmlOrPopup) {
                if (htmlOrPopup?.__isLeafletPopupShim) {
                    _popupWrap = htmlOrPopup;
                    _popupHTML = null;
                } else {
                    _popupHTML = String(htmlOrPopup ?? '');
                    _popupWrap = null;
                }
                return api;
            },
            // === API de popup para círculos (compat Leaflet) ===
            getPopup() {
                return {
                    getContent() {
                        return _popupHTML || '';
                    },
                    setContent(html) {
                        _popupHTML = String(html ?? '');
                        try {
                            if (_activeOverlayPopupOwner === api && _popup) {
                                _popup.setHTML(_popupHTML);
                            }
                        } catch {}
                        return this;
                    }
                };
            },
            // Atajo directo usado por zones.js
            setPopupContent(html) {
                _popupHTML = String(html ?? '');
                try {
                    if (_activeOverlayPopupOwner === api && _popup) {
                        _popup.setHTML(_popupHTML);
                    }
                } catch {}
                return api;
            },

            // >>> abrir popup en coordenada arbitraria
            openPopupAt([la, ln]) {
                _ensureAdded();
                // si ya es el propietario, no recolocar si ya está abierto
                try {
                    if (_activeOverlayPopupOwner === api && _popup) {
                        // sólo asegúrate de que esté en el mapa
                        if (_popupWrap)
                            _popupWrap.openOn(map);
                        // activar edición en este círculo
                        _setActiveEditableCircle(api);
                        return api;
                    }
                } catch {}
                if (_popupWrap)
                    _popupWrap.setLatLng([la, ln]).openOn(map);
                else
                    _openPopupAtHTML([ln, la], _popupHTML || '', api);
                _setActiveEditableCircle(api); // NUEVO
                return api;
            },

            // >>> abrir popup desplazado hacia el norte (por defecto 60% del radio)
            openPopupAtNorth(fraction = 0.6) {
                const p = northOffsetLatLng(fraction);
                api.openPopupAt([p.lat, p.lng]);
                _setActiveEditableCircle(api); // NUEVO
                return api;
            },

            // >>> obtener el ancla propuesto
            getPopupAnchorLatLng(fraction = 0.6) {
                return northOffsetLatLng(fraction);
            },

            // >>> sobrecarga de openPopup: detecta si viene de la tabla de zonas
            openPopup() {
                _ensureAdded();

                // no mover si ya está abierto y nos pertenece (evita que zones.js "recoloque")
                try {
                    if (_activeOverlayPopupOwner === api && _popup) {
                        if (_popupWrap)
                            _popupWrap.openOn(map);
                        _setActiveEditableCircle(api); // NUEVO
                        return api;
                    }
                } catch {}

                if (_lastPressFromZones()) {
                    const p = northOffsetLatLng(0.6);
                    if (_popupWrap)
                        _popupWrap.setLatLng([p.lat, p.lng]).openOn(map);
                    else
                        _openPopupAtHTML([p.lng, p.lat], _popupHTML || '', api);
                    _setActiveEditableCircle(api); // NUEVO
                    return api;
                }

                // comportamiento clásico: centro geométrico
                const ll = [_lng, _lat];
                if (_popupWrap)
                    _popupWrap.setLatLng([ll[1], ll[0]]).openOn(map);
                else
                    _openPopupAtHTML([ll[0], ll[1]], _popupHTML || '', api);
                _setActiveEditableCircle(api); // NUEVO
                return api;
            },

            closePopup() {
                try {
                    if (_activeOverlayPopupOwner === api) {
                        _popup?.remove();
                        _activeOverlayPopupOwner = null;
                    }
                } catch {}
                // si este círculo era el activo, desactívalo
                if (typeof _setActiveEditableCircle === 'function') {
                    if (_activeEditCircle === api)
                        _setActiveEditableCircle(null);
                }
                return api;
            },
            // estado real del popup único compartido
            isPopupOpen() {
                try {
                    return _activeOverlayPopupOwner === api;
                } catch {
                    return false;
                }
            },
            on(ev, fn) {
                (_handlers[ev] ??= []).push(fn);
                return api;
            },
            off(ev, fn) {
                if (!_handlers[ev])
                    return api;
                _handlers[ev] = _handlers[ev].filter(h => h !== fn);
                return api;
            },

            // === NUEVO: señal interna para mostrar/ocultar handles según sea el círculo activo
            __maybeUpdateHandleVisibility(active) {
                // No tocar handles durante drag para evitar referencias nulas en callbacks
                if (_dragging)
                    return;
                if (_editAllowed && active)
                    mountHandles();
                else
                    unmountHandles();
            },

            // Edición
            enableEdit() {
                _ensureAdded();
                _editAllowed = true;
                // mostrar handles sólo si este círculo es el activo
                if (typeof _setActiveEditableCircle === 'function') {
                    api.__maybeUpdateHandleVisibility(_activeEditCircle === api);
                } else {
                    // fallback por si no existe el gestor global
                    mountHandles();
                }
                return api;
            },
            disableEdit() {
                _editAllowed = false;
                unmountHandles();
                return api;
            },

            // Alias compat Leaflet.Editable
            editing: {
                enable() {
                    api.enableEdit();
                },
                disable() {
                    api.disableEdit();
                },
                enabled() {
                    return !!_editAllowed;
                } // antes era presencia de handles
            }
        };
        try {
            _vectorOverlays.add(api);
        } catch {}

        function updateRadiusHandle() {
            if (!_radiusHandle)
                return;
            const dLon = toDeg(_radius / (R_EARTH * Math.max(Math.cos(toRad(_lat)), 1e-6)));
            _radiusHandle.setLngLat([_lng + dLon, _lat]);
        }

        if (opts.autoAdd !== false) {
            whenStyleReady(() => {
                add();
                api.__added = true;
            });
        }

        return api;
    };

    window.L = L;
}

// ==== helpers ====
export function isValidCoordinates(lat, lng) {
    return Number.isFinite(lat) && Number.isFinite(lng);
}
export function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toR = (d) => d * Math.PI / 180;
    const dLat = toR(lat2 - lat1),
    dLon = toR(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(toR(lat1)) * Math.cos(toR(lat2)) * (Math.sin(dLon / 2) ** 2);
    return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ==== teardown ====
export function destroyMap() {
    // abort geocoder en curso
    try {
        _geocodeAbort?.abort();
    } catch {}
    _geocodeAbort = null;

    // limpiar colas y colecciones
    try {
        _readyQueue.length = 0;
    } catch {}
    try {
        _vectorOverlays.clear();
    } catch {}

    // popups/controles
    try {
        _popup?.remove();
    } catch {}
    // limpiar y vaciar todos los popups registrados
    try {
        for (const p of _allPopups)
            p.remove();
    } catch {}
    try {
        _allPopups.clear();
    } catch {}
    _popup = null;

    // >>> desuscribir rastreadores de origen UI
    try {
        if (_onUiPointer)
            document.removeEventListener('pointerdown', _onUiPointer, true);
    } catch {}
    try {
        if (_onUiClick)
            document.removeEventListener('click', _onUiClick, true);
    } catch {}
    _onUiPointer = _onUiClick = null;

    // listeners globales
    try {
        if (_onResize)
            window.removeEventListener('resize', _onResize);
    } catch {}
    try {
        if (_onVis)
            document.removeEventListener('visibilitychange', _onVis);
    } catch {}
    _onResize = _onVis = null;

    // NEW: quitar el listener del poll de unidades y parar el poll
    try {
        if (_onUnitsVis)
            document.removeEventListener('visibilitychange', _onUnitsVis);
    } catch {}
    _onUnitsVis = null;

    // polling unidades
    try {
        if (_unitsPollId)
            clearInterval(_unitsPollId);
    } catch {}
    _unitsPollId = null;

    // limpiar estilos inyectados (si son exclusivos de este mapa)
    try {
        document.getElementById('ml-ui-overrides')?.remove();
    } catch {}
    try {
        document.getElementById('mlgeoc-mincss')?.remove();
    } catch {}

    // geocoder: desmontar de forma segura
    try {
        if (_geocoderCtrl?.onRemove)
            _geocoderCtrl.onRemove(_ml);
    } catch {}
    try {
        _geocoderEl?.remove();
    } catch {}
    try {
        // por si acaso alguien cambió a addControl en el futuro
        if (_geocoderCtrl && _ml)
            _ml.removeControl?.(_geocoderCtrl);
    } catch {}
    _geocoderCtrl = null;
    _geocoderEl = null;

    // refs de UI/estado
    _views = {};
    _searchCtlRef = null;
    _scaleCtrl = null;

    // mapa
    try {
        _ml?.remove();
    } catch {}
    _ml = null;
    map = null;
}
