/*! For license information please see main.67e8858c.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          w = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          j = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          N = Symbol.for("react.suspense"),
          R = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          M = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var _ = Symbol.iterator;
        function O(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (_ && e[_]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          V = Object.assign;
        function F(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var z = !1;
        function I(e, t) {
          if (!e || z) return "";
          z = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  l = i.length - 1;
                1 <= o && 0 <= l && a[o] !== i[l];

              )
                l--;
              for (; 1 <= o && 0 <= l; o--, l--)
                if (a[o] !== i[l]) {
                  if (1 !== o || 1 !== l)
                    do {
                      if ((o--, 0 > --l || a[o] !== i[l])) {
                        var s = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= o && 0 <= l);
                  break;
                }
            }
          } finally {
            (z = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = I(e.type, !1));
            case 11:
              return (e = I(e.type.render, !1));
            case 1:
              return (e = I(e.type, !0));
            default:
              return "";
          }
        }
        function U(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case w:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case N:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : U(e.type) || "Memo";
              case M:
                (t = e._payload), (e = e._init);
                try {
                  return U(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return U(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          G(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function le(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? le(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var we = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof we) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = ka(t)), we(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function je() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Ne() {}
        var Re = !1;
        function Le(e, t, n) {
          if (Re) return e(t, n);
          Re = !0;
          try {
            return Te(e, t, n);
          } finally {
            (Re = !1), (null !== Se || null !== Ee) && (Ne(), je());
          }
        }
        function Me(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var _e = {};
            Object.defineProperty(_e, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", _e, _e),
              window.removeEventListener("test", _e, _e);
          } catch (ce) {
            Ae = !1;
          }
        function Oe(e, t, n, r, a, i, o, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ve = null,
          Fe = !1,
          ze = null,
          Ie = {
            onError: function (e) {
              (De = !0), (Ve = e);
            },
          };
        function Be(e, t, n, r, a, i, o, l, s) {
          (De = !1), (Ve = null), Oe.apply(Ie, arguments);
        }
        function Ue(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Ue(e) !== e) throw Error(i(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ue(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var l = !1, s = a.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = a), (r = o);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = a), (n = o);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = o.child; s; ) {
                      if (s === n) {
                        (l = !0), (n = o), (r = a);
                        break;
                      }
                      if (s === r) {
                        (l = !0), (r = o), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var l = o & ~a;
            0 !== l ? (r = ft(l)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          wt,
          St,
          Et,
          Ct,
          Pt = !1,
          jt = [],
          Tt = null,
          Nt = null,
          Rt = null,
          Lt = new Map(),
          Mt = new Map(),
          At = [],
          _t =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Ot(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tt = null;
              break;
            case "dragenter":
            case "dragleave":
              Nt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Mt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Vt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ue(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && wt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (xe = r), n.target.dispatchEvent(r), (xe = null), t.shift();
          }
          return !0;
        }
        function zt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function It() {
          (Pt = !1),
            null !== Tt && Ft(Tt) && (Tt = null),
            null !== Nt && Ft(Nt) && (Nt = null),
            null !== Rt && Ft(Rt) && (Rt = null),
            Lt.forEach(zt),
            Mt.forEach(zt);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, It)));
        }
        function Ut(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < jt.length) {
            Bt(jt[0], e);
            for (var n = 1; n < jt.length; n++) {
              var r = jt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Tt && Bt(Tt, e),
              null !== Nt && Bt(Nt, e),
              null !== Rt && Bt(Rt, e),
              Lt.forEach(t),
              Mt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Vt(n), null === n.blockedOn && At.shift();
        }
        var Wt = x.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          if (Ht) {
            var a = Xt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), Ot(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Tt = Dt(Tt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Rt = Dt(Rt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Lt.set(i, Dt(Lt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Mt.set(i, Dt(Mt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Ot(e, r), 4 & t && -1 < _t.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && kt(i),
                  null === (i = Xt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Xt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = Ue(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          sn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = V({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = V({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((on = e.screenX - sn.screenX),
                        (ln = e.screenY - sn.screenY))
                      : (ln = on = 0),
                    (sn = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          vn = an(V({}, pn, { dataTransfer: 0 })),
          mn = an(V({}, fn, { relatedTarget: 0 })),
          gn = an(
            V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = V({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          xn = an(V({}, un, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          wn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = V({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? wn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          jn = an(Pn),
          Tn = an(
            V({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Nn = an(
            V({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Rn = an(
            V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = V({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Mn = an(Ln),
          An = [9, 13, 27, 32],
          _n = c && "CompositionEvent" in window,
          On = null;
        c && "documentMode" in document && (On = document.documentMode);
        var Dn = c && "TextEvent" in window && !On,
          Vn = c && (!_n || (On && 8 < On && 11 >= On)),
          Fn = String.fromCharCode(32),
          zn = !1;
        function In(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Un = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Pe(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Yn = null;
        function qn(e) {
          Fr(e, 0);
        }
        function Xn(e) {
          if (Y(xa(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Gn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Yn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(Yn)) {
            var t = [];
            $n(t, Yn, e, ke(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Xn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var lr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (lr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !lr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          gr = null,
          yr = null,
          br = !1;
        function xr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var wr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!wr[e]) return e;
          var t,
            n = wr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete wr.animationend.animation,
            delete wr.animationiteration.animation,
            delete wr.animationstart.animation),
          "TransitionEvent" in window || delete wr.transitionend.transition);
        var Pr = Cr("animationend"),
          jr = Cr("animationiteration"),
          Tr = Cr("animationstart"),
          Nr = Cr("transitionend"),
          Rr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Mr(e, t) {
          Rr.set(e, t), s(t, [e]);
        }
        for (var Ar = 0; Ar < Lr.length; Ar++) {
          var _r = Lr[Ar];
          Mr(_r.toLowerCase(), "on" + (_r[0].toUpperCase() + _r.slice(1)));
        }
        Mr(Pr, "onAnimationEnd"),
          Mr(jr, "onAnimationIteration"),
          Mr(Tr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(Nr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Or =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Or)
          );
        function Vr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, l, s, u) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(i(198));
                var c = Ve;
                (De = !1), (Ve = null), Fe || ((Fe = !0), (ze = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var l = r[o],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== i && a.isPropagationStopped()))
                    break e;
                  Vr(a, l, u), (i = s);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((s = (l = r[o]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== i && a.isPropagationStopped())
                  )
                    break e;
                  Vr(a, l, u), (i = s);
                }
            }
          }
          if (Fe) throw ((e = ze), (Fe = !1), (ze = null), e);
        }
        function zr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Ir(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Ur(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ir(t, !1, e), Ir(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ir("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var l = r.stateNode.containerInfo;
                if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var s = o.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = o.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== l; ) {
                  if (null === (o = ya(l))) return;
                  if (5 === (s = o.tag) || 6 === s) {
                    r = i = o;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = i,
              a = ke(n),
              o = [];
            e: {
              var l = Rr.get(e);
              if (void 0 !== l) {
                var s = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = jn;
                    break;
                  case "focusin":
                    (u = "focus"), (s = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (s = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Nn;
                    break;
                  case Pr:
                  case jr:
                  case Tr:
                    s = gn;
                    break;
                  case Nr:
                    s = Rn;
                    break;
                  case "scroll":
                    s = dn;
                    break;
                  case "wheel":
                    s = Mn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Tn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== l ? l + "Capture" : null) : l;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Me(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((l = new s(l, u, null, n, a)),
                  o.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (s || l) &&
                  ((l =
                    a.window === a
                      ? a
                      : (l = a.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (f = Ue(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = r)),
                  s !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Tn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == s ? l : xa(s)),
                  (p = null == u ? l : xa(u)),
                  ((l = new c(v, h + "leave", s, n, a)).target = f),
                  (l.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  s && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = s; p; p = Yr(p)) h++;
                    for (p = 0, v = d; v; v = Yr(v)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && qr(o, l, s, c, !1),
                  null !== u && null !== f && qr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (s =
                    (l = r ? xa(r) : window).nodeName &&
                    l.nodeName.toLowerCase()) ||
                ("input" === s && "file" === l.type)
              )
                var m = Kn;
              else if (Hn(l))
                if (Gn) m = or;
                else {
                  m = ar;
                  var g = rr;
                }
              else
                (s = l.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, a)
                  : (g && g(e, l, r),
                    "focusout" === e &&
                      (g = l._wrapperState) &&
                      g.controlled &&
                      "number" === l.type &&
                      ee(l, "number", l.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((mr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), xr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  xr(o, n, a);
              }
              var y;
              if (_n)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Un
                  ? In(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Vn &&
                  "ko" !== n.locale &&
                  (Un || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Un && (y = en())
                    : ((Zt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Un = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((zn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && zn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Un)
                        return "compositionend" === e || (!_n && In(e, t))
                          ? ((e = en()), (Jt = Zt = Gt = null), (Un = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Vn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Me(e, n)) && r.unshift($r(e, i, a)),
              null != (i = Me(e, t)) && r.push($r(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var l = n,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === r) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              a
                ? null != (s = Me(n, i)) && o.unshift($r(n, s, l))
                : a || (null != (s = Me(n, i)) && o.push($r(n, s, l)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Xr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Kr, "");
        }
        function Zr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(la);
                }
              : ra;
        function la(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ut(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ut(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var wa = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = wa[Sa]), (wa[Sa] = null), Sa--);
        }
        function Pa(e, t) {
          Sa++, (wa[Sa] = e.current), (e.current = t);
        }
        var ja = {},
          Ta = Ea(ja),
          Na = Ea(!1),
          Ra = ja;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return ja;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ma(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ca(Na), Ca(Ta);
        }
        function _a(e, t, n) {
          if (Ta.current !== ja) throw Error(i(168));
          Pa(Ta, t), Pa(Na, n);
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return V({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              ja),
            (Ra = Ta.current),
            Pa(Ta, e),
            Pa(Na, Na.current),
            !0
          );
        }
        function Va(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Oa(e, t, Ra)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Na),
              Ca(Ta),
              Pa(Ta, e))
            : Ca(Na),
            Pa(Na, n);
        }
        var Fa = null,
          za = !1,
          Ia = !1;
        function Ba(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ua() {
          if (!Ia && null !== Fa) {
            Ia = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (za = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Ye(Je, Ua), a);
            } finally {
              (bt = t), (Ia = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Qa = 0,
          Ya = [],
          qa = 0,
          Xa = null,
          Ka = 1,
          Ga = "";
        function Za(e, t) {
          (Wa[Ha++] = Qa), (Wa[Ha++] = $a), ($a = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (Ya[qa++] = Ka), (Ya[qa++] = Ga), (Ya[qa++] = Xa), (Xa = e);
          var r = Ka;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ka = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = i + e);
          } else (Ka = (1 << i) | (n << a) | r), (Ga = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function ti(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Xa; )
            (Xa = Ya[--qa]),
              (Ya[qa] = null),
              (Ga = Ya[--qa]),
              (Ya[qa] = null),
              (Ka = Ya[--qa]),
              (Ya[qa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function li(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ka, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function si(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!li(e, t)) {
                if (si(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && li(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (si(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function fi(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (si(e)) throw (di(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = x.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gi = Ea(null),
          yi = null,
          bi = null,
          xi = null;
        function ki() {
          xi = bi = yi = null;
        }
        function wi(e) {
          var t = gi.current;
          Ca(gi), (e._currentValue = t);
        }
        function Si(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (yi = e),
            (xi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (xi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === yi) throw Error(i(308));
              (bi = e), (yi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Pi = null;
        function ji(e) {
          null === Pi ? (Pi = [e]) : Pi.push(e);
        }
        function Ti(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), ji(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Ni(e, r)
          );
        }
        function Ni(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ri = !1;
        function Li(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mi(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ai(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function _i(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ts))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Ni(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), ji(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Ni(e, n)
          );
        }
        function Oi(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vi(e, t, n, r) {
          var a = e.updateQueue;
          Ri = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            l = a.shared.pending;
          if (null !== l) {
            a.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === o ? (i = u) : (o.next = u), (o = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u),
              (c.lastBaseUpdate = s));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = u = s = null, l = i; ; ) {
              var d = l.lane,
                p = l.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = l;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = V({}, f, d);
                      break e;
                    case 2:
                      Ri = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [l]) : d.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (l = l.next)) {
                if (null === (l = a.shared.pending)) break;
                (l = (d = l).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (s = f),
              (a.baseState = s),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Ds |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Fi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var zi = new r.Component().refs;
        function Ii(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ue(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ai(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = _i(e, i, a)) && (nu(t, e, a, r), Oi(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              i = Ai(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = _i(e, i, a)) && (nu(t, e, a, r), Oi(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ai(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = _i(e, a, r)) && (nu(t, e, r, n), Oi(t, e, r));
          },
        };
        function Ui(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, i);
        }
        function Wi(e, t, n) {
          var r = !1,
            a = ja,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = Ma(t) ? Ra : Ta.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : ja)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
        }
        function $i(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = zi), Li(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = Ma(t) ? Ra : Ta.current), (a.context = La(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (Ii(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bi.enqueueReplaceState(a, a.state, null),
              Vi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === zi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Yi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function qi(e) {
          return (0, e._init)(e._payload);
        }
        function Xi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Au(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Vu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === M &&
                    qi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Qi(e, t, n)), (r.return = e), r)
              : (((r = _u(n.type, n.key, n.props, null, e.mode, r)).ref = Qi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Ou(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Vu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = _u(t.type, t.key, t.props, null, e.mode, n)).ref = Qi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case w:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case M:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || O(t))
                return ((t = Ou(t, e.mode, n, null)).return = e), t;
              Yi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case M:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || O(n)) return null !== a ? null : f(e, t, n, r, null);
              Yi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case M:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || O(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Yi(t, r);
            }
            return null;
          }
          function v(a, i, l, s) {
            for (
              var u = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < l.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var g = p(a, f, l[v], s);
              if (null === g) {
                null === f && (f = m);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (i = o(g, i, v)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (f = m);
            }
            if (v === l.length) return n(a, f), ai && Za(a, v), u;
            if (null === f) {
              for (; v < l.length; v++)
                null !== (f = d(a, l[v], s)) &&
                  ((i = o(f, i, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ai && Za(a, v), u;
            }
            for (f = r(a, f); v < l.length; v++)
              null !== (m = h(f, a, v, l[v], s)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, v),
              u
            );
          }
          function m(a, l, s, u) {
            var c = O(s);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (s = c.call(s))) throw Error(i(151));
            for (
              var f = (c = null), v = l, m = (l = 0), g = null, y = s.next();
              null !== v && !y.done;
              m++, y = s.next()
            ) {
              v.index > m ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (l = o(b, l, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = g);
            }
            if (y.done) return n(a, v), ai && Za(a, m), c;
            if (null === v) {
              for (; !y.done; m++, y = s.next())
                null !== (y = d(a, y.value, u)) &&
                  ((l = o(y, l, m)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return ai && Za(a, m), c;
            }
            for (v = r(a, v); !y.done; m++, y = s.next())
              null !== (y = h(v, a, m, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? m : y.key),
                (l = o(y, l, m)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              c
            );
          }
          return function e(r, i, o, s) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === M &&
                            qi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Qi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Ou(o.props.children, r.mode, s, o.key)).return =
                          r),
                        (r = i))
                      : (((s = _u(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          s
                        )).ref = Qi(r, i, o)),
                        (s.return = r),
                        (r = s));
                  }
                  return l(r);
                case w:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Fu(o, r.mode, s)).return = r), (r = i);
                  }
                  return l(r);
                case M:
                  return e(r, i, (c = o._init)(o._payload), s);
              }
              if (te(o)) return v(r, i, o, s);
              if (O(o)) return m(r, i, o, s);
              Yi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Vu(o, r.mode, s)).return = r), (r = i)),
                l(r))
              : n(r, i);
          };
        }
        var Ki = Xi(!0),
          Gi = Xi(!1),
          Zi = {},
          Ji = Ea(Zi),
          eo = Ea(Zi),
          to = Ea(Zi);
        function no(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Pa(to, t), Pa(eo, e), Pa(Ji, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Ji), Pa(Ji, t);
        }
        function ao() {
          Ca(Ji), Ca(eo), Ca(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Ji.current),
            n = se(t, e.type);
          t !== n && (Pa(eo, e), Pa(Ji, n));
        }
        function oo(e) {
          eo.current === e && (Ca(Ji), Ca(eo));
        }
        var lo = Ea(0);
        function so(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          go = null,
          yo = !1,
          bo = !1,
          xo = 0,
          ko = 0;
        function wo() {
          throw Error(i(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!lr(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ll : sl),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (go = mo = null),
                (t.updateQueue = null),
                (fo.current = ul),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = ol),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (go = mo = vo = null),
            (yo = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Co() {
          var e = 0 !== xo;
          return (xo = 0), e;
        }
        function Po() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function jo() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function To(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function No(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var l = a.next;
              (a.next = o.next), (o.next = l);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var s = (l = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = d), (l = r)) : (u = u.next = d),
                  (vo.lanes |= f),
                  (Ds |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (l = r) : (u.next = s),
              lr(r, t.memoizedState) || (xl = !0),
              (t.memoizedState = r),
              (t.baseState = l),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Ds |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Ro(e) {
          var t = jo(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var l = (a = a.next);
            do {
              (o = e(o, l.action)), (l = l.next);
            } while (l !== a);
            lr(o, t.memoizedState) || (xl = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Lo() {}
        function Mo(e, t) {
          var n = vo,
            r = jo(),
            a = t(),
            o = !lr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (xl = !0)),
            (r = r.queue),
            Ho(Oo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              zo(9, _o.bind(null, n, r, a, t), void 0, null),
              null === Ns)
            )
              throw Error(i(349));
            0 !== (30 & ho) || Ao(n, t, a);
          }
          return a;
        }
        function Ao(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function _o(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && Vo(e);
        }
        function Oo(e, t, n) {
          return n(function () {
            Do(t) && Vo(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !lr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vo(e) {
          var t = Ni(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Fo(e) {
          var t = Po();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: To,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nl.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function zo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Io() {
          return jo().memoizedState;
        }
        function Bo(e, t, n, r) {
          var a = Po();
          (vo.flags |= e),
            (a.memoizedState = zo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Uo(e, t, n, r) {
          var a = jo();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = zo(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = zo(1 | t, n, i, r));
        }
        function Wo(e, t) {
          return Bo(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Uo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Uo(4, 2, e, t);
        }
        function Qo(e, t) {
          return Uo(4, 4, e, t);
        }
        function Yo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Uo(4, 4, Yo.bind(null, t, e), n)
          );
        }
        function Xo() {}
        function Ko(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = jo();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)),
              (e.memoizedState = n))
            : (lr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Ds |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function el() {
          return jo().memoizedState;
        }
        function tl(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rl(e))
          )
            al(t, n);
          else if (null !== (n = Ti(e, t, n, r))) {
            nu(n, e, r, eu()), il(n, t, r);
          }
        }
        function nl(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rl(e)) al(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  l = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, o))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), ji(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = Ti(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), il(n, t, r));
          }
        }
        function rl(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function al(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function il(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ol = {
            readContext: Ci,
            useCallback: wo,
            useContext: wo,
            useEffect: wo,
            useImperativeHandle: wo,
            useInsertionEffect: wo,
            useLayoutEffect: wo,
            useMemo: wo,
            useReducer: wo,
            useRef: wo,
            useState: wo,
            useDebugValue: wo,
            useDeferredValue: wo,
            useTransition: wo,
            useMutableSource: wo,
            useSyncExternalStore: wo,
            useId: wo,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (Po().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Bo(4194308, 4, Yo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Bo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Bo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Po();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Po();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tl.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Po().memoizedState = e);
            },
            useState: Fo,
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return (Po().memoizedState = e);
            },
            useTransition: function () {
              var e = Fo(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Po().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = Po();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ns)) throw Error(i(349));
                0 !== (30 & ho) || Ao(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(Oo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                zo(9, _o.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Po(),
                t = Ns.identifierPrefix;
              if (ai) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - ot(Ka) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ci,
            useCallback: Ko,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: No,
            useRef: Io,
            useState: function () {
              return No(To);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              return Zo(jo(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [No(To)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Mo,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ci,
            useCallback: Ko,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: Ro,
            useRef: Io,
            useState: function () {
              return Ro(To);
            },
            useDebugValue: Xo,
            useDeferredValue: function (e) {
              var t = jo();
              return null === mo
                ? (t.memoizedState = e)
                : Zo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [Ro(To)[0], jo().memoizedState];
            },
            useMutableSource: Lo,
            useSyncExternalStore: Mo,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fl(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function dl(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pl = "function" === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, n) {
          ((n = Ai(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), ($s = r)), dl(0, t);
            }),
            n
          );
        }
        function vl(e, t, n) {
          (n = Ai(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                dl(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                dl(0, t),
                  "function" !== typeof r &&
                    (null === Qs ? (Qs = new Set([this])) : Qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ml(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pl();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function gl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yl(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ai(-1, 1)).tag = 2), _i(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bl = x.ReactCurrentOwner,
          xl = !1;
        function kl(e, t, n, r) {
          t.child = null === e ? Gi(t, null, n, r) : Ki(t, e.child, n, r);
        }
        function wl(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, a),
            (r = Eo(e, t, n, r, i, a)),
            (n = Co()),
            null === e || xl
              ? (ai && n && ei(t), (t.flags |= 1), kl(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Sl(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Mu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = _u(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), El(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(o, r) &&
              e.ref === t.ref
            )
              return Hl(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Au(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function El(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (sr(i, r) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hl(e, t, a);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return jl(e, t, n, r, a);
        }
        function Cl(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(As, Ms),
                (Ms |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(As, Ms),
                  (Ms |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Pa(As, Ms),
                (Ms |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(As, Ms),
              (Ms |= r);
          return kl(e, t, a, n), t.child;
        }
        function Pl(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function jl(e, t, n, r, a) {
          var i = Ma(n) ? Ra : Ta.current;
          return (
            (i = La(t, i)),
            Ei(t, a),
            (n = Eo(e, t, n, r, i, a)),
            (r = Co()),
            null === e || xl
              ? (ai && r && ei(t), (t.flags |= 1), kl(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hl(e, t, a))
          );
        }
        function Tl(e, t, n, r, a) {
          if (Ma(n)) {
            var i = !0;
            Da(t);
          } else i = !1;
          if ((Ei(t, a), null === t.stateNode))
            Wl(e, t), Wi(t, n, r), $i(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              l = t.memoizedProps;
            o.props = l;
            var s = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ci(u))
              : (u = La(t, (u = Ma(n) ? Ra : Ta.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== r || s !== u) && Hi(t, o, r, u)),
              (Ri = !1);
            var d = t.memoizedState;
            (o.state = d),
              Vi(t, r, o, a),
              (s = t.memoizedState),
              l !== r || d !== s || Na.current || Ri
                ? ("function" === typeof c &&
                    (Ii(t, n, c, r), (s = t.memoizedState)),
                  (l = Ri || Ui(t, n, l, r, d, s, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (o.props = r),
                  (o.state = s),
                  (o.context = u),
                  (r = l))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Mi(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : mi(t.type, l)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Ci(s))
                : (s = La(t, (s = Ma(n) ? Ra : Ta.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((l !== f || d !== s) && Hi(t, o, r, s)),
              (Ri = !1),
              (d = t.memoizedState),
              (o.state = d),
              Vi(t, r, o, a);
            var h = t.memoizedState;
            l !== f || d !== h || Na.current || Ri
              ? ("function" === typeof p &&
                  (Ii(t, n, p, r), (h = t.memoizedState)),
                (u = Ri || Ui(t, n, u, r, d, h, s) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, s),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = s),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Nl(e, t, n, r, i, a);
        }
        function Nl(e, t, n, r, a, i) {
          Pl(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Va(t, n, !1), Hl(e, t, i);
          (r = t.stateNode), (bl.current = t);
          var l =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Ki(t, e.child, null, i)),
                (t.child = Ki(t, null, l, i)))
              : kl(e, t, l, i),
            (t.memoizedState = r.state),
            a && Va(t, n, !0),
            t.child
          );
        }
        function Rl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? _a(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && _a(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Ll(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), kl(e, t, n, r), t.child;
        }
        var Ml,
          Al,
          _l,
          Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Dl(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Vl(e, t, n) {
          var r,
            a = t.pendingProps,
            o = lo.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Pa(lo, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  l
                    ? ((a = t.mode),
                      (l = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Du(s, a, 0, null)),
                      (e = Ou(e, a, n, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Dl(n)),
                      (t.memoizedState = Ol),
                      e)
                    : Fl(t, s))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, l) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zl(e, t, l, (r = fl(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Du(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ou(o, a, l, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Ki(t, e.child, null, l),
                    (t.child.memoizedState = Dl(l)),
                    (t.memoizedState = Ol),
                    o);
              if (0 === (1 & t.mode)) return zl(e, t, l, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), zl(e, t, l, (r = fl((o = Error(i(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (r = Ns)) {
                  switch (l & -l) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), Ni(e, a), nu(r, e, a, -1));
                }
                return vu(), zl(e, t, l, (r = fl(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Ya[qa++] = Ka),
                    (Ya[qa++] = Ga),
                    (Ya[qa++] = Xa),
                    (Ka = e.id),
                    (Ga = e.overflow),
                    (Xa = t)),
                  (t = Fl(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, o, n);
          if (l) {
            (l = a.fallback), (s = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Au(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (l = Au(r, l))
                : ((l = Ou(l, s, n, null)).flags |= 2),
              (l.return = t),
              (a.return = t),
              (a.sibling = l),
              (t.child = a),
              (a = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Dl(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ol),
              a
            );
          }
          return (
            (e = (l = e.child).sibling),
            (a = Au(l, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fl(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function zl(e, t, n, r) {
          return (
            null !== r && hi(r),
            Ki(t, e.child, null, n),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Il(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Bl(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Ul(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((kl(e, t, r.children, n), 0 !== (2 & (r = lo.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Il(e, n, t);
                else if (19 === e.tag) Il(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(lo, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === so(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bl(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === so(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bl(t, !0, n, null, i);
                break;
              case "together":
                Bl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Wl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Hl(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ds |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Au((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Au(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $l(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ql(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yl(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ql(t), null;
            case 1:
            case 17:
              return Ma(t.type) && Aa(), Ql(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ca(Na),
                Ca(Ta),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (ou(ii), (ii = null)))),
                Ql(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Al(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ql(t), null;
                }
                if (((e = no(Ji.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      zr("cancel", r), zr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      zr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Or.length; a++) zr(Or[a], r);
                      break;
                    case "source":
                      zr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      zr("error", r), zr("load", r);
                      break;
                    case "details":
                      zr("toggle", r);
                      break;
                    case "input":
                      K(r, o), zr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        zr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), zr("invalid", r);
                  }
                  for (var s in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(s)) {
                      var u = o[s];
                      "children" === s
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : l.hasOwnProperty(s) &&
                          null != u &&
                          "onScroll" === s &&
                          zr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = le(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ml(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((s = be(n, r)), n)) {
                      case "dialog":
                        zr("cancel", e), zr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        zr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Or.length; a++) zr(Or[a], e);
                        a = r;
                        break;
                      case "source":
                        zr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        zr("error", e), zr("load", e), (a = r);
                        break;
                      case "details":
                        zr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = X(e, r)), zr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = V({}, r, { value: void 0 })),
                          zr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), zr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (l.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && zr("scroll", e)
                              : null != c && b(e, o, c, s));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ql(t), null;
            case 6:
              if (e && null != t.stateNode) _l(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Ji.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ql(t), null;
            case 13:
              if (
                (Ca(lo),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  di(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[da] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ql(t), (o = !1);
                } else null !== ii && (ou(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & lo.current)
                        ? 0 === _s && (_s = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ql(t),
                  null);
            case 4:
              return (
                ao(), null === e && Ur(t.stateNode.containerInfo), Ql(t), null
              );
            case 10:
              return wi(t.type._context), Ql(t), null;
            case 19:
              if ((Ca(lo), null === (o = t.memoizedState))) return Ql(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = o.rendering)))
                if (r) $l(o, !1);
                else {
                  if (0 !== _s || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = so(e))) {
                        for (
                          t.flags |= 128,
                            $l(o, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (s = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = s.childLanes),
                                (o.lanes = s.lanes),
                                (o.child = s.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = s.memoizedProps),
                                (o.memoizedState = s.memoizedState),
                                (o.updateQueue = s.updateQueue),
                                (o.type = s.type),
                                (e = s.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(lo, (1 & lo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Us &&
                    ((t.flags |= 128),
                    (r = !0),
                    $l(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = so(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $l(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !s.alternate &&
                        !ai)
                    )
                      return Ql(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Us &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $l(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = o.last) ? (n.sibling = s) : (t.child = s),
                    (o.last = s));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = lo.current),
                  Pa(lo, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ql(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ms) &&
                    (Ql(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ql(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function ql(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                Ma(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ca(Na),
                Ca(Ta),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ca(lo),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(lo), null;
            case 4:
              return ao(), null;
            case 10:
              return wi(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ml = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Al = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Ji.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (o = []);
                  break;
                case "select":
                  (a = V({}, a, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var s = a[c];
                    for (i in s)
                      s.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (l.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((s = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ("style" === c)
                    if (s) {
                      for (i in s)
                        !s.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          s[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && zr("scroll", e),
                            o || s === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (_l = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xl = !1,
          Kl = !1,
          Gl = "function" === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function Jl(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Eu(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Eu(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && es(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function os(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ls(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || os(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function us(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (us(e, t, n), e = e.sibling; null !== e; )
              us(e, t, n), (e = e.sibling);
        }
        var cs = null,
          fs = !1;
        function ds(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (l) {}
          switch (n.tag) {
            case 5:
              Kl || Jl(n, t);
            case 6:
              var r = cs,
                a = fs;
              (cs = null),
                ds(e, t, n),
                (fs = a),
                null !== (cs = r) &&
                  (fs
                    ? ((e = cs),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cs.removeChild(n.stateNode));
              break;
            case 18:
              null !== cs &&
                (fs
                  ? ((e = cs),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Ut(e))
                  : sa(cs, n.stateNode));
              break;
            case 4:
              (r = cs),
                (a = fs),
                (cs = n.stateNode.containerInfo),
                (fs = !0),
                ds(e, t, n),
                (cs = r),
                (fs = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Kl &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      es(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              ds(e, t, n);
              break;
            case 1:
              if (
                !Kl &&
                (Jl(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (l) {
                  Eu(n, t, l);
                }
              ds(e, t, n);
              break;
            case 21:
              ds(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Kl = (r = Kl) || null !== n.memoizedState),
                  ds(e, t, n),
                  (Kl = r))
                : ds(e, t, n);
              break;
            default:
              ds(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gl()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vs(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (cs = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (cs = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === cs) throw Error(i(160));
                ps(o, l, a), (cs = null), (fs = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Eu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) ms(t, e), (t = t.sibling);
        }
        function ms(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vs(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (m) {
                  Eu(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 1:
              vs(t, e), gs(e), 512 & r && null !== n && Jl(n, n.return);
              break;
            case 5:
              if (
                (vs(t, e),
                gs(e),
                512 & r && null !== n && Jl(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  l = null !== n ? n.memoizedProps : o,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === s &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(s, l);
                    var c = be(s, o);
                    for (l = 0; l < u.length; l += 2) {
                      var f = u[l],
                        d = u[l + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (s) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    Eu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((vs(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (vs(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ut(t.containerInfo);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              break;
            case 4:
            default:
              vs(t, e), gs(e);
              break;
            case 13:
              vs(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bs = Ge())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Kl = (c = Kl) || f), vs(t, e), (Kl = c))
                  : vs(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Zl = e, f = e.child; null !== f; ) {
                    for (d = Zl = f; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          Jl(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Eu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          Jl(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ks(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : ks(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((s = d.stateNode),
                              (l =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (s.style.display = ve("display", l)));
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              vs(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (os(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    us(e, ls(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ss(e, ls(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Zl = e), bs(e, t, n);
        }
        function bs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Zl; ) {
            var a = Zl,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Xl;
              if (!o) {
                var l = a.alternate,
                  s = (null !== l && null !== l.memoizedState) || Kl;
                l = Xl;
                var u = Kl;
                if (((Xl = o), (Kl = s) && !u))
                  for (Zl = a; null !== Zl; )
                    (s = (o = Zl).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ws(a)
                        : null !== s
                        ? ((s.return = o), (Zl = s))
                        : ws(a);
                for (; null !== i; ) (Zl = i), bs(i, t, n), (i = i.sibling);
                (Zl = a), (Xl = l), (Kl = u);
              }
              xs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Zl = i))
                : xs(e);
          }
        }
        function xs(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kl || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Kl)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Fi(t, o, r);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fi(t, l, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ut(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Kl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Zl = n);
              break;
            }
            Zl = t.return;
          }
        }
        function ws(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Eu(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Eu(t, a, s);
                    }
                  }
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, o, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Ss,
          Es = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          Ps = x.ReactCurrentOwner,
          js = x.ReactCurrentBatchConfig,
          Ts = 0,
          Ns = null,
          Rs = null,
          Ls = 0,
          Ms = 0,
          As = Ea(0),
          _s = 0,
          Os = null,
          Ds = 0,
          Vs = 0,
          Fs = 0,
          zs = null,
          Is = null,
          Bs = 0,
          Us = 1 / 0,
          Ws = null,
          Hs = !1,
          $s = null,
          Qs = null,
          Ys = !1,
          qs = null,
          Xs = 0,
          Ks = 0,
          Gs = null,
          Zs = -1,
          Js = 0;
        function eu() {
          return 0 !== (6 & Ts) ? Ge() : -1 !== Zs ? Zs : (Zs = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ls
            ? Ls & -Ls
            : null !== vi.transition
            ? (0 === Js && (Js = vt()), Js)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Gs = null), Error(i(185)));
          gt(e, n, r),
            (0 !== (2 & Ts) && e === Ns) ||
              (e === Ns && (0 === (2 & Ts) && (Vs |= n), 4 === _s && lu(e, Ls)),
              ru(e, r),
              1 === n &&
                0 === Ts &&
                0 === (1 & t.mode) &&
                ((Us = Ge() + 500), za && Ua()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                l = 1 << o,
                s = a[o];
              -1 === s
                ? (0 !== (l & n) && 0 === (l & r)) || (a[o] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (i &= ~l);
            }
          })(e, t);
          var r = dt(e, e === Ns ? Ls : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (za = !0), Ba(e);
                  })(su.bind(null, e))
                : Ba(su.bind(null, e)),
                oa(function () {
                  0 === (6 & Ts) && Ua();
                }),
                (n = null);
            else {
              switch (xt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Zs = -1), (Js = 0), 0 !== (6 & Ts))) throw Error(i(327));
          var n = e.callbackNode;
          if (wu() && e.callbackNode !== n) return null;
          var r = dt(e, e === Ns ? Ls : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = Ts;
            Ts |= 2;
            var o = hu();
            for (
              (Ns === e && Ls === t) ||
              ((Ws = null), (Us = Ge() + 500), du(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (s) {
                pu(e, s);
              }
            ki(),
              (Cs.current = o),
              (Ts = a),
              null !== Rs ? (t = 0) : ((Ns = null), (Ls = 0), (t = _s));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = iu(e, a))),
              1 === t)
            )
              throw ((n = Os), du(e, 0), lu(e, r), ru(e, Ge()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!lr(i(), a)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = iu(e, o))),
                  1 === t))
              )
                throw ((n = Os), du(e, 0), lu(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ku(e, Is, Ws);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Bs + 500 - Ge()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Is, Ws), t);
                    break;
                  }
                  ku(e, Is, Ws);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var l = 31 - ot(r);
                    (o = 1 << l), (l = t[l]) > a && (a = l), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Es(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Is, Ws), r);
                    break;
                  }
                  ku(e, Is, Ws);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var n = zs;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Is), (Is = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Is ? (Is = e) : Is.push.apply(Is, e);
        }
        function lu(e, t) {
          for (
            t &= ~Fs,
              t &= ~Vs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Ts)) throw Error(i(327));
          wu();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = iu(e, r)));
          }
          if (1 === n) throw ((n = Os), du(e, 0), lu(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Is, Ws),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = n) && ((Us = Ge() + 500), za && Ua());
          }
        }
        function cu(e) {
          null !== qs && 0 === qs.tag && 0 === (6 & Ts) && wu();
          var t = Ts;
          Ts |= 1;
          var n = js.transition,
            r = bt;
          try {
            if (((js.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (js.transition = n), 0 === (6 & (Ts = t)) && Ua();
          }
        }
        function fu() {
          (Ms = As.current), Ca(As);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Rs))
            for (n = Rs.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  ao(), Ca(Na), Ca(Ta), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ca(lo);
                  break;
                case 10:
                  wi(r.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              n = n.return;
            }
          if (
            ((Ns = e),
            (Rs = e = Au(e.current, null)),
            (Ls = Ms = t),
            (_s = 0),
            (Os = null),
            (Fs = Vs = Ds = 0),
            (Is = zs = null),
            null !== Pi)
          ) {
            for (t = 0; t < Pi.length; t++)
              if (null !== (r = (n = Pi[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Pi = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Rs;
            try {
              if ((ki(), (fo.current = ol), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((ho = 0),
                (go = mo = vo = null),
                (bo = !1),
                (xo = 0),
                (Ps.current = null),
                null === n || null === n.return)
              ) {
                (_s = 1), (Os = t), (Rs = null);
                break;
              }
              e: {
                var o = e,
                  l = n.return,
                  s = n,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = s,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gl(l);
                  if (null !== h) {
                    (h.flags &= -257),
                      yl(h, l, s, 0, t),
                      1 & h.mode && ml(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(o, c, t), vu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & s.mode) {
                  var g = gl(l);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yl(g, l, s, 0, t),
                      hi(cl(u, s));
                    break e;
                  }
                }
                (o = u = cl(u, s)),
                  4 !== _s && (_s = 2),
                  null === zs ? (zs = [o]) : zs.push(o),
                  (o = l);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Di(o, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qs || !Qs.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Di(o, vl(o, s, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xu(n);
            } catch (x) {
              (t = x), Rs === n && null !== n && (Rs = n = n.return);
              continue;
            }
            break;
          }
        }
        function hu() {
          var e = Cs.current;
          return (Cs.current = ol), null === e ? ol : e;
        }
        function vu() {
          (0 !== _s && 3 !== _s && 2 !== _s) || (_s = 4),
            null === Ns ||
              (0 === (268435455 & Ds) && 0 === (268435455 & Vs)) ||
              lu(Ns, Ls);
        }
        function mu(e, t) {
          var n = Ts;
          Ts |= 2;
          var r = hu();
          for ((Ns === e && Ls === t) || ((Ws = null), du(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((ki(), (Ts = n), (Cs.current = r), null !== Rs))
            throw Error(i(261));
          return (Ns = null), (Ls = 0), _s;
        }
        function gu() {
          for (; null !== Rs; ) bu(Rs);
        }
        function yu() {
          for (; null !== Rs && !Xe(); ) bu(Rs);
        }
        function bu(e) {
          var t = Ss(e.alternate, e, Ms);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Rs = t),
            (Ps.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yl(n, t, Ms))) return void (Rs = n);
            } else {
              if (null !== (n = ql(n, t)))
                return (n.flags &= 32767), void (Rs = n);
              if (null === e) return (_s = 6), void (Rs = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Rs = t);
            Rs = t = e;
          } while (null !== t);
          0 === _s && (_s = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = js.transition;
          try {
            (js.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  wu();
                } while (null !== qs);
                if (0 !== (6 & Ts)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Ns && ((Rs = Ns = null), (Ls = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Nu(tt, function () {
                      return wu(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = js.transition), (js.transition = null);
                  var l = bt;
                  bt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (Ps.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (s = l + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = l + r),
                                    3 === d.nodeType &&
                                      (l += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (s = l),
                                    p === o && ++f === r && (u = l),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === s || -1 === u
                                  ? null
                                  : { start: s, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Zl = t;
                        null !== Zl;

                      )
                        if (
                          ((e = (t = Zl).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (k) {
                              Eu(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (v = ts), (ts = !1);
                    })(e, n),
                    ms(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ke(),
                    (Ts = s),
                    (bt = l),
                    (js.transition = o);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (qs = e), (Xs = a)),
                  (o = e.pendingLanes),
                  0 === o && (Qs = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = $s), ($s = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && wu(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Gs
                      ? Ks++
                      : ((Ks = 0), (Gs = e))
                    : (Ks = 0),
                  Ua();
              })(e, t, n, r);
          } finally {
            (js.transition = a), (bt = r);
          }
          return null;
        }
        function wu() {
          if (null !== qs) {
            var e = xt(Xs),
              t = js.transition,
              n = bt;
            try {
              if (((js.transition = null), (bt = 16 > e ? 16 : e), null === qs))
                var r = !1;
              else {
                if (((e = qs), (qs = null), (Xs = 0), 0 !== (6 & Ts)))
                  throw Error(i(331));
                var a = Ts;
                for (Ts |= 4, Zl = e.current; null !== Zl; ) {
                  var o = Zl,
                    l = o.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = o.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zl = c; null !== Zl; ) {
                          var f = Zl;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Zl = d);
                          else
                            for (; null !== Zl; ) {
                              var p = (f = Zl).sibling,
                                h = f.return;
                              if ((is(f), f === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var g = m.sibling;
                            (m.sibling = null), (m = g);
                          } while (null !== m);
                        }
                      }
                      Zl = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== l)
                    (l.return = o), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (o = Zl).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Zl = y);
                        break e;
                      }
                      Zl = o.return;
                    }
                }
                var b = e.current;
                for (Zl = b; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x)
                    (x.return = l), (Zl = x);
                  else
                    e: for (l = b; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (w) {
                          Eu(s, s.return, w);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var k = s.sibling;
                      if (null !== k) {
                        (k.return = s.return), (Zl = k);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (
                  ((Ts = a),
                  Ua(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (w) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (js.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = _i(e, (t = hl(0, (t = cl(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function Eu(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qs || !Qs.has(r)))
                ) {
                  (t = _i(t, (e = vl(t, (e = cl(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ns === e &&
              (Ls & n) === n &&
              (4 === _s ||
              (3 === _s && (130023424 & Ls) === Ls && 500 > Ge() - Bs)
                ? du(e, 0)
                : (Fs |= n)),
            ru(e, t);
        }
        function Pu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = eu();
          null !== (e = Ni(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Pu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Pu(e, n);
        }
        function Nu(e, t) {
          return Ye(e, t);
        }
        function Ru(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Ru(e, t, n, r);
        }
        function Mu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Au(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function _u(e, t, n, r, a, o) {
          var l = 2;
          if (((r = e), "function" === typeof e)) Mu(e) && (l = 1);
          else if ("string" === typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return Ou(n.children, a, o, t);
              case E:
                (l = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Lu(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Lu(13, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case R:
                return (
                  ((e = Lu(19, n, t, a)).elementType = R), (e.lanes = o), e
                );
              case A:
                return Du(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      l = 10;
                      break e;
                    case j:
                      l = 9;
                      break e;
                    case T:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case M:
                      (l = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(l, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Ou(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Vu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function zu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Iu(e, t, n, r, a, i, o, l, s) {
          return (
            (e = new zu(e, t, n, l, s)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Li(i),
            e
          );
        }
        function Bu(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: w,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Uu(e) {
          if (!e) return ja;
          e: {
            if (Ue((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ma(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ma(n)) return Oa(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, i, o, l, s) {
          return (
            ((e = Iu(n, r, !0, e, 0, i, 0, l, s)).context = Uu(null)),
            (n = e.current),
            ((i = Ai((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            _i(n, i, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            i = eu(),
            o = tu(a);
          return (
            (n = Uu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ai(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = _i(a, t, o)) && (nu(e, a, o, i), Oi(e, a, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Ss = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Na.current) xl = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Rl(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        Ma(t.type) && Da(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(gi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(lo, 1 & lo.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Vl(e, t, n)
                            : (Pa(lo, 1 & lo.current),
                              null !== (e = Hl(e, t, n)) ? e.sibling : null);
                        Pa(lo, 1 & lo.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ul(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(lo, lo.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cl(e, t, n);
                    }
                    return Hl(e, t, n);
                  })(e, t, n)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), ai && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Wl(e, t), (e = t.pendingProps);
              var a = La(t, Ta.current);
              Ei(t, n), (a = Eo(null, t, r, e, a, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ma(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Li(t),
                    (a.updater = Bi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $i(t, r, e, n),
                    (t = Nl(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    kl(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Wl(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Mu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = jl(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Tl(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wl(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sl(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                jl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Tl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Rl(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Mi(e, t),
                  Vi(t, r, null, n);
                var l = t.memoizedState;
                if (((r = l.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ll(e, t, r, n, (a = cl(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Gi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = Hl(e, t, n);
                    break e;
                  }
                  kl(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (l = a.children),
                na(r, a)
                  ? (l = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Pl(e, t),
                kl(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Vl(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Ki(t, null, r, n)) : kl(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wl(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return kl(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kl(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (l = a.value),
                  Pa(gi, r._currentValue),
                  (r._currentValue = l),
                  null !== o)
                )
                  if (lr(o.value, l)) {
                    if (o.children === a.children && !Na.current) {
                      t = Hl(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var s = o.dependencies;
                      if (null !== s) {
                        l = o.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ai(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Si(o.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        l = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (l = o.return)) throw Error(i(341));
                        (l.lanes |= n),
                          null !== (s = l.alternate) && (s.lanes |= n),
                          Si(l, n, t),
                          (l = o.sibling);
                      } else l = o.child;
                      if (null !== l) l.return = o;
                      else
                        for (l = o; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (o = l.sibling)) {
                            (o.return = l.return), (l = o);
                            break;
                          }
                          l = l.return;
                        }
                      o = l;
                    }
                kl(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                kl(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                Sl(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return El(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Wl(e, t),
                (t.tag = 1),
                Ma(r) ? ((e = !0), Da(t)) : (e = !1),
                Ei(t, n),
                Wi(t, r, a),
                $i(t, r, a, n),
                Nl(null, t, r, !0, e, n)
              );
            case 19:
              return Ul(e, t, n);
            case 22:
              return Cl(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var l = a;
              a = function () {
                var e = $u(o);
                l.call(e);
              };
            }
            Hu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = $u(o);
                    i.call(e);
                  };
                }
                var o = Wu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Ur(8 === e.nodeType ? e.parentNode : e),
                  cu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var l = r;
                r = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = Iu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Ur(8 === e.nodeType ? e.parentNode : e),
                cu(function () {
                  Hu(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return $u(o);
        }
        (Ku.prototype.render = Xu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Xu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                cu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & Ts) && ((Us = Ge() + 500), Ua()));
                }
                break;
              case 13:
                cu(function () {
                  var t = Ni(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Yu(e, 1);
            }
          }),
          (wt = function (e) {
            if (13 === e.tag) {
              var t = Ni(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Yu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = Ni(e, t);
              if (null !== n) nu(n, e, t, eu());
              Yu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (we = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(i(90));
                      Y(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Te = uu),
          (Ne = cu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, ka, Pe, je, uu],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(i(200));
            return Bu(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Iu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Ur(8 === e.nodeType ? e.parentNode : e),
              new Xu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return cu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              l = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, o, l)),
              (e[ha] = t.current),
              Ur(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (cu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          l =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: l.current,
          };
        }
        (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          l = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var x = (b.prototype = new y());
        (x.constructor = b), v(x, g.prototype), (x.isPureReactComponent = !0);
        var k = Array.isArray,
          w = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            l = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (l = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              w.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) i.children = r;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === i[a] && (i[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: l,
            props: i,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var j = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function N(e, t, a, i, o) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (o = o((s = e))),
              (e = "" === i ? "." + T(s, 0) : i),
              k(o)
                ? ((a = ""),
                  null != e && (a = e.replace(j, "$&/") + "/"),
                  N(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (P(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (s && s.key === o.key)
                          ? ""
                          : ("" + o.key).replace(j, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((s = 0), (i = "" === i ? "." : i + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + T((l = e[u]), u);
              s += N(l, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += N((l = l.value), t, a, (c = i + T(l, u++)), o);
          else if ("object" === l)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function R(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            N(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var M = { current: null },
          A = { transition: null },
          _ = {
            ReactCurrentDispatcher: M,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: R,
          forEach: function (e, t, n) {
            R(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              R(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              R(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (l = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                w.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: l,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return M.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return M.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return M.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return M.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return M.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return M.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return M.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return M.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return M.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return M.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return M.current.useRef(e);
          }),
          (t.useState = function (e) {
            return M.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return M.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return M.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var l = 2 * (r + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > i(s, n))
                u < a && 0 > i(c, s)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = s), (e[l] = n), (r = l));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function k(e) {
          if (((m = !1), x(e), !v))
            if (null !== r(u)) (v = !0), A(w);
            else {
              var t = r(c);
              null !== t && _(k, t.startTime - e);
            }
        }
        function w(e, n) {
          (v = !1), m && ((m = !1), y(P), (P = -1)), (h = !0);
          var i = p;
          try {
            for (
              x(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !N()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var l = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof l
                    ? (d.callback = l)
                    : d === r(u) && a(u),
                  x(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var s = !0;
            else {
              var f = r(c);
              null !== f && _(k, f.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          j = 5,
          T = -1;
        function N() {
          return !(t.unstable_now() - T < j);
        }
        function R() {
          if (null !== C) {
            var e = t.unstable_now();
            T = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(R);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            M = L.port2;
          (L.port1.onmessage = R),
            (S = function () {
              M.postMessage(null);
            });
        } else
          S = function () {
            g(R, 0);
          };
        function A(e) {
          (C = e), E || ((E = !0), S());
        }
        function _(e, n) {
          P = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), A(w));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (j = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (l = i + l),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (y(P), (P = -1)) : (m = !0), _(k, i - o)))
                : ((e.sortIndex = l), n(u, e), v || h || ((v = !0), A(w))),
              e
            );
          }),
          (t.unstable_shouldYield = N),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  !(function () {
    var e,
      t = Object.getPrototypeOf
        ? function (e) {
            return Object.getPrototypeOf(e);
          }
        : function (e) {
            return e.__proto__;
          };
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var i = Object.create(null);
      n.r(i);
      var o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var l = 2 & a && r; "object" == typeof l && !~e.indexOf(l); l = t(l))
        Object.getOwnPropertyNames(l).forEach(function (e) {
          o[e] = function () {
            return r[e];
          };
        });
      return (
        (o.default = function () {
          return r;
        }),
        n.d(i, o),
        i
      );
    };
  })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/testingSample/"),
    (function () {
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250),
        i = n(184),
        o = function (e) {
          return (0, i.jsx)("div", {
            className: "Projectcards",
            children: (0, i.jsxs)("div", {
              className: "cards",
              children: [
                (0, i.jsx)("img", {
                  src: e.imgs,
                  alt: e.alt,
                  className: "cardimg",
                }),
                (0, i.jsx)("div", {
                  className: "cardname",
                  children: e.heading,
                }),
              ],
            }),
          });
        },
        l = n.p + "static/media/sampleProject.684fdbc05d859925c844.jpg",
        s = function () {
          return (0, i.jsxs)("div", {
            className: "Right",
            children: [
              (0, i.jsx)("div", { className: "rightmenu", children: "Works" }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
              (0, i.jsx)(o, { heading: "hello world", alt: "#", imgs: l }),
            ],
          });
        };
      function u(e) {
        if (Array.isArray(e)) return e;
      }
      function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function f(e, t) {
        if (e) {
          if ("string" === typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? c(e, t)
              : void 0
          );
        }
      }
      function d() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function p(e, t) {
        return (
          u(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = i.call(n)).done) &&
                    (l.push(r.value), l.length !== t);
                    s = !0
                  );
              } catch (c) {
                (u = !0), (a = c);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return l;
            }
          })(e, t) ||
          f(e, t) ||
          d()
        );
      }
      function h(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function v(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return c(e);
          })(e) ||
          h(e) ||
          f(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function m(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e) {
        return (
          (g =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          g(e)
        );
      }
      function y(e) {
        var t = (function (e, t) {
          if ("object" !== g(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== g(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === g(t) ? t : String(t);
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, y(r.key), r);
        }
      }
      function x(e, t, n) {
        return (
          t && b(e.prototype, t),
          n && b(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function k(e, t) {
        return (
          (k = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          k(e, t)
        );
      }
      function w(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && k(e, t);
      }
      function S(e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          S(e)
        );
      }
      function E() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function C(e, t) {
        if (t && ("object" === g(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function P(e) {
        var t = E();
        return function () {
          var n,
            r = S(e);
          if (t) {
            var a = S(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return C(this, n);
        };
      }
      function j(e, t, n) {
        return (
          (j = E()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && k(a, n.prototype), a;
              }),
          j.apply(null, arguments)
        );
      }
      function T(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (T = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return j(e, arguments, S(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              k(r, e)
            );
          }),
          T(e)
        );
      }
      function N(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = f(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          l = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function R() {
        return (
          (R = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          R.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var L,
        M = "popstate";
      function A(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function _(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function O(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function D(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          R(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? F(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function V(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function F(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function z(t, n, r, a) {
        void 0 === a && (a = {});
        var i = a,
          o = i.window,
          l = void 0 === o ? document.defaultView : o,
          s = i.v5Compat,
          u = void 0 !== s && s,
          c = l.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          var t = e.Pop,
            n = h();
          if (null != n) {
            var r = n - p;
            (f = t),
              (p = n),
              d && d({ action: f, location: g.location, delta: r });
          } else
            _(
              !1,
              "You are trying to block a POP navigation to a location that was not created by @remix-run/router. The block will fail silently in production, but in general you should do all navigation with the router (instead of using window.history.pushState directly) to avoid this situation."
            );
        }
        function m(e) {
          var t =
              "null" !== l.location.origin
                ? l.location.origin
                : l.location.href,
            n = "string" === typeof e ? e : V(e);
          return (
            A(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(R({}, c.state, { idx: p }), ""));
        var g = {
          get action() {
            return f;
          },
          get location() {
            return t(l, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              l.addEventListener(M, v),
              (d = e),
              function () {
                l.removeEventListener(M, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(l, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = D(g.location, t, n);
            r && r(a, t);
            var i = O(a, (p = h() + 1)),
              o = g.createHref(a);
            try {
              c.pushState(i, "", o);
            } catch (s) {
              l.location.assign(o);
            }
            u && d && d({ action: f, location: g.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = D(g.location, t, n);
            r && r(a, t);
            var i = O(a, (p = h())),
              o = g.createHref(a);
            c.replaceState(i, "", o),
              u && d && d({ action: f, location: g.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return g;
      }
      function I(e, t, n) {
        void 0 === n && (n = "/");
        var r = X(("string" === typeof t ? F(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = B(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = Q(a[o], q(r));
        return i;
      }
      function B(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, i) {
          var o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (A(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var l = ee([r, o.relativePath]),
            s = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (A(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".'
            ),
            B(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: $(l, e.index), routesMeta: s });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = N(U(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = r.value;
                  a(e, t, o);
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function U(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = u((n = t)) || h(n) || f(n) || d(),
          a = r[0],
          i = r.slice(1),
          o = a.endsWith("?"),
          l = a.replace(/\?$/, "");
        if (0 === i.length) return o ? [l, ""] : [l];
        var s = U(i.join("/")),
          c = [];
        return (
          c.push.apply(
            c,
            v(
              s.map(function (e) {
                return "" === e ? l : [l, e].join("/");
              })
            )
          ),
          o && c.push.apply(c, v(s)),
          c.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(L || (L = {}));
      var W = /^:\w+$/,
        H = function (e) {
          return "*" === e;
        };
      function $(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(H) && (r += -2),
          t && (r += 2),
          n
            .filter(function (e) {
              return !H(e);
            })
            .reduce(function (e, t) {
              return e + (W.test(t) ? 3 : "" === t ? 1 : 10);
            }, r)
        );
      }
      function Q(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var l = n[o],
            s = o === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = Y(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: s },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = l.route;
          i.push({
            params: r,
            pathname: ee([a, c.pathname]),
            pathnameBase: te(ee([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = ee([a, c.pathnameBase]));
        }
        return i;
      }
      function Y(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            K(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = p(n, 2),
          a = r[0],
          i = r[1],
          o = t.match(a);
        if (!o) return null;
        var l = o[0],
          s = l.replace(/(.)\/+$/, "$1"),
          u = o.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = u[n] || "";
              s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    K(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(u[n] || "", t)),
              e
            );
          }, {}),
          pathname: l,
          pathnameBase: s,
          pattern: e,
        };
      }
      function q(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            K(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function X(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function K(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function G(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Z(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function J(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = F(e))
            : (A(
                !(a = R({}, e)).pathname || !a.pathname.includes("?"),
                G("?", "pathname", "search", a)
              ),
              A(
                !a.pathname || !a.pathname.includes("#"),
                G("#", "pathname", "hash", a)
              ),
              A(
                !a.search || !a.search.includes("#"),
                G("#", "search", "hash", a)
              ));
        var i,
          o = "" === e || "" === a.pathname,
          l = o ? "/" : a.pathname;
        if (r || null == l) i = n;
        else {
          var s = t.length - 1;
          if (l.startsWith("..")) {
            for (var u = l.split("/"); ".." === u[0]; ) u.shift(), (s -= 1);
            a.pathname = u.join("/");
          }
          i = s >= 0 ? t[s] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? F(e) : e,
              r = n.pathname,
              a = n.search,
              i = void 0 === a ? "" : a,
              o = n.hash,
              l = void 0 === o ? "" : o,
              s = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: s, search: ne(i), hash: re(l) };
          })(a, i),
          f = l && "/" !== l && l.endsWith("/"),
          d = (o || "." === l) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var ee = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        te = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        ne = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        re = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        ae = (function (e) {
          w(n, e);
          var t = P(n);
          function n() {
            return m(this, n), t.apply(this, arguments);
          }
          return x(n);
        })(T(Error));
      var ie = x(function e(t, n, r, a) {
        m(this, e),
          void 0 === a && (a = !1),
          (this.status = t),
          (this.statusText = n || ""),
          (this.internal = a),
          r instanceof Error
            ? ((this.data = r.toString()), (this.error = r))
            : (this.data = r);
      });
      function oe(e) {
        return e instanceof ie;
      }
      var le = ["post", "put", "patch", "delete"],
        se = (new Set(le), ["get"].concat(le));
      new Set(se),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function ue() {
        return (
          (ue = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ue.apply(this, arguments)
        );
      }
      var ce =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        fe = t.useState,
        de = t.useEffect,
        pe = t.useLayoutEffect,
        he = t.useDebugValue;
      function ve(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !ce(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var me = t.createContext(null);
      var ge = t.createContext(null);
      var ye = t.createContext(null);
      var be = t.createContext(null);
      var xe = t.createContext(null);
      var ke = t.createContext({ outlet: null, matches: [] });
      var we = t.createContext(null);
      function Se() {
        return null != t.useContext(xe);
      }
      function Ee() {
        return Se() || A(!1), t.useContext(xe).location;
      }
      function Ce() {
        Se() || A(!1);
        var e = t.useContext(be),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(ke).matches,
          i = Ee().pathname,
          o = JSON.stringify(
            Z(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          l = t.useRef(!1);
        return (
          t.useEffect(function () {
            l.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), l.current))
                if ("number" !== typeof e) {
                  var a = J(e, JSON.parse(o), i, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : ee([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      function Pe(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(ke).matches,
          i = Ee().pathname,
          o = JSON.stringify(
            Z(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return J(e, JSON.parse(o), i, "path" === r);
          },
          [e, o, i, r]
        );
      }
      function je() {
        var e = (function () {
            var e,
              n = t.useContext(we),
              r = Ae(Ne.UseRouteError),
              a = _e(Ne.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = oe(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a },
          o = { padding: "2px 4px", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unhandled Thrown Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          t.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"),
          t.createElement(
            "p",
            null,
            "You can provide a way better UX than this when your app throws errors by providing your own\xa0",
            t.createElement("code", { style: o }, "errorElement"),
            " props on\xa0",
            t.createElement("code", { style: o }, "<Route>")
          )
        );
      }
      var Te,
        Ne,
        Re = (function (e) {
          w(r, e);
          var n = P(r);
          function r(e) {
            var t;
            return (
              m(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            x(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          ke.Provider,
                          { value: this.props.routeContext },
                          t.createElement(we.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function Le(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          i = t.useContext(me);
        return (
          i &&
            i.static &&
            i.staticContext &&
            r.route.errorElement &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(ke.Provider, { value: n }, a)
        );
      }
      function Me(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          o >= 0 || A(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, l) {
          var s = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            u = r ? o.route.errorElement || t.createElement(je, null) : null,
            c = n.concat(a.slice(0, l + 1)),
            f = function () {
              return t.createElement(
                Le,
                { match: o, routeContext: { outlet: e, matches: c } },
                s ? u : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === l)
            ? t.createElement(Re, {
                location: r.location,
                component: u,
                error: s,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Ae(e) {
        var n = t.useContext(ge);
        return n || A(!1), n;
      }
      function _e(e) {
        var n = (function (e) {
            var n = t.useContext(ke);
            return n || A(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || A(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Te || (Te = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Ne || (Ne = {}));
      var Oe;
      function De(e) {
        A(!1);
      }
      function Ve(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          l = n.location,
          s = n.navigationType,
          u = void 0 === s ? e.Pop : s,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        Se() && A(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof l && (l = F(l));
        var v = l,
          m = v.pathname,
          g = void 0 === m ? "/" : m,
          y = v.search,
          b = void 0 === y ? "" : y,
          x = v.hash,
          k = void 0 === x ? "" : x,
          w = v.state,
          S = void 0 === w ? null : w,
          E = v.key,
          C = void 0 === E ? "default" : E,
          P = t.useMemo(
            function () {
              var e = X(g, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: k, state: S, key: C };
            },
            [p, g, b, k, S, C]
          );
        return null == P
          ? null
          : t.createElement(
              be.Provider,
              { value: h },
              t.createElement(xe.Provider, {
                children: o,
                value: { location: P, navigationType: u },
              })
            );
      }
      function Fe(n) {
        var r = n.children,
          a = n.location,
          i = t.useContext(me);
        return (function (n, r) {
          Se() || A(!1);
          var a,
            i = t.useContext(be).navigator,
            o = t.useContext(ge),
            l = t.useContext(ke).matches,
            s = l[l.length - 1],
            u = s ? s.params : {},
            c = (s && s.pathname, s ? s.pathnameBase : "/"),
            f = (s && s.route, Ee());
          if (r) {
            var d,
              p = "string" === typeof r ? F(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              A(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = I(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Me(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: ee([
                      c,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : ee([
                            c,
                            i.encodeLocation
                              ? i.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              l,
              o || void 0
            );
          return r && m
            ? t.createElement(
                xe.Provider,
                {
                  value: {
                    location: ue(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(i && !r ? i.router.routes : Ie(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Oe || (Oe = {}));
      var ze = new Promise(function () {});
      t.Component;
      function Ie(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== De && A(!1),
                  e.props.index && e.props.children && A(!1);
                var i = [].concat(v(n), [a]),
                  o = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = Ie(e.props.children, i)),
                  r.push(o);
              } else r.push.apply(r, Ie(e.props.children, n));
          }),
          r
        );
      }
      function Be() {
        return (
          (Be = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Be.apply(this, arguments)
        );
      }
      function Ue(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var We = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        He = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function $e(e) {
        var n,
          r = e.basename,
          a = e.children,
          i = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            z(
              function (e, t) {
                var n = e.location;
                return D(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : V(t);
              },
              null,
              n
            )));
        var l = o.current,
          s = p(t.useState({ action: l.action, location: l.location }), 2),
          u = s[0],
          c = s[1];
        return (
          t.useLayoutEffect(
            function () {
              return l.listen(c);
            },
            [l]
          ),
          t.createElement(Ve, {
            basename: r,
            children: a,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      var Qe = t.forwardRef(function (e, n) {
        var r = e.onClick,
          a = e.relative,
          i = e.reloadDocument,
          o = e.replace,
          l = e.state,
          s = e.target,
          u = e.to,
          c = e.preventScrollReset,
          f = Ue(e, We),
          d = (function (e, n) {
            var r = (void 0 === n ? {} : n).relative;
            Se() || A(!1);
            var a = t.useContext(be),
              i = a.basename,
              o = a.navigator,
              l = Pe(e, { relative: r }),
              s = l.hash,
              u = l.pathname,
              c = l.search,
              f = u;
            return (
              "/" !== i && (f = "/" === u ? i : ee([i, u])),
              o.createHref({ pathname: f, search: c, hash: s })
            );
          })(u, { relative: a }),
          p = (function (e, n) {
            var r = void 0 === n ? {} : n,
              a = r.target,
              i = r.replace,
              o = r.state,
              l = r.preventScrollReset,
              s = r.relative,
              u = Ce(),
              c = Ee(),
              f = Pe(e, { relative: s });
            return t.useCallback(
              function (t) {
                if (
                  (function (e, t) {
                    return (
                      0 === e.button &&
                      (!t || "_self" === t) &&
                      !(function (e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e)
                    );
                  })(t, a)
                ) {
                  t.preventDefault();
                  var n = void 0 !== i ? i : V(c) === V(f);
                  u(e, {
                    replace: n,
                    state: o,
                    preventScrollReset: l,
                    relative: s,
                  });
                }
              },
              [c, u, f, i, o, a, e, l, s]
            );
          })(u, {
            replace: o,
            state: l,
            target: s,
            preventScrollReset: c,
            relative: a,
          });
        return t.createElement(
          "a",
          Be({}, f, {
            href: d,
            onClick: i
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || p(e);
                },
            ref: n,
            target: s,
          })
        );
      });
      var Ye = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          l = e.className,
          s = void 0 === l ? "" : l,
          u = e.end,
          c = void 0 !== u && u,
          f = e.style,
          d = e.to,
          p = e.children,
          h = Ue(e, He),
          v = Pe(d, { relative: h.relative }),
          m = Ee(),
          g = t.useContext(ge),
          y = t.useContext(be).navigator,
          b = y.encodeLocation ? y.encodeLocation(v).pathname : v.pathname,
          x = m.pathname,
          k =
            g && g.navigation && g.navigation.location
              ? g.navigation.location.pathname
              : null;
        o ||
          ((x = x.toLowerCase()),
          (k = k ? k.toLowerCase() : null),
          (b = b.toLowerCase()));
        var w,
          S = x === b || (!c && x.startsWith(b) && "/" === x.charAt(b.length)),
          E =
            null != k &&
            (k === b || (!c && k.startsWith(b) && "/" === k.charAt(b.length))),
          C = S ? a : void 0;
        w =
          "function" === typeof s
            ? s({ isActive: S, isPending: E })
            : [s, S ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var P = "function" === typeof f ? f({ isActive: S, isPending: E }) : f;
        return t.createElement(
          Qe,
          Be({}, h, {
            "aria-current": C,
            className: w,
            ref: n,
            style: P,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: S, isPending: E }) : p
        );
      });
      var qe, Xe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(qe || (qe = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Xe || (Xe = {}));
      var Ke = function (e) {
          return (0, i.jsx)("div", {
            className: "Center",
            children: (0, i.jsx)("div", {
              className: "mobpadding",
              children: e.children,
            }),
          });
        },
        Ge = (1 / 60) * 1e3,
        Ze =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        Je =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(Ze());
                }, Ge);
              };
      var et = { delta: 0, timestamp: 0 },
        tt = !0,
        nt = !1,
        rt = !1,
        at = ["read", "update", "preRender", "render", "postRender"],
        it = at.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                l = {
                  schedule: function (e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      l = i ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === l.indexOf(e) &&
                        (l.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (s) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(s), o.has(f) && (l.schedule(f), e());
                        }
                      (a = !1), i && ((i = !1), l.process(s));
                    }
                  },
                };
              return l;
            })(function () {
              return (nt = !0);
            })),
            e
          );
        }, {}),
        ot = at.reduce(function (e, t) {
          var n = it[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return nt || ft(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        lt = at.reduce(function (e, t) {
          return (e[t] = it[t].cancel), e;
        }, {}),
        st = at.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return it[t].process(et);
            }),
            e
          );
        }, {}),
        ut = function (e) {
          return it[e].process(et);
        },
        ct = function e(t) {
          (nt = !1),
            (et.delta = tt ? Ge : Math.max(Math.min(t - et.timestamp, 40), 1)),
            (et.timestamp = t),
            (rt = !0),
            at.forEach(ut),
            (rt = !1),
            nt && ((tt = !1), Je(e));
        },
        ft = function () {
          (nt = !0), (tt = !0), rt || Je(ct);
        },
        dt = "undefined" !== typeof document,
        pt = dt ? t.useLayoutEffect : t.useEffect;
      function ht() {
        var e = (0, t.useRef)(!1);
        return (
          pt(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          e
        );
      }
      var vt = (0, t.createContext)(null);
      function mt(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var gt = (function (e) {
        w(n, e);
        var t = P(n);
        function n() {
          return m(this, n), t.apply(this, arguments);
        }
        return (
          x(n, [
            {
              key: "getSnapshotBeforeUpdate",
              value: function (e) {
                var t = this.props.childRef.current;
                if (t && e.isPresent && !this.props.isPresent) {
                  var n = this.props.sizeRef.current;
                  (n.height = t.offsetHeight || 0),
                    (n.width = t.offsetWidth || 0),
                    (n.top = t.offsetTop),
                    (n.left = t.offsetLeft);
                }
                return null;
              },
            },
            { key: "componentDidUpdate", value: function () {} },
            {
              key: "render",
              value: function () {
                return this.props.children;
              },
            },
          ]),
          n
        );
      })(t.Component);
      function yt(e) {
        var n = e.children,
          r = e.isPresent,
          a = (0, t.useId)(),
          i = (0, t.useRef)(null),
          o = (0, t.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, t.useInsertionEffect)(
            function () {
              var e = o.current,
                t = e.width,
                n = e.height,
                l = e.top,
                s = e.left;
              if (!r && i.current && t && n) {
                i.current.dataset.motionPopId = a;
                var u = document.createElement("style");
                return (
                  document.head.appendChild(u),
                  u.sheet &&
                    u.sheet.insertRule(
                      '\n          [data-motion-pop-id="'
                        .concat(
                          a,
                          '"] {\n            position: absolute !important;\n            width: '
                        )
                        .concat(t, "px !important;\n            height: ")
                        .concat(n, "px !important;\n            top: ")
                        .concat(l, "px !important;\n            left: ")
                        .concat(s, "px !important;\n          }\n        ")
                    ),
                  function () {
                    document.head.removeChild(u);
                  }
                );
              }
            },
            [r]
          ),
          t.createElement(
            gt,
            { isPresent: r, childRef: i, sizeRef: o },
            t.cloneElement(n, { ref: i })
          )
        );
      }
      var bt = function (e) {
        var n = e.children,
          r = e.initial,
          a = e.isPresent,
          i = e.onExitComplete,
          o = e.custom,
          l = e.presenceAffectsLayout,
          s = e.mode,
          u = mt(xt),
          c = (0, t.useId)(),
          f = (0, t.useMemo)(
            function () {
              return {
                id: c,
                initial: r,
                isPresent: a,
                custom: o,
                onExitComplete: function (e) {
                  u.set(e, !0);
                  var t,
                    n = N(u.values());
                  try {
                    for (n.s(); !(t = n.n()).done; ) {
                      if (!t.value) return;
                    }
                  } catch (r) {
                    n.e(r);
                  } finally {
                    n.f();
                  }
                  i && i();
                },
                register: function (e) {
                  return (
                    u.set(e, !1),
                    function () {
                      return u.delete(e);
                    }
                  );
                },
              };
            },
            l ? void 0 : [a]
          );
        return (
          (0, t.useMemo)(
            function () {
              u.forEach(function (e, t) {
                return u.set(t, !1);
              });
            },
            [a]
          ),
          t.useEffect(
            function () {
              !a && !u.size && i && i();
            },
            [a]
          ),
          "popLayout" === s && (n = t.createElement(yt, { isPresent: a }, n)),
          t.createElement(vt.Provider, { value: f }, n)
        );
      };
      function xt() {
        return new Map();
      }
      var kt = (0, t.createContext)({});
      function wt(e) {
        return (0, t.useEffect)(function () {
          return function () {
            return e();
          };
        }, []);
      }
      var St = function (e) {
        return e.key || "";
      };
      var Et = function (e) {
          var n = e.children,
            r = e.custom,
            a = e.initial,
            i = void 0 === a || a,
            o = e.onExitComplete,
            l = e.exitBeforeEnter,
            s = e.presenceAffectsLayout,
            u = void 0 === s || s,
            c = e.mode,
            f = void 0 === c ? "sync" : c;
          l && (f = "wait");
          var d = (function () {
              var e = ht(),
                n = p((0, t.useState)(0), 2),
                r = n[0],
                a = n[1],
                i = (0, t.useCallback)(
                  function () {
                    e.current && a(r + 1);
                  },
                  [r]
                );
              return [
                (0, t.useCallback)(
                  function () {
                    return ot.postRender(i);
                  },
                  [i]
                ),
                r,
              ];
            })(),
            h = p(d, 1)[0],
            m = (0, t.useContext)(kt).forceRender;
          m && (h = m);
          var g = ht(),
            y = (function (e) {
              var n = [];
              return (
                t.Children.forEach(e, function (e) {
                  (0, t.isValidElement)(e) && n.push(e);
                }),
                n
              );
            })(n),
            b = y,
            x = new Set(),
            k = (0, t.useRef)(b),
            w = (0, t.useRef)(new Map()).current,
            S = (0, t.useRef)(!0);
          if (
            (pt(function () {
              (S.current = !1),
                (function (e, t) {
                  e.forEach(function (e) {
                    var n = St(e);
                    t.set(n, e);
                  });
                })(y, w),
                (k.current = b);
            }),
            wt(function () {
              (S.current = !0), w.clear(), x.clear();
            }),
            S.current)
          )
            return t.createElement(
              t.Fragment,
              null,
              b.map(function (e) {
                return t.createElement(
                  bt,
                  {
                    key: St(e),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: u,
                    mode: f,
                  },
                  e
                );
              })
            );
          b = v(b);
          for (
            var E = k.current.map(St), C = y.map(St), P = E.length, j = 0;
            j < P;
            j++
          ) {
            var T = E[j];
            -1 === C.indexOf(T) && x.add(T);
          }
          return (
            "wait" === f && x.size && (b = []),
            x.forEach(function (e) {
              if (-1 === C.indexOf(e)) {
                var n = w.get(e);
                if (n) {
                  var a = E.indexOf(e);
                  b.splice(
                    a,
                    0,
                    t.createElement(
                      bt,
                      {
                        key: St(n),
                        isPresent: !1,
                        onExitComplete: function () {
                          w.delete(e), x.delete(e);
                          var t = k.current.findIndex(function (t) {
                            return t.key === e;
                          });
                          if ((k.current.splice(t, 1), !x.size)) {
                            if (((k.current = y), !1 === g.current)) return;
                            h(), o && o();
                          }
                        },
                        custom: r,
                        presenceAffectsLayout: u,
                        mode: f,
                      },
                      n
                    )
                  );
                }
              }
            }),
            (b = b.map(function (e) {
              var n = e.key;
              return x.has(n)
                ? e
                : t.createElement(
                    bt,
                    {
                      key: St(e),
                      isPresent: !0,
                      presenceAffectsLayout: u,
                      mode: f,
                    },
                    e
                  );
            })),
            t.createElement(
              t.Fragment,
              null,
              x.size
                ? b
                : b.map(function (e) {
                    return (0, t.cloneElement)(e);
                  })
            )
          );
        },
        Ct = function (e) {
          var n = e.children,
            r = p((0, t.useState)(!1), 2),
            a = r[0],
            o = r[1],
            l = (0, t.useRef)();
          return (
            (0, t.useEffect)(function () {
              var e = function (e) {
                l.current.contains(e.target) || o(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                function () {
                  document.removeEventListener("mousedown", e);
                }
              );
            }),
            (0, i.jsx)(Et, {
              children: (0, i.jsxs)("div", {
                className: "main-body",
                children: [
                  (0, i.jsx)("div", {
                    className: a ? "Left-open" : "Left",
                    ref: l,
                    children: (0, i.jsxs)("div", {
                      className: "sidebar",
                      children: [
                        (0, i.jsx)("k", {
                          className: "toggler",
                          onClick: function () {
                            return o(function (e) {
                              return !e;
                            });
                          },
                          children: (0, i.jsxs)("label", {
                            for: "check",
                            children: [
                              (0, i.jsx)("span", { className: "menuline" }),
                              (0, i.jsx)("span", { className: "menuline" }),
                              (0, i.jsx)("span", { className: "menuline" }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "nameheading",
                          children: "Shubham",
                        }),
                        (0, i.jsxs)("div", {
                          className: "navbar",
                          children: [
                            (0, i.jsx)("div", {
                              className: "leftmenu",
                              children: (0, i.jsx)("h4", { children: "Menu" }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "leftmenuoptions",
                              children: [
                                (0, i.jsx)(Ye, {
                                  to: "/Home",
                                  children: "Home",
                                }),
                                (0, i.jsx)(Ye, {
                                  to: "/About",
                                  children: "About",
                                }),
                                (0, i.jsx)(Ye, {
                                  to: "/Skills",
                                  children: "Skills",
                                }),
                                (0, i.jsx)(Ye, {
                                  to: "/Achievements",
                                  children: "Achievements",
                                }),
                                (0, i.jsx)(Ye, {
                                  to: "/Projects",
                                  children: "Projects",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "navbar",
                          children: [
                            (0, i.jsx)("div", {
                              className: "leftmenu",
                              children: (0, i.jsx)("h4", {
                                children: "Contact me",
                              }),
                            }),
                            (0, i.jsxs)("div", {
                              className: "leftmenuoptions",
                              children: [
                                (0, i.jsx)(Ye, {
                                  to: "/Contact",
                                  children: "Contact",
                                }),
                                (0, i.jsx)(Ye, { to: "/", children: "email" }),
                                (0, i.jsx)(Ye, {
                                  to: "/",
                                  children: "linkedin",
                                }),
                                (0, i.jsx)(Ye, { to: "/", children: "github" }),
                                (0, i.jsx)(Ye, { to: "/", children: "resume" }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "followme",
                          children: "contact me",
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "Centerpanel",
                    children: (0, i.jsx)(Ke, {
                      children: (0, i.jsx)("main", { children: n }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        Pt = n.p + "static/media/sampleProject.684fdbc05d859925c844.jpg";
      function jt(e, t, n) {
        return (
          (t = y(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Tt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Nt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Tt(Object(n), !0).forEach(function (t) {
                jt(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Tt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Rt = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        Lt = (0, t.createContext)({});
      var Mt = (0, t.createContext)({ strict: !1 });
      function At(e, n, r, a) {
        var i = (0, t.useContext)(Lt).visualElement,
          o = (0, t.useContext)(Mt),
          l = (0, t.useContext)(vt),
          s = (0, t.useContext)(Rt).reducedMotion,
          u = (0, t.useRef)();
        (a = a || o.renderer),
          !u.current &&
            a &&
            (u.current = a(e, {
              visualState: n,
              parent: i,
              props: r,
              presenceId: l ? l.id : void 0,
              blockInitialAnimation: !!l && !1 === l.initial,
              reducedMotionConfig: s,
            }));
        var c = u.current;
        return (
          pt(function () {
            c && c.render();
          }),
          (window.HandoffAppearAnimations ? pt : t.useEffect)(function () {
            c && c.animationState && c.animationState.animateChanges();
          }),
          c
        );
      }
      function _t(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function Ot(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function Dt(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var Vt = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function Ft(e) {
        return (
          Dt(e.animate) ||
          Vt.some(function (t) {
            return Ot(e[t]);
          })
        );
      }
      function zt(e) {
        return Boolean(Ft(e) || e.variants);
      }
      function It(e) {
        var n = (function (e, t) {
            if (Ft(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || Ot(n) ? n : void 0,
                animate: Ot(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)(Lt)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [Bt(r), Bt(a)]
        );
      }
      function Bt(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var Ut = function (e) {
          return {
            isEnabled: function (t) {
              return e.some(function (e) {
                return !!t[e];
              });
            },
          };
        },
        Wt = {
          measureLayout: Ut(["layout", "layoutId", "drag"]),
          animation: Ut([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: Ut(["exit"]),
          drag: Ut(["drag", "dragControls"]),
          focus: Ut(["whileFocus"]),
          hover: Ut(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: Ut(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: Ut(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: Ut(["whileInView", "onViewportEnter", "onViewportLeave"]),
        };
      var Ht = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        $t = 1;
      var Qt = (function (e) {
          w(n, e);
          var t = P(n);
          function n() {
            return m(this, n), t.apply(this, arguments);
          }
          return (
            x(n, [
              {
                key: "getSnapshotBeforeUpdate",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.props;
                  return t && t.setProps(n), null;
                },
              },
              { key: "componentDidUpdate", value: function () {} },
              {
                key: "render",
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(t.Component),
        Yt = (0, t.createContext)({}),
        qt = Symbol.for("motionComponentSymbol");
      function Xt(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.projectionNodeConstructor,
          i = e.useRender,
          o = e.useVisualState,
          l = e.Component;
        n &&
          (function (e) {
            for (var t in e)
              "projectionNodeConstructor" === t
                ? (Wt.projectionNodeConstructor = e[t])
                : (Wt[t].Component = e[t]);
          })(n);
        var s = (0, t.forwardRef)(function (e, s) {
          var u = Nt(
              Nt(Nt({}, (0, t.useContext)(Rt)), e),
              {},
              { layoutId: Kt(e) }
            ),
            c = u.isStatic,
            f = null,
            d = It(e),
            p = c
              ? void 0
              : mt(function () {
                  if (Ht.hasEverUpdated) return $t++;
                }),
            h = o(e, c);
          if (!c && dt) {
            d.visualElement = At(l, h, u, r);
            var v = (0, t.useContext)(Mt).strict,
              m = (0, t.useContext)(Yt);
            d.visualElement &&
              (f = d.visualElement.loadFeatures(
                u,
                v,
                n,
                p,
                a || Wt.projectionNodeConstructor,
                m
              ));
          }
          return t.createElement(
            Qt,
            { visualElement: d.visualElement, props: u },
            f,
            t.createElement(
              Lt.Provider,
              { value: d },
              i(
                l,
                e,
                p,
                (function (e, n, r) {
                  return (0, t.useCallback)(
                    function (t) {
                      t && e.mount && e.mount(t),
                        n && (t ? n.mount(t) : n.unmount()),
                        r &&
                          ("function" === typeof r
                            ? r(t)
                            : _t(r) && (r.current = t));
                    },
                    [n]
                  );
                })(h, d.visualElement, s),
                h,
                c,
                d.visualElement
              )
            )
          );
        });
        return (s[qt] = l), s;
      }
      function Kt(e) {
        var n = e.layoutId,
          r = (0, t.useContext)(kt).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function Gt(e) {
        function t(t) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Xt(e(t, n));
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var Zt = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function Jt(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(Zt.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var en = {};
      var tn = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        nn = new Set(tn);
      function rn(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          nn.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!en[e] || "opacity" === e))
        );
      }
      var an = function (e) {
          return !!(null === e || void 0 === e ? void 0 : e.getVelocity);
        },
        on = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ln = function (e, t) {
          return tn.indexOf(e) - tn.indexOf(t);
        };
      function sn(e) {
        return e.startsWith("--");
      }
      var un = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        cn = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        fn = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        dn = Nt(
          Nt({}, fn),
          {},
          {
            transform: function (e) {
              return cn(0, 1, e);
            },
          }
        ),
        pn = Nt(Nt({}, fn), {}, { default: 1 }),
        hn = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        vn = /(-)?([\d]*\.?[\d])+/g,
        mn =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        gn =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function yn(e) {
        return "string" === typeof e;
      }
      var bn = function (e) {
          return {
            test: function (t) {
              return yn(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        xn = bn("deg"),
        kn = bn("%"),
        wn = bn("px"),
        Sn = bn("vh"),
        En = bn("vw"),
        Cn = Nt(
          Nt({}, kn),
          {},
          {
            parse: function (e) {
              return kn.parse(e) / 100;
            },
            transform: function (e) {
              return kn.transform(100 * e);
            },
          }
        ),
        Pn = Nt(Nt({}, fn), {}, { transform: Math.round }),
        jn = {
          borderWidth: wn,
          borderTopWidth: wn,
          borderRightWidth: wn,
          borderBottomWidth: wn,
          borderLeftWidth: wn,
          borderRadius: wn,
          radius: wn,
          borderTopLeftRadius: wn,
          borderTopRightRadius: wn,
          borderBottomRightRadius: wn,
          borderBottomLeftRadius: wn,
          width: wn,
          maxWidth: wn,
          height: wn,
          maxHeight: wn,
          size: wn,
          top: wn,
          right: wn,
          bottom: wn,
          left: wn,
          padding: wn,
          paddingTop: wn,
          paddingRight: wn,
          paddingBottom: wn,
          paddingLeft: wn,
          margin: wn,
          marginTop: wn,
          marginRight: wn,
          marginBottom: wn,
          marginLeft: wn,
          rotate: xn,
          rotateX: xn,
          rotateY: xn,
          rotateZ: xn,
          scale: pn,
          scaleX: pn,
          scaleY: pn,
          scaleZ: pn,
          skew: xn,
          skewX: xn,
          skewY: xn,
          distance: wn,
          translateX: wn,
          translateY: wn,
          translateZ: wn,
          x: wn,
          y: wn,
          z: wn,
          perspective: wn,
          transformPerspective: wn,
          opacity: dn,
          originX: Cn,
          originY: Cn,
          originZ: wn,
          zIndex: Pn,
          fillOpacity: dn,
          strokeOpacity: dn,
          numOctaves: Pn,
        };
      function Tn(e, t, n, r) {
        var a = e.style,
          i = e.vars,
          o = e.transform,
          l = e.transformKeys,
          s = e.transformOrigin;
        l.length = 0;
        var u = !1,
          c = !1,
          f = !0;
        for (var d in t) {
          var p = t[d];
          if (sn(d)) i[d] = p;
          else {
            var h = jn[d],
              v = un(p, h);
            if (nn.has(d)) {
              if (((u = !0), (o[d] = v), l.push(d), !f)) continue;
              p !== (h.default || 0) && (f = !1);
            } else d.startsWith("origin") ? ((c = !0), (s[d] = v)) : (a[d] = v);
          }
        }
        if (
          (t.transform ||
            (u || r
              ? (a.transform = (function (e, t, n, r) {
                  var a = e.transform,
                    i = e.transformKeys,
                    o = t.enableHardwareAcceleration,
                    l = void 0 === o || o,
                    s = t.allowTransformNone,
                    u = void 0 === s || s,
                    c = "";
                  i.sort(ln);
                  var f,
                    d = N(i);
                  try {
                    for (d.s(); !(f = d.n()).done; ) {
                      var p = f.value;
                      c += "".concat(on[p] || p, "(").concat(a[p], ") ");
                    }
                  } catch (h) {
                    d.e(h);
                  } finally {
                    d.f();
                  }
                  return (
                    l && !a.z && (c += "translateZ(0)"),
                    (c = c.trim()),
                    r ? (c = r(a, n ? "" : c)) : u && n && (c = "none"),
                    c
                  );
                })(e, n, f, r))
              : a.transform && (a.transform = "none")),
          c)
        ) {
          var m = s.originX,
            g = void 0 === m ? "50%" : m,
            y = s.originY,
            b = void 0 === y ? "50%" : y,
            x = s.originZ,
            k = void 0 === x ? 0 : x;
          a.transformOrigin = "".concat(g, " ").concat(b, " ").concat(k);
        }
      }
      var Nn = function () {
        return {
          style: {},
          transform: {},
          transformKeys: [],
          transformOrigin: {},
          vars: {},
        };
      };
      function Rn(e, t, n) {
        for (var r in t) an(t[r]) || rn(r, n) || (e[r] = t[r]);
      }
      function Ln(e, n, r) {
        var a = {};
        return (
          Rn(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {},
                  };
                  return (
                    Tn(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues ? e.transformValues(a) : a
        );
      }
      function Mn(e, t, n) {
        var r = {},
          a = Ln(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          (r.style = a),
          r
        );
      }
      var An = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "viewport",
      ]);
      function _n(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          An.has(e)
        );
      }
      var On,
        Dn = function (e) {
          return !_n(e);
        };
      try {
        (On = require("@emotion/is-prop-valid").default) &&
          (Dn = function (e) {
            return e.startsWith("on") ? !_n(e) : On(e);
          });
      } catch (uu) {}
      function Vn(e, t, n) {
        var r = {};
        for (var a in e)
          ("values" === a && "object" === typeof e.values) ||
            ((Dn(a) ||
              (!0 === n && _n(a)) ||
              (!t && !_n(a)) ||
              (e.draggable && a.startsWith("onDrag"))) &&
              (r[a] = e[a]));
        return r;
      }
      function Fn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function zn(e, t, n) {
        return "string" === typeof e ? e : wn.transform(t + n * e);
      }
      var In = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        Bn = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var Un = [
        "attrX",
        "attrY",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function Wn(e, t, n, r, a) {
        var i = t.attrX,
          o = t.attrY,
          l = t.originX,
          s = t.originY,
          u = t.pathLength,
          c = t.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = t.pathOffset,
          p = void 0 === d ? 0 : d;
        if ((Tn(e, Fn(t, Un), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var h = e.attrs,
            v = e.style,
            m = e.dimensions;
          h.transform && (m && (v.transform = h.transform), delete h.transform),
            m &&
              (void 0 !== l || void 0 !== s || v.transform) &&
              (v.transformOrigin = (function (e, t, n) {
                var r = zn(t, e.x, e.width),
                  a = zn(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(m, void 0 !== l ? l : 0.5, void 0 !== s ? s : 0.5)),
            void 0 !== i && (h.x = i),
            void 0 !== o && (h.y = o),
            void 0 !== u &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var i = a ? In : Bn;
                e[i.offset] = wn.transform(-r);
                var o = wn.transform(t),
                  l = wn.transform(n);
                e[i.array] = "".concat(o, " ").concat(l);
              })(h, u, f, p, !1);
        }
      }
      var Hn = function () {
          return Nt(
            Nt(
              {},
              {
                style: {},
                transform: {},
                transformKeys: [],
                transformOrigin: {},
                vars: {},
              }
            ),
            {},
            { attrs: {} }
          );
        },
        $n = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function Qn(e, n, r, a) {
        var i = (0, t.useMemo)(
          function () {
            var t = Hn();
            return (
              Wn(
                t,
                n,
                { enableHardwareAcceleration: !1 },
                $n(a),
                e.transformTemplate
              ),
              Nt(Nt({}, t.attrs), {}, { style: Nt({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var o = {};
          Rn(o, e.style, e), (i.style = Nt(Nt({}, o), i.style));
        }
        return i;
      }
      function Yn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          n = function (n, r, a, i, o, l) {
            var s = o.latestValues,
              u = (Jt(n) ? Qn : Mn)(r, s, l, n),
              c = Nt(
                Nt(Nt({}, Vn(r, "string" === typeof n, e)), u),
                {},
                { ref: i }
              ),
              f = r.children,
              d = (0, t.useMemo)(
                function () {
                  return an(f) ? f.get() : f;
                },
                [f]
              );
            return (
              a && (c["data-projection-id"] = a),
              (0, t.createElement)(n, Nt(Nt({}, c), {}, { children: d }))
            );
          };
        return n;
      }
      var qn = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function Xn(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        i))
          e.style.setProperty(o, i[o]);
      }
      var Kn = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function Gn(e, t, n, r) {
        for (var a in (Xn(e, t, void 0, r), t.attrs))
          e.setAttribute(Kn.has(a) ? a : qn(a), t.attrs[a]);
      }
      function Zn(e, t) {
        var n = e.style,
          r = {};
        for (var a in n)
          (an(n[a]) || (t.style && an(t.style[a])) || rn(a, e)) &&
            (r[a] = n[a]);
        return r;
      }
      function Jn(e, t) {
        var n = Zn(e, t);
        for (var r in e) {
          if (an(e[r]) || an(t[r]))
            n["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = e[r];
        }
        return n;
      }
      function er(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var tr = function (e) {
        return Array.isArray(e);
      };
      function nr(e) {
        var t,
          n = an(e) ? e.get() : e;
        return (
          (t = n),
          Boolean(t && "object" === typeof t && t.mix && t.toValue)
            ? n.toValue()
            : n
        );
      }
      var rr = ["transitionEnd", "transition"];
      var ar = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)(Lt),
            i = (0, t.useContext)(vt),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  i = e.createRenderState,
                  o = e.onMount,
                  l = { latestValues: ir(t, n, r, a), renderState: i() };
                return (
                  o &&
                    (l.mount = function (e) {
                      return o(t, e, l);
                    }),
                  l
                );
              })(e, n, a, i);
            };
          return r ? o() : mt(o);
        };
      };
      function ir(e, t, n, r) {
        var a = {},
          i = r(e, {});
        for (var o in i) a[o] = nr(i[o]);
        var l = e.initial,
          s = e.animate,
          u = Ft(e),
          c = zt(e);
        t &&
          c &&
          !u &&
          !1 !== e.inherit &&
          (void 0 === l && (l = t.initial), void 0 === s && (s = t.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === l) ? s : l;
        d &&
          "boolean" !== typeof d &&
          !Dt(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (t) {
            var n = er(e, t);
            if (n) {
              var r = n.transitionEnd,
                i = (n.transition, Fn(n, rr));
              for (var o in i) {
                var l = i[o];
                if (Array.isArray(l)) l = l[f ? l.length - 1 : 0];
                null !== l && (a[o] = l);
              }
              for (var s in r) a[s] = r[s];
            }
          });
        return a;
      }
      var or,
        lr = {
          useVisualState: ar({
            scrapeMotionValuesFromProps: Jn,
            createRenderState: Hn,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              Wn(
                r,
                a,
                { enableHardwareAcceleration: !1 },
                $n(t.tagName),
                e.transformTemplate
              ),
                Gn(t, r);
            },
          }),
        },
        sr = {
          useVisualState: ar({
            scrapeMotionValuesFromProps: Zn,
            createRenderState: Nn,
          }),
        };
      function ur(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      function cr(e, n, r, a) {
        (0, t.useEffect)(
          function () {
            var t = e.current;
            if (r && t) return ur(t, n, r, a);
          },
          [e, n, r, a]
        );
      }
      !(function (e) {
        (e.Animate = "animate"),
          (e.Hover = "whileHover"),
          (e.Tap = "whileTap"),
          (e.Drag = "whileDrag"),
          (e.Focus = "whileFocus"),
          (e.InView = "whileInView"),
          (e.Exit = "exit");
      })(or || (or = {}));
      var fr = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function dr(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var pr = function (e) {
        return function (t) {
          return fr(t) && e(t, dr(t));
        };
      };
      function hr(e, t, n, r) {
        return ur(e, t, pr(n), r);
      }
      function vr(e, t, n, r) {
        return cr(e, t, n && pr(n), r);
      }
      function mr(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var gr = mr("dragHorizontal"),
        yr = mr("dragVertical");
      function br(e) {
        var t = !1;
        if ("y" === e) t = yr();
        else if ("x" === e) t = gr();
        else {
          var n = gr(),
            r = yr();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function xr() {
        var e = br(!0);
        return !e || (e(), !1);
      }
      function kr(e, t, n, r) {
        return function (a, i) {
          "touch" === a.type ||
            xr() ||
            (n && e.animationState && e.animationState.setActive(or.Hover, t),
            r && r(a, i));
        };
      }
      var wr = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        },
        Sr = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        Er = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(Sr);
        },
        Cr = [
          "onTap",
          "onTapStart",
          "onTapCancel",
          "whileTap",
          "visualElement",
        ];
      var Pr = ["root"],
        jr = new WeakMap(),
        Tr = new WeakMap(),
        Nr = function (e) {
          var t = jr.get(e.target);
          t && t(e);
        },
        Rr = function (e) {
          e.forEach(Nr);
        };
      function Lr(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = Fn(e, Pr),
            r = t || document;
          Tr.has(r) || Tr.set(r, {});
          var a = Tr.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(Rr, Nt({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          jr.set(e, n),
          r.observe(e),
          function () {
            jr.delete(e), r.unobserve(e);
          }
        );
      }
      var Mr = { some: 0, all: 1 };
      function Ar(e, n, r, a) {
        var i = a.root,
          o = a.margin,
          l = a.amount,
          s = void 0 === l ? "some" : l,
          u = a.once;
        (0, t.useEffect)(
          function () {
            if (e && r.current) {
              var t = {
                root: null === i || void 0 === i ? void 0 : i.current,
                rootMargin: o,
                threshold: "number" === typeof s ? s : Mr[s],
              };
              return Lr(r.current, t, function (e) {
                var t = e.isIntersecting;
                if (
                  n.isInView !== t &&
                  ((n.isInView = t), !u || t || !n.hasEnteredView)
                ) {
                  t && (n.hasEnteredView = !0),
                    r.animationState &&
                      r.animationState.setActive(or.InView, t);
                  var a = r.getProps(),
                    i = t ? a.onViewportEnter : a.onViewportLeave;
                  i && i(e);
                }
              });
            }
          },
          [e, i, o, s]
        );
      }
      function _r(e, n, r, a) {
        var i = a.fallback,
          o = void 0 === i || i;
        (0, t.useEffect)(
          function () {
            e &&
              o &&
              requestAnimationFrame(function () {
                n.hasEnteredView = !0;
                var e = r.getProps().onViewportEnter;
                e && e(null),
                  r.animationState && r.animationState.setActive(or.InView, !0);
              });
          },
          [e]
        );
      }
      var Or = function (e) {
          return function (t) {
            return e(t), null;
          };
        },
        Dr = {
          inView: Or(function (e) {
            var n = e.visualElement,
              r = e.whileInView,
              a = e.onViewportEnter,
              i = e.onViewportLeave,
              o = e.viewport,
              l = void 0 === o ? {} : o,
              s = (0, t.useRef)({ hasEnteredView: !1, isInView: !1 }),
              u = Boolean(r || a || i);
            l.once && s.current.hasEnteredView && (u = !1),
              ("undefined" === typeof IntersectionObserver ? _r : Ar)(
                u,
                s.current,
                n,
                l
              );
          }),
          tap: Or(function (e) {
            var n = e.onTap,
              r = e.onTapStart,
              a = e.onTapCancel,
              i = e.whileTap,
              o = e.visualElement,
              l = Fn(e, Cr),
              s = n || r || a || i,
              u = (0, t.useRef)(!1),
              c = (0, t.useRef)(null),
              f = { passive: !(r || n || a || l.onPointerDown) };
            function d() {
              c.current && c.current(), (c.current = null);
            }
            function p() {
              return (
                d(),
                (u.current = !1),
                o.getProps().whileTap &&
                  o.animationState &&
                  o.animationState.setActive(or.Tap, !1),
                !xr()
              );
            }
            function h(e, t) {
              var n, r, a, i;
              p() &&
                (wr(o.current, e.target)
                  ? null === (i = (a = o.getProps()).onTap) ||
                    void 0 === i ||
                    i.call(a, e, t)
                  : null === (r = (n = o.getProps()).onTapCancel) ||
                    void 0 === r ||
                    r.call(n, e, t));
            }
            function v(e, t) {
              var n, r;
              p() &&
                (null === (r = (n = o.getProps()).onTapCancel) ||
                  void 0 === r ||
                  r.call(n, e, t));
            }
            var m = (0, t.useCallback)(
              function (e, t) {
                var n;
                if ((d(), !u.current)) {
                  (u.current = !0),
                    (c.current = Er(
                      hr(window, "pointerup", h, f),
                      hr(window, "pointercancel", v, f)
                    ));
                  var r = o.getProps();
                  r.whileTap &&
                    o.animationState &&
                    o.animationState.setActive(or.Tap, !0),
                    null === (n = r.onTapStart) ||
                      void 0 === n ||
                      n.call(r, e, t);
                }
              },
              [Boolean(r), o]
            );
            vr(o, "pointerdown", s ? m : void 0, f), wt(d);
          }),
          focus: Or(function (e) {
            var n = e.whileFocus,
              r = e.visualElement,
              a = r.animationState,
              i = (0, t.useCallback)(
                function () {
                  a && a.setActive(or.Focus, !0);
                },
                [a]
              ),
              o = (0, t.useCallback)(
                function () {
                  a && a.setActive(or.Focus, !1);
                },
                [a]
              );
            cr(r, "focus", n ? i : void 0), cr(r, "blur", n ? o : void 0);
          }),
          hover: Or(function (e) {
            var n = e.onHoverStart,
              r = e.onHoverEnd,
              a = e.whileHover,
              i = e.visualElement;
            vr(
              i,
              "pointerenter",
              (0, t.useMemo)(
                function () {
                  return n || a ? kr(i, !0, Boolean(a), n) : void 0;
                },
                [n, Boolean(a), i]
              ),
              { passive: !n }
            ),
              vr(
                i,
                "pointerleave",
                (0, t.useMemo)(
                  function () {
                    return r || a ? kr(i, !1, Boolean(a), r) : void 0;
                  },
                  [n, Boolean(a), i]
                ),
                { passive: !r }
              );
          }),
        };
      function Vr() {
        var e = (0, t.useContext)(vt);
        if (null === e) return [!0, null];
        var n = e.isPresent,
          r = e.onExitComplete,
          a = e.register,
          i = (0, t.useId)();
        (0, t.useEffect)(function () {
          return a(i);
        }, []);
        return !n && r
          ? [
              !1,
              function () {
                return r && r(i);
              },
            ]
          : [!0];
      }
      function Fr(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var zr = function (e) {
        return /^0[^.\s]+$/.test(e);
      };
      function Ir(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Br(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Ur = (function () {
        function e() {
          m(this, e), (this.subscriptions = []);
        }
        return (
          x(e, [
            {
              key: "add",
              value: function (e) {
                var t = this;
                return (
                  Ir(this.subscriptions, e),
                  function () {
                    return Br(t.subscriptions, e);
                  }
                );
              },
            },
            {
              key: "notify",
              value: function (e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](e, t, n);
                  else
                    for (var a = 0; a < r; a++) {
                      var i = this.subscriptions[a];
                      i && i(e, t, n);
                    }
              },
            },
            {
              key: "getSize",
              value: function () {
                return this.subscriptions.length;
              },
            },
            {
              key: "clear",
              value: function () {
                this.subscriptions.length = 0;
              },
            },
          ]),
          e
        );
      })();
      function Wr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var Hr = function (e) {
          return !isNaN(parseFloat(e));
        },
        $r = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            m(this, e),
              (this.version = "8.5.4"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (n.prev = n.current), (n.current = e);
                var r = et.delta,
                  a = et.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = r),
                  (n.lastUpdated = a),
                  ot.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current &&
                    n.events.change &&
                    n.events.change.notify(n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()),
                  t &&
                    n.events.renderRequest &&
                    n.events.renderRequest.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return ot.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = Hr(this.current)),
              (this.owner = r.owner);
          }
          return (
            x(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new Ur());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          ot.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? Wr(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n) || null),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.animation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function Qr(e, t) {
        return new $r(e, t);
      }
      var Yr = function (e, t) {
          return function (n) {
            return Boolean(
              (yn(n) && gn.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        qr = function (e, t, n) {
          return function (r) {
            var a;
            if (!yn(r)) return r;
            var i = p(r.match(vn), 4),
              o = i[0],
              l = i[1],
              s = i[2],
              u = i[3];
            return (
              jt((a = {}), e, parseFloat(o)),
              jt(a, t, parseFloat(l)),
              jt(a, n, parseFloat(s)),
              jt(a, "alpha", void 0 !== u ? parseFloat(u) : 1),
              a
            );
          };
        },
        Xr = Nt(
          Nt({}, fn),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return cn(0, 255, e);
                })(e)
              );
            },
          }
        ),
        Kr = {
          test: Yr("rgb", "red"),
          parse: qr("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              Xr.transform(t) +
              ", " +
              Xr.transform(n) +
              ", " +
              Xr.transform(r) +
              ", " +
              hn(dn.transform(i)) +
              ")"
            );
          },
        };
      var Gr = {
          test: Yr("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: Kr.transform,
        },
        Zr = {
          test: Yr("hsl", "hue"),
          parse: qr("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              kn.transform(hn(n)) +
              ", " +
              kn.transform(hn(r)) +
              ", " +
              hn(dn.transform(i)) +
              ")"
            );
          },
        },
        Jr = {
          test: function (e) {
            return Kr.test(e) || Gr.test(e) || Zr.test(e);
          },
          parse: function (e) {
            return Kr.test(e)
              ? Kr.parse(e)
              : Zr.test(e)
              ? Zr.parse(e)
              : Gr.parse(e);
          },
          transform: function (e) {
            return yn(e)
              ? e
              : e.hasOwnProperty("red")
              ? Kr.transform(e)
              : Zr.transform(e);
          },
        },
        ea = "${c}",
        ta = "${n}";
      function na(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = 0,
          a = e.match(mn);
        a &&
          ((n = a.length),
          (e = e.replace(mn, ea)),
          t.push.apply(t, v(a.map(Jr.parse))));
        var i = e.match(vn);
        return (
          i &&
            ((r = i.length),
            (e = e.replace(vn, ta)),
            t.push.apply(t, v(i.map(fn.parse)))),
          { values: t, numColors: n, numNumbers: r, tokenised: e }
        );
      }
      function ra(e) {
        return na(e).values;
      }
      function aa(e) {
        var t = na(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = a, n = 0; n < i; n++)
            t = t.replace(
              n < r ? ea : ta,
              n < r ? Jr.transform(e[n]) : hn(e[n])
            );
          return t;
        };
      }
      var ia = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var oa = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              yn(e) &&
              ((null === (t = e.match(vn)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(mn)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: ra,
          createTransformer: aa,
          getAnimatableNone: function (e) {
            var t = ra(e);
            return aa(e)(t.map(ia));
          },
        },
        la = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function sa(e) {
        var t = p(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = p(r.match(vn) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          o = la.has(n) ? 1 : 0;
        return a !== r && (o *= 100), n + "(" + o + i + ")";
      }
      var ua = /([a-z-]*)\(.*?\)/g,
        ca = Nt(
          Nt({}, oa),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(ua);
              return t ? t.map(sa).join(" ") : e;
            },
          }
        ),
        fa = Nt(
          Nt({}, jn),
          {},
          {
            color: Jr,
            backgroundColor: Jr,
            outlineColor: Jr,
            fill: Jr,
            stroke: Jr,
            borderColor: Jr,
            borderTopColor: Jr,
            borderRightColor: Jr,
            borderBottomColor: Jr,
            borderLeftColor: Jr,
            filter: ca,
            WebkitFilter: ca,
          }
        ),
        da = function (e) {
          return fa[e];
        };
      function pa(e, t) {
        var n,
          r = da(e);
        return (
          r !== ca && (r = oa),
          null === (n = r.getAnimatableNone) || void 0 === n
            ? void 0
            : n.call(r, t)
        );
      }
      var ha = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        va = [
          fn,
          wn,
          kn,
          xn,
          En,
          Sn,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        ma = function (e) {
          return va.find(ha(e));
        },
        ga = [].concat(v(va), [Jr, oa]),
        ya = function (e) {
          return ga.find(ha(e));
        };
      function ba(e, t, n) {
        var r = e.getProps();
        return er(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var xa = ["transitionEnd", "transition"];
      function ka(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Qr(n));
      }
      function wa(e, t) {
        var n,
          r = ba(e, t),
          a = r ? e.makeTargetAnimatable(r, !1) : {},
          i = a.transitionEnd,
          o = void 0 === i ? {} : i,
          l = (a.transition, Fn(a, xa));
        for (var s in (l = Nt(Nt({}, l), o))) {
          ka(e, s, ((n = l[s]), tr(n) ? n[n.length - 1] || 0 : n));
        }
      }
      function Sa(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function Ea(e) {
        return Boolean(an(e) && e.add);
      }
      var Ca = "data-" + qn("framerAppearId");
      var Pa = function (e) {
          return 1e3 * e;
        },
        ja = !1,
        Ta = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        Na = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        Ra = function (e) {
          return e * e;
        },
        La = Na(Ra),
        Ma = Ta(Ra),
        Aa = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function _a(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var Oa = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Da = [Gr, Kr, Zr];
      function Va(e) {
        var t,
          n =
            ((t = e),
            Da.find(function (e) {
              return e.test(t);
            }));
        Boolean(n),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          );
        var r = n.parse(e);
        return (
          n === Zr &&
            (r = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var i = 0,
                o = 0,
                l = 0;
              if ((n /= 100)) {
                var s = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  u = 2 * r - s;
                (i = _a(u, s, t + 1 / 3)),
                  (o = _a(u, s, t)),
                  (l = _a(u, s, t - 1 / 3));
              } else i = o = l = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * l),
                alpha: a,
              };
            })(r)),
          r
        );
      }
      var Fa = function (e, t) {
        var n = Va(e),
          r = Va(t),
          a = Nt({}, n);
        return function (e) {
          return (
            (a.red = Oa(n.red, r.red, e)),
            (a.green = Oa(n.green, r.green, e)),
            (a.blue = Oa(n.blue, r.blue, e)),
            (a.alpha = Aa(n.alpha, r.alpha, e)),
            Kr.transform(a)
          );
        };
      };
      function za(e, t) {
        return "number" === typeof e
          ? function (n) {
              return Aa(e, t, n);
            }
          : Jr.test(e)
          ? Fa(e, t)
          : Ua(e, t);
      }
      var Ia = function (e, t) {
          var n = v(e),
            r = n.length,
            a = e.map(function (e, n) {
              return za(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        Ba = function (e, t) {
          var n = Nt(Nt({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = za(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        Ua = function (e, t) {
          var n = oa.createTransformer(t),
            r = na(e),
            a = na(t);
          return r.numColors === a.numColors && r.numNumbers >= a.numNumbers
            ? Er(Ia(r.values, a.values), n)
            : ("Complex values '"
                .concat(e, "' and '")
                .concat(
                  t,
                  "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        Wa = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        Ha = function (e, t) {
          return function (n) {
            return Aa(e, t, n);
          };
        };
      function $a(e, t, n) {
        for (
          var r,
            a = [],
            i =
              n ||
              ("number" === typeof (r = e[0])
                ? Ha
                : "string" === typeof r
                ? Jr.test(r)
                  ? Fa
                  : Ua
                : Array.isArray(r)
                ? Ia
                : "object" === typeof r
                ? Ba
                : Ha),
            o = e.length - 1,
            l = 0;
          l < o;
          l++
        ) {
          var s = i(e[l], e[l + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[l] : t;
            s = Er(u, s);
          }
          a.push(s);
        }
        return a;
      }
      function Qa(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          l = e.length;
        t.length,
          !i || !Array.isArray(i) || i.length,
          e[0] > e[l - 1] && ((e = v(e).reverse()), (t = v(t).reverse()));
        var s = $a(t, i, o),
          u = s.length,
          c = function (t) {
            var n = 0;
            if (u > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = Wa(e[n], e[n + 1], t);
            return s[n](r);
          };
        return a
          ? function (t) {
              return c(cn(e[0], e[l - 1], t));
            }
          : c;
      }
      var Ya = function (e) {
          return e;
        },
        qa = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        };
      function Xa(e, t, n, r) {
        if (e === t && n === r) return Ya;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var i,
              o,
              l = 0;
            do {
              (i = qa((o = t + (n - t) / 2), r, a) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(i) > 1e-7 && ++l < 12);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : qa(a(e), t, r);
        };
      }
      var Ka = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Ga = Na(Ka),
        Za = Ta(Ga),
        Ja = Xa(0.33, 1.53, 0.69, 0.99),
        ei = Na(Ja),
        ti = Ta(ei),
        ni = {
          linear: Ya,
          easeIn: Ra,
          easeInOut: Ma,
          easeOut: La,
          circIn: Ka,
          circInOut: Za,
          circOut: Ga,
          backIn: ei,
          backInOut: ti,
          backOut: Ja,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * ei(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        ri = function (e) {
          if (Array.isArray(e)) {
            e.length;
            var t = p(e, 4);
            return Xa(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? ("Invalid easing type '".concat(e, "'"), ni[e])
            : e;
        };
      function ai(e) {
        var t = e.keyframes,
          n = e.ease,
          r = void 0 === n ? Ma : n,
          a = e.times,
          i = e.duration,
          o = void 0 === i ? 300 : i;
        t = v(t);
        var l = (function (e) {
            return Array.isArray(e) && "number" !== typeof e[0];
          })(r)
            ? r.map(ri)
            : ri(r),
          s = { done: !1, value: t[0] },
          u = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(
            a && a.length === t.length
              ? a
              : (function (e) {
                  var t = e.length;
                  return e.map(function (e, n) {
                    return 0 !== n ? n / (t - 1) : 0;
                  });
                })(t),
            o
          );
        function c() {
          return Qa(u, t, {
            ease: Array.isArray(l)
              ? l
              : ((e = t),
                (n = l),
                e
                  .map(function () {
                    return n || Ma;
                  })
                  .splice(0, e.length - 1)),
          });
          var e, n;
        }
        var f = c();
        return {
          next: function (e) {
            return (s.value = f(e)), (s.done = e >= o), s;
          },
          flipTarget: function () {
            t.reverse(), (f = c());
          },
        };
      }
      var ii = 0.001;
      function oi(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          l = e.velocity,
          s = void 0 === l ? 0 : l,
          u = e.mass,
          c = void 0 === u ? 1 : u,
          f = 1 - o;
        (f = cn(0.05, 1, f)),
          (a = cn(0.01, 10, a / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - s,
                  i = li(e, f),
                  o = Math.exp(-n);
                return ii - (r / i) * o;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * s + s,
                  i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  l = li(Math.pow(e, 2), f);
                return ((-t(e) + ii > 0 ? -1 : 1) * ((r - i) * o)) / l;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - s) * a + 1) - 0.001;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (s - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < 12; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      function li(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var si = ["keyframes", "restDelta", "restSpeed"],
        ui = ["duration", "bounce"],
        ci = ["stiffness", "damping", "mass"];
      function fi(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      function di(e) {
        var t = e.keyframes,
          n = e.restDelta,
          r = e.restSpeed,
          a = Fn(e, si),
          i = t[0],
          o = t[t.length - 1],
          l = { done: !1, value: i },
          s = (function (e) {
            var t = Nt(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!fi(e, ci) && fi(e, ui)) {
              var n = oi(e);
              (t = Nt(
                Nt(Nt({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(a),
          u = s.stiffness,
          c = s.damping,
          f = s.mass,
          d = s.velocity,
          p = s.duration,
          h = s.isResolvedFromDuration,
          v = pi,
          m = d ? -d / 1e3 : 0,
          g = c / (2 * Math.sqrt(u * f));
        function y() {
          var e = o - i,
            t = Math.sqrt(u / f) / 1e3,
            a = Math.abs(e) < 5;
          if ((r || (r = a ? 0.01 : 2), n || (n = a ? 0.005 : 0.5), g < 1)) {
            var l = li(t, g);
            v = function (n) {
              var r = Math.exp(-g * t * n);
              return (
                o -
                r *
                  (((m + g * t * e) / l) * Math.sin(l * n) +
                    e * Math.cos(l * n))
              );
            };
          } else if (1 === g)
            v = function (n) {
              return o - Math.exp(-t * n) * (e + (m + t * e) * n);
            };
          else {
            var s = t * Math.sqrt(g * g - 1);
            v = function (n) {
              var r = Math.exp(-g * t * n),
                a = Math.min(s * n, 300);
              return (
                o -
                (r * ((m + g * t * e) * Math.sinh(a) + s * e * Math.cosh(a))) /
                  s
              );
            };
          }
        }
        return (
          y(),
          {
            next: function (e) {
              var t = v(e);
              if (h) l.done = e >= p;
              else {
                var a = m;
                if (0 !== e)
                  if (g < 1) {
                    var i = Math.max(0, e - 5);
                    a = Wr(t - v(i), e - i);
                  } else a = 0;
                var s = Math.abs(a) <= r,
                  u = Math.abs(o - t) <= n;
                l.done = s && u;
              }
              return (l.value = l.done ? o : t), l;
            },
            flipTarget: function () {
              m = -m;
              var e = [o, i];
              (i = e[0]), (o = e[1]), y();
            },
          }
        );
      }
      di.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var pi = function (e) {
        return 0;
      };
      var hi = [
          "duration",
          "driver",
          "elapsed",
          "repeat",
          "repeatType",
          "repeatDelay",
          "keyframes",
          "autoplay",
          "onPlay",
          "onStop",
          "onComplete",
          "onRepeat",
          "onUpdate",
          "type",
        ],
        vi = {
          decay: function (e) {
            var t = e.keyframes,
              n = void 0 === t ? [0] : t,
              r = e.velocity,
              a = void 0 === r ? 0 : r,
              i = e.power,
              o = void 0 === i ? 0.8 : i,
              l = e.timeConstant,
              s = void 0 === l ? 350 : l,
              u = e.restDelta,
              c = void 0 === u ? 0.5 : u,
              f = e.modifyTarget,
              d = n[0],
              p = { done: !1, value: d },
              h = o * a,
              v = d + h,
              m = void 0 === f ? v : f(v);
            return (
              m !== v && (h = m - d),
              {
                next: function (e) {
                  var t = -h * Math.exp(-e / s);
                  return (
                    (p.done = !(t > c || t < -c)),
                    (p.value = p.done ? m : m + t),
                    p
                  );
                },
                flipTarget: function () {},
              }
            );
          },
          keyframes: ai,
          tween: ai,
          spring: di,
        };
      function mi(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        return e - t - n;
      }
      var gi = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return ot.update(t, !0);
          },
          stop: function () {
            return lt.update(t);
          },
        };
      };
      function yi(e) {
        var t,
          n,
          r,
          a,
          i = e.duration,
          o = e.driver,
          l = void 0 === o ? gi : o,
          s = e.elapsed,
          u = void 0 === s ? 0 : s,
          c = e.repeat,
          f = void 0 === c ? 0 : c,
          d = e.repeatType,
          p = void 0 === d ? "loop" : d,
          h = e.repeatDelay,
          v = void 0 === h ? 0 : h,
          m = e.keyframes,
          g = e.autoplay,
          y = void 0 === g || g,
          b = e.onPlay,
          x = e.onStop,
          k = e.onComplete,
          w = e.onRepeat,
          S = e.onUpdate,
          E = e.type,
          C = void 0 === E ? "keyframes" : E,
          P = Fn(e, hi),
          j = u,
          T = 0,
          N = i,
          R = !1,
          L = !0,
          M = vi[m.length > 2 ? "keyframes" : C] || ai,
          A = m[0],
          _ = m[m.length - 1],
          O = { done: !1, value: A };
        (null === (n = (t = M).needsInterpolation) || void 0 === n
          ? void 0
          : n.call(t, A, _)) &&
          ((a = Qa([0, 100], [A, _], { clamp: !1 })), (m = [0, 100]));
        var D = M(Nt(Nt({}, P), {}, { duration: i, keyframes: m }));
        function V() {
          T++,
            "reverse" === p
              ? (u = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    r =
                      !(arguments.length > 3 && void 0 !== arguments[3]) ||
                      arguments[3];
                  return r ? mi(t + -e, t, n) : t - (e - t) + n;
                })(u, N, v, (L = T % 2 === 0)))
              : ((u = mi(u, N, v)), "mirror" === p && D.flipTarget()),
            (R = !1),
            w && w();
        }
        function F(e) {
          L || (e = -e),
            (u += e),
            R ||
              ((O = D.next(Math.max(0, u))),
              a && (O.value = a(O.value)),
              (R = L ? O.done : u <= 0)),
            S && S(O.value),
            R &&
              (0 === T && (N = void 0 !== N ? N : u),
              T < f
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(u, N, v, L) && V()
                : (r && r.stop(), k && k()));
        }
        return (
          y && (b && b(), (r = l(F)).start()),
          {
            stop: function () {
              x && x(), r && r.stop();
            },
            set currentTime(e) {
              (u = j), F(e);
            },
            sample: function (e) {
              u = j;
              var t = i && "number" === typeof i ? Math.max(0.5 * i, 50) : 50,
                n = 0;
              for (F(0); n <= e; ) {
                var r = e - n;
                F(Math.min(r, t)), (n += t);
              }
              return O;
            },
          }
        );
      }
      var bi = function (e) {
          var t = p(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            i = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(i, ")");
        },
        xi = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: bi([0, 0.65, 0.55, 1]),
          circOut: bi([0.55, 0, 1, 0.45]),
          backIn: bi([0.31, 0.01, 0.66, -0.59]),
          backOut: bi([0.33, 1.53, 0.69, 0.99]),
        };
      function ki(e) {
        if (e) return Array.isArray(e) ? bi(e) : xi[e];
      }
      var wi = {
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
        },
        Si = {},
        Ei = {},
        Ci = function (e) {
          Ei[e] = function () {
            return void 0 === Si[e] && (Si[e] = wi[e]()), Si[e];
          };
        };
      for (var Pi in wi) Ci(Pi);
      var ji = ["onUpdate", "onComplete"],
        Ti = new Set(["opacity"]);
      function Ni(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          a = Fn(n, ji);
        if (
          !(
            Ei.waapi() &&
            Ti.has(t) &&
            !a.repeatDelay &&
            "mirror" !== a.repeatType &&
            0 !== a.damping
          )
        )
          return !1;
        var i,
          o = a.keyframes,
          l = a.duration,
          s = void 0 === l ? 300 : l,
          u = a.elapsed,
          c = void 0 === u ? 0 : u,
          f = a.ease;
        if (
          "spring" === a.type ||
          !(
            !(i = a.ease) ||
            Array.isArray(i) ||
            ("string" === typeof i && xi[i])
          )
        ) {
          if (a.repeat === 1 / 0) return;
          for (
            var d = yi(Nt(Nt({}, a), {}, { elapsed: 0 })),
              p = { done: !1, value: o[0] },
              h = [],
              v = 0;
            !p.done && v < 2e4;

          )
            (p = d.sample(v)), h.push(p.value), (v += 10);
          (o = h), (s = v - 10), (f = "linear");
        }
        var m = (function (e, t, n) {
          var r,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = a.delay,
            o = void 0 === i ? 0 : i,
            l = a.duration,
            s = a.repeat,
            u = void 0 === s ? 0 : s,
            c = a.repeatType,
            f = void 0 === c ? "loop" : c,
            d = a.ease,
            p = a.times;
          return e.animate((jt((r = {}), t, n), jt(r, "offset", p), r), {
            delay: o,
            duration: l,
            easing: ki(d),
            fill: "both",
            iterations: u + 1,
            direction: "reverse" === f ? "alternate" : "normal",
          });
        })(
          e.owner.current,
          t,
          o,
          Nt(Nt({}, a), {}, { delay: -c, duration: s, ease: f })
        );
        return (
          (m.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(o, a)
            ),
              r && r();
          }),
          {
            get currentTime() {
              return m.currentTime || 0;
            },
            set currentTime(e) {
              m.currentTime = e;
            },
            stop: function () {
              var t = m.currentTime;
              if (t) {
                var n = yi(Nt(Nt({}, a), {}, { autoplay: !1 }));
                e.setWithVelocity(
                  n.sample(t - 10).value,
                  n.sample(t).value,
                  10
                );
              }
              ot.update(function () {
                return m.cancel();
              });
            },
          }
        );
      }
      function Ri(e, t) {
        var n = performance.now(),
          r = function r(a) {
            var i = a.timestamp - n;
            i >= t && (lt.read(r), e(i - t));
          };
        return (
          ot.read(r, !0),
          function () {
            return lt.read(r);
          }
        );
      }
      function Li(e) {
        var t = e.keyframes,
          n = e.elapsed,
          r = e.onUpdate,
          a = e.onComplete,
          i = function () {
            r && r(t[t.length - 1]), a && a();
          };
        return n ? { stop: Ri(i, -n) } : i();
      }
      function Mi(e) {
        var t,
          n = e.keyframes,
          r = e.velocity,
          a = void 0 === r ? 0 : r,
          i = e.min,
          o = e.max,
          l = e.power,
          s = void 0 === l ? 0.8 : l,
          u = e.timeConstant,
          c = void 0 === u ? 750 : u,
          f = e.bounceStiffness,
          d = void 0 === f ? 500 : f,
          p = e.bounceDamping,
          h = void 0 === p ? 10 : p,
          v = e.restDelta,
          m = void 0 === v ? 1 : v,
          g = e.modifyTarget,
          y = e.driver,
          b = e.onUpdate,
          x = e.onComplete,
          k = e.onStop,
          w = n[0];
        function S(e) {
          return (void 0 !== i && e < i) || (void 0 !== o && e > o);
        }
        function E(e) {
          return void 0 === i
            ? o
            : void 0 === o || Math.abs(i - e) < Math.abs(o - e)
            ? i
            : o;
        }
        function C(e) {
          null === t || void 0 === t || t.stop(),
            (t = yi(
              Nt(
                Nt({ keyframes: [0, 1], velocity: 0 }, e),
                {},
                {
                  driver: y,
                  onUpdate: function (t) {
                    var n;
                    null === b || void 0 === b || b(t),
                      null === (n = e.onUpdate) || void 0 === n || n.call(e, t);
                  },
                  onComplete: x,
                  onStop: k,
                }
              )
            ));
        }
        function P(e) {
          C(Nt({ type: "spring", stiffness: d, damping: h, restDelta: m }, e));
        }
        if (S(w)) P({ velocity: a, keyframes: [w, E(w)] });
        else {
          var j = s * a + w;
          "undefined" !== typeof g && (j = g(j));
          var T,
            N,
            R = E(j),
            L = R === i ? -1 : 1;
          C({
            type: "decay",
            keyframes: [w, 0],
            velocity: a,
            timeConstant: c,
            power: s,
            restDelta: m,
            modifyTarget: g,
            onUpdate: S(j)
              ? function (e) {
                  (T = N),
                    (N = e),
                    (a = Wr(e - T, et.delta)),
                    ((1 === L && e > R) || (-1 === L && e < R)) &&
                      P({ keyframes: [e, R], velocity: a });
                }
              : void 0,
          });
        }
        return {
          stop: function () {
            return null === t || void 0 === t ? void 0 : t.stop();
          },
        };
      }
      var Ai = function () {
          return { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 };
        },
        _i = function (e) {
          return {
            type: "spring",
            stiffness: 550,
            damping: 0 === e ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10,
          };
        },
        Oi = function () {
          return { type: "keyframes", ease: "linear", duration: 0.3 };
        },
        Di = { type: "keyframes", duration: 0.8 },
        Vi = {
          x: Ai,
          y: Ai,
          z: Ai,
          rotate: Ai,
          rotateX: Ai,
          rotateY: Ai,
          rotateZ: Ai,
          scaleX: _i,
          scaleY: _i,
          scale: _i,
          opacity: Oi,
          backgroundColor: Oi,
          color: Oi,
          default: _i,
        },
        Fi = function (e, t) {
          var n = t.keyframes;
          return n.length > 2 ? Di : (Vi[e] || Vi.default)(n[1]);
        },
        zi = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !oa.test(t) || t.startsWith("url(")))
          );
        },
        Ii = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ];
      function Bi(e) {
        e.when,
          e.delay,
          e.delayChildren,
          e.staggerChildren,
          e.staggerDirection,
          e.repeat,
          e.repeatType,
          e.repeatDelay,
          e.from,
          e.elapsed;
        var t = Fn(e, Ii);
        return !!Object.keys(t).length;
      }
      function Ui(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function Wi(e) {
        return "number" === typeof e ? 0 : pa("", e);
      }
      function Hi(e, t) {
        return e[t] || e.default || e;
      }
      function $i(e, t, n, r) {
        var a = zi(t, n),
          i = void 0 !== r.from ? r.from : e.get();
        return (
          "none" === i && a && "string" === typeof n
            ? (i = pa(t, n))
            : Ui(i) && "string" === typeof n
            ? (i = Wi(n))
            : !Array.isArray(n) &&
              Ui(n) &&
              "string" === typeof i &&
              (n = Wi(i)),
          Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
        );
      }
      var Qi = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return function (a) {
            var i = Hi(r, e) || {},
              o = i.delay || r.delay || 0,
              l = r.elapsed,
              s = void 0 === l ? 0 : l;
            s -= Pa(o);
            var u = $i(t, e, n, i),
              c = u[0],
              f = u[u.length - 1],
              d = zi(e, c),
              p = zi(e, f);
            "You are trying to animate "
              .concat(e, ' from "')
              .concat(c, '" to "')
              .concat(f, '". ')
              .concat(
                c,
                " is not an animatable value - to enable this animation set "
              )
              .concat(c, " to a value animatable to ")
              .concat(f, " via the `style` property.");
            var h = Nt(
              Nt({ keyframes: u, velocity: t.getVelocity() }, i),
              {},
              {
                elapsed: s,
                onUpdate: function (e) {
                  t.set(e), i.onUpdate && i.onUpdate(e);
                },
                onComplete: function () {
                  a(), i.onComplete && i.onComplete();
                },
              }
            );
            if (!d || !p || ja || !1 === i.type) return Li(h);
            if ("inertia" === i.type) return Mi(h);
            Bi(i) || (h = Nt(Nt({}, h), Fi(e, h))),
              h.duration && (h.duration = Pa(h.duration)),
              h.repeatDelay && (h.repeatDelay = Pa(h.repeatDelay));
            var v = t.owner,
              m = v && v.current;
            if (
              v &&
              m instanceof HTMLElement &&
              !(null === v || void 0 === v ? void 0 : v.getProps().onUpdate)
            ) {
              var g = Ni(t, e, h);
              if (g) return g;
            }
            return yi(h);
          };
        },
        Yi = ["transition", "transitionEnd"];
      function qi(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = ba(e, t, r.custom),
          i = a || {},
          o = i.transition,
          l = void 0 === o ? e.getDefaultTransition() || {} : o;
        r.transitionOverride && (l = r.transitionOverride);
        var s = a
            ? function () {
                return Xi(e, a, r);
              }
            : function () {
                return Promise.resolve();
              },
          u = (
            null === (n = e.variantChildren) || void 0 === n ? void 0 : n.size
          )
            ? function () {
                var n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  a = l,
                  i = a.delayChildren,
                  o = void 0 === i ? 0 : i,
                  s = a.staggerChildren,
                  u = a.staggerDirection;
                return Ki(e, t, o + n, s, u, r);
              }
            : function () {
                return Promise.resolve();
              },
          c = l,
          f = c.when;
        if (f) {
          var d = "beforeChildren" === f ? [s, u] : [u, s],
            h = p(d, 2),
            v = h[0],
            m = h[1];
          return v().then(m);
        }
        return Promise.all([s(), u(r.delay)]);
      }
      function Xi(e, t) {
        var n,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = r.delay,
          i = void 0 === a ? 0 : a,
          o = r.transitionOverride,
          l = r.type,
          s = e.makeTargetAnimatable(t),
          u = s.transition,
          c = void 0 === u ? e.getDefaultTransition() : u,
          f = s.transitionEnd,
          d = Fn(s, Yi),
          p = e.getValue("willChange");
        o && (c = o);
        var h = [],
          v =
            l &&
            (null === (n = e.animationState) || void 0 === n
              ? void 0
              : n.getState()[l]),
          m = function (t) {
            var n = e.getValue(t),
              r = d[t];
            if (!n || void 0 === r || (v && Zi(v, t))) return "continue";
            var a = Nt({ delay: i, elapsed: 0 }, c);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var o = e.getProps()[Ca];
              o && (a.elapsed = window.HandoffAppearAnimations(o, t, n, ot));
            }
            var l = n.start(
              Qi(t, n, r, e.shouldReduceMotion && nn.has(t) ? { type: !1 } : a)
            );
            Ea(p) &&
              (p.add(t),
              (l = l.then(function () {
                return p.remove(t);
              }))),
              h.push(l);
          };
        for (var g in d) m(g);
        return Promise.all(h).then(function () {
          f && wa(e, f);
        });
      }
      function Ki(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          i = arguments.length > 5 ? arguments[5] : void 0,
          o = [],
          l = (e.variantChildren.size - 1) * r,
          s =
            1 === a
              ? function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return e * r;
                }
              : function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return l - e * r;
                };
        return (
          Array.from(e.variantChildren)
            .sort(Gi)
            .forEach(function (e, r) {
              e.notify("AnimationStart", t),
                o.push(
                  qi(e, t, Nt(Nt({}, i), {}, { delay: n + s(r) })).then(
                    function () {
                      return e.notify("AnimationComplete", t);
                    }
                  )
                );
            }),
          Promise.all(o)
        );
      }
      function Gi(e, t) {
        return e.sortNodePosition(t);
      }
      function Zi(e, t) {
        var n = e.protectedKeys,
          r = e.needsAnimating,
          a = n.hasOwnProperty(t) && !0 !== r[t];
        return (r[t] = !1), a;
      }
      var Ji = ["transition", "transitionEnd"],
        eo = [
          or.Animate,
          or.InView,
          or.Focus,
          or.Hover,
          or.Tap,
          or.Drag,
          or.Exit,
        ],
        to = [].concat(eo).reverse(),
        no = eo.length;
      function ro(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return qi(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = qi(e, t, r);
                else {
                  var i = "function" === typeof t ? ba(e, t, r.custom) : t;
                  n = Xi(e, i, r);
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function ao(e) {
        var t = ro(e),
          n = (function () {
            var e;
            return (
              jt((e = {}), or.Animate, io(!0)),
              jt(e, or.InView, io()),
              jt(e, or.Hover, io()),
              jt(e, or.Tap, io()),
              jt(e, or.Drag, io()),
              jt(e, or.Focus, io()),
              jt(e, or.Exit, io()),
              e
            );
          })(),
          r = !0,
          a = function (t, n) {
            var r = ba(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = Fn(r, Ji);
              t = Nt(Nt(Nt({}, t), i), a);
            }
            return t;
          };
        function i(i, o) {
          for (
            var l = e.getProps(),
              s = e.getVariantContext(!0) || {},
              u = [],
              c = new Set(),
              f = {},
              d = 1 / 0,
              p = function () {
                var t = to[h],
                  p = n[t],
                  m = void 0 !== l[t] ? l[t] : s[t],
                  g = Ot(m),
                  y = t === o ? p.isActive : null;
                !1 === y && (d = h);
                var b = m === s[t] && m !== l[t] && g;
                if (
                  (b && r && e.manuallyAnimateOnMount && (b = !1),
                  (p.protectedKeys = Nt({}, f)),
                  (!p.isActive && null === y) ||
                    (!m && !p.prevProp) ||
                    Dt(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var x = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !Fr(t, e);
                    return !1;
                  })(p.prevProp, m),
                  k = x || (t === o && p.isActive && !b && g) || (h > d && g),
                  w = Array.isArray(m) ? m : [m],
                  S = w.reduce(a, {});
                !1 === y && (S = {});
                var E = p.prevResolvedValues,
                  C = void 0 === E ? {} : E,
                  P = Nt(Nt({}, C), S),
                  j = function (e) {
                    (k = !0), c.delete(e), (p.needsAnimating[e] = !0);
                  };
                for (var T in P) {
                  var N = S[T],
                    R = C[T];
                  f.hasOwnProperty(T) ||
                    (N !== R
                      ? tr(N) && tr(R)
                        ? !Fr(N, R) || x
                          ? j(T)
                          : (p.protectedKeys[T] = !0)
                        : void 0 !== N
                        ? j(T)
                        : c.add(T)
                      : void 0 !== N && c.has(T)
                      ? j(T)
                      : (p.protectedKeys[T] = !0));
                }
                (p.prevProp = m),
                  (p.prevResolvedValues = S),
                  p.isActive && (f = Nt(Nt({}, f), S)),
                  r && e.blockInitialAnimation && (k = !1),
                  k &&
                    !b &&
                    u.push.apply(
                      u,
                      v(
                        w.map(function (e) {
                          return { animation: e, options: Nt({ type: t }, i) };
                        })
                      )
                    );
              },
              h = 0;
            h < no;
            h++
          )
            p();
          if (c.size) {
            var m = {};
            c.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              u.push({ animation: m });
          }
          var g = Boolean(u.length);
          return (
            r && !1 === l.initial && !e.manuallyAnimateOnMount && (g = !1),
            (r = !1),
            g ? t(u) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var l = i(a, t);
            for (var s in n) n[s].protectedKeys = {};
            return l;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function io() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var oo = {
          animation: Or(function (e) {
            var n = e.visualElement,
              r = e.animate;
            n.animationState || (n.animationState = ao(n)),
              Dt(r) &&
                (0, t.useEffect)(
                  function () {
                    return r.subscribe(n);
                  },
                  [r]
                );
          }),
          exit: Or(function (e) {
            var n = e.custom,
              r = e.visualElement,
              a = p(Vr(), 2),
              i = a[0],
              o = a[1],
              l = (0, t.useContext)(vt);
            (0, t.useEffect)(
              function () {
                r.isPresent = i;
                var e =
                  r.animationState &&
                  r.animationState.setActive(or.Exit, !i, {
                    custom: (l && l.custom) || n,
                  });
                e && !i && e.then(o);
              },
              [i]
            );
          }),
        },
        lo = function (e, t) {
          return Math.abs(e - t);
        };
      function so(e, t) {
        var n = lo(e.x, t.x),
          r = lo(e.y, t.y);
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
      }
      var uo = (function () {
        function e(t, n) {
          var r = this,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            i = a.transformPagePoint;
          if (
            (m(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = po(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n = so(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    i = et.timestamp;
                  r.history.push(Nt(Nt({}, a), {}, { timestamp: i }));
                  var o = r.handlers,
                    l = o.onStart,
                    s = o.onMove;
                  t ||
                    (l && l(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    s && s(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = co(t, r.transformPagePoint)),
                ot.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  a = n.onEnd,
                  i = n.onSessionEnd,
                  o = po(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : co(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && a && a(e, o), i && i(e, o);
              }
            }),
            fr(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = i);
            var o = dr(t),
              l = co(o, this.transformPagePoint),
              s = l.point,
              u = et.timestamp;
            this.history = [Nt(Nt({}, s), {}, { timestamp: u })];
            var c = n.onSessionStart;
            c && c(t, po(l, this.history)),
              (this.removeListeners = Er(
                hr(window, "pointermove", this.handlePointerMove),
                hr(window, "pointerup", this.handlePointerUp),
                hr(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          x(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  lt.update(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function co(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function fo(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function po(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: fo(n, vo(t)),
          offset: fo(n, ho(t)),
          velocity: mo(t, 0.1),
        };
      }
      function ho(e) {
        return e[0];
      }
      function vo(e) {
        return e[e.length - 1];
      }
      function mo(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = vo(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > Pa(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (a.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function go(e) {
        return e.max - e.min;
      }
      function yo(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function bo(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = Aa(t.min, t.max, e.origin)),
          (e.scale = go(n) / go(t)),
          (yo(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Aa(n.min, n.max, e.origin) - e.originPoint),
          (yo(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function xo(e, t, n, r) {
        bo(e.x, t.x, n.x, null === r || void 0 === r ? void 0 : r.originX),
          bo(e.y, t.y, n.y, null === r || void 0 === r ? void 0 : r.originY);
      }
      function ko(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + go(t));
      }
      function wo(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + go(t));
      }
      function So(e, t, n) {
        wo(e.x, t.x, n.x), wo(e.y, t.y, n.y);
      }
      function Eo(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function Co(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var Po = 0.35;
      function jo(e, t, n) {
        return { min: To(e, t), max: To(e, n) };
      }
      function To(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      function No(e) {
        return [e("x"), e("y")];
      }
      function Ro(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Lo(e) {
        return void 0 === e || 1 === e;
      }
      function Mo(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Lo(t) || !Lo(n) || !Lo(r);
      }
      function Ao(e) {
        return Mo(e) || _o(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function _o(e) {
        return Oo(e.x) || Oo(e.y);
      }
      function Oo(e) {
        return e && "0%" !== e;
      }
      function Do(e, t, n) {
        return n + t * (e - n);
      }
      function Vo(e, t, n, r, a) {
        return void 0 !== a && (e = Do(e, a, r)), Do(e, n, r) + t;
      }
      function Fo(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = Vo(e.min, t, n, r, a)), (e.max = Vo(e.max, t, n, r, a));
      }
      function zo(e, t) {
        var n = t.x,
          r = t.y;
        Fo(e.x, n.translate, n.scale, n.originPoint),
          Fo(e.y, r.translate, r.scale, r.originPoint);
      }
      function Io(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function Bo(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function Uo(e, t, n) {
        var r = p(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          l = void 0 !== t[o] ? t[o] : 0.5,
          s = Aa(e.min, e.max, l);
        Fo(e, t[a], t[i], s, t.scale);
      }
      var Wo = ["x", "scaleX", "originX"],
        Ho = ["y", "scaleY", "originY"];
      function $o(e, t) {
        Uo(e.x, t, Wo), Uo(e.y, t, Ho);
      }
      function Qo(e, t) {
        return Ro(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Yo = new WeakMap(),
        qo = (function () {
          function e(t) {
            m(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            x(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = n.snapToCursor,
                    a = void 0 !== r && r;
                  if (!1 !== this.visualElement.isPresent) {
                    var i = function (e) {
                        t.stopAnimation(),
                          a && t.snapToCursor(dr(e, "page").point);
                      },
                      o = function (e, n) {
                        var r,
                          a = t.getProps(),
                          i = a.drag,
                          o = a.dragPropagation,
                          l = a.onDragStart;
                        (!i ||
                          o ||
                          (t.openGlobalLock && t.openGlobalLock(),
                          (t.openGlobalLock = br(i)),
                          t.openGlobalLock)) &&
                          ((t.isDragging = !0),
                          (t.currentDirection = null),
                          t.resolveConstraints(),
                          t.visualElement.projection &&
                            ((t.visualElement.projection.isAnimationBlocked =
                              !0),
                            (t.visualElement.projection.target = void 0)),
                          No(function (e) {
                            var n,
                              r,
                              a = t.getAxisMotionValue(e).get() || 0;
                            if (kn.test(a)) {
                              var i =
                                null ===
                                  (r =
                                    null === (n = t.visualElement.projection) ||
                                    void 0 === n
                                      ? void 0
                                      : n.layout) || void 0 === r
                                  ? void 0
                                  : r.layoutBox[e];
                              if (i) a = go(i) * (parseFloat(a) / 100);
                            }
                            t.originPoint[e] = a;
                          }),
                          null === l || void 0 === l || l(e, n),
                          null === (r = t.visualElement.animationState) ||
                            void 0 === r ||
                            r.setActive(or.Drag, !0));
                      },
                      l = function (e, n) {
                        var r = t.getProps(),
                          a = r.dragPropagation,
                          i = r.dragDirectionLock,
                          o = r.onDirectionLock,
                          l = r.onDrag;
                        if (a || t.openGlobalLock) {
                          var s = n.offset;
                          if (i && null === t.currentDirection)
                            return (
                              (t.currentDirection = Ko(s)),
                              void (
                                null !== t.currentDirection &&
                                (null === o ||
                                  void 0 === o ||
                                  o(t.currentDirection))
                              )
                            );
                          t.updateAxis("x", n.point, s),
                            t.updateAxis("y", n.point, s),
                            t.visualElement.render(),
                            null === l || void 0 === l || l(e, n);
                        }
                      },
                      s = function (e, n) {
                        return t.stop(e, n);
                      };
                    this.panSession = new uo(
                      e,
                      {
                        onSessionStart: i,
                        onStart: o,
                        onMove: l,
                        onSessionEnd: s,
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    null === a || void 0 === a || a(e, t);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  var e, t;
                  (this.isDragging = !1),
                    this.visualElement.projection &&
                      (this.visualElement.projection.isAnimationBlocked = !1),
                    null === (e = this.panSession) || void 0 === e || e.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    null === (t = this.visualElement.animationState) ||
                      void 0 === t ||
                      t.setActive(or.Drag, !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Xo(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      i = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (i = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? Aa(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? Aa(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(i, this.constraints[e], this.elastic[e])),
                      a.set(i);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    i = this.constraints;
                  n && _t(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            i = t.right;
                          return { x: Eo(e.x, r, i), y: Eo(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : Po;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = Po),
                        { x: jo(e, "left", "right"), y: jo(e, "top", "bottom") }
                      );
                    })(r)),
                    i !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      No(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !_t(t)) return !1;
                  var r = t.current,
                    a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var i = (function (e, t, n) {
                      var r = Qo(e, n),
                        a = t.scroll;
                      return a && (Bo(r.x, a.offset.x), Bo(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: Co(e.x, t.x), y: Co(e.y, t.y) };
                    })(a.layout.layoutBox, i);
                  if (n) {
                    var l = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!l), l && (o = Ro(l));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    i = n.dragElastic,
                    o = n.dragTransition,
                    l = n.dragSnapToOrigin,
                    s = n.onDragTransitionEnd,
                    u = this.constraints || {},
                    c = No(function (n) {
                      if (Xo(n, r, t.currentDirection)) {
                        var s =
                          (null === u || void 0 === u ? void 0 : u[n]) || {};
                        l && (s = { min: 0, max: 0 });
                        var c = i ? 200 : 1e6,
                          f = i ? 40 : 1e7,
                          d = Nt(
                            Nt(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            s
                          );
                        return t.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(s);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(Qi(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  No(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t,
                    n = "_drag" + e.toUpperCase(),
                    r = this.visualElement.getProps()[n];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (null === (t = this.visualElement.getProps().initial) ||
                      void 0 === t
                        ? void 0
                        : t[e]) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  No(function (n) {
                    if (Xo(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var i = r.layout.layoutBox[n],
                          o = i.min,
                          l = i.max;
                        a.set(e[n] - Aa(o, l, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    var n = this.getProps(),
                      r = n.drag,
                      a = n.dragConstraints,
                      i = this.visualElement.projection;
                    if (_t(a) && i && this.constraints) {
                      this.stopAnimation();
                      var o = { x: 0, y: 0 };
                      No(function (e) {
                        var n = t.getAxisMotionValue(e);
                        if (n) {
                          var r = n.get();
                          o[e] = (function (e, t) {
                            var n = 0.5,
                              r = go(e),
                              a = go(t);
                            return (
                              a > r
                                ? (n = Wa(t.min, t.max - r, e.min))
                                : r > a && (n = Wa(e.min, e.max - a, t.min)),
                              cn(0, 1, n)
                            );
                          })({ min: r, max: r }, t.constraints[e]);
                        }
                      });
                      var l = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = l
                        ? l({}, "")
                        : "none"),
                        null === (e = i.root) ||
                          void 0 === e ||
                          e.updateScroll(),
                        i.updateLayout(),
                        this.resolveConstraints(),
                        No(function (e) {
                          if (Xo(e, r, null)) {
                            var n = t.getAxisMotionValue(e),
                              a = t.constraints[e],
                              i = a.min,
                              l = a.max;
                            n.set(Aa(i, l, o[e]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e,
                    t = this;
                  if (this.visualElement.current) {
                    Yo.set(this.visualElement, this);
                    var n = hr(
                        this.visualElement.current,
                        "pointerdown",
                        function (e) {
                          var n = t.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && t.start(e);
                        }
                      ),
                      r = function () {
                        _t(t.getProps().dragConstraints) &&
                          (t.constraints = t.resolveRefConstraints());
                      },
                      a = this.visualElement.projection,
                      i = a.addEventListener("measure", r);
                    a &&
                      !a.layout &&
                      (null === (e = a.root) ||
                        void 0 === e ||
                        e.updateScroll(),
                      a.updateLayout()),
                      r();
                    var o = ur(window, "resize", function () {
                        return t.scalePositionWithinConstraints();
                      }),
                      l = a.addEventListener("didUpdate", function (e) {
                        var n = e.delta,
                          r = e.hasLayoutChanged;
                        t.isDragging &&
                          r &&
                          (No(function (e) {
                            var r = t.getAxisMotionValue(e);
                            r &&
                              ((t.originPoint[e] += n[e].translate),
                              r.set(r.get() + n[e].translate));
                          }),
                          t.visualElement.render());
                      });
                    return function () {
                      o(), n(), i(), null === l || void 0 === l || l();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    i = e.dragPropagation,
                    o = void 0 !== i && i,
                    l = e.dragConstraints,
                    s = void 0 !== l && l,
                    u = e.dragElastic,
                    c = void 0 === u ? Po : u,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return Nt(
                    Nt({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: o,
                      dragConstraints: s,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Xo(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      function Ko(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
          n = null;
        return (
          Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n
        );
      }
      var Go = {
        pan: Or(function (e) {
          var n = e.onPan,
            r = e.onPanStart,
            a = e.onPanEnd,
            i = e.onPanSessionStart,
            o = e.visualElement,
            l = n || r || a || i,
            s = (0, t.useRef)(null),
            u = (0, t.useContext)(Rt).transformPagePoint,
            c = {
              onSessionStart: i,
              onStart: r,
              onMove: n,
              onEnd: function (e, t) {
                (s.current = null), a && a(e, t);
              },
            };
          (0, t.useEffect)(function () {
            null !== s.current && s.current.updateHandlers(c);
          }),
            vr(
              o,
              "pointerdown",
              l &&
                function (e) {
                  s.current = new uo(e, c, { transformPagePoint: u });
                }
            ),
            wt(function () {
              return s.current && s.current.end();
            });
        }),
        drag: Or(function (e) {
          var n = e.dragControls,
            r = e.visualElement,
            a = mt(function () {
              return new qo(r);
            });
          (0, t.useEffect)(
            function () {
              return n && n.subscribe(a);
            },
            [a, n]
          ),
            (0, t.useEffect)(
              function () {
                return a.addListeners();
              },
              [a]
            );
        }),
      };
      function Zo(e) {
        return "string" === typeof e && e.startsWith("var(--");
      }
      var Jo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function el(e) {
        var t = Jo.exec(e);
        if (!t) return [,];
        var n = p(t, 3);
        return [n[1], n[2]];
      }
      function tl(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        'Max CSS variable fallback depth detected in property "'.concat(
          e,
          '". This may indicate a circular fallback dependency.'
        );
        var r = el(e),
          a = p(r, 2),
          i = a[0],
          o = a[1];
        if (i) {
          var l = window.getComputedStyle(t).getPropertyValue(i);
          return l ? l.trim() : Zo(o) ? tl(o, t, n + 1) : o;
        }
      }
      function nl(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.current;
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var i in (n && (n = Nt({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (Zo(t)) {
            var n = tl(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[i];
          if (Zo(o)) {
            var l = tl(o, a);
            l && ((r[i] = l), n && void 0 === n[i] && (n[i] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var rl,
        al = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        il = function (e) {
          return al.has(e);
        },
        ol = function (e) {
          return e === fn || e === wn;
        };
      !(function (e) {
        (e.width = "width"),
          (e.height = "height"),
          (e.left = "left"),
          (e.right = "right"),
          (e.top = "top"),
          (e.bottom = "bottom");
      })(rl || (rl = {}));
      var ll = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        sl = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return ll(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? ll(o[1], e) : 0;
          };
        },
        ul = new Set(["x", "y", "z"]),
        cl = tn.filter(function (e) {
          return !ul.has(e);
        });
      function fl(e) {
        var t = [];
        return (
          cl.forEach(function (n) {
            var r = e.getValue(n);
            void 0 !== r &&
              (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
          }),
          t.length && e.render(),
          t
        );
      }
      var dl = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              i = t.paddingRight,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              i = t.paddingBottom,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: sl(4, 13),
          y: sl(5, 14),
        },
        pl = function (e, t, n) {
          var r = t.measureViewportBox(),
            a = t.current,
            i = getComputedStyle(a),
            o = i.display,
            l = {};
          "none" === o && t.setStaticValue("display", e.display || "block"),
            n.forEach(function (e) {
              l[e] = dl[e](r, i);
            }),
            t.render();
          var s = t.measureViewportBox();
          return (
            n.forEach(function (n) {
              var r = t.getValue(n);
              r && r.jump(l[n]), (e[n] = dl[n](s, i));
            }),
            e
          );
        };
      function hl(e, t, n, r) {
        return (function (e) {
          return Object.keys(e).some(il);
        })(t)
          ? (function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
              (t = Nt({}, t)), (r = Nt({}, r));
              var a = Object.keys(t).filter(il),
                i = [],
                o = !1,
                l = [];
              if (
                (a.forEach(function (a) {
                  var s = e.getValue(a);
                  if (e.hasValue(a)) {
                    var u,
                      c = n[a],
                      f = ma(c),
                      d = t[a];
                    if (tr(d)) {
                      var p = d.length,
                        h = null === d[0] ? 1 : 0;
                      (c = d[h]), (f = ma(c));
                      for (var v = h; v < p; v++)
                        u ? ma(d[v]) : (u = ma(d[v])) === f || (ol(f) && ol(u));
                    } else u = ma(d);
                    if (f !== u)
                      if (ol(f) && ol(u)) {
                        var m = s.get();
                        "string" === typeof m && s.set(parseFloat(m)),
                          "string" === typeof d
                            ? (t[a] = parseFloat(d))
                            : Array.isArray(d) &&
                              u === wn &&
                              (t[a] = d.map(parseFloat));
                      } else
                        (null === f || void 0 === f ? void 0 : f.transform) &&
                        (null === u || void 0 === u ? void 0 : u.transform) &&
                        (0 === c || 0 === d)
                          ? 0 === c
                            ? s.set(u.transform(c))
                            : (t[a] = f.transform(d))
                          : (o || ((i = fl(e)), (o = !0)),
                            l.push(a),
                            (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                            s.jump(d));
                  }
                }),
                l.length)
              ) {
                var s = l.indexOf("height") >= 0 ? window.pageYOffset : null,
                  u = pl(t, e, l);
                return (
                  i.length &&
                    i.forEach(function (t) {
                      var n = p(t, 2),
                        r = n[0],
                        a = n[1];
                      e.getValue(r).set(a);
                    }),
                  e.render(),
                  dt && null !== s && window.scrollTo({ top: s }),
                  { target: u, transitionEnd: r }
                );
              }
              return { target: t, transitionEnd: r };
            })(e, t, n, r)
          : { target: t, transitionEnd: r };
      }
      var vl = { current: null },
        ml = { current: !1 };
      var gl = ["willChange"],
        yl = ["children"],
        bl = Object.keys(Wt),
        xl = bl.length,
        kl = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        wl = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              i = t.reducedMotionConfig,
              o = t.visualState,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            m(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.isPresent = !0),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return ot.render(n.render, !1, !0);
              });
            var s = o.latestValues,
              u = o.renderState;
            (this.latestValues = s),
              (this.baseTarget = Nt({}, s)),
              (this.initialValues = a.initial ? Nt({}, s) : {}),
              (this.renderState = u),
              (this.parent = r),
              (this.props = a),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = i),
              (this.options = l),
              (this.isControllingVariants = Ft(a)),
              (this.isVariantNode = zt(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var c = this.scrapeMotionValuesFromProps(a, {}),
              f = c.willChange,
              d = Fn(c, gl);
            for (var p in d) {
              var h = d[p];
              void 0 !== s[p] && an(h) && (h.set(s[p], !1), Ea(f) && f.add(p));
            }
          }
          return (
            x(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t,
                    n = this;
                  (this.current = e),
                    this.projection && this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        null === (t = this.parent) || void 0 === t
                          ? void 0
                          : t.addVariantChild(this)),
                    this.values.forEach(function (e, t) {
                      return n.bindToMotionValue(t, e);
                    }),
                    ml.current ||
                      (function () {
                        if (((ml.current = !0), dt))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (vl.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else vl.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || vl.current)),
                    this.parent && this.parent.children.add(this),
                    this.setProps(this.props);
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t, n;
                  for (var r in (null === (e = this.projection) ||
                    void 0 === e ||
                    e.unmount(),
                  lt.update(this.notifyUpdate),
                  lt.render(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  null === (t = this.removeFromVariantTree) ||
                    void 0 === t ||
                    t.call(this),
                  null === (n = this.parent) ||
                    void 0 === n ||
                    n.children.delete(this),
                  this.events))
                    this.events[r].clear();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = nn.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && ot.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), i();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, n, r, a, i, o) {
                  var l = this,
                    s = (e.children, Fn(e, yl)),
                    u = [];
                  for (var c = 0; c < xl; c++) {
                    var f = bl[c],
                      d = Wt[f],
                      p = d.isEnabled,
                      h = d.Component;
                    p(s) &&
                      h &&
                      u.push(
                        (0, t.createElement)(
                          h,
                          Nt(Nt({ key: f }, s), {}, { visualElement: this })
                        )
                      );
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      a,
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var v = s.layoutId,
                      m = s.layout,
                      g = s.drag,
                      y = s.dragConstraints,
                      b = s.layoutScroll,
                      x = s.layoutRoot;
                    this.projection.setOptions({
                      layoutId: v,
                      layout: m,
                      alwaysMeasureLayout: Boolean(g) || (y && _t(y)),
                      visualElement: this,
                      scheduleRender: function () {
                        return l.scheduleRender();
                      },
                      animationType: "string" === typeof m ? m : "both",
                      initialPromotionConfig: o,
                      layoutScroll: b,
                      layoutRoot: x,
                    });
                  }
                  return u;
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "setProps",
                value: function (e) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender();
                  var t = this.props;
                  this.props = e;
                  for (var n = 0; n < kl.length; n++) {
                    var r = kl[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var a = e["on" + r];
                    a && (this.propEventSubscriptions[r] = this.on(r, a));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var i = t[a],
                        o = n[a];
                      if (an(i)) e.addValue(a, i), Ea(r) && r.add(a);
                      else if (an(o))
                        e.addValue(a, Qr(i, { owner: e })),
                          Ea(r) && r.remove(a);
                      else if (o !== i)
                        if (e.hasValue(a)) {
                          var l = e.getValue(a);
                          !l.hasAnimated && l.set(i);
                        } else {
                          var s = e.getStaticValue(a);
                          e.addValue(a, Qr(void 0 !== s ? s : i, { owner: e }));
                        }
                    }
                    for (var u in n) void 0 === t[u] && e.removeValue(u);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, t),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  var t;
                  return null === (t = this.props.variants) || void 0 === t
                    ? void 0
                    : t[e];
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  var e;
                  return this.isVariantNode
                    ? this
                    : null === (e = this.parent) || void 0 === e
                    ? void 0
                    : e.getClosestVariantNode();
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0];
                  if (n)
                    return null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.getVariantContext();
                  if (!this.isControllingVariants) {
                    var r =
                      (null === (t = this.parent) || void 0 === t
                        ? void 0
                        : t.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (r.initial = this.props.initial),
                      r
                    );
                  }
                  for (var a = {}, i = 0; i < El; i++) {
                    var o = Sl[i],
                      l = this.props[o];
                    (Ot(l) || !1 === l) && (a[o] = l);
                  }
                  return a;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t,
                    n = this.getClosestVariantNode();
                  if (n)
                    return (
                      null === (t = n.variantChildren) ||
                        void 0 === t ||
                        t.add(e),
                      function () {
                        return n.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  var t;
                  this.values.delete(e),
                    null === (t = this.valueSubscriptions.get(e)) ||
                      void 0 === t ||
                      t(),
                    this.valueSubscriptions.delete(e),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = Qr(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  return void 0 === this.latestValues[e] && this.current
                    ? this.readValueFromInstance(this.current, e, this.options)
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = er(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || an(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new Ur()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  for (
                    var t,
                      n,
                      r = arguments.length,
                      a = new Array(r > 1 ? r - 1 : 0),
                      i = 1;
                    i < r;
                    i++
                  )
                    a[i - 1] = arguments[i];
                  null === (n = this.events[e]) ||
                    void 0 === n ||
                    (t = n).notify.apply(t, a);
                },
              },
            ]),
            e
          );
        })(),
        Sl = ["initial"].concat(v(eo)),
        El = Sl.length,
        Cl = ["transition", "transitionEnd"],
        Pl = (function (e) {
          w(n, e);
          var t = P(n);
          function n() {
            return m(this, n), t.apply(this, arguments);
          }
          return (
            x(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  var n;
                  return null === (n = e.style) || void 0 === n ? void 0 : n[t];
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    i = Fn(e, Cl),
                    o = t.transformValues,
                    l = (function (e, t, n) {
                      var r,
                        a = {};
                      for (var i in e) {
                        var o = Sa(i, t);
                        a[i] =
                          void 0 !== o
                            ? o
                            : null === (r = n.getValue(i)) || void 0 === r
                            ? void 0
                            : r.get();
                      }
                      return a;
                    })(i, r || {}, this);
                  if (
                    (o && (a && (a = o(a)), i && (i = o(i)), l && (l = o(l))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        i = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = i.length;
                      if (o)
                        for (var l = 0; l < o; l++) {
                          var s = i[l],
                            u = t[s],
                            c = null;
                          Array.isArray(u) && (c = u[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[s]) && void 0 !== r
                                      ? r
                                      : e.readValue(s)) && void 0 !== a
                                  ? a
                                  : t[s]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c &&
                              (/^\-?\d*\.?\d+$/.test(c) || zr(c))
                                ? (c = parseFloat(c))
                                : !ya(c) && oa.test(u) && (c = pa(s, u)),
                              e.addValue(s, Qr(c, { owner: e })),
                              void 0 === n[s] && (n[s] = c),
                              null !== c && e.setBaseTarget(s, c));
                        }
                    })(this, i, l);
                    var s = (function (e, t, n, r) {
                      var a = nl(e, t, r);
                      return hl(e, (t = a.target), n, (r = a.transitionEnd));
                    })(this, i, l, a);
                    (a = s.transitionEnd), (i = s.target);
                  }
                  return Nt({ transition: r, transitionEnd: a }, i);
                },
              },
            ]),
            n
          );
        })(wl);
      var jl = (function (e) {
        w(n, e);
        var t = P(n);
        function n() {
          return m(this, n), t.apply(this, arguments);
        }
        return (
          x(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (nn.has(t)) {
                  var n = da(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  i = (sn(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof i ? i.trim() : i;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return Qo(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                Tn(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return Zn(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                an(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                Xn(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(Pl);
      function Tl(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = S(e));

        );
        return e;
      }
      function Nl() {
        return (
          (Nl =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = Tl(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          Nl.apply(this, arguments)
        );
      }
      var Rl = (function (e) {
          w(n, e);
          var t = P(n);
          function n() {
            var e;
            return (
              m(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            x(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  var n;
                  return nn.has(t)
                    ? (null === (n = da(t)) || void 0 === n
                        ? void 0
                        : n.default) || 0
                    : ((t = Kn.has(t) ? t : qn(t)), e.getAttribute(t));
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return Jn(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  Wn(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  Gn(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = $n(e.tagName)),
                    Nl(S(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(Pl),
        Ll = function (e, t) {
          return Jt(e)
            ? new Rl(t, { enableHardwareAcceleration: !1 })
            : new jl(t, { enableHardwareAcceleration: !0 });
        };
      function Ml(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var Al = {
          correct: function (e, t) {
            if (!t.target) return e;
            if ("string" === typeof e) {
              if (!wn.test(e)) return e;
              e = parseFloat(e);
            }
            var n = Ml(e, t.target.x),
              r = Ml(e, t.target.y);
            return "".concat(n, "% ").concat(r, "%");
          },
        },
        _l = "_$css",
        Ol = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = e.includes("var("),
              o = [];
            i &&
              (e = e.replace(Jo, function (e) {
                return o.push(e), _l;
              }));
            var l = oa.parse(e);
            if (l.length > 5) return a;
            var s = oa.createTransformer(e),
              u = "number" !== typeof l[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (l[0 + u] /= c), (l[1 + u] /= f);
            var d = Aa(c, f, 0.5);
            "number" === typeof l[2 + u] && (l[2 + u] /= d),
              "number" === typeof l[3 + u] && (l[3 + u] /= d);
            var p = s(l);
            if (i) {
              var h = 0;
              p = p.replace(_l, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        Dl = (function (e) {
          w(n, e);
          var t = P(n);
          function n() {
            return m(this, n), t.apply(this, arguments);
          }
          return (
            x(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    i = n.switchLayoutGroup,
                    o = n.layoutId,
                    l = r.projection;
                  (e = Vl),
                    Object.assign(en, e),
                    l &&
                      (a.group && a.group.add(l),
                      i && i.register && o && i.register(l),
                      l.root.didUpdate(),
                      l.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      l.setOptions(
                        Nt(
                          Nt({}, l.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (Ht.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    i = n.drag,
                    o = n.isPresent,
                    l = a.projection;
                  return l
                    ? ((l.isPresent = o),
                      i || e.layoutDependency !== r || void 0 === r
                        ? l.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? l.promote()
                          : l.relegate() ||
                            ot.postRender(function () {
                              var e;
                              (null === (e = l.getStack()) || void 0 === e
                                ? void 0
                                : e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    (null === n || void 0 === n ? void 0 : n.group) &&
                      n.group.remove(a),
                    (null === r || void 0 === r ? void 0 : r.deregister) &&
                      r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  null === e || void 0 === e || e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(t.Component);
      var Vl = {
          borderRadius: Nt(
            Nt({}, Al),
            {},
            {
              applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
              ],
            }
          ),
          borderTopLeftRadius: Al,
          borderTopRightRadius: Al,
          borderBottomLeftRadius: Al,
          borderBottomRightRadius: Al,
          boxShadow: Ol,
        },
        Fl = {
          measureLayout: function (e) {
            var n = p(Vr(), 2),
              r = n[0],
              a = n[1],
              i = (0, t.useContext)(kt);
            return t.createElement(
              Dl,
              Nt(
                Nt({}, e),
                {},
                {
                  layoutGroup: i,
                  switchLayoutGroup: (0, t.useContext)(Yt),
                  isPresent: r,
                  safeToRemove: a,
                }
              )
            );
          },
        };
      var zl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Il = zl.length,
        Bl = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        Ul = function (e) {
          return "number" === typeof e || wn.test(e);
        };
      function Wl(e, t, n, r, a, i) {
        a
          ? ((e.opacity = Aa(0, void 0 !== n.opacity ? n.opacity : 1, $l(r))),
            (e.opacityExit = Aa(
              void 0 !== t.opacity ? t.opacity : 1,
              0,
              Ql(r)
            )))
          : i &&
            (e.opacity = Aa(
              void 0 !== t.opacity ? t.opacity : 1,
              void 0 !== n.opacity ? n.opacity : 1,
              r
            ));
        for (var o = 0; o < Il; o++) {
          var l = "border".concat(zl[o], "Radius"),
            s = Hl(t, l),
            u = Hl(n, l);
          if (void 0 !== s || void 0 !== u)
            s || (s = 0),
              u || (u = 0),
              0 === s || 0 === u || Ul(s) === Ul(u)
                ? ((e[l] = Math.max(Aa(Bl(s), Bl(u), r), 0)),
                  (kn.test(u) || kn.test(s)) && (e[l] += "%"))
                : (e[l] = u);
        }
        (t.rotate || n.rotate) &&
          (e.rotate = Aa(t.rotate || 0, n.rotate || 0, r));
      }
      function Hl(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var $l = Yl(0, 0.5, Ga),
        Ql = Yl(0.5, 0.95, Ya);
      function Yl(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(Wa(e, t, r));
        };
      }
      function ql(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Xl(e, t) {
        ql(e.x, t.x), ql(e.y, t.y);
      }
      function Kl(e, t, n, r, a) {
        return (
          (e = Do((e -= t), 1 / n, r)), void 0 !== a && (e = Do(e, 1 / a, r)), e
        );
      }
      function Gl(e, t, n, r, a) {
        var i = p(n, 3),
          o = i[0],
          l = i[1],
          s = i[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (kn.test(t)) {
            (t = parseFloat(t)), (t = Aa(o.min, o.max, t / 100) - o.min);
          }
          if ("number" === typeof t) {
            var l = Aa(i.min, i.max, r);
            e === i && (l -= t),
              (e.min = Kl(e.min, t, n, l, a)),
              (e.max = Kl(e.max, t, n, l, a));
          }
        })(e, t[o], t[l], t[s], t.scale, r, a);
      }
      var Zl = ["x", "scaleX", "originX"],
        Jl = ["y", "scaleY", "originY"];
      function es(e, t, n, r) {
        Gl(
          e.x,
          t,
          Zl,
          null === n || void 0 === n ? void 0 : n.x,
          null === r || void 0 === r ? void 0 : r.x
        ),
          Gl(
            e.y,
            t,
            Jl,
            null === n || void 0 === n ? void 0 : n.y,
            null === r || void 0 === r ? void 0 : r.y
          );
      }
      function ts(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function ns(e) {
        return ts(e.x) && ts(e.y);
      }
      function rs(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function as(e) {
        return go(e.x) / go(e.y);
      }
      var is = (function () {
        function e() {
          m(this, e), (this.members = []);
        }
        return (
          x(e, [
            {
              key: "add",
              value: function (e) {
                Ir(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (Br(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n,
                  r = this.lead;
                e !== r &&
                  ((this.prevLead = r),
                  (this.lead = e),
                  e.show(),
                  r &&
                    (r.instance && r.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = r),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    r.snapshot &&
                      ((e.snapshot = r.snapshot),
                      (e.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                    (null === (n = e.root) || void 0 === n
                      ? void 0
                      : n.isUpdating) && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && r.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t, n, r, a, i;
                  null === (n = (t = e.options).onExitComplete) ||
                    void 0 === n ||
                    n.call(t),
                    null ===
                      (i =
                        null === (r = e.resumingFrom) || void 0 === r
                          ? void 0
                          : (a = r.options).onExitComplete) ||
                      void 0 === i ||
                      i.call(a);
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function os(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          i = e.y.translate / t.y;
        if (
          ((a || i) &&
            (r = "translate3d(".concat(a, "px, ").concat(i, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            l = n.rotateX,
            s = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            l && (r += "rotateX(".concat(l, "deg) ")),
            s && (r += "rotateY(".concat(s, "deg) "));
        }
        var u = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === u && 1 === c) ||
            (r += "scale(".concat(u, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var ls = function (e, t) {
          return e.depth - t.depth;
        },
        ss = (function () {
          function e() {
            m(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            x(e, [
              {
                key: "add",
                value: function (e) {
                  Ir(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  Br(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(ls),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })(),
        us = ["", "X", "Y", "Z"],
        cs = 0;
      function fs(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e(t) {
            var r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            m(this, e),
              (this.id = cs++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isTransformDirty = !1),
              (this.isProjectionDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                r.nodes.forEach(hs), r.nodes.forEach(bs), r.nodes.forEach(xs);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = a),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat(v(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ss());
          }
          return (
            x(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new Ur()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  null === t || void 0 === t || t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (e, t) {
                  this.potentialNodes.set(e, t);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      e instanceof SVGElement && "svg" !== e.tagName),
                      (this.instance = e);
                    var i = this.options,
                      o = i.layoutId,
                      l = i.layout,
                      s = i.visualElement;
                    if (
                      (s && !s.current && s.mount(e),
                      this.root.nodes.add(this),
                      null === (n = this.parent) ||
                        void 0 === n ||
                        n.children.add(this),
                      this.elementId &&
                        this.root.potentialNodes.delete(this.elementId),
                      a && (l || o) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var u,
                        c = function () {
                          return (r.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (r.root.updateBlockedByResize = !0),
                          u && u(),
                          (u = Ri(c, 250)),
                          Ht.hasAnimatedSinceResize &&
                            ((Ht.hasAnimatedSinceResize = !1),
                            r.nodes.forEach(ys));
                      });
                    }
                    o && this.root.registerSharedNode(o, this),
                      !1 !== this.options.animate &&
                        s &&
                        (o || l) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t,
                            n,
                            a,
                            i,
                            o,
                            l = e.delta,
                            u = e.hasLayoutChanged,
                            c = e.hasRelativeTargetChanged,
                            f = e.layout;
                          if (r.isTreeAnimationBlocked())
                            return (
                              (r.target = void 0),
                              void (r.relativeTarget = void 0)
                            );
                          var d =
                              null !==
                                (n =
                                  null !== (t = r.options.transition) &&
                                  void 0 !== t
                                    ? t
                                    : s.getDefaultTransition()) && void 0 !== n
                                ? n
                                : js,
                            p = s.getProps(),
                            h = p.onLayoutAnimationStart,
                            v = p.onLayoutAnimationComplete,
                            m = !r.targetLayout || !rs(r.targetLayout, f) || c,
                            g = !u && c;
                          if (
                            r.options.layoutRoot ||
                            (null === (a = r.resumeFrom) || void 0 === a
                              ? void 0
                              : a.instance) ||
                            g ||
                            (u && (m || !r.currentAnimation))
                          ) {
                            r.resumeFrom &&
                              ((r.resumingFrom = r.resumeFrom),
                              (r.resumingFrom.resumingFrom = void 0)),
                              r.setAnimationOrigin(l, g);
                            var y = Nt(
                              Nt({}, Hi(d, "layout")),
                              {},
                              { onPlay: h, onComplete: v }
                            );
                            (s.shouldReduceMotion || r.options.layoutRoot) &&
                              ((y.delay = 0), (y.type = !1)),
                              r.startAnimation(y);
                          } else u || 0 !== r.animationProgress || ys(r), r.isLead() && (null === (o = (i = r.options).onExitComplete) || void 0 === o || o.call(i));
                          r.targetLayout = f;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  var e, t;
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.remove(this),
                    null === (t = this.parent) ||
                      void 0 === t ||
                      t.children.delete(this),
                    (this.instance = void 0),
                    lt.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  var e;
                  return (
                    this.isAnimationBlocked ||
                    (null === (e = this.parent) || void 0 === e
                      ? void 0
                      : e.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  var e;
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    null === (e = this.nodes) || void 0 === e || e.forEach(ks),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e;
                  return null === (e = this.options.visualElement) ||
                    void 0 === e
                    ? void 0
                    : e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  if (this.root.isUpdateBlocked())
                    null === (t = (e = this.options).onExitComplete) ||
                      void 0 === t ||
                      t.call(e);
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var a = 0; a < this.path.length; a++) {
                      var i = this.path[a];
                      (i.shouldResetTransform = !0),
                        i.updateScroll("snapshot"),
                        i.options.layoutRoot && i.willUpdate(!1);
                    }
                    var o = this.options,
                      l = o.layoutId,
                      s = o.layout;
                    (void 0 !== l || s) &&
                      ((this.prevTransformTemplateValue =
                        null === (n = this.getTransformTemplate()) ||
                        void 0 === n
                          ? void 0
                          : n(this.latestValues, "")),
                      this.updateSnapshot(),
                      r && this.notifyListeners("willUpdate"));
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(ms)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(Ts),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(gs),
                    this.nodes.forEach(ds),
                    this.nodes.forEach(ps),
                    this.clearAllSnapshots(),
                    st.update(),
                    st.preRender(),
                    st.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(vs), this.sharedNodes.forEach(ws);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  ot.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  ot.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  var e;
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll();
                      }
                    var n = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      }),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox),
                      null === (e = this.options.visualElement) ||
                        void 0 === e ||
                        e.notify(
                          "LayoutMeasure",
                          this.layout.layoutBox,
                          null === n || void 0 === n ? void 0 : n.layoutBox
                        );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  var e;
                  if (i) {
                    var t = this.isLayoutDirty || this.shouldResetTransform,
                      n = this.projectionDelta && !ns(this.projectionDelta),
                      r =
                        null === (e = this.getTransformTemplate()) ||
                        void 0 === e
                          ? void 0
                          : e(this.latestValues, ""),
                      a = r !== this.prevTransformTemplateValue;
                    t &&
                      (n || Ao(this.latestValues) || a) &&
                      (i(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this.measurePageBox(),
                    n = this.removeElementScroll(t);
                  return (
                    e && (n = this.removeTransform(n)),
                    Rs(n),
                    {
                      animationId: this.root.animationId,
                      measuredBox: t,
                      layoutBox: n,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e)
                    return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (Bo(t.x, n.offset.x), Bo(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Xl(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      i = r.options;
                    if (r !== this.root && a && i.layoutScroll) {
                      if (a.isRoot) {
                        Xl(t, e);
                        var o = this.root.scroll;
                        o && (Bo(t.x, -o.offset.x), Bo(t.y, -o.offset.y));
                      }
                      Bo(t.x, a.offset.x), Bo(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Xl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      $o(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      Ao(a.latestValues) && $o(n, a.latestValues);
                  }
                  return Ao(this.latestValues) && $o(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t,
                    n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  Xl(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    if (a.instance && Ao(a.latestValues)) {
                      Mo(a.latestValues) && a.updateSnapshot();
                      var i = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                      Xl(i, a.measurePageBox()),
                        es(
                          n,
                          a.latestValues,
                          null === (t = a.snapshot) || void 0 === t
                            ? void 0
                            : t.layoutBox,
                          i
                        );
                    }
                  }
                  return Ao(this.latestValues) && es(n, this.latestValues), n;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    (this.isProjectionDirty = !0),
                    this.root.scheduleUpdateProjection();
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = Nt(
                    Nt(Nt({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t = this.getLead();
                  if (
                    (this.isProjectionDirty ||
                      (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = t.isTransformDirty),
                    this.isProjectionDirty ||
                      this.attemptToResolveRelativeTarget)
                  ) {
                    var n = this.options,
                      r = n.layout,
                      a = n.layoutId;
                    if (this.layout && (r || a)) {
                      if (!this.targetDelta && !this.relativeTarget) {
                        var i = this.getClosestProjectingParent();
                        i && i.layout
                          ? ((this.relativeParent = i),
                            (this.relativeTarget = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.relativeTargetOrigin = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            So(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              i.layout.layoutBox
                            ),
                            Xl(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      var o, l, s;
                      if (this.relativeTarget || this.targetDelta)
                        if (
                          (this.target ||
                            ((this.target = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            }),
                            (this.targetWithTransforms = {
                              x: { min: 0, max: 0 },
                              y: { min: 0, max: 0 },
                            })),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          (null === (e = this.relativeParent) || void 0 === e
                            ? void 0
                            : e.target)
                            ? ((o = this.target),
                              (l = this.relativeTarget),
                              (s = this.relativeParent.target),
                              ko(o.x, l.x, s.x),
                              ko(o.y, l.y, s.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : Xl(this.target, this.layout.layoutBox),
                              zo(this.target, this.targetDelta))
                            : Xl(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var u = this.getClosestProjectingParent();
                          u &&
                          Boolean(u.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !u.options.layoutScroll &&
                          u.target
                            ? ((this.relativeParent = u),
                              (this.relativeTarget = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              (this.relativeTargetOrigin = {
                                x: { min: 0, max: 0 },
                                y: { min: 0, max: 0 },
                              }),
                              So(
                                this.relativeTargetOrigin,
                                this.target,
                                u.target
                              ),
                              Xl(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !Mo(this.parent.latestValues) &&
                    !_o(this.parent.latestValues)
                  )
                    return (this.parent.relativeTarget ||
                      this.parent.targetDelta ||
                      this.parent.options.layoutRoot) &&
                      this.parent.layout
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.isProjectionDirty,
                    n = this.isTransformDirty;
                  this.isProjectionDirty = this.isTransformDirty = !1;
                  var r = this.getLead(),
                    a = Boolean(this.resumingFrom) || this !== r,
                    i = !0;
                  if ((t && (i = !1), a && n && (i = !1), !i)) {
                    var o = this.options,
                      l = o.layout,
                      s = o.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (null === (e = this.parent) || void 0 === e
                          ? void 0
                          : e.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (l || s))
                    ) {
                      Xl(this.layoutCorrected, this.layout.layoutBox),
                        (function (e, t, n) {
                          var r,
                            a,
                            i =
                              arguments.length > 3 &&
                              void 0 !== arguments[3] &&
                              arguments[3],
                            o = n.length;
                          if (o) {
                            var l, s;
                            t.x = t.y = 1;
                            for (var u = 0; u < o; u++)
                              (s = (l = n[u]).projectionDelta),
                                "contents" !==
                                  (null ===
                                    (a =
                                      null === (r = l.instance) || void 0 === r
                                        ? void 0
                                        : r.style) || void 0 === a
                                    ? void 0
                                    : a.display) &&
                                  (i &&
                                    l.options.layoutScroll &&
                                    l.scroll &&
                                    l !== l.root &&
                                    $o(e, {
                                      x: -l.scroll.offset.x,
                                      y: -l.scroll.offset.y,
                                    }),
                                  s &&
                                    ((t.x *= s.x.scale),
                                    (t.y *= s.y.scale),
                                    zo(e, s)),
                                  i &&
                                    Ao(l.latestValues) &&
                                    $o(e, l.latestValues));
                            (t.x = Io(t.x)), (t.y = Io(t.y));
                          }
                        })(this.layoutCorrected, this.treeScale, this.path, a);
                      var u = r.target;
                      if (u) {
                        this.projectionDelta ||
                          ((this.projectionDelta = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }),
                          (this.projectionDeltaWithTransform = {
                            x: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                            y: {
                              translate: 0,
                              scale: 1,
                              origin: 0,
                              originPoint: 0,
                            },
                          }));
                        var c = this.treeScale.x,
                          f = this.treeScale.y,
                          d = this.projectionTransform;
                        xo(
                          this.projectionDelta,
                          this.layoutCorrected,
                          u,
                          this.latestValues
                        ),
                          (this.projectionTransform = os(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === d &&
                            this.treeScale.x === c &&
                            this.treeScale.y === f) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", u));
                      }
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e,
                    t,
                    n,
                    r =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  null === (t = (e = this.options).scheduleRender) ||
                    void 0 === t ||
                    t.call(e),
                    r &&
                      (null === (n = this.getStack()) ||
                        void 0 === n ||
                        n.scheduleRender()),
                    this.resumingFrom &&
                      !this.resumingFrom.instance &&
                      (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t,
                    n,
                    r = this,
                    a =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    i = this.snapshot,
                    o =
                      (null === i || void 0 === i ? void 0 : i.latestValues) ||
                      {},
                    l = Nt({}, this.latestValues),
                    s = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                    };
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !a);
                  var u = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                    c =
                      (null === i || void 0 === i ? void 0 : i.source) !==
                      (null === (t = this.layout) || void 0 === t
                        ? void 0
                        : t.source),
                    f =
                      ((null === (n = this.getStack()) || void 0 === n
                        ? void 0
                        : n.members.length) || 0) <= 1,
                    d = Boolean(
                      c &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Ps)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (t) {
                      var n,
                        a = t / 1e3;
                      Ss(s.x, e.x, a),
                        Ss(s.y, e.y, a),
                        r.setTargetDelta(s),
                        r.relativeTarget &&
                          r.relativeTargetOrigin &&
                          r.layout &&
                          (null === (n = r.relativeParent) || void 0 === n
                            ? void 0
                            : n.layout) &&
                          (So(
                            u,
                            r.layout.layoutBox,
                            r.relativeParent.layout.layoutBox
                          ),
                          Cs(r.relativeTarget, r.relativeTargetOrigin, u, a)),
                        c &&
                          ((r.animationValues = l),
                          Wl(l, o, r.latestValues, a, d, f)),
                        r.root.scheduleUpdateProjection(),
                        r.scheduleRender(),
                        (r.animationProgress = a);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t,
                    n,
                    r = this;
                  this.notifyListeners("animationStart"),
                    null === (t = this.currentAnimation) ||
                      void 0 === t ||
                      t.stop(),
                    this.resumingFrom &&
                      (null === (n = this.resumingFrom.currentAnimation) ||
                        void 0 === n ||
                        n.stop()),
                    this.pendingAnimation &&
                      (lt.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = ot.update(function () {
                      (Ht.hasAnimatedSinceResize = !0),
                        (r.currentAnimation = (function (e, t) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            r = an(e) ? e : Qr(e);
                          return (
                            r.start(Qi("", r, t, n)),
                            {
                              stop: function () {
                                return r.stop();
                              },
                              isAnimating: function () {
                                return r.isAnimating();
                              },
                            }
                          );
                        })(
                          0,
                          1e3,
                          Nt(
                            Nt({}, e),
                            {},
                            {
                              onUpdate: function (t) {
                                var n;
                                r.mixTargetDelta(t),
                                  null === (n = e.onUpdate) ||
                                    void 0 === n ||
                                    n.call(e, t);
                              },
                              onComplete: function () {
                                var t;
                                null === (t = e.onComplete) ||
                                  void 0 === t ||
                                  t.call(e),
                                  r.completeAnimation();
                              },
                            }
                          )
                        )),
                        r.resumingFrom &&
                          (r.resumingFrom.currentAnimation =
                            r.currentAnimation),
                        (r.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  var e;
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0)),
                    null === (e = this.getStack()) ||
                      void 0 === e ||
                      e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  var e;
                  this.currentAnimation &&
                    (null === (e = this.mixTargetDelta) ||
                      void 0 === e ||
                      e.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      Ls(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || {
                        x: { min: 0, max: 0 },
                        y: { min: 0, max: 0 },
                      };
                      var i = go(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + i);
                      var o = go(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    Xl(t, n),
                      $o(t, a),
                      xo(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  var n, r, a;
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new is()),
                    this.sharedNodes.get(e).add(t),
                    t.promote({
                      transition:
                        null === (n = t.options.initialPromotionConfig) ||
                        void 0 === n
                          ? void 0
                          : n.transition,
                      preserveFollowOpacity:
                        null ===
                          (a =
                            null === (r = t.options.initialPromotionConfig) ||
                            void 0 === r
                              ? void 0
                              : r.shouldPreserveFollowOpacity) || void 0 === a
                          ? void 0
                          : a.call(r, t),
                    });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < us.length; a++) {
                        var i = "rotate" + us[a];
                        n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
                      }
                      for (var o in (null === e || void 0 === e || e.render(),
                      r))
                        e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var a = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = nr(n.pointerEvents) || ""),
                      (r.transform = a ? a(this.latestValues, "") : "none"),
                      r
                    );
                  var i = this.getLead();
                  if (!this.projectionDelta || !this.layout || !i.target) {
                    var o = {};
                    return (
                      this.options.layoutId &&
                        ((o.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (o.pointerEvents = nr(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !Ao(this.latestValues) &&
                        ((o.transform = a ? a({}, "") : "none"),
                        (this.hasProjected = !1)),
                      o
                    );
                  }
                  var l = i.animationValues || i.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = os(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      l
                    )),
                    a && (r.transform = a(l, r.transform));
                  var s = this.projectionDelta,
                    u = s.x,
                    c = s.y;
                  for (var f in ((r.transformOrigin = ""
                    .concat(100 * u.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  i.animationValues
                    ? (r.opacity =
                        i === this
                          ? null !==
                              (t =
                                null !== (e = l.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : l.opacityExit)
                    : (r.opacity =
                        i === this
                          ? void 0 !== l.opacity
                            ? l.opacity
                            : ""
                          : void 0 !== l.opacityExit
                          ? l.opacityExit
                          : 0),
                  en))
                    if (void 0 !== l[f]) {
                      var d = en[f],
                        p = d.correct,
                        h = d.applyTo,
                        v = "none" === r.transform ? l[f] : p(l[f], i);
                      if (h)
                        for (var m = h.length, g = 0; g < m; g++) r[h[g]] = v;
                      else r[f] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        i === this ? nr(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(ms),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function ds(e) {
        e.updateLayout();
      }
      function ps(e) {
        var t,
          n,
          r,
          a =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && a && e.hasListeners("didUpdate")) {
          var i = e.layout,
            o = i.layoutBox,
            l = i.measuredBox,
            s = e.options.animationType,
            u = a.source !== e.layout.source;
          "size" === s
            ? No(function (e) {
                var t = u ? a.measuredBox[e] : a.layoutBox[e],
                  n = go(t);
                (t.min = o[e].min), (t.max = t.min + n);
              })
            : Ls(s, a.layoutBox, o) &&
              No(function (e) {
                var t = u ? a.measuredBox[e] : a.layoutBox[e],
                  n = go(o[e]);
                t.max = t.min + n;
              });
          var c = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          xo(c, o, a.layoutBox);
          var f = {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
          u
            ? xo(f, e.applyTransform(l, !0), a.measuredBox)
            : xo(f, o, a.layoutBox);
          var d = !ns(c),
            p = !1;
          if (!e.resumeFrom) {
            var h = e.getClosestProjectingParent();
            if (h && !h.resumeFrom) {
              var v = h.snapshot,
                m = h.layout;
              if (v && m) {
                var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                So(g, a.layoutBox, v.layoutBox);
                var y = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                So(y, o, m.layoutBox),
                  rs(g, y) || (p = !0),
                  h.options.layoutRoot &&
                    ((e.relativeTarget = y),
                    (e.relativeTargetOrigin = g),
                    (e.relativeParent = h));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: o,
            snapshot: a,
            delta: f,
            layoutDelta: c,
            hasLayoutChanged: d,
            hasRelativeTargetChanged: p,
          });
        } else
          e.isLead() &&
            (null === (r = (n = e.options).onExitComplete) ||
              void 0 === r ||
              r.call(n));
        e.options.transition = void 0;
      }
      function hs(e) {
        e.isProjectionDirty ||
          (e.isProjectionDirty = Boolean(
            e.parent && e.parent.isProjectionDirty
          )),
          e.isTransformDirty ||
            (e.isTransformDirty = Boolean(
              e.parent && e.parent.isTransformDirty
            ));
      }
      function vs(e) {
        e.clearSnapshot();
      }
      function ms(e) {
        e.clearMeasurements();
      }
      function gs(e) {
        var t = e.options.visualElement;
        (null === t || void 0 === t
          ? void 0
          : t.getProps().onBeforeLayoutMeasure) &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function ys(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function bs(e) {
        e.resolveTargetDelta();
      }
      function xs(e) {
        e.calcProjection();
      }
      function ks(e) {
        e.resetRotation();
      }
      function ws(e) {
        e.removeLeadSnapshot();
      }
      function Ss(e, t, n) {
        (e.translate = Aa(t.translate, 0, n)),
          (e.scale = Aa(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function Es(e, t, n, r) {
        (e.min = Aa(t.min, n.min, r)), (e.max = Aa(t.max, n.max, r));
      }
      function Cs(e, t, n, r) {
        Es(e.x, t.x, n.x, r), Es(e.y, t.y, n.y, r);
      }
      function Ps(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var js = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Ts(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function Ns(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Rs(e) {
        Ns(e.x), Ns(e.y);
      }
      function Ls(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !yo(as(t), as(n), 0.2))
        );
      }
      var Ms = fs({
          attachResizeListener: function (e, t) {
            return ur(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        As = { current: void 0 },
        _s = fs({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!As.current) {
              var e = new Ms(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (As.current = e);
            }
            return As.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        Os = Nt(Nt(Nt(Nt({}, oo), Dr), Go), Fl),
        Ds = Gt(function (e, t) {
          return (function (e, t, n, r, a) {
            var i = t.forwardMotionProps,
              o = void 0 !== i && i;
            return Nt(
              Nt({}, Jt(e) ? lr : sr),
              {},
              {
                preloadedFeatures: n,
                useRender: Yn(o),
                createVisualElement: r,
                projectionNodeConstructor: a,
                Component: e,
              }
            );
          })(e, t, Os, Ll, _s);
        });
      var Vs = function () {
          return (0, i.jsx)("div", {
            className: "Home",
            children: (0, i.jsxs)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: 50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 50, opacity: 0 },
              transition: { duration: 1 },
              children: [
                (0, i.jsxs)("div", {
                  className: "profile",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "iconposition",
                      children: [
                        (0, i.jsx)("div", {
                          className: "icons",
                          children: "a",
                        }),
                        (0, i.jsx)("div", {
                          className: "icons",
                          children: "b",
                        }),
                        (0, i.jsx)("div", {
                          className: "icons",
                          children: "c",
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "profile-avatar",
                      children: [
                        (0, i.jsx)("img", {
                          src: Pt,
                          alt: "d",
                          className: "profile-img",
                        }),
                        (0, i.jsx)("div", {
                          className: "profile-name",
                          children: "Shubham",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "homecontent",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "homeleft",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "homewidget",
                          children: [
                            (0, i.jsx)("h1", { children: "Introduction" }),
                            (0, i.jsx)("p", { children: "student at college" }),
                            (0, i.jsx)("p", { children: "live in delhi" }),
                            (0, i.jsx)("p", { children: "ign wrake" }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "homewidget",
                          children: [
                            (0, i.jsx)("h1", { children: "Education" }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "college school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "senoir school school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "high school school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "homeright",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "homewidget",
                          children: [
                            (0, i.jsx)("h1", { children: "work Experience" }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "college school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "senoir school school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: "school",
                              children: (0, i.jsxs)("p", {
                                children: [
                                  "high school school from",
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "sos hgs",
                                  }),
                                  " in ",
                                  (0, i.jsx)("br", {}),
                                  (0, i.jsx)("k", {
                                    className: "highlight",
                                    children: "2017 to 2019",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "homewidget",
                          children:
                            "Living, learning, & leveling up one day at a time.",
                        }),
                        (0, i.jsxs)("button", {
                          className: "resumeButton homewidget",
                          children: [
                            (0, i.jsx)("div", {
                              className: "resumecontent",
                              children: "resume",
                            }),
                            (0, i.jsx)("div", {
                              className: "downloadicon",
                              children: "do",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Fs = function (e) {
          return (0, i.jsx)("span", {
            className: "word-wrapper",
            children: e.children,
          });
        },
        zs = { paragraph: "p", heading1: "h1", heading2: "h2" },
        Is = function (e) {
          var t,
            n = {
              hidden: {
                y: "200%",
                color: "#0055FF",
                transition: {
                  ease: [0.455, 0.03, 0.515, 0.955],
                  duration: 0.85,
                },
              },
              visible: {
                y: 0,
                color: "#FF0088",
                transition: {
                  ease: [0.455, 0.03, 0.515, 0.955],
                  duration: 0.75,
                },
              },
            },
            r = e.text.split(" "),
            a = [],
            o = N(r.entries());
          try {
            for (o.s(); !(t = o.n()).done; ) {
              var l = p(t.value, 2)[1];
              a.push(l.split(""));
            }
          } catch (u) {
            o.e(u);
          } finally {
            o.f();
          }
          a.map(function (e) {
            return e.push("\xa0");
          });
          var s = zs[e.type];
          return (0, i.jsx)(s, {
            children: a.map(function (e, t) {
              return (0, i.jsx)(
                Fs,
                {
                  children: a[t].flat().map(function (e, t) {
                    return (0,
                    i.jsx)("span", { style: { overflow: "hidden", display: "inline-block" }, children: (0, i.jsx)(Ds.span, { style: { display: "inline-block" }, variants: n, children: e }) }, t);
                  }),
                },
                t
              );
            }),
          });
        },
        Bs = function () {
          var e = p((0, t.useState)(!0), 2),
            n = e[0];
          e[1];
          return (0, i.jsx)("div", {
            className: "About",
            children: (0, i.jsx)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: 50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 50, opacity: 0 },
              transition: { duration: 1 },
              children: (0, i.jsxs)("div", {
                className: "aboutbody",
                children: [
                  (0, i.jsx)(Ds.div, {
                    initial: "hidden",
                    animate: n ? "visible" : "hidden",
                    variants: {
                      visible: { transition: { staggerChildren: 0.025 } },
                    },
                    children: (0, i.jsx)("div", {
                      className: "centerheading",
                      children: [{ type: "heading1", text: "About" }].map(
                        function (e, n) {
                          return (0, t.createElement)(
                            Is,
                            Nt(Nt({}, e), {}, { key: n })
                          );
                        }
                      ),
                    }),
                  }),
                  (0, i.jsxs)("p", {
                    children: [
                      "Hi,I am ",
                      (0, i.jsx)("aaa", { children: "Shubham" }),
                      " protagonist of my story and I'm absolutely ecstatic to introduce myself! I am an student who loves finding creative ways to solve challenging problems. I'm really motivated by working with others, especially on projects that can create a positive impact in the my skills. I strongly believe in teamwork, open collaboration and knowledge sharing, so I invest my energy in learning new skillsets and finding out what works best for each group. In my free time, I enjoy playing story based video games and reading blogs about trends, tech, and art. Furthermore, I'm always looking for opportunities to try out new activities; such as hiking or visiting different cities around the world(\"maybe in future i get a chance.\")!",
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "table",
                    children: [
                      (0, i.jsx)("div", {
                        className: "aboutheadtable",
                        children: "Main skills",
                      }),
                      (0, i.jsxs)("div", {
                        className: "aboutheadlist",
                        children: [
                          (0, i.jsx)("p", {
                            children: "problem solving, algorithm building",
                          }),
                          (0, i.jsx)("p", {
                            children: "python, c++, c, javascript",
                          }),
                          (0, i.jsx)("p", {
                            children: "frontend, html5, css3, js, react",
                          }),
                          (0, i.jsx)("p", { children: "SQL, mongodb" }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "aboutheadtable",
                        children: "Hobies",
                      }),
                      (0, i.jsxs)("div", {
                        className: "aboutheadlist",
                        children: [
                          (0, i.jsx)("p", { children: "d" }),
                          (0, i.jsx)("p", { children: "c" }),
                          (0, i.jsx)("p", { children: "b" }),
                          (0, i.jsx)("p", { children: "a" }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "aboutheadtable",
                        children: "Also busy with",
                      }),
                      (0, i.jsxs)("div", {
                        className: "aboutheadlist",
                        children: [
                          (0, i.jsx)("p", { children: "Games" }),
                          (0, i.jsx)("p", { children: "phone" }),
                          (0, i.jsx)("p", { children: "blogs" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      var Us =
        n.p + "static/media/cplusplus.f5ed104b00a745b1e7719024c2d6ce30.svg";
      var Ws = n.p + "static/media/c.13f24c473f4fd7f944b1410cc8058a89.svg";
      var Hs = n.p + "static/media/python.af7fb8bab2f10b12cb04731a32fe6015.svg";
      var $s = n.p + "static/media/html.ed5a66323fb7466700b1b551dcf00ea5.svg";
      var Qs = n.p + "static/media/css.1d023123249332b8246d98e506eaa7a6.svg";
      var Ys =
        n.p + "static/media/javascript.4c1b5332c1b1057928f6f06cf972c91c.svg";
      var qs = n.p + "static/media/java.fa3aaa0d9601f02765fd0f91adf5f205.svg";
      var Xs =
        n.p +
        "static/media/microsoftsqlserver.3a1f7a503f6b83f918d7ae1bb9338e16.svg";
      var Ks = n.p + "static/media/mysql.de1f441d77fea35c2d6e1338f3cc540a.svg";
      var Gs =
        n.p + "static/media/mongodb.37c254895b58a4072247e428fc867bbe.svg";
      var Zs =
        n.p + "static/media/express.85a49c648d6d91844db838951511ea8c.svg";
      var Js = n.p + "static/media/react.7c8375868df8c536ab4f2d4078519904.svg";
      var eu = n.p + "static/media/nodejs.8629b14e617e5ef13fedea0da8235e11.svg";
      var tu = n.p + "static/media/npm.87689eab730642c86d2b01f3ef4a19e3.svg",
        nu = function () {
          var e = p((0, t.useState)(!0), 2),
            n = e[0];
          e[1];
          return (0, i.jsx)("div", {
            className: "Skills",
            children: (0, i.jsxs)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: 50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 50, opacity: 0 },
              transition: { duration: 1 },
              children: [
                (0, i.jsx)(Ds.div, {
                  initial: "hidden",
                  animate: n ? "visible" : "hidden",
                  variants: {
                    visible: { transition: { staggerChildren: 0.025 } },
                  },
                  children: (0, i.jsx)("div", {
                    className: "centerheading",
                    children: [{ type: "heading1", text: "Skills" }].map(
                      function (e, n) {
                        return (0, t.createElement)(
                          Is,
                          Nt(Nt({}, e), {}, { key: n })
                        );
                      }
                    ),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "skillscards",
                  children: [
                    (0, i.jsx)("img", { src: Us, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Ws, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Hs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: $s, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Qs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Ys, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: qs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Xs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Ks, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Gs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Zs, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: Js, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: eu, className: "skillsicons" }),
                    (0, i.jsx)("img", { src: tu, className: "skillsicons" }),
                  ],
                }),
                (0, i.jsxs)("h1", {
                  children: [
                    "Knowledge",
                    (0, i.jsx)("k", { children: "I know about them" }),
                  ],
                }),
              ],
            }),
          });
        },
        ru = n.p + "static/media/sampleProject.684fdbc05d859925c844.jpg",
        au = function (e) {
          return (0, i.jsxs)("div", {
            className: "Certificatecard",
            children: [
              (0, i.jsxs)("div", {
                class: "crd crd--effect",
                children: [
                  (0, i.jsx)("div", {
                    class: "crd-img",
                    children: (0, i.jsx)("img", {
                      src: e.imgs,
                      alt: "a",
                      className: "crd-img-photo",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    class: "crd-info",
                    children: [
                      (0, i.jsx)("p", {
                        class: "crd-heading",
                        children: e.title,
                      }),
                      (0, i.jsx)("p", {
                        class: "crd-text",
                        children: e.describtion,
                      }),
                      (0, i.jsx)("a", {
                        href: e.links,
                        class: "crd-text",
                        children: "read more",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "certificateabout",
                children: e.describtion,
              }),
            ],
          });
        },
        iu = function () {
          var e = p((0, t.useState)(!0), 2),
            n = e[0];
          e[1];
          return (0, i.jsx)("div", {
            className: "Achievements",
            children: (0, i.jsxs)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: 50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 50, opacity: 0 },
              transition: { duration: 1 },
              children: [
                (0, i.jsx)(Ds.div, {
                  initial: "hidden",
                  animate: n ? "visible" : "hidden",
                  variants: {
                    visible: { transition: { staggerChildren: 0.025 } },
                  },
                  children: (0, i.jsx)("div", {
                    className: "centerheading",
                    children: [{ type: "heading1", text: "Certificates" }].map(
                      function (e, n) {
                        return (0, t.createElement)(
                          Is,
                          Nt(Nt({}, e), {}, { key: n })
                        );
                      }
                    ),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "certificatepanel",
                  children: [
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "certificate",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ou = function () {
          var e = p((0, t.useState)(!0), 2),
            n = e[0];
          e[1];
          return (0, i.jsx)("div", {
            className: "Projects",
            children: (0, i.jsxs)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: 50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: 50, opacity: 0 },
              transition: { duration: 1 },
              children: [
                (0, i.jsx)(Ds.div, {
                  initial: "hidden",
                  animate: n ? "visible" : "hidden",
                  variants: {
                    visible: { transition: { staggerChildren: 0.025 } },
                  },
                  children: (0, i.jsx)("div", {
                    className: "centerheading",
                    children: [{ type: "heading1", text: "Projects" }].map(
                      function (e, n) {
                        return (0, t.createElement)(
                          Is,
                          Nt(Nt({}, e), {}, { key: n })
                        );
                      }
                    ),
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: "certificatepanel",
                  children: [
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                    (0, i.jsx)(au, {
                      imgs: ru,
                      title: "CARD GAME",
                      describtion:
                        "a simple and fun card game that played by 2 players",
                      links: "link here",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        lu = function () {
          var e = p((0, t.useState)("OPEN FORM"), 2),
            n = e[0],
            r = e[1];
          return (0, i.jsx)("div", {
            className: "Contact",
            children: (0, i.jsx)(Ds.div, {
              className: "container text-center  bg-black",
              initial: { x: -50, opacity: 0 },
              animate: { x: 0, opacity: 1 },
              exit: { x: -50, opacity: 0 },
              transition: { duration: 1 },
              children: (0, i.jsx)("div", {
                className: "contactcard",
                children: (0, i.jsx)("div", {
                  className: "round",
                  children: (0, i.jsxs)("section", {
                    id: "contact",
                    children: [
                      (0, i.jsxs)("div", {
                        class: "sectionheader",
                        children: [
                          " ",
                          (0, i.jsx)("h1", { children: "CONTACT" }),
                        ],
                      }),
                      (0, i.jsxs)("article", {
                        children: [
                          (0, i.jsx)("p", { children: "Connect with me." }),
                          (0, i.jsx)("p", {
                            children: "feel free to chat with me.",
                          }),
                          (0, i.jsx)("p", { children: "Just say hello." }),
                          (0, i.jsx)("label", {
                            for: "checkcontact",
                            className: "contactbutton",
                            onClick: function () {
                              r("OPEN FORM" === n ? "CLOSE FORM" : "OPEN FORM");
                            },
                            children: n,
                          }),
                          (0, i.jsx)("input", {
                            id: "checkcontact",
                            type: "checkbox",
                          }),
                          (0, i.jsxs)("form", {
                            action: "",
                            method: "post",
                            class: "contactform",
                            children: [
                              (0, i.jsxs)("p", {
                                class: "input_wrapper",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "text",
                                    name: "contact_nom",
                                    value: "",
                                    id: "contact_nom",
                                  }),
                                  (0, i.jsx)("label", {
                                    for: "contact_nom",
                                    children: "NAME",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("p", {
                                class: "input_wrapper",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "text",
                                    name: "contact_email",
                                    value: "",
                                    id: "contact_email",
                                  }),
                                  (0, i.jsx)("label", {
                                    for: "contact_email",
                                    children: "EMAIL",
                                  }),
                                ],
                              }),
                              (0, i.jsxs)("p", {
                                class: "input_wrapper",
                                children: [
                                  (0, i.jsx)("input", {
                                    type: "text",
                                    name: "contact_sujet",
                                    value: "",
                                    id: "contact_sujet",
                                  }),
                                  (0, i.jsx)("label", {
                                    for: "contact_sujet",
                                    children: "SUBJECT",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("p", {
                                class: "textarea_wrapper",
                                children: (0, i.jsx)("textarea", {
                                  name: "contact_message",
                                  id: "contact_message",
                                }),
                              }),
                              (0, i.jsx)("p", {
                                class: "submit_wrapper",
                                children: (0, i.jsx)("input", {
                                  type: "button",
                                  value: "SEND",
                                }),
                              }),
                              " ",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        };
      var su = function () {
        return (0, i.jsx)("div", {
          className: "App",
          children: (0, i.jsxs)("div", {
            className: "panel",
            children: [
              (0, i.jsx)($e, {
                children: (0, i.jsx)(Ct, {
                  children: (0, i.jsxs)(Fe, {
                    children: [
                      (0, i.jsx)(De, {
                        path: "/",
                        element: (0, i.jsx)(Vs, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/Home",
                        element: (0, i.jsx)(Vs, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/About",
                        element: (0, i.jsx)(Bs, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/Skills",
                        element: (0, i.jsx)(nu, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/Achievements",
                        element: (0, i.jsx)(iu, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/Projects",
                        element: (0, i.jsx)(ou, {}),
                      }),
                      (0, i.jsx)(De, {
                        path: "/Contact",
                        element: (0, i.jsx)(lu, {}),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)(s, {}),
            ],
          }),
        });
      };
      a.createRoot(document.getElementById("root")).render(
        (0, i.jsx)(t.StrictMode, { children: (0, i.jsx)(su, {}) })
      );
    })();
})();
//# sourceMappingURL=main.67e8858c.js.map
