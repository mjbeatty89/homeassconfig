// ./charts/positions.js
// Gráfico segmentado en tramos de 4/6/8/12 horas en el TAB "Chart"
// - Rango global: 00:00 (primer día) → 23:59 (último día)
// - Horas fuera del rango real de datos: en blanco
// - Cursor pointer al pasar por la gráfica
// - Sin padding/gutter extra: evita huecos a izquierda/derecha
// - Cabeceras:
//     * Fecha (solo en el primer tramo del día) usando formatDate()
//     * Horas (debajo de cada tramo): inicio HH:mm a la izquierda y fin HH:mm a la derecha
// - Separadores:
//     * Línea gris fina pegada al gráfico (encima de las horas) en TODOS los tramos
//     * Línea azul de fin de día (1px) debajo de las horas en el ÚLTIMO tramo de cada día
// - Marcador:
//     * Triángulo arriba del gráfico, apuntando hacia ABAJO, con franja reservada fija (sin cambios dinámicos)
//     * La línea vertical se mete dentro del triángulo hasta su centro
//     * Triángulo y línea usan el mismo color que fecha/horas
// - Click en el gráfico: selecciona la fila más cercana en la tabla
//
// Uso: renderPositionsChart(positions, { segmentHours: 6, graphHeight: 50 })

import { handleZonePosition, getZoneStyleById } from '../screens/zones.js';
import { toRgba } from '../utils/dialogs.js';
import { formatDate } from '../globals.js';

const ALPHA = 0.3;

// Colores
const COLOR_DARK_BLUE = '#003366';
const COLOR_SEP_GRAY  = '#d1d5db'; // gris fino para separador pegado al gráfico

// Alturas (en px)
const DATE_HDR_H               = 18;
const DATE_TOP_PAD             = 4;
const DATE_BOTTOM_GAP          = 6;
const INTRA_DAY_TOP_GAP        = 0;
const TIME_FOOTER_H            = 12;
const DAY_END_EXTRA_FOOTER_PAD = 18;

// Marcador (triángulo ARRIBA del gráfico, apuntando hacia ABAJO)
const MARKER_TRI_W   = 10;
const MARKER_TRI_H   = 10;
const MARKER_STRIP_H = 10; // franja fija del marcador

// Altura base fija del área de gráfico
const DEFAULT_GRAPH_H = 50;

// Estado
let stackHost = null;
let scrollContainer = null; // se resolverá al contenedor desplazable real
let panels = [];            // [{ canvas, ctx, t0, t1, labelEnd, isDayStart, isDayEnd, _topGap, _footerH }]
let resizeObs = null;
let containerResizeObs = null;

let lastData = null; // { positions, opts, dataT0, dataT1, vmax, rangeStart, rangeEnd }
let clickBound = false;

/** Inicializa/garantiza el host de la cabecera segmentada en el TAB Chart */
export function initPositionsChart() {
  const chartSlot = document.getElementById('positions-chart');
  const chartContainer = document.querySelector('#chart .table-container');
  const positionsContainer = document.querySelector('#positions .table-container');

  // Preferimos el contenedor del Tab Chart si existe
  scrollContainer = chartContainer || positionsContainer || scrollContainer || null;

  const hostParent = chartSlot || scrollContainer;
  if (!hostParent) return;

  if (!stackHost) {
    stackHost = document.createElement('div');
    stackHost.className = 'positions-chart-stack';
    stackHost.style.boxSizing = 'border-box';
    stackHost.style.cursor = 'default';
    stackHost.style.margin = '0';
    hostParent.prepend(stackHost);

    // Reserva del thead solo en Positions (para sticky thead)
    if (scrollContainer === positionsContainer) {
      positionsContainer.classList.add('chart-has-header');
    }

    if (!resizeObs) {
      resizeObs = new ResizeObserver(() => {
        if (lastData) drawAll(lastData.positions, lastData.opts || {});
      });
      resizeObs.observe(stackHost);
    }
  }

  // Vincula listeners al scroller real (puede cambiar si cambian pestañas)
  bindRealScroller();

  updateHeaderMetrics();
  ensureClickHandlers();
}

