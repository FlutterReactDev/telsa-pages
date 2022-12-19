"use strict";
(self.webpackChunk_tesla_inventory_search_tool = self.webpackChunk_tesla_inventory_search_tool || []).push([
    [651],
    {
        97652: (e, a, t) => {
            t.r(a), t.d(a, { default: () => p });
            var n = t(4942),
                i = t(67294),
                o = t(45697),
                r = t(28216),
                l = t(70885);
            function c(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "script",
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                    r = (0, i.useState)({}),
                    c = (0, l.Z)(r, 2),
                    s = c[0],
                    u = c[1];
                return (
                    (0, i.useEffect)(
                        function () {
                            var i = "";
                            if ("style" === t) ((i = document.createElement("link")).rel = "stylesheet"), (i.type = "text/css"), (i.href = e), (i.media = "all");
                            else ((i = document.createElement("script")).src = e), (i.async = !0);
                            return (
                                (i.onload = function () {
                                    "function" == typeof o && o(), u((0, n.Z)({}, a, window[a]));
                                }),
                                document.body.appendChild(i),
                                function () {
                                    document.body.removeChild(i);
                                }
                            );
                        },
                        [e]
                    ),
                    s
                );
            }
            t(99682);
            function s(e, a) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    a &&
                        (n = n.filter(function (a) {
                            return Object.getOwnPropertyDescriptor(e, a).enumerable;
                        })),
                        t.push.apply(t, n);
                }
                return t;
            }
            function u(e) {
                for (var a = 1; a < arguments.length; a++) {
                    var t = null != arguments[a] ? arguments[a] : {};
                    a % 2
                        ? s(Object(t), !0).forEach(function (a) {
                              (0, n.Z)(e, a, t[a]);
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : s(Object(t)).forEach(function (a) {
                              Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
                          });
                }
                return e;
            }
            function d(e) {
                var a = e.isAvayaChatEnabled,
                    t = e.isAvayaChatLiteEnabled,
                    n = e.locale,
                    i = e.baseUrl,
                    o = "",
                    r = "",
                    l = null;
                if (a) {
                    var s = { locale: (n || "").toLowerCase().replace("_", "-"), chat_lite: t, options: { apiEndpointsDomain: i } };
                    (l = function () {
                        var e, a, t, n;
                        (window.avaya = u(u({}, window.avaya || {}), s)),
                            (null !== (e = window) && void 0 !== e && null !== (a = e.avaya) && void 0 !== a && a.is_initialized) ||
                                "function" != typeof (null === (t = window) || void 0 === t || null === (n = t.avaya) || void 0 === n ? void 0 : n.init_chat) ||
                                window.avaya.init_chat();
                    }),
                        (o = "".concat(i, "/cua/assets/apps/oceana/chat-ui.js")),
                        (r = "".concat(i, "/cua/assets/apps/oceana/chat-ui.css"));
                }
                return c(o, "avaya", "script", l), c(r, "avaya", "style"), null;
            }
            (d.propTypes = { isAvayaChatEnabled: o.bool, isAvayaChatLiteEnabled: o.bool, locale: o.string.isRequired, baseUrl: o.string.isRequired }), (d.defaultProps = { isAvayaChatEnabled: !1, isAvayaChatLiteEnabled: !1 });
            const p = (0, r.$j)(function (e) {
                var a = e.App;
                return { isAvayaChatEnabled: a.isAvayaChatEnabled, isAvayaChatLiteEnabled: a.isAvayaChatLiteEnabled, locale: a.locale, baseUrl: a.www_sibling };
            })(d);
        },
        99682: (e, a, t) => {
            var n = t(74783)(e.id, { locals: !1 });
            e.hot.dispose(n), e.hot.accept(void 0, n);
        },
    },
]);
