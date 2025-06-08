const Pe = {}, pn = [];
function A(e, t) {
  if (Array.isArray(e)) {
    for (const n of e)
      A(n, t);
    return;
  }
  if (typeof e == "object") {
    for (const n in e)
      A(n, e[n]);
    return;
  }
  gn(Object.getOwnPropertyNames(t)), Pe[e] = Object.assign(Pe[e] || {}, t);
}
function W(e) {
  return Pe[e] || {};
}
function ls() {
  return [...new Set(pn)];
}
function gn(e) {
  pn.push(...e);
}
function we(e, t) {
  let n;
  const s = e.length, i = [];
  for (n = 0; n < s; n++)
    i.push(t(e[n]));
  return i;
}
function wn(e, t) {
  let n;
  const s = e.length, i = [];
  for (n = 0; n < s; n++)
    t(e[n]) && i.push(e[n]);
  return i;
}
function oe(e) {
  return e % 360 * Math.PI / 180;
}
function us(e) {
  return e * 180 / Math.PI % 360;
}
function Zt(e) {
  return e.toLowerCase().replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function xn(e) {
  return e.replace(/([A-Z])/g, function(t, n) {
    return "-" + n.toLowerCase();
  });
}
function Ve(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Mt(e, t, n, s) {
  return (t == null || n == null) && (s = s || e.bbox(), t == null ? t = s.width / s.height * n : n == null && (n = s.height / s.width * t)), {
    width: t,
    height: n
  };
}
function ce(e, t) {
  const n = e.origin;
  let s = e.ox != null ? e.ox : e.originX != null ? e.originX : "center", i = e.oy != null ? e.oy : e.originY != null ? e.originY : "center";
  n != null && ([s, i] = Array.isArray(n) ? n : typeof n == "object" ? [n.x, n.y] : [n, n]);
  const r = typeof s == "string", o = typeof i == "string";
  if (r || o) {
    const {
      height: a,
      width: h,
      x: l,
      y: c
    } = t.bbox();
    r && (s = s.includes("left") ? l : s.includes("right") ? l + h : l + h / 2), o && (i = i.includes("top") ? c : i.includes("bottom") ? c + a : c + a / 2);
  }
  return [s, i];
}
var fs = {
  __proto__: null,
  map: we,
  filter: wn,
  radians: oe,
  degrees: us,
  camelCase: Zt,
  unCamelCase: xn,
  capitalize: Ve,
  proportionalSize: Mt,
  getOrigin: ce
};
const xe = "http://www.w3.org/2000/svg", yn = "http://www.w3.org/1999/xhtml", Ht = "http://www.w3.org/2000/xmlns/", Ft = "http://www.w3.org/1999/xlink", bn = "http://svgjs.dev/svgjs";
var ds = {
  __proto__: null,
  svg: xe,
  html: yn,
  xmlns: Ht,
  xlink: Ft,
  svgjs: bn
};
const M = {
  window: typeof window > "u" ? null : window,
  document: typeof document > "u" ? null : document
};
function _n(e = null, t = null) {
  M.window = e, M.document = t;
}
const le = {};
function vn() {
  le.window = M.window, le.document = M.document;
}
function An() {
  M.window = le.window, M.document = le.document;
}
function ms(e, t) {
  vn(), _n(e, e.document), t(e, e.document), An();
}
function ps() {
  return M.window;
}
let qe = class {
  // constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
};
const At = {}, ye = "___SYMBOL___ROOT___";
function Pt(e, t = xe) {
  return M.document.createElementNS(t, e);
}
function B(e, t = !1) {
  if (e instanceof qe) return e;
  if (typeof e == "object")
    return ae(e);
  if (e == null)
    return new At[ye]();
  if (typeof e == "string" && e.charAt(0) !== "<")
    return ae(M.document.querySelector(e));
  const n = t ? M.document.createElement("div") : Pt("svg");
  return n.innerHTML = e, e = ae(n.firstChild), n.removeChild(n.firstChild), e;
}
function X(e, t) {
  return t && t.ownerDocument && t instanceof t.ownerDocument.defaultView.Node ? t : Pt(e);
}
function G(e) {
  if (!e) return null;
  if (e.instance instanceof qe) return e.instance;
  if (e.nodeName === "#document-fragment")
    return new At.Fragment(e);
  let t = Ve(e.nodeName || "Dom");
  return t === "LinearGradient" || t === "RadialGradient" ? t = "Gradient" : At[t] || (t = "Dom"), new At[t](e);
}
let ae = G;
function gs(e = G) {
  ae = e;
}
function E(e, t = e.name, n = !1) {
  return At[t] = e, n && (At[ye] = e), gn(Object.getOwnPropertyNames(e.prototype)), e;
}
function Dn(e) {
  return At[e];
}
let ws = 1e3;
function Be(e) {
  return "Svgjs" + Ve(e) + ws++;
}
function Ze(e) {
  for (let t = e.children.length - 1; t >= 0; t--)
    Ze(e.children[t]);
  return e.id && (e.id = Be(e.nodeName)), e;
}
function T(e, t) {
  let n, s;
  for (e = Array.isArray(e) ? e : [e], s = e.length - 1; s >= 0; s--)
    for (n in t)
      e[s].prototype[n] = t[n];
}
function F(e) {
  return function(...t) {
    const n = t[t.length - 1];
    return n && n.constructor === Object && !(n instanceof Array) ? e.apply(this, t.slice(0, -1)).attr(n) : e.apply(this, t);
  };
}
function xs() {
  return this.parent().children();
}
function ys() {
  return this.parent().index(this);
}
function bs() {
  return this.siblings()[this.position() + 1];
}
function _s() {
  return this.siblings()[this.position() - 1];
}
function vs() {
  const e = this.position();
  return this.parent().add(this.remove(), e + 1), this;
}
function As() {
  const e = this.position();
  return this.parent().add(this.remove(), e ? e - 1 : 0), this;
}
function Ds() {
  return this.parent().add(this.remove()), this;
}
function Ms() {
  return this.parent().add(this.remove(), 0), this;
}
function Ts(e) {
  e = B(e), e.remove();
  const t = this.position();
  return this.parent().add(e, t), this;
}
function Ss(e) {
  e = B(e), e.remove();
  const t = this.position();
  return this.parent().add(e, t + 1), this;
}
function Es(e) {
  return e = B(e), e.before(this), this;
}
function ks(e) {
  return e = B(e), e.after(this), this;
}
A("Dom", {
  siblings: xs,
  position: ys,
  next: bs,
  prev: _s,
  forward: vs,
  backward: As,
  front: Ds,
  back: Ms,
  before: Ts,
  after: Ss,
  insertBefore: Es,
  insertAfter: ks
});
const He = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, Mn = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, Tn = /rgb\((\d+),(\d+),(\d+)\)/, Sn = /(#[a-z_][a-z0-9\-_]*)/i, En = /\)\s*,?\s*/, kn = /\s/g, Ne = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i, je = /^rgb\(/, ze = /^(\s+)?$/, Fe = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, In = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, ht = /[\s,]+/, be = /[MLHVCSQTAZ]/i;
var Is = {
  __proto__: null,
  numberAndUnit: He,
  hex: Mn,
  rgb: Tn,
  reference: Sn,
  transforms: En,
  whitespace: kn,
  isHex: Ne,
  isRgb: je,
  isBlank: ze,
  isNumber: Fe,
  isImage: In,
  delimiter: ht,
  isPathLetter: be
};
function Cs() {
  const e = this.attr("class");
  return e == null ? [] : e.trim().split(ht);
}
function Os(e) {
  return this.classes().indexOf(e) !== -1;
}
function Rs(e) {
  if (!this.hasClass(e)) {
    const t = this.classes();
    t.push(e), this.attr("class", t.join(" "));
  }
  return this;
}
function Ps(e) {
  return this.hasClass(e) && this.attr("class", this.classes().filter(function(t) {
    return t !== e;
  }).join(" ")), this;
}
function Ns(e) {
  return this.hasClass(e) ? this.removeClass(e) : this.addClass(e);
}
A("Dom", {
  classes: Cs,
  hasClass: Os,
  addClass: Rs,
  removeClass: Ps,
  toggleClass: Ns
});
function js(e, t) {
  const n = {};
  if (arguments.length === 0)
    return this.node.style.cssText.split(/\s*;\s*/).filter(function(s) {
      return !!s.length;
    }).forEach(function(s) {
      const i = s.split(/\s*:\s*/);
      n[i[0]] = i[1];
    }), n;
  if (arguments.length < 2) {
    if (Array.isArray(e)) {
      for (const s of e) {
        const i = Zt(s);
        n[s] = this.node.style[i];
      }
      return n;
    }
    if (typeof e == "string")
      return this.node.style[Zt(e)];
    if (typeof e == "object")
      for (const s in e)
        this.node.style[Zt(s)] = e[s] == null || ze.test(e[s]) ? "" : e[s];
  }
  return arguments.length === 2 && (this.node.style[Zt(e)] = t == null || ze.test(t) ? "" : t), this;
}
function zs() {
  return this.css("display", "");
}
function Fs() {
  return this.css("display", "none");
}
function Xs() {
  return this.css("display") !== "none";
}
A("Dom", {
  css: js,
  show: zs,
  hide: Fs,
  visible: Xs
});
function Ys(e, t, n) {
  if (e == null)
    return this.data(we(wn(this.node.attributes, (s) => s.nodeName.indexOf("data-") === 0), (s) => s.nodeName.slice(5)));
  if (e instanceof Array) {
    const s = {};
    for (const i of e)
      s[i] = this.data(i);
    return s;
  } else if (typeof e == "object")
    for (t in e)
      this.data(t, e[t]);
  else if (arguments.length < 2)
    try {
      return JSON.parse(this.attr("data-" + e));
    } catch {
      return this.attr("data-" + e);
    }
  else
    this.attr("data-" + e, t === null ? null : n === !0 || typeof t == "string" || typeof t == "number" ? t : JSON.stringify(t));
  return this;
}
A("Dom", {
  data: Ys
});
function Ls(e, t) {
  if (typeof arguments[0] == "object")
    for (const n in e)
      this.remember(n, e[n]);
  else {
    if (arguments.length === 1)
      return this.memory()[e];
    this.memory()[e] = t;
  }
  return this;
}
function $s() {
  if (arguments.length === 0)
    this._memory = {};
  else
    for (let e = arguments.length - 1; e >= 0; e--)
      delete this.memory()[arguments[e]];
  return this;
}
function Vs() {
  return this._memory = this._memory || {};
}
A("Dom", {
  remember: Ls,
  forget: $s,
  memory: Vs
});
function qs(e) {
  return e.length === 4 ? ["#", e.substring(1, 2), e.substring(1, 2), e.substring(2, 3), e.substring(2, 3), e.substring(3, 4), e.substring(3, 4)].join("") : e;
}
function Bs(e) {
  const t = Math.round(e), s = Math.max(0, Math.min(255, t)).toString(16);
  return s.length === 1 ? "0" + s : s;
}
function It(e, t) {
  for (let n = t.length; n--; )
    if (e[t[n]] == null)
      return !1;
  return !0;
}
function Zs(e, t) {
  const n = It(e, "rgb") ? {
    _a: e.r,
    _b: e.g,
    _c: e.b,
    _d: 0,
    space: "rgb"
  } : It(e, "xyz") ? {
    _a: e.x,
    _b: e.y,
    _c: e.z,
    _d: 0,
    space: "xyz"
  } : It(e, "hsl") ? {
    _a: e.h,
    _b: e.s,
    _c: e.l,
    _d: 0,
    space: "hsl"
  } : It(e, "lab") ? {
    _a: e.l,
    _b: e.a,
    _c: e.b,
    _d: 0,
    space: "lab"
  } : It(e, "lch") ? {
    _a: e.l,
    _b: e.c,
    _c: e.h,
    _d: 0,
    space: "lch"
  } : It(e, "cmyk") ? {
    _a: e.c,
    _b: e.m,
    _c: e.y,
    _d: e.k,
    space: "cmyk"
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: "rgb"
  };
  return n.space = t || n.space, n;
}
function Hs(e) {
  return e === "lab" || e === "xyz" || e === "lch";
}
function Ie(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
class R {
  constructor(...t) {
    this.init(...t);
  }
  // Test if given value is a color
  static isColor(t) {
    return t && (t instanceof R || this.isRgb(t) || this.test(t));
  }
  // Test if given value is an rgb object
  static isRgb(t) {
    return t && typeof t.r == "number" && typeof t.g == "number" && typeof t.b == "number";
  }
  /*
  Generating random colors
  */
  static random(t = "vibrant", n, s) {
    const {
      random: i,
      round: r,
      sin: o,
      PI: a
    } = Math;
    if (t === "vibrant") {
      const h = 24 * i() + 57, l = 38 * i() + 45, c = 360 * i();
      return new R(h, l, c, "lch");
    } else if (t === "sine") {
      n = n ?? i();
      const h = r(80 * o(2 * a * n / 0.5 + 0.01) + 150), l = r(50 * o(2 * a * n / 0.5 + 4.6) + 200), c = r(100 * o(2 * a * n / 0.5 + 2.3) + 150);
      return new R(h, l, c);
    } else if (t === "pastel") {
      const h = 8 * i() + 86, l = 17 * i() + 9, c = 360 * i();
      return new R(h, l, c, "lch");
    } else if (t === "dark") {
      const h = 10 + 10 * i(), l = 50 * i() + 86, c = 360 * i();
      return new R(h, l, c, "lch");
    } else if (t === "rgb") {
      const h = 255 * i(), l = 255 * i(), c = 255 * i();
      return new R(h, l, c);
    } else if (t === "lab") {
      const h = 100 * i(), l = 256 * i() - 128, c = 256 * i() - 128;
      return new R(h, l, c, "lab");
    } else if (t === "grey") {
      const h = 255 * i();
      return new R(h, h, h);
    } else
      throw new Error("Unsupported random color mode");
  }
  // Test if given value is a color string
  static test(t) {
    return typeof t == "string" && (Ne.test(t) || je.test(t));
  }
  cmyk() {
    const {
      _a: t,
      _b: n,
      _c: s
    } = this.rgb(), [i, r, o] = [t, n, s].map((f) => f / 255), a = Math.min(1 - i, 1 - r, 1 - o);
    if (a === 1)
      return new R(0, 0, 0, 1, "cmyk");
    const h = (1 - i - a) / (1 - a), l = (1 - r - a) / (1 - a), c = (1 - o - a) / (1 - a);
    return new R(h, l, c, a, "cmyk");
  }
  hsl() {
    const {
      _a: t,
      _b: n,
      _c: s
    } = this.rgb(), [i, r, o] = [t, n, s].map((m) => m / 255), a = Math.max(i, r, o), h = Math.min(i, r, o), l = (a + h) / 2, c = a === h, u = a - h, f = c ? 0 : l > 0.5 ? u / (2 - a - h) : u / (a + h), p = c ? 0 : a === i ? ((r - o) / u + (r < o ? 6 : 0)) / 6 : a === r ? ((o - i) / u + 2) / 6 : a === o ? ((i - r) / u + 4) / 6 : 0;
    return new R(360 * p, 100 * f, 100 * l, "hsl");
  }
  init(t = 0, n = 0, s = 0, i = 0, r = "rgb") {
    if (t = t || 0, this.space)
      for (const u in this.space)
        delete this[this.space[u]];
    if (typeof t == "number")
      r = typeof i == "string" ? i : r, i = typeof i == "string" ? 0 : i, Object.assign(this, {
        _a: t,
        _b: n,
        _c: s,
        _d: i,
        space: r
      });
    else if (t instanceof Array)
      this.space = n || (typeof t[3] == "string" ? t[3] : t[4]) || "rgb", Object.assign(this, {
        _a: t[0],
        _b: t[1],
        _c: t[2],
        _d: t[3] || 0
      });
    else if (t instanceof Object) {
      const u = Zs(t, n);
      Object.assign(this, u);
    } else if (typeof t == "string")
      if (je.test(t)) {
        const u = t.replace(kn, ""), [f, p, d] = Tn.exec(u).slice(1, 4).map((m) => parseInt(m));
        Object.assign(this, {
          _a: f,
          _b: p,
          _c: d,
          _d: 0,
          space: "rgb"
        });
      } else if (Ne.test(t)) {
        const u = (m) => parseInt(m, 16), [, f, p, d] = Mn.exec(qs(t)).map(u);
        Object.assign(this, {
          _a: f,
          _b: p,
          _c: d,
          _d: 0,
          space: "rgb"
        });
      } else throw Error("Unsupported string format, can't construct Color");
    const {
      _a: o,
      _b: a,
      _c: h,
      _d: l
    } = this, c = this.space === "rgb" ? {
      r: o,
      g: a,
      b: h
    } : this.space === "xyz" ? {
      x: o,
      y: a,
      z: h
    } : this.space === "hsl" ? {
      h: o,
      s: a,
      l: h
    } : this.space === "lab" ? {
      l: o,
      a,
      b: h
    } : this.space === "lch" ? {
      l: o,
      c: a,
      h
    } : this.space === "cmyk" ? {
      c: o,
      m: a,
      y: h,
      k: l
    } : {};
    Object.assign(this, c);
  }
  lab() {
    const {
      x: t,
      y: n,
      z: s
    } = this.xyz(), i = 116 * n - 16, r = 500 * (t - n), o = 200 * (n - s);
    return new R(i, r, o, "lab");
  }
  lch() {
    const {
      l: t,
      a: n,
      b: s
    } = this.lab(), i = Math.sqrt(n ** 2 + s ** 2);
    let r = 180 * Math.atan2(s, n) / Math.PI;
    return r < 0 && (r *= -1, r = 360 - r), new R(t, i, r, "lch");
  }
  /*
  Conversion Methods
  */
  rgb() {
    if (this.space === "rgb")
      return this;
    if (Hs(this.space)) {
      let {
        x: t,
        y: n,
        z: s
      } = this;
      if (this.space === "lab" || this.space === "lch") {
        let {
          l: p,
          a: d,
          b: m
        } = this;
        if (this.space === "lch") {
          const {
            c: k,
            h: S
          } = this, N = Math.PI / 180;
          d = k * Math.cos(N * S), m = k * Math.sin(N * S);
        }
        const w = (p + 16) / 116, y = d / 500 + w, I = w - m / 200, b = 16 / 116, D = 8856e-6, P = 7.787;
        t = 0.95047 * (y ** 3 > D ? y ** 3 : (y - b) / P), n = 1 * (w ** 3 > D ? w ** 3 : (w - b) / P), s = 1.08883 * (I ** 3 > D ? I ** 3 : (I - b) / P);
      }
      const i = t * 3.2406 + n * -1.5372 + s * -0.4986, r = t * -0.9689 + n * 1.8758 + s * 0.0415, o = t * 0.0557 + n * -0.204 + s * 1.057, a = Math.pow, h = 31308e-7, l = i > h ? 1.055 * a(i, 1 / 2.4) - 0.055 : 12.92 * i, c = r > h ? 1.055 * a(r, 1 / 2.4) - 0.055 : 12.92 * r, u = o > h ? 1.055 * a(o, 1 / 2.4) - 0.055 : 12.92 * o;
      return new R(255 * l, 255 * c, 255 * u);
    } else if (this.space === "hsl") {
      let {
        h: t,
        s: n,
        l: s
      } = this;
      if (t /= 360, n /= 100, s /= 100, n === 0)
        return s *= 255, new R(s, s, s);
      const i = s < 0.5 ? s * (1 + n) : s + n - s * n, r = 2 * s - i, o = 255 * Ie(r, i, t + 1 / 3), a = 255 * Ie(r, i, t), h = 255 * Ie(r, i, t - 1 / 3);
      return new R(o, a, h);
    } else if (this.space === "cmyk") {
      const {
        c: t,
        m: n,
        y: s,
        k: i
      } = this, r = 255 * (1 - Math.min(1, t * (1 - i) + i)), o = 255 * (1 - Math.min(1, n * (1 - i) + i)), a = 255 * (1 - Math.min(1, s * (1 - i) + i));
      return new R(r, o, a);
    } else
      return this;
  }
  toArray() {
    const {
      _a: t,
      _b: n,
      _c: s,
      _d: i,
      space: r
    } = this;
    return [t, n, s, i, r];
  }
  toHex() {
    const [t, n, s] = this._clamped().map(Bs);
    return `#${t}${n}${s}`;
  }
  toRgb() {
    const [t, n, s] = this._clamped();
    return `rgb(${t},${n},${s})`;
  }
  toString() {
    return this.toHex();
  }
  xyz() {
    const {
      _a: t,
      _b: n,
      _c: s
    } = this.rgb(), [i, r, o] = [t, n, s].map((y) => y / 255), a = i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92, h = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92, l = o > 0.04045 ? Math.pow((o + 0.055) / 1.055, 2.4) : o / 12.92, c = (a * 0.4124 + h * 0.3576 + l * 0.1805) / 0.95047, u = (a * 0.2126 + h * 0.7152 + l * 0.0722) / 1, f = (a * 0.0193 + h * 0.1192 + l * 0.9505) / 1.08883, p = c > 8856e-6 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, d = u > 8856e-6 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, m = f > 8856e-6 ? Math.pow(f, 1 / 3) : 7.787 * f + 16 / 116;
    return new R(p, d, m, "xyz");
  }
  /*
  Input and Output methods
  */
  _clamped() {
    const {
      _a: t,
      _b: n,
      _c: s
    } = this.rgb(), {
      max: i,
      min: r,
      round: o
    } = Math, a = (h) => i(0, r(o(h), 255));
    return [t, n, s].map(a);
  }
  /*
  Constructing colors
  */
}
class L {
  // Initialize
  constructor(...t) {
    this.init(...t);
  }
  // Clone point
  clone() {
    return new L(this);
  }
  init(t, n) {
    const s = {
      x: 0,
      y: 0
    }, i = Array.isArray(t) ? {
      x: t[0],
      y: t[1]
    } : typeof t == "object" ? {
      x: t.x,
      y: t.y
    } : {
      x: t,
      y: n
    };
    return this.x = i.x == null ? s.x : i.x, this.y = i.y == null ? s.y : i.y, this;
  }
  toArray() {
    return [this.x, this.y];
  }
  transform(t) {
    return this.clone().transformO(t);
  }
  // Transform point with matrix
  transformO(t) {
    g.isMatrixLike(t) || (t = new g(t));
    const {
      x: n,
      y: s
    } = this;
    return this.x = t.a * n + t.c * s + t.e, this.y = t.b * n + t.d * s + t.f, this;
  }
}
function Gs(e, t) {
  return new L(e, t).transformO(this.screenCTM().inverseO());
}
function Ct(e, t, n) {
  return Math.abs(t - e) < 1e-6;
}
class g {
  constructor(...t) {
    this.init(...t);
  }
  static formatTransforms(t) {
    const n = t.flip === "both" || t.flip === !0, s = t.flip && (n || t.flip === "x") ? -1 : 1, i = t.flip && (n || t.flip === "y") ? -1 : 1, r = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0, o = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0, a = t.scale && t.scale.length ? t.scale[0] * s : isFinite(t.scale) ? t.scale * s : isFinite(t.scaleX) ? t.scaleX * s : s, h = t.scale && t.scale.length ? t.scale[1] * i : isFinite(t.scale) ? t.scale * i : isFinite(t.scaleY) ? t.scaleY * i : i, l = t.shear || 0, c = t.rotate || t.theta || 0, u = new L(t.origin || t.around || t.ox || t.originX, t.oy || t.originY), f = u.x, p = u.y, d = new L(t.position || t.px || t.positionX || NaN, t.py || t.positionY || NaN), m = d.x, w = d.y, y = new L(t.translate || t.tx || t.translateX, t.ty || t.translateY), I = y.x, b = y.y, D = new L(t.relative || t.rx || t.relativeX, t.ry || t.relativeY), P = D.x, k = D.y;
    return {
      scaleX: a,
      scaleY: h,
      skewX: r,
      skewY: o,
      shear: l,
      theta: c,
      rx: P,
      ry: k,
      tx: I,
      ty: b,
      ox: f,
      oy: p,
      px: m,
      py: w
    };
  }
  static fromArray(t) {
    return {
      a: t[0],
      b: t[1],
      c: t[2],
      d: t[3],
      e: t[4],
      f: t[5]
    };
  }
  static isMatrixLike(t) {
    return t.a != null || t.b != null || t.c != null || t.d != null || t.e != null || t.f != null;
  }
  // left matrix, right matrix, target matrix which is overwritten
  static matrixMultiply(t, n, s) {
    const i = t.a * n.a + t.c * n.b, r = t.b * n.a + t.d * n.b, o = t.a * n.c + t.c * n.d, a = t.b * n.c + t.d * n.d, h = t.e + t.a * n.e + t.c * n.f, l = t.f + t.b * n.e + t.d * n.f;
    return s.a = i, s.b = r, s.c = o, s.d = a, s.e = h, s.f = l, s;
  }
  around(t, n, s) {
    return this.clone().aroundO(t, n, s);
  }
  // Transform around a center point
  aroundO(t, n, s) {
    const i = t || 0, r = n || 0;
    return this.translateO(-i, -r).lmultiplyO(s).translateO(i, r);
  }
  // Clones this matrix
  clone() {
    return new g(this);
  }
  // Decomposes this matrix into its affine parameters
  decompose(t = 0, n = 0) {
    const s = this.a, i = this.b, r = this.c, o = this.d, a = this.e, h = this.f, l = s * o - i * r, c = l > 0 ? 1 : -1, u = c * Math.sqrt(s * s + i * i), f = Math.atan2(c * i, c * s), p = 180 / Math.PI * f, d = Math.cos(f), m = Math.sin(f), w = (s * r + i * o) / l, y = r * u / (w * s - i) || o * u / (w * i + s), I = a - t + t * d * u + n * (w * d * u - m * y), b = h - n + t * m * u + n * (w * m * u + d * y);
    return {
      // Return the affine parameters
      scaleX: u,
      scaleY: y,
      shear: w,
      rotate: p,
      translateX: I,
      translateY: b,
      originX: t,
      originY: n,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
  // Check if two matrices are equal
  equals(t) {
    if (t === this) return !0;
    const n = new g(t);
    return Ct(this.a, n.a) && Ct(this.b, n.b) && Ct(this.c, n.c) && Ct(this.d, n.d) && Ct(this.e, n.e) && Ct(this.f, n.f);
  }
  // Flip matrix on x or y, at a given offset
  flip(t, n) {
    return this.clone().flipO(t, n);
  }
  flipO(t, n) {
    return t === "x" ? this.scaleO(-1, 1, n, 0) : t === "y" ? this.scaleO(1, -1, 0, n) : this.scaleO(-1, -1, t, n || t);
  }
  // Initialize
  init(t) {
    const n = g.fromArray([1, 0, 0, 1, 0, 0]);
    return t = t instanceof rt ? t.matrixify() : typeof t == "string" ? g.fromArray(t.split(ht).map(parseFloat)) : Array.isArray(t) ? g.fromArray(t) : typeof t == "object" && g.isMatrixLike(t) ? t : typeof t == "object" ? new g().transform(t) : arguments.length === 6 ? g.fromArray([].slice.call(arguments)) : n, this.a = t.a != null ? t.a : n.a, this.b = t.b != null ? t.b : n.b, this.c = t.c != null ? t.c : n.c, this.d = t.d != null ? t.d : n.d, this.e = t.e != null ? t.e : n.e, this.f = t.f != null ? t.f : n.f, this;
  }
  inverse() {
    return this.clone().inverseO();
  }
  // Inverses matrix
  inverseO() {
    const t = this.a, n = this.b, s = this.c, i = this.d, r = this.e, o = this.f, a = t * i - n * s;
    if (!a) throw new Error("Cannot invert " + this);
    const h = i / a, l = -n / a, c = -s / a, u = t / a, f = -(h * r + c * o), p = -(l * r + u * o);
    return this.a = h, this.b = l, this.c = c, this.d = u, this.e = f, this.f = p, this;
  }
  lmultiply(t) {
    return this.clone().lmultiplyO(t);
  }
  lmultiplyO(t) {
    const n = this, s = t instanceof g ? t : new g(t);
    return g.matrixMultiply(s, n, this);
  }
  // Left multiplies by the given matrix
  multiply(t) {
    return this.clone().multiplyO(t);
  }
  multiplyO(t) {
    const n = this, s = t instanceof g ? t : new g(t);
    return g.matrixMultiply(n, s, this);
  }
  // Rotate matrix
  rotate(t, n, s) {
    return this.clone().rotateO(t, n, s);
  }
  rotateO(t, n = 0, s = 0) {
    t = oe(t);
    const i = Math.cos(t), r = Math.sin(t), {
      a: o,
      b: a,
      c: h,
      d: l,
      e: c,
      f: u
    } = this;
    return this.a = o * i - a * r, this.b = a * i + o * r, this.c = h * i - l * r, this.d = l * i + h * r, this.e = c * i - u * r + s * r - n * i + n, this.f = u * i + c * r - n * r - s * i + s, this;
  }
  // Scale matrix
  scale(t, n, s, i) {
    return this.clone().scaleO(...arguments);
  }
  scaleO(t, n = t, s = 0, i = 0) {
    arguments.length === 3 && (i = s, s = n, n = t);
    const {
      a: r,
      b: o,
      c: a,
      d: h,
      e: l,
      f: c
    } = this;
    return this.a = r * t, this.b = o * n, this.c = a * t, this.d = h * n, this.e = l * t - s * t + s, this.f = c * n - i * n + i, this;
  }
  // Shear matrix
  shear(t, n, s) {
    return this.clone().shearO(t, n, s);
  }
  shearO(t, n = 0, s = 0) {
    const {
      a: i,
      b: r,
      c: o,
      d: a,
      e: h,
      f: l
    } = this;
    return this.a = i + r * t, this.c = o + a * t, this.e = h + l * t - s * t, this;
  }
  // Skew Matrix
  skew(t, n, s, i) {
    return this.clone().skewO(...arguments);
  }
  skewO(t, n = t, s = 0, i = 0) {
    arguments.length === 3 && (i = s, s = n, n = t), t = oe(t), n = oe(n);
    const r = Math.tan(t), o = Math.tan(n), {
      a,
      b: h,
      c: l,
      d: c,
      e: u,
      f
    } = this;
    return this.a = a + h * r, this.b = h + a * o, this.c = l + c * r, this.d = c + l * o, this.e = u + f * r - i * r, this.f = f + u * o - s * o, this;
  }
  // SkewX
  skewX(t, n, s) {
    return this.skew(t, 0, n, s);
  }
  // SkewY
  skewY(t, n, s) {
    return this.skew(0, t, n, s);
  }
  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  }
  // Convert matrix to string
  toString() {
    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
  }
  // Transform a matrix into another matrix by manipulating the space
  transform(t) {
    if (g.isMatrixLike(t))
      return new g(t).multiplyO(this);
    const n = g.formatTransforms(t), s = this, {
      x: i,
      y: r
    } = new L(n.ox, n.oy).transform(s), o = new g().translateO(n.rx, n.ry).lmultiplyO(s).translateO(-i, -r).scaleO(n.scaleX, n.scaleY).skewO(n.skewX, n.skewY).shearO(n.shear).rotateO(n.theta).translateO(i, r);
    if (isFinite(n.px) || isFinite(n.py)) {
      const a = new L(i, r).transform(o), h = isFinite(n.px) ? n.px - a.x : 0, l = isFinite(n.py) ? n.py - a.y : 0;
      o.translateO(h, l);
    }
    return o.translateO(n.tx, n.ty), o;
  }
  // Translate matrix
  translate(t, n) {
    return this.clone().translateO(t, n);
  }
  translateO(t, n) {
    return this.e += t || 0, this.f += n || 0, this;
  }
  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
}
function Us() {
  return new g(this.node.getCTM());
}
function Ws() {
  if (typeof this.isRoot == "function" && !this.isRoot()) {
    const e = this.rect(1, 1), t = e.node.getScreenCTM();
    return e.remove(), new g(t);
  }
  return new g(this.node.getScreenCTM());
}
E(g, "Matrix");
function lt() {
  if (!lt.nodes) {
    const e = B().size(2, 0);
    e.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), e.attr("focusable", "false"), e.attr("aria-hidden", "true");
    const t = e.path().node;
    lt.nodes = {
      svg: e,
      path: t
    };
  }
  if (!lt.nodes.svg.node.parentNode) {
    const e = M.document.body || M.document.documentElement;
    lt.nodes.svg.addTo(e);
  }
  return lt.nodes;
}
function Cn(e) {
  return !e.width && !e.height && !e.x && !e.y;
}
function Js(e) {
  return e === M.document || (M.document.documentElement.contains || function(t) {
    for (; t.parentNode; )
      t = t.parentNode;
    return t === M.document;
  }).call(M.document.documentElement, e);
}
class $ {
  constructor(...t) {
    this.init(...t);
  }
  addOffset() {
    return this.x += M.window.pageXOffset, this.y += M.window.pageYOffset, new $(this);
  }
  init(t) {
    const n = [0, 0, 0, 0];
    return t = typeof t == "string" ? t.split(ht).map(parseFloat) : Array.isArray(t) ? t : typeof t == "object" ? [t.left != null ? t.left : t.x, t.top != null ? t.top : t.y, t.width, t.height] : arguments.length === 4 ? [].slice.call(arguments) : n, this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
  }
  isNulled() {
    return Cn(this);
  }
  // Merge rect box with another, return a new instance
  merge(t) {
    const n = Math.min(this.x, t.x), s = Math.min(this.y, t.y), i = Math.max(this.x + this.width, t.x + t.width) - n, r = Math.max(this.y + this.height, t.y + t.height) - s;
    return new $(n, s, i, r);
  }
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  transform(t) {
    t instanceof g || (t = new g(t));
    let n = 1 / 0, s = -1 / 0, i = 1 / 0, r = -1 / 0;
    return [new L(this.x, this.y), new L(this.x2, this.y), new L(this.x, this.y2), new L(this.x2, this.y2)].forEach(function(a) {
      a = a.transform(t), n = Math.min(n, a.x), s = Math.max(s, a.x), i = Math.min(i, a.y), r = Math.max(r, a.y);
    }), new $(n, i, s - n, r - i);
  }
}
function On(e, t, n) {
  let s;
  try {
    if (s = t(e.node), Cn(s) && !Js(e.node))
      throw new Error("Element not in the dom");
  } catch {
    s = n(e);
  }
  return s;
}
function Ks() {
  const n = On(this, (i) => i.getBBox(), (i) => {
    try {
      const r = i.clone().addTo(lt().svg).show(), o = r.node.getBBox();
      return r.remove(), o;
    } catch (r) {
      throw new Error(`Getting bbox of element "${i.node.nodeName}" is not possible: ${r.toString()}`);
    }
  });
  return new $(n);
}
function Qs(e) {
  const s = On(this, (r) => r.getBoundingClientRect(), (r) => {
    throw new Error(`Getting rbox of element "${r.node.nodeName}" is not possible`);
  }), i = new $(s);
  return e ? i.transform(e.screenCTM().inverseO()) : i.addOffset();
}
function ti(e, t) {
  const n = this.bbox();
  return e > n.x && t > n.y && e < n.x + n.width && t < n.y + n.height;
}
A({
  viewbox: {
    viewbox(e, t, n, s) {
      return e == null ? new $(this.attr("viewBox")) : this.attr("viewBox", new $(e, t, n, s));
    },
    zoom(e, t) {
      let {
        width: n,
        height: s
      } = this.attr(["width", "height"]);
      if ((!n && !s || typeof n == "string" || typeof s == "string") && (n = this.node.clientWidth, s = this.node.clientHeight), !n || !s)
        throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
      const i = this.viewbox(), r = n / i.width, o = s / i.height, a = Math.min(r, o);
      if (e == null)
        return a;
      let h = a / e;
      h === 1 / 0 && (h = Number.MAX_SAFE_INTEGER / 100), t = t || new L(n / 2 / r + i.x, s / 2 / o + i.y);
      const l = new $(i).transform(new g({
        scale: h,
        origin: t
      }));
      return this.viewbox(l);
    }
  }
});
E($, "Box");
class wt extends Array {
  constructor(t = [], ...n) {
    if (super(t, ...n), typeof t == "number") return this;
    this.length = 0, this.push(...t);
  }
}
T([wt], {
  each(e, ...t) {
    return typeof e == "function" ? this.map((n, s, i) => e.call(n, n, s, i)) : this.map((n) => n[e](...t));
  },
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
const ei = ["toArray", "constructor", "each"];
wt.extend = function(e) {
  e = e.reduce((t, n) => (ei.includes(n) || n[0] === "_" || (t[n] = function(...s) {
    return this.each(n, ...s);
  }), t), {}), T([wt], e);
};
function Tt(e, t) {
  return new wt(we((t || M.document).querySelectorAll(e), function(n) {
    return G(n);
  }));
}
function ni(e) {
  return Tt(e, this.node);
}
function si(e) {
  return G(this.node.querySelector(e));
}
let ii = 0;
const Ge = {};
function Ue(e) {
  let t = e.getEventHolder();
  return t === M.window && (t = Ge), t.events || (t.events = {}), t.events;
}
function _e(e) {
  return e.getEventTarget();
}
function Rn(e) {
  let t = e.getEventHolder();
  t === M.window && (t = Ge), t.events && (t.events = {});
}
function gt(e, t, n, s, i) {
  const r = n.bind(s || e), o = B(e), a = Ue(o), h = _e(o);
  t = Array.isArray(t) ? t : t.split(ht), n._svgjsListenerId || (n._svgjsListenerId = ++ii), t.forEach(function(l) {
    const c = l.split(".")[0], u = l.split(".")[1] || "*";
    a[c] = a[c] || {}, a[c][u] = a[c][u] || {}, a[c][u][n._svgjsListenerId] = r, h.addEventListener(c, r, i || !1);
  });
}
function it(e, t, n, s) {
  const i = B(e), r = Ue(i), o = _e(i);
  typeof n == "function" && (n = n._svgjsListenerId, !n) || (t = Array.isArray(t) ? t : (t || "").split(ht), t.forEach(function(a) {
    const h = a && a.split(".")[0], l = a && a.split(".")[1];
    let c, u;
    if (n)
      r[h] && r[h][l || "*"] && (o.removeEventListener(h, r[h][l || "*"][n], s || !1), delete r[h][l || "*"][n]);
    else if (h && l) {
      if (r[h] && r[h][l]) {
        for (u in r[h][l])
          it(o, [h, l].join("."), u);
        delete r[h][l];
      }
    } else if (l)
      for (a in r)
        for (c in r[a])
          l === c && it(o, [a, l].join("."));
    else if (h) {
      if (r[h]) {
        for (c in r[h])
          it(o, [h, c].join("."));
        delete r[h];
      }
    } else {
      for (a in r)
        it(o, a);
      Rn(i);
    }
  }));
}
function Pn(e, t, n, s) {
  const i = _e(e);
  return t instanceof M.window.Event || (t = new M.window.CustomEvent(t, {
    detail: n,
    cancelable: !0,
    ...s
  })), i.dispatchEvent(t), t;
}
class Xt extends qe {
  addEventListener() {
  }
  dispatch(t, n, s) {
    return Pn(this, t, n, s);
  }
  dispatchEvent(t) {
    const n = this.getEventHolder().events;
    if (!n) return !0;
    const s = n[t.type];
    for (const i in s)
      for (const r in s[i])
        s[i][r](t);
    return !t.defaultPrevented;
  }
  // Fire given event
  fire(t, n, s) {
    return this.dispatch(t, n, s), this;
  }
  getEventHolder() {
    return this;
  }
  getEventTarget() {
    return this;
  }
  // Unbind event from listener
  off(t, n, s) {
    return it(this, t, n, s), this;
  }
  // Bind given event to listener
  on(t, n, s, i) {
    return gt(this, t, n, s, i), this;
  }
  removeEventListener() {
  }
}
E(Xt, "EventTarget");
function Xe() {
}
const Ot = {
  duration: 400,
  ease: ">",
  delay: 0
}, Nn = {
  // fill and stroke
  "fill-opacity": 1,
  "stroke-opacity": 1,
  "stroke-width": 0,
  "stroke-linejoin": "miter",
  "stroke-linecap": "butt",
  fill: "#000000",
  stroke: "#000000",
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  "stop-opacity": 1,
  "stop-color": "#000000",
  // text
  "text-anchor": "start"
};
var ri = {
  __proto__: null,
  noop: Xe,
  timeline: Ot,
  attrs: Nn
};
class Dt extends Array {
  constructor(...t) {
    super(...t), this.init(...t);
  }
  clone() {
    return new this.constructor(this);
  }
  init(t) {
    return typeof t == "number" ? this : (this.length = 0, this.push(...this.parse(t)), this);
  }
  // Parse whitespace separated string
  parse(t = []) {
    return t instanceof Array ? t : t.trim().split(ht).map(parseFloat);
  }
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
  toSet() {
    return new Set(this);
  }
  toString() {
    return this.join(" ");
  }
  // Flattens the array if needed
  valueOf() {
    const t = [];
    return t.push(...this), t;
  }
}
class _ {
  // Initialize
  constructor(...t) {
    this.init(...t);
  }
  convert(t) {
    return new _(this.value, t);
  }
  // Divide number
  divide(t) {
    return t = new _(t), new _(this / t, this.unit || t.unit);
  }
  init(t, n) {
    return n = Array.isArray(t) ? t[1] : n, t = Array.isArray(t) ? t[0] : t, this.value = 0, this.unit = n || "", typeof t == "number" ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : typeof t == "string" ? (n = t.match(He), n && (this.value = parseFloat(n[1]), n[5] === "%" ? this.value /= 100 : n[5] === "s" && (this.value *= 1e3), this.unit = n[5])) : t instanceof _ && (this.value = t.valueOf(), this.unit = t.unit), this;
  }
  // Subtract number
  minus(t) {
    return t = new _(t), new _(this - t, this.unit || t.unit);
  }
  // Add number
  plus(t) {
    return t = new _(t), new _(this + t, this.unit || t.unit);
  }
  // Multiply number
  times(t) {
    return t = new _(t), new _(this * t, this.unit || t.unit);
  }
  toArray() {
    return [this.value, this.unit];
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return (this.unit === "%" ? ~~(this.value * 1e8) / 1e6 : this.unit === "s" ? this.value / 1e3 : this.value) + this.unit;
  }
  valueOf() {
    return this.value;
  }
}
const jn = [];
function oi(e) {
  jn.push(e);
}
function ai(e, t, n) {
  if (e == null) {
    e = {}, t = this.node.attributes;
    for (const s of t)
      e[s.nodeName] = Fe.test(s.nodeValue) ? parseFloat(s.nodeValue) : s.nodeValue;
    return e;
  } else {
    if (e instanceof Array)
      return e.reduce((s, i) => (s[i] = this.attr(i), s), {});
    if (typeof e == "object" && e.constructor === Object)
      for (t in e) this.attr(t, e[t]);
    else if (t === null)
      this.node.removeAttribute(e);
    else {
      if (t == null)
        return t = this.node.getAttribute(e), t == null ? Nn[e] : Fe.test(t) ? parseFloat(t) : t;
      t = jn.reduce((s, i) => i(e, s, this), t), typeof t == "number" ? t = new _(t) : R.isColor(t) ? t = new R(t) : t.constructor === Array && (t = new Dt(t)), e === "leading" ? this.leading && this.leading(t) : typeof n == "string" ? this.node.setAttributeNS(n, e, t.toString()) : this.node.setAttribute(e, t.toString()), this.rebuild && (e === "font-size" || e === "x") && this.rebuild();
    }
  }
  return this;
}
class ut extends Xt {
  constructor(t, n) {
    super(), this.node = t, this.type = t.nodeName, n && t !== n && this.attr(n);
  }
  // Add given element at a position
  add(t, n) {
    return t = B(t), t.removeNamespace && this.node instanceof M.window.SVGElement && t.removeNamespace(), n == null ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[n] && this.node.insertBefore(t.node, this.node.childNodes[n]), this;
  }
  // Add element to given container and return self
  addTo(t, n) {
    return B(t).put(this, n);
  }
  // Returns all child elements
  children() {
    return new wt(we(this.node.children, function(t) {
      return G(t);
    }));
  }
  // Remove all elements in this container
  clear() {
    for (; this.node.hasChildNodes(); )
      this.node.removeChild(this.node.lastChild);
    return this;
  }
  // Clone element
  clone(t = !0, n = !0) {
    this.writeDataToDom();
    let s = this.node.cloneNode(t);
    return n && (s = Ze(s)), new this.constructor(s);
  }
  // Iterates over all children and invokes a given block
  each(t, n) {
    const s = this.children();
    let i, r;
    for (i = 0, r = s.length; i < r; i++)
      t.apply(s[i], [i, s]), n && s[i].each(t, n);
    return this;
  }
  element(t, n) {
    return this.put(new ut(Pt(t), n));
  }
  // Get first child
  first() {
    return G(this.node.firstChild);
  }
  // Get a element at the given index
  get(t) {
    return G(this.node.childNodes[t]);
  }
  getEventHolder() {
    return this.node;
  }
  getEventTarget() {
    return this.node;
  }
  // Checks if the given element is a child
  has(t) {
    return this.index(t) >= 0;
  }
  html(t, n) {
    return this.xml(t, n, yn);
  }
  // Get / set id
  id(t) {
    return typeof t > "u" && !this.node.id && (this.node.id = Be(this.type)), this.attr("id", t);
  }
  // Gets index of given element
  index(t) {
    return [].slice.call(this.node.childNodes).indexOf(t.node);
  }
  // Get the last child
  last() {
    return G(this.node.lastChild);
  }
  // matches the element vs a css selector
  matches(t) {
    const n = this.node, s = n.matches || n.matchesSelector || n.msMatchesSelector || n.mozMatchesSelector || n.webkitMatchesSelector || n.oMatchesSelector || null;
    return s && s.call(n, t);
  }
  // Returns the parent element instance
  parent(t) {
    let n = this;
    if (!n.node.parentNode) return null;
    if (n = G(n.node.parentNode), !t) return n;
    do
      if (typeof t == "string" ? n.matches(t) : n instanceof t) return n;
    while (n = G(n.node.parentNode));
    return n;
  }
  // Basically does the same as `add()` but returns the added element instead
  put(t, n) {
    return t = B(t), this.add(t, n), t;
  }
  // Add element to given container and return container
  putIn(t, n) {
    return B(t).add(this, n);
  }
  // Remove element
  remove() {
    return this.parent() && this.parent().removeElement(this), this;
  }
  // Remove a given child
  removeElement(t) {
    return this.node.removeChild(t.node), this;
  }
  // Replace this with element
  replace(t) {
    return t = B(t), this.node.parentNode && this.node.parentNode.replaceChild(t.node, this.node), t;
  }
  round(t = 2, n = null) {
    const s = 10 ** t, i = this.attr(n);
    for (const r in i)
      typeof i[r] == "number" && (i[r] = Math.round(i[r] * s) / s);
    return this.attr(i), this;
  }
  // Import / Export raw svg
  svg(t, n) {
    return this.xml(t, n, xe);
  }
  // Return id on string conversion
  toString() {
    return this.id();
  }
  words(t) {
    return this.node.textContent = t, this;
  }
  wrap(t) {
    const n = this.parent();
    if (!n)
      return this.addTo(t);
    const s = n.index(this);
    return n.put(t, s).put(this);
  }
  // write svgjs data to the dom
  writeDataToDom() {
    return this.each(function() {
      this.writeDataToDom();
    }), this;
  }
  // Import / Export raw svg
  xml(t, n, s) {
    if (typeof t == "boolean" && (s = n, n = t, t = null), t == null || typeof t == "function") {
      n = n ?? !0, this.writeDataToDom();
      let a = this;
      if (t != null) {
        if (a = G(a.node.cloneNode(!0)), n) {
          const h = t(a);
          if (a = h || a, h === !1) return "";
        }
        a.each(function() {
          const h = t(this), l = h || this;
          h === !1 ? this.remove() : h && this !== l && this.replace(l);
        }, !0);
      }
      return n ? a.node.outerHTML : a.node.innerHTML;
    }
    n = n ?? !1;
    const i = Pt("wrapper", s), r = M.document.createDocumentFragment();
    i.innerHTML = t;
    for (let a = i.children.length; a--; )
      r.appendChild(i.firstElementChild);
    const o = this.parent();
    return n ? this.replace(r) && o : this.add(r);
  }
}
T(ut, {
  attr: ai,
  find: ni,
  findOne: si
});
E(ut, "Dom");
class rt extends ut {
  constructor(t, n) {
    super(t, n), this.dom = {}, this.node.instance = this, t.hasAttribute("svgjs:data") && this.setData(JSON.parse(t.getAttribute("svgjs:data")) || {});
  }
  // Move element by its center
  center(t, n) {
    return this.cx(t).cy(n);
  }
  // Move by center over x-axis
  cx(t) {
    return t == null ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
  }
  // Move by center over y-axis
  cy(t) {
    return t == null ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
  }
  // Get defs
  defs() {
    const t = this.root();
    return t && t.defs();
  }
  // Relative move over x and y axes
  dmove(t, n) {
    return this.dx(t).dy(n);
  }
  // Relative move over x axis
  dx(t = 0) {
    return this.x(new _(t).plus(this.x()));
  }
  // Relative move over y axis
  dy(t = 0) {
    return this.y(new _(t).plus(this.y()));
  }
  getEventHolder() {
    return this;
  }
  // Set height of element
  height(t) {
    return this.attr("height", t);
  }
  // Move element to given x and y values
  move(t, n) {
    return this.x(t).y(n);
  }
  // return array of all ancestors of given type up to the root svg
  parents(t = this.root()) {
    const n = typeof t == "string";
    n || (t = B(t));
    const s = new wt();
    let i = this;
    for (; (i = i.parent()) && i.node !== M.document && i.nodeName !== "#document-fragment" && (s.push(i), !(!n && i.node === t.node || n && i.matches(t))); )
      if (i.node === this.root().node)
        return null;
    return s;
  }
  // Get referenced element form attribute value
  reference(t) {
    if (t = this.attr(t), !t) return null;
    const n = (t + "").match(Sn);
    return n ? B(n[1]) : null;
  }
  // Get parent document
  root() {
    const t = this.parent(Dn(ye));
    return t && t.root();
  }
  // set given data to the elements data property
  setData(t) {
    return this.dom = t, this;
  }
  // Set element size to given width and height
  size(t, n) {
    const s = Mt(this, t, n);
    return this.width(new _(s.width)).height(new _(s.height));
  }
  // Set width of element
  width(t) {
    return this.attr("width", t);
  }
  // write svgjs data to the dom
  writeDataToDom() {
    return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), super.writeDataToDom();
  }
  // Move over x-axis
  x(t) {
    return this.attr("x", t);
  }
  // Move over y-axis
  y(t) {
    return this.attr("y", t);
  }
}
T(rt, {
  bbox: Ks,
  rbox: Qs,
  inside: ti,
  point: Gs,
  ctm: Us,
  screenCTM: Ws
});
E(rt, "Element");
const qt = {
  stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
  fill: ["color", "opacity", "rule"],
  prefix: function(e, t) {
    return t === "color" ? e : e + "-" + t;
  }
};
["fill", "stroke"].forEach(function(e) {
  const t = {};
  let n;
  t[e] = function(s) {
    if (typeof s > "u")
      return this.attr(e);
    if (typeof s == "string" || s instanceof R || R.isRgb(s) || s instanceof rt)
      this.attr(e, s);
    else
      for (n = qt[e].length - 1; n >= 0; n--)
        s[qt[e][n]] != null && this.attr(qt.prefix(e, qt[e][n]), s[qt[e][n]]);
    return this;
  }, A(["Element", "Runner"], t);
});
A(["Element", "Runner"], {
  // Let the user set the matrix directly
  matrix: function(e, t, n, s, i, r) {
    return e == null ? new g(this) : this.attr("transform", new g(e, t, n, s, i, r));
  },
  // Map rotation to transform
  rotate: function(e, t, n) {
    return this.transform({
      rotate: e,
      ox: t,
      oy: n
    }, !0);
  },
  // Map skew to transform
  skew: function(e, t, n, s) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: e,
      ox: t,
      oy: n
    }, !0) : this.transform({
      skew: [e, t],
      ox: n,
      oy: s
    }, !0);
  },
  shear: function(e, t, n) {
    return this.transform({
      shear: e,
      ox: t,
      oy: n
    }, !0);
  },
  // Map scale to transform
  scale: function(e, t, n, s) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: e,
      ox: t,
      oy: n
    }, !0) : this.transform({
      scale: [e, t],
      ox: n,
      oy: s
    }, !0);
  },
  // Map translate to transform
  translate: function(e, t) {
    return this.transform({
      translate: [e, t]
    }, !0);
  },
  // Map relative translations to transform
  relative: function(e, t) {
    return this.transform({
      relative: [e, t]
    }, !0);
  },
  // Map flip to transform
  flip: function(e = "both", t = "center") {
    return "xybothtrue".indexOf(e) === -1 && (t = e, e = "both"), this.transform({
      flip: e,
      origin: t
    }, !0);
  },
  // Opacity
  opacity: function(e) {
    return this.attr("opacity", e);
  }
});
A("radius", {
  // Add x and y radius
  radius: function(e, t = e) {
    return (this._element || this).type === "radialGradient" ? this.attr("r", new _(e)) : this.rx(e).ry(t);
  }
});
A("Path", {
  // Get path length
  length: function() {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function(e) {
    return new L(this.node.getPointAtLength(e));
  }
});
A(["Element", "Runner"], {
  // Set font
  font: function(e, t) {
    if (typeof e == "object") {
      for (t in e) this.font(t, e[t]);
      return this;
    }
    return e === "leading" ? this.leading(t) : e === "anchor" ? this.attr("text-anchor", t) : e === "size" || e === "family" || e === "weight" || e === "stretch" || e === "variant" || e === "style" ? this.attr("font-" + e, t) : this.attr(e, t);
  }
});
const hi = ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce(function(e, t) {
  const n = function(s) {
    return s === null ? this.off(t) : this.on(t, s), this;
  };
  return e[t] = n, e;
}, {});
A("Element", hi);
function ci() {
  return this.attr("transform", null);
}
function li() {
  return (this.attr("transform") || "").split(En).slice(0, -1).map(function(t) {
    const n = t.trim().split("(");
    return [n[0], n[1].split(ht).map(function(s) {
      return parseFloat(s);
    })];
  }).reverse().reduce(function(t, n) {
    return n[0] === "matrix" ? t.lmultiply(g.fromArray(n[1])) : t[n[0]].apply(t, n[1]);
  }, new g());
}
function ui(e, t) {
  if (this === e) return this;
  const n = this.screenCTM(), s = e.screenCTM().inverse();
  return this.addTo(e, t).untransform().transform(s.multiply(n)), this;
}
function fi(e) {
  return this.toParent(this.root(), e);
}
function di(e, t) {
  if (e == null || typeof e == "string") {
    const i = new g(this).decompose();
    return e == null ? i : i[e];
  }
  g.isMatrixLike(e) || (e = {
    ...e,
    origin: ce(e, this)
  });
  const n = t === !0 ? this : t || !1, s = new g(n).transform(e);
  return this.attr("transform", s);
}
A("Element", {
  untransform: ci,
  matrixify: li,
  toParent: ui,
  toRoot: fi,
  transform: di
});
class H extends rt {
  flatten(t = this, n) {
    return this.each(function() {
      if (this instanceof H)
        return this.flatten().ungroup();
    }), this;
  }
  ungroup(t = this.parent(), n = t.index(this)) {
    return n = n === -1 ? t.children().length : n, this.each(function(s, i) {
      return i[i.length - s - 1].toParent(t, n);
    }), this.remove();
  }
}
E(H, "Container");
class ve extends H {
  constructor(t, n = t) {
    super(X("defs", t), n);
  }
  flatten() {
    return this;
  }
  ungroup() {
    return this;
  }
}
E(ve, "Defs");
class J extends rt {
}
E(J, "Shape");
function We(e) {
  return this.attr("rx", e);
}
function Je(e) {
  return this.attr("ry", e);
}
function zn(e) {
  return e == null ? this.cx() - this.rx() : this.cx(e + this.rx());
}
function Fn(e) {
  return e == null ? this.cy() - this.ry() : this.cy(e + this.ry());
}
function Xn(e) {
  return this.attr("cx", e);
}
function Yn(e) {
  return this.attr("cy", e);
}
function Ln(e) {
  return e == null ? this.rx() * 2 : this.rx(new _(e).divide(2));
}
function $n(e) {
  return e == null ? this.ry() * 2 : this.ry(new _(e).divide(2));
}
var mi = {
  __proto__: null,
  rx: We,
  ry: Je,
  x: zn,
  y: Fn,
  cx: Xn,
  cy: Yn,
  width: Ln,
  height: $n
};
class Jt extends J {
  constructor(t, n = t) {
    super(X("ellipse", t), n);
  }
  size(t, n) {
    const s = Mt(this, t, n);
    return this.rx(new _(s.width).divide(2)).ry(new _(s.height).divide(2));
  }
}
T(Jt, mi);
A("Container", {
  // Create an ellipse
  ellipse: F(function(e = 0, t = e) {
    return this.put(new Jt()).size(e, t).move(0, 0);
  })
});
E(Jt, "Ellipse");
class Ke extends ut {
  constructor(t = M.document.createDocumentFragment()) {
    super(t);
  }
  // Import / Export raw xml
  xml(t, n, s) {
    if (typeof t == "boolean" && (s = n, n = t, t = null), t == null || typeof t == "function") {
      const i = new ut(Pt("wrapper", s));
      return i.add(this.node.cloneNode(!0)), i.xml(!1, s);
    }
    return super.xml(t, !1, s);
  }
}
E(Ke, "Fragment");
function Vn(e, t) {
  return (this._element || this).type === "radialGradient" ? this.attr({
    fx: new _(e),
    fy: new _(t)
  }) : this.attr({
    x1: new _(e),
    y1: new _(t)
  });
}
function qn(e, t) {
  return (this._element || this).type === "radialGradient" ? this.attr({
    cx: new _(e),
    cy: new _(t)
  }) : this.attr({
    x2: new _(e),
    y2: new _(t)
  });
}
var pi = {
  __proto__: null,
  from: Vn,
  to: qn
};
class Yt extends H {
  constructor(t, n) {
    super(X(t + "Gradient", typeof t == "string" ? null : t), n);
  }
  // custom attr to handle transform
  attr(t, n, s) {
    return t === "transform" && (t = "gradientTransform"), super.attr(t, n, s);
  }
  bbox() {
    return new $();
  }
  targets() {
    return Tt("svg [fill*=" + this.id() + "]");
  }
  // Alias string conversion to fill
  toString() {
    return this.url();
  }
  // Update gradient
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Return the fill id
  url() {
    return "url(#" + this.id() + ")";
  }
}
T(Yt, pi);
A({
  Container: {
    // Create gradient element in defs
    gradient(...e) {
      return this.defs().gradient(...e);
    }
  },
  // define gradient
  Defs: {
    gradient: F(function(e, t) {
      return this.put(new Yt(e)).update(t);
    })
  }
});
E(Yt, "Gradient");
class Nt extends H {
  // Initialize node
  constructor(t, n = t) {
    super(X("pattern", t), n);
  }
  // custom attr to handle transform
  attr(t, n, s) {
    return t === "transform" && (t = "patternTransform"), super.attr(t, n, s);
  }
  bbox() {
    return new $();
  }
  targets() {
    return Tt("svg [fill*=" + this.id() + "]");
  }
  // Alias string conversion to fill
  toString() {
    return this.url();
  }
  // Update pattern by rebuilding
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Return the fill id
  url() {
    return "url(#" + this.id() + ")";
  }
}
A({
  Container: {
    // Create pattern element in defs
    pattern(...e) {
      return this.defs().pattern(...e);
    }
  },
  Defs: {
    pattern: F(function(e, t, n) {
      return this.put(new Nt()).update(n).attr({
        x: 0,
        y: 0,
        width: e,
        height: t,
        patternUnits: "userSpaceOnUse"
      });
    })
  }
});
E(Nt, "Pattern");
class Kt extends J {
  constructor(t, n = t) {
    super(X("image", t), n);
  }
  // (re)load image
  load(t, n) {
    if (!t) return this;
    const s = new M.window.Image();
    return gt(s, "load", function(i) {
      const r = this.parent(Nt);
      this.width() === 0 && this.height() === 0 && this.size(s.width, s.height), r instanceof Nt && r.width() === 0 && r.height() === 0 && r.size(this.width(), this.height()), typeof n == "function" && n.call(this, i);
    }, this), gt(s, "load error", function() {
      it(s);
    }), this.attr("href", s.src = t, Ft);
  }
}
oi(function(e, t, n) {
  return (e === "fill" || e === "stroke") && In.test(t) && (t = n.root().defs().image(t)), t instanceof Kt && (t = n.root().defs().pattern(0, 0, (s) => {
    s.add(t);
  })), t;
});
A({
  Container: {
    // create image element, load image and set its size
    image: F(function(e, t) {
      return this.put(new Kt()).size(0, 0).load(e, t);
    })
  }
});
E(Kt, "Image");
class ft extends Dt {
  // Get bounding box of points
  bbox() {
    let t = -1 / 0, n = -1 / 0, s = 1 / 0, i = 1 / 0;
    return this.forEach(function(r) {
      t = Math.max(r[0], t), n = Math.max(r[1], n), s = Math.min(r[0], s), i = Math.min(r[1], i);
    }), new $(s, i, t - s, n - i);
  }
  // Move point string
  move(t, n) {
    const s = this.bbox();
    if (t -= s.x, n -= s.y, !isNaN(t) && !isNaN(n))
      for (let i = this.length - 1; i >= 0; i--)
        this[i] = [this[i][0] + t, this[i][1] + n];
    return this;
  }
  // Parse point string and flat array
  parse(t = [0, 0]) {
    const n = [];
    t instanceof Array ? t = Array.prototype.concat.apply([], t) : t = t.trim().split(ht).map(parseFloat), t.length % 2 !== 0 && t.pop();
    for (let s = 0, i = t.length; s < i; s = s + 2)
      n.push([t[s], t[s + 1]]);
    return n;
  }
  // Resize poly string
  size(t, n) {
    let s;
    const i = this.bbox();
    for (s = this.length - 1; s >= 0; s--)
      i.width && (this[s][0] = (this[s][0] - i.x) * t / i.width + i.x), i.height && (this[s][1] = (this[s][1] - i.y) * n / i.height + i.y);
    return this;
  }
  // Convert array to line object
  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  }
  // Convert array to string
  toString() {
    const t = [];
    for (let n = 0, s = this.length; n < s; n++)
      t.push(this[n].join(","));
    return t.join(" ");
  }
  transform(t) {
    return this.clone().transformO(t);
  }
  // transform points with matrix (similar to Point.transform)
  transformO(t) {
    g.isMatrixLike(t) || (t = new g(t));
    for (let n = this.length; n--; ) {
      const [s, i] = this[n];
      this[n][0] = t.a * s + t.c * i + t.e, this[n][1] = t.b * s + t.d * i + t.f;
    }
    return this;
  }
}
const gi = ft;
function wi(e) {
  return e == null ? this.bbox().x : this.move(e, this.bbox().y);
}
function xi(e) {
  return e == null ? this.bbox().y : this.move(this.bbox().x, e);
}
function yi(e) {
  const t = this.bbox();
  return e == null ? t.width : this.size(e, t.height);
}
function bi(e) {
  const t = this.bbox();
  return e == null ? t.height : this.size(t.width, e);
}
var Qe = {
  __proto__: null,
  MorphArray: gi,
  x: wi,
  y: xi,
  width: yi,
  height: bi
};
class jt extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("line", t), n);
  }
  // Get array
  array() {
    return new ft([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
  }
  // Move by left top corner
  move(t, n) {
    return this.attr(this.array().move(t, n).toLine());
  }
  // Overwrite native plot() method
  plot(t, n, s, i) {
    return t == null ? this.array() : (typeof n < "u" ? t = {
      x1: t,
      y1: n,
      x2: s,
      y2: i
    } : t = new ft(t).toLine(), this.attr(t));
  }
  // Set element size to given width and height
  size(t, n) {
    const s = Mt(this, t, n);
    return this.attr(this.array().size(s.width, s.height).toLine());
  }
}
T(jt, Qe);
A({
  Container: {
    // Create a line element
    line: F(function(...e) {
      return jt.prototype.plot.apply(this.put(new jt()), e[0] != null ? e : [0, 0, 0, 0]);
    })
  }
});
E(jt, "Line");
class Gt extends H {
  // Initialize node
  constructor(t, n = t) {
    super(X("marker", t), n);
  }
  // Set height of element
  height(t) {
    return this.attr("markerHeight", t);
  }
  orient(t) {
    return this.attr("orient", t);
  }
  // Set marker refX and refY
  ref(t, n) {
    return this.attr("refX", t).attr("refY", n);
  }
  // Return the fill id
  toString() {
    return "url(#" + this.id() + ")";
  }
  // Update marker
  update(t) {
    return this.clear(), typeof t == "function" && t.call(this, this), this;
  }
  // Set width of element
  width(t) {
    return this.attr("markerWidth", t);
  }
}
A({
  Container: {
    marker(...e) {
      return this.defs().marker(...e);
    }
  },
  Defs: {
    // Create marker
    marker: F(function(e, t, n) {
      return this.put(new Gt()).size(e, t).ref(e / 2, t / 2).viewbox(0, 0, e, t).attr("orient", "auto").update(n);
    })
  },
  marker: {
    // Create and attach markers
    marker(e, t, n, s) {
      let i = ["marker"];
      return e !== "all" && i.push(e), i = i.join("-"), e = arguments[1] instanceof Gt ? arguments[1] : this.defs().marker(t, n, s), this.attr(i, e);
    }
  }
});
E(Gt, "Marker");
function Rt(e, t) {
  return function(n) {
    return n == null ? this[e] : (this[e] = n, t && t.call(this), this);
  };
}
const Bn = {
  "-": function(e) {
    return e;
  },
  "<>": function(e) {
    return -Math.cos(e * Math.PI) / 2 + 0.5;
  },
  ">": function(e) {
    return Math.sin(e * Math.PI / 2);
  },
  "<": function(e) {
    return -Math.cos(e * Math.PI / 2) + 1;
  },
  bezier: function(e, t, n, s) {
    return function(i) {
      return i < 0 ? e > 0 ? t / e * i : n > 0 ? s / n * i : 0 : i > 1 ? n < 1 ? (1 - s) / (1 - n) * i + (s - n) / (1 - n) : e < 1 ? (1 - t) / (1 - e) * i + (t - e) / (1 - e) : 1 : 3 * i * (1 - i) ** 2 * t + 3 * i ** 2 * (1 - i) * s + i ** 3;
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function(e, t = "end") {
    t = t.split("-").reverse()[0];
    let n = e;
    return t === "none" ? --n : t === "both" && ++n, (s, i = !1) => {
      let r = Math.floor(s * e);
      const o = s * r % 1 === 0;
      return (t === "start" || t === "both") && ++r, i && o && --r, s >= 0 && r < 0 && (r = 0), s <= 1 && r > n && (r = n), r / n;
    };
  }
};
class tn {
  done() {
    return !1;
  }
}
class ue extends tn {
  constructor(t = Ot.ease) {
    super(), this.ease = Bn[t] || t;
  }
  step(t, n, s) {
    return typeof t != "number" ? s < 1 ? t : n : t + (n - t) * this.ease(s);
  }
}
class Ut extends tn {
  constructor(t) {
    super(), this.stepper = t;
  }
  done(t) {
    return t.done;
  }
  step(t, n, s, i) {
    return this.stepper(t, n, s, i);
  }
}
function un() {
  const e = (this._duration || 500) / 1e3, t = this._overshoot || 0, n = 1e-10, s = Math.PI, i = Math.log(t / 100 + n), r = -i / Math.sqrt(s * s + i * i), o = 3.9 / (r * e);
  this.d = 2 * r * o, this.k = o * o;
}
class Zn extends Ut {
  constructor(t = 500, n = 0) {
    super(), this.duration(t).overshoot(n);
  }
  step(t, n, s, i) {
    if (typeof t == "string") return t;
    if (i.done = s === 1 / 0, s === 1 / 0) return n;
    if (s === 0) return t;
    s > 100 && (s = 16), s /= 1e3;
    const r = i.velocity || 0, o = -this.d * r - this.k * (t - n), a = t + r * s + o * s * s / 2;
    return i.velocity = r + o * s, i.done = Math.abs(n - a) + Math.abs(r) < 2e-3, i.done ? n : a;
  }
}
T(Zn, {
  duration: Rt("_duration", un),
  overshoot: Rt("_overshoot", un)
});
class Hn extends Ut {
  constructor(t = 0.1, n = 0.01, s = 0, i = 1e3) {
    super(), this.p(t).i(n).d(s).windup(i);
  }
  step(t, n, s, i) {
    if (typeof t == "string") return t;
    if (i.done = s === 1 / 0, s === 1 / 0) return n;
    if (s === 0) return t;
    const r = n - t;
    let o = (i.integral || 0) + r * s;
    const a = (r - (i.error || 0)) / s, h = this._windup;
    return h !== !1 && (o = Math.max(-h, Math.min(o, h))), i.error = r, i.integral = o, i.done = Math.abs(r) < 1e-3, i.done ? n : t + (this.P * r + this.I * o + this.D * a);
  }
}
T(Hn, {
  windup: Rt("_windup"),
  p: Rt("P"),
  i: Rt("I"),
  d: Rt("D")
});
const _i = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
}, Ye = {
  M: function(e, t, n) {
    return t.x = n.x = e[0], t.y = n.y = e[1], ["M", t.x, t.y];
  },
  L: function(e, t) {
    return t.x = e[0], t.y = e[1], ["L", e[0], e[1]];
  },
  H: function(e, t) {
    return t.x = e[0], ["H", e[0]];
  },
  V: function(e, t) {
    return t.y = e[0], ["V", e[0]];
  },
  C: function(e, t) {
    return t.x = e[4], t.y = e[5], ["C", e[0], e[1], e[2], e[3], e[4], e[5]];
  },
  S: function(e, t) {
    return t.x = e[2], t.y = e[3], ["S", e[0], e[1], e[2], e[3]];
  },
  Q: function(e, t) {
    return t.x = e[2], t.y = e[3], ["Q", e[0], e[1], e[2], e[3]];
  },
  T: function(e, t) {
    return t.x = e[0], t.y = e[1], ["T", e[0], e[1]];
  },
  Z: function(e, t, n) {
    return t.x = n.x, t.y = n.y, ["Z"];
  },
  A: function(e, t) {
    return t.x = e[5], t.y = e[6], ["A", e[0], e[1], e[2], e[3], e[4], e[5], e[6]];
  }
}, Ce = "mlhvqtcsaz".split("");
for (let e = 0, t = Ce.length; e < t; ++e)
  Ye[Ce[e]] = /* @__PURE__ */ function(n) {
    return function(s, i, r) {
      if (n === "H") s[0] = s[0] + i.x;
      else if (n === "V") s[0] = s[0] + i.y;
      else if (n === "A")
        s[5] = s[5] + i.x, s[6] = s[6] + i.y;
      else
        for (let o = 0, a = s.length; o < a; ++o)
          s[o] = s[o] + (o % 2 ? i.y : i.x);
      return Ye[n](s, i, r);
    };
  }(Ce[e].toUpperCase());
function vi(e) {
  const t = e.segment[0];
  return Ye[t](e.segment.slice(1), e.p, e.p0);
}
function Le(e) {
  return e.segment.length && e.segment.length - 1 === _i[e.segment[0].toUpperCase()];
}
function Ai(e, t) {
  e.inNumber && vt(e, !1);
  const n = be.test(t);
  if (n)
    e.segment = [t];
  else {
    const s = e.lastCommand, i = s.toLowerCase(), r = s === i;
    e.segment = [i === "m" ? r ? "l" : "L" : s];
  }
  return e.inSegment = !0, e.lastCommand = e.segment[0], n;
}
function vt(e, t) {
  if (!e.inNumber) throw new Error("Parser Error");
  e.number && e.segment.push(parseFloat(e.number)), e.inNumber = t, e.number = "", e.pointSeen = !1, e.hasExponent = !1, Le(e) && $e(e);
}
function $e(e) {
  e.inSegment = !1, e.absolute && (e.segment = vi(e)), e.segments.push(e.segment);
}
function Di(e) {
  if (!e.segment.length) return !1;
  const t = e.segment[0].toUpperCase() === "A", n = e.segment.length;
  return t && (n === 4 || n === 5);
}
function Mi(e) {
  return e.lastToken.toUpperCase() === "E";
}
function Ti(e, t = !0) {
  let n = 0, s = "";
  const i = {
    segment: [],
    inNumber: !1,
    number: "",
    lastToken: "",
    inSegment: !1,
    segments: [],
    pointSeen: !1,
    hasExponent: !1,
    absolute: t,
    p0: new L(),
    p: new L()
  };
  for (; i.lastToken = s, s = e.charAt(n++); )
    if (!(!i.inSegment && Ai(i, s))) {
      if (s === ".") {
        if (i.pointSeen || i.hasExponent) {
          vt(i, !1), --n;
          continue;
        }
        i.inNumber = !0, i.pointSeen = !0, i.number += s;
        continue;
      }
      if (!isNaN(parseInt(s))) {
        if (i.number === "0" || Di(i)) {
          i.inNumber = !0, i.number = s, vt(i, !0);
          continue;
        }
        i.inNumber = !0, i.number += s;
        continue;
      }
      if (s === " " || s === ",") {
        i.inNumber && vt(i, !1);
        continue;
      }
      if (s === "-") {
        if (i.inNumber && !Mi(i)) {
          vt(i, !1), --n;
          continue;
        }
        i.number += s, i.inNumber = !0;
        continue;
      }
      if (s.toUpperCase() === "E") {
        i.number += s, i.hasExponent = !0;
        continue;
      }
      if (be.test(s)) {
        if (i.inNumber)
          vt(i, !1);
        else if (Le(i))
          $e(i);
        else
          throw new Error("parser Error");
        --n;
      }
    }
  return i.inNumber && vt(i, !1), i.inSegment && Le(i) && $e(i), i.segments;
}
function Si(e) {
  let t = "";
  for (let n = 0, s = e.length; n < s; n++)
    t += e[n][0], e[n][1] != null && (t += e[n][1], e[n][2] != null && (t += " ", t += e[n][2], e[n][3] != null && (t += " ", t += e[n][3], t += " ", t += e[n][4], e[n][5] != null && (t += " ", t += e[n][5], t += " ", t += e[n][6], e[n][7] != null && (t += " ", t += e[n][7])))));
  return t + " ";
}
class xt extends Dt {
  // Get bounding box of path
  bbox() {
    return lt().path.setAttribute("d", this.toString()), new $(lt.nodes.path.getBBox());
  }
  // Move path string
  move(t, n) {
    const s = this.bbox();
    if (t -= s.x, n -= s.y, !isNaN(t) && !isNaN(n))
      for (let i, r = this.length - 1; r >= 0; r--)
        i = this[r][0], i === "M" || i === "L" || i === "T" ? (this[r][1] += t, this[r][2] += n) : i === "H" ? this[r][1] += t : i === "V" ? this[r][1] += n : i === "C" || i === "S" || i === "Q" ? (this[r][1] += t, this[r][2] += n, this[r][3] += t, this[r][4] += n, i === "C" && (this[r][5] += t, this[r][6] += n)) : i === "A" && (this[r][6] += t, this[r][7] += n);
    return this;
  }
  // Absolutize and parse path to array
  parse(t = "M0 0") {
    return Array.isArray(t) && (t = Array.prototype.concat.apply([], t).toString()), Ti(t);
  }
  // Resize path string
  size(t, n) {
    const s = this.bbox();
    let i, r;
    for (s.width = s.width === 0 ? 1 : s.width, s.height = s.height === 0 ? 1 : s.height, i = this.length - 1; i >= 0; i--)
      r = this[i][0], r === "M" || r === "L" || r === "T" ? (this[i][1] = (this[i][1] - s.x) * t / s.width + s.x, this[i][2] = (this[i][2] - s.y) * n / s.height + s.y) : r === "H" ? this[i][1] = (this[i][1] - s.x) * t / s.width + s.x : r === "V" ? this[i][1] = (this[i][1] - s.y) * n / s.height + s.y : r === "C" || r === "S" || r === "Q" ? (this[i][1] = (this[i][1] - s.x) * t / s.width + s.x, this[i][2] = (this[i][2] - s.y) * n / s.height + s.y, this[i][3] = (this[i][3] - s.x) * t / s.width + s.x, this[i][4] = (this[i][4] - s.y) * n / s.height + s.y, r === "C" && (this[i][5] = (this[i][5] - s.x) * t / s.width + s.x, this[i][6] = (this[i][6] - s.y) * n / s.height + s.y)) : r === "A" && (this[i][1] = this[i][1] * t / s.width, this[i][2] = this[i][2] * n / s.height, this[i][6] = (this[i][6] - s.x) * t / s.width + s.x, this[i][7] = (this[i][7] - s.y) * n / s.height + s.y);
    return this;
  }
  // Convert array to string
  toString() {
    return Si(this);
  }
}
const Gn = (e) => {
  const t = typeof e;
  return t === "number" ? _ : t === "string" ? R.isColor(e) ? R : ht.test(e) ? be.test(e) ? xt : Dt : He.test(e) ? _ : fe : en.indexOf(e.constructor) > -1 ? e.constructor : Array.isArray(e) ? Dt : t === "object" ? zt : fe;
};
class pt {
  constructor(t) {
    this._stepper = t || new ue("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
  }
  at(t) {
    return this._morphObj.morph(this._from, this._to, t, this._stepper, this._context);
  }
  done() {
    return this._context.map(this._stepper.done).reduce(function(n, s) {
      return n && s;
    }, !0);
  }
  from(t) {
    return t == null ? this._from : (this._from = this._set(t), this);
  }
  stepper(t) {
    return t == null ? this._stepper : (this._stepper = t, this);
  }
  to(t) {
    return t == null ? this._to : (this._to = this._set(t), this);
  }
  type(t) {
    return t == null ? this._type : (this._type = t, this);
  }
  _set(t) {
    this._type || this.type(Gn(t));
    let n = new this._type(t);
    return this._type === R && (n = this._to ? n[this._to[4]]() : this._from ? n[this._from[4]]() : n), this._type === zt && (n = this._to ? n.align(this._to) : this._from ? n.align(this._from) : n), n = n.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(n.length)).map(Object).map(function(s) {
      return s.done = !0, s;
    }), n;
  }
}
class fe {
  constructor(...t) {
    this.init(...t);
  }
  init(t) {
    return t = Array.isArray(t) ? t[0] : t, this.value = t, this;
  }
  toArray() {
    return [this.value];
  }
  valueOf() {
    return this.value;
  }
}
class Lt {
  constructor(...t) {
    this.init(...t);
  }
  init(t) {
    return Array.isArray(t) && (t = {
      scaleX: t[0],
      scaleY: t[1],
      shear: t[2],
      rotate: t[3],
      translateX: t[4],
      translateY: t[5],
      originX: t[6],
      originY: t[7]
    }), Object.assign(this, Lt.defaults, t), this;
  }
  toArray() {
    const t = this;
    return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY];
  }
}
Lt.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};
const Ei = (e, t) => e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
class zt {
  constructor(...t) {
    this.init(...t);
  }
  align(t) {
    const n = this.values;
    for (let s = 0, i = n.length; s < i; ++s) {
      if (n[s + 1] === t[s + 1]) {
        if (n[s + 1] === R && t[s + 7] !== n[s + 7]) {
          const a = t[s + 7], h = new R(this.values.splice(s + 3, 5))[a]().toArray();
          this.values.splice(s + 3, 0, ...h);
        }
        s += n[s + 2] + 2;
        continue;
      }
      if (!t[s + 1])
        return this;
      const r = new t[s + 1]().toArray(), o = n[s + 2] + 3;
      n.splice(s, o, t[s], t[s + 1], t[s + 2], ...r), s += n[s + 2] + 2;
    }
    return this;
  }
  init(t) {
    if (this.values = [], Array.isArray(t)) {
      this.values = t.slice();
      return;
    }
    t = t || {};
    const n = [];
    for (const s in t) {
      const i = Gn(t[s]), r = new i(t[s]).toArray();
      n.push([s, i, r.length, ...r]);
    }
    return n.sort(Ei), this.values = n.reduce((s, i) => s.concat(i), []), this;
  }
  toArray() {
    return this.values;
  }
  valueOf() {
    const t = {}, n = this.values;
    for (; n.length; ) {
      const s = n.shift(), i = n.shift(), r = n.shift(), o = n.splice(0, r);
      t[s] = new i(o);
    }
    return t;
  }
}
const en = [fe, Lt, zt];
function Un(e = []) {
  en.push(...[].concat(e));
}
function Wn() {
  T(en, {
    to(e) {
      return new pt().type(this.constructor).from(this.toArray()).to(e);
    },
    fromArray(e) {
      return this.init(e), this;
    },
    toConsumable() {
      return this.toArray();
    },
    morph(e, t, n, s, i) {
      const r = function(o, a) {
        return s.step(o, t[a], n, i[a], i);
      };
      return this.fromArray(e.map(r));
    }
  });
}
class St extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("path", t), n);
  }
  // Get array
  array() {
    return this._array || (this._array = new xt(this.attr("d")));
  }
  // Clear array cache
  clear() {
    return delete this._array, this;
  }
  // Set height of element
  height(t) {
    return t == null ? this.bbox().height : this.size(this.bbox().width, t);
  }
  // Move by left top corner
  move(t, n) {
    return this.attr("d", this.array().move(t, n));
  }
  // Plot new path
  plot(t) {
    return t == null ? this.array() : this.clear().attr("d", typeof t == "string" ? t : this._array = new xt(t));
  }
  // Set element size to given width and height
  size(t, n) {
    const s = Mt(this, t, n);
    return this.attr("d", this.array().size(s.width, s.height));
  }
  // Set width of element
  width(t) {
    return t == null ? this.bbox().width : this.size(t, this.bbox().height);
  }
  // Move by left top corner over x-axis
  x(t) {
    return t == null ? this.bbox().x : this.move(t, this.bbox().y);
  }
  // Move by left top corner over y-axis
  y(t) {
    return t == null ? this.bbox().y : this.move(this.bbox().x, t);
  }
}
St.prototype.MorphArray = xt;
A({
  Container: {
    // Create a wrapped path element
    path: F(function(e) {
      return this.put(new St()).plot(e || new xt());
    })
  }
});
E(St, "Path");
function ki() {
  return this._array || (this._array = new ft(this.attr("points")));
}
function Ii() {
  return delete this._array, this;
}
function Ci(e, t) {
  return this.attr("points", this.array().move(e, t));
}
function Oi(e) {
  return e == null ? this.array() : this.clear().attr("points", typeof e == "string" ? e : this._array = new ft(e));
}
function Ri(e, t) {
  const n = Mt(this, e, t);
  return this.attr("points", this.array().size(n.width, n.height));
}
var Jn = {
  __proto__: null,
  array: ki,
  clear: Ii,
  move: Ci,
  plot: Oi,
  size: Ri
};
class $t extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("polygon", t), n);
  }
}
A({
  Container: {
    // Create a wrapped polygon element
    polygon: F(function(e) {
      return this.put(new $t()).plot(e || new ft());
    })
  }
});
T($t, Qe);
T($t, Jn);
E($t, "Polygon");
class Vt extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("polyline", t), n);
  }
}
A({
  Container: {
    // Create a wrapped polygon element
    polyline: F(function(e) {
      return this.put(new Vt()).plot(e || new ft());
    })
  }
});
T(Vt, Qe);
T(Vt, Jn);
E(Vt, "Polyline");
class Qt extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("rect", t), n);
  }
}
T(Qt, {
  rx: We,
  ry: Je
});
A({
  Container: {
    // Create a rect element
    rect: F(function(e, t) {
      return this.put(new Qt()).size(e, t);
    })
  }
});
E(Qt, "Rect");
class he {
  constructor() {
    this._first = null, this._last = null;
  }
  // Shows us the first item in the list
  first() {
    return this._first && this._first.value;
  }
  // Shows us the last item in the list
  last() {
    return this._last && this._last.value;
  }
  push(t) {
    const n = typeof t.next < "u" ? t : {
      value: t,
      next: null,
      prev: null
    };
    return this._last ? (n.prev = this._last, this._last.next = n, this._last = n) : (this._last = n, this._first = n), n;
  }
  // Removes the item that was returned from the push
  remove(t) {
    t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null;
  }
  shift() {
    const t = this._first;
    return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null;
  }
}
const O = {
  nextDraw: null,
  frames: new he(),
  timeouts: new he(),
  immediates: new he(),
  timer: () => M.window.performance || M.window.Date,
  transforms: [],
  frame(e) {
    const t = O.frames.push({
      run: e
    });
    return O.nextDraw === null && (O.nextDraw = M.window.requestAnimationFrame(O._draw)), t;
  },
  timeout(e, t) {
    t = t || 0;
    const n = O.timer().now() + t, s = O.timeouts.push({
      run: e,
      time: n
    });
    return O.nextDraw === null && (O.nextDraw = M.window.requestAnimationFrame(O._draw)), s;
  },
  immediate(e) {
    const t = O.immediates.push(e);
    return O.nextDraw === null && (O.nextDraw = M.window.requestAnimationFrame(O._draw)), t;
  },
  cancelFrame(e) {
    e != null && O.frames.remove(e);
  },
  clearTimeout(e) {
    e != null && O.timeouts.remove(e);
  },
  cancelImmediate(e) {
    e != null && O.immediates.remove(e);
  },
  _draw(e) {
    let t = null;
    const n = O.timeouts.last();
    for (; (t = O.timeouts.shift()) && (e >= t.time ? t.run() : O.timeouts.push(t), t !== n); )
      ;
    let s = null;
    const i = O.frames.last();
    for (; s !== i && (s = O.frames.shift()); )
      s.run(e);
    let r = null;
    for (; r = O.immediates.shift(); )
      r();
    O.nextDraw = O.timeouts.first() || O.frames.first() ? M.window.requestAnimationFrame(O._draw) : null;
  }
}, Pi = function(e) {
  const t = e.start, n = e.runner.duration(), s = t + n;
  return {
    start: t,
    duration: n,
    end: s,
    runner: e.runner
  };
}, Ni = function() {
  const e = M.window;
  return (e.performance || e.Date).now();
};
class nn extends Xt {
  // Construct a new timeline on the given element
  constructor(t = Ni) {
    super(), this._timeSource = t, this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0);
  }
  active() {
    return !!this._nextFrame;
  }
  finish() {
    return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
  }
  // Calculates the end of the timeline
  getEndTime() {
    const t = this.getLastRunnerInfo(), n = t ? t.runner.duration() : 0;
    return (t ? t.start : this._time) + n;
  }
  getEndTimeOfTimeline() {
    const t = this._runners.map((n) => n.start + n.runner.duration());
    return Math.max(0, ...t);
  }
  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }
  getRunnerInfoById(t) {
    return this._runners[this._runnerIds.indexOf(t)] || null;
  }
  pause() {
    return this._paused = !0, this._continue();
  }
  persist(t) {
    return t == null ? this._persist : (this._persist = t, this);
  }
  play() {
    return this._paused = !1, this.updateTime()._continue();
  }
  reverse(t) {
    const n = this.speed();
    if (t == null) return this.speed(-n);
    const s = Math.abs(n);
    return this.speed(t ? -s : s);
  }
  // schedules a runner on the timeline
  schedule(t, n, s) {
    if (t == null)
      return this._runners.map(Pi);
    let i = 0;
    const r = this.getEndTime();
    if (n = n || 0, s == null || s === "last" || s === "after")
      i = r;
    else if (s === "absolute" || s === "start")
      i = n, n = 0;
    else if (s === "now")
      i = this._time;
    else if (s === "relative") {
      const h = this.getRunnerInfoById(t.id);
      h && (i = h.start + n, n = 0);
    } else if (s === "with-last") {
      const h = this.getLastRunnerInfo();
      i = h ? h.start : this._time;
    } else
      throw new Error('Invalid value for the "when" parameter');
    t.unschedule(), t.timeline(this);
    const o = t.persist(), a = {
      persist: o === null ? this._persist : o,
      start: i + n,
      runner: t
    };
    return this._lastRunnerId = t.id, this._runners.push(a), this._runners.sort((h, l) => h.start - l.start), this._runnerIds = this._runners.map((h) => h.runner.id), this.updateTime()._continue(), this;
  }
  seek(t) {
    return this.time(this._time + t);
  }
  source(t) {
    return t == null ? this._timeSource : (this._timeSource = t, this);
  }
  speed(t) {
    return t == null ? this._speed : (this._speed = t, this);
  }
  stop() {
    return this.time(0), this.pause();
  }
  time(t) {
    return t == null ? this._time : (this._time = t, this._continue(!0));
  }
  // Remove the runner from this timeline
  unschedule(t) {
    const n = this._runnerIds.indexOf(t.id);
    return n < 0 ? this : (this._runners.splice(n, 1), this._runnerIds.splice(n, 1), t.timeline(null), this);
  }
  // Makes sure, that after pausing the time doesn't jump
  updateTime() {
    return this.active() || (this._lastSourceTime = this._timeSource()), this;
  }
  // Checks if we are running and continues the animation
  _continue(t = !1) {
    return O.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : this._paused ? this : (this._nextFrame = O.frame(this._step), this);
  }
  _stepFn(t = !1) {
    const n = this._timeSource();
    let s = n - this._lastSourceTime;
    t && (s = 0);
    const i = this._speed * s + (this._time - this._lastStepTime);
    this._lastSourceTime = n, t || (this._time += i, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
    for (let o = this._runners.length; o--; ) {
      const a = this._runners[o], h = a.runner;
      this._time - a.start <= 0 && h.reset();
    }
    let r = !1;
    for (let o = 0, a = this._runners.length; o < a; o++) {
      const h = this._runners[o], l = h.runner;
      let c = i;
      const u = this._time - h.start;
      if (u <= 0) {
        r = !0;
        continue;
      } else u < c && (c = u);
      if (!l.active()) continue;
      l.step(c).done ? h.persist !== !0 && l.duration() - l.time() + this._time + h.persist < this._time && (l.unschedule(), --o, --a) : r = !0;
    }
    return r && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
  }
}
A({
  Element: {
    timeline: function(e) {
      return e == null ? (this._timeline = this._timeline || new nn(), this._timeline) : (this._timeline = e, this);
    }
  }
});
class U extends Xt {
  constructor(t) {
    super(), this.id = U.id++, t = t ?? Ot.duration, t = typeof t == "function" ? new Ut(t) : t, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = typeof t == "number" && t, this._isDeclarative = t instanceof Ut, this._stepper = this._isDeclarative ? t : new ue(), this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new g(), this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = this._isDeclarative ? !0 : null;
  }
  static sanitise(t, n, s) {
    let i = 1, r = !1, o = 0;
    return t = t || Ot.duration, n = n || Ot.delay, s = s || "last", typeof t == "object" && !(t instanceof tn) && (n = t.delay || n, s = t.when || s, r = t.swing || r, i = t.times || i, o = t.wait || o, t = t.duration || Ot.duration), {
      duration: t,
      delay: n,
      swing: r,
      times: i,
      wait: o,
      when: s
    };
  }
  active(t) {
    return t == null ? this.enabled : (this.enabled = t, this);
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */
  addTransform(t, n) {
    return this.transforms.lmultiplyO(t), this;
  }
  after(t) {
    return this.on("finished", t);
  }
  animate(t, n, s) {
    const i = U.sanitise(t, n, s), r = new U(i.duration);
    return this._timeline && r.timeline(this._timeline), this._element && r.element(this._element), r.loop(i).schedule(i.delay, i.when);
  }
  clearTransform() {
    return this.transforms = new g(), this;
  }
  // TODO: Keep track of all transformations so that deletion is faster
  clearTransformsFromQueue() {
    (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) && (this._queue = this._queue.filter((t) => !t.isTransform));
  }
  delay(t) {
    return this.animate(0, t);
  }
  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }
  during(t) {
    return this.queue(null, t);
  }
  ease(t) {
    return this._stepper = new ue(t), this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */
  element(t) {
    return t == null ? this._element : (this._element = t, t._prepareRunner(), this);
  }
  finish() {
    return this.step(1 / 0);
  }
  loop(t, n, s) {
    return typeof t == "object" && (n = t.swing, s = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = n || !1, this._wait = s || 0, this._times === !0 && (this._times = 1 / 0), this;
  }
  loops(t) {
    const n = this._duration + this._wait;
    if (t == null) {
      const o = Math.floor(this._time / n), h = (this._time - o * n) / this._duration;
      return Math.min(o + h, this._times);
    }
    const s = Math.floor(t), i = t % 1, r = n * s + this._duration * i;
    return this.time(r);
  }
  persist(t) {
    return t == null ? this._persist : (this._persist = t, this);
  }
  position(t) {
    const n = this._time, s = this._duration, i = this._wait, r = this._times, o = this._swing, a = this._reverse;
    let h;
    if (t == null) {
      const f = function(d) {
        const m = o * Math.floor(d % (2 * (i + s)) / (i + s)), w = m && !a || !m && a, y = Math.pow(-1, w) * (d % (i + s)) / s + w;
        return Math.max(Math.min(y, 1), 0);
      }, p = r * (i + s) - i;
      return h = n <= 0 ? Math.round(f(1e-5)) : n < p ? f(n) : Math.round(f(p - 1e-5)), h;
    }
    const l = Math.floor(this.loops()), c = o && l % 2 === 0;
    return h = l + (c && !a || a && c ? t : 1 - t), this.loops(h);
  }
  progress(t) {
    return t == null ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */
  queue(t, n, s, i) {
    return this._queue.push({
      initialiser: t || Xe,
      runner: n || Xe,
      retarget: s,
      isTransform: i,
      initialised: !1,
      finished: !1
    }), this.timeline() && this.timeline()._continue(), this;
  }
  reset() {
    return this._reseted ? this : (this.time(0), this._reseted = !0, this);
  }
  reverse(t) {
    return this._reverse = t ?? !this._reverse, this;
  }
  schedule(t, n, s) {
    if (t instanceof nn || (s = n, n = t, t = this.timeline()), !t)
      throw Error("Runner cannot be scheduled without timeline");
    return t.schedule(this, n, s), this;
  }
  step(t) {
    if (!this.enabled) return this;
    t = t ?? 16, this._time += t;
    const n = this.position(), s = this._lastPosition !== n && this._time >= 0;
    this._lastPosition = n;
    const i = this.duration(), r = this._lastTime <= 0 && this._time > 0, o = this._lastTime < i && this._time >= i;
    this._lastTime = this._time, r && this.fire("start", this);
    const a = this._isDeclarative;
    this.done = !a && !o && this._time >= i, this._reseted = !1;
    let h = !1;
    return (s || a) && (this._initialise(s), this.transforms = new g(), h = this._run(a ? t : n), this.fire("step", this)), this.done = this.done || h && a, o && this.fire("finished", this), this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */
  time(t) {
    if (t == null)
      return this._time;
    const n = t - this._time;
    return this.step(n), this;
  }
  timeline(t) {
    return typeof t > "u" ? this._timeline : (this._timeline = t, this);
  }
  unschedule() {
    const t = this.timeline();
    return t && t.unschedule(this), this;
  }
  // Run each initialise function in the runner if required
  _initialise(t) {
    if (!(!t && !this._isDeclarative))
      for (let n = 0, s = this._queue.length; n < s; ++n) {
        const i = this._queue[n], r = this._isDeclarative || !i.initialised && t;
        t = !i.finished, r && t && (i.initialiser.call(this), i.initialised = !0);
      }
  }
  // Save a morpher to the morpher list so that we can retarget it later
  _rememberMorpher(t, n) {
    if (this._history[t] = {
      morpher: n,
      caller: this._queue[this._queue.length - 1]
    }, this._isDeclarative) {
      const s = this.timeline();
      s && s.play();
    }
  }
  // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given
  _run(t) {
    let n = !0;
    for (let s = 0, i = this._queue.length; s < i; ++s) {
      const r = this._queue[s], o = r.runner.call(this, t);
      r.finished = r.finished || o === !0, n = n && r.finished;
    }
    return n;
  }
  // do nothing and return false
  _tryRetarget(t, n, s) {
    if (this._history[t]) {
      if (!this._history[t].caller.initialised) {
        const r = this._queue.indexOf(this._history[t].caller);
        return this._queue.splice(r, 1), !1;
      }
      this._history[t].caller.retarget ? this._history[t].caller.retarget.call(this, n, s) : this._history[t].morpher.to(n), this._history[t].caller.finished = !1;
      const i = this.timeline();
      return i && i.play(), !0;
    }
    return !1;
  }
}
U.id = 0;
class de {
  constructor(t = new g(), n = -1, s = !0) {
    this.transforms = t, this.id = n, this.done = s;
  }
  clearTransformsFromQueue() {
  }
}
T([U, de], {
  mergeWith(e) {
    return new de(e.transforms.lmultiply(this.transforms), e.id);
  }
});
const Kn = (e, t) => e.lmultiplyO(t), Qn = (e) => e.transforms;
function ji() {
  const t = this._transformationRunners.runners.map(Qn).reduce(Kn, new g());
  this.transform(t), this._transformationRunners.merge(), this._transformationRunners.length() === 1 && (this._frameId = null);
}
class zi {
  constructor() {
    this.runners = [], this.ids = [];
  }
  add(t) {
    if (this.runners.includes(t)) return;
    const n = t.id + 1;
    return this.runners.push(t), this.ids.push(n), this;
  }
  clearBefore(t) {
    const n = this.ids.indexOf(t + 1) || 1;
    return this.ids.splice(0, n, 0), this.runners.splice(0, n, new de()).forEach((s) => s.clearTransformsFromQueue()), this;
  }
  edit(t, n) {
    const s = this.ids.indexOf(t + 1);
    return this.ids.splice(s, 1, t + 1), this.runners.splice(s, 1, n), this;
  }
  getByID(t) {
    return this.runners[this.ids.indexOf(t + 1)];
  }
  length() {
    return this.ids.length;
  }
  merge() {
    let t = null;
    for (let n = 0; n < this.runners.length; ++n) {
      const s = this.runners[n];
      if (t && s.done && t.done && (!s._timeline || !s._timeline._runnerIds.includes(s.id)) && (!t._timeline || !t._timeline._runnerIds.includes(t.id))) {
        this.remove(s.id);
        const r = s.mergeWith(t);
        this.edit(t.id, r), t = r, --n;
      } else
        t = s;
    }
    return this;
  }
  remove(t) {
    const n = this.ids.indexOf(t + 1);
    return this.ids.splice(n, 1), this.runners.splice(n, 1), this;
  }
}
A({
  Element: {
    animate(e, t, n) {
      const s = U.sanitise(e, t, n), i = this.timeline();
      return new U(s.duration).loop(s).element(this).timeline(i.play()).schedule(s.delay, s.when);
    },
    delay(e, t) {
      return this.animate(0, e, t);
    },
    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(e) {
      this._transformationRunners.clearBefore(e.id);
    },
    _currentTransform(e) {
      return this._transformationRunners.runners.filter((t) => t.id <= e.id).map(Qn).reduce(Kn, new g());
    },
    _addRunner(e) {
      this._transformationRunners.add(e), O.cancelImmediate(this._frameId), this._frameId = O.immediate(ji.bind(this));
    },
    _prepareRunner() {
      this._frameId == null && (this._transformationRunners = new zi().add(new de(new g(this))));
    }
  }
});
const Fi = (e, t) => e.filter((n) => !t.includes(n));
T(U, {
  attr(e, t) {
    return this.styleAttr("attr", e, t);
  },
  // Add animatable styles
  css(e, t) {
    return this.styleAttr("css", e, t);
  },
  styleAttr(e, t, n) {
    if (typeof t == "string")
      return this.styleAttr(e, {
        [t]: n
      });
    let s = t;
    if (this._tryRetarget(e, s)) return this;
    let i = new pt(this._stepper).to(s), r = Object.keys(s);
    return this.queue(function() {
      i = i.from(this.element()[e](r));
    }, function(o) {
      return this.element()[e](i.at(o).valueOf()), i.done();
    }, function(o) {
      const a = Object.keys(o), h = Fi(a, r);
      if (h.length) {
        const c = this.element()[e](h), u = new zt(i.from()).valueOf();
        Object.assign(u, c), i.from(u);
      }
      const l = new zt(i.to()).valueOf();
      Object.assign(l, o), i.to(l), r = a, s = o;
    }), this._rememberMorpher(e, i), this;
  },
  zoom(e, t) {
    if (this._tryRetarget("zoom", e, t)) return this;
    let n = new pt(this._stepper).to(new _(e));
    return this.queue(function() {
      n = n.from(this.element().zoom());
    }, function(s) {
      return this.element().zoom(n.at(s), t), n.done();
    }, function(s, i) {
      t = i, n.to(s);
    }), this._rememberMorpher("zoom", n), this;
  },
  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(e, t, n) {
    if (t = e.relative || t, this._isDeclarative && !t && this._tryRetarget("transform", e))
      return this;
    const s = g.isMatrixLike(e);
    n = e.affine != null ? e.affine : n ?? !s;
    const i = new pt(this._stepper).type(n ? Lt : g);
    let r, o, a, h, l;
    function c() {
      o = o || this.element(), r = r || ce(e, o), l = new g(t ? void 0 : o), o._addRunner(this), t || o._clearTransformRunnersBefore(this);
    }
    function u(p) {
      t || this.clearTransform();
      const {
        x: d,
        y: m
      } = new L(r).transform(o._currentTransform(this));
      let w = new g({
        ...e,
        origin: [d, m]
      }), y = this._isDeclarative && a ? a : l;
      if (n) {
        w = w.decompose(d, m), y = y.decompose(d, m);
        const b = w.rotate, D = y.rotate, P = [b - 360, b, b + 360], k = P.map((j) => Math.abs(j - D)), S = Math.min(...k), N = k.indexOf(S);
        w.rotate = P[N];
      }
      t && (s || (w.rotate = e.rotate || 0), this._isDeclarative && h && (y.rotate = h)), i.from(y), i.to(w);
      const I = i.at(p);
      return h = I.rotate, a = new g(I), this.addTransform(a), o._addRunner(this), i.done();
    }
    function f(p) {
      (p.origin || "center").toString() !== (e.origin || "center").toString() && (r = ce(p, o)), e = {
        ...p,
        origin: r
      };
    }
    return this.queue(c, u, f, !0), this._isDeclarative && this._rememberMorpher("transform", i), this;
  },
  // Animatable x-axis
  x(e, t) {
    return this._queueNumber("x", e);
  },
  // Animatable y-axis
  y(e) {
    return this._queueNumber("y", e);
  },
  dx(e = 0) {
    return this._queueNumberDelta("x", e);
  },
  dy(e = 0) {
    return this._queueNumberDelta("y", e);
  },
  dmove(e, t) {
    return this.dx(e).dy(t);
  },
  _queueNumberDelta(e, t) {
    if (t = new _(t), this._tryRetarget(e, t)) return this;
    const n = new pt(this._stepper).to(t);
    let s = null;
    return this.queue(function() {
      s = this.element()[e](), n.from(s), n.to(s + t);
    }, function(i) {
      return this.element()[e](n.at(i)), n.done();
    }, function(i) {
      n.to(s + new _(i));
    }), this._rememberMorpher(e, n), this;
  },
  _queueObject(e, t) {
    if (this._tryRetarget(e, t)) return this;
    const n = new pt(this._stepper).to(t);
    return this.queue(function() {
      n.from(this.element()[e]());
    }, function(s) {
      return this.element()[e](n.at(s)), n.done();
    }), this._rememberMorpher(e, n), this;
  },
  _queueNumber(e, t) {
    return this._queueObject(e, new _(t));
  },
  // Animatable center x-axis
  cx(e) {
    return this._queueNumber("cx", e);
  },
  // Animatable center y-axis
  cy(e) {
    return this._queueNumber("cy", e);
  },
  // Add animatable move
  move(e, t) {
    return this.x(e).y(t);
  },
  // Add animatable center
  center(e, t) {
    return this.cx(e).cy(t);
  },
  // Add animatable size
  size(e, t) {
    let n;
    return (!e || !t) && (n = this._element.bbox()), e || (e = n.width / n.height * t), t || (t = n.height / n.width * e), this.width(e).height(t);
  },
  // Add animatable width
  width(e) {
    return this._queueNumber("width", e);
  },
  // Add animatable height
  height(e) {
    return this._queueNumber("height", e);
  },
  // Add animatable plot
  plot(e, t, n, s) {
    if (arguments.length === 4)
      return this.plot([e, t, n, s]);
    if (this._tryRetarget("plot", e)) return this;
    const i = new pt(this._stepper).type(this._element.MorphArray).to(e);
    return this.queue(function() {
      i.from(this._element.array());
    }, function(r) {
      return this._element.plot(i.at(r)), i.done();
    }), this._rememberMorpher("plot", i), this;
  },
  // Add leading method
  leading(e) {
    return this._queueNumber("leading", e);
  },
  // Add animatable viewbox
  viewbox(e, t, n, s) {
    return this._queueObject("viewbox", new $(e, t, n, s));
  },
  update(e) {
    return typeof e != "object" ? this.update({
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }) : (e.opacity != null && this.attr("stop-opacity", e.opacity), e.color != null && this.attr("stop-color", e.color), e.offset != null && this.attr("offset", e.offset), this);
  }
});
T(U, {
  rx: We,
  ry: Je,
  from: Vn,
  to: qn
});
E(U, "Runner");
let te = class extends H {
  constructor(t, n = t) {
    super(X("svg", t), n), this.namespace();
  }
  // Creates and returns defs element
  defs() {
    return this.isRoot() ? G(this.node.querySelector("defs")) || this.put(new ve()) : this.root().defs();
  }
  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof M.window.SVGElement) && this.node.parentNode.nodeName !== "#document-fragment";
  }
  // Add namespaces
  namespace() {
    return this.isRoot() ? this.attr({
      xmlns: xe,
      version: "1.1"
    }).attr("xmlns:xlink", Ft, Ht).attr("xmlns:svgjs", bn, Ht) : this.root().namespace();
  }
  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr("xmlns:xlink", null, Ht).attr("xmlns:svgjs", null, Ht);
  }
  // Check if this is a root svg
  // If not, call root() from this element
  root() {
    return this.isRoot() ? this : super.root();
  }
};
A({
  Container: {
    // Create nested svg document
    nested: F(function() {
      return this.put(new te());
    })
  }
});
E(te, "Svg", !0);
let Ae = class extends H {
  // Initialize node
  constructor(t, n = t) {
    super(X("symbol", t), n);
  }
};
A({
  Container: {
    symbol: F(function() {
      return this.put(new Ae());
    })
  }
});
E(Ae, "Symbol");
function Xi(e) {
  return this._build === !1 && this.clear(), this.node.appendChild(M.document.createTextNode(e)), this;
}
function Yi() {
  return this.node.getComputedTextLength();
}
function Li(e, t = this.bbox()) {
  return e == null ? t.x : this.attr("x", this.attr("x") + e - t.x);
}
function $i(e, t = this.bbox()) {
  return e == null ? t.y : this.attr("y", this.attr("y") + e - t.y);
}
function Vi(e, t, n = this.bbox()) {
  return this.x(e, n).y(t, n);
}
function qi(e, t = this.bbox()) {
  return e == null ? t.cx : this.attr("x", this.attr("x") + e - t.cx);
}
function Bi(e, t = this.bbox()) {
  return e == null ? t.cy : this.attr("y", this.attr("y") + e - t.cy);
}
function Zi(e, t, n = this.bbox()) {
  return this.cx(e, n).cy(t, n);
}
function Hi(e) {
  return this.attr("x", e);
}
function Gi(e) {
  return this.attr("y", e);
}
function Ui(e, t) {
  return this.ax(e).ay(t);
}
function Wi(e) {
  return this._build = !!e, this;
}
var ts = {
  __proto__: null,
  plain: Xi,
  length: Yi,
  x: Li,
  y: $i,
  move: Vi,
  cx: qi,
  cy: Bi,
  center: Zi,
  ax: Hi,
  ay: Gi,
  amove: Ui,
  build: Wi
};
let et = class extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("text", t), n), this.dom.leading = new _(1.3), this._rebuild = !0, this._build = !1;
  }
  // Set / get leading
  leading(t) {
    return t == null ? this.dom.leading : (this.dom.leading = new _(t), this.rebuild());
  }
  // Rebuild appearance type
  rebuild(t) {
    if (typeof t == "boolean" && (this._rebuild = t), this._rebuild) {
      const n = this;
      let s = 0;
      const i = this.dom.leading;
      this.each(function(r) {
        const o = M.window.getComputedStyle(this.node).getPropertyValue("font-size"), a = i * new _(o);
        this.dom.newLined && (this.attr("x", n.attr("x")), this.text() === `
` ? s += a : (this.attr("dy", r ? a + s : 0), s = 0));
      }), this.fire("rebuild");
    }
    return this;
  }
  // overwrite method from parent to set data properly
  setData(t) {
    return this.dom = t, this.dom.leading = new _(t.leading || 1.3), this;
  }
  // Set the text content
  text(t) {
    if (t === void 0) {
      const n = this.node.childNodes;
      let s = 0;
      t = "";
      for (let i = 0, r = n.length; i < r; ++i) {
        if (n[i].nodeName === "textPath") {
          i === 0 && (s = 1);
          continue;
        }
        i !== s && n[i].nodeType !== 3 && G(n[i]).dom.newLined === !0 && (t += `
`), t += n[i].textContent;
      }
      return t;
    }
    if (this.clear().build(!0), typeof t == "function")
      t.call(this, this);
    else {
      t = (t + "").split(`
`);
      for (let n = 0, s = t.length; n < s; n++)
        this.newLine(t[n]);
    }
    return this.build(!1).rebuild();
  }
};
T(et, ts);
A({
  Container: {
    // Create text element
    text: F(function(e = "") {
      return this.put(new et()).text(e);
    }),
    // Create plain text element
    plain: F(function(e = "") {
      return this.put(new et()).plain(e);
    })
  }
});
E(et, "Text");
class ee extends J {
  // Initialize node
  constructor(t, n = t) {
    super(X("tspan", t), n), this._build = !1;
  }
  // Shortcut dx
  dx(t) {
    return this.attr("dx", t);
  }
  // Shortcut dy
  dy(t) {
    return this.attr("dy", t);
  }
  // Create new line
  newLine() {
    this.dom.newLined = !0;
    const t = this.parent();
    if (!(t instanceof et))
      return this;
    const n = t.index(this), s = M.window.getComputedStyle(this.node).getPropertyValue("font-size"), i = t.dom.leading * new _(s);
    return this.dy(n ? i : 0).attr("x", t.x());
  }
  // Set text content
  text(t) {
    return t == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof t == "function" ? (this.clear().build(!0), t.call(this, this), this.build(!1)) : this.plain(t), this);
  }
}
T(ee, ts);
A({
  Tspan: {
    tspan: F(function(e = "") {
      const t = new ee();
      return this._build || this.clear(), this.put(t).text(e);
    })
  },
  Text: {
    newLine: function(e = "") {
      return this.tspan(e).newLine();
    }
  }
});
E(ee, "Tspan");
class De extends J {
  constructor(t, n = t) {
    super(X("circle", t), n);
  }
  radius(t) {
    return this.attr("r", t);
  }
  // Radius x value
  rx(t) {
    return this.attr("r", t);
  }
  // Alias radius x value
  ry(t) {
    return this.rx(t);
  }
  size(t) {
    return this.radius(new _(t).divide(2));
  }
}
T(De, {
  x: zn,
  y: Fn,
  cx: Xn,
  cy: Yn,
  width: Ln,
  height: $n
});
A({
  Container: {
    // Create circle element
    circle: F(function(e = 0) {
      return this.put(new De()).size(e).move(0, 0);
    })
  }
});
E(De, "Circle");
class me extends H {
  constructor(t, n = t) {
    super(X("clipPath", t), n);
  }
  // Unclip all clipped elements and remove itself
  remove() {
    return this.targets().forEach(function(t) {
      t.unclip();
    }), super.remove();
  }
  targets() {
    return Tt("svg [clip-path*=" + this.id() + "]");
  }
}
A({
  Container: {
    // Create clipping element
    clip: F(function() {
      return this.defs().put(new me());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference("clip-path");
    },
    clipWith(e) {
      const t = e instanceof me ? e : this.parent().clip().add(e);
      return this.attr("clip-path", "url(#" + t.id() + ")");
    },
    // Unclip element
    unclip() {
      return this.attr("clip-path", null);
    }
  }
});
E(me, "ClipPath");
class sn extends rt {
  constructor(t, n = t) {
    super(X("foreignObject", t), n);
  }
}
A({
  Container: {
    foreignObject: F(function(e, t) {
      return this.put(new sn()).size(e, t);
    })
  }
});
E(sn, "ForeignObject");
function Ji(e, t) {
  return this.children().forEach((n, s) => {
    let i;
    try {
      i = n.bbox();
    } catch {
      return;
    }
    const r = new g(n), o = r.translate(e, t).transform(r.inverse()), a = new L(i.x, i.y).transform(o);
    n.move(a.x, a.y);
  }), this;
}
function Ki(e) {
  return this.dmove(e, 0);
}
function Qi(e) {
  return this.dmove(0, e);
}
function tr(e, t = this.bbox()) {
  return e == null ? t.height : this.size(t.width, e, t);
}
function er(e = 0, t = 0, n = this.bbox()) {
  const s = e - n.x, i = t - n.y;
  return this.dmove(s, i);
}
function nr(e, t, n = this.bbox()) {
  const s = Mt(this, e, t, n), i = s.width / n.width, r = s.height / n.height;
  return this.children().forEach((o, a) => {
    const h = new L(n).transform(new g(o).inverse());
    o.scale(i, r, h.x, h.y);
  }), this;
}
function sr(e, t = this.bbox()) {
  return e == null ? t.width : this.size(e, t.height, t);
}
function ir(e, t = this.bbox()) {
  return e == null ? t.x : this.move(e, t.y, t);
}
function rr(e, t = this.bbox()) {
  return e == null ? t.y : this.move(t.x, e, t);
}
var es = {
  __proto__: null,
  dmove: Ji,
  dx: Ki,
  dy: Qi,
  height: tr,
  move: er,
  size: nr,
  width: sr,
  x: ir,
  y: rr
};
class Me extends H {
  constructor(t, n = t) {
    super(X("g", t), n);
  }
}
T(Me, es);
A({
  Container: {
    // Create a group element
    group: F(function() {
      return this.put(new Me());
    })
  }
});
E(Me, "G");
class Wt extends H {
  constructor(t, n = t) {
    super(X("a", t), n);
  }
  // Link target attribute
  target(t) {
    return this.attr("target", t);
  }
  // Link url
  to(t) {
    return this.attr("href", t, Ft);
  }
}
T(Wt, es);
A({
  Container: {
    // Create a hyperlink element
    link: F(function(e) {
      return this.put(new Wt()).to(e);
    })
  },
  Element: {
    unlink() {
      const e = this.linker();
      if (!e) return this;
      const t = e.parent();
      if (!t)
        return this.remove();
      const n = t.index(e);
      return t.add(this, n), e.remove(), this;
    },
    linkTo(e) {
      let t = this.linker();
      return t || (t = new Wt(), this.wrap(t)), typeof e == "function" ? e.call(t, t) : t.to(e), this;
    },
    linker() {
      const e = this.parent();
      return e && e.node.nodeName.toLowerCase() === "a" ? e : null;
    }
  }
});
E(Wt, "A");
class pe extends H {
  // Initialize node
  constructor(t, n = t) {
    super(X("mask", t), n);
  }
  // Unmask all masked elements and remove itself
  remove() {
    return this.targets().forEach(function(t) {
      t.unmask();
    }), super.remove();
  }
  targets() {
    return Tt("svg [mask*=" + this.id() + "]");
  }
}
A({
  Container: {
    mask: F(function() {
      return this.defs().put(new pe());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference("mask");
    },
    maskWith(e) {
      const t = e instanceof pe ? e : this.parent().mask().add(e);
      return this.attr("mask", "url(#" + t.id() + ")");
    },
    // Unmask element
    unmask() {
      return this.attr("mask", null);
    }
  }
});
E(pe, "Mask");
class rn extends rt {
  constructor(t, n = t) {
    super(X("stop", t), n);
  }
  // add color stops
  update(t) {
    return (typeof t == "number" || t instanceof _) && (t = {
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }), t.opacity != null && this.attr("stop-opacity", t.opacity), t.color != null && this.attr("stop-color", t.color), t.offset != null && this.attr("offset", new _(t.offset)), this;
  }
}
A({
  Gradient: {
    // Add a color stop
    stop: function(e, t, n) {
      return this.put(new rn()).update(e, t, n);
    }
  }
});
E(rn, "Stop");
function or(e, t) {
  if (!e) return "";
  if (!t) return e;
  let n = e + "{";
  for (const s in t)
    n += xn(s) + ":" + t[s] + ";";
  return n += "}", n;
}
class ge extends rt {
  constructor(t, n = t) {
    super(X("style", t), n);
  }
  addText(t = "") {
    return this.node.textContent += t, this;
  }
  font(t, n, s = {}) {
    return this.rule("@font-face", {
      fontFamily: t,
      src: n,
      ...s
    });
  }
  rule(t, n) {
    return this.addText(or(t, n));
  }
}
A("Dom", {
  style(e, t) {
    return this.put(new ge()).rule(e, t);
  },
  fontface(e, t, n) {
    return this.put(new ge()).font(e, t, n);
  }
});
E(ge, "Style");
class Te extends et {
  // Initialize node
  constructor(t, n = t) {
    super(X("textPath", t), n);
  }
  // return the array of the path track element
  array() {
    const t = this.track();
    return t ? t.array() : null;
  }
  // Plot path if any
  plot(t) {
    const n = this.track();
    let s = null;
    return n && (s = n.plot(t)), t == null ? s : this;
  }
  // Get the path element
  track() {
    return this.reference("href");
  }
}
A({
  Container: {
    textPath: F(function(e, t) {
      return e instanceof et || (e = this.text(e)), e.path(t);
    })
  },
  Text: {
    // Create path for text to run on
    path: F(function(e, t = !0) {
      const n = new Te();
      e instanceof St || (e = this.defs().path(e)), n.attr("href", "#" + e, Ft);
      let s;
      if (t)
        for (; s = this.node.firstChild; )
          n.node.appendChild(s);
      return this.put(n);
    }),
    // Get the textPath children
    textPath() {
      return this.findOne("textPath");
    }
  },
  Path: {
    // creates a textPath from this path
    text: F(function(e) {
      return e instanceof et || (e = new et().addTo(this.parent()).text(e)), e.path(this);
    }),
    targets() {
      return Tt("svg textPath").filter((e) => (e.attr("href") || "").includes(this.id()));
    }
  }
});
Te.prototype.MorphArray = xt;
E(Te, "TextPath");
class on extends J {
  constructor(t, n = t) {
    super(X("use", t), n);
  }
  // Use element as a reference
  use(t, n) {
    return this.attr("href", (n || "") + "#" + t, Ft);
  }
}
A({
  Container: {
    // Create a use element
    use: F(function(e, t) {
      return this.put(new on()).use(e, t);
    })
  }
});
E(on, "Use");
const ns = B;
T([te, Ae, Kt, Nt, Gt], W("viewbox"));
T([jt, Vt, $t, St], W("marker"));
T(et, W("Text"));
T(St, W("Path"));
T(ve, W("Defs"));
T([et, ee], W("Tspan"));
T([Qt, Jt, Yt, U], W("radius"));
T(Xt, W("EventTarget"));
T(ut, W("Dom"));
T(rt, W("Element"));
T(J, W("Shape"));
T([H, Ke], W("Container"));
T(Yt, W("Gradient"));
T(U, W("Runner"));
wt.extend(ls());
Un([_, R, $, g, Dt, ft, xt, L]);
Wn();
const ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: Wt,
  Animator: O,
  Array: Dt,
  Box: $,
  Circle: De,
  ClipPath: me,
  Color: R,
  Container: H,
  Controller: Ut,
  Defs: ve,
  Dom: ut,
  Ease: ue,
  Element: rt,
  Ellipse: Jt,
  EventTarget: Xt,
  ForeignObject: sn,
  Fragment: Ke,
  G: Me,
  Gradient: Yt,
  Image: Kt,
  Line: jt,
  List: wt,
  Marker: Gt,
  Mask: pe,
  Matrix: g,
  Morphable: pt,
  NonMorphable: fe,
  Number: _,
  ObjectBag: zt,
  PID: Hn,
  Path: St,
  PathArray: xt,
  Pattern: Nt,
  Point: L,
  PointArray: ft,
  Polygon: $t,
  Polyline: Vt,
  Queue: he,
  Rect: Qt,
  Runner: U,
  SVG: ns,
  Shape: J,
  Spring: Zn,
  Stop: rn,
  Style: ge,
  Svg: te,
  Symbol: Ae,
  Text: et,
  TextPath: Te,
  Timeline: nn,
  TransformBag: Lt,
  Tspan: ee,
  Use: on,
  adopt: G,
  assignNewId: Ze,
  clearEvents: Rn,
  create: Pt,
  defaults: ri,
  dispatch: Pn,
  easing: Bn,
  eid: Be,
  extend: T,
  find: Tt,
  getClass: Dn,
  getEventTarget: _e,
  getEvents: Ue,
  getWindow: ps,
  makeInstance: B,
  makeMorphable: Wn,
  mockAdopt: gs,
  namespaces: ds,
  nodeOrNew: X,
  off: it,
  on: gt,
  parser: lt,
  regex: Is,
  register: E,
  registerMorphableType: Un,
  registerWindow: _n,
  restoreWindow: An,
  root: ye,
  saveWindow: vn,
  utils: fs,
  windowEvents: Ge,
  withWindow: ms,
  wrapWithAttrCheck: F
}, Symbol.toStringTag, { value: "Module" }));
var Bt = function(t) {
  return t.touches || [{
    clientX: t.clientX,
    clientY: t.clientY
  }];
};
T(te, {
  panZoom: function(t) {
    var n, s, i, r, o, a, h, l, c, u, f, p, d = this;
    if (this.off(".panZoom"), t === !1) return this;
    t = (n = t) != null ? n : {};
    var m = (s = t.zoomFactor) != null ? s : 2, w = (i = t.zoomMin) != null ? i : Number.MIN_VALUE, y = (r = t.zoomMax) != null ? r : Number.MAX_VALUE, I = (o = t.wheelZoom) != null ? o : !0, b = (a = t.pinchZoom) != null ? a : !0, D = (h = t.panning) != null ? h : !0, P = (l = t.panButton) != null ? l : 0, k = (c = t.oneFingerPan) != null ? c : !1, S = (u = t.margins) != null ? u : !1, N = (f = t.wheelZoomDeltaModeLinePixels) != null ? f : 17, j = (p = t.wheelZoomDeltaModeScreenPixels) != null ? p : 53, Y, C, V = !1, q = this.viewbox(), K = function(x) {
      if (!S) return x;
      var z = S.top, Z = S.left, ct = S.bottom, dt = S.right, Q = d.attr(["width", "height"]), at = Q.width, se = Q.height, v = d.node.preserveAspectRatio.baseVal, bt = 0, _t = 0, Se = 0, Ee = 0;
      if (v.align !== v.SVG_PRESERVEASPECTRATIO_NONE) {
        var ie = at / se, re = q.width / q.height;
        if (re !== ie) {
          var hn = v.meetOrSlice !== v.SVG_MEETORSLICE_SLICE, ke = ie > re ? "width" : "height", cn = ke === "width", ln = hn && cn || !hn && !cn, rs = ln ? ie / re : re / ie, mt = x[ke] - x[ke] * rs;
          ln ? v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMIN || v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMID || v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMAX ? (bt = mt / 2, _t = -mt / 2) : v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMIN || v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMID || v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMAX ? _t = -mt : (v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMIN || v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMID || v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMAX) && (bt = mt) : v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMID || v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMID || v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMID ? (Se = mt / 2, Ee = -mt / 2) : v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMIN || v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMIN || v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMIN ? Ee = -mt : (v.align === v.SVG_PRESERVEASPECTRATIO_XMINYMAX || v.align === v.SVG_PRESERVEASPECTRATIO_XMIDYMAX || v.align === v.SVG_PRESERVEASPECTRATIO_XMAXYMAX) && (Se = mt);
        }
      }
      var os = q.width + q.x - Z - bt, as = q.x + dt - x.width - _t, hs = q.height + q.y - z - Se, cs = q.y + ct - x.height - Ee;
      return x.x = Math.min(os, Math.max(as, x.x)), x.y = Math.min(hs, Math.max(cs, x.y)), x;
    }, nt = function(x) {
      x.preventDefault();
      var z;
      switch (x.deltaMode) {
        case 1:
          z = x.deltaY * N;
          break;
        case 2:
          z = x.deltaY * j;
          break;
        default:
          z = x.deltaY;
          break;
      }
      var Z = Math.pow(1 + m, -1 * z / 100) * this.zoom(), ct = this.point(x.clientX, x.clientY);
      if (Z > y && (Z = y), Z < w && (Z = w), this.dispatch("zoom", {
        level: Z,
        focus: ct
      }).defaultPrevented)
        return this;
      if (this.zoom(Z, ct), S) {
        var dt = K(this.viewbox());
        this.viewbox(dt);
      }
    }, ot = function st(x) {
      if (C = Bt(x), C.length < 2) {
        D && k && kt.call(this, x);
        return;
      }
      D && k && ne.call(this, x), x.preventDefault(), !this.dispatch("pinchZoomStart", {
        event: x
      }).defaultPrevented && (this.off("touchstart.panZoom", st), V = !0, gt(document, "touchmove.panZoom", Et, this, {
        passive: !1
      }), gt(document, "touchend.panZoom", yt, this, {
        passive: !1
      }));
    }, yt = function st(x) {
      x.preventDefault();
      var z = Bt(x);
      z.length > 1 || (V = !1, this.dispatch("pinchZoomEnd", {
        event: x
      }), it(document, "touchmove.panZoom", Et), it(document, "touchend.panZoom", st), this.on("touchstart.panZoom", ot), z.length && D && k && kt.call(this, x));
    }, Et = function(x) {
      x.preventDefault();
      var z = Bt(x), Z = this.zoom(), ct = Math.sqrt(Math.pow(C[0].clientX - C[1].clientX, 2) + Math.pow(C[0].clientY - C[1].clientY, 2)), dt = Math.sqrt(Math.pow(z[0].clientX - z[1].clientX, 2) + Math.pow(z[0].clientY - z[1].clientY, 2)), Q = ct / dt;
      (Z < w && Q > 1 || Z > y && Q < 1) && (Q = 1);
      var at = {
        x: z[0].clientX + 0.5 * (z[1].clientX - z[0].clientX),
        y: z[0].clientY + 0.5 * (z[1].clientY - z[0].clientY)
      }, se = {
        x: C[0].clientX + 0.5 * (C[1].clientX - C[0].clientX),
        y: C[0].clientY + 0.5 * (C[1].clientY - C[0].clientY)
      }, v = this.point(at.x, at.y), bt = this.point(2 * at.x - se.x, 2 * at.y - se.y), _t = new $(this.viewbox()).transform(new g().translate(-bt.x, -bt.y).scale(Q, 0, 0).translate(v.x, v.y));
      K(_t), this.viewbox(_t), C = z, this.dispatch("zoom", {
        box: _t,
        focus: bt
      });
    }, kt = function st(x) {
      var z = x.type.indexOf("mouse") > -1;
      z && x.button !== P && x.which !== P + 1 || (x.preventDefault(), this.off("mousedown.panZoom", st), C = Bt(x), !V && (this.dispatch("panStart", {
        event: x
      }), Y = {
        x: C[0].clientX,
        y: C[0].clientY
      }, gt(document, "touchmove.panZoom mousemove.panZoom", an, this, {
        passive: !1
      }), gt(document, "touchend.panZoom mouseup.panZoom", ne, this, {
        passive: !1
      })));
    }, ne = function st(x) {
      x.preventDefault(), it(document, "touchmove.panZoom mousemove.panZoom", an), it(document, "touchend.panZoom mouseup.panZoom", st), this.on("mousedown.panZoom", kt), this.dispatch("panEnd", {
        event: x
      });
    }, an = function(x) {
      x.preventDefault();
      var z = Bt(x), Z = {
        x: z[0].clientX,
        y: z[0].clientY
      }, ct = this.point(Z.x, Z.y), dt = this.point(Y.x, Y.y), Q = [dt.x - ct.x, dt.y - ct.y];
      if (!(!Q[0] && !Q[1])) {
        var at = new $(this.viewbox()).transform(new g().translate(Q[0], Q[1]));
        Y = Z, K(at), !this.dispatch("panning", {
          box: at,
          event: x
        }).defaultPrevented && this.viewbox(at);
      }
    };
    return I && this.on("wheel.panZoom", nt, this, {
      passive: !1
    }), b && this.on("touchstart.panZoom", ot, this, {
      passive: !1
    }), D && this.on("mousedown.panZoom", kt, this, {
      passive: !1
    }), this;
  }
});
const hr = (e, t, n, s, i) => {
  const r = s * Math.PI / 180, o = i * Math.PI / 180, a = e + n * Math.cos(r), h = t + n * Math.sin(r), l = e + n * Math.cos(o), c = t + n * Math.sin(o), u = 0, f = i > s && i - s < 180 || i < s && i + 360 - s < 180 ? 0 : 1;
  return `M${a} ${h} A${n} ${n} ${u} ${f} 1 ${l} ${c}`;
}, cr = (e, t, n, s, i, r, o) => {
  const a = r * Math.PI / 180, h = o * Math.PI / 180, l = i * Math.PI / 180, c = 1 / Math.sqrt(1 / n ** 2 * Math.cos(a) ** 2 + 1 / s ** 2 * Math.sin(a) ** 2), u = 1 / Math.sqrt(1 / n ** 2 * Math.cos(h) ** 2 + 1 / s ** 2 * Math.sin(h) ** 2), f = c * Math.cos(a), p = c * Math.sin(a), d = u * Math.cos(h), m = u * Math.sin(h), w = e + f * Math.cos(l) - p * Math.sin(l), y = t + f * Math.sin(l) + p * Math.cos(l), I = e + d * Math.cos(l) - m * Math.sin(l), b = t + d * Math.sin(l) + m * Math.cos(l), D = i, P = o > r && o - r < 180 || o < r && o + 360 - r < 180 ? 0 : 1;
  return `M${w} ${y} A${n} ${s} ${D} ${P} 1 ${I} ${b}`;
}, lr = (e) => {
  const t = class extends e.Path {
    // Create method to proportionally scale the rounded corners
    size(s, i, r, o, a) {
      const h = hr(s, i, r, o, a);
      return this.attr({ d: h });
    }
  }, n = class extends e.Path {
    // Create method to proportionally scale the rounded corners
    size(s, i, r, o, a, h, l) {
      const c = cr(s, i, r, o, a, h, l);
      return this.attr({ d: c });
    }
  };
  e.extend(e.Container, {
    // Create a rounded element
    arc: function(s, i, r, o, a) {
      return this.put(new t()).size(s, i, r, o, a);
    },
    ellipticalArc: function(s, i, r, o, a, h, l) {
      return this.put(new n()).size(s, i, r, o, a, h, l);
    }
  });
}, ur = class {
  constructor(e) {
    this.figs = this.initialize(e);
  }
  initialize(e) {
    const t = e.group();
    return t.line(-1e3, 0, 1e3, 0).attr("stroke-dasharray", "5 5").data("id", { id: "XAXIS", type: "line" }), t.line(0, -1e3, 0, 1e3).attr("stroke-dasharray", "5 5").data("id", { id: "YAXIS", type: "line" }), t;
  }
  setAttr(e) {
    this.figs.attr(e);
  }
}, ss = class {
  constructor() {
    this.MAP = /* @__PURE__ */ new Map();
  }
  addData(e, t) {
    this.MAP.set(e, t);
  }
  removeData(e) {
    this.MAP.delete(e);
  }
  hasData(e) {
    return this.MAP.has(e);
  }
  getMap() {
    return this.MAP;
  }
  getValues() {
    return [...this.MAP.values()];
  }
  getKeys() {
    return [...this.MAP.keys()];
  }
  getDataFromId(e) {
    return this.MAP.get(e);
  }
}, Oe = class extends ss {
  constructor() {
    super(), this.id = -1;
  }
  getId() {
    this.id++;
    const e = this.id;
    return this.addData(e, null), e;
  }
  getCurrentId() {
    return this.id;
  }
}, fr = [
  //  ["CONTINUOUS", ""],  
  //  ["CENTER", "80 10 10 10"],  
  //  ["CENTERX2", "160 10 10 10"],  
  //  ["CENTERX2", "40 10 10 10"],  
  //  ["DASHED", "40 10"],  
  //  ["DASHEDX2", "80 10 10 10"],  
  //  ["DASHED2", "20 10 10 10"],  
  //  ["PHANTOM", "80 20 20 20 20 20"],  
  //  ["PHANTOMX2", "160 20 20 20 20 20"],  
  //  ["PHANTOM2", "40 10 10 10 10 10"],  
  //  ["DASHDOT", "40 10 2 10 "],  
  //  ["DASHDOTX2", "80 10 2 10"],  
  //  ["DASHDOT2", "20 10 2 10 "],  
  //  ["DOT", "2 10"],  
  //  ["DOTX2", "2 20"],  
  //  ["DOT2", "2 10"],  
  //  ["DIVIDE", "40 10 2 10 2 10"],  
  //  ["DIVIDEX2", "80 10 2 10 2 10"],  
  //  ["DIVIDE2", "20 10 2 10 2 10"],  
  ["CONTINUOUS", ""],
  ["CENTER", "31.75 6.35 6.35 6.35"],
  ["CENTER2", "19.05 3.175 3.175 3.175"],
  ["CENTERX2", "63.5 12.7 12.7 12.7"],
  ["DASHED", "5 5"],
  ["DASHED2", "6.35 3.175"],
  ["DASHEDX2", "25.4 12.7"],
  ["PHANTOM", "31.75 6.35 6.35 6.35 6.35 6.35"],
  ["PHANTOM2", "15.875 3.175 3.175 3.175 3.175 3.175"],
  ["PHANTOMX2", "63.5 12.7 12.7 12.7 12.7 12.7"],
  ["DASHDOT", "48 3 6 3"],
  ["DASHDOT2", "24 3 6 3"],
  ["DASHDOTX2", "96 3 6 3"],
  ["DOT", "1 6.35"],
  ["DOT2", "1 3.175"],
  ["DOTX2", "1 12.7"],
  ["DIVIDE", "12.7 6.35 1 6.35 1 6.35"],
  ["DIVIDE2", "6.35 3.175 1 3.175 1 3.175"],
  ["DIVIDEX2", "25.4 12.7 1 12.7 1 12.7"]
], fn = new Map(fr), tt = (e, t) => {
  const n = t?.lineTypeName;
  if (n) {
    const s = fn.has(n) ? fn.get(n) : n;
    e.attr("stroke-dasharray", s);
  }
}, dr = (e, t, n) => {
  const s = e, i = s[s.length - 1];
  let r = 0;
  for (let o = 0; o < s.length && !(i <= s[o]); o++)
    if (s[o] <= n)
      r = o;
    else
      break;
  return r;
}, dn = (e, t, n) => {
  const s = t + 1, i = dr(e, t, n), r = e, o = r.length - s;
  e[0];
  const a = [[[1]]];
  for (let c = 1; c <= t; c++) {
    const u = [];
    for (let f = 0; f <= c; f++) {
      const p = [];
      for (let d = 0; d <= c; d++) {
        const m = i - c + d;
        if (f == 0) {
          const w = a[c - 1][0][d - 1] || 0, y = a[c - 1][0][d] || 0, I = r[m + c] - r[m] > 0 ? (n - r[m]) / (r[m + c] - r[m]) * w : 0, b = r[m + c + 1] - r[m + 1] > 0 ? (r[m + c + 1] - n) / (r[m + c + 1] - r[m + 1]) * y : 0, D = I + b;
          p.push(D);
        } else {
          const w = d == 0 ? 0 : a[c - 1][f - 1][d - 1], y = d == c ? 0 : a[c - 1][f - 1][d], I = r[m + c] - r[m] > 0 ? c / (r[m + c] - r[m]) * w : 0, b = r[m + c + 1] - r[m + 1] > 0 ? c / (r[m + c + 1] - r[m + 1]) * y : 0, D = I - b;
          p.push(D);
        }
      }
      u.push(p);
    }
    a.push(u);
  }
  return a[a.length - 1].map((c) => {
    const u = i - t, f = u < 0 ? c.slice(-u) : i > o - 1 ? c.slice(0, -i + o - 1) : c, p = u > 0 ? [...Array(u)].fill(0) : [], d = p.length, m = o - f.length - d, w = m > 0 ? [...Array(m)].fill(0) : [];
    return [].concat(p, f, w);
  });
}, mr = (e, t, n) => {
  const s = t - (e + n) === 0;
  try {
    if (!s)
      throw new RangeError("length of knots must be equal to x.length + degree + 1");
  } catch (i) {
    console.log(i.name + " : " + i.message);
  }
  return s;
}, pr = (e, t, n = "openUniformKnots") => [].concat(
  [...Array(t)].fill(0),
  [...Array(e - t)].map((i, r) => r + 1),
  [...Array(t)].fill(e - t + 1)
), gr = (e, t = 3, n = !0) => {
  const s = e[t], i = e[e.length - 1 - t];
  return n ? (r) => {
    const o = s + r * (i - s);
    return dn(e, t, o);
  } : (r) => dn(e, t, r);
}, wr = (e, t = 3, n) => {
  const s = e.length, i = t + 1;
  if (n) {
    const a = e.length, h = n.length;
    mr(a, h, i);
  }
  const r = n || pr(s, i, "openUniformKnots"), o = gr(r, t, !0);
  return (a, h = 0) => {
    const c = o(a)[h], u = c.reduce((p, d, m) => p + d * e[m][0], 0), f = c.reduce((p, d, m) => p + d * e[m][1], 0);
    return [u, f];
  };
}, mn = class {
  constructor(e, t, n, s, i) {
    this.id = t, this.parentObj = e;
    const r = this.add(n, s, i);
    this.element = r, this.param = s, this.attr = i, this.type = n;
  }
  setAttr(e) {
    const t = this.element, n = this.attr, s = Object.assign(n, e);
    t.attr(s), this.attr = s;
  }
  getParam() {
    const e = this.type, t = this.param, n = this.attr;
    return {
      type: e,
      param: t,
      attr: n
    };
  }
  getId() {
    return this.id;
  }
  getElement() {
    return this.element;
  }
  add(e, t, n) {
    switch (e) {
      case "line":
        return this.addLine(t, n);
      case "lines":
        return this.addLines(t, n);
      case "polyline":
        return this.addPolyline(t, n);
      case "rectangle":
        return this.addRectangle(t, n);
      case "polygon":
        return this.addPolygon(t, n);
      case "bspline":
        return this.addBSpline(t, n);
      case "circle":
        return this.addCircle(t, n);
      case "ellipse":
        return this.addEllipse(t, n);
      case "arc":
        return this.addArc(t, n);
      case "ellipticalArc":
        return this.addEllipticalArc(t, n);
      default:
        return console.log("type is out of list", e), null;
    }
  }
  remove() {
    this.element.remove();
  }
  hide() {
    this.element.hide();
  }
  show() {
    this.element.show();
  }
  addLine(e, t) {
    const n = this.parentObj, [s, i, r, o] = [].concat(...e.points), a = n.line(s, i, r, o);
    return a.attr(t), tt(a, t), a;
  }
  addLines(e, t) {
    const n = this.parentObj, s = e.points, i = n.group();
    return s.forEach((r, o, a) => {
      o > 0 && i.line(a[o - 1][0], a[o - 1][1], r[0], r[1]);
    }), i.attr(t), tt(i, t), i;
  }
  addPolyline(e, t) {
    const n = this.parentObj, s = e.points, i = n.polyline(s);
    return i.attr(t), tt(i, t), i;
  }
  addPolygon(e, t) {
    const n = this.parentObj, s = e.points, i = n.polygon(s);
    return i.attr(t), tt(i, t), i;
  }
  addRectangle(e, t) {
    const n = this.parentObj, s = e.width, i = e.height, [r, o] = e.center, a = e?.rotation || 0, h = n.rect(s, i).center(r, o).rotate(a);
    return h.attr(t), tt(h, t), h;
  }
  addBSpline(e, t) {
    const n = this.parentObj, s = e.points, i = e.degree, r = e.knots, o = e?.segments || 100, a = wr(s, i, r), h = o, l = [...Array(h + 1)].map((u, f) => a(f / h, 0)), c = n.polyline(l);
    return c.attr(t), tt(c, t), c;
  }
  addCircle(e, t) {
    const n = this.parentObj, [s, i] = e.center, r = e.radius, o = n.circle(2 * r).center(s, i);
    return o.attr(t), tt(o, t), o;
  }
  addEllipse(e, t) {
    const n = this.parentObj, [s, i] = e.center, [r, o] = e.radius, a = e?.rotation || 0, h = n.ellipse(r * 2, o * 2).center(s, i).rotate(a);
    return h.attr(t), tt(h, t), h;
  }
  addArc(e, t) {
    const n = this.parentObj, [s, i] = e.center, r = e.radius, o = e.start, a = e.end, h = n.arc(s, i, r, o, a);
    return h.attr(t), tt(h, t), h;
  }
  addEllipticalArc(e, t) {
    const n = this.parentObj, [s, i] = e.center, [r, o] = e.radius, a = e?.rotation || 0, h = e.start, l = e.end, c = n.ellipticalArc(s, i, r, o, a, h, l);
    return c.attr(t), tt(c, t), c;
  }
}, Re = class {
  constructor(e, t, n, s, i, r) {
    this.id = t, this.parentObj = e;
    const o = this.add(n, s, i, r);
    this.element = o, this.param = s, this.attr = r, this.dimStyle = i, this.type = n;
  }
  setAttr(e) {
    const t = this.element, n = this.attr, s = Object.assign(n, e);
    t.attr(s), this.attr = s;
  }
  getParam() {
    const e = this.type, t = this.param, n = this.dimStyle, s = this.attr;
    return {
      type: e,
      param: t,
      dimStyle: n,
      attr: s
    };
  }
  getId() {
    return this.id;
  }
  getElement() {
    return this.element;
  }
  add(e, t, n, s) {
    switch (e) {
      case "horizontal":
        return this.addHorizontal(t, n, s);
      case "vertical":
        return this.addVertical(t, n, s);
      case "aligned":
        return this.addAligned(t, n, s);
      case "radius":
        return this.addRadius(t, n, s);
      case "diameter":
        return this.addDiameter(t, n, s);
      case "angle":
        return this.addAngle(t, n, s);
    }
  }
  remove() {
    this.element.remove();
  }
  hide() {
    this.element.hide();
  }
  show() {
    this.element.show();
  }
  makeDimLine(e, t) {
    const n = t.Dx1, s = t.Dy1, i = t.Dx2, r = t.Dy2, o = t.size, a = t.showStartSideArrow, h = t.showTerminalSideArrow;
    e.line(n, s, i, r);
    const c = Math.atan2(r - s, i - n) * 180 / Math.PI, u = o / 5;
    return a && (e.line(0, 0, u, u).rotate(c, 0, 0).translate(n, s), e.line(0, 0, u, -u).rotate(c, 0, 0).translate(n, s)), h && (e.line(0, 0, -u, u).rotate(c, 0, 0).translate(i, r), e.line(0, 0, -u, -u).rotate(c, 0, 0).translate(i, r)), e;
  }
  makeDimArc(e, t) {
    const n = t.cx, s = t.cy, i = t.radius, r = t.start, o = t.end, a = t.size, h = t.showStartSideArrow, l = t.showTerminalSideArrow, c = n + i * Math.cos(r / 180 * Math.PI), u = s + i * Math.sin(r / 180 * Math.PI), f = n + i * Math.cos(o / 180 * Math.PI), p = s + i * Math.sin(o / 180 * Math.PI);
    e.arc(n, s, i, r, o).fill("none");
    const d = a / 5;
    return h && (e.line(0, 0, -d, d).rotate(r, 0, 0).translate(c, u), e.line(0, 0, d, d).rotate(r, 0, 0).translate(c, u)), l && (e.line(0, 0, -d, -d).rotate(o, 0, 0).translate(f, p), e.line(0, 0, d, -d).rotate(o, 0, 0).translate(f, p)), e;
  }
  makeDimText(e, t) {
    const n = t.dimText, s = t.DCx, i = t.DCy, r = t.textAngle, o = t.font, a = t.decimalPlaces, h = t.prefix, l = t.suffix, c = t.offsetX || 0, u = t.offsetY || 0, p = t.alternativeText || h + n.toFixed(a) + l, d = s + c, m = i + u, y = -o["font-size"] / 2;
    return e.text(p).attr(o).center(0, y).flip("y", 0).rotate(r, 0, 0).translate(d, m);
  }
  addAligned(e, t, n) {
    const [s, i, r, o] = [].concat(...e.points), a = e.distance === 0 ? 0 : e.distance || 5, h = e?.alternativeText, l = e.offsetX, c = e.offsetY, u = t?.prefix || "", f = t?.suffix || "", p = t?.showAuxiliaryLines !== !1, d = t?.showStartSideArrow !== !1, m = t?.showTerminalSideArrow !== !1, w = t?.font || { "font-size": 20, "stroke-width": 0.1 }, y = w?.["font-size"] || 20, I = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, b = this.parentObj, D = b.group();
    D.attr(n);
    const P = Math.sqrt((r - s) ** 2 + (o - i) ** 2), k = P, S = a / P * (o - i), N = -a / P * (r - s), j = s + S, Y = i + N, C = r + S, V = o + N, q = (j + C) / 2, K = (Y + V) / 2, nt = Math.atan2(V - Y, C - j) * 180 / Math.PI, ot = { Dx1: j, Dy1: Y, Dx2: C, Dy2: V, size: y, showStartSideArrow: d, showTerminalSideArrow: m }, yt = {
      dimText: k,
      DCx: q,
      DCy: K,
      textAngle: nt,
      font: w,
      decimalPlaces: I,
      prefix: u,
      suffix: f,
      offsetX: l,
      offsetY: c,
      alternativeText: h
    }, Et = this.makeDimLine(D, ot);
    if (this.makeDimText(Et, yt), p) {
      const kt = b.line(s, i, j, Y), ne = b.line(r, o, C, V);
      D.add(kt), D.add(ne);
    }
    return D;
  }
  addVertical(e, t, n) {
    const [s, i, r, o] = [].concat(...e.points), a = e.distance || 5, h = e?.alternativeText, l = e.offsetX, c = e.offsetY, u = t?.prefix || "", f = t?.suffix || "", p = t?.showAuxiliaryLines !== !1, d = t?.showStartSideArrow !== !1, m = t?.showTerminalSideArrow !== !1, w = t?.font || { "font-size": 20, "stroke-width": 0.1 }, y = w?.["font-size"] || 20, I = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, b = this.parentObj, D = b.group();
    D.attr(n);
    const P = Math.abs(o - i), k = Math.max(s, r), S = k + a, N = i, j = k + a, Y = o, C = (S + j) / 2, V = (N + Y) / 2, q = Math.atan2(Y - N, j - S) * 180 / Math.PI, K = { Dx1: S, Dy1: N, Dx2: j, Dy2: Y, size: y, showStartSideArrow: d, showTerminalSideArrow: m }, nt = {
      dimText: P,
      DCx: C,
      DCy: V,
      textAngle: q,
      font: w,
      decimalPlaces: I,
      prefix: u,
      suffix: f,
      offsetX: l,
      offsetY: c,
      alternativeText: h
    }, ot = this.makeDimLine(D, K);
    if (this.makeDimText(ot, nt), p) {
      const yt = b.line(s, i, S, N), Et = b.line(r, o, j, Y);
      D.add(yt), D.add(Et);
    }
    return D;
  }
  addHorizontal(e, t, n) {
    const [s, i, r, o] = [].concat(...e.points), a = e.distance || 5, h = e?.alternativeText, l = e.offsetX, c = e.offsetY, u = t?.prefix || "", f = t?.suffix || "";
    t?.showAuxiliaryLines;
    const p = t?.showStartSideArrow || !0, d = t?.showTerminalSideArrow || !0, m = t?.font || { "font-size": 20, "stroke-width": 0.1 }, w = m?.["font-size"] || 20, y = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, I = this.parentObj, b = I.group();
    b.attr(n);
    const D = Math.abs(r - s), P = Math.min(i, o), k = s, S = P - a, N = r, j = P - a, Y = (k + N) / 2, C = (S + j) / 2, V = Math.atan2(j - S, N - k) * 180 / Math.PI, q = { Dx1: k, Dy1: S, Dx2: N, Dy2: j, size: w, showStartSideArrow: p, showTerminalSideArrow: d }, K = {
      dimText: D,
      DCx: Y,
      DCy: C,
      textAngle: V,
      font: m,
      decimalPlaces: y,
      prefix: u,
      suffix: f,
      offsetX: l,
      offsetY: c,
      alternativeText: h
    }, nt = this.makeDimLine(b, q);
    this.makeDimText(nt, K);
    {
      const ot = I.line(s, i, k, S), yt = I.line(r, o, N, j);
      b.add(ot), b.add(yt);
    }
    return b;
  }
  addRadius(e, t, n) {
    const [s, i] = e.center, r = e.radius, o = e.angle, a = e?.alternativeText, h = e.offsetX, l = e.offsetY, u = (t?.prefix || "") + "R", f = t?.suffix || "", p = t?.showStartSideArrow || !1, d = t?.showTerminalSideArrow || !0, m = t?.font || { "font-size": 20, "stroke-width": 0.1 }, w = m?.["font-size"] || 20, y = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, b = this.parentObj.group();
    b.attr(n);
    const D = r, P = o / 180 * Math.PI, k = s, S = i, N = s + r * Math.cos(P), j = i + r * Math.sin(P), Y = (k + N) / 2, C = (S + j) / 2, V = Math.atan2(j - S, N - k) * 180 / Math.PI, q = { Dx1: k, Dy1: S, Dx2: N, Dy2: j, size: w, showStartSideArrow: p, showTerminalSideArrow: d }, K = {
      dimText: D,
      DCx: Y,
      DCy: C,
      textAngle: V,
      font: m,
      decimalPlaces: y,
      prefix: u,
      suffix: f,
      offsetX: h,
      offsetY: l,
      alternativeText: a
    }, nt = this.makeDimLine(b, q);
    return this.makeDimText(nt, K), b;
  }
  addDiameter(e, t, n) {
    const [s, i] = e.center, r = e.radius, o = e.angle, a = e?.alternativeText, h = e.offsetX, l = e.offsetY, u = (t?.prefix || "") + "Φ", f = t?.suffix || "", p = t?.showStartSideArrow || !0, d = t?.showTerminalSideArrow || !0, m = t?.font || { "font-size": 20, "stroke-width": 0.1 }, w = m?.["font-size"] || 20, y = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, b = this.parentObj.group();
    b.attr(n);
    const P = r * 2, k = o / 180 * Math.PI, S = s + r * Math.cos(k + Math.PI), N = i + r * Math.sin(k + Math.PI), j = s + r * Math.cos(k), Y = i + r * Math.sin(k), C = (S + j) / 2, V = (N + Y) / 2, q = Math.atan2(Y - N, j - S) * 180 / Math.PI, K = { Dx1: S, Dy1: N, Dx2: j, Dy2: Y, size: w, showStartSideArrow: p, showTerminalSideArrow: d }, nt = {
      dimText: P,
      DCx: C,
      DCy: V,
      textAngle: q,
      font: m,
      decimalPlaces: y,
      prefix: u,
      suffix: f,
      offsetX: h,
      offsetY: l,
      alternativeText: a
    }, ot = this.makeDimLine(b, K);
    return this.makeDimText(ot, nt), b;
  }
  addAngle(e, t, n) {
    const [s, i] = e.center, r = e.radius, o = e.start, a = e.end, h = e?.alternativeText, l = e.offsetX, c = e.offsetY, u = t?.prefix || "";
    t?.suffix;
    const f = t?.suffix || "°", p = t?.showStartSideArrow || !0, d = t?.showTerminalSideArrow || !0, m = t?.font || { "font-size": 20, "stroke-width": 0.1 }, w = m?.["font-size"] || 20, y = isNaN(t?.decimalPlaces) ? 2 : t?.decimalPlaces, b = this.parentObj.group();
    b.attr(n);
    const D = a - o, P = D, k = D / 2 + o, S = s + r * Math.cos(k / 180 * Math.PI), N = i + r * Math.sin(k / 180 * Math.PI), j = (a + o) / 2 - 90, Y = { cx: s, cy: i, radius: r, start: o, end: a, size: w, showStartSideArrow: p, showTerminalSideArrow: d }, C = {
      dimText: P,
      DCx: S,
      DCy: N,
      textAngle: j,
      font: m,
      decimalPlaces: y,
      prefix: u,
      suffix: f,
      offsetX: l,
      offsetY: c,
      alternativeText: h
    }, V = this.makeDimArc(b, Y);
    return this.makeDimText(V, C), b;
  }
}, xr = class {
  constructor(e, t, n, s) {
    this.id = t, this.parentObj = e;
    const i = this.add(n, s);
    this.element = i, this.param = n, this.attr = s;
  }
  setAttr(e) {
    const t = this.element, n = this.attr, s = Object.assign(n, e);
    t.attr(s), this.attr = s;
  }
  getParam() {
    const e = this.param, t = this.attr;
    return {
      param: e,
      attr: t
    };
  }
  getId() {
    return this.id;
  }
  getElement() {
    return this.element;
  }
  add(e, t) {
    const n = this.parentObj, s = e?.text, i = e?.font || {}, r = e?.position;
    e?.theta;
    const o = t || {}, a = r ? r[0] : 0, h = r ? r[1] : 0, l = n.text((c) => {
      c.tspan(s);
    });
    return l.font(i).attr(o).flip("y", 0).translate(a, h), l.attr(t), l;
  }
  remove() {
    this.element.remove();
  }
  hide() {
    this.element.hide();
  }
  show() {
    this.element.show();
  }
}, yr = class {
  constructor(e, t, n, s, i, r) {
    const o = r, a = o === "black" || o === "#000000" || o === "#000" ? "white" : "black", h = e.group().fill("none"), l = e.group().stroke(a).fill(a), c = e.group().stroke(a).fill(a);
    h.attr(n), l.attr(s), c.attr(i), tt(h, n), this.id = t, this.figs = h, this.backgroundColor = r, this.dimensions = l, this.texts = c, this.figsData = new Oe(), this.textsData = new Oe(), this.dimensionsData = new Oe(), this.figsAttr = n, this.dimensionsAttr = s, this.textsAttr = i;
  }
  setBackgroundColor(e) {
    this.backgroundColor = e;
  }
  getId() {
    return this.id;
  }
  addFig(e, t, n) {
    const s = this.figsData.getId(), i = this.figs, r = new mn(i, s, e, t, n);
    return this.figsData.addData(s, r), r;
  }
  getFigFromId(e) {
    return this.figsData.get(e);
  }
  getAllFigIds() {
    return this.figsData.getKeys();
  }
  getAllFigs() {
    return this.figsData.getValues();
  }
  removeFig(e) {
    if (e instanceof mn) {
      const t = e, n = t.getId();
      t.remove(), this.figsData.removeData(n);
    } else if (Number.isInteger(e)) {
      const t = e, n = this.figsData;
      n.getDataFromId(t).remove(), n.removeData(t);
    } else
      throw new Error("arg is out of defined type");
    return this;
  }
  removeAllFigs() {
    this.getAllFigIds().forEach((t) => this.removeFig(t));
  }
  hideAllFigs() {
    this.getAllFigs().forEach((t) => t.hide());
  }
  showAllFigs() {
    this.getAllFigs().forEach((t) => t.show());
  }
  setFigsAttr(e) {
    const t = this.figs;
    t.attr(e), tt(t, e);
  }
  getAllDimensionIds() {
    return this.dimensionsData.getKeys();
  }
  getAllDimensions() {
    return this.dimensionsData.getValues();
  }
  addDimension(e, t, n = {}, s) {
    const i = this.dimensionsData.getId(), r = this.dimensions, o = new Re(r, i, e, t, n, s);
    return this.dimensionsData.addData(i, o), o;
  }
  removeDimension(e) {
    if (e instanceof Re) {
      const t = e, n = t.getId();
      t.remove(), this.dimensionsData.removeData(n);
    } else if (Number.isInteger(e)) {
      const t = e, n = this.dimensionsData;
      n.getDataFromId(t).remove(), n.removeData(t);
    } else
      throw new Error("arg is out of defined type");
    return this;
  }
  removeAllDimensions() {
    this.getAllDimensionIds().forEach((t) => this.removeDimension(t));
  }
  hideAllDimensions() {
    this.getAllDimensions().forEach((t) => t.hide());
  }
  showAllDimensions() {
    this.getAllDimensions().forEach((t) => t.show());
  }
  getAllTextIds() {
    return this.textsData.getKeys();
  }
  getAllTexts() {
    return this.textsData.getValues();
  }
  addText(e, t) {
    const n = this.textsData.getId(), s = this.texts, i = new xr(s, n, e, t);
    return this.textsData.addData(n, i), i;
  }
  removeText(e) {
    if (e instanceof Re) {
      const t = e, n = t.getId();
      t.remove(), this.textsData.removeData(n);
    } else if (Number.isInteger(e)) {
      const t = e, n = this.textsData;
      n.getDataFromId(t).remove(), n.removeData(t);
    } else
      throw new Error("arg is out of defined type");
    return this;
  }
  removeAllTexts() {
    this.getAllTextIds().forEach((t) => this.removeText(t));
  }
  hideAllTexts() {
    this.getAllTexts().forEach((t) => t.hide());
  }
  showAllTexts() {
    this.getAllTexts().forEach((t) => t.show());
  }
  hide() {
    this.hideAllFigs(), this.hideAllDimensions(), this.hideAllTexts();
  }
  show() {
    this.showAllFigs(), this.showAllDimensions(), this.showAllTexts();
  }
  remove() {
    this.removeAllFigs(), this.removeAllDimensions(), this.removeAllTexts();
  }
  getParam() {
    const e = this.getAllFigs(), t = this.getAllDimensions(), n = this.getAllTexts(), s = this.figsAttr, i = this.dimensionsAttr, r = this.textsAttr, o = e.map((c) => c.getParam()), a = t.map((c) => c.getParam()), h = n.map((c) => c.getParam());
    return {
      figs: o,
      dimensions: a,
      texts: h,
      figsAttr: s,
      dimensionsAttr: i,
      textsAttr: r
    };
  }
}, br = class {
  constructor(e, t) {
    this.backgroundColor = t, this.figs = e.group(), this.sheetsData = new ss(), this.parentObj = e;
  }
  setBackgroundColor(e) {
    this.backgroundColor = e;
  }
  setAttr(e) {
    this.figs.attr(e);
  }
  setScreenSize(e) {
    const t = this.parentObj, n = e?.originX || 0, s = e?.originY || 0, i = e?.direction || "x", r = e?.length || 500, o = t.width(), a = t.height();
    if (i == "x") {
      const h = r, l = h * a / o;
      t.viewbox(n, s, h, l);
    } else {
      const h = r, l = h * widhtS / a;
      t.viewbox(n, s, l, h);
    }
  }
  addSheet(e, t, n, s) {
    if (this.sheetsData.hasData(e))
      return this.sheetsData.getDataFromId(e);
    const r = this.backgroundColor, o = this.sheetsData, a = this.figs, h = new yr(a, e, t, n, s, r);
    return o.addData(e, h), h;
  }
  hasSheet(e) {
    return this.sheetsData.hasData(e);
  }
  getSheetFromId(e) {
    return this.sheetsData.getDataFromId(e);
  }
  getAllSheetIds() {
    return [...this.sheetsData.getKeys()];
  }
  getAllSheets() {
    return [...this.sheetsData.getValues()];
  }
  removeSheet(e) {
    const t = this.getSheetFromId(e), n = this.sheetsData;
    return t.remove(), n.removeData(e), this;
  }
  removeAllSheets() {
    this.getAllSheetIds().forEach((t) => this.removeSheet(t));
  }
  hideSheet(e) {
    this.getSheetFromId(e).hide();
  }
  showSheet(e) {
    this.getSheetFromId(e).show();
  }
  hideAllSheets() {
    this.getAllSheetIds().forEach((t) => this.hideSheet(t));
  }
  showAllSheets() {
    this.getAllSheetIds().forEach((t) => this.showSheet(t));
  }
  getSheetParam(e) {
    return this.getSheetFromId(e).getParam();
  }
  getAllSheetsParam() {
    return this.getAllSheets().map((n) => [n.getId(), n.getParam()]);
  }
}, _r = class {
  constructor(e, t = 500, n = 500) {
    lr(ar);
    const s = "default", i = ns().addTo(e).panZoom({ zoomFactor: 0.1 }), r = new br(i, s), o = new ur(i);
    this.elementDOM = e, this.backgroundColor = s, this.draw = i, this.screen = r, this.base = o, this.setScreenSize(t, n), this.setBackgroundColor(s), this.setEvent();
  }
  setScreenSize(e, t) {
    this.draw.width(e), this.draw.height(t), this.draw.attr("preserveAspectRatio", "xMinYMin slice"), this.draw.attr("style", "margin:0; padding:0;"), this.draw.viewbox(0, 0, e, t).flip("y"), this.draw.transform({ a: 1, b: 0, c: 0, d: -1, e: 0, f: 0 });
  }
  setBackgroundColor(e) {
    this.backgroundColor = e, this.screen.setBackgroundColor(e);
    const t = e === "default" ? "background:linear-gradient(to bottom, white, RoyalBlue)" : `background:${e}`;
    this.draw.attr("style", t), e === "black" || e === "#000000" || e === "#000" ? (this.screen.setAttr({ stroke: "green", fill: "white" }), this.base.setAttr({ stroke: "white", fill: "white" }), this.screen.getAllSheets().forEach((s) => {
      s.dimensions.fill("white").stroke("white"), s.texts.fill("white").stroke("white"), s.setBackgroundColor(e);
    })) : (this.screen.setAttr({ stroke: "blue", fill: "black" }), this.base.setAttr({ stroke: "black", fill: "black" }), this.screen.getAllSheets().forEach((s) => {
      s.dimensions.fill("black").stroke("black"), s.texts.fill("black").stroke("black"), s.setBackgroundColor(e);
    }));
  }
  resize(e, t) {
    this.draw.width(e), this.draw.height(t), this.draw.viewbox(0, 0, e, t);
  }
  setEvent() {
    const e = this.elementDOM, t = this.draw;
    t.mousemove(function(n) {
      const s = this.point(), i = {
        x: s.x + n.clientX / t.zoom(),
        y: s.y - n.clientY / t.zoom()
      }, r = new CustomEvent("sketch.mouse.move", { detail: i });
      e.dispatchEvent(r);
    });
  }
}, is = "2.9.3", vr = class {
  constructor(e, t) {
    const n = t?.width ?? 300, s = t?.height ?? 300;
    this.version = is, this.element = e, this.elementDOM, this.sketch = this.setup(e, n, s);
  }
  resize(e, t) {
    const n = this.elementDOM, s = this.sketch, i = n.querySelector(".minijscad-frame");
    i.style.width = String(e) + "px", i.style.height = String(t) + "px";
    const r = e, o = t - 40, a = r, h = o;
    return s.resize(a, h), this;
  }
  setup(e = "drawing", t = 300, n = 300, s = !1) {
    const i = Ar(e);
    this.elementDOM = i, Dr(i);
    const r = i.querySelector(".minijscad-footer > small:nth-child(2)"), o = i.querySelector(".minijscad-frame"), a = i.querySelector(".minijscad-main"), h = a.getBoundingClientRect().width || t, l = n - 40, c = h, u = l;
    o.style.width = String(t) + "px", o.style.height = String(n) + "px";
    const f = new _r(a, c, u);
    return a.addEventListener("sketch.mouse.move", (p) => {
      const d = p.detail;
      r.textContent = ` x: ${(d.x * 100 + 0.5 | 0) / 100}, y:${(d.y * 100 + 0.5 | 0) / 100}`;
    }), f;
  }
}, Ar = (e) => {
  const t = e instanceof HTMLElement ? e : document.getElementById(e), n = document.createElement("div"), s = document.createElement("div"), i = document.createElement("div"), r = document.createElement("div"), o = document.createElement("ul"), a = document.createElement("li"), h = document.createElement("li"), l = document.createElement("li"), c = document.createElement("div"), u = document.createElement("div"), f = document.createElement("small"), p = document.createElement("small");
  return n.className = "minijscad-frame", s.className = "minijscad-title", i.className = "minijscad-middle", r.className = "minijscad-sidebar", c.className = "minijscad-main", u.className = "minijscad-footer", s.textContent = "mini jscad", a.textContent = "M", h.textContent = "A", l.textContent = "S", f.textContent = "version" + String(is), p.textContent = "x: 0.00 ,y: 0.00", o.appendChild(a), o.appendChild(h), o.appendChild(l), r.appendChild(o), i.appendChild(r), i.appendChild(c), u.appendChild(f), u.appendChild(p), n.appendChild(s), n.appendChild(i), n.appendChild(u), t.appendChild(n), t;
}, Dr = (e, t, n) => {
  const s = document.createElement("style");
  s.id = "minijscad-style", s.type = "text/css", e.appendChild(s), s.sheet.insertRule(`
    .minijscad-main  line {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  circle {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  ellipse {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  rect {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  polygon {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  path {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  polyline {
      vector-effect: non-scaling-stroke; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-main  text {
      dominant-baseline: text-after-edge ; 
    }`, 0), s.sheet.insertRule(`
    .minijscad-frame {
      display:flex;
      flex-direction:column;
      outline: 2px solid #708090;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }`, 0), s.sheet.insertRule(`
    .minijscad-title {
      height: 20px;
      background: #d9dfe1;
      color:#3e5358;
      padding: 0;
      margin: 0;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-middle {
      display:flex;
      flex:1;
      padding: 0;
      margin: 0;
      font-size:0;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar {
      display: none;
      width: 100px;
      padding: 0;
      margin: 0;
      background: #F8F8F8;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul {
      display: grid;
      grid-template-rows: 50px 50px;
      grid-template-columns: 50px 50px;
      width:100%;
      padding: 0;
      margin: 0;
      list-style:none;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul > li{
      border:1px solid #3e5358;
      color:  #3e5358;
      border-radius: 6px 6px 6px 6px;
      margin: 1px;
      text-align:center;
      vertical-align:middle;
      line-height:50px;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul > li:hover{
      background: #F0FFF0;
      border: 1px solid #7FFFD4;
      border-radius: 6px 6px 6px 6px;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul > li:first-child{
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul > li:nth-child(2){
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-sidebar > ul > li:nth-child(3){
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-main {
      padding: 0;
      margin: 0;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-footer {
      height:20px;
      padding: 0;
      margin: 0;
      border-top: 1px solid #708090;
      background: #d9dfe1;
      box-sizing: border-box;
      display: flex;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-footer > small:first-child {
      flex: 0 0 65%; 
      text-align: center;
      border-right: 1px solid #708090;
    }`, s.sheet.cssRules.length), s.sheet.insertRule(`
    .minijscad-footer > small:nth-child(2) {
      flex: 1 0 auto; 
      padding: 0 0 0 10px;
      margin: 0;
    }`, s.sheet.cssRules.length);
}, Mr = "neco-minijscad", Tr = (e) => `
<style>
div  {
  height:100%;
  width:100%;
}

</style>
<div>
</div>
`, Sr = class extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const e = this.attachShadow({ mode: "open" });
    this.shadow = e;
    const t = Tr();
    this.shadow.setHTMLUnsafe(t);
    const n = e.querySelector("div"), s = n.getBoundingClientRect().width, i = n.getBoundingClientRect().height, r = { width: s, height: i }, o = new vr(n, r);
    o.sketch.setBackgroundColor("default"), this.miniJscad = o, new ResizeObserver((h) => {
      const c = h[0].target.getBoundingClientRect(), u = c.width, f = c.height;
      this.resize(u, f);
    }).observe(n);
  }
  get sketch() {
    return this.miniJscad.sketch;
  }
  get screen() {
    return this.miniJscad.sketch.screen;
  }
  get draw() {
    return this.miniJscad.sketch.draw;
  }
  resize(e, t) {
    this.miniJscad.resize(e, t);
  }
};
customElements.define(Mr, Sr);
export {
  Sr as CustomElem,
  Mr as TAG_NAME
};