export function onChartTabShown() {
  initPositionsChart();   // asegura host
  bindRealScroller();     // re-resuelve el scroller real si cambió con el tab
  updateHeaderMetrics();  // recalcula métricas de cabecera

  const t = toTsMs(lastData?.opts?.markerTs);
  if (Number.isFinite(t)) {
    afterReflow(() => ensureMarkerPanelInView(t)); // centra el tramo del marcador
  }
}

/** Limpia por completo la cabecera y el estado gráfico */
export function clearPositionsChart() {
  if (!stackHost) return;
  stackHost.innerHTML = '';
  panels = [];
  lastData = null;
  stackHost.style.cursor = 'default';
  updateHeaderMetrics();
}

/** Renderiza posiciones. opts puede llevar { segmentHours: 4|6|8|12, markerTs, graphHeight } */
export function renderPositionsChart(positions, opts = {}) {
  initPositionsChart();
  if (!stackHost) return;

  if (!Array.isArray(positions) || positions.length < 1) {
    clearPositionsChart();
    return;
  }

  const data = [...positions].sort(
    (a, b) => +new Date(a.last_updated) - +new Date(b.last_updated)
  );

  // Extremos de datos (respetando posible stop_start/stop_end)
  const startOf = (p) => {
    const tLU = +new Date(p.last_updated);
    const tSS = (p.stop && p.stop_start) ? +new Date(p.stop_start) : NaN;
    return Number.isFinite(tSS) ? Math.min(tLU, tSS) : tLU;
  };
  const endOf = (p) => {
    const tLU = +new Date(p.last_updated);
    const tSE = (p.stop && p.stop_end) ? +new Date(p.stop_end) : NaN;
    return Number.isFinite(tSE) ? Math.max(tLU, tSE) : tLU;
  };

  let dataT0 = startOf(data[0]);
  let dataT1 = endOf(data[0]);
  for (let i = 1; i < data.length; i++) {
    dataT0 = Math.min(dataT0, startOf(data[i]));
    dataT1 = Math.max(dataT1, endOf(data[i]));
  }

  // Rango global segmentado: 00:00 primer día → 23:59:59.999 último día (hora local)
  const rangeStart = floorToLocalMidnight(new Date(dataT0));
  const rangeEnd   = setLocalTime(new Date(dataT1), 23, 59, 59, 999);

  const segH = normalizeSegHours(opts.segmentHours);
  const segments = buildSegments(rangeStart, rangeEnd, segH);

  // vmax global
  let vmax = 0;
  for (const p of data) {
    const v = Number(p?.attributes?.speed) || 0;
    if (v > vmax) vmax = v;
  }
  if (!Number.isFinite(vmax) || vmax <= 0) vmax = 1;

  lastData = { positions: data, opts, dataT0, dataT1, vmax, rangeStart: +rangeStart, rangeEnd: +rangeEnd };

  // Construcción/actualización de paneles con marcas de inicio y fin de día
  ensurePanelsWithDayMarkers(segments);

  // Cursor “pointer” cuando hay datos
  stackHost.style.cursor = 'pointer';
  for (const p of panels) p.canvas.style.cursor = 'pointer';

  // Dibujar todos los paneles
  drawAll(data, opts);

  updateHeaderMetrics();

  // --- NUEVO: si ya hay un marcador, asegúrate de hacer scroll al tramo al entrar al tab ---
  const markerTs = toTsMs(lastData?.opts?.markerTs);
  if (Number.isFinite(markerTs)) {
    // espera a que el tab sea visible y haya reflow del canvas
    waitUntilVisible(stackHost, () => afterReflow(() => ensureMarkerPanelInView(markerTs)));
  }

  ensureClickHandlers();
}

/** Marca una posición temporal (línea vertical). */
export function setPositionsMarker(tsLike) {
  initPositionsChart();
  if (!lastData) return;
  const t = toTsMs(tsLike);
  lastData.opts = { ...(lastData.opts || {}), markerTs: t };
  drawAll(lastData.positions, lastData.opts);

  // --- NUEVO: intenta desplazar al tramo ya mismo (si no visible, reintenta al hacerse visible) ---
  waitUntilVisible(stackHost, () => afterReflow(() => ensureMarkerPanelInView(t)));
}

/** Limpia el marcador */
export function clearPositionsMarker() {
  if (!lastData) return;
  if (lastData.opts) delete lastData.opts.markerTs;
  drawAll(lastData.positions, lastData.opts || {});
}

/* ===================== helpers de tiempo y segmentos ===================== */

