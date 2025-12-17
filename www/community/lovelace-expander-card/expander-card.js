var Yi = Object.defineProperty;
var dr = (e) => {
  throw TypeError(e);
};
var Ui = (e, t, n) => t in e ? Yi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var z = (e, t, n) => Ui(e, typeof t != "symbol" ? t + "" : t, n), Rn = (e, t, n) => t.has(e) || dr("Cannot " + n);
var c = (e, t, n) => (Rn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), S = (e, t, n) => t.has(e) ? dr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, i) => (Rn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), N = (e, t, n) => (Rn(e, t, "access private method"), n);
var Cr;
typeof window < "u" && ((Cr = window.__svelte ?? (window.__svelte = {})).v ?? (Cr.v = /* @__PURE__ */ new Set())).add("5");
const Vi = {
  icon: "",
  "arrow-color": "",
  "icon-rotate-degree": "",
  "header-color": "",
  "button-background": "",
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  "storage-id": "",
  "expander-card-id": "",
  "show-button-users": [],
  "start-expanded-users": [],
  "expander-card-background": "",
  "expander-card-background-expanded": "",
  "expander-card-display": "",
  gap: "",
  padding: "",
  "expanded-gap": "",
  "child-padding": "",
  "child-margin-top": "",
  "overlay-margin": "",
  "title-card-padding": "",
  style: ""
}, Ji = { icon: {} }, Wi = { text: {} }, Gi = { text: { multiline: !0 } }, Ki = { boolean: {} }, Xi = { object: {} }, Zi = (e) => ({
  number: {
    unit_of_measurement: e
  }
}), Qi = (e, t) => ({
  name: e,
  label: t,
  selector: Ji
}), H = (e, t) => ({
  name: e,
  label: t,
  selector: Wi
}), ea = (e, t) => ({
  name: e,
  label: t,
  selector: Gi
}), Ot = (e, t) => ({
  name: e,
  label: t,
  selector: Ki
}), ta = (e, t) => ({
  name: e,
  label: t,
  selector: Xi
}), hr = (e, t, n) => ({
  name: e,
  label: t,
  selector: Zi(n)
}), na = (e) => ({
  label: e,
  type: "constant"
}), ra = [
  {
    type: "expandable",
    label: "Expander Card Settings",
    icon: "mdi:arrow-down-bold-box-outline",
    schema: [
      {
        ...H("title", "Title")
      },
      {
        ...Qi("icon", "Icon")
      },
      {
        type: "expandable",
        label: "Expander control",
        icon: "mdi:cog-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...Ot("expanded", "Start expanded")
              },
              {
                ...Ot("animation", "Enable animation")
              },
              {
                ...hr("min-width-expanded", "Min width expanded", "px")
              },
              {
                ...hr("max-width-expanded", "Max width expanded", "px")
              },
              {
                ...H("storage-id", "Storage ID")
              },
              {
                ...H("expander-card-id", "Expander card ID")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Expander styling",
        icon: "mdi:palette-swatch",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...H("arrow-color", "Icon color")
              },
              {
                ...H("icon-rotate-degree", "Icon rotate degree")
              },
              {
                ...H("header-color", "Header color")
              },
              {
                ...H("button-background", "Button background color")
              },
              {
                ...H("expander-card-background", "Background")
              },
              {
                ...H("expander-card-background-expanded", "Background when expanded")
              },
              {
                ...H("expander-card-display", "Expander card display")
              },
              {
                ...Ot("clear", "Clear border and background")
              },
              {
                ...H("gap", "Gap")
              },
              {
                ...H("padding", "Padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Card styling",
        icon: "mdi:palette-swatch-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...H("expanded-gap", "Card gap")
              },
              {
                ...H("child-padding", "Card padding")
              },
              {
                ...H("child-margin-top", "Card margin top")
              },
              {
                ...Ot("clear-children", "Clear card border and background")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Title card",
        icon: "mdi:subtitles-outline",
        schema: [
          {
            ...na("Use YAML to specify a title card to replace the expander title")
          },
          {
            ...ta("title-card", "")
          },
          {
            type: "grid",
            schema: [
              {
                ...Ot("title-card-clickable", "Make title card clickable to expand/collapse")
              },
              {
                ...Ot("title-card-button-overlay", "Overlay expand button on title card")
              },
              {
                ...H("overlay-margin", "Overlay margin")
              },
              {
                ...H("title-card-padding", "Title card padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "User settings",
        icon: "mdi:account-multiple-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                name: "show-button-users",
                label: "Show button users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              },
              {
                name: "start-expanded-users",
                label: "Start expanded users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Advanced styling",
        icon: "mdi:brush-outline",
        schema: [
          {
            ...ea("style", "Custom CSS style")
          }
        ]
      }
    ]
  }
], Jt = window;
let fn = Jt.cardHelpers;
const ia = new Promise((e) => {
  fn && e(), Jt.loadCardHelpers && Jt.loadCardHelpers().then((t) => {
    fn = t, Jt.cardHelpers = fn, e();
  });
});
async function aa() {
  const e = document.querySelector("home-assistant"), t = e == null ? void 0 : e.hass;
  return t ? (await t.callWS({ type: "config/auth/list" })).filter((i) => !i.system_generated).map((i) => i.name) : void 0;
}
const sa = async () => {
  const t = await (await ia.then(() => fn.createCardElement({ type: "vertical-stack", cards: [] }))).constructor.getConfigElement(), n = await aa();
  return class extends t.constructor {
    constructor() {
      super(), this._computeLabelCallback = (r) => r.label ?? r.name ?? "", this._valueChanged = (r) => {
        const a = r.detail.value, o = Object.entries(Vi);
        for (const [s, l] of o) {
          if (typeof l == "object" && Array.isArray(l) && Array.isArray(a[s])) {
            JSON.stringify(a[s]) === JSON.stringify(l) && delete a[s];
            continue;
          }
          a[s] === l && delete a[s];
        }
        this._config = a, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
      }, this._users = n;
    }
    // override setConfig to store config only and not assert stack editor config
    // we also upgrade any old config here if needed
    setConfig(r) {
      this._config = r;
    }
    // define _schema getter to return our own schema
    get _schema() {
      const a = JSON.stringify(ra), o = this._users.map((f) => f.replace(/\\/g, "\\\\").replace(/"/g, '\\"')).join('","'), s = a.replace(/\[\[users\]\]/g, o);
      return JSON.parse(s);
    }
    // _schema setter does nothing as we want to use our own schema
    set _schema(r) {
    }
  };
}, oa = (async () => {
  for (; customElements.get("home-assistant") === void 0; )
    await new Promise((e) => Jt.setTimeout(e, 100));
  if (!customElements.get("expander-card-editor")) {
    const e = await sa();
    customElements.define("expander-card-editor", e);
  }
}), la = 1, fa = 2, ca = 16, ua = 1, da = 2, Tr = "[", En = "[!", Gn = "]", $t = {}, W = Symbol(), ha = "http://www.w3.org/1999/xhtml", jn = !1;
var qr = Array.isArray, pa = Array.prototype.indexOf, xn = Array.from, pn = Object.keys, vn = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, va = Object.getOwnPropertyDescriptors, ga = Object.prototype, _a = Array.prototype, Ar = Object.getPrototypeOf, pr = Object.isExtensible;
function ma(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Or() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const Y = 2, Kn = 4, Xn = 8, ya = 1 << 24, Ye = 16, Ue = 32, st = 64, kn = 128, qe = 512, G = 1024, ae = 2048, Ve = 4096, ce = 8192, He = 16384, Sn = 32768, It = 65536, vr = 1 << 17, Nr = 1 << 18, St = 1 << 19, wa = 1 << 20, nt = 1 << 25, Et = 32768, zn = 1 << 21, Zn = 1 << 22, rt = 1 << 23, cn = Symbol("$state"), ba = Symbol("legacy props"), $a = Symbol(""), Rt = new class extends Error {
  constructor() {
    super(...arguments);
    z(this, "name", "StaleReactionError");
    z(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Qn = 3, Ct = 8;
function Ea(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function xa() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ka(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Sa() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ca(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ta() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function qa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Aa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Oa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Na() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ra() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function an(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ja() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let C = !1;
function Ce(e) {
  C = e;
}
let x;
function ee(e) {
  if (e === null)
    throw an(), $t;
  return x = e;
}
function Dt() {
  return ee(/* @__PURE__ */ Ae(x));
}
function Ie(e) {
  if (C) {
    if (/* @__PURE__ */ Ae(x) !== null)
      throw an(), $t;
    x = e;
  }
}
function za(e = 1) {
  if (C) {
    for (var t = e, n = x; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(n);
    x = n;
  }
}
function gn(e = !0) {
  for (var t = 0, n = x; ; ) {
    if (n.nodeType === Ct) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === Gn) {
        if (t === 0) return n;
        t -= 1;
      } else (i === Tr || i === En) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(n)
    );
    e && n.remove(), n = r;
  }
}
function Rr(e) {
  if (!e || e.nodeType !== Ct)
    throw an(), $t;
  return (
    /** @type {Comment} */
    e.data
  );
}
function jr(e) {
  return e === this.v;
}
function Pa(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function zr(e) {
  return !Pa(e, this.v);
}
let Fa = !1, ue = null;
function Lt(e) {
  ue = e;
}
function er(e, t = !1, n) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function tr(e) {
  var t = (
    /** @type {ComponentContext} */
    ue
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      ri(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ue = t.p, e ?? /** @type {T} */
  {};
}
function Pr() {
  return !0;
}
let ut = [];
function Fr() {
  var e = ut;
  ut = [], ma(e);
}
function Cn(e) {
  if (ut.length === 0 && !Wt) {
    var t = ut;
    queueMicrotask(() => {
      t === ut && Fr();
    });
  }
  ut.push(e);
}
function Ma() {
  for (; ut.length > 0; )
    Fr();
}
function Mr(e) {
  var t = q;
  if (t === null)
    return E.f |= rt, e;
  if ((t.f & Sn) === 0) {
    if ((t.f & kn) === 0)
      throw e;
    t.b.error(e);
  } else
    Bt(e, t);
}
function Bt(e, t) {
  for (; t !== null; ) {
    if ((t.f & kn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const on = /* @__PURE__ */ new Set();
let A = null, F = null, ye = [], Tn = null, Pn = !1, Wt = !1;
var zt, Pt, ht, pt, en, Ft, Mt, D, Fn, ct, Mn, Ir, Dr;
const wn = class wn {
  constructor() {
    S(this, D);
    z(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    z(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    z(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    S(this, zt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    S(this, Pt, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    S(this, ht, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    S(this, pt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    S(this, en, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    S(this, Ft, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    S(this, Mt, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    z(this, "skipped_effects", /* @__PURE__ */ new Set());
    z(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, pt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    ye = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      N(this, D, Fn).call(this, r, n);
    this.is_fork || N(this, D, Ir).call(this), this.is_deferred() ? (N(this, D, ct).call(this, n.effects), N(this, D, ct).call(this, n.render_effects), N(this, D, ct).call(this, n.block_effects)) : (A = null, gr(n.render_effects), gr(n.effects), (i = c(this, en)) == null || i.resolve()), F = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & rt) === 0 && (this.current.set(t, t.v), F == null || F.set(t, t.v));
  }
  activate() {
    A = this, this.apply();
  }
  deactivate() {
    A === this && (A = null, F = null);
  }
  flush() {
    if (this.activate(), ye.length > 0) {
      if (Lr(), A !== null && A !== this)
        return;
    } else c(this, ht) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of c(this, Pt)) t(this);
    c(this, Pt).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    y(this, ht, c(this, ht) + 1), t && y(this, pt, c(this, pt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    y(this, ht, c(this, ht) - 1), t && y(this, pt, c(this, pt) - 1), this.revive();
  }
  revive() {
    for (const t of c(this, Ft))
      X(t, ae), xt(t);
    for (const t of c(this, Mt))
      X(t, Ve), xt(t);
    y(this, Ft, []), y(this, Mt, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    c(this, zt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    c(this, Pt).add(t);
  }
  settled() {
    return (c(this, en) ?? y(this, en, Or())).promise;
  }
  static ensure() {
    if (A === null) {
      const t = A = new wn();
      on.add(A), Wt || wn.enqueue(() => {
        A === t && t.flush();
      });
    }
    return A;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Cn(t);
  }
  apply() {
  }
};
zt = new WeakMap(), Pt = new WeakMap(), ht = new WeakMap(), pt = new WeakMap(), en = new WeakMap(), Ft = new WeakMap(), Mt = new WeakMap(), D = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Fn = function(t, n) {
  var d;
  t.f ^= G;
  for (var i = t.first; i !== null; ) {
    var r = i.f, a = (r & (Ue | st)) !== 0, o = a && (r & G) !== 0, s = o || (r & ce) !== 0 || this.skipped_effects.has(i);
    if ((i.f & kn) !== 0 && ((d = i.b) != null && d.is_pending()) && (n = {
      parent: n,
      effect: i,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !s && i.fn !== null) {
      a ? i.f ^= G : (r & Kn) !== 0 ? n.effects.push(i) : sn(i) && ((i.f & Ye) !== 0 && n.block_effects.push(i), Qt(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var f = i.parent;
    for (i = i.next; i === null && f !== null; )
      f === n.effect && (N(this, D, ct).call(this, n.effects), N(this, D, ct).call(this, n.render_effects), N(this, D, ct).call(this, n.block_effects), n = /** @type {EffectTarget} */
      n.parent), i = f.next, f = f.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ct = function(t) {
  for (const n of t)
    ((n.f & ae) !== 0 ? c(this, Ft) : c(this, Mt)).push(n), N(this, D, Mn).call(this, n.deps), X(n, G);
}, /**
 * @param {Value[] | null} deps
 */
Mn = function(t) {
  if (t !== null)
    for (const n of t)
      (n.f & Y) === 0 || (n.f & Et) === 0 || (n.f ^= Et, N(this, D, Mn).call(
        this,
        /** @type {Derived} */
        n.deps
      ));
}, Ir = function() {
  if (c(this, pt) === 0) {
    for (const t of c(this, zt)) t();
    c(this, zt).clear();
  }
  c(this, ht) === 0 && N(this, D, Dr).call(this);
}, Dr = function() {
  var a;
  if (on.size > 1) {
    this.previous.clear();
    var t = F, n = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const o of on) {
      if (o === this) {
        n = !1;
        continue;
      }
      const s = [];
      for (const [f, d] of this.current) {
        if (o.current.has(f))
          if (n && d !== o.current.get(f))
            o.current.set(f, d);
          else
            continue;
        s.push(f);
      }
      if (s.length === 0)
        continue;
      const l = [...o.current.keys()].filter((f) => !this.current.has(f));
      if (l.length > 0) {
        var r = ye;
        ye = [];
        const f = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (const h of s)
          Br(h, l, f, d);
        if (ye.length > 0) {
          A = o, o.apply();
          for (const h of ye)
            N(a = o, D, Fn).call(a, h, i);
          o.deactivate();
        }
        ye = r;
      }
    }
    A = null, F = t;
  }
  this.committed = !0, on.delete(this);
};
let Pe = wn;
function me(e) {
  var t = Wt;
  Wt = !0;
  try {
    for (var n; ; ) {
      if (Ma(), ye.length === 0 && (A == null || A.flush(), ye.length === 0))
        return Tn = null, /** @type {T} */
        n;
      Lr();
    }
  } finally {
    Wt = t;
  }
}
function Lr() {
  var e = wt;
  Pn = !0;
  var t = null;
  try {
    var n = 0;
    for (mn(!0); ye.length > 0; ) {
      var i = Pe.ensure();
      if (n++ > 1e3) {
        var r, a;
        Ia();
      }
      i.process(ye), it.clear();
    }
  } finally {
    Pn = !1, mn(e), Tn = null;
  }
}
function Ia() {
  try {
    Ta();
  } catch (e) {
    Bt(e, Tn);
  }
}
let xe = null;
function gr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (He | ce)) === 0 && sn(i) && (xe = /* @__PURE__ */ new Set(), Qt(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? li(i) : i.fn = null), (xe == null ? void 0 : xe.size) > 0)) {
        it.clear();
        for (const r of xe) {
          if ((r.f & (He | ce)) !== 0) continue;
          const a = [r];
          let o = r.parent;
          for (; o !== null; )
            xe.has(o) && (xe.delete(o), a.push(o)), o = o.parent;
          for (let s = a.length - 1; s >= 0; s--) {
            const l = a[s];
            (l.f & (He | ce)) === 0 && Qt(l);
          }
        }
        xe.clear();
      }
    }
    xe = null;
  }
}
function Br(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const a = r.f;
      (a & Y) !== 0 ? Br(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (a & (Zn | Ye)) !== 0 && (a & ae) === 0 && Hr(r, t, i) && (X(r, ae), xt(
        /** @type {Effect} */
        r
      ));
    }
}
function Hr(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & Y) !== 0 && Hr(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function xt(e) {
  for (var t = Tn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Pn && t === q && (n & Ye) !== 0 && (n & Nr) === 0)
      return;
    if ((n & (st | Ue)) !== 0) {
      if ((n & G) === 0) return;
      t.f ^= G;
    }
  }
  ye.push(t);
}
function Da(e) {
  let t = 0, n = kt(0), i;
  return () => {
    Xt() && (u(n), rr(() => (t === 0 && (i = sr(() => e(() => Gt(n)))), t += 1, () => {
      Cn(() => {
        t -= 1, t === 0 && (i == null || i(), i = void 0, Gt(n));
      });
    })));
  };
}
var La = It | St | kn;
function Ba(e, t, n) {
  new Ha(e, t, n);
}
var ve, le, tn, Ne, vt, Re, ge, ie, je, Le, Qe, gt, et, _t, tt, bn, M, Yr, Ur, In, un, dn, Dn;
class Ha {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    S(this, M);
    /** @type {Boundary | null} */
    z(this, "parent");
    S(this, ve, !1);
    /** @type {TemplateNode} */
    S(this, le);
    /** @type {TemplateNode | null} */
    S(this, tn, C ? x : null);
    /** @type {BoundaryProps} */
    S(this, Ne);
    /** @type {((anchor: Node) => void)} */
    S(this, vt);
    /** @type {Effect} */
    S(this, Re);
    /** @type {Effect | null} */
    S(this, ge, null);
    /** @type {Effect | null} */
    S(this, ie, null);
    /** @type {Effect | null} */
    S(this, je, null);
    /** @type {DocumentFragment | null} */
    S(this, Le, null);
    /** @type {TemplateNode | null} */
    S(this, Qe, null);
    S(this, gt, 0);
    S(this, et, 0);
    S(this, _t, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    S(this, tt, null);
    S(this, bn, Da(() => (y(this, tt, kt(c(this, gt))), () => {
      y(this, tt, null);
    })));
    y(this, le, t), y(this, Ne, n), y(this, vt, i), this.parent = /** @type {Effect} */
    q.b, y(this, ve, !!c(this, Ne).pending), y(this, Re, ir(() => {
      if (q.b = this, C) {
        const a = c(this, tn);
        Dt(), /** @type {Comment} */
        a.nodeType === Ct && /** @type {Comment} */
        a.data === En ? N(this, M, Ur).call(this) : N(this, M, Yr).call(this);
      } else {
        var r = N(this, M, In).call(this);
        try {
          y(this, ge, we(() => i(r)));
        } catch (a) {
          this.error(a);
        }
        c(this, et) > 0 ? N(this, M, dn).call(this) : y(this, ve, !1);
      }
      return () => {
        var a;
        (a = c(this, Qe)) == null || a.remove();
      };
    }, La)), C && y(this, le, x);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, ve) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    N(this, M, Dn).call(this, t), y(this, gt, c(this, gt) + t), c(this, tt) && Ht(c(this, tt), c(this, gt));
  }
  get_effect_pending() {
    return c(this, bn).call(this), u(
      /** @type {Source<number>} */
      c(this, tt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = c(this, Ne).onerror;
    let i = c(this, Ne).failed;
    if (c(this, _t) || !n && !i)
      throw t;
    c(this, ge) && (te(c(this, ge)), y(this, ge, null)), c(this, ie) && (te(c(this, ie)), y(this, ie, null)), c(this, je) && (te(c(this, je)), y(this, je, null)), C && (ee(
      /** @type {TemplateNode} */
      c(this, tn)
    ), za(), ee(gn()));
    var r = !1, a = !1;
    const o = () => {
      if (r) {
        ja();
        return;
      }
      r = !0, a && Ra(), Pe.ensure(), y(this, gt, 0), c(this, je) !== null && yt(c(this, je), () => {
        y(this, je, null);
      }), y(this, ve, this.has_pending_snippet()), y(this, ge, N(this, M, un).call(this, () => (y(this, _t, !1), we(() => c(this, vt).call(this, c(this, le)))))), c(this, et) > 0 ? N(this, M, dn).call(this) : y(this, ve, !1);
    };
    var s = E;
    try {
      K(null), a = !0, n == null || n(t, o), a = !1;
    } catch (l) {
      Bt(l, c(this, Re) && c(this, Re).parent);
    } finally {
      K(s);
    }
    i && Cn(() => {
      y(this, je, N(this, M, un).call(this, () => {
        Pe.ensure(), y(this, _t, !0);
        try {
          return we(() => {
            i(
              c(this, le),
              () => t,
              () => o
            );
          });
        } catch (l) {
          return Bt(
            l,
            /** @type {Effect} */
            c(this, Re).parent
          ), null;
        } finally {
          y(this, _t, !1);
        }
      }));
    });
  }
}
ve = new WeakMap(), le = new WeakMap(), tn = new WeakMap(), Ne = new WeakMap(), vt = new WeakMap(), Re = new WeakMap(), ge = new WeakMap(), ie = new WeakMap(), je = new WeakMap(), Le = new WeakMap(), Qe = new WeakMap(), gt = new WeakMap(), et = new WeakMap(), _t = new WeakMap(), tt = new WeakMap(), bn = new WeakMap(), M = new WeakSet(), Yr = function() {
  try {
    y(this, ge, we(() => c(this, vt).call(this, c(this, le))));
  } catch (t) {
    this.error(t);
  }
  y(this, ve, !1);
}, Ur = function() {
  const t = c(this, Ne).pending;
  t && (y(this, ie, we(() => t(c(this, le)))), Pe.enqueue(() => {
    var n = N(this, M, In).call(this);
    y(this, ge, N(this, M, un).call(this, () => (Pe.ensure(), we(() => c(this, vt).call(this, n))))), c(this, et) > 0 ? N(this, M, dn).call(this) : (yt(
      /** @type {Effect} */
      c(this, ie),
      () => {
        y(this, ie, null);
      }
    ), y(this, ve, !1));
  }));
}, In = function() {
  var t = c(this, le);
  return c(this, ve) && (y(this, Qe, be()), c(this, le).before(c(this, Qe)), t = c(this, Qe)), t;
}, /**
 * @param {() => Effect | null} fn
 */
un = function(t) {
  var n = q, i = E, r = ue;
  $e(c(this, Re)), K(c(this, Re)), Lt(c(this, Re).ctx);
  try {
    return t();
  } catch (a) {
    return Mr(a), null;
  } finally {
    $e(n), K(i), Lt(r);
  }
}, dn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    c(this, Ne).pending
  );
  c(this, ge) !== null && (y(this, Le, document.createDocumentFragment()), c(this, Le).append(
    /** @type {TemplateNode} */
    c(this, Qe)
  ), ui(c(this, ge), c(this, Le))), c(this, ie) === null && y(this, ie, we(() => t(c(this, le))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Dn = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && N(n = this.parent, M, Dn).call(n, t);
    return;
  }
  y(this, et, c(this, et) + t), c(this, et) === 0 && (y(this, ve, !1), c(this, ie) && yt(c(this, ie), () => {
    y(this, ie, null);
  }), c(this, Le) && (c(this, le).before(c(this, Le)), y(this, Le, null)));
};
function Ya(e, t, n, i) {
  const r = qn;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var a = A, o = (
    /** @type {Effect} */
    q
  ), s = Ua();
  function l() {
    Promise.all(n.map((f) => /* @__PURE__ */ Va(f))).then((f) => {
      s();
      try {
        i([...t.map(r), ...f]);
      } catch (d) {
        (o.f & He) === 0 && Bt(d, o);
      }
      a == null || a.deactivate(), _n();
    }).catch((f) => {
      Bt(f, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    s();
    try {
      return l();
    } finally {
      a == null || a.deactivate(), _n();
    }
  }) : l();
}
function Ua() {
  var e = q, t = E, n = ue, i = A;
  return function(a = !0) {
    $e(e), K(t), Lt(n), a && (i == null || i.activate());
  };
}
function _n() {
  $e(null), K(null), Lt(null);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  var t = Y | ae, n = E !== null && (E.f & Y) !== 0 ? (
    /** @type {Derived} */
    E
  ) : null;
  return q !== null && (q.f |= St), {
    ctx: ue,
    deps: null,
    effects: null,
    equals: jr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      W
    ),
    wv: 0,
    parent: n ?? q,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Va(e, t) {
  let n = (
    /** @type {Effect | null} */
    q
  );
  n === null && xa();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = kt(
    /** @type {V} */
    W
  ), o = !E, s = /* @__PURE__ */ new Map();
  return ns(() => {
    var v;
    var l = Or();
    r = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        f === A && f.committed && f.deactivate(), _n();
      });
    } catch (g) {
      l.reject(g), _n();
    }
    var f = (
      /** @type {Batch} */
      A
    );
    if (o) {
      var d = !i.is_pending();
      i.update_pending_count(1), f.increment(d), (v = s.get(f)) == null || v.reject(Rt), s.delete(f), s.set(f, l);
    }
    const h = (g, p = void 0) => {
      if (f.activate(), p)
        p !== Rt && (a.f |= rt, Ht(a, p));
      else {
        (a.f & rt) !== 0 && (a.f ^= rt), Ht(a, g);
        for (const [k, $] of s) {
          if (s.delete(k), k === f) break;
          $.reject(Rt);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(d));
    };
    l.promise.then(h, (g) => h(null, g || "unknown"));
  }), Qa(() => {
    for (const l of s.values())
      l.reject(Rt);
  }), new Promise((l) => {
    function f(d) {
      function h() {
        d === r ? l(a) : f(r);
      }
      d.then(h, h);
    }
    f(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  const t = /* @__PURE__ */ qn(e);
  return di(t), t;
}
// @__NO_SIDE_EFFECTS__
function Wa(e) {
  const t = /* @__PURE__ */ qn(e);
  return t.equals = zr, t;
}
function Vr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      te(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ga(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Y) === 0)
      return (t.f & He) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function nr(e) {
  var t, n = q;
  $e(Ga(e));
  try {
    e.f &= ~Et, Vr(e), t = gi(e);
  } finally {
    $e(n);
  }
  return t;
}
function Jr(e) {
  var t = nr(e);
  if (e.equals(t) || (A != null && A.is_fork || (e.v = t), e.wv = pi()), !Tt)
    if (F !== null)
      (Xt() || A != null && A.is_fork) && F.set(e, t);
    else {
      var n = (e.f & qe) === 0 ? Ve : G;
      X(e, n);
    }
}
let Ln = /* @__PURE__ */ new Set();
const it = /* @__PURE__ */ new Map();
let Wr = !1;
function kt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: jr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function R(e, t) {
  const n = kt(e);
  return di(n), n;
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t = !1, n = !0) {
  const i = kt(e);
  return t || (i.equals = zr), i;
}
function w(e, t, n = !1) {
  E !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || (E.f & vr) !== 0) && Pr() && (E.f & (Y | Ye | Zn | vr)) !== 0 && !(ne != null && ne.includes(e)) && Na();
  let i = n ? dt(t) : t;
  return Ht(e, i);
}
function Ht(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Tt ? it.set(e, t) : it.set(e, n), e.v = t;
    var i = Pe.ensure();
    i.capture(e, n), (e.f & Y) !== 0 && ((e.f & ae) !== 0 && nr(
      /** @type {Derived} */
      e
    ), X(e, (e.f & qe) !== 0 ? G : Ve)), e.wv = pi(), Kr(e, ae), q !== null && (q.f & G) !== 0 && (q.f & (Ue | st)) === 0 && (he === null ? is([e]) : he.push(e)), !i.is_fork && Ln.size > 0 && !Wr && Ka();
  }
  return t;
}
function Ka() {
  Wr = !1;
  var e = wt;
  mn(!0);
  const t = Array.from(Ln);
  try {
    for (const n of t)
      (n.f & G) !== 0 && X(n, Ve), sn(n) && Qt(n);
  } finally {
    mn(e);
  }
  Ln.clear();
}
function Gt(e) {
  w(e, e.v + 1);
}
function Kr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var a = n[r], o = a.f, s = (o & ae) === 0;
      if (s && X(a, t), (o & Y) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        F == null || F.delete(l), (o & Et) === 0 && (o & qe && (a.f |= Et), Kr(l, Ve));
      } else s && ((o & Ye) !== 0 && xe !== null && xe.add(
        /** @type {Effect} */
        a
      ), xt(
        /** @type {Effect} */
        a
      ));
    }
}
function dt(e) {
  if (typeof e != "object" || e === null || cn in e)
    return e;
  const t = Ar(e);
  if (t !== ga && t !== _a)
    return e;
  var n = /* @__PURE__ */ new Map(), i = qr(e), r = /* @__PURE__ */ R(0), a = bt, o = (s) => {
    if (bt === a)
      return s();
    var l = E, f = bt;
    K(null), wr(a);
    var d = s();
    return K(l), wr(f), d;
  };
  return i && n.set("length", /* @__PURE__ */ R(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Aa();
        var d = n.get(l);
        return d === void 0 ? d = o(() => {
          var h = /* @__PURE__ */ R(f.value);
          return n.set(l, h), h;
        }) : w(d, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = n.get(l);
        if (f === void 0) {
          if (l in s) {
            const d = o(() => /* @__PURE__ */ R(W));
            n.set(l, d), Gt(r);
          }
        } else
          w(f, W), Gt(r);
        return !0;
      },
      get(s, l, f) {
        var g;
        if (l === cn)
          return e;
        var d = n.get(l), h = l in s;
        if (d === void 0 && (!h || (g = jt(s, l)) != null && g.writable) && (d = o(() => {
          var p = dt(h ? s[l] : W), k = /* @__PURE__ */ R(p);
          return k;
        }), n.set(l, d)), d !== void 0) {
          var v = u(d);
          return v === W ? void 0 : v;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var d = n.get(l);
          d && (f.value = u(d));
        } else if (f === void 0) {
          var h = n.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== W)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(s, l) {
        var v;
        if (l === cn)
          return !0;
        var f = n.get(l), d = f !== void 0 && f.v !== W || Reflect.has(s, l);
        if (f !== void 0 || q !== null && (!d || (v = jt(s, l)) != null && v.writable)) {
          f === void 0 && (f = o(() => {
            var g = d ? dt(s[l]) : W, p = /* @__PURE__ */ R(g);
            return p;
          }), n.set(l, f));
          var h = u(f);
          if (h === W)
            return !1;
        }
        return d;
      },
      set(s, l, f, d) {
        var m;
        var h = n.get(l), v = l in s;
        if (i && l === "length")
          for (var g = f; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var p = n.get(g + "");
            p !== void 0 ? w(p, W) : g in s && (p = o(() => /* @__PURE__ */ R(W)), n.set(g + "", p));
          }
        if (h === void 0)
          (!v || (m = jt(s, l)) != null && m.writable) && (h = o(() => /* @__PURE__ */ R(void 0)), w(h, dt(f)), n.set(l, h));
        else {
          v = h.v !== W;
          var k = o(() => dt(f));
          w(h, k);
        }
        var $ = Reflect.getOwnPropertyDescriptor(s, l);
        if ($ != null && $.set && $.set.call(d, f), !v) {
          if (i && typeof l == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), P = Number(l);
            Number.isInteger(P) && P >= T.v && w(T, P + 1);
          }
          Gt(r);
        }
        return !0;
      },
      ownKeys(s) {
        u(r);
        var l = Reflect.ownKeys(s).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== W;
        });
        for (var [f, d] of n)
          d.v !== W && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Oa();
      }
    }
  );
}
var _r, Xr, Zr, Qr;
function Bn() {
  if (_r === void 0) {
    _r = window, Xr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Zr = jt(t, "firstChild").get, Qr = jt(t, "nextSibling").get, pr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), pr(n) && (n.__t = void 0);
  }
}
function be(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return (
    /** @type {TemplateNode | null} */
    Zr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return (
    /** @type {TemplateNode | null} */
    Qr.call(e)
  );
}
function Ge(e, t) {
  if (!C)
    return /* @__PURE__ */ Te(e);
  var n = /* @__PURE__ */ Te(x);
  if (n === null)
    n = x.appendChild(be());
  else if (t && n.nodeType !== Qn) {
    var i = be();
    return n == null || n.before(i), ee(i), i;
  }
  return ee(n), n;
}
function mr(e, t = !1) {
  if (!C) {
    var n = /* @__PURE__ */ Te(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ae(n) : n;
  }
  if (t && (x == null ? void 0 : x.nodeType) !== Qn) {
    var i = be();
    return x == null || x.before(i), ee(i), i;
  }
  return x;
}
function ft(e, t = 1, n = !1) {
  let i = C ? x : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(i);
  if (!C)
    return i;
  if (n && (i == null ? void 0 : i.nodeType) !== Qn) {
    var a = be();
    return i === null ? r == null || r.after(a) : i.before(a), ee(a), a;
  }
  return ee(i), i;
}
function ei(e) {
  e.textContent = "";
}
function ti() {
  return !1;
}
function ni(e) {
  var t = E, n = q;
  K(null), $e(null);
  try {
    return e();
  } finally {
    K(t), $e(n);
  }
}
function Xa(e) {
  q === null && (E === null && Ca(), Sa()), Tt && ka();
}
function Za(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Me(e, t, n) {
  var i = q;
  i !== null && (i.f & ce) !== 0 && (e |= ce);
  var r = {
    ctx: ue,
    deps: null,
    nodes: null,
    f: e | ae | qe,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Qt(r), r.f |= Sn;
    } catch (s) {
      throw te(r), s;
    }
  else t !== null && xt(r);
  var a = r;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
  (a.f & St) === 0 && (a = a.first, (e & Ye) !== 0 && (e & It) !== 0 && a !== null && (a.f |= It)), a !== null && (a.parent = i, i !== null && Za(a, i), E !== null && (E.f & Y) !== 0 && (e & st) === 0)) {
    var o = (
      /** @type {Derived} */
      E
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return r;
}
function Xt() {
  return E !== null && !Fe;
}
function Qa(e) {
  const t = Me(Xn, null, !1);
  return X(t, G), t.teardown = e, t;
}
function Kt(e) {
  Xa();
  var t = (
    /** @type {Effect} */
    q.f
  ), n = !E && (t & Ue) !== 0 && (t & Sn) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      ue
    );
    (i.e ?? (i.e = [])).push(e);
  } else
    return ri(e);
}
function ri(e) {
  return Me(Kn | wa, e, !1);
}
function es(e) {
  Pe.ensure();
  const t = Me(st | St, e, !0);
  return () => {
    te(t);
  };
}
function ts(e) {
  Pe.ensure();
  const t = Me(st | St, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? yt(t, () => {
      te(t), i(void 0);
    }) : (te(t), i(void 0));
  });
}
function ii(e) {
  return Me(Kn, e, !1);
}
function ns(e) {
  return Me(Zn | St, e, !0);
}
function rr(e, t = 0) {
  return Me(Xn | t, e, !0);
}
function De(e, t = [], n = [], i = []) {
  Ya(i, t, n, (r) => {
    Me(Xn, () => e(...r.map(u)), !0);
  });
}
function ir(e, t = 0) {
  var n = Me(Ye | t, e, !0);
  return n;
}
function we(e) {
  return Me(Ue | St, e, !0);
}
function ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Tt, i = E;
    yr(!0), K(null);
    try {
      t.call(null);
    } finally {
      yr(n), K(i);
    }
  }
}
function si(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && ni(() => {
      r.abort(Rt);
    });
    var i = n.next;
    (n.f & st) !== 0 ? n.parent = null : te(n, t), n = i;
  }
}
function rs(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ue) === 0 && te(t), t = n;
  }
}
function te(e, t = !0) {
  var n = !1;
  (t || (e.f & Nr) !== 0) && e.nodes !== null && e.nodes.end !== null && (oi(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), si(e, t && !n), yn(e, 0), X(e, He);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  ai(e);
  var r = e.parent;
  r !== null && r.first !== null && li(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function oi(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Ae(e);
    e.remove(), e = n;
  }
}
function li(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function yt(e, t, n = !0) {
  var i = [];
  fi(e, i, !0);
  var r = () => {
    n && te(e), t && t();
  }, a = i.length;
  if (a > 0) {
    var o = () => --a || r();
    for (var s of i)
      s.out(o);
  } else
    r();
}
function fi(e, t, n) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next, o = (r.f & It) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Ue) !== 0 && (e.f & Ye) !== 0;
      fi(r, t, o ? n : !1), r = a;
    }
  }
}
function ar(e) {
  ci(e, !0);
}
function ci(e, t) {
  if ((e.f & ce) !== 0) {
    e.f ^= ce, (e.f & G) === 0 && (X(e, ae), xt(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, r = (n.f & It) !== 0 || (n.f & Ue) !== 0;
      ci(n, r ? t : !1), n = i;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function ui(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var r = n === i ? null : /* @__PURE__ */ Ae(n);
      t.append(n), n = r;
    }
}
let wt = !1;
function mn(e) {
  wt = e;
}
let Tt = !1;
function yr(e) {
  Tt = e;
}
let E = null, Fe = !1;
function K(e) {
  E = e;
}
let q = null;
function $e(e) {
  q = e;
}
let ne = null;
function di(e) {
  E !== null && (ne === null ? ne = [e] : ne.push(e));
}
let Q = null, oe = 0, he = null;
function is(e) {
  he = e;
}
let hi = 1, Zt = 0, bt = Zt;
function wr(e) {
  bt = e;
}
function pi() {
  return ++hi;
}
function sn(e) {
  var t = e.f;
  if ((t & ae) !== 0)
    return !0;
  if (t & Y && (e.f &= ~Et), (t & Ve) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var i = n.length, r = 0; r < i; r++) {
        var a = n[r];
        if (sn(
          /** @type {Derived} */
          a
        ) && Jr(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
      }
    (t & qe) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    F === null && X(e, G);
  }
  return !1;
}
function vi(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !(ne != null && ne.includes(e)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      (a.f & Y) !== 0 ? vi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? X(a, ae) : (a.f & G) !== 0 && X(a, Ve), xt(
        /** @type {Effect} */
        a
      ));
    }
}
function gi(e) {
  var p;
  var t = Q, n = oe, i = he, r = E, a = ne, o = ue, s = Fe, l = bt, f = e.f;
  Q = /** @type {null | Value[]} */
  null, oe = 0, he = null, E = (f & (Ue | st)) === 0 ? e : null, ne = null, Lt(e.ctx), Fe = !1, bt = ++Zt, e.ac !== null && (ni(() => {
    e.ac.abort(Rt);
  }), e.ac = null);
  try {
    e.f |= zn;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), v = e.deps;
    if (Q !== null) {
      var g;
      if (yn(e, oe), v !== null && oe > 0)
        for (v.length = oe + Q.length, g = 0; g < Q.length; g++)
          v[oe + g] = Q[g];
      else
        e.deps = v = Q;
      if (Xt() && (e.f & qe) !== 0)
        for (g = oe; g < v.length; g++)
          ((p = v[g]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && oe < v.length && (yn(e, oe), v.length = oe);
    if (Pr() && he !== null && !Fe && v !== null && (e.f & (Y | Ve | ae)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      he.length; g++)
        vi(
          he[g],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (Zt++, he !== null && (i === null ? i = he : i.push(.../** @type {Source[]} */
    he))), (e.f & rt) !== 0 && (e.f ^= rt), h;
  } catch (k) {
    return Mr(k);
  } finally {
    e.f ^= zn, Q = t, oe = n, he = i, E = r, ne = a, Lt(o), Fe = s, bt = l;
  }
}
function as(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = pa.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (t.f & Y) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (X(t, Ve), (t.f & qe) !== 0 && (t.f ^= qe, t.f &= ~Et), Vr(
    /** @type {Derived} **/
    t
  ), yn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function yn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      as(e, n[i]);
}
function Qt(e) {
  var t = e.f;
  if ((t & He) === 0) {
    X(e, G);
    var n = q, i = wt;
    q = e, wt = !0;
    try {
      (t & (Ye | ya)) !== 0 ? rs(e) : si(e), ai(e);
      var r = gi(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = hi;
      var a;
      jn && Fa && (e.f & ae) !== 0 && e.deps;
    } finally {
      wt = i, q = n;
    }
  }
}
function u(e) {
  var t = e.f, n = (t & Y) !== 0;
  if (E !== null && !Fe) {
    var i = q !== null && (q.f & He) !== 0;
    if (!i && !(ne != null && ne.includes(e))) {
      var r = E.deps;
      if ((E.f & zn) !== 0)
        e.rv < Zt && (e.rv = Zt, Q === null && r !== null && r[oe] === e ? oe++ : Q === null ? Q = [e] : Q.includes(e) || Q.push(e));
      else {
        (E.deps ?? (E.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [E] : a.includes(E) || a.push(E);
      }
    }
  }
  if (Tt) {
    if (it.has(e))
      return it.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), s = o.v;
      return ((o.f & G) === 0 && o.reactions !== null || mi(o)) && (s = nr(o)), it.set(o, s), s;
    }
  } else n && (!(F != null && F.has(e)) || A != null && A.is_fork && !Xt()) && (o = /** @type {Derived} */
  e, sn(o) && Jr(o), wt && Xt() && (o.f & qe) === 0 && _i(o));
  if (F != null && F.has(e))
    return F.get(e);
  if ((e.f & rt) !== 0)
    throw e.v;
  return e.v;
}
function _i(e) {
  if (e.deps !== null) {
    e.f ^= qe;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & Y) !== 0 && (t.f & qe) === 0 && _i(
        /** @type {Derived} */
        t
      );
  }
}
function mi(e) {
  if (e.v === W) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || (t.f & Y) !== 0 && mi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function sr(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const ss = -7169;
function X(e, t) {
  e.f = e.f & ss | t;
}
const yi = /* @__PURE__ */ new Set(), Hn = /* @__PURE__ */ new Set();
function os(e) {
  for (var t = 0; t < e.length; t++)
    yi.add(e[t]);
  for (var n of Hn)
    n(e);
}
let br = null;
function ln(e) {
  var $;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = (($ = e.composedPath) == null ? void 0 : $.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  br = e;
  var o = 0, s = br === e && e.__root;
  if (s) {
    var l = r.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = r.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (a = /** @type {Element} */
  r[o] || e.target, a !== t) {
    vn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = E, h = q;
    K(null), $e(null);
    try {
      for (var v, g = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var k = a["__" + i];
          k != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && k.call(a, e);
        } catch (T) {
          v ? g.push(T) : v = T;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (v) {
        for (let T of g)
          queueMicrotask(() => {
            throw T;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, K(d), $e(h);
    }
  }
}
function wi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function at(e, t) {
  var n = (
    /** @type {Effect} */
    q
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  var n = (t & ua) !== 0, i = (t & da) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (C)
      return at(x, null), x;
    r === void 0 && (r = wi(a ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Te(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Xr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      at(s, l);
    } else
      at(o, o);
    return o;
  };
}
function $r() {
  if (C)
    return at(x, null), x;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = be();
  return e.append(t, n), at(t, n), e;
}
function pe(e, t) {
  if (C) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      q
    );
    ((n.f & Sn) === 0 || n.nodes.end === null) && (n.nodes.end = x), Dt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const ls = ["touchstart", "touchmove"];
function fs(e) {
  return ls.includes(e);
}
function cs(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function bi(e, t) {
  return $i(e, t);
}
function us(e, t) {
  Bn(), t.intro = t.intro ?? !1;
  const n = t.target, i = C, r = x;
  try {
    for (var a = /* @__PURE__ */ Te(n); a && (a.nodeType !== Ct || /** @type {Comment} */
    a.data !== Tr); )
      a = /* @__PURE__ */ Ae(a);
    if (!a)
      throw $t;
    Ce(!0), ee(
      /** @type {Comment} */
      a
    );
    const o = $i(e, { ...t, anchor: a });
    return Ce(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== $t && console.warn("Failed to hydrate: ", o), t.recover === !1 && qa(), Bn(), ei(n), Ce(!1), bi(e, t);
  } finally {
    Ce(i), ee(r);
  }
}
const Nt = /* @__PURE__ */ new Map();
function $i(e, { target: t, anchor: n, props: i = {}, events: r, context: a, intro: o = !0 }) {
  Bn();
  var s = /* @__PURE__ */ new Set(), l = (h) => {
    for (var v = 0; v < h.length; v++) {
      var g = h[v];
      if (!s.has(g)) {
        s.add(g);
        var p = fs(g);
        t.addEventListener(g, ln, { passive: p });
        var k = Nt.get(g);
        k === void 0 ? (document.addEventListener(g, ln, { passive: p }), Nt.set(g, 1)) : Nt.set(g, k + 1);
      }
    }
  };
  l(xn(yi)), Hn.add(l);
  var f = void 0, d = ts(() => {
    var h = n ?? t.appendChild(be());
    return Ba(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          er({});
          var g = (
            /** @type {ComponentContext} */
            ue
          );
          g.c = a;
        }
        if (r && (i.$$events = r), C && at(
          /** @type {TemplateNode} */
          v,
          null
        ), f = e(v, i) || {}, C && (q.nodes.end = x, x === null || x.nodeType !== Ct || /** @type {Comment} */
        x.data !== Gn))
          throw an(), $t;
        a && tr();
      }
    ), () => {
      var p;
      for (var v of s) {
        t.removeEventListener(v, ln);
        var g = (
          /** @type {number} */
          Nt.get(v)
        );
        --g === 0 ? (document.removeEventListener(v, ln), Nt.delete(v)) : Nt.set(v, g);
      }
      Hn.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Yn.set(f, d), f;
}
let Yn = /* @__PURE__ */ new WeakMap();
function ds(e, t) {
  const n = Yn.get(e);
  return n ? (Yn.delete(e), n(t)) : Promise.resolve();
}
var Se, ze, fe, mt, nn, rn, $n;
class hs {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    z(this, "anchor");
    /** @type {Map<Batch, Key>} */
    S(this, Se, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    S(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    S(this, fe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    S(this, mt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    S(this, nn, !0);
    S(this, rn, () => {
      var t = (
        /** @type {Batch} */
        A
      );
      if (c(this, Se).has(t)) {
        var n = (
          /** @type {Key} */
          c(this, Se).get(t)
        ), i = c(this, ze).get(n);
        if (i)
          ar(i), c(this, mt).delete(n);
        else {
          var r = c(this, fe).get(n);
          r && (c(this, ze).set(n, r.effect), c(this, fe).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, o] of c(this, Se)) {
          if (c(this, Se).delete(a), a === t)
            break;
          const s = c(this, fe).get(o);
          s && (te(s.effect), c(this, fe).delete(o));
        }
        for (const [a, o] of c(this, ze)) {
          if (a === n || c(this, mt).has(a)) continue;
          const s = () => {
            if (Array.from(c(this, Se).values()).includes(a)) {
              var f = document.createDocumentFragment();
              ui(o, f), f.append(be()), c(this, fe).set(a, { effect: o, fragment: f });
            } else
              te(o);
            c(this, mt).delete(a), c(this, ze).delete(a);
          };
          c(this, nn) || !i ? (c(this, mt).add(a), yt(o, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    S(this, $n, (t) => {
      c(this, Se).delete(t);
      const n = Array.from(c(this, Se).values());
      for (const [i, r] of c(this, fe))
        n.includes(i) || (te(r.effect), c(this, fe).delete(i));
    });
    this.anchor = t, y(this, nn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var i = (
      /** @type {Batch} */
      A
    ), r = ti();
    if (n && !c(this, ze).has(t) && !c(this, fe).has(t))
      if (r) {
        var a = document.createDocumentFragment(), o = be();
        a.append(o), c(this, fe).set(t, {
          effect: we(() => n(o)),
          fragment: a
        });
      } else
        c(this, ze).set(
          t,
          we(() => n(this.anchor))
        );
    if (c(this, Se).set(i, t), r) {
      for (const [s, l] of c(this, ze))
        s === t ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [s, l] of c(this, fe))
        s === t ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(c(this, rn)), i.ondiscard(c(this, $n));
    } else
      C && (this.anchor = x), c(this, rn).call(this);
  }
}
Se = new WeakMap(), ze = new WeakMap(), fe = new WeakMap(), mt = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), $n = new WeakMap();
function Ei(e) {
  ue === null && Ea(), Kt(() => {
    const t = sr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ke(e, t, n = !1) {
  C && Dt();
  var i = new hs(e), r = n ? It : 0;
  function a(o, s) {
    if (C) {
      const f = Rr(e) === En;
      if (o === f) {
        var l = gn();
        ee(l), i.anchor = l, Ce(!1), i.ensure(o, s), Ce(!0);
        return;
      }
    }
    i.ensure(o, s);
  }
  ir(() => {
    var o = !1;
    t((s, l = !0) => {
      o = !0, a(l, s);
    }), o || a(!1, null);
  }, r);
}
function ps(e, t, n) {
  for (var i = [], r = t.length, a, o = t.length, s = 0; s < r; s++) {
    let h = t[s];
    yt(
      h,
      () => {
        if (a) {
          if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Un(xn(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = i.length === 0 && n !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        f.parentNode
      );
      ei(d), d.append(f), e.items.clear();
    }
    Un(t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Un(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    te(e[n], t);
}
var Er;
function vs(e, t, n, i, r, a = null) {
  var o = e, s = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = C ? ee(/* @__PURE__ */ Te(l)) : l.appendChild(be());
  }
  C && Dt();
  var f = null, d = /* @__PURE__ */ Wa(() => {
    var $ = n();
    return qr($) ? $ : $ == null ? [] : xn($);
  }), h, v = !0;
  function g() {
    k.fallback = f, gs(k, h, o, t, i), f !== null && (h.length === 0 ? (f.f & nt) === 0 ? ar(f) : (f.f ^= nt, Vt(f, null, o)) : yt(f, () => {
      f = null;
    }));
  }
  var p = ir(() => {
    h = /** @type {V[]} */
    u(d);
    var $ = h.length;
    let T = !1;
    if (C) {
      var P = Rr(o) === En;
      P !== ($ === 0) && (o = gn(), ee(o), Ce(!1), T = !0);
    }
    for (var m = /* @__PURE__ */ new Set(), U = (
      /** @type {Batch} */
      A
    ), V = ti(), L = 0; L < $; L += 1) {
      C && x.nodeType === Ct && /** @type {Comment} */
      x.data === Gn && (o = /** @type {Comment} */
      x, T = !0, Ce(!1));
      var re = h[L], B = i(re, L), I = v ? null : s.get(B);
      I ? (I.v && Ht(I.v, re), I.i && Ht(I.i, L), V && U.skipped_effects.delete(I.e)) : (I = _s(
        s,
        v ? o : Er ?? (Er = be()),
        re,
        B,
        L,
        r,
        t,
        n
      ), v || (I.e.f |= nt), s.set(B, I)), m.add(B);
    }
    if ($ === 0 && a && !f && (v ? f = we(() => a(o)) : (f = we(() => a(Er ?? (Er = be()))), f.f |= nt)), C && $ > 0 && ee(gn()), !v)
      if (V) {
        for (const [An, ot] of s)
          m.has(An) || U.skipped_effects.add(ot.e);
        U.oncommit(g), U.ondiscard(() => {
        });
      } else
        g();
    T && Ce(!0), u(d);
  }), k = { effect: p, items: s, outrogroups: null, fallback: f };
  v = !1, C && (o = x);
}
function gs(e, t, n, i, r) {
  var B;
  var a = t.length, o = e.items, s = e.effect.first, l, f = null, d = [], h = [], v, g, p, k;
  for (k = 0; k < a; k += 1) {
    if (v = t[k], g = r(v, k), p = /** @type {EachItem} */
    o.get(g).e, e.outrogroups !== null)
      for (const I of e.outrogroups)
        I.pending.delete(p), I.done.delete(p);
    if ((p.f & nt) !== 0)
      if (p.f ^= nt, p === s)
        Vt(p, null, n);
      else {
        var $ = f ? f.next : s;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), We(e, f, p), We(e, p, $), Vt(p, $, n), f = p, d = [], h = [], s = f.next;
        continue;
      }
    if ((p.f & ce) !== 0 && ar(p), p !== s) {
      if (l !== void 0 && l.has(p)) {
        if (d.length < h.length) {
          var T = h[0], P;
          f = T.prev;
          var m = d[0], U = d[d.length - 1];
          for (P = 0; P < d.length; P += 1)
            Vt(d[P], T, n);
          for (P = 0; P < h.length; P += 1)
            l.delete(h[P]);
          We(e, m.prev, U.next), We(e, f, m), We(e, U, T), s = T, f = U, k -= 1, d = [], h = [];
        } else
          l.delete(p), Vt(p, s, n), We(e, p.prev, p.next), We(e, p, f === null ? e.effect.first : f.next), We(e, f, p), f = p;
        continue;
      }
      for (d = [], h = []; s !== null && s !== p; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(s), h.push(s), s = s.next;
      if (s === null)
        continue;
    }
    (p.f & nt) === 0 && d.push(p), f = p, s = p.next;
  }
  if (e.outrogroups !== null) {
    for (const I of e.outrogroups)
      I.pending.size === 0 && (Un(xn(I.done)), (B = e.outrogroups) == null || B.delete(I));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || l !== void 0) {
    var V = [];
    if (l !== void 0)
      for (p of l)
        (p.f & ce) === 0 && V.push(p);
    for (; s !== null; )
      (s.f & ce) === 0 && s !== e.fallback && V.push(s), s = s.next;
    var L = V.length;
    if (L > 0) {
      var re = a === 0 ? n : null;
      ps(e, V, re);
    }
  }
}
function _s(e, t, n, i, r, a, o, s) {
  var l = (o & la) !== 0 ? (o & ca) === 0 ? /* @__PURE__ */ Gr(n, !1, !1) : kt(n) : null, f = (o & fa) !== 0 ? kt(r) : null;
  return {
    v: l,
    i: f,
    e: we(() => (a(t, l ?? n, f ?? r, s), () => {
      e.delete(i);
    }))
  };
}
function Vt(e, t, n) {
  if (e.nodes)
    for (var i = e.nodes.start, r = e.nodes.end, a = t && (t.f & nt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; i !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(i)
      );
      if (a.before(i), i === r)
        return;
      i = o;
    }
}
function We(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function ms(e, t, n = !1, i = !1, r = !1) {
  var a = e, o = "";
  De(() => {
    var s = (
      /** @type {Effect} */
      q
    );
    if (o === (o = t() ?? "")) {
      C && Dt();
      return;
    }
    if (s.nodes !== null && (oi(
      s.nodes.start,
      /** @type {TemplateNode} */
      s.nodes.end
    ), s.nodes = null), o !== "") {
      if (C) {
        x.data;
        for (var l = Dt(), f = l; l !== null && (l.nodeType !== Ct || /** @type {Comment} */
        l.data !== ""); )
          f = l, l = /* @__PURE__ */ Ae(l);
        if (l === null)
          throw an(), $t;
        at(x, f), a = ee(l);
        return;
      }
      var d = o + "";
      n ? d = `<svg>${d}</svg>` : i && (d = `<math>${d}</math>`);
      var h = wi(d);
      if ((n || i) && (h = /** @type {Element} */
      /* @__PURE__ */ Te(h)), at(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Te(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || i)
        for (; /* @__PURE__ */ Te(h); )
          a.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Te(h)
          );
      else
        a.before(h);
    }
  });
}
function xi(e, t) {
  ii(() => {
    var n = e.getRootNode(), i = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, i.appendChild(r);
    }
  });
}
function ys(e, t, n) {
  var i = e == null ? "" : "" + e;
  return t && (i = i ? i + " " + t : t), i === "" ? null : i;
}
function ws(e, t) {
  return e == null ? null : String(e);
}
function Ee(e, t, n, i, r, a) {
  var o = e.__className;
  if (C || o !== n || o === void 0) {
    var s = ys(n, i);
    (!C || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = n;
  }
  return a;
}
function Xe(e, t, n, i) {
  var r = e.__style;
  if (C || r !== t) {
    var a = ws(t);
    (!C || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  }
  return i;
}
const bs = Symbol("is custom element"), $s = Symbol("is html");
function ki(e, t, n, i) {
  var r = Es(e);
  C && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "loading" && (e[$a] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Si(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function xr(e, t, n) {
  var i = E, r = q;
  let a = C;
  C && Ce(!1), K(null), $e(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Vn.has(e.getAttribute("is") || e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.getAttribute("is") || e.tagName.toLowerCase()) ? Si(e).includes(t) : n && typeof n == "object") ? e[t] = n : ki(e, t, n == null ? n : String(n));
  } finally {
    K(i), $e(r), a && Ce(!0);
  }
}
function Es(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [bs]: e.nodeName.includes("-"),
      [$s]: e.namespaceURI === ha
    })
  );
}
var Vn = /* @__PURE__ */ new Map();
function Si(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Vn.get(t);
  if (n) return n;
  Vn.set(t, n = []);
  for (var i, r = e, a = Element.prototype; a !== r; ) {
    i = va(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = Ar(r);
  }
  return n;
}
function kr(e, t) {
  return e === t || (e == null ? void 0 : e[cn]) === t;
}
function Ze(e = {}, t, n, i) {
  return ii(() => {
    var r, a;
    return rr(() => {
      r = a, a = [], sr(() => {
        e !== n(...a) && (t(e, ...a), r && kr(n(...r), e) && t(null, ...r));
      });
    }), () => {
      Cn(() => {
        a && kr(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ke(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), a = !0, o = () => (a && (a = !1, r = /** @type {V} */
  i), r), s;
  s = /** @type {V} */
  e[t], s === void 0 && i !== void 0 && (s = o());
  var l;
  l = () => {
    var v = (
      /** @type {V} */
      e[t]
    );
    return v === void 0 ? o() : (a = !0, v);
  };
  var f = !1, d = /* @__PURE__ */ qn(() => (f = !1, l())), h = (
    /** @type {Effect} */
    q
  );
  return (
    /** @type {() => V} */
    (function(v, g) {
      if (arguments.length > 0) {
        const p = g ? u(d) : v;
        return w(d, p), f = !0, r !== void 0 && (r = p), v;
      }
      return Tt && f || (h.f & He) !== 0 ? d.v : u(d);
    })
  );
}
function xs(e) {
  return new ks(e);
}
var Be, _e;
class ks {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    S(this, Be);
    /** @type {Record<string, any>} */
    S(this, _e);
    var a;
    var n = /* @__PURE__ */ new Map(), i = (o, s) => {
      var l = /* @__PURE__ */ Gr(s, !1, !1);
      return n.set(o, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return u(n.get(s) ?? i(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === ba ? !0 : (u(n.get(s) ?? i(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, l) {
          return w(n.get(s) ?? i(s, l), l), Reflect.set(o, s, l);
        }
      }
    );
    y(this, _e, (t.hydrate ? us : bi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && me(), y(this, Be, r.$$events);
    for (const o of Object.keys(c(this, _e)))
      o === "$set" || o === "$destroy" || o === "$on" || vn(this, o, {
        get() {
          return c(this, _e)[o];
        },
        /** @param {any} value */
        set(s) {
          c(this, _e)[o] = s;
        },
        enumerable: !0
      });
    c(this, _e).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(r, o);
    }, c(this, _e).$destroy = () => {
      ds(c(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    c(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    c(this, Be)[t] = c(this, Be)[t] || [];
    const i = (...r) => n.call(this, ...r);
    return c(this, Be)[t].push(i), () => {
      c(this, Be)[t] = c(this, Be)[t].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    c(this, _e).$destroy();
  }
}
Be = new WeakMap(), _e = new WeakMap();
let Ci;
typeof HTMLElement == "function" && (Ci = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    z(this, "$$ctor");
    /** Slots */
    z(this, "$$s");
    /** @type {any} The Svelte component instance */
    z(this, "$$c");
    /** Whether or not the custom element is connected */
    z(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    z(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    z(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    z(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    z(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    z(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    z(this, "$$me");
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const o = document.createElement("slot");
          r !== "default" && (o.name = r), pe(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = Ss(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = hn(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = xs({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = es(() => {
        rr(() => {
          var r;
          this.$$r = !0;
          for (const a of pn(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = hn(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const a of this.$$l[r]) {
          const o = this.$$c.$on(r, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = hn(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return pn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function hn(e, t, n, i) {
  var a;
  const r = (a = n[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ss(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Ti(e, t, n, i, r, a) {
  let o = class extends Ci {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return pn(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return pn(t).forEach((s) => {
    vn(o.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var h;
        l = hn(s, l, t), this.$$d[s] = l;
        var f = this.$$c;
        if (f) {
          var d = (h = jt(f, s)) == null ? void 0 : h.get;
          d ? f[s] = l : f.$set({ [s]: l });
        }
      }
    });
  }), i.forEach((s) => {
    vn(o.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), a && (o = a(o)), e.element = /** @type {any} */
  o, o;
}
class or extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(t, ...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, or), this.name = "TimeoutError", this.timeout = t, this.message = `Timed out in ${t} ms.`;
  }
}
const Cs = (e, t) => {
  const n = new Promise((i, r) => {
    setTimeout(() => {
      r(new or(e));
    }, e);
  });
  return Promise.race([t, n]);
}, qi = (e) => {
  if (typeof e.getCardSize == "function")
    try {
      return Cs(500, e.getCardSize()).catch(
        () => 1
      );
    } catch {
      return 1;
    }
  return customElements.get(e.localName) ? 1 : customElements.whenDefined(e.localName).then(() => qi(e));
};
var Ts = /* @__PURE__ */ Je('<span class="loading svelte-lv9s7p">Loading...</span>'), qs = /* @__PURE__ */ Je("<div><!></div>");
const As = {
  hash: "svelte-lv9s7p",
  code: `.loading.svelte-lv9s7p {padding:1em;display:block;}.animation.svelte-lv9s7p {hui-card {display:flex;flex-direction:column;}}.outer-container.animation.svelte-lv9s7p {transition:margin-bottom 0.35s ease;}.outer-container.animation.open.svelte-lv9s7p,
  .outer-container.animation.opening.svelte-lv9s7p {margin-bottom:inherit;}.outer-container.animation.close.svelte-lv9s7p,
  .outer-container.animation.closing.svelte-lv9s7p {margin-bottom:var(--expander-animation-height, -100%);}.outer-container.animation.opening.svelte-lv9s7p {
    animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;
    -webkit-animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;}.outer-container.animation.closing.svelte-lv9s7p {
      animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;
      -webkit-animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;}.outer-container.svelte-lv9s7p > hui-card {margin-top:var(--child-card-margin-top, 0px);}
  @keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
    @keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }`
};
function Jn(e, t) {
  er(t, !0), xi(e, As);
  const n = ke(t, "config"), i = ke(t, "hass"), r = ke(t, "preview"), a = ke(t, "marginTop", 7, "0px"), o = ke(t, "open"), s = ke(t, "animation", 7, !0), l = ke(t, "animationState"), f = ke(t, "clearCardCss", 7, !1);
  let d = null, h = /* @__PURE__ */ R(null), v = /* @__PURE__ */ R(!0), g = /* @__PURE__ */ R(0);
  const p = JSON.parse(JSON.stringify(n()));
  Kt(() => {
    u(h) && (u(h).hass = i());
  }), Kt(() => {
    u(h) && r() !== void 0 && (u(h).preview = r());
  }), Kt(() => {
    var m;
    u(h) && (p.disabled = !o(), (m = u(h)._element) == null || m.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: o() }, bubbles: !0, composed: !1 })));
  }), Ei(async () => {
    const m = document.createElement("hui-card");
    m.hass = i(), m.preview = r(), p.disabled = !o(), m.config = p, m.load(), d == null || d.appendChild(m), w(h, m, !0), w(v, !1), u(h).addEventListener(
      "ll-upgrade",
      (U) => {
        var V;
        U.stopPropagation(), (V = u(h)) != null && V._element && i() && (u(h)._element.hass = i());
      },
      { capture: !0 }
    ), f() && (m.style.setProperty("--ha-card-background", "transparent"), m.style.setProperty("--ha-card-box-shadow", "none"), m.style.setProperty("--ha-card-border-color", "transparent"), m.style.setProperty("--ha-card-border-width", "0px"), m.style.setProperty("--ha-card-border-radius", "0px"), m.style.setProperty("--ha-card-backdrop-filter", "none")), s() && (w(g, await qi(m) * 56), d && w(g, u(g) + (window.getComputedStyle(d).marginTop ? parseFloat(window.getComputedStyle(d).marginTop) : 0)), new ResizeObserver((V) => {
      for (const L of V)
        if (L.contentBoxSize) {
          const re = Array.isArray(L.contentBoxSize) ? L.contentBoxSize[0] : L.contentBoxSize;
          re.blockSize && (w(g, re.blockSize, !0), u(h) && w(g, u(g) + (window.getComputedStyle(u(h)).marginTop ? parseFloat(window.getComputedStyle(u(h)).marginTop) : 0)));
        } else L.contentRect && (w(g, L.contentRect.height, !0), u(h) && w(g, u(g) + (window.getComputedStyle(u(h)).marginTop ? parseFloat(window.getComputedStyle(u(h)).marginTop) : 0)));
    }).observe(m));
  });
  var k = {
    get config() {
      return n();
    },
    set config(m) {
      n(m), me();
    },
    get hass() {
      return i();
    },
    set hass(m) {
      i(m), me();
    },
    get preview() {
      return r();
    },
    set preview(m) {
      r(m), me();
    },
    get marginTop() {
      return a();
    },
    set marginTop(m = "0px") {
      a(m), me();
    },
    get open() {
      return o();
    },
    set open(m) {
      o(m), me();
    },
    get animation() {
      return s();
    },
    set animation(m = !0) {
      s(m), me();
    },
    get animationState() {
      return l();
    },
    set animationState(m) {
      l(m), me();
    },
    get clearCardCss() {
      return f();
    },
    set clearCardCss(m = !1) {
      f(m), me();
    }
  }, $ = qs(), T = Ge($);
  {
    var P = (m) => {
      var U = Ts();
      pe(m, U);
    };
    Ke(T, (m) => {
      u(v) && m(P);
    });
  }
  return Ie($), Ze($, (m) => d = m, () => d), De(() => {
    Ee($, 1, `outer-container${o() ? " open" : " close"}${s() ? " animation " + l() : ""}`, "svelte-lv9s7p"), Xe($, `--child-card-margin-top: ${(o() ? a() : "0px") ?? ""};${u(g) ? ` --expander-animation-height: -${u(g)}px;` : ""}`);
  }), pe(e, $), tr(k);
}
customElements.define("expander-sub-card", Ti(
  Jn,
  {
    config: {},
    hass: {},
    preview: {},
    marginTop: {},
    open: {},
    animation: {},
    animationState: {},
    clearCardCss: {}
  },
  [],
  [],
  !0
));
const Sr = (e, t) => {
  var n;
  (n = e.dispatchEvent) == null || n.call(
    e,
    new CustomEvent(
      "haptic",
      { detail: t, bubbles: !0, composed: !0 }
    )
  );
}, Wn = {
  gap: "0.0em",
  "expanded-gap": "0.6em",
  padding: "1em",
  clear: !1,
  "clear-children": !1,
  title: " ",
  "overlay-margin": "0.0em",
  "child-padding": "0.0em",
  "child-margin-top": "0.0em",
  "button-background": "transparent",
  "expander-card-background": "var(--ha-card-background,var(--card-background-color,#fff))",
  "header-color": "var(--primary-text-color,#fff)",
  "arrow-color": "var(--arrow-color,var(--primary-text-color,#fff))",
  "expander-card-display": "block",
  "title-card-clickable": !1,
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  icon: "mdi:chevron-down",
  "icon-rotate-degree": "180deg",
  animation: !0
};
var Os = /* @__PURE__ */ Je("<ha-ripple></ha-ripple>", 2), Ns = /* @__PURE__ */ Je('<button aria-label="Toggle button"><ha-icon></ha-icon> <!></button>', 2), Rs = /* @__PURE__ */ Je("<ha-ripple></ha-ripple>", 2), js = /* @__PURE__ */ Je('<div id="id1"><div id="id2"><!></div> <!> <!></div>'), zs = /* @__PURE__ */ Je("<button><div> </div> <ha-icon></ha-icon> <ha-ripple></ha-ripple></button>", 2), Ps = /* @__PURE__ */ Je("<div><div></div></div>"), Fs = /* @__PURE__ */ Je("<ha-card><!> <!> <!></ha-card>", 2);
const Ms = {
  hash: "svelte-1jqiztq",
  code: `.expander-card.svelte-1jqiztq {display:var(--expander-card-display,block);gap:var(--gap);padding:var(--padding);background:var(--card-background,#fff);-webkit-tap-highlight-color:transparent;}.expander-card.animation.svelte-1jqiztq {transition:gap 0.35s ease, background-color var(--background-animation-duration, 0) ease;}.children-wrapper.svelte-1jqiztq {display:flex;flex-direction:column;}.children-wrapper.animation.opening.svelte-1jqiztq,
    .children-wrapper.animation.closing.svelte-1jqiztq {overflow:hidden;}.children-container.animation.svelte-1jqiztq {transition:padding 0.35s ease, gap 0.35s ease;}.children-container.svelte-1jqiztq {padding:var(--child-padding);display:var(--expander-card-display,block);gap:var(--gap);}.clear.svelte-1jqiztq {background:none !important;background-color:transparent !important;border-style:none !important;box-shadow:none !important;}.title-card-header.svelte-1jqiztq {display:flex;align-items:center;justify-content:space-between;flex-direction:row;position:relative;}.title-card-header.clickable.svelte-1jqiztq {cursor:pointer;border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));}.title-card-header-overlay.svelte-1jqiztq {display:block;}.title-card-container.svelte-1jqiztq {width:100%;padding:var(--title-padding);}.header.svelte-1jqiztq {display:flex;flex-direction:row;align-items:center;padding:0.85em 0.85em;background:var(--button-background);border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));width:var(--header-width,auto);color:var(--header-color,#fff);cursor:pointer;position:relative;}.header-overlay.svelte-1jqiztq {position:absolute;top:0;right:0;margin:var(--overlay-margin);height:var(--expander-card-overlay-height, auto);z-index:1;}.title-card-header-overlay.clickable.svelte-1jqiztq  > .header-overlay:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);justify-content:flex-end;}.title-card-header-overlay.clickable.svelte-1jqiztq > .title-card-container:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);}.title.svelte-1jqiztq {width:100%;text-align:left;}.ico.animation.svelte-1jqiztq {transition-property:transform;transition-duration:0.35s;}.ico.svelte-1jqiztq {color:var(--arrow-color,var(--primary-text-color,#fff));}.flipped.svelte-1jqiztq {transform:rotate(var(--icon-rotate-degree,180deg));}`
};
function Is(e, t) {
  er(t, !0), xi(e, Ms);
  const n = ke(t, "hass"), i = ke(t, "preview"), r = ke(t, "config", 7, Wn);
  let a = /* @__PURE__ */ R(!1), o = /* @__PURE__ */ R(null), s = /* @__PURE__ */ R(dt(!!i())), l = /* @__PURE__ */ R(dt(!!i())), f = /* @__PURE__ */ R(!0), d = /* @__PURE__ */ R("idle"), h = /* @__PURE__ */ R(null), v = /* @__PURE__ */ R(0), g = /* @__PURE__ */ R(0), p = /* @__PURE__ */ R(null), k = /* @__PURE__ */ R(null), $ = /* @__PURE__ */ R(null), T = /* @__PURE__ */ R(null);
  const P = r()["storage-id"], m = "expander-open-" + P, U = `<style>${r().style}</style>`;
  w(f, i() || (V(r()["show-button-users"]) ?? !0), !0), Kt(() => {
    i() === u(l) || i() === void 0 || (w(l, i(), !0), u(l) ? (B(!0), w(f, !0)) : (L(), w(f, V(r()["show-button-users"]) ?? !0, !0)));
  });
  function V(_) {
    var b, O, j, de;
    if (_ !== void 0)
      return ((O = (b = n()) == null ? void 0 : b.user) == null ? void 0 : O.name) !== void 0 && _.includes((de = (j = n()) == null ? void 0 : j.user) == null ? void 0 : de.name);
  }
  function L() {
    if (V(r()["start-expanded-users"]))
      B(!0);
    else if (P !== void 0)
      try {
        const _ = localStorage.getItem(m);
        _ === null ? r().expanded !== void 0 && B(r().expanded) : w(s, _ ? _ === "true" : u(s), !0);
      } catch (_) {
        console.error(_);
      }
    else
      r().expanded !== void 0 ? B(r().expanded) : B(!1);
  }
  function re(_) {
    u(h) && (clearTimeout(u(h)), w(h, null));
    const b = _ !== void 0 ? _ : !u(s);
    r().animation ? (w(d, b ? "opening" : "closing", !0), b ? (B(!0), w(
      h,
      setTimeout(
        () => {
          w(d, "idle"), w(h, null);
        },
        350
      ),
      !0
    )) : w(
      h,
      setTimeout(
        () => {
          B(!1), w(d, "idle"), w(h, null);
        },
        350
      ),
      !0
    )) : B(b);
  }
  function B(_) {
    if (w(s, _, !0), P !== void 0)
      try {
        localStorage.setItem(m, u(s) ? "true" : "false");
      } catch (b) {
        console.error(b);
      }
    u(s) && u(v) === 0 && w(v, 0.35);
  }
  function I(_) {
    var O, j;
    const b = (j = (O = _.detail) == null ? void 0 : O["expander-card"]) == null ? void 0 : j.data;
    (b == null ? void 0 : b["expander-card-id"]) === r()["expander-card-id"] && (b.action === "open" && !u(s) ? re(!0) : b.action === "close" && u(s) ? re(!1) : b.action === "toggle" && re());
  }
  function An() {
    document.body.removeEventListener("ll-custom", I);
  }
  let ot, Yt = !1, lr = 0, fr = 0;
  const Ai = (_) => {
    u(T) && (u(T).disabled = !0), ot = _.target, lr = _.touches[0].clientX, fr = _.touches[0].clientY, Yt = !1;
  }, Oi = (_) => {
    const b = _.touches[0].clientX, O = _.touches[0].clientY;
    (Math.abs(b - lr) > 10 || Math.abs(O - fr) > 10) && (Yt = !0);
  }, Ni = () => {
    u(T) && (u(T).disabled = !1), ot = void 0, Yt = !1;
  }, Ri = () => {
    u(T) && (u(T).disabled = !1);
  }, ji = (_) => {
    !Yt && ot === _.target && r()["title-card-clickable"] && (Sr(ot, "light"), re(), w(a, !0), w(
      o,
      window.setTimeout(
        () => {
          w(a, !1), w(o, null);
        },
        100
      ),
      !0
    ), u(T) && (u(T).startPressAnimation(), u(T).endPressAnimation())), ot = void 0, Yt = !1;
  };
  Ei(() => {
    const _ = r()["min-width-expanded"], b = r()["max-width-expanded"], O = document.body.offsetWidth;
    _ && b ? r().expanded = O >= _ && O <= b : _ ? r().expanded = O >= _ : b && (r().expanded = O <= b), i() ? B(!0) : L(), document.body.addEventListener("ll-custom", I);
    let j;
    return r()["title-card-clickable"] && !r()["title-card-button-overlay"] && u(k) ? j = u(k) : u($) && (j = u($)), j && (j.addEventListener("touchstart", Ai, { passive: !0, capture: !0 }), j.addEventListener("touchmove", Oi, { passive: !0, capture: !0 }), j.addEventListener("touchcancel", Ni, { passive: !0, capture: !0 }), j.addEventListener("touchend", Ri, { passive: !0, capture: !0 }), j.addEventListener("touchend", ji, { passive: !1, capture: !1 })), r()["title-card-clickable"] && r()["title-card-button-overlay"] && u(k) && new ResizeObserver(() => {
      if (u($) && u(k) && u(p)) {
        const se = u(k).getBoundingClientRect();
        w(g, se.height - parseFloat(getComputedStyle(u($)).marginTop) - parseFloat(getComputedStyle(u($)).marginBottom) + parseFloat(getComputedStyle(u(p)).paddingTop) + parseFloat(getComputedStyle(u(p)).paddingBottom));
      }
    }).observe(u(k)), An;
  });
  const On = (_) => {
    if (u(a))
      return _.preventDefault(), _.stopImmediatePropagation(), w(a, !1), u(o) && (clearTimeout(u(o)), w(o, null)), !1;
    Sr(_.currentTarget, "light"), re();
  };
  var zi = {
    get hass() {
      return n();
    },
    set hass(_) {
      n(_), me();
    },
    get preview() {
      return i();
    },
    set preview(_) {
      i(_), me();
    },
    get config() {
      return r();
    },
    set config(_ = Wn) {
      r(_), me();
    }
  }, qt = Fs(), cr = Ge(qt);
  {
    var Pi = (_) => {
      var b = js();
      b.__click = function(...J) {
        var Z;
        (Z = r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? On : null) == null || Z.apply(this, J);
      };
      var O = Ge(b), j = Ge(O);
      Jn(j, {
        get hass() {
          return n();
        },
        get preview() {
          return i();
        },
        get config() {
          return r()["title-card"];
        },
        animation: !1,
        open: !0,
        animationState: "idle",
        get clearCardCss() {
          return r()["clear-children"];
        }
      }), Ie(O);
      var de = ft(O, 2);
      {
        var se = (J) => {
          var Z = Ns();
          Z.__click = function(...lt) {
            var Ut;
            (Ut = !r()["title-card-clickable"] || r()["title-card-button-overlay"] ? On : null) == null || Ut.apply(this, lt);
          };
          var Oe = Ge(Z);
          De(() => xr(Oe, "icon", r().icon));
          var Li = ft(Oe, 2);
          {
            var Bi = (lt) => {
              var Ut = Os();
              Ze(Ut, (Hi) => w(T, Hi), () => u(T)), pe(lt, Ut);
            };
            Ke(Li, (lt) => {
              (!r()["title-card-clickable"] || r()["title-card-button-overlay"]) && lt(Bi);
            });
          }
          Ie(Z), Ze(Z, (lt) => w($, lt), () => u($)), De(() => {
            Xe(Z, `--overlay-margin:${r()["overlay-margin"] ?? ""}; --button-background:${r()["button-background"] ?? ""}; --header-color:${r()["header-color"] ?? ""};`), Ee(Z, 1, `header ${r()["title-card-button-overlay"] ? " header-overlay" : ""}${u(s) ? " open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq"), Xe(Oe, `--arrow-color:${r()["arrow-color"] ?? ""}`), Ee(Oe, 1, `ico${u(s) && u(d) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq");
          }), pe(J, Z);
        };
        Ke(de, (J) => {
          u(f) && J(se);
        });
      }
      var At = ft(de, 2);
      {
        var Nn = (J) => {
          var Z = Rs();
          Ze(Z, (Oe) => w(T, Oe), () => u(T)), pe(J, Z);
        };
        Ke(At, (J) => {
          r()["title-card-clickable"] && !r()["title-card-button-overlay"] && J(Nn);
        });
      }
      Ie(b), Ze(b, (J) => w(k, J), () => u(k)), De(() => {
        Ee(b, 1, `title-card-header${r()["title-card-button-overlay"] ? "-overlay" : ""}${u(s) ? " open" : " close"}${r().animation ? " animation " + u(d) : ""}${r()["title-card-clickable"] ? " clickable" : ""}`, "svelte-1jqiztq"), ki(b, "role", r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? "button" : void 0), Ee(O, 1, `title-card-container${u(s) ? " open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq"), Xe(O, `--title-padding:${(r()["title-card-padding"] ? r()["title-card-padding"] : "0px") ?? ""};`);
      }), pe(_, b);
    }, Fi = (_) => {
      var b = $r(), O = mr(b);
      {
        var j = (de) => {
          var se = zs();
          se.__click = On;
          var At = Ge(se), Nn = Ge(At, !0);
          Ie(At);
          var J = ft(At, 2);
          De(() => xr(J, "icon", r().icon));
          var Z = ft(J, 2);
          Ze(Z, (Oe) => w(T, Oe), () => u(T)), Ie(se), Ze(se, (Oe) => w($, Oe), () => u($)), De(() => {
            Ee(se, 1, `header${u(s) ? " open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq"), Xe(se, `--header-width:100%; --button-background:${r()["button-background"] ?? ""};--header-color:${r()["header-color"] ?? ""};`), Ee(At, 1, `primary title${u(s) ? " open" : " close"}`, "svelte-1jqiztq"), cs(Nn, r().title), Xe(J, `--arrow-color:${r()["arrow-color"] ?? ""}`), Ee(J, 1, `ico${u(s) && u(d) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq");
          }), pe(de, se);
        };
        Ke(O, (de) => {
          u(f) && de(j);
        });
      }
      pe(_, b);
    };
    Ke(cr, (_) => {
      r()["title-card"] ? _(Pi) : _(Fi, !1);
    });
  }
  var ur = ft(cr, 2);
  {
    var Mi = (_) => {
      var b = Ps(), O = Ge(b);
      vs(O, 20, () => r().cards, (j) => j, (j, de) => {
        {
          let se = /* @__PURE__ */ Ja(() => u(s) && i());
          Jn(j, {
            get hass() {
              return n();
            },
            get preview() {
              return u(se);
            },
            get config() {
              return de;
            },
            get marginTop() {
              return r()["child-margin-top"];
            },
            get open() {
              return u(s);
            },
            get animation() {
              return r().animation;
            },
            get animationState() {
              return u(d);
            },
            get clearCardCss() {
              return r()["clear-children"];
            }
          });
        }
      }), Ie(O), Ie(b), De(() => {
        Ee(b, 1, `children-wrapper ${r().animation ? "animation " + u(d) : ""}${u(s) ? " open" : " close"}`, "svelte-1jqiztq"), Xe(O, `--expander-card-display:${r()["expander-card-display"] ?? ""};
                --gap:${(u(s) && u(d) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""};
                --child-padding:${(u(s) && u(d) !== "closing" ? r()["child-padding"] : "0px") ?? ""};`), Ee(O, 1, `children-container${u(s) ? " open" : " close"}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq");
      }), pe(_, b);
    };
    Ke(ur, (_) => {
      r().cards && _(Mi);
    });
  }
  var Ii = ft(ur, 2);
  {
    var Di = (_) => {
      var b = $r(), O = mr(b);
      ms(O, () => U), pe(_, b);
    };
    Ke(Ii, (_) => {
      U && _(Di);
    });
  }
  return Ie(qt), Ze(qt, (_) => w(p, _), () => u(p)), De(() => {
    Ee(qt, 1, `expander-card${r().clear ? " clear" : ""}${u(s) ? " open" : " close"} ${u(d)}${r().animation ? " animation " + u(d) : ""}`, "svelte-1jqiztq"), Xe(qt, `--expander-card-display:${r()["expander-card-display"] ?? ""};
     --gap:${(u(s) && u(d) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""}; --padding:${r().padding ?? ""};
     --expander-state:${u(s) ?? ""};
     --icon-rotate-degree:${r()["icon-rotate-degree"] ?? ""};
     --card-background:${(u(s) && u(d) !== "closing" && r()["expander-card-background-expanded"] ? r()["expander-card-background-expanded"] : r()["expander-card-background"]) ?? ""};
     --background-animation-duration:${u(v) ?? ""}s;
     --expander-card-overlay-height:${u(g) ? `${u(g)}px` : "auto"};
    `);
  }), pe(e, qt), tr(zi);
}
os(["click"]);
customElements.define("expander-card", Ti(Is, { hass: {}, preview: {}, config: {} }, [], [], !0, (e) => class extends e {
  constructor() {
    super(...arguments);
    // re-declare props used in customClass.
    z(this, "config");
  }
  static async getConfigElement() {
    return await oa(), document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:expander-card",
      title: "Expander Card",
      cards: []
    };
  }
  setConfig(n = {}) {
    this.config = { ...Wn, ...n };
  }
}));
const Ds = "4.0.3";
console.info(
  `%c  Expander-Card 
%c Version ${Ds}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "expander-card",
  name: "Expander Card",
  preview: !0,
  description: "Expander card"
});
export {
  Is as default
};
//# sourceMappingURL=expander-card.js.map
