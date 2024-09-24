import * as o2 from "react";
import U, { forwardRef as Gv, createElement as cv, useEffect as K, useLayoutEffect as Hm, useRef as D, useState as l1, useMemo as Ge, Fragment as b1, isValidElement as jm, cloneElement as Pm, createContext as p1, useContext as n2, useReducer as Vm, createRef as ov, useCallback as l2 } from "react";
var nv = { exports: {} }, e2 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function Fm() {
  if (Pv) return e2;
  Pv = 1;
  var t = U, a = Symbol.for("react.element"), c = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(d, y, k) {
    var l, M = {}, m = null, f = null;
    k !== void 0 && (m = "" + k), y.key !== void 0 && (m = "" + y.key), y.ref !== void 0 && (f = y.ref);
    for (l in y) o.call(y, l) && !i.hasOwnProperty(l) && (M[l] = y[l]);
    if (d && d.defaultProps) for (l in y = d.defaultProps, y) M[l] === void 0 && (M[l] = y[l]);
    return { $$typeof: a, type: d, key: m, ref: f, props: M, _owner: r.current };
  }
  return e2.Fragment = c, e2.jsx = h, e2.jsxs = h, e2;
}
var t2 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vv;
function Bm() {
  return Vv || (Vv = 1, process.env.NODE_ENV !== "production" && function() {
    var t = U, a = Symbol.for("react.element"), c = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), L = Symbol.iterator, s = "@@iterator";
    function x(n) {
      if (n === null || typeof n != "object")
        return null;
      var p = L && n[L] || n[s];
      return typeof p == "function" ? p : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function u(n) {
      {
        for (var p = arguments.length, v = new Array(p > 1 ? p - 1 : 0), w = 1; w < p; w++)
          v[w - 1] = arguments[w];
        z("error", n, v);
      }
    }
    function z(n, p, v) {
      {
        var w = C.ReactDebugCurrentFrame, A = w.getStackAddendum();
        A !== "" && (p += "%s", v = v.concat([A]));
        var H = v.map(function(S) {
          return String(S);
        });
        H.unshift("Warning: " + p), Function.prototype.apply.call(console[n], console, H);
      }
    }
    var V = !1, j = !1, E = !1, Y = !1, S1 = !1, e1;
    e1 = Symbol.for("react.module.reference");
    function o1(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || S1 || n === r || n === k || n === l || Y || n === f || V || j || E || typeof n == "object" && n !== null && (n.$$typeof === m || n.$$typeof === M || n.$$typeof === h || n.$$typeof === d || n.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === e1 || n.getModuleId !== void 0));
    }
    function k1(n, p, v) {
      var w = n.displayName;
      if (w)
        return w;
      var A = p.displayName || p.name || "";
      return A !== "" ? v + "(" + A + ")" : v;
    }
    function q(n) {
      return n.displayName || "Context";
    }
    function T(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && u("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case c:
          return "Portal";
        case i:
          return "Profiler";
        case r:
          return "StrictMode";
        case k:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            var p = n;
            return q(p) + ".Consumer";
          case h:
            var v = n;
            return q(v._context) + ".Provider";
          case y:
            return k1(n, n.render, "ForwardRef");
          case M:
            var w = n.displayName || null;
            return w !== null ? w : T(n.type) || "Memo";
          case m: {
            var A = n, H = A._payload, S = A._init;
            try {
              return T(S(H));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, t1 = 0, s1, a1, x1, n1, r1, Z, u1;
    function r2() {
    }
    r2.__reactDisabledLog = !0;
    function i1() {
      {
        if (t1 === 0) {
          s1 = console.log, a1 = console.info, x1 = console.warn, n1 = console.error, r1 = console.group, Z = console.groupCollapsed, u1 = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: r2,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        t1++;
      }
    }
    function nm() {
      {
        if (t1--, t1 === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, n, {
              value: s1
            }),
            info: N({}, n, {
              value: a1
            }),
            warn: N({}, n, {
              value: x1
            }),
            error: N({}, n, {
              value: n1
            }),
            group: N({}, n, {
              value: r1
            }),
            groupCollapsed: N({}, n, {
              value: Z
            }),
            groupEnd: N({}, n, {
              value: u1
            })
          });
        }
        t1 < 0 && u("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var EM = C.ReactCurrentDispatcher, ZM;
    function i2(n, p, v) {
      {
        if (ZM === void 0)
          try {
            throw Error();
          } catch (A) {
            var w = A.stack.trim().match(/\n( *(at )?)/);
            ZM = w && w[1] || "";
          }
        return `
` + ZM + n;
      }
    }
    var GM = !1, d2;
    {
      var rm = typeof WeakMap == "function" ? WeakMap : Map;
      d2 = new rm();
    }
    function xv(n, p) {
      if (!n || GM)
        return "";
      {
        var v = d2.get(n);
        if (v !== void 0)
          return v;
      }
      var w;
      GM = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var H;
      H = EM.current, EM.current = null, i1();
      try {
        if (p) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (W) {
              w = W;
            }
            Reflect.construct(n, [], S);
          } else {
            try {
              S.call();
            } catch (W) {
              w = W;
            }
            n.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            w = W;
          }
          n();
        }
      } catch (W) {
        if (W && w && typeof W.stack == "string") {
          for (var I = W.stack.split(`
`), G = w.stack.split(`
`), B = I.length - 1, R = G.length - 1; B >= 1 && R >= 0 && I[B] !== G[R]; )
            R--;
          for (; B >= 1 && R >= 0; B--, R--)
            if (I[B] !== G[R]) {
              if (B !== 1 || R !== 1)
                do
                  if (B--, R--, R < 0 || I[B] !== G[R]) {
                    var J = `
` + I[B].replace(" at new ", " at ");
                    return n.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", n.displayName)), typeof n == "function" && d2.set(n, J), J;
                  }
                while (B >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        GM = !1, EM.current = H, nm(), Error.prepareStackTrace = A;
      }
      var _e = n ? n.displayName || n.name : "", q1 = _e ? i2(_e) : "";
      return typeof n == "function" && d2.set(n, q1), q1;
    }
    function im(n, p, v) {
      return xv(n, !1);
    }
    function dm(n) {
      var p = n.prototype;
      return !!(p && p.isReactComponent);
    }
    function h2(n, p, v) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return xv(n, dm(n));
      if (typeof n == "string")
        return i2(n);
      switch (n) {
        case k:
          return i2("Suspense");
        case l:
          return i2("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case y:
            return im(n.render);
          case M:
            return h2(n.type, p, v);
          case m: {
            var w = n, A = w._payload, H = w._init;
            try {
              return h2(H(A), p, v);
            } catch {
            }
          }
        }
      return "";
    }
    var Qe = Object.prototype.hasOwnProperty, gv = {}, fv = C.ReactDebugCurrentFrame;
    function y2(n) {
      if (n) {
        var p = n._owner, v = h2(n.type, n._source, p ? p.type : null);
        fv.setExtraStackFrame(v);
      } else
        fv.setExtraStackFrame(null);
    }
    function hm(n, p, v, w, A) {
      {
        var H = Function.call.bind(Qe);
        for (var S in n)
          if (H(n, S)) {
            var I = void 0;
            try {
              if (typeof n[S] != "function") {
                var G = Error((w || "React class") + ": " + v + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              I = n[S](p, S, w, v, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              I = B;
            }
            I && !(I instanceof Error) && (y2(A), u("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", v, S, typeof I), y2(null)), I instanceof Error && !(I.message in gv) && (gv[I.message] = !0, y2(A), u("Failed %s type: %s", v, I.message), y2(null));
          }
      }
    }
    var ym = Array.isArray;
    function NM(n) {
      return ym(n);
    }
    function lm(n) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, v = p && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return v;
      }
    }
    function pm(n) {
      try {
        return Lv(n), !1;
      } catch {
        return !0;
      }
    }
    function Lv(n) {
      return "" + n;
    }
    function wv(n) {
      if (pm(n))
        return u("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lm(n)), Lv(n);
    }
    var Ye = C.ReactCurrentOwner, km = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bv, Iv, WM;
    WM = {};
    function sm(n) {
      if (Qe.call(n, "ref")) {
        var p = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function um(n) {
      if (Qe.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function Mm(n, p) {
      if (typeof n.ref == "string" && Ye.current && p && Ye.current.stateNode !== p) {
        var v = T(Ye.current.type);
        WM[v] || (u('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(Ye.current.type), n.ref), WM[v] = !0);
      }
    }
    function vm(n, p) {
      {
        var v = function() {
          bv || (bv = !0, u("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: v,
          configurable: !0
        });
      }
    }
    function mm(n, p) {
      {
        var v = function() {
          Iv || (Iv = !0, u("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        v.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: v,
          configurable: !0
        });
      }
    }
    var xm = function(n, p, v, w, A, H, S) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: n,
        key: p,
        ref: v,
        props: S,
        // Record the component responsible for creating this element.
        _owner: H
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function gm(n, p, v, w, A) {
      {
        var H, S = {}, I = null, G = null;
        v !== void 0 && (wv(v), I = "" + v), um(p) && (wv(p.key), I = "" + p.key), sm(p) && (G = p.ref, Mm(p, A));
        for (H in p)
          Qe.call(p, H) && !km.hasOwnProperty(H) && (S[H] = p[H]);
        if (n && n.defaultProps) {
          var B = n.defaultProps;
          for (H in B)
            S[H] === void 0 && (S[H] = B[H]);
        }
        if (I || G) {
          var R = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          I && vm(S, R), G && mm(S, R);
        }
        return xm(n, I, G, A, w, Ye.current, S);
      }
    }
    var _M = C.ReactCurrentOwner, Cv = C.ReactDebugCurrentFrame;
    function We(n) {
      if (n) {
        var p = n._owner, v = h2(n.type, n._source, p ? p.type : null);
        Cv.setExtraStackFrame(v);
      } else
        Cv.setExtraStackFrame(null);
    }
    var XM;
    XM = !1;
    function $M(n) {
      return typeof n == "object" && n !== null && n.$$typeof === a;
    }
    function Sv() {
      {
        if (_M.current) {
          var n = T(_M.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function fm(n) {
      return "";
    }
    var qv = {};
    function Lm(n) {
      {
        var p = Sv();
        if (!p) {
          var v = typeof n == "string" ? n : n.displayName || n.name;
          v && (p = `

Check the top-level render call using <` + v + ">.");
        }
        return p;
      }
    }
    function Av(n, p) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var v = Lm(p);
        if (qv[v])
          return;
        qv[v] = !0;
        var w = "";
        n && n._owner && n._owner !== _M.current && (w = " It was passed a child from " + T(n._owner.type) + "."), We(n), u('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', v, w), We(null);
      }
    }
    function zv(n, p) {
      {
        if (typeof n != "object")
          return;
        if (NM(n))
          for (var v = 0; v < n.length; v++) {
            var w = n[v];
            $M(w) && Av(w, p);
          }
        else if ($M(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var A = x(n);
          if (typeof A == "function" && A !== n.entries)
            for (var H = A.call(n), S; !(S = H.next()).done; )
              $M(S.value) && Av(S.value, p);
        }
      }
    }
    function wm(n) {
      {
        var p = n.type;
        if (p == null || typeof p == "string")
          return;
        var v;
        if (typeof p == "function")
          v = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === M))
          v = p.propTypes;
        else
          return;
        if (v) {
          var w = T(p);
          hm(v, n.props, "prop", w, n);
        } else if (p.PropTypes !== void 0 && !XM) {
          XM = !0;
          var A = T(p);
          u("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && u("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function bm(n) {
      {
        for (var p = Object.keys(n.props), v = 0; v < p.length; v++) {
          var w = p[v];
          if (w !== "children" && w !== "key") {
            We(n), u("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), We(null);
            break;
          }
        }
        n.ref !== null && (We(n), u("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
      }
    }
    var Hv = {};
    function jv(n, p, v, w, A, H) {
      {
        var S = o1(n);
        if (!S) {
          var I = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = fm();
          G ? I += G : I += Sv();
          var B;
          n === null ? B = "null" : NM(n) ? B = "array" : n !== void 0 && n.$$typeof === a ? (B = "<" + (T(n.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : B = typeof n, u("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, I);
        }
        var R = gm(n, p, v, A, H);
        if (R == null)
          return R;
        if (S) {
          var J = p.children;
          if (J !== void 0)
            if (w)
              if (NM(J)) {
                for (var _e = 0; _e < J.length; _e++)
                  zv(J[_e], n);
                Object.freeze && Object.freeze(J);
              } else
                u("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zv(J, n);
        }
        if (Qe.call(p, "key")) {
          var q1 = T(n), W = Object.keys(p).filter(function(zm) {
            return zm !== "key";
          }), KM = W.length > 0 ? "{key: someKey, " + W.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Hv[q1 + KM]) {
            var Am = W.length > 0 ? "{" + W.join(": ..., ") + ": ...}" : "{}";
            u(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, KM, q1, Am, q1), Hv[q1 + KM] = !0;
          }
        }
        return n === o ? bm(R) : wm(R), R;
      }
    }
    function Im(n, p, v) {
      return jv(n, p, v, !0);
    }
    function Cm(n, p, v) {
      return jv(n, p, v, !1);
    }
    var Sm = Cm, qm = Im;
    t2.Fragment = o, t2.jsx = Sm, t2.jsxs = qm;
  }()), t2;
}
process.env.NODE_ENV === "production" ? nv.exports = Fm() : nv.exports = Bm();
var g = nv.exports;
const Hg = ({ label: t }) => /* @__PURE__ */ g.jsx("button", { children: t });
function Nv(t) {
  var a, c, o = "";
  if (typeof t == "string" || typeof t == "number") o += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var r = t.length;
    for (a = 0; a < r; a++) t[a] && (c = Nv(t[a])) && (o && (o += " "), o += c);
  } else for (c in t) t[c] && (o && (o += " "), o += c);
  return o;
}
function v1() {
  for (var t, a, c = 0, o = "", r = arguments.length; c < r; c++) (t = arguments[c]) && (a = Nv(t)) && (o && (o += " "), o += a);
  return o;
}
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Dm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rm = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), e = (t, a) => {
  const c = Gv(
    ({ color: o = "currentColor", size: r = 24, strokeWidth: i = 2, absoluteStrokeWidth: h, className: d = "", children: y, ...k }, l) => cv(
      "svg",
      {
        ref: l,
        ...Dm,
        width: r,
        height: r,
        stroke: o,
        strokeWidth: h ? Number(i) * 24 / Number(r) : i,
        className: ["lucide", `lucide-${Rm(t)}`, d].join(" "),
        ...k
      },
      [
        ...a.map(([M, m]) => cv(M, m)),
        ...Array.isArray(y) ? y : [y]
      ]
    )
  );
  return c.displayName = `${t}`, c;
};
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s2 = e("AArrowDown", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 7v9", key: "pknjwm" }],
  ["path", { d: "m14 12 4 4 4-4", key: "buelq4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u2 = e("AArrowUp", [
  ["path", { d: "M3.5 13h6", key: "p1my2r" }],
  ["path", { d: "m2 16 4.5-9 4.5 9", key: "ndf0b3" }],
  ["path", { d: "M18 16V7", key: "ty0viw" }],
  ["path", { d: "m14 11 4-4 4 4", key: "1pu57t" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M2 = e("ALargeSmall", [
  ["path", { d: "M21 14h-5", key: "1vh23k" }],
  ["path", { d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16", key: "1wh10o" }],
  ["path", { d: "M4.5 13h6", key: "dfilno" }],
  ["path", { d: "m3 16 4.5-9 4.5 9", key: "2dxa0e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v2 = e("Accessibility", [
  ["circle", { cx: "16", cy: "4", r: "1", key: "1grugj" }],
  ["path", { d: "m18 19 1-7-6 1", key: "r0i19z" }],
  ["path", { d: "m5 8 3-3 5.5 3-2.36 3.5", key: "9ptxx2" }],
  ["path", { d: "M4.24 14.5a5 5 0 0 0 6.88 6", key: "10kmtu" }],
  ["path", { d: "M13.76 17.5a5 5 0 0 0-6.88-6", key: "2qq6rc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m2 = e("ActivitySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M17 12h-2l-2 5-2-10-2 5H7", key: "15hlnc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x2 = e("Activity", [
  ["path", { d: "M22 12h-4l-3 9L9 3l-3 9H2", key: "d5dnw9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g2 = e("AirVent", [
  [
    "path",
    {
      d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "larmp2"
    }
  ],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12", key: "1bo8pg" }],
  ["path", { d: "M6.6 15.6A2 2 0 1 0 10 17v-5", key: "t9h90c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f2 = e("Airplay", [
  [
    "path",
    {
      d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",
      key: "ns4c3b"
    }
  ],
  ["polygon", { points: "12 15 17 21 7 21 12 15", key: "1sy95i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = e("AlarmClockCheck", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = e("AlarmClockMinus", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L2 = e("AlarmClockOff", [
  ["path", { d: "M6.87 6.87a8 8 0 1 0 11.26 11.26", key: "3on8tj" }],
  ["path", { d: "M19.9 14.25a8 8 0 0 0-9.15-9.15", key: "15ghsc" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.26 18.67 4 21", key: "yzmioq" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4 4 2 6", key: "1ycko6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = e("AlarmClockPlus", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w2 = e("AlarmClock", [
  ["circle", { cx: "12", cy: "13", r: "8", key: "3y4lt7" }],
  ["path", { d: "M12 9v4l2 2", key: "1c63tq" }],
  ["path", { d: "M5 3 2 6", key: "18tl5t" }],
  ["path", { d: "m22 6-3-3", key: "1opdir" }],
  ["path", { d: "M6.38 18.7 4 21", key: "17xu3x" }],
  ["path", { d: "M17.64 18.67 20 21", key: "kv2oe2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b2 = e("AlarmSmoke", [
  ["path", { d: "M4 8a2 2 0 0 1-2-2V3h20v3a2 2 0 0 1-2 2Z", key: "2c4fvq" }],
  ["path", { d: "m19 8-.8 3c-.1.6-.6 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L5 8", key: "1vrndv" }],
  ["path", { d: "M16 21c0-2.5 2-2.5 2-5", key: "1o3eny" }],
  ["path", { d: "M11 21c0-2.5 2-2.5 2-5", key: "1sicvv" }],
  ["path", { d: "M6 21c0-2.5 2-2.5 2-5", key: "i3w1gp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I2 = e("Album", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["polyline", { points: "11 3 11 11 14 8 17 11 17 3", key: "1wcwz3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C2 = e("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S2 = e("AlertOctagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q2 = e("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A2 = e("AlignCenterHorizontal", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4", key: "11f1s0" }],
  ["path", { d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4", key: "t14dx9" }],
  ["path", { d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1", key: "1w07xs" }],
  ["path", { d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1", key: "1apec2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z2 = e("AlignCenterVertical", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4", key: "14d6g8" }],
  ["path", { d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4", key: "1e2lrw" }],
  ["path", { d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1", key: "1fkdwx" }],
  ["path", { d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1", key: "1euafb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H2 = e("AlignCenter", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "17", x2: "7", y1: "12", y2: "12", key: "rsh8ii" }],
  ["line", { x1: "19", x2: "5", y1: "18", y2: "18", key: "1t0tuv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j2 = e("AlignEndHorizontal", [
  ["rect", { width: "6", height: "16", x: "4", y: "2", rx: "2", key: "z5wdxg" }],
  ["rect", { width: "6", height: "9", x: "14", y: "9", rx: "2", key: "um7a8w" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P2 = e("AlignEndVertical", [
  ["rect", { width: "16", height: "6", x: "2", y: "4", rx: "2", key: "10wcwx" }],
  ["rect", { width: "9", height: "6", x: "9", y: "14", rx: "2", key: "4p5bwg" }],
  ["path", { d: "M22 22V2", key: "12ipfv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V2 = e("AlignHorizontalDistributeCenter", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M17 22v-5", key: "4b6g73" }],
  ["path", { d: "M17 7V2", key: "hnrr36" }],
  ["path", { d: "M7 22v-3", key: "1r4jpn" }],
  ["path", { d: "M7 5V2", key: "liy1u9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F2 = e("AlignHorizontalDistributeEnd", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M10 2v20", key: "uyc634" }],
  ["path", { d: "M20 2v20", key: "1tx262" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B2 = e("AlignHorizontalDistributeStart", [
  ["rect", { width: "6", height: "14", x: "4", y: "5", rx: "2", key: "1wwnby" }],
  ["rect", { width: "6", height: "10", x: "14", y: "7", rx: "2", key: "1fe6j6" }],
  ["path", { d: "M4 2v20", key: "gtpd5x" }],
  ["path", { d: "M14 2v20", key: "tg6bpw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D2 = e("AlignHorizontalJustifyCenter", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R2 = e("AlignHorizontalJustifyEnd", [
  ["rect", { width: "6", height: "14", x: "2", y: "5", rx: "2", key: "dy24zr" }],
  ["rect", { width: "6", height: "10", x: "12", y: "7", rx: "2", key: "1ht384" }],
  ["path", { d: "M22 2v20", key: "40qfg1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T2 = e("AlignHorizontalJustifyStart", [
  ["rect", { width: "6", height: "14", x: "6", y: "5", rx: "2", key: "hsirpf" }],
  ["rect", { width: "6", height: "10", x: "16", y: "7", rx: "2", key: "13zkjt" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O2 = e("AlignHorizontalSpaceAround", [
  ["rect", { width: "6", height: "10", x: "9", y: "7", rx: "2", key: "yn7j0q" }],
  ["path", { d: "M4 22V2", key: "tsjzd3" }],
  ["path", { d: "M20 22V2", key: "1bnhr8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U2 = e("AlignHorizontalSpaceBetween", [
  ["rect", { width: "6", height: "14", x: "3", y: "5", rx: "2", key: "j77dae" }],
  ["rect", { width: "6", height: "10", x: "15", y: "7", rx: "2", key: "bq30hj" }],
  ["path", { d: "M3 2v20", key: "1d2pfg" }],
  ["path", { d: "M21 2v20", key: "p059bm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E2 = e("AlignJustify", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["line", { x1: "3", x2: "21", y1: "18", y2: "18", key: "kwyyxn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z2 = e("AlignLeft", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
  ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G2 = e("AlignRight", [
  ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ["line", { x1: "21", x2: "7", y1: "18", y2: "18", key: "1g9eri" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N2 = e("AlignStartHorizontal", [
  ["rect", { width: "6", height: "16", x: "4", y: "6", rx: "2", key: "1n4dg1" }],
  ["rect", { width: "6", height: "9", x: "14", y: "6", rx: "2", key: "17khns" }],
  ["path", { d: "M22 2H2", key: "fhrpnj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W2 = e("AlignStartVertical", [
  ["rect", { width: "9", height: "6", x: "6", y: "14", rx: "2", key: "lpm2y7" }],
  ["rect", { width: "16", height: "6", x: "6", y: "4", rx: "2", key: "rdj6ps" }],
  ["path", { d: "M2 2v20", key: "1ivd8o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _2 = e("AlignVerticalDistributeCenter", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M22 7h-5", key: "o2endc" }],
  ["path", { d: "M7 7H1", key: "105l6j" }],
  ["path", { d: "M22 17h-3", key: "1lwga1" }],
  ["path", { d: "M5 17H2", key: "1gx9xc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X2 = e("AlignVerticalDistributeEnd", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $2 = e("AlignVerticalDistributeStart", [
  ["rect", { width: "14", height: "6", x: "5", y: "14", rx: "2", key: "jmoj9s" }],
  ["rect", { width: "10", height: "6", x: "7", y: "4", rx: "2", key: "aza5on" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M2 4h20", key: "mda7wb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K2 = e("AlignVerticalJustifyCenter", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J2 = e("AlignVerticalJustifyEnd", [
  ["rect", { width: "14", height: "6", x: "5", y: "12", rx: "2", key: "4l4tp2" }],
  ["rect", { width: "10", height: "6", x: "7", y: "2", rx: "2", key: "ypihtt" }],
  ["path", { d: "M2 22h20", key: "272qi7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q2 = e("AlignVerticalJustifyStart", [
  ["rect", { width: "14", height: "6", x: "5", y: "16", rx: "2", key: "1i8z2d" }],
  ["rect", { width: "10", height: "6", x: "7", y: "6", rx: "2", key: "13squh" }],
  ["path", { d: "M2 2h20", key: "1ennik" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y2 = e("AlignVerticalSpaceAround", [
  ["rect", { width: "10", height: "6", x: "7", y: "9", rx: "2", key: "b1zbii" }],
  ["path", { d: "M22 20H2", key: "1p1f7z" }],
  ["path", { d: "M22 4H2", key: "1b7qnq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = e("AlignVerticalSpaceBetween", [
  ["rect", { width: "14", height: "6", x: "5", y: "15", rx: "2", key: "1w91an" }],
  ["rect", { width: "10", height: "6", x: "7", y: "3", rx: "2", key: "17wqzy" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M2 3h20", key: "91anmk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = e("Ampersand", [
  [
    "path",
    {
      d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",
      key: "1o9ehi"
    }
  ],
  ["path", { d: "M16 12h3", key: "4uvgyw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = e("Ampersands", [
  [
    "path",
    {
      d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "12lh1k"
    }
  ],
  [
    "path",
    {
      d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",
      key: "173c68"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = e("Anchor", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "8", key: "abakz7" }],
  ["path", { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "1hv3nh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = e("Angry", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["path", { d: "M7.5 8 10 9", key: "olxxln" }],
  ["path", { d: "m14 9 2.5-1", key: "1j6cij" }],
  ["path", { d: "M9 10h0", key: "1vxvly" }],
  ["path", { d: "M15 10h0", key: "1j6oav" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = e("Annoyed", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M14 9h2", key: "116p9w" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = e("Antenna", [
  ["path", { d: "M2 12 7 2", key: "117k30" }],
  ["path", { d: "m7 12 5-10", key: "1tvx22" }],
  ["path", { d: "m12 12 5-10", key: "ev1o1a" }],
  ["path", { d: "m17 12 5-10", key: "1e4ti3" }],
  ["path", { d: "M4.5 7h15", key: "vlsxkz" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = e("Anvil", [
  ["path", { d: "M7 10c-2.8 0-5-2.2-5-5h5", key: "1d6adc" }],
  ["path", { d: "M7 4v8h7a8 8 0 0 0 8-8Z", key: "uu98hv" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H5Z", key: "10a9tj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = e("Aperture", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "14.31", x2: "20.05", y1: "8", y2: "17.94", key: "jdes2e" }],
  ["line", { x1: "9.69", x2: "21.17", y1: "8", y2: "8", key: "1gubuk" }],
  ["line", { x1: "7.38", x2: "13.12", y1: "12", y2: "2.06", key: "1m4d1n" }],
  ["line", { x1: "9.69", x2: "3.95", y1: "16", y2: "6.06", key: "1wye2p" }],
  ["line", { x1: "14.31", x2: "2.83", y1: "16", y2: "16", key: "1l9f4x" }],
  ["line", { x1: "16.62", x2: "10.88", y1: "12", y2: "21.94", key: "1jjvfs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = e("AppWindow", [
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ["path", { d: "M10 4v4", key: "pp8u80" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["path", { d: "M6 4v4", key: "1svtjw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = e("Apple", [
  [
    "path",
    {
      d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",
      key: "3s7exb"
    }
  ],
  ["path", { d: "M10 2c1 .5 2 2 2 5", key: "fcco2y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = e("ArchiveRestore", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h2", key: "tvwodi" }],
  ["path", { d: "M20 8v11a2 2 0 0 1-2 2h-2", key: "1gkqxj" }],
  ["path", { d: "m9 15 3-3 3 3", key: "1pd0qc" }],
  ["path", { d: "M12 12v9", key: "192myk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = e("ArchiveX", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "m9.5 17 5-5", key: "nakeu6" }],
  ["path", { d: "m9.5 12 5 5", key: "1hccrj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = e("Archive", [
  ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
  ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
  ["path", { d: "M10 12h4", key: "a56b0p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = e("AreaChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 12v5h12V8l-5 5-4-4Z", key: "zxz28u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = e("Armchair", [
  ["path", { d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3", key: "irtipd" }],
  [
    "path",
    {
      d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",
      key: "1e01m0"
    }
  ],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = e("ArrowBigDownDash", [
  ["path", { d: "M15 5H9", key: "1tp3ed" }],
  ["path", { d: "M15 9v3h4l-7 7-7-7h4V9h6z", key: "oscb9h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = e("ArrowBigDown", [
  ["path", { d: "M15 6v6h4l-7 7-7-7h4V6h6z", key: "1thax2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = e("ArrowBigLeftDash", [
  ["path", { d: "M19 15V9", key: "1hci5f" }],
  ["path", { d: "M15 15h-3v4l-7-7 7-7v4h3v6z", key: "16tjna" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = e("ArrowBigLeft", [
  ["path", { d: "M18 15h-6v4l-7-7 7-7v4h6v6z", key: "lbrdak" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = e("ArrowBigRightDash", [
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["path", { d: "M9 9h3V5l7 7-7 7v-4H9V9z", key: "1sg2xn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ft = e("ArrowBigRight", [
  ["path", { d: "M6 9h6V5l7 7-7 7v-4H6V9z", key: "7fvt9c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = e("ArrowBigUpDash", [
  ["path", { d: "M9 19h6", key: "456am0" }],
  ["path", { d: "M9 15v-3H5l7-7 7 7h-4v3H9z", key: "1r2uve" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = e("ArrowBigUp", [
  ["path", { d: "M9 18v-6H5l7-7 7 7h-4v6H9z", key: "1x06kx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bt = e("ArrowDown01", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = e("ArrowDown10", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P1 = e("ArrowDownAZ", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = e("ArrowDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = e("ArrowDownFromLine", [
  ["path", { d: "M19 3H5", key: "1236rx" }],
  ["path", { d: "M12 21V7", key: "gj6g52" }],
  ["path", { d: "m6 15 6 6 6-6", key: "h15q88" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qt = e("ArrowDownLeftFromCircle", [
  ["path", { d: "M2 12a10 10 0 1 1 10 10", key: "1yn6ov" }],
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "M8 22H2v-6", key: "sulq54" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = e("ArrowDownLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 8-8 8", key: "166keh" }],
  ["path", { d: "M16 16H8V8", key: "1w2ppm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zt = e("ArrowDownLeft", [
  ["path", { d: "M17 7 7 17", key: "15tmo1" }],
  ["path", { d: "M17 17H7V7", key: "1org7z" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ht = e("ArrowDownNarrowWide", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h4", key: "6d7r33" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h10", key: "1438ji" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = e("ArrowDownRightFromCircle", [
  ["path", { d: "M12 22a10 10 0 1 1 10-10", key: "130bv5" }],
  ["path", { d: "M22 22 12 12", key: "131aw7" }],
  ["path", { d: "M22 16v6h-6", key: "1gvm70" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = e("ArrowDownRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "M16 8v8H8", key: "1lbpgo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = e("ArrowDownRight", [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ft = e("ArrowDownSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bt = e("ArrowDownToDot", [
  ["path", { d: "M12 2v14", key: "jyx4ut" }],
  ["path", { d: "m19 9-7 7-7-7", key: "1oe3oy" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = e("ArrowDownToLine", [
  ["path", { d: "M12 17V3", key: "1cwfxf" }],
  ["path", { d: "m6 11 6 6 6-6", key: "12ii2o" }],
  ["path", { d: "M19 21H5", key: "150jfl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = e("ArrowDownUp", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }],
  ["path", { d: "M17 4v16", key: "7dpous" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = e("ArrowDownWideNarrow", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 20V4", key: "1yoxec" }],
  ["path", { d: "M11 4h10", key: "1w87gc" }],
  ["path", { d: "M11 8h7", key: "djye34" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F1 = e("ArrowDownZA", [
  ["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = e("ArrowDown", [
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = e("ArrowLeftCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ut = e("ArrowLeftFromLine", [
  ["path", { d: "m9 6-6 6 6 6", key: "7v63n9" }],
  ["path", { d: "M3 12h14", key: "13k4hi" }],
  ["path", { d: "M21 19V5", key: "b4bplr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = e("ArrowLeftRight", [
  ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
  ["path", { d: "M4 7h16", key: "6tx8e3" }],
  ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
  ["path", { d: "M20 17H4", key: "h6l3hr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zt = e("ArrowLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m12 8-4 4 4 4", key: "15vm53" }],
  ["path", { d: "M16 12H8", key: "1fr5h0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gt = e("ArrowLeftToLine", [
  ["path", { d: "M3 19V5", key: "rwsyhb" }],
  ["path", { d: "m13 6-6 6 6 6", key: "1yhaz7" }],
  ["path", { d: "M7 12h14", key: "uoisry" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = e("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wt = e("ArrowRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _t = e("ArrowRightFromLine", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M21 12H7", key: "13ipq5" }],
  ["path", { d: "m15 18 6-6-6-6", key: "6tx3qv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = e("ArrowRightLeft", [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = e("ArrowRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m12 16 4-4-4-4", key: "1i9zcv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kt = e("ArrowRightToLine", [
  ["path", { d: "M17 12H3", key: "8awo09" }],
  ["path", { d: "m11 18 6-6-6-6", key: "8c2y43" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jt = e("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qt = e("ArrowUp01", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["rect", { x: "15", y: "4", width: "4", height: "6", ry: "2", key: "1bwicg" }],
  ["path", { d: "M17 20v-6h-2", key: "1qp1so" }],
  ["path", { d: "M15 20h4", key: "1j968p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = e("ArrowUp10", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M17 10V4h-2", key: "zcsr5x" }],
  ["path", { d: "M15 10h4", key: "id2lce" }],
  ["rect", { x: "15", y: "14", width: "4", height: "6", ry: "2", key: "33xykx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B1 = e("ArrowUpAZ", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M20 8h-5", key: "1vsyxs" }],
  ["path", { d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10", key: "ag13bf" }],
  ["path", { d: "M15 14h5l-5 6h5", key: "ur5jdg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ea = e("ArrowUpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ta = e("ArrowUpDown", [
  ["path", { d: "m21 16-4 4-4-4", key: "f6ql7i" }],
  ["path", { d: "M17 20V4", key: "1ejh1v" }],
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aa = e("ArrowUpFromDot", [
  ["path", { d: "m5 9 7-7 7 7", key: "1hw5ic" }],
  ["path", { d: "M12 16V2", key: "ywoabb" }],
  ["circle", { cx: "12", cy: "21", r: "1", key: "o0uj5v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ca = e("ArrowUpFromLine", [
  ["path", { d: "m18 9-6-6-6 6", key: "kcunyi" }],
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oa = e("ArrowUpLeftFromCircle", [
  ["path", { d: "M2 8V2h6", key: "hiwtdz" }],
  ["path", { d: "m2 2 10 10", key: "1oh8rs" }],
  ["path", { d: "M12 2A10 10 0 1 1 2 12", key: "rrk4fa" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const na = e("ArrowUpLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8h8", key: "19xb1h" }],
  ["path", { d: "M16 16 8 8", key: "1qdy8n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ra = e("ArrowUpLeft", [
  ["path", { d: "M7 17V7h10", key: "11bw93" }],
  ["path", { d: "M17 17 7 7", key: "2786uv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = e("ArrowUpNarrowWide", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h4", key: "q8tih4" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h10", key: "jvxblo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ia = e("ArrowUpRightFromCircle", [
  ["path", { d: "M22 12A10 10 0 1 1 12 2", key: "1fm58d" }],
  ["path", { d: "M22 2 12 12", key: "yg2myt" }],
  ["path", { d: "M16 2h6v6", key: "zan5cs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const da = e("ArrowUpRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 8h8v8", key: "b65dnt" }],
  ["path", { d: "m8 16 8-8", key: "13b9ih" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ha = e("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ya = e("ArrowUpSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 12-4-4-4 4", key: "177agl" }],
  ["path", { d: "M12 16V8", key: "1sbj14" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const la = e("ArrowUpToLine", [
  ["path", { d: "M5 3h14", key: "7usisc" }],
  ["path", { d: "m18 13-6-6-6 6", key: "1kf1n9" }],
  ["path", { d: "M12 7v14", key: "1akyts" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pa = e("ArrowUpWideNarrow", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M11 12h10", key: "1438ji" }],
  ["path", { d: "M11 16h7", key: "uosisv" }],
  ["path", { d: "M11 20h4", key: "1krc32" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = e("ArrowUpZA", [
  ["path", { d: "m3 8 4-4 4 4", key: "11wl7u" }],
  ["path", { d: "M7 4v16", key: "1glfcx" }],
  ["path", { d: "M15 4h5l-5 6h5", key: "8asdl1" }],
  ["path", { d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20", key: "r6l5cz" }],
  ["path", { d: "M20 18h-5", key: "18j1r2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ka = e("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sa = e("ArrowsUpFromLine", [
  ["path", { d: "m4 6 3-3 3 3", key: "9aidw8" }],
  ["path", { d: "M7 17V3", key: "19qxw1" }],
  ["path", { d: "m14 6 3-3 3 3", key: "6iy689" }],
  ["path", { d: "M17 17V3", key: "o0fmgi" }],
  ["path", { d: "M4 21h16", key: "1h09gz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = e("AsteriskSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 8v8", key: "napkw2" }],
  ["path", { d: "m8.5 14 7-4", key: "12hpby" }],
  ["path", { d: "m8.5 10 7 4", key: "wwy2dy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ua = e("Asterisk", [
  ["path", { d: "M12 6v12", key: "1vza4d" }],
  ["path", { d: "M17.196 9 6.804 15", key: "1ah31z" }],
  ["path", { d: "m6.804 9 10.392 6", key: "1b6pxd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ma = e("AtSign", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8", key: "7n84p3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const va = e("Atom", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  [
    "path",
    {
      d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",
      key: "1l2ple"
    }
  ],
  [
    "path",
    {
      d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",
      key: "1wam0m"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ma = e("AudioLines", [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xa = e("AudioWaveform", [
  [
    "path",
    {
      d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",
      key: "57tc96"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ga = e("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fa = e("Axe", [
  ["path", { d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9", key: "csbz4o" }],
  ["path", { d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z", key: "113wfo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O1 = e("Axis3d", [
  ["path", { d: "M4 4v16h16", key: "1s015l" }],
  ["path", { d: "m4 20 7-7", key: "17qe9y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const La = e("Baby", [
  ["path", { d: "M9 12h.01", key: "157uk2" }],
  ["path", { d: "M15 12h.01", key: "1k8ypt" }],
  ["path", { d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5", key: "1u7htd" }],
  [
    "path",
    {
      d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
      key: "5yv0yz"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wa = e("Backpack", [
  [
    "path",
    { d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z", key: "wvr1b5" }
  ],
  ["path", { d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2", key: "donm21" }],
  ["path", { d: "M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5", key: "xk3gvk" }],
  ["path", { d: "M8 10h8", key: "c7uz4u" }],
  ["path", { d: "M8 18h8", key: "1no2b1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ba = e("BadgeAlert", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ia = e("BadgeCent", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M15.4 10a4 4 0 1 0 0 4", key: "2eqtx8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U1 = e("BadgeCheck", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ca = e("BadgeDollarSign", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sa = e("BadgeEuro", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M7 12h5", key: "gblrwe" }],
  ["path", { d: "M15 9.4a4 4 0 1 0 0 5.2", key: "1makmb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qa = e("BadgeHelp", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["line", { x1: "12", x2: "12.01", y1: "17", y2: "17", key: "io3f8k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aa = e("BadgeIndianRupee", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 8h8", key: "1bis0t" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m13 17-5-1h1a4 4 0 0 0 0-8", key: "nu2bwa" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const za = e("BadgeInfo", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "12", key: "1y1yb1" }],
  ["line", { x1: "12", x2: "12.01", y1: "8", y2: "8", key: "110wyk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ha = e("BadgeJapaneseYen", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 8 3 3v7", key: "17yadx" }],
  ["path", { d: "m12 11 3-3", key: "p4cfq1" }],
  ["path", { d: "M9 12h6", key: "1c52cq" }],
  ["path", { d: "M9 16h6", key: "8wimt3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ja = e("BadgeMinus", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pa = e("BadgePercent", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Va = e("BadgePlus", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "16", key: "10p56q" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fa = e("BadgePoundSterling", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M8 12h4", key: "qz6y1c" }],
  ["path", { d: "M10 16V9.5a2.5 2.5 0 0 1 5 0", key: "3mlbjk" }],
  ["path", { d: "M8 16h7", key: "sbedsn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ba = e("BadgeRussianRuble", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M9 16h5", key: "1syiyw" }],
  ["path", { d: "M9 12h5a2 2 0 1 0 0-4h-3v9", key: "1ge9c1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Da = e("BadgeSwissFranc", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "M11 17V8h4", key: "1bfq6y" }],
  ["path", { d: "M11 12h3", key: "2eqnfz" }],
  ["path", { d: "M9 16h4", key: "1skf3a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ra = e("BadgeX", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ta = e("Badge", [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oa = e("BaggageClaim", [
  ["path", { d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2", key: "4irg2o" }],
  ["path", { d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10", key: "14fcyx" }],
  ["rect", { width: "13", height: "8", x: "8", y: "6", rx: "1", key: "o6oiis" }],
  ["circle", { cx: "18", cy: "20", r: "2", key: "t9985n" }],
  ["circle", { cx: "9", cy: "20", r: "2", key: "e5v82j" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ua = e("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ea = e("Banana", [
  ["path", { d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5", key: "1cscit" }],
  [
    "path",
    {
      d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",
      key: "1y1nbv"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = e("Banknote", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ga = e("BarChart2", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "10", key: "1xfpm4" }],
  ["line", { x1: "12", x2: "12", y1: "20", y2: "4", key: "be30l9" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "14", key: "1r4le6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Na = e("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wa = e("BarChart4", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M13 17V9", key: "1fwyjl" }],
  ["path", { d: "M18 17V5", key: "sfb6ij" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _a = e("BarChartBig", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "4", height: "7", x: "7", y: "10", rx: "1", key: "14u6mf" }],
  ["rect", { width: "4", height: "12", x: "15", y: "5", rx: "1", key: "b3pek6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xa = e("BarChartHorizontalBig", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["rect", { width: "12", height: "4", x: "7", y: "5", rx: "1", key: "936jl1" }],
  ["rect", { width: "7", height: "4", x: "7", y: "13", rx: "1", key: "jqfkpy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $a = e("BarChartHorizontal", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M7 16h8", key: "srdodz" }],
  ["path", { d: "M7 11h12", key: "127s9w" }],
  ["path", { d: "M7 6h3", key: "w9rmul" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = e("BarChart", [
  ["line", { x1: "12", x2: "12", y1: "20", y2: "10", key: "1vz5eb" }],
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["line", { x1: "6", x2: "6", y1: "20", y2: "16", key: "hq0ia6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = e("Barcode", [
  ["path", { d: "M3 5v14", key: "1nt18q" }],
  ["path", { d: "M8 5v14", key: "1ybrkv" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
  ["path", { d: "M17 5v14", key: "ycjyhj" }],
  ["path", { d: "M21 5v14", key: "nzette" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qa = e("Baseline", [
  ["path", { d: "M4 20h16", key: "14thso" }],
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = e("Bath", [
  [
    "path",
    {
      d: "M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
      key: "1r8yf5"
    }
  ],
  ["line", { x1: "10", x2: "8", y1: "5", y2: "7", key: "h5g8z4" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "7", x2: "7", y1: "19", y2: "21", key: "16jp00" }],
  ["line", { x1: "17", x2: "17", y1: "19", y2: "21", key: "1pxrnk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e0 = e("BatteryCharging", [
  ["path", { d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2", key: "1sdynx" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1", key: "1gkd3k" }],
  ["path", { d: "m11 7-3 5h4l-3 5", key: "b4a64w" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = e("BatteryFull", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "13", key: "c6fn6x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = e("BatteryLow", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = e("BatteryMedium", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "6", x2: "6", y1: "11", y2: "13", key: "1wd6dw" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "13", key: "haxvl5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = e("BatteryWarning", [
  ["path", { d: "M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2", key: "1if82c" }],
  ["path", { d: "M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2", key: "2pdlyl" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }],
  ["line", { x1: "10", x2: "10", y1: "7", y2: "13", key: "1uzyus" }],
  ["line", { x1: "10", x2: "10", y1: "17", y2: "17.01", key: "1y8k4g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n0 = e("Battery", [
  ["rect", { width: "16", height: "10", x: "2", y: "7", rx: "2", ry: "2", key: "1w10f2" }],
  ["line", { x1: "22", x2: "22", y1: "11", y2: "13", key: "4dh1rd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = e("Beaker", [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i0 = e("BeanOff", [
  [
    "path",
    {
      d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",
      key: "bq3udt"
    }
  ],
  ["path", { d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66", key: "17ccse" }],
  [
    "path",
    {
      d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",
      key: "18zqgq"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = e("Bean", [
  [
    "path",
    {
      d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",
      key: "1tvzk7"
    }
  ],
  ["path", { d: "M5.341 10.62a4 4 0 1 0 5.279-5.28", key: "2cyri2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = e("BedDouble", [
  ["path", { d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8", key: "1k78r4" }],
  ["path", { d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "fb3tl2" }],
  ["path", { d: "M12 4v6", key: "1dcgq2" }],
  ["path", { d: "M2 18h20", key: "ajqnye" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = e("BedSingle", [
  ["path", { d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8", key: "1wm6mi" }],
  ["path", { d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4", key: "4k93s5" }],
  ["path", { d: "M3 18h18", key: "1h113x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l0 = e("Bed", [
  ["path", { d: "M2 4v16", key: "vw9hq8" }],
  ["path", { d: "M2 8h18a2 2 0 0 1 2 2v10", key: "1dgv2r" }],
  ["path", { d: "M2 17h20", key: "18nfp3" }],
  ["path", { d: "M6 8v9", key: "1yriud" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p0 = e("Beef", [
  ["circle", { cx: "12.5", cy: "8.5", r: "2.5", key: "9738u8" }],
  [
    "path",
    {
      d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",
      key: "o0f6za"
    }
  ],
  [
    "path",
    {
      d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",
      key: "k7p6i0"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k0 = e("Beer", [
  ["path", { d: "M17 11h1a3 3 0 0 1 0 6h-1", key: "1yp76v" }],
  ["path", { d: "M9 12v6", key: "1u1cab" }],
  ["path", { d: "M13 12v6", key: "1sugkk" }],
  [
    "path",
    {
      d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",
      key: "1510fo"
    }
  ],
  ["path", { d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "19jb7n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s0 = e("BellDot", [
  [
    "path",
    {
      d: "M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",
      key: "xcehk"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["circle", { cx: "18", cy: "8", r: "3", key: "1g0gzu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = e("BellElectric", [
  ["path", { d: "M18.8 4A6.3 8.7 0 0 1 20 9", key: "xve1fh" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["circle", { cx: "9", cy: "9", r: "7", key: "p2h5vp" }],
  ["rect", { width: "10", height: "6", x: "4", y: "16", rx: "2", key: "17f3te" }],
  ["path", { d: "M14 19c3 0 4.6-1.6 4.6-1.6", key: "n7odp6" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M0 = e("BellMinus", [
  [
    "path",
    { d: "M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2", key: "eck70s" }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v0 = e("BellOff", [
  ["path", { d: "M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5", key: "o7mx20" }],
  ["path", { d: "M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7", key: "16f1lm" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = e("BellPlus", [
  [
    "path",
    {
      d: "M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",
      key: "guizqy"
    }
  ],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M15 8h6", key: "8ybuxh" }],
  ["path", { d: "M18 5v6", key: "g5ayrv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x0 = e("BellRing", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
  ["path", { d: "M4 2C2.8 3.7 2 5.7 2 8", key: "tap9e0" }],
  ["path", { d: "M22 8c0-2.3-.8-4.3-2-6", key: "5bb3ad" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g0 = e("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = e("BetweenHorizontalEnd", [
  ["rect", { width: "13", height: "7", x: "3", y: "3", rx: "1", key: "11xb64" }],
  ["path", { d: "m22 15-3-3 3-3", key: "26chmm" }],
  ["rect", { width: "13", height: "7", x: "3", y: "14", rx: "1", key: "k6ky7n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z1 = e("BetweenHorizontalStart", [
  ["rect", { width: "13", height: "7", x: "8", y: "3", rx: "1", key: "pkso9a" }],
  ["path", { d: "m2 9 3 3-3 3", key: "1agib5" }],
  ["rect", { width: "13", height: "7", x: "8", y: "14", rx: "1", key: "1q5fc1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = e("BetweenVerticalEnd", [
  ["rect", { width: "7", height: "13", x: "3", y: "3", rx: "1", key: "1fdu0f" }],
  ["path", { d: "m9 22 3-3 3 3", key: "17z65a" }],
  ["rect", { width: "7", height: "13", x: "14", y: "3", rx: "1", key: "1squn4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L0 = e("BetweenVerticalStart", [
  ["rect", { width: "7", height: "13", x: "3", y: "8", rx: "1", key: "1fjrkv" }],
  ["path", { d: "m15 2-3 3-3-3", key: "1uh6eb" }],
  ["rect", { width: "7", height: "13", x: "14", y: "8", rx: "1", key: "w3fjg8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w0 = e("Bike", [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b0 = e("Binary", [
  ["rect", { x: "14", y: "14", width: "4", height: "6", rx: "2", key: "p02svl" }],
  ["rect", { x: "6", y: "4", width: "4", height: "6", rx: "2", key: "xm4xkj" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 10h4", key: "ru81e7" }],
  ["path", { d: "M6 14h2v6", key: "16z9wg" }],
  ["path", { d: "M14 4h2v6", key: "1idq9u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I0 = e("Biohazard", [
  ["circle", { cx: "12", cy: "11.9", r: "2", key: "e8h31w" }],
  ["path", { d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6", key: "17bolr" }],
  ["path", { d: "m8.9 10.1 1.4.8", key: "15ezny" }],
  ["path", { d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5", key: "wtwa5u" }],
  ["path", { d: "m15.1 10.1-1.4.8", key: "1r0b28" }],
  ["path", { d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2", key: "m7qszh" }],
  ["path", { d: "M12 13.9v1.6", key: "zfyyim" }],
  ["path", { d: "M13.5 5.4c-1-.2-2-.2-3 0", key: "1bi9q0" }],
  ["path", { d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5", key: "1rhjqw" }],
  ["path", { d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5", key: "8gsud3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C0 = e("Bird", [
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20", key: "oj1oa8" }],
  ["path", { d: "m20 7 2 .5-2 .5", key: "12nv4d" }],
  ["path", { d: "M10 18v3", key: "1yea0a" }],
  ["path", { d: "M14 17.75V21", key: "1pymcb" }],
  ["path", { d: "M7 18a6 6 0 0 0 3.84-10.61", key: "1npnn0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S0 = e("Bitcoin", [
  [
    "path",
    {
      d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",
      key: "yr8idg"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = e("Blinds", [
  ["path", { d: "M3 3h18", key: "o7r712" }],
  ["path", { d: "M20 7H8", key: "gd2fo2" }],
  ["path", { d: "M20 11H8", key: "1ynp89" }],
  ["path", { d: "M10 19h10", key: "19hjk5" }],
  ["path", { d: "M8 15h12", key: "1yqzne" }],
  ["path", { d: "M4 3v14", key: "fggqzn" }],
  ["circle", { cx: "4", cy: "19", r: "2", key: "p3m9r0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A0 = e("Blocks", [
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  [
    "path",
    {
      d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
      key: "1fpvtg"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z0 = e("BluetoothConnected", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "12", key: "1rsjjs" }],
  ["line", { x1: "3", x2: "6", y1: "12", y2: "12", key: "11yl8c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H0 = e("BluetoothOff", [
  ["path", { d: "m17 17-5 5V12l-5 5", key: "v5aci6" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M14.5 9.5 17 7l-5-5v4.5", key: "1kddfz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = e("BluetoothSearching", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }],
  ["path", { d: "M20.83 14.83a4 4 0 0 0 0-5.66", key: "k8tn1j" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P0 = e("Bluetooth", [
  ["path", { d: "m7 7 10 10-5 5V2l5 5L7 17", key: "1q5490" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V0 = e("Bold", [
  ["path", { d: "M14 12a4 4 0 0 0 0-8H6v8", key: "v2sylx" }],
  ["path", { d: "M15 20a4 4 0 0 0 0-8H6v8Z", key: "1ef5ya" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F0 = e("Bolt", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B0 = e("Bomb", [
  ["circle", { cx: "11", cy: "13", r: "9", key: "hd149" }],
  [
    "path",
    {
      d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",
      key: "jp4j1b"
    }
  ],
  ["path", { d: "m22 2-1.5 1.5", key: "ay92ug" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D0 = e("Bone", [
  [
    "path",
    {
      d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",
      key: "w610uw"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R0 = e("BookA", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m8 13 4-7 4 7", key: "4rari8" }],
  ["path", { d: "M9.1 11h5.7", key: "1gkovt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T0 = e("BookAudio", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 8v3", key: "1qzp49" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M16 8v3", key: "gejaml" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O0 = e("BookCheck", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m9 9.5 2 2 4-4", key: "1dth82" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U0 = e("BookCopy", [
  ["path", { d: "M2 16V4a2 2 0 0 1 2-2h11", key: "spzkk5" }],
  ["path", { d: "M5 14H4a2 2 0 1 0 0 4h1", key: "16gqf9" }],
  ["path", { d: "M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12", key: "1owzki" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G1 = e("BookDashed", [
  ["path", { d: "M20 22h-2", key: "1rpnb6" }],
  ["path", { d: "M20 15v2h-2", key: "fph276" }],
  ["path", { d: "M4 19.5V15", key: "6gr39e" }],
  ["path", { d: "M20 8v3", key: "deu0bs" }],
  ["path", { d: "M18 2h2v2", key: "180o53" }],
  ["path", { d: "M4 11V9", key: "v3xsx8" }],
  ["path", { d: "M12 2h2", key: "cvn524" }],
  ["path", { d: "M12 22h2", key: "kn7ki6" }],
  ["path", { d: "M12 17h2", key: "13u4lk" }],
  ["path", { d: "M8 22H6.5a2.5 2.5 0 0 1 0-5H8", key: "fiseg2" }],
  ["path", { d: "M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8", key: "wywhs9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E0 = e("BookDown", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3 3 3-3", key: "zt5b4y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = e("BookHeadphones", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["path", { d: "M8 12v-2a4 4 0 0 1 8 0v2", key: "1vsqkj" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G0 = e("BookHeart", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  [
    "path",
    {
      d: "M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",
      key: "1dlbw1"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N0 = e("BookImage", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "10", cy: "8", r: "2", key: "2qkj4p" }],
  ["path", { d: "m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17", key: "160say" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W0 = e("BookKey", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14", key: "1gfsgw" }],
  ["path", { d: "M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20", key: "zb0ngp" }],
  ["circle", { cx: "14", cy: "8", r: "2", key: "u49eql" }],
  ["path", { d: "m20 2-4.5 4.5", key: "1sppr8" }],
  ["path", { d: "m19 3 1 1", key: "ze14oc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = e("BookLock", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10", key: "18wgow" }],
  ["path", { d: "M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20", key: "dpch1j" }],
  ["rect", { width: "8", height: "5", x: "12", y: "6", rx: "1", key: "9nqwug" }],
  ["path", { d: "M18 6V4a2 2 0 1 0-4 0v2", key: "1aquzs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X0 = e("BookMarked", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["polyline", { points: "10 2 10 10 13 7 16 10 16 2", key: "13o6vz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $0 = e("BookMinus", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = e("BookOpenCheck", [
  ["path", { d: "M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z", key: "1i8u0n" }],
  ["path", { d: "m16 12 2 2 4-4", key: "mdajum" }],
  ["path", { d: "M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3", key: "jb5l51" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = e("BookOpenText", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
  ["path", { d: "M6 8h2", key: "30oboj" }],
  ["path", { d: "M6 12h2", key: "32wvfc" }],
  ["path", { d: "M16 8h2", key: "msurwy" }],
  ["path", { d: "M16 12h2", key: "7q9ll5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q0 = e("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y0 = e("BookPlus", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ec = e("BookText", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M8 7h6", key: "1f0q6e" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tc = e("BookType", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M16 8V6H8v2", key: "x8j6u4" }],
  ["path", { d: "M12 6v7", key: "1f6ttz" }],
  ["path", { d: "M10 13h4", key: "ytezjc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ac = e("BookUp2", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2", key: "1lorq7" }],
  ["path", { d: "M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "1nfm9i" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cc = e("BookUp", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = e("BookUser", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M15 13a3 3 0 1 0-6 0", key: "10j68g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nc = e("BookX", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }],
  ["path", { d: "m14.5 7-5 5", key: "dy991v" }],
  ["path", { d: "m9.5 7 5 5", key: "s45iea" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = e("Book", [
  ["path", { d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20", key: "t4utmx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ic = e("BookmarkCheck", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dc = e("BookmarkMinus", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hc = e("BookmarkPlus", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }],
  ["line", { x1: "12", x2: "12", y1: "7", y2: "13", key: "1cppfj" }],
  ["line", { x1: "15", x2: "9", y1: "10", y2: "10", key: "1gty7f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yc = e("BookmarkX", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z", key: "169p4p" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = e("Bookmark", [
  ["path", { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pc = e("BoomBox", [
  ["path", { d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4", key: "vvzvr1" }],
  ["path", { d: "M8 8v1", key: "xcqmfk" }],
  ["path", { d: "M12 8v1", key: "1rj8u4" }],
  ["path", { d: "M16 8v1", key: "1q12zr" }],
  ["rect", { width: "20", height: "12", x: "2", y: "9", rx: "2", key: "igpb89" }],
  ["circle", { cx: "8", cy: "15", r: "2", key: "fa4a8s" }],
  ["circle", { cx: "16", cy: "15", r: "2", key: "14c3ya" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kc = e("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sc = e("BoxSelect", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uc = e("Box", [
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mc = e("Boxes", [
  [
    "path",
    {
      d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
      key: "lc1i9w"
    }
  ],
  ["path", { d: "m7 16.5-4.74-2.85", key: "1o9zyk" }],
  ["path", { d: "m7 16.5 5-3", key: "va8pkn" }],
  ["path", { d: "M7 16.5v5.17", key: "jnp8gn" }],
  [
    "path",
    {
      d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
      key: "8zsnat"
    }
  ],
  ["path", { d: "m17 16.5-5-3", key: "8arw3v" }],
  ["path", { d: "m17 16.5 4.74-2.85", key: "8rfmw" }],
  ["path", { d: "M17 16.5v5.17", key: "k6z78m" }],
  [
    "path",
    {
      d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
      key: "1xygjf"
    }
  ],
  ["path", { d: "M12 8 7.26 5.15", key: "1vbdud" }],
  ["path", { d: "m12 8 4.74-2.85", key: "3rx089" }],
  ["path", { d: "M12 13.5V8", key: "1io7kd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = e("Braces", [
  [
    "path",
    { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1", key: "ezmyqa" }
  ],
  [
    "path",
    {
      d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",
      key: "e1hn23"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vc = e("Brackets", [
  ["path", { d: "M16 3h3v18h-3", key: "1yor1f" }],
  ["path", { d: "M8 21H5V3h3", key: "1qrfwo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mc = e("BrainCircuit", [
  [
    "path",
    {
      d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z",
      key: "ixwj2a"
    }
  ],
  ["path", { d: "M16 8V5c0-1.1.9-2 2-2", key: "13dx7u" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M20.5 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1s25gz" }],
  ["path", { d: "M16.5 13a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "127460" }],
  ["path", { d: "M20.5 21a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "fys062" }],
  ["path", { d: "M18.5 3a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z", key: "1vib61" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xc = e("BrainCog", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5",
      key: "1f4le0"
    }
  ],
  ["path", { d: "m15.7 10.4-.9.4", key: "ayzo6p" }],
  ["path", { d: "m9.2 13.2-.9.4", key: "1uzb3g" }],
  ["path", { d: "m13.6 15.7-.4-.9", key: "11ifqf" }],
  ["path", { d: "m10.8 9.2-.4-.9", key: "1pmk2v" }],
  ["path", { d: "m15.7 13.5-.9-.4", key: "7ng02m" }],
  ["path", { d: "m9.2 10.9-.9-.4", key: "1x66zd" }],
  ["path", { d: "m10.5 15.7.4-.9", key: "3js94g" }],
  ["path", { d: "m13.1 9.2.4-.9", key: "18n7mc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gc = e("Brain", [
  [
    "path",
    {
      d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",
      key: "1mhkh5"
    }
  ],
  [
    "path",
    {
      d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",
      key: "1d6s00"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fc = e("BrickWall", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 9v6", key: "199k2o" }],
  ["path", { d: "M16 15v6", key: "8rj2es" }],
  ["path", { d: "M16 3v6", key: "1j6rpj" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M8 15v6", key: "1stoo3" }],
  ["path", { d: "M8 3v6", key: "vlvjmk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lc = e("Briefcase", [
  ["rect", { width: "20", height: "14", x: "2", y: "7", rx: "2", ry: "2", key: "eto64e" }],
  ["path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "zwj3tp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wc = e("BringToFront", [
  ["rect", { x: "8", y: "8", width: "8", height: "8", rx: "2", key: "yj20xf" }],
  ["path", { d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2", key: "1ltk23" }],
  ["path", { d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2", key: "1q24h9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bc = e("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ic = e("BugOff", [
  ["path", { d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2", key: "vl8zik" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3", key: "1ou0bd" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13", key: "1njkjs" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cc = e("BugPlay", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  ["path", { d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5", key: "1tjixy" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "m12 12 8 5-8 5Z", key: "1ydf81" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = e("Bug", [
  ["path", { d: "m8 2 1.88 1.88", key: "fmnt4t" }],
  ["path", { d: "M14.12 3.88 16 2", key: "qol33r" }],
  ["path", { d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1", key: "d7y7pr" }],
  [
    "path",
    {
      d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
      key: "xs1cw7"
    }
  ],
  ["path", { d: "M12 20v-9", key: "1qisl0" }],
  ["path", { d: "M6.53 9C4.6 8.8 3 7.1 3 5", key: "32zzws" }],
  ["path", { d: "M6 13H2", key: "82j7cp" }],
  ["path", { d: "M3 21c0-2.1 1.7-3.9 3.8-4", key: "4p0ekp" }],
  ["path", { d: "M20.97 5c0 2.1-1.6 3.8-3.5 4", key: "18gb23" }],
  ["path", { d: "M22 13h-4", key: "1jl80f" }],
  ["path", { d: "M17.2 17c2.1.1 3.8 1.9 3.8 4", key: "k3fwyw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qc = e("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ac = e("Building", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zc = e("BusFront", [
  ["path", { d: "M4 6 2 7", key: "1mqr15" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "m22 7-2-1", key: "1umjhc" }],
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 21v-2", key: "sqyl04" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hc = e("Bus", [
  ["path", { d: "M8 6v6", key: "18i7km" }],
  ["path", { d: "M15 6v6", key: "1sg6z9" }],
  ["path", { d: "M2 12h19.6", key: "de5uta" }],
  [
    "path",
    {
      d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",
      key: "1wwztk"
    }
  ],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M9 18h5", key: "lrx6i" }],
  ["circle", { cx: "16", cy: "18", r: "2", key: "1v4tcr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jc = e("CableCar", [
  ["path", { d: "M10 3h.01", key: "lbucoy" }],
  ["path", { d: "M14 2h.01", key: "1k8aa1" }],
  ["path", { d: "m2 9 20-5", key: "1kz0j5" }],
  ["path", { d: "M12 12V6.5", key: "1vbrij" }],
  ["rect", { width: "16", height: "10", x: "4", y: "12", rx: "3", key: "if91er" }],
  ["path", { d: "M9 12v5", key: "3anwtq" }],
  ["path", { d: "M15 12v5", key: "5xh3zn" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pc = e("Cable", [
  ["path", { d: "M4 9a2 2 0 0 1-2-2V5h6v2a2 2 0 0 1-2 2Z", key: "1s6oa5" }],
  ["path", { d: "M3 5V3", key: "1k5hjh" }],
  ["path", { d: "M7 5V3", key: "1t1388" }],
  ["path", { d: "M19 15V6.5a3.5 3.5 0 0 0-7 0v11a3.5 3.5 0 0 1-7 0V9", key: "1ytv72" }],
  ["path", { d: "M17 21v-2", key: "ds4u3f" }],
  ["path", { d: "M21 21v-2", key: "eo0ou" }],
  ["path", { d: "M22 19h-6v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z", key: "sdz6o8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vc = e("CakeSlice", [
  ["circle", { cx: "9", cy: "7", r: "2", key: "1305pl" }],
  [
    "path",
    { d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6", key: "xle13f" }
  ],
  ["path", { d: "M16 13H3", key: "1wpj08" }],
  ["path", { d: "M16 17H3", key: "3lvfcd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fc = e("Cake", [
  ["path", { d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8", key: "1w3rig" }],
  ["path", { d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1", key: "n2jgmb" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }],
  ["path", { d: "M7 8v3", key: "1qtyvj" }],
  ["path", { d: "M12 8v3", key: "hwp4zt" }],
  ["path", { d: "M17 8v3", key: "1i6e5u" }],
  ["path", { d: "M7 4h0.01", key: "hsw7lv" }],
  ["path", { d: "M12 4h0.01", key: "1e3d8f" }],
  ["path", { d: "M17 4h0.01", key: "p7cxgy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bc = e("Calculator", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["line", { x1: "8", x2: "16", y1: "6", y2: "6", key: "x4nwl0" }],
  ["line", { x1: "16", x2: "16", y1: "14", y2: "18", key: "wjye3r" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dc = e("CalendarCheck2", [
  ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rc = e("CalendarCheck", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tc = e("CalendarClock", [
  ["path", { d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5", key: "1osxxc" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.25V14", key: "re2vv1" }],
  ["path", { d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z", key: "ame013" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oc = e("CalendarDays", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uc = e("CalendarHeart", [
  ["path", { d: "M21 10V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7", key: "1sfrvf" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  [
    "path",
    {
      d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1t7hil"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ec = e("CalendarMinus", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zc = e("CalendarOff", [
  [
    "path",
    { d: "M4.18 4.18A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18", key: "1feomx" }
  ],
  ["path", { d: "M21 15.5V6a2 2 0 0 0-2-2H9.5", key: "yhw86o" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M3 10h7", key: "1wap6i" }],
  ["path", { d: "M21 10h-5.5", key: "quycpq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gc = e("CalendarPlus", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "19", x2: "19", y1: "16", y2: "22", key: "1ttwzi" }],
  ["line", { x1: "16", x2: "22", y1: "19", y2: "19", key: "1g9955" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nc = e("CalendarRange", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["path", { d: "M17 14h-6", key: "bkmgh3" }],
  ["path", { d: "M13 18H7", key: "bb0bb7" }],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 18h.01", key: "1bdyru" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wc = e("CalendarSearch", [
  ["path", { d: "M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5", key: "18ncp8" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _c = e("CalendarX2", [
  ["path", { d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "3spt84" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "17", x2: "22", y1: "17", y2: "22", key: "xa9o8b" }],
  ["line", { x1: "17", x2: "22", y1: "22", y2: "17", key: "18nitg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xc = e("CalendarX", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }],
  ["line", { x1: "10", x2: "14", y1: "14", y2: "18", key: "1g3qc0" }],
  ["line", { x1: "14", x2: "10", y1: "14", y2: "18", key: "1az83m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $c = e("Calendar", [
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", ry: "2", key: "eu3xkr" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "6", key: "m3sa8f" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "6", key: "18kwsl" }],
  ["line", { x1: "3", x2: "21", y1: "10", y2: "10", key: "xt86sb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kc = e("CameraOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16", key: "qmtpty" }],
  ["path", { d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5", key: "1ufyfc" }],
  ["path", { d: "M14.121 15.121A3 3 0 1 1 9.88 10.88", key: "11zox6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jc = e("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qc = e("CandlestickChart", [
  ["path", { d: "M9 5v4", key: "14uxtq" }],
  ["rect", { width: "4", height: "6", x: "7", y: "9", rx: "1", key: "f4fvz0" }],
  ["path", { d: "M9 15v2", key: "r5rk32" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["rect", { width: "4", height: "8", x: "15", y: "5", rx: "1", key: "z38je5" }],
  ["path", { d: "M17 13v3", key: "5l0wba" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yc = e("CandyCane", [
  [
    "path",
    {
      d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",
      key: "isaq8g"
    }
  ],
  ["path", { d: "M17.75 7 15 2.1", key: "12x7e8" }],
  ["path", { d: "M10.9 4.8 13 9", key: "100a87" }],
  ["path", { d: "m7.9 9.7 2 4.4", key: "ntfhaj" }],
  ["path", { d: "M4.9 14.7 7 18.9", key: "1x43jy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eo = e("CandyOff", [
  ["path", { d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1", key: "1ff4ui" }],
  [
    "path",
    { d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657", key: "1sbrv4" }
  ],
  ["path", { d: "M14 16.5V14", key: "1maf8j" }],
  ["path", { d: "M14 6.5v1.843", key: "1a6u6t" }],
  ["path", { d: "M10 10v7.5", key: "80pj65" }],
  [
    "path",
    {
      d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",
      key: "11a9mt"
    }
  ],
  [
    "path",
    {
      d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",
      key: "3mjmon"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = e("Candy", [
  ["path", { d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z", key: "ue6khb" }],
  ["path", { d: "M14 6.5v10", key: "5xnk7c" }],
  ["path", { d: "M10 7.5v10", key: "1uew51" }],
  [
    "path",
    { d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1", key: "b9cp6k" }
  ],
  [
    "path",
    { d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1", key: "5lney8" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ao = e("CarFront", [
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const co = e("CarTaxiFront", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  [
    "path",
    { d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8", key: "1imjwt" }
  ],
  ["path", { d: "M7 14h.01", key: "1qa3f1" }],
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  ["rect", { width: "18", height: "8", x: "3", y: "10", rx: "2", key: "a7itu8" }],
  ["path", { d: "M5 18v2", key: "ppbyun" }],
  ["path", { d: "M19 18v2", key: "gy7782" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oo = e("Car", [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const no = e("Caravan", [
  ["rect", { width: "4", height: "4", x: "2", y: "9", key: "1vcvhd" }],
  ["rect", { width: "4", height: "10", x: "10", y: "9", key: "1b7ev2" }],
  ["path", { d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2", key: "19jm3t" }],
  ["circle", { cx: "8", cy: "19", r: "2", key: "t8fc5s" }],
  ["path", { d: "M10 19h12v-2", key: "1yu2qx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ro = e("Carrot", [
  [
    "path",
    {
      d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",
      key: "rfqxbe"
    }
  ],
  ["path", { d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z", key: "6b25w4" }],
  ["path", { d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z", key: "fn65lo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const io = e("CaseLower", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ho = e("CaseSensitive", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["circle", { cx: "18", cy: "12", r: "3", key: "1kchzo" }],
  ["path", { d: "M21 9v6", key: "anns31" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = e("CaseUpper", [
  ["path", { d: "m3 15 4-8 4 8", key: "1vwr6u" }],
  ["path", { d: "M4 13h6", key: "1r9ots" }],
  ["path", { d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4", key: "1sqfas" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lo = e("CassetteTape", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["circle", { cx: "8", cy: "10", r: "2", key: "1xl4ub" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "10", r: "2", key: "r14t7q" }],
  ["path", { d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3", key: "l01ucn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const po = e("Cast", [
  ["path", { d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6", key: "3zrzxg" }],
  ["path", { d: "M2 12a9 9 0 0 1 8 8", key: "g6cvee" }],
  ["path", { d: "M2 16a5 5 0 0 1 4 4", key: "1y1dii" }],
  ["line", { x1: "2", x2: "2.01", y1: "20", y2: "20", key: "xu2jvo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = e("Castle", [
  ["path", { d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "109fe4" }],
  ["path", { d: "M18 11V4H6v7", key: "mon5oj" }],
  ["path", { d: "M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4", key: "jdggr9" }],
  ["path", { d: "M22 11V9", key: "3zbp94" }],
  ["path", { d: "M2 11V9", key: "1x5rnq" }],
  ["path", { d: "M6 4V2", key: "1rsq15" }],
  ["path", { d: "M18 4V2", key: "1jsdo1" }],
  ["path", { d: "M10 4V2", key: "75d9ly" }],
  ["path", { d: "M14 4V2", key: "8nj3z6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const so = e("Cat", [
  [
    "path",
    {
      d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",
      key: "x6xyqk"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uo = e("Cctv", [
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M16.75 12H22l-3.5 7-3.09-4.32", key: "1h9vqe" }],
  [
    "path",
    {
      d: "M18 9.5l-4 8-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3Z",
      key: "q5d122"
    }
  ],
  ["path", { d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15", key: "19bib8" }],
  ["path", { d: "M2 21v-4", key: "l40lih" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = e("CheckCheck", [
  ["path", { d: "M18 6 7 17l-5-5", key: "116fxf" }],
  ["path", { d: "m22 10-7.5 7.5L13 16", key: "ke71qq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = e("CheckCircle2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mo = e("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = e("CheckSquare2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = e("CheckSquare", [
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11", key: "1jnkn4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fo = e("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = e("ChefHat", [
  [
    "path",
    {
      d: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z",
      key: "z3ra2g"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "17", y2: "17", key: "12q60k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = e("Cherry", [
  ["path", { d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "cvxqlc" }],
  ["path", { d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z", key: "1ostrc" }],
  ["path", { d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12", key: "hqx58h" }],
  ["path", { d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z", key: "eykp1o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = e("ChevronDownCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = e("ChevronDownSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m16 10-4 4-4-4", key: "894hmk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = e("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = e("ChevronFirst", [
  ["path", { d: "m17 18-6-6 6-6", key: "1yerx2" }],
  ["path", { d: "M7 6v12", key: "1p53r6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = e("ChevronLast", [
  ["path", { d: "m7 18 6-6-6-6", key: "lwmzdw" }],
  ["path", { d: "M17 6v12", key: "1o0aio" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = e("ChevronLeftCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = e("ChevronLeftSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m14 16-4-4 4-4", key: "ojs7w8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = e("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = e("ChevronRightCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = e("ChevronRightSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 8 4 4-4 4", key: "1wy4r4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vo = e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = e("ChevronUpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = e("ChevronUpSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m8 14 4-4 4 4", key: "fy2ptz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = e("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = e("ChevronsDownUp", [
  ["path", { d: "m7 20 5-5 5 5", key: "13a0gw" }],
  ["path", { d: "m7 4 5 5 5-5", key: "1kwcof" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = e("ChevronsDown", [
  ["path", { d: "m7 6 5 5 5-5", key: "1lc07p" }],
  ["path", { d: "m7 13 5 5 5-5", key: "1d48rs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = e("ChevronsLeftRight", [
  ["path", { d: "m9 7-5 5 5 5", key: "j5w590" }],
  ["path", { d: "m15 7 5 5-5 5", key: "1bl6da" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = e("ChevronsLeft", [
  ["path", { d: "m11 17-5-5 5-5", key: "13zhaf" }],
  ["path", { d: "m18 17-5-5 5-5", key: "h8a8et" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = e("ChevronsRightLeft", [
  ["path", { d: "m20 17-5-5 5-5", key: "30x0n2" }],
  ["path", { d: "m4 17 5-5-5-5", key: "16spf4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = e("ChevronsRight", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Go = e("ChevronsUpDown", [
  ["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }],
  ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = e("ChevronsUp", [
  ["path", { d: "m17 11-5-5-5 5", key: "e8nh98" }],
  ["path", { d: "m17 18-5-5-5 5", key: "2avn1x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = e("Chrome", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["line", { x1: "21.17", x2: "12", y1: "8", y2: "8", key: "a0cw5f" }],
  ["line", { x1: "3.95", x2: "8.54", y1: "6.06", y2: "14", key: "1kftof" }],
  ["line", { x1: "10.88", x2: "15.46", y1: "21.94", y2: "14", key: "1ymyh8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = e("Church", [
  ["path", { d: "m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2", key: "gy5gyo" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
  ["path", { d: "M18 22V5l-6-3-6 3v17", key: "1hsnhq" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M10 9h4", key: "u4k05v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xo = e("CigaretteOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M12 12H2v4h14", key: "91gsaq" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M18 12h-.5", key: "12ymji" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = e("Cigarette", [
  ["path", { d: "M18 12H2v4h16", key: "2rt1hm" }],
  ["path", { d: "M22 12v4", key: "142cbu" }],
  ["path", { d: "M7 12v4", key: "jqww69" }],
  ["path", { d: "M18 8c0-2.5-2-2.5-2-5", key: "1il607" }],
  ["path", { d: "M22 8c0-2.5-2-2.5-2-5", key: "1gah44" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = e("CircleDashed", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jo = e("CircleDollarSign", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qo = e("CircleDotDashed", [
  ["path", { d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0", key: "1qdqn0" }],
  ["path", { d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7", key: "1bq7p6" }],
  ["path", { d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8", key: "1rlaqf" }],
  ["path", { d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69", key: "1xk03u" }],
  ["path", { d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0", key: "l7re25" }],
  ["path", { d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7", key: "1v18p6" }],
  ["path", { d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8", key: "xdo6bj" }],
  ["path", { d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69", key: "1jjmaz" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yo = e("CircleDot", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const en = e("CircleEllipsis", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tn = e("CircleEqual", [
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const an = e("CircleOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M8.35 2.69A10 10 0 0 1 21.3 15.65", key: "1pfsoa" }],
  ["path", { d: "M19.08 19.08A10 10 0 1 1 4.92 4.92", key: "1ablyi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W1 = e("CircleSlash2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M22 2 2 22", key: "y4kqgn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cn = e("CircleSlash", [
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _1 = e("CircleUserRound", [
  ["path", { d: "M18 20a6 6 0 0 0-12 0", key: "1qehca" }],
  ["circle", { cx: "12", cy: "10", r: "4", key: "1h16sb" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X1 = e("CircleUser", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662", key: "154egf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const on = e("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = e("CircuitBoard", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M11 9h4a2 2 0 0 0 2-2V3", key: "1ve2rv" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M7 21v-4a2 2 0 0 1 2-2h4", key: "1fwkro" }],
  ["circle", { cx: "15", cy: "15", r: "2", key: "3i40o0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rn = e("Citrus", [
  [
    "path",
    {
      d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",
      key: "4ite01"
    }
  ],
  ["path", { d: "M19.65 15.66A8 8 0 0 1 8.35 4.34", key: "1gxipu" }],
  ["path", { d: "m14 10-5.5 5.5", key: "92pfem" }],
  ["path", { d: "M14 17.85V10H6.15", key: "xqmtsk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dn = e("Clapperboard", [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = e("ClipboardCheck", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m9 14 2 2 4-4", key: "df797q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = e("ClipboardCopy", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", key: "4jdomd" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v4", key: "3hqy98" }],
  ["path", { d: "M21 14H11", key: "1bme5i" }],
  ["path", { d: "m15 10-4 4 4 4", key: "5dvupr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ln = e("ClipboardList", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pn = e("ClipboardPaste", [
  [
    "path",
    { d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z", key: "1pp7kr" }
  ],
  [
    "path",
    {
      d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",
      key: "2ik1ml"
    }
  ],
  ["path", { d: "m17 10 4 4-4 4", key: "vp2hj1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $1 = e("ClipboardPenLine", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5", key: "1but9f" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 1.73 1", key: "1p8n7l" }],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  ["path", { d: "M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z", key: "yg2pdb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = e("ClipboardPen", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", key: "1oijnt" }],
  ["path", { d: "M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z", key: "hnx206" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5", key: "cereej" }],
  ["path", { d: "M4 13.5V6a2 2 0 0 1 2-2h2", key: "5ua5vh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = e("ClipboardType", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M9 12v-1h6v1", key: "iehl6m" }],
  ["path", { d: "M11 17h2", key: "12w5me" }],
  ["path", { d: "M12 11v6", key: "1bwqyc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = e("ClipboardX", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "m15 11-6 6", key: "1toa9n" }],
  ["path", { d: "m9 11 6 6", key: "wlibny" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const un = e("Clipboard", [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = e("Clock1", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 8", key: "12zbmj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = e("Clock10", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 10", key: "atfzqc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mn = e("Clock11", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 8", key: "l5bg6f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xn = e("Clock12", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12", key: "1fub01" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gn = e("Clock2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 10", key: "1g230d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fn = e("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = e("Clock4", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = e("Clock5", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 14.5 16", key: "1pcbox" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bn = e("Clock6", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 12 16.5", key: "hb2qv6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = e("Clock7", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 9.5 16", key: "ka3394" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = e("Clock8", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 8 14", key: "tmc9b4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = e("Clock9", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 7.5 12", key: "1k60p0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = e("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const An = e("CloudCog", [
  ["circle", { cx: "12", cy: "17", r: "3", key: "1spfwm" }],
  ["path", { d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2", key: "zaobp" }],
  ["path", { d: "m15.7 18.4-.9-.3", key: "4qxpbn" }],
  ["path", { d: "m9.2 15.9-.9-.3", key: "17q7o2" }],
  ["path", { d: "m10.6 20.7.3-.9", key: "1pf4s2" }],
  ["path", { d: "m13.1 14.2.3-.9", key: "1mnuqm" }],
  ["path", { d: "m13.6 20.7-.4-1", key: "1jpd1m" }],
  ["path", { d: "m10.8 14.3-.4-1", key: "17ugyy" }],
  ["path", { d: "m8.3 18.6 1-.4", key: "s42vdx" }],
  ["path", { d: "m14.7 15.8 1-.4", key: "2wizun" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = e("CloudDrizzle", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 19v1", key: "1dk2by" }],
  ["path", { d: "M8 14v1", key: "84yxot" }],
  ["path", { d: "M16 19v1", key: "v220m7" }],
  ["path", { d: "M16 14v1", key: "g12gj6" }],
  ["path", { d: "M12 21v1", key: "q8vafk" }],
  ["path", { d: "M12 16v1", key: "1mx6rx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = e("CloudFog", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 17H7", key: "pygtm1" }],
  ["path", { d: "M17 21H9", key: "1u2q02" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = e("CloudHail", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v2", key: "a1is7l" }],
  ["path", { d: "M8 14v2", key: "1e9m6t" }],
  ["path", { d: "M16 20h.01", key: "xwek51" }],
  ["path", { d: "M8 20h.01", key: "1vjney" }],
  ["path", { d: "M12 16v2", key: "z66u1j" }],
  ["path", { d: "M12 22h.01", key: "1urd7a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = e("CloudLightning", [
  ["path", { d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973", key: "1cez44" }],
  ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = e("CloudMoonRain", [
  [
    "path",
    {
      d: "M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",
      key: "u82z8m"
    }
  ],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = e("CloudMoon", [
  ["path", { d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z", key: "p44pc9" }],
  ["path", { d: "M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197", key: "16nha0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = e("CloudOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
  [
    "path",
    { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = e("CloudRainWind", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "m9.2 22 3-7", key: "sb5f6j" }],
  ["path", { d: "m9 13-3 7", key: "500co5" }],
  ["path", { d: "m17 13-3 7", key: "8t2fiy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = e("CloudRain", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M16 14v6", key: "1j4efv" }],
  ["path", { d: "M8 14v6", key: "17c4r9" }],
  ["path", { d: "M12 16v6", key: "c8a4gj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tn = e("CloudSnow", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }],
  ["path", { d: "M8 19h.01", key: "puxtts" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  ["path", { d: "M12 21h.01", key: "h35vbk" }],
  ["path", { d: "M16 15h.01", key: "rnfrdf" }],
  ["path", { d: "M16 19h.01", key: "1vcnzz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = e("CloudSunRain", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24", key: "1qmrp3" }],
  ["path", { d: "M11 20v2", key: "174qtz" }],
  ["path", { d: "M7 19v2", key: "12npes" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = e("CloudSun", [
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ["path", { d: "M15.947 12.65a4 4 0 0 0-5.925-4.128", key: "dpwdj0" }],
  ["path", { d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z", key: "s09mg5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const En = e("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = e("Cloudy", [
  ["path", { d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "gqqjvc" }],
  ["path", { d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5", key: "1p2s76" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = e("Clover", [
  [
    "path",
    {
      d: "M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z",
      key: "1gxwox"
    }
  ],
  [
    "path",
    {
      d: "M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16",
      key: "il7z7z"
    }
  ],
  [
    "path",
    {
      d: "M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8",
      key: "15bpx2"
    }
  ],
  [
    "path",
    {
      d: "M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z",
      key: "v9mug8"
    }
  ],
  ["path", { d: "m7 17-5 5", key: "1py3mz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = e("Club", [
  [
    "path",
    {
      d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",
      key: "27yuqz"
    }
  ],
  ["path", { d: "M12 17.66L12 22", key: "ogfahf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = e("Code2", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J1 = e("CodeSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _n = e("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = e("Codepen", [
  ["polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2", key: "srzb37" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "15.5", key: "1t73f2" }],
  ["polyline", { points: "22 8.5 12 15.5 2 8.5", key: "ajlxae" }],
  ["polyline", { points: "2 15.5 12 8.5 22 15.5", key: "susrui" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "8.5", key: "2cldga" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $n = e("Codesandbox", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ],
  ["polyline", { points: "7.5 4.21 12 6.81 16.5 4.21", key: "fabo96" }],
  ["polyline", { points: "7.5 19.79 7.5 14.6 3 12", key: "z377f1" }],
  ["polyline", { points: "21 12 16.5 14.6 16.5 19.79", key: "9nrev1" }],
  ["polyline", { points: "3.27 6.96 12 12.01 20.73 6.96", key: "1180pa" }],
  ["line", { x1: "12", x2: "12", y1: "22.08", y2: "12", key: "3z3uq6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = e("Coffee", [
  ["path", { d: "M17 8h1a4 4 0 1 1 0 8h-1", key: "jx4kbh" }],
  ["path", { d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z", key: "1bxrl0" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "4", key: "1cr9l3" }],
  ["line", { x1: "10", x2: "10", y1: "2", y2: "4", key: "170wym" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "4", key: "1c5f70" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = e("Cog", [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = e("Coins", [
  ["circle", { cx: "8", cy: "8", r: "6", key: "3yglwk" }],
  ["path", { d: "M18.09 10.37A6 6 0 1 1 10.34 18", key: "t5s6rm" }],
  ["path", { d: "M7 6h1v4", key: "1obek4" }],
  ["path", { d: "m16.71 13.88.7.71-2.82 2.82", key: "1rbuyh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = e("Columns2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = e("Columns3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = e("Columns4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7.5 3v18", key: "w0wo6v" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M16.5 3v18", key: "10tjh1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = e("Combine", [
  ["rect", { width: "8", height: "8", x: "2", y: "2", rx: "2", key: "z1hh3n" }],
  ["path", { d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "83orz6" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "k86dmt" }],
  ["path", { d: "M10 18H5c-1.7 0-3-1.3-3-3v-1", key: "6vokjl" }],
  ["polyline", { points: "7 21 10 18 7 15", key: "1k02g0" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = e("Command", [
  [
    "path",
    { d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3", key: "11bfej" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ar = e("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76", key: "m9r19z" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = e("Component", [
  ["path", { d: "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z", key: "1kciei" }],
  ["path", { d: "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z", key: "1ome0g" }],
  ["path", { d: "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z", key: "vbupec" }],
  ["path", { d: "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z", key: "16csic" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = e("Computer", [
  ["rect", { width: "14", height: "8", x: "5", y: "2", rx: "2", key: "wc9tft" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h2", key: "rwmk9e" }],
  ["path", { d: "M12 18h6", key: "aqd8w3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = e("ConciergeBell", [
  ["path", { d: "M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z", key: "1co3i8" }],
  ["path", { d: "M20 16a8 8 0 1 0-16 0", key: "1pa543" }],
  ["path", { d: "M12 4v4", key: "1bq03y" }],
  ["path", { d: "M10 4h4", key: "1xpv9s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = e("Cone", [
  ["path", { d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98", key: "53pte7" }],
  ["ellipse", { cx: "12", cy: "19", rx: "9", ry: "3", key: "1ji25f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = e("Construction", [
  ["rect", { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" }],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dr = e("Contact2", [
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }],
  ["circle", { cx: "12", cy: "11", r: "3", key: "itu57m" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hr = e("Contact", [
  ["path", { d: "M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2", key: "1mghuy" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["circle", { cx: "12", cy: "10", r: "2", key: "1yojzk" }],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "4", key: "1ff9gb" }],
  ["line", { x1: "16", x2: "16", y1: "2", y2: "4", key: "1ufoma" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yr = e("Container", [
  [
    "path",
    {
      d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
      key: "1t2lqe"
    }
  ],
  ["path", { d: "M10 21.9V14L2.1 9.1", key: "o7czzq" }],
  ["path", { d: "m10 14 11.9-6.9", key: "zm5e20" }],
  ["path", { d: "M14 19.8v-8.1", key: "159ecu" }],
  ["path", { d: "M18 17.5V9.4", key: "11uown" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = e("Contrast", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 18a6 6 0 0 0 0-12v12z", key: "j4l70d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pr = e("Cookie", [
  ["path", { d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5", key: "laymnq" }],
  ["path", { d: "M8.5 8.5v.01", key: "ue8clq" }],
  ["path", { d: "M16 15.5v.01", key: "14dtrp" }],
  ["path", { d: "M12 12v.01", key: "u5ubse" }],
  ["path", { d: "M11 17v.01", key: "1hyl5a" }],
  ["path", { d: "M7 14v.01", key: "uct60s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = e("CookingPot", [
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8", key: "u0tga0" }],
  ["path", { d: "m4 8 16-4", key: "16g0ng" }],
  [
    "path",
    {
      d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",
      key: "12cejc"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = e("CopyCheck", [
  ["path", { d: "m12 15 2 2 4-4", key: "2c609p" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ur = e("CopyMinus", [
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mr = e("CopyPlus", [
  ["line", { x1: "15", x2: "15", y1: "12", y2: "18", key: "1p7wdc" }],
  ["line", { x1: "12", x2: "18", y1: "15", y2: "15", key: "1nscbv" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = e("CopySlash", [
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mr = e("CopyX", [
  ["line", { x1: "12", x2: "18", y1: "12", y2: "18", key: "1rg63v" }],
  ["line", { x1: "12", x2: "18", y1: "18", y2: "12", key: "ebkxgr" }],
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xr = e("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gr = e("Copyleft", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.17 14.83a4 4 0 1 0 0-5.66", key: "1sveal" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fr = e("Copyright", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M14.83 14.83a4 4 0 1 1 0-5.66", key: "1i56pz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lr = e("CornerDownLeft", [
  ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = e("CornerDownRight", [
  ["polyline", { points: "15 10 20 15 15 20", key: "1q7qjw" }],
  ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const br = e("CornerLeftDown", [
  ["polyline", { points: "14 15 9 20 4 15", key: "nkc4i" }],
  ["path", { d: "M20 4h-7a4 4 0 0 0-4 4v12", key: "nbpdq2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ir = e("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cr = e("CornerRightDown", [
  ["polyline", { points: "10 15 15 20 20 15", key: "axus6l" }],
  ["path", { d: "M4 4h7a4 4 0 0 1 4 4v12", key: "wcbgct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = e("CornerRightUp", [
  ["polyline", { points: "10 9 15 4 20 9", key: "1lr6px" }],
  ["path", { d: "M4 20h7a4 4 0 0 0 4-4V4", key: "1plgdj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qr = e("CornerUpLeft", [
  ["polyline", { points: "9 14 4 9 9 4", key: "881910" }],
  ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ar = e("CornerUpRight", [
  ["polyline", { points: "15 14 20 9 15 4", key: "1tbx3s" }],
  ["path", { d: "M4 20v-7a4 4 0 0 1 4-4h12", key: "1lu4f8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zr = e("Cpu", [
  ["rect", { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" }],
  ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
  ["path", { d: "M15 2v2", key: "13l42r" }],
  ["path", { d: "M15 20v2", key: "15mkzm" }],
  ["path", { d: "M2 15h2", key: "1gxd5l" }],
  ["path", { d: "M2 9h2", key: "1bbxkp" }],
  ["path", { d: "M20 15h2", key: "19e6y8" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M9 2v2", key: "165o2o" }],
  ["path", { d: "M9 20v2", key: "i2bqo8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hr = e("CreativeCommons", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1ss3eq" }
  ],
  [
    "path",
    { d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1", key: "1od56t" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jr = e("CreditCard", [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pr = e("Croissant", [
  [
    "path",
    {
      d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",
      key: "1ozxlb"
    }
  ],
  [
    "path",
    {
      d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",
      key: "ffuyb5"
    }
  ],
  ["path", { d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4", key: "osnpzi" }],
  [
    "path",
    {
      d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",
      key: "1vubaw"
    }
  ],
  ["path", { d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5", key: "wxr772" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vr = e("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fr = e("Cross", [
  [
    "path",
    {
      d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
      key: "1t5g7j"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Br = e("Crosshair", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "22", x2: "18", y1: "12", y2: "12", key: "l9bcsi" }],
  ["line", { x1: "6", x2: "2", y1: "12", y2: "12", key: "13hhkx" }],
  ["line", { x1: "12", x2: "12", y1: "6", y2: "2", key: "10w3f3" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "18", key: "15g9kq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dr = e("Crown", [
  ["path", { d: "m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14", key: "zkxr6b" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rr = e("Cuboid", [
  [
    "path",
    {
      d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",
      key: "1u2ovd"
    }
  ],
  ["path", { d: "M10 22v-8L2.25 9.15", key: "11pn4q" }],
  ["path", { d: "m10 14 11.77-6.87", key: "1kt1wh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = e("CupSoda", [
  ["path", { d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8", key: "8166m8" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" }],
  ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = e("Currency", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["line", { x1: "3", x2: "6", y1: "3", y2: "6", key: "1jkytn" }],
  ["line", { x1: "21", x2: "18", y1: "3", y2: "6", key: "14zfjt" }],
  ["line", { x1: "3", x2: "6", y1: "21", y2: "18", key: "iusuec" }],
  ["line", { x1: "21", x2: "18", y1: "21", y2: "18", key: "yj2dd7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ur = e("Cylinder", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 18 0V5", key: "aqi0yr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Er = e("DatabaseBackup", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 12a9 3 0 0 0 5 2.69", key: "1ui2ym" }],
  ["path", { d: "M21 9.3V5", key: "6k6cib" }],
  ["path", { d: "M3 5v14a9 3 0 0 0 6.47 2.88", key: "i62tjy" }],
  ["path", { d: "M12 12v4h4", key: "1bxaet" }],
  [
    "path",
    {
      d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",
      key: "1f4ei9"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zr = e("DatabaseZap", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 15 21.84", key: "14ibmq" }],
  ["path", { d: "M21 5V8", key: "1marbg" }],
  ["path", { d: "M21 12L18 17H22L19 22", key: "zafso" }],
  ["path", { d: "M3 12A9 3 0 0 0 14.59 14.87", key: "1y4wr8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gr = e("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nr = e("Delete", [
  ["path", { d: "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z", key: "1oy587" }],
  ["line", { x1: "18", x2: "12", y1: "9", y2: "15", key: "1olkx5" }],
  ["line", { x1: "12", x2: "18", y1: "9", y2: "15", key: "1n50pc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wr = e("Dessert", [
  ["circle", { cx: "12", cy: "4", r: "2", key: "muu5ef" }],
  [
    "path",
    {
      d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",
      key: "lfo06j"
    }
  ],
  ["path", { d: "M3.2 14.8a9 9 0 0 0 17.6 0", key: "12xarc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = e("Diameter", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M6.48 3.66a10 10 0 0 1 13.86 13.86", key: "xr8kdq" }],
  ["path", { d: "m6.41 6.41 11.18 11.18", key: "uhpjw7" }],
  ["path", { d: "M3.66 6.48a10 10 0 0 0 13.86 13.86", key: "cldpwv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xr = e("Diamond", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",
      key: "1f1r0c"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $r = e("Dice1", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kr = e("Dice2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }],
  ["path", { d: "M9 15h.01", key: "fzyn71" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jr = e("Dice3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qr = e("Dice4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yr = e("Dice5", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ei = e("Dice6", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M16 8h.01", key: "cr5u4v" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "M8 8h.01", key: "1e4136" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ti = e("Dices", [
  ["rect", { width: "12", height: "12", x: "2", y: "10", rx: "2", ry: "2", key: "6agr2n" }],
  [
    "path",
    { d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6", key: "1o487t" }
  ],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 14h.01", key: "ssrbsk" }],
  ["path", { d: "M15 6h.01", key: "cblpky" }],
  ["path", { d: "M18 9h.01", key: "2061c0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ai = e("Diff", [
  ["path", { d: "M12 3v14", key: "7cf3v8" }],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M5 21h14", key: "11awu3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ci = e("Disc2", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oi = e("Disc3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M6 12c0-1.7.7-3.2 1.8-4.2", key: "oqkarx" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M18 12c0 1.7-.7 3.2-1.8 4.2", key: "1eah9h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ni = e("DiscAlbum", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "5", key: "nd82uf" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ri = e("Disc", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ii = e("DivideCircle", [
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const di = e("DivideSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ["line", { x1: "12", x2: "12", y1: "16", y2: "16", key: "aqc6ln" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "8", key: "1mkcni" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hi = e("Divide", [
  ["circle", { cx: "12", cy: "6", r: "1", key: "1bh7o1" }],
  ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
  ["circle", { cx: "12", cy: "18", r: "1", key: "lqb9t5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yi = e("DnaOff", [
  ["path", { d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5", key: "sxiaad" }],
  ["path", { d: "M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5", key: "yn4bs1" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1.5-1.5", key: "1ohn8i" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const li = e("Dna", [
  ["path", { d: "M2 15c6.667-6 13.333 0 20-6", key: "1pyr53" }],
  ["path", { d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993", key: "q3hbxp" }],
  ["path", { d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993", key: "80uv8i" }],
  ["path", { d: "m17 6-2.5-2.5", key: "5cdfhj" }],
  ["path", { d: "m14 8-1-1", key: "15nbz5" }],
  ["path", { d: "m7 18 2.5 2.5", key: "16tu1a" }],
  ["path", { d: "m3.5 14.5.5.5", key: "hapbhd" }],
  ["path", { d: "m20 9 .5.5", key: "1n7z02" }],
  ["path", { d: "m6.5 12.5 1 1", key: "cs35ky" }],
  ["path", { d: "m16.5 10.5 1 1", key: "696xn5" }],
  ["path", { d: "m10 16 1.5 1.5", key: "11lckj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pi = e("Dog", [
  [
    "path",
    {
      d: "M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",
      key: "19br0u"
    }
  ],
  [
    "path",
    {
      d: "M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",
      key: "11n1an"
    }
  ],
  ["path", { d: "M8 14v.5", key: "1nzgdb" }],
  ["path", { d: "M16 14v.5", key: "1lajdz" }],
  ["path", { d: "M11.25 16.25h1.5L12 17l-.75-.75Z", key: "12kq1m" }],
  [
    "path",
    {
      d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",
      key: "wsu29d"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = e("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const si = e("Donut", [
  [
    "path",
    {
      d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",
      key: "19sr3x"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ui = e("DoorClosed", [
  ["path", { d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14", key: "36qu9e" }],
  ["path", { d: "M2 20h20", key: "owomy5" }],
  ["path", { d: "M14 12v.01", key: "xfcn54" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = e("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = e("DotSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vi = e("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mi = e("DownloadCloud", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m8 17 4 4 4-4", key: "1ul180" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xi = e("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gi = e("DraftingCompass", [
  ["circle", { cx: "12", cy: "5", r: "2", key: "f1ur92" }],
  ["path", { d: "m3 21 8.02-14.26", key: "1ssaw4" }],
  ["path", { d: "m12.99 6.74 1.93 3.44", key: "iwagvd" }],
  ["path", { d: "M19 12c-3.87 4-10.13 4-14 0", key: "1tsu18" }],
  ["path", { d: "m21 21-2.16-3.84", key: "vylbct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fi = e("Drama", [
  ["path", { d: "M10 11h.01", key: "d2at3l" }],
  ["path", { d: "M14 6h.01", key: "k028ub" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6.5 13.1h.01", key: "1748ia" }],
  ["path", { d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3", key: "172yzv" }],
  ["path", { d: "M17.4 9.9c-.8.8-2 .8-2.8 0", key: "1obv0w" }],
  [
    "path",
    {
      d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",
      key: "rqjl8i"
    }
  ],
  ["path", { d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4", key: "1mr6wy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Li = e("Dribbble", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94", key: "hpej1" }],
  ["path", { d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32", key: "1tr44o" }],
  ["path", { d: "M8.56 2.75c4.37 6 6 9.42 8 17.72", key: "kbh691" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wi = e("Drill", [
  [
    "path",
    { d: "M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z", key: "b6nnkj" }
  ],
  ["path", { d: "M18 6h4", key: "66u95g" }],
  ["path", { d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3", key: "105ega" }],
  ["path", { d: "m5 10-2 8", key: "xt2lic" }],
  ["path", { d: "M12 10v3c0 .6-.4 1-1 1H8", key: "mwpjnk" }],
  ["path", { d: "m7 18 2-8", key: "1bzku2" }],
  [
    "path",
    { d: "M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z", key: "117add" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bi = e("Droplet", [
  [
    "path",
    {
      d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",
      key: "c7niix"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ii = e("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ci = e("Drum", [
  ["path", { d: "m2 2 8 8", key: "1v6059" }],
  ["path", { d: "m22 2-8 8", key: "173r8a" }],
  ["ellipse", { cx: "12", cy: "9", rx: "10", ry: "5", key: "liohsx" }],
  ["path", { d: "M7 13.4v7.9", key: "1yi6u9" }],
  ["path", { d: "M12 14v8", key: "1tn2tj" }],
  ["path", { d: "M17 13.4v7.9", key: "eqz2v3" }],
  ["path", { d: "M2 9v8a10 5 0 0 0 20 0V9", key: "1750ul" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Si = e("Drumstick", [
  [
    "path",
    {
      d: "M15.45 15.4c-2.13.65-4.3.32-5.7-1.1-2.29-2.27-1.76-6.5 1.17-9.42 2.93-2.93 7.15-3.46 9.43-1.18 1.41 1.41 1.74 3.57 1.1 5.71-1.4-.51-3.26-.02-4.64 1.36-1.38 1.38-1.87 3.23-1.36 4.63z",
      key: "1o96s0"
    }
  ],
  [
    "path",
    {
      d: "m11.25 15.6-2.16 2.16a2.5 2.5 0 1 1-4.56 1.73 2.49 2.49 0 0 1-1.41-4.24 2.5 2.5 0 0 1 3.14-.32l2.16-2.16",
      key: "14vv5h"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qi = e("Dumbbell", [
  ["path", { d: "m6.5 6.5 11 11", key: "f7oqzb" }],
  ["path", { d: "m21 21-1-1", key: "cpc6if" }],
  ["path", { d: "m3 3 1 1", key: "d3rpuf" }],
  ["path", { d: "m18 22 4-4", key: "1e32o6" }],
  ["path", { d: "m2 6 4-4", key: "189tqz" }],
  ["path", { d: "m3 10 7-7", key: "1bxui2" }],
  ["path", { d: "m14 21 7-7", key: "16x78n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ai = e("EarOff", [
  ["path", { d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46", key: "1qngmn" }],
  ["path", { d: "M6 8.5c0-.75.13-1.47.36-2.14", key: "b06bma" }],
  ["path", { d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76", key: "g10hsz" }],
  ["path", { d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18", key: "ygzou7" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zi = e("Ear", [
  ["path", { d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0", key: "1dfaln" }],
  ["path", { d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4", key: "1qnva7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = e("EggFried", [
  ["circle", { cx: "11.5", cy: "12.5", r: "3.5", key: "1cl1mi" }],
  [
    "path",
    {
      d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",
      key: "165ef9"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ji = e("EggOff", [
  [
    "path",
    {
      d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",
      key: "6et380"
    }
  ],
  [
    "path",
    {
      d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",
      key: "gcdc3f"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pi = e("Egg", [
  [
    "path",
    {
      d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",
      key: "1c39pg"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = e("EqualNot", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = e("EqualSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M7 14h10", key: "1mhdw3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fi = e("Equal", [
  ["line", { x1: "5", x2: "19", y1: "9", y2: "9", key: "1nwqeh" }],
  ["line", { x1: "5", x2: "19", y1: "15", y2: "15", key: "g8yjpy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bi = e("Eraser", [
  [
    "path",
    {
      d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",
      key: "182aya"
    }
  ],
  ["path", { d: "M22 21H7", key: "t4ddhn" }],
  ["path", { d: "m5 11 9 9", key: "1mo9qw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Di = e("Euro", [
  ["path", { d: "M4 10h12", key: "1y6xl8" }],
  ["path", { d: "M4 14h9", key: "1loblj" }],
  [
    "path",
    {
      d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",
      key: "1j6lzo"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ri = e("Expand", [
  ["path", { d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8", key: "1c15vz" }],
  ["path", { d: "M3 16.2V21m0 0h4.8M3 21l6-6", key: "1fsnz2" }],
  ["path", { d: "M21 7.8V3m0 0h-4.8M21 3l-6 6", key: "hawz9i" }],
  ["path", { d: "M3 7.8V3m0 0h4.8M3 3l6 6", key: "u9ee12" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ti = e("ExternalLink", [
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }],
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["line", { x1: "10", x2: "21", y1: "14", y2: "3", key: "18c3s4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oi = e("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ui = e("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ei = e("Facebook", [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = e("Factory", [
  [
    "path",
    {
      d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "159hny"
    }
  ],
  ["path", { d: "M17 18h1", key: "uldtlt" }],
  ["path", { d: "M12 18h1", key: "s9uhes" }],
  ["path", { d: "M7 18h1", key: "1neino" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = e("Fan", [
  [
    "path",
    {
      d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",
      key: "484a7f"
    }
  ],
  ["path", { d: "M12 12v.01", key: "u5ubse" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ni = e("FastForward", [
  ["polygon", { points: "13 19 22 12 13 5 13 19", key: "587y9g" }],
  ["polygon", { points: "2 19 11 12 2 5 2 19", key: "3pweh0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wi = e("Feather", [
  ["path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z", key: "u4sw5n" }],
  ["line", { x1: "16", x2: "2", y1: "8", y2: "22", key: "1c47m2" }],
  ["line", { x1: "17.5", x2: "9", y1: "15", y2: "15", key: "2fj3pr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = e("Fence", [
  ["path", { d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "1n2rgs" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M6 18h4", key: "12yh4b" }],
  ["path", { d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "3ha7mj" }],
  ["path", { d: "M14 8h4", key: "1r8wg2" }],
  ["path", { d: "M14 18h4", key: "1t3kbu" }],
  ["path", { d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z", key: "dfd4e2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xi = e("FerrisWheel", [
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m6.8 15-3.5 2", key: "hjy98k" }],
  ["path", { d: "m20.7 7-3.5 2", key: "f08gto" }],
  ["path", { d: "M6.8 9 3.3 7", key: "1aevh4" }],
  ["path", { d: "m20.7 17-3.5-2", key: "1liqo3" }],
  ["path", { d: "m9 22 3-8 3 8", key: "wees03" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M18 18.7a9 9 0 1 0-12 0", key: "dhzg4g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $i = e("Figma", [
  ["path", { d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z", key: "1340ok" }],
  ["path", { d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z", key: "1hz3m3" }],
  ["path", { d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z", key: "1oz8n2" }],
  ["path", { d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z", key: "1ff65i" }],
  ["path", { d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z", key: "pdip6e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = e("FileArchive", [
  [
    "path",
    {
      d: "M4 22V4c0-.5.2-1 .6-1.4C5 2.2 5.5 2 6 2h8.5L20 7.5V20c0 .5-.2 1-.6 1.4-.4.4-.9.6-1.4.6h-2",
      key: "1u864v"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "10", cy: "20", r: "2", key: "1xzdoj" }],
  ["path", { d: "M10 7V6", key: "dljcrl" }],
  ["path", { d: "M10 12v-1", key: "v7bkov" }],
  ["path", { d: "M10 18v-2", key: "1cjy8d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ji = e("FileAudio2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v2", key: "fkyf72" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 17v-3a4 4 0 0 1 8 0v3", key: "1ggdre" }],
  ["circle", { cx: "9", cy: "17", r: "1", key: "bc1fq4" }],
  ["circle", { cx: "3", cy: "17", r: "1", key: "vo6nti" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = e("FileAudio", [
  [
    "path",
    {
      d: "M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
      key: "1013sb"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z", key: "gqt63y" }],
  ["path", { d: "M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z", key: "cf7lqx" }],
  ["path", { d: "M2 19v-3a6 6 0 0 1 12 0v3", key: "1acxgf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ae = e("FileAxis3d", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 10v8h8", key: "tlaukw" }],
  ["path", { d: "m8 18 4-4", key: "12zab0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = e("FileBadge2", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "13rien" }],
  ["path", { d: "m14 12.5 1 5.5-3-1-3 1 1-5.5", key: "14xlky" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ed = e("FileBadge", [
  ["path", { d: "M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6", key: "qtddq0" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", key: "u0c8gj" }],
  ["path", { d: "M7 16.5 8 22l-3-1-3 1 1-5.5", key: "5gm2nr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const td = e("FileBarChart2", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "M8 18v-1", key: "zg0ygc" }],
  ["path", { d: "M16 18v-3", key: "j5jt4h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ad = e("FileBarChart", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-4", key: "q1q25u" }],
  ["path", { d: "M8 18v-2", key: "qcmpov" }],
  ["path", { d: "M16 18v-6", key: "15y0np" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cd = e("FileBox", [
  ["path", { d: "M14.5 22H18a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "h7jej2" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    {
      d: "M2.97 13.12c-.6.36-.97 1.02-.97 1.74v3.28c0 .72.37 1.38.97 1.74l3 1.83c.63.39 1.43.39 2.06 0l3-1.83c.6-.36.97-1.02.97-1.74v-3.28c0-.72-.37-1.38-.97-1.74l-3-1.83a1.97 1.97 0 0 0-2.06 0l-3 1.83Z",
      key: "f4a3oc"
    }
  ],
  ["path", { d: "m7 17-4.74-2.85", key: "etm6su" }],
  ["path", { d: "m7 17 4.74-2.85", key: "5xuooz" }],
  ["path", { d: "M7 17v5", key: "1yj1jh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const od = e("FileCheck2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m3 15 2 2 4-4", key: "1lhrkk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nd = e("FileCheck", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rd = e("FileClock", [
  [
    "path",
    {
      d: "M16 22h2c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3",
      key: "9lo3o3"
    }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "8", cy: "16", r: "6", key: "10v15b" }],
  ["path", { d: "M9.5 17.5 8 16.25V14", key: "1o80t2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const id = e("FileCode2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dd = e("FileCode", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 13-2 2 2 2", key: "17smn8" }],
  ["path", { d: "m14 17 2-2-2-2", key: "14mezr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = e("FileCog", [
  ["circle", { cx: "6", cy: "13", r: "3", key: "1z65bp" }],
  ["path", { d: "m9.7 14.4-.9-.3", key: "o1luaq" }],
  ["path", { d: "m3.2 11.9-.9-.3", key: "qm3zk5" }],
  ["path", { d: "m4.6 16.7.3-.9", key: "1o0ect" }],
  ["path", { d: "m7.6 16.7-.4-1", key: "1ym8d1" }],
  ["path", { d: "m4.8 10.3-.4-1", key: "18q26g" }],
  ["path", { d: "m2.3 14.6 1-.4", key: "121m88" }],
  ["path", { d: "m8.7 11.8 1-.4", key: "9meqp2" }],
  ["path", { d: "m7.4 9.3-.3.9", key: "136qqn" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  [
    "path",
    { d: "M4 5.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-1.5", key: "xwe04" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hd = e("FileDiff", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yd = e("FileDigit", [
  ["rect", { width: "4", height: "6", x: "2", y: "12", rx: "2", key: "jm304g" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["path", { d: "M10 12h2v6", key: "12zw74" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ld = e("FileDown", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 18v-6", key: "17g6i2" }],
  ["path", { d: "m9 15 3 3 3-3", key: "1npd3o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pd = e("FileHeart", [
  ["path", { d: "M4 6V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "dba9qu" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    {
      d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",
      key: "1c1fso"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kd = e("FileImage", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "10", cy: "13", r: "2", key: "6v46hv" }],
  ["path", { d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22", key: "17vly1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sd = e("FileInput", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m9 18 3-3-3-3", key: "112psh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ud = e("FileJson2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "fq0c9t" }
  ],
  [
    "path",
    { d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "4gibmv" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Md = e("FileJson", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vd = e("FileKey2", [
  ["path", { d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nw5t3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
  ["path", { d: "m9 11 1 1", key: "wa6s5q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const md = e("FileKey", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
  ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
  ["path", { d: "m15 11 1 1", key: "1bsyx3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xd = e("FileLineChart", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m16 13-3.5 3.5-2-2L8 17", key: "zz7yod" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gd = e("FileLock2", [
  ["path", { d: "M4 5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "gwd2r9" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["rect", { width: "8", height: "5", x: "2", y: "13", rx: "1", key: "10y5wo" }],
  ["path", { d: "M8 13v-2a2 2 0 1 0-4 0v2", key: "1pdxzg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fd = e("FileLock", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["rect", { width: "8", height: "6", x: "8", y: "12", rx: "1", key: "3yr8at" }],
  ["path", { d: "M15 12v-2a3 3 0 1 0-6 0v2", key: "1nqnhw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ld = e("FileMinus2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wd = e("FileMinus", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bd = e("FileMusic", [
  ["circle", { cx: "14", cy: "16", r: "2", key: "1bzzi3" }],
  ["circle", { cx: "6", cy: "18", r: "2", key: "1fncim" }],
  ["path", { d: "M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5", key: "skc018" }],
  ["path", { d: "M8 18v-7.7L16 9v7", key: "1oie6o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Id = e("FileOutput", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 15h10", key: "jfw4w8" }],
  ["path", { d: "m5 12-3 3 3 3", key: "oke12k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oe = e("FilePenLine", [
  [
    "path",
    { d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5", key: "kd5d3" }
  ],
  ["path", { d: "M8 18h1", key: "13wk12" }],
  ["path", { d: "M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z", key: "yg2pdb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ne = e("FilePen", [
  ["path", { d: "M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5", key: "1bg6eb" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  ["path", { d: "M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z", key: "hnx206" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cd = e("FilePieChart", [
  ["path", { d: "M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "zhyrez" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29", key: "f1t5jc" }],
  ["path", { d: "M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z", key: "7q54ec" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sd = e("FilePlus2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M3 15h6", key: "4e2qda" }],
  ["path", { d: "M6 12v6", key: "1u72j0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qd = e("FilePlus", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "12", key: "1tsf04" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "15", key: "110plj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ad = e("FileQuestion", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  [
    "path",
    {
      d: "M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "1umxtm"
    }
  ],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zd = e("FileScan", [
  ["path", { d: "M20 10V7.5L14.5 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h4.5", key: "uvikde" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M16 22a2 2 0 0 1-2-2", key: "1wqh5n" }],
  ["path", { d: "M20 22a2 2 0 0 0 2-2", key: "1l9q4k" }],
  ["path", { d: "M20 14a2 2 0 0 1 2 2", key: "1ny6zw" }],
  ["path", { d: "M16 14a2 2 0 0 0-2 2", key: "ceaadl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hd = e("FileSearch2", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["circle", { cx: "11.5", cy: "14.5", r: "2.5", key: "1bq0ko" }],
  ["path", { d: "M13.25 16.25 15 18", key: "9eh8bj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jd = e("FileSearch", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "ychnub" }],
  ["path", { d: "m9 18-1.5-1.5", key: "1j6qii" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pd = e("FileSpreadsheet", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vd = e("FileStack", [
  ["path", { d: "M16 2v5h5", key: "kt2in0" }],
  [
    "path",
    {
      d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z",
      key: "1km23n"
    }
  ],
  ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }],
  ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fd = e("FileSymlink", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v7", key: "138uzh" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
  ["path", { d: "M4 18v-1a2 2 0 0 1 2-2h6", key: "5uz2rn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bd = e("FileTerminal", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
  ["path", { d: "M12 18h4", key: "1wd2n7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dd = e("FileText", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rd = e("FileType2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M2 13v-1h6v1", key: "1dh9dg" }],
  ["path", { d: "M4 18h2", key: "1xrofg" }],
  ["path", { d: "M5 12v6", key: "150t9c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Td = e("FileType", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M9 13v-1h6v1", key: "1bb014" }],
  ["path", { d: "M11 18h2", key: "12mj7e" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Od = e("FileUp", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "m15 15-3-3-3 3", key: "15xj92" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ud = e("FileVideo2", [
  ["path", { d: "M4 8V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4", key: "1nti49" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 15.5 4 2.5v-6l-4 2.5", key: "t7cp39" }],
  ["rect", { width: "8", height: "6", x: "2", y: "12", rx: "1", key: "1a6c1e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ed = e("FileVideo", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m10 11 5 3-5 3v-6Z", key: "7ntvm4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zd = e("FileVolume2", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "M11.5 13.5c.32.4.5.94.5 1.5s-.18 1.1-.5 1.5", key: "joawwx" }],
  ["path", { d: "M15 12c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1f2wyw" }],
  ["path", { d: "M8 15h.01", key: "a7atzg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gd = e("FileVolume", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3", key: "am10z3" }],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["path", { d: "m7 10-3 2H2v4h2l3 2v-8Z", key: "tazg57" }],
  ["path", { d: "M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3", key: "1yej3m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nd = e("FileWarning", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wd = e("FileX2", [
  ["path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4", key: "702lig" }],
  ["path", { d: "M14 2v6h6", key: "1kof46" }],
  ["path", { d: "m3 12.5 5 5", key: "1qls4r" }],
  ["path", { d: "m8 12.5-5 5", key: "b853mi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _d = e("FileX", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "9.5", x2: "14.5", y1: "12.5", y2: "17.5", key: "izs6du" }],
  ["line", { x1: "14.5", x2: "9.5", y1: "12.5", y2: "17.5", key: "1lehlj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xd = e("File", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $d = e("Files", [
  [
    "path",
    {
      d: "M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z",
      key: "cennsq"
    }
  ],
  ["path", { d: "M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8", key: "ms809a" }],
  ["path", { d: "M15 2v5h5", key: "qq6kwv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kd = e("Film", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jd = e("FilterX", [
  ["path", { d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055", key: "1fi1da" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qd = e("Filter", [
  ["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yd = e("Fingerprint", [
  ["path", { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eh = e("FireExtinguisher", [
  ["path", { d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5", key: "sqyvz" }],
  ["path", { d: "M9 18h8", key: "i7pszb" }],
  ["path", { d: "M18 3h-3", key: "7idoqj" }],
  ["path", { d: "M11 3a6 6 0 0 0-6 6v11", key: "1v5je3" }],
  ["path", { d: "M5 13h4", key: "svpcxo" }],
  ["path", { d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z", key: "vsjego" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const th = e("FishOff", [
  [
    "path",
    {
      d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",
      key: "1j1hse"
    }
  ],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",
      key: "1q46z8"
    }
  ],
  [
    "path",
    {
      d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",
      key: "1407gh"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ah = e("FishSymbol", [
  ["path", { d: "M2 16s9-15 20-4C11 23 2 8 2 8", key: "h4oh4o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ch = e("Fish", [
  [
    "path",
    {
      d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
      key: "15baut"
    }
  ],
  ["path", { d: "M18 12v.5", key: "18hhni" }],
  ["path", { d: "M16 17.93a9.77 9.77 0 0 1 0-11.86", key: "16dt7o" }],
  [
    "path",
    {
      d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
      key: "l9di03"
    }
  ],
  [
    "path",
    { d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4", key: "1kjonw" }
  ],
  [
    "path",
    { d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98", key: "1zlm23" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oh = e("FlagOff", [
  ["path", { d: "M8 2c3 0 5 2 8 2s4-1 4-1v11", key: "9rwyz9" }],
  ["path", { d: "M4 22V4", key: "1plyxx" }],
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2", key: "1myooe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nh = e("FlagTriangleLeft", [
  ["path", { d: "M17 22V2L7 7l10 5", key: "1rmf0r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rh = e("FlagTriangleRight", [
  ["path", { d: "M7 22V2l10 5-10 5", key: "17n18y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ih = e("Flag", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dh = e("FlameKindling", [
  [
    "path",
    {
      d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",
      key: "1ir223"
    }
  ],
  ["path", { d: "m5 22 14-4", key: "1brv4h" }],
  ["path", { d: "m5 18 14 4", key: "lgyyje" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hh = e("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yh = e("FlashlightOff", [
  ["path", { d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4", key: "1r120k" }],
  ["path", { d: "M7 2h11v4c0 2-2 2-2 4v1", key: "dz1920" }],
  ["line", { x1: "11", x2: "18", y1: "6", y2: "6", key: "bi1vpe" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lh = e("Flashlight", [
  [
    "path",
    {
      d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",
      key: "1orkel"
    }
  ],
  ["line", { x1: "6", x2: "18", y1: "6", y2: "6", key: "1z11jq" }],
  ["line", { x1: "12", x2: "12", y1: "12", y2: "12", key: "1f4yc1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = e("FlaskConicalOff", [
  [
    "path",
    {
      d: "M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",
      key: "59ek9y"
    }
  ],
  ["path", { d: "M10 2v2.343", key: "15t272" }],
  ["path", { d: "M14 2v6.343", key: "sxr80q" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h9", key: "t5njau" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kh = e("FlaskConical", [
  [
    "path",
    {
      d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",
      key: "pzvekw"
    }
  ],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sh = e("FlaskRound", [
  ["path", { d: "M10 2v7.31", key: "5d1hyh" }],
  ["path", { d: "M14 9.3V1.99", key: "14k4l0" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14 9.3a6.5 6.5 0 1 1-4 0", key: "1r8fvy" }],
  ["path", { d: "M5.52 16h12.96", key: "46hh1i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uh = e("FlipHorizontal2", [
  ["path", { d: "m3 7 5 5-5 5V7", key: "couhi7" }],
  ["path", { d: "m21 7-5 5 5 5V7", key: "6ouia7" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = e("FlipHorizontal", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3", key: "1i73f7" }],
  ["path", { d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3", key: "saxlbk" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 2v2", key: "tus03m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vh = e("FlipVertical2", [
  ["path", { d: "m17 3-5 5-5-5h10", key: "1ftt6x" }],
  ["path", { d: "m17 21-5-5-5 5h10", key: "1m0wmu" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mh = e("FlipVertical", [
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3", key: "14bfxa" }],
  ["path", { d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3", key: "14rx03" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xh = e("Flower2", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
      key: "3pnvol"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  ["path", { d: "M12 10v12", key: "6ubwww" }],
  ["path", { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" }],
  ["path", { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = e("Flower", [
  [
    "path",
    {
      d: "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15",
      key: "51z86h"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m8 16 1.5-1.5", key: "ce6zph" }],
  ["path", { d: "M14.5 9.5 16 8", key: "1kzrzb" }],
  ["path", { d: "m8 8 1.5 1.5", key: "1yv88w" }],
  ["path", { d: "M14.5 14.5 16 16", key: "12xhjh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fh = e("Focus", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lh = e("FoldHorizontal", [
  ["path", { d: "M2 12h6", key: "1wqiqv" }],
  ["path", { d: "M22 12h-6", key: "1eg9hc" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 9-3 3 3 3", key: "12ol22" }],
  ["path", { d: "m5 15 3-3-3-3", key: "1kdhjc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = e("FoldVertical", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3-3-3 3", key: "e37ymu" }],
  ["path", { d: "m15 5-3 3-3-3", key: "19d6lf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bh = e("FolderArchive", [
  ["circle", { cx: "15", cy: "19", r: "2", key: "u2pros" }],
  [
    "path",
    {
      d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",
      key: "1jj40k"
    }
  ],
  ["path", { d: "M15 11v-1", key: "cntcp" }],
  ["path", { d: "M15 17v-2", key: "1279jj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ih = e("FolderCheck", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9 13 2 2 4-4", key: "6343dt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ch = e("FolderClock", [
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
  [
    "path",
    {
      d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",
      key: "1urifu"
    }
  ],
  ["path", { d: "M16 14v2l1 1", key: "xth2jh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sh = e("FolderClosed", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M2 10h20", key: "1ir3d8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const re = e("FolderCog", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  [
    "path",
    {
      d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
      key: "1k8050"
    }
  ],
  ["path", { d: "m21.7 19.4-.9-.3", key: "1qgwi9" }],
  ["path", { d: "m15.2 16.9-.9-.3", key: "1t7mvx" }],
  ["path", { d: "m16.6 21.7.3-.9", key: "1j67ps" }],
  ["path", { d: "m19.1 15.2.3-.9", key: "18r7jp" }],
  ["path", { d: "m19.6 21.7-.4-1", key: "z2vh2" }],
  ["path", { d: "m16.8 15.3-.4-1", key: "1ei7r6" }],
  ["path", { d: "m14.3 19.6 1-.4", key: "11sv9r" }],
  ["path", { d: "m20.7 16.8 1-.4", key: "19m87a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qh = e("FolderDot", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "1", key: "49l61u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = e("FolderDown", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m15 13-3 3-3-3", key: "6j2sf0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = e("FolderGit2", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
      key: "1w6njk"
    }
  ],
  ["circle", { cx: "13", cy: "12", r: "2", key: "1j92g6" }],
  ["path", { d: "M18 19c-2.8 0-5-2.2-5-5v8", key: "pkpw2h" }],
  ["circle", { cx: "20", cy: "19", r: "2", key: "1obnsp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = e("FolderGit", [
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M14 13h3", key: "1dgedf" }],
  ["path", { d: "M7 13h3", key: "1pygq7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jh = e("FolderHeart", [
  [
    "path",
    {
      d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",
      key: "6hud8k"
    }
  ],
  [
    "path",
    {
      d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",
      key: "vgq86i"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = e("FolderInput", [
  [
    "path",
    {
      d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",
      key: "fm4g5t"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m9 16 3-3-3-3", key: "6m91ic" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vh = e("FolderKanban", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M12 10v2", key: "hh53o1" }],
  ["path", { d: "M16 10v6", key: "1d6xys" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fh = e("FolderKey", [
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
      key: "3hgo9p"
    }
  ],
  ["path", { d: "m22 14-4.5 4.5", key: "1ef6z8" }],
  ["path", { d: "m21 15 1 1", key: "1ejcpy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = e("FolderLock", [
  ["rect", { width: "8", height: "5", x: "14", y: "17", rx: "1", key: "19aais" }],
  [
    "path",
    {
      d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",
      key: "1w6v7t"
    }
  ],
  ["path", { d: "M20 17v-2a2 2 0 1 0-4 0v2", key: "pwaxnr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = e("FolderMinus", [
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = e("FolderOpenDot", [
  [
    "path",
    {
      d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",
      key: "1nmvlm"
    }
  ],
  ["circle", { cx: "14", cy: "15", r: "1", key: "1gm4qj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Th = e("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oh = e("FolderOutput", [
  [
    "path",
    {
      d: "M2 7.5V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
      key: "jm8npq"
    }
  ],
  ["path", { d: "M2 13h10", key: "pgb2dq" }],
  ["path", { d: "m5 10-3 3 3 3", key: "1r8ie0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ie = e("FolderPen", [
  ["path", { d: "M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z", key: "dakro8" }],
  [
    "path",
    {
      d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",
      key: "a8xqs0"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh = e("FolderPlus", [
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "M9 13h6", key: "1uhe8q" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = e("FolderRoot", [
  [
    "path",
    {
      d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",
      key: "1fr9dc"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "2", key: "1c1ljs" }],
  ["path", { d: "M12 15v5", key: "11xva1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = e("FolderSearch2", [
  ["circle", { cx: "11.5", cy: "12.5", r: "2.5", key: "1ea5ju" }],
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M13.3 14.3 15 16", key: "1y4v1n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = e("FolderSearch", [
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  [
    "path",
    {
      d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
      key: "1bw5m7"
    }
  ],
  ["path", { d: "m21 21-1.5-1.5", key: "3sg1j" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nh = e("FolderSymlink", [
  [
    "path",
    {
      d: "M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2",
      key: "1or2t8"
    }
  ],
  ["path", { d: "m8 16 3-3-3-3", key: "rlqrt1" }],
  ["path", { d: "M2 16v-1a2 2 0 0 1 2-2h6", key: "pgw8ln" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wh = e("FolderSync", [
  [
    "path",
    {
      d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",
      key: "1dkoa9"
    }
  ],
  ["path", { d: "M12 10v4h4", key: "1czhmt" }],
  ["path", { d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5", key: "lvuxfi" }],
  ["path", { d: "M22 22v-4h-4", key: "1ewp4q" }],
  ["path", { d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5", key: "14ync0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _h = e("FolderTree", [
  [
    "path",
    {
      d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "hod4my"
    }
  ],
  [
    "path",
    {
      d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",
      key: "w4yl2u"
    }
  ],
  ["path", { d: "M3 5a2 2 0 0 0 2 2h3", key: "f2jnh7" }],
  ["path", { d: "M3 3v13a2 2 0 0 0 2 2h3", key: "k8epm1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xh = e("FolderUp", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "M12 10v6", key: "1bos4e" }],
  ["path", { d: "m9 13 3-3 3 3", key: "1pxg3c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $h = e("FolderX", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ],
  ["path", { d: "m9.5 10.5 5 5", key: "ra9qjz" }],
  ["path", { d: "m14.5 10.5-5 5", key: "l2rkpq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = e("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jh = e("Folders", [
  [
    "path",
    {
      d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",
      key: "4u7rpt"
    }
  ],
  ["path", { d: "M2 8v11a2 2 0 0 0 2 2h14", key: "1eicx1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = e("Footprints", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm"
    }
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc"
    }
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yh = e("Forklift", [
  ["path", { d: "M12 12H5a2 2 0 0 0-2 2v5", key: "7zsz91" }],
  ["circle", { cx: "13", cy: "19", r: "2", key: "wjnkru" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5", key: "13bk1p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ey = e("FormInput", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M17 12h.01", key: "1m0b6t" }],
  ["path", { d: "M7 12h.01", key: "eqddd0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ty = e("Forward", [
  ["polyline", { points: "15 17 20 12 15 7", key: "1w3sku" }],
  ["path", { d: "M4 18v-2a4 4 0 0 1 4-4h12", key: "jmiej9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ay = e("Frame", [
  ["line", { x1: "22", x2: "2", y1: "6", y2: "6", key: "15w7dq" }],
  ["line", { x1: "22", x2: "2", y1: "18", y2: "18", key: "1ip48p" }],
  ["line", { x1: "6", x2: "6", y1: "2", y2: "22", key: "a2lnyx" }],
  ["line", { x1: "18", x2: "18", y1: "2", y2: "22", key: "8vb6jd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cy = e("Framer", [
  ["path", { d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7", key: "1a2nng" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oy = e("Frown", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "epbg0q" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ny = e("Fuel", [
  ["line", { x1: "3", x2: "15", y1: "22", y2: "22", key: "xegly4" }],
  ["line", { x1: "4", x2: "14", y1: "9", y2: "9", key: "xcnuvu" }],
  ["path", { d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18", key: "16j0yd" }],
  [
    "path",
    {
      d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",
      key: "8ur5zv"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ry = e("Fullscreen", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["rect", { width: "10", height: "8", x: "7", y: "8", rx: "1", key: "vys8me" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iy = e("FunctionSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dy = e("GalleryHorizontalEnd", [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hy = e("GalleryHorizontal", [
  ["path", { d: "M2 3v18", key: "pzttux" }],
  ["rect", { width: "12", height: "18", x: "6", y: "3", rx: "2", key: "btr8bg" }],
  ["path", { d: "M22 3v18", key: "6jf3v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yy = e("GalleryThumbnails", [
  ["rect", { width: "18", height: "14", x: "3", y: "3", rx: "2", key: "74y24f" }],
  ["path", { d: "M4 21h1", key: "16zlid" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M19 21h1", key: "edywat" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ly = e("GalleryVerticalEnd", [
  ["path", { d: "M7 2h10", key: "nczekb" }],
  ["path", { d: "M5 6h14", key: "u2x4p" }],
  ["rect", { width: "18", height: "12", x: "3", y: "10", rx: "2", key: "l0tzu3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const py = e("GalleryVertical", [
  ["path", { d: "M3 2h18", key: "15qxfx" }],
  ["rect", { width: "18", height: "12", x: "3", y: "6", rx: "2", key: "1439r6" }],
  ["path", { d: "M3 22h18", key: "8prr45" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ky = e("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sy = e("Gamepad", [
  ["line", { x1: "6", x2: "10", y1: "12", y2: "12", key: "161bw2" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "15", x2: "15.01", y1: "13", y2: "13", key: "dqpgro" }],
  ["line", { x1: "18", x2: "18.01", y1: "11", y2: "11", key: "meh2c" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d1 = e("GanttChartSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 8h7", key: "kbo1nt" }],
  ["path", { d: "M8 12h6", key: "ikassy" }],
  ["path", { d: "M11 16h5", key: "oq65wt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uy = e("GanttChart", [
  ["path", { d: "M8 6h10", key: "9lnwnk" }],
  ["path", { d: "M6 12h9", key: "1g9pqf" }],
  ["path", { d: "M11 18h7", key: "c8dzvl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const My = e("GaugeCircle", [
  ["path", { d: "M15.6 2.7a10 10 0 1 0 5.7 5.7", key: "1e0p6d" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M13.4 10.6 19 5", key: "1kr7tw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vy = e("Gauge", [
  ["path", { d: "m12 14 4-4", key: "9kzdfg" }],
  ["path", { d: "M3.34 19a10 10 0 1 1 17.32 0", key: "19p75a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const my = e("Gavel", [
  ["path", { d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8", key: "15492f" }],
  ["path", { d: "m16 16 6-6", key: "vzrcl6" }],
  ["path", { d: "m8 8 6-6", key: "18bi4p" }],
  ["path", { d: "m9 7 8 8", key: "5jnvq1" }],
  ["path", { d: "m21 11-8-8", key: "z4y7zo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xy = e("Gem", [
  ["path", { d: "M6 3h12l4 6-10 13L2 9Z", key: "1pcd5k" }],
  ["path", { d: "M11 3 8 9l4 13 4-13-3-6", key: "1fcu3u" }],
  ["path", { d: "M2 9h20", key: "16fsjt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gy = e("Ghost", [
  ["path", { d: "M9 10h.01", key: "qbtxuw" }],
  ["path", { d: "M15 10h.01", key: "1qmjsl" }],
  [
    "path",
    {
      d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
      key: "uwwb07"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fy = e("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ly = e("GitBranchPlus", [
  ["path", { d: "M6 3v12", key: "qpgusn" }],
  ["path", { d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "1d02ji" }],
  ["path", { d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", key: "chk6ph" }],
  ["path", { d: "M15 6a9 9 0 0 0-9 9", key: "or332x" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wy = e("GitBranch", [
  ["line", { x1: "6", x2: "6", y1: "3", y2: "15", key: "17qcm7" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M18 9a9 9 0 0 1-9 9", key: "n2h4wq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const de = e("GitCommitHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["line", { x1: "3", x2: "9", y1: "12", y2: "12", key: "1dyftd" }],
  ["line", { x1: "15", x2: "21", y1: "12", y2: "12", key: "oup4p8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const by = e("GitCommitVertical", [
  ["path", { d: "M12 3v6", key: "1holv5" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "M12 15v6", key: "a9ows0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iy = e("GitCompareArrows", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "M12 18H7a2 2 0 0 1-2-2V9", key: "16sdep" }],
  ["path", { d: "m9 15 3 3-3 3", key: "1m3kbl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cy = e("GitCompare", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["path", { d: "M11 18H8a2 2 0 0 1-2-2V9", key: "19pyzm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sy = e("GitFork", [
  ["circle", { cx: "12", cy: "18", r: "3", key: "1mpf1b" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
  ["path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9", key: "1uq4wg" }],
  ["path", { d: "M12 12v3", key: "158kv8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qy = e("GitGraph", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v6", key: "158jrl" }],
  ["circle", { cx: "5", cy: "18", r: "3", key: "104gr9" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M16 15.7A9 9 0 0 0 19 9", key: "1e3vqb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ay = e("GitMerge", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 21V9a9 9 0 0 0 9 9", key: "7kw0sc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zy = e("GitPullRequestArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["circle", { cx: "19", cy: "18", r: "3", key: "1qljk2" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v7", key: "1yj91y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hy = e("GitPullRequestClosed", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "m21 3-6 6", key: "16nqsk" }],
  ["path", { d: "m21 9-6-6", key: "9j17rh" }],
  ["path", { d: "M18 11.5V15", key: "65xf6f" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jy = e("GitPullRequestCreateArrow", [
  ["circle", { cx: "5", cy: "6", r: "3", key: "1qnov2" }],
  ["path", { d: "M5 9v12", key: "ih889a" }],
  ["path", { d: "m15 9-3-3 3-3", key: "1lwv8l" }],
  ["path", { d: "M12 6h5a2 2 0 0 1 2 2v3", key: "1rbwk6" }],
  ["path", { d: "M19 15v6", key: "10aioa" }],
  ["path", { d: "M22 18h-6", key: "1d5gi5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Py = e("GitPullRequestCreate", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M6 9v12", key: "1sc30k" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v3", key: "1jb6z3" }],
  ["path", { d: "M18 15v6", key: "9wciyi" }],
  ["path", { d: "M21 18h-6", key: "139f0c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vy = e("GitPullRequestDraft", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M18 6V5", key: "1oao2s" }],
  ["path", { d: "M18 11v-1", key: "11c8tz" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fy = e("GitPullRequest", [
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M13 6h3a2 2 0 0 1 2 2v7", key: "1yeb86" }],
  ["line", { x1: "6", x2: "6", y1: "9", y2: "21", key: "rroup" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const By = e("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dy = e("Gitlab", [
  [
    "path",
    {
      d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",
      key: "148pdi"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ry = e("GlassWater", [
  [
    "path",
    { d: "M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z", key: "48rfw3" }
  ],
  ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ty = e("Glasses", [
  ["circle", { cx: "6", cy: "15", r: "4", key: "vux9w4" }],
  ["circle", { cx: "18", cy: "15", r: "4", key: "18o8ve" }],
  ["path", { d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2", key: "1ag4bs" }],
  ["path", { d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2", key: "1hm1gs" }],
  ["path", { d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2", key: "1r31ai" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oy = e("Globe2", [
  ["path", { d: "M21.54 15H17a2 2 0 0 0-2 2v4.54", key: "1djwo0" }],
  [
    "path",
    {
      d: "M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",
      key: "1fi5u6"
    }
  ],
  [
    "path",
    { d: "M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05", key: "xsiumc" }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uy = e("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ey = e("Goal", [
  ["path", { d: "M12 13V2l8 4-8 4", key: "5wlwwj" }],
  ["path", { d: "M20.55 10.23A9 9 0 1 1 8 4.94", key: "5988i3" }],
  ["path", { d: "M8 10a5 5 0 1 0 8.9 2.02", key: "1hq7ot" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = e("Grab", [
  ["path", { d: "M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "n5nng" }],
  ["path", { d: "M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "185i9d" }],
  ["path", { d: "M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "11pz95" }],
  ["path", { d: "M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "16yk7l" }],
  [
    "path",
    { d: "M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0", key: "nzvb1c" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gy = e("GraduationCap", [
  ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
  ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ny = e("Grape", [
  ["path", { d: "M22 5V2l-5.89 5.89", key: "1eenpo" }],
  ["circle", { cx: "16.6", cy: "15.89", r: "3", key: "xjtalx" }],
  ["circle", { cx: "8.11", cy: "7.4", r: "3", key: "u2fv6i" }],
  ["circle", { cx: "12.35", cy: "11.65", r: "3", key: "i6i8g7" }],
  ["circle", { cx: "13.91", cy: "5.85", r: "3", key: "6ye0dv" }],
  ["circle", { cx: "18.15", cy: "10.09", r: "3", key: "snx9no" }],
  ["circle", { cx: "6.56", cy: "13.2", r: "3", key: "17x4xg" }],
  ["circle", { cx: "10.8", cy: "17.44", r: "3", key: "1hogw9" }],
  ["circle", { cx: "5", cy: "19", r: "3", key: "1sn6vo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const he = e("Grid2x2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M12 3v18", key: "108xh3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h1 = e("Grid3x3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wy = e("GripHorizontal", [
  ["circle", { cx: "12", cy: "9", r: "1", key: "124mty" }],
  ["circle", { cx: "19", cy: "9", r: "1", key: "1ruzo2" }],
  ["circle", { cx: "5", cy: "9", r: "1", key: "1a8b28" }],
  ["circle", { cx: "12", cy: "15", r: "1", key: "1e56xg" }],
  ["circle", { cx: "19", cy: "15", r: "1", key: "1a92ep" }],
  ["circle", { cx: "5", cy: "15", r: "1", key: "5r1jwy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _y = e("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = e("Grip", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "19", cy: "5", r: "1", key: "w8mnmm" }],
  ["circle", { cx: "5", cy: "5", r: "1", key: "lttvr7" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }],
  ["circle", { cx: "19", cy: "19", r: "1", key: "shf9b7" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $y = e("Group", [
  ["path", { d: "M3 7V5c0-1.1.9-2 2-2h2", key: "adw53z" }],
  ["path", { d: "M17 3h2c1.1 0 2 .9 2 2v2", key: "an4l38" }],
  ["path", { d: "M21 17v2c0 1.1-.9 2-2 2h-2", key: "144t0e" }],
  ["path", { d: "M7 21H5c-1.1 0-2-.9-2-2v-2", key: "rtnfgi" }],
  ["rect", { width: "7", height: "5", x: "7", y: "7", rx: "1", key: "1eyiv7" }],
  ["rect", { width: "7", height: "5", x: "10", y: "12", rx: "1", key: "1qlmkx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = e("Guitar", [
  ["path", { d: "m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z", key: "15ixgv" }],
  ["path", { d: "m17 7-5.1 5.1", key: "l9guh7" }],
  ["circle", { cx: "11.5", cy: "12.5", r: ".5", key: "1evg0a" }],
  [
    "path",
    {
      d: "M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",
      key: "x9fguj"
    }
  ],
  ["path", { d: "m6 16 2 2", key: "16qmzd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = e("Hammer", [
  [
    "path",
    { d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9", key: "1afvon" }
  ],
  ["path", { d: "M17.64 15 22 10.64", key: "zsji6s" }],
  [
    "path",
    {
      d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
      key: "lehyy1"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = e("HandMetal", [
  ["path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4", key: "7eki13" }],
  ["path", { d: "M14 11V9a2 2 0 1 0-4 0v2", key: "94qvcw" }],
  ["path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9", key: "m1ah89" }],
  [
    "path",
    {
      d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",
      key: "t1skq1"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yy = e("Hand", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const el = e("HardDriveDownload", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tl = e("HardDriveUpload", [
  ["path", { d: "m16 6-4-4-4 4", key: "13yo43" }],
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M10 18h.01", key: "h775k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const al = e("HardDrive", [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cl = e("HardHat", [
  [
    "path",
    {
      d: "M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",
      key: "1dej2m"
    }
  ],
  ["path", { d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5", key: "1p9q5i" }],
  ["path", { d: "M4 15v-3a6 6 0 0 1 6-6h0", key: "1uc279" }],
  ["path", { d: "M14 6h0a6 6 0 0 1 6 6v3", key: "1j9mnm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ol = e("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nl = e("Haze", [
  ["path", { d: "m5.2 6.2 1.4 1.4", key: "17imol" }],
  ["path", { d: "M2 13h2", key: "13gyu8" }],
  ["path", { d: "M20 13h2", key: "16rner" }],
  ["path", { d: "m17.4 7.6 1.4-1.4", key: "t4xlah" }],
  ["path", { d: "M22 17H2", key: "1gtaj3" }],
  ["path", { d: "M22 21H2", key: "1gy6en" }],
  ["path", { d: "M16 13a4 4 0 0 0-8 0", key: "1dyczq" }],
  ["path", { d: "M12 5V2.5", key: "1vytko" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rl = e("HdmiPort", [
  [
    "path",
    {
      d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",
      key: "2128wb"
    }
  ],
  ["path", { d: "M7.5 12h9", key: "1t0ckc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const il = e("Heading1", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "m17 12 3-2v8", key: "1hhhft" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dl = e("Heading2", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hl = e("Heading3", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" }],
  ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = e("Heading4", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 10v4h4", key: "13sv97" }],
  ["path", { d: "M21 10v8", key: "1kdml4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ll = e("Heading5", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["path", { d: "M17 13v-3h4", key: "1nvgqp" }],
  [
    "path",
    { d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17", key: "2nebdn" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pl = e("Heading6", [
  ["path", { d: "M4 12h8", key: "17cfdx" }],
  ["path", { d: "M4 18V6", key: "1rz3zl" }],
  ["path", { d: "M12 18V6", key: "zqpxq5" }],
  ["circle", { cx: "19", cy: "16", r: "2", key: "15mx69" }],
  ["path", { d: "M20 10c-2 2-3 3.5-3 6", key: "f35dl0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kl = e("Heading", [
  ["path", { d: "M6 12h12", key: "8npq4p" }],
  ["path", { d: "M6 20V4", key: "1w1bmo" }],
  ["path", { d: "M18 20V4", key: "o2hl4u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sl = e("Headphones", [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ul = e("HeartCrack", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "m12 13-1-1 2-2-3-3 2-2", key: "xjdxli" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ml = e("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "12sd6o"
    }
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vl = e("HeartOff", [
  ["line", { x1: "2", y1: "2", x2: "22", y2: "22", key: "1w4vcy" }],
  [
    "path",
    { d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35", key: "3mpagl" }
  ],
  [
    "path",
    {
      d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",
      key: "1gh3v3"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ml = e("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = e("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = e("Heater", [
  ["path", { d: "M11 8c2-3-2-3 0-6", key: "1ldv5m" }],
  ["path", { d: "M15.5 8c2-3-2-3 0-6", key: "1otqoz" }],
  ["path", { d: "M6 10h.01", key: "1lbq93" }],
  ["path", { d: "M6 14h.01", key: "zudwn7" }],
  ["path", { d: "M10 16v-4", key: "1c25yv" }],
  ["path", { d: "M14 16v-4", key: "1dkbt8" }],
  ["path", { d: "M18 16v-4", key: "1yg9me" }],
  [
    "path",
    { d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3", key: "1ubg90" }
  ],
  ["path", { d: "M5 20v2", key: "1abpe8" }],
  ["path", { d: "M19 20v2", key: "kqn6ft" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fl = e("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ll = e("HelpingHand", [
  [
    "path",
    {
      d: "m3 15 5.12-5.12A3 3 0 0 1 10.24 9H13a2 2 0 1 1 0 4h-2.5m4-.68 4.17-4.89a1.88 1.88 0 0 1 2.92 2.36l-4.2 5.94A3 3 0 0 1 14.96 17H9.83a2 2 0 0 0-1.42.59L7 19",
      key: "nitrv7"
    }
  ],
  ["path", { d: "m2 14 6 6", key: "g6j1uo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = e("Hexagon", [
  [
    "path",
    {
      d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      key: "yt0hxn"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bl = e("Highlighter", [
  ["path", { d: "m9 11-6 6v3h9l3-3", key: "1a3l36" }],
  ["path", { d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4", key: "14a9rk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = e("History", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = e("Home", [
  ["path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = e("HopOff", [
  ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226", key: "10j95a" }],
  ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
  ["path", { d: "M17.5 17.5c-2.5 0-4 0-6-1", key: "11elt5" }],
  ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5", key: "13ezvz" }],
  ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
  ["path", { d: "M22 22c-2 0-3.5-.5-5.5-1.5", key: "1n8vbj" }],
  [
    "path",
    {
      d: "M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618",
      key: "1h85u8"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ql = e("Hop", [
  ["path", { d: "M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1", key: "l0z2za" }],
  ["path", { d: "M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5", key: "1mqyjd" }],
  ["path", { d: "M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1", key: "10xoad" }],
  ["path", { d: "M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5", key: "1a4gpx" }],
  ["path", { d: "M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5", key: "1ufrz1" }],
  ["path", { d: "M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5", key: "1ok5d2" }],
  [
    "path",
    {
      d: "M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z",
      key: "8hlroy"
    }
  ],
  ["path", { d: "M4.5 4.5 3 3c-.184-.185-.184-.816 0-1", key: "q3aj97" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Al = e("Hotel", [
  [
    "path",
    {
      d: "M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z",
      key: "p9z69c"
    }
  ],
  ["path", { d: "m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16", key: "1bvcvh" }],
  ["path", { d: "M8 7h.01", key: "1vti4s" }],
  ["path", { d: "M16 7h.01", key: "1kdx03" }],
  ["path", { d: "M12 7h.01", key: "1ivr5q" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M10 22v-6.5m4 0V22", key: "16gs4s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zl = e("Hourglass", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k"
    }
  ],
  [
    "path",
    { d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2", key: "1vvvr6" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hl = e("IceCream2", [
  [
    "path",
    {
      d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
      key: "g86ewz"
    }
  ],
  ["path", { d: "M12.14 11a3.5 3.5 0 1 1 6.71 0", key: "4k3m1s" }],
  ["path", { d: "M15.5 6.5a3.5 3.5 0 1 0-7 0", key: "zmuahr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = e("IceCream", [
  ["path", { d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11", key: "1v6356" }],
  ["path", { d: "M17 7A5 5 0 0 0 7 7", key: "151p3v" }],
  ["path", { d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4", key: "1sdaij" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = e("ImageDown", [
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10.8", key: "sqts6f" }],
  ["path", { d: "m21 15-3.1-3.1a2 2 0 0 0-2.814.014L6 21", key: "1h47z9" }],
  ["path", { d: "m14 19.5 3 3v-6", key: "1x9jmo" }],
  ["path", { d: "m17 22.5 3-3", key: "xzuz0n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vl = e("ImageMinus", [
  ["path", { d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "m87ecr" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = e("ImageOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83", key: "1bzlo9" }],
  ["line", { x1: "13.5", x2: "6", y1: "13.5", y2: "21", key: "1q0aeu" }],
  ["line", { x1: "18", x2: "21", y1: "12", y2: "15", key: "5mozeu" }],
  [
    "path",
    {
      d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
      key: "mmje98"
    }
  ],
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bl = e("ImagePlus", [
  ["path", { d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7", key: "31hg93" }],
  ["line", { x1: "16", x2: "22", y1: "5", y2: "5", key: "ez7e4s" }],
  ["line", { x1: "19", x2: "19", y1: "2", y2: "8", key: "1gkr8c" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dl = e("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = e("Import", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tl = e("Inbox", [
  ["polyline", { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = e("Indent", [
  ["polyline", { points: "3 8 7 12 3 16", key: "f3rxhf" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ul = e("IndianRupee", [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = e("Infinity", [
  [
    "path",
    {
      d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",
      key: "1z0uae"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zl = e("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gl = e("InspectionPanel", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h.01", key: "7u93v4" }],
  ["path", { d: "M17 7h.01", key: "14a9sn" }],
  ["path", { d: "M7 17h.01", key: "19xn7k" }],
  ["path", { d: "M17 17h.01", key: "1sd3ek" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = e("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wl = e("Italic", [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _l = e("IterationCcw", [
  ["path", { d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8", key: "4znkd0" }],
  ["polyline", { points: "16 14 20 18 16 22", key: "11njsm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xl = e("IterationCw", [
  ["path", { d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4", key: "tuf4su" }],
  ["polyline", { points: "8 22 4 18 8 14", key: "evkj9s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $l = e("JapaneseYen", [
  ["path", { d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3", key: "2ej80x" }],
  ["path", { d: "M6 15h12", key: "1hwgt5" }],
  ["path", { d: "M6 11h12", key: "wf4gp6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kl = e("Joystick", [
  [
    "path",
    {
      d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",
      key: "jg2n2t"
    }
  ],
  ["path", { d: "M6 15v-2", key: "gd6mvg" }],
  ["path", { d: "M12 15V9", key: "8c7uyn" }],
  ["circle", { cx: "12", cy: "6", r: "3", key: "1gm2ql" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ye = e("KanbanSquareDashed", [
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }],
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const le = e("KanbanSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 7v7", key: "1x2jlm" }],
  ["path", { d: "M12 7v4", key: "xawao1" }],
  ["path", { d: "M16 7v9", key: "1hp2iy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jl = e("Kanban", [
  ["path", { d: "M6 5v11", key: "mdvv1e" }],
  ["path", { d: "M12 5v6", key: "14ar3b" }],
  ["path", { d: "M18 5v14", key: "7ji314" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ql = e("KeyRound", [
  ["path", { d: "M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z", key: "167ctg" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yl = e("KeySquare", [
  [
    "path",
    {
      d: "M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",
      key: "9li5bk"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4", key: "1ym3zm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ep = e("Key", [
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = e("KeyboardMusic", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M6 8h4", key: "utf9t1" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "M6 12v4", key: "dy92yo" }],
  ["path", { d: "M10 12v4", key: "1fxnav" }],
  ["path", { d: "M14 12v4", key: "1hft58" }],
  ["path", { d: "M18 12v4", key: "tjjnbz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ap = e("Keyboard", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2", key: "15u882" }],
  ["path", { d: "M6 8h.001", key: "1ej0i3" }],
  ["path", { d: "M10 8h.001", key: "1x2st2" }],
  ["path", { d: "M14 8h.001", key: "1vkmyp" }],
  ["path", { d: "M18 8h.001", key: "kfsenl" }],
  ["path", { d: "M8 12h.001", key: "1sjpby" }],
  ["path", { d: "M12 12h.001", key: "al75ts" }],
  ["path", { d: "M16 12h.001", key: "931bgk" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cp = e("LampCeiling", [
  ["path", { d: "M12 2v5", key: "nd4vlx" }],
  ["path", { d: "M6 7h12l4 9H2l4-9Z", key: "123d64" }],
  ["path", { d: "M9.17 16a3 3 0 1 0 5.66 0", key: "1061mw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = e("LampDesk", [
  ["path", { d: "m14 5-3 3 2 7 8-8-7-2Z", key: "1b0msb" }],
  ["path", { d: "m14 5-3 3-3-3 3-3 3 3Z", key: "1uemms" }],
  ["path", { d: "M9.5 6.5 4 12l3 6", key: "1bx08v" }],
  ["path", { d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z", key: "wap775" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const np = e("LampFloor", [
  ["path", { d: "M9 2h6l3 7H6l3-7Z", key: "wcx6mj" }],
  ["path", { d: "M12 9v13", key: "3n1su1" }],
  ["path", { d: "M9 22h6", key: "1rlq3v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = e("LampWallDown", [
  ["path", { d: "M11 13h6l3 7H8l3-7Z", key: "9n3qlo" }],
  ["path", { d: "M14 13V8a2 2 0 0 0-2-2H8", key: "1hu4hb" }],
  ["path", { d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z", key: "s053bc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ip = e("LampWallUp", [
  ["path", { d: "M11 4h6l3 7H8l3-7Z", key: "11x1ee" }],
  ["path", { d: "M14 11v5a2 2 0 0 1-2 2H8", key: "eutp5o" }],
  ["path", { d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z", key: "1iuthr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dp = e("Lamp", [
  ["path", { d: "M8 2h8l4 10H4L8 2Z", key: "9dma5w" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
  ["path", { d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z", key: "mwf4oh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hp = e("LandPlot", [
  ["path", { d: "m12 8 6-3-6-3v10", key: "mvpnpy" }],
  [
    "path",
    {
      d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",
      key: "ek95tt"
    }
  ],
  ["path", { d: "m6.49 12.85 11.02 6.3", key: "1kt42w" }],
  ["path", { d: "M17.51 12.85 6.5 19.15", key: "v55bdg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yp = e("Landmark", [
  ["line", { x1: "3", x2: "21", y1: "22", y2: "22", key: "j8o0r" }],
  ["line", { x1: "6", x2: "6", y1: "18", y2: "11", key: "10tf0k" }],
  ["line", { x1: "10", x2: "10", y1: "18", y2: "11", key: "54lgf6" }],
  ["line", { x1: "14", x2: "14", y1: "18", y2: "11", key: "380y" }],
  ["line", { x1: "18", x2: "18", y1: "18", y2: "11", key: "1kevvc" }],
  ["polygon", { points: "12 2 20 7 4 7", key: "jkujk7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = e("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pp = e("Laptop2", [
  ["rect", { width: "18", height: "12", x: "3", y: "4", rx: "2", ry: "2", key: "1qhy41" }],
  ["line", { x1: "2", x2: "22", y1: "20", y2: "20", key: "ni3hll" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kp = e("Laptop", [
  [
    "path",
    {
      d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
      key: "tarvll"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sp = e("LassoSelect", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  ["path", { d: "M7 16.93c.96.43 1.96.74 2.99.91", key: "ybbtv3" }],
  [
    "path",
    {
      d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",
      key: "gt5e1w"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }],
  [
    "path",
    {
      d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",
      key: "1bawls"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const up = e("Lasso", [
  ["path", { d: "M7 22a5 5 0 0 1-2-4", key: "umushi" }],
  [
    "path",
    {
      d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
      key: "146dds"
    }
  ],
  ["path", { d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", key: "bq3ynw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mp = e("Laugh", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z", key: "b2q4dd" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vp = e("Layers2", [
  [
    "path",
    {
      d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",
      key: "1cuww1"
    }
  ],
  [
    "path",
    {
      d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",
      key: "pdlvxu"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mp = e("Layers3", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  [
    "path",
    {
      d: "m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1e5n1m"
    }
  ],
  [
    "path",
    {
      d: "m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",
      key: "1iwflc"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xp = e("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gp = e("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fp = e("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lp = e("LayoutList", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["path", { d: "M14 4h7", key: "3xa0d5" }],
  ["path", { d: "M14 9h7", key: "1icrd9" }],
  ["path", { d: "M14 15h7", key: "1mj8o2" }],
  ["path", { d: "M14 20h7", key: "11slyb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wp = e("LayoutPanelLeft", [
  ["rect", { width: "7", height: "18", x: "3", y: "3", rx: "1", key: "2obqm" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bp = e("LayoutPanelTop", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ip = e("LayoutTemplate", [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cp = e("Leaf", [
  [
    "path",
    {
      d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
      key: "nnexq3"
    }
  ],
  ["path", { d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12", key: "mt58a7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sp = e("LeafyGreen", [
  [
    "path",
    {
      d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",
      key: "1134nt"
    }
  ],
  ["path", { d: "M2 22 17 7", key: "1q7jp2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qp = e("LibraryBig", [
  ["rect", { width: "8", height: "18", x: "3", y: "3", rx: "1", key: "oynpb5" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  [
    "path",
    {
      d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",
      key: "1qboyk"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ap = e("LibrarySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7v10", key: "d5nglc" }],
  ["path", { d: "M11 7v10", key: "pptsnr" }],
  ["path", { d: "m15 7 2 10", key: "1m7qm5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zp = e("Library", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hp = e("LifeBuoy", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.93 4.93 4.24 4.24", key: "1ymg45" }],
  ["path", { d: "m14.83 9.17 4.24-4.24", key: "1cb5xl" }],
  ["path", { d: "m14.83 14.83 4.24 4.24", key: "q42g0n" }],
  ["path", { d: "m9.17 14.83-4.24 4.24", key: "bqpfvv" }],
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jp = e("Ligature", [
  ["path", { d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2", key: "1rtphz" }],
  ["path", { d: "M6 12h4", key: "a4o3ry" }],
  ["path", { d: "M14 12h2v8", key: "c1fccl" }],
  ["path", { d: "M6 20h4", key: "1i6q5t" }],
  ["path", { d: "M14 20h4", key: "lzx1xo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pp = e("LightbulbOff", [
  ["path", { d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5", key: "1fkcox" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5", key: "10m8kw" }],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vp = e("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb"
    }
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fp = e("LineChart", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "m19 9-5 5-4-4-3 3", key: "2osh9i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bp = e("Link2Off", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7", key: "10o201" }],
  ["path", { d: "M15 7h2a5 5 0 0 1 4 8", key: "1d3206" }],
  ["line", { x1: "8", x2: "12", y1: "12", y2: "12", key: "rvw6j4" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dp = e("Link2", [
  ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
  ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
  ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rp = e("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tp = e("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Op = e("ListChecks", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Up = e("ListEnd", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M10 18H3", key: "13769t" }],
  ["path", { d: "M21 6v10a2 2 0 0 1-2 2h-5", key: "ilrcs8" }],
  ["path", { d: "m16 16-2 2 2 2", key: "kkc6pm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ep = e("ListFilter", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zp = e("ListMinus", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gp = e("ListMusic", [
  ["path", { d: "M21 15V6", key: "h1cx4g" }],
  ["path", { d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z", key: "8saifv" }],
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Np = e("ListOrdered", [
  ["line", { x1: "10", x2: "21", y1: "6", y2: "6", key: "76qw6h" }],
  ["line", { x1: "10", x2: "21", y1: "12", y2: "12", key: "16nom4" }],
  ["line", { x1: "10", x2: "21", y1: "18", y2: "18", key: "u3jurt" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wp = e("ListPlus", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M18 9v6", key: "1twb98" }],
  ["path", { d: "M21 12h-6", key: "bt1uis" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _p = e("ListRestart", [
  ["path", { d: "M21 6H3", key: "1jwq7v" }],
  ["path", { d: "M7 12H3", key: "13ou7f" }],
  ["path", { d: "M7 18H3", key: "1sijw9" }],
  [
    "path",
    {
      d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",
      key: "qth677"
    }
  ],
  ["path", { d: "M11 10v4h4", key: "172dkj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xp = e("ListStart", [
  ["path", { d: "M16 12H3", key: "1a2rj7" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "M10 6H3", key: "lf8lx7" }],
  ["path", { d: "M21 18V8a2 2 0 0 0-2-2h-5", key: "1hghli" }],
  ["path", { d: "m16 8-2-2 2-2", key: "160uvd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $p = e("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kp = e("ListTree", [
  ["path", { d: "M21 12h-8", key: "1bmf0i" }],
  ["path", { d: "M21 6H8", key: "1pqkrb" }],
  ["path", { d: "M21 18h-8", key: "1tm79t" }],
  ["path", { d: "M3 6v4c0 1.1.9 2 2 2h3", key: "1ywdgy" }],
  ["path", { d: "M3 10v6c0 1.1.9 2 2 2h3", key: "2wc746" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jp = e("ListVideo", [
  ["path", { d: "M12 12H3", key: "18klou" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M12 18H3", key: "11ftsu" }],
  ["path", { d: "m16 12 5 3-5 3v-6Z", key: "zpskkp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qp = e("ListX", [
  ["path", { d: "M11 12H3", key: "51ecnj" }],
  ["path", { d: "M16 6H3", key: "1wxfjs" }],
  ["path", { d: "M16 18H3", key: "12xzn7" }],
  ["path", { d: "m19 10-4 4", key: "1tz659" }],
  ["path", { d: "m15 10 4 4", key: "1n7nei" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yp = e("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ek = e("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tk = e("Loader", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "6", key: "gza1u7" }],
  ["line", { x1: "12", x2: "12", y1: "18", y2: "22", key: "1qhbu9" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "4.93", y2: "7.76", key: "xae44r" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "16.24", y2: "19.07", key: "bxnmvf" }],
  ["line", { x1: "2", x2: "6", y1: "12", y2: "12", key: "89khin" }],
  ["line", { x1: "18", x2: "22", y1: "12", y2: "12", key: "pb8tfm" }],
  ["line", { x1: "4.93", x2: "7.76", y1: "19.07", y2: "16.24", key: "1uxjnu" }],
  ["line", { x1: "16.24", x2: "19.07", y1: "7.76", y2: "4.93", key: "6duxfx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ak = e("LocateFixed", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ck = e("LocateOff", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  [
    "path",
    {
      d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
      key: "1oh7ia"
    }
  ],
  [
    "path",
    {
      d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
      key: "3qdecy"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ok = e("Locate", [
  ["line", { x1: "2", x2: "5", y1: "12", y2: "12", key: "bvdh0s" }],
  ["line", { x1: "19", x2: "22", y1: "12", y2: "12", key: "1tbv5k" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "5", key: "11lu5j" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
  ["circle", { cx: "12", cy: "12", r: "7", key: "fim9np" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nk = e("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rk = e("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ik = e("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dk = e("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hk = e("Lollipop", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ["path", { d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0", key: "107gwy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yk = e("Luggage", [
  [
    "path",
    {
      d: "M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",
      key: "1h5fkc"
    }
  ],
  ["path", { d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14", key: "1l99gc" }],
  ["path", { d: "M10 20h4", key: "ni2waw" }],
  ["circle", { cx: "16", cy: "20", r: "2", key: "1vifvg" }],
  ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lk = e("MSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 16V8l4 4 4-4v8", key: "141u4e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pk = e("Magnet", [
  [
    "path",
    {
      d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",
      key: "1i3lhw"
    }
  ],
  ["path", { d: "m5 8 4 4", key: "j6kj7e" }],
  ["path", { d: "m12 15 4 4", key: "lnac28" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kk = e("MailCheck", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sk = e("MailMinus", [
  ["path", { d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "fuxbkv" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uk = e("MailOpen", [
  [
    "path",
    {
      d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",
      key: "1jhwl8"
    }
  ],
  ["path", { d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10", key: "1qfld7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mk = e("MailPlus", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8", key: "12jkf8" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M16 19h6", key: "xwg31i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vk = e("MailQuestion", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  [
    "path",
    {
      d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",
      key: "7z9rxb"
    }
  ],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mk = e("MailSearch", [
  ["path", { d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5", key: "w80f2v" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z", key: "mgbru4" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.5-1.5", key: "1x83k4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xk = e("MailWarning", [
  ["path", { d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5", key: "e61zoh" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "M20 14v4", key: "1hm744" }],
  ["path", { d: "M20 22v.01", key: "12bgn6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gk = e("MailX", [
  ["path", { d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9", key: "1j9vog" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
  ["path", { d: "m17 17 4 4", key: "1b3523" }],
  ["path", { d: "m21 17-4 4", key: "uinynz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fk = e("Mail", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lk = e("Mailbox", [
  [
    "path",
    {
      d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",
      key: "1lbycx"
    }
  ],
  ["polyline", { points: "15,9 18,9 18,11", key: "1pm9c0" }],
  ["path", { d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0", key: "n6nfvi" }],
  ["line", { x1: "6", x2: "7", y1: "10", y2: "10", key: "1e2scm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wk = e("Mails", [
  ["rect", { width: "16", height: "13", x: "6", y: "4", rx: "2", key: "1drq3f" }],
  ["path", { d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7", key: "xn252p" }],
  ["path", { d: "M2 8v11c0 1.1.9 2 2 2h14", key: "n13cji" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bk = e("MapPinOff", [
  [
    "path",
    { d: "M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5", key: "12a8pk" }
  ],
  [
    "path",
    {
      d: "M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",
      key: "1r9f6y"
    }
  ],
  [
    "path",
    { d: "M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13", key: "erynq7" }
  ],
  ["path", { d: "M14.9 9.25a3 3 0 0 0-2.15-2.16", key: "1hwwmx" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ik = e("MapPin", [
  ["path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ck = e("MapPinned", [
  ["path", { d: "M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0", key: "yrbn30" }],
  ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
  [
    "path",
    {
      d: "M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",
      key: "112zkj"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sk = e("Map", [
  ["polygon", { points: "3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21", key: "ok2ie8" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "18", key: "w34qz5" }],
  ["line", { x1: "15", x2: "15", y1: "6", y2: "21", key: "volv9a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qk = e("Martini", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M12 11v11", key: "ur9y6a" }],
  ["path", { d: "m19 3-7 8-7-8Z", key: "1sgpiw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ak = e("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zk = e("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hk = e("Medal", [
  [
    "path",
    {
      d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",
      key: "143lza"
    }
  ],
  ["path", { d: "M11 12 5.12 2.2", key: "qhuxz6" }],
  ["path", { d: "m13 12 5.88-9.8", key: "hbye0f" }],
  ["path", { d: "M8 7h8", key: "i86dvs" }],
  ["circle", { cx: "12", cy: "17", r: "5", key: "qbz8iq" }],
  ["path", { d: "M12 18v-2h-.5", key: "fawc4q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jk = e("MegaphoneOff", [
  ["path", { d: "M9.26 9.26 3 11v3l14.14 3.14", key: "3429n" }],
  ["path", { d: "M21 15.34V6l-7.31 2.03", key: "4o1dh8" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pk = e("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vk = e("Meh", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "8", x2: "16", y1: "15", y2: "15", key: "1xb1d9" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fk = e("MemoryStick", [
  ["path", { d: "M6 19v-3", key: "1nvgqn" }],
  ["path", { d: "M10 19v-3", key: "iu8nkm" }],
  ["path", { d: "M14 19v-3", key: "kcehxu" }],
  ["path", { d: "M18 19v-3", key: "1vh91z" }],
  ["path", { d: "M8 11V9", key: "63erz4" }],
  ["path", { d: "M16 11V9", key: "fru6f3" }],
  ["path", { d: "M12 11V9", key: "ha00sb" }],
  ["path", { d: "M2 15h20", key: "16ne18" }],
  [
    "path",
    {
      d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
      key: "lhddv3"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bk = e("MenuSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 8h10", key: "1jw688" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dk = e("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rk = e("Merge", [
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22", key: "1hyw0i" }],
  ["path", { d: "m20 22-5-5", key: "1m27yz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tk = e("MessageCircleCode", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 10 2 2-2 2", key: "1kkmpt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ok = e("MessageCircleDashed", [
  ["path", { d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1", key: "16ll65" }],
  ["path", { d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1", key: "1nq77a" }],
  ["path", { d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5", key: "1sf7wn" }],
  ["path", { d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1", key: "x1hs5g" }],
  ["path", { d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1", key: "19m18z" }],
  ["path", { d: "M3.5 17.5 2 22l4.5-1.5", key: "1f36qi" }],
  ["path", { d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5", key: "1vz3ju" }],
  ["path", { d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1", key: "19f9do" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uk = e("MessageCircleHeart", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  [
    "path",
    {
      d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",
      key: "43lnbm"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ek = e("MessageCircleMore", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zk = e("MessageCircleOff", [
  ["path", { d: "M20.5 14.9A9 9 0 0 0 9.1 3.5", key: "1iebmn" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7", key: "1ov8ce" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gk = e("MessageCirclePlus", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nk = e("MessageCircleQuestion", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wk = e("MessageCircleReply", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }],
  ["path", { d: "M7 12h7a2 2 0 0 1 2 2v1", key: "1gheu4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _k = e("MessageCircleWarning", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xk = e("MessageCircleX", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $k = e("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kk = e("MessageSquareCode", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 8-2 2 2 2", key: "19bv1o" }],
  ["path", { d: "m14 8 2 2-2 2", key: "1whylv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jk = e("MessageSquareDashed", [
  ["path", { d: "M3 6V5c0-1.1.9-2 2-2h2", key: "9usibi" }],
  ["path", { d: "M11 3h3", key: "1c3ji7" }],
  ["path", { d: "M18 3h1c1.1 0 2 .9 2 2", key: "19esxn" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M21 15c0 1.1-.9 2-2 2h-1", key: "1fo1j8" }],
  ["path", { d: "M14 17h-3", key: "1w4p2m" }],
  ["path", { d: "m7 17-4 4v-5", key: "ph9x1h" }],
  ["path", { d: "M3 12v-2", key: "856n1q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qk = e("MessageSquareDiff", [
  ["path", { d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2", key: "1xuzuj" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yk = e("MessageSquareDot", [
  ["path", { d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7", key: "uodpkb" }],
  ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e4 = e("MessageSquareHeart", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  [
    "path",
    {
      d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",
      key: "1blaws"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t4 = e("MessageSquareMore", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a4 = e("MessageSquareOff", [
  ["path", { d: "M21 15V5a2 2 0 0 0-2-2H9", key: "43el77" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10", key: "pwpm4a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c4 = e("MessageSquarePlus", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v6", key: "lw1j43" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o4 = e("MessageSquareQuote", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M8 12a2 2 0 0 0 2-2V8H8", key: "1jfesj" }],
  ["path", { d: "M14 12a2 2 0 0 0 2-2V8h-2", key: "1dq9mh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n4 = e("MessageSquareReply", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m10 7-3 3 3 3", key: "1eugdv" }],
  ["path", { d: "M17 13v-1a2 2 0 0 0-2-2H7", key: "ernfh3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r4 = e("MessageSquareShare", [
  ["path", { d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7", key: "tqtdkg" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "m16 8 5-5", key: "15mbrl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i4 = e("MessageSquareText", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M13 8H7", key: "14i4kc" }],
  ["path", { d: "M17 12H7", key: "16if0g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d4 = e("MessageSquareWarning", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "M12 7v2", key: "stiyo7" }],
  ["path", { d: "M12 13h.01", key: "y0uutt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h4 = e("MessageSquareX", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }],
  ["path", { d: "m14.5 7.5-5 5", key: "3lb6iw" }],
  ["path", { d: "m9.5 7.5 5 5", key: "ko136h" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y4 = e("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l4 = e("MessagesSquare", [
  ["path", { d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z", key: "16vlm8" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p4 = e("Mic2", [
  ["path", { d: "m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12", key: "zoua8r" }],
  ["circle", { cx: "17", cy: "7", r: "5", key: "1fomce" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k4 = e("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s4 = e("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u4 = e("Microscope", [
  ["path", { d: "M6 18h8", key: "1borvv" }],
  ["path", { d: "M3 22h18", key: "8prr45" }],
  ["path", { d: "M14 22a7 7 0 1 0 0-14h-1", key: "1jwaiy" }],
  ["path", { d: "M9 14h2", key: "197e7h" }],
  ["path", { d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z", key: "1bmzmy" }],
  ["path", { d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3", key: "1drr47" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M4 = e("Microwave", [
  ["rect", { width: "20", height: "15", x: "2", y: "4", rx: "2", key: "2no95f" }],
  ["rect", { width: "8", height: "7", x: "6", y: "8", rx: "1", key: "zh9wx" }],
  ["path", { d: "M18 8v7", key: "o5zi4n" }],
  ["path", { d: "M6 19v2", key: "1loha6" }],
  ["path", { d: "M18 19v2", key: "1dawf0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v4 = e("Milestone", [
  ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z", key: "1mp5s7" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }],
  ["path", { d: "M12 3v3", key: "1n5kay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m4 = e("MilkOff", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",
      key: "y0ejgx"
    }
  ],
  ["path", { d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435", key: "iaxqsy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x4 = e("Milk", [
  ["path", { d: "M8 2h8", key: "1ssgc1" }],
  [
    "path",
    {
      d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",
      key: "qtp12x"
    }
  ],
  ["path", { d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "ygeh44" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g4 = e("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f4 = e("Minimize", [
  ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
  ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
  ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
  ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L4 = e("MinusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w4 = e("MinusSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b4 = e("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I4 = e("MonitorCheck", [
  ["path", { d: "m9 10 2 2 4-4", key: "1gnqz4" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C4 = e("MonitorDot", [
  ["circle", { cx: "19", cy: "6", r: "3", key: "108a5v" }],
  ["path", { d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9", key: "1fet9y" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S4 = e("MonitorDown", [
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["path", { d: "m15 10-3 3-3-3", key: "lzhmyn" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q4 = e("MonitorOff", [
  ["path", { d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2", key: "k0q8oc" }],
  ["path", { d: "M22 15V5a2 2 0 0 0-2-2H9", key: "cp1ac0" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A4 = e("MonitorPause", [
  ["path", { d: "M10 13V7", key: "1u13u9" }],
  ["path", { d: "M14 13V7", key: "1vj9om" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z4 = e("MonitorPlay", [
  ["path", { d: "m10 7 5 3-5 3Z", key: "29ljg6" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H4 = e("MonitorSmartphone", [
  ["path", { d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8", key: "10dyio" }],
  ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
  ["path", { d: "M7 19h5", key: "qswx4l" }],
  ["rect", { width: "6", height: "10", x: "16", y: "12", rx: "2", key: "1egngj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j4 = e("MonitorSpeaker", [
  ["path", { d: "M5.5 20H8", key: "1k40s5" }],
  ["path", { d: "M17 9h.01", key: "1j24nn" }],
  ["rect", { width: "10", height: "16", x: "12", y: "4", rx: "2", key: "ixliua" }],
  ["path", { d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4", key: "1mp6e1" }],
  ["circle", { cx: "17", cy: "15", r: "1", key: "tqvash" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P4 = e("MonitorStop", [
  ["rect", { x: "9", y: "7", width: "6", height: "6", key: "4xvc6r" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V4 = e("MonitorUp", [
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }],
  ["path", { d: "M12 13V7", key: "h0r20n" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F4 = e("MonitorX", [
  ["path", { d: "m14.5 12.5-5-5", key: "1jahn5" }],
  ["path", { d: "m9.5 12.5 5-5", key: "1k2t7b" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B4 = e("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D4 = e("MoonStar", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
  ["path", { d: "M19 3v4", key: "vgv24u" }],
  ["path", { d: "M21 5h-4", key: "1wcg1f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R4 = e("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T4 = e("MoreHorizontal", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O4 = e("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U4 = e("MountainSnow", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }],
  [
    "path",
    { d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19", key: "1pvmmp" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E4 = e("Mountain", [
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z4 = e("MousePointer2", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G4 = e("MousePointerClick", [
  ["path", { d: "m9 9 5 12 1.8-5.2L21 14Z", key: "1b76lo" }],
  ["path", { d: "M7.2 2.2 8 5.1", key: "1cfko1" }],
  ["path", { d: "m5.1 8-2.9-.8", key: "1go3kf" }],
  ["path", { d: "M14 4.1 12 6", key: "ita8i4" }],
  ["path", { d: "m6 12-1.9 2", key: "mnht97" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N4 = e("MousePointerSquareDashed", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h2", key: "1qve2z" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v2", key: "p14lih" }],
  ["path", { d: "M3 14v1", key: "vnatye" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = e("MousePointerSquare", [
  ["path", { d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6", key: "14rsvq" }],
  ["path", { d: "m12 12 4 10 1.7-4.3L22 16Z", key: "64ilsv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W4 = e("MousePointer", [
  ["path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" }],
  ["path", { d: "m13 13 6 6", key: "1nhxnf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _4 = e("Mouse", [
  ["rect", { x: "5", y: "2", width: "14", height: "20", rx: "7", key: "11ol66" }],
  ["path", { d: "M12 6v4", key: "16clxf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = e("Move3d", [
  ["path", { d: "M5 3v16h16", key: "1mqmf9" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }],
  ["path", { d: "m2 6 3-3 3 3", key: "tkyvxa" }],
  ["path", { d: "m18 16 3 3-3 3", key: "1d4glt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X4 = e("MoveDiagonal2", [
  ["polyline", { points: "5 11 5 5 11 5", key: "ncfzxk" }],
  ["polyline", { points: "19 13 19 19 13 19", key: "1mk7hk" }],
  ["line", { x1: "5", x2: "19", y1: "5", y2: "19", key: "mcyte3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $4 = e("MoveDiagonal", [
  ["polyline", { points: "13 5 19 5 19 11", key: "11219e" }],
  ["polyline", { points: "11 19 5 19 5 13", key: "sfq3wq" }],
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K4 = e("MoveDownLeft", [
  ["path", { d: "M11 19H5V13", key: "1akmht" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J4 = e("MoveDownRight", [
  ["path", { d: "M19 13V19H13", key: "10vkzq" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q4 = e("MoveDown", [
  ["path", { d: "M8 18L12 22L16 18", key: "cskvfv" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y4 = e("MoveHorizontal", [
  ["polyline", { points: "18 8 22 12 18 16", key: "1hqrds" }],
  ["polyline", { points: "6 8 2 12 6 16", key: "f0ernq" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const es = e("MoveLeft", [
  ["path", { d: "M6 8L2 12L6 16", key: "kyvwex" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = e("MoveRight", [
  ["path", { d: "M18 8L22 12L18 16", key: "1r0oui" }],
  ["path", { d: "M2 12H22", key: "1m8cig" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = e("MoveUpLeft", [
  ["path", { d: "M5 11V5H11", key: "3q78g9" }],
  ["path", { d: "M5 5L19 19", key: "5zm2fv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cs = e("MoveUpRight", [
  ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
  ["path", { d: "M19 5L5 19", key: "72u4yj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const os = e("MoveUp", [
  ["path", { d: "M8 6L12 2L16 6", key: "1yvkyx" }],
  ["path", { d: "M12 2V22", key: "r89rzk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ns = e("MoveVertical", [
  ["polyline", { points: "8 18 12 22 16 18", key: "1uutw3" }],
  ["polyline", { points: "8 6 12 2 16 6", key: "d60sxy" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rs = e("Move", [
  ["polyline", { points: "5 9 2 12 5 15", key: "1r5uj5" }],
  ["polyline", { points: "9 5 12 2 15 5", key: "5v383o" }],
  ["polyline", { points: "15 19 12 22 9 19", key: "g7qi8m" }],
  ["polyline", { points: "19 9 22 12 19 15", key: "tpp73q" }],
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = e("Music2", [
  ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
  ["path", { d: "M12 18V2l7 4", key: "g04rme" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = e("Music3", [
  ["circle", { cx: "12", cy: "18", r: "4", key: "m3r9ws" }],
  ["path", { d: "M16 18V2", key: "40x2m5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hs = e("Music4", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["path", { d: "m9 9 12-2", key: "1e64n2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ys = e("Music", [
  ["path", { d: "M9 18V5l12-2v13", key: "1jmyc2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["circle", { cx: "18", cy: "16", r: "3", key: "1hluhg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = e("Navigation2Off", [
  ["path", { d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17", key: "qoq2o2" }],
  ["path", { d: "M14.53 8.88 12 2l-1.17 3.17", key: "k3sjzy" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = e("Navigation2", [
  ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ks = e("NavigationOff", [
  ["path", { d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43", key: "1vdtb7" }],
  ["path", { d: "M17.39 11.73 22 2l-9.73 4.61", key: "tya3r6" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ss = e("Navigation", [
  ["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = e("Network", [
  ["rect", { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" }],
  ["rect", { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" }],
  ["rect", { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" }],
  ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
  ["path", { d: "M12 12V8", key: "2874zd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ms = e("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x"
    }
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = e("Nfc", [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = e("NotebookPen", [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["path", { d: "M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z", key: "1dba1m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = e("NotebookTabs", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M15 2v20", key: "dcj49h" }],
  ["path", { d: "M15 7h5", key: "1xj5lc" }],
  ["path", { d: "M15 12h5", key: "w5shd9" }],
  ["path", { d: "M15 17h5", key: "1qaofu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = e("NotebookText", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M9.5 8h5", key: "11mslq" }],
  ["path", { d: "M9.5 12H16", key: "ktog6x" }],
  ["path", { d: "M9.5 16H14", key: "p1seyn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fs = e("Notebook", [
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M16 2v20", key: "rotuqe" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ls = e("NotepadTextDashed", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M16 4h2a2 2 0 0 1 2 2v2", key: "j91f56" }],
  ["path", { d: "M20 12v2", key: "w8o0tu" }],
  ["path", { d: "M20 18v2a2 2 0 0 1-2 2h-1", key: "1c9ggx" }],
  ["path", { d: "M13 22h-2", key: "191ugt" }],
  ["path", { d: "M7 22H6a2 2 0 0 1-2-2v-2", key: "1rt9px" }],
  ["path", { d: "M4 14v-2", key: "1v0sqh" }],
  ["path", { d: "M4 8V6a2 2 0 0 1 2-2h2", key: "1mwabg" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = e("NotepadText", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "16", height: "18", x: "4", y: "4", rx: "2", key: "1u9h20" }],
  ["path", { d: "M8 10h6", key: "3oa6kw" }],
  ["path", { d: "M8 14h8", key: "1fgep2" }],
  ["path", { d: "M8 18h5", key: "17enja" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bs = e("NutOff", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",
      key: "1xcvy9"
    }
  ],
  ["path", { d: "M19 10v3.343", key: "163tfc" }],
  [
    "path",
    {
      d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",
      key: "17914v"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Is = e("Nut", [
  ["path", { d: "M12 4V2", key: "1k5q1u" }],
  [
    "path",
    {
      d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",
      key: "1tgyif"
    }
  ],
  [
    "path",
    {
      d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",
      key: "tnsqj"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cs = e("Octagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = e("Option", [
  ["path", { d: "M3 3h6l6 18h6", key: "ph9rgk" }],
  ["path", { d: "M14 3h7", key: "16f0ms" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qs = e("Orbit", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M10.4 21.9a10 10 0 0 0 9.941-15.416", key: "eohfx2" }],
  ["path", { d: "M13.5 2.1a10 10 0 0 0-9.841 15.416", key: "19pvbm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = e("Outdent", [
  ["polyline", { points: "7 8 3 12 7 16", key: "2j60jr" }],
  ["line", { x1: "21", x2: "11", y1: "12", y2: "12", key: "1fxxak" }],
  ["line", { x1: "21", x2: "11", y1: "6", y2: "6", key: "asgu94" }],
  ["line", { x1: "21", x2: "11", y1: "18", y2: "18", key: "13dsj7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zs = e("Package2", [
  ["path", { d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z", key: "1ront0" }],
  ["path", { d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9", key: "19h2x1" }],
  ["path", { d: "M12 3v6", key: "1holv5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hs = e("PackageCheck", [
  ["path", { d: "m16 16 2 2 4-4", key: "gfu2re" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const js = e("PackageMinus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ps = e("PackageOpen", [
  [
    "path",
    {
      d: "M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z",
      key: "1vy178"
    }
  ],
  [
    "path",
    {
      d: "m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z",
      key: "s3bv25"
    }
  ],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "13", key: "1o4xyi" }],
  [
    "path",
    {
      d: "M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5",
      key: "1na2nq"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vs = e("PackagePlus", [
  ["path", { d: "M16 16h6", key: "100bgy" }],
  ["path", { d: "M19 13v6", key: "85cyf1" }],
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fs = e("PackageSearch", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["circle", { cx: "18.5", cy: "15.5", r: "2.5", key: "b5zd12" }],
  ["path", { d: "M20.27 17.27 22 19", key: "1l4muz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bs = e("PackageX", [
  [
    "path",
    {
      d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",
      key: "e7tb2h"
    }
  ],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["line", { x1: "12", x2: "12", y1: "22", y2: "12", key: "a4e8g8" }],
  ["path", { d: "m17 13 5 5m-5 0 5-5", key: "im3w4b" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ds = e("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay"
    }
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rs = e("PaintBucket", [
  [
    "path",
    { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z", key: "irua1i" }
  ],
  ["path", { d: "m5 2 5 5", key: "1lls2c" }],
  ["path", { d: "M2 13h15", key: "1hkzvu" }],
  ["path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z", key: "xk76lq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ts = e("Paintbrush2", [
  [
    "path",
    { d: "M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z", key: "1c8kta" }
  ],
  ["path", { d: "M6 12V2h12v10", key: "1esbnf" }],
  ["path", { d: "M14 2v4", key: "qmzblu" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Os = e("Paintbrush", [
  [
    "path",
    {
      d: "M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",
      key: "m6k5sh"
    }
  ],
  ["path", { d: "M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7", key: "arzq70" }],
  ["path", { d: "M14.5 17.5 4.5 15", key: "s7fvrz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Us = e("Palette", [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", key: "1xcu5" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", key: "736e4u" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", key: "clrty" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", key: "1s4xz9" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Es = e("Palmtree", [
  ["path", { d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4", key: "foxbe7" }],
  [
    "path",
    { d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3", key: "18arnh" }
  ],
  [
    "path",
    {
      d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35z",
      key: "epoumf"
    }
  ],
  ["path", { d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14", key: "ft0feo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zs = e("PanelBottomClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m15 8-3 3-3-3", key: "1oxy1z" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const se = e("PanelBottomDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 15h1", key: "171nev" }],
  ["path", { d: "M19 15h2", key: "1vnucp" }],
  ["path", { d: "M3 15h2", key: "8bym0q" }],
  ["path", { d: "M9 15h1", key: "1tg3ks" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gs = e("PanelBottomOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }],
  ["path", { d: "m9 10 3-3 3 3", key: "11gsxs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ns = e("PanelBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ue = e("PanelLeftClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Me = e("PanelLeftDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 14v1", key: "askpd8" }],
  ["path", { d: "M9 19v2", key: "16tejx" }],
  ["path", { d: "M9 3v2", key: "1noubl" }],
  ["path", { d: "M9 9v1", key: "19ebxg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = e("PanelLeftOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const me = e("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ws = e("PanelRightClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m8 9 3 3-3 3", key: "12hl5m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = e("PanelRightDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 14v1", key: "ilsfch" }],
  ["path", { d: "M15 19v2", key: "1fst2f" }],
  ["path", { d: "M15 3v2", key: "z204g4" }],
  ["path", { d: "M15 9v1", key: "z2a8b1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _s = e("PanelRightOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["path", { d: "m10 15-3-3 3-3", key: "1pgupc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xs = e("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $s = e("PanelTopClose", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m9 16 3-3 3 3", key: "1idcnm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ge = e("PanelTopDashed", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M14 9h1", key: "l0svgy" }],
  ["path", { d: "M19 9h2", key: "te2zfg" }],
  ["path", { d: "M3 9h2", key: "1h4ldw" }],
  ["path", { d: "M9 9h1", key: "15jzuz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ks = e("PanelTopOpen", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "m15 14-3 3-3-3", key: "g215vf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Js = e("PanelTop", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qs = e("PanelsLeftBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "M9 15h12", key: "5ijen5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ys = e("PanelsRightBottom", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 15h12", key: "1wkqb3" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fe = e("PanelsTopLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e5 = e("Paperclip", [
  [
    "path",
    {
      d: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
      key: "1u3ebp"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t5 = e("Parentheses", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a5 = e("ParkingCircleOff", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m5 5 14 14", key: "11anup" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.34", key: "a9qo08" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c5 = e("ParkingCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o5 = e("ParkingMeter", [
  ["path", { d: "M9 9a3 3 0 1 1 6 0", key: "jdoeu8" }],
  ["path", { d: "M12 12v3", key: "158kv8" }],
  ["path", { d: "M11 15h2", key: "199qp6" }],
  [
    "path",
    {
      d: "M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",
      key: "1l50wn"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n5 = e("ParkingSquareOff", [
  ["path", { d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41", key: "9l1ft6" }],
  ["path", { d: "M3 8.7V19a2 2 0 0 0 2 2h10.3", key: "17knke" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M13 13a3 3 0 1 0 0-6H9v2", key: "uoagbd" }],
  ["path", { d: "M9 17v-2.3", key: "1jxgo2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r5 = e("ParkingSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 17V7h4a3 3 0 0 1 0 6H9", key: "1dfk2c" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i5 = e("PartyPopper", [
  ["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }],
  ["path", { d: "M4 3h.01", key: "1vcuye" }],
  ["path", { d: "M22 8h.01", key: "1mrtc2" }],
  ["path", { d: "M15 2h.01", key: "1cjtqr" }],
  ["path", { d: "M22 20h.01", key: "1mrys2" }],
  [
    "path",
    {
      d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
      key: "bpx1uq"
    }
  ],
  [
    "path",
    { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17", key: "1pd0s7" }
  ],
  [
    "path",
    { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7", key: "zq5xbz" }
  ],
  [
    "path",
    {
      d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
      key: "4kbmks"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d5 = e("PauseCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "10", x2: "10", y1: "15", y2: "9", key: "c1nkhi" }],
  ["line", { x1: "14", x2: "14", y1: "15", y2: "9", key: "h65svq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h5 = e("PauseOctagon", [
  ["path", { d: "M10 15V9", key: "1lckn7" }],
  ["path", { d: "M14 15V9", key: "1muqhk" }],
  [
    "path",
    { d: "M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714L7.714 2z", key: "1m7qra" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y5 = e("Pause", [
  ["rect", { width: "4", height: "16", x: "6", y: "4", key: "iffhe4" }],
  ["rect", { width: "4", height: "16", x: "14", y: "4", key: "sjin7j" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l5 = e("PawPrint", [
  ["circle", { cx: "11", cy: "4", r: "2", key: "vol9p0" }],
  ["circle", { cx: "18", cy: "8", r: "2", key: "17gozi" }],
  ["circle", { cx: "20", cy: "16", r: "2", key: "1v9bxh" }],
  [
    "path",
    {
      d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",
      key: "1ydw1z"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p5 = e("PcCase", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", key: "1uq1d7" }],
  ["path", { d: "M15 14h.01", key: "1kp3bh" }],
  ["path", { d: "M9 6h6", key: "dgm16u" }],
  ["path", { d: "M9 10h6", key: "9gxzsh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = e("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y1 = e("PenSquare", [
  ["path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1qinfi" }],
  ["path", { d: "M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z", key: "w2jsv5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k5 = e("PenTool", [
  ["path", { d: "m12 19 7-7 3 3-7 7-3-3z", key: "rklqx2" }],
  ["path", { d: "m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z", key: "1et58u" }],
  ["path", { d: "m2 2 7.586 7.586", key: "etlp93" }],
  ["circle", { cx: "11", cy: "11", r: "2", key: "xmgehs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const we = e("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s5 = e("PencilLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  ["path", { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" }],
  ["path", { d: "m15 5 3 3", key: "1w25hb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u5 = e("PencilRuler", [
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  [
    "path",
    { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13", key: "orapub" }
  ],
  ["path", { d: "m8 6 2-2", key: "115y1s" }],
  ["path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z", key: "hes763" }],
  ["path", { d: "m18 16 2-2", key: "ee94s4" }],
  [
    "path",
    {
      d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",
      key: "cfq27r"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M5 = e("Pencil", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v5 = e("Pentagon", [
  [
    "path",
    {
      d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",
      key: "hsj90r"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m5 = e("PercentCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x5 = e("PercentDiamond", [
  [
    "path",
    {
      d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
      key: "1tpxz2"
    }
  ],
  ["path", { d: "M9.2 9.2h.01", key: "1b7bvt" }],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "M14.7 14.8h.01", key: "17nsh4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g5 = e("PercentSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 15h.01", key: "lqbp3k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f5 = e("Percent", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L5 = e("PersonStanding", [
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["path", { d: "m9 20 3-6 3 6", key: "se2kox" }],
  ["path", { d: "m6 8 6 2 6-2", key: "4o3us4" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w5 = e("PhoneCall", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ],
  ["path", { d: "M14.05 2a9 9 0 0 1 8 7.94", key: "vmijpz" }],
  ["path", { d: "M14.05 6A5 5 0 0 1 18 10", key: "13nbpp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b5 = e("PhoneForwarded", [
  ["polyline", { points: "18 2 22 6 18 10", key: "6vjanh" }],
  ["line", { x1: "14", x2: "22", y1: "6", y2: "6", key: "1jsywh" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I5 = e("PhoneIncoming", [
  ["polyline", { points: "16 2 16 8 22 8", key: "1ygljm" }],
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C5 = e("PhoneMissed", [
  ["line", { x1: "22", x2: "16", y1: "2", y2: "8", key: "1xzwqn" }],
  ["line", { x1: "16", x2: "22", y1: "2", y2: "8", key: "13zxdn" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S5 = e("PhoneOff", [
  [
    "path",
    {
      d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",
      key: "z86iuo"
    }
  ],
  ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q5 = e("PhoneOutgoing", [
  ["polyline", { points: "22 8 22 2 16 2", key: "1g204g" }],
  ["line", { x1: "16", x2: "22", y1: "8", y2: "2", key: "1ggias" }],
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A5 = e("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z5 = e("PiSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 7h10", key: "udp07y" }],
  ["path", { d: "M10 7v10", key: "i1d9ee" }],
  ["path", { d: "M16 17a2 2 0 0 1-2-2V7", key: "ftwdc7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H5 = e("Pi", [
  ["line", { x1: "9", x2: "9", y1: "4", y2: "20", key: "ovs5a5" }],
  ["path", { d: "M4 7c0-1.7 1.3-3 3-3h13", key: "10pag4" }],
  ["path", { d: "M18 20c-1.7 0-3-1.3-3-3V4", key: "1gaosr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j5 = e("Piano", [
  [
    "path",
    {
      d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",
      key: "lag0yf"
    }
  ],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M6 14v4", key: "9ng0ue" }],
  ["path", { d: "M10 14v4", key: "1v8uk5" }],
  ["path", { d: "M14 14v4", key: "1tqops" }],
  ["path", { d: "M18 14v4", key: "18uqwm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P5 = e("PictureInPicture2", [
  ["path", { d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4", key: "daa4of" }],
  ["rect", { width: "10", height: "7", x: "12", y: "13", rx: "2", key: "1nb8gs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V5 = e("PictureInPicture", [
  [
    "path",
    {
      d: "M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",
      key: "bcd8fb"
    }
  ],
  ["rect", { width: "10", height: "7", x: "12", y: "13.5", ry: "2", key: "136fx3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F5 = e("PieChart", [
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }],
  ["path", { d: "M22 12A10 10 0 0 0 12 2v10z", key: "1rfc4y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B5 = e("PiggyBank", [
  [
    "path",
    {
      d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",
      key: "uf6l00"
    }
  ],
  ["path", { d: "M2 9v1c0 1.1.9 2 2 2h1", key: "nm575m" }],
  ["path", { d: "M16 11h0", key: "k2aug8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D5 = e("PilcrowSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17", key: "1l9586" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M16 7v10", key: "lavkr4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R5 = e("Pilcrow", [
  ["path", { d: "M13 4v16", key: "8vvj80" }],
  ["path", { d: "M17 4v16", key: "7dpous" }],
  ["path", { d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13", key: "sh4n9v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T5 = e("Pill", [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O5 = e("PinOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  ["path", { d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12", key: "13x2n8" }],
  ["path", { d: "M15 9.34V6h1a2 2 0 0 0 0-4H7.89", key: "reo3ki" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U5 = e("Pin", [
  ["line", { x1: "12", x2: "12", y1: "17", y2: "22", key: "1jrz49" }],
  [
    "path",
    {
      d: "M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",
      key: "13yl11"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E5 = e("Pipette", [
  ["path", { d: "m2 22 1-1h3l9-9", key: "1sre89" }],
  ["path", { d: "M3 21v-3l9-9", key: "hpe2y6" }],
  [
    "path",
    {
      d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",
      key: "196du1"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z5 = e("Pizza", [
  ["path", { d: "M15 11h.01", key: "rns66s" }],
  ["path", { d: "M11 15h.01", key: "k85uqc" }],
  ["path", { d: "M16 16h.01", key: "1f9h7w" }],
  ["path", { d: "m2 16 20 6-6-20A20 20 0 0 0 2 16", key: "e4slt2" }],
  ["path", { d: "M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4", key: "rerf8f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G5 = e("PlaneLanding", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",
      key: "1ma21e"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N5 = e("PlaneTakeoff", [
  ["path", { d: "M2 22h20", key: "272qi7" }],
  [
    "path",
    {
      d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",
      key: "fkigj9"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W5 = e("Plane", [
  [
    "path",
    {
      d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
      key: "1v9wt8"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _5 = e("PlayCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X5 = e("PlaySquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "m9 8 6 4-6 4Z", key: "f1r3lt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $5 = e("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K5 = e("Plug2", [
  ["path", { d: "M9 2v6", key: "17ngun" }],
  ["path", { d: "M15 2v6", key: "s7yy2p" }],
  ["path", { d: "M12 17v5", key: "bb1du9" }],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  ["path", { d: "M6 11V8h12v3a6 6 0 1 1-12 0v0Z", key: "nd4hoy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J5 = e("PlugZap2", [
  ["path", { d: "m13 2-2 2.5h3L12 7", key: "1me98u" }],
  ["path", { d: "M10 14v-3", key: "1mllf3" }],
  ["path", { d: "M14 14v-3", key: "1l3fkq" }],
  ["path", { d: "M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z", key: "jd5pat" }],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q5 = e("PlugZap", [
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  ["path", { d: "m18 3-4 4h6l-4 4", key: "16psg9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y5 = e("Plug", [
  ["path", { d: "M12 22v-5", key: "1ega77" }],
  ["path", { d: "M9 8V2", key: "14iosj" }],
  ["path", { d: "M15 8V2", key: "18g5xt" }],
  ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e3 = e("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t3 = e("PlusSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a3 = e("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c3 = e("PocketKnife", [
  ["path", { d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2", key: "19w3oe" }],
  ["path", { d: "M18 6h.01", key: "1v4wsw" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z", key: "6fykxj" }],
  ["path", { d: "M18 11.66V22a4 4 0 0 0 4-4V6", key: "1utzek" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o3 = e("Pocket", [
  [
    "path",
    {
      d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
      key: "1mz881"
    }
  ],
  ["polyline", { points: "8 10 12 14 16 10", key: "w4mbv5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n3 = e("Podcast", [
  ["circle", { cx: "12", cy: "11", r: "1", key: "1gvufo" }],
  [
    "path",
    {
      d: "M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z",
      key: "1n5fvv"
    }
  ],
  ["path", { d: "M8 14a5 5 0 1 1 8 0", key: "fc81rn" }],
  ["path", { d: "M17 18.5a9 9 0 1 0-10 0", key: "jqtxkf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r3 = e("PointerOff", [
  ["path", { d: "M10 4.5V4a2 2 0 0 0-2.41-1.957", key: "jsi14n" }],
  ["path", { d: "M13.9 8.4a2 2 0 0 0-1.26-1.295", key: "hirc7f" }],
  [
    "path",
    { d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158", key: "1jxb2e" }
  ],
  [
    "path",
    {
      d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",
      key: "10r7hm"
    }
  ],
  ["path", { d: "M6 6v8", key: "tv5xkp" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i3 = e("Pointer", [
  ["path", { d: "M22 14a8 8 0 0 1-8 8", key: "56vcr3" }],
  ["path", { d: "M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "1pp0yd" }],
  ["path", { d: "M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1", key: "u654g" }],
  ["path", { d: "M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10", key: "1e2dtv" }],
  [
    "path",
    {
      d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "g6ys72"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d3 = e("Popcorn", [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h3 = e("Popsicle", [
  [
    "path",
    {
      d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",
      key: "1o68ps"
    }
  ],
  ["path", { d: "m22 22-5.5-5.5", key: "17o70y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y3 = e("PoundSterling", [
  ["path", { d: "M18 7c0-5.333-8-5.333-8 0", key: "1prm2n" }],
  ["path", { d: "M10 7v14", key: "18tmcs" }],
  ["path", { d: "M6 21h12", key: "4dkmi1" }],
  ["path", { d: "M6 13h10", key: "ybwr4a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l3 = e("PowerCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 12V6", key: "30zewn" }],
  ["path", { d: "M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5", key: "1r0tk2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p3 = e("PowerOff", [
  ["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }],
  ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }],
  ["path", { d: "M12 2v4", key: "3427ic" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k3 = e("PowerSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M12 7v5", key: "ma6bk" }],
  ["path", { d: "M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8", key: "15eubv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s3 = e("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u3 = e("Presentation", [
  ["path", { d: "M2 3h20", key: "91anmk" }],
  ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3", key: "2k9sn8" }],
  ["path", { d: "m7 21 5-5 5 5", key: "bip4we" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M3 = e("Printer", [
  ["polyline", { points: "6 9 6 2 18 2 18 9", key: "1306q4" }],
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["rect", { width: "12", height: "8", x: "6", y: "14", key: "5ipwut" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v3 = e("Projector", [
  ["path", { d: "M5 7 3 5", key: "1yys58" }],
  ["path", { d: "M9 6V3", key: "1ptz9u" }],
  ["path", { d: "m13 7 2-2", key: "1w3vmq" }],
  ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }],
  [
    "path",
    {
      d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",
      key: "2frwzc"
    }
  ],
  ["path", { d: "M16 16h2", key: "dnq2od" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m3 = e("Puzzle", [
  [
    "path",
    {
      d: "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",
      key: "i0oyt7"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x3 = e("Pyramid", [
  [
    "path",
    {
      d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",
      key: "aenxs0"
    }
  ],
  ["path", { d: "M12 2v20", key: "t6zp3m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g3 = e("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }],
  ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f3 = e("Quote", [
  [
    "path",
    {
      d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
      key: "4rm80e"
    }
  ],
  [
    "path",
    {
      d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
      key: "10za9r"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L3 = e("Rabbit", [
  ["path", { d: "M13 16a3 3 0 0 1 2.24 5", key: "1epib5" }],
  ["path", { d: "M18 12h.01", key: "yjnet6" }],
  [
    "path",
    {
      d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",
      key: "ue9ozu"
    }
  ],
  ["path", { d: "M20 8.54V4a2 2 0 1 0-4 0v3", key: "49iql8" }],
  ["path", { d: "M7.612 12.524a3 3 0 1 0-1.6 4.3", key: "1e33i0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w3 = e("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b3 = e("Radiation", [
  ["path", { d: "M12 12h0.01", key: "6ztbls" }],
  [
    "path",
    {
      d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",
      key: "wy49g3"
    }
  ],
  [
    "path",
    {
      d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",
      key: "vklnvr"
    }
  ],
  [
    "path",
    {
      d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",
      key: "wkdf1o"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I3 = e("RadioReceiver", [
  ["path", { d: "M5 16v2", key: "g5qcv5" }],
  ["path", { d: "M19 16v2", key: "1gbaio" }],
  ["rect", { width: "20", height: "8", x: "2", y: "8", rx: "2", key: "vjsjur" }],
  ["path", { d: "M18 12h0", key: "1ucjzd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C3 = e("RadioTower", [
  ["path", { d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9", key: "s0qx1y" }],
  ["path", { d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5", key: "1idnkw" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }],
  ["path", { d: "M16.2 4.8c2 2 2.26 5.11.8 7.47", key: "ojru2q" }],
  ["path", { d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1", key: "rhi7fg" }],
  ["path", { d: "M9.5 18h5", key: "mfy3pd" }],
  ["path", { d: "m8 22 4-11 4 11", key: "25yftu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S3 = e("Radio", [
  ["path", { d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9", key: "1vaf9d" }],
  ["path", { d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5", key: "u1ii0m" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5", key: "1j5fej" }],
  ["path", { d: "M19.1 4.9C23 8.8 23 15.1 19.1 19", key: "10b0cb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q3 = e("Radius", [
  ["path", { d: "M20.34 17.52a10 10 0 1 0-2.82 2.82", key: "fydyku" }],
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["path", { d: "m13.41 13.41 4.18 4.18", key: "1gqbwc" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A3 = e("RailSymbol", [
  ["path", { d: "M5 15h14", key: "m0yey3" }],
  ["path", { d: "M5 9h14", key: "7tsvo6" }],
  ["path", { d: "m14 20-5-5 6-6-5-5", key: "1jo42i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z3 = e("Rainbow", [
  ["path", { d: "M22 17a10 10 0 0 0-20 0", key: "ozegv" }],
  ["path", { d: "M6 17a6 6 0 0 1 12 0", key: "5giftw" }],
  ["path", { d: "M10 17a2 2 0 0 1 4 0", key: "gnsikk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H3 = e("Rat", [
  [
    "path",
    {
      d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",
      key: "16aj0u"
    }
  ],
  [
    "path",
    {
      d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",
      key: "1crdmb"
    }
  ],
  ["path", { d: "M13.2 18a3 3 0 0 0-2.2-5", key: "1ol3lk" }],
  ["path", { d: "M13 22H4a2 2 0 0 1 0-4h12", key: "bt3f23" }],
  ["path", { d: "M16 9h.01", key: "1bdo4e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j3 = e("Ratio", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }],
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P3 = e("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z",
      key: "wqdwcb"
    }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17V7", key: "pyj7ub" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V3 = e("RectangleHorizontal", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F3 = e("RectangleVertical", [
  ["rect", { width: "12", height: "20", x: "6", y: "2", rx: "2", key: "1oxtiu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B3 = e("Recycle", [
  [
    "path",
    {
      d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
      key: "x6z5xu"
    }
  ],
  [
    "path",
    {
      d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
      key: "1x4zh5"
    }
  ],
  ["path", { d: "m14 16-3 3 3 3", key: "f6jyew" }],
  ["path", { d: "M8.293 13.596 7.196 9.5 3.1 10.598", key: "wf1obh" }],
  [
    "path",
    {
      d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
      key: "9tzpgr"
    }
  ],
  ["path", { d: "m13.378 9.633 4.096 1.098 1.097-4.096", key: "1oe83g" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D3 = e("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R3 = e("RedoDot", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T3 = e("Redo", [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O3 = e("RefreshCcwDot", [
  ["path", { d: "M3 2v6h6", key: "18ldww" }],
  ["path", { d: "M21 12A9 9 0 0 0 6 5.3L3 8", key: "1pbrqz" }],
  ["path", { d: "M21 22v-6h-6", key: "usdfbe" }],
  ["path", { d: "M3 12a9 9 0 0 0 15 6.7l3-2.7", key: "1hosoe" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U3 = e("RefreshCcw", [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E3 = e("RefreshCwOff", [
  ["path", { d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47", key: "1krf6h" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ["path", { d: "M3 12C3 9.51 4 7.26 5.64 5.64", key: "ruvoct" }],
  ["path", { d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64", key: "19q130" }],
  ["path", { d: "M21 12c0 1-.16 1.97-.47 2.87", key: "4w8emr" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M22 22 2 2", key: "1r8tn9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z3 = e("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G3 = e("Refrigerator", [
  [
    "path",
    { d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z", key: "fpq118" }
  ],
  ["path", { d: "M5 10h14", key: "elsbfy" }],
  ["path", { d: "M15 7v6", key: "1nx30x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N3 = e("Regex", [
  ["path", { d: "M17 3v10", key: "15fgeh" }],
  ["path", { d: "m12.67 5.5 8.66 5", key: "1gpheq" }],
  ["path", { d: "m12.67 10.5 8.66-5", key: "1dkfa6" }],
  [
    "path",
    { d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z", key: "swwfx4" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W3 = e("RemoveFormatting", [
  ["path", { d: "M4 7V4h16v3", key: "9msm58" }],
  ["path", { d: "M5 20h6", key: "1h6pxn" }],
  ["path", { d: "M13 4 8 20", key: "kqq6aj" }],
  ["path", { d: "m15 15 5 5", key: "me55sn" }],
  ["path", { d: "m20 15-5 5", key: "11p7ol" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _3 = e("Repeat1", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }],
  ["path", { d: "M11 10h1v4", key: "70cz1p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X3 = e("Repeat2", [
  ["path", { d: "m2 9 3-3 3 3", key: "1ltn5i" }],
  ["path", { d: "M13 18H7a2 2 0 0 1-2-2V6", key: "1r6tfw" }],
  ["path", { d: "m22 15-3 3-3-3", key: "4rnwn2" }],
  ["path", { d: "M11 6h6a2 2 0 0 1 2 2v10", key: "2f72bc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $3 = e("Repeat", [
  ["path", { d: "m17 2 4 4-4 4", key: "nntrym" }],
  ["path", { d: "M3 11v-1a4 4 0 0 1 4-4h14", key: "84bu3i" }],
  ["path", { d: "m7 22-4-4 4-4", key: "1wqhfi" }],
  ["path", { d: "M21 13v1a4 4 0 0 1-4 4H3", key: "1rx37r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K3 = e("ReplaceAll", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }],
  ["path", { d: "M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "1w9p8c" }],
  ["path", { d: "M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2", key: "m45eaa" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J3 = e("Replace", [
  ["path", { d: "M14 4c0-1.1.9-2 2-2", key: "1mvvbw" }],
  ["path", { d: "M20 2c1.1 0 2 .9 2 2", key: "1mj6oe" }],
  ["path", { d: "M22 8c0 1.1-.9 2-2 2", key: "v1wql3" }],
  ["path", { d: "M16 10c-1.1 0-2-.9-2-2", key: "821ux0" }],
  ["path", { d: "m3 7 3 3 3-3", key: "x25e72" }],
  ["path", { d: "M6 10V5c0-1.7 1.3-3 3-3h1", key: "13af7h" }],
  ["rect", { width: "8", height: "8", x: "2", y: "14", rx: "2", key: "17ihk4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q3 = e("ReplyAll", [
  ["polyline", { points: "7 17 2 12 7 7", key: "t83bqg" }],
  ["polyline", { points: "12 17 7 12 12 7", key: "1g4ajm" }],
  ["path", { d: "M22 18v-2a4 4 0 0 0-4-4H7", key: "1fcyog" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y3 = e("Reply", [
  ["polyline", { points: "9 17 4 12 9 7", key: "hvgpf2" }],
  ["path", { d: "M20 18v-2a4 4 0 0 0-4-4H4", key: "5vmcpk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eu = e("Rewind", [
  ["polygon", { points: "11 19 2 12 11 5 11 19", key: "14yba5" }],
  ["polygon", { points: "22 19 13 12 22 5 22 19", key: "1pi1cj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tu = e("Ribbon", [
  [
    "path",
    {
      d: "M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",
      key: "1njedg"
    }
  ],
  [
    "path",
    {
      d: "M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",
      key: "10len7"
    }
  ],
  ["path", { d: "m9.35 14.53 2.64-3.31", key: "1wfi09" }],
  ["path", { d: "m11.97 18.04 2.99 4 3.54-2.54-3.93-5", key: "1ezyge" }],
  ["path", { d: "M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0", key: "aw0zq5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const au = e("Rocket", [
  [
    "path",
    {
      d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
      key: "m3kijz"
    }
  ],
  [
    "path",
    {
      d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
      key: "1fmvmk"
    }
  ],
  ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
  ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cu = e("RockingChair", [
  ["polyline", { points: "3.5 2 6.5 12.5 18 12.5", key: "y3iy52" }],
  ["line", { x1: "9.5", x2: "5.5", y1: "12.5", y2: "20", key: "19vg5i" }],
  ["line", { x1: "15", x2: "18.5", y1: "12.5", y2: "20", key: "1inpmv" }],
  ["path", { d: "M2.75 18a13 13 0 0 0 18.5 0", key: "1nquas" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ou = e("RollerCoaster", [
  ["path", { d: "M6 19V5", key: "1r845m" }],
  ["path", { d: "M10 19V6.8", key: "9j2tfs" }],
  ["path", { d: "M14 19v-7.8", key: "10s8qv" }],
  ["path", { d: "M18 5v4", key: "1tajlv" }],
  ["path", { d: "M18 19v-6", key: "ielfq3" }],
  ["path", { d: "M22 19V9", key: "158nzp" }],
  ["path", { d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65", key: "1930oh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = e("Rotate3d", [
  [
    "path",
    {
      d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",
      key: "10n0gc"
    }
  ],
  ["path", { d: "m15.194 13.707 3.814 1.86-1.86 3.814", key: "16shm9" }],
  [
    "path",
    {
      d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",
      key: "1lxi77"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nu = e("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ru = e("RotateCw", [
  ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iu = e("RouteOff", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5c.4 0 .9-.1 1.3-.2", key: "1effex" }],
  ["path", { d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12", key: "k9y2ds" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3", key: "11nlu2" }],
  ["path", { d: "M15 5h-4.3", key: "6537je" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const du = e("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  ["path", { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" }],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hu = e("Router", [
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", key: "w68u3i" }],
  ["path", { d: "M6.01 18H6", key: "19vcac" }],
  ["path", { d: "M10.01 18H10", key: "uamcmx" }],
  ["path", { d: "M15 10v4", key: "qjz1xs" }],
  ["path", { d: "M17.84 7.17a4 4 0 0 0-5.66 0", key: "1rif40" }],
  ["path", { d: "M20.66 4.34a8 8 0 0 0-11.31 0", key: "6a5xfq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ie = e("Rows2", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ce = e("Rows3", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yu = e("Rows4", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 7.5H3", key: "1hm9pq" }],
  ["path", { d: "M21 12H3", key: "2avoz0" }],
  ["path", { d: "M21 16.5H3", key: "n7jzkj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lu = e("Rss", [
  ["path", { d: "M4 11a9 9 0 0 1 9 9", key: "pv89mb" }],
  ["path", { d: "M4 4a16 16 0 0 1 16 16", key: "k0647b" }],
  ["circle", { cx: "5", cy: "19", r: "1", key: "bfqh0e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pu = e("Ruler", [
  [
    "path",
    {
      d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
      key: "icamh8"
    }
  ],
  ["path", { d: "m14.5 12.5 2-2", key: "inckbg" }],
  ["path", { d: "m11.5 9.5 2-2", key: "fmmyf7" }],
  ["path", { d: "m8.5 6.5 2-2", key: "vc6u1g" }],
  ["path", { d: "m17.5 15.5 2-2", key: "wo5hmg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ku = e("RussianRuble", [
  ["path", { d: "M6 11h8a4 4 0 0 0 0-8H9v18", key: "18ai8t" }],
  ["path", { d: "M6 15h8", key: "1y8f6l" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const su = e("Sailboat", [
  ["path", { d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z", key: "1404fh" }],
  ["path", { d: "M21 14 10 2 3 14h18Z", key: "1nzg7v" }],
  ["path", { d: "M10 2v16", key: "1labyt" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uu = e("Salad", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0"
    }
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  ["path", { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mu = e("Sandwich", [
  ["path", { d: "M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3", key: "34v9d7" }],
  [
    "path",
    {
      d: "M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",
      key: "1k5vfb"
    }
  ],
  ["path", { d: "m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z", key: "1oe7l6" }],
  ["path", { d: "M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z", key: "1ts2ri" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vu = e("SatelliteDish", [
  ["path", { d: "M4 10a7.31 7.31 0 0 0 10 10Z", key: "1fzpp3" }],
  ["path", { d: "m9 15 3-3", key: "88sc13" }],
  ["path", { d: "M17 13a6 6 0 0 0-6-6", key: "15cc6u" }],
  ["path", { d: "M21 13A10 10 0 0 0 11 3", key: "11nf8s" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mu = e("Satellite", [
  ["path", { d: "M13 7 9 3 5 7l4 4", key: "vyckw6" }],
  ["path", { d: "m17 11 4 4-4 4-4-4", key: "rchckc" }],
  ["path", { d: "m8 12 4 4 6-6-4-4Z", key: "1sshf7" }],
  ["path", { d: "m16 8 3-3", key: "x428zp" }],
  ["path", { d: "M9 21a6 6 0 0 0-6-6", key: "1iajcf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xu = e("SaveAll", [
  ["path", { d: "M6 4a2 2 0 0 1 2-2h10l4 4v10.2a2 2 0 0 1-2 1.8H8a2 2 0 0 1-2-2Z", key: "1unput" }],
  ["path", { d: "M10 2v4h6", key: "1p5sg6" }],
  ["path", { d: "M18 18v-7h-8v7", key: "1oniuk" }],
  ["path", { d: "M18 22H4a2 2 0 0 1-2-2V6", key: "pblm9e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gu = e("Save", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = e("Scale3d", [
  ["circle", { cx: "19", cy: "19", r: "2", key: "17f5cg" }],
  ["circle", { cx: "5", cy: "5", r: "2", key: "1gwv83" }],
  ["path", { d: "M5 7v12h12", key: "vtaa4r" }],
  ["path", { d: "m5 19 6-6", key: "jh6hbb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fu = e("Scale", [
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "7g6ntu" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z", key: "ijws7r" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2", key: "3gwbw2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lu = e("Scaling", [
  ["path", { d: "M21 3 9 15", key: "15kdhq" }],
  ["path", { d: "M12 3H3v18h18v-9", key: "8suug0" }],
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M14 15H9v-5", key: "pi4jk9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wu = e("ScanBarcode", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 7v10", key: "23sfjj" }],
  ["path", { d: "M12 7v10", key: "jspqdw" }],
  ["path", { d: "M17 7v10", key: "578dap" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bu = e("ScanEye", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["path", { d: "M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5", key: "nhuolu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iu = e("ScanFace", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["path", { d: "M9 9h.01", key: "1q5me6" }],
  ["path", { d: "M15 9h.01", key: "x1ddxp" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = e("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Su = e("ScanSearch", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m16 16-1.9-1.9", key: "1dq9hf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qu = e("ScanText", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 8h8", key: "1jbsf9" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["path", { d: "M7 16h6", key: "1vyc9m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Au = e("Scan", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zu = e("ScatterChart", [
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", key: "1x97lo" }],
  ["circle", { cx: "18.5", cy: "5.5", r: ".5", key: "56iowl" }],
  ["circle", { cx: "11.5", cy: "11.5", r: ".5", key: "m9xkw9" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", key: "14ln9z" }],
  ["circle", { cx: "17.5", cy: "14.5", r: ".5", key: "14qxqt" }],
  ["path", { d: "M3 3v18h18", key: "1s2lah" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hu = e("School2", [
  ["circle", { cx: "12", cy: "10", r: "1", key: "1gnqs8" }],
  ["path", { d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z", key: "8z0lq4" }],
  ["path", { d: "M6 17v.01", key: "roodi6" }],
  ["path", { d: "M6 13v.01", key: "67c122" }],
  ["path", { d: "M18 17v.01", key: "12ktxm" }],
  ["path", { d: "M18 13v.01", key: "tn1rt1" }],
  ["path", { d: "M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5", key: "jfgdp0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ju = e("School", [
  ["path", { d: "m4 6 8-4 8 4", key: "1q0ilc" }],
  ["path", { d: "m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2", key: "1vwozw" }],
  ["path", { d: "M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", key: "cpkuc4" }],
  ["path", { d: "M18 5v17", key: "1sw6gf" }],
  ["path", { d: "M6 5v17", key: "1xfsm0" }],
  ["circle", { cx: "12", cy: "9", r: "2", key: "1092wv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pu = e("ScissorsLineDashed", [
  ["path", { d: "M5.42 9.42 8 12", key: "12pkuq" }],
  ["circle", { cx: "4", cy: "8", r: "2", key: "107mxr" }],
  ["path", { d: "m14 6-8.58 8.58", key: "gvzu5l" }],
  ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
  ["path", { d: "M10.8 14.8 14 18", key: "ax7m9r" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vu = e("ScissorsSquareDashedBottom", [
  [
    "path",
    { d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2", key: "1vzg26" }
  ],
  ["path", { d: "M10 22H8", key: "euku7a" }],
  ["path", { d: "M16 22h-2", key: "18d249" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fu = e("ScissorsSquare", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "2", key: "1btzen" }],
  ["circle", { cx: "8", cy: "8", r: "2", key: "14cg06" }],
  ["path", { d: "M9.414 9.414 12 12", key: "qz4lzr" }],
  ["path", { d: "M14.8 14.8 18 18", key: "11flf1" }],
  ["circle", { cx: "8", cy: "16", r: "2", key: "1acxsx" }],
  ["path", { d: "m18 6-8.586 8.586", key: "11kzk1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bu = e("Scissors", [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Du = e("ScreenShareOff", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m22 3-5 5", key: "12jva0" }],
  ["path", { d: "m17 3 5 5", key: "k36vhe" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ru = e("ScreenShare", [
  ["path", { d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3", key: "i8wdob" }],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }],
  ["path", { d: "m17 8 5-5", key: "fqif7o" }],
  ["path", { d: "M17 3h5v5", key: "1o3tu8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tu = e("ScrollText", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M15 12h-5", key: "r7krc0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ou = e("Scroll", [
  [
    "path",
    { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4", key: "13a6an" }
  ],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uu = e("SearchCheck", [
  ["path", { d: "m8 11 2 2 4-4", key: "1sed1v" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eu = e("SearchCode", [
  ["path", { d: "m9 9-2 2 2 2", key: "17gsfh" }],
  ["path", { d: "m13 13 2-2-2-2", key: "186z8k" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zu = e("SearchSlash", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gu = e("SearchX", [
  ["path", { d: "m13.5 8.5-5 5", key: "1cs55j" }],
  ["path", { d: "m8.5 8.5 5 5", key: "a8mexj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nu = e("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = e("SendHorizontal", [
  ["path", { d: "m3 3 3 9-3 9 19-9Z", key: "1aobqy" }],
  ["path", { d: "M6 12h16", key: "s4cdu5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wu = e("SendToBack", [
  ["rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", key: "1b0bso" }],
  ["rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", key: "1x09vl" }],
  ["path", { d: "M7 14v1a2 2 0 0 0 2 2h1", key: "pao6x6" }],
  ["path", { d: "M14 7h1a2 2 0 0 1 2 2v1", key: "19tdru" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _u = e("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xu = e("SeparatorHorizontal", [
  ["line", { x1: "3", x2: "21", y1: "12", y2: "12", key: "10d38w" }],
  ["polyline", { points: "8 8 12 4 16 8", key: "zo8t4w" }],
  ["polyline", { points: "16 16 12 20 8 16", key: "1oyrid" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $u = e("SeparatorVertical", [
  ["line", { x1: "12", x2: "12", y1: "3", y2: "21", key: "1efggb" }],
  ["polyline", { points: "8 8 4 12 8 16", key: "bnfmv4" }],
  ["polyline", { points: "16 16 20 12 16 8", key: "u90052" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ku = e("ServerCog", [
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  [
    "path",
    {
      d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",
      key: "tn8das"
    }
  ],
  [
    "path",
    {
      d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",
      key: "1g2pve"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m15.7 13.4-.9-.3", key: "1jwmzr" }],
  ["path", { d: "m9.2 10.9-.9-.3", key: "qapnim" }],
  ["path", { d: "m10.6 15.7.3-.9", key: "quwk0k" }],
  ["path", { d: "m13.6 15.7-.4-1", key: "cb9xp7" }],
  ["path", { d: "m10.8 9.3-.4-1", key: "1uaiz5" }],
  ["path", { d: "m8.3 13.6 1-.4", key: "s6srou" }],
  ["path", { d: "m14.7 10.8 1-.4", key: "4d31cq" }],
  ["path", { d: "m13.4 8.3-.3.9", key: "1bm987" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = e("ServerCrash", [
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
      key: "4b9dqc"
    }
  ],
  [
    "path",
    {
      d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
      key: "22nnkd"
    }
  ],
  ["path", { d: "M6 6h.01", key: "1utrut" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m13 6-4 6h6l-4 6", key: "14hqih" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = e("ServerOff", [
  ["path", { d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5", key: "bt2siv" }],
  ["path", { d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z", key: "1hjrv1" }],
  ["path", { d: "M22 17v-1a2 2 0 0 0-2-2h-1", key: "1iynyr" }],
  ["path", { d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z", key: "161ggg" }],
  ["path", { d: "M6 18h.01", key: "uhywen" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yu = e("Server", [
  ["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }],
  ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }],
  ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
  ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e6 = e("Settings2", [
  ["path", { d: "M20 7h-9", key: "3s1dr2" }],
  ["path", { d: "M14 17H5", key: "gfn3mx" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t6 = e("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a6 = e("Shapes", [
  [
    "path",
    {
      d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
      key: "1bo67w"
    }
  ],
  ["rect", { x: "3", y: "14", width: "7", height: "7", rx: "1", key: "1bkyp8" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "3.5", key: "w3z12y" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c6 = e("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o6 = e("Share", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n6 = e("Sheet", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
  ["line", { x1: "3", x2: "21", y1: "15", y2: "15", key: "o2sbyz" }],
  ["line", { x1: "9", x2: "9", y1: "9", y2: "21", key: "1ib60c" }],
  ["line", { x1: "15", x2: "15", y1: "9", y2: "21", key: "1n26ft" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r6 = e("Shell", [
  [
    "path",
    {
      d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",
      key: "1cn552"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i6 = e("ShieldAlert", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d6 = e("ShieldBan", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m4 5 14 12", key: "1ta6nf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h6 = e("ShieldCheck", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y6 = e("ShieldEllipsis", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M12 11h.01", key: "z322tv" }],
  ["path", { d: "M16 11h.01", key: "xkw8gn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l6 = e("ShieldHalf", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M12 22V2", key: "zs6s6o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p6 = e("ShieldMinus", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k6 = e("ShieldOff", [
  ["path", { d: "M19.7 14a6.9 6.9 0 0 0 .3-2V5l-8-3-3.2 1.2", key: "342pvf" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M4.7 4.7 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38", key: "p0ycf4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s6 = e("ShieldPlus", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M8 11h8", key: "vwpz6n" }],
  ["path", { d: "M12 15V7", key: "1ycneb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u6 = e("ShieldQuestion", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = e("ShieldX", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }],
  ["path", { d: "m14.5 9-5 5", key: "1m49dw" }],
  ["path", { d: "m9.5 9 5 5", key: "wyx7zg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M6 = e("Shield", [
  ["path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v6 = e("ShipWheel", [
  ["circle", { cx: "12", cy: "12", r: "8", key: "46899m" }],
  ["path", { d: "M12 2v7.5", key: "1e5rl5" }],
  ["path", { d: "m19 5-5.23 5.23", key: "1ezxxf" }],
  ["path", { d: "M22 12h-7.5", key: "le1719" }],
  ["path", { d: "m19 19-5.23-5.23", key: "p3fmgn" }],
  ["path", { d: "M12 14.5V22", key: "dgcmos" }],
  ["path", { d: "M10.23 13.77 5 19", key: "qwopd4" }],
  ["path", { d: "M9.5 12H2", key: "r7bup8" }],
  ["path", { d: "M10.23 10.23 5 5", key: "k2y7lj" }],
  ["circle", { cx: "12", cy: "12", r: "2.5", key: "ix0uyj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m6 = e("Ship", [
  [
    "path",
    {
      d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "iegodh"
    }
  ],
  [
    "path",
    { d: "M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76", key: "fp8vka" }
  ],
  ["path", { d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6", key: "qpkstq" }],
  ["path", { d: "M12 10v4", key: "1kjpxc" }],
  ["path", { d: "M12 2v3", key: "qbqxhf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x6 = e("Shirt", [
  [
    "path",
    {
      d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
      key: "1wgbhj"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g6 = e("ShoppingBag", [
  ["path", { d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z", key: "hou9p0" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f6 = e("ShoppingBasket", [
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4", key: "1x2lvw" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L6 = e("ShoppingCart", [
  ["circle", { cx: "8", cy: "21", r: "1", key: "jimo8o" }],
  ["circle", { cx: "19", cy: "21", r: "1", key: "13723u" }],
  [
    "path",
    {
      d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
      key: "9zh506"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w6 = e("Shovel", [
  ["path", { d: "M2 22v-5l5-5 5 5-5 5z", key: "1fh25c" }],
  ["path", { d: "M9.5 14.5 16 8", key: "1smz5x" }],
  [
    "path",
    { d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2", key: "1q8uv5" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b6 = e("ShowerHead", [
  ["path", { d: "m4 4 2.5 2.5", key: "uv2vmf" }],
  ["path", { d: "M13.5 6.5a4.95 4.95 0 0 0-7 7", key: "frdkwv" }],
  ["path", { d: "M15 5 5 15", key: "1ag8rq" }],
  ["path", { d: "M14 17v.01", key: "eokfpp" }],
  ["path", { d: "M10 16v.01", key: "14uyyl" }],
  ["path", { d: "M13 13v.01", key: "1v1k97" }],
  ["path", { d: "M16 10v.01", key: "5169yg" }],
  ["path", { d: "M11 20v.01", key: "cj92p8" }],
  ["path", { d: "M17 14v.01", key: "11cswd" }],
  ["path", { d: "M20 11v.01", key: "19e0od" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I6 = e("Shrink", [
  ["path", { d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8", key: "17vawe" }],
  ["path", { d: "M9 19.8V15m0 0H4.2M9 15l-6 6", key: "chjx8e" }],
  ["path", { d: "M15 4.2V9m0 0h4.8M15 9l6-6", key: "lav6yq" }],
  ["path", { d: "M9 4.2V9m0 0H4.2M9 9 3 3", key: "1pxi2q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C6 = e("Shrub", [
  ["path", { d: "M12 22v-7l-2-2", key: "eqv9mc" }],
  [
    "path",
    { d: "M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z", key: "12jcau" }
  ],
  ["path", { d: "m14 14-2 2", key: "847xa2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S6 = e("Shuffle", [
  ["path", { d: "M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22", key: "1wmou1" }],
  ["path", { d: "m18 2 4 4-4 4", key: "pucp1d" }],
  ["path", { d: "M2 6h1.9c1.5 0 2.9.9 3.6 2.2", key: "10bdb2" }],
  ["path", { d: "M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8", key: "vgxac0" }],
  ["path", { d: "m18 14 4 4-4 4", key: "10pe0f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q6 = e("SigmaSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M16 8.9V7H8l4 5-4 5h8v-1.9", key: "9nih0i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A6 = e("Sigma", [
  ["path", { d: "M18 7V4H6l6 8-6 8h12v-3", key: "zis8ev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z6 = e("SignalHigh", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H6 = e("SignalLow", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j6 = e("SignalMedium", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P6 = e("SignalZero", [["path", { d: "M2 20h.01", key: "4haj6o" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V6 = e("Signal", [
  ["path", { d: "M2 20h.01", key: "4haj6o" }],
  ["path", { d: "M7 20v-4", key: "j294jx" }],
  ["path", { d: "M12 20v-8", key: "i3yub9" }],
  ["path", { d: "M17 20V8", key: "1tkaf5" }],
  ["path", { d: "M22 4v16", key: "sih9yq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F6 = e("SignpostBig", [
  ["path", { d: "M10 9H4L2 7l2-2h6", key: "1hq7x2" }],
  ["path", { d: "M14 5h6l2 2-2 2h-6", key: "bv62ej" }],
  ["path", { d: "M10 22V4a2 2 0 1 1 4 0v18", key: "eqpcf2" }],
  ["path", { d: "M8 22h8", key: "rmew8v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B6 = e("Signpost", [
  ["path", { d: "M12 3v3", key: "1n5kay" }],
  ["path", { d: "M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z", key: "27os56" }],
  ["path", { d: "M12 13v8", key: "1l5pq0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D6 = e("Siren", [
  ["path", { d: "M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z", key: "rmc51c" }],
  ["path", { d: "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z", key: "yyvmjy" }],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R6 = e("SkipBack", [
  ["polygon", { points: "19 20 9 12 19 4 19 20", key: "o2sva" }],
  ["line", { x1: "5", x2: "5", y1: "19", y2: "5", key: "1ocqjk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T6 = e("SkipForward", [
  ["polygon", { points: "5 4 15 12 5 20 5 4", key: "16p6eg" }],
  ["line", { x1: "19", x2: "19", y1: "5", y2: "19", key: "futhcm" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O6 = e("Skull", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["path", { d: "M8 20v2h8v-2", key: "ded4og" }],
  ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
  ["path", { d: "M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20", key: "xq9p5u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U6 = e("Slack", [
  ["rect", { width: "3", height: "8", x: "13", y: "2", rx: "1.5", key: "diqz80" }],
  ["path", { d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5", key: "183iwg" }],
  ["rect", { width: "3", height: "8", x: "8", y: "14", rx: "1.5", key: "hqg7r1" }],
  ["path", { d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5", key: "76g71w" }],
  ["rect", { width: "8", height: "3", x: "14", y: "13", rx: "1.5", key: "1kmz0a" }],
  ["path", { d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5", key: "jc4sz0" }],
  ["rect", { width: "8", height: "3", x: "2", y: "8", rx: "1.5", key: "1omvl4" }],
  ["path", { d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5", key: "16f3cl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ze = e("SlashSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["line", { x1: "9", x2: "15", y1: "15", y2: "9", key: "1dfufj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E6 = e("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z6 = e("Slice", [
  ["path", { d: "m8 14-6 6h9v-3", key: "zo3j9a" }],
  ["path", { d: "M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z", key: "1dzx0j" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G6 = e("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N6 = e("Sliders", [
  ["line", { x1: "4", x2: "4", y1: "21", y2: "14", key: "1p332r" }],
  ["line", { x1: "4", x2: "4", y1: "10", y2: "3", key: "gb41h5" }],
  ["line", { x1: "12", x2: "12", y1: "21", y2: "12", key: "hf2csr" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "3", key: "1kfi7u" }],
  ["line", { x1: "20", x2: "20", y1: "21", y2: "16", key: "1lhrwl" }],
  ["line", { x1: "20", x2: "20", y1: "12", y2: "3", key: "16vvfq" }],
  ["line", { x1: "2", x2: "6", y1: "14", y2: "14", key: "1uebub" }],
  ["line", { x1: "10", x2: "14", y1: "8", y2: "8", key: "1yglbp" }],
  ["line", { x1: "18", x2: "22", y1: "16", y2: "16", key: "1jxqpz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W6 = e("SmartphoneCharging", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12.667 8 10 12h4l-2.667 4", key: "h9lk2d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _6 = e("SmartphoneNfc", [
  ["rect", { width: "7", height: "12", x: "2", y: "6", rx: "1", key: "5nje8w" }],
  ["path", { d: "M13 8.32a7.43 7.43 0 0 1 0 7.36", key: "1g306n" }],
  ["path", { d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "uqvjvo" }],
  ["path", { d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "ujntz3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X6 = e("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $6 = e("SmilePlus", [
  ["path", { d: "M22 11v1a10 10 0 1 1-9-10", key: "ew0xw9" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }],
  ["path", { d: "M16 5h6", key: "1vod17" }],
  ["path", { d: "M19 2v6", key: "4bpg5p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K6 = e("Smile", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "1y1vjs" }],
  ["line", { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "yxxnd0" }],
  ["line", { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "1p4y9e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J6 = e("Snail", [
  ["path", { d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0", key: "hneq2s" }],
  ["circle", { cx: "10", cy: "13", r: "8", key: "194lz3" }],
  ["path", { d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6", key: "ixqyt7" }],
  ["path", { d: "M18 3 19.1 5.2", key: "9tjm43" }],
  ["path", { d: "M22 3 20.9 5.2", key: "j3odrs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q6 = e("Snowflake", [
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
  ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
  ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
  ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y6 = e("Sofa", [
  ["path", { d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3", key: "1dgpiv" }],
  [
    "path",
    {
      d: "M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",
      key: "u5qfb7"
    }
  ],
  ["path", { d: "M4 18v2", key: "jwo5n2" }],
  ["path", { d: "M20 18v2", key: "1ar1qi" }],
  ["path", { d: "M12 4v9", key: "oqhhn3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e8 = e("Soup", [
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M19.5 12 22 6", key: "shfsr5" }],
  [
    "path",
    {
      d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",
      key: "rpc6vp"
    }
  ],
  [
    "path",
    {
      d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",
      key: "1lf63m"
    }
  ],
  [
    "path",
    { d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62", key: "97tijn" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t8 = e("Space", [
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a8 = e("Spade", [
  [
    "path",
    {
      d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",
      key: "40bo9n"
    }
  ],
  ["path", { d: "M12 18v4", key: "jadmvz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c8 = e("Sparkle", [
  [
    "path",
    {
      d: "m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z",
      key: "nraa5p"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = e("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o8 = e("Speaker", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", key: "1nb95v" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["circle", { cx: "12", cy: "14", r: "4", key: "1jruaj" }],
  ["path", { d: "M12 14h.01", key: "1etili" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n8 = e("Speech", [
  [
    "path",
    {
      d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",
      key: "11atix"
    }
  ],
  ["path", { d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603", key: "yol142" }],
  ["path", { d: "M17 15a3.5 3.5 0 0 0-.025-4.975", key: "ssbmkc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r8 = e("SpellCheck2", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  [
    "path",
    {
      d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",
      key: "8mdmtu"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i8 = e("SpellCheck", [
  ["path", { d: "m6 16 6-12 6 12", key: "1b4byz" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d8 = e("Spline", [
  ["circle", { cx: "19", cy: "5", r: "2", key: "mhkx31" }],
  ["circle", { cx: "5", cy: "19", r: "2", key: "v8kfzx" }],
  ["path", { d: "M5 17A12 12 0 0 1 17 5", key: "1okkup" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h8 = e("SplitSquareHorizontal", [
  ["path", { d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3", key: "lubmu8" }],
  ["path", { d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3", key: "1ag34g" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y8 = e("SplitSquareVertical", [
  ["path", { d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3", key: "1pi83i" }],
  ["path", { d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3", key: "ido5k7" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l8 = e("Split", [
  ["path", { d: "M16 3h5v5", key: "1806ms" }],
  ["path", { d: "M8 3H3v5", key: "15dfkv" }],
  ["path", { d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3", key: "1qrqzj" }],
  ["path", { d: "m15 9 6-6", key: "ko1vev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p8 = e("SprayCan", [
  ["path", { d: "M3 3h.01", key: "159qn6" }],
  ["path", { d: "M7 5h.01", key: "1hq22a" }],
  ["path", { d: "M11 7h.01", key: "1osv80" }],
  ["path", { d: "M3 7h.01", key: "1xzrh3" }],
  ["path", { d: "M7 9h.01", key: "19b3jx" }],
  ["path", { d: "M3 11h.01", key: "1eifu7" }],
  ["rect", { width: "4", height: "4", x: "15", y: "5", key: "mri9e4" }],
  ["path", { d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2", key: "aib6hk" }],
  ["path", { d: "m13 14 8-2", key: "1d7bmk" }],
  ["path", { d: "m13 19 8-2", key: "1y2vml" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k8 = e("Sprout", [
  ["path", { d: "M7 20h10", key: "e6iznv" }],
  ["path", { d: "M10 20c5.5-2.5.8-6.4 3-10", key: "161w41" }],
  [
    "path",
    {
      d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",
      key: "9gtqwd"
    }
  ],
  [
    "path",
    {
      d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
      key: "bkxnd2"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s8 = e("SquareDashedBottomCode", [
  ["path", { d: "m10 10-2 2 2 2", key: "p6et6i" }],
  ["path", { d: "m14 14 2-2-2-2", key: "m075q2" }],
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u8 = e("SquareDashedBottom", [
  [
    "path",
    { d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2", key: "as5y1o" }
  ],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M8 = e("SquareStack", [
  ["path", { d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "4i38lg" }],
  ["path", { d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2", key: "mlte4a" }],
  ["rect", { width: "8", height: "8", x: "14", y: "14", rx: "2", key: "1fa9i4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = e("SquareUserRound", [
  ["path", { d: "M18 21a6 6 0 0 0-12 0", key: "kaz2du" }],
  ["circle", { cx: "12", cy: "11", r: "4", key: "1gt34v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = e("SquareUser", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2", key: "1m6ac2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v8 = e("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m8 = e("Squircle", [
  ["path", { d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9", key: "garfkc" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x8 = e("Squirrel", [
  ["path", { d: "M15.236 22a3 3 0 0 0-2.2-5", key: "21bitc" }],
  ["path", { d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4", key: "oh0fg0" }],
  ["path", { d: "M18 13h.01", key: "9veqaj" }],
  [
    "path",
    {
      d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",
      key: "980v8a"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g8 = e("Stamp", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  [
    "path",
    {
      d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",
      key: "1sy9ra"
    }
  ],
  [
    "path",
    { d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13", key: "cnxgux" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f8 = e("StarHalf", [
  ["path", { d: "M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2", key: "nare05" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L8 = e("StarOff", [
  ["path", { d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43", key: "16m0ql" }],
  ["path", { d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91", key: "1vt8nq" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w8 = e("Star", [
  [
    "polygon",
    {
      points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b8 = e("StepBack", [
  ["line", { x1: "18", x2: "18", y1: "20", y2: "4", key: "cun8e5" }],
  ["polygon", { points: "14,20 4,12 14,4", key: "ypakod" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I8 = e("StepForward", [
  ["line", { x1: "6", x2: "6", y1: "4", y2: "20", key: "fy8qot" }],
  ["polygon", { points: "10,4 20,12 10,20", key: "1mc1pf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C8 = e("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r"
    }
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S8 = e("Sticker", [
  [
    "path",
    { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
  ],
  ["path", { d: "M15 3v6h6", key: "edgan2" }],
  ["path", { d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1", key: "1vvgv3" }],
  ["path", { d: "M8 13h0", key: "jdup5h" }],
  ["path", { d: "M16 13h0", key: "l4i2ga" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q8 = e("StickyNote", [
  [
    "path",
    { d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z", key: "1wis1t" }
  ],
  ["path", { d: "M15 3v6h6", key: "edgan2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A8 = e("StopCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["rect", { width: "6", height: "6", x: "9", y: "9", key: "1wrtvo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z8 = e("Store", [
  ["path", { d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7", key: "ztvudi" }],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",
      key: "jon5kx"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H8 = e("StretchHorizontal", [
  ["rect", { width: "20", height: "6", x: "2", y: "4", rx: "2", key: "qdearl" }],
  ["rect", { width: "20", height: "6", x: "2", y: "14", rx: "2", key: "1xrn6j" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j8 = e("StretchVertical", [
  ["rect", { width: "6", height: "20", x: "4", y: "2", rx: "2", key: "19qu7m" }],
  ["rect", { width: "6", height: "20", x: "14", y: "2", rx: "2", key: "24v0nk" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P8 = e("Strikethrough", [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V8 = e("Subscript", [
  ["path", { d: "m4 5 8 8", key: "1eunvl" }],
  ["path", { d: "m12 5-8 8", key: "1ah0jp" }],
  [
    "path",
    {
      d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",
      key: "e8ta8j"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F8 = e("Subtitles", [
  ["path", { d: "M7 13h4", key: "1m1xj0" }],
  ["path", { d: "M15 13h2", key: "vgjay3" }],
  ["path", { d: "M7 9h2", key: "1q072n" }],
  ["path", { d: "M13 9h4", key: "o7fxw0" }],
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z", key: "5somay" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B8 = e("SunDim", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 4h.01", key: "1ujb9j" }],
  ["path", { d: "M20 12h.01", key: "1ykeid" }],
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M4 12h.01", key: "158zrr" }],
  ["path", { d: "M17.657 6.343h.01", key: "31pqzk" }],
  ["path", { d: "M17.657 17.657h.01", key: "jehnf4" }],
  ["path", { d: "M6.343 17.657h.01", key: "gdk6ow" }],
  ["path", { d: "M6.343 6.343h.01", key: "1uurf0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D8 = e("SunMedium", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 3v1", key: "1asbbs" }],
  ["path", { d: "M12 20v1", key: "1wcdkc" }],
  ["path", { d: "M3 12h1", key: "lp3yf2" }],
  ["path", { d: "M20 12h1", key: "1vloll" }],
  ["path", { d: "m18.364 5.636-.707.707", key: "1hakh0" }],
  ["path", { d: "m6.343 17.657-.707.707", key: "18m9nf" }],
  ["path", { d: "m5.636 5.636.707.707", key: "1xv1c5" }],
  ["path", { d: "m17.657 17.657.707.707", key: "vl76zb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R8 = e("SunMoon", [
  ["path", { d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4", key: "1fu5g2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.9 4.9 1.4 1.4", key: "b9915j" }],
  ["path", { d: "m17.7 17.7 1.4 1.4", key: "qc3ed3" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.3 17.7-1.4 1.4", key: "5gca6" }],
  ["path", { d: "m19.1 4.9-1.4 1.4", key: "wpu9u6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T8 = e("SunSnow", [
  ["path", { d: "M10 9a3 3 0 1 0 0 6", key: "6zmtdl" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M14 21V3", key: "1llu3z" }],
  ["path", { d: "M10 4V3", key: "pkzwkn" }],
  ["path", { d: "M10 21v-1", key: "1u8rkd" }],
  ["path", { d: "m3.64 18.36.7-.7", key: "105rm9" }],
  ["path", { d: "m4.34 6.34-.7-.7", key: "d3unjp" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "m17 4-3 3", key: "15jcng" }],
  ["path", { d: "m14 17 3 3", key: "6tlq38" }],
  ["path", { d: "m21 15-3-3 3-3", key: "1nlnje" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O8 = e("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U8 = e("Sunrise", [
  ["path", { d: "M12 2v8", key: "1q4o3n" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m8 6 4-4 4 4", key: "ybng9g" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E8 = e("Sunset", [
  ["path", { d: "M12 10V2", key: "16sf7g" }],
  ["path", { d: "m4.93 10.93 1.41 1.41", key: "2a7f42" }],
  ["path", { d: "M2 18h2", key: "j10viu" }],
  ["path", { d: "M20 18h2", key: "wocana" }],
  ["path", { d: "m19.07 10.93-1.41 1.41", key: "15zs5n" }],
  ["path", { d: "M22 22H2", key: "19qnx5" }],
  ["path", { d: "m16 6-4 4-4-4", key: "6wukr" }],
  ["path", { d: "M16 18a4 4 0 0 0-8 0", key: "1lzouq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z8 = e("Superscript", [
  ["path", { d: "m4 19 8-8", key: "hr47gm" }],
  ["path", { d: "m12 19-8-8", key: "1dhhmo" }],
  [
    "path",
    {
      d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",
      key: "1dfcux"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G8 = e("SwissFranc", [
  ["path", { d: "M10 21V3h8", key: "br2l0g" }],
  ["path", { d: "M6 16h9", key: "2py0wn" }],
  ["path", { d: "M10 9.5h7", key: "13dmhz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N8 = e("SwitchCamera", [
  ["path", { d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5", key: "mtk2lu" }],
  ["path", { d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5", key: "120jsl" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ["path", { d: "m18 22-3-3 3-3", key: "kgdoj7" }],
  ["path", { d: "m6 2 3 3-3 3", key: "1fnbkv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W8 = e("Sword", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _8 = e("Swords", [
  ["polyline", { points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5", key: "1hfsw2" }],
  ["line", { x1: "13", x2: "19", y1: "19", y2: "13", key: "1vrmhu" }],
  ["line", { x1: "16", x2: "20", y1: "16", y2: "20", key: "1bron3" }],
  ["line", { x1: "19", x2: "21", y1: "21", y2: "19", key: "13pww6" }],
  ["polyline", { points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5", key: "hbey2j" }],
  ["line", { x1: "5", x2: "9", y1: "14", y2: "18", key: "1hf58s" }],
  ["line", { x1: "7", x2: "4", y1: "17", y2: "20", key: "pidxm4" }],
  ["line", { x1: "3", x2: "5", y1: "19", y2: "21", key: "1pehsh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X8 = e("Syringe", [
  ["path", { d: "m18 2 4 4", key: "22kx64" }],
  ["path", { d: "m17 7 3-3", key: "1w1zoj" }],
  ["path", { d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5", key: "1exhtz" }],
  ["path", { d: "m9 11 4 4", key: "rovt3i" }],
  ["path", { d: "m5 19-3 3", key: "59f2uf" }],
  ["path", { d: "m14 4 6 6", key: "yqp9t2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $8 = e("Table2", [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K8 = e("TableProperties", [
  ["path", { d: "M15 3v18", key: "14nvp0" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M21 9H3", key: "1338ky" }],
  ["path", { d: "M21 15H3", key: "9uk58r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J8 = e("Table", [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q8 = e("TabletSmartphone", [
  ["rect", { width: "10", height: "14", x: "3", y: "8", rx: "2", key: "1vrsiq" }],
  ["path", { d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4", key: "1j4zmg" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y8 = e("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e7 = e("Tablets", [
  ["circle", { cx: "7", cy: "7", r: "5", key: "x29byf" }],
  ["circle", { cx: "17", cy: "17", r: "5", key: "1op1d2" }],
  ["path", { d: "M12 17h10", key: "ls21zv" }],
  ["path", { d: "m3.46 10.54 7.08-7.08", key: "1rehiu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t7 = e("Tag", [
  [
    "path",
    {
      d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
      key: "14b2ls"
    }
  ],
  ["path", { d: "M7 7h.01", key: "7u93v4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a7 = e("Tags", [
  [
    "path",
    {
      d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
      key: "gt587u"
    }
  ],
  ["path", { d: "M6 9.01V9", key: "1flxpt" }],
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c7 = e("Tally1", [["path", { d: "M4 4v16", key: "6qkkli" }]]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o7 = e("Tally2", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n7 = e("Tally3", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r7 = e("Tally4", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i7 = e("Tally5", [
  ["path", { d: "M4 4v16", key: "6qkkli" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "M14 4v16", key: "12vmem" }],
  ["path", { d: "M19 4v16", key: "8ij5ei" }],
  ["path", { d: "M22 6 2 18", key: "h9moai" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d7 = e("Tangent", [
  ["circle", { cx: "17", cy: "4", r: "2", key: "y5j2s2" }],
  ["path", { d: "M15.59 5.41 5.41 15.59", key: "l0vprr" }],
  ["circle", { cx: "4", cy: "17", r: "2", key: "9p4efm" }],
  ["path", { d: "M12 22s-4-9-1.5-11.5S22 12 22 12", key: "1twk4o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h7 = e("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y7 = e("TentTree", [
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ["path", { d: "m14 5 3-3 3 3", key: "1sorif" }],
  ["path", { d: "m14 10 3-3 3 3", key: "1jyi9h" }],
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  ["path", { d: "M17 14H7l-5 8h20Z", key: "13ar7p" }],
  ["path", { d: "M8 14v8", key: "1ghmqk" }],
  ["path", { d: "m9 14 5 8", key: "13pgi6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l7 = e("Tent", [
  ["path", { d: "M3.5 21 14 3", key: "1szst5" }],
  ["path", { d: "M20.5 21 10 3", key: "1310c3" }],
  ["path", { d: "M15.5 21 12 15l-3.5 6", key: "1ddtfw" }],
  ["path", { d: "M2 21h20", key: "1nyx9w" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p7 = e("TerminalSquare", [
  ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
  ["path", { d: "M11 13h4", key: "1p7l4v" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k7 = e("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s7 = e("TestTube2", [
  [
    "path",
    { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3", key: "dg8b2p" }
  ],
  ["path", { d: "m16 2 6 6", key: "1gw87d" }],
  ["path", { d: "M12 16H4", key: "1cjfip" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u7 = e("TestTube", [
  ["path", { d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2", key: "187lwq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }],
  ["path", { d: "M14.5 16h-5", key: "1ox875" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M7 = e("TestTubes", [
  ["path", { d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2", key: "12z67u" }],
  ["path", { d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2", key: "1q2nfy" }],
  ["path", { d: "M3 2h7", key: "7s29d5" }],
  ["path", { d: "M14 2h7", key: "7sicin" }],
  ["path", { d: "M9 16H4", key: "1bfye3" }],
  ["path", { d: "M20 16h-5", key: "ddnjpe" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v7 = e("TextCursorInput", [
  ["path", { d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1", key: "18xjzo" }],
  ["path", { d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5", key: "fj48gi" }],
  ["path", { d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1", key: "1n9rhb" }],
  ["path", { d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7", key: "13ksps" }],
  ["path", { d: "M9 7v10", key: "1vc8ob" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m7 = e("TextCursor", [
  ["path", { d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1", key: "uvaxm9" }],
  ["path", { d: "M7 22h1a4 4 0 0 0 4-4v-1", key: "11xy8d" }],
  ["path", { d: "M7 2h1a4 4 0 0 1 4 4v1", key: "1uw06m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x7 = e("TextQuote", [
  ["path", { d: "M17 6H3", key: "16j9eg" }],
  ["path", { d: "M21 12H8", key: "scolzb" }],
  ["path", { d: "M21 18H8", key: "1wfozv" }],
  ["path", { d: "M3 12v6", key: "fv4c87" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = e("TextSelect", [
  ["path", { d: "M5 3a2 2 0 0 0-2 2", key: "y57alp" }],
  ["path", { d: "M19 3a2 2 0 0 1 2 2", key: "18rm91" }],
  ["path", { d: "M21 19a2 2 0 0 1-2 2", key: "1j7049" }],
  ["path", { d: "M5 21a2 2 0 0 1-2-2", key: "sbafld" }],
  ["path", { d: "M9 3h1", key: "1yesri" }],
  ["path", { d: "M9 21h1", key: "15o7lz" }],
  ["path", { d: "M14 3h1", key: "1ec4yj" }],
  ["path", { d: "M14 21h1", key: "v9vybs" }],
  ["path", { d: "M3 9v1", key: "1r0deq" }],
  ["path", { d: "M21 9v1", key: "mxsmne" }],
  ["path", { d: "M3 14v1", key: "vnatye" }],
  ["path", { d: "M21 14v1", key: "169vum" }],
  ["line", { x1: "7", x2: "15", y1: "8", y2: "8", key: "1758g8" }],
  ["line", { x1: "7", x2: "17", y1: "12", y2: "12", key: "197423" }],
  ["line", { x1: "7", x2: "13", y1: "16", y2: "16", key: "37cgm6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g7 = e("Text", [
  ["path", { d: "M17 6.1H3", key: "wptmhv" }],
  ["path", { d: "M21 12.1H3", key: "1j38uz" }],
  ["path", { d: "M15.1 18H3", key: "1nb16a" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f7 = e("Theater", [
  ["path", { d: "M2 10s3-3 3-8", key: "3xiif0" }],
  ["path", { d: "M22 10s-3-3-3-8", key: "ioaa5q" }],
  ["path", { d: "M10 2c0 4.4-3.6 8-8 8", key: "16fkpi" }],
  ["path", { d: "M14 2c0 4.4 3.6 8 8 8", key: "b9eulq" }],
  ["path", { d: "M2 10s2 2 2 5", key: "1au1lb" }],
  ["path", { d: "M22 10s-2 2-2 5", key: "qi2y5e" }],
  ["path", { d: "M8 15h8", key: "45n4r" }],
  ["path", { d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "1vsc2m" }],
  ["path", { d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1", key: "hrha4u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L7 = e("ThermometerSnowflake", [
  ["path", { d: "M2 12h10", key: "19562f" }],
  ["path", { d: "M9 4v16", key: "81ygyz" }],
  ["path", { d: "m3 9 3 3-3 3", key: "1sas0l" }],
  ["path", { d: "M12 6 9 9 6 6", key: "pfrgxu" }],
  ["path", { d: "m6 18 3-3 1.5 1.5", key: "1e277p" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w7 = e("ThermometerSun", [
  ["path", { d: "M12 9a4 4 0 0 0-2 7.5", key: "1jvsq6" }],
  ["path", { d: "M12 3v2", key: "1w22ol" }],
  ["path", { d: "m6.6 18.4-1.4 1.4", key: "w2yidj" }],
  ["path", { d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "iof6y5" }],
  ["path", { d: "M4 13H2", key: "118le4" }],
  ["path", { d: "M6.34 7.34 4.93 5.93", key: "1brd51" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b7 = e("Thermometer", [
  ["path", { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I7 = e("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C7 = e("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S7 = e("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q7 = e("TimerOff", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7", key: "10he05" }],
  ["path", { d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2", key: "15f7sh" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M12 12v-2", key: "fwoke6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A7 = e("TimerReset", [
  ["path", { d: "M10 2h4", key: "n1abiw" }],
  ["path", { d: "M12 14v-4", key: "1evpnu" }],
  ["path", { d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6", key: "1ts96g" }],
  ["path", { d: "M9 17H4v5", key: "8t5av" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z7 = e("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H7 = e("ToggleLeft", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "8", cy: "12", r: "2", key: "1nvbw3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j7 = e("ToggleRight", [
  ["rect", { width: "20", height: "12", x: "2", y: "6", rx: "6", ry: "6", key: "f2vt7d" }],
  ["circle", { cx: "16", cy: "12", r: "2", key: "4ma0v8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P7 = e("Tornado", [
  ["path", { d: "M21 4H3", key: "1hwok0" }],
  ["path", { d: "M18 8H6", key: "41n648" }],
  ["path", { d: "M19 12H9", key: "1g4lpz" }],
  ["path", { d: "M16 16h-6", key: "1j5d54" }],
  ["path", { d: "M11 20H9", key: "39obr8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V7 = e("Torus", [
  ["ellipse", { cx: "12", cy: "11", rx: "3", ry: "2", key: "1b2qxu" }],
  ["ellipse", { cx: "12", cy: "12.5", rx: "10", ry: "8.5", key: "h8emeu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F7 = e("TouchpadOff", [
  ["path", { d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16", key: "lnt0bk" }],
  ["path", { d: "M2 14h12", key: "d8icqz" }],
  ["path", { d: "M22 14h-2", key: "jrx26d" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M22 16V6a2 2 0 0 0-2-2H10", key: "11y8e4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B7 = e("Touchpad", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 14h20", key: "myj16y" }],
  ["path", { d: "M12 20v-6", key: "1rm09r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D7 = e("TowerControl", [
  [
    "path",
    { d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z", key: "1pledb" }
  ],
  ["path", { d: "M8 13v9", key: "hmv0ci" }],
  ["path", { d: "M16 22v-9", key: "ylnf1u" }],
  ["path", { d: "m9 6 1 7", key: "dpdgam" }],
  ["path", { d: "m15 6-1 7", key: "ls7zgu" }],
  ["path", { d: "M12 6V2", key: "1pj48d" }],
  ["path", { d: "M13 2h-2", key: "mj6ths" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R7 = e("ToyBrick", [
  ["rect", { width: "18", height: "12", x: "3", y: "8", rx: "1", key: "158fvp" }],
  ["path", { d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3", key: "s0042v" }],
  ["path", { d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3", key: "9wmeh2" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T7 = e("Tractor", [
  ["path", { d: "M3 4h9l1 7", key: "1ftpo8" }],
  ["path", { d: "M4 11V4", key: "9ft8pt" }],
  ["path", { d: "M8 10V4", key: "1y5f7n" }],
  ["path", { d: "M18 5c-.6 0-1 .4-1 1v5.6", key: "10zbvr" }],
  ["path", { d: "m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1", key: "2w242w" }],
  ["circle", { cx: "7", cy: "15", r: ".5", key: "fbsjqy" }],
  ["circle", { cx: "7", cy: "15", r: "5", key: "ddtuc" }],
  ["path", { d: "M16 18h-5", key: "bq60fd" }],
  ["circle", { cx: "18", cy: "18", r: "2", key: "1emm8v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O7 = e("TrafficCone", [
  ["path", { d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0", key: "flyxqv" }],
  ["path", { d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3", key: "1nlxxg" }],
  [
    "path",
    {
      d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",
      key: "vz7x1l"
    }
  ],
  [
    "path",
    {
      d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",
      key: "1xfzlw"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U7 = e("TrainFrontTunnel", [
  ["path", { d: "M2 22V12a10 10 0 1 1 20 0v10", key: "o0fyp0" }],
  ["path", { d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8", key: "m8q3n9" }],
  ["path", { d: "M10 15h.01", key: "44in9x" }],
  ["path", { d: "M14 15h.01", key: "5mohn5" }],
  ["path", { d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z", key: "hckbmu" }],
  ["path", { d: "m9 19-2 3", key: "iij7hm" }],
  ["path", { d: "m15 19 2 3", key: "npx8sa" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E7 = e("TrainFront", [
  ["path", { d: "M8 3.1V7a4 4 0 0 0 8 0V3.1", key: "1v71zp" }],
  ["path", { d: "m9 15-1-1", key: "1yrq24" }],
  ["path", { d: "m15 15 1-1", key: "1t0d6s" }],
  ["path", { d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z", key: "1p0hjs" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m16 19 2 3", key: "xo31yx" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z7 = e("TrainTrack", [
  ["path", { d: "M2 17 17 2", key: "18b09t" }],
  ["path", { d: "m2 14 8 8", key: "1gv9hu" }],
  ["path", { d: "m5 11 8 8", key: "189pqp" }],
  ["path", { d: "m8 8 8 8", key: "1imecy" }],
  ["path", { d: "m11 5 8 8", key: "ummqn6" }],
  ["path", { d: "m14 2 8 8", key: "1vk7dn" }],
  ["path", { d: "M7 22 22 7", key: "15mb1i" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = e("TramFront", [
  ["rect", { width: "16", height: "16", x: "4", y: "3", rx: "2", key: "1wxw4b" }],
  ["path", { d: "M4 11h16", key: "mpoxn0" }],
  ["path", { d: "M12 3v8", key: "1h2ygw" }],
  ["path", { d: "m8 19-2 3", key: "13i0xs" }],
  ["path", { d: "m18 22-2-3", key: "1p0ohu" }],
  ["path", { d: "M8 15h0", key: "q9eq1f" }],
  ["path", { d: "M16 15h0", key: "pzrbjg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G7 = e("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N7 = e("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W7 = e("TreeDeciduous", [
  [
    "path",
    {
      d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",
      key: "oadzkq"
    }
  ],
  ["path", { d: "M12 19v3", key: "npa21l" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _7 = e("TreePine", [
  [
    "path",
    {
      d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",
      key: "cpyugq"
    }
  ],
  ["path", { d: "M12 22v-3", key: "kmzjlo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X7 = e("Trees", [
  [
    "path",
    { d: "M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z", key: "yh07w9" }
  ],
  ["path", { d: "M7 16v6", key: "1a82de" }],
  ["path", { d: "M13 19v3", key: "13sx9i" }],
  [
    "path",
    {
      d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
      key: "1sj9kv"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $7 = e("Trello", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["rect", { width: "3", height: "9", x: "7", y: "7", key: "14n3xi" }],
  ["rect", { width: "3", height: "5", x: "14", y: "7", key: "s4azjd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K7 = e("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J7 = e("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q7 = e("TriangleRight", [
  [
    "path",
    {
      d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",
      key: "183wce"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y7 = e("Triangle", [
  [
    "path",
    { d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", key: "14u9p9" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const e9 = e("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  ["path", { d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22", key: "1nw9bq" }],
  ["path", { d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22", key: "1np0yb" }],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t9 = e("Truck", [
  ["path", { d: "M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11", key: "hs4xqm" }],
  ["path", { d: "M14 9h4l4 4v4c0 .6-.4 1-1 1h-2", key: "11fp61" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a9 = e("Turtle", [
  [
    "path",
    {
      d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",
      key: "1lbbv7"
    }
  ],
  ["path", { d: "M4.82 7.9 8 10", key: "m9wose" }],
  ["path", { d: "M15.18 7.9 12 10", key: "p8dp2u" }],
  ["path", { d: "M16.93 10H20a2 2 0 0 1 0 4H2", key: "12nsm7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c9 = e("Tv2", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o9 = e("Tv", [
  ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", ry: "2", key: "10ag99" }],
  ["polyline", { points: "17 2 12 7 7 2", key: "11pgbg" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const n9 = e("Twitch", [
  ["path", { d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7", key: "c0yzno" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r9 = e("Twitter", [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const i9 = e("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d9 = e("UmbrellaOff", [
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575", key: "eki10q" }],
  ["path", { d: "M17.5 12H22A10 10 0 0 0 9.004 3.455", key: "n2ayka" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h9 = e("Umbrella", [
  ["path", { d: "M22 12a10.06 10.06 1 0 0-20 0Z", key: "1teyop" }],
  ["path", { d: "M12 12v8a2 2 0 0 0 4 0", key: "ulpmoc" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y9 = e("Underline", [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const l9 = e("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const p9 = e("UndoDot", [
  ["circle", { cx: "12", cy: "17", r: "1", key: "1ixnty" }],
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k9 = e("Undo", [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s9 = e("UnfoldHorizontal", [
  ["path", { d: "M16 12h6", key: "15xry1" }],
  ["path", { d: "M8 12H2", key: "1jqql6" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 8v2", key: "1woqiv" }],
  ["path", { d: "M12 14v2", key: "8jcxud" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m19 15 3-3-3-3", key: "wjy7rq" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u9 = e("UnfoldVertical", [
  ["path", { d: "M12 22v-6", key: "6o8u61" }],
  ["path", { d: "M12 8V2", key: "1wkif3" }],
  ["path", { d: "M4 12H2", key: "rhcxmi" }],
  ["path", { d: "M10 12H8", key: "s88cx1" }],
  ["path", { d: "M16 12h-2", key: "10asgb" }],
  ["path", { d: "M22 12h-2", key: "14jgyd" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m15 5-3-3-3 3", key: "itvq4r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M9 = e("Ungroup", [
  ["rect", { width: "8", height: "6", x: "5", y: "4", rx: "1", key: "nzclkv" }],
  ["rect", { width: "8", height: "6", x: "11", y: "14", rx: "1", key: "4tytwb" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v9 = e("Unlink2", [
  ["path", { d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2", key: "1re2ne" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m9 = e("Unlink", [
  [
    "path",
    {
      d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
      key: "yqzxt4"
    }
  ],
  [
    "path",
    {
      d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
      key: "4qinb0"
    }
  ],
  ["line", { x1: "8", x2: "8", y1: "2", y2: "5", key: "1041cp" }],
  ["line", { x1: "2", x2: "5", y1: "8", y2: "8", key: "14m1p5" }],
  ["line", { x1: "16", x2: "16", y1: "19", y2: "22", key: "rzdirn" }],
  ["line", { x1: "19", x2: "22", y1: "16", y2: "16", key: "ox905f" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x9 = e("UnlockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  ["rect", { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" }],
  ["path", { d: "M7 10V7a5 5 0 0 1 9.33-2.5", key: "car5b7" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g9 = e("Unlock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f9 = e("Unplug", [
  ["path", { d: "m19 5 3-3", key: "yk6iyv" }],
  ["path", { d: "m2 22 3-3", key: "19mgm9" }],
  [
    "path",
    { d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z", key: "goz73y" }
  ],
  ["path", { d: "M7.5 13.5 10 11", key: "7xgeeb" }],
  ["path", { d: "M10.5 16.5 13 14", key: "10btkg" }],
  [
    "path",
    { d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z", key: "1snsnr" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L9 = e("UploadCloud", [
  ["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }],
  ["path", { d: "M12 12v9", key: "192myk" }],
  ["path", { d: "m16 16-4-4-4 4", key: "119tzi" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w9 = e("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b9 = e("Usb", [
  ["circle", { cx: "10", cy: "7", r: "1", key: "dypaad" }],
  ["circle", { cx: "4", cy: "20", r: "1", key: "22iqad" }],
  ["path", { d: "M4.7 19.3 19 5", key: "1enqfc" }],
  ["path", { d: "m21 3-3 1 2 2Z", key: "d3ov82" }],
  ["path", { d: "M9.26 7.68 5 12l2 5", key: "1esawj" }],
  ["path", { d: "m10 14 5 2 3.5-3.5", key: "v8oal5" }],
  ["path", { d: "m18 12 1-1 1 1-1 1Z", key: "1bh22v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const I9 = e("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C9 = e("UserCog", [
  ["circle", { cx: "18", cy: "15", r: "3", key: "gjjjvw" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M10 15H6a4 4 0 0 0-4 4v2", key: "1nfge6" }],
  ["path", { d: "m21.7 16.4-.9-.3", key: "12j9ji" }],
  ["path", { d: "m15.2 13.9-.9-.3", key: "1fdjdi" }],
  ["path", { d: "m16.6 18.7.3-.9", key: "heedtr" }],
  ["path", { d: "m19.1 12.2.3-.9", key: "1af3ki" }],
  ["path", { d: "m19.6 18.7-.4-1", key: "1x9vze" }],
  ["path", { d: "m16.8 12.3-.4-1", key: "vqeiwj" }],
  ["path", { d: "m14.3 16.6 1-.4", key: "1qlj63" }],
  ["path", { d: "m20.7 13.8 1-.4", key: "1v5t8k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S9 = e("UserMinus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q9 = e("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = e("UserRoundCheck", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m16 19 2 2 4-4", key: "1b14m6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const De = e("UserRoundCog", [
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m19.5 14.3-.4.9", key: "1eb35c" }],
  ["path", { d: "m16.9 20.8-.4.9", key: "dfjc4z" }],
  ["path", { d: "m21.7 19.5-.9-.4", key: "q4dx6b" }],
  ["path", { d: "m15.2 16.9-.9-.4", key: "1r0w5f" }],
  ["path", { d: "m21.7 16.5-.9.4", key: "1knoei" }],
  ["path", { d: "m15.2 19.1-.9.4", key: "j188fs" }],
  ["path", { d: "m19.5 21.7-.4-.9", key: "1tonu5" }],
  ["path", { d: "m16.9 15.2-.4-.9", key: "699xu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = e("UserRoundMinus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = e("UserRoundPlus", [
  ["path", { d: "M2 21a8 8 0 0 1 13.292-6", key: "bjp14o" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M22 19h-6", key: "vcuq98" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A9 = e("UserRoundSearch", [
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M2 21a8 8 0 0 1 10.434-7.62", key: "1yezr2" }],
  ["circle", { cx: "18", cy: "18", r: "3", key: "1xkwt0" }],
  ["path", { d: "m22 22-1.9-1.9", key: "1e5ubv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = e("UserRoundX", [
  ["path", { d: "M2 21a8 8 0 0 1 11.873-7", key: "74fkxq" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
  ["path", { d: "m22 17-5 5", key: "gqnmv0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = e("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z9 = e("UserSearch", [
  ["circle", { cx: "10", cy: "7", r: "4", key: "e45bow" }],
  ["path", { d: "M10.3 15H7a4 4 0 0 0-4 4v2", key: "3bnktk" }],
  ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
  ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H9 = e("UserX", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "17", x2: "22", y1: "8", y2: "13", key: "3nzzx3" }],
  ["line", { x1: "22", x2: "17", y1: "8", y2: "13", key: "1swrse" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j9 = e("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ee = e("UsersRound", [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const P9 = e("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V9 = e("UtensilsCrossed", [
  ["path", { d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8", key: "n7qcjb" }],
  [
    "path",
    { d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7", key: "d0u48b" }
  ],
  ["path", { d: "m2.1 21.8 6.4-6.3", key: "yn04lh" }],
  ["path", { d: "m19 5-7 7", key: "194lzd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F9 = e("Utensils", [
  ["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }],
  ["path", { d: "M7 2v20", key: "1473qp" }],
  ["path", { d: "M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "1ogz0v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const B9 = e("UtilityPole", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "M2 5h20", key: "1fs1ex" }],
  ["path", { d: "M3 3v2", key: "9imdir" }],
  ["path", { d: "M7 3v2", key: "n0os7" }],
  ["path", { d: "M17 3v2", key: "1l2re6" }],
  ["path", { d: "M21 3v2", key: "1duuac" }],
  ["path", { d: "m19 5-7 7-7-7", key: "133zxf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D9 = e("Variable", [
  ["path", { d: "M8 21s-4-3-4-9 4-9 4-9", key: "uto9ud" }],
  ["path", { d: "M16 3s4 3 4 9-4 9-4 9", key: "4w2vsq" }],
  ["line", { x1: "15", x2: "9", y1: "9", y2: "15", key: "f7djnv" }],
  ["line", { x1: "9", x2: "15", y1: "9", y2: "15", key: "1shsy8" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R9 = e("Vault", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", key: "1x97lo" }],
  ["path", { d: "m7.9 7.9 2.7 2.7", key: "hpeyl3" }],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", key: "1kog09" }],
  ["path", { d: "m13.4 10.6 2.7-2.7", key: "264c1n" }],
  ["circle", { cx: "7.5", cy: "16.5", r: ".5", key: "14ln9z" }],
  ["path", { d: "m7.9 16.1 2.7-2.7", key: "p81g5e" }],
  ["circle", { cx: "16.5", cy: "16.5", r: ".5", key: "1jvjsw" }],
  ["path", { d: "m13.4 13.4 2.7 2.7", key: "abhel3" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T9 = e("Vegan", [
  ["path", { d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14", key: "qiv7li" }],
  ["path", { d: "M16 8c4 0 6-2 6-6-4 0-6 2-6 6", key: "n7eohy" }],
  ["path", { d: "M17.41 3.6a10 10 0 1 0 3 3", key: "1dion0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O9 = e("VenetianMask", [
  [
    "path",
    {
      d: "M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",
      key: "1g6z3j"
    }
  ],
  ["path", { d: "M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z", key: "c2lwnf" }],
  ["path", { d: "M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z", key: "njd9zo" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U9 = e("VibrateOff", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["path", { d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2", key: "1hbad5" }],
  ["path", { d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34", key: "1x5tf0" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E9 = e("Vibrate", [
  ["path", { d: "m2 8 2 2-2 2 2 2-2 2", key: "sv1b1" }],
  ["path", { d: "m22 8-2 2 2 2-2 2 2 2", key: "101i4y" }],
  ["rect", { width: "8", height: "14", x: "8", y: "5", rx: "1", key: "1oyrl4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z9 = e("VideoOff", [
  ["path", { d: "M10.66 6H14a2 2 0 0 1 2 2v2.34l1 1L22 8v8", key: "ubwiq0" }],
  ["path", { d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2l10 10Z", key: "1l10zd" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const G9 = e("Video", [
  ["path", { d: "m22 8-6 4 6 4V8Z", key: "50v9me" }],
  ["rect", { width: "14", height: "12", x: "2", y: "6", rx: "2", ry: "2", key: "1rqjg6" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N9 = e("Videotape", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "M2 8h20", key: "d11cs7" }],
  ["circle", { cx: "8", cy: "14", r: "2", key: "1k2qr5" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["circle", { cx: "16", cy: "14", r: "2", key: "14k7lr" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const W9 = e("View", [
  [
    "path",
    { d: "M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z", key: "vptub8" }
  ],
  ["path", { d: "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z", key: "10lhjs" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2", key: "mrq65r" }],
  ["path", { d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2", key: "be3xqs" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _9 = e("Voicemail", [
  ["circle", { cx: "6", cy: "12", r: "4", key: "1ehtga" }],
  ["circle", { cx: "18", cy: "12", r: "4", key: "4vafl8" }],
  ["line", { x1: "6", x2: "18", y1: "16", y2: "16", key: "pmt8us" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X9 = e("Volume1", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $9 = e("Volume2", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["path", { d: "M15.54 8.46a5 5 0 0 1 0 7.07", key: "ltjumu" }],
  ["path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14", key: "1kegas" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K9 = e("VolumeX", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }],
  ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
  ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J9 = e("Volume", [
  ["polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5", key: "16drj5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q9 = e("Vote", [
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ["path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z", key: "1ezoue" }],
  ["path", { d: "M22 19H2", key: "nuriw5" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y9 = e("Wallet2", [
  ["path", { d: "M17 14h.01", key: "7oqj8z" }],
  [
    "path",
    {
      d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",
      key: "u1rqew"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eM = e("WalletCards", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2", key: "4125el" }],
  [
    "path",
    {
      d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",
      key: "1dpki6"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tM = e("Wallet", [
  ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
  ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aM = e("Wallpaper", [
  ["circle", { cx: "8", cy: "9", r: "2", key: "gjzl9d" }],
  [
    "path",
    {
      d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",
      key: "69xh40"
    }
  ],
  ["path", { d: "M8 21h8", key: "1ev6f3" }],
  ["path", { d: "M12 17v4", key: "1riwvh" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cM = e("Wand2", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",
      key: "1bcowg"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oM = e("Wand", [
  ["path", { d: "M15 4V2", key: "z1p9b7" }],
  ["path", { d: "M15 16v-2", key: "px0unx" }],
  ["path", { d: "M8 9h2", key: "1g203m" }],
  ["path", { d: "M20 9h2", key: "19tzq7" }],
  ["path", { d: "M17.8 11.8 19 13", key: "yihg8r" }],
  ["path", { d: "M15 9h0", key: "kg5t1u" }],
  ["path", { d: "M17.8 6.2 19 5", key: "fd4us0" }],
  ["path", { d: "m3 21 9-9", key: "1jfql5" }],
  ["path", { d: "M12.2 6.2 11 5", key: "i3da3b" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nM = e("Warehouse", [
  [
    "path",
    {
      d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",
      key: "gksnxg"
    }
  ],
  ["path", { d: "M6 18h12", key: "9pbo8z" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }],
  ["rect", { width: "12", height: "12", x: "6", y: "10", key: "apd30q" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rM = e("WashingMachine", [
  ["path", { d: "M3 6h3", key: "155dbl" }],
  ["path", { d: "M17 6h.01", key: "e2y6kg" }],
  ["rect", { width: "18", height: "20", x: "3", y: "2", rx: "2", key: "od3kk9" }],
  ["circle", { cx: "12", cy: "13", r: "5", key: "nlbqau" }],
  ["path", { d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5", key: "17lach" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iM = e("Watch", [
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
  [
    "path",
    { d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05", key: "18k57s" }
  ],
  ["path", { d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05", key: "16ny36" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dM = e("Waves", [
  [
    "path",
    {
      d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "knzxuh"
    }
  ],
  [
    "path",
    {
      d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "2jd2cc"
    }
  ],
  [
    "path",
    {
      d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
      key: "rd2r6e"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hM = e("Waypoints", [
  ["circle", { cx: "12", cy: "4.5", r: "2.5", key: "r5ysbb" }],
  ["path", { d: "m10.2 6.3-3.9 3.9", key: "1nzqf6" }],
  ["circle", { cx: "4.5", cy: "12", r: "2.5", key: "jydg6v" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
  ["circle", { cx: "19.5", cy: "12", r: "2.5", key: "1piiel" }],
  ["path", { d: "m13.8 17.7 3.9-3.9", key: "1wyg1y" }],
  ["circle", { cx: "12", cy: "19.5", r: "2.5", key: "13o1pw" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yM = e("Webcam", [
  ["circle", { cx: "12", cy: "10", r: "8", key: "1gshiw" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ["path", { d: "M7 22h10", key: "10w4w3" }],
  ["path", { d: "M12 22v-4", key: "1utk9m" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lM = e("Webhook", [
  [
    "path",
    {
      d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
      key: "q3hayz"
    }
  ],
  ["path", { d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06", key: "1go1hn" }],
  ["path", { d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8", key: "qlwsc0" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pM = e("Weight", [
  ["circle", { cx: "12", cy: "5", r: "3", key: "rqqgnr" }],
  [
    "path",
    {
      d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",
      key: "56o5sh"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kM = e("WheatOff", [
  ["path", { d: "m2 22 10-10", key: "28ilpk" }],
  ["path", { d: "m16 8-1.17 1.17", key: "1qqm82" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    { d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97", key: "4wz8re" }
  ],
  [
    "path",
    { d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62", key: "rves66" }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",
      key: "ak46r"
    }
  ],
  [
    "path",
    {
      d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",
      key: "1tw520"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sM = e("Wheat", [
  ["path", { d: "M2 22 16 8", key: "60hf96" }],
  [
    "path",
    {
      d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1rdhi6"
    }
  ],
  [
    "path",
    {
      d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "1sdzmb"
    }
  ],
  [
    "path",
    {
      d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",
      key: "eoatbi"
    }
  ],
  ["path", { d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z", key: "19rau1" }],
  [
    "path",
    {
      d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "tc8ph9"
    }
  ],
  [
    "path",
    {
      d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "2m8kc5"
    }
  ],
  [
    "path",
    {
      d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",
      key: "vex3ng"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uM = e("WholeWord", [
  ["circle", { cx: "7", cy: "12", r: "3", key: "12clwm" }],
  ["path", { d: "M10 9v6", key: "17i7lo" }],
  ["circle", { cx: "17", cy: "12", r: "3", key: "gl7c2s" }],
  ["path", { d: "M14 7v8", key: "dl84cr" }],
  ["path", { d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1", key: "lt2kga" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MM = e("WifiOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.17-2.65", key: "11utq1" }],
  ["path", { d: "M10.66 5c4.01-.36 8.14.9 11.34 3.76", key: "hxefdu" }],
  ["path", { d: "M16.85 11.25a10 10 0 0 1 2.22 1.68", key: "q734kn" }],
  ["path", { d: "M5 13a10 10 0 0 1 5.24-2.76", key: "piq4yl" }],
  ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vM = e("Wifi", [
  ["path", { d: "M5 13a10 10 0 0 1 14 0", key: "6v8j51" }],
  ["path", { d: "M8.5 16.5a5 5 0 0 1 7 0", key: "sej527" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["line", { x1: "12", x2: "12.01", y1: "20", y2: "20", key: "of4bc4" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mM = e("Wind", [
  ["path", { d: "M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2", key: "1k4u03" }],
  ["path", { d: "M9.6 4.6A2 2 0 1 1 11 8H2", key: "b7d0fd" }],
  ["path", { d: "M12.6 19.4A2 2 0 1 0 14 16H2", key: "1p5cb3" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xM = e("WineOff", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h3m7 0h-1.343", key: "v48bem" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    {
      d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",
      key: "1ymjlu"
    }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gM = e("Wine", [
  ["path", { d: "M8 22h8", key: "rmew8v" }],
  ["path", { d: "M7 10h10", key: "1101jm" }],
  ["path", { d: "M12 15v7", key: "t2xh3l" }],
  [
    "path",
    { d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z", key: "10ffi3" }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fM = e("Workflow", [
  ["rect", { width: "8", height: "8", x: "3", y: "3", rx: "2", key: "by2w9f" }],
  ["path", { d: "M7 11v4a2 2 0 0 0 2 2h4", key: "xkn7yn" }],
  ["rect", { width: "8", height: "8", x: "13", y: "13", rx: "2", key: "1cgmvn" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LM = e("WrapText", [
  ["line", { x1: "3", x2: "21", y1: "6", y2: "6", key: "4m8b97" }],
  ["path", { d: "M3 12h15a3 3 0 1 1 0 6h-4", key: "1cl7v7" }],
  ["polyline", { points: "16 16 14 18 16 20", key: "1jznyi" }],
  ["line", { x1: "3", x2: "10", y1: "18", y2: "18", key: "1h33wv" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wM = e("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bM = e("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const IM = e("XOctagon", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CM = e("XSquare", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const SM = e("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qM = e("Youtube", [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AM = e("ZapOff", [
  ["polyline", { points: "12.41 6.75 13 2 10.57 4.92", key: "122m05" }],
  ["polyline", { points: "18.57 12.91 21 10 15.66 10", key: "16r43o" }],
  ["polyline", { points: "8 8 3 14 12 14 11 22 16 16", key: "tmh4bc" }],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zM = e("Zap", [
  ["polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2", key: "45s27k" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const HM = e("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jM = e("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AArrowDown: s2,
  AArrowUp: u2,
  ALargeSmall: M2,
  Accessibility: v2,
  Activity: x2,
  ActivitySquare: m2,
  AirVent: g2,
  Airplay: f2,
  AlarmClock: w2,
  AlarmClockCheck: z1,
  AlarmClockMinus: H1,
  AlarmClockOff: L2,
  AlarmClockPlus: j1,
  AlarmSmoke: b2,
  Album: I2,
  AlertCircle: C2,
  AlertOctagon: S2,
  AlertTriangle: q2,
  AlignCenter: H2,
  AlignCenterHorizontal: A2,
  AlignCenterVertical: z2,
  AlignEndHorizontal: j2,
  AlignEndVertical: P2,
  AlignHorizontalDistributeCenter: V2,
  AlignHorizontalDistributeEnd: F2,
  AlignHorizontalDistributeStart: B2,
  AlignHorizontalJustifyCenter: D2,
  AlignHorizontalJustifyEnd: R2,
  AlignHorizontalJustifyStart: T2,
  AlignHorizontalSpaceAround: O2,
  AlignHorizontalSpaceBetween: U2,
  AlignJustify: E2,
  AlignLeft: Z2,
  AlignRight: G2,
  AlignStartHorizontal: N2,
  AlignStartVertical: W2,
  AlignVerticalDistributeCenter: _2,
  AlignVerticalDistributeEnd: X2,
  AlignVerticalDistributeStart: $2,
  AlignVerticalJustifyCenter: K2,
  AlignVerticalJustifyEnd: J2,
  AlignVerticalJustifyStart: Q2,
  AlignVerticalSpaceAround: Y2,
  AlignVerticalSpaceBetween: et,
  Ampersand: tt,
  Ampersands: at,
  Anchor: ct,
  Angry: ot,
  Annoyed: nt,
  Antenna: rt,
  Anvil: it,
  Aperture: dt,
  AppWindow: ht,
  Apple: yt,
  Archive: kt,
  ArchiveRestore: lt,
  ArchiveX: pt,
  AreaChart: st,
  Armchair: ut,
  ArrowBigDown: vt,
  ArrowBigDownDash: Mt,
  ArrowBigLeft: xt,
  ArrowBigLeftDash: mt,
  ArrowBigRight: ft,
  ArrowBigRightDash: gt,
  ArrowBigUp: wt,
  ArrowBigUpDash: Lt,
  ArrowDown: Tt,
  ArrowDown01: bt,
  ArrowDown10: It,
  ArrowDownAZ: P1,
  ArrowDownCircle: Ct,
  ArrowDownFromLine: St,
  ArrowDownLeft: zt,
  ArrowDownLeftFromCircle: qt,
  ArrowDownLeftSquare: At,
  ArrowDownNarrowWide: Ht,
  ArrowDownRight: Vt,
  ArrowDownRightFromCircle: jt,
  ArrowDownRightSquare: Pt,
  ArrowDownSquare: Ft,
  ArrowDownToDot: Bt,
  ArrowDownToLine: Dt,
  ArrowDownUp: Rt,
  ArrowDownWideNarrow: V1,
  ArrowDownZA: F1,
  ArrowLeft: Nt,
  ArrowLeftCircle: Ot,
  ArrowLeftFromLine: Ut,
  ArrowLeftRight: Et,
  ArrowLeftSquare: Zt,
  ArrowLeftToLine: Gt,
  ArrowRight: Jt,
  ArrowRightCircle: Wt,
  ArrowRightFromLine: _t,
  ArrowRightLeft: Xt,
  ArrowRightSquare: $t,
  ArrowRightToLine: Kt,
  ArrowUp: ka,
  ArrowUp01: Qt,
  ArrowUp10: Yt,
  ArrowUpAZ: B1,
  ArrowUpCircle: ea,
  ArrowUpDown: ta,
  ArrowUpFromDot: aa,
  ArrowUpFromLine: ca,
  ArrowUpLeft: ra,
  ArrowUpLeftFromCircle: oa,
  ArrowUpLeftSquare: na,
  ArrowUpNarrowWide: D1,
  ArrowUpRight: ha,
  ArrowUpRightFromCircle: ia,
  ArrowUpRightSquare: da,
  ArrowUpSquare: ya,
  ArrowUpToLine: la,
  ArrowUpWideNarrow: pa,
  ArrowUpZA: R1,
  ArrowsUpFromLine: sa,
  Asterisk: ua,
  AsteriskSquare: T1,
  AtSign: Ma,
  Atom: va,
  AudioLines: ma,
  AudioWaveform: xa,
  Award: ga,
  Axe: fa,
  Axis3d: O1,
  Baby: La,
  Backpack: wa,
  Badge: Ta,
  BadgeAlert: ba,
  BadgeCent: Ia,
  BadgeCheck: U1,
  BadgeDollarSign: Ca,
  BadgeEuro: Sa,
  BadgeHelp: qa,
  BadgeIndianRupee: Aa,
  BadgeInfo: za,
  BadgeJapaneseYen: Ha,
  BadgeMinus: ja,
  BadgePercent: Pa,
  BadgePlus: Va,
  BadgePoundSterling: Fa,
  BadgeRussianRuble: Ba,
  BadgeSwissFranc: Da,
  BadgeX: Ra,
  BaggageClaim: Oa,
  Ban: Ua,
  Banana: Ea,
  Banknote: Za,
  BarChart: Ka,
  BarChart2: Ga,
  BarChart3: Na,
  BarChart4: Wa,
  BarChartBig: _a,
  BarChartHorizontal: $a,
  BarChartHorizontalBig: Xa,
  Barcode: Ja,
  Baseline: Qa,
  Bath: Ya,
  Battery: n0,
  BatteryCharging: e0,
  BatteryFull: t0,
  BatteryLow: a0,
  BatteryMedium: c0,
  BatteryWarning: o0,
  Beaker: r0,
  Bean: d0,
  BeanOff: i0,
  Bed: l0,
  BedDouble: h0,
  BedSingle: y0,
  Beef: p0,
  Beer: k0,
  Bell: g0,
  BellDot: s0,
  BellElectric: u0,
  BellMinus: M0,
  BellOff: v0,
  BellPlus: m0,
  BellRing: x0,
  BetweenHorizontalEnd: E1,
  BetweenHorizontalStart: Z1,
  BetweenVerticalEnd: f0,
  BetweenVerticalStart: L0,
  Bike: w0,
  Binary: b0,
  Biohazard: I0,
  Bird: C0,
  Bitcoin: S0,
  Blinds: q0,
  Blocks: A0,
  Bluetooth: P0,
  BluetoothConnected: z0,
  BluetoothOff: H0,
  BluetoothSearching: j0,
  Bold: V0,
  Bolt: F0,
  Bomb: B0,
  Bone: D0,
  Book: rc,
  BookA: R0,
  BookAudio: T0,
  BookCheck: O0,
  BookCopy: U0,
  BookDashed: G1,
  BookDown: E0,
  BookHeadphones: Z0,
  BookHeart: G0,
  BookImage: N0,
  BookKey: W0,
  BookLock: _0,
  BookMarked: X0,
  BookMinus: $0,
  BookOpen: Q0,
  BookOpenCheck: K0,
  BookOpenText: J0,
  BookPlus: Y0,
  BookText: ec,
  BookType: tc,
  BookUp: cc,
  BookUp2: ac,
  BookUser: oc,
  BookX: nc,
  Bookmark: lc,
  BookmarkCheck: ic,
  BookmarkMinus: dc,
  BookmarkPlus: hc,
  BookmarkX: yc,
  BoomBox: pc,
  Bot: kc,
  Box: uc,
  BoxSelect: sc,
  Boxes: Mc,
  Braces: N1,
  Brackets: vc,
  Brain: gc,
  BrainCircuit: mc,
  BrainCog: xc,
  BrickWall: fc,
  Briefcase: Lc,
  BringToFront: wc,
  Brush: bc,
  Bug: Sc,
  BugOff: Ic,
  BugPlay: Cc,
  Building: Ac,
  Building2: qc,
  Bus: Hc,
  BusFront: zc,
  Cable: Pc,
  CableCar: jc,
  Cake: Fc,
  CakeSlice: Vc,
  Calculator: Bc,
  Calendar: $c,
  CalendarCheck: Rc,
  CalendarCheck2: Dc,
  CalendarClock: Tc,
  CalendarDays: Oc,
  CalendarHeart: Uc,
  CalendarMinus: Ec,
  CalendarOff: Zc,
  CalendarPlus: Gc,
  CalendarRange: Nc,
  CalendarSearch: Wc,
  CalendarX: Xc,
  CalendarX2: _c,
  Camera: Jc,
  CameraOff: Kc,
  CandlestickChart: Qc,
  Candy: to,
  CandyCane: Yc,
  CandyOff: eo,
  Car: oo,
  CarFront: ao,
  CarTaxiFront: co,
  Caravan: no,
  Carrot: ro,
  CaseLower: io,
  CaseSensitive: ho,
  CaseUpper: yo,
  CassetteTape: lo,
  Cast: po,
  Castle: ko,
  Cat: so,
  Cctv: uo,
  Check: fo,
  CheckCheck: Mo,
  CheckCircle: mo,
  CheckCircle2: vo,
  CheckSquare: go,
  CheckSquare2: xo,
  ChefHat: Lo,
  Cherry: wo,
  ChevronDown: Co,
  ChevronDownCircle: bo,
  ChevronDownSquare: Io,
  ChevronFirst: So,
  ChevronLast: qo,
  ChevronLeft: Ho,
  ChevronLeftCircle: Ao,
  ChevronLeftSquare: zo,
  ChevronRight: Vo,
  ChevronRightCircle: jo,
  ChevronRightSquare: Po,
  ChevronUp: Do,
  ChevronUpCircle: Fo,
  ChevronUpSquare: Bo,
  ChevronsDown: To,
  ChevronsDownUp: Ro,
  ChevronsLeft: Uo,
  ChevronsLeftRight: Oo,
  ChevronsRight: Zo,
  ChevronsRightLeft: Eo,
  ChevronsUp: No,
  ChevronsUpDown: Go,
  Chrome: Wo,
  Church: _o,
  Cigarette: $o,
  CigaretteOff: Xo,
  Circle: on,
  CircleDashed: Ko,
  CircleDollarSign: Jo,
  CircleDot: Yo,
  CircleDotDashed: Qo,
  CircleEllipsis: en,
  CircleEqual: tn,
  CircleOff: an,
  CircleSlash: cn,
  CircleSlash2: W1,
  CircleUser: X1,
  CircleUserRound: _1,
  CircuitBoard: nn,
  Citrus: rn,
  Clapperboard: dn,
  Clipboard: un,
  ClipboardCheck: hn,
  ClipboardCopy: yn,
  ClipboardList: ln,
  ClipboardPaste: pn,
  ClipboardPen: K1,
  ClipboardPenLine: $1,
  ClipboardType: kn,
  ClipboardX: sn,
  Clock: qn,
  Clock1: Mn,
  Clock10: vn,
  Clock11: mn,
  Clock12: xn,
  Clock2: gn,
  Clock3: fn,
  Clock4: Ln,
  Clock5: wn,
  Clock6: bn,
  Clock7: In,
  Clock8: Cn,
  Clock9: Sn,
  Cloud: En,
  CloudCog: An,
  CloudDrizzle: zn,
  CloudFog: Hn,
  CloudHail: jn,
  CloudLightning: Pn,
  CloudMoon: Fn,
  CloudMoonRain: Vn,
  CloudOff: Bn,
  CloudRain: Rn,
  CloudRainWind: Dn,
  CloudSnow: Tn,
  CloudSun: Un,
  CloudSunRain: On,
  Cloudy: Zn,
  Clover: Gn,
  Club: Nn,
  Code: _n,
  Code2: Wn,
  CodeSquare: J1,
  Codepen: Xn,
  Codesandbox: $n,
  Coffee: Kn,
  Cog: Jn,
  Coins: Qn,
  Columns2: Q1,
  Columns3: Y1,
  Columns4: Yn,
  Combine: er,
  Command: tr,
  Compass: ar,
  Component: cr,
  Computer: or,
  ConciergeBell: nr,
  Cone: rr,
  Construction: ir,
  Contact: hr,
  Contact2: dr,
  Container: yr,
  Contrast: lr,
  Cookie: pr,
  CookingPot: kr,
  Copy: xr,
  CopyCheck: sr,
  CopyMinus: ur,
  CopyPlus: Mr,
  CopySlash: vr,
  CopyX: mr,
  Copyleft: gr,
  Copyright: fr,
  CornerDownLeft: Lr,
  CornerDownRight: wr,
  CornerLeftDown: br,
  CornerLeftUp: Ir,
  CornerRightDown: Cr,
  CornerRightUp: Sr,
  CornerUpLeft: qr,
  CornerUpRight: Ar,
  Cpu: zr,
  CreativeCommons: Hr,
  CreditCard: jr,
  Croissant: Pr,
  Crop: Vr,
  Cross: Fr,
  Crosshair: Br,
  Crown: Dr,
  Cuboid: Rr,
  CupSoda: Tr,
  Currency: Or,
  Cylinder: Ur,
  Database: Gr,
  DatabaseBackup: Er,
  DatabaseZap: Zr,
  Delete: Nr,
  Dessert: Wr,
  Diameter: _r,
  Diamond: Xr,
  Dice1: $r,
  Dice2: Kr,
  Dice3: Jr,
  Dice4: Qr,
  Dice5: Yr,
  Dice6: ei,
  Dices: ti,
  Diff: ai,
  Disc: ri,
  Disc2: ci,
  Disc3: oi,
  DiscAlbum: ni,
  Divide: hi,
  DivideCircle: ii,
  DivideSquare: di,
  Dna: li,
  DnaOff: yi,
  Dog: pi,
  DollarSign: ki,
  Donut: si,
  DoorClosed: ui,
  DoorOpen: Mi,
  Dot: vi,
  DotSquare: ee,
  Download: xi,
  DownloadCloud: mi,
  DraftingCompass: gi,
  Drama: fi,
  Dribbble: Li,
  Drill: wi,
  Droplet: bi,
  Droplets: Ii,
  Drum: Ci,
  Drumstick: Si,
  Dumbbell: qi,
  Ear: zi,
  EarOff: Ai,
  Egg: Pi,
  EggFried: Hi,
  EggOff: ji,
  Equal: Fi,
  EqualNot: Vi,
  EqualSquare: te,
  Eraser: Bi,
  Euro: Di,
  Expand: Ri,
  ExternalLink: Ti,
  Eye: Ui,
  EyeOff: Oi,
  Facebook: Ei,
  Factory: Zi,
  Fan: Gi,
  FastForward: Ni,
  Feather: Wi,
  Fence: _i,
  FerrisWheel: Xi,
  Figma: $i,
  File: Xd,
  FileArchive: Ki,
  FileAudio: Qi,
  FileAudio2: Ji,
  FileAxis3d: ae,
  FileBadge: ed,
  FileBadge2: Yi,
  FileBarChart: ad,
  FileBarChart2: td,
  FileBox: cd,
  FileCheck: nd,
  FileCheck2: od,
  FileClock: rd,
  FileCode: dd,
  FileCode2: id,
  FileCog: ce,
  FileDiff: hd,
  FileDigit: yd,
  FileDown: ld,
  FileHeart: pd,
  FileImage: kd,
  FileInput: sd,
  FileJson: Md,
  FileJson2: ud,
  FileKey: md,
  FileKey2: vd,
  FileLineChart: xd,
  FileLock: fd,
  FileLock2: gd,
  FileMinus: wd,
  FileMinus2: Ld,
  FileMusic: bd,
  FileOutput: Id,
  FilePen: ne,
  FilePenLine: oe,
  FilePieChart: Cd,
  FilePlus: qd,
  FilePlus2: Sd,
  FileQuestion: Ad,
  FileScan: zd,
  FileSearch: jd,
  FileSearch2: Hd,
  FileSpreadsheet: Pd,
  FileStack: Vd,
  FileSymlink: Fd,
  FileTerminal: Bd,
  FileText: Dd,
  FileType: Td,
  FileType2: Rd,
  FileUp: Od,
  FileVideo: Ed,
  FileVideo2: Ud,
  FileVolume: Gd,
  FileVolume2: Zd,
  FileWarning: Nd,
  FileX: _d,
  FileX2: Wd,
  Files: $d,
  Film: Kd,
  Filter: Qd,
  FilterX: Jd,
  Fingerprint: Yd,
  FireExtinguisher: eh,
  Fish: ch,
  FishOff: th,
  FishSymbol: ah,
  Flag: ih,
  FlagOff: oh,
  FlagTriangleLeft: nh,
  FlagTriangleRight: rh,
  Flame: hh,
  FlameKindling: dh,
  Flashlight: lh,
  FlashlightOff: yh,
  FlaskConical: kh,
  FlaskConicalOff: ph,
  FlaskRound: sh,
  FlipHorizontal: Mh,
  FlipHorizontal2: uh,
  FlipVertical: mh,
  FlipVertical2: vh,
  Flower: gh,
  Flower2: xh,
  Focus: fh,
  FoldHorizontal: Lh,
  FoldVertical: wh,
  Folder: Kh,
  FolderArchive: bh,
  FolderCheck: Ih,
  FolderClock: Ch,
  FolderClosed: Sh,
  FolderCog: re,
  FolderDot: qh,
  FolderDown: Ah,
  FolderGit: Hh,
  FolderGit2: zh,
  FolderHeart: jh,
  FolderInput: Ph,
  FolderKanban: Vh,
  FolderKey: Fh,
  FolderLock: Bh,
  FolderMinus: Dh,
  FolderOpen: Th,
  FolderOpenDot: Rh,
  FolderOutput: Oh,
  FolderPen: ie,
  FolderPlus: Uh,
  FolderRoot: Eh,
  FolderSearch: Gh,
  FolderSearch2: Zh,
  FolderSymlink: Nh,
  FolderSync: Wh,
  FolderTree: _h,
  FolderUp: Xh,
  FolderX: $h,
  Folders: Jh,
  Footprints: Qh,
  Forklift: Yh,
  FormInput: ey,
  Forward: ty,
  Frame: ay,
  Framer: cy,
  Frown: oy,
  Fuel: ny,
  Fullscreen: ry,
  FunctionSquare: iy,
  GalleryHorizontal: hy,
  GalleryHorizontalEnd: dy,
  GalleryThumbnails: yy,
  GalleryVertical: py,
  GalleryVerticalEnd: ly,
  Gamepad: sy,
  Gamepad2: ky,
  GanttChart: uy,
  GanttChartSquare: d1,
  Gauge: vy,
  GaugeCircle: My,
  Gavel: my,
  Gem: xy,
  Ghost: gy,
  Gift: fy,
  GitBranch: wy,
  GitBranchPlus: Ly,
  GitCommitHorizontal: de,
  GitCommitVertical: by,
  GitCompare: Cy,
  GitCompareArrows: Iy,
  GitFork: Sy,
  GitGraph: qy,
  GitMerge: Ay,
  GitPullRequest: Fy,
  GitPullRequestArrow: zy,
  GitPullRequestClosed: Hy,
  GitPullRequestCreate: Py,
  GitPullRequestCreateArrow: jy,
  GitPullRequestDraft: Vy,
  Github: By,
  Gitlab: Dy,
  GlassWater: Ry,
  Glasses: Ty,
  Globe: Uy,
  Globe2: Oy,
  Goal: Ey,
  Grab: Zy,
  GraduationCap: Gy,
  Grape: Ny,
  Grid2x2: he,
  Grid3x3: h1,
  Grip: Xy,
  GripHorizontal: Wy,
  GripVertical: _y,
  Group: $y,
  Guitar: Ky,
  Hammer: Jy,
  Hand: Yy,
  HandMetal: Qy,
  HardDrive: al,
  HardDriveDownload: el,
  HardDriveUpload: tl,
  HardHat: cl,
  Hash: ol,
  Haze: nl,
  HdmiPort: rl,
  Heading: kl,
  Heading1: il,
  Heading2: dl,
  Heading3: hl,
  Heading4: yl,
  Heading5: ll,
  Heading6: pl,
  Headphones: sl,
  Heart: xl,
  HeartCrack: ul,
  HeartHandshake: Ml,
  HeartOff: vl,
  HeartPulse: ml,
  Heater: gl,
  HelpCircle: fl,
  HelpingHand: Ll,
  Hexagon: wl,
  Highlighter: bl,
  History: Il,
  Home: Cl,
  Hop: ql,
  HopOff: Sl,
  Hotel: Al,
  Hourglass: zl,
  IceCream: jl,
  IceCream2: Hl,
  Image: Dl,
  ImageDown: Pl,
  ImageMinus: Vl,
  ImageOff: Fl,
  ImagePlus: Bl,
  Import: Rl,
  Inbox: Tl,
  Indent: Ol,
  IndianRupee: Ul,
  Infinity: El,
  Info: Zl,
  InspectionPanel: Gl,
  Instagram: Nl,
  Italic: Wl,
  IterationCcw: _l,
  IterationCw: Xl,
  JapaneseYen: $l,
  Joystick: Kl,
  Kanban: Jl,
  KanbanSquare: le,
  KanbanSquareDashed: ye,
  Key: ep,
  KeyRound: Ql,
  KeySquare: Yl,
  Keyboard: ap,
  KeyboardMusic: tp,
  Lamp: dp,
  LampCeiling: cp,
  LampDesk: op,
  LampFloor: np,
  LampWallDown: rp,
  LampWallUp: ip,
  LandPlot: hp,
  Landmark: yp,
  Languages: lp,
  Laptop: kp,
  Laptop2: pp,
  Lasso: up,
  LassoSelect: sp,
  Laugh: Mp,
  Layers: xp,
  Layers2: vp,
  Layers3: mp,
  LayoutDashboard: gp,
  LayoutGrid: fp,
  LayoutList: Lp,
  LayoutPanelLeft: wp,
  LayoutPanelTop: bp,
  LayoutTemplate: Ip,
  Leaf: Cp,
  LeafyGreen: Sp,
  Library: zp,
  LibraryBig: qp,
  LibrarySquare: Ap,
  LifeBuoy: Hp,
  Ligature: jp,
  Lightbulb: Vp,
  LightbulbOff: Pp,
  LineChart: Fp,
  Link: Rp,
  Link2: Dp,
  Link2Off: Bp,
  Linkedin: Tp,
  List: Yp,
  ListChecks: Op,
  ListEnd: Up,
  ListFilter: Ep,
  ListMinus: Zp,
  ListMusic: Gp,
  ListOrdered: Np,
  ListPlus: Wp,
  ListRestart: _p,
  ListStart: Xp,
  ListTodo: $p,
  ListTree: Kp,
  ListVideo: Jp,
  ListX: Qp,
  Loader: tk,
  Loader2: ek,
  Locate: ok,
  LocateFixed: ak,
  LocateOff: ck,
  Lock: rk,
  LockKeyhole: nk,
  LogIn: ik,
  LogOut: dk,
  Lollipop: hk,
  Luggage: yk,
  MSquare: lk,
  Magnet: pk,
  Mail: fk,
  MailCheck: kk,
  MailMinus: sk,
  MailOpen: uk,
  MailPlus: Mk,
  MailQuestion: vk,
  MailSearch: mk,
  MailWarning: xk,
  MailX: gk,
  Mailbox: Lk,
  Mails: wk,
  Map: Sk,
  MapPin: Ik,
  MapPinOff: bk,
  MapPinned: Ck,
  Martini: qk,
  Maximize: zk,
  Maximize2: Ak,
  Medal: Hk,
  Megaphone: Pk,
  MegaphoneOff: jk,
  Meh: Vk,
  MemoryStick: Fk,
  Menu: Dk,
  MenuSquare: Bk,
  Merge: Rk,
  MessageCircle: $k,
  MessageCircleCode: Tk,
  MessageCircleDashed: Ok,
  MessageCircleHeart: Uk,
  MessageCircleMore: Ek,
  MessageCircleOff: Zk,
  MessageCirclePlus: Gk,
  MessageCircleQuestion: Nk,
  MessageCircleReply: Wk,
  MessageCircleWarning: _k,
  MessageCircleX: Xk,
  MessageSquare: y4,
  MessageSquareCode: Kk,
  MessageSquareDashed: Jk,
  MessageSquareDiff: Qk,
  MessageSquareDot: Yk,
  MessageSquareHeart: e4,
  MessageSquareMore: t4,
  MessageSquareOff: a4,
  MessageSquarePlus: c4,
  MessageSquareQuote: o4,
  MessageSquareReply: n4,
  MessageSquareShare: r4,
  MessageSquareText: i4,
  MessageSquareWarning: d4,
  MessageSquareX: h4,
  MessagesSquare: l4,
  Mic: s4,
  Mic2: p4,
  MicOff: k4,
  Microscope: u4,
  Microwave: M4,
  Milestone: v4,
  Milk: x4,
  MilkOff: m4,
  Minimize: f4,
  Minimize2: g4,
  Minus: b4,
  MinusCircle: L4,
  MinusSquare: w4,
  Monitor: B4,
  MonitorCheck: I4,
  MonitorDot: C4,
  MonitorDown: S4,
  MonitorOff: q4,
  MonitorPause: A4,
  MonitorPlay: z4,
  MonitorSmartphone: H4,
  MonitorSpeaker: j4,
  MonitorStop: P4,
  MonitorUp: V4,
  MonitorX: F4,
  Moon: R4,
  MoonStar: D4,
  MoreHorizontal: T4,
  MoreVertical: O4,
  Mountain: E4,
  MountainSnow: U4,
  Mouse: _4,
  MousePointer: W4,
  MousePointer2: Z4,
  MousePointerClick: G4,
  MousePointerSquare: pe,
  MousePointerSquareDashed: N4,
  Move: rs,
  Move3d: ke,
  MoveDiagonal: $4,
  MoveDiagonal2: X4,
  MoveDown: Q4,
  MoveDownLeft: K4,
  MoveDownRight: J4,
  MoveHorizontal: Y4,
  MoveLeft: es,
  MoveRight: ts,
  MoveUp: os,
  MoveUpLeft: as,
  MoveUpRight: cs,
  MoveVertical: ns,
  Music: ys,
  Music2: is,
  Music3: ds,
  Music4: hs,
  Navigation: ss,
  Navigation2: ps,
  Navigation2Off: ls,
  NavigationOff: ks,
  Network: us,
  Newspaper: Ms,
  Nfc: vs,
  Notebook: fs,
  NotebookPen: ms,
  NotebookTabs: xs,
  NotebookText: gs,
  NotepadText: ws,
  NotepadTextDashed: Ls,
  Nut: Is,
  NutOff: bs,
  Octagon: Cs,
  Option: Ss,
  Orbit: qs,
  Outdent: As,
  Package: Ds,
  Package2: zs,
  PackageCheck: Hs,
  PackageMinus: js,
  PackageOpen: Ps,
  PackagePlus: Vs,
  PackageSearch: Fs,
  PackageX: Bs,
  PaintBucket: Rs,
  Paintbrush: Os,
  Paintbrush2: Ts,
  Palette: Us,
  Palmtree: Es,
  PanelBottom: Ns,
  PanelBottomClose: Zs,
  PanelBottomDashed: se,
  PanelBottomOpen: Gs,
  PanelLeft: me,
  PanelLeftClose: ue,
  PanelLeftDashed: Me,
  PanelLeftOpen: ve,
  PanelRight: Xs,
  PanelRightClose: Ws,
  PanelRightDashed: xe,
  PanelRightOpen: _s,
  PanelTop: Js,
  PanelTopClose: $s,
  PanelTopDashed: ge,
  PanelTopOpen: Ks,
  PanelsLeftBottom: Qs,
  PanelsRightBottom: Ys,
  PanelsTopLeft: fe,
  Paperclip: e5,
  Parentheses: t5,
  ParkingCircle: c5,
  ParkingCircleOff: a5,
  ParkingMeter: o5,
  ParkingSquare: r5,
  ParkingSquareOff: n5,
  PartyPopper: i5,
  Pause: y5,
  PauseCircle: d5,
  PauseOctagon: h5,
  PawPrint: l5,
  PcCase: p5,
  Pen: we,
  PenLine: Le,
  PenSquare: y1,
  PenTool: k5,
  Pencil: M5,
  PencilLine: s5,
  PencilRuler: u5,
  Pentagon: v5,
  Percent: f5,
  PercentCircle: m5,
  PercentDiamond: x5,
  PercentSquare: g5,
  PersonStanding: L5,
  Phone: A5,
  PhoneCall: w5,
  PhoneForwarded: b5,
  PhoneIncoming: I5,
  PhoneMissed: C5,
  PhoneOff: S5,
  PhoneOutgoing: q5,
  Pi: H5,
  PiSquare: z5,
  Piano: j5,
  PictureInPicture: V5,
  PictureInPicture2: P5,
  PieChart: F5,
  PiggyBank: B5,
  Pilcrow: R5,
  PilcrowSquare: D5,
  Pill: T5,
  Pin: U5,
  PinOff: O5,
  Pipette: E5,
  Pizza: Z5,
  Plane: W5,
  PlaneLanding: G5,
  PlaneTakeoff: N5,
  Play: $5,
  PlayCircle: _5,
  PlaySquare: X5,
  Plug: Y5,
  Plug2: K5,
  PlugZap: Q5,
  PlugZap2: J5,
  Plus: a3,
  PlusCircle: e3,
  PlusSquare: t3,
  Pocket: o3,
  PocketKnife: c3,
  Podcast: n3,
  Pointer: i3,
  PointerOff: r3,
  Popcorn: d3,
  Popsicle: h3,
  PoundSterling: y3,
  Power: s3,
  PowerCircle: l3,
  PowerOff: p3,
  PowerSquare: k3,
  Presentation: u3,
  Printer: M3,
  Projector: v3,
  Puzzle: m3,
  Pyramid: x3,
  QrCode: g3,
  Quote: f3,
  Rabbit: L3,
  Radar: w3,
  Radiation: b3,
  Radio: S3,
  RadioReceiver: I3,
  RadioTower: C3,
  Radius: q3,
  RailSymbol: A3,
  Rainbow: z3,
  Rat: H3,
  Ratio: j3,
  Receipt: P3,
  RectangleHorizontal: V3,
  RectangleVertical: F3,
  Recycle: B3,
  Redo: T3,
  Redo2: D3,
  RedoDot: R3,
  RefreshCcw: U3,
  RefreshCcwDot: O3,
  RefreshCw: Z3,
  RefreshCwOff: E3,
  Refrigerator: G3,
  Regex: N3,
  RemoveFormatting: W3,
  Repeat: $3,
  Repeat1: _3,
  Repeat2: X3,
  Replace: J3,
  ReplaceAll: K3,
  Reply: Y3,
  ReplyAll: Q3,
  Rewind: eu,
  Ribbon: tu,
  Rocket: au,
  RockingChair: cu,
  RollerCoaster: ou,
  Rotate3d: be,
  RotateCcw: nu,
  RotateCw: ru,
  Route: du,
  RouteOff: iu,
  Router: hu,
  Rows2: Ie,
  Rows3: Ce,
  Rows4: yu,
  Rss: lu,
  Ruler: pu,
  RussianRuble: ku,
  Sailboat: su,
  Salad: uu,
  Sandwich: Mu,
  Satellite: mu,
  SatelliteDish: vu,
  Save: gu,
  SaveAll: xu,
  Scale: fu,
  Scale3d: Se,
  Scaling: Lu,
  Scan: Au,
  ScanBarcode: wu,
  ScanEye: bu,
  ScanFace: Iu,
  ScanLine: Cu,
  ScanSearch: Su,
  ScanText: qu,
  ScatterChart: zu,
  School: ju,
  School2: Hu,
  Scissors: Bu,
  ScissorsLineDashed: Pu,
  ScissorsSquare: Fu,
  ScissorsSquareDashedBottom: Vu,
  ScreenShare: Ru,
  ScreenShareOff: Du,
  Scroll: Ou,
  ScrollText: Tu,
  Search: Nu,
  SearchCheck: Uu,
  SearchCode: Eu,
  SearchSlash: Zu,
  SearchX: Gu,
  Send: _u,
  SendHorizontal: qe,
  SendToBack: Wu,
  SeparatorHorizontal: Xu,
  SeparatorVertical: $u,
  Server: Yu,
  ServerCog: Ku,
  ServerCrash: Ju,
  ServerOff: Qu,
  Settings: t6,
  Settings2: e6,
  Shapes: a6,
  Share: o6,
  Share2: c6,
  Sheet: n6,
  Shell: r6,
  Shield: M6,
  ShieldAlert: i6,
  ShieldBan: d6,
  ShieldCheck: h6,
  ShieldEllipsis: y6,
  ShieldHalf: l6,
  ShieldMinus: p6,
  ShieldOff: k6,
  ShieldPlus: s6,
  ShieldQuestion: u6,
  ShieldX: Ae,
  Ship: m6,
  ShipWheel: v6,
  Shirt: x6,
  ShoppingBag: g6,
  ShoppingBasket: f6,
  ShoppingCart: L6,
  Shovel: w6,
  ShowerHead: b6,
  Shrink: I6,
  Shrub: C6,
  Shuffle: S6,
  Sigma: A6,
  SigmaSquare: q6,
  Signal: V6,
  SignalHigh: z6,
  SignalLow: H6,
  SignalMedium: j6,
  SignalZero: P6,
  Signpost: B6,
  SignpostBig: F6,
  Siren: D6,
  SkipBack: R6,
  SkipForward: T6,
  Skull: O6,
  Slack: U6,
  Slash: E6,
  SlashSquare: ze,
  Slice: Z6,
  Sliders: N6,
  SlidersHorizontal: G6,
  Smartphone: X6,
  SmartphoneCharging: W6,
  SmartphoneNfc: _6,
  Smile: K6,
  SmilePlus: $6,
  Snail: J6,
  Snowflake: Q6,
  Sofa: Y6,
  Soup: e8,
  Space: t8,
  Spade: a8,
  Sparkle: c8,
  Sparkles: He,
  Speaker: o8,
  Speech: n8,
  SpellCheck: i8,
  SpellCheck2: r8,
  Spline: d8,
  Split: l8,
  SplitSquareHorizontal: h8,
  SplitSquareVertical: y8,
  SprayCan: p8,
  Sprout: k8,
  Square: v8,
  SquareDashedBottom: u8,
  SquareDashedBottomCode: s8,
  SquareStack: M8,
  SquareUser: Pe,
  SquareUserRound: je,
  Squircle: m8,
  Squirrel: x8,
  Stamp: g8,
  Star: w8,
  StarHalf: f8,
  StarOff: L8,
  StepBack: b8,
  StepForward: I8,
  Stethoscope: C8,
  Sticker: S8,
  StickyNote: q8,
  StopCircle: A8,
  Store: z8,
  StretchHorizontal: H8,
  StretchVertical: j8,
  Strikethrough: P8,
  Subscript: V8,
  Subtitles: F8,
  Sun: O8,
  SunDim: B8,
  SunMedium: D8,
  SunMoon: R8,
  SunSnow: T8,
  Sunrise: U8,
  Sunset: E8,
  Superscript: Z8,
  SwissFranc: G8,
  SwitchCamera: N8,
  Sword: W8,
  Swords: _8,
  Syringe: X8,
  Table: J8,
  Table2: $8,
  TableProperties: K8,
  Tablet: Y8,
  TabletSmartphone: Q8,
  Tablets: e7,
  Tag: t7,
  Tags: a7,
  Tally1: c7,
  Tally2: o7,
  Tally3: n7,
  Tally4: r7,
  Tally5: i7,
  Tangent: d7,
  Target: h7,
  Tent: l7,
  TentTree: y7,
  Terminal: k7,
  TerminalSquare: p7,
  TestTube: u7,
  TestTube2: s7,
  TestTubes: M7,
  Text: g7,
  TextCursor: m7,
  TextCursorInput: v7,
  TextQuote: x7,
  TextSelect: Ve,
  Theater: f7,
  Thermometer: b7,
  ThermometerSnowflake: L7,
  ThermometerSun: w7,
  ThumbsDown: I7,
  ThumbsUp: C7,
  Ticket: S7,
  Timer: z7,
  TimerOff: q7,
  TimerReset: A7,
  ToggleLeft: H7,
  ToggleRight: j7,
  Tornado: P7,
  Torus: V7,
  Touchpad: B7,
  TouchpadOff: F7,
  TowerControl: D7,
  ToyBrick: R7,
  Tractor: T7,
  TrafficCone: O7,
  TrainFront: E7,
  TrainFrontTunnel: U7,
  TrainTrack: Z7,
  TramFront: Fe,
  Trash: N7,
  Trash2: G7,
  TreeDeciduous: W7,
  TreePine: _7,
  Trees: X7,
  Trello: $7,
  TrendingDown: K7,
  TrendingUp: J7,
  Triangle: Y7,
  TriangleRight: Q7,
  Trophy: e9,
  Truck: t9,
  Turtle: a9,
  Tv: o9,
  Tv2: c9,
  Twitch: n9,
  Twitter: r9,
  Type: i9,
  Umbrella: h9,
  UmbrellaOff: d9,
  Underline: y9,
  Undo: k9,
  Undo2: l9,
  UndoDot: p9,
  UnfoldHorizontal: s9,
  UnfoldVertical: u9,
  Ungroup: M9,
  Unlink: m9,
  Unlink2: v9,
  Unlock: g9,
  UnlockKeyhole: x9,
  Unplug: f9,
  Upload: w9,
  UploadCloud: L9,
  Usb: b9,
  User: j9,
  UserCheck: I9,
  UserCog: C9,
  UserMinus: S9,
  UserPlus: q9,
  UserRound: Ue,
  UserRoundCheck: Be,
  UserRoundCog: De,
  UserRoundMinus: Re,
  UserRoundPlus: Te,
  UserRoundSearch: A9,
  UserRoundX: Oe,
  UserSearch: z9,
  UserX: H9,
  Users: P9,
  UsersRound: Ee,
  Utensils: F9,
  UtensilsCrossed: V9,
  UtilityPole: B9,
  Variable: D9,
  Vault: R9,
  Vegan: T9,
  VenetianMask: O9,
  Vibrate: E9,
  VibrateOff: U9,
  Video: G9,
  VideoOff: Z9,
  Videotape: N9,
  View: W9,
  Voicemail: _9,
  Volume: J9,
  Volume1: X9,
  Volume2: $9,
  VolumeX: K9,
  Vote: Q9,
  Wallet: tM,
  Wallet2: Y9,
  WalletCards: eM,
  Wallpaper: aM,
  Wand: oM,
  Wand2: cM,
  Warehouse: nM,
  WashingMachine: rM,
  Watch: iM,
  Waves: dM,
  Waypoints: hM,
  Webcam: yM,
  Webhook: lM,
  Weight: pM,
  Wheat: sM,
  WheatOff: kM,
  WholeWord: uM,
  Wifi: vM,
  WifiOff: MM,
  Wind: mM,
  Wine: gM,
  WineOff: xM,
  Workflow: fM,
  WrapText: LM,
  Wrench: wM,
  X: SM,
  XCircle: bM,
  XOctagon: IM,
  XSquare: CM,
  Youtube: qM,
  Zap: zM,
  ZapOff: AM,
  ZoomIn: HM,
  ZoomOut: jM
}, Symbol.toStringTag, { value: "Module" }));
/**
 * @license lucide-react v0.307.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AArrowDown: s2,
  AArrowDownIcon: s2,
  AArrowUp: u2,
  AArrowUpIcon: u2,
  ALargeSmall: M2,
  ALargeSmallIcon: M2,
  Accessibility: v2,
  AccessibilityIcon: v2,
  Activity: x2,
  ActivityIcon: x2,
  ActivitySquare: m2,
  ActivitySquareIcon: m2,
  AirVent: g2,
  AirVentIcon: g2,
  Airplay: f2,
  AirplayIcon: f2,
  AlarmCheck: z1,
  AlarmCheckIcon: z1,
  AlarmClock: w2,
  AlarmClockCheck: z1,
  AlarmClockCheckIcon: z1,
  AlarmClockIcon: w2,
  AlarmClockMinus: H1,
  AlarmClockMinusIcon: H1,
  AlarmClockOff: L2,
  AlarmClockOffIcon: L2,
  AlarmClockPlus: j1,
  AlarmClockPlusIcon: j1,
  AlarmMinus: H1,
  AlarmMinusIcon: H1,
  AlarmPlus: j1,
  AlarmPlusIcon: j1,
  AlarmSmoke: b2,
  AlarmSmokeIcon: b2,
  Album: I2,
  AlbumIcon: I2,
  AlertCircle: C2,
  AlertCircleIcon: C2,
  AlertOctagon: S2,
  AlertOctagonIcon: S2,
  AlertTriangle: q2,
  AlertTriangleIcon: q2,
  AlignCenter: H2,
  AlignCenterHorizontal: A2,
  AlignCenterHorizontalIcon: A2,
  AlignCenterIcon: H2,
  AlignCenterVertical: z2,
  AlignCenterVerticalIcon: z2,
  AlignEndHorizontal: j2,
  AlignEndHorizontalIcon: j2,
  AlignEndVertical: P2,
  AlignEndVerticalIcon: P2,
  AlignHorizontalDistributeCenter: V2,
  AlignHorizontalDistributeCenterIcon: V2,
  AlignHorizontalDistributeEnd: F2,
  AlignHorizontalDistributeEndIcon: F2,
  AlignHorizontalDistributeStart: B2,
  AlignHorizontalDistributeStartIcon: B2,
  AlignHorizontalJustifyCenter: D2,
  AlignHorizontalJustifyCenterIcon: D2,
  AlignHorizontalJustifyEnd: R2,
  AlignHorizontalJustifyEndIcon: R2,
  AlignHorizontalJustifyStart: T2,
  AlignHorizontalJustifyStartIcon: T2,
  AlignHorizontalSpaceAround: O2,
  AlignHorizontalSpaceAroundIcon: O2,
  AlignHorizontalSpaceBetween: U2,
  AlignHorizontalSpaceBetweenIcon: U2,
  AlignJustify: E2,
  AlignJustifyIcon: E2,
  AlignLeft: Z2,
  AlignLeftIcon: Z2,
  AlignRight: G2,
  AlignRightIcon: G2,
  AlignStartHorizontal: N2,
  AlignStartHorizontalIcon: N2,
  AlignStartVertical: W2,
  AlignStartVerticalIcon: W2,
  AlignVerticalDistributeCenter: _2,
  AlignVerticalDistributeCenterIcon: _2,
  AlignVerticalDistributeEnd: X2,
  AlignVerticalDistributeEndIcon: X2,
  AlignVerticalDistributeStart: $2,
  AlignVerticalDistributeStartIcon: $2,
  AlignVerticalJustifyCenter: K2,
  AlignVerticalJustifyCenterIcon: K2,
  AlignVerticalJustifyEnd: J2,
  AlignVerticalJustifyEndIcon: J2,
  AlignVerticalJustifyStart: Q2,
  AlignVerticalJustifyStartIcon: Q2,
  AlignVerticalSpaceAround: Y2,
  AlignVerticalSpaceAroundIcon: Y2,
  AlignVerticalSpaceBetween: et,
  AlignVerticalSpaceBetweenIcon: et,
  Ampersand: tt,
  AmpersandIcon: tt,
  Ampersands: at,
  AmpersandsIcon: at,
  Anchor: ct,
  AnchorIcon: ct,
  Angry: ot,
  AngryIcon: ot,
  Annoyed: nt,
  AnnoyedIcon: nt,
  Antenna: rt,
  AntennaIcon: rt,
  Anvil: it,
  AnvilIcon: it,
  Aperture: dt,
  ApertureIcon: dt,
  AppWindow: ht,
  AppWindowIcon: ht,
  Apple: yt,
  AppleIcon: yt,
  Archive: kt,
  ArchiveIcon: kt,
  ArchiveRestore: lt,
  ArchiveRestoreIcon: lt,
  ArchiveX: pt,
  ArchiveXIcon: pt,
  AreaChart: st,
  AreaChartIcon: st,
  Armchair: ut,
  ArmchairIcon: ut,
  ArrowBigDown: vt,
  ArrowBigDownDash: Mt,
  ArrowBigDownDashIcon: Mt,
  ArrowBigDownIcon: vt,
  ArrowBigLeft: xt,
  ArrowBigLeftDash: mt,
  ArrowBigLeftDashIcon: mt,
  ArrowBigLeftIcon: xt,
  ArrowBigRight: ft,
  ArrowBigRightDash: gt,
  ArrowBigRightDashIcon: gt,
  ArrowBigRightIcon: ft,
  ArrowBigUp: wt,
  ArrowBigUpDash: Lt,
  ArrowBigUpDashIcon: Lt,
  ArrowBigUpIcon: wt,
  ArrowDown: Tt,
  ArrowDown01: bt,
  ArrowDown01Icon: bt,
  ArrowDown10: It,
  ArrowDown10Icon: It,
  ArrowDownAZ: P1,
  ArrowDownAZIcon: P1,
  ArrowDownAz: P1,
  ArrowDownAzIcon: P1,
  ArrowDownCircle: Ct,
  ArrowDownCircleIcon: Ct,
  ArrowDownFromLine: St,
  ArrowDownFromLineIcon: St,
  ArrowDownIcon: Tt,
  ArrowDownLeft: zt,
  ArrowDownLeftFromCircle: qt,
  ArrowDownLeftFromCircleIcon: qt,
  ArrowDownLeftIcon: zt,
  ArrowDownLeftSquare: At,
  ArrowDownLeftSquareIcon: At,
  ArrowDownNarrowWide: Ht,
  ArrowDownNarrowWideIcon: Ht,
  ArrowDownRight: Vt,
  ArrowDownRightFromCircle: jt,
  ArrowDownRightFromCircleIcon: jt,
  ArrowDownRightIcon: Vt,
  ArrowDownRightSquare: Pt,
  ArrowDownRightSquareIcon: Pt,
  ArrowDownSquare: Ft,
  ArrowDownSquareIcon: Ft,
  ArrowDownToDot: Bt,
  ArrowDownToDotIcon: Bt,
  ArrowDownToLine: Dt,
  ArrowDownToLineIcon: Dt,
  ArrowDownUp: Rt,
  ArrowDownUpIcon: Rt,
  ArrowDownWideNarrow: V1,
  ArrowDownWideNarrowIcon: V1,
  ArrowDownZA: F1,
  ArrowDownZAIcon: F1,
  ArrowDownZa: F1,
  ArrowDownZaIcon: F1,
  ArrowLeft: Nt,
  ArrowLeftCircle: Ot,
  ArrowLeftCircleIcon: Ot,
  ArrowLeftFromLine: Ut,
  ArrowLeftFromLineIcon: Ut,
  ArrowLeftIcon: Nt,
  ArrowLeftRight: Et,
  ArrowLeftRightIcon: Et,
  ArrowLeftSquare: Zt,
  ArrowLeftSquareIcon: Zt,
  ArrowLeftToLine: Gt,
  ArrowLeftToLineIcon: Gt,
  ArrowRight: Jt,
  ArrowRightCircle: Wt,
  ArrowRightCircleIcon: Wt,
  ArrowRightFromLine: _t,
  ArrowRightFromLineIcon: _t,
  ArrowRightIcon: Jt,
  ArrowRightLeft: Xt,
  ArrowRightLeftIcon: Xt,
  ArrowRightSquare: $t,
  ArrowRightSquareIcon: $t,
  ArrowRightToLine: Kt,
  ArrowRightToLineIcon: Kt,
  ArrowUp: ka,
  ArrowUp01: Qt,
  ArrowUp01Icon: Qt,
  ArrowUp10: Yt,
  ArrowUp10Icon: Yt,
  ArrowUpAZ: B1,
  ArrowUpAZIcon: B1,
  ArrowUpAz: B1,
  ArrowUpAzIcon: B1,
  ArrowUpCircle: ea,
  ArrowUpCircleIcon: ea,
  ArrowUpDown: ta,
  ArrowUpDownIcon: ta,
  ArrowUpFromDot: aa,
  ArrowUpFromDotIcon: aa,
  ArrowUpFromLine: ca,
  ArrowUpFromLineIcon: ca,
  ArrowUpIcon: ka,
  ArrowUpLeft: ra,
  ArrowUpLeftFromCircle: oa,
  ArrowUpLeftFromCircleIcon: oa,
  ArrowUpLeftIcon: ra,
  ArrowUpLeftSquare: na,
  ArrowUpLeftSquareIcon: na,
  ArrowUpNarrowWide: D1,
  ArrowUpNarrowWideIcon: D1,
  ArrowUpRight: ha,
  ArrowUpRightFromCircle: ia,
  ArrowUpRightFromCircleIcon: ia,
  ArrowUpRightIcon: ha,
  ArrowUpRightSquare: da,
  ArrowUpRightSquareIcon: da,
  ArrowUpSquare: ya,
  ArrowUpSquareIcon: ya,
  ArrowUpToLine: la,
  ArrowUpToLineIcon: la,
  ArrowUpWideNarrow: pa,
  ArrowUpWideNarrowIcon: pa,
  ArrowUpZA: R1,
  ArrowUpZAIcon: R1,
  ArrowUpZa: R1,
  ArrowUpZaIcon: R1,
  ArrowsUpFromLine: sa,
  ArrowsUpFromLineIcon: sa,
  Asterisk: ua,
  AsteriskIcon: ua,
  AsteriskSquare: T1,
  AsteriskSquareIcon: T1,
  AtSign: Ma,
  AtSignIcon: Ma,
  Atom: va,
  AtomIcon: va,
  AudioLines: ma,
  AudioLinesIcon: ma,
  AudioWaveform: xa,
  AudioWaveformIcon: xa,
  Award: ga,
  AwardIcon: ga,
  Axe: fa,
  AxeIcon: fa,
  Axis3D: O1,
  Axis3DIcon: O1,
  Axis3d: O1,
  Axis3dIcon: O1,
  Baby: La,
  BabyIcon: La,
  Backpack: wa,
  BackpackIcon: wa,
  Badge: Ta,
  BadgeAlert: ba,
  BadgeAlertIcon: ba,
  BadgeCent: Ia,
  BadgeCentIcon: Ia,
  BadgeCheck: U1,
  BadgeCheckIcon: U1,
  BadgeDollarSign: Ca,
  BadgeDollarSignIcon: Ca,
  BadgeEuro: Sa,
  BadgeEuroIcon: Sa,
  BadgeHelp: qa,
  BadgeHelpIcon: qa,
  BadgeIcon: Ta,
  BadgeIndianRupee: Aa,
  BadgeIndianRupeeIcon: Aa,
  BadgeInfo: za,
  BadgeInfoIcon: za,
  BadgeJapaneseYen: Ha,
  BadgeJapaneseYenIcon: Ha,
  BadgeMinus: ja,
  BadgeMinusIcon: ja,
  BadgePercent: Pa,
  BadgePercentIcon: Pa,
  BadgePlus: Va,
  BadgePlusIcon: Va,
  BadgePoundSterling: Fa,
  BadgePoundSterlingIcon: Fa,
  BadgeRussianRuble: Ba,
  BadgeRussianRubleIcon: Ba,
  BadgeSwissFranc: Da,
  BadgeSwissFrancIcon: Da,
  BadgeX: Ra,
  BadgeXIcon: Ra,
  BaggageClaim: Oa,
  BaggageClaimIcon: Oa,
  Ban: Ua,
  BanIcon: Ua,
  Banana: Ea,
  BananaIcon: Ea,
  Banknote: Za,
  BanknoteIcon: Za,
  BarChart: Ka,
  BarChart2: Ga,
  BarChart2Icon: Ga,
  BarChart3: Na,
  BarChart3Icon: Na,
  BarChart4: Wa,
  BarChart4Icon: Wa,
  BarChartBig: _a,
  BarChartBigIcon: _a,
  BarChartHorizontal: $a,
  BarChartHorizontalBig: Xa,
  BarChartHorizontalBigIcon: Xa,
  BarChartHorizontalIcon: $a,
  BarChartIcon: Ka,
  Barcode: Ja,
  BarcodeIcon: Ja,
  Baseline: Qa,
  BaselineIcon: Qa,
  Bath: Ya,
  BathIcon: Ya,
  Battery: n0,
  BatteryCharging: e0,
  BatteryChargingIcon: e0,
  BatteryFull: t0,
  BatteryFullIcon: t0,
  BatteryIcon: n0,
  BatteryLow: a0,
  BatteryLowIcon: a0,
  BatteryMedium: c0,
  BatteryMediumIcon: c0,
  BatteryWarning: o0,
  BatteryWarningIcon: o0,
  Beaker: r0,
  BeakerIcon: r0,
  Bean: d0,
  BeanIcon: d0,
  BeanOff: i0,
  BeanOffIcon: i0,
  Bed: l0,
  BedDouble: h0,
  BedDoubleIcon: h0,
  BedIcon: l0,
  BedSingle: y0,
  BedSingleIcon: y0,
  Beef: p0,
  BeefIcon: p0,
  Beer: k0,
  BeerIcon: k0,
  Bell: g0,
  BellDot: s0,
  BellDotIcon: s0,
  BellElectric: u0,
  BellElectricIcon: u0,
  BellIcon: g0,
  BellMinus: M0,
  BellMinusIcon: M0,
  BellOff: v0,
  BellOffIcon: v0,
  BellPlus: m0,
  BellPlusIcon: m0,
  BellRing: x0,
  BellRingIcon: x0,
  BetweenHorizonalEnd: E1,
  BetweenHorizonalEndIcon: E1,
  BetweenHorizonalStart: Z1,
  BetweenHorizonalStartIcon: Z1,
  BetweenHorizontalEnd: E1,
  BetweenHorizontalEndIcon: E1,
  BetweenHorizontalStart: Z1,
  BetweenHorizontalStartIcon: Z1,
  BetweenVerticalEnd: f0,
  BetweenVerticalEndIcon: f0,
  BetweenVerticalStart: L0,
  BetweenVerticalStartIcon: L0,
  Bike: w0,
  BikeIcon: w0,
  Binary: b0,
  BinaryIcon: b0,
  Biohazard: I0,
  BiohazardIcon: I0,
  Bird: C0,
  BirdIcon: C0,
  Bitcoin: S0,
  BitcoinIcon: S0,
  Blinds: q0,
  BlindsIcon: q0,
  Blocks: A0,
  BlocksIcon: A0,
  Bluetooth: P0,
  BluetoothConnected: z0,
  BluetoothConnectedIcon: z0,
  BluetoothIcon: P0,
  BluetoothOff: H0,
  BluetoothOffIcon: H0,
  BluetoothSearching: j0,
  BluetoothSearchingIcon: j0,
  Bold: V0,
  BoldIcon: V0,
  Bolt: F0,
  BoltIcon: F0,
  Bomb: B0,
  BombIcon: B0,
  Bone: D0,
  BoneIcon: D0,
  Book: rc,
  BookA: R0,
  BookAIcon: R0,
  BookAudio: T0,
  BookAudioIcon: T0,
  BookCheck: O0,
  BookCheckIcon: O0,
  BookCopy: U0,
  BookCopyIcon: U0,
  BookDashed: G1,
  BookDashedIcon: G1,
  BookDown: E0,
  BookDownIcon: E0,
  BookHeadphones: Z0,
  BookHeadphonesIcon: Z0,
  BookHeart: G0,
  BookHeartIcon: G0,
  BookIcon: rc,
  BookImage: N0,
  BookImageIcon: N0,
  BookKey: W0,
  BookKeyIcon: W0,
  BookLock: _0,
  BookLockIcon: _0,
  BookMarked: X0,
  BookMarkedIcon: X0,
  BookMinus: $0,
  BookMinusIcon: $0,
  BookOpen: Q0,
  BookOpenCheck: K0,
  BookOpenCheckIcon: K0,
  BookOpenIcon: Q0,
  BookOpenText: J0,
  BookOpenTextIcon: J0,
  BookPlus: Y0,
  BookPlusIcon: Y0,
  BookTemplate: G1,
  BookTemplateIcon: G1,
  BookText: ec,
  BookTextIcon: ec,
  BookType: tc,
  BookTypeIcon: tc,
  BookUp: cc,
  BookUp2: ac,
  BookUp2Icon: ac,
  BookUpIcon: cc,
  BookUser: oc,
  BookUserIcon: oc,
  BookX: nc,
  BookXIcon: nc,
  Bookmark: lc,
  BookmarkCheck: ic,
  BookmarkCheckIcon: ic,
  BookmarkIcon: lc,
  BookmarkMinus: dc,
  BookmarkMinusIcon: dc,
  BookmarkPlus: hc,
  BookmarkPlusIcon: hc,
  BookmarkX: yc,
  BookmarkXIcon: yc,
  BoomBox: pc,
  BoomBoxIcon: pc,
  Bot: kc,
  BotIcon: kc,
  Box: uc,
  BoxIcon: uc,
  BoxSelect: sc,
  BoxSelectIcon: sc,
  Boxes: Mc,
  BoxesIcon: Mc,
  Braces: N1,
  BracesIcon: N1,
  Brackets: vc,
  BracketsIcon: vc,
  Brain: gc,
  BrainCircuit: mc,
  BrainCircuitIcon: mc,
  BrainCog: xc,
  BrainCogIcon: xc,
  BrainIcon: gc,
  BrickWall: fc,
  BrickWallIcon: fc,
  Briefcase: Lc,
  BriefcaseIcon: Lc,
  BringToFront: wc,
  BringToFrontIcon: wc,
  Brush: bc,
  BrushIcon: bc,
  Bug: Sc,
  BugIcon: Sc,
  BugOff: Ic,
  BugOffIcon: Ic,
  BugPlay: Cc,
  BugPlayIcon: Cc,
  Building: Ac,
  Building2: qc,
  Building2Icon: qc,
  BuildingIcon: Ac,
  Bus: Hc,
  BusFront: zc,
  BusFrontIcon: zc,
  BusIcon: Hc,
  Cable: Pc,
  CableCar: jc,
  CableCarIcon: jc,
  CableIcon: Pc,
  Cake: Fc,
  CakeIcon: Fc,
  CakeSlice: Vc,
  CakeSliceIcon: Vc,
  Calculator: Bc,
  CalculatorIcon: Bc,
  Calendar: $c,
  CalendarCheck: Rc,
  CalendarCheck2: Dc,
  CalendarCheck2Icon: Dc,
  CalendarCheckIcon: Rc,
  CalendarClock: Tc,
  CalendarClockIcon: Tc,
  CalendarDays: Oc,
  CalendarDaysIcon: Oc,
  CalendarHeart: Uc,
  CalendarHeartIcon: Uc,
  CalendarIcon: $c,
  CalendarMinus: Ec,
  CalendarMinusIcon: Ec,
  CalendarOff: Zc,
  CalendarOffIcon: Zc,
  CalendarPlus: Gc,
  CalendarPlusIcon: Gc,
  CalendarRange: Nc,
  CalendarRangeIcon: Nc,
  CalendarSearch: Wc,
  CalendarSearchIcon: Wc,
  CalendarX: Xc,
  CalendarX2: _c,
  CalendarX2Icon: _c,
  CalendarXIcon: Xc,
  Camera: Jc,
  CameraIcon: Jc,
  CameraOff: Kc,
  CameraOffIcon: Kc,
  CandlestickChart: Qc,
  CandlestickChartIcon: Qc,
  Candy: to,
  CandyCane: Yc,
  CandyCaneIcon: Yc,
  CandyIcon: to,
  CandyOff: eo,
  CandyOffIcon: eo,
  Car: oo,
  CarFront: ao,
  CarFrontIcon: ao,
  CarIcon: oo,
  CarTaxiFront: co,
  CarTaxiFrontIcon: co,
  Caravan: no,
  CaravanIcon: no,
  Carrot: ro,
  CarrotIcon: ro,
  CaseLower: io,
  CaseLowerIcon: io,
  CaseSensitive: ho,
  CaseSensitiveIcon: ho,
  CaseUpper: yo,
  CaseUpperIcon: yo,
  CassetteTape: lo,
  CassetteTapeIcon: lo,
  Cast: po,
  CastIcon: po,
  Castle: ko,
  CastleIcon: ko,
  Cat: so,
  CatIcon: so,
  Cctv: uo,
  CctvIcon: uo,
  Check: fo,
  CheckCheck: Mo,
  CheckCheckIcon: Mo,
  CheckCircle: mo,
  CheckCircle2: vo,
  CheckCircle2Icon: vo,
  CheckCircleIcon: mo,
  CheckIcon: fo,
  CheckSquare: go,
  CheckSquare2: xo,
  CheckSquare2Icon: xo,
  CheckSquareIcon: go,
  ChefHat: Lo,
  ChefHatIcon: Lo,
  Cherry: wo,
  CherryIcon: wo,
  ChevronDown: Co,
  ChevronDownCircle: bo,
  ChevronDownCircleIcon: bo,
  ChevronDownIcon: Co,
  ChevronDownSquare: Io,
  ChevronDownSquareIcon: Io,
  ChevronFirst: So,
  ChevronFirstIcon: So,
  ChevronLast: qo,
  ChevronLastIcon: qo,
  ChevronLeft: Ho,
  ChevronLeftCircle: Ao,
  ChevronLeftCircleIcon: Ao,
  ChevronLeftIcon: Ho,
  ChevronLeftSquare: zo,
  ChevronLeftSquareIcon: zo,
  ChevronRight: Vo,
  ChevronRightCircle: jo,
  ChevronRightCircleIcon: jo,
  ChevronRightIcon: Vo,
  ChevronRightSquare: Po,
  ChevronRightSquareIcon: Po,
  ChevronUp: Do,
  ChevronUpCircle: Fo,
  ChevronUpCircleIcon: Fo,
  ChevronUpIcon: Do,
  ChevronUpSquare: Bo,
  ChevronUpSquareIcon: Bo,
  ChevronsDown: To,
  ChevronsDownIcon: To,
  ChevronsDownUp: Ro,
  ChevronsDownUpIcon: Ro,
  ChevronsLeft: Uo,
  ChevronsLeftIcon: Uo,
  ChevronsLeftRight: Oo,
  ChevronsLeftRightIcon: Oo,
  ChevronsRight: Zo,
  ChevronsRightIcon: Zo,
  ChevronsRightLeft: Eo,
  ChevronsRightLeftIcon: Eo,
  ChevronsUp: No,
  ChevronsUpDown: Go,
  ChevronsUpDownIcon: Go,
  ChevronsUpIcon: No,
  Chrome: Wo,
  ChromeIcon: Wo,
  Church: _o,
  ChurchIcon: _o,
  Cigarette: $o,
  CigaretteIcon: $o,
  CigaretteOff: Xo,
  CigaretteOffIcon: Xo,
  Circle: on,
  CircleDashed: Ko,
  CircleDashedIcon: Ko,
  CircleDollarSign: Jo,
  CircleDollarSignIcon: Jo,
  CircleDot: Yo,
  CircleDotDashed: Qo,
  CircleDotDashedIcon: Qo,
  CircleDotIcon: Yo,
  CircleEllipsis: en,
  CircleEllipsisIcon: en,
  CircleEqual: tn,
  CircleEqualIcon: tn,
  CircleIcon: on,
  CircleOff: an,
  CircleOffIcon: an,
  CircleSlash: cn,
  CircleSlash2: W1,
  CircleSlash2Icon: W1,
  CircleSlashIcon: cn,
  CircleSlashed: W1,
  CircleSlashedIcon: W1,
  CircleUser: X1,
  CircleUserIcon: X1,
  CircleUserRound: _1,
  CircleUserRoundIcon: _1,
  CircuitBoard: nn,
  CircuitBoardIcon: nn,
  Citrus: rn,
  CitrusIcon: rn,
  Clapperboard: dn,
  ClapperboardIcon: dn,
  Clipboard: un,
  ClipboardCheck: hn,
  ClipboardCheckIcon: hn,
  ClipboardCopy: yn,
  ClipboardCopyIcon: yn,
  ClipboardEdit: K1,
  ClipboardEditIcon: K1,
  ClipboardIcon: un,
  ClipboardList: ln,
  ClipboardListIcon: ln,
  ClipboardPaste: pn,
  ClipboardPasteIcon: pn,
  ClipboardPen: K1,
  ClipboardPenIcon: K1,
  ClipboardPenLine: $1,
  ClipboardPenLineIcon: $1,
  ClipboardSignature: $1,
  ClipboardSignatureIcon: $1,
  ClipboardType: kn,
  ClipboardTypeIcon: kn,
  ClipboardX: sn,
  ClipboardXIcon: sn,
  Clock: qn,
  Clock1: Mn,
  Clock10: vn,
  Clock10Icon: vn,
  Clock11: mn,
  Clock11Icon: mn,
  Clock12: xn,
  Clock12Icon: xn,
  Clock1Icon: Mn,
  Clock2: gn,
  Clock2Icon: gn,
  Clock3: fn,
  Clock3Icon: fn,
  Clock4: Ln,
  Clock4Icon: Ln,
  Clock5: wn,
  Clock5Icon: wn,
  Clock6: bn,
  Clock6Icon: bn,
  Clock7: In,
  Clock7Icon: In,
  Clock8: Cn,
  Clock8Icon: Cn,
  Clock9: Sn,
  Clock9Icon: Sn,
  ClockIcon: qn,
  Cloud: En,
  CloudCog: An,
  CloudCogIcon: An,
  CloudDrizzle: zn,
  CloudDrizzleIcon: zn,
  CloudFog: Hn,
  CloudFogIcon: Hn,
  CloudHail: jn,
  CloudHailIcon: jn,
  CloudIcon: En,
  CloudLightning: Pn,
  CloudLightningIcon: Pn,
  CloudMoon: Fn,
  CloudMoonIcon: Fn,
  CloudMoonRain: Vn,
  CloudMoonRainIcon: Vn,
  CloudOff: Bn,
  CloudOffIcon: Bn,
  CloudRain: Rn,
  CloudRainIcon: Rn,
  CloudRainWind: Dn,
  CloudRainWindIcon: Dn,
  CloudSnow: Tn,
  CloudSnowIcon: Tn,
  CloudSun: Un,
  CloudSunIcon: Un,
  CloudSunRain: On,
  CloudSunRainIcon: On,
  Cloudy: Zn,
  CloudyIcon: Zn,
  Clover: Gn,
  CloverIcon: Gn,
  Club: Nn,
  ClubIcon: Nn,
  Code: _n,
  Code2: Wn,
  Code2Icon: Wn,
  CodeIcon: _n,
  CodeSquare: J1,
  CodeSquareIcon: J1,
  Codepen: Xn,
  CodepenIcon: Xn,
  Codesandbox: $n,
  CodesandboxIcon: $n,
  Coffee: Kn,
  CoffeeIcon: Kn,
  Cog: Jn,
  CogIcon: Jn,
  Coins: Qn,
  CoinsIcon: Qn,
  Columns: Q1,
  Columns2: Q1,
  Columns2Icon: Q1,
  Columns3: Y1,
  Columns3Icon: Y1,
  Columns4: Yn,
  Columns4Icon: Yn,
  ColumnsIcon: Q1,
  Combine: er,
  CombineIcon: er,
  Command: tr,
  CommandIcon: tr,
  Compass: ar,
  CompassIcon: ar,
  Component: cr,
  ComponentIcon: cr,
  Computer: or,
  ComputerIcon: or,
  ConciergeBell: nr,
  ConciergeBellIcon: nr,
  Cone: rr,
  ConeIcon: rr,
  Construction: ir,
  ConstructionIcon: ir,
  Contact: hr,
  Contact2: dr,
  Contact2Icon: dr,
  ContactIcon: hr,
  Container: yr,
  ContainerIcon: yr,
  Contrast: lr,
  ContrastIcon: lr,
  Cookie: pr,
  CookieIcon: pr,
  CookingPot: kr,
  CookingPotIcon: kr,
  Copy: xr,
  CopyCheck: sr,
  CopyCheckIcon: sr,
  CopyIcon: xr,
  CopyMinus: ur,
  CopyMinusIcon: ur,
  CopyPlus: Mr,
  CopyPlusIcon: Mr,
  CopySlash: vr,
  CopySlashIcon: vr,
  CopyX: mr,
  CopyXIcon: mr,
  Copyleft: gr,
  CopyleftIcon: gr,
  Copyright: fr,
  CopyrightIcon: fr,
  CornerDownLeft: Lr,
  CornerDownLeftIcon: Lr,
  CornerDownRight: wr,
  CornerDownRightIcon: wr,
  CornerLeftDown: br,
  CornerLeftDownIcon: br,
  CornerLeftUp: Ir,
  CornerLeftUpIcon: Ir,
  CornerRightDown: Cr,
  CornerRightDownIcon: Cr,
  CornerRightUp: Sr,
  CornerRightUpIcon: Sr,
  CornerUpLeft: qr,
  CornerUpLeftIcon: qr,
  CornerUpRight: Ar,
  CornerUpRightIcon: Ar,
  Cpu: zr,
  CpuIcon: zr,
  CreativeCommons: Hr,
  CreativeCommonsIcon: Hr,
  CreditCard: jr,
  CreditCardIcon: jr,
  Croissant: Pr,
  CroissantIcon: Pr,
  Crop: Vr,
  CropIcon: Vr,
  Cross: Fr,
  CrossIcon: Fr,
  Crosshair: Br,
  CrosshairIcon: Br,
  Crown: Dr,
  CrownIcon: Dr,
  Cuboid: Rr,
  CuboidIcon: Rr,
  CupSoda: Tr,
  CupSodaIcon: Tr,
  CurlyBraces: N1,
  CurlyBracesIcon: N1,
  Currency: Or,
  CurrencyIcon: Or,
  Cylinder: Ur,
  CylinderIcon: Ur,
  Database: Gr,
  DatabaseBackup: Er,
  DatabaseBackupIcon: Er,
  DatabaseIcon: Gr,
  DatabaseZap: Zr,
  DatabaseZapIcon: Zr,
  Delete: Nr,
  DeleteIcon: Nr,
  Dessert: Wr,
  DessertIcon: Wr,
  Diameter: _r,
  DiameterIcon: _r,
  Diamond: Xr,
  DiamondIcon: Xr,
  Dice1: $r,
  Dice1Icon: $r,
  Dice2: Kr,
  Dice2Icon: Kr,
  Dice3: Jr,
  Dice3Icon: Jr,
  Dice4: Qr,
  Dice4Icon: Qr,
  Dice5: Yr,
  Dice5Icon: Yr,
  Dice6: ei,
  Dice6Icon: ei,
  Dices: ti,
  DicesIcon: ti,
  Diff: ai,
  DiffIcon: ai,
  Disc: ri,
  Disc2: ci,
  Disc2Icon: ci,
  Disc3: oi,
  Disc3Icon: oi,
  DiscAlbum: ni,
  DiscAlbumIcon: ni,
  DiscIcon: ri,
  Divide: hi,
  DivideCircle: ii,
  DivideCircleIcon: ii,
  DivideIcon: hi,
  DivideSquare: di,
  DivideSquareIcon: di,
  Dna: li,
  DnaIcon: li,
  DnaOff: yi,
  DnaOffIcon: yi,
  Dog: pi,
  DogIcon: pi,
  DollarSign: ki,
  DollarSignIcon: ki,
  Donut: si,
  DonutIcon: si,
  DoorClosed: ui,
  DoorClosedIcon: ui,
  DoorOpen: Mi,
  DoorOpenIcon: Mi,
  Dot: vi,
  DotIcon: vi,
  DotSquare: ee,
  DotSquareIcon: ee,
  Download: xi,
  DownloadCloud: mi,
  DownloadCloudIcon: mi,
  DownloadIcon: xi,
  DraftingCompass: gi,
  DraftingCompassIcon: gi,
  Drama: fi,
  DramaIcon: fi,
  Dribbble: Li,
  DribbbleIcon: Li,
  Drill: wi,
  DrillIcon: wi,
  Droplet: bi,
  DropletIcon: bi,
  Droplets: Ii,
  DropletsIcon: Ii,
  Drum: Ci,
  DrumIcon: Ci,
  Drumstick: Si,
  DrumstickIcon: Si,
  Dumbbell: qi,
  DumbbellIcon: qi,
  Ear: zi,
  EarIcon: zi,
  EarOff: Ai,
  EarOffIcon: Ai,
  Edit: y1,
  Edit2: we,
  Edit2Icon: we,
  Edit3: Le,
  Edit3Icon: Le,
  EditIcon: y1,
  Egg: Pi,
  EggFried: Hi,
  EggFriedIcon: Hi,
  EggIcon: Pi,
  EggOff: ji,
  EggOffIcon: ji,
  Equal: Fi,
  EqualIcon: Fi,
  EqualNot: Vi,
  EqualNotIcon: Vi,
  EqualSquare: te,
  EqualSquareIcon: te,
  Eraser: Bi,
  EraserIcon: Bi,
  Euro: Di,
  EuroIcon: Di,
  Expand: Ri,
  ExpandIcon: Ri,
  ExternalLink: Ti,
  ExternalLinkIcon: Ti,
  Eye: Ui,
  EyeIcon: Ui,
  EyeOff: Oi,
  EyeOffIcon: Oi,
  Facebook: Ei,
  FacebookIcon: Ei,
  Factory: Zi,
  FactoryIcon: Zi,
  Fan: Gi,
  FanIcon: Gi,
  FastForward: Ni,
  FastForwardIcon: Ni,
  Feather: Wi,
  FeatherIcon: Wi,
  Fence: _i,
  FenceIcon: _i,
  FerrisWheel: Xi,
  FerrisWheelIcon: Xi,
  Figma: $i,
  FigmaIcon: $i,
  File: Xd,
  FileArchive: Ki,
  FileArchiveIcon: Ki,
  FileAudio: Qi,
  FileAudio2: Ji,
  FileAudio2Icon: Ji,
  FileAudioIcon: Qi,
  FileAxis3D: ae,
  FileAxis3DIcon: ae,
  FileAxis3d: ae,
  FileAxis3dIcon: ae,
  FileBadge: ed,
  FileBadge2: Yi,
  FileBadge2Icon: Yi,
  FileBadgeIcon: ed,
  FileBarChart: ad,
  FileBarChart2: td,
  FileBarChart2Icon: td,
  FileBarChartIcon: ad,
  FileBox: cd,
  FileBoxIcon: cd,
  FileCheck: nd,
  FileCheck2: od,
  FileCheck2Icon: od,
  FileCheckIcon: nd,
  FileClock: rd,
  FileClockIcon: rd,
  FileCode: dd,
  FileCode2: id,
  FileCode2Icon: id,
  FileCodeIcon: dd,
  FileCog: ce,
  FileCog2: ce,
  FileCog2Icon: ce,
  FileCogIcon: ce,
  FileDiff: hd,
  FileDiffIcon: hd,
  FileDigit: yd,
  FileDigitIcon: yd,
  FileDown: ld,
  FileDownIcon: ld,
  FileEdit: ne,
  FileEditIcon: ne,
  FileHeart: pd,
  FileHeartIcon: pd,
  FileIcon: Xd,
  FileImage: kd,
  FileImageIcon: kd,
  FileInput: sd,
  FileInputIcon: sd,
  FileJson: Md,
  FileJson2: ud,
  FileJson2Icon: ud,
  FileJsonIcon: Md,
  FileKey: md,
  FileKey2: vd,
  FileKey2Icon: vd,
  FileKeyIcon: md,
  FileLineChart: xd,
  FileLineChartIcon: xd,
  FileLock: fd,
  FileLock2: gd,
  FileLock2Icon: gd,
  FileLockIcon: fd,
  FileMinus: wd,
  FileMinus2: Ld,
  FileMinus2Icon: Ld,
  FileMinusIcon: wd,
  FileMusic: bd,
  FileMusicIcon: bd,
  FileOutput: Id,
  FileOutputIcon: Id,
  FilePen: ne,
  FilePenIcon: ne,
  FilePenLine: oe,
  FilePenLineIcon: oe,
  FilePieChart: Cd,
  FilePieChartIcon: Cd,
  FilePlus: qd,
  FilePlus2: Sd,
  FilePlus2Icon: Sd,
  FilePlusIcon: qd,
  FileQuestion: Ad,
  FileQuestionIcon: Ad,
  FileScan: zd,
  FileScanIcon: zd,
  FileSearch: jd,
  FileSearch2: Hd,
  FileSearch2Icon: Hd,
  FileSearchIcon: jd,
  FileSignature: oe,
  FileSignatureIcon: oe,
  FileSpreadsheet: Pd,
  FileSpreadsheetIcon: Pd,
  FileStack: Vd,
  FileStackIcon: Vd,
  FileSymlink: Fd,
  FileSymlinkIcon: Fd,
  FileTerminal: Bd,
  FileTerminalIcon: Bd,
  FileText: Dd,
  FileTextIcon: Dd,
  FileType: Td,
  FileType2: Rd,
  FileType2Icon: Rd,
  FileTypeIcon: Td,
  FileUp: Od,
  FileUpIcon: Od,
  FileVideo: Ed,
  FileVideo2: Ud,
  FileVideo2Icon: Ud,
  FileVideoIcon: Ed,
  FileVolume: Gd,
  FileVolume2: Zd,
  FileVolume2Icon: Zd,
  FileVolumeIcon: Gd,
  FileWarning: Nd,
  FileWarningIcon: Nd,
  FileX: _d,
  FileX2: Wd,
  FileX2Icon: Wd,
  FileXIcon: _d,
  Files: $d,
  FilesIcon: $d,
  Film: Kd,
  FilmIcon: Kd,
  Filter: Qd,
  FilterIcon: Qd,
  FilterX: Jd,
  FilterXIcon: Jd,
  Fingerprint: Yd,
  FingerprintIcon: Yd,
  FireExtinguisher: eh,
  FireExtinguisherIcon: eh,
  Fish: ch,
  FishIcon: ch,
  FishOff: th,
  FishOffIcon: th,
  FishSymbol: ah,
  FishSymbolIcon: ah,
  Flag: ih,
  FlagIcon: ih,
  FlagOff: oh,
  FlagOffIcon: oh,
  FlagTriangleLeft: nh,
  FlagTriangleLeftIcon: nh,
  FlagTriangleRight: rh,
  FlagTriangleRightIcon: rh,
  Flame: hh,
  FlameIcon: hh,
  FlameKindling: dh,
  FlameKindlingIcon: dh,
  Flashlight: lh,
  FlashlightIcon: lh,
  FlashlightOff: yh,
  FlashlightOffIcon: yh,
  FlaskConical: kh,
  FlaskConicalIcon: kh,
  FlaskConicalOff: ph,
  FlaskConicalOffIcon: ph,
  FlaskRound: sh,
  FlaskRoundIcon: sh,
  FlipHorizontal: Mh,
  FlipHorizontal2: uh,
  FlipHorizontal2Icon: uh,
  FlipHorizontalIcon: Mh,
  FlipVertical: mh,
  FlipVertical2: vh,
  FlipVertical2Icon: vh,
  FlipVerticalIcon: mh,
  Flower: gh,
  Flower2: xh,
  Flower2Icon: xh,
  FlowerIcon: gh,
  Focus: fh,
  FocusIcon: fh,
  FoldHorizontal: Lh,
  FoldHorizontalIcon: Lh,
  FoldVertical: wh,
  FoldVerticalIcon: wh,
  Folder: Kh,
  FolderArchive: bh,
  FolderArchiveIcon: bh,
  FolderCheck: Ih,
  FolderCheckIcon: Ih,
  FolderClock: Ch,
  FolderClockIcon: Ch,
  FolderClosed: Sh,
  FolderClosedIcon: Sh,
  FolderCog: re,
  FolderCog2: re,
  FolderCog2Icon: re,
  FolderCogIcon: re,
  FolderDot: qh,
  FolderDotIcon: qh,
  FolderDown: Ah,
  FolderDownIcon: Ah,
  FolderEdit: ie,
  FolderEditIcon: ie,
  FolderGit: Hh,
  FolderGit2: zh,
  FolderGit2Icon: zh,
  FolderGitIcon: Hh,
  FolderHeart: jh,
  FolderHeartIcon: jh,
  FolderIcon: Kh,
  FolderInput: Ph,
  FolderInputIcon: Ph,
  FolderKanban: Vh,
  FolderKanbanIcon: Vh,
  FolderKey: Fh,
  FolderKeyIcon: Fh,
  FolderLock: Bh,
  FolderLockIcon: Bh,
  FolderMinus: Dh,
  FolderMinusIcon: Dh,
  FolderOpen: Th,
  FolderOpenDot: Rh,
  FolderOpenDotIcon: Rh,
  FolderOpenIcon: Th,
  FolderOutput: Oh,
  FolderOutputIcon: Oh,
  FolderPen: ie,
  FolderPenIcon: ie,
  FolderPlus: Uh,
  FolderPlusIcon: Uh,
  FolderRoot: Eh,
  FolderRootIcon: Eh,
  FolderSearch: Gh,
  FolderSearch2: Zh,
  FolderSearch2Icon: Zh,
  FolderSearchIcon: Gh,
  FolderSymlink: Nh,
  FolderSymlinkIcon: Nh,
  FolderSync: Wh,
  FolderSyncIcon: Wh,
  FolderTree: _h,
  FolderTreeIcon: _h,
  FolderUp: Xh,
  FolderUpIcon: Xh,
  FolderX: $h,
  FolderXIcon: $h,
  Folders: Jh,
  FoldersIcon: Jh,
  Footprints: Qh,
  FootprintsIcon: Qh,
  Forklift: Yh,
  ForkliftIcon: Yh,
  FormInput: ey,
  FormInputIcon: ey,
  Forward: ty,
  ForwardIcon: ty,
  Frame: ay,
  FrameIcon: ay,
  Framer: cy,
  FramerIcon: cy,
  Frown: oy,
  FrownIcon: oy,
  Fuel: ny,
  FuelIcon: ny,
  Fullscreen: ry,
  FullscreenIcon: ry,
  FunctionSquare: iy,
  FunctionSquareIcon: iy,
  GalleryHorizontal: hy,
  GalleryHorizontalEnd: dy,
  GalleryHorizontalEndIcon: dy,
  GalleryHorizontalIcon: hy,
  GalleryThumbnails: yy,
  GalleryThumbnailsIcon: yy,
  GalleryVertical: py,
  GalleryVerticalEnd: ly,
  GalleryVerticalEndIcon: ly,
  GalleryVerticalIcon: py,
  Gamepad: sy,
  Gamepad2: ky,
  Gamepad2Icon: ky,
  GamepadIcon: sy,
  GanttChart: uy,
  GanttChartIcon: uy,
  GanttChartSquare: d1,
  GanttChartSquareIcon: d1,
  GanttSquare: d1,
  GanttSquareIcon: d1,
  Gauge: vy,
  GaugeCircle: My,
  GaugeCircleIcon: My,
  GaugeIcon: vy,
  Gavel: my,
  GavelIcon: my,
  Gem: xy,
  GemIcon: xy,
  Ghost: gy,
  GhostIcon: gy,
  Gift: fy,
  GiftIcon: fy,
  GitBranch: wy,
  GitBranchIcon: wy,
  GitBranchPlus: Ly,
  GitBranchPlusIcon: Ly,
  GitCommit: de,
  GitCommitHorizontal: de,
  GitCommitHorizontalIcon: de,
  GitCommitIcon: de,
  GitCommitVertical: by,
  GitCommitVerticalIcon: by,
  GitCompare: Cy,
  GitCompareArrows: Iy,
  GitCompareArrowsIcon: Iy,
  GitCompareIcon: Cy,
  GitFork: Sy,
  GitForkIcon: Sy,
  GitGraph: qy,
  GitGraphIcon: qy,
  GitMerge: Ay,
  GitMergeIcon: Ay,
  GitPullRequest: Fy,
  GitPullRequestArrow: zy,
  GitPullRequestArrowIcon: zy,
  GitPullRequestClosed: Hy,
  GitPullRequestClosedIcon: Hy,
  GitPullRequestCreate: Py,
  GitPullRequestCreateArrow: jy,
  GitPullRequestCreateArrowIcon: jy,
  GitPullRequestCreateIcon: Py,
  GitPullRequestDraft: Vy,
  GitPullRequestDraftIcon: Vy,
  GitPullRequestIcon: Fy,
  Github: By,
  GithubIcon: By,
  Gitlab: Dy,
  GitlabIcon: Dy,
  GlassWater: Ry,
  GlassWaterIcon: Ry,
  Glasses: Ty,
  GlassesIcon: Ty,
  Globe: Uy,
  Globe2: Oy,
  Globe2Icon: Oy,
  GlobeIcon: Uy,
  Goal: Ey,
  GoalIcon: Ey,
  Grab: Zy,
  GrabIcon: Zy,
  GraduationCap: Gy,
  GraduationCapIcon: Gy,
  Grape: Ny,
  GrapeIcon: Ny,
  Grid: h1,
  Grid2X2: he,
  Grid2X2Icon: he,
  Grid2x2: he,
  Grid2x2Icon: he,
  Grid3X3: h1,
  Grid3X3Icon: h1,
  Grid3x3: h1,
  Grid3x3Icon: h1,
  GridIcon: h1,
  Grip: Xy,
  GripHorizontal: Wy,
  GripHorizontalIcon: Wy,
  GripIcon: Xy,
  GripVertical: _y,
  GripVerticalIcon: _y,
  Group: $y,
  GroupIcon: $y,
  Guitar: Ky,
  GuitarIcon: Ky,
  Hammer: Jy,
  HammerIcon: Jy,
  Hand: Yy,
  HandIcon: Yy,
  HandMetal: Qy,
  HandMetalIcon: Qy,
  HardDrive: al,
  HardDriveDownload: el,
  HardDriveDownloadIcon: el,
  HardDriveIcon: al,
  HardDriveUpload: tl,
  HardDriveUploadIcon: tl,
  HardHat: cl,
  HardHatIcon: cl,
  Hash: ol,
  HashIcon: ol,
  Haze: nl,
  HazeIcon: nl,
  HdmiPort: rl,
  HdmiPortIcon: rl,
  Heading: kl,
  Heading1: il,
  Heading1Icon: il,
  Heading2: dl,
  Heading2Icon: dl,
  Heading3: hl,
  Heading3Icon: hl,
  Heading4: yl,
  Heading4Icon: yl,
  Heading5: ll,
  Heading5Icon: ll,
  Heading6: pl,
  Heading6Icon: pl,
  HeadingIcon: kl,
  Headphones: sl,
  HeadphonesIcon: sl,
  Heart: xl,
  HeartCrack: ul,
  HeartCrackIcon: ul,
  HeartHandshake: Ml,
  HeartHandshakeIcon: Ml,
  HeartIcon: xl,
  HeartOff: vl,
  HeartOffIcon: vl,
  HeartPulse: ml,
  HeartPulseIcon: ml,
  Heater: gl,
  HeaterIcon: gl,
  HelpCircle: fl,
  HelpCircleIcon: fl,
  HelpingHand: Ll,
  HelpingHandIcon: Ll,
  Hexagon: wl,
  HexagonIcon: wl,
  Highlighter: bl,
  HighlighterIcon: bl,
  History: Il,
  HistoryIcon: Il,
  Home: Cl,
  HomeIcon: Cl,
  Hop: ql,
  HopIcon: ql,
  HopOff: Sl,
  HopOffIcon: Sl,
  Hotel: Al,
  HotelIcon: Al,
  Hourglass: zl,
  HourglassIcon: zl,
  IceCream: jl,
  IceCream2: Hl,
  IceCream2Icon: Hl,
  IceCreamIcon: jl,
  Image: Dl,
  ImageDown: Pl,
  ImageDownIcon: Pl,
  ImageIcon: Dl,
  ImageMinus: Vl,
  ImageMinusIcon: Vl,
  ImageOff: Fl,
  ImageOffIcon: Fl,
  ImagePlus: Bl,
  ImagePlusIcon: Bl,
  Import: Rl,
  ImportIcon: Rl,
  Inbox: Tl,
  InboxIcon: Tl,
  Indent: Ol,
  IndentIcon: Ol,
  IndianRupee: Ul,
  IndianRupeeIcon: Ul,
  Infinity: El,
  InfinityIcon: El,
  Info: Zl,
  InfoIcon: Zl,
  Inspect: pe,
  InspectIcon: pe,
  InspectionPanel: Gl,
  InspectionPanelIcon: Gl,
  Instagram: Nl,
  InstagramIcon: Nl,
  Italic: Wl,
  ItalicIcon: Wl,
  IterationCcw: _l,
  IterationCcwIcon: _l,
  IterationCw: Xl,
  IterationCwIcon: Xl,
  JapaneseYen: $l,
  JapaneseYenIcon: $l,
  Joystick: Kl,
  JoystickIcon: Kl,
  Kanban: Jl,
  KanbanIcon: Jl,
  KanbanSquare: le,
  KanbanSquareDashed: ye,
  KanbanSquareDashedIcon: ye,
  KanbanSquareIcon: le,
  Key: ep,
  KeyIcon: ep,
  KeyRound: Ql,
  KeyRoundIcon: Ql,
  KeySquare: Yl,
  KeySquareIcon: Yl,
  Keyboard: ap,
  KeyboardIcon: ap,
  KeyboardMusic: tp,
  KeyboardMusicIcon: tp,
  Lamp: dp,
  LampCeiling: cp,
  LampCeilingIcon: cp,
  LampDesk: op,
  LampDeskIcon: op,
  LampFloor: np,
  LampFloorIcon: np,
  LampIcon: dp,
  LampWallDown: rp,
  LampWallDownIcon: rp,
  LampWallUp: ip,
  LampWallUpIcon: ip,
  LandPlot: hp,
  LandPlotIcon: hp,
  Landmark: yp,
  LandmarkIcon: yp,
  Languages: lp,
  LanguagesIcon: lp,
  Laptop: kp,
  Laptop2: pp,
  Laptop2Icon: pp,
  LaptopIcon: kp,
  Lasso: up,
  LassoIcon: up,
  LassoSelect: sp,
  LassoSelectIcon: sp,
  Laugh: Mp,
  LaughIcon: Mp,
  Layers: xp,
  Layers2: vp,
  Layers2Icon: vp,
  Layers3: mp,
  Layers3Icon: mp,
  LayersIcon: xp,
  Layout: fe,
  LayoutDashboard: gp,
  LayoutDashboardIcon: gp,
  LayoutGrid: fp,
  LayoutGridIcon: fp,
  LayoutIcon: fe,
  LayoutList: Lp,
  LayoutListIcon: Lp,
  LayoutPanelLeft: wp,
  LayoutPanelLeftIcon: wp,
  LayoutPanelTop: bp,
  LayoutPanelTopIcon: bp,
  LayoutTemplate: Ip,
  LayoutTemplateIcon: Ip,
  Leaf: Cp,
  LeafIcon: Cp,
  LeafyGreen: Sp,
  LeafyGreenIcon: Sp,
  Library: zp,
  LibraryBig: qp,
  LibraryBigIcon: qp,
  LibraryIcon: zp,
  LibrarySquare: Ap,
  LibrarySquareIcon: Ap,
  LifeBuoy: Hp,
  LifeBuoyIcon: Hp,
  Ligature: jp,
  LigatureIcon: jp,
  Lightbulb: Vp,
  LightbulbIcon: Vp,
  LightbulbOff: Pp,
  LightbulbOffIcon: Pp,
  LineChart: Fp,
  LineChartIcon: Fp,
  Link: Rp,
  Link2: Dp,
  Link2Icon: Dp,
  Link2Off: Bp,
  Link2OffIcon: Bp,
  LinkIcon: Rp,
  Linkedin: Tp,
  LinkedinIcon: Tp,
  List: Yp,
  ListChecks: Op,
  ListChecksIcon: Op,
  ListEnd: Up,
  ListEndIcon: Up,
  ListFilter: Ep,
  ListFilterIcon: Ep,
  ListIcon: Yp,
  ListMinus: Zp,
  ListMinusIcon: Zp,
  ListMusic: Gp,
  ListMusicIcon: Gp,
  ListOrdered: Np,
  ListOrderedIcon: Np,
  ListPlus: Wp,
  ListPlusIcon: Wp,
  ListRestart: _p,
  ListRestartIcon: _p,
  ListStart: Xp,
  ListStartIcon: Xp,
  ListTodo: $p,
  ListTodoIcon: $p,
  ListTree: Kp,
  ListTreeIcon: Kp,
  ListVideo: Jp,
  ListVideoIcon: Jp,
  ListX: Qp,
  ListXIcon: Qp,
  Loader: tk,
  Loader2: ek,
  Loader2Icon: ek,
  LoaderIcon: tk,
  Locate: ok,
  LocateFixed: ak,
  LocateFixedIcon: ak,
  LocateIcon: ok,
  LocateOff: ck,
  LocateOffIcon: ck,
  Lock: rk,
  LockIcon: rk,
  LockKeyhole: nk,
  LockKeyholeIcon: nk,
  LogIn: ik,
  LogInIcon: ik,
  LogOut: dk,
  LogOutIcon: dk,
  Lollipop: hk,
  LollipopIcon: hk,
  LucideAArrowDown: s2,
  LucideAArrowUp: u2,
  LucideALargeSmall: M2,
  LucideAccessibility: v2,
  LucideActivity: x2,
  LucideActivitySquare: m2,
  LucideAirVent: g2,
  LucideAirplay: f2,
  LucideAlarmCheck: z1,
  LucideAlarmClock: w2,
  LucideAlarmClockCheck: z1,
  LucideAlarmClockMinus: H1,
  LucideAlarmClockOff: L2,
  LucideAlarmClockPlus: j1,
  LucideAlarmMinus: H1,
  LucideAlarmPlus: j1,
  LucideAlarmSmoke: b2,
  LucideAlbum: I2,
  LucideAlertCircle: C2,
  LucideAlertOctagon: S2,
  LucideAlertTriangle: q2,
  LucideAlignCenter: H2,
  LucideAlignCenterHorizontal: A2,
  LucideAlignCenterVertical: z2,
  LucideAlignEndHorizontal: j2,
  LucideAlignEndVertical: P2,
  LucideAlignHorizontalDistributeCenter: V2,
  LucideAlignHorizontalDistributeEnd: F2,
  LucideAlignHorizontalDistributeStart: B2,
  LucideAlignHorizontalJustifyCenter: D2,
  LucideAlignHorizontalJustifyEnd: R2,
  LucideAlignHorizontalJustifyStart: T2,
  LucideAlignHorizontalSpaceAround: O2,
  LucideAlignHorizontalSpaceBetween: U2,
  LucideAlignJustify: E2,
  LucideAlignLeft: Z2,
  LucideAlignRight: G2,
  LucideAlignStartHorizontal: N2,
  LucideAlignStartVertical: W2,
  LucideAlignVerticalDistributeCenter: _2,
  LucideAlignVerticalDistributeEnd: X2,
  LucideAlignVerticalDistributeStart: $2,
  LucideAlignVerticalJustifyCenter: K2,
  LucideAlignVerticalJustifyEnd: J2,
  LucideAlignVerticalJustifyStart: Q2,
  LucideAlignVerticalSpaceAround: Y2,
  LucideAlignVerticalSpaceBetween: et,
  LucideAmpersand: tt,
  LucideAmpersands: at,
  LucideAnchor: ct,
  LucideAngry: ot,
  LucideAnnoyed: nt,
  LucideAntenna: rt,
  LucideAnvil: it,
  LucideAperture: dt,
  LucideAppWindow: ht,
  LucideApple: yt,
  LucideArchive: kt,
  LucideArchiveRestore: lt,
  LucideArchiveX: pt,
  LucideAreaChart: st,
  LucideArmchair: ut,
  LucideArrowBigDown: vt,
  LucideArrowBigDownDash: Mt,
  LucideArrowBigLeft: xt,
  LucideArrowBigLeftDash: mt,
  LucideArrowBigRight: ft,
  LucideArrowBigRightDash: gt,
  LucideArrowBigUp: wt,
  LucideArrowBigUpDash: Lt,
  LucideArrowDown: Tt,
  LucideArrowDown01: bt,
  LucideArrowDown10: It,
  LucideArrowDownAZ: P1,
  LucideArrowDownAz: P1,
  LucideArrowDownCircle: Ct,
  LucideArrowDownFromLine: St,
  LucideArrowDownLeft: zt,
  LucideArrowDownLeftFromCircle: qt,
  LucideArrowDownLeftSquare: At,
  LucideArrowDownNarrowWide: Ht,
  LucideArrowDownRight: Vt,
  LucideArrowDownRightFromCircle: jt,
  LucideArrowDownRightSquare: Pt,
  LucideArrowDownSquare: Ft,
  LucideArrowDownToDot: Bt,
  LucideArrowDownToLine: Dt,
  LucideArrowDownUp: Rt,
  LucideArrowDownWideNarrow: V1,
  LucideArrowDownZA: F1,
  LucideArrowDownZa: F1,
  LucideArrowLeft: Nt,
  LucideArrowLeftCircle: Ot,
  LucideArrowLeftFromLine: Ut,
  LucideArrowLeftRight: Et,
  LucideArrowLeftSquare: Zt,
  LucideArrowLeftToLine: Gt,
  LucideArrowRight: Jt,
  LucideArrowRightCircle: Wt,
  LucideArrowRightFromLine: _t,
  LucideArrowRightLeft: Xt,
  LucideArrowRightSquare: $t,
  LucideArrowRightToLine: Kt,
  LucideArrowUp: ka,
  LucideArrowUp01: Qt,
  LucideArrowUp10: Yt,
  LucideArrowUpAZ: B1,
  LucideArrowUpAz: B1,
  LucideArrowUpCircle: ea,
  LucideArrowUpDown: ta,
  LucideArrowUpFromDot: aa,
  LucideArrowUpFromLine: ca,
  LucideArrowUpLeft: ra,
  LucideArrowUpLeftFromCircle: oa,
  LucideArrowUpLeftSquare: na,
  LucideArrowUpNarrowWide: D1,
  LucideArrowUpRight: ha,
  LucideArrowUpRightFromCircle: ia,
  LucideArrowUpRightSquare: da,
  LucideArrowUpSquare: ya,
  LucideArrowUpToLine: la,
  LucideArrowUpWideNarrow: pa,
  LucideArrowUpZA: R1,
  LucideArrowUpZa: R1,
  LucideArrowsUpFromLine: sa,
  LucideAsterisk: ua,
  LucideAsteriskSquare: T1,
  LucideAtSign: Ma,
  LucideAtom: va,
  LucideAudioLines: ma,
  LucideAudioWaveform: xa,
  LucideAward: ga,
  LucideAxe: fa,
  LucideAxis3D: O1,
  LucideAxis3d: O1,
  LucideBaby: La,
  LucideBackpack: wa,
  LucideBadge: Ta,
  LucideBadgeAlert: ba,
  LucideBadgeCent: Ia,
  LucideBadgeCheck: U1,
  LucideBadgeDollarSign: Ca,
  LucideBadgeEuro: Sa,
  LucideBadgeHelp: qa,
  LucideBadgeIndianRupee: Aa,
  LucideBadgeInfo: za,
  LucideBadgeJapaneseYen: Ha,
  LucideBadgeMinus: ja,
  LucideBadgePercent: Pa,
  LucideBadgePlus: Va,
  LucideBadgePoundSterling: Fa,
  LucideBadgeRussianRuble: Ba,
  LucideBadgeSwissFranc: Da,
  LucideBadgeX: Ra,
  LucideBaggageClaim: Oa,
  LucideBan: Ua,
  LucideBanana: Ea,
  LucideBanknote: Za,
  LucideBarChart: Ka,
  LucideBarChart2: Ga,
  LucideBarChart3: Na,
  LucideBarChart4: Wa,
  LucideBarChartBig: _a,
  LucideBarChartHorizontal: $a,
  LucideBarChartHorizontalBig: Xa,
  LucideBarcode: Ja,
  LucideBaseline: Qa,
  LucideBath: Ya,
  LucideBattery: n0,
  LucideBatteryCharging: e0,
  LucideBatteryFull: t0,
  LucideBatteryLow: a0,
  LucideBatteryMedium: c0,
  LucideBatteryWarning: o0,
  LucideBeaker: r0,
  LucideBean: d0,
  LucideBeanOff: i0,
  LucideBed: l0,
  LucideBedDouble: h0,
  LucideBedSingle: y0,
  LucideBeef: p0,
  LucideBeer: k0,
  LucideBell: g0,
  LucideBellDot: s0,
  LucideBellElectric: u0,
  LucideBellMinus: M0,
  LucideBellOff: v0,
  LucideBellPlus: m0,
  LucideBellRing: x0,
  LucideBetweenHorizonalEnd: E1,
  LucideBetweenHorizonalStart: Z1,
  LucideBetweenHorizontalEnd: E1,
  LucideBetweenHorizontalStart: Z1,
  LucideBetweenVerticalEnd: f0,
  LucideBetweenVerticalStart: L0,
  LucideBike: w0,
  LucideBinary: b0,
  LucideBiohazard: I0,
  LucideBird: C0,
  LucideBitcoin: S0,
  LucideBlinds: q0,
  LucideBlocks: A0,
  LucideBluetooth: P0,
  LucideBluetoothConnected: z0,
  LucideBluetoothOff: H0,
  LucideBluetoothSearching: j0,
  LucideBold: V0,
  LucideBolt: F0,
  LucideBomb: B0,
  LucideBone: D0,
  LucideBook: rc,
  LucideBookA: R0,
  LucideBookAudio: T0,
  LucideBookCheck: O0,
  LucideBookCopy: U0,
  LucideBookDashed: G1,
  LucideBookDown: E0,
  LucideBookHeadphones: Z0,
  LucideBookHeart: G0,
  LucideBookImage: N0,
  LucideBookKey: W0,
  LucideBookLock: _0,
  LucideBookMarked: X0,
  LucideBookMinus: $0,
  LucideBookOpen: Q0,
  LucideBookOpenCheck: K0,
  LucideBookOpenText: J0,
  LucideBookPlus: Y0,
  LucideBookTemplate: G1,
  LucideBookText: ec,
  LucideBookType: tc,
  LucideBookUp: cc,
  LucideBookUp2: ac,
  LucideBookUser: oc,
  LucideBookX: nc,
  LucideBookmark: lc,
  LucideBookmarkCheck: ic,
  LucideBookmarkMinus: dc,
  LucideBookmarkPlus: hc,
  LucideBookmarkX: yc,
  LucideBoomBox: pc,
  LucideBot: kc,
  LucideBox: uc,
  LucideBoxSelect: sc,
  LucideBoxes: Mc,
  LucideBraces: N1,
  LucideBrackets: vc,
  LucideBrain: gc,
  LucideBrainCircuit: mc,
  LucideBrainCog: xc,
  LucideBrickWall: fc,
  LucideBriefcase: Lc,
  LucideBringToFront: wc,
  LucideBrush: bc,
  LucideBug: Sc,
  LucideBugOff: Ic,
  LucideBugPlay: Cc,
  LucideBuilding: Ac,
  LucideBuilding2: qc,
  LucideBus: Hc,
  LucideBusFront: zc,
  LucideCable: Pc,
  LucideCableCar: jc,
  LucideCake: Fc,
  LucideCakeSlice: Vc,
  LucideCalculator: Bc,
  LucideCalendar: $c,
  LucideCalendarCheck: Rc,
  LucideCalendarCheck2: Dc,
  LucideCalendarClock: Tc,
  LucideCalendarDays: Oc,
  LucideCalendarHeart: Uc,
  LucideCalendarMinus: Ec,
  LucideCalendarOff: Zc,
  LucideCalendarPlus: Gc,
  LucideCalendarRange: Nc,
  LucideCalendarSearch: Wc,
  LucideCalendarX: Xc,
  LucideCalendarX2: _c,
  LucideCamera: Jc,
  LucideCameraOff: Kc,
  LucideCandlestickChart: Qc,
  LucideCandy: to,
  LucideCandyCane: Yc,
  LucideCandyOff: eo,
  LucideCar: oo,
  LucideCarFront: ao,
  LucideCarTaxiFront: co,
  LucideCaravan: no,
  LucideCarrot: ro,
  LucideCaseLower: io,
  LucideCaseSensitive: ho,
  LucideCaseUpper: yo,
  LucideCassetteTape: lo,
  LucideCast: po,
  LucideCastle: ko,
  LucideCat: so,
  LucideCctv: uo,
  LucideCheck: fo,
  LucideCheckCheck: Mo,
  LucideCheckCircle: mo,
  LucideCheckCircle2: vo,
  LucideCheckSquare: go,
  LucideCheckSquare2: xo,
  LucideChefHat: Lo,
  LucideCherry: wo,
  LucideChevronDown: Co,
  LucideChevronDownCircle: bo,
  LucideChevronDownSquare: Io,
  LucideChevronFirst: So,
  LucideChevronLast: qo,
  LucideChevronLeft: Ho,
  LucideChevronLeftCircle: Ao,
  LucideChevronLeftSquare: zo,
  LucideChevronRight: Vo,
  LucideChevronRightCircle: jo,
  LucideChevronRightSquare: Po,
  LucideChevronUp: Do,
  LucideChevronUpCircle: Fo,
  LucideChevronUpSquare: Bo,
  LucideChevronsDown: To,
  LucideChevronsDownUp: Ro,
  LucideChevronsLeft: Uo,
  LucideChevronsLeftRight: Oo,
  LucideChevronsRight: Zo,
  LucideChevronsRightLeft: Eo,
  LucideChevronsUp: No,
  LucideChevronsUpDown: Go,
  LucideChrome: Wo,
  LucideChurch: _o,
  LucideCigarette: $o,
  LucideCigaretteOff: Xo,
  LucideCircle: on,
  LucideCircleDashed: Ko,
  LucideCircleDollarSign: Jo,
  LucideCircleDot: Yo,
  LucideCircleDotDashed: Qo,
  LucideCircleEllipsis: en,
  LucideCircleEqual: tn,
  LucideCircleOff: an,
  LucideCircleSlash: cn,
  LucideCircleSlash2: W1,
  LucideCircleSlashed: W1,
  LucideCircleUser: X1,
  LucideCircleUserRound: _1,
  LucideCircuitBoard: nn,
  LucideCitrus: rn,
  LucideClapperboard: dn,
  LucideClipboard: un,
  LucideClipboardCheck: hn,
  LucideClipboardCopy: yn,
  LucideClipboardEdit: K1,
  LucideClipboardList: ln,
  LucideClipboardPaste: pn,
  LucideClipboardPen: K1,
  LucideClipboardPenLine: $1,
  LucideClipboardSignature: $1,
  LucideClipboardType: kn,
  LucideClipboardX: sn,
  LucideClock: qn,
  LucideClock1: Mn,
  LucideClock10: vn,
  LucideClock11: mn,
  LucideClock12: xn,
  LucideClock2: gn,
  LucideClock3: fn,
  LucideClock4: Ln,
  LucideClock5: wn,
  LucideClock6: bn,
  LucideClock7: In,
  LucideClock8: Cn,
  LucideClock9: Sn,
  LucideCloud: En,
  LucideCloudCog: An,
  LucideCloudDrizzle: zn,
  LucideCloudFog: Hn,
  LucideCloudHail: jn,
  LucideCloudLightning: Pn,
  LucideCloudMoon: Fn,
  LucideCloudMoonRain: Vn,
  LucideCloudOff: Bn,
  LucideCloudRain: Rn,
  LucideCloudRainWind: Dn,
  LucideCloudSnow: Tn,
  LucideCloudSun: Un,
  LucideCloudSunRain: On,
  LucideCloudy: Zn,
  LucideClover: Gn,
  LucideClub: Nn,
  LucideCode: _n,
  LucideCode2: Wn,
  LucideCodeSquare: J1,
  LucideCodepen: Xn,
  LucideCodesandbox: $n,
  LucideCoffee: Kn,
  LucideCog: Jn,
  LucideCoins: Qn,
  LucideColumns: Q1,
  LucideColumns2: Q1,
  LucideColumns3: Y1,
  LucideColumns4: Yn,
  LucideCombine: er,
  LucideCommand: tr,
  LucideCompass: ar,
  LucideComponent: cr,
  LucideComputer: or,
  LucideConciergeBell: nr,
  LucideCone: rr,
  LucideConstruction: ir,
  LucideContact: hr,
  LucideContact2: dr,
  LucideContainer: yr,
  LucideContrast: lr,
  LucideCookie: pr,
  LucideCookingPot: kr,
  LucideCopy: xr,
  LucideCopyCheck: sr,
  LucideCopyMinus: ur,
  LucideCopyPlus: Mr,
  LucideCopySlash: vr,
  LucideCopyX: mr,
  LucideCopyleft: gr,
  LucideCopyright: fr,
  LucideCornerDownLeft: Lr,
  LucideCornerDownRight: wr,
  LucideCornerLeftDown: br,
  LucideCornerLeftUp: Ir,
  LucideCornerRightDown: Cr,
  LucideCornerRightUp: Sr,
  LucideCornerUpLeft: qr,
  LucideCornerUpRight: Ar,
  LucideCpu: zr,
  LucideCreativeCommons: Hr,
  LucideCreditCard: jr,
  LucideCroissant: Pr,
  LucideCrop: Vr,
  LucideCross: Fr,
  LucideCrosshair: Br,
  LucideCrown: Dr,
  LucideCuboid: Rr,
  LucideCupSoda: Tr,
  LucideCurlyBraces: N1,
  LucideCurrency: Or,
  LucideCylinder: Ur,
  LucideDatabase: Gr,
  LucideDatabaseBackup: Er,
  LucideDatabaseZap: Zr,
  LucideDelete: Nr,
  LucideDessert: Wr,
  LucideDiameter: _r,
  LucideDiamond: Xr,
  LucideDice1: $r,
  LucideDice2: Kr,
  LucideDice3: Jr,
  LucideDice4: Qr,
  LucideDice5: Yr,
  LucideDice6: ei,
  LucideDices: ti,
  LucideDiff: ai,
  LucideDisc: ri,
  LucideDisc2: ci,
  LucideDisc3: oi,
  LucideDiscAlbum: ni,
  LucideDivide: hi,
  LucideDivideCircle: ii,
  LucideDivideSquare: di,
  LucideDna: li,
  LucideDnaOff: yi,
  LucideDog: pi,
  LucideDollarSign: ki,
  LucideDonut: si,
  LucideDoorClosed: ui,
  LucideDoorOpen: Mi,
  LucideDot: vi,
  LucideDotSquare: ee,
  LucideDownload: xi,
  LucideDownloadCloud: mi,
  LucideDraftingCompass: gi,
  LucideDrama: fi,
  LucideDribbble: Li,
  LucideDrill: wi,
  LucideDroplet: bi,
  LucideDroplets: Ii,
  LucideDrum: Ci,
  LucideDrumstick: Si,
  LucideDumbbell: qi,
  LucideEar: zi,
  LucideEarOff: Ai,
  LucideEdit: y1,
  LucideEdit2: we,
  LucideEdit3: Le,
  LucideEgg: Pi,
  LucideEggFried: Hi,
  LucideEggOff: ji,
  LucideEqual: Fi,
  LucideEqualNot: Vi,
  LucideEqualSquare: te,
  LucideEraser: Bi,
  LucideEuro: Di,
  LucideExpand: Ri,
  LucideExternalLink: Ti,
  LucideEye: Ui,
  LucideEyeOff: Oi,
  LucideFacebook: Ei,
  LucideFactory: Zi,
  LucideFan: Gi,
  LucideFastForward: Ni,
  LucideFeather: Wi,
  LucideFence: _i,
  LucideFerrisWheel: Xi,
  LucideFigma: $i,
  LucideFile: Xd,
  LucideFileArchive: Ki,
  LucideFileAudio: Qi,
  LucideFileAudio2: Ji,
  LucideFileAxis3D: ae,
  LucideFileAxis3d: ae,
  LucideFileBadge: ed,
  LucideFileBadge2: Yi,
  LucideFileBarChart: ad,
  LucideFileBarChart2: td,
  LucideFileBox: cd,
  LucideFileCheck: nd,
  LucideFileCheck2: od,
  LucideFileClock: rd,
  LucideFileCode: dd,
  LucideFileCode2: id,
  LucideFileCog: ce,
  LucideFileCog2: ce,
  LucideFileDiff: hd,
  LucideFileDigit: yd,
  LucideFileDown: ld,
  LucideFileEdit: ne,
  LucideFileHeart: pd,
  LucideFileImage: kd,
  LucideFileInput: sd,
  LucideFileJson: Md,
  LucideFileJson2: ud,
  LucideFileKey: md,
  LucideFileKey2: vd,
  LucideFileLineChart: xd,
  LucideFileLock: fd,
  LucideFileLock2: gd,
  LucideFileMinus: wd,
  LucideFileMinus2: Ld,
  LucideFileMusic: bd,
  LucideFileOutput: Id,
  LucideFilePen: ne,
  LucideFilePenLine: oe,
  LucideFilePieChart: Cd,
  LucideFilePlus: qd,
  LucideFilePlus2: Sd,
  LucideFileQuestion: Ad,
  LucideFileScan: zd,
  LucideFileSearch: jd,
  LucideFileSearch2: Hd,
  LucideFileSignature: oe,
  LucideFileSpreadsheet: Pd,
  LucideFileStack: Vd,
  LucideFileSymlink: Fd,
  LucideFileTerminal: Bd,
  LucideFileText: Dd,
  LucideFileType: Td,
  LucideFileType2: Rd,
  LucideFileUp: Od,
  LucideFileVideo: Ed,
  LucideFileVideo2: Ud,
  LucideFileVolume: Gd,
  LucideFileVolume2: Zd,
  LucideFileWarning: Nd,
  LucideFileX: _d,
  LucideFileX2: Wd,
  LucideFiles: $d,
  LucideFilm: Kd,
  LucideFilter: Qd,
  LucideFilterX: Jd,
  LucideFingerprint: Yd,
  LucideFireExtinguisher: eh,
  LucideFish: ch,
  LucideFishOff: th,
  LucideFishSymbol: ah,
  LucideFlag: ih,
  LucideFlagOff: oh,
  LucideFlagTriangleLeft: nh,
  LucideFlagTriangleRight: rh,
  LucideFlame: hh,
  LucideFlameKindling: dh,
  LucideFlashlight: lh,
  LucideFlashlightOff: yh,
  LucideFlaskConical: kh,
  LucideFlaskConicalOff: ph,
  LucideFlaskRound: sh,
  LucideFlipHorizontal: Mh,
  LucideFlipHorizontal2: uh,
  LucideFlipVertical: mh,
  LucideFlipVertical2: vh,
  LucideFlower: gh,
  LucideFlower2: xh,
  LucideFocus: fh,
  LucideFoldHorizontal: Lh,
  LucideFoldVertical: wh,
  LucideFolder: Kh,
  LucideFolderArchive: bh,
  LucideFolderCheck: Ih,
  LucideFolderClock: Ch,
  LucideFolderClosed: Sh,
  LucideFolderCog: re,
  LucideFolderCog2: re,
  LucideFolderDot: qh,
  LucideFolderDown: Ah,
  LucideFolderEdit: ie,
  LucideFolderGit: Hh,
  LucideFolderGit2: zh,
  LucideFolderHeart: jh,
  LucideFolderInput: Ph,
  LucideFolderKanban: Vh,
  LucideFolderKey: Fh,
  LucideFolderLock: Bh,
  LucideFolderMinus: Dh,
  LucideFolderOpen: Th,
  LucideFolderOpenDot: Rh,
  LucideFolderOutput: Oh,
  LucideFolderPen: ie,
  LucideFolderPlus: Uh,
  LucideFolderRoot: Eh,
  LucideFolderSearch: Gh,
  LucideFolderSearch2: Zh,
  LucideFolderSymlink: Nh,
  LucideFolderSync: Wh,
  LucideFolderTree: _h,
  LucideFolderUp: Xh,
  LucideFolderX: $h,
  LucideFolders: Jh,
  LucideFootprints: Qh,
  LucideForklift: Yh,
  LucideFormInput: ey,
  LucideForward: ty,
  LucideFrame: ay,
  LucideFramer: cy,
  LucideFrown: oy,
  LucideFuel: ny,
  LucideFullscreen: ry,
  LucideFunctionSquare: iy,
  LucideGalleryHorizontal: hy,
  LucideGalleryHorizontalEnd: dy,
  LucideGalleryThumbnails: yy,
  LucideGalleryVertical: py,
  LucideGalleryVerticalEnd: ly,
  LucideGamepad: sy,
  LucideGamepad2: ky,
  LucideGanttChart: uy,
  LucideGanttChartSquare: d1,
  LucideGanttSquare: d1,
  LucideGauge: vy,
  LucideGaugeCircle: My,
  LucideGavel: my,
  LucideGem: xy,
  LucideGhost: gy,
  LucideGift: fy,
  LucideGitBranch: wy,
  LucideGitBranchPlus: Ly,
  LucideGitCommit: de,
  LucideGitCommitHorizontal: de,
  LucideGitCommitVertical: by,
  LucideGitCompare: Cy,
  LucideGitCompareArrows: Iy,
  LucideGitFork: Sy,
  LucideGitGraph: qy,
  LucideGitMerge: Ay,
  LucideGitPullRequest: Fy,
  LucideGitPullRequestArrow: zy,
  LucideGitPullRequestClosed: Hy,
  LucideGitPullRequestCreate: Py,
  LucideGitPullRequestCreateArrow: jy,
  LucideGitPullRequestDraft: Vy,
  LucideGithub: By,
  LucideGitlab: Dy,
  LucideGlassWater: Ry,
  LucideGlasses: Ty,
  LucideGlobe: Uy,
  LucideGlobe2: Oy,
  LucideGoal: Ey,
  LucideGrab: Zy,
  LucideGraduationCap: Gy,
  LucideGrape: Ny,
  LucideGrid: h1,
  LucideGrid2X2: he,
  LucideGrid2x2: he,
  LucideGrid3X3: h1,
  LucideGrid3x3: h1,
  LucideGrip: Xy,
  LucideGripHorizontal: Wy,
  LucideGripVertical: _y,
  LucideGroup: $y,
  LucideGuitar: Ky,
  LucideHammer: Jy,
  LucideHand: Yy,
  LucideHandMetal: Qy,
  LucideHardDrive: al,
  LucideHardDriveDownload: el,
  LucideHardDriveUpload: tl,
  LucideHardHat: cl,
  LucideHash: ol,
  LucideHaze: nl,
  LucideHdmiPort: rl,
  LucideHeading: kl,
  LucideHeading1: il,
  LucideHeading2: dl,
  LucideHeading3: hl,
  LucideHeading4: yl,
  LucideHeading5: ll,
  LucideHeading6: pl,
  LucideHeadphones: sl,
  LucideHeart: xl,
  LucideHeartCrack: ul,
  LucideHeartHandshake: Ml,
  LucideHeartOff: vl,
  LucideHeartPulse: ml,
  LucideHeater: gl,
  LucideHelpCircle: fl,
  LucideHelpingHand: Ll,
  LucideHexagon: wl,
  LucideHighlighter: bl,
  LucideHistory: Il,
  LucideHome: Cl,
  LucideHop: ql,
  LucideHopOff: Sl,
  LucideHotel: Al,
  LucideHourglass: zl,
  LucideIceCream: jl,
  LucideIceCream2: Hl,
  LucideImage: Dl,
  LucideImageDown: Pl,
  LucideImageMinus: Vl,
  LucideImageOff: Fl,
  LucideImagePlus: Bl,
  LucideImport: Rl,
  LucideInbox: Tl,
  LucideIndent: Ol,
  LucideIndianRupee: Ul,
  LucideInfinity: El,
  LucideInfo: Zl,
  LucideInspect: pe,
  LucideInspectionPanel: Gl,
  LucideInstagram: Nl,
  LucideItalic: Wl,
  LucideIterationCcw: _l,
  LucideIterationCw: Xl,
  LucideJapaneseYen: $l,
  LucideJoystick: Kl,
  LucideKanban: Jl,
  LucideKanbanSquare: le,
  LucideKanbanSquareDashed: ye,
  LucideKey: ep,
  LucideKeyRound: Ql,
  LucideKeySquare: Yl,
  LucideKeyboard: ap,
  LucideKeyboardMusic: tp,
  LucideLamp: dp,
  LucideLampCeiling: cp,
  LucideLampDesk: op,
  LucideLampFloor: np,
  LucideLampWallDown: rp,
  LucideLampWallUp: ip,
  LucideLandPlot: hp,
  LucideLandmark: yp,
  LucideLanguages: lp,
  LucideLaptop: kp,
  LucideLaptop2: pp,
  LucideLasso: up,
  LucideLassoSelect: sp,
  LucideLaugh: Mp,
  LucideLayers: xp,
  LucideLayers2: vp,
  LucideLayers3: mp,
  LucideLayout: fe,
  LucideLayoutDashboard: gp,
  LucideLayoutGrid: fp,
  LucideLayoutList: Lp,
  LucideLayoutPanelLeft: wp,
  LucideLayoutPanelTop: bp,
  LucideLayoutTemplate: Ip,
  LucideLeaf: Cp,
  LucideLeafyGreen: Sp,
  LucideLibrary: zp,
  LucideLibraryBig: qp,
  LucideLibrarySquare: Ap,
  LucideLifeBuoy: Hp,
  LucideLigature: jp,
  LucideLightbulb: Vp,
  LucideLightbulbOff: Pp,
  LucideLineChart: Fp,
  LucideLink: Rp,
  LucideLink2: Dp,
  LucideLink2Off: Bp,
  LucideLinkedin: Tp,
  LucideList: Yp,
  LucideListChecks: Op,
  LucideListEnd: Up,
  LucideListFilter: Ep,
  LucideListMinus: Zp,
  LucideListMusic: Gp,
  LucideListOrdered: Np,
  LucideListPlus: Wp,
  LucideListRestart: _p,
  LucideListStart: Xp,
  LucideListTodo: $p,
  LucideListTree: Kp,
  LucideListVideo: Jp,
  LucideListX: Qp,
  LucideLoader: tk,
  LucideLoader2: ek,
  LucideLocate: ok,
  LucideLocateFixed: ak,
  LucideLocateOff: ck,
  LucideLock: rk,
  LucideLockKeyhole: nk,
  LucideLogIn: ik,
  LucideLogOut: dk,
  LucideLollipop: hk,
  LucideLuggage: yk,
  LucideMSquare: lk,
  LucideMagnet: pk,
  LucideMail: fk,
  LucideMailCheck: kk,
  LucideMailMinus: sk,
  LucideMailOpen: uk,
  LucideMailPlus: Mk,
  LucideMailQuestion: vk,
  LucideMailSearch: mk,
  LucideMailWarning: xk,
  LucideMailX: gk,
  LucideMailbox: Lk,
  LucideMails: wk,
  LucideMap: Sk,
  LucideMapPin: Ik,
  LucideMapPinOff: bk,
  LucideMapPinned: Ck,
  LucideMartini: qk,
  LucideMaximize: zk,
  LucideMaximize2: Ak,
  LucideMedal: Hk,
  LucideMegaphone: Pk,
  LucideMegaphoneOff: jk,
  LucideMeh: Vk,
  LucideMemoryStick: Fk,
  LucideMenu: Dk,
  LucideMenuSquare: Bk,
  LucideMerge: Rk,
  LucideMessageCircle: $k,
  LucideMessageCircleCode: Tk,
  LucideMessageCircleDashed: Ok,
  LucideMessageCircleHeart: Uk,
  LucideMessageCircleMore: Ek,
  LucideMessageCircleOff: Zk,
  LucideMessageCirclePlus: Gk,
  LucideMessageCircleQuestion: Nk,
  LucideMessageCircleReply: Wk,
  LucideMessageCircleWarning: _k,
  LucideMessageCircleX: Xk,
  LucideMessageSquare: y4,
  LucideMessageSquareCode: Kk,
  LucideMessageSquareDashed: Jk,
  LucideMessageSquareDiff: Qk,
  LucideMessageSquareDot: Yk,
  LucideMessageSquareHeart: e4,
  LucideMessageSquareMore: t4,
  LucideMessageSquareOff: a4,
  LucideMessageSquarePlus: c4,
  LucideMessageSquareQuote: o4,
  LucideMessageSquareReply: n4,
  LucideMessageSquareShare: r4,
  LucideMessageSquareText: i4,
  LucideMessageSquareWarning: d4,
  LucideMessageSquareX: h4,
  LucideMessagesSquare: l4,
  LucideMic: s4,
  LucideMic2: p4,
  LucideMicOff: k4,
  LucideMicroscope: u4,
  LucideMicrowave: M4,
  LucideMilestone: v4,
  LucideMilk: x4,
  LucideMilkOff: m4,
  LucideMinimize: f4,
  LucideMinimize2: g4,
  LucideMinus: b4,
  LucideMinusCircle: L4,
  LucideMinusSquare: w4,
  LucideMonitor: B4,
  LucideMonitorCheck: I4,
  LucideMonitorDot: C4,
  LucideMonitorDown: S4,
  LucideMonitorOff: q4,
  LucideMonitorPause: A4,
  LucideMonitorPlay: z4,
  LucideMonitorSmartphone: H4,
  LucideMonitorSpeaker: j4,
  LucideMonitorStop: P4,
  LucideMonitorUp: V4,
  LucideMonitorX: F4,
  LucideMoon: R4,
  LucideMoonStar: D4,
  LucideMoreHorizontal: T4,
  LucideMoreVertical: O4,
  LucideMountain: E4,
  LucideMountainSnow: U4,
  LucideMouse: _4,
  LucideMousePointer: W4,
  LucideMousePointer2: Z4,
  LucideMousePointerClick: G4,
  LucideMousePointerSquare: pe,
  LucideMousePointerSquareDashed: N4,
  LucideMove: rs,
  LucideMove3D: ke,
  LucideMove3d: ke,
  LucideMoveDiagonal: $4,
  LucideMoveDiagonal2: X4,
  LucideMoveDown: Q4,
  LucideMoveDownLeft: K4,
  LucideMoveDownRight: J4,
  LucideMoveHorizontal: Y4,
  LucideMoveLeft: es,
  LucideMoveRight: ts,
  LucideMoveUp: os,
  LucideMoveUpLeft: as,
  LucideMoveUpRight: cs,
  LucideMoveVertical: ns,
  LucideMusic: ys,
  LucideMusic2: is,
  LucideMusic3: ds,
  LucideMusic4: hs,
  LucideNavigation: ss,
  LucideNavigation2: ps,
  LucideNavigation2Off: ls,
  LucideNavigationOff: ks,
  LucideNetwork: us,
  LucideNewspaper: Ms,
  LucideNfc: vs,
  LucideNotebook: fs,
  LucideNotebookPen: ms,
  LucideNotebookTabs: xs,
  LucideNotebookText: gs,
  LucideNotepadText: ws,
  LucideNotepadTextDashed: Ls,
  LucideNut: Is,
  LucideNutOff: bs,
  LucideOctagon: Cs,
  LucideOption: Ss,
  LucideOrbit: qs,
  LucideOutdent: As,
  LucidePackage: Ds,
  LucidePackage2: zs,
  LucidePackageCheck: Hs,
  LucidePackageMinus: js,
  LucidePackageOpen: Ps,
  LucidePackagePlus: Vs,
  LucidePackageSearch: Fs,
  LucidePackageX: Bs,
  LucidePaintBucket: Rs,
  LucidePaintbrush: Os,
  LucidePaintbrush2: Ts,
  LucidePalette: Us,
  LucidePalmtree: Es,
  LucidePanelBottom: Ns,
  LucidePanelBottomClose: Zs,
  LucidePanelBottomDashed: se,
  LucidePanelBottomInactive: se,
  LucidePanelBottomOpen: Gs,
  LucidePanelLeft: me,
  LucidePanelLeftClose: ue,
  LucidePanelLeftDashed: Me,
  LucidePanelLeftInactive: Me,
  LucidePanelLeftOpen: ve,
  LucidePanelRight: Xs,
  LucidePanelRightClose: Ws,
  LucidePanelRightDashed: xe,
  LucidePanelRightInactive: xe,
  LucidePanelRightOpen: _s,
  LucidePanelTop: Js,
  LucidePanelTopClose: $s,
  LucidePanelTopDashed: ge,
  LucidePanelTopInactive: ge,
  LucidePanelTopOpen: Ks,
  LucidePanelsLeftBottom: Qs,
  LucidePanelsLeftRight: Y1,
  LucidePanelsRightBottom: Ys,
  LucidePanelsTopBottom: Ce,
  LucidePanelsTopLeft: fe,
  LucidePaperclip: e5,
  LucideParentheses: t5,
  LucideParkingCircle: c5,
  LucideParkingCircleOff: a5,
  LucideParkingMeter: o5,
  LucideParkingSquare: r5,
  LucideParkingSquareOff: n5,
  LucidePartyPopper: i5,
  LucidePause: y5,
  LucidePauseCircle: d5,
  LucidePauseOctagon: h5,
  LucidePawPrint: l5,
  LucidePcCase: p5,
  LucidePen: we,
  LucidePenBox: y1,
  LucidePenLine: Le,
  LucidePenSquare: y1,
  LucidePenTool: k5,
  LucidePencil: M5,
  LucidePencilLine: s5,
  LucidePencilRuler: u5,
  LucidePentagon: v5,
  LucidePercent: f5,
  LucidePercentCircle: m5,
  LucidePercentDiamond: x5,
  LucidePercentSquare: g5,
  LucidePersonStanding: L5,
  LucidePhone: A5,
  LucidePhoneCall: w5,
  LucidePhoneForwarded: b5,
  LucidePhoneIncoming: I5,
  LucidePhoneMissed: C5,
  LucidePhoneOff: S5,
  LucidePhoneOutgoing: q5,
  LucidePi: H5,
  LucidePiSquare: z5,
  LucidePiano: j5,
  LucidePictureInPicture: V5,
  LucidePictureInPicture2: P5,
  LucidePieChart: F5,
  LucidePiggyBank: B5,
  LucidePilcrow: R5,
  LucidePilcrowSquare: D5,
  LucidePill: T5,
  LucidePin: U5,
  LucidePinOff: O5,
  LucidePipette: E5,
  LucidePizza: Z5,
  LucidePlane: W5,
  LucidePlaneLanding: G5,
  LucidePlaneTakeoff: N5,
  LucidePlay: $5,
  LucidePlayCircle: _5,
  LucidePlaySquare: X5,
  LucidePlug: Y5,
  LucidePlug2: K5,
  LucidePlugZap: Q5,
  LucidePlugZap2: J5,
  LucidePlus: a3,
  LucidePlusCircle: e3,
  LucidePlusSquare: t3,
  LucidePocket: o3,
  LucidePocketKnife: c3,
  LucidePodcast: n3,
  LucidePointer: i3,
  LucidePointerOff: r3,
  LucidePopcorn: d3,
  LucidePopsicle: h3,
  LucidePoundSterling: y3,
  LucidePower: s3,
  LucidePowerCircle: l3,
  LucidePowerOff: p3,
  LucidePowerSquare: k3,
  LucidePresentation: u3,
  LucidePrinter: M3,
  LucideProjector: v3,
  LucidePuzzle: m3,
  LucidePyramid: x3,
  LucideQrCode: g3,
  LucideQuote: f3,
  LucideRabbit: L3,
  LucideRadar: w3,
  LucideRadiation: b3,
  LucideRadio: S3,
  LucideRadioReceiver: I3,
  LucideRadioTower: C3,
  LucideRadius: q3,
  LucideRailSymbol: A3,
  LucideRainbow: z3,
  LucideRat: H3,
  LucideRatio: j3,
  LucideReceipt: P3,
  LucideRectangleHorizontal: V3,
  LucideRectangleVertical: F3,
  LucideRecycle: B3,
  LucideRedo: T3,
  LucideRedo2: D3,
  LucideRedoDot: R3,
  LucideRefreshCcw: U3,
  LucideRefreshCcwDot: O3,
  LucideRefreshCw: Z3,
  LucideRefreshCwOff: E3,
  LucideRefrigerator: G3,
  LucideRegex: N3,
  LucideRemoveFormatting: W3,
  LucideRepeat: $3,
  LucideRepeat1: _3,
  LucideRepeat2: X3,
  LucideReplace: J3,
  LucideReplaceAll: K3,
  LucideReply: Y3,
  LucideReplyAll: Q3,
  LucideRewind: eu,
  LucideRibbon: tu,
  LucideRocket: au,
  LucideRockingChair: cu,
  LucideRollerCoaster: ou,
  LucideRotate3D: be,
  LucideRotate3d: be,
  LucideRotateCcw: nu,
  LucideRotateCw: ru,
  LucideRoute: du,
  LucideRouteOff: iu,
  LucideRouter: hu,
  LucideRows: Ie,
  LucideRows2: Ie,
  LucideRows3: Ce,
  LucideRows4: yu,
  LucideRss: lu,
  LucideRuler: pu,
  LucideRussianRuble: ku,
  LucideSailboat: su,
  LucideSalad: uu,
  LucideSandwich: Mu,
  LucideSatellite: mu,
  LucideSatelliteDish: vu,
  LucideSave: gu,
  LucideSaveAll: xu,
  LucideScale: fu,
  LucideScale3D: Se,
  LucideScale3d: Se,
  LucideScaling: Lu,
  LucideScan: Au,
  LucideScanBarcode: wu,
  LucideScanEye: bu,
  LucideScanFace: Iu,
  LucideScanLine: Cu,
  LucideScanSearch: Su,
  LucideScanText: qu,
  LucideScatterChart: zu,
  LucideSchool: ju,
  LucideSchool2: Hu,
  LucideScissors: Bu,
  LucideScissorsLineDashed: Pu,
  LucideScissorsSquare: Fu,
  LucideScissorsSquareDashedBottom: Vu,
  LucideScreenShare: Ru,
  LucideScreenShareOff: Du,
  LucideScroll: Ou,
  LucideScrollText: Tu,
  LucideSearch: Nu,
  LucideSearchCheck: Uu,
  LucideSearchCode: Eu,
  LucideSearchSlash: Zu,
  LucideSearchX: Gu,
  LucideSend: _u,
  LucideSendHorizonal: qe,
  LucideSendHorizontal: qe,
  LucideSendToBack: Wu,
  LucideSeparatorHorizontal: Xu,
  LucideSeparatorVertical: $u,
  LucideServer: Yu,
  LucideServerCog: Ku,
  LucideServerCrash: Ju,
  LucideServerOff: Qu,
  LucideSettings: t6,
  LucideSettings2: e6,
  LucideShapes: a6,
  LucideShare: o6,
  LucideShare2: c6,
  LucideSheet: n6,
  LucideShell: r6,
  LucideShield: M6,
  LucideShieldAlert: i6,
  LucideShieldBan: d6,
  LucideShieldCheck: h6,
  LucideShieldClose: Ae,
  LucideShieldEllipsis: y6,
  LucideShieldHalf: l6,
  LucideShieldMinus: p6,
  LucideShieldOff: k6,
  LucideShieldPlus: s6,
  LucideShieldQuestion: u6,
  LucideShieldX: Ae,
  LucideShip: m6,
  LucideShipWheel: v6,
  LucideShirt: x6,
  LucideShoppingBag: g6,
  LucideShoppingBasket: f6,
  LucideShoppingCart: L6,
  LucideShovel: w6,
  LucideShowerHead: b6,
  LucideShrink: I6,
  LucideShrub: C6,
  LucideShuffle: S6,
  LucideSidebar: me,
  LucideSidebarClose: ue,
  LucideSidebarOpen: ve,
  LucideSigma: A6,
  LucideSigmaSquare: q6,
  LucideSignal: V6,
  LucideSignalHigh: z6,
  LucideSignalLow: H6,
  LucideSignalMedium: j6,
  LucideSignalZero: P6,
  LucideSignpost: B6,
  LucideSignpostBig: F6,
  LucideSiren: D6,
  LucideSkipBack: R6,
  LucideSkipForward: T6,
  LucideSkull: O6,
  LucideSlack: U6,
  LucideSlash: E6,
  LucideSlashSquare: ze,
  LucideSlice: Z6,
  LucideSliders: N6,
  LucideSlidersHorizontal: G6,
  LucideSmartphone: X6,
  LucideSmartphoneCharging: W6,
  LucideSmartphoneNfc: _6,
  LucideSmile: K6,
  LucideSmilePlus: $6,
  LucideSnail: J6,
  LucideSnowflake: Q6,
  LucideSofa: Y6,
  LucideSortAsc: D1,
  LucideSortDesc: V1,
  LucideSoup: e8,
  LucideSpace: t8,
  LucideSpade: a8,
  LucideSparkle: c8,
  LucideSparkles: He,
  LucideSpeaker: o8,
  LucideSpeech: n8,
  LucideSpellCheck: i8,
  LucideSpellCheck2: r8,
  LucideSpline: d8,
  LucideSplit: l8,
  LucideSplitSquareHorizontal: h8,
  LucideSplitSquareVertical: y8,
  LucideSprayCan: p8,
  LucideSprout: k8,
  LucideSquare: v8,
  LucideSquareAsterisk: T1,
  LucideSquareCode: J1,
  LucideSquareDashedBottom: u8,
  LucideSquareDashedBottomCode: s8,
  LucideSquareDot: ee,
  LucideSquareEqual: te,
  LucideSquareGantt: d1,
  LucideSquareKanban: le,
  LucideSquareKanbanDashed: ye,
  LucideSquareSlash: ze,
  LucideSquareStack: M8,
  LucideSquareUser: Pe,
  LucideSquareUserRound: je,
  LucideSquircle: m8,
  LucideSquirrel: x8,
  LucideStamp: g8,
  LucideStar: w8,
  LucideStarHalf: f8,
  LucideStarOff: L8,
  LucideStars: He,
  LucideStepBack: b8,
  LucideStepForward: I8,
  LucideStethoscope: C8,
  LucideSticker: S8,
  LucideStickyNote: q8,
  LucideStopCircle: A8,
  LucideStore: z8,
  LucideStretchHorizontal: H8,
  LucideStretchVertical: j8,
  LucideStrikethrough: P8,
  LucideSubscript: V8,
  LucideSubtitles: F8,
  LucideSun: O8,
  LucideSunDim: B8,
  LucideSunMedium: D8,
  LucideSunMoon: R8,
  LucideSunSnow: T8,
  LucideSunrise: U8,
  LucideSunset: E8,
  LucideSuperscript: Z8,
  LucideSwissFranc: G8,
  LucideSwitchCamera: N8,
  LucideSword: W8,
  LucideSwords: _8,
  LucideSyringe: X8,
  LucideTable: J8,
  LucideTable2: $8,
  LucideTableProperties: K8,
  LucideTablet: Y8,
  LucideTabletSmartphone: Q8,
  LucideTablets: e7,
  LucideTag: t7,
  LucideTags: a7,
  LucideTally1: c7,
  LucideTally2: o7,
  LucideTally3: n7,
  LucideTally4: r7,
  LucideTally5: i7,
  LucideTangent: d7,
  LucideTarget: h7,
  LucideTent: l7,
  LucideTentTree: y7,
  LucideTerminal: k7,
  LucideTerminalSquare: p7,
  LucideTestTube: u7,
  LucideTestTube2: s7,
  LucideTestTubes: M7,
  LucideText: g7,
  LucideTextCursor: m7,
  LucideTextCursorInput: v7,
  LucideTextQuote: x7,
  LucideTextSelect: Ve,
  LucideTextSelection: Ve,
  LucideTheater: f7,
  LucideThermometer: b7,
  LucideThermometerSnowflake: L7,
  LucideThermometerSun: w7,
  LucideThumbsDown: I7,
  LucideThumbsUp: C7,
  LucideTicket: S7,
  LucideTimer: z7,
  LucideTimerOff: q7,
  LucideTimerReset: A7,
  LucideToggleLeft: H7,
  LucideToggleRight: j7,
  LucideTornado: P7,
  LucideTorus: V7,
  LucideTouchpad: B7,
  LucideTouchpadOff: F7,
  LucideTowerControl: D7,
  LucideToyBrick: R7,
  LucideTractor: T7,
  LucideTrafficCone: O7,
  LucideTrain: Fe,
  LucideTrainFront: E7,
  LucideTrainFrontTunnel: U7,
  LucideTrainTrack: Z7,
  LucideTramFront: Fe,
  LucideTrash: N7,
  LucideTrash2: G7,
  LucideTreeDeciduous: W7,
  LucideTreePine: _7,
  LucideTrees: X7,
  LucideTrello: $7,
  LucideTrendingDown: K7,
  LucideTrendingUp: J7,
  LucideTriangle: Y7,
  LucideTriangleRight: Q7,
  LucideTrophy: e9,
  LucideTruck: t9,
  LucideTurtle: a9,
  LucideTv: o9,
  LucideTv2: c9,
  LucideTwitch: n9,
  LucideTwitter: r9,
  LucideType: i9,
  LucideUmbrella: h9,
  LucideUmbrellaOff: d9,
  LucideUnderline: y9,
  LucideUndo: k9,
  LucideUndo2: l9,
  LucideUndoDot: p9,
  LucideUnfoldHorizontal: s9,
  LucideUnfoldVertical: u9,
  LucideUngroup: M9,
  LucideUnlink: m9,
  LucideUnlink2: v9,
  LucideUnlock: g9,
  LucideUnlockKeyhole: x9,
  LucideUnplug: f9,
  LucideUpload: w9,
  LucideUploadCloud: L9,
  LucideUsb: b9,
  LucideUser: j9,
  LucideUser2: Ue,
  LucideUserCheck: I9,
  LucideUserCheck2: Be,
  LucideUserCircle: X1,
  LucideUserCircle2: _1,
  LucideUserCog: C9,
  LucideUserCog2: De,
  LucideUserMinus: S9,
  LucideUserMinus2: Re,
  LucideUserPlus: q9,
  LucideUserPlus2: Te,
  LucideUserRound: Ue,
  LucideUserRoundCheck: Be,
  LucideUserRoundCog: De,
  LucideUserRoundMinus: Re,
  LucideUserRoundPlus: Te,
  LucideUserRoundSearch: A9,
  LucideUserRoundX: Oe,
  LucideUserSearch: z9,
  LucideUserSquare: Pe,
  LucideUserSquare2: je,
  LucideUserX: H9,
  LucideUserX2: Oe,
  LucideUsers: P9,
  LucideUsers2: Ee,
  LucideUsersRound: Ee,
  LucideUtensils: F9,
  LucideUtensilsCrossed: V9,
  LucideUtilityPole: B9,
  LucideVariable: D9,
  LucideVault: R9,
  LucideVegan: T9,
  LucideVenetianMask: O9,
  LucideVerified: U1,
  LucideVibrate: E9,
  LucideVibrateOff: U9,
  LucideVideo: G9,
  LucideVideoOff: Z9,
  LucideVideotape: N9,
  LucideView: W9,
  LucideVoicemail: _9,
  LucideVolume: J9,
  LucideVolume1: X9,
  LucideVolume2: $9,
  LucideVolumeX: K9,
  LucideVote: Q9,
  LucideWallet: tM,
  LucideWallet2: Y9,
  LucideWalletCards: eM,
  LucideWallpaper: aM,
  LucideWand: oM,
  LucideWand2: cM,
  LucideWarehouse: nM,
  LucideWashingMachine: rM,
  LucideWatch: iM,
  LucideWaves: dM,
  LucideWaypoints: hM,
  LucideWebcam: yM,
  LucideWebhook: lM,
  LucideWeight: pM,
  LucideWheat: sM,
  LucideWheatOff: kM,
  LucideWholeWord: uM,
  LucideWifi: vM,
  LucideWifiOff: MM,
  LucideWind: mM,
  LucideWine: gM,
  LucideWineOff: xM,
  LucideWorkflow: fM,
  LucideWrapText: LM,
  LucideWrench: wM,
  LucideX: SM,
  LucideXCircle: bM,
  LucideXOctagon: IM,
  LucideXSquare: CM,
  LucideYoutube: qM,
  LucideZap: zM,
  LucideZapOff: AM,
  LucideZoomIn: HM,
  LucideZoomOut: jM,
  Luggage: yk,
  LuggageIcon: yk,
  MSquare: lk,
  MSquareIcon: lk,
  Magnet: pk,
  MagnetIcon: pk,
  Mail: fk,
  MailCheck: kk,
  MailCheckIcon: kk,
  MailIcon: fk,
  MailMinus: sk,
  MailMinusIcon: sk,
  MailOpen: uk,
  MailOpenIcon: uk,
  MailPlus: Mk,
  MailPlusIcon: Mk,
  MailQuestion: vk,
  MailQuestionIcon: vk,
  MailSearch: mk,
  MailSearchIcon: mk,
  MailWarning: xk,
  MailWarningIcon: xk,
  MailX: gk,
  MailXIcon: gk,
  Mailbox: Lk,
  MailboxIcon: Lk,
  Mails: wk,
  MailsIcon: wk,
  Map: Sk,
  MapIcon: Sk,
  MapPin: Ik,
  MapPinIcon: Ik,
  MapPinOff: bk,
  MapPinOffIcon: bk,
  MapPinned: Ck,
  MapPinnedIcon: Ck,
  Martini: qk,
  MartiniIcon: qk,
  Maximize: zk,
  Maximize2: Ak,
  Maximize2Icon: Ak,
  MaximizeIcon: zk,
  Medal: Hk,
  MedalIcon: Hk,
  Megaphone: Pk,
  MegaphoneIcon: Pk,
  MegaphoneOff: jk,
  MegaphoneOffIcon: jk,
  Meh: Vk,
  MehIcon: Vk,
  MemoryStick: Fk,
  MemoryStickIcon: Fk,
  Menu: Dk,
  MenuIcon: Dk,
  MenuSquare: Bk,
  MenuSquareIcon: Bk,
  Merge: Rk,
  MergeIcon: Rk,
  MessageCircle: $k,
  MessageCircleCode: Tk,
  MessageCircleCodeIcon: Tk,
  MessageCircleDashed: Ok,
  MessageCircleDashedIcon: Ok,
  MessageCircleHeart: Uk,
  MessageCircleHeartIcon: Uk,
  MessageCircleIcon: $k,
  MessageCircleMore: Ek,
  MessageCircleMoreIcon: Ek,
  MessageCircleOff: Zk,
  MessageCircleOffIcon: Zk,
  MessageCirclePlus: Gk,
  MessageCirclePlusIcon: Gk,
  MessageCircleQuestion: Nk,
  MessageCircleQuestionIcon: Nk,
  MessageCircleReply: Wk,
  MessageCircleReplyIcon: Wk,
  MessageCircleWarning: _k,
  MessageCircleWarningIcon: _k,
  MessageCircleX: Xk,
  MessageCircleXIcon: Xk,
  MessageSquare: y4,
  MessageSquareCode: Kk,
  MessageSquareCodeIcon: Kk,
  MessageSquareDashed: Jk,
  MessageSquareDashedIcon: Jk,
  MessageSquareDiff: Qk,
  MessageSquareDiffIcon: Qk,
  MessageSquareDot: Yk,
  MessageSquareDotIcon: Yk,
  MessageSquareHeart: e4,
  MessageSquareHeartIcon: e4,
  MessageSquareIcon: y4,
  MessageSquareMore: t4,
  MessageSquareMoreIcon: t4,
  MessageSquareOff: a4,
  MessageSquareOffIcon: a4,
  MessageSquarePlus: c4,
  MessageSquarePlusIcon: c4,
  MessageSquareQuote: o4,
  MessageSquareQuoteIcon: o4,
  MessageSquareReply: n4,
  MessageSquareReplyIcon: n4,
  MessageSquareShare: r4,
  MessageSquareShareIcon: r4,
  MessageSquareText: i4,
  MessageSquareTextIcon: i4,
  MessageSquareWarning: d4,
  MessageSquareWarningIcon: d4,
  MessageSquareX: h4,
  MessageSquareXIcon: h4,
  MessagesSquare: l4,
  MessagesSquareIcon: l4,
  Mic: s4,
  Mic2: p4,
  Mic2Icon: p4,
  MicIcon: s4,
  MicOff: k4,
  MicOffIcon: k4,
  Microscope: u4,
  MicroscopeIcon: u4,
  Microwave: M4,
  MicrowaveIcon: M4,
  Milestone: v4,
  MilestoneIcon: v4,
  Milk: x4,
  MilkIcon: x4,
  MilkOff: m4,
  MilkOffIcon: m4,
  Minimize: f4,
  Minimize2: g4,
  Minimize2Icon: g4,
  MinimizeIcon: f4,
  Minus: b4,
  MinusCircle: L4,
  MinusCircleIcon: L4,
  MinusIcon: b4,
  MinusSquare: w4,
  MinusSquareIcon: w4,
  Monitor: B4,
  MonitorCheck: I4,
  MonitorCheckIcon: I4,
  MonitorDot: C4,
  MonitorDotIcon: C4,
  MonitorDown: S4,
  MonitorDownIcon: S4,
  MonitorIcon: B4,
  MonitorOff: q4,
  MonitorOffIcon: q4,
  MonitorPause: A4,
  MonitorPauseIcon: A4,
  MonitorPlay: z4,
  MonitorPlayIcon: z4,
  MonitorSmartphone: H4,
  MonitorSmartphoneIcon: H4,
  MonitorSpeaker: j4,
  MonitorSpeakerIcon: j4,
  MonitorStop: P4,
  MonitorStopIcon: P4,
  MonitorUp: V4,
  MonitorUpIcon: V4,
  MonitorX: F4,
  MonitorXIcon: F4,
  Moon: R4,
  MoonIcon: R4,
  MoonStar: D4,
  MoonStarIcon: D4,
  MoreHorizontal: T4,
  MoreHorizontalIcon: T4,
  MoreVertical: O4,
  MoreVerticalIcon: O4,
  Mountain: E4,
  MountainIcon: E4,
  MountainSnow: U4,
  MountainSnowIcon: U4,
  Mouse: _4,
  MouseIcon: _4,
  MousePointer: W4,
  MousePointer2: Z4,
  MousePointer2Icon: Z4,
  MousePointerClick: G4,
  MousePointerClickIcon: G4,
  MousePointerIcon: W4,
  MousePointerSquare: pe,
  MousePointerSquareDashed: N4,
  MousePointerSquareDashedIcon: N4,
  MousePointerSquareIcon: pe,
  Move: rs,
  Move3D: ke,
  Move3DIcon: ke,
  Move3d: ke,
  Move3dIcon: ke,
  MoveDiagonal: $4,
  MoveDiagonal2: X4,
  MoveDiagonal2Icon: X4,
  MoveDiagonalIcon: $4,
  MoveDown: Q4,
  MoveDownIcon: Q4,
  MoveDownLeft: K4,
  MoveDownLeftIcon: K4,
  MoveDownRight: J4,
  MoveDownRightIcon: J4,
  MoveHorizontal: Y4,
  MoveHorizontalIcon: Y4,
  MoveIcon: rs,
  MoveLeft: es,
  MoveLeftIcon: es,
  MoveRight: ts,
  MoveRightIcon: ts,
  MoveUp: os,
  MoveUpIcon: os,
  MoveUpLeft: as,
  MoveUpLeftIcon: as,
  MoveUpRight: cs,
  MoveUpRightIcon: cs,
  MoveVertical: ns,
  MoveVerticalIcon: ns,
  Music: ys,
  Music2: is,
  Music2Icon: is,
  Music3: ds,
  Music3Icon: ds,
  Music4: hs,
  Music4Icon: hs,
  MusicIcon: ys,
  Navigation: ss,
  Navigation2: ps,
  Navigation2Icon: ps,
  Navigation2Off: ls,
  Navigation2OffIcon: ls,
  NavigationIcon: ss,
  NavigationOff: ks,
  NavigationOffIcon: ks,
  Network: us,
  NetworkIcon: us,
  Newspaper: Ms,
  NewspaperIcon: Ms,
  Nfc: vs,
  NfcIcon: vs,
  Notebook: fs,
  NotebookIcon: fs,
  NotebookPen: ms,
  NotebookPenIcon: ms,
  NotebookTabs: xs,
  NotebookTabsIcon: xs,
  NotebookText: gs,
  NotebookTextIcon: gs,
  NotepadText: ws,
  NotepadTextDashed: Ls,
  NotepadTextDashedIcon: Ls,
  NotepadTextIcon: ws,
  Nut: Is,
  NutIcon: Is,
  NutOff: bs,
  NutOffIcon: bs,
  Octagon: Cs,
  OctagonIcon: Cs,
  Option: Ss,
  OptionIcon: Ss,
  Orbit: qs,
  OrbitIcon: qs,
  Outdent: As,
  OutdentIcon: As,
  Package: Ds,
  Package2: zs,
  Package2Icon: zs,
  PackageCheck: Hs,
  PackageCheckIcon: Hs,
  PackageIcon: Ds,
  PackageMinus: js,
  PackageMinusIcon: js,
  PackageOpen: Ps,
  PackageOpenIcon: Ps,
  PackagePlus: Vs,
  PackagePlusIcon: Vs,
  PackageSearch: Fs,
  PackageSearchIcon: Fs,
  PackageX: Bs,
  PackageXIcon: Bs,
  PaintBucket: Rs,
  PaintBucketIcon: Rs,
  Paintbrush: Os,
  Paintbrush2: Ts,
  Paintbrush2Icon: Ts,
  PaintbrushIcon: Os,
  Palette: Us,
  PaletteIcon: Us,
  Palmtree: Es,
  PalmtreeIcon: Es,
  PanelBottom: Ns,
  PanelBottomClose: Zs,
  PanelBottomCloseIcon: Zs,
  PanelBottomDashed: se,
  PanelBottomDashedIcon: se,
  PanelBottomIcon: Ns,
  PanelBottomInactive: se,
  PanelBottomInactiveIcon: se,
  PanelBottomOpen: Gs,
  PanelBottomOpenIcon: Gs,
  PanelLeft: me,
  PanelLeftClose: ue,
  PanelLeftCloseIcon: ue,
  PanelLeftDashed: Me,
  PanelLeftDashedIcon: Me,
  PanelLeftIcon: me,
  PanelLeftInactive: Me,
  PanelLeftInactiveIcon: Me,
  PanelLeftOpen: ve,
  PanelLeftOpenIcon: ve,
  PanelRight: Xs,
  PanelRightClose: Ws,
  PanelRightCloseIcon: Ws,
  PanelRightDashed: xe,
  PanelRightDashedIcon: xe,
  PanelRightIcon: Xs,
  PanelRightInactive: xe,
  PanelRightInactiveIcon: xe,
  PanelRightOpen: _s,
  PanelRightOpenIcon: _s,
  PanelTop: Js,
  PanelTopClose: $s,
  PanelTopCloseIcon: $s,
  PanelTopDashed: ge,
  PanelTopDashedIcon: ge,
  PanelTopIcon: Js,
  PanelTopInactive: ge,
  PanelTopInactiveIcon: ge,
  PanelTopOpen: Ks,
  PanelTopOpenIcon: Ks,
  PanelsLeftBottom: Qs,
  PanelsLeftBottomIcon: Qs,
  PanelsLeftRight: Y1,
  PanelsLeftRightIcon: Y1,
  PanelsRightBottom: Ys,
  PanelsRightBottomIcon: Ys,
  PanelsTopBottom: Ce,
  PanelsTopBottomIcon: Ce,
  PanelsTopLeft: fe,
  PanelsTopLeftIcon: fe,
  Paperclip: e5,
  PaperclipIcon: e5,
  Parentheses: t5,
  ParenthesesIcon: t5,
  ParkingCircle: c5,
  ParkingCircleIcon: c5,
  ParkingCircleOff: a5,
  ParkingCircleOffIcon: a5,
  ParkingMeter: o5,
  ParkingMeterIcon: o5,
  ParkingSquare: r5,
  ParkingSquareIcon: r5,
  ParkingSquareOff: n5,
  ParkingSquareOffIcon: n5,
  PartyPopper: i5,
  PartyPopperIcon: i5,
  Pause: y5,
  PauseCircle: d5,
  PauseCircleIcon: d5,
  PauseIcon: y5,
  PauseOctagon: h5,
  PauseOctagonIcon: h5,
  PawPrint: l5,
  PawPrintIcon: l5,
  PcCase: p5,
  PcCaseIcon: p5,
  Pen: we,
  PenBox: y1,
  PenBoxIcon: y1,
  PenIcon: we,
  PenLine: Le,
  PenLineIcon: Le,
  PenSquare: y1,
  PenSquareIcon: y1,
  PenTool: k5,
  PenToolIcon: k5,
  Pencil: M5,
  PencilIcon: M5,
  PencilLine: s5,
  PencilLineIcon: s5,
  PencilRuler: u5,
  PencilRulerIcon: u5,
  Pentagon: v5,
  PentagonIcon: v5,
  Percent: f5,
  PercentCircle: m5,
  PercentCircleIcon: m5,
  PercentDiamond: x5,
  PercentDiamondIcon: x5,
  PercentIcon: f5,
  PercentSquare: g5,
  PercentSquareIcon: g5,
  PersonStanding: L5,
  PersonStandingIcon: L5,
  Phone: A5,
  PhoneCall: w5,
  PhoneCallIcon: w5,
  PhoneForwarded: b5,
  PhoneForwardedIcon: b5,
  PhoneIcon: A5,
  PhoneIncoming: I5,
  PhoneIncomingIcon: I5,
  PhoneMissed: C5,
  PhoneMissedIcon: C5,
  PhoneOff: S5,
  PhoneOffIcon: S5,
  PhoneOutgoing: q5,
  PhoneOutgoingIcon: q5,
  Pi: H5,
  PiIcon: H5,
  PiSquare: z5,
  PiSquareIcon: z5,
  Piano: j5,
  PianoIcon: j5,
  PictureInPicture: V5,
  PictureInPicture2: P5,
  PictureInPicture2Icon: P5,
  PictureInPictureIcon: V5,
  PieChart: F5,
  PieChartIcon: F5,
  PiggyBank: B5,
  PiggyBankIcon: B5,
  Pilcrow: R5,
  PilcrowIcon: R5,
  PilcrowSquare: D5,
  PilcrowSquareIcon: D5,
  Pill: T5,
  PillIcon: T5,
  Pin: U5,
  PinIcon: U5,
  PinOff: O5,
  PinOffIcon: O5,
  Pipette: E5,
  PipetteIcon: E5,
  Pizza: Z5,
  PizzaIcon: Z5,
  Plane: W5,
  PlaneIcon: W5,
  PlaneLanding: G5,
  PlaneLandingIcon: G5,
  PlaneTakeoff: N5,
  PlaneTakeoffIcon: N5,
  Play: $5,
  PlayCircle: _5,
  PlayCircleIcon: _5,
  PlayIcon: $5,
  PlaySquare: X5,
  PlaySquareIcon: X5,
  Plug: Y5,
  Plug2: K5,
  Plug2Icon: K5,
  PlugIcon: Y5,
  PlugZap: Q5,
  PlugZap2: J5,
  PlugZap2Icon: J5,
  PlugZapIcon: Q5,
  Plus: a3,
  PlusCircle: e3,
  PlusCircleIcon: e3,
  PlusIcon: a3,
  PlusSquare: t3,
  PlusSquareIcon: t3,
  Pocket: o3,
  PocketIcon: o3,
  PocketKnife: c3,
  PocketKnifeIcon: c3,
  Podcast: n3,
  PodcastIcon: n3,
  Pointer: i3,
  PointerIcon: i3,
  PointerOff: r3,
  PointerOffIcon: r3,
  Popcorn: d3,
  PopcornIcon: d3,
  Popsicle: h3,
  PopsicleIcon: h3,
  PoundSterling: y3,
  PoundSterlingIcon: y3,
  Power: s3,
  PowerCircle: l3,
  PowerCircleIcon: l3,
  PowerIcon: s3,
  PowerOff: p3,
  PowerOffIcon: p3,
  PowerSquare: k3,
  PowerSquareIcon: k3,
  Presentation: u3,
  PresentationIcon: u3,
  Printer: M3,
  PrinterIcon: M3,
  Projector: v3,
  ProjectorIcon: v3,
  Puzzle: m3,
  PuzzleIcon: m3,
  Pyramid: x3,
  PyramidIcon: x3,
  QrCode: g3,
  QrCodeIcon: g3,
  Quote: f3,
  QuoteIcon: f3,
  Rabbit: L3,
  RabbitIcon: L3,
  Radar: w3,
  RadarIcon: w3,
  Radiation: b3,
  RadiationIcon: b3,
  Radio: S3,
  RadioIcon: S3,
  RadioReceiver: I3,
  RadioReceiverIcon: I3,
  RadioTower: C3,
  RadioTowerIcon: C3,
  Radius: q3,
  RadiusIcon: q3,
  RailSymbol: A3,
  RailSymbolIcon: A3,
  Rainbow: z3,
  RainbowIcon: z3,
  Rat: H3,
  RatIcon: H3,
  Ratio: j3,
  RatioIcon: j3,
  Receipt: P3,
  ReceiptIcon: P3,
  RectangleHorizontal: V3,
  RectangleHorizontalIcon: V3,
  RectangleVertical: F3,
  RectangleVerticalIcon: F3,
  Recycle: B3,
  RecycleIcon: B3,
  Redo: T3,
  Redo2: D3,
  Redo2Icon: D3,
  RedoDot: R3,
  RedoDotIcon: R3,
  RedoIcon: T3,
  RefreshCcw: U3,
  RefreshCcwDot: O3,
  RefreshCcwDotIcon: O3,
  RefreshCcwIcon: U3,
  RefreshCw: Z3,
  RefreshCwIcon: Z3,
  RefreshCwOff: E3,
  RefreshCwOffIcon: E3,
  Refrigerator: G3,
  RefrigeratorIcon: G3,
  Regex: N3,
  RegexIcon: N3,
  RemoveFormatting: W3,
  RemoveFormattingIcon: W3,
  Repeat: $3,
  Repeat1: _3,
  Repeat1Icon: _3,
  Repeat2: X3,
  Repeat2Icon: X3,
  RepeatIcon: $3,
  Replace: J3,
  ReplaceAll: K3,
  ReplaceAllIcon: K3,
  ReplaceIcon: J3,
  Reply: Y3,
  ReplyAll: Q3,
  ReplyAllIcon: Q3,
  ReplyIcon: Y3,
  Rewind: eu,
  RewindIcon: eu,
  Ribbon: tu,
  RibbonIcon: tu,
  Rocket: au,
  RocketIcon: au,
  RockingChair: cu,
  RockingChairIcon: cu,
  RollerCoaster: ou,
  RollerCoasterIcon: ou,
  Rotate3D: be,
  Rotate3DIcon: be,
  Rotate3d: be,
  Rotate3dIcon: be,
  RotateCcw: nu,
  RotateCcwIcon: nu,
  RotateCw: ru,
  RotateCwIcon: ru,
  Route: du,
  RouteIcon: du,
  RouteOff: iu,
  RouteOffIcon: iu,
  Router: hu,
  RouterIcon: hu,
  Rows: Ie,
  Rows2: Ie,
  Rows2Icon: Ie,
  Rows3: Ce,
  Rows3Icon: Ce,
  Rows4: yu,
  Rows4Icon: yu,
  RowsIcon: Ie,
  Rss: lu,
  RssIcon: lu,
  Ruler: pu,
  RulerIcon: pu,
  RussianRuble: ku,
  RussianRubleIcon: ku,
  Sailboat: su,
  SailboatIcon: su,
  Salad: uu,
  SaladIcon: uu,
  Sandwich: Mu,
  SandwichIcon: Mu,
  Satellite: mu,
  SatelliteDish: vu,
  SatelliteDishIcon: vu,
  SatelliteIcon: mu,
  Save: gu,
  SaveAll: xu,
  SaveAllIcon: xu,
  SaveIcon: gu,
  Scale: fu,
  Scale3D: Se,
  Scale3DIcon: Se,
  Scale3d: Se,
  Scale3dIcon: Se,
  ScaleIcon: fu,
  Scaling: Lu,
  ScalingIcon: Lu,
  Scan: Au,
  ScanBarcode: wu,
  ScanBarcodeIcon: wu,
  ScanEye: bu,
  ScanEyeIcon: bu,
  ScanFace: Iu,
  ScanFaceIcon: Iu,
  ScanIcon: Au,
  ScanLine: Cu,
  ScanLineIcon: Cu,
  ScanSearch: Su,
  ScanSearchIcon: Su,
  ScanText: qu,
  ScanTextIcon: qu,
  ScatterChart: zu,
  ScatterChartIcon: zu,
  School: ju,
  School2: Hu,
  School2Icon: Hu,
  SchoolIcon: ju,
  Scissors: Bu,
  ScissorsIcon: Bu,
  ScissorsLineDashed: Pu,
  ScissorsLineDashedIcon: Pu,
  ScissorsSquare: Fu,
  ScissorsSquareDashedBottom: Vu,
  ScissorsSquareDashedBottomIcon: Vu,
  ScissorsSquareIcon: Fu,
  ScreenShare: Ru,
  ScreenShareIcon: Ru,
  ScreenShareOff: Du,
  ScreenShareOffIcon: Du,
  Scroll: Ou,
  ScrollIcon: Ou,
  ScrollText: Tu,
  ScrollTextIcon: Tu,
  Search: Nu,
  SearchCheck: Uu,
  SearchCheckIcon: Uu,
  SearchCode: Eu,
  SearchCodeIcon: Eu,
  SearchIcon: Nu,
  SearchSlash: Zu,
  SearchSlashIcon: Zu,
  SearchX: Gu,
  SearchXIcon: Gu,
  Send: _u,
  SendHorizonal: qe,
  SendHorizonalIcon: qe,
  SendHorizontal: qe,
  SendHorizontalIcon: qe,
  SendIcon: _u,
  SendToBack: Wu,
  SendToBackIcon: Wu,
  SeparatorHorizontal: Xu,
  SeparatorHorizontalIcon: Xu,
  SeparatorVertical: $u,
  SeparatorVerticalIcon: $u,
  Server: Yu,
  ServerCog: Ku,
  ServerCogIcon: Ku,
  ServerCrash: Ju,
  ServerCrashIcon: Ju,
  ServerIcon: Yu,
  ServerOff: Qu,
  ServerOffIcon: Qu,
  Settings: t6,
  Settings2: e6,
  Settings2Icon: e6,
  SettingsIcon: t6,
  Shapes: a6,
  ShapesIcon: a6,
  Share: o6,
  Share2: c6,
  Share2Icon: c6,
  ShareIcon: o6,
  Sheet: n6,
  SheetIcon: n6,
  Shell: r6,
  ShellIcon: r6,
  Shield: M6,
  ShieldAlert: i6,
  ShieldAlertIcon: i6,
  ShieldBan: d6,
  ShieldBanIcon: d6,
  ShieldCheck: h6,
  ShieldCheckIcon: h6,
  ShieldClose: Ae,
  ShieldCloseIcon: Ae,
  ShieldEllipsis: y6,
  ShieldEllipsisIcon: y6,
  ShieldHalf: l6,
  ShieldHalfIcon: l6,
  ShieldIcon: M6,
  ShieldMinus: p6,
  ShieldMinusIcon: p6,
  ShieldOff: k6,
  ShieldOffIcon: k6,
  ShieldPlus: s6,
  ShieldPlusIcon: s6,
  ShieldQuestion: u6,
  ShieldQuestionIcon: u6,
  ShieldX: Ae,
  ShieldXIcon: Ae,
  Ship: m6,
  ShipIcon: m6,
  ShipWheel: v6,
  ShipWheelIcon: v6,
  Shirt: x6,
  ShirtIcon: x6,
  ShoppingBag: g6,
  ShoppingBagIcon: g6,
  ShoppingBasket: f6,
  ShoppingBasketIcon: f6,
  ShoppingCart: L6,
  ShoppingCartIcon: L6,
  Shovel: w6,
  ShovelIcon: w6,
  ShowerHead: b6,
  ShowerHeadIcon: b6,
  Shrink: I6,
  ShrinkIcon: I6,
  Shrub: C6,
  ShrubIcon: C6,
  Shuffle: S6,
  ShuffleIcon: S6,
  Sidebar: me,
  SidebarClose: ue,
  SidebarCloseIcon: ue,
  SidebarIcon: me,
  SidebarOpen: ve,
  SidebarOpenIcon: ve,
  Sigma: A6,
  SigmaIcon: A6,
  SigmaSquare: q6,
  SigmaSquareIcon: q6,
  Signal: V6,
  SignalHigh: z6,
  SignalHighIcon: z6,
  SignalIcon: V6,
  SignalLow: H6,
  SignalLowIcon: H6,
  SignalMedium: j6,
  SignalMediumIcon: j6,
  SignalZero: P6,
  SignalZeroIcon: P6,
  Signpost: B6,
  SignpostBig: F6,
  SignpostBigIcon: F6,
  SignpostIcon: B6,
  Siren: D6,
  SirenIcon: D6,
  SkipBack: R6,
  SkipBackIcon: R6,
  SkipForward: T6,
  SkipForwardIcon: T6,
  Skull: O6,
  SkullIcon: O6,
  Slack: U6,
  SlackIcon: U6,
  Slash: E6,
  SlashIcon: E6,
  SlashSquare: ze,
  SlashSquareIcon: ze,
  Slice: Z6,
  SliceIcon: Z6,
  Sliders: N6,
  SlidersHorizontal: G6,
  SlidersHorizontalIcon: G6,
  SlidersIcon: N6,
  Smartphone: X6,
  SmartphoneCharging: W6,
  SmartphoneChargingIcon: W6,
  SmartphoneIcon: X6,
  SmartphoneNfc: _6,
  SmartphoneNfcIcon: _6,
  Smile: K6,
  SmileIcon: K6,
  SmilePlus: $6,
  SmilePlusIcon: $6,
  Snail: J6,
  SnailIcon: J6,
  Snowflake: Q6,
  SnowflakeIcon: Q6,
  Sofa: Y6,
  SofaIcon: Y6,
  SortAsc: D1,
  SortAscIcon: D1,
  SortDesc: V1,
  SortDescIcon: V1,
  Soup: e8,
  SoupIcon: e8,
  Space: t8,
  SpaceIcon: t8,
  Spade: a8,
  SpadeIcon: a8,
  Sparkle: c8,
  SparkleIcon: c8,
  Sparkles: He,
  SparklesIcon: He,
  Speaker: o8,
  SpeakerIcon: o8,
  Speech: n8,
  SpeechIcon: n8,
  SpellCheck: i8,
  SpellCheck2: r8,
  SpellCheck2Icon: r8,
  SpellCheckIcon: i8,
  Spline: d8,
  SplineIcon: d8,
  Split: l8,
  SplitIcon: l8,
  SplitSquareHorizontal: h8,
  SplitSquareHorizontalIcon: h8,
  SplitSquareVertical: y8,
  SplitSquareVerticalIcon: y8,
  SprayCan: p8,
  SprayCanIcon: p8,
  Sprout: k8,
  SproutIcon: k8,
  Square: v8,
  SquareAsterisk: T1,
  SquareAsteriskIcon: T1,
  SquareCode: J1,
  SquareCodeIcon: J1,
  SquareDashedBottom: u8,
  SquareDashedBottomCode: s8,
  SquareDashedBottomCodeIcon: s8,
  SquareDashedBottomIcon: u8,
  SquareDot: ee,
  SquareDotIcon: ee,
  SquareEqual: te,
  SquareEqualIcon: te,
  SquareGantt: d1,
  SquareGanttIcon: d1,
  SquareIcon: v8,
  SquareKanban: le,
  SquareKanbanDashed: ye,
  SquareKanbanDashedIcon: ye,
  SquareKanbanIcon: le,
  SquareSlash: ze,
  SquareSlashIcon: ze,
  SquareStack: M8,
  SquareStackIcon: M8,
  SquareUser: Pe,
  SquareUserIcon: Pe,
  SquareUserRound: je,
  SquareUserRoundIcon: je,
  Squircle: m8,
  SquircleIcon: m8,
  Squirrel: x8,
  SquirrelIcon: x8,
  Stamp: g8,
  StampIcon: g8,
  Star: w8,
  StarHalf: f8,
  StarHalfIcon: f8,
  StarIcon: w8,
  StarOff: L8,
  StarOffIcon: L8,
  Stars: He,
  StarsIcon: He,
  StepBack: b8,
  StepBackIcon: b8,
  StepForward: I8,
  StepForwardIcon: I8,
  Stethoscope: C8,
  StethoscopeIcon: C8,
  Sticker: S8,
  StickerIcon: S8,
  StickyNote: q8,
  StickyNoteIcon: q8,
  StopCircle: A8,
  StopCircleIcon: A8,
  Store: z8,
  StoreIcon: z8,
  StretchHorizontal: H8,
  StretchHorizontalIcon: H8,
  StretchVertical: j8,
  StretchVerticalIcon: j8,
  Strikethrough: P8,
  StrikethroughIcon: P8,
  Subscript: V8,
  SubscriptIcon: V8,
  Subtitles: F8,
  SubtitlesIcon: F8,
  Sun: O8,
  SunDim: B8,
  SunDimIcon: B8,
  SunIcon: O8,
  SunMedium: D8,
  SunMediumIcon: D8,
  SunMoon: R8,
  SunMoonIcon: R8,
  SunSnow: T8,
  SunSnowIcon: T8,
  Sunrise: U8,
  SunriseIcon: U8,
  Sunset: E8,
  SunsetIcon: E8,
  Superscript: Z8,
  SuperscriptIcon: Z8,
  SwissFranc: G8,
  SwissFrancIcon: G8,
  SwitchCamera: N8,
  SwitchCameraIcon: N8,
  Sword: W8,
  SwordIcon: W8,
  Swords: _8,
  SwordsIcon: _8,
  Syringe: X8,
  SyringeIcon: X8,
  Table: J8,
  Table2: $8,
  Table2Icon: $8,
  TableIcon: J8,
  TableProperties: K8,
  TablePropertiesIcon: K8,
  Tablet: Y8,
  TabletIcon: Y8,
  TabletSmartphone: Q8,
  TabletSmartphoneIcon: Q8,
  Tablets: e7,
  TabletsIcon: e7,
  Tag: t7,
  TagIcon: t7,
  Tags: a7,
  TagsIcon: a7,
  Tally1: c7,
  Tally1Icon: c7,
  Tally2: o7,
  Tally2Icon: o7,
  Tally3: n7,
  Tally3Icon: n7,
  Tally4: r7,
  Tally4Icon: r7,
  Tally5: i7,
  Tally5Icon: i7,
  Tangent: d7,
  TangentIcon: d7,
  Target: h7,
  TargetIcon: h7,
  Tent: l7,
  TentIcon: l7,
  TentTree: y7,
  TentTreeIcon: y7,
  Terminal: k7,
  TerminalIcon: k7,
  TerminalSquare: p7,
  TerminalSquareIcon: p7,
  TestTube: u7,
  TestTube2: s7,
  TestTube2Icon: s7,
  TestTubeIcon: u7,
  TestTubes: M7,
  TestTubesIcon: M7,
  Text: g7,
  TextCursor: m7,
  TextCursorIcon: m7,
  TextCursorInput: v7,
  TextCursorInputIcon: v7,
  TextIcon: g7,
  TextQuote: x7,
  TextQuoteIcon: x7,
  TextSelect: Ve,
  TextSelectIcon: Ve,
  TextSelection: Ve,
  TextSelectionIcon: Ve,
  Theater: f7,
  TheaterIcon: f7,
  Thermometer: b7,
  ThermometerIcon: b7,
  ThermometerSnowflake: L7,
  ThermometerSnowflakeIcon: L7,
  ThermometerSun: w7,
  ThermometerSunIcon: w7,
  ThumbsDown: I7,
  ThumbsDownIcon: I7,
  ThumbsUp: C7,
  ThumbsUpIcon: C7,
  Ticket: S7,
  TicketIcon: S7,
  Timer: z7,
  TimerIcon: z7,
  TimerOff: q7,
  TimerOffIcon: q7,
  TimerReset: A7,
  TimerResetIcon: A7,
  ToggleLeft: H7,
  ToggleLeftIcon: H7,
  ToggleRight: j7,
  ToggleRightIcon: j7,
  Tornado: P7,
  TornadoIcon: P7,
  Torus: V7,
  TorusIcon: V7,
  Touchpad: B7,
  TouchpadIcon: B7,
  TouchpadOff: F7,
  TouchpadOffIcon: F7,
  TowerControl: D7,
  TowerControlIcon: D7,
  ToyBrick: R7,
  ToyBrickIcon: R7,
  Tractor: T7,
  TractorIcon: T7,
  TrafficCone: O7,
  TrafficConeIcon: O7,
  Train: Fe,
  TrainFront: E7,
  TrainFrontIcon: E7,
  TrainFrontTunnel: U7,
  TrainFrontTunnelIcon: U7,
  TrainIcon: Fe,
  TrainTrack: Z7,
  TrainTrackIcon: Z7,
  TramFront: Fe,
  TramFrontIcon: Fe,
  Trash: N7,
  Trash2: G7,
  Trash2Icon: G7,
  TrashIcon: N7,
  TreeDeciduous: W7,
  TreeDeciduousIcon: W7,
  TreePine: _7,
  TreePineIcon: _7,
  Trees: X7,
  TreesIcon: X7,
  Trello: $7,
  TrelloIcon: $7,
  TrendingDown: K7,
  TrendingDownIcon: K7,
  TrendingUp: J7,
  TrendingUpIcon: J7,
  Triangle: Y7,
  TriangleIcon: Y7,
  TriangleRight: Q7,
  TriangleRightIcon: Q7,
  Trophy: e9,
  TrophyIcon: e9,
  Truck: t9,
  TruckIcon: t9,
  Turtle: a9,
  TurtleIcon: a9,
  Tv: o9,
  Tv2: c9,
  Tv2Icon: c9,
  TvIcon: o9,
  Twitch: n9,
  TwitchIcon: n9,
  Twitter: r9,
  TwitterIcon: r9,
  Type: i9,
  TypeIcon: i9,
  Umbrella: h9,
  UmbrellaIcon: h9,
  UmbrellaOff: d9,
  UmbrellaOffIcon: d9,
  Underline: y9,
  UnderlineIcon: y9,
  Undo: k9,
  Undo2: l9,
  Undo2Icon: l9,
  UndoDot: p9,
  UndoDotIcon: p9,
  UndoIcon: k9,
  UnfoldHorizontal: s9,
  UnfoldHorizontalIcon: s9,
  UnfoldVertical: u9,
  UnfoldVerticalIcon: u9,
  Ungroup: M9,
  UngroupIcon: M9,
  Unlink: m9,
  Unlink2: v9,
  Unlink2Icon: v9,
  UnlinkIcon: m9,
  Unlock: g9,
  UnlockIcon: g9,
  UnlockKeyhole: x9,
  UnlockKeyholeIcon: x9,
  Unplug: f9,
  UnplugIcon: f9,
  Upload: w9,
  UploadCloud: L9,
  UploadCloudIcon: L9,
  UploadIcon: w9,
  Usb: b9,
  UsbIcon: b9,
  User: j9,
  User2: Ue,
  User2Icon: Ue,
  UserCheck: I9,
  UserCheck2: Be,
  UserCheck2Icon: Be,
  UserCheckIcon: I9,
  UserCircle: X1,
  UserCircle2: _1,
  UserCircle2Icon: _1,
  UserCircleIcon: X1,
  UserCog: C9,
  UserCog2: De,
  UserCog2Icon: De,
  UserCogIcon: C9,
  UserIcon: j9,
  UserMinus: S9,
  UserMinus2: Re,
  UserMinus2Icon: Re,
  UserMinusIcon: S9,
  UserPlus: q9,
  UserPlus2: Te,
  UserPlus2Icon: Te,
  UserPlusIcon: q9,
  UserRound: Ue,
  UserRoundCheck: Be,
  UserRoundCheckIcon: Be,
  UserRoundCog: De,
  UserRoundCogIcon: De,
  UserRoundIcon: Ue,
  UserRoundMinus: Re,
  UserRoundMinusIcon: Re,
  UserRoundPlus: Te,
  UserRoundPlusIcon: Te,
  UserRoundSearch: A9,
  UserRoundSearchIcon: A9,
  UserRoundX: Oe,
  UserRoundXIcon: Oe,
  UserSearch: z9,
  UserSearchIcon: z9,
  UserSquare: Pe,
  UserSquare2: je,
  UserSquare2Icon: je,
  UserSquareIcon: Pe,
  UserX: H9,
  UserX2: Oe,
  UserX2Icon: Oe,
  UserXIcon: H9,
  Users: P9,
  Users2: Ee,
  Users2Icon: Ee,
  UsersIcon: P9,
  UsersRound: Ee,
  UsersRoundIcon: Ee,
  Utensils: F9,
  UtensilsCrossed: V9,
  UtensilsCrossedIcon: V9,
  UtensilsIcon: F9,
  UtilityPole: B9,
  UtilityPoleIcon: B9,
  Variable: D9,
  VariableIcon: D9,
  Vault: R9,
  VaultIcon: R9,
  Vegan: T9,
  VeganIcon: T9,
  VenetianMask: O9,
  VenetianMaskIcon: O9,
  Verified: U1,
  VerifiedIcon: U1,
  Vibrate: E9,
  VibrateIcon: E9,
  VibrateOff: U9,
  VibrateOffIcon: U9,
  Video: G9,
  VideoIcon: G9,
  VideoOff: Z9,
  VideoOffIcon: Z9,
  Videotape: N9,
  VideotapeIcon: N9,
  View: W9,
  ViewIcon: W9,
  Voicemail: _9,
  VoicemailIcon: _9,
  Volume: J9,
  Volume1: X9,
  Volume1Icon: X9,
  Volume2: $9,
  Volume2Icon: $9,
  VolumeIcon: J9,
  VolumeX: K9,
  VolumeXIcon: K9,
  Vote: Q9,
  VoteIcon: Q9,
  Wallet: tM,
  Wallet2: Y9,
  Wallet2Icon: Y9,
  WalletCards: eM,
  WalletCardsIcon: eM,
  WalletIcon: tM,
  Wallpaper: aM,
  WallpaperIcon: aM,
  Wand: oM,
  Wand2: cM,
  Wand2Icon: cM,
  WandIcon: oM,
  Warehouse: nM,
  WarehouseIcon: nM,
  WashingMachine: rM,
  WashingMachineIcon: rM,
  Watch: iM,
  WatchIcon: iM,
  Waves: dM,
  WavesIcon: dM,
  Waypoints: hM,
  WaypointsIcon: hM,
  Webcam: yM,
  WebcamIcon: yM,
  Webhook: lM,
  WebhookIcon: lM,
  Weight: pM,
  WeightIcon: pM,
  Wheat: sM,
  WheatIcon: sM,
  WheatOff: kM,
  WheatOffIcon: kM,
  WholeWord: uM,
  WholeWordIcon: uM,
  Wifi: vM,
  WifiIcon: vM,
  WifiOff: MM,
  WifiOffIcon: MM,
  Wind: mM,
  WindIcon: mM,
  Wine: gM,
  WineIcon: gM,
  WineOff: xM,
  WineOffIcon: xM,
  Workflow: fM,
  WorkflowIcon: fM,
  WrapText: LM,
  WrapTextIcon: LM,
  Wrench: wM,
  WrenchIcon: wM,
  X: SM,
  XCircle: bM,
  XCircleIcon: bM,
  XIcon: SM,
  XOctagon: IM,
  XOctagonIcon: IM,
  XSquare: CM,
  XSquareIcon: CM,
  Youtube: qM,
  YoutubeIcon: qM,
  Zap: zM,
  ZapIcon: zM,
  ZapOff: AM,
  ZapOffIcon: AM,
  ZoomIn: HM,
  ZoomInIcon: HM,
  ZoomOut: jM,
  ZoomOutIcon: jM,
  createLucideIcon: e,
  icons: Tm
}, Symbol.toStringTag, { value: "Module" })), yv = "-", Um = (t) => {
  const a = Zm(t), {
    conflictingClassGroups: c,
    conflictingClassGroupModifiers: o
  } = t;
  return {
    getClassGroupId: (h) => {
      const d = h.split(yv);
      return d[0] === "" && d.length !== 1 && d.shift(), Wv(d, a) || Em(h);
    },
    getConflictingClassGroupIds: (h, d) => {
      const y = c[h] || [];
      return d && o[h] ? [...y, ...o[h]] : y;
    }
  };
}, Wv = (t, a) => {
  var h;
  if (t.length === 0)
    return a.classGroupId;
  const c = t[0], o = a.nextPart.get(c), r = o ? Wv(t.slice(1), o) : void 0;
  if (r)
    return r;
  if (a.validators.length === 0)
    return;
  const i = t.join(yv);
  return (h = a.validators.find(({
    validator: d
  }) => d(i))) == null ? void 0 : h.classGroupId;
}, Fv = /^\[(.+)\]$/, Em = (t) => {
  if (Fv.test(t)) {
    const a = Fv.exec(t)[1], c = a == null ? void 0 : a.substring(0, a.indexOf(":"));
    if (c)
      return "arbitrary.." + c;
  }
}, Zm = (t) => {
  const {
    theme: a,
    prefix: c
  } = t, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Nm(Object.entries(t.classGroups), c).forEach(([i, h]) => {
    rv(h, o, i, a);
  }), o;
}, rv = (t, a, c, o) => {
  t.forEach((r) => {
    if (typeof r == "string") {
      const i = r === "" ? a : Bv(a, r);
      i.classGroupId = c;
      return;
    }
    if (typeof r == "function") {
      if (Gm(r)) {
        rv(r(o), a, c, o);
        return;
      }
      a.validators.push({
        validator: r,
        classGroupId: c
      });
      return;
    }
    Object.entries(r).forEach(([i, h]) => {
      rv(h, Bv(a, i), c, o);
    });
  });
}, Bv = (t, a) => {
  let c = t;
  return a.split(yv).forEach((o) => {
    c.nextPart.has(o) || c.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), c = c.nextPart.get(o);
  }), c;
}, Gm = (t) => t.isThemeGetter, Nm = (t, a) => a ? t.map(([c, o]) => {
  const r = o.map((i) => typeof i == "string" ? a + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([h, d]) => [a + h, d])) : i);
  return [c, r];
}) : t, Wm = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let a = 0, c = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const r = (i, h) => {
    c.set(i, h), a++, a > t && (a = 0, o = c, c = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let h = c.get(i);
      if (h !== void 0)
        return h;
      if ((h = o.get(i)) !== void 0)
        return r(i, h), h;
    },
    set(i, h) {
      c.has(i) ? c.set(i, h) : r(i, h);
    }
  };
}, _v = "!", _m = (t) => {
  const {
    separator: a,
    experimentalParseClassName: c
  } = t, o = a.length === 1, r = a[0], i = a.length, h = (d) => {
    const y = [];
    let k = 0, l = 0, M;
    for (let x = 0; x < d.length; x++) {
      let C = d[x];
      if (k === 0) {
        if (C === r && (o || d.slice(x, x + i) === a)) {
          y.push(d.slice(l, x)), l = x + i;
          continue;
        }
        if (C === "/") {
          M = x;
          continue;
        }
      }
      C === "[" ? k++ : C === "]" && k--;
    }
    const m = y.length === 0 ? d : d.substring(l), f = m.startsWith(_v), L = f ? m.substring(1) : m, s = M && M > l ? M - l : void 0;
    return {
      modifiers: y,
      hasImportantModifier: f,
      baseClassName: L,
      maybePostfixModifierPosition: s
    };
  };
  return c ? (d) => c({
    className: d,
    parseClassName: h
  }) : h;
}, Xm = (t) => {
  if (t.length <= 1)
    return t;
  const a = [];
  let c = [];
  return t.forEach((o) => {
    o[0] === "[" ? (a.push(...c.sort(), o), c = []) : c.push(o);
  }), a.push(...c.sort()), a;
}, $m = (t) => ({
  cache: Wm(t.cacheSize),
  parseClassName: _m(t),
  ...Um(t)
}), Km = /\s+/, Jm = (t, a) => {
  const {
    parseClassName: c,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = a, i = [], h = t.trim().split(Km);
  let d = "";
  for (let y = h.length - 1; y >= 0; y -= 1) {
    const k = h[y], {
      modifiers: l,
      hasImportantModifier: M,
      baseClassName: m,
      maybePostfixModifierPosition: f
    } = c(k);
    let L = !!f, s = o(L ? m.substring(0, f) : m);
    if (!s) {
      if (!L) {
        d = k + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (s = o(m), !s) {
        d = k + (d.length > 0 ? " " + d : d);
        continue;
      }
      L = !1;
    }
    const x = Xm(l).join(":"), C = M ? x + _v : x, u = C + s;
    if (i.includes(u))
      continue;
    i.push(u);
    const z = r(s, L);
    for (let V = 0; V < z.length; ++V) {
      const j = z[V];
      i.push(C + j);
    }
    d = k + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function Qm() {
  let t = 0, a, c, o = "";
  for (; t < arguments.length; )
    (a = arguments[t++]) && (c = Xv(a)) && (o && (o += " "), o += c);
  return o;
}
const Xv = (t) => {
  if (typeof t == "string")
    return t;
  let a, c = "";
  for (let o = 0; o < t.length; o++)
    t[o] && (a = Xv(t[o])) && (c && (c += " "), c += a);
  return c;
};
function Ym(t, ...a) {
  let c, o, r, i = h;
  function h(y) {
    const k = a.reduce((l, M) => M(l), t());
    return c = $m(k), o = c.cache.get, r = c.cache.set, i = d, d(y);
  }
  function d(y) {
    const k = o(y);
    if (k)
      return k;
    const l = Jm(y, c);
    return r(y, l), l;
  }
  return function() {
    return i(Qm.apply(null, arguments));
  };
}
const P = (t) => {
  const a = (c) => c[t] || [];
  return a.isThemeGetter = !0, a;
}, $v = /^\[(?:([a-z-]+):)?(.+)\]$/i, ex = /^\d+\/\d+$/, tx = /* @__PURE__ */ new Set(["px", "full", "screen"]), ax = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, cx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ox = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, nx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, rx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, M1 = (t) => Xe(t) || tx.has(t) || ex.test(t), g1 = (t) => $e(t, "length", sx), Xe = (t) => !!t && !Number.isNaN(Number(t)), JM = (t) => $e(t, "number", Xe), a2 = (t) => !!t && Number.isInteger(Number(t)), ix = (t) => t.endsWith("%") && Xe(t.slice(0, -1)), b = (t) => $v.test(t), f1 = (t) => ax.test(t), dx = /* @__PURE__ */ new Set(["length", "size", "percentage"]), hx = (t) => $e(t, dx, Kv), yx = (t) => $e(t, "position", Kv), lx = /* @__PURE__ */ new Set(["image", "url"]), px = (t) => $e(t, lx, Mx), kx = (t) => $e(t, "", ux), c2 = () => !0, $e = (t, a, c) => {
  const o = $v.exec(t);
  return o ? o[1] ? typeof a == "string" ? o[1] === a : a.has(o[1]) : c(o[2]) : !1;
}, sx = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  cx.test(t) && !ox.test(t)
), Kv = () => !1, ux = (t) => nx.test(t), Mx = (t) => rx.test(t), vx = () => {
  const t = P("colors"), a = P("spacing"), c = P("blur"), o = P("brightness"), r = P("borderColor"), i = P("borderRadius"), h = P("borderSpacing"), d = P("borderWidth"), y = P("contrast"), k = P("grayscale"), l = P("hueRotate"), M = P("invert"), m = P("gap"), f = P("gradientColorStops"), L = P("gradientColorStopPositions"), s = P("inset"), x = P("margin"), C = P("opacity"), u = P("padding"), z = P("saturate"), V = P("scale"), j = P("sepia"), E = P("skew"), Y = P("space"), S1 = P("translate"), e1 = () => ["auto", "contain", "none"], o1 = () => ["auto", "hidden", "clip", "visible", "scroll"], k1 = () => ["auto", b, a], q = () => [b, a], T = () => ["", M1, g1], N = () => ["auto", Xe, b], t1 = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], s1 = () => ["solid", "dashed", "dotted", "double", "none"], a1 = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], x1 = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], n1 = () => ["", "0", b], r1 = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Z = () => [Xe, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [c2],
      spacing: [M1, g1],
      blur: ["none", "", f1, b],
      brightness: Z(),
      borderColor: [t],
      borderRadius: ["none", "", "full", f1, b],
      borderSpacing: q(),
      borderWidth: T(),
      contrast: Z(),
      grayscale: n1(),
      hueRotate: Z(),
      invert: n1(),
      gap: q(),
      gradientColorStops: [t],
      gradientColorStopPositions: [ix, g1],
      inset: k1(),
      margin: k1(),
      opacity: Z(),
      padding: q(),
      saturate: Z(),
      scale: Z(),
      sepia: n1(),
      skew: Z(),
      space: q(),
      translate: q()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [f1]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": r1()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": r1()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...t1(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: o1()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": o1()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": o1()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: e1()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": e1()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": e1()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [s]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [s]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [s]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [s]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [s]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [s]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [s]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [s]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [s]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", a2, b]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: k1()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: n1()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: n1()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", a2, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [c2]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", a2, b]
        }, b]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [c2]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [a2, b]
        }, b]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [m]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [m]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [m]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...x1()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...x1(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...x1(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [u]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [u]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [u]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [u]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [u]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [u]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [u]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [u]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [u]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Y]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Y]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, a]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [b, a, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [b, a, "none", "full", "min", "max", "fit", "prose", {
          screen: [f1]
        }, f1]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [b, a, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [b, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [b, a, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [b, a, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", f1, g1]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", JM]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [c2]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Xe, JM]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M1, b]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [C]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...s1(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", M1, g1]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", M1, b]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: q()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", b]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [C]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...t1(), yx]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", hx]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, px]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [L]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [L]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [L]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [f]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [f]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [f]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [C]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...s1(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [d]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [C]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: s1()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...s1()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M1, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [M1, g1]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: T()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [C]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [M1, g1]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", f1, kx]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [c2]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...a1(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": a1()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [c]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", f1, b]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [k]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [l]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [M]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [j]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [c]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [k]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [l]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [M]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [j]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [h]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [h]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [h]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", b]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Z()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Z()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", b]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [V]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [V]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [V]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [a2, b]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [S1]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [S1]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", b]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": q()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": q()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": q()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": q()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": q()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": q()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": q()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": q()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": q()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": q()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": q()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": q()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": q()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": q()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": q()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": q()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": q()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": q()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", b]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [M1, g1, JM]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, C1 = /* @__PURE__ */ Ym(vx), { icons: mx } = Om;
function A1(t) {
  const { icon: a, className: c, ...o } = t, r = mx[t.icon];
  return /* @__PURE__ */ g.jsx(
    r,
    {
      ...o,
      className: C1(["stroke-[1] w-5 h-5", t.className])
    }
  );
}
var xx = Object.defineProperty, gx = (t, a, c) => a in t ? xx(t, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[a] = c, QM = (t, a, c) => (gx(t, typeof a != "symbol" ? a + "" : a, c), c);
let fx = class {
  constructor() {
    QM(this, "current", this.detect()), QM(this, "handoffState", "pending"), QM(this, "currentId", 0);
  }
  set(a) {
    this.current !== a && (this.handoffState = "pending", this.currentId = 0, this.current = a);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Ze = new fx(), Q = (t, a) => {
  Ze.isServer ? K(t, a) : Hm(t, a);
};
function I1(t) {
  let a = D(t);
  return Q(() => {
    a.current = t;
  }, [t]), a;
}
let F = function(t) {
  let a = I1(t);
  return U.useCallback((...c) => a.current(...c), [a]);
};
function Lx(t) {
  typeof queueMicrotask == "function" ? queueMicrotask(t) : Promise.resolve().then(t).catch((a) => setTimeout(() => {
    throw a;
  }));
}
function m1() {
  let t = [], a = { addEventListener(c, o, r, i) {
    return c.addEventListener(o, r, i), a.add(() => c.removeEventListener(o, r, i));
  }, requestAnimationFrame(...c) {
    let o = requestAnimationFrame(...c);
    return a.add(() => cancelAnimationFrame(o));
  }, nextFrame(...c) {
    return a.requestAnimationFrame(() => a.requestAnimationFrame(...c));
  }, setTimeout(...c) {
    let o = setTimeout(...c);
    return a.add(() => clearTimeout(o));
  }, microTask(...c) {
    let o = { current: !0 };
    return Lx(() => {
      o.current && c[0]();
    }), a.add(() => {
      o.current = !1;
    });
  }, style(c, o, r) {
    let i = c.style.getPropertyValue(o);
    return Object.assign(c.style, { [o]: r }), this.add(() => {
      Object.assign(c.style, { [o]: i });
    });
  }, group(c) {
    let o = m1();
    return c(o), this.add(() => o.dispose());
  }, add(c) {
    return t.push(c), () => {
      let o = t.indexOf(c);
      if (o >= 0) for (let r of t.splice(o, 1)) r();
    };
  }, dispose() {
    for (let c of t.splice(0)) c();
  } };
  return a;
}
function FM() {
  let [t] = l1(m1);
  return K(() => () => t.dispose(), [t]), t;
}
function wx() {
  let t = typeof document > "u";
  return "useSyncExternalStore" in o2 ? ((a) => a.useSyncExternalStore)(o2)(() => () => {
  }, () => !1, () => !t) : !1;
}
function lv() {
  let t = wx(), [a, c] = o2.useState(Ze.isHandoffComplete);
  return a && Ze.isHandoffComplete === !1 && c(!1), o2.useEffect(() => {
    a !== !0 && c(!0);
  }, [a]), o2.useEffect(() => Ze.handoff(), []), t ? !1 : a;
}
var Dv;
let pv = (Dv = U.useId) != null ? Dv : function() {
  let t = lv(), [a, c] = U.useState(t ? () => Ze.nextId() : null);
  return Q(() => {
    a === null && c(Ze.nextId());
  }, [a]), a != null ? "" + a : void 0;
};
function $(t, a, ...c) {
  if (t in a) {
    let r = a[t];
    return typeof r == "function" ? r(...c) : r;
  }
  let o = new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((r) => `"${r}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, $), o;
}
function BM(t) {
  return Ze.isServer ? null : t instanceof Node ? t.ownerDocument : t != null && t.hasOwnProperty("current") && t.current instanceof Node ? t.current.ownerDocument : document;
}
let iv = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((t) => `${t}:not([tabindex='-1'])`).join(",");
var dv = ((t) => (t[t.First = 1] = "First", t[t.Previous = 2] = "Previous", t[t.Next = 4] = "Next", t[t.Last = 8] = "Last", t[t.WrapAround = 16] = "WrapAround", t[t.NoScroll = 32] = "NoScroll", t))(dv || {}), bx = ((t) => (t[t.Error = 0] = "Error", t[t.Overflow = 1] = "Overflow", t[t.Success = 2] = "Success", t[t.Underflow = 3] = "Underflow", t))(bx || {}), Ix = ((t) => (t[t.Previous = -1] = "Previous", t[t.Next = 1] = "Next", t))(Ix || {});
function Jv(t = document.body) {
  return t == null ? [] : Array.from(t.querySelectorAll(iv)).sort((a, c) => Math.sign((a.tabIndex || Number.MAX_SAFE_INTEGER) - (c.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var kv = ((t) => (t[t.Strict = 0] = "Strict", t[t.Loose = 1] = "Loose", t))(kv || {});
function sv(t, a = 0) {
  var c;
  return t === ((c = BM(t)) == null ? void 0 : c.body) ? !1 : $(a, { 0() {
    return t.matches(iv);
  }, 1() {
    let o = t;
    for (; o !== null; ) {
      if (o.matches(iv)) return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Qv(t) {
  let a = BM(t);
  m1().nextFrame(() => {
    a && !sv(a.activeElement, 0) && Sx(t);
  });
}
var Cx = ((t) => (t[t.Keyboard = 0] = "Keyboard", t[t.Mouse = 1] = "Mouse", t))(Cx || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (t) => {
  t.metaKey || t.altKey || t.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (t) => {
  t.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : t.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Sx(t) {
  t == null || t.focus({ preventScroll: !0 });
}
let qx = ["textarea", "input"].join(",");
function Ax(t) {
  var a, c;
  return (c = (a = t == null ? void 0 : t.matches) == null ? void 0 : a.call(t, qx)) != null ? c : !1;
}
function Yv(t, a = (c) => c) {
  return t.slice().sort((c, o) => {
    let r = a(c), i = a(o);
    if (r === null || i === null) return 0;
    let h = r.compareDocumentPosition(i);
    return h & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : h & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function zx(t, a) {
  return Hx(Jv(), a, { relativeTo: t });
}
function Hx(t, a, { sorted: c = !0, relativeTo: o = null, skipElements: r = [] } = {}) {
  let i = Array.isArray(t) ? t.length > 0 ? t[0].ownerDocument : document : t.ownerDocument, h = Array.isArray(t) ? c ? Yv(t) : t : Jv(t);
  r.length > 0 && h.length > 1 && (h = h.filter((f) => !r.includes(f))), o = o ?? i.activeElement;
  let d = (() => {
    if (a & 5) return 1;
    if (a & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), y = (() => {
    if (a & 1) return 0;
    if (a & 2) return Math.max(0, h.indexOf(o)) - 1;
    if (a & 4) return Math.max(0, h.indexOf(o)) + 1;
    if (a & 8) return h.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), k = a & 32 ? { preventScroll: !0 } : {}, l = 0, M = h.length, m;
  do {
    if (l >= M || l + M <= 0) return 0;
    let f = y + l;
    if (a & 16) f = (f + M) % M;
    else {
      if (f < 0) return 3;
      if (f >= M) return 1;
    }
    m = h[f], m == null || m.focus(k), l += d;
  } while (m !== i.activeElement);
  return a & 6 && Ax(m) && m.select(), 2;
}
function jx() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Px() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Vx() {
  return jx() || Px();
}
function p2(t, a, c) {
  let o = I1(a);
  K(() => {
    function r(i) {
      o.current(i);
    }
    return document.addEventListener(t, r, c), () => document.removeEventListener(t, r, c);
  }, [t, c]);
}
function Fx(t, a, c) {
  let o = I1(a);
  K(() => {
    function r(i) {
      o.current(i);
    }
    return window.addEventListener(t, r, c), () => window.removeEventListener(t, r, c);
  }, [t, c]);
}
function Bx(t, a, c = !0) {
  let o = D(!1);
  K(() => {
    requestAnimationFrame(() => {
      o.current = c;
    });
  }, [c]);
  function r(h, d) {
    if (!o.current || h.defaultPrevented) return;
    let y = d(h);
    if (y === null || !y.getRootNode().contains(y) || !y.isConnected) return;
    let k = function l(M) {
      return typeof M == "function" ? l(M()) : Array.isArray(M) || M instanceof Set ? M : [M];
    }(t);
    for (let l of k) {
      if (l === null) continue;
      let M = l instanceof HTMLElement ? l : l.current;
      if (M != null && M.contains(y) || h.composed && h.composedPath().includes(M)) return;
    }
    return !sv(y, kv.Loose) && y.tabIndex !== -1 && h.preventDefault(), a(h, y);
  }
  let i = D(null);
  p2("pointerdown", (h) => {
    var d, y;
    o.current && (i.current = ((y = (d = h.composedPath) == null ? void 0 : d.call(h)) == null ? void 0 : y[0]) || h.target);
  }, !0), p2("mousedown", (h) => {
    var d, y;
    o.current && (i.current = ((y = (d = h.composedPath) == null ? void 0 : d.call(h)) == null ? void 0 : y[0]) || h.target);
  }, !0), p2("click", (h) => {
    Vx() || i.current && (r(h, () => i.current), i.current = null);
  }, !0), p2("touchend", (h) => r(h, () => h.target instanceof HTMLElement ? h.target : null), !0), Fx("blur", (h) => r(h, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
function Dx(...t) {
  return Ge(() => BM(...t), [...t]);
}
function Rv(t) {
  var a;
  if (t.type) return t.type;
  let c = (a = t.as) != null ? a : "button";
  if (typeof c == "string" && c.toLowerCase() === "button") return "button";
}
function Rx(t, a) {
  let [c, o] = l1(() => Rv(t));
  return Q(() => {
    o(Rv(t));
  }, [t.type, t.as]), Q(() => {
    c || a.current && a.current instanceof HTMLButtonElement && !a.current.hasAttribute("type") && o("button");
  }, [c, a]), c;
}
let Tx = Symbol();
function Ke(...t) {
  let a = D(t);
  K(() => {
    a.current = t;
  }, [t]);
  let c = F((o) => {
    for (let r of a.current) r != null && (typeof r == "function" ? r(o) : r.current = o);
  });
  return t.every((o) => o == null || (o == null ? void 0 : o[Tx])) ? void 0 : c;
}
function Tv(t) {
  return [t.screenX, t.screenY];
}
function Ox() {
  let t = D([-1, -1]);
  return { wasMoved(a) {
    let c = Tv(a);
    return t.current[0] === c[0] && t.current[1] === c[1] ? !1 : (t.current = c, !0);
  }, update(a) {
    t.current = Tv(a);
  } };
}
function Ux({ container: t, accept: a, walk: c, enabled: o = !0 }) {
  let r = D(a), i = D(c);
  K(() => {
    r.current = a, i.current = c;
  }, [a, c]), Q(() => {
    if (!t || !o) return;
    let h = BM(t);
    if (!h) return;
    let d = r.current, y = i.current, k = Object.assign((M) => d(M), { acceptNode: d }), l = h.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, k, !1);
    for (; l.nextNode(); ) y(l.currentNode);
  }, [t, o, r, i]);
}
function PM(...t) {
  return Array.from(new Set(t.flatMap((a) => typeof a == "string" ? a.split(" ") : []))).filter(Boolean).join(" ");
}
var VM = ((t) => (t[t.None = 0] = "None", t[t.RenderStrategy = 1] = "RenderStrategy", t[t.Static = 2] = "Static", t))(VM || {}), w1 = ((t) => (t[t.Unmount = 0] = "Unmount", t[t.Hidden = 1] = "Hidden", t))(w1 || {});
function Je({ ourProps: t, theirProps: a, slot: c, defaultTag: o, features: r, visible: i = !0, name: h, mergeRefs: d }) {
  d = d ?? Ex;
  let y = em(a, t);
  if (i) return k2(y, c, o, h, d);
  let k = r ?? 0;
  if (k & 2) {
    let { static: l = !1, ...M } = y;
    if (l) return k2(M, c, o, h, d);
  }
  if (k & 1) {
    let { unmount: l = !0, ...M } = y;
    return $(l ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return k2({ ...M, hidden: !0, style: { display: "none" } }, c, o, h, d);
    } });
  }
  return k2(y, c, o, h, d);
}
function k2(t, a = {}, c, o, r) {
  let { as: i = c, children: h, refName: d = "ref", ...y } = YM(t, ["unmount", "static"]), k = t.ref !== void 0 ? { [d]: t.ref } : {}, l = typeof h == "function" ? h(a) : h;
  "className" in y && y.className && typeof y.className == "function" && (y.className = y.className(a));
  let M = {};
  if (a) {
    let m = !1, f = [];
    for (let [L, s] of Object.entries(a)) typeof s == "boolean" && (m = !0), s === !0 && f.push(L);
    m && (M["data-headlessui-state"] = f.join(" "));
  }
  if (i === b1 && Object.keys(Ov(y)).length > 0) {
    if (!jm(l) || Array.isArray(l) && l.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(y).map((s) => `  - ${s}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((s) => `  - ${s}`).join(`
`)].join(`
`));
    let m = l.props, f = typeof (m == null ? void 0 : m.className) == "function" ? (...s) => PM(m == null ? void 0 : m.className(...s), y.className) : PM(m == null ? void 0 : m.className, y.className), L = f ? { className: f } : {};
    return Pm(l, Object.assign({}, em(l.props, Ov(YM(y, ["ref"]))), M, k, { ref: r(l.ref, k.ref) }, L));
  }
  return cv(i, Object.assign({}, YM(y, ["ref"]), i !== b1 && k, i !== b1 && M), l);
}
function Ex(...t) {
  return t.every((a) => a == null) ? void 0 : (a) => {
    for (let c of t) c != null && (typeof c == "function" ? c(a) : c.current = a);
  };
}
function em(...t) {
  if (t.length === 0) return {};
  if (t.length === 1) return t[0];
  let a = {}, c = {};
  for (let o of t) for (let r in o) r.startsWith("on") && typeof o[r] == "function" ? (c[r] != null || (c[r] = []), c[r].push(o[r])) : a[r] = o[r];
  if (a.disabled || a["aria-disabled"]) return Object.assign(a, Object.fromEntries(Object.keys(c).map((o) => [o, void 0])));
  for (let o in c) Object.assign(a, { [o](r, ...i) {
    let h = c[o];
    for (let d of h) {
      if ((r instanceof Event || (r == null ? void 0 : r.nativeEvent) instanceof Event) && r.defaultPrevented) return;
      d(r, ...i);
    }
  } });
  return a;
}
function Ne(t) {
  var a;
  return Object.assign(Gv(t), { displayName: (a = t.displayName) != null ? a : t.name });
}
function Ov(t) {
  let a = Object.assign({}, t);
  for (let c in a) a[c] === void 0 && delete a[c];
  return a;
}
function YM(t, a = []) {
  let c = Object.assign({}, t);
  for (let o of a) o in c && delete c[o];
  return c;
}
let uv = p1(null);
uv.displayName = "OpenClosedContext";
var X = ((t) => (t[t.Open = 1] = "Open", t[t.Closed = 2] = "Closed", t[t.Closing = 4] = "Closing", t[t.Opening = 8] = "Opening", t))(X || {});
function Mv() {
  return n2(uv);
}
function tm({ value: t, children: a }) {
  return U.createElement(uv.Provider, { value: t }, a);
}
function Zx(t) {
  let a = t.parentElement, c = null;
  for (; a && !(a instanceof HTMLFieldSetElement); ) a instanceof HTMLLegendElement && (c = a), a = a.parentElement;
  let o = (a == null ? void 0 : a.getAttribute("disabled")) === "";
  return o && Gx(c) ? !1 : o;
}
function Gx(t) {
  if (!t) return !1;
  let a = t.previousElementSibling;
  for (; a !== null; ) {
    if (a instanceof HTMLLegendElement) return !1;
    a = a.previousElementSibling;
  }
  return !0;
}
function Nx(t) {
  throw new Error("Unexpected object: " + t);
}
var c1 = ((t) => (t[t.First = 0] = "First", t[t.Previous = 1] = "Previous", t[t.Next = 2] = "Next", t[t.Last = 3] = "Last", t[t.Specific = 4] = "Specific", t[t.Nothing = 5] = "Nothing", t))(c1 || {});
function Wx(t, a) {
  let c = a.resolveItems();
  if (c.length <= 0) return null;
  let o = a.resolveActiveIndex(), r = o ?? -1;
  switch (t.focus) {
    case 0: {
      for (let i = 0; i < c.length; ++i) if (!a.resolveDisabled(c[i], i, c)) return i;
      return o;
    }
    case 1: {
      for (let i = r - 1; i >= 0; --i) if (!a.resolveDisabled(c[i], i, c)) return i;
      return o;
    }
    case 2: {
      for (let i = r + 1; i < c.length; ++i) if (!a.resolveDisabled(c[i], i, c)) return i;
      return o;
    }
    case 3: {
      for (let i = c.length - 1; i >= 0; --i) if (!a.resolveDisabled(c[i], i, c)) return i;
      return o;
    }
    case 4: {
      for (let i = 0; i < c.length; ++i) if (a.resolveId(c[i], i, c) === t.id) return i;
      return o;
    }
    case 5:
      return null;
    default:
      Nx(t);
  }
}
var O = ((t) => (t.Space = " ", t.Enter = "Enter", t.Escape = "Escape", t.Backspace = "Backspace", t.Delete = "Delete", t.ArrowLeft = "ArrowLeft", t.ArrowUp = "ArrowUp", t.ArrowRight = "ArrowRight", t.ArrowDown = "ArrowDown", t.Home = "Home", t.End = "End", t.PageUp = "PageUp", t.PageDown = "PageDown", t.Tab = "Tab", t))(O || {});
function vv() {
  let t = D(!1);
  return Q(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t;
}
let Uv = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ev(t) {
  var a, c;
  let o = (a = t.innerText) != null ? a : "", r = t.cloneNode(!0);
  if (!(r instanceof HTMLElement)) return o;
  let i = !1;
  for (let d of r.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) d.remove(), i = !0;
  let h = i ? (c = r.innerText) != null ? c : "" : o;
  return Uv.test(h) && (h = h.replace(Uv, "")), h;
}
function _x(t) {
  let a = t.getAttribute("aria-label");
  if (typeof a == "string") return a.trim();
  let c = t.getAttribute("aria-labelledby");
  if (c) {
    let o = c.split(" ").map((r) => {
      let i = document.getElementById(r);
      if (i) {
        let h = i.getAttribute("aria-label");
        return typeof h == "string" ? h.trim() : Ev(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (o.length > 0) return o.join(", ");
  }
  return Ev(t).trim();
}
function Xx(t) {
  let a = D(""), c = D("");
  return F(() => {
    let o = t.current;
    if (!o) return "";
    let r = o.innerText;
    if (a.current === r) return c.current;
    let i = _x(o).trim().toLowerCase();
    return a.current = r, c.current = i, i;
  });
}
var $x = ((t) => (t[t.Open = 0] = "Open", t[t.Closed = 1] = "Closed", t))($x || {}), Kx = ((t) => (t[t.Pointer = 0] = "Pointer", t[t.Other = 1] = "Other", t))(Kx || {}), Jx = ((t) => (t[t.OpenMenu = 0] = "OpenMenu", t[t.CloseMenu = 1] = "CloseMenu", t[t.GoToItem = 2] = "GoToItem", t[t.Search = 3] = "Search", t[t.ClearSearch = 4] = "ClearSearch", t[t.RegisterItem = 5] = "RegisterItem", t[t.UnregisterItem = 6] = "UnregisterItem", t))(Jx || {});
function ev(t, a = (c) => c) {
  let c = t.activeItemIndex !== null ? t.items[t.activeItemIndex] : null, o = Yv(a(t.items.slice()), (i) => i.dataRef.current.domRef.current), r = c ? o.indexOf(c) : null;
  return r === -1 && (r = null), { items: o, activeItemIndex: r };
}
let Qx = { 1(t) {
  return t.menuState === 1 ? t : { ...t, activeItemIndex: null, menuState: 1 };
}, 0(t) {
  return t.menuState === 0 ? t : { ...t, __demoMode: !1, menuState: 0 };
}, 2: (t, a) => {
  var c;
  let o = ev(t), r = Wx(a, { resolveItems: () => o.items, resolveActiveIndex: () => o.activeItemIndex, resolveId: (i) => i.id, resolveDisabled: (i) => i.dataRef.current.disabled });
  return { ...t, ...o, searchQuery: "", activeItemIndex: r, activationTrigger: (c = a.trigger) != null ? c : 1 };
}, 3: (t, a) => {
  let c = t.searchQuery !== "" ? 0 : 1, o = t.searchQuery + a.value.toLowerCase(), r = (t.activeItemIndex !== null ? t.items.slice(t.activeItemIndex + c).concat(t.items.slice(0, t.activeItemIndex + c)) : t.items).find((h) => {
    var d;
    return ((d = h.dataRef.current.textValue) == null ? void 0 : d.startsWith(o)) && !h.dataRef.current.disabled;
  }), i = r ? t.items.indexOf(r) : -1;
  return i === -1 || i === t.activeItemIndex ? { ...t, searchQuery: o } : { ...t, searchQuery: o, activeItemIndex: i, activationTrigger: 1 };
}, 4(t) {
  return t.searchQuery === "" ? t : { ...t, searchQuery: "", searchActiveItemIndex: null };
}, 5: (t, a) => {
  let c = ev(t, (o) => [...o, { id: a.id, dataRef: a.dataRef }]);
  return { ...t, ...c };
}, 6: (t, a) => {
  let c = ev(t, (o) => {
    let r = o.findIndex((i) => i.id === a.id);
    return r !== -1 && o.splice(r, 1), o;
  });
  return { ...t, ...c, activationTrigger: 1 };
} }, mv = p1(null);
mv.displayName = "MenuContext";
function DM(t) {
  let a = n2(mv);
  if (a === null) {
    let c = new Error(`<${t} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(c, DM), c;
  }
  return a;
}
function Yx(t, a) {
  return $(a.type, Qx, t, a);
}
let eg = b1;
function tg(t, a) {
  let { __demoMode: c = !1, ...o } = t, r = Vm(Yx, { __demoMode: c, menuState: c ? 0 : 1, buttonRef: ov(), itemsRef: ov(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: i, itemsRef: h, buttonRef: d }, y] = r, k = Ke(a);
  Bx([d, h], (f, L) => {
    var s;
    y({ type: 1 }), sv(L, kv.Loose) || (f.preventDefault(), (s = d.current) == null || s.focus());
  }, i === 0);
  let l = F(() => {
    y({ type: 1 });
  }), M = Ge(() => ({ open: i === 0, close: l }), [i, l]), m = { ref: k };
  return U.createElement(mv.Provider, { value: r }, U.createElement(tm, { value: $(i, { 0: X.Open, 1: X.Closed }) }, Je({ ourProps: m, theirProps: o, slot: M, defaultTag: eg, name: "Menu" })));
}
let ag = "button";
function cg(t, a) {
  var c;
  let o = pv(), { id: r = `headlessui-menu-button-${o}`, ...i } = t, [h, d] = DM("Menu.Button"), y = Ke(h.buttonRef, a), k = FM(), l = F((s) => {
    switch (s.key) {
      case O.Space:
      case O.Enter:
      case O.ArrowDown:
        s.preventDefault(), s.stopPropagation(), d({ type: 0 }), k.nextFrame(() => d({ type: 2, focus: c1.First }));
        break;
      case O.ArrowUp:
        s.preventDefault(), s.stopPropagation(), d({ type: 0 }), k.nextFrame(() => d({ type: 2, focus: c1.Last }));
        break;
    }
  }), M = F((s) => {
    switch (s.key) {
      case O.Space:
        s.preventDefault();
        break;
    }
  }), m = F((s) => {
    if (Zx(s.currentTarget)) return s.preventDefault();
    t.disabled || (h.menuState === 0 ? (d({ type: 1 }), k.nextFrame(() => {
      var x;
      return (x = h.buttonRef.current) == null ? void 0 : x.focus({ preventScroll: !0 });
    })) : (s.preventDefault(), d({ type: 0 })));
  }), f = Ge(() => ({ open: h.menuState === 0 }), [h]), L = { ref: y, id: r, type: Rx(t, h.buttonRef), "aria-haspopup": "menu", "aria-controls": (c = h.itemsRef.current) == null ? void 0 : c.id, "aria-expanded": h.menuState === 0, onKeyDown: l, onKeyUp: M, onClick: m };
  return Je({ ourProps: L, theirProps: i, slot: f, defaultTag: ag, name: "Menu.Button" });
}
let og = "div", ng = VM.RenderStrategy | VM.Static;
function rg(t, a) {
  var c, o;
  let r = pv(), { id: i = `headlessui-menu-items-${r}`, ...h } = t, [d, y] = DM("Menu.Items"), k = Ke(d.itemsRef, a), l = Dx(d.itemsRef), M = FM(), m = Mv(), f = m !== null ? (m & X.Open) === X.Open : d.menuState === 0;
  K(() => {
    let u = d.itemsRef.current;
    u && d.menuState === 0 && u !== (l == null ? void 0 : l.activeElement) && u.focus({ preventScroll: !0 });
  }, [d.menuState, d.itemsRef, l]), Ux({ container: d.itemsRef.current, enabled: d.menuState === 0, accept(u) {
    return u.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } });
  let L = F((u) => {
    var z, V;
    switch (M.dispose(), u.key) {
      case O.Space:
        if (d.searchQuery !== "") return u.preventDefault(), u.stopPropagation(), y({ type: 3, value: u.key });
      case O.Enter:
        if (u.preventDefault(), u.stopPropagation(), y({ type: 1 }), d.activeItemIndex !== null) {
          let { dataRef: j } = d.items[d.activeItemIndex];
          (V = (z = j.current) == null ? void 0 : z.domRef.current) == null || V.click();
        }
        Qv(d.buttonRef.current);
        break;
      case O.ArrowDown:
        return u.preventDefault(), u.stopPropagation(), y({ type: 2, focus: c1.Next });
      case O.ArrowUp:
        return u.preventDefault(), u.stopPropagation(), y({ type: 2, focus: c1.Previous });
      case O.Home:
      case O.PageUp:
        return u.preventDefault(), u.stopPropagation(), y({ type: 2, focus: c1.First });
      case O.End:
      case O.PageDown:
        return u.preventDefault(), u.stopPropagation(), y({ type: 2, focus: c1.Last });
      case O.Escape:
        u.preventDefault(), u.stopPropagation(), y({ type: 1 }), m1().nextFrame(() => {
          var j;
          return (j = d.buttonRef.current) == null ? void 0 : j.focus({ preventScroll: !0 });
        });
        break;
      case O.Tab:
        u.preventDefault(), u.stopPropagation(), y({ type: 1 }), m1().nextFrame(() => {
          zx(d.buttonRef.current, u.shiftKey ? dv.Previous : dv.Next);
        });
        break;
      default:
        u.key.length === 1 && (y({ type: 3, value: u.key }), M.setTimeout(() => y({ type: 4 }), 350));
        break;
    }
  }), s = F((u) => {
    switch (u.key) {
      case O.Space:
        u.preventDefault();
        break;
    }
  }), x = Ge(() => ({ open: d.menuState === 0 }), [d]), C = { "aria-activedescendant": d.activeItemIndex === null || (c = d.items[d.activeItemIndex]) == null ? void 0 : c.id, "aria-labelledby": (o = d.buttonRef.current) == null ? void 0 : o.id, id: i, onKeyDown: L, onKeyUp: s, role: "menu", tabIndex: 0, ref: k };
  return Je({ ourProps: C, theirProps: h, slot: x, defaultTag: og, features: ng, visible: f, name: "Menu.Items" });
}
let ig = b1;
function dg(t, a) {
  let c = pv(), { id: o = `headlessui-menu-item-${c}`, disabled: r = !1, ...i } = t, [h, d] = DM("Menu.Item"), y = h.activeItemIndex !== null ? h.items[h.activeItemIndex].id === o : !1, k = D(null), l = Ke(a, k);
  Q(() => {
    if (h.__demoMode || h.menuState !== 0 || !y || h.activationTrigger === 0) return;
    let j = m1();
    return j.requestAnimationFrame(() => {
      var E, Y;
      (Y = (E = k.current) == null ? void 0 : E.scrollIntoView) == null || Y.call(E, { block: "nearest" });
    }), j.dispose;
  }, [h.__demoMode, k, y, h.menuState, h.activationTrigger, h.activeItemIndex]);
  let M = Xx(k), m = D({ disabled: r, domRef: k, get textValue() {
    return M();
  } });
  Q(() => {
    m.current.disabled = r;
  }, [m, r]), Q(() => (d({ type: 5, id: o, dataRef: m }), () => d({ type: 6, id: o })), [m, o]);
  let f = F(() => {
    d({ type: 1 });
  }), L = F((j) => {
    if (r) return j.preventDefault();
    d({ type: 1 }), Qv(h.buttonRef.current);
  }), s = F(() => {
    if (r) return d({ type: 2, focus: c1.Nothing });
    d({ type: 2, focus: c1.Specific, id: o });
  }), x = Ox(), C = F((j) => x.update(j)), u = F((j) => {
    x.wasMoved(j) && (r || y || d({ type: 2, focus: c1.Specific, id: o, trigger: 0 }));
  }), z = F((j) => {
    x.wasMoved(j) && (r || y && d({ type: 2, focus: c1.Nothing }));
  }), V = Ge(() => ({ active: y, disabled: r, close: f }), [y, r, f]);
  return Je({ ourProps: { id: o, ref: l, role: "menuitem", tabIndex: r === !0 ? void 0 : -1, "aria-disabled": r === !0 ? !0 : void 0, disabled: void 0, onClick: L, onFocus: s, onPointerEnter: C, onMouseEnter: C, onPointerMove: u, onMouseMove: u, onPointerLeave: z, onMouseLeave: z }, theirProps: i, slot: V, defaultTag: ig, name: "Menu.Item" });
}
let hg = Ne(tg), yg = Ne(cg), lg = Ne(rg), pg = Ne(dg), RM = Object.assign(hg, { Button: yg, Items: lg, Item: pg });
function kg(t = 0) {
  let [a, c] = l1(t), o = vv(), r = l2((y) => {
    o.current && c((k) => k | y);
  }, [a, o]), i = l2((y) => !!(a & y), [a]), h = l2((y) => {
    o.current && c((k) => k & ~y);
  }, [c, o]), d = l2((y) => {
    o.current && c((k) => k ^ y);
  }, [c]);
  return { flags: a, addFlag: r, hasFlag: i, removeFlag: h, toggleFlag: d };
}
function sg(t) {
  let a = { called: !1 };
  return (...c) => {
    if (!a.called) return a.called = !0, t(...c);
  };
}
function tv(t, ...a) {
  t && a.length > 0 && t.classList.add(...a);
}
function av(t, ...a) {
  t && a.length > 0 && t.classList.remove(...a);
}
function ug(t, a) {
  let c = m1();
  if (!t) return c.dispose;
  let { transitionDuration: o, transitionDelay: r } = getComputedStyle(t), [i, h] = [o, r].map((y) => {
    let [k = 0] = y.split(",").filter(Boolean).map((l) => l.includes("ms") ? parseFloat(l) : parseFloat(l) * 1e3).sort((l, M) => M - l);
    return k;
  }), d = i + h;
  if (d !== 0) {
    c.group((k) => {
      k.setTimeout(() => {
        a(), k.dispose();
      }, d), k.addEventListener(t, "transitionrun", (l) => {
        l.target === l.currentTarget && k.dispose();
      });
    });
    let y = c.addEventListener(t, "transitionend", (k) => {
      k.target === k.currentTarget && (a(), y());
    });
  } else a();
  return c.add(() => a()), c.dispose;
}
function Mg(t, a, c, o) {
  let r = c ? "enter" : "leave", i = m1(), h = o !== void 0 ? sg(o) : () => {
  };
  r === "enter" && (t.removeAttribute("hidden"), t.style.display = "");
  let d = $(r, { enter: () => a.enter, leave: () => a.leave }), y = $(r, { enter: () => a.enterTo, leave: () => a.leaveTo }), k = $(r, { enter: () => a.enterFrom, leave: () => a.leaveFrom });
  return av(t, ...a.base, ...a.enter, ...a.enterTo, ...a.enterFrom, ...a.leave, ...a.leaveFrom, ...a.leaveTo, ...a.entered), tv(t, ...a.base, ...d, ...k), i.nextFrame(() => {
    av(t, ...a.base, ...d, ...k), tv(t, ...a.base, ...d, ...y), ug(t, () => (av(t, ...a.base, ...d), tv(t, ...a.base, ...a.entered), h()));
  }), i.dispose;
}
function vg({ immediate: t, container: a, direction: c, classes: o, onStart: r, onStop: i }) {
  let h = vv(), d = FM(), y = I1(c);
  Q(() => {
    t && (y.current = "enter");
  }, [t]), Q(() => {
    let k = m1();
    d.add(k.dispose);
    let l = a.current;
    if (l && y.current !== "idle" && h.current) return k.dispose(), r.current(y.current), k.add(Mg(l, o.current, y.current === "enter", () => {
      k.dispose(), i.current(y.current);
    })), k.dispose;
  }, [c]);
}
function L1(t = "") {
  return t.split(/\s+/).filter((a) => a.length > 1);
}
let TM = p1(null);
TM.displayName = "TransitionContext";
var mg = ((t) => (t.Visible = "visible", t.Hidden = "hidden", t))(mg || {});
function xg() {
  let t = n2(TM);
  if (t === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
function gg() {
  let t = n2(OM);
  if (t === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t;
}
let OM = p1(null);
OM.displayName = "NestingContext";
function UM(t) {
  return "children" in t ? UM(t.children) : t.current.filter(({ el: a }) => a.current !== null).filter(({ state: a }) => a === "visible").length > 0;
}
function am(t, a) {
  let c = I1(t), o = D([]), r = vv(), i = FM(), h = F((f, L = w1.Hidden) => {
    let s = o.current.findIndex(({ el: x }) => x === f);
    s !== -1 && ($(L, { [w1.Unmount]() {
      o.current.splice(s, 1);
    }, [w1.Hidden]() {
      o.current[s].state = "hidden";
    } }), i.microTask(() => {
      var x;
      !UM(o) && r.current && ((x = c.current) == null || x.call(c));
    }));
  }), d = F((f) => {
    let L = o.current.find(({ el: s }) => s === f);
    return L ? L.state !== "visible" && (L.state = "visible") : o.current.push({ el: f, state: "visible" }), () => h(f, w1.Unmount);
  }), y = D([]), k = D(Promise.resolve()), l = D({ enter: [], leave: [], idle: [] }), M = F((f, L, s) => {
    y.current.splice(0), a && (a.chains.current[L] = a.chains.current[L].filter(([x]) => x !== f)), a == null || a.chains.current[L].push([f, new Promise((x) => {
      y.current.push(x);
    })]), a == null || a.chains.current[L].push([f, new Promise((x) => {
      Promise.all(l.current[L].map(([C, u]) => u)).then(() => x());
    })]), L === "enter" ? k.current = k.current.then(() => a == null ? void 0 : a.wait.current).then(() => s(L)) : s(L);
  }), m = F((f, L, s) => {
    Promise.all(l.current[L].splice(0).map(([x, C]) => C)).then(() => {
      var x;
      (x = y.current.shift()) == null || x();
    }).then(() => s(L));
  });
  return Ge(() => ({ children: o, register: d, unregister: h, onStart: M, onStop: m, wait: k, chains: l }), [d, h, o, M, m, l, k]);
}
function fg() {
}
let Lg = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Zv(t) {
  var a;
  let c = {};
  for (let o of Lg) c[o] = (a = t[o]) != null ? a : fg;
  return c;
}
function wg(t) {
  let a = D(Zv(t));
  return K(() => {
    a.current = Zv(t);
  }, [t]), a;
}
let bg = "div", cm = VM.RenderStrategy;
function Ig(t, a) {
  var c, o;
  let { beforeEnter: r, afterEnter: i, beforeLeave: h, afterLeave: d, enter: y, enterFrom: k, enterTo: l, entered: M, leave: m, leaveFrom: f, leaveTo: L, ...s } = t, x = D(null), C = Ke(x, a), u = (c = s.unmount) == null || c ? w1.Unmount : w1.Hidden, { show: z, appear: V, initial: j } = xg(), [E, Y] = l1(z ? "visible" : "hidden"), S1 = gg(), { register: e1, unregister: o1 } = S1;
  K(() => e1(x), [e1, x]), K(() => {
    if (u === w1.Hidden && x.current) {
      if (z && E !== "visible") {
        Y("visible");
        return;
      }
      return $(E, { hidden: () => o1(x), visible: () => e1(x) });
    }
  }, [E, x, e1, o1, z, u]);
  let k1 = I1({ base: L1(s.className), enter: L1(y), enterFrom: L1(k), enterTo: L1(l), entered: L1(M), leave: L1(m), leaveFrom: L1(f), leaveTo: L1(L) }), q = wg({ beforeEnter: r, afterEnter: i, beforeLeave: h, afterLeave: d }), T = lv();
  K(() => {
    if (T && E === "visible" && x.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, E, T]);
  let N = j && !V, t1 = V && z && j, s1 = !T || N ? "idle" : z ? "enter" : "leave", a1 = kg(0), x1 = F((i1) => $(i1, { enter: () => {
    a1.addFlag(X.Opening), q.current.beforeEnter();
  }, leave: () => {
    a1.addFlag(X.Closing), q.current.beforeLeave();
  }, idle: () => {
  } })), n1 = F((i1) => $(i1, { enter: () => {
    a1.removeFlag(X.Opening), q.current.afterEnter();
  }, leave: () => {
    a1.removeFlag(X.Closing), q.current.afterLeave();
  }, idle: () => {
  } })), r1 = am(() => {
    Y("hidden"), o1(x);
  }, S1), Z = D(!1);
  vg({ immediate: t1, container: x, classes: k1, direction: s1, onStart: I1((i1) => {
    Z.current = !0, r1.onStart(x, i1, x1);
  }), onStop: I1((i1) => {
    Z.current = !1, r1.onStop(x, i1, n1), i1 === "leave" && !UM(r1) && (Y("hidden"), o1(x));
  }) });
  let u1 = s, r2 = { ref: C };
  return t1 ? u1 = { ...u1, className: PM(s.className, ...k1.current.enter, ...k1.current.enterFrom) } : Z.current && (u1.className = PM(s.className, (o = x.current) == null ? void 0 : o.className), u1.className === "" && delete u1.className), U.createElement(OM.Provider, { value: r1 }, U.createElement(tm, { value: $(E, { visible: X.Open, hidden: X.Closed }) | a1.flags }, Je({ ourProps: r2, theirProps: u1, defaultTag: bg, features: cm, visible: E === "visible", name: "Transition.Child" })));
}
function Cg(t, a) {
  let { show: c, appear: o = !1, unmount: r = !0, ...i } = t, h = D(null), d = Ke(h, a);
  lv();
  let y = Mv();
  if (c === void 0 && y !== null && (c = (y & X.Open) === X.Open), ![!0, !1].includes(c)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [k, l] = l1(c ? "visible" : "hidden"), M = am(() => {
    l("hidden");
  }), [m, f] = l1(!0), L = D([c]);
  Q(() => {
    m !== !1 && L.current[L.current.length - 1] !== c && (L.current.push(c), f(!1));
  }, [L, c]);
  let s = Ge(() => ({ show: c, appear: o, initial: m }), [c, o, m]);
  K(() => {
    if (c) l("visible");
    else if (!UM(M)) l("hidden");
    else {
      let z = h.current;
      if (!z) return;
      let V = z.getBoundingClientRect();
      V.x === 0 && V.y === 0 && V.width === 0 && V.height === 0 && l("hidden");
    }
  }, [c, M]);
  let x = { unmount: r }, C = F(() => {
    var z;
    m && f(!1), (z = t.beforeEnter) == null || z.call(t);
  }), u = F(() => {
    var z;
    m && f(!1), (z = t.beforeLeave) == null || z.call(t);
  });
  return U.createElement(OM.Provider, { value: M }, U.createElement(TM.Provider, { value: s }, Je({ ourProps: { ...x, as: b1, children: U.createElement(om, { ref: d, ...x, ...i, beforeEnter: C, beforeLeave: u }) }, theirProps: {}, defaultTag: b1, features: cm, visible: k === "visible", name: "Transition" })));
}
function Sg(t, a) {
  let c = n2(TM) !== null, o = Mv() !== null;
  return U.createElement(U.Fragment, null, !c && o ? U.createElement(hv, { ref: a, ...t }) : U.createElement(om, { ref: a, ...t }));
}
let hv = Ne(Cg), om = Ne(Ig), qg = Ne(Sg), Ag = Object.assign(hv, { Child: qg, Root: hv });
function _({ children: t, className: a, ...c }) {
  return /* @__PURE__ */ g.jsx(RM, { as: "div", className: C1(["relative", a]), ...c, children: t });
}
_.Button = ({
  as: t,
  children: a,
  className: c,
  onClick: o,
  ...r
}) => /* @__PURE__ */ g.jsx(
  RM.Button,
  {
    as: t,
    className: C1(["cursor-pointer", c]),
    onClick: (i) => {
      i.stopPropagation(), r.onClick && r.onClick(i);
    },
    ...r,
    children: a
  }
);
_.Items = ({
  children: t,
  className: a,
  placement: c = "bottom-end",
  ...o
}) => /* @__PURE__ */ g.jsx(
  Ag,
  {
    as: b1,
    enter: "transition-all ease-linear duration-150",
    enterFrom: "mt-5 invisible opacity-0 translate-y-1",
    enterTo: "mt-1 visible opacity-100 translate-y-0",
    leave: "transition-all ease-linear duration-150",
    leaveFrom: "mt-1 visible opacity-100 translate-y-0",
    leaveTo: "mt-5 invisible opacity-0 translate-y-1",
    children: /* @__PURE__ */ g.jsx(
      "div",
      {
        className: v1([
          "absolute z-30",
          c == "top-start" && "left-0 bottom-[100%]",
          c == "top" && "left-[50%] translate-x-[-50%] bottom-[100%]",
          c == "top-end" && "right-0 bottom-[100%]",
          c == "right-start" && "left-[100%] translate-y-[-50%]",
          c == "right" && "left-[100%] top-[50%] translate-y-[-50%]",
          c == "right-end" && "left-[100%] bottom-0",
          c == "bottom-end" && "top-[100%] right-0",
          c == "bottom" && "top-[100%] left-[50%] translate-x-[-50%]",
          c == "bottom-start" && "top-[100%] left-0",
          c == "left-start" && "right-[100%] translate-y-[-50%]",
          c == "left" && "right-[100%] top-[50%] translate-y-[-50%]",
          c == "left-end" && "right-[100%] bottom-0"
        ]),
        children: /* @__PURE__ */ g.jsx(
          RM.Items,
          {
            as: "div",
            className: C1([
              "p-2 shadow-[0px_3px_10px_#00000017] bg-white border border-slate-200 rounded-lg dark:bg-darkmode-600",
              a
            ]),
            ...o,
            children: t
          }
        )
      }
    )
  }
);
_.Item = ({ children: t, className: a, ...c }) => /* @__PURE__ */ g.jsx(
  RM.Item,
  {
    as: "a",
    className: C1([
      "cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-lg hover:bg-slate-100 dark:bg-darkmode-600 dark:hover:bg-darkmode-400",
      a
    ]),
    ...c,
    children: t
  }
);
_.Divider = (t) => /* @__PURE__ */ g.jsx(
  "div",
  {
    className: C1(["h-px my-2 -mx-2 bg-slate-200/60 dark:bg-darkmode-400", t.className])
  }
);
_.Header = (t) => /* @__PURE__ */ g.jsx("div", { className: C1(["p-2 font-medium", t.className]), children: t.children });
_.Footer = (t) => /* @__PURE__ */ g.jsx("div", { className: C1(["flex p-1", t.className]), children: t.children });
p1({
  selected: !1,
  disabled: !1
});
p1({
  variant: "tabs"
});
p1({
  open: !1,
  zoom: !1,
  size: "md"
});
p1({
  open: !1,
  close: () => {
  },
  key: 0
});
p1({
  selectedIndex: null,
  setSelectedIndex: () => {
  },
  variant: "default"
});
p1({
  open: !1,
  zoom: !1,
  size: "md"
});
function Pg({ notifications: t, Outlet: a, NotificationsPanel: c }) {
  const [o, r] = l1(!1), [i, h] = l1(!1), [d, y] = l1(!1), [k, l] = l1(!1), M = ov(), m = !1, f = (s) => {
    localStorage.setItem("compactMenu", s.toString());
  };
  window.onscroll = () => {
    document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ? r(!0) : r(!1);
  };
  const L = (s) => {
    s.preventDefault(), f(!m);
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: v1([
        "echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen",
        "before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed",
        "after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat",
        o && "background--hidden"
      ]),
      children: [
        /* @__PURE__ */ g.jsxs(
          "div",
          {
            className: v1([
              "xl:ml-0 shadow-xl transition-[margin,padding] duration-300 xl:shadow-none fixed top-0 left-0 z-50 side-menu group inset-y-0 xl:py-3.5 xl:pl-3.5",
              "after:content-[''] after:fixed after:inset-0 after:bg-black/80 after:xl:hidden",
              { "side-menu--collapsed": m },
              { "side-menu--on-hover": i },
              { "ml-0 after:block": d },
              { "-ml-[275px] after:hidden": !d }
            ]),
            children: [
              /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: v1([
                    "fixed ml-[275px] w-10 h-10 items-center justify-center xl:hidden z-50",
                    { flex: d },
                    { hidden: !d }
                  ]),
                  children: /* @__PURE__ */ g.jsx(
                    "a",
                    {
                      href: "",
                      onClick: (s) => {
                        s.preventDefault(), y(!1);
                      },
                      className: "mt-5 ml-5",
                      children: /* @__PURE__ */ g.jsx(A1, { icon: "X", className: "w-8 h-8 text-white" })
                    }
                  )
                }
              ),
              /* @__PURE__ */ g.jsxs(
                "div",
                {
                  className: v1([
                    "h-full box bg-white/[0.95] rounded-none xl:rounded-xl z-20 relative w-[275px] duration-300 transition-[width] group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:shadow-[6px_0_12px_-4px_#0000000f] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px] overflow-hidden flex flex-col"
                  ]),
                  onMouseOver: (s) => {
                    s.preventDefault(), h(!0);
                  },
                  onMouseLeave: (s) => {
                    s.preventDefault(), h(!1);
                  },
                  children: [
                    /* @__PURE__ */ g.jsxs(
                      "div",
                      {
                        className: v1([
                          "flex-none hidden xl:flex items-center z-10 px-5 h-[65px] w-[275px] overflow-hidden relative duration-300 group-[.side-menu--collapsed]:xl:w-[91px] group-[.side-menu--collapsed.side-menu--on-hover]:xl:w-[275px]"
                        ]),
                        children: [
                          /* @__PURE__ */ g.jsxs(
                            "a",
                            {
                              href: "",
                              className: "flex items-center transition-[margin] duration-300 group-[.side-menu--collapsed]:xl:ml-2 group-[.side-menu--collapsed.side-menu--on-hover]:xl:ml-0",
                              children: [
                                /* @__PURE__ */ g.jsx("div", { className: "flex items-center justify-center w-[34px] rounded-lg h-[34px] bg-gradient-to-b from-theme-1 to-theme-2/80 transition-transform ease-in-out group-[.side-menu--collapsed.side-menu--on-hover]:xl:-rotate-180", children: /* @__PURE__ */ g.jsxs("div", { className: "w-[16px] h-[16px] relative -rotate-45 [&_div]:bg-white", children: [
                                  /* @__PURE__ */ g.jsx("div", { className: "absolute w-[21%] left-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]" }),
                                  /* @__PURE__ */ g.jsx("div", { className: "absolute w-[21%] inset-0 m-auto h-[120%] rounded-full" }),
                                  /* @__PURE__ */ g.jsx("div", { className: "absolute w-[21%] right-0 inset-y-0 my-auto rounded-full opacity-50 h-[75%]" })
                                ] }) }),
                                /* @__PURE__ */ g.jsx("div", { className: "ml-3.5 group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:opacity-0 transition-opacity font-medium", children: "ECHO" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ g.jsx(
                            "a",
                            {
                              href: "",
                              onClick: L,
                              className: "hidden group-[.side-menu--collapsed.side-menu--on-hover]:xl:opacity-100 group-[.side-menu--collapsed]:xl:rotate-180 group-[.side-menu--collapsed]:xl:opacity-0 transition-[opacity,transform] 2xl:flex items-center justify-center w-[20px] h-[20px] ml-auto border rounded-full border-slate-600/40 hover:bg-slate-600/5",
                              children: /* @__PURE__ */ g.jsx(A1, { icon: "ArrowLeft", className: "w-3.5 h-3.5 stroke-[1.3]" })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ g.jsx(
                      "div",
                      {
                        ref: M,
                        className: v1([
                          "w-full h-full pt-10 z-20 px-5 overflow-y-auto overflow-x-hidden pb-3 [-webkit-mask-image:-webkit-linear-gradient(top,rgba(0,0,0,0),black_30px)] [&:-webkit-scrollbar]:w-0 [&:-webkit-scrollbar]:bg-transparent",
                          "[&_.simplebar-content]:p-0 [&_.simplebar-track.simplebar-vertical]:w-[10px] [&_.simplebar-track.simplebar-vertical]:mr-0.5 [&_.simplebar-track.simplebar-vertical_.simplebar-scrollbar]:before:bg-slate-400/30"
                        ]),
                        children: /* @__PURE__ */ g.jsx("ul", { className: "scrollable" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ g.jsx("div", { className: "fixed h-[65px] transition-[margin] duration-100 xl:ml-[275px] group-[.side-menu--collapsed]:xl:ml-[90px] mt-3.5 inset-x-0 top-0", children: /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: v1([
                    "top-bar absolute left-0 xl:left-3.5 right-0 h-full mx-5 group",
                    "before:content-[''] before:absolute before:top-0 before:inset-x-0 before:-mt-[15px] before:h-[20px] before:backdrop-blur",
                    o && "top-bar--active"
                  ]),
                  children: /* @__PURE__ */ g.jsxs(
                    "div",
                    {
                      className: `\r
              container flex items-center w-full h-full transition-[padding,background-color,border-color] ease-in-out duration-300 box bg-transparent border-transparent shadow-none\r
              group-[.top-bar--active]:box group-[.top-bar--active]:px-5\r
              group-[.top-bar--active]:bg-transparent group-[.top-bar--active]:border-transparent group-[.top-bar--active]:bg-gradient-to-r group-[.top-bar--active]:from-theme-1 group-[.top-bar--active]:to-theme-2\r
            `,
                      children: [
                        /* @__PURE__ */ g.jsx("div", { className: "flex items-center gap-1 xl:hidden", children: /* @__PURE__ */ g.jsx(
                          "a",
                          {
                            href: "",
                            onClick: (s) => {
                              s.preventDefault(), y(!0);
                            },
                            className: "p-2 text-white rounded-full hover:bg-white/5",
                            children: /* @__PURE__ */ g.jsx(A1, { icon: "AlignJustify", className: "w-[18px] h-[18px]" })
                          }
                        ) }),
                        /* @__PURE__ */ g.jsxs("div", { className: "flex items-center flex-1", children: [
                          /* @__PURE__ */ g.jsx("div", { className: "flex items-center gap-1 ml-auto", children: /* @__PURE__ */ g.jsxs(
                            "a",
                            {
                              href: "",
                              className: "relative p-2 text-white rounded-full hover:bg-white/5",
                              onClick: (s) => {
                                s.preventDefault(), l(!0);
                              },
                              children: [
                                /* @__PURE__ */ g.jsx(A1, { icon: "Bell", className: "w-[18px] h-[18px]" }),
                                t.length ? /* @__PURE__ */ g.jsx("div", { className: "absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full top-0 right-0 dark:border-gray-900", children: t.length }) : null
                              ]
                            }
                          ) }),
                          /* @__PURE__ */ g.jsxs(_, { className: "ml-5", children: [
                            /* @__PURE__ */ g.jsx(_.Button, { className: "overflow-hidden rounded-full w-[36px] h-[36px] border-[3px] border-white/[0.15] image-fit", children: /* @__PURE__ */ g.jsx("div", { className: "w-32 h-32 bg-gray-200 flex items-center justify-center text-gray-500" }) }),
                            /* @__PURE__ */ g.jsxs(_.Items, { className: "w-56 mt-1", children: [
                              /* @__PURE__ */ g.jsxs(
                                _.Item,
                                {
                                  children: [
                                    /* @__PURE__ */ g.jsx(A1, { icon: "UserRound", className: "w-4 h-4 mr-2" }),
                                    "Profilo"
                                  ]
                                }
                              ),
                              /* @__PURE__ */ g.jsx(_.Divider, {}),
                              /* @__PURE__ */ g.jsxs(
                                _.Item,
                                {
                                  onClick: () => {
                                  },
                                  children: [
                                    /* @__PURE__ */ g.jsx(A1, { icon: "Settings", className: "w-4 h-4 mr-2" }),
                                    "Settings"
                                  ]
                                }
                              ),
                              /* @__PURE__ */ g.jsx(_.Divider, {}),
                              /* @__PURE__ */ g.jsxs(
                                _.Item,
                                {
                                  onClick: () => {
                                  },
                                  children: [
                                    /* @__PURE__ */ g.jsx(A1, { icon: "Power", className: "w-4 h-4 mr-2" }),
                                    "Logout"
                                  ]
                                }
                              )
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ g.jsx(
                          c,
                          {
                            notificationsPanel: k,
                            setNotificationsPanel: l
                          }
                        )
                      ]
                    }
                  )
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ g.jsx(
          "div",
          {
            className: v1([
              "transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode",
              { "xl:ml-[275px]": !m },
              { "xl:ml-[91px]": m },
              { "mode--light": !o }
            ]),
            children: /* @__PURE__ */ g.jsx("div", { className: "px-5 mt-6", children: /* @__PURE__ */ g.jsx("div", { className: "container", children: /* @__PURE__ */ g.jsx(a, {}) }) })
          }
        )
      ]
    }
  );
}
export {
  Hg as Button,
  Pg as Layout
};