function toTsMs(v) {
  if (v == null) return null;
  if (v instanceof Date) return v.getTime();
  if (typeof v === 'number') return Number.isFinite(v) ? v : null;
  if (typeof v === 'string') {
    if (/^\d+$/.test(v)) return parseInt(v, 10);
    const n = Date.parse(v);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function floorToLocalMidnight(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function setLocalTime(d, hh, mm, ss = 0, ms = 0) {
  const x = new Date(d);
  x.setHours(hh, mm, ss, ms);
  return x;
}

function normalizeSegHours(h) {
  const ok = [4, 6, 8, 12];
  const n = Number(h);
  return ok.includes(n) ? n : 6;
}

/**
 * Construye tramos desde startDate hasta endDate (INCLUSIVE),
 * guardando:
 * - t0..t1: fin real a pintar (recortado a endDate)
 * - labelEnd: fin lógico del tramo (p.ej., 00:00 del día siguiente)
 */
function buildSegments(startDate, endDate, segH) {
  const segs = [];
  let t0 = +startDate;
  const tEnd = +endDate;                  // 23:59:59.999
  const stepMs = segH * 3600 * 1000;

  while (t0 <= tEnd) {
    const logicalEnd = t0 + stepMs;
    const t1 = Math.min(logicalEnd, tEnd);
    segs.push({ t0, t1, labelEnd: logicalEnd });
    t0 += stepMs;
  }
  return segs;
}

function sameLocalDay(aMs, bMs) {
  const a = new Date(aMs), b = new Date(bMs);
  return a.getFullYear() === b.getFullYear() &&
         a.getMonth() === b.getMonth() &&
         a.getDate() === b.getDate();
}

function fmtHM(ts) {
  const d = new Date(ts);
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  return `${hh}:${mm}`;
}

/* ===================== construcción de paneles ===================== */

function ensurePanelsWithDayMarkers(segments) {
  // Si longitud coincide, actualiza tiempos y recalcula flags
  if (panels.length === segments.length) {
    for (let i = 0; i < panels.length; i++) {
      panels[i].t0 = segments[i].t0;
      panels[i].t1 = segments[i].t1;
      panels[i].labelEnd = segments[i].labelEnd;
      panels[i].isDayStart = (i === 0) || !sameLocalDay(segments[i].t0, segments[i - 1].t0);
      panels[i].isDayEnd   = (i === segments.length - 1) ||
                             !sameLocalDay(segments[i].t0, segments[i + 1]?.t0 || segments[i].t0);
    }
    return;
  }

  stackHost.innerHTML = '';
  panels = [];

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    const next = segments[i + 1];

    const canvas = document.createElement('canvas');
    canvas.className = 'positions-chart-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.border = 'none';
    stackHost.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    panels.push({
      canvas, ctx,
      t0: seg.t0,
      t1: seg.t1,
      labelEnd: seg.labelEnd,
      isDayStart: (i === 0) || !sameLocalDay(seg.t0, segments[i - 1]?.t0),
      isDayEnd:   (i === segments.length - 1) || !sameLocalDay(seg.t0, next?.t0 ?? seg.t0),
    });
  }
}

/* ===================== dibujo ===================== */

function drawAll(positions, opts) {
  if (!panels.length) return;

  const vmax = lastData?.vmax || 1;
  const dataT0 = lastData?.dataT0 ?? +new Date(positions[0].last_updated);
  const dataT1 = lastData?.dataT1 ?? +new Date(positions.at(-1).last_updated);

  // Altura base fija del área de gráfico
  const graphH = Number.isFinite(+opts.graphHeight) && +opts.graphHeight > 0
    ? Math.round(+opts.graphHeight)
    : DEFAULT_GRAPH_H;

  // 1) Ajusta ALTURA de cada panel (gap superior FIJO + franja fija del marcador)
  for (const panel of panels) {
    const dateH   = panel.isDayStart ? DATE_HDR_H : 0;
    const topGap  = panel.isDayStart ? DATE_BOTTOM_GAP : INTRA_DAY_TOP_GAP;
    const footerH = TIME_FOOTER_H + (panel.isDayEnd ? DAY_END_EXTRA_FOOTER_PAD : 0);
    const totalH  = MARKER_STRIP_H + graphH + dateH + topGap + footerH;

    panel._topGap = topGap;
    panel._footerH = footerH;

    panel.canvas.style.height = `${totalH}px`;
  }

  // 2) Dibuja cada panel
  for (const panel of panels) {
    drawPanel(panel, positions, { vmax, dataT0, dataT1, markerTs: toTsMs(opts?.markerTs), graphH });
  }

  updateHeaderMetrics();
}

function drawPanel(panel, positions, meta) {
  const { canvas, ctx, t0, t1, labelEnd, isDayStart, isDayEnd } = panel;
  const dpr = window.devicePixelRatio || 1;

  // Dimensiones (tras fijar height arriba)
  const { width: cssW, height: cssH } = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.round(cssW * dpr));
  canvas.height = Math.max(1, Math.round(cssH * dpr));
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const W = cssW;
  const H = cssH;

  // Cabeceras (gap superior fijo) + franja fija del marcador
  const dateH   = isDayStart ? DATE_HDR_H : 0;
  const topGap  = panel._topGap != null ? panel._topGap : (isDayStart ? DATE_BOTTOM_GAP : INTRA_DAY_TOP_GAP);
  const footerH = panel._footerH != null ? panel._footerH : (TIME_FOOTER_H + (isDayEnd ? DAY_END_EXTRA_FOOTER_PAD : 0));
  const headerH = MARKER_STRIP_H + dateH + topGap;

  // Área del gráfico (dos filas)
  const GAP_TRACKS = 0;
  const tracksH = Math.max(10, H - headerH - footerH);
  const trackH  = (tracksH - GAP_TRACKS) / 2;
  const topY    = headerH;
  const botY    = topY + trackH + GAP_TRACKS;

  // Fondo blanco
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);

  // === Cabecera de FECHA (solo primer tramo del día) ===
  if (dateH > 0) {
    ctx.save();
    ctx.fillStyle = COLOR_DARK_BLUE;
    ctx.font = 'bold 12px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const dateLabel = formatDate(new Date(t0), false);
    ctx.fillText(dateLabel, Math.floor(W / 2), DATE_TOP_PAD);
    ctx.restore();
  }

  // Intersección con el rango real de datos
  const vis0 = Math.max(t0, meta.dataT0);
  const vis1 = Math.min(t1, meta.dataT1);

  // Escala X local al tramo
  const xAt = (t) => {
    const span = Math.max(1, (t1 - t0));
    return ((t - t0) / span) * W;
  };

  // Puntos que intersectan el tramo visible
  const data = positions.filter(p => {
    const ts = +new Date(p.last_updated);
    const tsStart = p.stop && p.stop_start ? Math.min(ts, +new Date(p.stop_start)) : ts;
    const tsEnd   = p.stop && p.stop_end   ? Math.max(ts, +new Date(p.stop_end))   : ts;
    return !(tsEnd < vis0 || tsStart > vis1);
  });

  // Bandas y línea de velocidad
  if (vis1 > vis0 && data.length) {
    drawBandByZone(ctx, data, { xAt, topY,        height: trackH, colorAlpha: ALPHA, clipStart: vis0, clipEnd: vis1 });
    drawBandStopMove(ctx, data, { xAt, topY: botY, height: trackH,                 clipStart: vis0, clipEnd: vis1 });
    drawSpeedStepLine(ctx, data, { xAt, topY: botY, height: trackH, vmax: lastData.vmax, clipStart: vis0, clipEnd: vis1 });

    // Marcador: triángulo ARRIBA + línea entrando hasta el centro del triángulo
    const mTs = toTsMs(lastData?.opts?.markerTs);
    if (Number.isFinite(mTs) && mTs >= vis0 && mTs <= vis1) {
      const x = Math.round(xAt(mTs));

      ctx.save();
      ctx.lineCap = 'butt';
      ctx.fillStyle = COLOR_DARK_BLUE;
      ctx.strokeStyle = COLOR_DARK_BLUE;

      // Triángulo por encima del gráfico
      const apexY = topY;                 // punta
      const baseY = apexY - MARKER_TRI_H; // base superior
      ctx.beginPath();
      ctx.moveTo(x - MARKER_TRI_W / 2, baseY);
      ctx.lineTo(x + MARKER_TRI_W / 2, baseY);
      ctx.lineTo(x, apexY);
      ctx.closePath();
      ctx.fill();

      // Línea vertical: empieza en mitad del triángulo y baja
      const insideY = apexY - (MARKER_TRI_H / 2);
      ctx.beginPath();
      ctx.moveTo(x, insideY);
      ctx.lineTo(x, topY + tracksH / 2);
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.restore();
    }
  }

  // Separador gris pegado al gráfico (justo encima de las horas)
  drawGraphBottomSeparator(ctx, W, headerH + tracksH);

  // Footer con horas
  drawTimesFooter(ctx, W, H, footerH, t0, labelEnd);

  // Línea azul de fin de día
  if (isDayEnd) drawDayEndLine(ctx, W, H);
}

