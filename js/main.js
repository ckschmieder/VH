function initMap() {
    var e = document.querySelectorAll(".location-item");
    map = new google.maps.Map(document.querySelector(".map-block"), {
        center: {
            lat: 38.943615,
            lng: -94.670965
        },
        zoom: 4,
        styles: [{
            featureType: "all",
            elementType: "geometry",
            stylers: [{
                color: "#3c4d55"
            }]
        }, {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{
                color: "#35444b"
            }, {
                saturation: "0"
            }, {
                gamma: "1"
            }]
        }, {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "off"
            }, {
                color: "#ff0000"
            }]
        }, {
            featureType: "all",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{
                gamma: .01
            }, {
                lightness: 20
            }]
        }, {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{
                saturation: -31
            }, {
                lightness: -33
            }, {
                weight: 2
            }, {
                gamma: .8
            }]
        }, {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{
                lightness: 30
            }, {
                saturation: 30
            }]
        }, {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{
                color: "#35444b"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "all",
            stylers: [{
                visibility: "off"
            }, {
                color: "#ff0000"
            }]
        }, {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#35444b"
            }]
        }, {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{
                saturation: 20
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                lightness: 20
            }, {
                saturation: -20
            }, {
                color: "#35444b"
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 10
            }, {
                saturation: -30
            }]
        }, {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#3c4d55"
            }]
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                saturation: 25
            }, {
                lightness: 25
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#2d4047"
            }]
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#2b3840"
            }, {
                visibility: "on"
            }]
        }, {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#2c373d"
            }]
        }, {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{
                visibility: "on"
            }, {
                color: "#253036"
            }]
        }, {
            featureType: "transit.line",
            elementType: "all",
            stylers: [{
                color: "#ff0000"
            }]
        }, {
            featureType: "transit.line",
            elementType: "geometry.fill",
            stylers: [{
                visibility: "on"
            }, {
                color: "#2b3840"
            }]
        }, {
            featureType: "transit.line",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#ff0000"
            }, {
                visibility: "off"
            }]
        }, {
            featureType: "water",
            elementType: "all",
            stylers: [{
                lightness: -20
            }, {
                color: "#3c4d55"
            }]
        }]
    });
    for (var t = 0; t < e.length; t++) markers.push(new google.maps.Marker({
        position: {
            lat: Number(e[t].getAttribute("lat")),
            lng: Number(e[t].getAttribute("lng"))
        },
        map: map,
        icon: "/wp-content/themes/vh/images/lightMark.png"
    })), infowindows.push(new google.maps.InfoWindow({
        content: e[t].querySelector(".text").innerHTML
    })), markers[t].addListener("click", function() {
        t = markers.indexOf(this), infowindows[t].open(map, this)
    })
}
var GLOBAL_NAMESPACE = "vh";
window[GLOBAL_NAMESPACE] = {}, window[GLOBAL_NAMESPACE].scrollable = [], window[GLOBAL_NAMESPACE].scrollBound = !1, window[GLOBAL_NAMESPACE].bindScrollEvents = function() {
        1 != window[GLOBAL_NAMESPACE].scrollBound && (window[GLOBAL_NAMESPACE].scrollBound = !0, $(window).on("scroll", function(e) {
            var t = $(window).scrollTop();
            for (item in window[GLOBAL_NAMESPACE].scrollable) window[GLOBAL_NAMESPACE].scrollable[item].update(t)
        }))
    },
    function(e, t) {
        "use strict";

        function n(e) {
            var t = e.length,
                n = le.type(e);
            return le.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = we[e] = {};
            return le.each(e.match(ce) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function r(e, n, i, r) {
            if (le.acceptData(e)) {
                var o, s, a = le.expando,
                    l = "string" == typeof n,
                    u = e.nodeType,
                    c = u ? le.cache : e,
                    d = u ? e[a] : e[a] && a;
                if (d && c[d] && (r || c[d].data) || !l || i !== t) return d || (u ? e[a] = d = Z.pop() || le.guid++ : d = a), c[d] || (c[d] = {}, u || (c[d].toJSON = le.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[d] = le.extend(c[d], n) : c[d].data = le.extend(c[d].data, n)), o = c[d], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[le.camelCase(n)] = i), l ? (s = o[n], null == s && (s = o[le.camelCase(n)])) : s = o, s
            }
        }

        function o(e, t, n) {
            if (le.acceptData(e)) {
                var i, r, o, s = e.nodeType,
                    l = s ? le.cache : e,
                    u = s ? e[le.expando] : le.expando;
                if (l[u]) {
                    if (t && (i = n ? l[u] : l[u].data)) {
                        le.isArray(t) ? t = t.concat(le.map(t, le.camelCase)) : t in i ? t = [t] : (t = le.camelCase(t), t = t in i ? [t] : t.split(" "));
                        for (r = 0, o = t.length; o > r; r++) delete i[t[r]];
                        if (!(n ? a : le.isEmptyObject)(i)) return
                    }(n || (delete l[u].data, a(l[u]))) && (s ? le.cleanData([e], !0) : le.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                }
            }
        }

        function s(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(Ne, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Le.test(i) ? le.parseJSON(i) : i
                    } catch (o) {}
                    le.data(e, n, i)
                } else i = t
            }
            return i
        }

        function a(e) {
            var t;
            for (t in e)
                if (("data" !== t || !le.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function u() {
            return !1
        }

        function c(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function d(e, t, n) {
            if (t = t || 0, le.isFunction(t)) return le.grep(e, function(e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            });
            if (t.nodeType) return le.grep(e, function(e) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var i = le.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (Fe.test(t)) return le.filter(t, i, !n);
                t = le.filter(t, i)
            }
            return le.grep(e, function(e) {
                return le.inArray(e, t) >= 0 === n
            })
        }

        function p(e) {
            var t = $e.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }

        function h(e) {
            var t = e.getAttributeNode("type");
            return e.type = (t && t.specified) + "/" + e.type, e
        }

        function m(e) {
            var t = it.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function g(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) le._data(n, "globalEval", !t || le._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && le.hasData(e)) {
                var n, i, r, o = le._data(e),
                    s = le._data(t, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a)
                        for (i = 0, r = a[n].length; r > i; i++) le.event.add(t, n, a[n][i])
                }
                s.data && (s.data = le.extend({}, s.data))
            }
        }

        function v(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !le.support.noCloneEvent && t[le.expando]) {
                    i = le._data(t);
                    for (r in i.events) le.removeEvent(t, r, i.handle);
                    t.removeAttribute(le.expando)
                }
                "script" === n && t.text !== e.text ? (h(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), le.support.html5Clone && e.innerHTML && !le.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function A(e, n) {
            var i, r, o = 0,
                s = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(n || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(n || "*") : t;
            if (!s)
                for (s = [], i = e.childNodes || e; null != (r = i[o]); o++) !n || le.nodeName(r, n) ? s.push(r) : le.merge(s, A(r, n));
            return n === t || n && le.nodeName(e, n) ? le.merge([e], s) : s
        }

        function b(e) {
            et.test(e.type) && (e.defaultChecked = e.checked)
        }

        function E(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Lt.length; r--;)
                if (t = Lt[r] + n, t in e) return t;
            return i
        }

        function w(e, t) {
            return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
        }

        function L(e, t) {
            for (var n, i = [], r = 0, o = e.length; o > r; r++) n = e[r], n.style && (i[r] = le._data(n, "olddisplay"), t ? (i[r] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (i[r] = le._data(n, "olddisplay", C(n.nodeName)))) : i[r] || w(n) || le._data(n, "olddisplay", le.css(n, "display")));
            for (r = 0; o > r; r++) n = e[r], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[r] || "" : "none"));
            return e
        }

        function N(e, t, n) {
            var i = gt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function x(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += le.css(e, n + wt[o], !0, r)), i ? ("content" === n && (s -= le.css(e, "padding" + wt[o], !0, r)), "margin" !== n && (s -= le.css(e, "border" + wt[o] + "Width", !0, r))) : (s += le.css(e, "padding" + wt[o], !0, r), "padding" !== n && (s += le.css(e, "border" + wt[o] + "Width", !0, r)));
            return s
        }

        function S(e, t, n) {
            var i = !0,
                r = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = ut(e),
                s = le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = lt(e, t, o), (0 > r || null == r) && (r = e.style[t]), yt.test(r)) return r;
                i = s && (le.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + x(e, t, n || (s ? "border" : "content"), i, o) + "px"
        }

        function C(e) {
            var t = V,
                n = At[e];
            return n || (n = _(e, t), "none" !== n && n || (ct = (ct || le("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = _(e, t), ct.detach()), At[e] = n), n
        }

        function _(e, t) {
            var n = le(t.createElement(e)).appendTo(t.body),
                i = le.css(n[0], "display");
            return n.remove(), i
        }

        function T(e, t, n, i) {
            var r;
            if (le.isArray(t)) le.each(t, function(t, r) {
                n || xt.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== le.type(t)) i(e, t);
            else
                for (r in t) T(e + "[" + r + "]", t[r], n, i)
        }

        function O(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                    o = t.toLowerCase().match(ce) || [];
                if (le.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function k(e, t, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, le.each(e[a] || [], function(e, a) {
                    var u = a(t, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = e === Ft;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }

        function M(e, n) {
            var i, r, o = le.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            return r && le.extend(!0, e, r), e
        }

        function B(e, n, i) {
            var r, o, s, a, l = e.contents,
                u = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in i && (n[c[o]] = i[o]);
            for (;
                "*" === u[0];) u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
            if (r)
                for (o in l)
                    if (l[o] && l[o].test(r)) {
                        u.unshift(o);
                        break
                    }
            if (u[0] in i) s = u[0];
            else {
                for (o in i) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        s = o;
                        break
                    }
                    a || (a = o)
                }
                s = s || a
            }
            return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
        }

        function P(e, t) {
            var n, i, r, o, s = {},
                a = 0,
                l = e.dataTypes.slice(),
                u = l[0];
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])
                for (n in e.converters) s[n.toLowerCase()] = e.converters[n];
            for (; r = l[++a];)
                if ("*" !== r) {
                    if ("*" !== u && u !== r) {
                        if (n = s[u + " " + r] || s["* " + r], !n)
                            for (i in s)
                                if (o = i.split(" "), o[1] === r && (n = s[u + " " + o[0]] || s["* " + o[0]])) {
                                    n === !0 ? n = s[i] : s[i] !== !0 && (r = o[0], l.splice(a--, 0, r));
                                    break
                                }
                        if (n !== !0)
                            if (n && e["throws"]) t = n(t);
                            else try {
                                t = n(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: n ? c : "No conversion from " + u + " to " + r
                                }
                            }
                    }
                    u = r
                }
            return {
                state: "success",
                data: t
            }
        }

        function j() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function q() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function G() {
            return setTimeout(function() {
                Qt = t
            }), Qt = le.now()
        }

        function H(e, t) {
            le.each(t, function(t, n) {
                for (var i = (rn[t] || []).concat(rn["*"]), r = 0, o = i.length; o > r; r++)
                    if (i[r].call(e, t, n)) return
            })
        }

        function D(e, t, n) {
            var i, r, o = 0,
                s = nn.length,
                a = le.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var t = Qt || G(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
                },
                u = a.promise({
                    elem: e,
                    props: le.extend({}, t),
                    opts: le.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Qt || G(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = le.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                    }
                }),
                c = u.props;
            for (R(c, u.opts.specialEasing); s > o; o++)
                if (i = nn[o].call(u, e, c, u.opts)) return i;
            return H(u, c), le.isFunction(u.opts.start) && u.opts.start.call(e, u), le.fx.timer(le.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function R(e, t) {
            var n, i, r, o, s;
            for (n in e)
                if (i = le.camelCase(n), r = t[i], o = e[n], le.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = le.cssHooks[i], s && "expand" in s) {
                    o = s.expand(o), delete e[i];
                    for (n in o) n in e || (e[n] = o[n], t[n] = r)
                } else t[i] = r
        }

        function W(e, t, n) {
            var i, r, o, s, a, l, u, c, d, p = this,
                f = e.style,
                h = {},
                m = [],
                g = e.nodeType && w(e);
            n.queue || (c = le._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, d = c.empty.fire, c.empty.fire = function() {
                c.unqueued || d()
            }), c.unqueued++, p.always(function() {
                p.always(function() {
                    c.unqueued--, le.queue(e, "fx").length || c.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === le.css(e, "display") && "none" === le.css(e, "float") && (le.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", le.support.shrinkWrapBlocks || p.done(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], Zt.exec(o)) {
                    if (delete t[i], l = l || "toggle" === o, o === (g ? "hide" : "show")) continue;
                    m.push(i)
                }
            if (s = m.length) {
                a = le._data(e, "fxshow") || le._data(e, "fxshow", {}), "hidden" in a && (g = a.hidden), l && (a.hidden = !g), g ? le(e).show() : p.done(function() {
                    le(e).hide()
                }), p.done(function() {
                    var t;
                    le._removeData(e, "fxshow");
                    for (t in h) le.style(e, t, h[t])
                });
                for (i = 0; s > i; i++) r = m[i], u = p.createTween(r, g ? a[r] : 0), h[r] = a[r] || le.style(e, r), r in a || (a[r] = u.start, g && (u.end = u.start, u.start = "width" === r || "height" === r ? 1 : 0))
            }
        }

        function F(e, t, n, i, r) {
            return new F.prototype.init(e, t, n, i, r)
        }

        function I(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = wt[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function z(e) {
            return le.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var X, U, V = e.document,
            Y = e.location,
            J = e.jQuery,
            Q = e.$,
            K = {},
            Z = [],
            ee = "1.9.0",
            te = Z.concat,
            ne = Z.push,
            ie = Z.slice,
            re = Z.indexOf,
            oe = K.toString,
            se = K.hasOwnProperty,
            ae = ee.trim,
            le = function(e, t) {
                return new le.fn.init(e, t, X)
            },
            ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ce = /\S+/g,
            de = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            pe = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            he = /^[\],:{}\s]*$/,
            me = /(?:^|:|,)(?:\s*\[)+/g,
            ge = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            ve = /^-ms-/,
            Ae = /-([\da-z])/gi,
            be = function(e, t) {
                return t.toUpperCase()
            },
            Ee = function() {
                V.addEventListener ? (V.removeEventListener("DOMContentLoaded", Ee, !1), le.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", Ee), le.ready())
            };
        le.fn = le.prototype = {
            jquery: ee,
            constructor: le,
            init: function(e, n, i) {
                var r, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                    if (r[1]) {
                        if (n = n instanceof le ? n[0] : n, le.merge(this, le.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), fe.test(r[1]) && le.isPlainObject(n))
                            for (r in n) le.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                        return this
                    }
                    if (o = V.getElementById(r[2]), o && o.parentNode) {
                        if (o.id !== r[2]) return i.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = V, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
            },
            selector: "",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return ie.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = le.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return le.each(this, e, t)
            },
            ready: function(e) {
                return le.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(ie.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function(e) {
                return this.pushStack(le.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: ne,
            sort: [].sort,
            splice: [].splice
        }, le.fn.init.prototype = le.fn, le.extend = le.fn.extend = function() {
            var e, n, i, r, o, s, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || le.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (e = arguments[l]))
                    for (n in e) i = a[n], r = e[n], a !== r && (c && r && (le.isPlainObject(r) || (o = le.isArray(r))) ? (o ? (o = !1, s = i && le.isArray(i) ? i : []) : s = i && le.isPlainObject(i) ? i : {}, a[n] = le.extend(c, s, r)) : r !== t && (a[n] = r));
            return a
        }, le.extend({
            noConflict: function(t) {
                return e.$ === le && (e.$ = Q), t && e.jQuery === le && (e.jQuery = J), le
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? le.readyWait++ : le.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--le.readyWait : !le.isReady) {
                    if (!V.body) return setTimeout(le.ready);
                    le.isReady = !0, e !== !0 && --le.readyWait > 0 || (U.resolveWith(V, [le]), le.fn.trigger && le(V).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === le.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === le.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[oe.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || "object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
                try {
                    if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e);
                return i === t || se.call(e, i)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || V;
                var i = fe.exec(e),
                    r = !n && [];
                return i ? [t.createElement(i[1])] : (i = le.buildFragment([e], t, r), r && le(r).remove(), le.merge([], i.childNodes))
            },
            parseJSON: function(t) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = le.trim(t), t && he.test(t.replace(ge, "@").replace(ye, "]").replace(me, ""))) ? new Function("return " + t)() : void le.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var i, r;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (o) {
                    i = t
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(t) {
                t && le.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(Ae, be)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e);
                if (i) {
                    if (a)
                        for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                    else
                        for (o in e)
                            if (r = t.apply(e[o], i), r === !1) break
                } else if (a)
                    for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
                else
                    for (o in e)
                        if (r = t.call(e[o], o, e[o]), r === !1) break; return e
            },
            trim: ae && !ae.call("\ufeff ") ? function(e) {
                return null == e ? "" : ae.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(de, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? le.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (re) return re.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var i = n.length,
                    r = e.length,
                    o = 0;
                if ("number" == typeof i)
                    for (; i > o; o++) e[r++] = n[o];
                else
                    for (; n[o] !== t;) e[r++] = n[o++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                var i, r = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; s > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                return r
            },
            map: function(e, t, i) {
                var r, o = 0,
                    s = e.length,
                    a = n(e),
                    l = [];
                if (a)
                    for (; s > o; o++) r = t(e[o], o, i), null != r && (l[l.length] = r);
                else
                    for (o in e) r = t(e[o], o, i), null != r && (l[l.length] = r);
                return te.apply([], l)
            },
            guid: 1,
            proxy: function(e, n) {
                var i, r, o;
                return "string" == typeof n && (i = e[n], n = e, e = i), le.isFunction(e) ? (r = ie.call(arguments, 2), o = function() {
                    return e.apply(n || this, r.concat(ie.call(arguments)))
                }, o.guid = e.guid = e.guid || le.guid++, o) : t
            },
            access: function(e, n, i, r, o, s, a) {
                var l = 0,
                    u = e.length,
                    c = null == i;
                if ("object" === le.type(i)) {
                    o = !0;
                    for (l in i) le.access(e, n, l, i[l], !0, s, a)
                } else if (r !== t && (o = !0, le.isFunction(r) || (a = !0), c && (a ? (n.call(e, r), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(le(e), n)
                    })), n))
                    for (; u > l; l++) n(e[l], i, a ? r : r.call(e[l], l, n(e[l], i)));
                return o ? e : c ? n.call(e) : u ? n(e[0], i) : s
            },
            now: function() {
                return (new Date).getTime()
            }
        }), le.ready.promise = function(t) {
            if (!U)
                if (U = le.Deferred(), "complete" === V.readyState) setTimeout(le.ready);
                else if (V.addEventListener) V.addEventListener("DOMContentLoaded", Ee, !1), e.addEventListener("load", le.ready, !1);
            else {
                V.attachEvent("onreadystatechange", Ee), e.attachEvent("onload", le.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && V.documentElement
                } catch (i) {}
                n && n.doScroll && ! function r() {
                    if (!le.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(r, 50)
                        }
                        le.ready()
                    }
                }()
            }
            return U.promise(t)
        }, le.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            K["[object " + t + "]"] = t.toLowerCase()
        }), X = le(V);
        var we = {};
        le.Callbacks = function(e) {
            e = "string" == typeof e ? we[e] || i(e) : le.extend({}, e);
            var n, r, o, s, a, l, u = [],
                c = !e.once && [],
                d = function(t) {
                    for (n = e.memory && t, r = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++)
                        if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    o = !1, u && (c ? c.length && d(c.shift()) : n ? u = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (u) {
                            var t = u.length;
                            ! function i(t) {
                                le.each(t, function(t, n) {
                                    var r = le.type(n);
                                    "function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
                                })
                            }(arguments), o ? a = u.length : n && (s = t, d(n))
                        }
                        return this
                    },
                    remove: function() {
                        return u && le.each(arguments, function(e, t) {
                            for (var n;
                                (n = le.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (a >= n && a--, l >= n && l--)
                        }), this
                    },
                    has: function(e) {
                        return le.inArray(e, u) > -1
                    },
                    empty: function() {
                        return u = [], this
                    },
                    disable: function() {
                        return u = c = n = t, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = t, n || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || r && !c || (o ? c.push(t) : d(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return p
        }, le.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", le.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", le.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", le.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return le.Deferred(function(n) {
                                le.each(t, function(t, o) {
                                    var s = o[0],
                                        a = le.isFunction(e[t]) && e[t];
                                    r[o[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && le.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? le.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, le.each(t, function(e, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t = 0,
                    n = ie.call(arguments),
                    i = n.length,
                    r = 1 !== i || e && le.isFunction(e.promise) ? i : 0,
                    o = 1 === r ? e : le.Deferred(),
                    s = function(e, t, n) {
                        return function(i) {
                            t[e] = this, n[e] = arguments.length > 1 ? ie.call(arguments) : i, n === a ? o.notifyWith(t, n) : --r || o.resolveWith(t, n)
                        }
                    },
                    a, l, u;
                if (i > 1)
                    for (a = new Array(i), l = new Array(i), u = new Array(i); i > t; t++) n[t] && le.isFunction(n[t].promise) ? n[t].promise().done(s(t, u, n)).fail(o.reject).progress(s(t, l, a)) : --r;
                return r || o.resolveWith(u, n), o.promise()
            }
        }), le.support = function() {
            var t, n, i, r, o, s, a, l, u, c, d = V.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
            r = V.createElement("select"), o = r.appendChild(V.createElement("option")), s = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {
                getSetAttribute: "t" !== d.className,
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !!d.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !!i.style.cssFloat,
                checkOn: !!s.value,
                optSelected: o.selected,
                enctype: !!V.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === V.compatMode,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            s = V.createElement("input"), s.setAttribute("value", ""), t.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a = V.createDocumentFragment(), a.appendChild(s), t.appendChecked = s.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), d.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
            return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, le(function() {
                var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = V.getElementsByTagName("body")[0];
                s && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                    width: "4px"
                }).width, i = d.appendChild(V.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, s.style.zoom = 1), s.removeChild(n), n = d = r = i = null)
            }), n = r = a = o = i = s = null, t
        }();
        var Le = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Ne = /([A-Z])/g;
        le.extend({
            cache: {},
            expando: "jQuery" + (ee + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? le.cache[e[le.expando]] : e[le.expando], !!e && !a(e)
            },
            data: function(e, t, n) {
                return r(e, t, n, !1)
            },
            removeData: function(e, t) {
                return o(e, t, !1)
            },
            _data: function(e, t, n) {
                return r(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return o(e, t, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && le.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), le.fn.extend({
            data: function(e, n) {
                var i, r, o = this[0],
                    a = 0,
                    l = null;
                if (e === t) {
                    if (this.length && (l = le.data(o), 1 === o.nodeType && !le._data(o, "parsedAttrs"))) {
                        for (i = o.attributes; a < i.length; a++) r = i[a].name, r.indexOf("data-") || (r = le.camelCase(r.substring(5)), s(o, r, l[r]));
                        le._data(o, "parsedAttrs", !0)
                    }
                    return l
                }
                return "object" == typeof e ? this.each(function() {
                    le.data(this, e)
                }) : le.access(this, function(n) {
                    return n === t ? o ? s(o, e, le.data(o, e)) : null : void this.each(function() {
                        le.data(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    le.removeData(this, e)
                })
            }
        }), le.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = le._data(e, t), n && (!i || le.isArray(n) ? i = le._data(e, t, le.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = le.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = le._queueHooks(e, t),
                    s = function() {
                        le.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), o.cur = r, r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return le._data(e, n) || le._data(e, n, {
                    empty: le.Callbacks("once memory").add(function() {
                        le._removeData(e, t + "queue"), le._removeData(e, n)
                    })
                })
            }
        }), le.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? le.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = le.queue(this, e, n);
                    le._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && le.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    le.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, r = 1,
                    o = le.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --r || o.resolveWith(s, [s])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = le._data(s[a], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var xe, Se, Ce = /[\t\r\n]/g,
            _e = /\r/g,
            Te = /^(?:input|select|textarea|button|object)$/i,
            Oe = /^(?:a|area)$/i,
            ke = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
            Me = /^(?:checked|selected)$/i,
            Be = le.support.getSetAttribute,
            Pe = le.support.input;
        le.fn.extend({
            attr: function(e, t) {
                return le.access(this, le.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    le.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return le.access(this, le.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = le.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, r, o, s = 0,
                    a = this.length,
                    l = "string" == typeof e && e;
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ce) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : " ")) {
                            for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            n.className = le.trim(i)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ce) || []; a > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ce, " ") : "")) {
                            for (o = 0; r = t[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            n.className = e ? le.trim(i) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return le.isFunction(e) ? this.each(function(n) {
                    le(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var r, o = 0, s = le(this), a = t, l = e.match(ce) || []; r = l[o++];) a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
                    else("undefined" === n || "boolean" === n) && (this.className && le._data(this, "__className__", this.className),
                        this.className = this.className || e === !1 ? "" : le._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ce, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, r, o = this[0];
                return arguments.length ? (r = le.isFunction(e), this.each(function(i) {
                    var o, s = le(this);
                    1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : le.isArray(o) && (o = le.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                })) : o ? (n = le.valHooks[o.type] || le.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(_e, "") : null == i ? "" : i)) : void 0
            }
        }), le.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], (n.selected || l === r) && (le.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                if (t = le(n).val(), o) return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        var n = le.makeArray(t);
                        return le(e).find("option").each(function() {
                            this.selected = le.inArray(le(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attr: function(e, n, i) {
                var r, o, s, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? "undefined" == typeof e.getAttribute ? le.prop(e, n, i) : (s = 1 !== a || !le.isXMLDoc(e), s && (n = n.toLowerCase(), o = le.attrHooks[n] || (ke.test(n) ? Se : xe)), i === t ? o && s && "get" in o && null !== (r = o.get(e, n)) ? r : ("undefined" != typeof e.getAttribute && (r = e.getAttribute(n)), null == r ? t : r) : null !== i ? o && s && "set" in o && (r = o.set(e, i, n)) !== t ? r : (e.setAttribute(n, i + ""), i) : void le.removeAttr(e, n)) : void 0
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                    o = t && t.match(ce);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) i = le.propFix[n] || n, ke.test(n) ? !Be && Me.test(n) ? e[le.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : le.attr(e, n, ""), e.removeAttribute(Be ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!le.support.radioValue && "radio" === t && le.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, i) {
                var r, o, s, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? (s = 1 !== a || !le.isXMLDoc(e), s && (n = le.propFix[n] || n, o = le.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Te.test(e.nodeName) || Oe.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), Se = {
            get: function(e, n) {
                var i = le.prop(e, n),
                    r = "boolean" == typeof i && e.getAttribute(n),
                    o = "boolean" == typeof i ? Pe && Be ? null != r : Me.test(n) ? e[le.camelCase("default-" + n)] : !!r : e.getAttributeNode(n);
                return o && o.value !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                return t === !1 ? le.removeAttr(e, n) : Pe && Be || !Me.test(n) ? e.setAttribute(!Be && le.propFix[n] || n, n) : e[le.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, Pe && Be || (le.attrHooks.value = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return le.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t
            },
            set: function(e, t, n) {
                return le.nodeName(e, "input") ? void(e.defaultValue = t) : xe && xe.set(e, t, n)
            }
        }), Be || (xe = le.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t
            },
            set: function(e, n, i) {
                var r = e.getAttributeNode(i);
                return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, le.attrHooks.contenteditable = {
            get: xe.get,
            set: function(e, t, n) {
                xe.set(e, "" === t ? !1 : t, n)
            }
        }, le.each(["width", "height"], function(e, t) {
            le.attrHooks[t] = le.extend(le.attrHooks[t], {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            })
        })), le.support.hrefNormalized || (le.each(["href", "src", "width", "height"], function(e, n) {
            le.attrHooks[n] = le.extend(le.attrHooks[n], {
                get: function(e) {
                    var i = e.getAttribute(n, 2);
                    return null == i ? t : i
                }
            })
        }), le.each(["href", "src"], function(e, t) {
            le.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })), le.support.style || (le.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), le.support.optSelected || (le.propHooks.selected = le.extend(le.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), le.support.enctype || (le.propFix.enctype = "encoding"), le.support.checkOn || le.each(["radio", "checkbox"], function() {
            le.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), le.each(["radio", "checkbox"], function() {
            le.valHooks[this] = le.extend(le.valHooks[this], {
                set: function(e, t) {
                    return le.isArray(t) ? e.checked = le.inArray(le(e).val(), t) >= 0 : void 0
                }
            })
        });
        var je = /^(?:input|select|textarea)$/i,
            qe = /^key/,
            Ge = /^(?:mouse|contextmenu)|click/,
            He = /^(?:focusinfocus|focusoutblur)$/,
            De = /^([^.]*)(?:\.(.+)|)$/;
        le.event = {
                global: {},
                add: function(e, n, i, r, o) {
                    var s, a, l, u, c, d, p, f, h, m, g, y = 3 !== e.nodeType && 8 !== e.nodeType && le._data(e);
                    if (y) {
                        for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = le.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
                                return "undefined" == typeof le || e && le.event.triggered === e.type ? t : le.event.dispatch.apply(a.elem, arguments)
                            }, a.elem = e), n = (n || "").match(ce) || [""], c = n.length; c--;) l = De.exec(n[c]) || [], h = g = l[1], m = (l[2] || "").split(".").sort(), p = le.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = le.event.special[h] || {}, d = le.extend({
                            type: h,
                            origType: g,
                            data: r,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && le.expr.match.needsContext.test(o),
                            namespace: m.join(".")
                        }, s), (f = u[h]) || (f = u[h] = [], f.delegateCount = 0, p.setup && p.setup.call(e, r, m, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, d) : f.push(d), le.event.global[h] = !0;
                        e = null
                    }
                },
                remove: function(e, t, n, i, r) {
                    var o, s, a, l, u, c, d, p, f, h, m, g = le.hasData(e) && le._data(e);
                    if (g && (l = g.events)) {
                        for (t = (t || "").match(ce) || [""], u = t.length; u--;)
                            if (a = De.exec(t[u]) || [], f = m = a[1], h = (a[2] || "").split(".").sort(), f) {
                                for (d = le.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                                s && !p.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || le.removeEvent(e, f, g.handle), delete l[f])
                            } else
                                for (f in l) le.event.remove(e, f + t[u], n, i, !0);
                        le.isEmptyObject(l) && (delete g.handle, le._removeData(e, "events"))
                    }
                },
                trigger: function(n, i, r, o) {
                    var s, a, l, u, c, d, p, f = [r || V],
                        h = n.type || n,
                        m = n.namespace ? n.namespace.split(".") : [];
                    if (a = l = r = r || V, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(h + le.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), c = h.indexOf(":") < 0 && "on" + h, n = n[le.expando] ? n : new le.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : le.makeArray(i, [n]), p = le.event.special[h] || {}, o || !p.trigger || p.trigger.apply(r, i) !== !1)) {
                        if (!o && !p.noBubble && !le.isWindow(r)) {
                            for (u = p.delegateType || h, He.test(u + h) || (a = a.parentNode); a; a = a.parentNode) f.push(a), l = a;
                            l === (r.ownerDocument || V) && f.push(l.defaultView || l.parentWindow || e)
                        }
                        for (s = 0;
                            (a = f[s++]) && !n.isPropagationStopped();) n.type = s > 1 ? u : p.bindType || h, d = (le._data(a, "events") || {})[n.type] && le._data(a, "handle"), d && d.apply(a, i), d = c && a[c], d && le.acceptData(a) && d.apply && d.apply(a, i) === !1 && n.preventDefault();
                        if (n.type = h, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(r.ownerDocument, i) === !1) && ("click" !== h || !le.nodeName(r, "a")) && le.acceptData(r) && c && r[h] && !le.isWindow(r)) {
                            l = r[c], l && (r[c] = null), le.event.triggered = h;
                            try {
                                r[h]()
                            } catch (g) {}
                            le.event.triggered = t, l && (r[c] = l)
                        }
                        return n.result
                    }
                },
                dispatch: function(e) {
                    e = le.event.fix(e);
                    var n, i, r, o, s, a = [],
                        l = ie.call(arguments),
                        u = (le._data(this, "events") || {})[e.type] || [],
                        c = le.event.special[e.type] || {};
                    if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = le.event.handlers.call(this, e, u), n = 0;
                            (o = a[n++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, i = 0;
                                (s = o.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(s.namespace)) && (e.handleObj = s, e.data = s.data, r = ((le.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                },
                handlers: function(e, n) {
                    var i, r, o, s, a = [],
                        l = n.delegateCount,
                        u = e.target;
                    if (l && u.nodeType && (!e.button || "click" !== e.type))
                        for (; u != this; u = u.parentNode || this)
                            if (u.disabled !== !0 || "click" !== e.type) {
                                for (r = [], i = 0; l > i; i++) s = n[i], o = s.selector + " ", r[o] === t && (r[o] = s.needsContext ? le(o, this).index(u) >= 0 : le.find(o, this, null, [u]).length), r[o] && r.push(s);
                                r.length && a.push({
                                    elem: u,
                                    handlers: r
                                })
                            }
                    return l < n.length && a.push({
                        elem: this,
                        handlers: n.slice(l)
                    }), a
                },
                fix: function(e) {
                    if (e[le.expando]) return e;
                    var t, n, i = e,
                        r = le.event.fixHooks[e.type] || {},
                        o = r.props ? this.props.concat(r.props) : this.props;
                    for (e = new le.Event(i), t = o.length; t--;) n = o[t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, n) {
                        var i, r, o, s = n.button,
                            a = n.fromElement;
                        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || V, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        trigger: function() {
                            return le.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }
                    },
                    focus: {
                        trigger: function() {
                            if (this !== V.activeElement && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            return this === V.activeElement && this.blur ? (this.blur(), !1) : void 0
                        },
                        delegateType: "focusout"
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== t && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, i) {
                    var r = le.extend(new le.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    i ? le.event.trigger(r, null, t) : le.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
                }
            }, le.removeEvent = V.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
            }, le.Event = function(e, t) {
                return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), void(this[le.expando] = !0)) : new le.Event(e, t)
            }, le.Event.prototype = {
                isDefaultPrevented: u,
                isPropagationStopped: u,
                isImmediatePropagationStopped: u,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                },
                stopImmediatePropagation: function() {
                    this.isImmediatePropagationStopped = l, this.stopPropagation()
                }
            }, le.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, function(e, t) {
                le.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, i = this,
                            r = e.relatedTarget,
                            o = e.handleObj;
                        return (!r || r !== i && !le.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), le.support.submitBubbles || (le.event.special.submit = {
                setup: function() {
                    return le.nodeName(this, "form") ? !1 : void le.event.add(this, "click._submit keypress._submit", function(e) {
                        var n = e.target,
                            i = le.nodeName(n, "input") || le.nodeName(n, "button") ? n.form : t;
                        i && !le._data(i, "submitBubbles") && (le.event.add(i, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), le._data(i, "submitBubbles", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && le.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    return le.nodeName(this, "form") ? !1 : void le.event.remove(this, "._submit")
                }
            }), le.support.changeBubbles || (le.event.special.change = {
                setup: function() {
                    return je.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (le.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                    }), le.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), le.event.simulate("change", this, e, !0)
                    })), !1) : void le.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        je.test(t.nodeName) && !le._data(t, "changeBubbles") && (le.event.add(t, "change._change", function(e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || le.event.simulate("change", this.parentNode, e, !0)
                        }), le._data(t, "changeBubbles", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                },
                teardown: function() {
                    return le.event.remove(this, "._change"), !je.test(this.nodeName)
                }
            }), le.support.focusinBubbles || le.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = 0,
                    i = function(e) {
                        le.event.simulate(t, e.target, le.event.fix(e), !0)
                    };
                le.event.special[t] = {
                    setup: function() {
                        0 === n++ && V.addEventListener(e, i, !0)
                    },
                    teardown: function() {
                        0 === --n && V.removeEventListener(e, i, !0)
                    }
                }
            }), le.fn.extend({
                on: function(e, n, i, r, o) {
                    var s, a;
                    if ("object" == typeof e) {
                        "string" != typeof n && (i = i || n, n = t);
                        for (a in e) this.on(a, n, i, e[a], o);
                        return this
                    }
                    if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = u;
                    else if (!r) return this;
                    return 1 === o && (s = r, r = function(e) {
                        return le().off(e), s.apply(this, arguments)
                    }, r.guid = s.guid || (s.guid = le.guid++)), this.each(function() {
                        le.event.add(this, e, r, i, n)
                    })
                },
                one: function(e, t, n, i) {
                    return this.on(e, t, n, i, 1)
                },
                off: function(e, n, i) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, n, e[o]);
                        return this
                    }
                    return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = u), this.each(function() {
                        le.event.remove(this, e, i, n)
                    })
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        le.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    return n ? le.event.trigger(e, t, n, !0) : void 0
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            }), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                le.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }, qe.test(t) && (le.event.fixHooks[t] = le.event.keyHooks), Ge.test(t) && (le.event.fixHooks[t] = le.event.mouseHooks)
            }),
            function(e, t) {
                function n(e) {
                    return me.test(e + "")
                }

                function i() {
                    var e, t = [];
                    return e = function(n, i) {
                        return t.push(n += " ") > N.cacheLength && delete e[t.shift()], e[n] = i
                    }
                }

                function r(e) {
                    return e[D] = !0, e
                }

                function o(e) {
                    var t = k.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }

                function s(e, t, n, i) {
                    var r, o, s, a, l, u, c, f, h, m;
                    if ((t ? t.ownerDocument || t : R) !== k && O(t), t = t || k, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (a = t.nodeType) && 9 !== a) return [];
                    if (!B && !i) {
                        if (r = ge.exec(e))
                            if (s = r[1]) {
                                if (9 === a) {
                                    if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                    if (o.id === s) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && G(t, o) && o.id === s) return n.push(o), n
                            } else {
                                if (r[2]) return K.apply(n, Z.call(t.getElementsByTagName(e), 0)), n;
                                if ((s = r[3]) && W.getByClassName && t.getElementsByClassName) return K.apply(n, Z.call(t.getElementsByClassName(s), 0)), n
                            }
                        if (W.qsa && !P.test(e)) {
                            if (c = !0, f = D, h = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                                for (u = d(e), (c = t.getAttribute("id")) ? f = c.replace(Ae, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                                h = he.test(e) && t.parentNode || t, m = u.join(",")
                            }
                            if (m) try {
                                return K.apply(n, Z.call(h.querySelectorAll(m), 0)), n
                            } catch (g) {} finally {
                                c || t.removeAttribute("id")
                            }
                        }
                    }
                    return b(e.replace(ae, "$1"), t, n, i)
                }

                function a(e, t) {
                    for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
                        if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return r(function(t) {
                        return t = +t, r(function(n, i) {
                            for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }

                function d(e, t) {
                    var n, i, r, o, a, l, u, c = X[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (a = e, l = [], u = N.preFilter; a;) {
                        (!n || (i = ue.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(r = [])), n = !1, (i = ce.exec(a)) && (n = i.shift(), r.push({
                            value: n,
                            type: i[0].replace(ae, " ")
                        }), a = a.slice(n.length));
                        for (o in N.filter) !(i = fe[o].exec(a)) || u[o] && !(i = u[o](i)) || (n = i.shift(), r.push({
                            value: n,
                            type: o,
                            matches: i
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return t ? a.length : a ? s.error(e) : X(e, l).slice(0)
                }

                function p(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        r = n && "parentNode" === t.dir,
                        o = I++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) return e(t, n, o)
                    } : function(t, n, s) {
                        var a, l, u, c = F + " " + o;
                        if (s) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || r)
                                    if (u = t[D] || (t[D] = {}), (l = u[i]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === L) return a === !0
                                    } else if (l = u[i] = [c], l[1] = e(t, n, s) || L, l[1] === !0) return !0
                    }
                }

                function h(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var r = e.length; r--;)
                            if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a));
                    return s
                }

                function g(e, t, n, i, o, s) {
                    return i && !i[D] && (i = g(i)), o && !o[D] && (o = g(o, s)), r(function(r, s, a, l) {
                        var u, c, d, p = [],
                            f = [],
                            h = s.length,
                            g = r || A(t || "*", a.nodeType ? [a] : a, []),
                            y = !e || !r && t ? g : m(g, p, e, a, l),
                            v = n ? o || (r ? e : h || i) ? [] : s : y;
                        if (n && n(y, v, a, l), i)
                            for (u = m(v, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(y[f[c]] = d));
                        if (r) {
                            if (o || e) {
                                if (o) {
                                    for (u = [], c = v.length; c--;)(d = v[c]) && u.push(y[c] = d);
                                    o(null, v = [], u, l)
                                }
                                for (c = v.length; c--;)(d = v[c]) && (u = o ? ee.call(r, d) : p[c]) > -1 && (r[u] = !(s[u] = d))
                            }
                        } else v = m(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : K.apply(s, v)
                    })
                }

                function y(e) {
                    for (var t, n, i, r = e.length, o = N.relative[e[0].type], s = o || N.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                            return e === t
                        }, s, !0), u = f(function(e) {
                            return ee.call(t, e) > -1
                        }, s, !0), c = [function(e, n, i) {
                            return !o && (i || n !== T) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i))
                        }]; r > a; a++)
                        if (n = N.relative[e[a].type]) c = [f(h(c), n)];
                        else {
                            if (n = N.filter[e[a].type].apply(null, e[a].matches), n[D]) {
                                for (i = ++a; r > i && !N.relative[e[i].type]; i++);
                                return g(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1)).replace(ae, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                            }
                            c.push(n)
                        }
                    return h(c)
                }

                function v(e, t) {
                    var n = 0,
                        i = t.length > 0,
                        o = e.length > 0,
                        a = function(r, a, l, u, c) {
                            var d, p, f, h = [],
                                g = 0,
                                y = "0",
                                v = r && [],
                                A = null != c,
                                b = T,
                                E = r || o && N.find.TAG("*", c && a.parentNode || a),
                                w = F += null == b ? 1 : Math.E;
                            for (A && (T = a !== k && a, L = n); null != (d = E[y]); y++) {
                                if (o && d) {
                                    for (p = 0; f = e[p]; p++)
                                        if (f(d, a, l)) {
                                            u.push(d);
                                            break
                                        }
                                    A && (F = w, L = ++n)
                                }
                                i && ((d = !f && d) && g--, r && v.push(d))
                            }
                            if (g += y, i && y !== g) {
                                for (p = 0; f = t[p]; p++) f(v, h, a, l);
                                if (r) {
                                    if (g > 0)
                                        for (; y--;) v[y] || h[y] || (h[y] = Q.call(u));
                                    h = m(h)
                                }
                                K.apply(u, h), A && !r && h.length > 0 && g + t.length > 1 && s.uniqueSort(u)
                            }
                            return A && (F = w, T = b), v
                        };
                    return i ? r(a) : a
                }

                function A(e, t, n) {
                    for (var i = 0, r = t.length; r > i; i++) s(e, t[i], n);
                    return n
                }

                function b(e, t, n, i) {
                    var r, o, s, a, l, u = d(e);
                    if (!i && 1 === u.length) {
                        if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && !B && N.relative[o[1].type]) {
                            if (t = N.find.ID(s.matches[0].replace(Ee, we), t)[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (r = fe.needsContext.test(e) ? -1 : o.length - 1; r >= 0 && (s = o[r], !N.relative[a = s.type]); r--)
                            if ((l = N.find[a]) && (i = l(s.matches[0].replace(Ee, we), he.test(o[0].type) && t.parentNode || t))) {
                                if (o.splice(r, 1), e = i.length && p(o), !e) return K.apply(n, Z.call(i, 0)), n;
                                break
                            }
                    }
                    return C(e, u)(i, t, B, n, he.test(e)), n
                }

                function E() {}
                var w, L, N, x, S, C, _, T, O, k, M, B, P, j, q, G, H, D = "sizzle" + -new Date,
                    R = e.document,
                    W = {},
                    F = 0,
                    I = 0,
                    z = i(),
                    X = i(),
                    U = i(),
                    V = typeof t,
                    Y = 1 << 31,
                    J = [],
                    Q = J.pop,
                    K = J.push,
                    Z = J.slice,
                    ee = J.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    te = "[\\x20\\t\\r\\n\\f]",
                    ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    ie = ne.replace("w", "w#"),
                    re = "([*^$|!~]?=)",
                    oe = "\\[" + te + "*(" + ne + ")" + te + "*(?:" + re + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                    se = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                    ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                    ue = new RegExp("^" + te + "*," + te + "*"),
                    ce = new RegExp("^" + te + "*([\\x20\\t\\r\\n\\f>+~])" + te + "*"),
                    de = new RegExp(se),
                    pe = new RegExp("^" + ie + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ne + ")"),
                        CLASS: new RegExp("^\\.(" + ne + ")"),
                        NAME: new RegExp("^\\[name=['\"]?(" + ne + ")['\"]?\\]"),
                        TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + se),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                        needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /[\x20\t\r\n\f]*[+~]/,
                    me = /\{\s*\[native code\]\s*\}/,
                    ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /^(?:input|select|textarea|button)$/i,
                    ve = /^h\d$/i,
                    Ae = /'|\\/g,
                    be = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    Ee = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                    we = function(e, t) {
                        var n = "0x" + t - 65536;
                        return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    };
                try {
                    Z.call(M.childNodes, 0)[0].nodeType
                } catch (Le) {
                    Z = function(e) {
                        for (var t, n = []; t = this[e]; e++) n.push(t);
                        return n
                    }
                }
                S = s.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, O = s.setDocument = function(e) {
                    var i = e ? e.ownerDocument || e : R;
                    return i !== k && 9 === i.nodeType && i.documentElement ? (k = i, M = i.documentElement, B = S(i), W.tagNameNoComments = o(function(e) {
                        return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                    }), W.attributes = o(function(e) {
                        e.innerHTML = "<select></select>";
                        var t = typeof e.lastChild.getAttribute("multiple");
                        return "boolean" !== t && "string" !== t
                    }), W.getByClassName = o(function(e) {
                        return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                    }), W.getByName = o(function(e) {
                        e.id = D + 0, e.innerHTML = "<a name='" + D + "'></a><div name='" + D + "'></div>", M.insertBefore(e, M.firstChild);
                        var t = i.getElementsByName && i.getElementsByName(D).length === 2 + i.getElementsByName(D + 0).length;
                        return W.getIdNotName = !i.getElementById(D), M.removeChild(e), t
                    }), N.attrHandle = o(function(e) {
                        return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
                    }) ? {} : {
                        href: function(e) {
                            return e.getAttribute("href", 2)
                        },
                        type: function(e) {
                            return e.getAttribute("type")
                        }
                    }, W.getIdNotName ? (N.find.ID = function(e, t) {
                        if (typeof t.getElementById !== V && !B) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, N.filter.ID = function(e) {
                        var t = e.replace(Ee, we);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (N.find.ID = function(e, n) {
                        if (typeof n.getElementById !== V && !B) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== V && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    }, N.filter.ID = function(e) {
                        var t = e.replace(Ee, we);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), N.find.TAG = W.tagNameNoComments ? function(e, t) {
                        return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            r = 0,
                            o = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = o[r]; r++) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, N.find.NAME = W.getByName && function(e, t) {
                        return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
                    }, N.find.CLASS = W.getByClassName && function(e, t) {
                        return typeof t.getElementsByClassName === V || B ? void 0 : t.getElementsByClassName(e)
                    }, j = [], P = [":focus"], (W.qsa = n(i.querySelectorAll)) && (o(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[" + te + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || P.push(":checked")
                    }), o(function(e) {
                        e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && P.push("[*^$]=" + te + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (W.matchesSelector = n(q = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && o(function(e) {
                        W.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), j.push("!=", se)
                    }), P = new RegExp(P.join("|")), j = new RegExp(j.join("|")), G = n(M.contains) || M.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, H = M.compareDocumentPosition ? function(e, t) {
                        var n;
                        return e === t ? (_ = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || G(R, e) ? -1 : t === i || G(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, t) {
                        var n, r = 0,
                            o = e.parentNode,
                            s = t.parentNode,
                            l = [e],
                            u = [t];
                        if (e === t) return _ = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return (~t.sourceIndex || Y) - (G(R, e) && ~e.sourceIndex || Y);
                        if (!o || !s) return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
                        if (o === s) return a(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) u.unshift(n);
                        for (; l[r] === u[r];) r++;
                        return r ? a(l[r], u[r]) : l[r] === R ? -1 : u[r] === R ? 1 : 0
                    }, _ = !1, [0, 0].sort(H), W.detectDuplicates = _, k) : k
                }, s.matches = function(e, t) {
                    return s(e, null, null, t)
                }, s.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== k && O(e), t = t.replace(be, "='$1']"), W.matchesSelector && !B && (!j || !j.test(t)) && !P.test(t)) try {
                        var n = q.call(e, t);
                        if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (i) {}
                    return s(t, k, null, [e]).length > 0
                }, s.contains = function(e, t) {
                    return (e.ownerDocument || e) !== k && O(e), G(e, t)
                }, s.attr = function(e, t) {
                    var n;
                    return (e.ownerDocument || e) !== k && O(e), B || (t = t.toLowerCase()), (n = N.attrHandle[t]) ? n(e) : B || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
                }, s.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, s.uniqueSort = function(e) {
                    var t, n = [],
                        i = 1,
                        r = 0;
                    if (_ = !W.detectDuplicates, e.sort(H), _) {
                        for (; t = e[i]; i++) t === e[i - 1] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return e
                }, x = s.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                        } else if (3 === r || 4 === r) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += x(t);
                    return n
                }, N = s.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: fe,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Ee, we), e[3] = (e[4] || e[5] || "").replace(Ee, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || s.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && s.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[5] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(Ee, we).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(e) {
                            var t = z[e + " "];
                            return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && z(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(i) {
                                var r = s.attr(i, e);
                                return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.substr(r.length - n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.substr(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === r ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var u, c, d, p, f, h, m = o !== s ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    y = a && t.nodeName.toLowerCase(),
                                    v = !l && !a;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (d = t; d = d[m];)
                                                if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                            h = m = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [s ? g.firstChild : g.lastChild], s && v) {
                                        for (c = g[D] || (g[D] = {}), u = c[e] || [], f = u[0] === F && u[1], p = u[0] === F && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                            if (1 === d.nodeType && ++p && d === t) {
                                                c[e] = [F, f, p];
                                                break
                                            }
                                    } else if (v && (u = (t[D] || (t[D] = {}))[e]) && u[0] === F) p = u[1];
                                    else
                                        for (;
                                            (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++p || (v && ((d[D] || (d[D] = {}))[e] = [F, p]), d !== t)););
                                    return p -= r, p === i || p % i === 0 && p / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = N.pseudos[e] || N.setFilters[e.toLowerCase()] || s.error("unsupported pseudo: " + e);
                            return i[D] ? i(t) : i.length > 1 ? (n = [e, e, "", t], N.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
                                for (var r, o = i(e, t), s = o.length; s--;) r = ee.call(e, o[s]), e[r] = !(n[r] = o[s])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: r(function(e) {
                            var t = [],
                                n = [],
                                i = C(e.replace(ae, "$1"));
                            return i[D] ? r(function(e, t, n, r) {
                                for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, r, o) {
                                return t[0] = e, i(t, null, o, n), !n.pop()
                            }
                        }),
                        has: r(function(e) {
                            return function(t) {
                                return s(e, t).length > 0
                            }
                        }),
                        contains: r(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                            }
                        }),
                        lang: r(function(e) {
                            return pe.test(e || "") || s.error("unsupported lang: " + e), e = e.replace(Ee, we).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = B ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function(e) {
                            return e === M
                        },
                        focus: function(e) {
                            return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !N.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ve.test(e.nodeName)
                        },
                        input: function(e) {
                            return ye.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(e, t) {
                            return [t - 1]
                        }),
                        eq: c(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                };
                for (w in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) N.pseudos[w] = l(w);
                for (w in {
                        submit: !0,
                        reset: !0
                    }) N.pseudos[w] = u(w);
                C = s.compile = function(e, t) {
                    var n, i = [],
                        r = [],
                        o = U[e + " "];
                    if (!o) {
                        for (t || (t = d(e)), n = t.length; n--;) o = y(t[n]), o[D] ? i.push(o) : r.push(o);
                        o = U(e, v(r, i))
                    }
                    return o
                }, N.pseudos.nth = N.pseudos.eq, N.filters = E.prototype = N.pseudos, N.setFilters = new E, O(), s.attr = le.attr, le.find = s, le.expr = s.selectors, le.expr[":"] = le.expr.pseudos, le.unique = s.uniqueSort, le.text = s.getText, le.isXMLDoc = s.isXML, le.contains = s.contains
            }(e);
        var Re = /Until$/,
            We = /^(?:parents|prev(?:Until|All))/,
            Fe = /^.[^:#\[\.,]*$/,
            Ie = le.expr.match.needsContext,
            ze = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        le.fn.extend({
            find: function(e) {
                var t, n, i;
                if ("string" != typeof e) return i = this, this.pushStack(le(e).filter(function() {
                    for (t = 0; t < i.length; t++)
                        if (le.contains(i[t], this)) return !0
                }));
                for (n = [], t = 0; t < this.length; t++) le.find(e, this[t], n);
                return n = this.pushStack(le.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
            },
            has: function(e) {
                var t, n = le(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (le.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(d(this, e, !1))
            },
            filter: function(e) {
                return this.pushStack(d(this, e, !0))
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Ie.test(e) ? le(e, this.context).index(this[0]) >= 0 : le.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], s = Ie.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                        if (s ? s.index(n) > -1 : le.find.matchesSelector(n, e)) {
                            o.push(n);
                            break
                        }
                        n = n.parentNode
                    }
                return this.pushStack(o.length > 1 ? le.unique(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? le.inArray(this[0], le(e)) : le.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? le(e, t) : le.makeArray(e && e.nodeType ? [e] : e),
                    i = le.merge(this.get(), n);
                return this.pushStack(le.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), le.fn.andSelf = le.fn.addBack, le.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return le.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return le.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return le.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return le.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return le.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return le.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return le.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return le.sibling(e.firstChild)
            },
            contents: function(e) {
                return le.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : le.merge([], e.childNodes)
            }
        }, function(e, t) {
            le.fn[e] = function(n, i) {
                var r = le.map(this, t, n);
                return Re.test(e) || (i = n), i && "string" == typeof i && (r = le.filter(i, r)), r = this.length > 1 && !ze[e] ? le.unique(r) : r, this.length > 1 && We.test(e) && (r = r.reverse()), this.pushStack(r)
            }
        }), le.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? le.find.matchesSelector(t[0], e) ? [t[0]] : [] : le.find.matches(e, t)
            },
            dir: function(e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !le(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var $e = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Xe = / jQuery\d+="(?:null|\d+)"/g,
            Ue = new RegExp("<(?:" + $e + ")[\\s/>]", "i"),
            Ve = /^\s+/,
            Ye = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Je = /<([\w:]+)/,
            Qe = /<tbody/i,
            Ke = /<|&#?\w+;/,
            Ze = /<(?:script|style|link)/i,
            et = /^(?:checkbox|radio)$/i,
            tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            nt = /^$|\/(?:java|ecma)script/i,
            it = /^true\/(.*)/,
            rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ot = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: le.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            st = p(V),
            at = st.appendChild(V.createElement("div"));
        ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, le.fn.extend({
            text: function(e) {
                return le.access(this, function(e) {
                    return e === t ? le.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (le.isFunction(e)) return this.each(function(t) {
                    le(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = le(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return le.isFunction(e) ? this.each(function(t) {
                    le(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = le(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = le.isFunction(e);
                return this.each(function(n) {
                    le(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)(!e || le.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || le.cleanData(A(n)), n.parentNode && (t && le.contains(n.ownerDocument, n) && g(A(n, "script")), n.parentNode.removeChild(n)));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && le.cleanData(A(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && le.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return le.clone(this, e, t)
                })
            },
            html: function(e) {
                return le.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xe, "") : t;
                    if ("string" == typeof e && !Ze.test(e) && (le.support.htmlSerialize || !Ue.test(e)) && (le.support.leadingWhitespace || !Ve.test(e)) && !ot[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Ye, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (le.cleanData(A(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                var t = le.isFunction(e);
                return t || "string" == typeof e || (e = le(e).not(this).detach()), this.domManip([e], !0, function(e) {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    (n && 1 === this.nodeType || 11 === this.nodeType) && (le(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
                })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, i) {
                e = te.apply([], e);
                var r, o, s, a, l, u, c = 0,
                    d = this.length,
                    p = this,
                    g = d - 1,
                    y = e[0],
                    v = le.isFunction(y);
                if (v || !(1 >= d || "string" != typeof y || le.support.checkClone) && tt.test(y)) return this.each(function(r) {
                    var o = p.eq(r);
                    v && (e[0] = y.call(this, r, n ? o.html() : t)), o.domManip(e, n, i)
                });
                if (d && (r = le.buildFragment(e, this[0].ownerDocument, !1, this), o = r.firstChild, 1 === r.childNodes.length && (r = o), o)) {
                    for (n = n && le.nodeName(o, "tr"), s = le.map(A(r, "script"), h), a = s.length; d > c; c++) l = r, c !== g && (l = le.clone(l, !0, !0), a && le.merge(s, A(l, "script"))), i.call(n && le.nodeName(this[c], "table") ? f(this[c], "tbody") : this[c], l, c);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, le.map(s, m), c = 0; a > c; c++) l = s[c], nt.test(l.type || "") && !le._data(l, "globalEval") && le.contains(u, l) && (l.src ? le.ajax({
                            url: l.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : le.globalEval((l.text || l.textContent || l.innerHTML || "").replace(rt, "")));
                    r = o = null
                }
                return this
            }
        }), le.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            le.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = le(e), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), le(o[i])[t](n), ne.apply(r, n.get());
                return this.pushStack(r)
            }
        }), le.extend({
            clone: function(e, t, n) {
                var i, r, o, s, a, l = le.contains(e.ownerDocument, e);
                if (le.support.html5Clone || le.isXMLDoc(e) || !Ue.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(a = at.firstChild)), !(le.support.noCloneEvent && le.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                    for (i = A(a), r = A(e), s = 0; null != (o = r[s]); ++s) i[s] && v(o, i[s]);
                if (t)
                    if (n)
                        for (r = r || A(e), i = i || A(a), s = 0; null != (o = r[s]); s++) y(o, i[s]);
                    else y(e, a);
                return i = A(a, "script"), i.length > 0 && g(i, !l && A(e, "script")), i = r = o = null, a
            },
            buildFragment: function(e, t, n, i) {
                for (var r, o, s, a, l, u, c, d = e.length, f = p(t), h = [], m = 0; d > m; m++)
                    if (o = e[m], o || 0 === o)
                        if ("object" === le.type(o)) le.merge(h, o.nodeType ? [o] : o);
                        else if (Ke.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (Je.exec(o) || ["", ""])[1].toLowerCase(), l = ot[s] || ot._default, a.innerHTML = l[1] + o.replace(Ye, "<$1></$2>") + l[2], c = l[0]; c--;) a = a.lastChild;
                    if (!le.support.leadingWhitespace && Ve.test(o) && h.push(t.createTextNode(Ve.exec(o)[0])), !le.support.tbody)
                        for (o = "table" !== s || Qe.test(o) ? "<table>" !== l[1] || Qe.test(o) ? 0 : a : a.firstChild, c = o && o.childNodes.length; c--;) le.nodeName(u = o.childNodes[c], "tbody") && !u.childNodes.length && o.removeChild(u);
                    for (le.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = f.lastChild
                } else h.push(t.createTextNode(o));
                for (a && f.removeChild(a), le.support.appendChecked || le.grep(A(h, "input"), b), m = 0; o = h[m++];)
                    if ((!i || -1 === le.inArray(o, i)) && (r = le.contains(o.ownerDocument, o), a = A(f.appendChild(o), "script"), r && g(a), n))
                        for (c = 0; o = a[c++];) nt.test(o.type || "") && n.push(o);
                return a = null, f
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, s = 0, a = le.expando, l = le.cache, u = le.support.deleteExpando, c = le.event.special; null != (r = e[s]); s++)
                    if ((t || le.acceptData(r)) && (i = r[a], n = i && l[i])) {
                        if (n.events)
                            for (o in n.events) c[o] ? le.event.remove(r, o) : le.removeEvent(r, o, n.handle);
                        l[i] && (delete l[i], u ? delete r[a] : "undefined" != typeof r.removeAttribute ? r.removeAttribute(a) : r[a] = null, Z.push(i))
                    }
            }
        });
        var lt, ut, ct, dt = /alpha\([^)]*\)/i,
            pt = /opacity\s*=\s*([^)]*)/,
            ft = /^(top|right|bottom|left)$/,
            ht = /^(none|table(?!-c[ea]).+)/,
            mt = /^margin/,
            gt = new RegExp("^(" + ue + ")(.*)$", "i"),
            yt = new RegExp("^(" + ue + ")(?!px)[a-z%]+$", "i"),
            vt = new RegExp("^([+-])=(" + ue + ")", "i"),
            At = {
                BODY: "block"
            },
            bt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Et = {
                letterSpacing: 0,
                fontWeight: 400
            },
            wt = ["Top", "Right", "Bottom", "Left"],
            Lt = ["Webkit", "O", "Moz", "ms"];
        le.fn.extend({
            css: function(e, n) {
                return le.access(this, function(e, n, i) {
                    var r, o, s = {},
                        a = 0;
                    if (le.isArray(n)) {
                        for (r = ut(e), o = n.length; o > a; a++) s[n[a]] = le.css(e, n[a], !1, r);
                        return s
                    }
                    return i !== t ? le.style(e, n, i) : le.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(e) {
                var t = "boolean" == typeof e;
                return this.each(function() {
                    (t ? e : w(this)) ? le(this).show(): le(this).hide()
                })
            }
        }), le.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = lt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": le.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, s, a, l = le.camelCase(n),
                        u = e.style;
                    if (n = le.cssProps[l] || (le.cssProps[l] = E(u, l)), a = le.cssHooks[n] || le.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
                    if (s = typeof i, "string" === s && (o = vt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(le.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || le.cssNumber[l] || (i += "px"), le.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(e, n, i, r) {
                var o, s, a, l = le.camelCase(n);
                return n = le.cssProps[l] || (le.cssProps[l] = E(e.style, l)), a = le.cssHooks[n] || le.cssHooks[l], a && "get" in a && (o = a.get(e, !0, i)), o === t && (o = lt(e, n, r)), "normal" === o && n in Et && (o = Et[n]), i ? (s = parseFloat(o), i === !0 || le.isNumeric(s) ? s || 0 : o) : o
            },
            swap: function(e, t, n, i) {
                var r, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                r = n.apply(e, i || []);
                for (o in t) e.style[o] = s[o];
                return r
            }
        }), e.getComputedStyle ? (ut = function(t) {
            return e.getComputedStyle(t, null)
        }, lt = function(e, n, i) {
            var r, o, s, a = i || ut(e),
                l = a ? a.getPropertyValue(n) || a[n] : t,
                u = e.style;
            return a && ("" !== l || le.contains(e.ownerDocument, e) || (l = le.style(e, n)), yt.test(l) && mt.test(n) && (r = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = r, u.minWidth = o, u.maxWidth = s)), l
        }) : V.documentElement.currentStyle && (ut = function(e) {
            return e.currentStyle
        }, lt = function(e, n, i) {
            var r, o, s, a = i || ut(e),
                l = a ? a[n] : t,
                u = e.style;
            return null == l && u && u[n] && (l = u[n]), yt.test(l) && !ft.test(n) && (r = u.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = r, s && (o.left = s)), "" === l ? "auto" : l
        }), le.each(["height", "width"], function(e, t) {
            le.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && ht.test(le.css(e, "display")) ? le.swap(e, bt, function() {
                        return S(e, t, i)
                    }) : S(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && ut(e);
                    return N(e, n, i ? x(e, t, i, le.support.boxSizing && "border-box" === le.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), le.support.opacity || (le.cssHooks.opacity = {
            get: function(e, t) {
                return pt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = le.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === le.trim(o.replace(dt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = dt.test(o) ? o.replace(dt, r) : o + " " + r)
            }
        }), le(function() {
            le.support.reliableMarginRight || (le.cssHooks.marginRight = {
                get: function(e, t) {
                    return t ? le.swap(e, {
                        display: "inline-block"
                    }, lt, [e, "marginRight"]) : void 0
                }
            }), !le.support.pixelPosition && le.fn.position && le.each(["top", "left"], function(e, t) {
                le.cssHooks[t] = {
                    get: function(e, n) {
                        return n ? (n = lt(e, t), yt.test(n) ? le(e).position()[t] + "px" : n) : void 0
                    }
                }
            })
        }), le.expr && le.expr.filters && (le.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !le.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || le.css(e, "display"))
        }, le.expr.filters.visible = function(e) {
            return !le.expr.filters.hidden(e)
        }), le.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            le.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + wt[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, mt.test(e) || (le.cssHooks[e + t].set = N)
        });
        var Nt = /%20/g,
            xt = /\[\]$/,
            St = /\r?\n/g,
            Ct = /^(?:submit|button|image|reset)$/i,
            _t = /^(?:input|select|textarea|keygen)/i;
        le.fn.extend({
            serialize: function() {
                return le.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = le.prop(this, "elements");
                    return e ? le.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !le(this).is(":disabled") && _t.test(this.nodeName) && !Ct.test(e) && (this.checked || !et.test(e))
                }).map(function(e, t) {
                    var n = le(this).val();
                    return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(St, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(St, "\r\n")
                    }
                }).get()
            }
        }), le.param = function(e, n) {
            var i, r = [],
                o = function(e, t) {
                    t = le.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (i in e) T(i, e[i], n, o);
            return r.join("&").replace(Nt, "+")
        };
        var Tt, Ot, kt = le.now(),
            Mt = /\?/,
            Bt = /#.*$/,
            Pt = /([?&])_=[^&]*/,
            jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Gt = /^(?:GET|HEAD)$/,
            Ht = /^\/\//,
            Dt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Rt = le.fn.load,
            Wt = {},
            Ft = {},
            It = "*/".concat("*");
        try {
            Ot = Y.href
        } catch (zt) {
            Ot = V.createElement("a"), Ot.href = "", Ot = Ot.href
        }
        Tt = Dt.exec(Ot.toLowerCase()) || [], le.fn.load = function(e, n, i) {
            if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
            var r, o, s, a = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), le.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), a.length > 0 && le.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n
            }).done(function(e) {
                s = arguments, a.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
            }).complete(i && function(e, t) {
                a.each(i, s || [e.responseText, t, e])
            }), this
        }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            le.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), le.each(["get", "post"], function(e, n) {
            le[n] = function(e, i, r, o) {
                return le.isFunction(i) && (o = o || r, r = i, i = t), le.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: i,
                    success: r
                })
            }
        }), le.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot,
                type: "GET",
                isLocal: qt.test(Tt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": It,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": le.parseJSON,
                    "text xml": le.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? M(M(e, le.ajaxSettings), t) : M(le.ajaxSettings, e)
            },
            ajaxPrefilter: O(Wt),
            ajaxTransport: O(Ft),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, d, v, A, E, L = n;
                    2 !== b && (b = 2, l && clearTimeout(l), r = t, s = a || "", w.readyState = e > 0 ? 4 : 0, i && (A = B(p, w, i)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (E = w.getResponseHeader("Last-Modified"), E && (le.lastModified[o] = E), E = w.getResponseHeader("etag"), E && (le.etag[o] = E)), 304 === e ? (u = !0, L = "notmodified") : (u = P(p, A), L = u.state, d = u.data, v = u.error, u = !v)) : (v = L, (e || !L) && (L = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || L) + "", u ? m.resolveWith(f, [d, L, w]) : m.rejectWith(f, [w, L, v]), w.statusCode(y), y = t, c && h.trigger(u ? "ajaxSuccess" : "ajaxError", [w, p, u ? d : v]), g.fireWith(f, [w, L]), c && (h.trigger("ajaxComplete", [w, p]), --le.active || le.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, s, a, l, u, c, d, p = le.ajaxSetup({}, n),
                    f = p.context || p,
                    h = p.context && (f.nodeType || f.jquery) ? le(f) : le.event,
                    m = le.Deferred(),
                    g = le.Callbacks("once memory"),
                    y = p.statusCode || {},
                    v = {},
                    A = {},
                    b = 0,
                    E = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!a)
                                    for (a = {}; t = jt.exec(s);) a[t[1].toLowerCase()] = t[2];
                                t = a[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = A[n] = A[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) y[t] = [y[t], e[t]];
                                else w.always(e[w.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || E;
                            return r && r.abort(t), i(0, t), this
                        }
                    };
                if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Ot) + "").replace(Bt, "").replace(Ht, Tt[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(ce) || [""], null == p.crossDomain && (u = Dt.exec(p.url.toLowerCase()), p.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? 80 : 443)) == (Tt[3] || ("http:" === Tt[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), k(Wt, p, n, w), 2 === b) return w;
                c = p.global, c && 0 === le.active++ && le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Gt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Mt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Pt.test(o) ? o.replace(Pt, "$1_=" + kt++) : o + (Mt.test(o) ? "&" : "?") + "_=" + kt++)), p.ifModified && (le.lastModified[o] && w.setRequestHeader("If-Modified-Since", le.lastModified[o]), le.etag[o] && w.setRequestHeader("If-None-Match", le.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + It + "; q=0.01" : "") : p.accepts["*"]);
                for (d in p.headers) w.setRequestHeader(d, p.headers[d]);
                if (p.beforeSend && (p.beforeSend.call(f, w, p) === !1 || 2 === b)) return w.abort();
                E = "abort";
                for (d in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[d](p[d]);
                if (r = k(Ft, p, n, w)) {
                    w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, r.send(v, i)
                    } catch (L) {
                        if (!(2 > b)) throw L;
                        i(-1, L)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getScript: function(e, n) {
                return le.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return le.get(e, t, n, "json")
            }
        }), le.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return le.globalEval(e), e
                }
            }
        }), le.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), le.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = V.head || le("head")[0] || V.documentElement;
                return {
                    send: function(t, r) {
                        n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var $t = [],
            Xt = /(=)\?(?=&|$)|\?\?/;
        le.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = $t.pop() || le.expando + "_" + kt++;
                return this[e] = !0, e
            }
        }), le.ajaxPrefilter("json jsonp", function(n, i, r) {
            var o, s, a, l = n.jsonp !== !1 && (Xt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = le.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xt, "$1" + o) : n.jsonp !== !1 && (n.url += (Mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return a || le.error(o + " was not called"), a[0]
            }, n.dataTypes[0] = "json", s = e[o], e[o] = function() {
                a = arguments
            }, r.always(function() {
                e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, $t.push(o)), a && le.isFunction(s) && s(a[0]), a = s = t
            }), "script") : void 0
        });
        var Ut, Vt, Yt = 0,
            Jt = e.ActiveXObject && function() {
                var e;
                for (e in Ut) Ut[e](t, !0)
            };
        le.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && j() || q()
        } : j, Vt = le.ajaxSettings.xhr(), le.support.cors = !!Vt && "withCredentials" in Vt, Vt = le.support.ajax = !!Vt, Vt && le.ajaxTransport(function(n) {
            if (!n.crossDomain || le.support.cors) {
                var i;
                return {
                    send: function(r, o) {
                        var s, a, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) l[a] = n.xhrFields[a];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in r) l.setRequestHeader(a, r[a])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var a, u, c, d, p;
                            try {
                                if (i && (r || 4 === l.readyState))
                                    if (i = t, s && (l.onreadystatechange = le.noop, Jt && delete Ut[s]), r) 4 !== l.readyState && l.abort();
                                    else {
                                        d = {}, a = l.status, p = l.responseXML, c = l.getAllResponseHeaders(), p && p.documentElement && (d.xml = p), "string" == typeof l.responseText && (d.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch (f) {
                                            u = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (h) {
                                r || o(-1, h)
                            }
                            d && o(a, u, d, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Yt, Jt && (Ut || (Ut = {}, le(e).unload(Jt)), Ut[s] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Qt, Kt, Zt = /^(?:toggle|show|hide)$/,
            en = new RegExp("^(?:([+-])=|)(" + ue + ")([a-z%]*)$", "i"),
            tn = /queueHooks$/,
            nn = [W],
            rn = {
                "*": [function(e, t) {
                    var n, i, r = this.createTween(e, t),
                        o = en.exec(t),
                        s = r.cur(),
                        a = +s || 0,
                        l = 1,
                        u = 20;
                    if (o) {
                        if (n = +o[2], i = o[3] || (le.cssNumber[e] ? "" : "px"), "px" !== i && a) {
                            a = le.css(r.elem, e, !0) || n || 1;
                            do l = l || ".5", a /= l, le.style(r.elem, e, a + i); while (l !== (l = r.cur() / s) && 1 !== l && --u)
                        }
                        r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n
                    }
                    return r
                }]
            };
        le.Animation = le.extend(D, {
            tweener: function(e, t) {
                le.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], rn[n] = rn[n] || [], rn[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? nn.unshift(e) : nn.push(e)
            }
        }), le.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (le.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = le.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    le.fx.step[e.prop] ? le.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[le.cssProps[e.prop]] || le.cssHooks[e.prop]) ? le.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, le.each(["toggle", "show", "hide"], function(e, t) {
            var n = le.fn[t];
            le.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
            }
        }), le.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(w).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = le.isEmptyObject(e),
                    o = le.speed(t, n, i),
                    s = function() {
                        var t = D(this, le.extend({}, e), o);
                        s.finish = function() {
                            t.stop(!0)
                        }, (r || le._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, n, i) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = le.timers,
                        s = le._data(this);
                    if (n) s[n] && s[n].stop && r(s[n]);
                    else
                        for (n in s) s[n] && s[n].stop && tn.test(n) && r(s[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && le.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = le._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = le.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, le.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), le.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            le.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), le.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? le.extend({}, e) : {
                complete: n || !n && t || le.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !le.isFunction(t) && t
            };
            return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
            }, i
        }, le.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, le.timers = [], le.fx = F.prototype.init, le.fx.tick = function() {
            var e, n = le.timers,
                i = 0;
            for (Qt = le.now(); i < n.length; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || le.fx.stop(), Qt = t
        }, le.fx.timer = function(e) {
            e() && le.timers.push(e) && le.fx.start()
        }, le.fx.interval = 13, le.fx.start = function() {
            Kt || (Kt = setInterval(le.fx.tick, le.fx.interval))
        }, le.fx.stop = function() {
            clearInterval(Kt), Kt = null
        }, le.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, le.fx.step = {}, le.expr && le.expr.filters && (le.expr.filters.animated = function(e) {
            return le.grep(le.timers, function(t) {
                return e === t.elem
            }).length
        }), le.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                le.offset.setOffset(this, e, t)
            });
            var n, i, r = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (n = s.documentElement, le.contains(n, o) ? ("undefined" != typeof o.getBoundingClientRect && (r = o.getBoundingClientRect()), i = z(s), {
                top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : r) : void 0
        }, le.offset = {
            setOffset: function(e, t, n) {
                var i = le.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r = le(e),
                    o = r.offset(),
                    s = le.css(e, "top"),
                    a = le.css(e, "left"),
                    l = ("absolute" === i || "fixed" === i) && le.inArray("auto", [s, a]) > -1,
                    u = {},
                    c = {},
                    d, p;
                l ? (c = r.position(), d = c.top, p = c.left) : (d = parseFloat(s) || 0, p = parseFloat(a) || 0), le.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + d), null != t.left && (u.left = t.left - o.left + p), "using" in t ? t.using.call(e, u) : r.css(u)
            }
        }, le.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === le.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (n = e.offset()), n.top += le.css(e[0], "borderTopWidth", !0), n.left += le.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - le.css(i, "marginTop", !0),
                        left: t.left - n.left - le.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || V.documentElement; e && !le.nodeName(e, "html") && "static" === le.css(e, "position");) e = e.offsetParent;
                    return e || V.documentElement
                })
            }
        }), le.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            le.fn[e] = function(r) {
                return le.access(this, function(e, r, o) {
                    var s = z(e);
                    return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(i ? le(s).scrollLeft() : o, i ? o : le(s).scrollTop()) : e[r] = o)
                }, e, r, arguments.length, null);
            }
        }), le.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            le.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, r) {
                le.fn[r] = function(r, o) {
                    var s = arguments.length && (i || "boolean" != typeof r),
                        a = i || (r === !0 || o === !0 ? "margin" : "border");
                    return le.access(this, function(n, i, r) {
                        var o;
                        return le.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? le.css(n, i, a) : le.style(n, i, r, a)
                    }, n, s ? r : t, s, null)
                }
            })
        }), e.jQuery = e.$ = le, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return le
        })
    }(window),
    function() {
        "use strict";

        function e(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t, this.options = e.Adapter.extend({}, e.defaults, i), this.element = this.options.element, this.adapter = new e.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = e.Context.findOrCreateByElement(this.options.context), e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, t += 1
        }
        var t = 0,
            n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }, e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }, e.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, e.prototype.disable = function() {
            return this.enabled = !1, this
        }, e.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, e.prototype.next = function() {
            return this.group.next(this)
        }, e.prototype.previous = function() {
            return this.group.previous(this)
        }, e.invokeAll = function(e) {
            var t = [];
            for (var i in n) t.push(n[i]);
            for (var r = 0, o = t.length; o > r; r++) t[r][e]()
        }, e.destroyAll = function() {
            e.invokeAll("destroy")
        }, e.disableAll = function() {
            e.invokeAll("disable")
        }, e.enableAll = function() {
            e.invokeAll("enable")
        }, e.refreshAll = function() {
            e.Context.refreshAll()
        }, e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, e.adapters = [], e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = e
    }(),
    function() {
        "use strict";

        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }

        function t(e) {
            this.element = e, this.Adapter = r.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, n += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var n = 0,
            i = {},
            r = window.Waypoint,
            o = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e, this.refresh()
        }, t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                t = this.Adapter.isEmptyObject(this.waypoints.vertical);
            e && t && (this.adapter.off(".waypoints"), delete i[this.key])
        }, t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(), t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(), t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                (!t.didScroll || r.isTouch) && (t.didScroll = !0, r.requestAnimationFrame(e))
            })
        }, t.prototype.handleResize = function() {
            r.Context.refreshAll()
        }, t.prototype.handleScroll = function() {
            var e = {},
                t = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var n in t) {
                var i = t[n],
                    r = i.newScroll > i.oldScroll,
                    o = r ? i.forward : i.backward;
                for (var s in this.waypoints[n]) {
                    var a = this.waypoints[n][s],
                        l = i.oldScroll < a.triggerPoint,
                        u = i.newScroll >= a.triggerPoint,
                        c = l && u,
                        d = !l && !u;
                    (c || d) && (a.queueTrigger(o), e[a.group.id] = a.group)
                }
            }
            for (var p in e) e[p].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }, t.prototype.innerHeight = function() {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key], this.checkEmpty()
        }, t.prototype.innerWidth = function() {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
            for (var i = 0, r = e.length; r > i; i++) e[i].destroy()
        }, t.prototype.refresh = function() {
            var e = this.element == this.element.window,
                t = e ? void 0 : this.adapter.offset(),
                n = {},
                i;
            this.handleScroll(), i = {
                horizontal: {
                    contextOffset: e ? 0 : t.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : t.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var o in i) {
                var s = i[o];
                for (var a in this.waypoints[o]) {
                    var l = this.waypoints[o][a],
                        u = l.options.offset,
                        c = l.triggerPoint,
                        d = 0,
                        p = null == c,
                        f, h, m, g, y;
                    l.element !== l.element.window && (d = l.adapter.offset()[s.offsetProp]), "function" == typeof u ? u = u.apply(l) : "string" == typeof u && (u = parseFloat(u), l.options.offset.indexOf("%") > -1 && (u = Math.ceil(s.contextDimension * u / 100))), f = s.contextScroll - s.contextOffset, l.triggerPoint = d + f - u, h = c < s.oldScroll, m = l.triggerPoint >= s.oldScroll, g = h && m, y = !h && !m, !p && g ? (l.queueTrigger(s.backward), n[l.group.id] = l.group) : !p && y ? (l.queueTrigger(s.forward), n[l.group.id] = l.group) : p && s.oldScroll >= l.triggerPoint && (l.queueTrigger(s.forward), n[l.group.id] = l.group)
                }
            }
            return r.requestAnimationFrame(function() {
                for (var e in n) n[e].flushTriggers()
            }), this
        }, t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }, t.refreshAll = function() {
            for (var e in i) i[e].refresh()
        }, t.findByElement = function(e) {
            return i[e.waypointContextKey]
        }, window.onload = function() {
            o && o(), t.refreshAll()
        }, r.requestAnimationFrame = function(t) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
            n.call(window, t)
        }, r.Context = t
    }(),
    function() {
        "use strict";

        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }

        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }

        function n(e) {
            this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }
        var i = {
                vertical: {},
                horizontal: {}
            },
            r = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }, n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n],
                    r = "up" === n || "left" === n;
                i.sort(r ? t : e);
                for (var o = 0, s = i.length; s > o; o += 1) {
                    var a = i[o];
                    (a.options.continuous || o === i.length - 1) && a.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = r.Adapter.inArray(t, this.waypoints),
                i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = r.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }, n.prototype.remove = function(e) {
            var t = r.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }, n.prototype.first = function() {
            return this.waypoints[0]
        }, n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function(e) {
            return i[e.axis][e.name] || new n(e)
        }, r.Group = n
    }(),
    function() {
        "use strict";

        function e(e) {
            return e === e.window
        }

        function t(t) {
            return e(t) ? t : t.defaultView
        }

        function n(e) {
            this.element = e, this.handlers = {}
        }
        var i = window.Waypoint;
        n.prototype.innerHeight = function() {
            var t = e(this.element);
            return t ? this.element.innerHeight : this.element.clientHeight
        }, n.prototype.innerWidth = function() {
            var t = e(this.element);
            return t ? this.element.innerWidth : this.element.clientWidth
        }, n.prototype.off = function(e, t) {
            function n(e, t, n) {
                for (var i = 0, r = t.length - 1; r > i; i++) {
                    var o = t[i];
                    n && n !== o || e.removeEventListener(o)
                }
            }
            var i = e.split("."),
                r = i[0],
                o = i[1],
                s = this.element;
            if (o && this.handlers[o] && r) n(s, this.handlers[o][r], t), this.handlers[o][r] = [];
            else if (r)
                for (var a in this.handlers) n(s, this.handlers[a][r] || [], t), this.handlers[a][r] = [];
            else if (o && this.handlers[o]) {
                for (var l in this.handlers[o]) n(s, this.handlers[o][l], t);
                this.handlers[o] = {}
            }
        }, n.prototype.offset = function() {
            if (!this.element.ownerDocument) return null;
            var e = this.element.ownerDocument.documentElement,
                n = t(this.element.ownerDocument),
                i = {
                    top: 0,
                    left: 0
                };
            return this.element.getBoundingClientRect && (i = this.element.getBoundingClientRect()), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }
        }, n.prototype.on = function(e, t) {
            var n = e.split("."),
                i = n[0],
                r = n[1] || "__default",
                o = this.handlers[r] = this.handlers[r] || {},
                s = o[i] = o[i] || [];
            s.push(t), this.element.addEventListener(i, t)
        }, n.prototype.outerHeight = function(t) {
            var n = this.innerHeight(),
                i;
            return t && !e(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n
        }, n.prototype.outerWidth = function(t) {
            var n = this.innerWidth(),
                i;
            return t && !e(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n
        }, n.prototype.scrollLeft = function() {
            var e = t(this.element);
            return e ? e.pageXOffset : this.element.scrollLeft
        }, n.prototype.scrollTop = function() {
            var e = t(this.element);
            return e ? e.pageYOffset : this.element.scrollTop
        }, n.extend = function() {
            function e(e, t) {
                if ("object" == typeof e && "object" == typeof t)
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }
            for (var t = Array.prototype.slice.call(arguments), n = 1, i = t.length; i > n; n++) e(t[0], t[n]);
            return t[0]
        }, n.inArray = function(e, t, n) {
            return null == t ? -1 : t.indexOf(e, n)
        }, n.isEmptyObject = function(e) {
            for (var t in e) return !1;
            return !0
        }, i.adapters.push({
            name: "noframework",
            Adapter: n
        }), i.Adapter = n
    }(), window[GLOBAL_NAMESPACE].GlobalTools = {
        clone: function(e) {
            return JSON.parse(JSON.stringify(e))
        },
        transitionEnd: function() {
            return "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend"
        },
        debounce: function(e, t, n) {
            var i;
            return function() {
                var r = this,
                    o = arguments,
                    s = function() {
                        i = null, n || e.apply(r, o)
                    },
                    a = n && !i;
                clearTimeout(i), i = setTimeout(s, t), a && e.apply(r, o)
            }
        },
        throttle: function(e, t) {
            var n = !1;
            return function() {
                n || (e.call(), n = !0, setTimeout(function() {
                    n = !1
                }, t))
            }
        },
        inView: function(e) {
            var t = e[0].getBoundingClientRect();
            return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
        }
    }, window[GLOBAL_NAMESPACE].MobileHelper = {}, window[GLOBAL_NAMESPACE].DesktopTools = {
        isOpera: function() {
            return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
        },
        isFirefox: function() {
            return "undefined" != typeof InstallTrigger
        },
        isSafari: function() {
            return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0
        },
        isIE: function(e) {
            if ("version" === e) {
                var t = window.navigator.userAgent,
                    n = t.indexOf("MSIE ");
                if (n > 0) return parseInt(t.substring(n + 5, t.indexOf(".", n)), 10);
                var i = t.indexOf("Trident/");
                if (i > 0) {
                    var r = t.indexOf("rv:");
                    return parseInt(t.substring(r + 3, t.indexOf(".", r)), 10)
                }
                var o = t.indexOf("Edge/");
                return o > 0 ? parseInt(t.substring(o + 5, t.indexOf(".", o)), 10) : !1
            }
            return !!document.documentMode
        },
        isEdge: function() {
            return !isIE && !!window.StyleMedia
        },
        isChrome: function() {
            return !!window.chrome && !!window.chrome.webstore
        },
        isBlink: function() {
            return (isChrome || isOpera) && !!window.CSS
        }
    }, window[GLOBAL_NAMESPACE].carousel = {}, window[GLOBAL_NAMESPACE].carouseling = [], window[GLOBAL_NAMESPACE].carousel.init = function(e) {
        this.init = function(e) {
            e = document.getElementsByClassName(e);
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (0 == window[GLOBAL_NAMESPACE].carouseling.filter(function(e) {
                        return e.obj == n
                    }).length) {
                    var i = e[t].children,
                        r = i.length + 3,
                        o = 100 / r,
                        s = 75;
                    e[t].hasAttribute("frameWidth") && (s = parseInt(e[t].getAttribute("frameWidth")));
                    var a = "",
                        l = "";
                    if (i[i.length - 1].hasAttribute("link")) {
                        l += '<a href="' + i[i.length - 1].getAttribute("link") + '" target="';
                        var u = "_self";
                        !i[i.length - 1].hasAttribute("target") || "self" != i[i.length - 1].getAttribute("target") && "blank" != i[i.length - 1].getAttribute("target") || (u = i[i.length - 1].getAttribute("target")), l += u + '">'
                    }
                    if (l += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item" data-slide-index="-1" style="width:' + o + '%;">', l += '<div class="' + GLOBAL_NAMESPACE + '-carousel-image" style="background-image:url(' + i[i.length - 1].getAttribute("image") + ')"></div>', l += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item-caption">', l += i[i.length - 1].innerHTML, l += "</div></div>", i[i.length - 1].hasAttribute("link") && (l += "</a>"), e[t].hasAttribute("type")) switch (e[t].getAttribute("type")) {
                        case "slider":
                            a += l;
                            break;
                        case "crossfade":
                            s = 100, o = 100, e[t].className += " " + GLOBAL_NAMESPACE + "-crossfade";
                            break;
                        default:
                            e[t].setAttribute("type", "slider"), a += l
                    } else a += '<div class="' + GLOBAL_NAMESPACE + '-slider" style="width: ' + s * r + "%;transform:translateX(-" + 1.5 * o + "%);-webkit-transform:translateX(-" + 1.5 * o + '%);">', e[t].setAttribute("type", "slider"), a += l;
                    var c = '<div class="' + GLOBAL_NAMESPACE + "-carousel-btn " + GLOBAL_NAMESPACE + '-carousel-btn-l" ></div><div class="' + GLOBAL_NAMESPACE + "-carousel-btn " + GLOBAL_NAMESPACE + '-carousel-btn-r"></div>';
                    c += e[t].hasAttribute("breadcrumbs") ? '<div class="' + GLOBAL_NAMESPACE + '-carousel-dots">' : '<div class="' + GLOBAL_NAMESPACE + '-carousel-dots" style="display:none">';
                    for (var d = 0; d < i.length; d++) {
                        if (i[d].hasAttribute("link")) {
                            a += '<a href="' + i[d].getAttribute("link") + '" target="';
                            var u = "_self";
                            !i[d].hasAttribute("target") || "self" != i[d].getAttribute("target") && "blank" != i[d].getAttribute("target") || (u = i[d].getAttribute("target")), a += u + '">'
                        }
                        a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item" data-slide-index="' + d + '" style="width:' + o + '%">', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-image" style="background-image:url(' + i[d].getAttribute("image") + ')"></div>', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item-caption">', a += i[d].innerHTML, a += "</div></div>", i[d].hasAttribute("link") && (a += "</a>"), c += '<div class="' + GLOBAL_NAMESPACE + '-carousel-dot" data-slide-index="' + d + '"></div>'
                    }
                    if ("slider" == e[t].getAttribute("type")) {
                        if (i[0].hasAttribute("link")) {
                            a += '<a href="' + i[0].getAttribute("link") + '" target="';
                            var u = "_self";
                            !i[0].hasAttribute("target") || "self" != i[0].getAttribute("target") && "blank" != i[0].getAttribute("target") || (u = i[0].getAttribute("target")), a += u + '">'
                        }
                        if (a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item" data-slide-index="' + i.length + '" style="width:' + o + '%">', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-image" style="background-image:url(' + i[0].getAttribute("image") + ')"></div>', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item-caption">', a += i[0].innerHTML, a += "</div></div>", i[0].hasAttribute("link") && (a += "</a>"), i[1].hasAttribute("link")) {
                            a += '<a href="' + i[1].getAttribute("link") + '" target="';
                            var u = "_self";
                            !i[1].hasAttribute("target") || "self" != i[1].getAttribute("target") && "blank" != i[1].getAttribute("target") || (u = i[1].getAttribute("target")), a += u + '">'
                        }
                        a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item" data-slide-index="1" style="width:' + o + '%">', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-image" style="background-image:url(' + i[1].getAttribute("image") + ')"></div>', a += '<div class="' + GLOBAL_NAMESPACE + '-carousel-item-caption">', a += i[1].innerHTML, a += "</div></div>", a += "</div>", i[1].hasAttribute("link") && (a += "</a>")
                    }
                    c += "</div>", e[t].innerHTML = a + c;
                    var p = new window[GLOBAL_NAMESPACE].carousel.functions(e[t]);
                    window[GLOBAL_NAMESPACE].carouseling.push(p)
                }
            }
        }, this.init(e)
    }, window[GLOBAL_NAMESPACE].carousel.functions = function(e) {
        this.obj = e, this.slide_index, this.slide_length, this.slide_current_obj, this.transition, this.type, this.transitions = ["ease", "linear", "ease-in", "ease-out", "ease-in-out", "step-start", "step-end"], this.init = function() {
            var e = "linear";
            this.obj.hasAttribute("easing") && -1 != this.transitions.indexOf(this.obj.getAttribute("easing")) && (e = this.obj.getAttribute("easing"));
            var t = "1s";
            switch (this.obj.hasAttribute("durationInSeconds") && (t = this.obj.getAttribute("durationInSeconds") + "s"), this.transition = "all " + t + " " + e, this.type = this.obj.getAttribute("type"), "crossfade" == this.type && (this.obj.style["animation-duration"] = t, this.obj.style["animation-timing-function"] = e), this.slide_index = 0, this._updateCurrentSlideObj(), this.slide_current_obj.className += " " + GLOBAL_NAMESPACE + "-active", this.type) {
                case "slider":
                    this.slide_length = this.obj.querySelectorAll("." + GLOBAL_NAMESPACE + "-carousel-item").length - 3;
                    break;
                case "crossfade":
                    this.slide_length = this.obj.querySelectorAll("." + GLOBAL_NAMESPACE + "-carousel-item").length
            }
            this.animationEnd = this.whichAnimationEvent(), this.transitionEnd = this.whichTransitionEvent(), this._setupHandlers(), this.obj.hasAttribute("swipe") && this._swipeSetup()
        }, this._setupHandlers = function() {
            var e = this,
                t = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-btn." + GLOBAL_NAMESPACE + "-carousel-btn-l");
            t.addEventListener("mousedown", function() {
                -1 == e.obj.className.indexOf("preventDoubleTap") && e._slideLeft()
            });
            var n = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-btn." + GLOBAL_NAMESPACE + "-carousel-btn-r");
            n.addEventListener("mousedown", function() {
                -1 == e.obj.className.indexOf("preventDoubleTap") && e._slideRight()
            });
            for (var i = this.obj.querySelectorAll("." + GLOBAL_NAMESPACE + "-carousel-dot"), r = 0; r < i.length; r++) i[r].addEventListener("mousedown", function() {
                -1 == e.obj.className.indexOf("preventDoubleTap") && e._slideJump(this.getAttribute("data-slide-index"))
            });
            if ("slider" == this.type)
                if (this.transitionEnd) this.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").addEventListener(this.transitionEnd, function(t) {
                    if (-1 != t.target.className.indexOf(GLOBAL_NAMESPACE + "-slider")) {
                        if (e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transition = "none", e.slide_index == e.slide_length) {
                            e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transform = "translateX(-" + 1.5 * (100 / (e.slide_length + 3)) + "%)", e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style["-webkit-transform"] = "translateX(-" + 1.5 * (100 / (e.slide_length + 3)) + "%)";
                            var n = "(^| )" + GLOBAL_NAMESPACE + "-active";
                            e.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + e.slide_index + "']").className = e.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + e.slide_index + "']").className.replace(new RegExp(n, "g"), ""), e.slide_index = 0
                        }
                        e.obj.className = e.obj.className.replace(new RegExp("(^| )preventDoubleTap", "g"), ""), e._updateCurrentSlideObj()
                    }
                });
                else {
                    if (e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transition = "none", e.slide_index == e.slide_length) {
                        e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transform = "translateX(-" + 1.5 * (100 / (e.slide_length + 3)) + "%)", e.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style["-webkit-transform"] = "translateX(-" + 1.5 * (100 / (e.slide_length + 3)) + "%)";
                        var o = "(^| )" + GLOBAL_NAMESPACE + "-active";
                        e.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + e.slide_index + "']").className = e.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + e.slide_index + "']").className.replace(new RegExp(o, "g"), ""), e.slide_index = 0
                    }
                    e.obj.className = e.obj.className.replace(new RegExp("(^| )preventDoubleTap", "g"), ""), e._updateCurrentSlideObj()
                }
        }, this._updateCurrentSlideDot = function() {
            for (var e = this.obj.querySelectorAll("." + GLOBAL_NAMESPACE + "-carousel-dot"), t = 0; t < e.length; t++)
                if (t == this.slide_index) e[this.slide_index].className += " " + GLOBAL_NAMESPACE + "-active";
                else {
                    var n = "(^| )" + GLOBAL_NAMESPACE + "-active";
                    e[t].className = e[t].className.replace(new RegExp(n, "g"), "")
                }
        }, this._updateCurrentSlideObj = function() {
            this.slide_current_obj = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_index + "']"), this._updateCurrentSlideDot()
        }, this._slide = function(e) {
            console.log(e);
            var t = this.obj;
            switch (t.className += " preventDoubleTap", this.type) {
                case "slider":
                    slider = t.querySelector("." + GLOBAL_NAMESPACE + "-slider");
                    var n = this.slide_current_obj,
                        i = "(^| )" + GLOBAL_NAMESPACE + "-active";
                    if (n.className = n.className.replace(new RegExp(i, "g"), ""), this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_length + "']").className = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_length + "']").className.replace(new RegExp(i, "g"), ""), this.slide_index == this.slide_length) {
                        var r = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='0']");
                        r.className += " " + GLOBAL_NAMESPACE + "-active"
                    }
                    var r = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_index + "']");
                    r.className += " " + GLOBAL_NAMESPACE + "-active", slider.style.transform = "translateX(-" + (this.slide_index + 1.5) * (100 / (this.slide_length + 3)) + "%)", slider.style["-webkit-transform"] = "translateX(-" + (this.slide_index + 1.5) * (100 / (this.slide_length + 3)) + "%)", slider.style.transition = this.transition, slider.style["-webkit-transition"] = this.transition;
                    break;
                case "crossfade":
                    var o = "_R" == e ? GLOBAL_NAMESPACE + "-prev" : GLOBAL_NAMESPACE + "-next",
                        s = "_R" == e ? GLOBAL_NAMESPACE + "-next" : GLOBAL_NAMESPACE + "-prev",
                        n = this.slide_current_obj;
                    n.className += " " + o, console.log(n.className);
                    var i = "(^| )" + GLOBAL_NAMESPACE + "-active";
                    n.className = n.className.replace(new RegExp(i, "g"), "");
                    var a = function() {
                        n.className = n.className.replace(new RegExp("(^| )" + o, "g"), ""), this.animationEnd && n.removeEventListener(this.animationEnd, a)
                    };
                    n.addEventListener(this.animationEnd, a), this.animationEnd || a();
                    var r = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_index + "']");
                    r.className += " " + s, r.className += " " + GLOBAL_NAMESPACE + "-active";
                    var a = function() {
                        r.className = r.className.replace(new RegExp("(^| )" + s, "g"), ""), t.className = t.className.replace(new RegExp("(^| )preventDoubleTap", "g"), ""), this.animationEnd && r.removeEventListener(this.animationEnd, a)
                    };
                    n.addEventListener(this.animationEnd, a), this.animationEnd || a(), this._updateCurrentSlideObj()
            }
        }, this._slideLeft = function() {
            switch (this.type) {
                case "slider":
                    if (save = window[GLOBAL_NAMESPACE].carouseling.indexOf(this), 0 == this.slide_index) {
                        this.slide_index = this.slide_length - 1, this.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transition = "none", this.obj.querySelector("." + GLOBAL_NAMESPACE + "-carousel-item[data-slide-index='" + this.slide_length + "']").className += " " + GLOBAL_NAMESPACE + "-active", this.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style.transform = "translateX(-" + (this.slide_length + 1.5) * (100 / (this.slide_length + 3)) + "%)", this.obj.querySelector("." + GLOBAL_NAMESPACE + "-slider").style["-webkit-transform"] = "translateX(-" + (this.slide_length + 1.5) * (100 / (this.slide_length + 3)) + "%)";
                        var e = this.slide_current_obj,
                            t = "(^| )" + GLOBAL_NAMESPACE + "-active";
                        e.className = e.className.replace(new RegExp(t, "g"), ""), setTimeout(function() {
                            window[GLOBAL_NAMESPACE].carouseling[save]._slide("_L")
                        }, 50)
                    } else this.slide_index -= 1, this._slide("_L");
                    break;
                case "crossfade":
                    0 == this.slide_index ? this.slide_index = this.slide_length - 1 : this.slide_index -= 1, this._slide("_L")
            }
        }, this._slideRight = function() {
            switch (this.type) {
                case "slider":
                    this.slide_index += 1, this._slide("_R");
                    break;
                case "crossfade":
                    this.slide_index == this.slide_length - 1 ? this.slide_index = 0 : this.slide_index += 1, this._slide("_R")
            }
        }, this._slideJump = function(e) {
            e = parseInt(e), e > this.slide_index ? (this.slide_index = e, this._slide("_R")) : (this.slide_index = e, this._slide("_L"))
        }, this._swipeSetup = function() {
            var e = this,
                t = this.obj,
                n, i, r, o = 150,
                s = 400,
                a, l;
            t.addEventListener("touchstart", function(e) {
                var t = e.changedTouches[0];
                r = 0, n = t.pageX, i = t.pageY, l = (new Date).getTime()
            }), t.addEventListener("touchend", function(t) {
                console.log("touchend");
                var u = t.changedTouches[0];
                r = u.pageX - n, a = (new Date).getTime() - l;
                var c = s >= a && Math.abs(r) >= o && Math.abs(u.pageY - i) <= 100;
                c && e._handleSwipe(r)
            }, !1)
        }, this._handleSwipe = function(e) {
            0 >= e ? this._slideRight() : this._slideLeft()
        }, this.whichAnimationEvent = function() {
            var e, t = document.createElement("fakeelement"),
                n = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd"
                };
            for (e in n)
                if (void 0 !== t.style[e]) return n[e]
        }, this.whichTransitionEvent = function() {
            var e, t = document.createElement("fakeelement"),
                n = {
                    animation: "transitionend",
                    OAnimation: "oTransitionEnd",
                    MozAnimation: "transitionend",
                    WebkitAnimation: "webkitTransitionEnd"
                };
            for (e in n)
                if (void 0 !== t.style[e]) return n[e]
        }, this.init()
    }, window[GLOBAL_NAMESPACE].overlay = {}, window[GLOBAL_NAMESPACE].overlays = [], window[GLOBAL_NAMESPACE].overlay.init = function(e) {
        this.init = function(e) {
            console.log(e), e = document.getElementsByClassName(e), 0 == document.getElementsByClassName(GLOBAL_NAMESPACE + "-overlay-overlay").length && (elem = document.createElement("div"), elem.className = GLOBAL_NAMESPACE + "-overlay-overlay", elem.innerHTML = "<div class='" + GLOBAL_NAMESPACE + "-overlay-overlay-close'>close</div></div>", document.body.appendChild(elem));
            for (var t = "", n = !1, i = !1, r = 0; r < e.length; r++) {
                var o = e[r];
                if (0 == window[GLOBAL_NAMESPACE].overlays.filter(function(e) {
                        return e.obj == o
                    }).length) {
                    switch (e[r].getAttribute("type")) {
                        case "carousel":
                            var s = "";
                            e[r].hasAttribute("carDur") && (s = 'durationInSeconds="' + e[r].getAttribute("carDur") + '"');
                            var a = "";
                            e[r].hasAttribute("carEase") && (a = 'easing="' + e[r].getAttribute("carEase") + '"'), t += '<div class="' + GLOBAL_NAMESPACE + "-overlay-item " + GLOBAL_NAMESPACE + "-carousel " + GLOBAL_NAMESPACE + '-overlay-carousel" type="crossfade" ' + a + " " + s + ">";
                            for (var l = e[r].getElementsByTagName("img"), u = 0; u < l.length; u++)
                                if (console.log(l[u].parentElement.className), console.log(e[r].className), -1 != e[r].className.indexOf(l[u].parentElement.className)) {
                                    i = !0;
                                    var c = "";
                                    l[u].hasAttribute("caption") && (c = l[u].getAttribute("caption")), t += '<div image="' + l[u].getAttribute("src") + '">' + c + "</div>"
                                }
                            t += "</div>";
                            break;
                        default:
                            var l = e[r].getElementsByTagName("img")[0],
                                c = "";
                            if (l.hasAttribute("caption") && (c = l.getAttribute("caption")), "video" == l.getAttribute("type") || "youtube" == l.getAttribute("type")) {
                                n = !0;
                                var d = "";
                                !l.hasAttribute("controls") || "default" != l.getAttribute("controls") && "custom" != l.getAttribute("controls") || (d = 'controls="' + l.getAttribute("controls") + '"'), t += "youtube" == l.getAttribute("type") ? '<div class="' + GLOBAL_NAMESPACE + '-overlay-item"><div class="' + GLOBAL_NAMESPACE + "-video " + GLOBAL_NAMESPACE + '-overlay-video" ' + d + ' autoplay="none" type="youtube"><div class="' + GLOBAL_NAMESPACE + '-youtube" src="' + l.getAttribute("vidSrc") + '"></div></div><div class="' + GLOBAL_NAMESPACE + '-overlay-item-caption">' + c + "</div></div>" : '<div class="' + GLOBAL_NAMESPACE + '-overlay-item"><div class="' + GLOBAL_NAMESPACE + "-video " + GLOBAL_NAMESPACE + '-overlay-video" ' + d + ' autoplay="none" ><video ><source src="' + l.getAttribute("vidSrc") + '" type="' + l.getAttribute("mime") + '"></video></div><div class="' + GLOBAL_NAMESPACE + '-overlay-item-caption">' + c + "</div></div>"
                            } else t += '<div class="' + GLOBAL_NAMESPACE + '-overlay-item"><div class="' + GLOBAL_NAMESPACE + '-overlay-item-image" style="background-image:url(' + l.getAttribute("src") + ')"></div><div class="' + GLOBAL_NAMESPACE + '-overlay-item-caption">' + l.getAttribute("caption") + "</div></div>"
                    }
                    var p = new window[GLOBAL_NAMESPACE].overlay.functions(e[r]);
                    window[GLOBAL_NAMESPACE].overlays.push(p)
                }
            }
            document.getElementsByClassName(GLOBAL_NAMESPACE + "-overlay-overlay")[0].innerHTML += t, n && window[GLOBAL_NAMESPACE].video && window[GLOBAL_NAMESPACE].video.init(GLOBAL_NAMESPACE + "-overlay-video"), i && window[GLOBAL_NAMESPACE].carousel && window[GLOBAL_NAMESPACE].carousel.init(GLOBAL_NAMESPACE + "-overlay-carousel")
        }, this.init(e)
    }, window[GLOBAL_NAMESPACE].overlay.functions = function(e) {
        this.obj = e, this.init = function() {
            var e = this,
                t = this.whichTransitionEvent();
            e.obj.addEventListener("click", function() {
                document.body.style.setProperty("overflow", "hidden", "important");
                var n = window[GLOBAL_NAMESPACE].overlays.indexOf(window[GLOBAL_NAMESPACE].overlays.filter(function(t) {
                        return t.obj == e.obj
                    })[0]),
                    i = document.querySelector("." + GLOBAL_NAMESPACE + "-overlay-overlay");
                i.className += " " + GLOBAL_NAMESPACE + "-overlay-overlay-show";
                var r = i.getElementsByClassName(GLOBAL_NAMESPACE + "-overlay-item")[n],
                    o = e.obj.querySelector("img");
                if (r.className += " " + GLOBAL_NAMESPACE + "-overlay-overlay-item-show", ("video" == o.getAttribute("type") || "youtube" == o.getAttribute("type")) && "true" == o.getAttribute("autoplay")) switch (o.getAttribute("type")) {
                    case "youtube":
                        var s = window[GLOBAL_NAMESPACE].videos.filter(function(e) {
                            return e.obj == r.querySelector("." + GLOBAL_NAMESPACE + "-video")
                        })[0];
                        console.log(s), s.obj.player.seekTo(0), s.obj.player.playVideo();
                        break;
                    default:
                        var a = r.getElementsByTagName("video")[0];
                        a.currentTime = 0, a.play()
                }
                var i = document.querySelector("." + GLOBAL_NAMESPACE + "-overlay-overlay"),
                    l = i.querySelector("." + GLOBAL_NAMESPACE + "-overlay-overlay-close"),
                    u = function() {
                        if (l.removeEventListener("click", u), "video" == o.getAttribute("type") || "youtube" == o.getAttribute("type")) switch (o.getAttribute("type")) {
                            case "youtube":
                                var e = window[GLOBAL_NAMESPACE].videos.filter(function(e) {
                                    return e.obj == r.querySelector("." + GLOBAL_NAMESPACE + "-video")
                                })[0];
                                e.obj.player.pauseVideo();
                                break;
                            default:
                                var n = r.getElementsByTagName("video")[0];
                                n.pause()
                        }
                        t ? (i.addEventListener(t, c), i.className += " " + GLOBAL_NAMESPACE + "-overlay-overlay-fade", document.body.style.setProperty("overflow", "inherit")) : (c(), i.className += " " + GLOBAL_NAMESPACE + "-overlay-overlay-fade", document.body.style.setAttribute("overflow", "inherit"))
                    },
                    c = function() {
                        t && i.removeEventListener(t, c);
                        var e = "(^| )" + GLOBAL_NAMESPACE + "-overlay-overlay-show";
                        i.className = i.className.replace(new RegExp(e, "g"), "");
                        var e = "(^| )" + GLOBAL_NAMESPACE + "-overlay-overlay-fade";
                        i.className = i.className.replace(new RegExp(e, "g"), "");
                        var n = i.querySelector("." + GLOBAL_NAMESPACE + "-overlay-overlay-item-show"),
                            e = "(^| )" + GLOBAL_NAMESPACE + "-overlay-overlay-item-show";
                        n.className = n.className.replace(new RegExp(e, "g"), "")
                    };
                l.addEventListener("click", u)
            })
        }, this.whichTransitionEvent = function() {
            var e, t = document.createElement("fakeelement"),
                n = {
                    animation: "transitionend",
                    OAnimation: "oTransitionEnd",
                    MozAnimation: "transitionend",
                    WebkitAnimation: "webkitTransitionEnd"
                };
            for (e in n)
                if (void 0 !== t.style[e]) return n[e]
        }, this.init()
    }, window[GLOBAL_NAMESPACE].video = {}, window[GLOBAL_NAMESPACE].videos = [], window[GLOBAL_NAMESPACE].video.init = function(e) {
        this.init = function(e) {
            e = document.getElementsByClassName(e);
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (console.log(n), 0 == window[GLOBAL_NAMESPACE].videos.filter(function(e) {
                        return e.obj == n
                    }).length) {
                    var i = "",
                        r = "",
                        o = e[t].getAttribute("type");
                    switch (o) {
                        case "youtube":
                            var s = 0;
                            switch (e[t].getAttribute("controls")) {
                                case "default":
                                    s = 1;
                                    break;
                                case "custom":
                                    s = 0;
                                    var a = "Mute",
                                        l = "Play";
                                    "autoplay" == e[t].getAttribute("autoplay") && (l = "Pause"), e[t].hasAttribute("muted") && (a = "Unmute"), e[t].innerHTML += "<div class='" + GLOBAL_NAMESPACE + "-controls'><button class='" + GLOBAL_NAMESPACE + "-play'>" + l + "</button><input class='" + GLOBAL_NAMESPACE + "-scan' type='range' value='0'><button class='" + GLOBAL_NAMESPACE + "-mute'>" + a + "</button><input type='range' class='" + GLOBAL_NAMESPACE + "-volume' min='0' max='1' step='0.1' value='1'><button class='" + GLOBAL_NAMESPACE + "-full-screen'>Full-Screen</button></div>"
                            }
                            var u = 0;
                            "loop" == e[t].getAttribute("loop") && (u = 1, e[t].className += " " + GLOBAL_NAMESPACE + "-playing");
                            var c = 0;
                            "autoplay" == e[t].getAttribute("autoplay") ? (c = 1, e[t].className += " " + GLOBAL_NAMESPACE + "-playing") : (c = 0,
                                e[t].className += " " + GLOBAL_NAMESPACE + "-paused");
                            var d = e[t].querySelector("." + GLOBAL_NAMESPACE + "-youtube").getAttribute("src");
                            e[t].player = new YT.Player(e[t].querySelector("." + GLOBAL_NAMESPACE + "-youtube"), {
                                videoId: d,
                                playerVars: {
                                    autoplay: c,
                                    controls: s,
                                    loop: u
                                },
                                events: {
                                    onReady: function(e) {
                                        e.target.c.parentNode.hasAttribute("muted") && e.target.mute()
                                    }
                                }
                            }), e[t].hasAttribute("muted") ? e[t].className += " " + GLOBAL_NAMESPACE + "-muted" : e[t].className += " " + GLOBAL_NAMESPACE + "-unmute";
                            break;
                        default:
                            switch (e[t].getAttribute("controls")) {
                                case "default":
                                    var p = e[t].getElementsByTagName("video");
                                    p[0].setAttribute("controls", "true");
                                    break;
                                case "custom":
                                    var a = "Mute",
                                        l = "Play";
                                    "autoplay" == e[t].getAttribute("autoplay") && (l = "Pause"), e[t].hasAttribute("muted") && (a = "Unmute"), e[t].innerHTML += "<div class='" + GLOBAL_NAMESPACE + "-controls'><button class='" + GLOBAL_NAMESPACE + "-play'>" + l + "</button><input class='" + GLOBAL_NAMESPACE + "-scan' type='range' value='0'><button class='" + GLOBAL_NAMESPACE + "-mute'>" + a + "</button><input type='range' class='" + GLOBAL_NAMESPACE + "-volume' min='0' max='1' step='0.1' value='1'><button class='" + GLOBAL_NAMESPACE + "-full-screen'>Full-Screen</button></div>";
                                    break;
                                default:
                                    var p = e[t].getElementsByTagName("video")
                            }
                            if ("loop" == e[t].getAttribute("loop")) {
                                var p = e[t].getElementsByTagName("video");
                                p[0].setAttribute("loop", "true")
                            }
                            if ("autoplay" == e[t].getAttribute("autoplay")) {
                                var p = e[t].getElementsByTagName("video");
                                p[0].setAttribute("autoplay", "true"), e[t].className += " " + GLOBAL_NAMESPACE + "-playing"
                            } else {
                                var p = e[t].getElementsByTagName("video");
                                e[t].className += " " + GLOBAL_NAMESPACE + "-paused"
                            }
                            if (e[t].hasAttribute("muted")) {
                                var p = e[t].getElementsByTagName("video");
                                p[0].muted = !0, e[t].className += " " + GLOBAL_NAMESPACE + "-muted"
                            } else e[t].className += " " + GLOBAL_NAMESPACE + "-unmute"
                    }
                    var f = new window[GLOBAL_NAMESPACE].video.functions(e[t]);
                    window[GLOBAL_NAMESPACE].videos.push(f), console.log(f), console.log(window[GLOBAL_NAMESPACE].videos)
                }
            }
        }, this.init(e)
    }, window[GLOBAL_NAMESPACE].video.functions = function(e) {
        this.obj = e, this.type = this.obj.getAttribute("type"), this.waypoint = [], this.YTTimeUpdater, this.init = function() {
            this.obj.hasAttribute("autoplay") && "scroll" == this.obj.getAttribute("autoplay") && this._setupWaypoints(), this.obj.hasAttribute("controls") && "custom" == this.obj.getAttribute("controls") && this._setupHandlers()
        }, this._setupWaypoints = function() {
            self = this;
            var e = new Waypoint({
                element: this.obj,
                handler: function(e) {
                    if (-1 == this.element.className.indexOf(GLOBAL_NAMESPACE + "-paused") && "up" == e) {
                        this.element.className += " " + GLOBAL_NAMESPACE + "-paused";
                        var t = "(^| )" + GLOBAL_NAMESPACE + "-playing";
                        switch (this.element.className = this.element.className.replace(new RegExp(t, "g"), ""), this.element.hasAttribute("controls") && "custom" == this.element.getAttribute("controls") && (this.element.querySelector("." + GLOBAL_NAMESPACE + "-controls").querySelector("." + GLOBAL_NAMESPACE + "-play").innerHTML = "Play"), this.element.getAttribute("type")) {
                            case "youtube":
                                self.obj.player.pauseVideo ? self.obj.player.pauseVideo() : self.obj.player.addEventListener("onReady", function() {
                                    self.obj.player.pauseVideo()
                                });
                                break;
                            default:
                                var n = this.element.getElementsByTagName("video")[0];
                                n.pause()
                        }
                    } else if (-1 != this.element.className.indexOf(GLOBAL_NAMESPACE + "-paused") && "down" == e) {
                        this.element.className += " " + GLOBAL_NAMESPACE + "-playing";
                        var t = "(^| )" + GLOBAL_NAMESPACE + "-paused";
                        switch (this.element.className = this.element.className.replace(new RegExp(t, "g"), ""), this.element.hasAttribute("controls") && "custom" == this.element.getAttribute("controls") && (this.element.querySelector("." + GLOBAL_NAMESPACE + "-controls").querySelector("." + GLOBAL_NAMESPACE + "-play").innerHTML = "Pause"), this.element.getAttribute("type")) {
                            case "youtube":
                                self.obj.player.playVideo ? self.obj.player.playVideo() : self.obj.player.addEventListener("onReady", function() {
                                    self.obj.player.playVideo()
                                });
                                break;
                            default:
                                var n = this.element.getElementsByTagName("video")[0];
                                n.play()
                        }
                    }
                },
                offset: "70%"
            });
            this.waypoint.push(e);
            var t = new Waypoint({
                element: this.obj,
                handler: function(e) {
                    if (-1 == this.element.className.indexOf(GLOBAL_NAMESPACE + "-paused") && "down" == e) {
                        this.element.className += " " + GLOBAL_NAMESPACE + "-paused";
                        var t = "(^| )" + GLOBAL_NAMESPACE + "-playing";
                        switch (this.element.className = this.element.className.replace(new RegExp(t, "g"), ""), this.element.hasAttribute("controls") && "custom" == this.element.getAttribute("controls") && (this.element.querySelector("." + GLOBAL_NAMESPACE + "-controls").querySelector("." + GLOBAL_NAMESPACE + "-play").innerHTML = "Play"), this.element.getAttribute("type")) {
                            case "youtube":
                                self.obj.player.pauseVideo ? self.obj.player.pauseVideo() : self.obj.player.addEventListener("onReady", function() {
                                    self.obj.player.pauseVideo()
                                });
                                break;
                            default:
                                var n = this.element.getElementsByTagName("video")[0];
                                n.pause()
                        }
                    } else if (-1 != this.element.className.indexOf(GLOBAL_NAMESPACE + "-paused") && "up" == e) {
                        this.element.className += " " + GLOBAL_NAMESPACE + "-playing";
                        var t = "(^| )" + GLOBAL_NAMESPACE + "-paused";
                        switch (this.element.className = this.element.className.replace(new RegExp(t, "g"), ""), this.element.hasAttribute("controls") && "custom" == this.element.getAttribute("controls") && (this.element.querySelector("." + GLOBAL_NAMESPACE + "-controls").querySelector("." + GLOBAL_NAMESPACE + "-play").innerHTML = "Pause"), this.element.getAttribute("type")) {
                            case "youtube":
                                self.obj.player.playVideo ? self.obj.player.playVideo() : self.obj.player.addEventListener("onReady", function() {
                                    self.obj.player.playVideo()
                                });
                                break;
                            default:
                                var n = this.element.getElementsByTagName("video")[0];
                                n.play()
                        }
                    }
                },
                offset: function() {
                    return -(.7 * this.element.clientHeight)
                }
            });
            this.waypoint.push(t)
        }, this._setupHandlers = function() {
            var e = this,
                t = this.obj,
                n = t.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                i = n.querySelector("." + GLOBAL_NAMESPACE + "-play"),
                r = n.querySelector("." + GLOBAL_NAMESPACE + "-mute"),
                o = n.querySelector("." + GLOBAL_NAMESPACE + "-full-screen"),
                s = n.querySelector("." + GLOBAL_NAMESPACE + "-scan"),
                a = n.querySelector("." + GLOBAL_NAMESPACE + "-volume");
            i.addEventListener("click", function() {
                e._playButton()
            }), r.addEventListener("click", function() {
                e._muteButton()
            }), o.addEventListener("click", function() {
                e._fullScreenClick()
            }), s.addEventListener("change", function() {
                e.seekBarChange()
            }), this._setupSeekbars(), a.addEventListener("change", function() {
                e._volumeBarChange()
            })
        }, this._playButton = function() {
            var e = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                t = e.querySelector("." + GLOBAL_NAMESPACE + "-play");
            if (-1 != this.obj.className.indexOf(GLOBAL_NAMESPACE + "-paused")) {
                this.obj.className += " " + GLOBAL_NAMESPACE + "-playing";
                var n = "(^| )" + GLOBAL_NAMESPACE + "-paused";
                switch (this.obj.className = this.obj.className.replace(new RegExp(n, "g"), ""), this.type) {
                    case "youtube":
                        this.obj.player.playVideo();
                        break;
                    default:
                        var i = this.obj.getElementsByTagName("video")[0];
                        i.play()
                }
                t.innerHTML = "Pause"
            } else {
                this.obj.className += " " + GLOBAL_NAMESPACE + "-paused";
                var n = "(^| )" + GLOBAL_NAMESPACE + "-playing";
                switch (this.obj.className = this.obj.className.replace(new RegExp(n, "g"), ""), this.type) {
                    case "youtube":
                        console.log(this.obj.player), this.obj.player.pauseVideo();
                        break;
                    default:
                        var i = this.obj.getElementsByTagName("video")[0];
                        i.pause()
                }
                t.innerHTML = "Play"
            }
        }, this._muteButton = function() {
            var e = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                t = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-mute"),
                n = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-volume");
            if (-1 != this.obj.className.indexOf(GLOBAL_NAMESPACE + "-unmute")) {
                switch (this.type) {
                    case "youtube":
                        this.obj.player.mute();
                        break;
                    default:
                        var i = this.obj.getElementsByTagName("video")[0];
                        i.muted = !0
                }
                this.obj.className += " " + GLOBAL_NAMESPACE + "-muted";
                var r = "(^| )" + GLOBAL_NAMESPACE + "-unmute";
                this.obj.className = this.obj.className.replace(new RegExp(r, "g"), ""), t.innerHTML = "Unmute", n.value = 0
            } else {
                switch (this.type) {
                    case "youtube":
                        this.obj.player.unMute();
                        break;
                    default:
                        var i = this.obj.getElementsByTagName("video")[0];
                        i.muted = !1
                }
                this.obj.className += " " + GLOBAL_NAMESPACE + "-unmute";
                var r = "(^| )" + GLOBAL_NAMESPACE + "-muted";
                switch (this.obj.className = this.obj.className.replace(new RegExp(r, "g"), ""), t.innerHTML = "Mute", this.obj.getAttribute("type")) {
                    case "youtube":
                        n.value = this.obj.player.getVolume() / 100;
                        break;
                    default:
                        var i = this.obj.getElementsByTagName("video")[0];
                        n.value = i.volume
                }
            }
        }, this._fullScreenClick = function() {
            switch (this.type) {
                case "youtube":
                    this.obj.requestFullscreen ? this.obj.requestFullscreen() : this.obj.mozRequestFullScreen ? this.obj.mozRequestFullScreen() : this.obj.webkitRequestFullscreen && this.obj.webkitRequestFullscreen();
                    break;
                default:
                    var e = this.obj.getElementsByTagName("video")[0];
                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
            }
        }, this.seekBarChange = function() {
            var e = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                t = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-scan");
            switch (this.type) {
                case "youtube":
                    var n = this.obj.player.getDuration() * (t.value / 100);
                    this.obj.player.seekTo(n);
                    break;
                default:
                    var i = this.obj.getElementsByTagName("video")[0],
                        n = i.duration * (t.value / 100);
                    i.currentTime = n
            }
        }, this._volumeBarChange = function() {
            var e = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                t = e.querySelector("." + GLOBAL_NAMESPACE + "-volume");
            switch (this.type) {
                case "youtube":
                    this.obj.player.setVolume(100 * t.value);
                    break;
                default:
                    var n = this.obj.getElementsByTagName("video")[0];
                    n.volume = t.value
            }
        }, this._setupSeekbars = function() {
            var e = this,
                t = this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls"),
                n = t.querySelector("." + GLOBAL_NAMESPACE + "-scan");
            switch (this.type) {
                case "youtube":
                    this.obj.player.addEventListener("onStateChange", function() {
                        if (void 0 == e.YTTimeUpdater) {
                            var t = window[GLOBAL_NAMESPACE].videos.indexOf(e);
                            e.YTTimeUpdater = setInterval(function() {
                                window[GLOBAL_NAMESPACE].videos[t].updateTime()
                            }, 100)
                        }
                    });
                    break;
                default:
                    video.addEventListener("timeupdate", function() {
                        var t = e.obj.getElementsByTagName("video")[0],
                            i = 100 / t.duration * t.currentTime;
                        n.value = i
                    })
            }
            n.addEventListener("mousedown", function() {
                switch (e.type) {
                    case "youtube":
                        clearInterval(e.YTTimeUpdater);
                        break;
                    default:
                        if (0 != e.obj.className.indexOf(GLOBAL_NAMESPACE + "-playing")) {
                            var t = e.obj.getElementsByTagName("video")[0];
                            t.pause()
                        }
                }
            }), n.addEventListener("mouseup", function() {
                switch (e.type) {
                    case "youtube":
                        var t = window[GLOBAL_NAMESPACE].videos.indexOf(e);
                        e.YTTimeUpdater = setInterval(function() {
                            window[GLOBAL_NAMESPACE].videos[t].updateTime()
                        }, 100);
                        break;
                    default:
                        if (0 != e.obj.className.indexOf(GLOBAL_NAMESPACE + "-playing")) {
                            var n = e.obj.getElementsByTagName("video")[0];
                            n.play()
                        }
                }
            })
        }, this.updateTime = function() {
            var e = 100 / this.obj.player.getDuration() * this.obj.player.getCurrentTime();
            this.obj.querySelector("." + GLOBAL_NAMESPACE + "-controls").querySelector("." + GLOBAL_NAMESPACE + "-scan").value = e
        }, this.init(e)
    }, "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) ? ! function() {
        "use strict";
        var e = document.createElement("_");
        if (e.classList.add("c1", "c2"), !e.classList.contains("c2")) {
            var t = function(e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function(e) {
                    var n, i = arguments.length;
                    for (n = 0; i > n; n++) e = arguments[n], t.call(this, e)
                }
            };
            t("add"), t("remove")
        }
        if (e.classList.toggle("c3", !1), e.classList.contains("c3")) {
            var n = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : n.call(this, e)
            }
        }
        e = null
    }() : ! function(e) {
        "use strict";
        if ("Element" in e) {
            var t = "classList",
                n = "prototype",
                i = e.Element[n],
                r = Object,
                o = String[n].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "")
                },
                s = Array[n].indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (t in this && this[t] === e) return t;
                    return -1
                },
                a = function(e, t) {
                    this.name = e, this.code = DOMException[e], this.message = t
                },
                l = function(e, t) {
                    if ("" === t) throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
                    if (/\s/.test(t)) throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
                    return s.call(e, t)
                },
                u = function(e) {
                    for (var t = o.call(e.getAttribute("class") || ""), n = t ? t.split(/\s+/) : [], i = 0, r = n.length; r > i; i++) this.push(n[i]);
                    this._updateClassName = function() {
                        e.setAttribute("class", this.toString())
                    }
                },
                c = u[n] = [],
                d = function() {
                    return new u(this)
                };
            if (a[n] = Error[n], c.item = function(e) {
                    return this[e] || null
                }, c.contains = function(e) {
                    return e += "", -1 !== l(this, e)
                }, c.add = function() {
                    var e = arguments,
                        t = 0,
                        n = e.length,
                        i, r = !1;
                    do i = e[t] + "", -1 === l(this, i) && (this.push(i), r = !0); while (++t < n);
                    r && this._updateClassName()
                }, c.remove = function() {
                    var e = arguments,
                        t = 0,
                        n = e.length,
                        i, r = !1,
                        o;
                    do
                        for (i = e[t] + "", o = l(this, i); - 1 !== o;) this.splice(o, 1), r = !0, o = l(this, i); while (++t < n);
                    r && this._updateClassName()
                }, c.toggle = function(e, t) {
                    e += "";
                    var n = this.contains(e),
                        i = n ? t !== !0 && "remove" : t !== !1 && "add";
                    return i && this[i](e), t === !0 || t === !1 ? t : !n
                }, c.toString = function() {
                    return this.join(" ")
                }, r.defineProperty) {
                var p = {
                    get: d,
                    enumerable: !0,
                    configurable: !0
                };
                try {
                    r.defineProperty(i, t, p)
                } catch (f) {
                    -2146823252 === f.number && (p.enumerable = !1, r.defineProperty(i, t, p))
                }
            } else r[n].__defineGetter__ && i.__defineGetter__(t, d)
        }
    }(self)),
    function() {
        var e;
        e = function() {
                function e(e, t) {
                    var n, i;
                    if (this.options = {
                            target: "instafeed",
                            get: "popular",
                            resolution: "thumbnail",
                            sortBy: "none",
                            links: !0,
                            mock: !1,
                            useHttp: !1
                        }, "object" == typeof e)
                        for (n in e) i = e[n], this.options[n] = i;
                    this.context = null != t ? t : this, this.unique = this._genKey()
                }
                return e.prototype.hasNext = function() {
                    return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
                }, e.prototype.next = function() {
                    return this.hasNext() ? this.run(this.context.nextUrl) : !1
                }, e.prototype.run = function(t) {
                    var n, i, r;
                    if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
                    if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
                    return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (r = document.createElement("script"), r.id = "instafeed-fetcher", r.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(r), i = "instafeedCache" + this.unique, window[i] = new e(this.options, this), window[i].unique = this.unique), !0
                }, e.prototype.parse = function(e) {
                    var t, n, i, r, o, s, a, l, u, c, d, p, f, h, m, g, y, v, A, b, E, w, L, N, x, S, C, _, T, O, k, M, B;
                    if ("object" != typeof e) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                        throw new Error("Invalid JSON response")
                    }
                    if (200 !== e.meta.code) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
                        throw new Error("Error from Instagram: " + e.meta.error_message)
                    }
                    if (0 === e.data.length) {
                        if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                        throw new Error("No images were returned from Instagram")
                    }
                    if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (k = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), O = "least" === k[0] ? !0 : !1, k[1]) {
                        case "random":
                            e.data.sort(function() {
                                return .5 - Math.random()
                            });
                            break;
                        case "recent":
                            e.data = this._sortBy(e.data, "created_time", O);
                            break;
                        case "liked":
                            e.data = this._sortBy(e.data, "likes.count", O);
                            break;
                        case "commented":
                            e.data = this._sortBy(e.data, "comments.count", O);
                            break;
                        default:
                            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                    }
                    if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                        if (g = e.data, T = parseInt(this.options.limit, 10), null != this.options.limit && g.length > T && (g = g.slice(0, T)), a = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (g = this._filter(g, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                            for (u = "", h = "", b = "", B = document.createElement("div"), d = 0, x = g.length; x > d; d++) {
                                if (p = g[d], f = p.images[this.options.resolution], "object" != typeof f) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
                                E = f.width, v = f.height, A = "square", E > v && (A = "landscape"), v > E && (A = "portrait"), m = f.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), h = this._makeTemplate(this.options.template, {
                                    model: p,
                                    id: p.id,
                                    link: p.link,
                                    type: p.type,
                                    image: m,
                                    width: E,
                                    height: v,
                                    orientation: A,
                                    caption: this._getObjectProperty(p, "caption.text"),
                                    likes: p.likes.count,
                                    comments: p.comments.count,
                                    location: this._getObjectProperty(p, "location.name")
                                }), u += h
                            }
                            for (B.innerHTML = u, r = [], i = 0, n = B.childNodes.length; n > i;) r.push(B.childNodes[i]), i += 1;
                            for (L = 0, S = r.length; S > L; L++) _ = r[L], a.appendChild(_)
                        } else
                            for (N = 0, C = g.length; C > N; N++) {
                                if (p = g[N], y = document.createElement("img"), f = p.images[this.options.resolution], "object" != typeof f) throw s = "No image found for resolution: " + this.options.resolution + ".", new Error(s);
                                m = f.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), y.src = m, this.options.links === !0 ? (t = document.createElement("a"), t.href = p.link, t.appendChild(y), a.appendChild(t)) : a.appendChild(y)
                            }
                        if (M = this.options.target, "string" == typeof M && (M = document.getElementById(M)), null == M) throw s = 'No element with id="' + this.options.target + '" on page.', new Error(s);
                        M.appendChild(a), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), w = "instafeedCache" + this.unique, window[w] = void 0;
                        try {
                            delete window[w]
                        } catch (P) {
                            o = P
                        }
                    }
                    return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
                }, e.prototype._buildUrl = function() {
                    var e, t, n;
                    switch (e = "https://api.instagram.com/v1", this.options.get) {
                        case "popular":
                            t = "media/popular";
                            break;
                        case "tagged":
                            if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                            t = "tags/" + this.options.tagName + "/media/recent";
                            break;
                        case "location":
                            if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                            t = "locations/" + this.options.locationId + "/media/recent";
                            break;
                        case "user":
                            if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                            t = "users/" + this.options.userId + "/media/recent";
                            break;
                        default:
                            throw new Error("Invalid option for get: '" + this.options.get + "'.")
                    }
                    return n = e + "/" + t, n += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse"
                }, e.prototype._genKey = function() {
                    var e;
                    return e = function() {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                    }, "" + e() + e() + e() + e()
                }, e.prototype._makeTemplate = function(e, t) {
                    var n, i, r, o, s;
                    for (i = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e; i.test(n);) o = n.match(i)[1], s = null != (r = this._getObjectProperty(t, o)) ? r : "", n = n.replace(i, function() {
                        return "" + s
                    });
                    return n
                }, e.prototype._getObjectProperty = function(e, t) {
                    var n, i;
                    for (t = t.replace(/\[(\w+)\]/g, ".$1"), i = t.split("."); i.length;) {
                        if (n = i.shift(), !(null != e && n in e)) return null;
                        e = e[n]
                    }
                    return e
                }, e.prototype._sortBy = function(e, t, n) {
                    var i;
                    return i = function(e, i) {
                        var r, o;
                        return r = this._getObjectProperty(e, t), o = this._getObjectProperty(i, t), n ? r > o ? 1 : -1 : o > r ? 1 : -1
                    }, e.sort(i.bind(this)), e
                }, e.prototype._filter = function(e, t) {
                    var n, i, r, o, s;
                    for (n = [], i = function(e) {
                            return t(e) ? n.push(e) : void 0
                        }, r = 0, s = e.length; s > r; r++) o = e[r], i(o);
                    return n
                }, e
            }(),
            function(e, t) {
                return "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
            }(this, function() {
                return e
            })
    }.call(this), window[GLOBAL_NAMESPACE].init = function() {
        (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) && (document.body.className += " " + GLOBAL_NAMESPACE + "-mobile");
        var e = 0,
            t = new Instafeed({
                get: "user",
                userId: "1677978489",
                target: "insta-list",
                sortBy: "most-recent",
                limit: 5,
                accessToken: "3162500839.6934e63.8a525e971afa4102ad3b7cd4a4e63387",
                template: '<a href="{{link}}"><div class="insta-image" style="background-image: url({{image}})"></div></a>',
                resolution: "low_resolution"
            });
        if (t.run(), document.querySelector(".page-template-interiorshomepage")) {
            var n = document.querySelector(".first-row"),
                i = new Waypoint({
                    element: n,
                    handler: function(e) {
                        var t = document.querySelector(".main-content");
                        "up" == e ? t.classList.remove("showheader") : t.classList.add("showheader")
                    },
                    offset: "99%"
                }),
                r = new Waypoint({
                    element: n,
                    handler: function(e) {
                        var t = document.querySelector(".hero-video");
                        "up" == e ? t.style.display = "block" : t.style.display = "none"
                    },
                    offset: "0%"
                });
            $("body").hasClass("ie9") && (frame = 1, setInterval(function() {
                $(".hero-video").removeClass("frame-" + frame), frame++, 5 == frame && (frame = 1), $(".hero-video").addClass("frame-" + frame)
            }, 4e3))
        }
        if (document.querySelector(".single-products")) {
            var o = document.querySelector(".sideDetails"),
                s = document.querySelector("header"),
                a = document.querySelector(".similar-block"),
                l = document.querySelector(".row"),
                u = document.querySelector(".product-container"),
                c = document.querySelector(".row .product-container .main-product"),
                d = new Waypoint({
                    element: window,
                    handler: function(e) {
                        if ("up" == e) o.classList.remove("stick"), o.style.top = "0px", o.style.right = "0px";
                        else if ("down" == e) {
                            var t = l.offsetLeft + u.offsetLeft + c.offsetLeft;
                            o.classList.add("stick"), o.style.top = s.offsetHeight + 61 + "px", o.style.right = t + "px"
                        }
                    },
                    offset: function() {
                        return window.innerWidth < 901 ? -s.offsetHeight : -(s.offsetHeight - 140)
                    }
                }),
                p = new Waypoint({
                    element: a,
                    handler: function(e) {
                        if ("up" == e) {
                            var t = l.offsetLeft + u.offsetLeft + c.offsetLeft;
                            o.classList.remove("stickBottom"), o.classList.add("stick"), o.style.top = s.offsetHeight + 61 + "px", o.style.right = t + "px"
                        } else "down" == e && (o.classList.add("stickBottom"), o.classList.remove("stick"), o.style.top = "auto", o.style.right = "0px")
                    },
                    offset: function() {
                        return window.innerWidth < 901 ? o.offsetHeight + 70 : s.offsetHeight + o.offsetHeight + 140
                    }
                });
            window.addEventListener("resize", function() {
                if (o.classList.contains("stick")) {
                    var e = l.offsetLeft + u.offsetLeft + c.offsetLeft;
                    o.style.top = s.offsetHeight + 61 + "px", o.style.right = e + "px"
                }
            })
        }
        // OLD Products Select Menu
        /*if (document.querySelector(".page-template-collectionsproduct")) {
            var f = document.querySelector(".category-list.alph"),
                h = document.querySelector(".loading"),
                m = document.querySelector(".custom-block"),
                g = !0,
                y, v = window.location.hash;
            v.length > 0 && (f.className = "category-list alph " + v.substr(1), setTimeout(function() {
                f.classList.add("hide")
            }, 600));
            var A = document.querySelector(".category-selector select");
            $(A).find("option[value=" + v.substr(1) + "]").attr("selected", !0), A.addEventListener("change", function() {
                f.className = "category-list alph " + A.value, window.location.hash = A.value, setTimeout(function() {
                    f.classList.add("hide")
                }, 600), y.destroy(), E()
            });
            var b, E = function() {
                y = new Waypoint({
                    element: m,
                    handler: function(t) {
                        g && "down" == t && (g = !1, clearTimeout(b), h.classList.add("show"), $.ajax({
                            url: CONTENT + "/themes/vh/pages/partials/productsalph.php?o=" + e
                        }).done(function(t) {
                            f.insertAdjacentHTML("beforeend", t), "" == t ? (y.destroy(), h.classList.remove("show"), h.classList.add("hide")) : (g = !0, y.destroy(), E(), b = setTimeout(function() {
                                h.classList.remove("show")
                            }, 500)), e++
                        }))
                    },
                    offset: "100%"
                })
            };
            E()
        }*/
        // OLD Products Select Menu  END

        // New Products Filter Menu
        if (document.querySelector(".page-template-collectionsproduct")) {


            var f = document.querySelector(".category-list.alph"),
                h = document.querySelector(".loading"),
                m = document.querySelector(".custom-block"),
                g = !0,
                y, v = window.location.hash;
            v.length > 0 && (f.className = "category-list alph " + v.substr(1), setTimeout(function() {
                f.classList.add("hide")
            }, 600));

            if (window.location.hash == "#furniture") {
                $( "nav.category-selector div" ).removeClass( "active" );
                $( "nav.category-selector div.furniture" ).addClass( "active" );
                
            }
            if (window.location.hash == "#rugs") {
                $( "nav.category-selector div" ).removeClass( "active" );
                $( "nav.category-selector div.rugs" ).addClass( "active" );
                
            }
            if (window.location.hash == "#textiles") {
                $( "nav.category-selector div" ).removeClass( "active" );
                $( "nav.category-selector div.textiles" ).addClass( "active" );
                
            }
            if (window.location.hash == "") {
                $( "nav.category-selector div" ).removeClass( "active" );
                $( "nav.category-selector div.furniture" ).addClass( "active" );
            }

            var A = document.querySelector("nav.category-selector");
            var B = document.querySelector("nav.category-selector div");
            var C = $( "nav.category-selector" ).children();

            $("nav.category-selector div").click(function() {
                $( "nav.category-selector div" ).removeClass( "active" );
                $(this).addClass( "active" );


                var pvalue = jQuery(this).attr("value");
                console.log(pvalue);



                f.className = "category-list alph " + pvalue, window.location.hash = pvalue, setTimeout(function() {
                    f.classList.add("hide")
                }, 600), y.destroy(), E()


            });

            
            // $(A).find("a[value=" + v.substr(1) + "]").attr("selected", !0), A.addEventListener("click", function() {
            $(A).find("div[value=" + v.substr(1) + "]").attr("selected", !0), A.addEventListener("click", function() {

                /*f.className = "category-list alph " + A.value, window.location.hash = A.value, setTimeout(function() {
                    f.classList.add("hide")
                }, 600), y.destroy(), E()*/
            });
            var b, E = function() {
                y = new Waypoint({
                    element: m,
                    handler: function(t) {
                        g && "down" == t && (g = !1, clearTimeout(b), h.classList.add("show"), $.ajax({
                            url: CONTENT + "/themes/vh/pages/partials/productsalph.php?o=" + e
                        }).done(function(t) {
                            f.insertAdjacentHTML("beforeend", t), "" == t ? (y.destroy(), h.classList.remove("show"), h.classList.add("hide")) : (g = !0, y.destroy(), E(), b = setTimeout(function() {
                                h.classList.remove("show")
                            }, 500)), e++
                        }))
                    },
                    offset: "100%"
                })
            };
            E()
        }


        // New Products Filter Menu END
        if (document.querySelector(".page-template-collectionsvhlife")) {
            var w = document.querySelector(".vhpost-list"),
                g = !0,
                y = new Waypoint({
                    element: w,
                    handler: function(t) {
                        g && "down" == t && (g = !1, e++, $.ajax({
                            url: CONTENT + "/themes/vh/pages/partials/vhlife.php?o=" + e
                        }).done(function(e) {
                            document.querySelector(".vhpost-list").insertAdjacentHTML("beforeend", e);
                            var t = document.querySelectorAll(".vhpost-list-item"),
                                n = document.querySelector(".category-selector select");
                            if ("all" == n.value)
                                for (var i = 0; i < t.length; i++) t[i].style.display = "inline-block";
                            else
                                for (var i = 0; i < t.length; i++) t[i].classList.contains(n.value) ? t[i].style.display = "inline-block" : t[i].style.display = "none";
                            "" == e ? y.destroy() : (Waypoint.refreshAll(), g = !0)
                        }))
                    },
                    offset: "bottom-in-view"
                }),
                A = document.querySelector(".category-selector select");
            A.addEventListener("change", function() {
                w.className = "vhpost-list " + A.value;
                var e = document.querySelectorAll(".vhpost-list-item");
                if ("all" == A.value)
                    for (var t = 0; t < e.length; t++) e[t].style.display = "inline-block";
                else
                    for (var t = 0; t < e.length; t++) e[t].classList.contains(A.value) ? e[t].style.display = "inline-block" : e[t].style.display = "none"
            })
        }
        if (document.querySelector(".page-template-interiorsportfolio")) {
            whichTransitionEvent = function() {
                var e, t = document.createElement("fakeelement"),
                    n = {
                        animation: "transitionend",
                        OAnimation: "oTransitionEnd",
                        MozAnimation: "transitionend",
                        WebkitAnimation: "webkitTransitionEnd"
                    };
                for (e in n)
                    if (void 0 !== t.style[e]) return n[e]
            };
            var L = whichTransitionEvent(),
                w = document.querySelector(".portfolio-list"),
                g = !0,
                y = new Waypoint({
                    element: w,
                    handler: function(t) {
                        g && "down" == t && (g = !1, e++, sendURL = CONTENT + "/themes/vh/pages/partials/portfolio.php?o=" + e, document.querySelector(".nothing") && (sendURL += "&i=" + document.querySelector(".nothing").getAttribute("post-id")), $.ajax({
                            url: sendURL
                        }).done(function(e) {
                            document.querySelector(".portfolio-list").insertAdjacentHTML("beforeend", e), "--==CUT==--" == e ? y.destroy() : (Waypoint.refreshAll(), g = !0, window[GLOBAL_NAMESPACE].carousel.init("vh-carousel"))
                        }))
                    },
                    offset: "bottom-in-view"
                })
        }
        if (document.querySelector(".page-template-collectionsgallery"))
            for (var N = document.querySelectorAll(".gallery-switch-block .cta h4"), x = 0; x < N.length; x++) N[x].addEventListener("click", function() {
                document.querySelector(".template-content").classList.toggle("rug"), document.querySelector(".template-content").classList.toggle("furn")
            });
        if (document.querySelector(".page-template-collectionsshowroom")) {
            var S = document.querySelector(".location-block .location-search input"),
                C = document.querySelector(".location-block .location-search button");
            S.addEventListener("focus", function() {
                S.value = ""
            }), S.addEventListener("blur", function() {
                "" == S.value && (S.value = S.getAttribute("value"))
            }), C.addEventListener("click", function() {
                5 == S.value.length && sortZips(S.value)
            }), sortZips = function(e) {
                $.ajax({
                    url: CONTENT + "/themes/vh/pages/partials/zips.php?z=" + e
                }).done(function(e) {
                    if (e = JSON.parse(e), 0 != e.length) {
                        for (var t = [], n = document.querySelectorAll(".location-item"), i = 0; i < n.length; i++) {
                            var r = calculateDistance(Number(n[i].getAttribute("lat")), Number(n[i].getAttribute("lng")), Number(e[0].latitude), Number(e[0].longitude));
                            t[i] = [r, n[i]]
                        }
                        t.sort(function(e, t) {
                            return e[0] - t[0]
                        }), map.setCenter({
                            lat: Number(t[0][1].getAttribute("lat")),
                            lng: Number(t[0][1].getAttribute("lng"))
                        }), map.setZoom(14), container = document.querySelector(".location-block");
                        for (var i = 0; i < t.length; i++) container.appendChild(t[i][1])
                    }
                })
            }, calculateDistance = function(e, t, n, i) {
                var r = Math.PI * e / 180,
                    o = Math.PI * n / 180,
                    s = Math.PI * t / 180,
                    a = Math.PI * i / 180,
                    l = t - i,
                    u = Math.PI * l / 180,
                    c = Math.sin(r) * Math.sin(o) + Math.cos(r) * Math.cos(o) * Math.cos(u);
                return c = Math.acos(c), c = 180 * c / Math.PI, c = 60 * c * 1.1515
            }
        }
        if (document.querySelector(".page-template-contact")) {
            for (var _ = document.querySelector(".contact-block"), T = _.querySelectorAll("input"), x = 0; x < T.length; x++) T[x].addEventListener("focus", function() {
                this.value = ""
            }), T[x].addEventListener("blur", function() {
                "" == this.value && (this.value = this.getAttribute("value"))
            });
            var C = _.querySelector("button"),
                O = function() {
                    var e = _.querySelector(".fn-input").value,
                        t = _.querySelector(".ln-input").value,
                        n = _.querySelector(".em-input").value,
                        i = _.querySelector(".sb-input").value,
                        r = _.querySelector(".tx-input").value,
                        o = {
                            fname: e,
                            lname: t,
                            email: n,
                            subj: i,
                            emailBody: r
                        };
                    document.querySelector(".template-content").classList.contains("int") || (o = {
                        fname: e,
                        lname: t,
                        email: n,
                        subj: i,
                        emailBody: r,
                        col: !0
                    }), $.ajax({
                        method: "POST",
                        url: CONTENT + "/themes/vh/pages/partials/email.php",
                        data: o
                    }).done(function(e) {
                        "email" == e ? alert("Your email is invalid. Please try again!") : "success" == e ? (C.removeEventListener("click", O), alert("Thank you!"), _.style.opacity = ".7") : alert("something really went wrong! " + e)
                    })
                };
            C.addEventListener("click", O)
        }
        if (document.querySelector(".email-block")) {
            var k = document.querySelector(".email-block div"),
                M = k.querySelector("input");
            M.addEventListener("focus", function() {
                M.value = ""
            }), M.addEventListener("blur", function() {
                "" == M.value && (M.value = M.getAttribute("value"))
            });
            var C = k.querySelector("button"),
                B = function() {
                    $.ajax({
                        url: CONTENT + "/themes/vh/pages/partials/email_signup.php?e=" + M.value
                    }).done(function(e) {
                        "email" == e ? alert("Your email is invalid. Please try again!") : (C.removeEventListener("click", B), k.style.opacity = ".7")
                    })
                };
            C.addEventListener("click", B)
        }
    };
var map, markers = [],
    infowindows = [];


console.log("this is the main script file");

// $ = jQuery;

// console.log($);



/*jQuery(".collections-product-nav a").click(function() {
    event.preventDefault();
    var filteredcat = jQuery(this).attr("cat");
    console.log(filteredcat);
    jQuery(".category-list").attr("filter", filteredcat);
});*/

// window.mySwipe = Swipe(document.getElementById('slider'));

/*var currentSlide = 0;

$(function(){
    $(document).keyup(function(e) {
         if(e.keyCode == 39 || e.keyCode == 40) next();
         else if(e.keyCode == 37 || e.keyCode == 38) back();
    });
    
    $('.slides').swipe({
        swipe:function(event, direction, distance, duration, fingerCount) {
            switch(direction) {
                case "left":
                    next();
                    break;
                case "right":
                    back();
                    break;    
            }
        }
    });
    
    initSlides();
});

function initSlides(){
    $('section').eq(currentSlide).addClass('active');
}

function next(){
    goto(currentSlide+1);
}

function back(){
    goto(currentSlide-1);
}

function goto(n){
    if(n > -1 && n < $('section').length) currentSlide = n;
    else return;
    $('section').removeClass('active').eq(currentSlide).addClass('active');
}*/