/* ====== piezas de dibujo ====== */

function zoneColorForPoint(p) {
  const lat = Number(p?.attributes?.latitude);
  const lon = Number(p?.attributes?.longitude);
  if (!Number.isFinite(lat) || !Number.isFinite(lon)) return toRgba('#ffffff', ALPHA);
  try {
    const z = handleZonePosition(lat, lon);
    if (z && z.id != null) {
      const style = getZoneStyleById(z.id);
      if (style?.color) return toRgba(style.color, ALPHA);
    }
  } catch {}
  return toRgba('#ffffff', ALPHA);
}

function drawBandByZone(ctx, data, { xAt, topY, height, colorAlpha, clipStart, clipEnd }) {
  let segStart = null;
  let curColor = null;

  for (let i = 0; i < data.length; i++) {
    const p = data[i];
    const ts = +new Date(p.last_updated);
    const col = zoneColorForPoint(p);
    const x = xAt(clamp(ts, clipStart, clipEnd));

    if (segStart == null) {
      segStart = x;
      curColor = col;
      continue;
    }

    if (col !== curColor) {
      drawRect(ctx, segStart, x, topY, height, curColor);
      segStart = x;
      curColor = col;
    }
  }
  if (segStart != null) {
    const xEnd = xAt(clipEnd);
    drawRect(ctx, segStart, xEnd, topY, height, curColor || toRgba('#ffffff', colorAlpha));
  }
}

function drawBandStopMove(ctx, data, { xAt, topY, height, clipStart, clipEnd }) {
  const colStop = toRgba('#ff0000', ALPHA);
  const colMove = toRgba('#00ff00', ALPHA);

  let segStart = null;
  let curStop = null;

  for (let i = 0; i < data.length; i++) {
    const p = data[i];
    const ts = +new Date(p.last_updated);
    const s = !!p.stop;
    const x = xAt(clamp(ts, clipStart, clipEnd));

    if (segStart == null) {
      segStart = x;
      curStop = s;
      continue;
    }

    if (s !== curStop) {
      drawRect(ctx, segStart, x, topY, height, curStop ? colStop : colMove);
      segStart = x;
      curStop = s;
    }
  }
  if (segStart != null) {
    drawRect(ctx, segStart, xAt(clipEnd), topY, height, curStop ? colStop : colMove);
  }
}

function drawSpeedStepLine(ctx, data, { xAt, topY, height, vmax, clipStart, clipEnd }) {
  const yFromV = (v) => {
    const vv = Math.max(0, Number(v) || 0);
    const yRel = vv / vmax;
    return topY + (1 - yRel) * height;
  };

  const pts = data.filter(p => {
    const ts = +new Date(p.last_updated);
    return ts >= clipStart && ts <= clipEnd;
  });
  if (!pts.length) return;

  ctx.beginPath();
  ctx.lineJoin = 'miter';
  ctx.lineCap = 'butt';
  ctx.strokeStyle = '#227722';
  ctx.lineWidth = 1.2;

  const first = pts[0];
  let xPrev = xAt(+new Date(first.last_updated));
  let yPrev = yFromV(first?.attributes?.speed);

  if (pts.length === 1) {
    ctx.moveTo(xPrev, yPrev);
    ctx.lineTo(xAt(clipEnd), yPrev);
  } else {
    ctx.moveTo(xPrev, yPrev);
    for (let i = 1; i < pts.length; i++) {
      const p = pts[i];
      const xCur = xAt(+new Date(p.last_updated));
      const yCur = yFromV(p?.attributes?.speed);

      ctx.lineTo(xCur, yPrev);
      ctx.lineTo(xCur, yCur);

      xPrev = xCur;
      yPrev = yCur;
    }
    ctx.lineTo(xAt(clipEnd), yPrev);
  }
  ctx.stroke();
}

function drawRect(ctx, x0, x1, y, h, fill) {
  const left = Math.min(x0, x1);
  const right = Math.max(x0, x1);
  const w = Math.max(1, right - left);
  ctx.fillStyle = fill || '#fff';
  ctx.fillRect(left, y, w, h);
}

function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

/* ====== separadores y footer ====== */

function drawGraphBottomSeparator(ctx, W, yBottomOfGraph) {
  ctx.save();
  ctx.strokeStyle = COLOR_SEP_GRAY;
  ctx.lineWidth = 1;
  const y = Math.floor(yBottomOfGraph) - 0.5;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(W, y);
  ctx.stroke();
  ctx.restore();
}

function drawTimesFooter(ctx, W, H, footerH, t0, labelEnd) {
  const yText = H - footerH + 1;
  ctx.save();
  ctx.fillStyle = COLOR_DARK_BLUE;
  ctx.font = '11px system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif';
  ctx.textBaseline = 'top';

  const startLabel = fmtHM(t0);
  const endLabel   = fmtHM(labelEnd);

  ctx.textAlign = 'left';
  ctx.fillText(startLabel, 4, yText);

  ctx.textAlign = 'right';
  ctx.fillText(endLabel, W - 4, yText);

  ctx.restore();
}

function drawDayEndLine(ctx, W, H) {
  ctx.save();
  ctx.strokeStyle = COLOR_DARK_BLUE;
  ctx.lineWidth = 1;
  const y = Math.floor(H) - 0.5;
  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(W, y);
  ctx.stroke();
  ctx.restore();
}

/* ===================== SCROLL AL TRAMO DEL MARCADOR ===================== */

// Encuentra el scroller real que contiene a stackHost
function resolveScrollContainer() {
  if (!stackHost) return document.scrollingElement || document.documentElement;

  // Si ya tenemos un scroller válido que contiene a stackHost, úsalo
  if (scrollContainer && scrollContainer.contains?.(stackHost)) return scrollContainer;

  // Sube por los ancestros buscando overflowY desplazable
  for (let el = stackHost.parentElement; el; el = el.parentElement) {
    const cs = getComputedStyle(el);
    if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll' || cs.overflowY === 'overlay') &&
        el.scrollHeight > el.clientHeight) {
      return el;
    }
  }
  return document.scrollingElement || document.documentElement;
}

function bindRealScroller() {
  const real = resolveScrollContainer();
  if (!real) return;

  if (containerResizeObs) containerResizeObs.disconnect?.();
  containerResizeObs = new ResizeObserver(updateHeaderMetrics);
  containerResizeObs.observe(real);

  real.removeEventListener?.('scroll', updateHeaderMetrics);
  real.addEventListener('scroll', updateHeaderMetrics, { passive: true });

  scrollContainer = real;
}

function afterReflow(fn) {
  requestAnimationFrame(() => requestAnimationFrame(fn));
}

function isDocScroller(scroller) {
  return !scroller || scroller === window ||
         scroller === document.scrollingElement ||
         scroller === document.documentElement ||
         scroller === document.body;
}

function getTopWithinScroller(el, scroller) {
  const er = el.getBoundingClientRect();
  if (isDocScroller(scroller)) {
    const st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    return er.top + st;
  }
  const sr = scroller.getBoundingClientRect();
  return er.top - sr.top + scroller.scrollTop;
}

function panelIsVisible(panel, scroller) {
  if (!panel?.canvas) return true;
  const sTop = isDocScroller(scroller)
    ? (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
    : scroller.scrollTop;
  const sH = isDocScroller(scroller) ? window.innerHeight : scroller.clientHeight;
  const pTop = getTopWithinScroller(panel.canvas, scroller);
  const pH = panel.canvas.offsetHeight || 1;
  return (pTop < sTop + sH) && (pTop + pH > sTop);
}

function findPanelForTs(ts) {
  if (!Array.isArray(panels) || panels.length === 0) return null;
  for (const p of panels) if (ts >= p.t0 && ts < p.labelEnd) return p;
  if (ts === panels.at(-1)?.labelEnd) return panels.at(-1);

  // el más cercano
  let best = null;
  for (const p of panels) {
    const mid = (p.t0 + p.labelEnd) / 2;
    const d = Math.abs(ts - mid);
    if (!best || d < best.d) best = { p, d };
  }
  return best?.p || null;
}

function scrollPanelIntoView(panel) {
  if (!panel?.canvas) return;
  const scroller = resolveScrollContainer();
  const sH = isDocScroller(scroller) ? window.innerHeight : scroller.clientHeight;
  const pTop = getTopWithinScroller(panel.canvas, scroller);
  const pH = panel.canvas.offsetHeight || 1;
  const target = Math.max(0, Math.round(pTop - (sH - pH) / 2));

  try {
    if (isDocScroller(scroller)) {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } else {
      scroller.scrollTo({ top: target, behavior: 'smooth' });
    }
  } catch {
    if (isDocScroller(scroller)) window.scrollTo(0, target);
    else scroller.scrollTop = target;
  }
}

function ensureMarkerPanelInView(ts) {
  const panel = findPanelForTs(ts);
  if (!panel) return;
  const scroller = resolveScrollContainer();
  if (!panelIsVisible(panel, scroller)) {
    scrollPanelIntoView(panel);
  }
}

/**
 * Espera hasta que el elemento sea "visible" (tenga layout y tamaño)
 * y entonces ejecuta cb(). Si ya es visible, ejecuta ya.
 * Se desmonta automáticamente a los 5s como salvaguarda.
 */
function waitUntilVisible(el, cb) {
  if (!el?.isConnected) return;
  const isVisibleNow = () => {
    if (!el?.isConnected) return false;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    // antes exigía offsetParent !== null; eso falla con ciertos layouts
    return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden';
  };

  if (isVisibleNow()) { cb(); return; }

  const mo = new MutationObserver(() => {
    if (isVisibleNow()) {
      mo.disconnect();
      afterReflow(cb);
    }
  });
  mo.observe(document.documentElement, { attributes: true, childList: true, subtree: true });
  setTimeout(() => mo.disconnect(), 5000); // salvaguarda
}

/* ===================== interacción (click -> seleccionar fila) ===================== */

function ensureClickHandlers() {
  if (!stackHost || !panels.length) return;
  if (clickBound) return;

  stackHost.addEventListener('click', (ev) => {
    if (!lastData || !Array.isArray(lastData.positions) || lastData.positions.length === 0) return;

    // Localiza el panel clicado por Y
    let chosen = null;
    for (const panel of panels) {
      const r = panel.canvas.getBoundingClientRect();
      if (ev.clientY >= r.top && ev.clientY <= r.bottom) { chosen = panel; break; }
    }
    if (!chosen) return;

    const rect = chosen.canvas.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const W = rect.width || 1;

    // Mapea X a tiempo dentro del panel
    const t = chosen.t0 + (Math.max(0, Math.min(W, x)) / W) * (chosen.t1 - chosen.t0);

    // Solo si cae dentro del rango real de datos (no blanco)
    if (!(t >= lastData.dataT0 && t <= lastData.dataT1)) return;

    // Posición más cercana
    let best = null;
    for (const p of lastData.positions) {
      const ts = +new Date(p.last_updated);
      const d = Math.abs(ts - t);
      if (!best || d < best.d) best = { p, d };
    }
    if (!best) return;

    // Marca en el gráfico (esto a su vez forzará scroll si hace falta)
    setPositionsMarker(best.p.last_updated);

    // Dispara evento para que FILTER seleccione la fila
    const uniqueId = `${best.p.entity_id}_${new Date(best.p.last_updated).toISOString()}`;
    document.dispatchEvent(new CustomEvent('positions:select-by-id', {
      detail: { uniqueId }
    }));
  });

  clickBound = true;
}

/* ===================== métricas de cabecera / scrollbar ===================== */

function updateHeaderMetrics() {
  if (!stackHost) return;

  // Sin paddings laterales
  stackHost.style.paddingLeft = '0px';
  stackHost.style.paddingRight = '0px';

  // Reservar altura del thead SOLO si usamos el contenedor de POSITIONS
  const positionsContainer = document.querySelector('#positions .table-container');
  const sc = resolveScrollContainer();
  if (positionsContainer && sc === positionsContainer) {
    const stackH = stackHost.getBoundingClientRect().height;
    positionsContainer.style.setProperty('--chart-header-h', `${Math.ceil(stackH)}px`);
  }
}

