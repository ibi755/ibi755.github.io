/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , E = C.document
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0"
      , S = function(e, t) {
        return new S.fn.init(e,t)
    };
    function p(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
            return e === t && (l = !0),
            0
        }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes),
            t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && (T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[S] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e && e.namespaceURI
              , n = e && (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : p;
            return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                v.push("[\\r\\n\\f]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", F)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            j = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if (T(e),
            d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    N(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(j),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
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
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [k, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)),
            y && !y[S] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = S.split("").sort(j).join("") === S,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    S.find = d,
    S.expr = d.selectors,
    S.expr[":"] = S.expr.pseudos,
    S.uniqueSort = S.unique = d.uniqueSort,
    S.text = d.getText,
    S.isXMLDoc = d.isXML,
    S.contains = d.contains,
    S.escapeSelector = d.escape;
    var h = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && S(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , T = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , k = S.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(S(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (S.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || D,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t,
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                N.test(r[1]) && S.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }
    ).prototype = S.fn,
    D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/
      , H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length && (H[r] || S.uniqueSort(n),
            L.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e
    }
    function M(e) {
        throw e
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }),
        n) : S.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = S.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    S.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== M && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : R)),
                        o[2][3].add(l(0, e, m(n) ? n : M))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a
                }
            }
              , s = {};
            return S.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = S.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = S.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }),
        this
    }
    ,
    S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }),
    S.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                $(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(S(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , _ = /^-ms-/
      , z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase()
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1,
    G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[X(t)] = n;
            else
                for (r in t)
                    i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G
      , Q = new G
      , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }),
    S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o),
                1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                        Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }),
    S.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Y.get(e, t),
                n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                S.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
      , ne = ["Top", "Right", "Bottom", "Left"]
      , re = E.documentElement
      , ie = function(e) {
        return S.contains(e.ownerDocument, e)
    }
      , oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    }
    );
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return S.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                S.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            S.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = S.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ue[s] = u)))) : "none" !== n && (l[c] = "none",
            Y.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
    ce.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
    ce.innerHTML = "<option></option>",
    y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td,
    y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    S.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r))
                i && i.push(o);
            else if (l = ie(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;
    function we() {
        return !0
    }
    function Te() {
        return !1
    }
    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Te;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return S().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = S.guid++)),
        e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }
    function Se(e, i, o) {
        o ? (Y.set(e, i, !1),
        S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Y.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (Y.set(this, i, {
                        value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && S.find.matchesSelector(re, i),
                n.guid || (n.guid = S.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(P) || [""]).length;
                while (l--)
                    d = g = (s = be.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = S.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = S.event.special[d] || {},
                    c = S.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = S.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (u.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l),
                t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                        u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    S.Event = function(e, t) {
        if (!(this instanceof S.Event))
            return new S.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && S.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[S.expando] = !0
    }
    ,
    S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp),
    S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce),
                !1
            },
            trigger: function() {
                return Se(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Te),
            this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }
    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"),
                s)
                    for (n = 0,
                    r = s[i].length; n < r; n++)
                        S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e),
            a = S.extend({}, o),
            Q.set(t, a))
        }
    }
    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                He(t, r, i, o)
            });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                u = e,
                c !== p && (u = S.clone(u, !0, !0),
                s && S.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                S.map(a, qe),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }
    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(ve(r)),
            r.parentNode && (n && ie(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Le(o[r], a[r]);
                else
                    Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }),
    S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                S(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
      , Re = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Me = function(e, t, n) {
        var r, i, o = {};
        for (i in t)
            o[i] = e.style[i],
            e.style[i] = t[i];
        for (i in r = n.call(e),
        t)
            e.style[i] = o[i];
        return r
    }
      , Ie = new RegExp(ne.join("|"),"i");
    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function Fe(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top,
                s = 12 === t(e.marginLeft),
                l.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                l.style.position = "absolute",
                i = 12 === t(l.offsetWidth / 3),
                re.removeChild(u),
                l = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === l.style.backgroundClip,
        S.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                s
            },
            scrollboxSize: function() {
                return e(),
                i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"),
                t = E.createElement("tr"),
                n = E.createElement("div"),
                e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                t.style.cssText = "border:1px solid",
                t.style.height = "1px",
                n.style.height = "9px",
                n.style.display = "block",
                re.appendChild(e).appendChild(t).appendChild(n),
                r = C.getComputedStyle(t),
                a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                re.removeChild(e)),
                a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"]
      , $e = E.createElement("div").style
      , _e = {};
    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Be.length;
            while (n--)
                if ((e = Be[n] + t)in $e)
                    return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/
      , Xe = /^--/
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ge = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
            r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
            "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function Je(e, t, n) {
        var r = Re(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
          , o = i
          , a = We(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e,t,n,r,i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                if (u || (t = ze(s)),
                a = S.cssHooks[t] || S.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)),
            (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = We(e, t, r)),
            "normal" === i && t in Ge && (i = Ge[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                        return Je(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)),
                s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = S.css(e, u)),
                Ye(0, t, s)
            }
        }
    }),
    S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || S.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
            this
        }
    }).init.prototype = Ke.prototype,
    (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    S.fx = Ke.prototype.init,
    S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval),
        S.fx.tick())
    }
    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }),
        Ze = Date.now()
    }
    function st(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function lt(o, e, t) {
        var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || at(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = X(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = S.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return S.map(c, ut, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                lt.tweeners[n] = lt.tweeners[n] || [],
                lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    S.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                rt.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Y.get(e, "display")),
                "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                l = e.style.display || l,
                c = S.css(e, "display"),
                le([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && le([e], !0),
                    p.done(function() {
                        for (r in g || le([e]),
                        Y.remove(e, "fxshow"),
                        d)
                            S.style(e, r, d[r])
                    })),
                    u = ut(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }),
    S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && S.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t)
              , o = S.speed(e, n, r)
              , a = function() {
                var e = lt(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = S.timers
                  , r = Y.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }),
    S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    S.timers = [],
    S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(),
        Ze = void 0
    }
    ,
    S.fx.timer = function(e) {
        S.timers.push(e),
        S.fx.start()
    }
    ,
    S.fx.interval = 13,
    S.fx.start = function() {
        et || (et = !0,
        ot())
    }
    ,
    S.fx.stop = function() {
        et = null
    }
    ,
    S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    tt = E.createElement("input"),
    nt = E.createElement("select").appendChild(E.createElement("option")),
    tt.type = "checkbox",
    y.checkOn = "" !== tt.value,
    y.optSelected = nt.selected,
    (tt = E.createElement("input")).value = "t",
    tt.type = "radio",
    y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }),
    S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
                void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o],
            ft[o] = r,
            r = null != a(e, t, n) ? o : null,
            ft[o] = i),
            r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i
      , dt = /^(?:a|area)$/i;
    function ht(e) {
        return (e.match(P) || []).join(" ")
    }
    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }),
    S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                i = S.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }),
    S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).addClass(t.call(this, e, gt(this)))
                });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    S(this).removeClass(t.call(this, e, gt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n),
                    r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = S(this),
                    r = vt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }),
    S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        },
        y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/
      , xt = function(e) {
        e.stopPropagation()
    };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : S.makeArray(t, [e]),
            c = S.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                S.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, xt),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, xt),
                S.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }),
    S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return S.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r);
                t || e.addEventListener(n, i, !0),
                Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Y.remove(e, r))
            }
        }
    });
    var bt = C.location
      , wt = {
        guid: Date.now()
    }
      , Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ;
    var Ct = /\[\]$/
      , Et = /\r?\n/g
      , St = /^(?:submit|button|image|reset|file)$/i
      , kt = /^(?:input|select|textarea|keygen)/i;
    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            S.each(e, function(e, t) {
                r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
            S.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                At(n, e[n], t, i);
        return r.join("&")
    }
    ,
    S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g
      , jt = /#.*$/
      , Dt = /([?&])_=[^&]*/
      , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Lt = /^(?:GET|HEAD)$/
      , Ht = /^\/\//
      , Ot = {}
      , Pt = {}
      , Rt = "*/".concat("*")
      , Mt = E.createElement("a");
    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function Wt(t, i, o, a) {
        var s = {}
          , u = t === Pt;
        function l(e) {
            var r;
            return s[e] = !0,
            S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r),
        e
    }
    Mt.href = bt.href,
    S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = qt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
            Wt(Ot, v, t, T),
            h)
                return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Lt.test(v.type),
            f = v.url.replace(jt, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Dt, "$1"),
            o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o),
            v.url = f + o),
            v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }),
    S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }),
    S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }
    ,
    S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = S(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }
    ,
    S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Bt = {
        0: 200,
        1223: 204
    }
      , $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials"in $t,
    y.ajax = $t = !!$t,
    S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e),
                e
            }
        }
    }),
    S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = S("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0,
            e
        }
    }),
    S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || S.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? S(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                zt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === _t.childNodes.length),
    S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
        o && o.length && S(o).remove(),
        S.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = S.css(e, "top"),
            u = S.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, S.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    S.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                    i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position"))
                    e = e.offsetParent;
                return e || re
            })
        }
    }),
    S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t)
                return t = We(e, n),
                Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }),
    S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || S.guid++,
            i
    }
    ,
    S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }
    ,
    S.isArray = Array.isArray,
    S.parseJSON = JSON.parse,
    S.nodeName = A,
    S.isFunction = m,
    S.isWindow = x,
    S.camelCase = X,
    S.type = w,
    S.now = Date.now,
    S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery
      , Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt),
        e && C.jQuery === S && (C.jQuery = Vt),
        S
    }
    ,
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
});
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {
            'use strict';

            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }

            return to;
        },
        writable: true,
        configurable: true
    });
}
;!function(n, r) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : (n = "undefined" != typeof globalThis ? globalThis : n || self,
    function() {
        var t = n._
          , e = n._ = r();
        e.noConflict = function() {
            return n._ = t,
            e
        }
    }())
}(this, (function() {
    //     Underscore.js 1.13.3
    //     https://underscorejs.org
    //     (c) 2009-2022 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.
    var n = "1.13.3"
      , r = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}
      , t = Array.prototype
      , e = Object.prototype
      , u = "undefined" != typeof Symbol ? Symbol.prototype : null
      , o = t.push
      , i = t.slice
      , a = e.toString
      , f = e.hasOwnProperty
      , c = "undefined" != typeof ArrayBuffer
      , l = "undefined" != typeof DataView
      , s = Array.isArray
      , p = Object.keys
      , v = Object.create
      , h = c && ArrayBuffer.isView
      , y = isNaN
      , d = isFinite
      , g = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
      , m = Math.pow(2, 53) - 1;
    function j(n, r) {
        return r = null == r ? n.length - 1 : +r,
        function() {
            for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; u < t; u++)
                e[u] = arguments[u + r];
            switch (r) {
            case 0:
                return n.call(this, e);
            case 1:
                return n.call(this, arguments[0], e);
            case 2:
                return n.call(this, arguments[0], arguments[1], e)
            }
            var o = Array(r + 1);
            for (u = 0; u < r; u++)
                o[u] = arguments[u];
            return o[r] = e,
            n.apply(this, o)
        }
    }
    function _(n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n
    }
    function w(n) {
        return void 0 === n
    }
    function A(n) {
        return !0 === n || !1 === n || "[object Boolean]" === a.call(n)
    }
    function x(n) {
        var r = "[object " + n + "]";
        return function(n) {
            return a.call(n) === r
        }
    }
    var S = x("String")
      , O = x("Number")
      , M = x("Date")
      , E = x("RegExp")
      , B = x("Error")
      , N = x("Symbol")
      , I = x("ArrayBuffer")
      , T = x("Function")
      , k = r.document && r.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof k && (T = function(n) {
        return "function" == typeof n || !1
    }
    );
    var D = T
      , R = x("Object")
      , F = l && R(new DataView(new ArrayBuffer(8)))
      , V = "undefined" != typeof Map && R(new Map)
      , P = x("DataView");
    var q = F ? function(n) {
        return null != n && D(n.getInt8) && I(n.buffer)
    }
    : P
      , U = s || x("Array");
    function W(n, r) {
        return null != n && f.call(n, r)
    }
    var z = x("Arguments");
    !function() {
        z(arguments) || (z = function(n) {
            return W(n, "callee")
        }
        )
    }();
    var L = z;
    function $(n) {
        return O(n) && y(n)
    }
    function C(n) {
        return function() {
            return n
        }
    }
    function K(n) {
        return function(r) {
            var t = n(r);
            return "number" == typeof t && t >= 0 && t <= m
        }
    }
    function J(n) {
        return function(r) {
            return null == r ? void 0 : r[n]
        }
    }
    var G = J("byteLength")
      , H = K(G)
      , Q = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    var X = c ? function(n) {
        return h ? h(n) && !q(n) : H(n) && Q.test(a.call(n))
    }
    : C(!1)
      , Y = J("length");
    function Z(n, r) {
        r = function(n) {
            for (var r = {}, t = n.length, e = 0; e < t; ++e)
                r[n[e]] = !0;
            return {
                contains: function(n) {
                    return !0 === r[n]
                },
                push: function(t) {
                    return r[t] = !0,
                    n.push(t)
                }
            }
        }(r);
        var t = b.length
          , u = n.constructor
          , o = D(u) && u.prototype || e
          , i = "constructor";
        for (W(n, i) && !r.contains(i) && r.push(i); t--; )
            (i = b[t])in n && n[i] !== o[i] && !r.contains(i) && r.push(i)
    }
    function nn(n) {
        if (!_(n))
            return [];
        if (p)
            return p(n);
        var r = [];
        for (var t in n)
            W(n, t) && r.push(t);
        return g && Z(n, r),
        r
    }
    function rn(n, r) {
        var t = nn(r)
          , e = t.length;
        if (null == n)
            return !e;
        for (var u = Object(n), o = 0; o < e; o++) {
            var i = t[o];
            if (r[i] !== u[i] || !(i in u))
                return !1
        }
        return !0
    }
    function tn(n) {
        return n instanceof tn ? n : this instanceof tn ? void (this._wrapped = n) : new tn(n)
    }
    function en(n) {
        return new Uint8Array(n.buffer || n,n.byteOffset || 0,G(n))
    }
    tn.VERSION = n,
    tn.prototype.value = function() {
        return this._wrapped
    }
    ,
    tn.prototype.valueOf = tn.prototype.toJSON = tn.prototype.value,
    tn.prototype.toString = function() {
        return String(this._wrapped)
    }
    ;
    var un = "[object DataView]";
    function on(n, r, t, e) {
        if (n === r)
            return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r)
            return !1;
        if (n != n)
            return r != r;
        var o = typeof n;
        return ("function" === o || "object" === o || "object" == typeof r) && function n(r, t, e, o) {
            r instanceof tn && (r = r._wrapped);
            t instanceof tn && (t = t._wrapped);
            var i = a.call(r);
            if (i !== a.call(t))
                return !1;
            if (F && "[object Object]" == i && q(r)) {
                if (!q(t))
                    return !1;
                i = un
            }
            switch (i) {
            case "[object RegExp]":
            case "[object String]":
                return "" + r == "" + t;
            case "[object Number]":
                return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +r == +t;
            case "[object Symbol]":
                return u.valueOf.call(r) === u.valueOf.call(t);
            case "[object ArrayBuffer]":
            case un:
                return n(en(r), en(t), e, o)
            }
            var f = "[object Array]" === i;
            if (!f && X(r)) {
                if (G(r) !== G(t))
                    return !1;
                if (r.buffer === t.buffer && r.byteOffset === t.byteOffset)
                    return !0;
                f = !0
            }
            if (!f) {
                if ("object" != typeof r || "object" != typeof t)
                    return !1;
                var c = r.constructor
                  , l = t.constructor;
                if (c !== l && !(D(c) && c instanceof c && D(l) && l instanceof l) && "constructor"in r && "constructor"in t)
                    return !1
            }
            o = o || [];
            var s = (e = e || []).length;
            for (; s--; )
                if (e[s] === r)
                    return o[s] === t;
            if (e.push(r),
            o.push(t),
            f) {
                if ((s = r.length) !== t.length)
                    return !1;
                for (; s--; )
                    if (!on(r[s], t[s], e, o))
                        return !1
            } else {
                var p, v = nn(r);
                if (s = v.length,
                nn(t).length !== s)
                    return !1;
                for (; s--; )
                    if (p = v[s],
                    !W(t, p) || !on(r[p], t[p], e, o))
                        return !1
            }
            return e.pop(),
            o.pop(),
            !0
        }(n, r, t, e)
    }
    function an(n) {
        if (!_(n))
            return [];
        var r = [];
        for (var t in n)
            r.push(t);
        return g && Z(n, r),
        r
    }
    function fn(n) {
        var r = Y(n);
        return function(t) {
            if (null == t)
                return !1;
            var e = an(t);
            if (Y(e))
                return !1;
            for (var u = 0; u < r; u++)
                if (!D(t[n[u]]))
                    return !1;
            return n !== hn || !D(t[cn])
        }
    }
    var cn = "forEach"
      , ln = "has"
      , sn = ["clear", "delete"]
      , pn = ["get", ln, "set"]
      , vn = sn.concat(cn, pn)
      , hn = sn.concat(pn)
      , yn = ["add"].concat(sn, cn, ln)
      , dn = V ? fn(vn) : x("Map")
      , gn = V ? fn(hn) : x("WeakMap")
      , bn = V ? fn(yn) : x("Set")
      , mn = x("WeakSet");
    function jn(n) {
        for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
            e[u] = n[r[u]];
        return e
    }
    function _n(n) {
        for (var r = {}, t = nn(n), e = 0, u = t.length; e < u; e++)
            r[n[t[e]]] = t[e];
        return r
    }
    function wn(n) {
        var r = [];
        for (var t in n)
            D(n[t]) && r.push(t);
        return r.sort()
    }
    function An(n, r) {
        return function(t) {
            var e = arguments.length;
            if (r && (t = Object(t)),
            e < 2 || null == t)
                return t;
            for (var u = 1; u < e; u++)
                for (var o = arguments[u], i = n(o), a = i.length, f = 0; f < a; f++) {
                    var c = i[f];
                    r && void 0 !== t[c] || (t[c] = o[c])
                }
            return t
        }
    }
    var xn = An(an)
      , Sn = An(nn)
      , On = An(an, !0);
    function Mn(n) {
        if (!_(n))
            return {};
        if (v)
            return v(n);
        var r = function() {};
        r.prototype = n;
        var t = new r;
        return r.prototype = null,
        t
    }
    function En(n) {
        return U(n) ? n : [n]
    }
    function Bn(n) {
        return tn.toPath(n)
    }
    function Nn(n, r) {
        for (var t = r.length, e = 0; e < t; e++) {
            if (null == n)
                return;
            n = n[r[e]]
        }
        return t ? n : void 0
    }
    function In(n, r, t) {
        var e = Nn(n, Bn(r));
        return w(e) ? t : e
    }
    function Tn(n) {
        return n
    }
    function kn(n) {
        return n = Sn({}, n),
        function(r) {
            return rn(r, n)
        }
    }
    function Dn(n) {
        return n = Bn(n),
        function(r) {
            return Nn(r, n)
        }
    }
    function Rn(n, r, t) {
        if (void 0 === r)
            return n;
        switch (null == t ? 3 : t) {
        case 1:
            return function(t) {
                return n.call(r, t)
            }
            ;
        case 3:
            return function(t, e, u) {
                return n.call(r, t, e, u)
            }
            ;
        case 4:
            return function(t, e, u, o) {
                return n.call(r, t, e, u, o)
            }
        }
        return function() {
            return n.apply(r, arguments)
        }
    }
    function Fn(n, r, t) {
        return null == n ? Tn : D(n) ? Rn(n, r, t) : _(n) && !U(n) ? kn(n) : Dn(n)
    }
    function Vn(n, r) {
        return Fn(n, r, 1 / 0)
    }
    function Pn(n, r, t) {
        return tn.iteratee !== Vn ? tn.iteratee(n, r) : Fn(n, r, t)
    }
    function qn() {}
    function Un(n, r) {
        return null == r && (r = n,
        n = 0),
        n + Math.floor(Math.random() * (r - n + 1))
    }
    tn.toPath = En,
    tn.iteratee = Vn;
    var Wn = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    function zn(n) {
        var r = function(r) {
            return n[r]
        }
          , t = "(?:" + nn(n).join("|") + ")"
          , e = RegExp(t)
          , u = RegExp(t, "g");
        return function(n) {
            return n = null == n ? "" : "" + n,
            e.test(n) ? n.replace(u, r) : n
        }
    }
    var Ln = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , $n = zn(Ln)
      , Cn = zn(_n(Ln))
      , Kn = tn.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }
      , Jn = /(.)^/
      , Gn = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , Hn = /\\|'|\r|\n|\u2028|\u2029/g;
    function Qn(n) {
        return "\\" + Gn[n]
    }
    var Xn = /^\s*(\w|\$)+\s*$/;
    var Yn = 0;
    function Zn(n, r, t, e, u) {
        if (!(e instanceof r))
            return n.apply(t, u);
        var o = Mn(n.prototype)
          , i = n.apply(o, u);
        return _(i) ? i : o
    }
    var nr = j((function(n, r) {
        var t = nr.placeholder
          , e = function() {
            for (var u = 0, o = r.length, i = Array(o), a = 0; a < o; a++)
                i[a] = r[a] === t ? arguments[u++] : r[a];
            for (; u < arguments.length; )
                i.push(arguments[u++]);
            return Zn(n, e, this, this, i)
        };
        return e
    }
    ));
    nr.placeholder = tn;
    var rr = j((function(n, r, t) {
        if (!D(n))
            throw new TypeError("Bind must be called on a function");
        var e = j((function(u) {
            return Zn(n, e, r, this, t.concat(u))
        }
        ));
        return e
    }
    ))
      , tr = K(Y);
    function er(n, r, t, e) {
        if (e = e || [],
        r || 0 === r) {
            if (r <= 0)
                return e.concat(n)
        } else
            r = 1 / 0;
        for (var u = e.length, o = 0, i = Y(n); o < i; o++) {
            var a = n[o];
            if (tr(a) && (U(a) || L(a)))
                if (r > 1)
                    er(a, r - 1, t, e),
                    u = e.length;
                else
                    for (var f = 0, c = a.length; f < c; )
                        e[u++] = a[f++];
            else
                t || (e[u++] = a)
        }
        return e
    }
    var ur = j((function(n, r) {
        var t = (r = er(r, !1, !1)).length;
        if (t < 1)
            throw new Error("bindAll must be passed function names");
        for (; t--; ) {
            var e = r[t];
            n[e] = rr(n[e], n)
        }
        return n
    }
    ));
    var or = j((function(n, r, t) {
        return setTimeout((function() {
            return n.apply(null, t)
        }
        ), r)
    }
    ))
      , ir = nr(or, tn, 1);
    function ar(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }
    function fr(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)),
            n <= 1 && (r = null),
            t
        }
    }
    var cr = nr(fr, 2);
    function lr(n, r, t) {
        r = Pn(r, t);
        for (var e, u = nn(n), o = 0, i = u.length; o < i; o++)
            if (r(n[e = u[o]], e, n))
                return e
    }
    function sr(n) {
        return function(r, t, e) {
            t = Pn(t, e);
            for (var u = Y(r), o = n > 0 ? 0 : u - 1; o >= 0 && o < u; o += n)
                if (t(r[o], o, r))
                    return o;
            return -1
        }
    }
    var pr = sr(1)
      , vr = sr(-1);
    function hr(n, r, t, e) {
        for (var u = (t = Pn(t, e, 1))(r), o = 0, i = Y(n); o < i; ) {
            var a = Math.floor((o + i) / 2);
            t(n[a]) < u ? o = a + 1 : i = a
        }
        return o
    }
    function yr(n, r, t) {
        return function(e, u, o) {
            var a = 0
              , f = Y(e);
            if ("number" == typeof o)
                n > 0 ? a = o >= 0 ? o : Math.max(o + f, a) : f = o >= 0 ? Math.min(o + 1, f) : o + f + 1;
            else if (t && o && f)
                return e[o = t(e, u)] === u ? o : -1;
            if (u != u)
                return (o = r(i.call(e, a, f), $)) >= 0 ? o + a : -1;
            for (o = n > 0 ? a : f - 1; o >= 0 && o < f; o += n)
                if (e[o] === u)
                    return o;
            return -1
        }
    }
    var dr = yr(1, pr, hr)
      , gr = yr(-1, vr);
    function br(n, r, t) {
        var e = (tr(n) ? pr : lr)(n, r, t);
        if (void 0 !== e && -1 !== e)
            return n[e]
    }
    function mr(n, r, t) {
        var e, u;
        if (r = Rn(r, t),
        tr(n))
            for (e = 0,
            u = n.length; e < u; e++)
                r(n[e], e, n);
        else {
            var o = nn(n);
            for (e = 0,
            u = o.length; e < u; e++)
                r(n[o[e]], o[e], n)
        }
        return n
    }
    function jr(n, r, t) {
        r = Pn(r, t);
        for (var e = !tr(n) && nn(n), u = (e || n).length, o = Array(u), i = 0; i < u; i++) {
            var a = e ? e[i] : i;
            o[i] = r(n[a], a, n)
        }
        return o
    }
    function _r(n) {
        var r = function(r, t, e, u) {
            var o = !tr(r) && nn(r)
              , i = (o || r).length
              , a = n > 0 ? 0 : i - 1;
            for (u || (e = r[o ? o[a] : a],
            a += n); a >= 0 && a < i; a += n) {
                var f = o ? o[a] : a;
                e = t(e, r[f], f, r)
            }
            return e
        };
        return function(n, t, e, u) {
            var o = arguments.length >= 3;
            return r(n, Rn(t, u, 4), e, o)
        }
    }
    var wr = _r(1)
      , Ar = _r(-1);
    function xr(n, r, t) {
        var e = [];
        return r = Pn(r, t),
        mr(n, (function(n, t, u) {
            r(n, t, u) && e.push(n)
        }
        )),
        e
    }
    function Sr(n, r, t) {
        r = Pn(r, t);
        for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) {
            var i = e ? e[o] : o;
            if (!r(n[i], i, n))
                return !1
        }
        return !0
    }
    function Or(n, r, t) {
        r = Pn(r, t);
        for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) {
            var i = e ? e[o] : o;
            if (r(n[i], i, n))
                return !0
        }
        return !1
    }
    function Mr(n, r, t, e) {
        return tr(n) || (n = jn(n)),
        ("number" != typeof t || e) && (t = 0),
        dr(n, r, t) >= 0
    }
    var Er = j((function(n, r, t) {
        var e, u;
        return D(r) ? u = r : (r = Bn(r),
        e = r.slice(0, -1),
        r = r[r.length - 1]),
        jr(n, (function(n) {
            var o = u;
            if (!o) {
                if (e && e.length && (n = Nn(n, e)),
                null == n)
                    return;
                o = n[r]
            }
            return null == o ? o : o.apply(n, t)
        }
        ))
    }
    ));
    function Br(n, r) {
        return jr(n, Dn(r))
    }
    function Nr(n, r, t) {
        var e, u, o = -1 / 0, i = -1 / 0;
        if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n)
            for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)
                null != (e = n[a]) && e > o && (o = e);
        else
            r = Pn(r, t),
            mr(n, (function(n, t, e) {
                ((u = r(n, t, e)) > i || u === -1 / 0 && o === -1 / 0) && (o = n,
                i = u)
            }
            ));
        return o
    }
    var Ir = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    function Tr(n) {
        return n ? U(n) ? i.call(n) : S(n) ? n.match(Ir) : tr(n) ? jr(n, Tn) : jn(n) : []
    }
    function kr(n, r, t) {
        if (null == r || t)
            return tr(n) || (n = jn(n)),
            n[Un(n.length - 1)];
        var e = Tr(n)
          , u = Y(e);
        r = Math.max(Math.min(r, u), 0);
        for (var o = u - 1, i = 0; i < r; i++) {
            var a = Un(i, o)
              , f = e[i];
            e[i] = e[a],
            e[a] = f
        }
        return e.slice(0, r)
    }
    function Dr(n, r) {
        return function(t, e, u) {
            var o = r ? [[], []] : {};
            return e = Pn(e, u),
            mr(t, (function(r, u) {
                var i = e(r, u, t);
                n(o, r, i)
            }
            )),
            o
        }
    }
    var Rr = Dr((function(n, r, t) {
        W(n, t) ? n[t].push(r) : n[t] = [r]
    }
    ))
      , Fr = Dr((function(n, r, t) {
        n[t] = r
    }
    ))
      , Vr = Dr((function(n, r, t) {
        W(n, t) ? n[t]++ : n[t] = 1
    }
    ))
      , Pr = Dr((function(n, r, t) {
        n[t ? 0 : 1].push(r)
    }
    ), !0);
    function qr(n, r, t) {
        return r in t
    }
    var Ur = j((function(n, r) {
        var t = {}
          , e = r[0];
        if (null == n)
            return t;
        D(e) ? (r.length > 1 && (e = Rn(e, r[1])),
        r = an(n)) : (e = qr,
        r = er(r, !1, !1),
        n = Object(n));
        for (var u = 0, o = r.length; u < o; u++) {
            var i = r[u]
              , a = n[i];
            e(a, i, n) && (t[i] = a)
        }
        return t
    }
    ))
      , Wr = j((function(n, r) {
        var t, e = r[0];
        return D(e) ? (e = ar(e),
        r.length > 1 && (t = r[1])) : (r = jr(er(r, !1, !1), String),
        e = function(n, t) {
            return !Mr(r, t)
        }
        ),
        Ur(n, e, t)
    }
    ));
    function zr(n, r, t) {
        return i.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)))
    }
    function Lr(n, r, t) {
        return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[0] : zr(n, n.length - r)
    }
    function $r(n, r, t) {
        return i.call(n, null == r || t ? 1 : r)
    }
    var Cr = j((function(n, r) {
        return r = er(r, !0, !0),
        xr(n, (function(n) {
            return !Mr(r, n)
        }
        ))
    }
    ))
      , Kr = j((function(n, r) {
        return Cr(n, r)
    }
    ));
    function Jr(n, r, t, e) {
        A(r) || (e = t,
        t = r,
        r = !1),
        null != t && (t = Pn(t, e));
        for (var u = [], o = [], i = 0, a = Y(n); i < a; i++) {
            var f = n[i]
              , c = t ? t(f, i, n) : f;
            r && !t ? (i && o === c || u.push(f),
            o = c) : t ? Mr(o, c) || (o.push(c),
            u.push(f)) : Mr(u, f) || u.push(f)
        }
        return u
    }
    var Gr = j((function(n) {
        return Jr(er(n, !0, !0))
    }
    ));
    function Hr(n) {
        for (var r = n && Nr(n, Y).length || 0, t = Array(r), e = 0; e < r; e++)
            t[e] = Br(n, e);
        return t
    }
    var Qr = j(Hr);
    function Xr(n, r) {
        return n._chain ? tn(r).chain() : r
    }
    function Yr(n) {
        return mr(wn(n), (function(r) {
            var t = tn[r] = n[r];
            tn.prototype[r] = function() {
                var n = [this._wrapped];
                return o.apply(n, arguments),
                Xr(this, t.apply(tn, n))
            }
        }
        )),
        tn
    }
    mr(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(n) {
        var r = t[n];
        tn.prototype[n] = function() {
            var t = this._wrapped;
            return null != t && (r.apply(t, arguments),
            "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0]),
            Xr(this, t)
        }
    }
    )),
    mr(["concat", "join", "slice"], (function(n) {
        var r = t[n];
        tn.prototype[n] = function() {
            var n = this._wrapped;
            return null != n && (n = r.apply(n, arguments)),
            Xr(this, n)
        }
    }
    ));
    var Zr = Yr({
        __proto__: null,
        VERSION: n,
        restArguments: j,
        isObject: _,
        isNull: function(n) {
            return null === n
        },
        isUndefined: w,
        isBoolean: A,
        isElement: function(n) {
            return !(!n || 1 !== n.nodeType)
        },
        isString: S,
        isNumber: O,
        isDate: M,
        isRegExp: E,
        isError: B,
        isSymbol: N,
        isArrayBuffer: I,
        isDataView: q,
        isArray: U,
        isFunction: D,
        isArguments: L,
        isFinite: function(n) {
            return !N(n) && d(n) && !isNaN(parseFloat(n))
        },
        isNaN: $,
        isTypedArray: X,
        isEmpty: function(n) {
            if (null == n)
                return !0;
            var r = Y(n);
            return "number" == typeof r && (U(n) || S(n) || L(n)) ? 0 === r : 0 === Y(nn(n))
        },
        isMatch: rn,
        isEqual: function(n, r) {
            return on(n, r)
        },
        isMap: dn,
        isWeakMap: gn,
        isSet: bn,
        isWeakSet: mn,
        keys: nn,
        allKeys: an,
        values: jn,
        pairs: function(n) {
            for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
                e[u] = [r[u], n[r[u]]];
            return e
        },
        invert: _n,
        functions: wn,
        methods: wn,
        extend: xn,
        extendOwn: Sn,
        assign: Sn,
        defaults: On,
        create: function(n, r) {
            var t = Mn(n);
            return r && Sn(t, r),
            t
        },
        clone: function(n) {
            return _(n) ? U(n) ? n.slice() : xn({}, n) : n
        },
        tap: function(n, r) {
            return r(n),
            n
        },
        get: In,
        has: function(n, r) {
            for (var t = (r = Bn(r)).length, e = 0; e < t; e++) {
                var u = r[e];
                if (!W(n, u))
                    return !1;
                n = n[u]
            }
            return !!t
        },
        mapObject: function(n, r, t) {
            r = Pn(r, t);
            for (var e = nn(n), u = e.length, o = {}, i = 0; i < u; i++) {
                var a = e[i];
                o[a] = r(n[a], a, n)
            }
            return o
        },
        identity: Tn,
        constant: C,
        noop: qn,
        toPath: En,
        property: Dn,
        propertyOf: function(n) {
            return null == n ? qn : function(r) {
                return In(n, r)
            }
        },
        matcher: kn,
        matches: kn,
        times: function(n, r, t) {
            var e = Array(Math.max(0, n));
            r = Rn(r, t, 1);
            for (var u = 0; u < n; u++)
                e[u] = r(u);
            return e
        },
        random: Un,
        now: Wn,
        escape: $n,
        unescape: Cn,
        templateSettings: Kn,
        template: function(n, r, t) {
            !r && t && (r = t),
            r = On({}, r, tn.templateSettings);
            var e = RegExp([(r.escape || Jn).source, (r.interpolate || Jn).source, (r.evaluate || Jn).source].join("|") + "|$", "g")
              , u = 0
              , o = "__p+='";
            n.replace(e, (function(r, t, e, i, a) {
                return o += n.slice(u, a).replace(Hn, Qn),
                u = a + r.length,
                t ? o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? o += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : i && (o += "';\n" + i + "\n__p+='"),
                r
            }
            )),
            o += "';\n";
            var i, a = r.variable;
            if (a) {
                if (!Xn.test(a))
                    throw new Error("variable is not a bare identifier: " + a)
            } else
                o = "with(obj||{}){\n" + o + "}\n",
                a = "obj";
            o = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(a,"_",o)
            } catch (n) {
                throw n.source = o,
                n
            }
            var f = function(n) {
                return i.call(this, n, tn)
            };
            return f.source = "function(" + a + "){\n" + o + "}",
            f
        },
        result: function(n, r, t) {
            var e = (r = Bn(r)).length;
            if (!e)
                return D(t) ? t.call(n) : t;
            for (var u = 0; u < e; u++) {
                var o = null == n ? void 0 : n[r[u]];
                void 0 === o && (o = t,
                u = e),
                n = D(o) ? o.call(n) : o
            }
            return n
        },
        uniqueId: function(n) {
            var r = ++Yn + "";
            return n ? n + r : r
        },
        chain: function(n) {
            var r = tn(n);
            return r._chain = !0,
            r
        },
        iteratee: Vn,
        partial: nr,
        bind: rr,
        bindAll: ur,
        memoize: function(n, r) {
            var t = function(e) {
                var u = t.cache
                  , o = "" + (r ? r.apply(this, arguments) : e);
                return W(u, o) || (u[o] = n.apply(this, arguments)),
                u[o]
            };
            return t.cache = {},
            t
        },
        delay: or,
        defer: ir,
        throttle: function(n, r, t) {
            var e, u, o, i, a = 0;
            t || (t = {});
            var f = function() {
                a = !1 === t.leading ? 0 : Wn(),
                e = null,
                i = n.apply(u, o),
                e || (u = o = null)
            }
              , c = function() {
                var c = Wn();
                a || !1 !== t.leading || (a = c);
                var l = r - (c - a);
                return u = this,
                o = arguments,
                l <= 0 || l > r ? (e && (clearTimeout(e),
                e = null),
                a = c,
                i = n.apply(u, o),
                e || (u = o = null)) : e || !1 === t.trailing || (e = setTimeout(f, l)),
                i
            };
            return c.cancel = function() {
                clearTimeout(e),
                a = 0,
                e = u = o = null
            }
            ,
            c
        },
        debounce: function(n, r, t) {
            var e, u, o, i, a, f = function() {
                var c = Wn() - u;
                r > c ? e = setTimeout(f, r - c) : (e = null,
                t || (i = n.apply(a, o)),
                e || (o = a = null))
            }, c = j((function(c) {
                return a = this,
                o = c,
                u = Wn(),
                e || (e = setTimeout(f, r),
                t && (i = n.apply(a, o))),
                i
            }
            ));
            return c.cancel = function() {
                clearTimeout(e),
                e = o = a = null
            }
            ,
            c
        },
        wrap: function(n, r) {
            return nr(r, n)
        },
        negate: ar,
        compose: function() {
            var n = arguments
              , r = n.length - 1;
            return function() {
                for (var t = r, e = n[r].apply(this, arguments); t--; )
                    e = n[t].call(this, e);
                return e
            }
        },
        after: function(n, r) {
            return function() {
                if (--n < 1)
                    return r.apply(this, arguments)
            }
        },
        before: fr,
        once: cr,
        findKey: lr,
        findIndex: pr,
        findLastIndex: vr,
        sortedIndex: hr,
        indexOf: dr,
        lastIndexOf: gr,
        find: br,
        detect: br,
        findWhere: function(n, r) {
            return br(n, kn(r))
        },
        each: mr,
        forEach: mr,
        map: jr,
        collect: jr,
        reduce: wr,
        foldl: wr,
        inject: wr,
        reduceRight: Ar,
        foldr: Ar,
        filter: xr,
        select: xr,
        reject: function(n, r, t) {
            return xr(n, ar(Pn(r)), t)
        },
        every: Sr,
        all: Sr,
        some: Or,
        any: Or,
        contains: Mr,
        includes: Mr,
        include: Mr,
        invoke: Er,
        pluck: Br,
        where: function(n, r) {
            return xr(n, kn(r))
        },
        max: Nr,
        min: function(n, r, t) {
            var e, u, o = 1 / 0, i = 1 / 0;
            if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n)
                for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)
                    null != (e = n[a]) && e < o && (o = e);
            else
                r = Pn(r, t),
                mr(n, (function(n, t, e) {
                    ((u = r(n, t, e)) < i || u === 1 / 0 && o === 1 / 0) && (o = n,
                    i = u)
                }
                ));
            return o
        },
        shuffle: function(n) {
            return kr(n, 1 / 0)
        },
        sample: kr,
        sortBy: function(n, r, t) {
            var e = 0;
            return r = Pn(r, t),
            Br(jr(n, (function(n, t, u) {
                return {
                    value: n,
                    index: e++,
                    criteria: r(n, t, u)
                }
            }
            )).sort((function(n, r) {
                var t = n.criteria
                  , e = r.criteria;
                if (t !== e) {
                    if (t > e || void 0 === t)
                        return 1;
                    if (t < e || void 0 === e)
                        return -1
                }
                return n.index - r.index
            }
            )), "value")
        },
        groupBy: Rr,
        indexBy: Fr,
        countBy: Vr,
        partition: Pr,
        toArray: Tr,
        size: function(n) {
            return null == n ? 0 : tr(n) ? n.length : nn(n).length
        },
        pick: Ur,
        omit: Wr,
        first: Lr,
        head: Lr,
        take: Lr,
        initial: zr,
        last: function(n, r, t) {
            return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[n.length - 1] : $r(n, Math.max(0, n.length - r))
        },
        rest: $r,
        tail: $r,
        drop: $r,
        compact: function(n) {
            return xr(n, Boolean)
        },
        flatten: function(n, r) {
            return er(n, r, !1)
        },
        without: Kr,
        uniq: Jr,
        unique: Jr,
        union: Gr,
        intersection: function(n) {
            for (var r = [], t = arguments.length, e = 0, u = Y(n); e < u; e++) {
                var o = n[e];
                if (!Mr(r, o)) {
                    var i;
                    for (i = 1; i < t && Mr(arguments[i], o); i++)
                        ;
                    i === t && r.push(o)
                }
            }
            return r
        },
        difference: Cr,
        unzip: Hr,
        transpose: Hr,
        zip: Qr,
        object: function(n, r) {
            for (var t = {}, e = 0, u = Y(n); e < u; e++)
                r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
            return t
        },
        range: function(n, r, t) {
            null == r && (r = n || 0,
            n = 0),
            t || (t = r < n ? -1 : 1);
            for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0; o < e; o++,
            n += t)
                u[o] = n;
            return u
        },
        chunk: function(n, r) {
            if (null == r || r < 1)
                return [];
            for (var t = [], e = 0, u = n.length; e < u; )
                t.push(i.call(n, e, e += r));
            return t
        },
        mixin: Yr,
        default: tn
    });
    return Zr._ = Zr,
    Zr
}
));
;/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = function() {
    "use strict";
    var n = /[\11\12\14\15\40]+/
      , e = "data-once"
      , t = document;
    function r(n, t, r) {
        return n[t + "Attribute"](e, r)
    }
    function o(e) {
        if ("string" != typeof e)
            throw new TypeError("once ID must be a string");
        if ("" === e || n.test(e))
            throw new RangeError("once ID must not be empty or contain spaces");
        return '[data-once~="' + e + '"]'
    }
    function u(n) {
        if (!(n instanceof Element))
            throw new TypeError("The element must be an instance of Element");
        return !0
    }
    function i(n, e) {
        void 0 === e && (e = t);
        var r = n;
        if (null === n)
            r = [];
        else {
            if (!n)
                throw new TypeError("Selector must not be empty");
            "string" != typeof n || e !== t && !u(e) ? n instanceof Element && (r = [n]) : r = e.querySelectorAll(n)
        }
        return Array.prototype.slice.call(r)
    }
    function c(n, e, t) {
        return e.filter((function(e) {
            var r = u(e) && e.matches(n);
            return r && t && t(e),
            r
        }
        ))
    }
    function f(e, t) {
        var o = t.add
          , u = t.remove
          , i = [];
        r(e, "has") && r(e, "get").trim().split(n).forEach((function(n) {
            i.indexOf(n) < 0 && n !== u && i.push(n)
        }
        )),
        o && i.push(o);
        var c = i.join(" ");
        r(e, "" === c ? "remove" : "set", c)
    }
    function a(n, e, t) {
        return c(":not(" + o(n) + ")", i(e, t), (function(e) {
            return f(e, {
                add: n
            })
        }
        ))
    }
    return a.remove = function(n, e, t) {
        return c(o(n), i(e, t), (function(e) {
            return f(e, {
                remove: n
            })
        }
        ))
    }
    ,
    a.filter = function(n, e, t) {
        return c(o(n), i(e, t))
    }
    ,
    a.find = function(n, e) {
        return i(n ? o(n) : "[data-once]", e)
    }
    ,
    a
}();

;/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e) {
    "use strict";
    if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
}
)(function(t) {
    "use strict";
    var r = function(e) {
        e = e || "once";
        if (typeof e !== "string") {
            throw new TypeError("The jQuery Once id parameter must be a string")
        }
        return e
    };
    t.fn.once = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) !== true
        }).data(n, true)
    }
    ;
    t.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + r(e))
    }
    ;
    t.fn.findOnce = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) === true
        })
    }
});

/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};

    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
}
)();
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

window.Drupal = {
    behaviors: {},
    locale: {}
};

(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    }
    ;

    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    }
    ;

    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    }
    ;

    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    }
    ;

    Drupal.formatString = function(str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
            case '@':
                processedArgs[key] = Drupal.checkPlain(args[key]);
                break;

            case '!':
                processedArgs[key] = args[key];
                break;

            default:
                processedArgs[key] = Drupal.theme('placeholder', args[key]);
                break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    }
    ;

    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }

        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }

        if (keys.length === 0) {
            return str;
        }

        var key = keys.pop();
        var fragments = str.split(key);

        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }

        return fragments.join(args[key]);
    }
    ;

    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }

        if (args) {
            str = Drupal.formatString(str, args);
        }

        return str;
    }
    ;

    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    }
    ;

    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');

        try {
            url = decodeURIComponent(url);
        } catch (e) {}

        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    }
    ;

    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;

        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }

        var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));

        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}

        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}

        return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
    }
    ;

    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;

        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }

        return translations[index];
    }
    ;

    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    }
    ;

    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;

        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn("[Deprecation] ".concat(message));
        }
    }
    ;

    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target
          , deprecatedProperty = _ref2.deprecatedProperty
          , message = _ref2.message;

        if (!Proxy || !Reflect) {
            return target;
        }

        return new Proxy(target,{
            get: function get(target, key) {
                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }

                for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }

                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    }
    ;

    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    }
    ;

    Drupal.theme.placeholder = function(str) {
        return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
    }
    ;
}
)(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

if (window.jQuery) {
    jQuery.noConflict();
}

document.documentElement.className += ' js';

(function(Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        var listener = function listener() {
            callback();
            document.removeEventListener('DOMContentLoaded', listener);
        };

        if (document.readyState !== 'loading') {
            setTimeout(callback, 0);
        } else {
            document.addEventListener('DOMContentLoaded', listener);
        }
    };

    domReady(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
}
)(Drupal, window.drupalSettings);
;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"), d = function(a) {
            var b, d, e = a.parentNode;
            "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(),
            e.insertBefore(b, e.firstElementChild),
            setTimeout(function() {
                e.removeChild(b)
            })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth,
            d = a.sizes,
            a.sizes += ",100vw",
            setTimeout(function() {
                a.sizes = d
            }))
        }, e = function() {
            var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
            for (a = 0; a < b.length; a++)
                d(b[a])
        }, f = function() {
            clearTimeout(b),
            b = setTimeout(e, 99)
        }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function() {
            f(),
            g && g.addListener && g.addListener(f)
        };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
        /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h),
        f
    }())
}(window),
function(a, b, c) {
    "use strict";
    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }
    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1,
            ba()
        }
        ,
        d.onload = function() {
            A[b] = 1 === d.width,
            ba()
        }
        ,
        d.src = c,
        "pending"
    }
    function f() {
        M = !1,
        P = a.devicePixelRatio,
        N = {},
        O = {},
        s.DPR = P || 1,
        Q.width = Math.max(a.innerWidth || 0, z.clientWidth),
        Q.height = Math.max(a.innerHeight || 0, z.clientHeight),
        Q.vw = Q.width / 100,
        Q.vh = Q.height / 100,
        r = [Q.height, Q.width, P].join("-"),
        Q.em = s.getEmValue(),
        Q.rem = Q.em
    }
    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c,
        e = Math.pow(a - .6, 1.5),
        g = f * e,
        d && (g += .1 * e),
        h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a,
        h > c
    }
    function h(a) {
        var b, c = s.getSet(a), d = !1;
        "pending" !== c && (d = r,
        c && (b = s.setRes(c),
        s.applySetCandidate(b, a))),
        a[s.ns].evaled = d
    }
    function i(a, b) {
        return a.res - b.res
    }
    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets,
        c = c && c[c.length - 1]),
        d = k(b, c),
        d && (b = s.makeUrl(b),
        a[s.ns].curSrc = b,
        a[s.ns].curCan = d,
        d.res || aa(d, d.set.sizes)),
        d
    }
    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b),
            a = s.makeUrl(a),
            c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }
    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0,
        d = g.length; d > c; c++)
            e = g[c],
            e[s.ns] = !0,
            f = e.getAttribute("srcset"),
            f && b.push({
                srcset: f,
                media: e.getAttribute("media"),
                type: e.getAttribute("type"),
                sizes: e.getAttribute("sizes")
            })
    }
    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0],
            m += c.length,
            c) : void 0
        }
        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1, o = {};
            for (e = 0; e < h.length; e++)
                f = h[e],
                i = f[f.length - 1],
                j = f.substring(0, f.length - 1),
                k = parseInt(j, 10),
                l = parseFloat(j),
                X.test(j) && "w" === i ? ((a || c) && (m = !0),
                0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0),
                0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0),
                0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g,
            a && (o.w = a),
            c && (o.d = c),
            d && (o.h = d),
            d || c || a || (o.d = 1),
            1 === o.d && (b.has1x = !0),
            o.set = b,
            n.push(o))
        }
        function f() {
            for (c(T),
            i = "",
            j = "in descriptor"; ; ) {
                if (k = a.charAt(m),
                "in descriptor" === j)
                    if (d(k))
                        i && (h.push(i),
                        i = "",
                        j = "after descriptor");
                    else {
                        if ("," === k)
                            return m += 1,
                            i && h.push(i),
                            void e();
                        if ("(" === k)
                            i += k,
                            j = "in parens";
                        else {
                            if ("" === k)
                                return i && h.push(i),
                                void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k)
                        i += k,
                        j = "in descriptor";
                    else {
                        if ("" === k)
                            return h.push(i),
                            void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k))
                        ;
                    else {
                        if ("" === k)
                            return void e();
                        j = "in descriptor",
                        m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = []; ; ) {
            if (c(U),
            m >= l)
                return n;
            g = c(V),
            h = [],
            "," === g.slice(-1) ? (g = g.replace(W, ""),
            e()) : f()
        }
    }
    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f),
                f = "")
            }
            function c() {
                g[0] && (h.push(g),
                g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ; ) {
                if (e = a.charAt(j),
                "" === e)
                    return b(),
                    c(),
                    h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1,
                        j += 2,
                        b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(),
                            j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e)
                        i += 1;
                    else if (")" === e)
                        i -= 1;
                    else {
                        if ("," === e) {
                            b(),
                            c(),
                            j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0,
                            j += 2;
                            continue
                        }
                    }
                    f += e,
                    j += 1
                }
            }
        }
        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a),
        g = f.length,
        e = 0; g > e; e++)
            if (h = f[e],
            i = h[h.length - 1],
            c(i)) {
                if (j = i,
                h.pop(),
                0 === h.length)
                    return j;
                if (h = h.join(" "),
                s.matchesMedia(h))
                    return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {}, t = !1, u = function() {}, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = {
        algorithm: ""
    }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = {
        px: 1,
        "in": 96
    }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, $ = function(a) {
        var b = {};
        return function(c) {
            return c in b || (b[c] = a(c)),
            b[c]
        }
    }, _ = function() {
        var a = /^([\d\.]+)(em|vw|px)$/
          , b = function() {
            for (var a = arguments, b = 0, c = a[0]; ++b in a; )
                c = c.replace(a[b], a[++b]);
            return c
        }
          , c = $(function(a) {
            return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
        });
        return function(b, d) {
            var e;
            if (!(b in N))
                if (N[b] = !1,
                d && (e = b.match(a)))
                    N[b] = e[1] * Q[e[2]];
                else
                    try {
                        N[b] = new Function("e",c(b))(Q)
                    } catch (f) {}
            return N[b]
        }
    }(), aa = function(a, b) {
        return a.w ? (a.cWidth = s.calcListLength(b || "100vw"),
        a.res = a.w / a.cWidth) : a.res = a.d,
        a
    }, ba = function(a) {
        if (t) {
            var c, d, e, f = a || {};
            if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements,
            f.elements = null)),
            c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort),
            e = c.length) {
                for (s.setupRun(f),
                S = !0,
                d = 0; e > d; d++)
                    s.fillImg(c[d], f);
                s.teardownRun(f)
            }
        }
    };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    }
    : u,
    G in v || (G = "src"),
    A["image/jpeg"] = !0,
    A["image/gif"] = !0,
    A["image/png"] = !0,
    A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"),
    s.ns = ("pf" + (new Date).getTime()).substr(0, 9),
    s.supSrcset = "srcset"in v,
    s.supSizes = "sizes"in v,
    s.supPicture = !!a.HTMLPictureElement,
    s.supSrcset && s.supPicture && !s.supSizes && !function(a) {
        v.srcset = "data:,a",
        a.src = "data:,a",
        s.supSrcset = v.complete === a.complete,
        s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")),
    s.supSrcset && !s.supSizes ? !function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=="
          , c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          , d = b.createElement("img")
          , e = function() {
            var a = d.width;
            2 === a && (s.supSizes = !0),
            q = s.supSrcset && !s.supSizes,
            t = !0,
            setTimeout(ba)
        };
        d.onload = e,
        d.onerror = e,
        d.setAttribute("sizes", "9px"),
        d.srcset = c + " 1w," + a + " 9w",
        d.src = c
    }() : t = !0,
    s.selShort = "picture>img,img[srcset]",
    s.sel = s.selShort,
    s.cfg = B,
    s.DPR = P || 1,
    s.u = Q,
    s.types = A,
    s.setSize = u,
    s.makeUrl = $(function(a) {
        return R.href = a,
        R.href
    }),
    s.qsa = function(a, b) {
        return "querySelector"in a ? a.querySelectorAll(b) : []
    }
    ,
    s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        }
        : s.matchesMedia = s.mMQ,
        s.matchesMedia.apply(this, arguments)
    }
    ,
    s.mMQ = function(a) {
        return a ? _(a) : !0
    }
    ,
    s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1),
        b
    }
    ,
    s.supportsType = function(a) {
        return a ? A[a] : !0
    }
    ,
    s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }),
    s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)),
        a.cands
    }
    ,
    s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div")
              , d = z.style.cssText
              , e = a.style.cssText;
            c.style.cssText = K,
            z.style.cssText = L,
            a.style.cssText = L,
            a.appendChild(c),
            p = c.offsetWidth,
            a.removeChild(c),
            p = parseFloat(p, 10),
            z.style.cssText = d,
            a.style.cssText = e
        }
        return p || 16
    }
    ,
    s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }
    ,
    s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++)
                aa(b[c], a.sizes)
        }
        return b
    }
    ,
    s.setRes.res = aa,
    s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR;
            if (k = o.curSrc || b[G],
            l = o.curCan || j(b, k, a[0].set),
            l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p,
            n || (l.cached = !0,
            l.res >= p && (h = l))),
            !h)
                for (a.sort(i),
                f = a.length,
                h = a[f - 1],
                d = 0; f > d; d++)
                    if (c = a[d],
                    c.res >= p) {
                        e = d - 1,
                        h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url),
            o.curSrc = m,
            o.curCan = h,
            m !== k && s.setSrc(b, h),
            s.setSize(b))
        }
    }
    ,
    s.setSrc = function(a, b) {
        var c;
        a.src = b.url,
        "image/svg+xml" === b.set.type && (c = a.style.width,
        a.style.width = a.offsetWidth + 1 + "px",
        a.offsetWidth + 1 && (a.style.width = c))
    }
    ,
    s.getSet = function(a) {
        var b, c, d, e = !1, f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b],
            c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d),
                e = c;
                break
            }
        return e
    }
    ,
    s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"),
        j.src ? x.call(a, C, j.src) : y.call(a, C)),
        (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"),
        j.srcset = e,
        h = !0),
        j.sets = [],
        i && (j.pic = !0,
        l(b, j.sets)),
        j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        },
        j.sets.push(f),
        g = (q || j.src) && H.test(j.srcset || ""),
        g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src,
        f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }),
        j.curCan = null,
        j.curSrc = c,
        j.supported = !(i || f && !s.supSrcset || g && !s.supSizes),
        h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e),
        a.srcset = "") : y.call(a, D)),
        j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src),
        j.parsed = !0
    }
    ,
    s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}),
        c = a[s.ns],
        (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b),
        c.supported ? c.evaled = r : h(a))
    }
    ,
    s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }
    ,
    s.supPicture ? (ba = u,
    s.fillImg = u) : !function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function() {
            var a = b.readyState || "";
            f = setTimeout(e, "loading" === a ? 200 : 999),
            b.body && (s.fillImgs(),
            c = c || d.test(a),
            c && clearTimeout(f))
        }, f = setTimeout(e, b.body ? 9 : 99), g = function(a, b) {
            var c, d, e = function() {
                var f = new Date - d;
                b > f ? c = setTimeout(e, b - f) : (c = null,
                a())
            };
            return function() {
                d = new Date,
                c || (c = setTimeout(e, b))
            }
        }, h = z.clientHeight, i = function() {
            M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h,
            h = z.clientHeight,
            M && s.fillImgs()
        };
        Z(a, "resize", g(i, 99)),
        Z(b, "readystatechange", e)
    }(),
    s.picturefill = ba,
    s.fillImgs = ba,
    s.teardownRun = u,
    ba._ = s,
    a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0],
            S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length; )
        a.picturefillCFG.push(J.shift());
    a.picturefill = ba,
    "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }),
    s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);
;/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
(function(q, m) {
    "function" === typeof define && define.amd ? define(m) : "object" === typeof exports ? module.exports = m() : q.Blazy = m()
}
)(this, function() {
    function q(b) {
        var c = b._util;
        c.elements = E(b.options);
        c.count = c.elements.length;
        c.destroyed && (c.destroyed = !1,
        b.options.container && l(b.options.container, function(a) {
            n(a, "scroll", c.validateT)
        }),
        n(window, "resize", c.saveViewportOffsetT),
        n(window, "resize", c.validateT),
        n(window, "scroll", c.validateT));
        m(b)
    }
    function m(b) {
        for (var c = b._util, a = 0; a < c.count; a++) {
            var d = c.elements[a], e;
            a: {
                var g = d;
                e = b.options;
                var p = g.getBoundingClientRect();
                if (e.container && y && (g = g.closest(e.containerClass))) {
                    g = g.getBoundingClientRect();
                    e = r(g, f) ? r(p, {
                        top: g.top - e.offset,
                        right: g.right + e.offset,
                        bottom: g.bottom + e.offset,
                        left: g.left - e.offset
                    }) : !1;
                    break a
                }
                e = r(p, f)
            }
            if (e || t(d, b.options.successClass))
                b.load(d),
                c.elements.splice(a, 1),
                c.count--,
                a--
        }
        0 === c.count && b.destroy()
    }
    function r(b, c) {
        return b.right >= c.left && b.bottom >= c.top && b.left <= c.right && b.top <= c.bottom
    }
    function z(b, c, a) {
        if (!t(b, a.successClass) && (c || a.loadInvisible || 0 < b.offsetWidth && 0 < b.offsetHeight))
            if (c = b.getAttribute(u) || b.getAttribute(a.src)) {
                c = c.split(a.separator);
                var d = c[A && 1 < c.length ? 1 : 0]
                  , e = b.getAttribute(a.srcset)
                  , g = "img" === b.nodeName.toLowerCase()
                  , p = (c = b.parentNode) && "picture" === c.nodeName.toLowerCase();
                if (g || void 0 === b.src) {
                    var h = new Image
                      , w = function() {
                        a.error && a.error(b, "invalid");
                        v(b, a.errorClass);
                        k(h, "error", w);
                        k(h, "load", f)
                    }
                      , f = function() {
                        g ? p || B(b, d, e) : b.style.backgroundImage = 'url("' + d + '")';
                        x(b, a);
                        k(h, "load", f);
                        k(h, "error", w)
                    };
                    p && (h = b,
                    l(c.getElementsByTagName("source"), function(b) {
                        var c = a.srcset
                          , e = b.getAttribute(c);
                        e && (b.setAttribute("srcset", e),
                        b.removeAttribute(c))
                    }));
                    n(h, "error", w);
                    n(h, "load", f);
                    B(h, d, e)
                } else
                    b.src = d,
                    x(b, a)
            } else
                "video" === b.nodeName.toLowerCase() ? (l(b.getElementsByTagName("source"), function(b) {
                    var c = a.src
                      , e = b.getAttribute(c);
                    e && (b.setAttribute("src", e),
                    b.removeAttribute(c))
                }),
                b.load(),
                x(b, a)) : (a.error && a.error(b, "missing"),
                v(b, a.errorClass))
    }
    function x(b, c) {
        v(b, c.successClass);
        c.success && c.success(b);
        b.removeAttribute(c.src);
        b.removeAttribute(c.srcset);
        l(c.breakpoints, function(a) {
            b.removeAttribute(a.src)
        })
    }
    function B(b, c, a) {
        a && b.setAttribute("srcset", a);
        b.src = c
    }
    function t(b, c) {
        return -1 !== (" " + b.className + " ").indexOf(" " + c + " ")
    }
    function v(b, c) {
        t(b, c) || (b.className += " " + c)
    }
    function E(b) {
        var c = [];
        b = b.root.querySelectorAll(b.selector);
        for (var a = b.length; a--; c.unshift(b[a]))
            ;
        return c
    }
    function C(b) {
        f.bottom = (window.innerHeight || document.documentElement.clientHeight) + b;
        f.right = (window.innerWidth || document.documentElement.clientWidth) + b
    }
    function n(b, c, a) {
        b.attachEvent ? b.attachEvent && b.attachEvent("on" + c, a) : b.addEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }
    function k(b, c, a) {
        b.detachEvent ? b.detachEvent && b.detachEvent("on" + c, a) : b.removeEventListener(c, a, {
            capture: !1,
            passive: !0
        })
    }
    function l(b, c) {
        if (b && c)
            for (var a = b.length, d = 0; d < a && !1 !== c(b[d], d); d++)
                ;
    }
    function D(b, c, a) {
        var d = 0;
        return function() {
            var e = +new Date;
            e - d < c || (d = e,
            b.apply(a, arguments))
        }
    }
    var u, f, A, y;
    return function(b) {
        if (!document.querySelectorAll) {
            var c = document.createStyleSheet();
            document.querySelectorAll = function(a, b, d, h, f) {
                f = document.all;
                b = [];
                a = a.replace(/\[for\b/gi, "[htmlFor").split(",");
                for (d = a.length; d--; ) {
                    c.addRule(a[d], "k:v");
                    for (h = f.length; h--; )
                        f[h].currentStyle.k && b.push(f[h]);
                    c.removeRule(0)
                }
                return b
            }
        }
        var a = this
          , d = a._util = {};
        d.elements = [];
        d.destroyed = !0;
        a.options = b || {};
        a.options.error = a.options.error || !1;
        a.options.offset = a.options.offset || 100;
        a.options.root = a.options.root || document;
        a.options.success = a.options.success || !1;
        a.options.selector = a.options.selector || ".b-lazy";
        a.options.separator = a.options.separator || "|";
        a.options.containerClass = a.options.container;
        a.options.container = a.options.containerClass ? document.querySelectorAll(a.options.containerClass) : !1;
        a.options.errorClass = a.options.errorClass || "b-error";
        a.options.breakpoints = a.options.breakpoints || !1;
        a.options.loadInvisible = a.options.loadInvisible || !1;
        a.options.successClass = a.options.successClass || "b-loaded";
        a.options.validateDelay = a.options.validateDelay || 25;
        a.options.saveViewportOffsetDelay = a.options.saveViewportOffsetDelay || 50;
        a.options.srcset = a.options.srcset || "data-srcset";
        a.options.src = u = a.options.src || "data-src";
        y = Element.prototype.closest;
        A = 1 < window.devicePixelRatio;
        f = {};
        f.top = 0 - a.options.offset;
        f.left = 0 - a.options.offset;
        a.revalidate = function() {
            q(a)
        }
        ;
        a.load = function(a, b) {
            var c = this.options;
            void 0 === a.length ? z(a, b, c) : l(a, function(a) {
                z(a, b, c)
            })
        }
        ;
        a.destroy = function() {
            var a = this._util;
            this.options.container && l(this.options.container, function(b) {
                k(b, "scroll", a.validateT)
            });
            k(window, "scroll", a.validateT);
            k(window, "resize", a.validateT);
            k(window, "resize", a.saveViewportOffsetT);
            a.count = 0;
            a.elements.length = 0;
            a.destroyed = !0
        }
        ;
        d.validateT = D(function() {
            m(a)
        }, a.options.validateDelay, a);
        d.saveViewportOffsetT = D(function() {
            C(a.options.offset)
        }, a.options.saveViewportOffsetDelay, a);
        C(a.options.offset);
        l(a.options.breakpoints, function(a) {
            if (a.width >= window.screen.width)
                return u = a.src,
                !1
        });
        setTimeout(function() {
            q(a)
        })
    }
});
;/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!function(t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function(t, e) {
    "use strict";
    function i(i, o, a) {
        function l(t, e, n) {
            var s, o = "$()." + i + '("' + e + '")';
            return t.each(function(t, l) {
                var h = a.data(l, i);
                if (!h)
                    return void r(i + " not initialized. Cannot call methods, i.e. " + o);
                var c = h[e];
                if (!c || "_" == e.charAt(0))
                    return void r(o + " is not a valid method");
                var d = c.apply(h, n);
                s = void 0 === s ? d : s
            }),
            void 0 !== s ? s : t
        }
        function h(t, e) {
            t.each(function(t, n) {
                var s = a.data(n, i);
                s ? (s.option(e),
                s._init()) : (s = new o(n,e),
                a.data(n, i, s))
            })
        }
        a = a || e || t.jQuery,
        a && (o.prototype.option || (o.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[i] = function(t) {
            if ("string" == typeof t) {
                var e = s.call(arguments, 1);
                return l(this, t, e)
            }
            return h(this, t),
            this
        }
        ,
        n(a))
    }
    function n(t) {
        !t || t && t.bridget || (t.bridget = i)
    }
    var s = Array.prototype.slice
      , o = t.console
      , r = "undefined" == typeof o ? function() {}
    : function(t) {
        o.error(t)
    }
    ;
    return n(e || t.jQuery),
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {}
              , n = i[t] = i[t] || [];
            return n.indexOf(e) == -1 && n.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}
              , n = i[t] = i[t] || {};
            return n[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return n != -1 && i.splice(n, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0),
            e = e || [];
            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                var o = i[s]
                  , r = n && n[o];
                r && (this.off(t, o),
                delete n[o]),
                o.apply(this, e)
            }
            return this
        }
    }
    ,
    e.allOff = function() {
        delete this._events,
        delete this._onceEvents
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t)
          , i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }
    function e() {}
    function i() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < h; e++) {
            var i = l[e];
            t[i] = 0
        }
        return t
    }
    function n(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        e
    }
    function s() {
        if (!c) {
            c = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var s = n(e);
            r = 200 == Math.round(t(s.width)),
            o.isBoxSizeOuter = r,
            i.removeChild(e)
        }
    }
    function o(e) {
        if (s(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var o = n(e);
            if ("none" == o.display)
                return i();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; d < h; d++) {
                var u = l[d]
                  , f = o[u]
                  , p = parseFloat(f);
                a[u] = isNaN(p) ? 0 : p
            }
            var g = a.paddingLeft + a.paddingRight
              , v = a.paddingTop + a.paddingBottom
              , m = a.marginLeft + a.marginRight
              , y = a.marginTop + a.marginBottom
              , b = a.borderLeftWidth + a.borderRightWidth
              , E = a.borderTopWidth + a.borderBottomWidth
              , S = c && r
              , C = t(o.width);
            C !== !1 && (a.width = C + (S ? 0 : g + b));
            var x = t(o.height);
            return x !== !1 && (a.height = x + (S ? 0 : v + E)),
            a.innerWidth = a.width - (g + b),
            a.innerHeight = a.height - (v + E),
            a.outerWidth = a.width + m,
            a.outerHeight = a.height + y,
            a
        }
    }
    var r, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], h = l.length, c = !1;
    return o
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
    "use strict";
    var t = function() {
        var t = window.Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var n = e[i]
              , s = n + "MatchesSelector";
            if (t[s])
                return s
        }
    }();
    return function(e, i) {
        return e[t](i)
    }
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function(t, e) {
    var i = {};
    i.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    i.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var n = Array.prototype.slice;
    i.makeArray = function(t) {
        if (Array.isArray(t))
            return t;
        if (null === t || void 0 === t)
            return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? n.call(t) : [t]
    }
    ,
    i.removeFrom = function(t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }
    ,
    i.getParent = function(t, i) {
        for (; t.parentNode && t != document.body; )
            if (t = t.parentNode,
            e(t, i))
                return t
    }
    ,
    i.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    i.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    i.filterFindElements = function(t, n) {
        t = i.makeArray(t);
        var s = [];
        return t.forEach(function(t) {
            if (t instanceof HTMLElement) {
                if (!n)
                    return void s.push(t);
                e(t, n) && s.push(t);
                for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                    s.push(i[o])
            }
        }),
        s
    }
    ,
    i.debounceMethod = function(t, e, i) {
        i = i || 100;
        var n = t.prototype[e]
          , s = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[s];
            clearTimeout(t);
            var e = arguments
              , o = this;
            this[s] = setTimeout(function() {
                n.apply(o, e),
                delete o[s]
            }, i)
        }
    }
    ,
    i.docReady = function(t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }
    ,
    i.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var s = t.console;
    return i.htmlInit = function(e, n) {
        i.docReady(function() {
            var o = i.toDashed(n)
              , r = "data-" + o
              , a = document.querySelectorAll("[" + r + "]")
              , l = document.querySelectorAll(".js-" + o)
              , h = i.makeArray(a).concat(i.makeArray(l))
              , c = r + "-options"
              , d = t.jQuery;
            h.forEach(function(t) {
                var i, o = t.getAttribute(r) || t.getAttribute(c);
                try {
                    i = o && JSON.parse(o)
                } catch (a) {
                    return void (s && s.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var l = new e(t,i);
                d && d.data(t, n, l)
            })
        })
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {},
    t.Flickity.Cell = e(t, t.getSize))
}(window, function(t, e) {
    function i(t, e) {
        this.element = t,
        this.parent = e,
        this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute",
        this.x = 0,
        this.shift = 0
    }
    ,
    n.destroy = function() {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = ""
    }
    ,
    n.getSize = function() {
        this.size = e(this.element)
    }
    ,
    n.setPosition = function(t) {
        this.x = t,
        this.updateTarget(),
        this.renderPosition(t)
    }
    ,
    n.updateTarget = n.setDefaultTarget = function() {
        var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
    }
    ,
    n.renderPosition = function(t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t)
    }
    ,
    n.wrapShift = function(t) {
        this.shift = t,
        this.renderPosition(this.x + this.parent.slideableWidth * t)
    }
    ,
    n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", e) : "object" == typeof module && module.exports ? module.exports = e() : (t.Flickity = t.Flickity || {},
    t.Flickity.Slide = e())
}(window, function() {
    "use strict";
    function t(t) {
        this.parent = t,
        this.isOriginLeft = "left" == t.originSide,
        this.cells = [],
        this.outerWidth = 0,
        this.height = 0
    }
    var e = t.prototype;
    return e.addCell = function(t) {
        if (this.cells.push(t),
        this.outerWidth += t.size.outerWidth,
        this.height = Math.max(t.size.outerHeight, this.height),
        1 == this.cells.length) {
            this.x = t.x;
            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = t.size[e]
        }
    }
    ,
    e.updateTarget = function() {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft"
          , e = this.getLastCell()
          , i = e ? e.size[t] : 0
          , n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }
    ,
    e.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    e.select = function() {
        this.changeSelected(!0)
    }
    ,
    e.unselect = function() {
        this.changeSelected(!1)
    }
    ,
    e.changeSelected = function(t) {
        var e = t ? "add" : "remove";
        this.cells.forEach(function(i) {
            i.element.classList[e]("is-selected")
        })
    }
    ,
    e.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {},
    t.Flickity.animatePrototype = e(t, t.fizzyUIUtils))
}(window, function(t, e) {
    var i = {};
    return i.startAnimation = function() {
        this.isAnimating || (this.isAnimating = !0,
        this.restingFrames = 0,
        this.animate())
    }
    ,
    i.animate = function() {
        this.applyDragForce(),
        this.applySelectedAttraction();
        var t = this.x;
        if (this.integratePhysics(),
        this.positionSlider(),
        this.settle(t),
        this.isAnimating) {
            var e = this;
            requestAnimationFrame(function() {
                e.animate()
            })
        }
    }
    ,
    i.positionSlider = function() {
        var t = this.x;
        this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth),
        t -= this.slideableWidth,
        this.shiftWrapCells(t)),
        t += this.cursorPosition,
        t = this.options.rightToLeft ? -t : t;
        var i = this.getPositionValue(t);
        this.slider.style.transform = this.isAnimating ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
            var s = -this.x - n.target
              , o = s / this.slidesWidth;
            this.dispatchEvent("scroll", null, [o, s])
        }
    }
    ,
    i.positionSliderAtSelected = function() {
        this.cells.length && (this.x = -this.selectedSlide.target,
        this.velocity = 0,
        this.positionSlider())
    }
    ,
    i.getPositionValue = function(t) {
        return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
    }
    ,
    i.settle = function(t) {
        this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++,
        this.restingFrames > 2 && (this.isAnimating = !1,
        delete this.isFreeScrolling,
        this.positionSlider(),
        this.dispatchEvent("settle", null, [this.selectedIndex]))
    }
    ,
    i.shiftWrapCells = function(t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1)
    }
    ,
    i._shiftCells = function(t, e, i) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n]
              , o = e > 0 ? i : 0;
            s.wrapShift(o),
            e -= s.size.outerWidth
        }
    }
    ,
    i._unshiftCells = function(t) {
        if (t && t.length)
            for (var e = 0; e < t.length; e++)
                t[e].wrapShift(0)
    }
    ,
    i.integratePhysics = function() {
        this.x += this.velocity,
        this.velocity *= this.getFrictionFactor()
    }
    ,
    i.applyForce = function(t) {
        this.velocity += t
    }
    ,
    i.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
    }
    ,
    i.getRestingPosition = function() {
        return this.x + this.velocity / (1 - this.getFrictionFactor())
    }
    ,
    i.applyDragForce = function() {
        if (this.isDraggable && this.isPointerDown) {
            var t = this.dragX - this.x
              , e = t - this.velocity;
            this.applyForce(e)
        }
    }
    ,
    i.applySelectedAttraction = function() {
        var t = this.isDraggable && this.isPointerDown;
        if (!t && !this.isFreeScrolling && this.slides.length) {
            var e = this.selectedSlide.target * -1 - this.x
              , i = e * this.options.selectedAttraction;
            this.applyForce(i)
        }
    }
    ,
    i
}),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(i, n, s, o, r, a) {
            return e(t, i, n, s, o, r, a)
        });
    else if ("object" == typeof module && module.exports)
        module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var i = t.Flickity;
        t.Flickity = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, i.Cell, i.Slide, i.animatePrototype)
    }
}(window, function(t, e, i, n, s, o, r) {
    function a(t, e) {
        for (t = n.makeArray(t); t.length; )
            e.appendChild(t.shift())
    }
    function l(t, e) {
        var i = n.getQueryElement(t);
        if (!i)
            return void (d && d.error("Bad element for Flickity: " + (i || t)));
        if (this.element = i,
        this.element.flickityGUID) {
            var s = f[this.element.flickityGUID];
            return s.option(e),
            s
        }
        h && (this.$element = h(this.element)),
        this.options = n.extend({}, this.constructor.defaults),
        this.option(e),
        this._create()
    }
    var h = t.jQuery
      , c = t.getComputedStyle
      , d = t.console
      , u = 0
      , f = {};
    l.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    },
    l.createMethods = [];
    var p = l.prototype;
    n.extend(p, e.prototype),
    p._create = function() {
        var e = this.guid = ++u;
        this.element.flickityGUID = e,
        f[e] = this,
        this.selectedIndex = 0,
        this.restingFrames = 0,
        this.x = 0,
        this.velocity = 0,
        this.originSide = this.options.rightToLeft ? "right" : "left",
        this.viewport = document.createElement("div"),
        this.viewport.className = "flickity-viewport",
        this._createSlider(),
        (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this);
        for (var i in this.options.on) {
            var n = this.options.on[i];
            this.on(i, n)
        }
        l.createMethods.forEach(function(t) {
            this[t]()
        }, this),
        this.options.watchCSS ? this.watchCSS() : this.activate()
    }
    ,
    p.option = function(t) {
        n.extend(this.options, t)
    }
    ,
    p.activate = function() {
        if (!this.isActive) {
            this.isActive = !0,
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft && this.element.classList.add("flickity-rtl"),
            this.getSize();
            var t = this._filterFindCellElements(this.element.children);
            a(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility && (this.element.tabIndex = 0,
            this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
            var e, i = this.options.initialIndex;
            e = this.isInitActivated ? this.selectedIndex : void 0 !== i && this.cells[i] ? i : 0,
            this.select(e, !1, !0),
            this.isInitActivated = !0,
            this.dispatchEvent("ready")
        }
    }
    ,
    p._createSlider = function() {
        var t = document.createElement("div");
        t.className = "flickity-slider",
        t.style[this.originSide] = 0,
        this.slider = t
    }
    ,
    p._filterFindCellElements = function(t) {
        return n.filterFindElements(t, this.options.cellSelector)
    }
    ,
    p.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children),
        this.positionCells(),
        this._getWrapShiftCells(),
        this.setGallerySize()
    }
    ,
    p._makeCells = function(t) {
        var e = this._filterFindCellElements(t)
          , i = e.map(function(t) {
            return new s(t,this)
        }, this);
        return i
    }
    ,
    p.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }
    ,
    p.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }
    ,
    p.positionCells = function() {
        this._sizeCells(this.cells),
        this._positionCells(0)
    }
    ,
    p._positionCells = function(t) {
        t = t || 0,
        this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
        var e = 0;
        if (t > 0) {
            var i = this.cells[t - 1];
            e = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, s = t; s < n; s++) {
            var o = this.cells[s];
            o.setPosition(e),
            e += o.size.outerWidth,
            this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = e,
        this.updateSlides(),
        this._containSlides(),
        this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }
    ,
    p._sizeCells = function(t) {
        t.forEach(function(t) {
            t.getSize()
        })
    }
    ,
    p.updateSlides = function() {
        if (this.slides = [],
        this.cells.length) {
            var t = new o(this);
            this.slides.push(t);
            var e = "left" == this.originSide
              , i = e ? "marginRight" : "marginLeft"
              , n = this._getCanCellFit();
            this.cells.forEach(function(e, s) {
                if (!t.cells.length)
                    return void t.addCell(e);
                var r = t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
                n.call(this, s, r) ? t.addCell(e) : (t.updateTarget(),
                t = new o(this),
                this.slides.push(t),
                t.addCell(e))
            }, this),
            t.updateTarget(),
            this.updateSelectedSlide()
        }
    }
    ,
    p._getCanCellFit = function() {
        var t = this.options.groupCells;
        if (!t)
            return function() {
                return !1
            }
            ;
        if ("number" == typeof t) {
            var e = parseInt(t, 10);
            return function(t) {
                return t % e !== 0
            }
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/)
          , n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(t, e) {
            return e <= (this.size.innerWidth + 1) * n
        }
    }
    ,
    p._init = p.reposition = function() {
        this.positionCells(),
        this.positionSliderAtSelected()
    }
    ,
    p.getSize = function() {
        this.size = i(this.element),
        this.setCellAlign(),
        this.cursorPosition = this.size.innerWidth * this.cellAlign
    }
    ;
    var g = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return p.setCellAlign = function() {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
    }
    ,
    p.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = t + "px"
        }
    }
    ,
    p._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
            var t = this.cursorPosition
              , e = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(t, e, -1),
            t = this.size.innerWidth - this.cursorPosition,
            this.afterShiftCells = this._getGapCells(t, 0, 1)
        }
    }
    ,
    p._getGapCells = function(t, e, i) {
        for (var n = []; t > 0; ) {
            var s = this.cells[e];
            if (!s)
                break;
            n.push(s),
            e += i,
            t -= s.size.outerWidth
        }
        return n
    }
    ,
    p._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var t = this.options.rightToLeft
              , e = t ? "marginRight" : "marginLeft"
              , i = t ? "marginLeft" : "marginRight"
              , n = this.slideableWidth - this.getLastCell().size[i]
              , s = n < this.size.innerWidth
              , o = this.cursorPosition + this.cells[0].size[e]
              , r = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(t) {
                s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o),
                t.target = Math.min(t.target, r))
            }, this)
        }
    }
    ,
    p.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        h && this.$element) {
            t += this.options.namespaceJQueryEvents ? ".flickity" : "";
            var s = t;
            if (e) {
                var o = h.Event(e);
                o.type = t,
                s = o
            }
            this.$element.trigger(s, i)
        }
    }
    ,
    p.select = function(t, e, i) {
        if (this.isActive && (t = parseInt(t, 10),
        this._wrapSelect(t),
        (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)),
        this.slides[t])) {
            var s = this.selectedIndex;
            this.selectedIndex = t,
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t != s && this.dispatchEvent("change", null, [t]),
            this.dispatchEvent("cellSelect")
        }
    }
    ,
    p._wrapSelect = function(t) {
        var e = this.slides.length
          , i = this.options.wrapAround && e > 1;
        if (!i)
            return t;
        var s = n.modulo(t, e)
          , o = Math.abs(s - this.selectedIndex)
          , r = Math.abs(s + e - this.selectedIndex)
          , a = Math.abs(s - e - this.selectedIndex);
        !this.isDragSelect && r < o ? t += e : !this.isDragSelect && a < o && (t -= e),
        t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
    }
    ,
    p.previous = function(t, e) {
        this.select(this.selectedIndex - 1, t, e)
    }
    ,
    p.next = function(t, e) {
        this.select(this.selectedIndex + 1, t, e)
    }
    ,
    p.updateSelectedSlide = function() {
        var t = this.slides[this.selectedIndex];
        t && (this.unselectSelectedSlide(),
        this.selectedSlide = t,
        t.select(),
        this.selectedCells = t.cells,
        this.selectedElements = t.getCellElements(),
        this.selectedCell = t.cells[0],
        this.selectedElement = this.selectedElements[0])
    }
    ,
    p.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }
    ,
    p.selectCell = function(t, e, i) {
        var n = this.queryCell(t);
        if (n) {
            var s = this.getCellSlideIndex(n);
            this.select(s, e, i)
        }
    }
    ,
    p.getCellSlideIndex = function(t) {
        for (var e = 0; e < this.slides.length; e++) {
            var i = this.slides[e]
              , n = i.cells.indexOf(t);
            if (n != -1)
                return e
        }
    }
    ,
    p.getCell = function(t) {
        for (var e = 0; e < this.cells.length; e++) {
            var i = this.cells[e];
            if (i.element == t)
                return i
        }
    }
    ,
    p.getCells = function(t) {
        t = n.makeArray(t);
        var e = [];
        return t.forEach(function(t) {
            var i = this.getCell(t);
            i && e.push(i)
        }, this),
        e
    }
    ,
    p.getCellElements = function() {
        return this.cells.map(function(t) {
            return t.element
        })
    }
    ,
    p.getParentCell = function(t) {
        var e = this.getCell(t);
        return e ? e : (t = n.getParent(t, ".flickity-slider > *"),
        this.getCell(t))
    }
    ,
    p.getAdjacentCellElements = function(t, e) {
        if (!t)
            return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i)
            return this.getCellElements();
        for (var s = [], o = e - t; o <= e + t; o++) {
            var r = this.options.wrapAround ? n.modulo(o, i) : o
              , a = this.slides[r];
            a && (s = s.concat(a.getCellElements()))
        }
        return s
    }
    ,
    p.queryCell = function(t) {
        return "number" == typeof t ? this.cells[t] : ("string" == typeof t && (t = this.element.querySelector(t)),
        this.getCell(t))
    }
    ,
    p.uiChange = function() {
        this.emitEvent("uiChange")
    }
    ,
    p.childUIPointerDown = function(t) {
        this.emitEvent("childUIPointerDown", [t])
    }
    ,
    p.onresize = function() {
        this.watchCSS(),
        this.resize()
    }
    ,
    n.debounceMethod(l, "onresize", 150),
    p.resize = function() {
        if (this.isActive) {
            this.getSize(),
            this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
            var t = this.selectedElements && this.selectedElements[0];
            this.selectCell(t, !1, !0)
        }
    }
    ,
    p.watchCSS = function() {
        var t = this.options.watchCSS;
        if (t) {
            var e = c(this.element, ":after").content;
            e.indexOf("flickity") != -1 ? this.activate() : this.deactivate()
        }
    }
    ,
    p.onkeydown = function(t) {
        var e = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !e) {
            var i = l.keyboardHandlers[t.keyCode];
            i && i.call(this)
        }
    }
    ,
    l.keyboardHandlers = {
        37: function() {
            var t = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(),
            this[t]()
        },
        39: function() {
            var t = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(),
            this[t]()
        }
    },
    p.focus = function() {
        var e = t.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }),
        t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
    }
    ,
    p.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"),
        this.element.classList.remove("flickity-rtl"),
        this.unselectSelectedSlide(),
        this.cells.forEach(function(t) {
            t.destroy()
        }),
        this.element.removeChild(this.viewport),
        a(this.slider.children, this.element),
        this.options.accessibility && (this.element.removeAttribute("tabIndex"),
        this.element.removeEventListener("keydown", this)),
        this.isActive = !1,
        this.emitEvent("deactivate"))
    }
    ,
    p.destroy = function() {
        this.deactivate(),
        t.removeEventListener("resize", this),
        this.emitEvent("destroy"),
        h && this.$element && h.removeData(this.element, "flickity"),
        delete this.element.flickityGUID,
        delete f[this.guid]
    }
    ,
    n.extend(p, r),
    l.data = function(t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && f[e]
    }
    ,
    n.htmlInit(l, "flickity"),
    h && h.bridget && h.bridget("flickity", l),
    l.setJQuery = function(t) {
        h = t
    }
    ,
    l.Cell = s,
    l
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.Unipointer = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i() {}
    function n() {}
    var s = n.prototype = Object.create(e.prototype);
    s.bindStartEvent = function(t) {
        this._bindStartEvent(t, !0)
    }
    ,
    s.unbindStartEvent = function(t) {
        this._bindStartEvent(t, !1)
    }
    ,
    s._bindStartEvent = function(e, i) {
        i = void 0 === i || i;
        var n = i ? "addEventListener" : "removeEventListener"
          , s = "mousedown";
        t.PointerEvent ? s = "pointerdown" : "ontouchstart"in t && (s = "touchstart"),
        e[n](s, this)
    }
    ,
    s.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.getTouch = function(t) {
        for (var e = 0; e < t.length; e++) {
            var i = t[e];
            if (i.identifier == this.pointerIdentifier)
                return i
        }
    }
    ,
    s.onmousedown = function(t) {
        var e = t.button;
        e && 0 !== e && 1 !== e || this._pointerDown(t, t)
    }
    ,
    s.ontouchstart = function(t) {
        this._pointerDown(t, t.changedTouches[0])
    }
    ,
    s.onpointerdown = function(t) {
        this._pointerDown(t, t)
    }
    ,
    s._pointerDown = function(t, e) {
        t.button || this.isPointerDown || (this.isPointerDown = !0,
        this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier,
        this.pointerDown(t, e))
    }
    ,
    s.pointerDown = function(t, e) {
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e])
    }
    ;
    var o = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return s._bindPostStartEvents = function(e) {
        if (e) {
            var i = o[e.type];
            i.forEach(function(e) {
                t.addEventListener(e, this)
            }, this),
            this._boundPointerEvents = i
        }
    }
    ,
    s._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            t.removeEventListener(e, this)
        }, this),
        delete this._boundPointerEvents)
    }
    ,
    s.onmousemove = function(t) {
        this._pointerMove(t, t)
    }
    ,
    s.onpointermove = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
    }
    ,
    s.ontouchmove = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e)
    }
    ,
    s._pointerMove = function(t, e) {
        this.pointerMove(t, e)
    }
    ,
    s.pointerMove = function(t, e) {
        this.emitEvent("pointerMove", [t, e])
    }
    ,
    s.onmouseup = function(t) {
        this._pointerUp(t, t)
    }
    ,
    s.onpointerup = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
    }
    ,
    s.ontouchend = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e)
    }
    ,
    s._pointerUp = function(t, e) {
        this._pointerDone(),
        this.pointerUp(t, e)
    }
    ,
    s.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e])
    }
    ,
    s._pointerDone = function() {
        this._pointerReset(),
        this._unbindPostStartEvents(),
        this.pointerDone()
    }
    ,
    s._pointerReset = function() {
        this.isPointerDown = !1,
        delete this.pointerIdentifier
    }
    ,
    s.pointerDone = i,
    s.onpointercancel = function(t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
    }
    ,
    s.ontouchcancel = function(t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e)
    }
    ,
    s._pointerCancel = function(t, e) {
        this._pointerDone(),
        this.pointerCancel(t, e)
    }
    ,
    s.pointerCancel = function(t, e) {
        this.emitEvent("pointerCancel", [t, e])
    }
    ,
    n.getPointerPoint = function(t) {
        return {
            x: t.pageX,
            y: t.pageY
        }
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.Unidragger = e(t, t.Unipointer)
}(window, function(t, e) {
    function i() {}
    var n = i.prototype = Object.create(e.prototype);
    n.bindHandles = function() {
        this._bindHandles(!0)
    }
    ,
    n.unbindHandles = function() {
        this._bindHandles(!1)
    }
    ,
    n._bindHandles = function(e) {
        e = void 0 === e || e;
        for (var i = e ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", s = 0; s < this.handles.length; s++) {
            var o = this.handles[s];
            this._bindStartEvent(o, e),
            o[i]("click", this),
            t.PointerEvent && (o.style.touchAction = n)
        }
    }
    ,
    n._touchActionValue = "none",
    n.pointerDown = function(t, e) {
        var i = this.okayPointerDown(t);
        i && (this.pointerDownPointer = e,
        t.preventDefault(),
        this.pointerDownBlur(),
        this._bindPostStartEvents(t),
        this.emitEvent("pointerDown", [t, e]))
    }
    ;
    var s = {
        TEXTAREA: !0,
        INPUT: !0,
        SELECT: !0,
        OPTION: !0
    }
      , o = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0
    };
    return n.okayPointerDown = function(t) {
        var e = s[t.target.nodeName]
          , i = o[t.target.type]
          , n = !e || i;
        return n || this._pointerReset(),
        n
    }
    ,
    n.pointerDownBlur = function() {
        var t = document.activeElement
          , e = t && t.blur && t != document.body;
        e && t.blur()
    }
    ,
    n.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]),
        this._dragMove(t, e, i)
    }
    ,
    n._dragPointerMove = function(t, e) {
        var i = {
            x: e.pageX - this.pointerDownPointer.pageX,
            y: e.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e),
        i
    }
    ,
    n.hasDragStarted = function(t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
    }
    ,
    n.pointerUp = function(t, e) {
        this.emitEvent("pointerUp", [t, e]),
        this._dragPointerUp(t, e)
    }
    ,
    n._dragPointerUp = function(t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
    }
    ,
    n._dragStart = function(t, e) {
        this.isDragging = !0,
        this.isPreventingClicks = !0,
        this.dragStart(t, e)
    }
    ,
    n.dragStart = function(t, e) {
        this.emitEvent("dragStart", [t, e])
    }
    ,
    n._dragMove = function(t, e, i) {
        this.isDragging && this.dragMove(t, e, i)
    }
    ,
    n.dragMove = function(t, e, i) {
        t.preventDefault(),
        this.emitEvent("dragMove", [t, e, i])
    }
    ,
    n._dragEnd = function(t, e) {
        this.isDragging = !1,
        setTimeout(function() {
            delete this.isPreventingClicks
        }
        .bind(this)),
        this.dragEnd(t, e)
    }
    ,
    n.dragEnd = function(t, e) {
        this.emitEvent("dragEnd", [t, e])
    }
    ,
    n.onclick = function(t) {
        this.isPreventingClicks && t.preventDefault()
    }
    ,
    n._staticClick = function(t, e) {
        this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e),
        "mouseup" != t.type && (this.isIgnoringMouseUp = !0,
        setTimeout(function() {
            delete this.isIgnoringMouseUp
        }
        .bind(this), 400)))
    }
    ,
    n.staticClick = function(t, e) {
        this.emitEvent("staticClick", [t, e])
    }
    ,
    i.getPointerPoint = e.getPointerPoint,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s() {
        return {
            x: t.pageXOffset,
            y: t.pageYOffset
        }
    }
    n.extend(e.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }),
    e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype),
    o._touchActionValue = "pan-y";
    var r = "createTouch"in document
      , a = !1;
    o._createDrag = function() {
        this.on("activate", this.onActivateDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.onDeactivateDrag),
        this.on("cellChange", this.updateDraggable),
        r && !a && (t.addEventListener("touchmove", function() {}),
        a = !0)
    }
    ,
    o.onActivateDrag = function() {
        this.handles = [this.viewport],
        this.bindHandles(),
        this.updateDraggable()
    }
    ,
    o.onDeactivateDrag = function() {
        this.unbindHandles(),
        this.element.classList.remove("is-draggable")
    }
    ,
    o.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable,
        this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }
    ,
    o.bindDrag = function() {
        this.options.draggable = !0,
        this.updateDraggable()
    }
    ,
    o.unbindDrag = function() {
        this.options.draggable = !1,
        this.updateDraggable()
    }
    ,
    o._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }
    ,
    o._childUIPointerDownDrag = function(t) {
        t.preventDefault(),
        this.pointerDownFocus(t)
    }
    ,
    o.pointerDown = function(e, i) {
        if (!this.isDraggable)
            return void this._pointerDownDefault(e, i);
        var n = this.okayPointerDown(e);
        n && (this._pointerDownPreventDefault(e),
        this.pointerDownFocus(e),
        document.activeElement != this.element && this.pointerDownBlur(),
        this.dragX = this.x,
        this.viewport.classList.add("is-pointer-down"),
        this.pointerDownScroll = s(),
        t.addEventListener("scroll", this),
        this._pointerDownDefault(e, i))
    }
    ,
    o._pointerDownDefault = function(t, e) {
        this.pointerDownPointer = e,
        this._bindPostStartEvents(t),
        this.dispatchEvent("pointerDown", t, [e])
    }
    ;
    var l = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };
    return o.pointerDownFocus = function(t) {
        var e = l[t.target.nodeName];
        e || this.focus()
    }
    ,
    o._pointerDownPreventDefault = function(t) {
        var e = "touchstart" == t.type
          , i = "touch" == t.pointerType
          , n = l[t.target.nodeName];
        e || i || n || t.preventDefault()
    }
    ,
    o.hasDragStarted = function(t) {
        return Math.abs(t.x) > this.options.dragThreshold
    }
    ,
    o.pointerUp = function(t, e) {
        delete this.isTouchScrolling,
        this.viewport.classList.remove("is-pointer-down"),
        this.dispatchEvent("pointerUp", t, [e]),
        this._dragPointerUp(t, e)
    }
    ,
    o.pointerDone = function() {
        t.removeEventListener("scroll", this),
        delete this.pointerDownScroll
    }
    ,
    o.dragStart = function(e, i) {
        this.isDraggable && (this.dragStartPosition = this.x,
        this.startAnimation(),
        t.removeEventListener("scroll", this),
        this.dispatchEvent("dragStart", e, [i]))
    }
    ,
    o.pointerMove = function(t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]),
        this._dragMove(t, e, i)
    }
    ,
    o.dragMove = function(t, e, i) {
        if (this.isDraggable) {
            t.preventDefault(),
            this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var s = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                s = s > o ? .5 * (s + o) : s;
                var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                s = s < r ? .5 * (s + r) : s
            }
            this.dragX = s,
            this.dragMoveTime = new Date,
            this.dispatchEvent("dragMove", t, [e, i])
        }
    }
    ,
    o.dragEnd = function(t, e) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else
                this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX,
            this.isDragSelect = this.options.wrapAround,
            this.select(i),
            delete this.isDragSelect,
            this.dispatchEvent("dragEnd", t, [e])
        }
    }
    ,
    o.dragEndRestingSelect = function() {
        var t = this.getRestingPosition()
          , e = Math.abs(this.getSlideDistance(-t, this.selectedIndex))
          , i = this._getClosestResting(t, e, 1)
          , n = this._getClosestResting(t, e, -1)
          , s = i.distance < n.distance ? i.index : n.index;
        return s
    }
    ,
    o._getClosestResting = function(t, e, i) {
        for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
            return t <= e
        }
        : function(t, e) {
            return t < e
        }
        ; o(e, s) && (n += i,
        s = e,
        e = this.getSlideDistance(-t, n),
        null !== e); )
            e = Math.abs(e);
        return {
            distance: s,
            index: n - i
        }
    }
    ,
    o.getSlideDistance = function(t, e) {
        var i = this.slides.length
          , s = this.options.wrapAround && i > 1
          , o = s ? n.modulo(e, i) : e
          , r = this.slides[o];
        if (!r)
            return null;
        var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (r.target + a)
    }
    ,
    o.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100)
            return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex)
          , e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
    }
    ,
    o.staticClick = function(t, e) {
        var i = this.getParentCell(t.target)
          , n = i && i.element
          , s = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, s])
    }
    ,
    o.onscroll = function() {
        var t = s()
          , e = this.pointerDownScroll.x - t.x
          , i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
}(window, function(t, e) {
    function i(t) {
        this.bindTap(t)
    }
    var n = i.prototype = Object.create(e.prototype);
    return n.bindTap = function(t) {
        t && (this.unbindTap(),
        this.tapElement = t,
        this._bindStartEvent(t, !0))
    }
    ,
    n.unbindTap = function() {
        this.tapElement && (this._bindStartEvent(this.tapElement, !0),
        delete this.tapElement)
    }
    ,
    n.pointerUp = function(i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
            var s = e.getPointerPoint(n)
              , o = this.tapElement.getBoundingClientRect()
              , r = t.pageXOffset
              , a = t.pageYOffset
              , l = s.x >= o.left + r && s.x <= o.right + r && s.y >= o.top + a && s.y <= o.bottom + a;
            if (l && this.emitEvent("tap", [i, n]),
            "mouseup" != i.type) {
                this.isIgnoringMouseUp = !0;
                var h = this;
                setTimeout(function() {
                    delete h.isIgnoringMouseUp
                }, 400)
            }
        }
    }
    ,
    n.destroy = function() {
        this.pointerDone(),
        this.unbindTap()
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    "use strict";
    function s(t, e) {
        this.direction = t,
        this.parent = e,
        this._create()
    }
    function o(t) {
        return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
    }
    var r = "http://www.w3.org/2000/svg";
    s.prototype = Object.create(i.prototype),
    s.prototype._create = function() {
        this.isEnabled = !0,
        this.isPrevious = this.direction == -1;
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = this.element = document.createElement("button");
        e.className = "flickity-button flickity-prev-next-button",
        e.className += this.isPrevious ? " previous" : " next",
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        e.appendChild(i),
        this.on("tap", this.onTap),
        this.parent.on("select", this.update.bind(this)),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.bindTap(this.element),
        this.element.addEventListener("click", this),
        this.parent.element.appendChild(this.element)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element),
        i.prototype.destroy.call(this),
        this.element.removeEventListener("click", this)
    }
    ,
    s.prototype.createSVG = function() {
        var t = document.createElementNS(r, "svg");
        t.setAttribute("class", "flickity-button-icon"),
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(r, "path")
          , i = o(this.parent.options.arrowShape);
        return e.setAttribute("d", i),
        e.setAttribute("class", "arrow"),
        this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "),
        t.appendChild(e),
        t
    }
    ,
    s.prototype.onTap = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var t = this.isPrevious ? "previous" : "next";
            this.parent[t]()
        }
    }
    ,
    s.prototype.handleEvent = n.handleEvent,
    s.prototype.onclick = function(t) {
        var e = document.activeElement;
        e && e == this.element && this.onTap(t, t)
    }
    ,
    s.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1,
        this.isEnabled = !0)
    }
    ,
    s.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0,
        this.isEnabled = !1)
    }
    ,
    s.prototype.update = function() {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
            return void this.enable();
        var e = t.length ? t.length - 1 : 0
          , i = this.isPrevious ? 0 : e
          , n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]()
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }),
    e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return a._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new s((-1),this),
        this.nextButton = new s(1,this),
        this.on("activate", this.activatePrevNextButtons))
    }
    ,
    a.activatePrevNextButtons = function() {
        this.prevButton.activate(),
        this.nextButton.activate(),
        this.on("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    a.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(),
        this.nextButton.deactivate(),
        this.off("deactivate", this.deactivatePrevNextButtons)
    }
    ,
    e.PrevNextButton = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, s) {
        return e(t, i, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils)
}(window, function(t, e, i, n) {
    function s(t) {
        this.parent = t,
        this._create()
    }
    s.prototype = new i,
    s.prototype._create = function() {
        this.holder = document.createElement("ol"),
        this.holder.className = "flickity-page-dots",
        this.dots = [],
        this.on("tap", this.onTap),
        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }
    ,
    s.prototype.activate = function() {
        this.setDots(),
        this.bindTap(this.holder),
        this.parent.element.appendChild(this.holder)
    }
    ,
    s.prototype.deactivate = function() {
        this.parent.element.removeChild(this.holder),
        i.prototype.destroy.call(this)
    }
    ,
    s.prototype.setDots = function() {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
    }
    ,
    s.prototype.addDots = function(t) {
        for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
            var r = document.createElement("li");
            r.className = "dot",
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r)
        }
        this.holder.appendChild(e),
        this.dots = this.dots.concat(i)
    }
    ,
    s.prototype.removeDots = function(t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function(t) {
            this.holder.removeChild(t)
        }, this)
    }
    ,
    s.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot",
        this.selectedDot.removeAttribute("aria-current")),
        this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex],
        this.selectedDot.className = "dot is-selected",
        this.selectedDot.setAttribute("aria-current", "step"))
    }
    ,
    s.prototype.onTap = function(t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(e);
            this.parent.select(i)
        }
    }
    ,
    s.prototype.destroy = function() {
        this.deactivate()
    }
    ,
    e.PageDots = s,
    n.extend(e.defaults, {
        pageDots: !0
    }),
    e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return o._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new s(this),
        this.on("activate", this.activatePageDots),
        this.on("select", this.updateSelectedPageDots),
        this.on("cellChange", this.updatePageDots),
        this.on("resize", this.updatePageDots),
        this.on("deactivate", this.deactivatePageDots))
    }
    ,
    o.activatePageDots = function() {
        this.pageDots.activate()
    }
    ,
    o.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }
    ,
    o.updatePageDots = function() {
        this.pageDots.setDots()
    }
    ,
    o.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }
    ,
    e.PageDots = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(t, i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity)
}(window, function(t, e, i) {
    function n(t) {
        this.parent = t,
        this.state = "stopped",
        this.onVisibilityChange = this.visibilityChange.bind(this),
        this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }
    n.prototype = Object.create(t.prototype),
    n.prototype.play = function() {
        if ("playing" != this.state) {
            var t = document.hidden;
            if (t)
                return void document.addEventListener("visibilitychange", this.onVisibilityPlay);
            this.state = "playing",
            document.addEventListener("visibilitychange", this.onVisibilityChange),
            this.tick()
        }
    }
    ,
    n.prototype.tick = function() {
        if ("playing" == this.state) {
            var t = this.parent.options.autoPlay;
            t = "number" == typeof t ? t : 3e3;
            var e = this;
            this.clear(),
            this.timeout = setTimeout(function() {
                e.parent.next(!0),
                e.tick()
            }, t)
        }
    }
    ,
    n.prototype.stop = function() {
        this.state = "stopped",
        this.clear(),
        document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }
    ,
    n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }
    ,
    n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused",
        this.clear())
    }
    ,
    n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }
    ,
    n.prototype.visibilityChange = function() {
        var t = document.hidden;
        this[t ? "pause" : "unpause"]()
    }
    ,
    n.prototype.visibilityPlay = function() {
        this.play(),
        document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }
    ,
    e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }),
    i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return s._createPlayer = function() {
        this.player = new n(this),
        this.on("activate", this.activatePlayer),
        this.on("uiChange", this.stopPlayer),
        this.on("pointerDown", this.stopPlayer),
        this.on("deactivate", this.deactivatePlayer)
    }
    ,
    s.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(),
        this.element.addEventListener("mouseenter", this))
    }
    ,
    s.playPlayer = function() {
        this.player.play()
    }
    ,
    s.stopPlayer = function() {
        this.player.stop()
    }
    ,
    s.pausePlayer = function() {
        this.player.pause()
    }
    ,
    s.unpausePlayer = function() {
        this.player.unpause()
    }
    ,
    s.deactivatePlayer = function() {
        this.player.stop(),
        this.element.removeEventListener("mouseenter", this)
    }
    ,
    s.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(),
        this.element.addEventListener("mouseleave", this))
    }
    ,
    s.onmouseleave = function() {
        this.player.unpause(),
        this.element.removeEventListener("mouseleave", this)
    }
    ,
    i.Player = n,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    function n(t) {
        var e = document.createDocumentFragment();
        return t.forEach(function(t) {
            e.appendChild(t.element)
        }),
        e
    }
    var s = e.prototype;
    return s.insert = function(t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
            var s = this.cells.length;
            e = void 0 === e ? s : e;
            var o = n(i)
              , r = e == s;
            if (r)
                this.slider.appendChild(o);
            else {
                var a = this.cells[e].element;
                this.slider.insertBefore(o, a)
            }
            if (0 === e)
                this.cells = i.concat(this.cells);
            else if (r)
                this.cells = this.cells.concat(i);
            else {
                var l = this.cells.splice(e, s - e);
                this.cells = this.cells.concat(i).concat(l)
            }
            this._sizeCells(i),
            this.cellChange(e, !0)
        }
    }
    ,
    s.append = function(t) {
        this.insert(t, this.cells.length)
    }
    ,
    s.prepend = function(t) {
        this.insert(t, 0)
    }
    ,
    s.remove = function(t) {
        var e = this.getCells(t);
        if (e && e.length) {
            var n = this.cells.length - 1;
            e.forEach(function(t) {
                t.remove();
                var e = this.cells.indexOf(t);
                n = Math.min(e, n),
                i.removeFrom(this.cells, t)
            }, this),
            this.cellChange(n, !0)
        }
    }
    ,
    s.cellSizeChange = function(t) {
        var e = this.getCell(t);
        if (e) {
            e.getSize();
            var i = this.cells.indexOf(e);
            this.cellChange(i)
        }
    }
    ,
    s.cellChange = function(t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
        this._getWrapShiftCells(),
        this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)),
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex),
        this.emitEvent("cellChange", [t]),
        this.select(this.selectedIndex),
        e && this.positionSliderAtSelected()
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
}(window, function(t, e, i) {
    "use strict";
    function n(t) {
        if ("IMG" == t.nodeName) {
            var e = t.getAttribute("data-flickity-lazyload")
              , n = t.getAttribute("data-flickity-lazyload-src")
              , s = t.getAttribute("data-flickity-lazyload-srcset");
            if (e || n || s)
                return [t]
        }
        var o = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
          , r = t.querySelectorAll(o);
        return i.makeArray(r)
    }
    function s(t, e) {
        this.img = t,
        this.flickity = e,
        this.load()
    }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return o._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }
    ,
    o.lazyLoad = function() {
        var t = this.options.lazyLoad;
        if (t) {
            var e = "number" == typeof t ? t : 0
              , i = this.getAdjacentCellElements(e)
              , o = [];
            i.forEach(function(t) {
                var e = n(t);
                o = o.concat(e)
            }),
            o.forEach(function(t) {
                new s(t,this)
            }, this)
        }
    }
    ,
    s.prototype.handleEvent = i.handleEvent,
    s.prototype.load = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this);
        var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src")
          , e = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = t,
        e && this.img.setAttribute("srcset", e),
        this.img.removeAttribute("data-flickity-lazyload"),
        this.img.removeAttribute("data-flickity-lazyload-src"),
        this.img.removeAttribute("data-flickity-lazyload-srcset")
    }
    ,
    s.prototype.onload = function(t) {
        this.complete(t, "flickity-lazyloaded")
    }
    ,
    s.prototype.onerror = function(t) {
        this.complete(t, "flickity-lazyerror")
    }
    ,
    s.prototype.complete = function(t, e) {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img)
          , n = i && i.element;
        this.flickity.cellSizeChange(n),
        this.img.classList.add(e),
        this.flickity.dispatchEvent("lazyLoad", t, n)
    }
    ,
    e.LazyLoader = s,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof module && module.exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(t) {
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], e) : "object" == typeof module && module.exports ? module.exports = e(require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t.Flickity, t.fizzyUIUtils)
}(window, function(t, e) {
    function i(t, e, i) {
        return (e - t) * i + t
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return n._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor),
        this.on("deactivate", this.deactivateAsNavFor),
        this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
            var e = this;
            setTimeout(function() {
                e.setNavCompanion(t)
            })
        }
    }
    ,
    n.setNavCompanion = function(i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
            this.navCompanion = n;
            var s = this;
            this.onNavCompanionSelect = function() {
                s.navCompanionSelect()
            }
            ,
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0)
        }
    }
    ,
    n.navCompanionSelect = function(t) {
        if (this.navCompanion) {
            var e = this.navCompanion.selectedCells[0]
              , n = this.navCompanion.cells.indexOf(e)
              , s = n + this.navCompanion.selectedCells.length - 1
              , o = Math.floor(i(n, s, this.navCompanion.cellAlign));
            if (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length)) {
                var r = this.cells.slice(n, s + 1);
                this.navSelectedElements = r.map(function(t) {
                    return t.element
                }),
                this.changeNavSelectedClass("add")
            }
        }
    }
    ,
    n.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
            e.classList[t]("is-nav-selected")
        })
    }
    ,
    n.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }
    ,
    n.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"),
        delete this.navSelectedElements)
    }
    ,
    n.onNavStaticClick = function(t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }
    ,
    n.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }
    ,
    n.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect),
        this.off("staticClick", this.onNavStaticClick),
        delete this.navCompanion)
    }
    ,
    t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    function n(t) {
        if (Array.isArray(t))
            return t;
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? h.call(t) : [t]
    }
    function s(t, e, o) {
        if (!(this instanceof s))
            return new s(t,e,o);
        var r = t;
        return "string" == typeof t && (r = document.querySelectorAll(t)),
        r ? (this.elements = n(r),
        this.options = i({}, this.options),
        "function" == typeof e ? o = e : i(this.options, e),
        o && this.on("always", o),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred),
        void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (r || t))
    }
    function o(t) {
        this.img = t
    }
    function r(t, e) {
        this.url = t,
        this.element = e,
        this.img = new Image
    }
    var a = t.jQuery
      , l = t.console
      , h = Array.prototype.slice;
    s.prototype = Object.create(e.prototype),
    s.prototype.options = {},
    s.prototype.getImages = function() {
        this.images = [],
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    s.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t),
        this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var o = t.querySelectorAll(this.options.background);
                for (n = 0; n < o.length; n++) {
                    var r = o[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    }
    ;
    var c = {
        1: !0,
        9: !0,
        11: !0
    };
    return s.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n; ) {
                var s = n && n[2];
                s && this.addBackground(s, t),
                n = i.exec(e.backgroundImage)
            }
    }
    ,
    s.prototype.addImage = function(t) {
        var e = new o(t);
        this.images.push(e)
    }
    ,
    s.prototype.addBackground = function(t, e) {
        var i = new r(t,e);
        this.images.push(i)
    }
    ,
    s.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t),
            e.check()
        }) : void this.complete()
    }
    ,
    s.prototype.progress = function(t, e, i) {
        this.progressedCount++,
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded,
        this.emitEvent("progress", [this, t, e]),
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t),
        this.progressedCount == this.images.length && this.complete(),
        this.options.debug && l && l.log("progress: " + i, t, e)
    }
    ,
    s.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }
    ,
    o.prototype = Object.create(e.prototype),
    o.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    o.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }
    ,
    o.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.img, e])
    }
    ,
    o.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    o.prototype.onload = function() {
        this.confirm(!0, "onload"),
        this.unbindEvents()
    }
    ,
    o.prototype.onerror = function() {
        this.confirm(!1, "onerror"),
        this.unbindEvents()
    }
    ,
    o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this),
        this.proxyImage.removeEventListener("error", this),
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype = Object.create(o.prototype),
    r.prototype.check = function() {
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this),
        this.img.removeEventListener("error", this)
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emitEvent("progress", [this, this.element, e])
    }
    ,
    s.makeJQueryPlugin = function(e) {
        e = e || t.jQuery,
        e && (a = e,
        a.fn.imagesLoaded = function(t, e) {
            var i = new s(this,t,e);
            return i.jqDeferred.promise(a(this))
        }
        )
    }
    ,
    s.makeJQueryPlugin(),
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
}(window, function(t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }
    ,
    n.imagesLoaded = function() {
        function t(t, i) {
            var n = e.getParentCell(i.img);
            e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected()
        }
        if (this.options.imagesLoaded) {
            var e = this;
            i(this.slider).on("progress", t)
        }
    }
    ,
    e
});
;/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function($, once) {
    var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
    var originalJQOnce = $.fn.once;
    var originalJQRemoveOnce = $.fn.removeOnce;

    $.fn.once = function jQueryOnce(id) {
        Drupal.deprecationError({
            message: "jQuery.once() ".concat(deprecatedMessageSuffix)
        });
        return originalJQOnce.apply(this, [id]);
    }
    ;

    $.fn.removeOnce = function jQueryRemoveOnce(id) {
        Drupal.deprecationError({
            message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
        });
        return originalJQRemoveOnce.apply(this, [id]);
    }
    ;

    var drupalOnce = once;

    function augmentedOnce(id, selector, context) {
        originalJQOnce.apply($(selector, context), [id]);
        return drupalOnce(id, selector, context);
    }

    function remove(id, selector, context) {
        originalJQRemoveOnce.apply($(selector, context), [id]);
        return drupalOnce.remove(id, selector, context);
    }

    window.once = Object.assign(augmentedOnce, drupalOnce, {
        remove: remove
    });
}
)(jQuery, once);
;/**
 * @file
 * Improved multi select module JS library.
 */

/**
 * Attaches improved multi select.
 */

(function($, Drupal) {
    'use strict';

    Drupal.behaviors.improved_multi_select = {

        /**
     * Detaches registered behaviors from a page element.
     *
     * @param {HTMLDocument|HTMLElement} [context=document]
     *   An element to detach behaviors from.
     * @param {object} [settings=drupalSettings]
     *   An object containing settings for the current context.
     * @param {string} [trigger='unload']
     *   A string containing what's causing the behaviors to be detached.
     */
        detach: function(context, settings, trigger) {
            const options = settings.improved_multi_select;

            // Unbind listeners.
            remoteListeners(context);

            // Remove added elements.
            options.selectors.forEach(function(selector) {
                $(selector, context).once('improvedselect').each(function() {
                    let $select = $(this);
                    let imsSelectId = $select.attr('id');

                    // Prevent duplicates on AJAX.
                    $('#improvedselect-' + imsSelectId).remove();
                    $('#' + imsSelectId + '-cloned').remove();
                });
            });
        },

        /**
     * Attach improved multi select.
     *
     * @param {Element} context
     *   The context for attaching the behavior.
     * @param {object} settings
     *   Options object.
     */
        attach: function(context, settings) {

            // Add placeholder text in the search box
            $(document).ready(function() {
                let searchBox = $('input.improvedselect_filter');
                if (searchBox && settings.improved_multi_select && settings.improved_multi_select.placeholder_text) {
                    searchBox.attr("placeholder", settings.improved_multi_select.placeholder_text);
                }
            });

            if (!settings.improved_multi_select || !settings.improved_multi_select.selectors) {
                // Let other scripts know improvedSelect has been attached.
                $.event.trigger('improvedMultiSelectAttached');

                return;
            }

            const options = settings.improved_multi_select;

            options.selectors.forEach(function(selector) {
                improvedselectAttach(selector, options, context);
            });

            // It looks like the paragraphs module leads to multiple attach calls.
            // 1st one for an element added via AJAX, 2nd one for whole form.
            remoteListeners(context);
            $('.improvedselect_filter', context).bind('input', function() {
                improvedselectFilter($(this).attr('sid'), options, context);
            });

            // Add selected items.
            $('.improvedselect .add', context).click(function() {
                let sid = $(this).attr('sid');
                $('#improvedselect-' + sid + ' .improvedselect_all .selected', context).each(function() {
                    let $opt = $(this);
                    $opt.removeClass('selected');
                    improvedselectUpdateGroupVisibility($opt, 1);
                    $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($opt);
                });
                improvedselectUpdate(sid, context);
            });

            // Remove selected items.
            $('.improvedselect .del', context).click(function() {
                let sid = $(this).attr('sid');
                $('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).each(function() {
                    let $opt = $(this);
                    $opt.removeClass('selected');
                    $('#improvedselect-' + sid + ' .improvedselect_all', context).append($opt);
                    improvedselectUpdateGroupVisibility($opt, 0);
                });
                // Force re-filtering.
                $('#improvedselect-' + sid + ' .improvedselect_filter', context).attr('prev', '');
                // Re-filtering will handle the rest.
                improvedselectFilter(sid, options, context);
                improvedselectUpdate(sid, context);
            });

            // Add all items.
            $('.improvedselect .add_all', context).click(function() {
                let sid = $(this).attr('sid');
                $('#improvedselect-' + sid + ' .improvedselect_all li[isgroup!=isgroup]', context).each(function() {
                    let $opt = $(this);
                    if ($opt.css('display') !== 'none') {
                        $opt.removeClass('selected');
                        improvedselectUpdateGroupVisibility($opt, 1);
                        $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($opt);
                    }
                });
                improvedselectUpdate(sid, context);
            });

            // Remove all items.
            $('.improvedselect .del_all', context).click(function() {
                let sid = $(this).attr('sid');
                $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function() {
                    let $opt = $(this);
                    $opt.removeClass('selected');
                    $('#improvedselect-' + sid + ' .improvedselect_all', context).append($opt);
                    improvedselectUpdateGroupVisibility($opt, 0);
                });
                // Force re-filtering.
                $('#improvedselect-' + sid + ' .improvedselect_filter', context).attr('prev', '');
                // Re-filtering will handle the rest.
                improvedselectFilter(sid, options, context);
                improvedselectUpdate(sid, context);
            });

            // Move selected items up.
            $('.improvedselect .move_up', context).click(function() {
                let sid = $(this).attr('sid');
                $('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).each(function() {
                    let $selected = $(this);
                    // Don't move selected items past other selected items or there will
                    // be problems when moving multiple items at once.
                    $selected.prev(':not(.selected)').before($selected);
                });
                improvedselectUpdate(sid, context);
            });

            // Move selected items down.
            $('.improvedselect .move_down', context).click(function() {
                let sid = $(this).attr('sid');
                // Run through the selections in reverse, otherwise problems occur
                // when moving multiple items at once.
                $($('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).get().reverse()).each(function() {
                    let $selected = $(this);
                    // Don't move selected items past other selected items or there will
                    // be problems when moving multiple items at once.
                    $selected.next(':not(.selected)').after($selected);
                });
                improvedselectUpdate(sid, context);
            });
            // Let other scripts know improvedSelect was initialized.
            $.event.trigger('improvedMultiSelectInitialized', [$(this)]);

            // Let other scripts know improvedSelect has been attached.
            $.event.trigger('improvedMultiSelectAttached');
        }
    };

    /**
   * Helper to remove listeners.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   */
    function remoteListeners(context) {
        $('.improvedselect_filter', context).off('input');
        $('.improvedselect .add', context).off('click');
        $('.improvedselect .del', context).off('click');
        $('.improvedselect .add_all', context).off('click');
        $('.improvedselect .del_all', context).off('click');
        $('.improvedselect .move_up', context).off('click');
        $('.improvedselect .move_down', context).off('click');
    }

    /**
   * Filter the all options list.
   *
   * @param {String} sid
   *   Select Id.
   * @param {object} options
   *   Options object.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
    function improvedselectFilter(sid, options, context) {
        let $filter = $('#improvedselect-' + sid + ' .improvedselect_filter', context);
        // Get current selected group.
        let $selectedGroup = $('#improvedselect-' + sid + ' .improvedselect_tabs li.selected:not(.all) a', context);
        let text = $filter.val();
        let pattern;
        let regex;
        let words;

        if (text.length && text !== $filter.attr('prev')) {
            $filter.attr('prev', text);

            // Do not allow JavaScript regular expressions.
            if (!options.js_regex) {
                text = text.replace(/[[\]^$.\\()|?*+]/g, "\\$&").replace(/{([0-9]+,?[0-9]*)}/g, '\\{$1\\}');
            }

            switch (options.filtertype) {
            case 'partial':
            default:
                pattern = text;
                break;

            case 'exact':
                pattern = '^' + text + '$';
                break;

            case 'anywords':
                words = text.split(' ');
                pattern = '';
                for (let i = 0; i < words.length; i++) {
                    if (words[i]) {
                        pattern += (pattern) ? '|\\b' + words[i] + '\\b' : '\\b' + words[i] + '\\b';
                    }
                }
                break;

            case 'anywords_partial':
                words = text.split(' ');
                pattern = '';
                for (let i = 0; i < words.length; i++) {
                    if (words[i]) {
                        pattern += (pattern) ? '|' + words[i] + '' : words[i];
                    }
                }
                break;

            case 'allwords':
                words = text.split(' ');
                pattern = '^';
                // Add a lookahead for each individual word.
                // Lookahead is used because the words can match in any order
                // so this makes it simpler and faster.
                for (let i = 0; i < words.length; i++) {
                    if (words[i]) {
                        pattern += '(?=.*?\\b' + words[i] + '\\b)';
                    }
                }
                break;

            case 'allwords_partial':
                words = text.split(' ');
                pattern = '^';
                // Add a lookahead for each individual word.
                // Lookahead is used because the words can match in any order
                // so this makes it simpler and faster.
                for (let i = 0; i < words.length; i++) {
                    if (words[i]) {
                        pattern += '(?=.*?' + words[i] + ')';
                    }
                }
                break;
            }

            // Hide JS error if a regular expression isn't completed yet.
            try {
                regex = new RegExp(pattern,'i');
            } catch (e) {
                return;
            }

            $('#improvedselect-' + sid + ' .improvedselect_all li', context).each(function() {
                let $opt = $(this);
                if ($opt.attr('isgroup') !== 'isgroup') {
                    let str = $opt.text();
                    if (str.match(regex) && (!$selectedGroup.length || $selectedGroup.text() === $opt.attr('group'))) {
                        $opt.show();
                        if ($opt.attr('group')) {
                            // If a group is selected we don't need to show groups.
                            if (!$selectedGroup.length) {
                                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').show();
                            } else {
                                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
                            }
                        }
                    } else {
                        $opt.hide();
                        if ($opt.attr('group')) {
                            if ($opt.siblings('li[isgroup!="isgroup"][group="' + $opt.attr('group') + '"]:visible').length === 0) {
                                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
                            }
                        }
                    }
                }
            });
        } else {
            if (!text.length) {
                $filter.attr('prev', '');
            }
            $('#improvedselect-' + sid + ' .improvedselect_all li', context).each(function() {
                let $opt = $(this);
                if ($opt.attr('isgroup') !== 'isgroup') {
                    if (!$selectedGroup.length || $selectedGroup.text() === $opt.attr('group')) {
                        $opt.show();
                    } else {
                        $opt.hide();
                    }
                    improvedselectUpdateGroupVisibility($opt, 0);
                }
            });
        }
    }

    /**
   * Contains attach logic for a select element.
   *
   * @param {String} selector
   *   jQuery selector.
   * @param {object} options
   *   Options object.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
    function improvedselectAttach(selector, options, context) {
        $(selector, context).once('improvedselect').each(function() {
            let $select = $(this);
            let moveButtons = '';
            let imsSelectId = $select.attr('id');
            let $cloned_select = null;
            let regex = new RegExp('.+-cloned$','i');

            // Do not process cloned selects in case if options.orderable is set.
            if (imsSelectId.match(regex)) {
                return;
            }

            // Remove required attribute from select elements to allow form submission and validation on Drupal side.
            if (options.remove_required_attr) {
                $select.removeAttr('required');
            }

            if (options.orderable) {
                // If the select is orderable then we clone the original select to keep
                // opt groups.
                $cloned_select = $select.clone();
                $cloned_select.attr('id', imsSelectId + '-cloned');
                $cloned_select.attr('name', 'cloned-' + $select.attr('name'));
                $cloned_select.appendTo($select.parent()).hide();
                // Move button markup to add to the widget.
                moveButtons = '<span class="move_up" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_moveup) + '</span>' + '<span class="move_down" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_movedown) + '</span>';
            }

            $select.parent().append('<div class="improvedselect" sid="' + imsSelectId + '" id="improvedselect-' + imsSelectId + '">' + '<div class="improvedselect-text-wrapper">' + '<input type="text" class="improvedselect_filter" sid="' + imsSelectId + '" prev="" />' + '</div><ul class="improvedselect_sel"></ul><ul class="improvedselect_all"></ul><div class="improvedselect_control">' + '<span class="add" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_add) + '</span>' + '<span class="del" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_del) + '</span>' + '<span class="add_all" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_addall) + '</span>' + '<span class="del_all" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_delall) + '</span>' + moveButtons + '</div><div class="clear"></div></div>');

            if ($select.find('optgroup').has('option').length > 0) {
                $select.parent().find('.improvedselect').addClass('has_group');
                // Build groups.
                $('#improvedselect-' + imsSelectId + ' .improvedselect-text-wrapper', context).after('<div class="improvedselect_tabs-wrapper" sid="' + imsSelectId + '"><ul class="improvedselect_tabs"></ul></div>');
                $select.find('optgroup').has('option').each(function() {
                    $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs', context).append('<li><a href="">' + $(this).attr('label') + '</a></li>');
                });
                // Show all groups option.
                $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs', context).prepend('<li class="all"><a href="">' + Drupal.t('All') + '</a></li>');
                // Select group.
                $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li a', context).click(function(e) {
                    let $group = $(this);
                    let sid = $group.parent().parent().parent().attr('sid');
                    $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li.selected', context).removeClass('selected').find('a').unwrap();
                    $group.wrap('<div>').parents('li').first().addClass('selected');

                    // Any existing selections in the all list need to be unselected
                    // if they aren't part of the newly selected group.
                    if (!$group.hasClass('all')) {
                        $('#improvedselect-' + imsSelectId + ' .improvedselect_all li.selected[group!="' + $group.text() + '"]', context).removeClass('selected');
                    }

                    // Clear the filter if we have to.
                    if (options.groupresetfilter) {
                        // Clear filter box.
                        $('#improvedselect-' + imsSelectId + ' .improvedselect_filter', context).val('');
                    }
                    // Force re-filtering.
                    $('#improvedselect-' + imsSelectId + ' .improvedselect_filter', context).attr('prev', '');
                    // Re-filtering will handle the rest.
                    improvedselectFilter(sid, options, context);
                    e.preventDefault();
                });
                // Select all to begin.
                $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li.all a', context).click();
            }

            $select.find('option, optgroup').each(function() {
                let $opt = $(this);
                let group = '';
                if ($opt[0].tagName === 'OPTGROUP') {
                    if ($opt.has('option').length) {
                        $('#improvedselect-' + imsSelectId + ' .improvedselect_all', context).append('<li isgroup="isgroup" so="---' + $opt.attr('label') + '---">--- ' + $opt.attr('label') + ' ---</li>');
                    }
                } else {
                    group = $opt.parent('optgroup').attr('label');
                    if (group) {
                        group = ' group="' + group + '"';
                    } else {
                        group = '';
                    }
                    if ($opt.attr('value') !== '_none') {
                        if ($opt.attr('selected')) {
                            $('#improvedselect-' + imsSelectId + ' .improvedselect_sel', context).append('<li so="' + $opt.attr('value') + '"' + group + '>' + $opt.html() + '</li>');
                        } else {
                            $('#improvedselect-' + imsSelectId + ' .improvedselect_all', context).append('<li so="' + $opt.attr('value') + '"' + group + '>' + $opt.html() + '</li>');
                        }
                    }
                }
            });

            $('#improvedselect-' + imsSelectId + ' .improvedselect_sel li, #improvedselect-' + imsSelectId + ' .improvedselect_all li[isgroup!="isgroup"]', context).click(function() {
                $(this).toggleClass('selected');
            });

            $select.hide();

            // Double click feature request.
            $('#improvedselect-' + imsSelectId + ' .improvedselect_sel li, #improvedselect-' + imsSelectId + ' .improvedselect_all li[isgroup!="isgroup"]', context).dblclick(function() {
                // Store selected items.
                let selected = $(this).parent().find('li.selected');
                let current_class = $(this).parent().attr('class');
                // Add item.
                if (current_class === 'improvedselect_all') {
                    $(this).parent().find('li.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $(this).parent().parent().find('.add').click();
                }// Remove item.
                else {
                    $(this).parent().find('li.selected').removeClass('selected');
                    $(this).addClass('selected');
                    $(this).parent().parent().find('.del').click();
                }
                // Restore selected items.
                if (selected.length) {
                    for (let k = 0; k < selected.length; k++) {
                        if ($(selected[k]).parent().attr('class') === current_class) {
                            $(selected[k]).addClass('selected');
                        }
                    }
                }
            });

            // Set the height of the select fields based on the height of the
            // parent, otherwise it can end up with a lot of wasted space.
            $('.improvedselect_sel, .improvedselect_all').each(function() {
                if ($(this).parent().height() > 0) {
                    $(this).height($(this).parent().height() - 35);
                }
                // @todo: Element is hidden - we can't detect its height.
            });
        });
    }

    /**
   * Update the visibility of an option's group.
   *
   * @param {jQuery} $opt
   *   A jQuery object of a select option.
   * @param {Number} numItems
   *   How many items should be considered an empty group. Generally zero or one
   *   depending on if an item has been or is going to be removed or added.
   */
    function improvedselectUpdateGroupVisibility($opt, numItems) {
        let $selectedGroup = $opt.parents('.improvedselect').first().find('.improvedselect_tabs li.selected:not(.all) a');

        // Don't show groups if a group is selected.
        if ($opt.parent().children('li[isgroup!="isgroup"][group="' + $opt.attr('group') + '"]:visible').length <= numItems || $selectedGroup.length) {
            $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
        } else {
            $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').show();
        }
    }

    /**
   * Updates the select values by its id.
   *
   * @param {string} sid
   *   Select Id.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
    function improvedselectUpdate(sid, context) {
        // If we have sorting enabled, make sure we have the results sorted.
        let $select = $('#' + sid);
        let $cloned_select = $('#' + sid + '-cloned');

        if ($cloned_select.length) {
            $select.find('option, optgroup').remove();
            $cloned_select.find('option:selected').prop('selected', false);
            $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function() {
                let $li = $(this);
                $select.append($('<option></option>').attr('value', $li.attr('so')).prop('selected', true).text($li.text()));
                $('#' + sid + '-cloned [value="' + $(this).attr('so') + '"]', context).prop('selected', true);
            });
        } else {
            $select.find('option:selected').prop('selected', false);
            $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function() {
                $('#' + sid + ' [value="' + $(this).attr('so') + '"]', context).prop('selected', true);
            });
        }

        $select.find('option, optgroup').each(function() {
            let $opt = $(this);
            if ($opt[0].tagName === 'OPTGROUP') {
                if ($opt.has('option').length) {
                    $('#improvedselect-' + sid + ' .improvedselect_all', context).append($('#improvedselect-' + sid + ' .improvedselect_all [so="---' + $opt.attr('label') + '---"]', context));
                }
            } else {
                // When using reordering, the options will be from the cloned select,
                // meaning that there will be none selected, which means that items
                // in the selected list will not be reordered, which is what we want.
                if ($opt.attr('selected')) {
                    $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($('#improvedselect-' + sid + ' .improvedselect_sel [so="' + $opt.attr('value') + '"]', context));
                } else {
                    $('#improvedselect-' + sid + ' .improvedselect_all', context).append($('#improvedselect-' + sid + ' .improvedselect_all [so="' + $opt.attr('value') + '"]', context));
                }
            }
        });
        // Don't use the $select variable here as it might be the clone.
        // Tell the ajax system the select has changed.
        $('#' + sid, context).trigger('change');
    }

}
)(jQuery, Drupal);
;var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    },
    fn(module, module.exports),
    module.exports;
}

var _global = createCommonjsModule(function(module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number')
        __g = global;
    // eslint-disable-line no-undef
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function _has(it, key) {
    return hasOwnProperty.call(it, key);
};

var _fails = function _fails(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function() {
    return Object.defineProperty({}, 'a', {
        get: function get() {
            return 7;
        }
    }).a != 7;
});

var _core = createCommonjsModule(function(module) {
    var core = module.exports = {
        version: '2.6.5'
    };
    if (typeof __e == 'number')
        __e = core;
    // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
}
: function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
}
;

var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
};

var createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value"in descriptor)
                descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    return function(Constructor, protoProps, staticProps) {
        if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
            defineProperties(Constructor, staticProps);
        return Constructor;
    }
    ;
}();

var get = function get(object, property, receiver) {
    if (object === null)
        object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);

        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ("value"in desc) {
        return desc.value;
    } else {
        var getter = desc.get;

        if (getter === undefined) {
            return undefined;
        }

        return getter.call(receiver);
    }
};

var inherits = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
            arr2[i] = arr[i];

        return arr2;
    } else {
        return Array.from(arr);
    }
};

var _isObject = function _isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function _anObject(it) {
    if (!_isObject(it))
        throw TypeError(it + ' is not an object!');
    return it;
};

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function _domCreate(it) {
    return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function() {
    return Object.defineProperty(_domCreate('div'), 'a', {
        get: function get() {
            return 7;
        }
    }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function _toPrimitive(it, S) {
    if (!_isObject(it))
        return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))
        return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it)))
        return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))
        return val;
    throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine)
        try {
            return dP(O, P, Attributes);
        } catch (e) {/* empty */
        }
    if ('get'in Attributes || 'set'in Attributes)
        throw TypeError('Accessors not supported!');
    if ('value'in Attributes)
        O[P] = Attributes.value;
    return O;
}
;

var _objectDp = {
    f: f
};

var _propertyDesc = function _propertyDesc(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

var _hide = _descriptors ? function(object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
}
: function(object, key, value) {
    object[key] = value;
    return object;
}
;

var id = 0;
var px = Math.random();
var _uid = function _uid(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _library = false;

var _shared = createCommonjsModule(function(module) {
    var SHARED = '__core-js_shared__';
    var store = _global[SHARED] || (_global[SHARED] = {});

    (module.exports = function(key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
    }
    )('versions', []).push({
        version: _core.version,
        mode: 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
});

var _functionToString = _shared('native-function-to-string', Function.toString);

var _redefine = createCommonjsModule(function(module) {
    var SRC = _uid('src');

    var TO_STRING = 'toString';
    var TPL = ('' + _functionToString).split(TO_STRING);

    _core.inspectSource = function(it) {
        return _functionToString.call(it);
    }
    ;

    (module.exports = function(O, key, val, safe) {
        var isFunction = typeof val == 'function';
        if (isFunction)
            _has(val, 'name') || _hide(val, 'name', key);
        if (O[key] === val)
            return;
        if (isFunction)
            _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
        if (O === _global) {
            O[key] = val;
        } else if (!safe) {
            delete O[key];
            _hide(O, key, val);
        } else if (O[key]) {
            O[key] = val;
        } else {
            _hide(O, key, val);
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    }
    )(Function.prototype, TO_STRING, function toString() {
        return typeof this == 'function' && this[SRC] || _functionToString.call(this);
    });
});

var _aFunction = function _aFunction(it) {
    if (typeof it != 'function')
        throw TypeError(it + ' is not a function!');
    return it;
};

// optional / simple context binding

var _ctx = function _ctx(fn, that, length) {
    _aFunction(fn);
    if (that === undefined)
        return fn;
    switch (length) {
    case 1:
        return function(a) {
            return fn.call(that, a);
        }
        ;
    case 2:
        return function(a, b) {
            return fn.call(that, a, b);
        }
        ;
    case 3:
        return function(a, b, c) {
            return fn.call(that, a, b, c);
        }
        ;
    }
    return function() /* ...args */
    {
        return fn.apply(that, arguments);
    }
    ;
};

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL)
        source = name;
    for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        // export native or passed
        out = (own ? target : source)[key];
        // bind timers to global for call from export context
        exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
        // extend global
        if (target)
            _redefine(target, key, out, type & $export.U);
        // export
        if (exports[key] != out)
            _hide(exports, key, exp);
        if (IS_PROTO && expProto[key] != out)
            expProto[key] = out;
    }
};
_global.core = _core;
// type bitmap
$export.F = 1;
// forced
$export.G = 2;
// global
$export.S = 4;
// static
$export.P = 8;
// proto
$export.B = 16;
// bind
$export.W = 32;
// wrap
$export.U = 64;
// safe
$export.R = 128;
// real proto method for `library`
var _export = $export;

var _meta = createCommonjsModule(function(module) {
    var META = _uid('meta');

    var setDesc = _objectDp.f;
    var id = 0;
    var isExtensible = Object.isExtensible || function() {
        return true;
    }
    ;
    var FREEZE = !_fails(function() {
        return isExtensible(Object.preventExtensions({}));
    });
    var setMeta = function setMeta(it) {
        setDesc(it, META, {
            value: {
                i: 'O' + ++id,
                // object ID
                w: {}// weak collections IDs
            }
        });
    };
    var fastKey = function fastKey(it, create) {
        // return primitive with prefix
        if (!_isObject(it))
            return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
        if (!_has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it))
                return 'F';
            // not necessary to add metadata
            if (!create)
                return 'E';
            // add missing metadata
            setMeta(it);
            // return object ID
        }
        return it[META].i;
    };
    var getWeak = function getWeak(it, create) {
        if (!_has(it, META)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it))
                return true;
            // not necessary to add metadata
            if (!create)
                return false;
            // add missing metadata
            setMeta(it);
            // return hash weak collections IDs
        }
        return it[META].w;
    };
    // add metadata on freeze-family methods calling
    var onFreeze = function onFreeze(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META))
            setMeta(it);
        return it;
    };
    var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
    };
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var _wks = createCommonjsModule(function(module) {
    var store = _shared('wks');

    var _Symbol = _global.Symbol;
    var USE_SYMBOL = typeof _Symbol == 'function';

    var $exports = module.exports = function(name) {
        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
    }
    ;

    $exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function _setToStringTag(it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG))
        def(it, TAG, {
            configurable: true,
            value: tag
        });
};

var f$1 = _wks;

var _wksExt = {
    f: f$1
};

var defineProperty$1 = _objectDp.f;
var _wksDefine = function _wksDefine(name) {
    var $Symbol = _core.Symbol || (_core.Symbol = _global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol))
        defineProperty$1($Symbol, name, {
            value: _wksExt.f(name)
        });
};

var toString = {}.toString;

var _cof = function _cof(it) {
    return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
}
;

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function _defined(it) {
    if (it == undefined)
        throw TypeError("Can't call method on  " + it);
    return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function _toIobject(it) {
    return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function _toInteger(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function _toLength(it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0;
    // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = _toIobject($this);
        var length = _toLength(O.length);
        var index = _toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el)
            while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value)
                    return true;
                // Array#indexOf ignores holes, Array#includes - not
            }
        else
            for (; length > index; index++) {
                if (IS_INCLUDES || index in O) {
                    if (O[index] === el)
                        return IS_INCLUDES || index || 0;
                }
            }
        return !IS_INCLUDES && -1;
    }
    ;
};

var shared = _shared('keys');

var _sharedKey = function _sharedKey(key) {
    return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function _objectKeysInternal(object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) {
        if (key != IE_PROTO)
            _has(O, key) && result.push(key);
    }
    // Don't enum bug & hidden keys
    while (names.length > i) {
        if (_has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
        }
    }
    return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)

var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
}
;

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
    f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
    f: f$3
};

// all enumerable object keys, includes symbols

var _enumKeys = function _enumKeys(it) {
    var result = _objectKeys(it);
    var getSymbols = _objectGops.f;
    if (getSymbols) {
        var symbols = getSymbols(it);
        var isEnum = _objectPie.f;
        var i = 0;
        var key;
        while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++]))
                result.push(key);
        }
    }
    return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
}
;

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) {
        _objectDp.f(O, P = keys[i++], Properties[P]);
    }
    return O;
}
;

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function Empty() {/* empty */
};
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:';
    // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    _createDict = iframeDocument.F;
    while (i--) {
        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
    }
    return _createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        Empty[PROTOTYPE$1] = _anObject(O);
        result = new Empty();
        Empty[PROTOTYPE$1] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO$1] = O;
    } else
        result = _createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
}
;

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return _objectKeysInternal(O, hiddenKeys);
}
;

var _objectGopn = {
    f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
    try {
        return gOPN(it);
    } catch (e) {
        return windowNames.slice();
    }
};

var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
    f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = _toIobject(O);
    P = _toPrimitive(P, true);
    if (_ie8DomDefine)
        try {
            return gOPD(O, P);
        } catch (e) {/* empty */
        }
    if (_has(O, P))
        return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
}
;

var _objectGopd = {
    f: f$6
};

// ECMAScript 6 symbols shim

var META = _meta.KEY;

var gOPD$1 = _objectGopd.f;
var dP$1 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function() {
    return _objectCreate(dP$1({}, 'a', {
        get: function get$$1() {
            return dP$1(this, 'a', {
                value: 7
            }).a;
        }
    })).a != 7;
}) ? function(it, key, D) {
    var protoDesc = gOPD$1(ObjectProto, key);
    if (protoDesc)
        delete ObjectProto[key];
    dP$1(it, key, D);
    if (protoDesc && it !== ObjectProto)
        dP$1(ObjectProto, key, protoDesc);
}
: dP$1;

var wrap = function wrap(tag) {
    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
}
: function(it) {
    return it instanceof $Symbol;
}
;

var $defineProperty = function defineProperty$$1(it, key, D) {
    if (it === ObjectProto)
        $defineProperty(OPSymbols, key, D);
    _anObject(it);
    key = _toPrimitive(key, true);
    _anObject(D);
    if (_has(AllSymbols, key)) {
        if (!D.enumerable) {
            if (!_has(it, HIDDEN))
                dP$1(it, HIDDEN, _propertyDesc(1, {}));
            it[HIDDEN][key] = true;
        } else {
            if (_has(it, HIDDEN) && it[HIDDEN][key])
                it[HIDDEN][key] = false;
            D = _objectCreate(D, {
                enumerable: _propertyDesc(0, false)
            });
        }
        return setSymbolDesc(it, key, D);
    }
    return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
    _anObject(it);
    var keys = _enumKeys(P = _toIobject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) {
        $defineProperty(it, key = keys[i++], P[key]);
    }
    return it;
};
var $create = function create(it, P) {
    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = _toPrimitive(key, true));
    if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key))
        return false;
    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = _toIobject(it);
    key = _toPrimitive(key, true);
    if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key))
        return;
    var D = gOPD$1(it, key);
    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key]))
        D.enumerable = true;
    return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(_toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)
            result.push(key);
    }
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true))
            result.push(AllSymbols[key]);
    }
    return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
    $Symbol = function _Symbol() {
        if (this instanceof $Symbol)
            throw TypeError('Symbol is not a constructor!');
        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
        var $set = function $set(value) {
            if (this === ObjectProto)
                $set.call(OPSymbols, value);
            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, _propertyDesc(1, value));
        };
        if (_descriptors && setter)
            setSymbolDesc(ObjectProto, tag, {
                configurable: true,
                set: $set
            });
        return wrap(tag);
    }
    ;
    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
        return this._k;
    });

    _objectGopd.f = $getOwnPropertyDescriptor;
    _objectDp.f = $defineProperty;
    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
    _objectPie.f = $propertyIsEnumerable;
    _objectGops.f = $getOwnPropertySymbols;

    if (_descriptors && !_library) {
        _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    _wksExt.f = function(name) {
        return wrap(_wks(name));
    }
    ;
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, {
    Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j; ) {
    _wks(es6Symbols[j++]);
}
for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k; ) {
    _wksDefine(wellKnownSymbols[k++]);
}
_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function _for(key) {
        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
            throw TypeError(sym + ' is not a symbol!');
        for (var key in SymbolRegistry) {
            if (SymbolRegistry[key] === sym)
                return key;
        }
    },
    useSetter: function useSetter() {
        setter = true;
    },
    useSimple: function useSimple() {
        setter = false;
    }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function() {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({
        a: S
    }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
    stringify: function stringify(it) {
        var args = [it];
        var i = 1;
        var replacer, $replacer;
        while (arguments.length > i) {
            args.push(arguments[i++]);
        }
        $replacer = replacer = args[1];
        if (!_isObject(replacer) && it === undefined || isSymbol(it))
            return;
        // IE8 returns string on undefined
        if (!_isArray(replacer))
            replacer = function replacer(key, value) {
                if (typeof $replacer == 'function')
                    value = $replacer.call(this, key, value);
                if (!isSymbol(value))
                    return value;
            }
            ;
        args[1] = replacer;
        return _stringify.apply($JSON, args);
    }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', {
    create: _objectCreate
});

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperty: _objectDp.f
});

// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
_export(_export.S + _export.F * !_descriptors, 'Object', {
    defineProperties: _objectDps
});

// most Object methods by ES6 should accept primitives

var _objectSap = function _objectSap(KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function() {
        fn(1);
    }), 'Object', exp);
};

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function() {
    return function getOwnPropertyDescriptor(it, key) {
        return $getOwnPropertyDescriptor$1(_toIobject(it), key);
    }
    ;
});

// 7.1.13 ToObject(argument)

var _toObject = function _toObject(it) {
    return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2))
        return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
        return O.constructor.prototype;
    }
    return O instanceof Object ? ObjectProto$1 : null;
}
;

// 19.1.2.9 Object.getPrototypeOf(O)

_objectSap('getPrototypeOf', function() {
    return function getPrototypeOf(it) {
        return _objectGpo(_toObject(it));
    }
    ;
});

// 19.1.2.14 Object.keys(O)

_objectSap('keys', function() {
    return function keys(it) {
        return _objectKeys(_toObject(it));
    }
    ;
});

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function() {
    return _objectGopnExt.f;
});

// 19.1.2.5 Object.freeze(O)

var meta = _meta.onFreeze;

_objectSap('freeze', function($freeze) {
    return function freeze(it) {
        return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
    }
    ;
});

// 19.1.2.17 Object.seal(O)

var meta$1 = _meta.onFreeze;

_objectSap('seal', function($seal) {
    return function seal(it) {
        return $seal && _isObject(it) ? $seal(meta$1(it)) : it;
    }
    ;
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$2 = _meta.onFreeze;

_objectSap('preventExtensions', function($preventExtensions) {
    return function preventExtensions(it) {
        return $preventExtensions && _isObject(it) ? $preventExtensions(meta$2(it)) : it;
    }
    ;
});

// 19.1.2.12 Object.isFrozen(O)

_objectSap('isFrozen', function($isFrozen) {
    return function isFrozen(it) {
        return _isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    }
    ;
});

// 19.1.2.13 Object.isSealed(O)

_objectSap('isSealed', function($isSealed) {
    return function isSealed(it) {
        return _isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    }
    ;
});

// 19.1.2.11 Object.isExtensible(O)

_objectSap('isExtensible', function($isExtensible) {
    return function isExtensible(it) {
        return _isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    }
    ;
});

// 19.1.2.1 Object.assign(target, source, ...)

var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function() {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function(k) {
        B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
        var S = _iobject(arguments[index++]);
        var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
            if (isEnum.call(S, key = keys[j++]))
                T[key] = S[key];
        }
    }
    return T;
}
: $assign;

// 19.1.3.1 Object.assign(target, source)

_export(_export.S + _export.F, 'Object', {
    assign: _objectAssign
});

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
}
;

// 19.1.3.10 Object.is(value1, value2)

_export(_export.S, 'Object', {
    is: _sameValue
});

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */

var check = function check(O, proto) {
    _anObject(O);
    if (!_isObject(proto) && proto !== null)
        throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
    set: Object.setPrototypeOf || ('__proto__'in {} ? // eslint-disable-line
    function(test, buggy, set) {
        try {
            set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
            set(test, []);
            buggy = !(test instanceof Array);
        } catch (e) {
            buggy = true;
        }
        return function setPrototypeOf(O, proto) {
            check(O, proto);
            if (buggy)
                O.__proto__ = proto;
            else
                set(O, proto);
            return O;
        }
        ;
    }({}, false) : undefined),
    check: check
};

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', {
    setPrototypeOf: _setProto.set
});

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function() {
    return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
    try {
        return it[key];
    } catch (e) {/* empty */
    }
};

var _classof = function _classof(it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'// @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T // builtinTag case
    : ARG ? _cof(O)// ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

// 19.1.3.6 Object.prototype.toString()

var test = {};
test[_wks('toStringTag')] = 'z';
if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
        return '[object ' + _classof(this) + ']';
    }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function _invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
    case 0:
        return un ? fn() : fn.call(that);
    case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
};

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
    if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) {
            n[i] = 'a[' + i + ']';
        }
        // eslint-disable-next-line no-new-func
        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }
    return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /* , ...args */
) {
    var fn = _aFunction(this);
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function bound() /* args... */
    {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
    };
    if (_isObject(fn.prototype))
        bound.prototype = fn.prototype;
    return bound;
}
;

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)

_export(_export.P, 'Function', {
    bind: _bind
});

var dP$2 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || _descriptors && dP$2(FProto, NAME, {
    configurable: true,
    get: function get() {
        try {
            return ('' + this).match(nameRE)[1];
        } catch (e) {
            return '';
        }
    }
});

var HAS_INSTANCE = _wks('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto))
    _objectDp.f(FunctionProto, HAS_INSTANCE, {
        value: function value(O) {
            if (typeof this != 'function' || !_isObject(O))
                return false;
            if (!_isObject(this.prototype))
                return O instanceof this;
            // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
            while (O = _objectGpo(O)) {
                if (this.prototype === O)
                    return true;
            }
            return false;
        }
    });

var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200B\x85';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function exporter(KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = _fails(function() {
        return !!_stringWs[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
    if (ALIAS)
        exp[ALIAS] = fn;
    _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE) {
    string = String(_defined(string));
    if (TYPE & 1)
        string = string.replace(ltrim, '');
    if (TYPE & 2)
        string = string.replace(rtrim, '');
    return string;
}
;

var _stringTrim = exporter;

var $parseInt = _global.parseInt;
var $trim = _stringTrim.trim;

var hex = /^[-+]?0[xX]/;

var _parseInt = $parseInt(_stringWs + '08') !== 8 || $parseInt(_stringWs + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
}
: $parseInt;

// 18.2.5 parseInt(string, radix)
_export(_export.G + _export.F * (parseInt != _parseInt), {
    parseInt: _parseInt
});

var $parseFloat = _global.parseFloat;
var $trim$1 = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim$1(String(str), 3);
    var result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
}
: $parseFloat;

// 18.2.4 parseFloat(string)
_export(_export.G + _export.F * (parseFloat != _parseFloat), {
    parseFloat: _parseFloat
});

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function _inheritIfRequired(that, target, C) {
    var S = target.constructor;
    var P;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
        setPrototypeOf(that, P);
    }
    return that;
};

var gOPN$2 = _objectGopn.f;
var gOPD$2 = _objectGopd.f;
var dP$3 = _objectDp.f;
var $trim$2 = _stringTrim.trim;
var NUMBER = 'Number';
var $Number = _global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = _cof(_objectCreate(proto)) == NUMBER;
var TRIM = 'trim'in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function toNumber(argument) {
    var it = _toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
        it = TRIM ? it.trim() : $trim$2(it, 3);
        var first = it.charCodeAt(0);
        var third, radix, maxCode;
        if (first === 43 || first === 45) {
            third = it.charCodeAt(2);
            if (third === 88 || third === 120)
                return NaN;
            // Number('+0x1') should be NaN, old V8 fix
        } else if (first === 48) {
            switch (it.charCodeAt(1)) {
            case 66:
            case 98:
                radix = 2;
                maxCode = 49;
                break;
                // fast equal /^0b[01]+$/i
            case 79:
            case 111:
                radix = 8;
                maxCode = 55;
                break;
                // fast equal /^0o[0-7]+$/i
            default:
                return +it;
            }
            for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                code = digits.charCodeAt(i);
                // parseInt parses a string to a first unavailable symbol
                // but ToNumber should return NaN if a string contains unavailable symbols
                if (code < 48 || code > maxCode)
                    return NaN;
            }
            return parseInt(digits, radix);
        }
    }
    return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
        var it = arguments.length < 1 ? 0 : value;
        var that = this;
        return that instanceof $Number // check on 1..constructor(foo) case
        && (BROKEN_COF ? _fails(function() {
            proto.valueOf.call(that);
        }) : _cof(that) != NUMBER) ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    }
    ;
    for (var keys = _descriptors ? gOPN$2(Base) : (// ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j$1 = 0, key; keys.length > j$1; j$1++) {
        if (_has(Base, key = keys[j$1]) && !_has($Number, key)) {
            dP$3($Number, key, gOPD$2(Base, key));
        }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    _redefine(_global, NUMBER, $Number);
}

var _aNumberValue = function _aNumberValue(it, msg) {
    if (typeof it != 'number' && _cof(it) != 'Number')
        throw TypeError(msg);
    return +it;
};

var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity)
        throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str)) {
        if (n & 1)
            res += str;
    }
    return res;
};

var $toFixed = 1.0.toFixed;
var floor$1 = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function multiply(n, c) {
    var i = -1;
    var c2 = c;
    while (++i < 6) {
        c2 += n * data[i];
        data[i] = c2 % 1e7;
        c2 = floor$1(c2 / 1e7);
    }
};
var divide = function divide(n) {
    var i = 6;
    var c = 0;
    while (--i >= 0) {
        c += data[i];
        data[i] = floor$1(c / n);
        c = c % n * 1e7;
    }
};
var numToString = function numToString() {
    var i = 6;
    var s = '';
    while (--i >= 0) {
        if (s !== '' || i === 0 || data[i] !== 0) {
            var t = String(data[i]);
            s = s === '' ? t : s + _stringRepeat.call(ZERO, 7 - t.length) + t;
        }
    }
    return s;
};
var pow = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function log(x) {
    var n = 0;
    var x2 = x;
    while (x2 >= 4096) {
        n += 12;
        x2 /= 4096;
    }
    while (x2 >= 2) {
        n += 1;
        x2 /= 2;
    }
    return n;
};

_export(_export.P + _export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128.0.toFixed(0) !== '1000000000000000128') || !_fails(function() {
    // V8 ~ Android 4.3-
    $toFixed.call({});
})), 'Number', {
    toFixed: function toFixed(fractionDigits) {
        var x = _aNumberValue(this, ERROR);
        var f = _toInteger(fractionDigits);
        var s = '';
        var m = ZERO;
        var e, z, j, k;
        if (f < 0 || f > 20)
            throw RangeError(ERROR);
        // eslint-disable-next-line no-self-compare
        if (x != x)
            return 'NaN';
        if (x <= -1e21 || x >= 1e21)
            return String(x);
        if (x < 0) {
            s = '-';
            x = -x;
        }
        if (x > 1e-21) {
            e = log(x * pow(2, 69, 1)) - 69;
            z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
            z *= 0x10000000000000;
            e = 52 - e;
            if (e > 0) {
                multiply(0, z);
                j = f;
                while (j >= 7) {
                    multiply(1e7, 0);
                    j -= 7;
                }
                multiply(pow(10, j, 1), 0);
                j = e - 1;
                while (j >= 23) {
                    divide(1 << 23);
                    j -= 23;
                }
                divide(1 << j);
                multiply(1, 1);
                divide(2);
                m = numToString();
            } else {
                multiply(0, z);
                multiply(1 << -e, 0);
                m = numToString() + _stringRepeat.call(ZERO, f);
            }
        }
        if (f > 0) {
            k = m.length;
            m = s + (k <= f ? '0.' + _stringRepeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
        } else {
            m = s + m;
        }
        return m;
    }
});

var $toPrecision = 1.0.toPrecision;

_export(_export.P + _export.F * (_fails(function() {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
}) || !_fails(function() {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
})), 'Number', {
    toPrecision: function toPrecision(precision) {
        var that = _aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
        return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
});

// 20.1.2.1 Number.EPSILON

_export(_export.S, 'Number', {
    EPSILON: Math.pow(2, -52)
});

// 20.1.2.2 Number.isFinite(number)

var _isFinite = _global.isFinite;

_export(_export.S, 'Number', {
    isFinite: function isFinite(it) {
        return typeof it == 'number' && _isFinite(it);
    }
});

// 20.1.2.3 Number.isInteger(number)

var floor$2 = Math.floor;
var _isInteger = function isInteger(it) {
    return !_isObject(it) && isFinite(it) && floor$2(it) === it;
};

// 20.1.2.3 Number.isInteger(number)

_export(_export.S, 'Number', {
    isInteger: _isInteger
});

// 20.1.2.4 Number.isNaN(number)

_export(_export.S, 'Number', {
    isNaN: function isNaN(number) {
        // eslint-disable-next-line no-self-compare
        return number != number;
    }
});

// 20.1.2.5 Number.isSafeInteger(number)

var abs = Math.abs;

_export(_export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
        return _isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
});

// 20.1.2.6 Number.MAX_SAFE_INTEGER

_export(_export.S, 'Number', {
    MAX_SAFE_INTEGER: 0x1fffffffffffff
});

// 20.1.2.10 Number.MIN_SAFE_INTEGER

_export(_export.S, 'Number', {
    MIN_SAFE_INTEGER: -0x1fffffffffffff
});

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', {
    parseFloat: _parseFloat
});

// 20.1.2.13 Number.parseInt(string, radix)
_export(_export.S + _export.F * (Number.parseInt != _parseInt), 'Number', {
    parseInt: _parseInt
});

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
}
;

// 20.2.2.3 Math.acosh(x)

var sqrt = Math.sqrt;
var $acosh = Math.acosh;

_export(_export.S + _export.F * !($acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
&& Math.floor($acosh(Number.MAX_VALUE)) == 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
&& $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
        return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : _mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
});

// 20.2.2.5 Math.asinh(x)

var $asinh = Math.asinh;

function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
_export(_export.S + _export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
    asinh: asinh
});

// 20.2.2.7 Math.atanh(x)

var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
_export(_export.S + _export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
        return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
}
;

// 20.2.2.9 Math.cbrt(x)

_export(_export.S, 'Math', {
    cbrt: function cbrt(x) {
        return _mathSign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
});

// 20.2.2.11 Math.clz32(x)

_export(_export.S, 'Math', {
    clz32: function clz32(x) {
        return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
});

// 20.2.2.12 Math.cosh(x)

var exp = Math.exp;

_export(_export.S, 'Math', {
    cosh: function cosh(x) {
        return (exp(x = +x) + exp(-x)) / 2;
    }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = !$expm1 // Old FF bug
|| $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
|| $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
}
: $expm1;

// 20.2.2.14 Math.expm1(x)

_export(_export.S + _export.F * (_mathExpm1 != Math.expm1), 'Math', {
    expm1: _mathExpm1
});

// 20.2.2.16 Math.fround(x)

var pow$1 = Math.pow;
var EPSILON = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32 = pow$1(2, 127) * (2 - EPSILON32);
var MIN32 = pow$1(2, -126);

var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
};

var _mathFround = Math.fround || function fround(x) {
    var $abs = Math.abs(x);
    var $sign = _mathSign(x);
    var a, result;
    if ($abs < MIN32)
        return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    // eslint-disable-next-line no-self-compare
    if (result > MAX32 || result != result)
        return $sign * Infinity;
    return $sign * result;
}
;

// 20.2.2.16 Math.fround(x)

_export(_export.S, 'Math', {
    fround: _mathFround
});

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])

var abs$1 = Math.abs;

_export(_export.S, 'Math', {
    hypot: function hypot(value1, value2) {
        // eslint-disable-line no-unused-vars
        var sum = 0;
        var i = 0;
        var aLen = arguments.length;
        var larg = 0;
        var arg, div;
        while (i < aLen) {
            arg = abs$1(arguments[i++]);
            if (larg < arg) {
                div = larg / arg;
                sum = sum * div * div + 1;
                larg = arg;
            } else if (arg > 0) {
                div = arg / larg;
                sum += div * div;
            } else
                sum += arg;
        }
        return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
});

// 20.2.2.18 Math.imul(x, y)

var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
_export(_export.S + _export.F * _fails(function() {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
    imul: function imul(x, y) {
        var UINT16 = 0xffff;
        var xn = +x;
        var yn = +y;
        var xl = UINT16 & xn;
        var yl = UINT16 & yn;
        return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
});

// 20.2.2.21 Math.log10(x)

_export(_export.S, 'Math', {
    log10: function log10(x) {
        return Math.log(x) * Math.LOG10E;
    }
});

// 20.2.2.20 Math.log1p(x)

_export(_export.S, 'Math', {
    log1p: _mathLog1p
});

// 20.2.2.22 Math.log2(x)

_export(_export.S, 'Math', {
    log2: function log2(x) {
        return Math.log(x) / Math.LN2;
    }
});

// 20.2.2.28 Math.sign(x)

_export(_export.S, 'Math', {
    sign: _mathSign
});

// 20.2.2.30 Math.sinh(x)

var exp$1 = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
_export(_export.S + _export.F * _fails(function() {
    return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
    sinh: function sinh(x) {
        return Math.abs(x = +x) < 1 ? (_mathExpm1(x) - _mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
    }
});

// 20.2.2.33 Math.tanh(x)

var exp$2 = Math.exp;

_export(_export.S, 'Math', {
    tanh: function tanh(x) {
        var a = _mathExpm1(x = +x);
        var b = _mathExpm1(-x);
        return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
    }
});

// 20.2.2.34 Math.trunc(x)

_export(_export.S, 'Math', {
    trunc: function trunc(it) {
        return (it > 0 ? Math.floor : Math.ceil)(it);
    }
});

var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
_export(_export.S + _export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
        // eslint-disable-line no-unused-vars
        var res = [];
        var aLen = arguments.length;
        var i = 0;
        var code;
        while (aLen > i) {
            code = +arguments[i++];
            if (_toAbsoluteIndex(code, 0x10ffff) !== code)
                throw RangeError(code + ' is not a valid code point');
            res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
        }
        return res.join('');
    }
});

_export(_export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
        var tpl = _toIobject(callSite.raw);
        var len = _toLength(tpl.length);
        var aLen = arguments.length;
        var res = [];
        var i = 0;
        while (len > i) {
            res.push(String(tpl[i++]));
            if (i < aLen)
                res.push(String(arguments[i]));
        }
        return res.join('');
    }
});

// 21.1.3.25 String.prototype.trim()
_stringTrim('trim', function($trim) {
    return function trim() {
        return $trim(this, 3);
    }
    ;
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function _stringAt(TO_STRING) {
    return function(that, pos) {
        var s = String(_defined(that));
        var i = _toInteger(pos);
        var l = s.length;
        var a, b;
        if (i < 0 || i >= l)
            return TO_STRING ? '' : undefined;
        a = s.charCodeAt(i);
        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    }
    ;
};

var _iterators = {};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function() {
    return this;
});

var _iterCreate = function _iterCreate(Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, {
        next: _propertyDesc(1, next)
    });
    _setToStringTag(Constructor, NAME + ' Iterator');
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next'in [].keys());
// Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
    return this;
};

var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function getMethod(kind) {
        if (!BUGGY && kind in proto)
            return proto[kind];
        switch (kind) {
        case KEYS:
            return function keys() {
                return new Constructor(this,kind);
            }
            ;
        case VALUES:
            return function values() {
                return new Constructor(this,kind);
            }
            ;
        }
        return function entries() {
            return new Constructor(this,kind);
        }
        ;
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            _setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (typeof IteratorPrototype[ITERATOR] != 'function')
                _hide(IteratorPrototype, ITERATOR, returnThis);
        }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
            return $native.call(this);
        }
        ;
    }
    // Define iterator
    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
        _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
        methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
        };
        if (FORCED)
            for (key in methods) {
                if (!(key in proto))
                    _redefine(proto, key, methods[key]);
            }
        else
            _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated) {
    this._t = String(iterated);
    // target
    this._i = 0;
    // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length)
        return {
            value: undefined,
            done: true
        };
    point = $at(O, index);
    this._i += point.length;
    return {
        value: point,
        done: false
    };
});

var $at$1 = _stringAt(false);
_export(_export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
        return $at$1(this, pos);
    }
});

// 7.2.8 IsRegExp(argument)

var MATCH = _wks('match');
var _isRegexp = function _isRegexp(it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// helper for String#{startsWith, endsWith, includes}

var _stringContext = function _stringContext(that, searchString, NAME) {
    if (_isRegexp(searchString))
        throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(_defined(that));
};

var MATCH$1 = _wks('match');
var _failsIsRegexp = function _failsIsRegexp(KEY) {
    var re = /./;
    try {
        '/./'[KEY](re);
    } catch (e) {
        try {
            re[MATCH$1] = false;
            return !'/./'[KEY](re);
        } catch (f) {/* empty */
        }
    }
    return true;
};

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString /* , endPosition = @length */
    ) {
        var that = _stringContext(this, searchString, ENDS_WITH);
        var endPosition = arguments.length > 1 ? arguments[1] : undefined;
        var len = _toLength(that.length);
        var end = endPosition === undefined ? len : Math.min(_toLength(endPosition), len);
        var search = String(searchString);
        return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
});

var INCLUDES = 'includes';

_export(_export.P + _export.F * _failsIsRegexp(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */
    ) {
        return !!~_stringContext(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
});

_export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
});

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

_export(_export.P + _export.F * _failsIsRegexp(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /* , position = 0 */
    ) {
        var that = _stringContext(this, searchString, STARTS_WITH);
        var index = _toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
        var search = String(searchString);
        return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
});

var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function createHTML(string, tag, attribute, value) {
    var S = String(_defined(string));
    var p1 = '<' + tag;
    if (attribute !== '')
        p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function _stringHtml(NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    _export(_export.P + _export.F * _fails(function() {
        var test = ''[NAME]('"');
        return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
};

// B.2.3.2 String.prototype.anchor(name)
_stringHtml('anchor', function(createHTML) {
    return function anchor(name) {
        return createHTML(this, 'a', 'name', name);
    }
    ;
});

// B.2.3.3 String.prototype.big()
_stringHtml('big', function(createHTML) {
    return function big() {
        return createHTML(this, 'big', '', '');
    }
    ;
});

// B.2.3.4 String.prototype.blink()
_stringHtml('blink', function(createHTML) {
    return function blink() {
        return createHTML(this, 'blink', '', '');
    }
    ;
});

// B.2.3.5 String.prototype.bold()
_stringHtml('bold', function(createHTML) {
    return function bold() {
        return createHTML(this, 'b', '', '');
    }
    ;
});

// B.2.3.6 String.prototype.fixed()
_stringHtml('fixed', function(createHTML) {
    return function fixed() {
        return createHTML(this, 'tt', '', '');
    }
    ;
});

// B.2.3.7 String.prototype.fontcolor(color)
_stringHtml('fontcolor', function(createHTML) {
    return function fontcolor(color) {
        return createHTML(this, 'font', 'color', color);
    }
    ;
});

// B.2.3.8 String.prototype.fontsize(size)
_stringHtml('fontsize', function(createHTML) {
    return function fontsize(size) {
        return createHTML(this, 'font', 'size', size);
    }
    ;
});

// B.2.3.9 String.prototype.italics()
_stringHtml('italics', function(createHTML) {
    return function italics() {
        return createHTML(this, 'i', '', '');
    }
    ;
});

// B.2.3.10 String.prototype.link(url)
_stringHtml('link', function(createHTML) {
    return function link(url) {
        return createHTML(this, 'a', 'href', url);
    }
    ;
});

// B.2.3.11 String.prototype.small()
_stringHtml('small', function(createHTML) {
    return function small() {
        return createHTML(this, 'small', '', '');
    }
    ;
});

// B.2.3.12 String.prototype.strike()
_stringHtml('strike', function(createHTML) {
    return function strike() {
        return createHTML(this, 'strike', '', '');
    }
    ;
});

// B.2.3.13 String.prototype.sub()
_stringHtml('sub', function(createHTML) {
    return function sub() {
        return createHTML(this, 'sub', '', '');
    }
    ;
});

// B.2.3.14 String.prototype.sup()
_stringHtml('sup', function(createHTML) {
    return function sup() {
        return createHTML(this, 'sup', '', '');
    }
    ;
});

// 20.3.3.1 / 15.9.4.4 Date.now()

_export(_export.S, 'Date', {
    now: function now() {
        return new Date().getTime();
    }
});

_export(_export.P + _export.F * _fails(function() {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
        toISOString: function toISOString() {
            return 1;
        }
    }) !== 1;
}), 'Date', {
    // eslint-disable-next-line no-unused-vars
    toJSON: function toJSON(key) {
        var O = _toObject(this);
        var pv = _toPrimitive(O);
        return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
});

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function lz(num) {
    return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
var _dateToIsoString = _fails(function() {
    return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !_fails(function() {
    $toISOString.call(new Date(NaN));
}) ? function toISOString() {
    if (!isFinite(getTime.call(this)))
        throw RangeError('Invalid time value');
    var d = this;
    var y = d.getUTCFullYear();
    var m = d.getUTCMilliseconds();
    var s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
}
: $toISOString;

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

// PhantomJS / old WebKit has a broken implementations
_export(_export.P + _export.F * (Date.prototype.toISOString !== _dateToIsoString), 'Date', {
    toISOString: _dateToIsoString
});

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime$1 = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
    _redefine(DateProto, TO_STRING, function toString() {
        var value = getTime$1.call(this);
        // eslint-disable-next-line no-self-compare
        return value === value ? $toString.call(this) : INVALID_DATE;
    });
}

var NUMBER$1 = 'number';

var _dateToPrimitive = function _dateToPrimitive(hint) {
    if (hint !== 'string' && hint !== NUMBER$1 && hint !== 'default')
        throw TypeError('Incorrect hint');
    return _toPrimitive(_anObject(this), hint != NUMBER$1);
};

var TO_PRIMITIVE$1 = _wks('toPrimitive');
var proto$1 = Date.prototype;

if (!(TO_PRIMITIVE$1 in proto$1))
    _hide(proto$1, TO_PRIMITIVE$1, _dateToPrimitive);

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)

_export(_export.S, 'Array', {
    isArray: _isArray
});

// call something on iterator step with safe closing on error

var _iterCall = function _iterCall(iterator, fn, value, entries) {
    try {
        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
        // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
        var ret = iterator['return'];
        if (ret !== undefined)
            _anObject(ret.call(iterator));
        throw e;
    }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function _isArrayIter(it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function _createProperty(object, index, value) {
    if (index in object)
        _objectDp.f(object, index, _propertyDesc(0, value));
    else
        object[index] = value;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function(it) {
    if (it != undefined)
        return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
}
;

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function() {
        SAFE_CLOSING = true;
    }
    ;
} catch (e) {/* empty */
}

var _iterDetect = function _iterDetect(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
        return false;
    var safe = false;
    try {
        var arr = [7];
        var iter = arr[ITERATOR$3]();
        iter.next = function() {
            return {
                done: safe = true
            };
        }
        ;
        arr[ITERATOR$3] = function() {
            return iter;
        }
        ;
        exec(arr);
    } catch (e) {/* empty */
    }
    return safe;
};

_export(_export.S + _export.F * !_iterDetect(function(iter) {}), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */
    ) {
        var O = _toObject(arrayLike);
        var C = typeof this == 'function' ? this : Array;
        var aLen = arguments.length;
        var mapfn = aLen > 1 ? arguments[1] : undefined;
        var mapping = mapfn !== undefined;
        var index = 0;
        var iterFn = core_getIteratorMethod(O);
        var length, result, step, iterator;
        if (mapping)
            mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
        // if object isn't iterable or it's array with default iterator - use simple case
        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
            for (iterator = iterFn.call(O),
            result = new C(); !(step = iterator.next()).done; index++) {
                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
            }
        } else {
            length = _toLength(O.length);
            for (result = new C(length); length > index; index++) {
                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
            }
        }
        result.length = index;
        return result;
    }
});

// WebKit Array.of isn't generic
_export(_export.S + _export.F * _fails(function() {
    function F() {/* empty */
    }
    return !(Array.of.call(F)instanceof F);
}), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of() /* ...args */
    {
        var index = 0;
        var aLen = arguments.length;
        var result = new (typeof this == 'function' ? this : Array)(aLen);
        while (aLen > index) {
            _createProperty(result, index, arguments[index++]);
        }
        result.length = aLen;
        return result;
    }
});

var _strictMethod = function _strictMethod(method, arg) {
    return !!method && _fails(function() {
        // eslint-disable-next-line no-useless-call
        arg ? method.call(null, function() {/* empty */
        }, 1) : method.call(null);
    });
};

// 22.1.3.13 Array.prototype.join(separator)

var arrayJoin = [].join;

// fallback for not array-like strings
_export(_export.P + _export.F * (_iobject != Object || !_strictMethod(arrayJoin)), 'Array', {
    join: function join(separator) {
        return arrayJoin.call(_toIobject(this), separator === undefined ? ',' : separator);
    }
});

var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
_export(_export.P + _export.F * _fails(function() {
    if (_html)
        arraySlice$1.call(_html);
}), 'Array', {
    slice: function slice(begin, end) {
        var len = _toLength(this.length);
        var klass = _cof(this);
        end = end === undefined ? len : end;
        if (klass == 'Array')
            return arraySlice$1.call(this, begin, end);
        var start = _toAbsoluteIndex(begin, len);
        var upTo = _toAbsoluteIndex(end, len);
        var size = _toLength(upTo - start);
        var cloned = new Array(size);
        var i = 0;
        for (; i < size; i++) {
            cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
        }
        return cloned;
    }
});

var $sort = [].sort;
var test$1 = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function() {
    // IE8-
    test$1.sort(undefined);
}) || !_fails(function() {
    // V8 bug
    test$1.sort(null);
    // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
        return comparefn === undefined ? $sort.call(_toObject(this)) : $sort.call(_toObject(this), _aFunction(comparefn));
    }
});

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function _arraySpeciesConstructor(original) {
    var C;
    if (_isArray(original)) {
        C = original.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || _isArray(C.prototype)))
            C = undefined;
        if (_isObject(C)) {
            C = C[SPECIES];
            if (C === null)
                C = undefined;
        }
    }
    return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)

var _arraySpeciesCreate = function _arraySpeciesCreate(original, length) {
    return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex

var _arrayMethods = function _arrayMethods(TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function($this, callbackfn, that) {
        var O = _toObject($this);
        var self = _iobject(O);
        var f = _ctx(callbackfn, that, 3);
        var length = _toLength(self.length);
        var index = 0;
        var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
        var val, res;
        for (; length > index; index++) {
            if (NO_HOLES || index in self) {
                val = self[index];
                res = f(val, index, O);
                if (TYPE) {
                    if (IS_MAP)
                        result[index] = res;
                        // map
                    else if (res)
                        switch (TYPE) {
                        case 3:
                            return true;
                            // some
                        case 5:
                            return val;
                            // find
                        case 6:
                            return index;
                            // findIndex
                        case 2:
                            result.push(val);
                            // filter
                        }
                    else if (IS_EVERY)
                        return false;
                    // every
                }
            }
        }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    }
    ;
};

var $forEach = _arrayMethods(0);
var STRICT = _strictMethod([].forEach, true);

_export(_export.P + _export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */
    ) {
        return $forEach(this, callbackfn, arguments[1]);
    }
});

var $map = _arrayMethods(1);

_export(_export.P + _export.F * !_strictMethod([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */
    ) {
        return $map(this, callbackfn, arguments[1]);
    }
});

var $filter = _arrayMethods(2);

_export(_export.P + _export.F * !_strictMethod([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */
    ) {
        return $filter(this, callbackfn, arguments[1]);
    }
});

var $some = _arrayMethods(3);

_export(_export.P + _export.F * !_strictMethod([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */
    ) {
        return $some(this, callbackfn, arguments[1]);
    }
});

var $every = _arrayMethods(4);

_export(_export.P + _export.F * !_strictMethod([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */
    ) {
        return $every(this, callbackfn, arguments[1]);
    }
});

var _arrayReduce = function _arrayReduce(that, callbackfn, aLen, memo, isRight) {
    _aFunction(callbackfn);
    var O = _toObject(that);
    var self = _iobject(O);
    var length = _toLength(O.length);
    var index = isRight ? length - 1 : 0;
    var i = isRight ? -1 : 1;
    if (aLen < 2)
        for (; ; ) {
            if (index in self) {
                memo = self[index];
                index += i;
                break;
            }
            index += i;
            if (isRight ? index < 0 : length <= index) {
                throw TypeError('Reduce of empty array with no initial value');
            }
        }
    for (; isRight ? index >= 0 : length > index; index += i) {
        if (index in self) {
            memo = callbackfn(memo, self[index], index, O);
        }
    }
    return memo;
};

_export(_export.P + _export.F * !_strictMethod([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */
    ) {
        return _arrayReduce(this, callbackfn, arguments.length, arguments[1], false);
    }
});

_export(_export.P + _export.F * !_strictMethod([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */
    ) {
        return _arrayReduce(this, callbackfn, arguments.length, arguments[1], true);
    }
});

var $indexOf = _arrayIncludes(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO || !_strictMethod($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /* , fromIndex = 0 */
    ) {
        return NEGATIVE_ZERO // convert -0 to +0
        ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
});

var $native$1 = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

_export(_export.P + _export.F * (NEGATIVE_ZERO$1 || !_strictMethod($native$1)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */
    ) {
        // convert -0 to +0
        if (NEGATIVE_ZERO$1)
            return $native$1.apply(this, arguments) || 0;
        var O = _toIobject(this);
        var length = _toLength(O.length);
        var index = length - 1;
        if (arguments.length > 1)
            index = Math.min(index, _toInteger(arguments[1]));
        if (index < 0)
            index = length + index;
        for (; index >= 0; index--) {
            if (index in O)
                if (O[index] === searchElement)
                    return index || 0;
        }
        return -1;
    }
});

var _arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */
, start /* = 0, end = @length */
) {
    var O = _toObject(this);
    var len = _toLength(O.length);
    var to = _toAbsoluteIndex(target, len);
    var from = _toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = Math.min((end === undefined ? len : _toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;
    if (from < to && to < from + count) {
        inc = -1;
        from += count - 1;
        to += count - 1;
    }
    while (count-- > 0) {
        if (from in O)
            O[to] = O[from];
        else
            delete O[to];
        to += inc;
        from += inc;
    }
    return O;
}
;

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto$1 = Array.prototype;
if (ArrayProto$1[UNSCOPABLES] == undefined)
    _hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function _addToUnscopables(key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
};

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

_export(_export.P, 'Array', {
    copyWithin: _arrayCopyWithin
});

_addToUnscopables('copyWithin');

var _arrayFill = function fill(value /* , start = 0, end = @length */
) {
    var O = _toObject(this);
    var length = _toLength(O.length);
    var aLen = arguments.length;
    var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
    var end = aLen > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
    while (endPos > index) {
        O[index++] = value;
    }
    return O;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

_export(_export.P, 'Array', {
    fill: _arrayFill
});

_addToUnscopables('fill');

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $find = _arrayMethods(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in [])
    Array(1)[KEY](function() {
        forced = false;
    });
_export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */
    ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
_addToUnscopables(KEY);

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $find$1 = _arrayMethods(6);
var KEY$1 = 'findIndex';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in [])
    Array(1)[KEY$1](function() {
        forced$1 = false;
    });
_export(_export.P + _export.F * forced$1, 'Array', {
    findIndex: function findIndex(callbackfn /* , that = undefined */
    ) {
        return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
});
_addToUnscopables(KEY$1);

var SPECIES$1 = _wks('species');

var _setSpecies = function _setSpecies(KEY) {
    var C = _global[KEY];
    if (_descriptors && C && !C[SPECIES$1])
        _objectDp.f(C, SPECIES$1, {
            configurable: true,
            get: function get() {
                return this;
            }
        });
};

_setSpecies('Array');

var _iterStep = function _iterStep(done, value) {
    return {
        value: value,
        done: !!done
    };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind) {
    this._t = _toIobject(iterated);
    // target
    this._i = 0;
    // next index
    this._k = kind;
    // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function() {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
        this._t = undefined;
        return _iterStep(1);
    }
    if (kind == 'keys')
        return _iterStep(0, index);
    if (kind == 'values')
        return _iterStep(0, O[index]);
    return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function _flags() {
    var that = _anObject(this);
    var result = '';
    if (that.global)
        result += 'g';
    if (that.ignoreCase)
        result += 'i';
    if (that.multiline)
        result += 'm';
    if (that.unicode)
        result += 'u';
    if (that.sticky)
        result += 'y';
    return result;
};

var dP$4 = _objectDp.f;
var gOPN$3 = _objectGopn.f;

var $RegExp = _global.RegExp;
var Base$1 = $RegExp;
var proto$2 = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors && (!CORRECT_NEW || _fails(function() {
    re2[_wks('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
    $RegExp = function RegExp(p, f) {
        var tiRE = this instanceof $RegExp;
        var piRE = _isRegexp(p);
        var fiU = f === undefined;
        return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : _inheritIfRequired(CORRECT_NEW ? new Base$1(piRE && !fiU ? p.source : p,f) : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f), tiRE ? this : proto$2, $RegExp);
    }
    ;
    var proxy = function proxy(key) {
        key in $RegExp || dP$4($RegExp, key, {
            configurable: true,
            get: function get() {
                return Base$1[key];
            },
            set: function set(it) {
                Base$1[key] = it;
            }
        });
    };
    for (var keys$1 = gOPN$3(Base$1), i = 0; keys$1.length > i; ) {
        proxy(keys$1[i++]);
    }
    proto$2.constructor = $RegExp;
    $RegExp.prototype = proto$2;
    _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function() {
    var re1 = /a/
      , re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
    patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;

        if (NPCG_INCLUDED) {
            reCopy = new RegExp('^' + re.source + '$(?!\\s)',_flags.call(re));
        }
        if (UPDATES_LAST_INDEX_WRONG)
            lastIndex = re[LAST_INDEX];

        match = nativeExec.call(re, str);

        if (UPDATES_LAST_INDEX_WRONG && match) {
            re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
        }
        if (NPCG_INCLUDED && match && match.length > 1) {
            // Fix browsers whose `exec` methods don't consistently return `undefined`
            // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
            // eslint-disable-next-line no-loop-func
            nativeReplace.call(match[0], reCopy, function() {
                for (i = 1; i < arguments.length - 2; i++) {
                    if (arguments[i] === undefined)
                        match[i] = undefined;
                }
            });
        }

        return match;
    }
    ;
}

var _regexpExec = patchedExec;

_export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
}, {
    exec: _regexpExec
});

// 21.2.5.3 get RegExp.prototype.flags()
if (_descriptors && /./g.flags != 'g')
    _objectDp.f(RegExp.prototype, 'flags', {
        configurable: true,
        get: _flags
    });

var TO_STRING$1 = 'toString';
var $toString$1 = /./[TO_STRING$1];

var define = function define(fn) {
    _redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_fails(function() {
    return $toString$1.call({
        source: 'a',
        flags: 'b'
    }) != '/a/b';
})) {
    define(function toString() {
        var R = _anObject(this);
        return '/'.concat(R.source, '/', 'flags'in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
    // FF44- RegExp#toString has a wrong name
} else if ($toString$1.name != TO_STRING$1) {
    define(function toString() {
        return $toString$1.call(this);
    });
}

var at = _stringAt(true);

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var _advanceStringIndex = function _advanceStringIndex(S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
};

var builtinExec = RegExp.prototype.exec;

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var _regexpExecAbstract = function _regexpExecAbstract(R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
        var result = exec.call(R, S);
        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) !== 'object') {
            throw new TypeError('RegExp exec method returned something other than an Object or null');
        }
        return result;
    }
    if (_classof(R) !== 'RegExp') {
        throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
};

var SPECIES$2 = _wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function() {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function() {
        var result = [];
        result.groups = {
            a: '7'
        };
        return result;
    }
    ;
    return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function() {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function() {
        return originalExec.apply(this, arguments);
    }
    ;
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

var _fixReWks = function _fixReWks(KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function() {
        // String methods call symbol-named RegEp methods
        var O = {};
        O[SYMBOL] = function() {
            return 7;
        }
        ;
        return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function() {
        // Symbol-named RegExp methods call .exec
        var execCalled = false;
        var re = /a/;
        re.exec = function() {
            execCalled = true;
            return null;
        }
        ;
        if (KEY === 'split') {
            // RegExp[@@split] doesn't call the regex's exec method, but first creates
            // a new one. We need to return the patched regex when creating the new one.
            re.constructor = {};
            re.constructor[SPECIES$2] = function() {
                return re;
            }
            ;
        }
        re[SYMBOL]('');
        return !execCalled;
    }) : undefined;

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
        var nativeRegExpMethod = /./[SYMBOL];
        var fns = exec(_defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
            if (regexp.exec === _regexpExec) {
                if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                    // The native String method already delegates to @@method (this
                    // polyfilled function), leasing to infinite recursion.
                    // We avoid it by directly calling the native @@method method.
                    return {
                        done: true,
                        value: nativeRegExpMethod.call(regexp, str, arg2)
                    };
                }
                return {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                };
            }
            return {
                done: false
            };
        });
        var strfn = fns[0];
        var rxfn = fns[1];

        _redefine(String.prototype, KEY, strfn);
        _hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function(string, arg) {
            return rxfn.call(string, this, arg);
        }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function(string) {
            return rxfn.call(string, this);
        }
        );
    }
};

// @@match logic
_fixReWks('match', 1, function(defined, MATCH, $match, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }
    , // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function(regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done)
            return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global)
            return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
            var matchStr = String(result[0]);
            A[n] = matchStr;
            if (matchStr === '')
                rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
            n++;
        }
        return n === 0 ? null : A;
    }
    ];
});

var max$1 = Math.max;
var min$2 = Math.min;
var floor$3 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
};

// @@replace logic
_fixReWks('replace', 2, function(defined, REPLACE, $replace, maybeCallNative) {
    return [// `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }
    , // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function(regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done)
            return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace)
            replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
            var fullUnicode = rx.unicode;
            rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
            var result = _regexpExecAbstract(rx, S);
            if (result === null)
                break;
            results.push(result);
            if (!global)
                break;
            var matchStr = String(result[0]);
            if (matchStr === '')
                rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
            result = results[i];
            var matched = String(result[0]);
            var position = max$1(min$2(_toInteger(result.index), S.length), 0);
            var captures = [];
            // NOTE: This is equivalent to
            //   captures = result.slice(1).map(maybeToString)
            // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
            // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
            // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
            for (var j = 1; j < result.length; j++) {
                captures.push(maybeToString(result[j]));
            }
            var namedCaptures = result.groups;
            if (functionalReplace) {
                var replacerArgs = [matched].concat(captures, position, S);
                if (namedCaptures !== undefined)
                    replacerArgs.push(namedCaptures);
                var replacement = String(replaceValue.apply(undefined, replacerArgs));
            } else {
                replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
            }
            if (position >= nextSourcePosition) {
                accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                nextSourcePosition = position + matched.length;
            }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
    }
    ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
        var tailPos = position + matched.length;
        var m = captures.length;
        var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
        if (namedCaptures !== undefined) {
            namedCaptures = _toObject(namedCaptures);
            symbols = SUBSTITUTION_SYMBOLS;
        }
        return $replace.call(replacement, symbols, function(match, ch) {
            var capture;
            switch (ch.charAt(0)) {
            case '$':
                return '$';
            case '&':
                return matched;
            case '`':
                return str.slice(0, position);
            case "'":
                return str.slice(tailPos);
            case '<':
                capture = namedCaptures[ch.slice(1, -1)];
                break;
            default:
                // \d\d?
                var n = +ch;
                if (n === 0)
                    return match;
                if (n > m) {
                    var f = floor$3(n / 10);
                    if (f === 0)
                        return match;
                    if (f <= m)
                        return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                    return match;
                }
                capture = captures[n - 1];
            }
            return capture === undefined ? '' : capture;
        });
    }
});

// @@search logic
_fixReWks('search', 1, function(defined, SEARCH, $search, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[SEARCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }
    , // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function(regexp) {
        var res = maybeCallNative($search, regexp, this);
        if (res.done)
            return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        var previousLastIndex = rx.lastIndex;
        if (!_sameValue(previousLastIndex, 0))
            rx.lastIndex = 0;
        var result = _regexpExecAbstract(rx, S);
        if (!_sameValue(rx.lastIndex, previousLastIndex))
            rx.lastIndex = previousLastIndex;
        return result === null ? -1 : result.index;
    }
    ];
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)

var SPECIES$3 = _wks('species');
var _speciesConstructor = function _speciesConstructor(O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES$3]) == undefined ? D : _aFunction(S);
};

var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX$1 = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !_fails(function() {});

// @@split logic
_fixReWks('split', 2, function(defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
        // based on es5-shim implementation, need to rework it
        internalSplit = function internalSplit(separator, limit) {
            var string = String(this);
            if (separator === undefined && limit === 0)
                return [];
            // If `separator` is not a regex, use native split
            if (!_isRegexp(separator))
                return $split.call(string, separator, limit);
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0;
            var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
            // Make `global` and avoid `lastIndex` issues by working with a copy
            var separatorCopy = new RegExp(separator.source,flags + 'g');
            var match, lastIndex, lastLength;
            while (match = _regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy[LAST_INDEX$1];
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    if (match[LENGTH] > 1 && match.index < string[LENGTH])
                        $push.apply(output, match.slice(1));
                    lastLength = match[0][LENGTH];
                    lastLastIndex = lastIndex;
                    if (output[LENGTH] >= splitLimit)
                        break;
                }
                if (separatorCopy[LAST_INDEX$1] === match.index)
                    separatorCopy[LAST_INDEX$1]++;
                // Avoid an infinite loop
            }
            if (lastLastIndex === string[LENGTH]) {
                if (lastLength || !separatorCopy.test(''))
                    output.push('');
            } else
                output.push(string.slice(lastLastIndex));
            return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
        }
        ;
        // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
        internalSplit = function internalSplit(separator, limit) {
            return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
        }
        ;
    } else {
        internalSplit = $split;
    }

    return [// `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
        var O = defined(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }
    , // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done)
            return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var C = _speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')',flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0)
            return [];
        if (S.length === 0)
            return _regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
            splitter.lastIndex = SUPPORTS_Y ? q : 0;
            var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
            var e;
            if (z === null || (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                q = _advanceStringIndex(S, q, unicodeMatching);
            } else {
                A.push(S.slice(p, q));
                if (A.length === lim)
                    return A;
                for (var i = 1; i <= z.length - 1; i++) {
                    A.push(z[i]);
                    if (A.length === lim)
                        return A;
                }
                q = p = e;
            }
        }
        A.push(S.slice(p));
        return A;
    }
    ];
});

var _anInstance = function _anInstance(it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
        throw TypeError(name + ': incorrect invocation!');
    }
    return it;
};

var _forOf = createCommonjsModule(function(module) {
    var BREAK = {};
    var RETURN = {};
    var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
        var iterFn = ITERATOR ? function() {
            return iterable;
        }
        : core_getIteratorMethod(iterable);
        var f = _ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != 'function')
            throw TypeError(iterable + ' is not iterable!');
        // fast case for arrays with default iterator
        if (_isArrayIter(iterFn))
            for (length = _toLength(iterable.length); length > index; index++) {
                result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                if (result === BREAK || result === RETURN)
                    return result;
            }
        else
            for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
                result = _iterCall(iterator, f, step.value, entries);
                if (result === BREAK || result === RETURN)
                    return result;
            }
    }
    ;
    exports.BREAK = BREAK;
    exports.RETURN = RETURN;
});

var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var listener = function listener(event) {
    run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
        var args = [];
        var i = 1;
        while (arguments.length > i) {
            args.push(arguments[i++]);
        }
        queue[++counter] = function() {
            // eslint-disable-next-line no-new-func
            _invoke(typeof fn == 'function' ? fn : Function(fn), args);
        }
        ;
        defer(counter);
        return counter;
    }
    ;
    clearTask = function clearImmediate(id) {
        delete queue[id];
    }
    ;
    // Node.js 0.8-
    if (_cof(process) == 'process') {
        defer = function defer(id) {
            process.nextTick(_ctx(run, id, 1));
        }
        ;
        // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
        defer = function defer(id) {
            Dispatch.now(_ctx(run, id, 1));
        }
        ;
        // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = _ctx(port.postMessage, port, 1);
        // Browsers with postMessage, skip WebWorkers
        // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
        defer = function defer(id) {
            _global.postMessage(id + '', '*');
        }
        ;
        _global.addEventListener('message', listener, false);
        // IE8-
    } else if (ONREADYSTATECHANGE in _domCreate('script')) {
        defer = function defer(id) {
            _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function() {
                _html.removeChild(this);
                run.call(id);
            }
            ;
        }
        ;
        // Rest old browsers
    } else {
        defer = function defer(id) {
            setTimeout(_ctx(run, id, 1), 0);
        }
        ;
    }
}
var _task = {
    set: setTask,
    clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode = _cof(process$1) == 'process';

var _microtask = function _microtask() {
    var head, last, notify;

    var flush = function flush() {
        var parent, fn;
        if (isNode && (parent = process$1.domain))
            parent.exit();
        while (head) {
            fn = head.fn;
            head = head.next;
            try {
                fn();
            } catch (e) {
                if (head)
                    notify();
                else
                    last = undefined;
                throw e;
            }
        }
        last = undefined;
        if (parent)
            parent.enter();
    };

    // Node.js
    if (isNode) {
        notify = function notify() {
            process$1.nextTick(flush);
        }
        ;
        // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
        var toggle = true;
        var node = document.createTextNode('');
        new Observer(flush).observe(node, {
            characterData: true
        });
        // eslint-disable-line no-new
        notify = function notify() {
            node.data = toggle = !toggle;
        }
        ;
        // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        var promise = Promise$1.resolve(undefined);
        notify = function notify() {
            promise.then(flush);
        }
        ;
        // for other environments - macrotask based on:
        // - setImmediate
        // - MessageChannel
        // - window.postMessag
        // - onreadystatechange
        // - setTimeout
    } else {
        notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(_global, flush);
        }
        ;
    }

    return function(fn) {
        var task = {
            fn: fn,
            next: undefined
        };
        if (last)
            last.next = task;
        if (!head) {
            head = task;
            notify();
        }
        last = task;
    }
    ;
};

// 25.4.1.5 NewPromiseCapability(C)

function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
            throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    }
    );
    this.resolve = _aFunction(resolve);
    this.reject = _aFunction(reject);
}

var f$7 = function f(C) {
    return new PromiseCapability(C);
};

var _newPromiseCapability = {
    f: f$7
};

var _perform = function _perform(exec) {
    try {
        return {
            e: false,
            v: exec()
        };
    } catch (e) {
        return {
            e: true,
            v: e
        };
    }
};

var navigator$1 = _global.navigator;

var _userAgent = navigator$1 && navigator$1.userAgent || '';

var _promiseResolve = function _promiseResolve(C, x) {
    _anObject(C);
    if (_isObject(x) && x.constructor === C)
        return x;
    var promiseCapability = _newPromiseCapability.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};

var _redefineAll = function _redefineAll(target, src, safe) {
    for (var key in src) {
        _redefine(target, key, src[key], safe);
    }
    return target;
};

var task = _task.set;
var microtask = _microtask();

var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var versions = process$2 && process$2.versions;
var v8 = versions && versions.v8 || '';
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process$2) == 'process';
var empty = function empty() {/* empty */
};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function() {
    try {
        // correct subclassing with @@species support
        var promise = $Promise.resolve(1);
        var FakePromise = (promise.constructor = {})[_wks('species')] = function(exec) {
            exec(empty, empty);
        }
        ;
        // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
        return (isNode$1 || typeof PromiseRejectionEvent == 'function') && promise.then(empty)instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0 && _userAgent.indexOf('Chrome/66') === -1;
    } catch (e) {/* empty */
    }
}();

// helpers
var isThenable = function isThenable(it) {
    var then;
    return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
    if (promise._n)
        return;
    promise._n = true;
    var chain = promise._c;
    microtask(function() {
        var value = promise._v;
        var ok = promise._s == 1;
        var i = 0;
        var run = function run(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
                if (handler) {
                    if (!ok) {
                        if (promise._h == 2)
                            onHandleUnhandled(promise);
                        promise._h = 1;
                    }
                    if (handler === true)
                        result = value;
                    else {
                        if (domain)
                            domain.enter();
                        result = handler(value);
                        // may throw
                        if (domain) {
                            domain.exit();
                            exited = true;
                        }
                    }
                    if (result === reaction.promise) {
                        reject(TypeError$1('Promise-chain cycle'));
                    } else if (then = isThenable(result)) {
                        then.call(result, resolve, reject);
                    } else
                        resolve(result);
                } else
                    reject(value);
            } catch (e) {
                if (domain && !exited)
                    domain.exit();
                reject(e);
            }
        };
        while (chain.length > i) {
            run(chain[i++]);
        }
        // variable length - can't use forEach
        promise._c = [];
        promise._n = false;
        if (isReject && !promise._h)
            onUnhandled(promise);
    });
};
var onUnhandled = function onUnhandled(promise) {
    task.call(_global, function() {
        var value = promise._v;
        var unhandled = isUnhandled(promise);
        var result, handler, console;
        if (unhandled) {
            result = _perform(function() {
                if (isNode$1) {
                    process$2.emit('unhandledRejection', value, promise);
                } else if (handler = _global.onunhandledrejection) {
                    handler({
                        promise: promise,
                        reason: value
                    });
                } else if ((console = _global.console) && console.error) {
                    console.error('Unhandled promise rejection', value);
                }
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
        }
        promise._a = undefined;
        if (unhandled && result.e)
            throw result.v;
    });
};
var isUnhandled = function isUnhandled(promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
    task.call(_global, function() {
        var handler;
        if (isNode$1) {
            process$2.emit('rejectionHandled', promise);
        } else if (handler = _global.onrejectionhandled) {
            handler({
                promise: promise,
                reason: promise._v
            });
        }
    });
};
var $reject = function $reject(value) {
    var promise = this;
    if (promise._d)
        return;
    promise._d = true;
    promise = promise._w || promise;
    // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a)
        promise._a = promise._c.slice();
    notify(promise, true);
};
var $resolve = function $resolve(value) {
    var promise = this;
    var then;
    if (promise._d)
        return;
    promise._d = true;
    promise = promise._w || promise;
    // unwrap
    try {
        if (promise === value)
            throw TypeError$1("Promise can't be resolved itself");
        if (then = isThenable(value)) {
            microtask(function() {
                var wrapper = {
                    _w: promise,
                    _d: false
                };
                // wrap
                try {
                    then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
                } catch (e) {
                    $reject.call(wrapper, e);
                }
            });
        } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
        }
    } catch (e) {
        $reject.call({
            _w: promise,
            _d: false
        }, e);
        // wrap
    }
};

// constructor polyfill
if (!USE_NATIVE$1) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
        _anInstance(this, $Promise, PROMISE, '_h');
        _aFunction(executor);
        Internal.call(this);
        try {
            executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
        } catch (err) {
            $reject.call(this, err);
        }
    }
    ;
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
        this._c = [];
        // <- awaiting reactions
        this._a = undefined;
        // <- checked in isUnhandled reactions
        this._s = 0;
        // <- state
        this._d = false;
        // <- done
        this._v = undefined;
        // <- value
        this._h = 0;
        // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
        this._n = false;
        // <- notify
    }
    ;
    Internal.prototype = _redefineAll($Promise.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = isNode$1 ? process$2.domain : undefined;
            this._c.push(reaction);
            if (this._a)
                this._a.push(reaction);
            if (this._s)
                notify(this, false);
            return reaction.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
        }
    });
    OwnPromiseCapability = function OwnPromiseCapability() {
        var promise = new Internal();
        this.promise = promise;
        this.resolve = _ctx($resolve, promise, 1);
        this.reject = _ctx($reject, promise, 1);
    }
    ;
    _newPromiseCapability.f = newPromiseCapability = function newPromiseCapability(C) {
        return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    }
    ;
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, {
    Promise: $Promise
});
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
        var capability = newPromiseCapability(this);
        var $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
    }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
        return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
    }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function(iter) {
    $Promise.all(iter)['catch'](empty);
})), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = _perform(function() {
            var values = [];
            var index = 0;
            var remaining = 1;
            _forOf(iterable, false, function(promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function(value) {
                    if (alreadyCalled)
                        return;
                    alreadyCalled = true;
                    values[$index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.e)
            reject(result.v);
        return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
        var C = this;
        var capability = newPromiseCapability(C);
        var reject = capability.reject;
        var result = _perform(function() {
            _forOf(iterable, false, function(promise) {
                C.resolve(promise).then(capability.resolve, reject);
            });
        });
        if (result.e)
            reject(result.v);
        return capability.promise;
    }
});

var _validateCollection = function _validateCollection(it, TYPE) {
    if (!_isObject(it) || it._t !== TYPE)
        throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
    return it;
};

var dP$5 = _objectDp.f;

var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
    // fast case
    var index = fastKey(key);
    var entry;
    if (index !== 'F')
        return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
        if (entry.k == key)
            return entry;
    }
};

var _collectionStrong = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            _anInstance(that, C, NAME, '_i');
            that._t = NAME;
            // collection type
            that._i = _objectCreate(null);
            // index
            that._f = undefined;
            // first entry
            that._l = undefined;
            // last entry
            that[SIZE] = 0;
            // size
            if (iterable != undefined)
                _forOf(iterable, IS_MAP, that[ADDER], that);
        });
        _redefineAll(C.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function clear() {
                for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                    entry.r = true;
                    if (entry.p)
                        entry.p = entry.p.n = undefined;
                    delete data[entry.i];
                }
                that._f = that._l = undefined;
                that[SIZE] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            'delete': function _delete(key) {
                var that = _validateCollection(this, NAME);
                var entry = getEntry(that, key);
                if (entry) {
                    var next = entry.n;
                    var prev = entry.p;
                    delete that._i[entry.i];
                    entry.r = true;
                    if (prev)
                        prev.n = next;
                    if (next)
                        next.p = prev;
                    if (that._f == entry)
                        that._f = next;
                    if (that._l == entry)
                        that._l = prev;
                    that[SIZE]--;
                }
                return !!entry;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function forEach(callbackfn /* , that = undefined */
            ) {
                _validateCollection(this, NAME);
                var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                var entry;
                while (entry = entry ? entry.n : this._f) {
                    f(entry.v, entry.k, this);
                    // revert to the last existing entry
                    while (entry && entry.r) {
                        entry = entry.p;
                    }
                }
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function has(key) {
                return !!getEntry(_validateCollection(this, NAME), key);
            }
        });
        if (_descriptors)
            dP$5(C.prototype, 'size', {
                get: function get() {
                    return _validateCollection(this, NAME)[SIZE];
                }
            });
        return C;
    },
    def: function def(that, key, value) {
        var entry = getEntry(that, key);
        var prev, index;
        // change existing entry
        if (entry) {
            entry.v = value;
            // create new entry
        } else {
            that._l = entry = {
                i: index = fastKey(key, true),
                // <- index
                k: key,
                // <- key
                v: value,
                // <- value
                p: prev = that._l,
                // <- previous entry
                n: undefined,
                // <- next entry
                r: false // <- removed
            };
            if (!that._f)
                that._f = entry;
            if (prev)
                prev.n = entry;
            that[SIZE]++;
            // add to index
            if (index !== 'F')
                that._i[index] = entry;
        }
        return that;
    },
    getEntry: getEntry,
    setStrong: function setStrong(C, NAME, IS_MAP) {
        // add .keys, .values, .entries, [@@iterator]
        // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
        _iterDefine(C, NAME, function(iterated, kind) {
            this._t = _validateCollection(iterated, NAME);
            // target
            this._k = kind;
            // kind
            this._l = undefined;
            // previous
        }, function() {
            var that = this;
            var kind = that._k;
            var entry = that._l;
            // revert to the last existing entry
            while (entry && entry.r) {
                entry = entry.p;
            }
            // get next entry
            if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                // or finish the iteration
                that._t = undefined;
                return _iterStep(1);
            }
            // return step by kind
            if (kind == 'keys')
                return _iterStep(0, entry.k);
            if (kind == 'values')
                return _iterStep(0, entry.v);
            return _iterStep(0, [entry.k, entry.v]);
        }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

        // add [@@species], 23.1.2.2, 23.2.2.2
        _setSpecies(NAME);
    }
};

var _collection = function _collection(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = _global[NAME];
    var C = Base;
    var ADDER = IS_MAP ? 'set' : 'add';
    var proto = C && C.prototype;
    var O = {};
    var fixMethod = function fixMethod(KEY) {
        var fn = proto[KEY];
        _redefine(proto, KEY, KEY == 'delete' ? function(a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        }
        : KEY == 'has' ? function has(a) {
            return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
        }
        : KEY == 'get' ? function get(a) {
            return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
        }
        : KEY == 'add' ? function add(a) {
            fn.call(this, a === 0 ? 0 : a);
            return this;
        }
        : function set(a, b) {
            fn.call(this, a === 0 ? 0 : a, b);
            return this;
        }
        );
    };
    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function() {
        new C().entries().next();
    }))) {
        // create collection constructor
        C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
        _redefineAll(C.prototype, methods);
        _meta.NEED = true;
    } else {
        var instance = new C();
        // early implementations not supports chaining
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
        var THROWS_ON_PRIMITIVES = _fails(function() {
            instance.has(1);
        });
        // most early implementations doesn't supports iterables, most modern - not close it correctly
        var ACCEPT_ITERABLES = _iterDetect(function(iter) {
            new C(iter);
        });
        // eslint-disable-line no-new
        // for early implementations -0 and +0 not the same
        var BUGGY_ZERO = !IS_WEAK && _fails(function() {
            // V8 ~ Chromium 42- fails only with 5+ elements
            var $instance = new C();
            var index = 5;
            while (index--) {
                $instance[ADDER](index, index);
            }
            return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
            C = wrapper(function(target, iterable) {
                _anInstance(target, C, NAME);
                var that = _inheritIfRequired(new Base(), target, C);
                if (iterable != undefined)
                    _forOf(iterable, IS_MAP, that[ADDER], that);
                return that;
            });
            C.prototype = proto;
            proto.constructor = C;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
            fixMethod('delete');
            fixMethod('has');
            IS_MAP && fixMethod('get');
        }
        if (BUGGY_ZERO || HASNT_CHAINING)
            fixMethod(ADDER);
        // weak collections should not contains .clear method
        if (IS_WEAK && proto.clear)
            delete proto.clear;
    }

    _setToStringTag(C, NAME);

    O[NAME] = C;
    _export(_export.G + _export.W + _export.F * (C != Base), O);

    if (!IS_WEAK)
        common.setStrong(C, NAME, IS_MAP);

    return C;
};

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function(get) {
    return function Map() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    }
    ;
}, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
        var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
        return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
        return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
    }
}, _collectionStrong, true);

var SET = 'Set';

// 23.2 Set Objects
var es6_set = _collection(SET, function(get) {
    return function Set() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    }
    ;
}, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
        return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
    }
}, _collectionStrong);

var getWeak = _meta.getWeak;

var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
    return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return arrayFind(store.a, function(it) {
        return it[0] === key;
    });
};
UncaughtFrozenStore.prototype = {
    get: function get(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
            return entry[1];
    },
    has: function has(key) {
        return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
            entry[1] = value;
        else
            this.a.push([key, value]);
    },
    'delete': function _delete(key) {
        var index = arrayFindIndex(this.a, function(it) {
            return it[0] === key;
        });
        if (~index)
            this.a.splice(index, 1);
        return !!~index;
    }
};

var _collectionWeak = {
    getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
        var C = wrapper(function(that, iterable) {
            _anInstance(that, C, NAME, '_i');
            that._t = NAME;
            // collection type
            that._i = id$1++;
            // collection id
            that._l = undefined;
            // leak store for uncaught frozen objects
            if (iterable != undefined)
                _forOf(iterable, IS_MAP, that[ADDER], that);
        });
        _redefineAll(C.prototype, {
            // 23.3.3.2 WeakMap.prototype.delete(key)
            // 23.4.3.3 WeakSet.prototype.delete(value)
            'delete': function _delete(key) {
                if (!_isObject(key))
                    return false;
                var data = getWeak(key);
                if (data === true)
                    return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
                return data && _has(data, this._i) && delete data[this._i];
            },
            // 23.3.3.4 WeakMap.prototype.has(key)
            // 23.4.3.4 WeakSet.prototype.has(value)
            has: function has(key) {
                if (!_isObject(key))
                    return false;
                var data = getWeak(key);
                if (data === true)
                    return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
                return data && _has(data, this._i);
            }
        });
        return C;
    },
    def: function def(that, key, value) {
        var data = getWeak(_anObject(key), true);
        if (data === true)
            uncaughtFrozenStore(that).set(key, value);
        else
            data[that._i] = value;
        return that;
    },
    ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function(module) {

    var each = _arrayMethods(0);

    var NATIVE_WEAK_MAP = _validateCollection;
    var IS_IE11 = !_global.ActiveXObject && 'ActiveXObject'in _global;
    var WEAK_MAP = 'WeakMap';
    var getWeak = _meta.getWeak;
    var isExtensible = Object.isExtensible;
    var uncaughtFrozenStore = _collectionWeak.ufstore;
    var InternalMap;

    var wrapper = function wrapper(get) {
        return function WeakMap() {
            return get(this, arguments.length > 0 ? arguments[0] : undefined);
        }
        ;
    };

    var methods = {
        // 23.3.3.3 WeakMap.prototype.get(key)
        get: function get(key) {
            if (_isObject(key)) {
                var data = getWeak(key);
                if (data === true)
                    return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
                return data ? data[this._i] : undefined;
            }
        },
        // 23.3.3.5 WeakMap.prototype.set(key, value)
        set: function set(key, value) {
            return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
        }
    };

    // 23.3 WeakMap Objects
    var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

    // IE11 WeakMap frozen keys fix
    if (NATIVE_WEAK_MAP && IS_IE11) {
        InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
        _objectAssign(InternalMap.prototype, methods);
        _meta.NEED = true;
        each(['delete', 'has', 'get', 'set'], function(key) {
            var proto = $WeakMap.prototype;
            var method = proto[key];
            _redefine(proto, key, function(a, b) {
                // store frozen objects on internal weakmap shim
                if (_isObject(a) && !isExtensible(a)) {
                    if (!this._f)
                        this._f = new InternalMap();
                    var result = this._f[key](a, b);
                    return key == 'set' ? this : result;
                    // store all the rest on native weakmap
                }
                return method.call(this, a, b);
            });
        });
    }
});

var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
_collection(WEAK_SET, function(get) {
    return function WeakSet() {
        return get(this, arguments.length > 0 ? arguments[0] : undefined);
    }
    ;
}, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
        return _collectionWeak.def(_validateCollection(this, WEAK_SET), value, true);
    }
}, _collectionWeak, false, true);

var TYPED = _uid('typed_array');
var VIEW = _uid('view');
var ABV = !!(_global.ArrayBuffer && _global.DataView);
var CONSTR = ABV;
var i$1 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

while (i$1 < l) {
    if (Typed = _global[TypedArrayConstructors[i$1++]]) {
        _hide(Typed.prototype, TYPED, true);
        _hide(Typed.prototype, VIEW, true);
    } else
        CONSTR = false;
}

var _typed = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
};

// https://tc39.github.io/ecma262/#sec-toindex

var _toIndex = function _toIndex(it) {
    if (it === undefined)
        return 0;
    var number = _toInteger(it);
    var length = _toLength(number);
    if (number !== length)
        throw RangeError('Wrong length!');
    return length;
};

var _typedBuffer = createCommonjsModule(function(module, exports) {

    var gOPN = _objectGopn.f;
    var dP = _objectDp.f;

    var ARRAY_BUFFER = 'ArrayBuffer';
    var DATA_VIEW = 'DataView';
    var PROTOTYPE = 'prototype';
    var WRONG_LENGTH = 'Wrong length!';
    var WRONG_INDEX = 'Wrong index!';
    var $ArrayBuffer = _global[ARRAY_BUFFER];
    var $DataView = _global[DATA_VIEW];
    var Math = _global.Math;
    var RangeError = _global.RangeError;
    // eslint-disable-next-line no-shadow-restricted-names
    var Infinity = _global.Infinity;
    var BaseBuffer = $ArrayBuffer;
    var abs = Math.abs;
    var pow = Math.pow;
    var floor = Math.floor;
    var log = Math.log;
    var LN2 = Math.LN2;
    var BUFFER = 'buffer';
    var BYTE_LENGTH = 'byteLength';
    var BYTE_OFFSET = 'byteOffset';
    var $BUFFER = _descriptors ? '_b' : BUFFER;
    var $LENGTH = _descriptors ? '_l' : BYTE_LENGTH;
    var $OFFSET = _descriptors ? '_o' : BYTE_OFFSET;

    // IEEE754 conversions based on https://github.com/feross/ieee754
    function packIEEE754(value, mLen, nBytes) {
        var buffer = new Array(nBytes);
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
        var i = 0;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        var e, m, c;
        value = abs(value);
        // eslint-disable-next-line no-self-compare
        if (value != value || value === Infinity) {
            // eslint-disable-next-line no-self-compare
            m = value != value ? 1 : 0;
            e = eMax;
        } else {
            e = floor(log(value) / LN2);
            if (value * (c = pow(2, -e)) < 1) {
                e--;
                c *= 2;
            }
            if (e + eBias >= 1) {
                value += rt / c;
            } else {
                value += rt * pow(2, 1 - eBias);
            }
            if (value * c >= 2) {
                e++;
                c /= 2;
            }
            if (e + eBias >= eMax) {
                m = 0;
                e = eMax;
            } else if (e + eBias >= 1) {
                m = (value * c - 1) * pow(2, mLen);
                e = e + eBias;
            } else {
                m = value * pow(2, eBias - 1) * pow(2, mLen);
                e = 0;
            }
        }
        for (; mLen >= 8; buffer[i++] = m & 255,
        m /= 256,
        mLen -= 8) {}
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[i++] = e & 255,
        e /= 256,
        eLen -= 8) {}
        buffer[--i] |= s * 128;
        return buffer;
    }
    function unpackIEEE754(buffer, mLen, nBytes) {
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = eLen - 7;
        var i = nBytes - 1;
        var s = buffer[i--];
        var e = s & 127;
        var m;
        s >>= 7;
        for (; nBits > 0; e = e * 256 + buffer[i],
        i--,
        nBits -= 8) {}
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[i],
        i--,
        nBits -= 8) {}
        if (e === 0) {
            e = 1 - eBias;
        } else if (e === eMax) {
            return m ? NaN : s ? -Infinity : Infinity;
        } else {
            m = m + pow(2, mLen);
            e = e - eBias;
        }
        return (s ? -1 : 1) * m * pow(2, e - mLen);
    }

    function unpackI32(bytes) {
        return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
    }
    function packI8(it) {
        return [it & 0xff];
    }
    function packI16(it) {
        return [it & 0xff, it >> 8 & 0xff];
    }
    function packI32(it) {
        return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
    }
    function packF64(it) {
        return packIEEE754(it, 52, 8);
    }
    function packF32(it) {
        return packIEEE754(it, 23, 4);
    }

    function addGetter(C, key, internal) {
        dP(C[PROTOTYPE], key, {
            get: function get() {
                return this[internal];
            }
        });
    }

    function get(view, bytes, index, isLittleEndian) {
        var numIndex = +index;
        var intIndex = _toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH])
            throw RangeError(WRONG_INDEX);
        var store = view[$BUFFER]._b;
        var start = intIndex + view[$OFFSET];
        var pack = store.slice(start, start + bytes);
        return isLittleEndian ? pack : pack.reverse();
    }
    function set(view, bytes, index, conversion, value, isLittleEndian) {
        var numIndex = +index;
        var intIndex = _toIndex(numIndex);
        if (intIndex + bytes > view[$LENGTH])
            throw RangeError(WRONG_INDEX);
        var store = view[$BUFFER]._b;
        var start = intIndex + view[$OFFSET];
        var pack = conversion(+value);
        for (var i = 0; i < bytes; i++) {
            store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
        }
    }

    if (!_typed.ABV) {
        $ArrayBuffer = function ArrayBuffer(length) {
            _anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
            var byteLength = _toIndex(length);
            this._b = _arrayFill.call(new Array(byteLength), 0);
            this[$LENGTH] = byteLength;
        }
        ;

        $DataView = function DataView(buffer, byteOffset, byteLength) {
            _anInstance(this, $DataView, DATA_VIEW);
            _anInstance(buffer, $ArrayBuffer, DATA_VIEW);
            var bufferLength = buffer[$LENGTH];
            var offset = _toInteger(byteOffset);
            if (offset < 0 || offset > bufferLength)
                throw RangeError('Wrong offset!');
            byteLength = byteLength === undefined ? bufferLength - offset : _toLength(byteLength);
            if (offset + byteLength > bufferLength)
                throw RangeError(WRONG_LENGTH);
            this[$BUFFER] = buffer;
            this[$OFFSET] = offset;
            this[$LENGTH] = byteLength;
        }
        ;

        if (_descriptors) {
            addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
            addGetter($DataView, BUFFER, '_b');
            addGetter($DataView, BYTE_LENGTH, '_l');
            addGetter($DataView, BYTE_OFFSET, '_o');
        }

        _redefineAll($DataView[PROTOTYPE], {
            getInt8: function getInt8(byteOffset) {
                return get(this, 1, byteOffset)[0] << 24 >> 24;
            },
            getUint8: function getUint8(byteOffset) {
                return get(this, 1, byteOffset)[0];
            },
            getInt16: function getInt16(byteOffset /* , littleEndian */
            ) {
                var bytes = get(this, 2, byteOffset, arguments[1]);
                return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
            },
            getUint16: function getUint16(byteOffset /* , littleEndian */
            ) {
                var bytes = get(this, 2, byteOffset, arguments[1]);
                return bytes[1] << 8 | bytes[0];
            },
            getInt32: function getInt32(byteOffset /* , littleEndian */
            ) {
                return unpackI32(get(this, 4, byteOffset, arguments[1]));
            },
            getUint32: function getUint32(byteOffset /* , littleEndian */
            ) {
                return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
            },
            getFloat32: function getFloat32(byteOffset /* , littleEndian */
            ) {
                return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
            },
            getFloat64: function getFloat64(byteOffset /* , littleEndian */
            ) {
                return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
            },
            setInt8: function setInt8(byteOffset, value) {
                set(this, 1, byteOffset, packI8, value);
            },
            setUint8: function setUint8(byteOffset, value) {
                set(this, 1, byteOffset, packI8, value);
            },
            setInt16: function setInt16(byteOffset, value /* , littleEndian */
            ) {
                set(this, 2, byteOffset, packI16, value, arguments[2]);
            },
            setUint16: function setUint16(byteOffset, value /* , littleEndian */
            ) {
                set(this, 2, byteOffset, packI16, value, arguments[2]);
            },
            setInt32: function setInt32(byteOffset, value /* , littleEndian */
            ) {
                set(this, 4, byteOffset, packI32, value, arguments[2]);
            },
            setUint32: function setUint32(byteOffset, value /* , littleEndian */
            ) {
                set(this, 4, byteOffset, packI32, value, arguments[2]);
            },
            setFloat32: function setFloat32(byteOffset, value /* , littleEndian */
            ) {
                set(this, 4, byteOffset, packF32, value, arguments[2]);
            },
            setFloat64: function setFloat64(byteOffset, value /* , littleEndian */
            ) {
                set(this, 8, byteOffset, packF64, value, arguments[2]);
            }
        });
    } else {
        if (!_fails(function() {
            $ArrayBuffer(1);
        }) || !_fails(function() {
            new $ArrayBuffer(-1);
            // eslint-disable-line no-new
        }) || _fails(function() {
            new $ArrayBuffer();
            // eslint-disable-line no-new
            new $ArrayBuffer(1.5);
            // eslint-disable-line no-new
            new $ArrayBuffer(NaN);
            // eslint-disable-line no-new
            return $ArrayBuffer.name != ARRAY_BUFFER;
        })) {
            $ArrayBuffer = function ArrayBuffer(length) {
                _anInstance(this, $ArrayBuffer);
                return new BaseBuffer(_toIndex(length));
            }
            ;
            var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
            for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ) {
                if (!((key = keys[j++])in $ArrayBuffer))
                    _hide($ArrayBuffer, key, BaseBuffer[key]);
            }
            ArrayBufferProto.constructor = $ArrayBuffer;
        }
        // iOS Safari 7.x bug
        var view = new $DataView(new $ArrayBuffer(2));
        var $setInt8 = $DataView[PROTOTYPE].setInt8;
        view.setInt8(0, 2147483648);
        view.setInt8(1, 2147483649);
        if (view.getInt8(0) || !view.getInt8(1))
            _redefineAll($DataView[PROTOTYPE], {
                setInt8: function setInt8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                },
                setUint8: function setUint8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                }
            }, true);
    }
    _setToStringTag($ArrayBuffer, ARRAY_BUFFER);
    _setToStringTag($DataView, DATA_VIEW);
    _hide($DataView[PROTOTYPE], _typed.VIEW, true);
    exports[ARRAY_BUFFER] = $ArrayBuffer;
    exports[DATA_VIEW] = $DataView;
});

var ArrayBuffer = _global.ArrayBuffer;

var $ArrayBuffer = _typedBuffer.ArrayBuffer;
var $DataView = _typedBuffer.DataView;
var $isView = _typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW$1 = _typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

_export(_export.G + _export.W + _export.F * (ArrayBuffer !== $ArrayBuffer), {
    ArrayBuffer: $ArrayBuffer
});

_export(_export.S + _export.F * !_typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
        return $isView && $isView(it) || _isObject(it) && VIEW$1 in it;
    }
});

_export(_export.P + _export.U + _export.F * _fails(function() {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
        if ($slice !== undefined && end === undefined)
            return $slice.call(_anObject(this), start);
        // FF fix
        var len = _anObject(this).byteLength;
        var first = _toAbsoluteIndex(start, len);
        var fin = _toAbsoluteIndex(end === undefined ? len : end, len);
        var result = new (_speciesConstructor(this, $ArrayBuffer))(_toLength(fin - first));
        var viewS = new $DataView(this);
        var viewT = new $DataView(result);
        var index = 0;
        while (first < fin) {
            viewT.setUint8(index++, viewS.getUint8(first++));
        }
        return result;
    }
});

_setSpecies(ARRAY_BUFFER);

_export(_export.G + _export.W + _export.F * !_typed.ABV, {
    DataView: _typedBuffer.DataView
});

var _typedArray = createCommonjsModule(function(module) {

    if (_descriptors) {
        var global = _global;
        var fails = _fails;
        var $export = _export;
        var $typed = _typed;
        var $buffer = _typedBuffer;
        var ctx = _ctx;
        var anInstance = _anInstance;
        var propertyDesc = _propertyDesc;
        var hide = _hide;
        var redefineAll = _redefineAll;
        var toInteger = _toInteger;
        var toLength = _toLength;
        var toIndex = _toIndex;
        var toAbsoluteIndex = _toAbsoluteIndex;
        var toPrimitive = _toPrimitive;
        var has = _has;
        var classof = _classof;
        var isObject = _isObject;
        var toObject = _toObject;
        var isArrayIter = _isArrayIter;
        var create = _objectCreate;
        var getPrototypeOf = _objectGpo;
        var gOPN = _objectGopn.f;
        var getIterFn = core_getIteratorMethod;
        var uid = _uid;
        var wks = _wks;
        var createArrayMethod = _arrayMethods;
        var createArrayIncludes = _arrayIncludes;
        var speciesConstructor = _speciesConstructor;
        var ArrayIterators = es6_array_iterator;
        var Iterators = _iterators;
        var $iterDetect = _iterDetect;
        var setSpecies = _setSpecies;
        var arrayFill = _arrayFill;
        var arrayCopyWithin = _arrayCopyWithin;
        var $DP = _objectDp;
        var $GOPD = _objectGopd;
        var dP = $DP.f;
        var gOPD = $GOPD.f;
        var RangeError = global.RangeError;
        var TypeError = global.TypeError;
        var Uint8Array = global.Uint8Array;
        var ARRAY_BUFFER = 'ArrayBuffer';
        var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
        var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
        var PROTOTYPE = 'prototype';
        var ArrayProto = Array[PROTOTYPE];
        var $ArrayBuffer = $buffer.ArrayBuffer;
        var $DataView = $buffer.DataView;
        var arrayForEach = createArrayMethod(0);
        var arrayFilter = createArrayMethod(2);
        var arraySome = createArrayMethod(3);
        var arrayEvery = createArrayMethod(4);
        var arrayFind = createArrayMethod(5);
        var arrayFindIndex = createArrayMethod(6);
        var arrayIncludes = createArrayIncludes(true);
        var arrayIndexOf = createArrayIncludes(false);
        var arrayValues = ArrayIterators.values;
        var arrayKeys = ArrayIterators.keys;
        var arrayEntries = ArrayIterators.entries;
        var arrayLastIndexOf = ArrayProto.lastIndexOf;
        var arrayReduce = ArrayProto.reduce;
        var arrayReduceRight = ArrayProto.reduceRight;
        var arrayJoin = ArrayProto.join;
        var arraySort = ArrayProto.sort;
        var arraySlice = ArrayProto.slice;
        var arrayToString = ArrayProto.toString;
        var arrayToLocaleString = ArrayProto.toLocaleString;
        var ITERATOR = wks('iterator');
        var TAG = wks('toStringTag');
        var TYPED_CONSTRUCTOR = uid('typed_constructor');
        var DEF_CONSTRUCTOR = uid('def_constructor');
        var ALL_CONSTRUCTORS = $typed.CONSTR;
        var TYPED_ARRAY = $typed.TYPED;
        var VIEW = $typed.VIEW;
        var WRONG_LENGTH = 'Wrong length!';

        var $map = createArrayMethod(1, function(O, length) {
            return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
        });

        var LITTLE_ENDIAN = fails(function() {
            // eslint-disable-next-line no-undef
            return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
        });

        var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
            new Uint8Array(1).set({});
        });

        var toOffset = function toOffset(it, BYTES) {
            var offset = toInteger(it);
            if (offset < 0 || offset % BYTES)
                throw RangeError('Wrong offset!');
            return offset;
        };

        var validate = function validate(it) {
            if (isObject(it) && TYPED_ARRAY in it)
                return it;
            throw TypeError(it + ' is not a typed array!');
        };

        var allocate = function allocate(C, length) {
            if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                throw TypeError('It is not a typed array constructor!');
            }
            return new C(length);
        };

        var speciesFromList = function speciesFromList(O, list) {
            return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
        };

        var fromList = function fromList(C, list) {
            var index = 0;
            var length = list.length;
            var result = allocate(C, length);
            while (length > index) {
                result[index] = list[index++];
            }
            return result;
        };

        var addGetter = function addGetter(it, key, internal) {
            dP(it, key, {
                get: function get$$1() {
                    return this._d[internal];
                }
            });
        };

        var $from = function from(source /* , mapfn, thisArg */
        ) {
            var O = toObject(source);
            var aLen = arguments.length;
            var mapfn = aLen > 1 ? arguments[1] : undefined;
            var mapping = mapfn !== undefined;
            var iterFn = getIterFn(O);
            var i, length, values, result, step, iterator;
            if (iterFn != undefined && !isArrayIter(iterFn)) {
                for (iterator = iterFn.call(O),
                values = [],
                i = 0; !(step = iterator.next()).done; i++) {
                    values.push(step.value);
                }
                O = values;
            }
            if (mapping && aLen > 2)
                mapfn = ctx(mapfn, arguments[2], 2);
            for (i = 0,
            length = toLength(O.length),
            result = allocate(this, length); length > i; i++) {
                result[i] = mapping ? mapfn(O[i], i) : O[i];
            }
            return result;
        };

        var $of = function of() /* ...items */
        {
            var index = 0;
            var length = arguments.length;
            var result = allocate(this, length);
            while (length > index) {
                result[index] = arguments[index++];
            }
            return result;
        };

        // iOS Safari 6.x fails here
        var TO_LOCALE_BUG = !!Uint8Array && fails(function() {
            arrayToLocaleString.call(new Uint8Array(1));
        });

        var $toLocaleString = function toLocaleString() {
            return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
        };

        var proto = {
            copyWithin: function copyWithin(target, start /* , end */
            ) {
                return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
            },
            every: function every(callbackfn /* , thisArg */
            ) {
                return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            fill: function fill(value /* , start, end */
            ) {
                // eslint-disable-line no-unused-vars
                return arrayFill.apply(validate(this), arguments);
            },
            filter: function filter(callbackfn /* , thisArg */
            ) {
                return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
            },
            find: function find(predicate /* , thisArg */
            ) {
                return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
            },
            findIndex: function findIndex(predicate /* , thisArg */
            ) {
                return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
            },
            forEach: function forEach(callbackfn /* , thisArg */
            ) {
                arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            indexOf: function indexOf(searchElement /* , fromIndex */
            ) {
                return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
            },
            includes: function includes(searchElement /* , fromIndex */
            ) {
                return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
            },
            join: function join(separator) {
                // eslint-disable-line no-unused-vars
                return arrayJoin.apply(validate(this), arguments);
            },
            lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */
            ) {
                // eslint-disable-line no-unused-vars
                return arrayLastIndexOf.apply(validate(this), arguments);
            },
            map: function map(mapfn /* , thisArg */
            ) {
                return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            reduce: function reduce(callbackfn /* , initialValue */
            ) {
                // eslint-disable-line no-unused-vars
                return arrayReduce.apply(validate(this), arguments);
            },
            reduceRight: function reduceRight(callbackfn /* , initialValue */
            ) {
                // eslint-disable-line no-unused-vars
                return arrayReduceRight.apply(validate(this), arguments);
            },
            reverse: function reverse() {
                var that = this;
                var length = validate(that).length;
                var middle = Math.floor(length / 2);
                var index = 0;
                var value;
                while (index < middle) {
                    value = that[index];
                    that[index++] = that[--length];
                    that[length] = value;
                }
                return that;
            },
            some: function some(callbackfn /* , thisArg */
            ) {
                return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            },
            sort: function sort(comparefn) {
                return arraySort.call(validate(this), comparefn);
            },
            subarray: function subarray(begin, end) {
                var O = validate(this);
                var length = O.length;
                var $begin = toAbsoluteIndex(begin, length);
                return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer,O.byteOffset + $begin * O.BYTES_PER_ELEMENT,toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin));
            }
        };

        var $slice = function slice(start, end) {
            return speciesFromList(this, arraySlice.call(validate(this), start, end));
        };

        var $set = function set$$1(arrayLike /* , offset */
        ) {
            validate(this);
            var offset = toOffset(arguments[1], 1);
            var length = this.length;
            var src = toObject(arrayLike);
            var len = toLength(src.length);
            var index = 0;
            if (len + offset > length)
                throw RangeError(WRONG_LENGTH);
            while (index < len) {
                this[offset + index] = src[index++];
            }
        };

        var $iterators = {
            entries: function entries() {
                return arrayEntries.call(validate(this));
            },
            keys: function keys() {
                return arrayKeys.call(validate(this));
            },
            values: function values() {
                return arrayValues.call(validate(this));
            }
        };

        var isTAIndex = function isTAIndex(target, key) {
            return isObject(target) && target[TYPED_ARRAY] && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) != 'symbol' && key in target && String(+key) == String(key);
        };
        var $getDesc = function getOwnPropertyDescriptor(target, key) {
            return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
        };
        var $setDesc = function defineProperty$$1(target, key, desc) {
            if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')// TODO: add validation descriptor w/o calling accessors
            && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
                target[key] = desc.value;
                return target;
            }
            return dP(target, key, desc);
        };

        if (!ALL_CONSTRUCTORS) {
            $GOPD.f = $getDesc;
            $DP.f = $setDesc;
        }

        $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
            getOwnPropertyDescriptor: $getDesc,
            defineProperty: $setDesc
        });

        if (fails(function() {
            arrayToString.call({});
        })) {
            arrayToString = arrayToLocaleString = function toString() {
                return arrayJoin.call(this);
            }
            ;
        }

        var $TypedArrayPrototype$ = redefineAll({}, proto);
        redefineAll($TypedArrayPrototype$, $iterators);
        hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
        redefineAll($TypedArrayPrototype$, {
            slice: $slice,
            set: $set,
            constructor: function constructor() {/* noop */
            },
            toString: arrayToString,
            toLocaleString: $toLocaleString
        });
        addGetter($TypedArrayPrototype$, 'buffer', 'b');
        addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
        addGetter($TypedArrayPrototype$, 'byteLength', 'l');
        addGetter($TypedArrayPrototype$, 'length', 'e');
        dP($TypedArrayPrototype$, TAG, {
            get: function get$$1() {
                return this[TYPED_ARRAY];
            }
        });

        // eslint-disable-next-line max-statements
        module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
            CLAMPED = !!CLAMPED;
            var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
            var GETTER = 'get' + KEY;
            var SETTER = 'set' + KEY;
            var TypedArray = global[NAME];
            var Base = TypedArray || {};
            var TAC = TypedArray && getPrototypeOf(TypedArray);
            var FORCED = !TypedArray || !$typed.ABV;
            var O = {};
            var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
            var getter = function getter(that, index) {
                var data = that._d;
                return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
            };
            var setter = function setter(that, index, value) {
                var data = that._d;
                if (CLAMPED)
                    value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
                data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
            };
            var addElement = function addElement(that, index) {
                dP(that, index, {
                    get: function get$$1() {
                        return getter(this, index);
                    },
                    set: function set$$1(value) {
                        return setter(this, index, value);
                    },
                    enumerable: true
                });
            };
            if (FORCED) {
                TypedArray = wrapper(function(that, data, $offset, $length) {
                    anInstance(that, TypedArray, NAME, '_d');
                    var index = 0;
                    var offset = 0;
                    var buffer, byteLength, length, klass;
                    if (!isObject(data)) {
                        length = toIndex(data);
                        byteLength = length * BYTES;
                        buffer = new $ArrayBuffer(byteLength);
                    } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                        buffer = data;
                        offset = toOffset($offset, BYTES);
                        var $len = data.byteLength;
                        if ($length === undefined) {
                            if ($len % BYTES)
                                throw RangeError(WRONG_LENGTH);
                            byteLength = $len - offset;
                            if (byteLength < 0)
                                throw RangeError(WRONG_LENGTH);
                        } else {
                            byteLength = toLength($length) * BYTES;
                            if (byteLength + offset > $len)
                                throw RangeError(WRONG_LENGTH);
                        }
                        length = byteLength / BYTES;
                    } else if (TYPED_ARRAY in data) {
                        return fromList(TypedArray, data);
                    } else {
                        return $from.call(TypedArray, data);
                    }
                    hide(that, '_d', {
                        b: buffer,
                        o: offset,
                        l: byteLength,
                        e: length,
                        v: new $DataView(buffer)
                    });
                    while (index < length) {
                        addElement(that, index++);
                    }
                });
                TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                hide(TypedArrayPrototype, 'constructor', TypedArray);
            } else if (!fails(function() {
                TypedArray(1);
            }) || !fails(function() {
                new TypedArray(-1);
                // eslint-disable-line no-new
            }) || !$iterDetect(function(iter) {
                new TypedArray();
                // eslint-disable-line no-new
                new TypedArray(null);
                // eslint-disable-line no-new
                new TypedArray(1.5);
                // eslint-disable-line no-new
                new TypedArray(iter);
                // eslint-disable-line no-new
            }, true)) {
                TypedArray = wrapper(function(that, data, $offset, $length) {
                    anInstance(that, TypedArray, NAME);
                    var klass;
                    // `ws` module bug, temporarily remove validation length for Uint8Array
                    // https://github.com/websockets/ws/pull/645
                    if (!isObject(data))
                        return new Base(toIndex(data));
                    if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                        return $length !== undefined ? new Base(data,toOffset($offset, BYTES),$length) : $offset !== undefined ? new Base(data,toOffset($offset, BYTES)) : new Base(data);
                    }
                    if (TYPED_ARRAY in data)
                        return fromList(TypedArray, data);
                    return $from.call(TypedArray, data);
                });
                arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                    if (!(key in TypedArray))
                        hide(TypedArray, key, Base[key]);
                });
                TypedArray[PROTOTYPE] = TypedArrayPrototype;
                TypedArrayPrototype.constructor = TypedArray;
            }
            var $nativeIterator = TypedArrayPrototype[ITERATOR];
            var CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
            var $iterator = $iterators.values;
            hide(TypedArray, TYPED_CONSTRUCTOR, true);
            hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
            hide(TypedArrayPrototype, VIEW, true);
            hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

            if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                dP(TypedArrayPrototype, TAG, {
                    get: function get$$1() {
                        return NAME;
                    }
                });
            }

            O[NAME] = TypedArray;

            $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

            $export($export.S, NAME, {
                BYTES_PER_ELEMENT: BYTES
            });

            $export($export.S + $export.F * fails(function() {
                Base.of.call(TypedArray, 1);
            }), NAME, {
                from: $from,
                of: $of
            });

            if (!(BYTES_PER_ELEMENT in TypedArrayPrototype))
                hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

            $export($export.P, NAME, proto);

            setSpecies(NAME);

            $export($export.P + $export.F * FORCED_SET, NAME, {
                set: $set
            });

            $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

            if (TypedArrayPrototype.toString != arrayToString)
                TypedArrayPrototype.toString = arrayToString;

            $export($export.P + $export.F * fails(function() {
                new TypedArray(1).slice();
            }), NAME, {
                slice: $slice
            });

            $export($export.P + $export.F * (fails(function() {
                return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
            }) || !fails(function() {
                TypedArrayPrototype.toLocaleString.call([1, 2]);
            })), NAME, {
                toLocaleString: $toLocaleString
            });

            Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
            if (!CORRECT_ITER_NAME)
                hide(TypedArrayPrototype, ITERATOR, $iterator);
        }
        ;
    } else
        module.exports = function() {/* empty */
        }
        ;
});

_typedArray('Int8', 1, function(init) {
    return function Int8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Uint8', 1, function(init) {
    return function Uint8Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Uint8', 1, function(init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
}, true);

_typedArray('Int16', 2, function(init) {
    return function Int16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Uint16', 2, function(init) {
    return function Uint16Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Int32', 4, function(init) {
    return function Int32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Uint32', 4, function(init) {
    return function Uint32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Float32', 4, function(init) {
    return function Float32Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

_typedArray('Float64', 8, function(init) {
    return function Float64Array(data, byteOffset, length) {
        return init(this, data, byteOffset, length);
    }
    ;
});

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)

var rApply = (_global.Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
_export(_export.S + _export.F * !_fails(function() {
    rApply(function() {/* empty */
    });
}), 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
        var T = _aFunction(target);
        var L = _anObject(argumentsList);
        return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
    }
});

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])

var rConstruct = (_global.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = _fails(function() {
    function F() {/* empty */
    }
    return !(rConstruct(function() {/* empty */
    }, [], F)instanceof F);
});
var ARGS_BUG = !_fails(function() {
    rConstruct(function() {/* empty */
    });
});

_export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
    construct: function construct(Target, args /* , newTarget */
    ) {
        _aFunction(Target);
        _anObject(args);
        var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
        if (ARGS_BUG && !NEW_TARGET_BUG)
            return rConstruct(Target, args, newTarget);
        if (Target == newTarget) {
            // w/o altered newTarget, optimization for 0-4 arguments
            switch (args.length) {
            case 0:
                return new Target();
            case 1:
                return new Target(args[0]);
            case 2:
                return new Target(args[0],args[1]);
            case 3:
                return new Target(args[0],args[1],args[2]);
            case 4:
                return new Target(args[0],args[1],args[2],args[3]);
            }
            // w/o altered newTarget, lot of arguments case
            var $args = [null];
            $args.push.apply($args, args);
            return new (_bind.apply(Target, $args))();
        }
        // with altered newTarget, not support built-in constructors
        var proto = newTarget.prototype;
        var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
        var result = Function.apply.call(Target, instance, args);
        return _isObject(result) ? result : instance;
    }
});

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
_export(_export.S + _export.F * _fails(function() {
    // eslint-disable-next-line no-undef
    Reflect.defineProperty(_objectDp.f({}, 1, {
        value: 1
    }), 1, {
        value: 2
    });
}), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
        _anObject(target);
        propertyKey = _toPrimitive(propertyKey, true);
        _anObject(attributes);
        try {
            _objectDp.f(target, propertyKey, attributes);
            return true;
        } catch (e) {
            return false;
        }
    }
});

// 26.1.4 Reflect.deleteProperty(target, propertyKey)

var gOPD$3 = _objectGopd.f;

_export(_export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
        var desc = gOPD$3(_anObject(target), propertyKey);
        return desc && !desc.configurable ? false : delete target[propertyKey];
    }
});

// 26.1.5 Reflect.enumerate(target)

var Enumerate = function Enumerate(iterated) {
    this._t = _anObject(iterated);
    // target
    this._i = 0;
    // next index
    var keys = this._k = [];
    // keys
    var key;
    for (key in iterated) {
        keys.push(key);
    }
};
_iterCreate(Enumerate, 'Object', function() {
    var that = this;
    var keys = that._k;
    var key;
    do {
        if (that._i >= keys.length)
            return {
                value: undefined,
                done: true
            };
    } while (!((key = keys[that._i++])in that._t));
    return {
        value: key,
        done: false
    };
});

_export(_export.S, 'Reflect', {
    enumerate: function enumerate(target) {
        return new Enumerate(target);
    }
});

// 26.1.6 Reflect.get(target, propertyKey [, receiver])

function get$1(target, propertyKey /* , receiver */
) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var desc, proto;
    if (_anObject(target) === receiver)
        return target[propertyKey];
    if (desc = _objectGopd.f(target, propertyKey))
        return _has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (_isObject(proto = _objectGpo(target)))
        return get$1(proto, propertyKey, receiver);
}

_export(_export.S, 'Reflect', {
    get: get$1
});

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)

_export(_export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
        return _objectGopd.f(_anObject(target), propertyKey);
    }
});

// 26.1.8 Reflect.getPrototypeOf(target)

_export(_export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
        return _objectGpo(_anObject(target));
    }
});

// 26.1.9 Reflect.has(target, propertyKey)

_export(_export.S, 'Reflect', {
    has: function has(target, propertyKey) {
        return propertyKey in target;
    }
});

// 26.1.10 Reflect.isExtensible(target)

var $isExtensible = Object.isExtensible;

_export(_export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
        _anObject(target);
        return $isExtensible ? $isExtensible(target) : true;
    }
});

// all object keys, includes non-enumerable and symbols

var Reflect$1 = _global.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = _objectGopn.f(_anObject(it));
    var getSymbols = _objectGops.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
}
;

// 26.1.11 Reflect.ownKeys(target)

_export(_export.S, 'Reflect', {
    ownKeys: _ownKeys
});

// 26.1.12 Reflect.preventExtensions(target)

var $preventExtensions = Object.preventExtensions;

_export(_export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
        _anObject(target);
        try {
            if ($preventExtensions)
                $preventExtensions(target);
            return true;
        } catch (e) {
            return false;
        }
    }
});

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])

function set$1(target, propertyKey, V /* , receiver */
) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
    var existingDescriptor, proto;
    if (!ownDesc) {
        if (_isObject(proto = _objectGpo(target))) {
            return set$1(proto, propertyKey, V, receiver);
        }
        ownDesc = _propertyDesc(0);
    }
    if (_has(ownDesc, 'value')) {
        if (ownDesc.writable === false || !_isObject(receiver))
            return false;
        if (existingDescriptor = _objectGopd.f(receiver, propertyKey)) {
            if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false)
                return false;
            existingDescriptor.value = V;
            _objectDp.f(receiver, propertyKey, existingDescriptor);
        } else
            _objectDp.f(receiver, propertyKey, _propertyDesc(0, V));
        return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V),
    true);
}

_export(_export.S, 'Reflect', {
    set: set$1
});

// 26.1.14 Reflect.setPrototypeOf(target, proto)

if (_setProto)
    _export(_export.S, 'Reflect', {
        setPrototypeOf: function setPrototypeOf(target, proto) {
            _setProto.check(target, proto);
            try {
                _setProto.set(target, proto);
                return true;
            } catch (e) {
                return false;
            }
        }
    });

// https://github.com/tc39/Array.prototype.includes

var $includes = _arrayIncludes(true);

_export(_export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */
    ) {
        return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
});

_addToUnscopables('includes');

var includes = _core.Array.includes;

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

var IS_CONCAT_SPREADABLE = _wks('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? _ctx(mapper, thisArg, 3) : false;
    var element, spreadable;

    while (sourceIndex < sourceLen) {
        if (sourceIndex in source) {
            element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

            spreadable = false;
            if (_isObject(element)) {
                spreadable = element[IS_CONCAT_SPREADABLE];
                spreadable = spreadable !== undefined ? !!spreadable : _isArray(element);
            }

            if (spreadable && depth > 0) {
                targetIndex = flattenIntoArray(target, original, element, _toLength(element.length), targetIndex, depth - 1) - 1;
            } else {
                if (targetIndex >= 0x1fffffffffffff)
                    throw TypeError();
                target[targetIndex] = element;
            }

            targetIndex++;
        }
        sourceIndex++;
    }
    return targetIndex;
}

var _flattenIntoArray = flattenIntoArray;

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap

_export(_export.P, 'Array', {
    flatMap: function flatMap(callbackfn /* , thisArg */
    ) {
        var O = _toObject(this);
        var sourceLen, A;
        _aFunction(callbackfn);
        sourceLen = _toLength(O.length);
        A = _arraySpeciesCreate(O, 0);
        _flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
        return A;
    }
});

_addToUnscopables('flatMap');

var flatMap = _core.Array.flatMap;

// https://github.com/tc39/proposal-string-pad-start-end

var _stringPad = function _stringPad(that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '')
        return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen)
        stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
};

// https://github.com/tc39/proposal-string-pad-start-end

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

_export(_export.P + _export.F * WEBKIT_BUG, 'String', {
    padStart: function padStart(maxLength /* , fillString = ' ' */
    ) {
        return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
});

var padStart = _core.String.padStart;

// https://github.com/tc39/proposal-string-pad-start-end

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG$1 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_userAgent);

_export(_export.P + _export.F * WEBKIT_BUG$1, 'String', {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */
    ) {
        return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
});

var padEnd = _core.String.padEnd;

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimLeft', function($trim) {
    return function trimLeft() {
        return $trim(this, 1);
    }
    ;
}, 'trimStart');

var trimStart = _core.String.trimLeft;

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
_stringTrim('trimRight', function($trim) {
    return function trimRight() {
        return $trim(this, 2);
    }
    ;
}, 'trimEnd');

var trimEnd = _core.String.trimRight;

_wksDefine('asyncIterator');

var asyncIterator$1 = _wksExt.f('asyncIterator');

// https://github.com/tc39/proposal-object-getownpropertydescriptors

_export(_export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
        var O = _toIobject(object);
        var getDesc = _objectGopd.f;
        var keys = _ownKeys(O);
        var result = {};
        var i = 0;
        var key, desc;
        while (keys.length > i) {
            desc = getDesc(O, key = keys[i++]);
            if (desc !== undefined)
                _createProperty(result, key, desc);
        }
        return result;
    }
});

var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

var isEnum$1 = _objectPie.f;
var _objectToArray = function _objectToArray(isEntries) {
    return function(it) {
        var O = _toIobject(it);
        var keys = _objectKeys(O);
        var length = keys.length;
        var i = 0;
        var result = [];
        var key;
        while (length > i) {
            if (isEnum$1.call(O, key = keys[i++])) {
                result.push(isEntries ? [key, O[key]] : O[key]);
            }
        }
        return result;
    }
    ;
};

// https://github.com/tc39/proposal-object-values-entries

var $values = _objectToArray(false);

_export(_export.S, 'Object', {
    values: function values(it) {
        return $values(it);
    }
});

var values = _core.Object.values;

// https://github.com/tc39/proposal-object-values-entries

var $entries = _objectToArray(true);

_export(_export.S, 'Object', {
    entries: function entries(it) {
        return $entries(it);
    }
});

var entries = _core.Object.entries;

_export(_export.P + _export.R, 'Promise', {
    'finally': function _finally(onFinally) {
        var C = _speciesConstructor(this, _core.Promise || _global.Promise);
        var isFunction = typeof onFinally == 'function';
        return this.then(isFunction ? function(x) {
            return _promiseResolve(C, onFinally()).then(function() {
                return x;
            });
        }
        : onFinally, isFunction ? function(e) {
            return _promiseResolve(C, onFinally()).then(function() {
                throw e;
            });
        }
        : onFinally);
    }
});

var _finally = _core.Promise['finally'];

// ie9- setTimeout & setInterval additional parameters fix

var slice = [].slice;
var MSIE = /MSIE .\./.test(_userAgent);
// <- dirty ie9- check
var wrap$1 = function wrap(set) {
    return function(fn, time /* , ...args */
    ) {
        var boundArgs = arguments.length > 2;
        var args = boundArgs ? slice.call(arguments, 2) : false;
        return set(boundArgs ? function() {
            // eslint-disable-next-line no-new-func
            (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
        }
        : fn, time);
    }
    ;
};
_export(_export.G + _export.B + _export.F * MSIE, {
    setTimeout: wrap$1(_global.setTimeout),
    setInterval: wrap$1(_global.setInterval)
});

_export(_export.G + _export.B, {
    setImmediate: _task.set,
    clearImmediate: _task.clear
});

var ITERATOR$4 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
    CSSRuleList: true,
    // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true,
    // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true,
    // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i$2 = 0; i$2 < collections.length; i$2++) {
    var NAME$1 = collections[i$2];
    var explicit = DOMIterables[NAME$1];
    var Collection = _global[NAME$1];
    var proto$3 = Collection && Collection.prototype;
    var key$1;
    if (proto$3) {
        if (!proto$3[ITERATOR$4])
            _hide(proto$3, ITERATOR$4, ArrayValues);
        if (!proto$3[TO_STRING_TAG])
            _hide(proto$3, TO_STRING_TAG, NAME$1);
        _iterators[NAME$1] = ArrayValues;
        if (explicit)
            for (key$1 in es6_array_iterator) {
                if (!proto$3[key$1])
                    _redefine(proto$3, key$1, es6_array_iterator[key$1], true);
            }
    }
}

var runtime_1 = createCommonjsModule(function(module) {
    /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

    var runtime = function(exports) {

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
        }
        exports.wrap = wrap;

        // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed";

        // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {};

        // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}

        // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        }
        ;

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

        // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function(method) {
                prototype[method] = function(arg) {
                    return this._invoke(method, arg);
                }
                ;
            });
        }

        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        }
        ;

        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                if (!(toStringTagSymbol in genFun)) {
                    genFun[toStringTagSymbol] = "GeneratorFunction";
                }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        }
        ;

        // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function(arg) {
            return {
                __await: arg
            };
        }
        ;

        function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") {
                    reject(record.arg);
                } else {
                    var result = record.arg;
                    var value = result.value;
                    if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
                        return Promise.resolve(value.__await).then(function(value) {
                            invoke("next", value, resolve, reject);
                        }, function(err) {
                            invoke("throw", err, resolve, reject);
                        });
                    }

                    return Promise.resolve(value).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }

            var previousPromise;

            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new Promise(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    }
                    );
                }

                return previousPromise = // If enqueue has been called before, then we want to wait until
                // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        }
        ;
        exports.AsyncIterator = AsyncIterator;

        // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function(innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        }
        ;

        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
                if (state === GenStateExecuting) {
                    throw new Error("Generator is already running");
                }

                if (state === GenStateCompleted) {
                    if (method === "throw") {
                        throw arg;
                    }

                    // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                    return doneResult();
                }

                context.method = method;
                context.arg = arg;

                while (true) {
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel)
                                continue;
                            return delegateResult;
                        }
                    }

                    if (context.method === "next") {
                        // Setting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        context.sent = context._sent = context.arg;
                    } else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }

                        context.dispatchException(context.arg);
                    } else if (context.method === "return") {
                        context.abrupt("return", context.arg);
                    }

                    state = GenStateExecuting;

                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                        if (record.arg === ContinueSentinel) {
                            continue;
                        }

                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted;
                        // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            }
            ;
        }

        // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;

                if (context.method === "throw") {
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined;
                        maybeInvokeDelegate(delegate, context);

                        if (context.method === "throw") {
                            // If maybeInvokeDelegate(context) changed context.method from
                            // "return" to "throw", let that override the TypeError below.
                            return ContinueSentinel;
                        }
                    }

                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }

                return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }

            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value;

                // Resume execution at the desired location (see delegateYield).
                context.next = delegate.nextLoc;

                // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined;
                }
            } else {
                // Re-yield the result returned by the delegate method.
                return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
        }

        // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);

        Gp[toStringTagSymbol] = "Generator";

        // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function() {
            return this;
        }
        ;

        Gp.toString = function() {
            return "[object Generator]";
        }
        ;

        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };

            if (1 in locs) {
                entry.catchLoc = locs[1];
            }

            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }

        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{
                tryLoc: "root"
            }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }

        exports.keys = function(object) {
            var keys = [];
            for (var key in object) {
                keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
                while (keys.length) {
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                }

                // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                next.done = true;
                return next;
            }
            ;
        }
        ;

        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) {
                    return iteratorMethod.call(iterable);
                }

                if (typeof iterable.next === "function") {
                    return iterable;
                }

                if (!isNaN(iterable.length)) {
                    var i = -1
                      , next = function next() {
                        while (++i < iterable.length) {
                            if (hasOwn.call(iterable, i)) {
                                next.value = iterable[i];
                                next.done = false;
                                return next;
                            }
                        }

                        next.value = undefined;
                        next.done = true;

                        return next;
                    };

                    return next.next = next;
                }
            }

            // Return an iterator with no values.
            return {
                next: doneResult
            };
        }
        exports.values = values;

        function doneResult() {
            return {
                value: undefined,
                done: true
            };
        }

        Context.prototype = {
            constructor: Context,

            reset: function reset(skipTempReset) {
                this.prev = 0;
                this.next = 0;
                // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                this.sent = this._sent = undefined;
                this.done = false;
                this.delegate = null;

                this.method = "next";
                this.arg = undefined;

                this.tryEntries.forEach(resetTryEntry);

                if (!skipTempReset) {
                    for (var name in this) {
                        // Not sure about the optimal order of these conditions:
                        if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                            this[name] = undefined;
                        }
                    }
                }
            },

            stop: function stop() {
                this.done = true;

                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") {
                    throw rootRecord.arg;
                }

                return this.rval;
            },

            dispatchException: function dispatchException(exception) {
                if (this.done) {
                    throw exception;
                }

                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;

                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined;
                    }

                    return !!caught;
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    var record = entry.completion;

                    if (entry.tryLoc === "root") {
                        // Exception thrown outside of any try block that could handle
                        // it, so set the completion value of the entire function to
                        // throw the exception.
                        return handle("end");
                    }

                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");

                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            } else if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) {
                                return handle(entry.catchLoc, true);
                            }
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) {
                                return handle(entry.finallyLoc);
                            }
                        } else {
                            throw new Error("try statement without catch or finally");
                        }
                    }
                }
            },

            abrupt: function abrupt(type, arg) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }

                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                    // Ignore the finally entry if control is not jumping to a
                    // location outside the try/catch block.
                    finallyEntry = null;
                }

                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;

                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }

                return this.complete(record);
            },

            complete: function complete(record, afterLoc) {
                if (record.type === "throw") {
                    throw record.arg;
                }

                if (record.type === "break" || record.type === "continue") {
                    this.next = record.arg;
                } else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) {
                    this.next = afterLoc;
                }

                return ContinueSentinel;
            },

            finish: function finish(finallyLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },

            "catch": function _catch(tryLoc) {
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                }

                // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                throw new Error("illegal catch attempt");
            },

            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };

                if (this.method === "next") {
                    // Deliberately forget the last sent value so that we don't
                    // accidentally pass it on to the delegate.
                    this.arg = undefined;
                }

                return ContinueSentinel;
            }
        };

        // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
    }(// If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);

    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
    }
});

var _global$1 = createCommonjsModule(function(module) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
    : Function('return this')();
    if (typeof __g == 'number')
        __g = global;
    // eslint-disable-line no-undef
});

var _core$1 = createCommonjsModule(function(module) {
    var core = module.exports = {
        version: '2.6.5'
    };
    if (typeof __e == 'number')
        __e = core;
    // eslint-disable-line no-undef
});
var _core_1$1 = _core$1.version;

var _aFunction$1 = function _aFunction(it) {
    if (typeof it != 'function')
        throw TypeError(it + ' is not a function!');
    return it;
};

// optional / simple context binding

var _ctx$1 = function _ctx(fn, that, length) {
    _aFunction$1(fn);
    if (that === undefined)
        return fn;
    switch (length) {
    case 1:
        return function(a) {
            return fn.call(that, a);
        }
        ;
    case 2:
        return function(a, b) {
            return fn.call(that, a, b);
        }
        ;
    case 3:
        return function(a, b, c) {
            return fn.call(that, a, b, c);
        }
        ;
    }
    return function() /* ...args */
    {
        return fn.apply(that, arguments);
    }
    ;
};

var _isObject$1 = function _isObject(it) {
    return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

var _anObject$1 = function _anObject(it) {
    if (!_isObject$1(it))
        throw TypeError(it + ' is not an object!');
    return it;
};

var _fails$1 = function _fails(exec) {
    try {
        return !!exec();
    } catch (e) {
        return true;
    }
};

// Thank's IE8 for his funny defineProperty
var _descriptors$1 = !_fails$1(function() {
    return Object.defineProperty({}, 'a', {
        get: function get() {
            return 7;
        }
    }).a != 7;
});

var document$3 = _global$1.document;
// typeof document.createElement is 'object' in old IE
var is$1 = _isObject$1(document$3) && _isObject$1(document$3.createElement);
var _domCreate$1 = function _domCreate(it) {
    return is$1 ? document$3.createElement(it) : {};
};

var _ie8DomDefine$1 = !_descriptors$1 && !_fails$1(function() {
    return Object.defineProperty(_domCreate$1('div'), 'a', {
        get: function get() {
            return 7;
        }
    }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive$1 = function _toPrimitive(it, S) {
    if (!_isObject$1(it))
        return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it)))
        return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject$1(val = fn.call(it)))
        return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject$1(val = fn.call(it)))
        return val;
    throw TypeError("Can't convert object to primitive value");
};

var dP$6 = Object.defineProperty;

var f$8 = _descriptors$1 ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject$1(O);
    P = _toPrimitive$1(P, true);
    _anObject$1(Attributes);
    if (_ie8DomDefine$1)
        try {
            return dP$6(O, P, Attributes);
        } catch (e) {/* empty */
        }
    if ('get'in Attributes || 'set'in Attributes)
        throw TypeError('Accessors not supported!');
    if ('value'in Attributes)
        O[P] = Attributes.value;
    return O;
}
;

var _objectDp$1 = {
    f: f$8
};

var _propertyDesc$1 = function _propertyDesc(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

var _hide$1 = _descriptors$1 ? function(object, key, value) {
    return _objectDp$1.f(object, key, _propertyDesc$1(1, value));
}
: function(object, key, value) {
    object[key] = value;
    return object;
}
;

var hasOwnProperty$1 = {}.hasOwnProperty;
var _has$1 = function _has(it, key) {
    return hasOwnProperty$1.call(it, key);
};

var PROTOTYPE$3 = 'prototype';

var $export$1 = function $export(type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var IS_WRAP = type & $export.W;
    var exports = IS_GLOBAL ? _core$1 : _core$1[name] || (_core$1[name] = {});
    var expProto = exports[PROTOTYPE$3];
    var target = IS_GLOBAL ? _global$1 : IS_STATIC ? _global$1[name] : (_global$1[name] || {})[PROTOTYPE$3];
    var key, own, out;
    if (IS_GLOBAL)
        source = name;
    for (key in source) {
        // contains in native
        own = !IS_FORCED && target && target[key] !== undefined;
        if (own && _has$1(exports, key))
            continue;
        // export native or passed
        out = own ? target[key] : source[key];
        // prevent global pollution for namespaces
        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]// bind timers to global for call from export context
        : IS_BIND && own ? _ctx$1(out, _global$1)// wrap global constructors for prevent change them in library
        : IS_WRAP && target[key] == out ? function(C) {
            var F = function F(a, b, c) {
                if (this instanceof C) {
                    switch (arguments.length) {
                    case 0:
                        return new C();
                    case 1:
                        return new C(a);
                    case 2:
                        return new C(a,b);
                    }
                    return new C(a,b,c);
                }
                return C.apply(this, arguments);
            };
            F[PROTOTYPE$3] = C[PROTOTYPE$3];
            return F;
            // make static versions for prototype methods
        }(out) : IS_PROTO && typeof out == 'function' ? _ctx$1(Function.call, out) : out;
        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
        if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out;
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key])
                _hide$1(expProto, key, out);
        }
    }
};
// type bitmap
$export$1.F = 1;
// forced
$export$1.G = 2;
// global
$export$1.S = 4;
// static
$export$1.P = 8;
// proto
$export$1.B = 16;
// bind
$export$1.W = 32;
// wrap
$export$1.U = 64;
// safe
$export$1.R = 128;
// real proto method for `library`
var _export$1 = $export$1;

// https://github.com/tc39/proposal-global

_export$1(_export$1.G, {
    global: _global$1
});

var global$1 = _core$1.global;

var lib = createCommonjsModule(function(module) {

    var _global = _interopRequireDefault(global$1);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    if (_global.default._babelPolyfill && typeof console !== "undefined" && console.warn) {
        console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
    }

    _global.default._babelPolyfill = true;
});

unwrapExports(lib);

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {

    // Exits early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.

    if ('IntersectionObserver'in window && 'IntersectionObserverEntry'in window && 'intersectionRatio'in window.IntersectionObserverEntry.prototype) {

        // Minimal polyfill for Edge 15's lack of `isIntersecting`
        // See: https://github.com/w3c/IntersectionObserver/issues/211
        if (!('isIntersecting'in window.IntersectionObserverEntry.prototype)) {
            Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
                get: function get() {
                    return this.intersectionRatio > 0;
                }
            });
        }
        return;
    }

    /**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */
    function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = entry.rootBounds;
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRect = entry.intersectionRect || getEmptyRect();
        this.isIntersecting = !!entry.intersectionRect;

        // Calculates the intersection ratio.
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;

        // Sets intersection ratio.
        if (targetArea) {
            // Round the intersection ratio to avoid floating point math issues:
            // https://github.com/w3c/IntersectionObserver/issues/324
            this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
        } else {
            // If area is zero and is intersecting, sets to 1, otherwise to 0
            this.intersectionRatio = this.isIntersecting ? 1 : 0;
        }
    }

    /**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */
    function IntersectionObserver(callback, opt_options) {

        var options = opt_options || {};

        if (typeof callback != 'function') {
            throw new Error('callback must be a function');
        }

        if (options.root && options.root.nodeType != 1) {
            throw new Error('root must be an Element');
        }

        // Binds and throttles `this._checkForIntersections`.
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

        // Private properties.
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);

        // Public properties.
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) {
            return margin.value + margin.unit;
        }).join(' ');
    }

    /**
   * The minimum interval within which the document will be checked for
   * intersection changes.
   */
    IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;

    /**
   * The frequency in which the polyfill polls for intersection changes.
   * this can be updated on a per instance basis and must be set prior to
   * calling `observe` on the first target.
   */
    IntersectionObserver.prototype.POLL_INTERVAL = null;

    /**
   * Use a mutation observer on the root element
   * to detect intersection changes.
   */
    IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;

    /**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */
    IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
            return item.element == target;
        });

        if (isTargetAlreadyObserved) {
            return;
        }

        if (!(target && target.nodeType == 1)) {
            throw new Error('target must be an Element');
        }

        this._registerInstance();
        this._observationTargets.push({
            element: target,
            entry: null
        });
        this._monitorIntersections();
        this._checkForIntersections();
    }
    ;

    /**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */
    IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) {

            return item.element != target;
        });
        if (!this._observationTargets.length) {
            this._unmonitorIntersections();
            this._unregisterInstance();
        }
    }
    ;

    /**
   * Stops observing all target elements for intersection changes.
   */
    IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorIntersections();
        this._unregisterInstance();
    }
    ;

    /**
   * Returns any queue entries that have not yet been reported to the
   * callback and clears the queue. This can be used in conjunction with the
   * callback to obtain the absolute most up-to-date intersection information.
   * @return {Array} The currently queued entries.
   */
    IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
    }
    ;

    /**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */
    IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [0];
        if (!Array.isArray(threshold))
            threshold = [threshold];

        return threshold.sort().filter(function(t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
                throw new Error('threshold must be a number between 0 and 1 inclusively');
            }
            return t !== a[i - 1];
        });
    }
    ;

    /**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */
    IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || '0px';
        var margins = marginString.split(/\s+/).map(function(margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) {
                throw new Error('rootMargin must be specified in pixels or percent');
            }
            return {
                value: parseFloat(parts[1]),
                unit: parts[2]
            };
        });

        // Handles shorthand.
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];

        return margins;
    }
    ;

    /**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @private
   */
    IntersectionObserver.prototype._monitorIntersections = function() {
        if (!this._monitoringIntersections) {
            this._monitoringIntersections = true;

            // If a poll interval is set, use polling instead of listening to
            // resize and scroll events or DOM mutations.
            if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
            } else {
                addEvent(window, 'resize', this._checkForIntersections, true);
                addEvent(document, 'scroll', this._checkForIntersections, true);

                if (this.USE_MUTATION_OBSERVER && 'MutationObserver'in window) {
                    this._domObserver = new MutationObserver(this._checkForIntersections);
                    this._domObserver.observe(document, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }
        }
    }
    ;

    /**
   * Stops polling for intersection changes.
   * @private
   */
    IntersectionObserver.prototype._unmonitorIntersections = function() {
        if (this._monitoringIntersections) {
            this._monitoringIntersections = false;

            clearInterval(this._monitoringInterval);
            this._monitoringInterval = null;

            removeEvent(window, 'resize', this._checkForIntersections, true);
            removeEvent(document, 'scroll', this._checkForIntersections, true);

            if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
            }
        }
    }
    ;

    /**
   * Scans each observation target for intersection changes and adds them
   * to the internal entries queue. If new entries are found, it
   * schedules the callback to be invoked.
   * @private
   */
    IntersectionObserver.prototype._checkForIntersections = function() {
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

        this._observationTargets.forEach(function(item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);
            var rootContainsTarget = this._rootContainsTarget(target);
            var oldEntry = item.entry;
            var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);

            var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target: target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect: intersectionRect
            });

            if (!oldEntry) {
                this._queuedEntries.push(newEntry);
            } else if (rootIsInDom && rootContainsTarget) {
                // If the new entry intersection ratio has crossed any of the
                // thresholds, add a new entry.
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                    this._queuedEntries.push(newEntry);
                }
            } else {
                // If the root is not in the DOM or target is not contained within
                // root but the previous entry for this target had an intersection,
                // add a new record indicating removal.
                if (oldEntry && oldEntry.isIntersecting) {
                    this._queuedEntries.push(newEntry);
                }
            }
        }, this);

        if (this._queuedEntries.length) {
            this._callback(this.takeRecords(), this);
        }
    }
    ;

    /**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */
    IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, rootRect) {

        // If the element isn't displayed, an intersection can't happen.
        if (window.getComputedStyle(target).display == 'none')
            return;

        var targetRect = getBoundingClientRect(target);
        var intersectionRect = targetRect;
        var parent = getParentNode(target);
        var atRoot = false;

        while (!atRoot) {
            var parentRect = null;
            var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};

            // If the parent isn't displayed, an intersection can't happen.
            if (parentComputedStyle.display == 'none')
                return;

            if (parent == this.root || parent == document) {
                atRoot = true;
                parentRect = rootRect;
            } else {
                // If the element has a non-visible overflow, and it's not the <body>
                // or <html> element, update the intersection rect.
                // Note: <body> and <html> cannot be clipped to a rect that's not also
                // the document rect, so no need to compute a new intersection.
                if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {
                    parentRect = getBoundingClientRect(parent);
                }
            }

            // If either of the above conditionals set a new parentRect,
            // calculate new intersection data.
            if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);

                if (!intersectionRect)
                    break;
            }
            parent = getParentNode(parent);
        }
        return intersectionRect;
    }
    ;

    /**
   * Returns the root rect after being expanded by the rootMargin value.
   * @return {Object} The expanded root rect.
   * @private
   */
    IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root) {
            rootRect = getBoundingClientRect(this.root);
        } else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var html = document.documentElement;
            var body = document.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    }
    ;

    /**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {Object} rect The rect object to expand.
   * @return {Object} The expanded rect.
   * @private
   */
    IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
            return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;

        return newRect;
    }
    ;

    /**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */
    IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {

        // To make comparing easier, an entry that has a ratio of 0
        // but does not actually intersect is given a value of -1
        var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
        var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;

        // Ignore unchanged ratios
        if (oldRatio === newRatio)
            return;

        for (var i = 0; i < this.thresholds.length; i++) {
            var threshold = this.thresholds[i];

            // Return true if an entry matches a threshold or if the new ratio
            // and the old ratio are on the opposite sides of a threshold.
            if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                return true;
            }
        }
    }
    ;

    /**
   * Returns whether or not the root element is an element and is in the DOM.
   * @return {boolean} True if the root element is an element and is in the DOM.
   * @private
   */
    IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root);
    }
    ;

    /**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */
    IntersectionObserver.prototype._rootContainsTarget = function(target) {
        return containsDeep(this.root || document, target);
    }
    ;

    /**
   * Adds the instance to the global IntersectionObserver registry if it isn't
   * already present.
   * @private
   */
    IntersectionObserver.prototype._registerInstance = function() {}
    ;

    /**
   * Removes the instance from the global IntersectionObserver registry.
   * @private
   */
    IntersectionObserver.prototype._unregisterInstance = function() {}
    ;

    /**
   * Returns the result of the performance.now() method or null in browsers
   * that don't support the API.
   * @return {number} The elapsed time since the page was requested.
   */
    function now() {
        return window.performance && performance.now && performance.now();
    }

    /**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */
    function throttle(fn, timeout) {
        var timer = null;
        return function() {
            if (!timer) {
                timer = setTimeout(function() {
                    fn();
                    timer = null;
                }, timeout);
            }
        }
        ;
    }

    /**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */
    function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == 'function') {
            node.addEventListener(event, fn, opt_useCapture || false);
        } else if (typeof node.attachEvent == 'function') {
            node.attachEvent('on' + event, fn);
        }
    }

    /**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */
    function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == 'function') {
            node.removeEventListener(event, fn, opt_useCapture || false);
        } else if (typeof node.detatchEvent == 'function') {
            node.detatchEvent('on' + event, fn);
        }
    }

    /**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object} The intersection rect or undefined if no intersection
   *     is found.
   */
    function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;

        return width >= 0 && height >= 0 && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        };
    }

    /**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {Object} The (possibly shimmed) rect of the element.
   */
    function getBoundingClientRect(el) {
        var rect;

        try {
            rect = el.getBoundingClientRect();
        } catch (err) {// Ignore Windows 7 IE11 "Unspecified error"
        // https://github.com/w3c/IntersectionObserver/pull/205
        }

        if (!rect)
            return getEmptyRect();

        // Older IE
        if (!(rect.width && rect.height)) {
            rect = {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            };
        }
        return rect;
    }

    /**
   * Returns an empty rect object. An empty rect is returned when an element
   * is not in the DOM.
   * @return {Object} The empty rect.
   */
    function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }

    /**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */
    function containsDeep(parent, child) {
        var node = child;
        while (node) {
            if (node == parent)
                return true;

            node = getParentNode(node);
        }
        return false;
    }

    /**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */
    function getParentNode(node) {
        var parent = node.parentNode;

        if (parent && parent.nodeType == 11 && parent.host) {
            // If the parent is a shadow root, return the host element.
            return parent.host;
        }
        return parent;
    }

    // Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;
}
)(window, document);

var inView = createCommonjsModule(function(module, exports) {
    /*!
   * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
   * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
   * License: MIT
   */
    !function(t, e) {
        module.exports = e();
    }(commonjsGlobal, function() {
        return function(t) {
            function e(r) {
                if (n[r])
                    return n[r].exports;
                var i = n[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return t[r].call(i.exports, i, i.exports, e),
                i.loaded = !0,
                i.exports;
            }
            var n = {};
            return e.m = t,
            e.c = n,
            e.p = "",
            e(0);
        }([function(t, e, n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                };
            }
            var i = n(2)
              , o = r(i);
            t.exports = o["default"];
        }
        , function(t, e) {
            function n(t) {
                var e = typeof t === 'undefined' ? 'undefined' : _typeof(t);
                return null != t && ("object" == e || "function" == e);
            }
            t.exports = n;
        }
        , function(t, e, n) {
            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(9)
              , o = r(i)
              , u = n(3)
              , f = r(u)
              , s = n(4)
              , c = function c() {
                if ("undefined" != typeof window) {
                    var t = 100
                      , e = ["scroll", "resize", "load"]
                      , n = {
                        history: []
                    }
                      , r = {
                        offset: {},
                        threshold: 0,
                        test: s.inViewport
                    }
                      , i = (0,
                    o["default"])(function() {
                        n.history.forEach(function(t) {
                            n[t].check();
                        });
                    }, t);
                    e.forEach(function(t) {
                        return addEventListener(t, i);
                    }),
                    window.MutationObserver && addEventListener("DOMContentLoaded", function() {
                        new MutationObserver(i).observe(document.body, {
                            attributes: !0,
                            childList: !0,
                            subtree: !0
                        });
                    });
                    var u = function u(t) {
                        if ("string" == typeof t) {
                            var e = [].slice.call(document.querySelectorAll(t));
                            return n.history.indexOf(t) > -1 ? n[t].elements = e : (n[t] = (0,
                            f["default"])(e, r),
                            n.history.push(t)),
                            n[t];
                        }
                    };
                    return u.offset = function(t) {
                        if (void 0 === t)
                            return r.offset;
                        var e = function e(t) {
                            return "number" == typeof t;
                        };
                        return ["top", "right", "bottom", "left"].forEach(e(t) ? function(e) {
                            return r.offset[e] = t;
                        }
                        : function(n) {
                            return e(t[n]) ? r.offset[n] = t[n] : null;
                        }
                        ),
                        r.offset;
                    }
                    ,
                    u.threshold = function(t) {
                        return "number" == typeof t && t >= 0 && t <= 1 ? r.threshold = t : r.threshold;
                    }
                    ,
                    u.test = function(t) {
                        return "function" == typeof t ? r.test = t : r.test;
                    }
                    ,
                    u.is = function(t) {
                        return r.test(t, r);
                    }
                    ,
                    u.offset(0),
                    u;
                }
            };
            e["default"] = c();
        }
        , function(t, e) {
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value"in r && (r.writable = !0),
                        Object.defineProperty(t, r.key, r);
                    }
                }
                return function(e, n, r) {
                    return n && t(e.prototype, n),
                    r && t(e, r),
                    e;
                }
                ;
            }()
              , i = function() {
                function t(e, r) {
                    n(this, t),
                    this.options = r,
                    this.elements = e,
                    this.current = [],
                    this.handlers = {
                        enter: [],
                        exit: []
                    },
                    this.singles = {
                        enter: [],
                        exit: []
                    };
                }
                return r(t, [{
                    key: "check",
                    value: function value() {
                        var t = this;
                        return this.elements.forEach(function(e) {
                            var n = t.options.test(e, t.options)
                              , r = t.current.indexOf(e)
                              , i = r > -1
                              , o = n && !i
                              , u = !n && i;
                            o && (t.current.push(e),
                            t.emit("enter", e)),
                            u && (t.current.splice(r, 1),
                            t.emit("exit", e));
                        }),
                        this;
                    }
                }, {
                    key: "on",
                    value: function value(t, e) {
                        return this.handlers[t].push(e),
                        this;
                    }
                }, {
                    key: "once",
                    value: function value(t, e) {
                        return this.singles[t].unshift(e),
                        this;
                    }
                }, {
                    key: "emit",
                    value: function value(t, e) {
                        for (; this.singles[t].length; ) {
                            this.singles[t].pop()(e);
                        }
                        for (var n = this.handlers[t].length; --n > -1; ) {
                            this.handlers[t][n](e);
                        }
                        return this;
                    }
                }]),
                t;
            }();
            e["default"] = function(t, e) {
                return new i(t,e);
            }
            ;
        }
        , function(t, e) {
            function n(t, e) {
                var n = t.getBoundingClientRect()
                  , r = n.top
                  , i = n.right
                  , o = n.bottom
                  , u = n.left
                  , f = n.width
                  , s = n.height
                  , c = {
                    t: o,
                    r: window.innerWidth - u,
                    b: window.innerHeight - r,
                    l: i
                }
                  , a = {
                    x: e.threshold * f,
                    y: e.threshold * s
                };
                return c.t > e.offset.top + a.y && c.r > e.offset.right + a.x && c.b > e.offset.bottom + a.y && c.l > e.offset.left + a.x;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.inViewport = n;
        }
        , function(t, e) {
            (function(e) {
                var n = "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && e && e.Object === Object && e;
                t.exports = n;
            }
            ).call(e, function() {
                return this;
            }());
        }
        , function(t, e, n) {
            var r = n(5)
              , i = "object" == (typeof self === 'undefined' ? 'undefined' : _typeof(self)) && self && self.Object === Object && self
              , o = r || i || Function("return this")();
            t.exports = o;
        }
        , function(t, e, n) {
            function r(t, e, n) {
                function r(e) {
                    var n = x
                      , r = m;
                    return x = m = void 0,
                    E = e,
                    w = t.apply(r, n);
                }
                function a(t) {
                    return E = t,
                    j = setTimeout(h, e),
                    M ? r(t) : w;
                }
                function l(t) {
                    var n = t - O
                      , r = t - E
                      , i = e - n;
                    return _ ? c(i, g - r) : i;
                }
                function d(t) {
                    var n = t - O
                      , r = t - E;
                    return void 0 === O || n >= e || n < 0 || _ && r >= g;
                }
                function h() {
                    var t = o();
                    return d(t) ? p(t) : void (j = setTimeout(h, l(t)));
                }
                function p(t) {
                    return j = void 0,
                    T && x ? r(t) : (x = m = void 0,
                    w);
                }
                function v() {
                    void 0 !== j && clearTimeout(j),
                    E = 0,
                    x = O = m = j = void 0;
                }
                function y() {
                    return void 0 === j ? w : p(o());
                }
                function b() {
                    var t = o()
                      , n = d(t);
                    if (x = arguments,
                    m = this,
                    O = t,
                    n) {
                        if (void 0 === j)
                            return a(O);
                        if (_)
                            return j = setTimeout(h, e),
                            r(O);
                    }
                    return void 0 === j && (j = setTimeout(h, e)),
                    w;
                }
                var x, m, g, w, j, O, E = 0, M = !1, _ = !1, T = !0;
                if ("function" != typeof t)
                    throw new TypeError(f);
                return e = u(e) || 0,
                i(n) && (M = !!n.leading,
                _ = "maxWait"in n,
                g = _ ? s(u(n.maxWait) || 0, e) : g,
                T = "trailing"in n ? !!n.trailing : T),
                b.cancel = v,
                b.flush = y,
                b;
            }
            var i = n(1)
              , o = n(8)
              , u = n(10)
              , f = "Expected a function"
              , s = Math.max
              , c = Math.min;
            t.exports = r;
        }
        , function(t, e, n) {
            var r = n(6)
              , i = function i() {
                return r.Date.now();
            };
            t.exports = i;
        }
        , function(t, e, n) {
            function r(t, e, n) {
                var r = !0
                  , f = !0;
                if ("function" != typeof t)
                    throw new TypeError(u);
                return o(n) && (r = "leading"in n ? !!n.leading : r,
                f = "trailing"in n ? !!n.trailing : f),
                i(t, e, {
                    leading: r,
                    maxWait: e,
                    trailing: f
                });
            }
            var i = n(7)
              , o = n(1)
              , u = "Expected a function";
            t.exports = r;
        }
        , function(t, e) {
            function n(t) {
                return t;
            }
            t.exports = n;
        }
        ]);
    });
});

var inView$1 = unwrapExports(inView);
var inView_1 = inView.inView;

var splittext = createCommonjsModule(function(module) {
    /*!
  * VERSION: 0.5.8
  * DATE: 2017-08-22
  * UPDATES AND DOCS AT: http://greensock.com
  *
  * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
  * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
  * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
  * This work is subject to the software agreement that was issued with your membership.
  *
  * @author: Jack Doyle, jack@greensock.com
  */
    var _gsScope = module.exports && typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal || window;
    //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
    (function(window) {

        var _globals = window.GreenSockGlobals || window
          , _namespace = function _namespace(ns) {
            var a = ns.split("."), p = _globals, i;
            for (i = 0; i < a.length; i++) {
                p[a[i]] = p = p[a[i]] || {};
            }
            return p;
        }
          , pkg = _namespace("com.greensock.utils")
          , _getText = function _getText(e) {
            var type = e.nodeType
              , result = "";
            if (type === 1 || type === 9 || type === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent;
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        result += _getText(e);
                    }
                }
            } else if (type === 3 || type === 4) {
                return e.nodeValue;
            }
            return result;
        }
          , _doc = document
          , _getComputedStyle = _doc.defaultView ? _doc.defaultView.getComputedStyle : function() {}
          , _capsExp = /([A-Z])/g
          , _getStyle = function _getStyle(t, p, cs, str) {
            var result;
            if (cs = cs || _getComputedStyle(t, null)) {
                t = cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
                result = t || cs.length ? t : cs[p];
                //Opera behaves VERY strangely - length is usually 0 and cs[p] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
            } else if (t.currentStyle) {
                cs = t.currentStyle;
                result = cs[p];
            }
            return str ? result : parseInt(result, 10) || 0;
        }
          , _isArrayLike = function _isArrayLike(e) {
            return e.length && e[0] && (e[0].nodeType && e[0].style && !e.nodeType || e[0].length && e[0][0]) ? true : false;
            //could be an array of jQuery objects too, so accommodate that.
        }
          , _flattenArray = function _flattenArray(a) {
            var result = [], l = a.length, i, e, j;
            for (i = 0; i < l; i++) {
                e = a[i];
                if (_isArrayLike(e)) {
                    j = e.length;
                    for (j = 0; j < e.length; j++) {
                        result.push(e[j]);
                    }
                } else {
                    result.push(e);
                }
            }
            return result;
        }
          , _stripExp = /(?:\r|\n|\t\t)/g
          , //find carriage returns, new line feeds and double-tabs.
        _multipleSpacesExp = /(?:\s\s+)/g
          , _emojiStart = 0xD800
          , _emojiEnd = 0xDBFF
          , _emojiLowStart = 0xDC00
          , _emojiRegionStart = 0x1F1E6
          , _emojiRegionEnd = 0x1F1FF
          , _emojiModStart = 0x1f3fb
          , _emojiModEnd = 0x1f3ff
          , _emojiPairCode = function _emojiPairCode(s) {
            return (s.charCodeAt(0) - _emojiStart << 10) + (s.charCodeAt(1) - _emojiLowStart) + 0x10000;
        }
          , _isOldIE = _doc.all && !_doc.addEventListener
          , _divStart = " style='position:relative;display:inline-block;" + (_isOldIE ? "*display:inline;*zoom:1;'" : "'")
          , //note: we must use both display:inline-block and *display:inline for IE8 and earlier, otherwise it won't flow correctly (and if we only use display:inline, IE won't render most of the property tweens - very odd).
        _cssClassFunc = function _cssClassFunc(cssClass, tag) {
            cssClass = cssClass || "";
            var iterate = cssClass.indexOf("++") !== -1
              , num = 1;
            if (iterate) {
                cssClass = cssClass.split("++").join("");
            }
            return function() {
                return "<" + tag + _divStart + (cssClass ? " class='" + cssClass + (iterate ? num++ : "") + "'>" : ">");
            }
            ;
        }
          , SplitText = pkg.SplitText = _globals.SplitText = function(element, vars) {
            if (typeof element === "string") {
                element = SplitText.selector(element);
            }
            if (!element) {
                throw "cannot split a null element.";
            }
            this.elements = _isArrayLike(element) ? _flattenArray(element) : [element];
            this.chars = [];
            this.words = [];
            this.lines = [];
            this._originals = [];
            this.vars = vars || {};
            this.split(vars);
        }
          , _swapText = function _swapText(element, oldText, newText) {
            var type = element.nodeType;
            if (type === 1 || type === 9 || type === 11) {
                for (element = element.firstChild; element; element = element.nextSibling) {
                    _swapText(element, oldText, newText);
                }
            } else if (type === 3 || type === 4) {
                element.nodeValue = element.nodeValue.split(oldText).join(newText);
            }
        }
          , _pushReversed = function _pushReversed(a, merge) {
            var i = merge.length;
            while (--i > -1) {
                a.push(merge[i]);
            }
        }
          , _slice = function _slice(a) {
            //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
            var b = [], l = a.length, i;
            for (i = 0; i !== l; b.push(a[i++])) {}
            return b;
        }
          , _isBeforeWordDelimiter = function _isBeforeWordDelimiter(e, root, wordDelimiter) {
            var next;
            while (e && e !== root) {
                next = e._next || e.nextSibling;
                if (next) {
                    return next.textContent.charAt(0) === wordDelimiter;
                }
                e = e.parentNode || e._parent;
            }
            return false;
        }
          , _deWordify = function _deWordify(e) {
            var children = _slice(e.childNodes), l = children.length, i, child;
            for (i = 0; i < l; i++) {
                child = children[i];
                if (child._isSplit) {
                    _deWordify(child);
                } else {
                    if (i && child.previousSibling.nodeType === 3) {
                        child.previousSibling.nodeValue += child.nodeType === 3 ? child.nodeValue : child.firstChild.nodeValue;
                    } else if (child.nodeType !== 3) {
                        e.insertBefore(child.firstChild, child);
                    }
                    e.removeChild(child);
                }
            }
        }
          , _setPositionsAfterSplit = function _setPositionsAfterSplit(element, vars, allChars, allWords, allLines, origWidth, origHeight) {
            var cs = _getComputedStyle(element), paddingLeft = _getStyle(element, "paddingLeft", cs), lineOffsetY = -999, borderTopAndBottom = _getStyle(element, "borderBottomWidth", cs) + _getStyle(element, "borderTopWidth", cs), borderLeftAndRight = _getStyle(element, "borderLeftWidth", cs) + _getStyle(element, "borderRightWidth", cs), padTopAndBottom = _getStyle(element, "paddingTop", cs) + _getStyle(element, "paddingBottom", cs), padLeftAndRight = _getStyle(element, "paddingLeft", cs) + _getStyle(element, "paddingRight", cs), lineThreshold = _getStyle(element, "fontSize") * 0.2, textAlign = _getStyle(element, "textAlign", cs, true), charArray = [], wordArray = [], lineArray = [], wordDelimiter = vars.wordDelimiter || " ", tag = vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines", lines = allLines && types.indexOf("lines") !== -1 ? [] : null, words = types.indexOf("words") !== -1, chars = types.indexOf("chars") !== -1, absolute = vars.position === "absolute" || vars.absolute === true, linesClass = vars.linesClass, iterateLine = (linesClass || "").indexOf("++") !== -1, spaceNodesToRemove = [], i, j, l, node, nodes, isChild, curLine, addWordSpaces, style, lineNode, lineWidth, offset;
            if (lines && element.children.length === 1 && element.children[0]._isSplit) {
                //lines are always split on the main element (not inside nested elements), so if there's only one child, bust apart lines inside that rather than forcing it all into one big line. Like <div><div>lots of stuff</div></div> - if they split the outer one, it'd all be in one line.
                element = element.children[0];
            }
            if (iterateLine) {
                linesClass = linesClass.split("++").join("");
            }

            //copy all the descendant nodes into an array (we can't use a regular nodeList because it's live and we may need to renest things)
            j = element.getElementsByTagName("*");
            l = j.length;
            nodes = [];
            for (i = 0; i < l; i++) {
                nodes[i] = j[i];
            }

            //for absolute positioning, we need to record the x/y offsets and width/height for every <div>. And even if we're not positioning things absolutely, in order to accommodate lines, we must figure out where the y offset changes so that we can sense where the lines break, and we populate the lines array.
            if (lines || absolute) {
                for (i = 0; i < l; i++) {
                    node = nodes[i];
                    isChild = node.parentNode === element;
                    if (isChild || absolute || chars && !words) {
                        offset = node.offsetTop;
                        if (lines && isChild && Math.abs(offset - lineOffsetY) > lineThreshold && (node.nodeName !== "BR" || i === 0)) {
                            //we found some rare occasions where a certain character like &#8209; could cause the offsetTop to be off by 1 pixel, so we build in a threshold.
                            curLine = [];
                            lines.push(curLine);
                            lineOffsetY = offset;
                        }
                        if (absolute) {
                            //record offset x and y, as well as width and height so that we can access them later for positioning. Grabbing them at once ensures we don't trigger a browser paint & we maximize performance.
                            node._x = node.offsetLeft;
                            node._y = offset;
                            node._w = node.offsetWidth;
                            node._h = node.offsetHeight;
                        }
                        if (lines) {
                            if (node._isSplit && isChild || !chars && isChild || words && isChild || !words && node.parentNode.parentNode === element && !node.parentNode._isSplit) {
                                curLine.push(node);
                                node._x -= paddingLeft;
                                if (_isBeforeWordDelimiter(node, element, wordDelimiter)) {
                                    node._wordEnd = true;
                                }
                            }
                            if (node.nodeName === "BR" && (node.nextSibling && node.nextSibling.nodeName === "BR" || i === 0)) {
                                //two consecutive <br> tags signify a new [empty] line. Also, if the entire block of content STARTS with a <br>, add a line.
                                lines.push([]);
                            }
                        }
                    }
                }
            }

            for (i = 0; i < l; i++) {
                node = nodes[i];
                isChild = node.parentNode === element;
                if (node.nodeName === "BR") {
                    if (lines || absolute) {
                        if (node.parentNode) {
                            node.parentNode.removeChild(node);
                        }
                        nodes.splice(i--, 1);
                        l--;
                    } else if (!words) {
                        element.appendChild(node);
                    }
                    continue;
                }

                if (absolute) {
                    style = node.style;
                    if (!words && !isChild) {
                        node._x += node.parentNode._x;
                        node._y += node.parentNode._y;
                    }
                    style.left = node._x + "px";
                    style.top = node._y + "px";
                    style.position = "absolute";
                    style.display = "block";
                    //if we don't set the width/height, things collapse in older versions of IE and the origin for transforms is thrown off in all browsers.
                    style.width = node._w + 1 + "px";
                    //IE is 1px short sometimes. Avoid wrapping
                    style.height = node._h + "px";
                }

                if (!words && chars) {
                    //we always start out wrapping words in their own <div> so that line breaks happen correctly, but here we'll remove those <div> tags if necessary and renest the characters directly into the element rather than inside the word <div>
                    if (node._isSplit) {
                        node._next = node.nextSibling;
                        node.parentNode.appendChild(node);
                        //put it at the end to keep the order correct.
                    } else if (node.parentNode._isSplit) {
                        node._parent = node.parentNode;
                        if (!node.previousSibling && node.firstChild) {
                            node.firstChild._isFirst = true;
                        }
                        if (node.nextSibling && node.nextSibling.textContent === " " && !node.nextSibling.nextSibling) {
                            //if the last node inside a nested element is just a space (like T<span>nested </span>), remove it otherwise it'll get placed in the wrong order. Don't remove it right away, though, because we need to sense when words/characters are before a space like _isBeforeWordDelimiter(). Removing it now would make that a false negative.
                            spaceNodesToRemove.push(node.nextSibling);
                        }
                        node._next = node.nextSibling && node.nextSibling._isFirst ? null : node.nextSibling;
                        node.parentNode.removeChild(node);
                        nodes.splice(i--, 1);
                        l--;
                    } else if (!isChild) {
                        offset = !node.nextSibling && _isBeforeWordDelimiter(node.parentNode, element, wordDelimiter);
                        //if this is the last letter in the word (and we're not breaking by lines and not positioning things absolutely), we need to add a space afterwards so that the characters don't just mash together
                        if (node.parentNode._parent) {
                            node.parentNode._parent.appendChild(node);
                        }
                        if (offset) {
                            node.parentNode.appendChild(_doc.createTextNode(" "));
                        }
                        if (vars.span) {
                            node.style.display = "inline";
                            //so that word breaks are honored properly.
                        }
                        charArray.push(node);
                    }
                } else if (node.parentNode._isSplit && !node._isSplit && node.innerHTML !== "") {
                    wordArray.push(node);
                } else if (chars && !node._isSplit) {
                    if (vars.span) {
                        node.style.display = "inline";
                    }
                    charArray.push(node);
                }
            }

            i = spaceNodesToRemove.length;
            while (--i > -1) {
                spaceNodesToRemove[i].parentNode.removeChild(spaceNodesToRemove[i]);
            }

            if (lines) {
                //the next 7 lines just give us the line width in the most reliable way and figure out the left offset (if position isn't relative or absolute). We must set the width along with text-align to ensure everything works properly for various alignments.
                if (absolute) {
                    lineNode = _doc.createElement(tag);
                    element.appendChild(lineNode);
                    lineWidth = lineNode.offsetWidth + "px";
                    offset = lineNode.offsetParent === element ? 0 : element.offsetLeft;
                    element.removeChild(lineNode);
                }
                style = element.style.cssText;
                element.style.cssText = "display:none;";
                //to improve performance, set display:none on the element so that the browser doesn't have to worry about reflowing or rendering while we're renesting things. We'll revert the cssText later.
                //we can't use element.innerHTML = "" because that causes IE to literally delete all the nodes and their content even though we've stored them in an array! So we must loop through the children and remove them.
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
                addWordSpaces = wordDelimiter === " " && (!absolute || !words && !chars);
                for (i = 0; i < lines.length; i++) {
                    curLine = lines[i];
                    lineNode = _doc.createElement(tag);
                    lineNode.style.cssText = "display:block;text-align:" + textAlign + ";position:" + (absolute ? "absolute;" : "relative;");
                    if (linesClass) {
                        lineNode.className = linesClass + (iterateLine ? i + 1 : "");
                    }
                    lineArray.push(lineNode);
                    l = curLine.length;
                    for (j = 0; j < l; j++) {
                        if (curLine[j].nodeName !== "BR") {
                            node = curLine[j];
                            lineNode.appendChild(node);
                            if (addWordSpaces && node._wordEnd) {
                                lineNode.appendChild(_doc.createTextNode(" "));
                            }
                            if (absolute) {
                                if (j === 0) {
                                    lineNode.style.top = node._y + "px";
                                    lineNode.style.left = paddingLeft + offset + "px";
                                }
                                node.style.top = "0px";
                                if (offset) {
                                    node.style.left = node._x - offset + "px";
                                }
                            }
                        }
                    }
                    if (l === 0) {
                        //if there are no nodes in the line (typically meaning there were two consecutive <br> tags, just add a non-breaking space so that things display properly.
                        lineNode.innerHTML = "&nbsp;";
                    } else if (!words && !chars) {
                        _deWordify(lineNode);
                        _swapText(lineNode, String.fromCharCode(160), " ");
                    }
                    if (absolute) {
                        lineNode.style.width = lineWidth;
                        lineNode.style.height = node._h + "px";
                    }
                    element.appendChild(lineNode);
                }
                element.style.cssText = style;
            }

            //if everything shifts to being position:absolute, the container can collapse in terms of height or width, so fix that here.
            if (absolute) {
                if (origHeight > element.clientHeight) {
                    element.style.height = origHeight - padTopAndBottom + "px";
                    if (element.clientHeight < origHeight) {
                        //IE8 and earlier use a different box model - we must include padding and borders
                        element.style.height = origHeight + borderTopAndBottom + "px";
                    }
                }
                if (origWidth > element.clientWidth) {
                    element.style.width = origWidth - padLeftAndRight + "px";
                    if (element.clientWidth < origWidth) {
                        //IE8 and earlier use a different box model - we must include padding and borders
                        element.style.width = origWidth + borderLeftAndRight + "px";
                    }
                }
            }
            _pushReversed(allChars, charArray);
            _pushReversed(allWords, wordArray);
            _pushReversed(allLines, lineArray);
        }
          , _splitRawText = function _splitRawText(element, vars, wordStart, charStart) {
            var tag = vars.span ? "span" : "div", types = vars.type || vars.split || "chars,words,lines",
            //words = (types.indexOf("words") !== -1),
            chars = types.indexOf("chars") !== -1, absolute = vars.position === "absolute" || vars.absolute === true, wordDelimiter = vars.wordDelimiter || " ", space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ", wordEnd = vars.span ? "</span>" : "</div>", wordIsOpen = true, text, splitText, i, j, l, character, hasTagStart, emojiPair1, emojiPair2, container = _doc.createElement("div"), parent = element.parentNode;

            parent.insertBefore(container, element);
            container.textContent = element.nodeValue;
            parent.removeChild(element);
            element = container;
            text = _getText(element);
            hasTagStart = text.indexOf("<") !== -1;

            if (vars.reduceWhiteSpace !== false) {
                text = text.replace(_multipleSpacesExp, " ").replace(_stripExp, "");
            }
            if (hasTagStart) {
                text = text.split("<").join("{{LT}}");
                //we can't leave "<" in the string, or when we set the innerHTML, it can be interpreted as a node
            }
            l = text.length;
            splitText = (text.charAt(0) === " " ? space : "") + wordStart();
            for (i = 0; i < l; i++) {
                character = text.charAt(i);
                if (character === wordDelimiter && text.charAt(i - 1) !== wordDelimiter && i) {
                    splitText += wordIsOpen ? wordEnd : "";
                    wordIsOpen = false;
                    while (text.charAt(i + 1) === wordDelimiter) {
                        //skip over empty spaces (to avoid making them words)
                        splitText += space;
                        i++;
                    }
                    if (i === l - 1) {
                        splitText += space;
                    } else if (text.charAt(i + 1) !== ")") {
                        splitText += space + wordStart();
                        wordIsOpen = true;
                    }
                } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
                    splitText += chars ? charStart() + "{{LT}}" + "</" + tag + ">" : "{{LT}}";
                    i += 5;
                } else if (character.charCodeAt(0) >= _emojiStart && character.charCodeAt(0) <= _emojiEnd || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
                    //special emoji characters use 2 or 4 unicode characters that we must keep together.
                    emojiPair1 = _emojiPairCode(text.substr(i, 2));
                    emojiPair2 = _emojiPairCode(text.substr(i + 2, 2));
                    j = emojiPair1 >= _emojiRegionStart && emojiPair1 <= _emojiRegionEnd && emojiPair2 >= _emojiRegionStart && emojiPair2 <= _emojiRegionEnd || emojiPair2 >= _emojiModStart && emojiPair2 <= _emojiModEnd ? 4 : 2;
                    splitText += chars && character !== " " ? charStart() + text.substr(i, j) + "</" + tag + ">" : text.substr(i, j);
                    i += j - 1;
                } else {
                    splitText += chars && character !== " " ? charStart() + character + "</" + tag + ">" : character;
                }
            }
            element.outerHTML = splitText + (wordIsOpen ? wordEnd : "");
            if (hasTagStart) {
                _swapText(parent, "{{LT}}", "<");
                //note: don't perform this on "element" because that gets replaced with all new elements when we set element.outerHTML.
            }
        }
          , _split = function _split(element, vars, wordStart, charStart) {
            var children = _slice(element.childNodes), l = children.length, absolute = vars.position === "absolute" || vars.absolute === true, i, child;

            if (element.nodeType !== 3 || l > 1) {
                vars.absolute = false;
                for (i = 0; i < l; i++) {
                    child = children[i];
                    if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
                        if (absolute && child.nodeType !== 3 && _getStyle(child, "display", null, true) === "inline") {
                            //if there's a child node that's display:inline, switch it to inline-block so that absolute positioning works properly (most browsers don't report offsetTop/offsetLeft properly inside a <span> for example)
                            child.style.display = "inline-block";
                            child.style.position = "relative";
                        }
                        child._isSplit = true;
                        _split(child, vars, wordStart, charStart);
                        //don't split lines on child elements
                    }
                }
                vars.absolute = absolute;
                element._isSplit = true;
                return;
            }

            _splitRawText(element, vars, wordStart, charStart);
        }
          , p = SplitText.prototype;

        p.split = function(vars) {
            if (this.isSplit) {
                this.revert();
            }
            this.vars = vars = vars || this.vars;
            this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
            var i = this.elements.length, tag = vars.span ? "span" : "div", wordStart = _cssClassFunc(vars.wordsClass, tag), charStart = _cssClassFunc(vars.charsClass, tag), origHeight, origWidth, e;
            //we split in reversed order so that if/when we position:absolute elements, they don't affect the position of the ones after them in the document flow (shifting them up as they're taken out of the document flow).
            while (--i > -1) {
                e = this.elements[i];
                this._originals[i] = e.innerHTML;
                origHeight = e.clientHeight;
                origWidth = e.clientWidth;
                _split(e, vars, wordStart, charStart);
                _setPositionsAfterSplit(e, vars, this.chars, this.words, this.lines, origWidth, origHeight);
            }
            this.chars.reverse();
            this.words.reverse();
            this.lines.reverse();
            this.isSplit = true;
            return this;
        }
        ;

        p.revert = function() {
            if (!this._originals) {
                throw "revert() call wasn't scoped properly.";
            }
            var i = this._originals.length;
            while (--i > -1) {
                this.elements[i].innerHTML = this._originals[i];
            }
            this.chars = [];
            this.words = [];
            this.lines = [];
            this.isSplit = false;
            return this;
        }
        ;

        SplitText.selector = window.$ || window.jQuery || function(e) {
            var selector = window.$ || window.jQuery;
            if (selector) {
                SplitText.selector = selector;
                return selector(e);
            }
            return typeof document === "undefined" ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById(e.charAt(0) === "#" ? e.substr(1) : e);
        }
        ;
        SplitText.version = "0.5.8";
    }
    )(_gsScope);

    //export to AMD/RequireJS and CommonJS/Node (precursor to full modular build system coming at a later date)
    (function(name) {

        var getGlobal = function getGlobal() {
            return (_gsScope.GreenSockGlobals || _gsScope)[name];
        };
        if (module.exports) {
            //node
            module.exports = getGlobal();
        }
    }
    )("SplitText");
});

var fontfaceobserver_standalone = createCommonjsModule(function(module) {
    /* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */
    (function() {
        function l(a, b) {
            document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b);
        }
        function m(a) {
            document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
                document.removeEventListener("DOMContentLoaded", c);
                a();
            }) : document.attachEvent("onreadystatechange", function k() {
                if ("interactive" == document.readyState || "complete" == document.readyState)
                    document.detachEvent("onreadystatechange", k),
                    a();
            });
        }
        function t(a) {
            this.a = document.createElement("div");
            this.a.setAttribute("aria-hidden", "true");
            this.a.appendChild(document.createTextNode(a));
            this.b = document.createElement("span");
            this.c = document.createElement("span");
            this.h = document.createElement("span");
            this.f = document.createElement("span");
            this.g = -1;
            this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
            this.b.appendChild(this.h);
            this.c.appendChild(this.f);
            this.a.appendChild(this.b);
            this.a.appendChild(this.c);
        }
        function u(a, b) {
            a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";";
        }
        function z(a) {
            var b = a.a.offsetWidth
              , c = b + 100;
            a.f.style.width = c + "px";
            a.c.scrollLeft = c;
            a.b.scrollLeft = a.b.scrollWidth + 100;
            return a.g !== b ? (a.g = b,
            !0) : !1;
        }
        function A(a, b) {
            function c() {
                var a = k;
                z(a) && a.a.parentNode && b(a.g);
            }
            var k = a;
            l(a.b, c);
            l(a.c, c);
            z(a);
        }
        function B(a, b) {
            var c = b || {};
            this.family = a;
            this.style = c.style || "normal";
            this.weight = c.weight || "normal";
            this.stretch = c.stretch || "normal";
        }
        var C = null
          , D = null
          , E = null
          , F = null;
        function G() {
            if (null === D)
                if (J() && /Apple/.test(window.navigator.vendor)) {
                    var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    D = !!a && 603 > parseInt(a[1], 10);
                } else
                    D = !1;
            return D;
        }
        function J() {
            null === F && (F = !!document.fonts);
            return F;
        }
        function K() {
            if (null === E) {
                var a = document.createElement("div");
                try {
                    a.style.font = "condensed 100px sans-serif";
                } catch (b) {}
                E = "" !== a.style.font;
            }
            return E;
        }
        function L(a, b) {
            return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ");
        }
        B.prototype.load = function(a, b) {
            var c = this
              , k = a || "BESbswy"
              , r = 0
              , n = b || 3E3
              , H = new Date().getTime();
            return new Promise(function(a, b) {
                if (J() && !G()) {
                    var M = new Promise(function(a, b) {
                        function e() {
                            new Date().getTime() - H >= n ? b(Error("" + n + "ms timeout exceeded")) : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function(c) {
                                1 <= c.length ? a() : setTimeout(e, 25);
                            }, b);
                        }
                        e();
                    }
                    )
                      , N = new Promise(function(a, c) {
                        r = setTimeout(function() {
                            c(Error("" + n + "ms timeout exceeded"));
                        }, n);
                    }
                    );
                    Promise.race([N, M]).then(function() {
                        clearTimeout(r);
                        a(c);
                    }, b);
                } else
                    m(function() {
                        function v() {
                            var b;
                            if (b = -1 != f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h)
                                (b = f != g && f != h && g != h) || (null === C && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                                C = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))),
                                b = C && (f == w && g == w && h == w || f == x && g == x && h == x || f == y && g == y && h == y)),
                                b = !b;
                            b && (d.parentNode && d.parentNode.removeChild(d),
                            clearTimeout(r),
                            a(c));
                        }
                        function I() {
                            if (new Date().getTime() - H >= n)
                                d.parentNode && d.parentNode.removeChild(d),
                                b(Error("" + n + "ms timeout exceeded"));
                            else {
                                var a = document.hidden;
                                if (!0 === a || void 0 === a)
                                    f = e.a.offsetWidth,
                                    g = p.a.offsetWidth,
                                    h = q.a.offsetWidth,
                                    v();
                                r = setTimeout(I, 50);
                            }
                        }
                        var e = new t(k)
                          , p = new t(k)
                          , q = new t(k)
                          , f = -1
                          , g = -1
                          , h = -1
                          , w = -1
                          , x = -1
                          , y = -1
                          , d = document.createElement("div");
                        d.dir = "ltr";
                        u(e, L(c, "sans-serif"));
                        u(p, L(c, "serif"));
                        u(q, L(c, "monospace"));
                        d.appendChild(e.a);
                        d.appendChild(p.a);
                        d.appendChild(q.a);
                        document.body.appendChild(d);
                        w = e.a.offsetWidth;
                        x = p.a.offsetWidth;
                        y = q.a.offsetWidth;
                        I();
                        A(e, function(a) {
                            f = a;
                            v();
                        });
                        u(e, L(c, '"' + c.family + '",sans-serif'));
                        A(p, function(a) {
                            g = a;
                            v();
                        });
                        u(p, L(c, '"' + c.family + '",serif'));
                        A(q, function(a) {
                            h = a;
                            v();
                        });
                        u(q, L(c, '"' + c.family + '",monospace'));
                    });
            }
            );
        }
        ;
        module.exports = B;
    }
    )();
});

function hilite() {

    if (document.querySelector('.u-hi-lite') == null) {
        return false;
    }

    var font = new fontfaceobserver_standalone('anziano');

    font.load().then(function() {

        var hilites = document.querySelectorAll('.u-hi-lite');

        // Break up em tags into per-word tags
        [].forEach.call(hilites, function(el, idx) {

            var italics = el.querySelectorAll('em');

            if (italics.length > 0) {

                [].forEach.call(italics, function(item) {
                    var content = item.innerHTML;
                    var words = content.split(' ');
                    var nodeFragment = document.createDocumentFragment();
                    words.forEach(function(word, idx) {
                        if (idx != words.length - 1) {
                            word = word + ' ';
                        }
                        var newEl = document.createElement('em');
                        newEl.innerHTML = word;
                        nodeFragment.appendChild(newEl);
                    });
                    item.parentNode.replaceChild(nodeFragment, item);
                });
            }
        });

        var highlightChunked = new splittext('.u-hi-lite',{
            type: 'lines',
            linesClass: 'u-hi-lite__line',
            span: true
        });

        highlightChunked.lines.forEach(function(line) {
            line.style.display = 'inline-block';
        });

        [].forEach.call(hilites, function(el) {
            el.classList.add('u-hi-lite--processed');
        });
    });
}

function siteInit() {

    // Add keyboard user class
    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            // Tab, the "I am a keyboard user" key
            document.body.classList.add('u-keyboard-user');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }

    window.addEventListener('keydown', handleFirstTab);

    // Initialize in-view.js on classes with '.u-watch'
    inView$1.offset(60);

    inView$1('.u-watch').on('enter', function(el) {
        el.classList.add('u-in-view');
    });

    hilite();

    var skipSubmenu = document.getElementById('page-submenu-skip-link');

    if (skipSubmenu) {
        skipSubmenu.addEventListener('click', function() {
            var scrollingElement = document.scrollingElement || document.body;
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
    }

    var videos = document.querySelectorAll('video');

    if (videos) {
        [].forEach.call(videos, function(vid) {
            var vidWrapper = vid.closest('.c-ambient-video');
            if (vidWrapper) {
                vidWrapper.classList.add('has-video');
            }
        });
    }
}

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
    var passiveTestOptions = {
        get passive() {
            hasPassiveEvents = true;
            return undefined;
        }
    };
    window.addEventListener('testPassive', null, passiveTestOptions);
    window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);

var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events
var allowTouchMove = function allowTouchMove(el) {
    return locks.some(function(lock) {
        if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
            return true;
        }

        return false;
    });
};

var preventDefault = function preventDefault(rawEvent) {
    var e = rawEvent || window.event;

    // For the case whereby consumers adds a touchmove event listener to document.
    // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
    // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
    // the touchmove event on document will break.
    if (allowTouchMove(e.target)) {
        return true;
    }

    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom)
    if (e.touches.length > 1)
        return true;

    if (e.preventDefault)
        e.preventDefault();

    return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function() {
        // If previousBodyPaddingRight is already set, don't set it again.
        if (previousBodyPaddingRight === undefined) {
            var reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
            var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

            if (reserveScrollBarGap && scrollBarGap > 0) {
                previousBodyPaddingRight = document.body.style.paddingRight;
                document.body.style.paddingRight = scrollBarGap + 'px';
            }
        }

        // If previousBodyOverflowSetting is already set, don't set it again.
        if (previousBodyOverflowSetting === undefined) {
            previousBodyOverflowSetting = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
    });
};

var restoreOverflowSetting = function restoreOverflowSetting() {
    // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
    // the responsiveness for some reason. Setting within a setTimeout fixes this.
    setTimeout(function() {
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;

            // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
            // can be set again.
            previousBodyPaddingRight = undefined;
        }

        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;

            // Restore previousBodyOverflowSetting to undefined
            // so setOverflowHidden knows it can be set again.
            previousBodyOverflowSetting = undefined;
        }
    });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
    return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
    var clientY = event.targetTouches[0].clientY - initialClientY;

    if (allowTouchMove(event.target)) {
        return false;
    }

    if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
        // element is at the top of its scroll
        return preventDefault(event);
    }

    if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
        // element is at the top of its scroll
        return preventDefault(event);
    }

    event.stopPropagation();
    return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
    if (isIosDevice) {
        // targetElement must be provided, and disableBodyScroll must not have been
        // called on this targetElement before.
        if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
            return;
        }

        if (targetElement && !locks.some(function(lock) {
            return lock.targetElement === targetElement;
        })) {
            var lock = {
                targetElement: targetElement,
                options: options || {}
            };

            locks = [].concat(toConsumableArray(locks), [lock]);

            targetElement.ontouchstart = function(event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    initialClientY = event.targetTouches[0].clientY;
                }
            }
            ;
            targetElement.ontouchmove = function(event) {
                if (event.targetTouches.length === 1) {
                    // detect single touch
                    handleScroll(event, targetElement);
                }
            }
            ;

            if (!documentListenerAdded) {
                document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
                    passive: false
                } : undefined);
                documentListenerAdded = true;
            }
        }
    } else {
        setOverflowHidden(options);
        var _lock = {
            targetElement: targetElement,
            options: options || {}
        };

        locks = [].concat(toConsumableArray(locks), [_lock]);
    }
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
    if (isIosDevice) {
        if (!targetElement) {
            // eslint-disable-next-line no-console
            console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
            return;
        }

        targetElement.ontouchstart = null;
        targetElement.ontouchmove = null;

        locks = locks.filter(function(lock) {
            return lock.targetElement !== targetElement;
        });

        if (documentListenerAdded && locks.length === 0) {
            document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
                passive: false
            } : undefined);

            documentListenerAdded = false;
        }
    } else if (locks.length === 1 && locks[0].targetElement === targetElement) {
        restoreOverflowSetting();

        locks = [];
    } else {
        locks = locks.filter(function(lock) {
            return lock.targetElement !== targetElement;
        });
    }
};

//
// Classes
//
var modalClass = 'c-modal';
var modalOpenClass = 'c-modal--is-open';
var modalAnimateClass = 'c-modal--is-ready';
var modalReturnFocus = 'c-modal--will-focus';
var modalToggleClass = '_modal-toggle';

//
// Placeholders for modal focusable elements
//
var focusableEls = null
  , firstFocusableEl = null
  , lastFocusableEl = null;

// Element used to darken background on modal open
var modalBkEl = document.createElement('div');
modalBkEl.classList.add('c-modal__bk-screen');

// holder for bound close modal function
var closeOpenModal = void 0;

window.siteHasOpenModal = false;

var winWidth = window.innerWidth;

function setWinWidth() {
    winWidth = window.innerWidth;
}

function stopVideo(parentEl) {
    var iframeEl = parentEl.querySelector('iframe');
    if (iframeEl) {
        var src = iframeEl.getAttribute('src');
        var newSrc = src.replace('autoplay=1', 'autoplay=0');
        iframeEl.setAttribute('src', newSrc);
    }
}

function startVideo(iframeEl) {
    var src = iframeEl.getAttribute('src');
    var newSrc = src.replace('autoplay=0', 'autoplay=1');
    iframeEl.setAttribute('src', newSrc);
}

// function

/**
 * Open modal
 * Add modal--open class to modal, set aria-modal to true, set focus on modal
 * add modal--return-focus class to trigger
 *
 * @param {modalID} modalID ID of target modal
 * @param {object} trigger The javascript object that triggered the event
 */
function openModal(modalID, trigger) {

    if (window.siteHasOpenModal) {

        var closeOthers = trigger.getAttribute('data-modalcloseothers');

        if (closeOthers == '1') {
            closeOpenModal();
        } else {
            return false;
        }
    }

    window.siteHasOpenModal = true;

    // lockBody();

    var modal = document.getElementById(modalID);

    // if modal has iframe and it doesn't have a src, check for a data-src attribute
    var iframeEl = modal.querySelector('iframe');
    if (iframeEl) {
        startVideo(iframeEl);
    }

    //Hide submenus
    var menus = document.getElementsByClassName('m-subnav--primary');
    [].forEach.call(menus, function(menu) {
        var menuOpen = menu.classList.contains('is-open');
        if (menuOpen) {
            menu.classList.remove('is-open');
            menu.setAttribute('aria-hidden', 'true');
        }
    });

    modal.classList.add(modalOpenClass);
    modal.setAttribute('aria-modal', true);
    modal.setAttribute('aria-hidden', false);

    closeOpenModal = closeModal.bind(null, modalID, undefined, 400);

    var useBk = modal.getAttribute('data-modalbk');
    if (useBk) {
        document.body.appendChild(modalBkEl);
        modalBkEl.addEventListener('click', closeOpenModal);
        setTimeout(function() {
            modalBkEl.classList.add('c-modal__bk-screen--on');
        }, 50);
    }
    // Animate In
    setTimeout(function() {
        modal.classList.add(modalAnimateClass);
    }, 1);

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('is-locked');
    body.classList.add(modalID + '--open');

    trigger.classList.add(modalReturnFocus);

    // Change `modal--additional-nav` nav focusables depending on viewport size
    // Omits hidden site-info focusable elements desktop
    if (modalID === 'modal--additional-nav' && winWidth >= 970) {
        modalFocusables = document.getElementById('additional-nav-main');
    } else {
        modalFocusables = modal;
    }

    disableBodyScroll(modal);

    // Determine focusable elements
    focusableEls = modalFocusables.querySelectorAll('button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])');
    firstFocusableEl = focusableEls[0];
    lastFocusableEl = focusableEls[focusableEls.length - 1];

    firstFocusableEl.focus();
}

/**
 * Close modal
 * Remove modal--open class to modal, set aria-modal to false
 * remove modal--return-focus class to first element, focus it
 *
 * @param {string} modalID ID of target modal
 */
function closeModal(modalID, btn) {
    var closeDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    var modal = document.getElementById(modalID);
    var delay = btn !== undefined && btn.getAttribute('data-modalclosedelay') ? btn.getAttribute('data-modalclosedelay') : closeDelay;

    modal.classList.remove(modalAnimateClass);
    modal.setAttribute('aria-modal', false);
    modal.setAttribute('aria-hidden', true);

    var returnFocus = document.getElementsByClassName(modalReturnFocus)[0];
    returnFocus.focus();
    returnFocus.classList.remove(modalReturnFocus);

    window.siteHasOpenModal = false;

    var body = document.getElementsByTagName('body')[0];

    // Animate out
    if (delay === 'none') {
        modal.classList.remove(modalOpenClass);
    } else {
        setTimeout(function() {
            modal.classList.remove(modalOpenClass);
        }, delay);
    }

    var useBk = modal.getAttribute('data-modalbk');
    if (useBk) {
        modalBkEl.classList.remove('c-modal__bk-screen--on');
        setTimeout(function() {
            modalBkEl.parentNode.removeChild(modalBkEl);
            body.classList.remove('is-locked');
            body.classList.remove(modalID + '--open');
        }, 400);
    } else {
        body.classList.remove('is-locked');
        body.classList.remove(modalID + '--open');
    }

    if (closeOpenModal) {
        modalBkEl.removeEventListener('click', closeOpenModal);
    }

    enableBodyScroll(modal);

    stopVideo(modal);
}

/**
 * Handle Keydown events when a modal is open
 *
 * @param {event} e keydown event
 */
function keydownModal(e) {
    // Return if a modal is not open
    if (!window.siteHasOpenModal) {
        return false;
    }

    // Grab the first modal
    var modal = document.getElementsByClassName(modalClass + ' ' + modalOpenClass)[0];

    // Allow Escape to close window modal
    if (e.keyCode === 27) {
        // Allows binding close delay to close function. We may instead want to put
        // a close delay attribute on the modal element.
        if (closeOpenModal) {
            closeOpenModal();
            return;
        }
        closeModal(modal.getAttribute('id'));

        // Tab Trap on open modals
    } else if (e.key === 'Tab' || e.keyCode === 9) {
        // shift + tab
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
            // tab
        } else {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    }
}

/**
 * modalInit
 * Generalized modal mechanics providing accessible features
 *
 * Example Markup:
 * <button class="_modal-toggle" data-modalid="some-modal">Toggle</button>
 * <div id="some-modal" class="modal" role="dialog" aria-modal="false"><!-- Stuff --></div>
 *
 * <!-- Open State -->
 * <button class="_modal-toggle modal--return-focus" data-modalid="some-modal">Toggle</button>
 * <div id="some-modal" class="modal modal-open" role="dialog" aria-modal="true"><!-- Stuff --></div>
 *
 */
var modalInit = function modalInit() {
    // Move all modals to end of body so z-index doesnt get messed with.
    var modals = document.querySelectorAll('.' + modalClass);
    [].forEach.call(modals, function(modalEl) {
        if (!modalEl.classList.contains('m-asw-primary__nav-wrapper')) {
            // moves modal element to end of DOM.
            document.body.appendChild(modalEl);
        }
        stopVideo(modalEl);
    });

    // Basic Modal Toggles
    var modalButtons = document.getElementsByClassName(modalToggleClass);

    [].forEach.call(modalButtons, function(btn) {
        btn.addEventListener('click', function() {
            var modalID = btn.dataset.modalid;
            var modal = document.getElementById(modalID);

            if (modal == null) {
                return false;
            }

            if (btn.classList.contains('header-modal-toggle')) {
                var header = document.getElementById('harvard-site-header');
                var headerPos = header.getBoundingClientRect();
                if (headerPos.top < 0 && Math.abs(headerPos.top) < headerPos.height) {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
            }

            if (modal.classList.contains(modalOpenClass)) {
                closeModal(modalID, btn);
            } else {
                openModal(modalID, btn);
                // Adjust modal top position for the admin toolbar menu.
                modal.style.top = '';
                var modalTop = modal.offsetTop;
                var adminToolbar = document.getElementById('toolbar-bar');
                var adminTray = document.getElementById('toolbar-item-administration-tray');
                if (adminToolbar) {
                    modalTop += adminToolbar.offsetHeight;
                }
                if (adminTray && adminTray.classList.contains('toolbar-tray-horizontal')) {
                    modalTop += adminTray.offsetHeight;
                }
                modal.style.top = modalTop + 'px';
            }
        });
    });

    // Handle keydown events for open modals
    window.addEventListener('keydown', keydownModal, true);

    window.addEventListener('resize', setWinWidth);
};

// DOM helper functions

// private
function selectionToArray(selection) {
    var len = selection.length;
    var result = [];
    for (var i = 0; i < len; i += 1) {
        result.push(selection[i]);
    }
    return result;
}

// public
function select(selector) {
    if (selector instanceof Element)
        return selector;
    else if (typeof selector === 'string')
        return document.querySelector(selector);
    return null;
}

function selectAll(selector) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    if (typeof selector === 'string') {
        return selectionToArray(parent.querySelectorAll(selector));
    } else if (selector instanceof Element) {
        return selectionToArray([selector]);
    } else if (selector instanceof NodeList) {
        return selectionToArray(selector);
    } else if (selector instanceof Array) {
        return selector;
    }
    return [];
}

function getStepId(_ref) {
    var id = _ref.id
      , i = _ref.i;

    return 'scrollama__debug-step--' + id + '-' + i;
}

function getOffsetId(_ref2) {
    var id = _ref2.id;

    return 'scrollama__debug-offset--' + id;
}

// SETUP

function setupOffset(_ref3) {
    var id = _ref3.id
      , offsetVal = _ref3.offsetVal
      , stepClass = _ref3.stepClass;

    var el = document.createElement('div');
    el.setAttribute('id', getOffsetId({
        id: id
    }));
    el.setAttribute('class', 'scrollama__debug-offset');

    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.width = '100%';
    el.style.height = '0px';
    el.style.borderTop = '2px dashed black';
    el.style.zIndex = '9999';

    var text = document.createElement('p');
    text.innerText = '".' + stepClass + '" trigger: ' + offsetVal;
    text.style.fontSize = '12px';
    text.style.fontFamily = 'monospace';
    text.style.color = 'black';
    text.style.margin = '0';
    text.style.padding = '6px';
    el.appendChild(text);
    document.body.appendChild(el);
}

function setup(_ref4) {
    var id = _ref4.id
      , offsetVal = _ref4.offsetVal
      , stepEl = _ref4.stepEl;

    var stepClass = stepEl[0].getAttribute('class');
    setupOffset({
        id: id,
        offsetVal: offsetVal,
        stepClass: stepClass
    });
}

// UPDATE
function updateOffset(_ref5) {
    var id = _ref5.id
      , offsetMargin = _ref5.offsetMargin
      , offsetVal = _ref5.offsetVal;

    var idVal = getOffsetId({
        id: id
    });
    var el = document.querySelector('#' + idVal);
    el.style.top = offsetMargin + 'px';
}

function update(_ref6) {
    var id = _ref6.id
      , stepOffsetHeight = _ref6.stepOffsetHeight
      , offsetMargin = _ref6.offsetMargin
      , offsetVal = _ref6.offsetVal;

    updateOffset({
        id: id,
        offsetMargin: offsetMargin
    });
}

function notifyStep(_ref7) {
    var id = _ref7.id
      , index = _ref7.index
      , state = _ref7.state;

    var idVal = getStepId({
        id: id,
        i: index
    });
    var elA = document.querySelector('#' + idVal + '_above');
    var elB = document.querySelector('#' + idVal + '_below');
    var display = state === 'enter' ? 'block' : 'none';

    if (elA)
        elA.style.display = display;
    if (elB)
        elB.style.display = display;
}

function scrollama() {
    var ZERO_MOE = 1;
    // zero with some rounding margin of error
    var callback = {};
    var io = {};

    var containerEl = null;
    var graphicEl = null;
    var stepEl = null;

    var id = null;
    var offsetVal = 0;
    var offsetMargin = 0;
    var vh = 0;
    var ph = 0;
    var stepOffsetHeight = null;
    var stepOffsetTop = null;
    var bboxGraphic = null;

    var isReady = false;
    var isEnabled = false;
    var debugMode = false;
    var progressMode = false;
    var progressThreshold = 0;
    var preserveOrder = false;
    var triggerOnce = false;

    var stepStates = null;
    var containerState = null;
    var previousYOffset = -1;
    var direction = null;

    var exclude = [];

    // HELPERS
    function generateId() {
        var a = 'abcdefghijklmnopqrstuv';
        var l = a.length;
        var t = new Date().getTime();
        var r = [0, 0, 0].map(function(d) {
            return a[Math.floor(Math.random() * l)];
        }).join('');
        return '' + r + t;
    }

    //www.gomakethings.com/how-to-get-an-elements-distance-from-the-top-of-the-page-with-vanilla-javascript/
    function getOffsetTop(el) {
        // Set our distance placeholder
        var distance = 0;

        // Loop up the DOM
        if (el.offsetParent) {
            do {
                distance += el.offsetTop;
                el = el.offsetParent;
            } while (el);
        }

        // Return our distance
        return distance < 0 ? 0 : distance;
    }

    function getPageHeight() {
        var body = document.body;
        var html = document.documentElement;

        return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    }

    function getIndex(element) {
        return +element.getAttribute('data-scrollama-index');
    }

    function updateDirection() {
        if (window.pageYOffset > previousYOffset)
            direction = 'down';
        else if (window.pageYOffset < previousYOffset)
            direction = 'up';
        previousYOffset = window.pageYOffset;
    }

    function handleResize() {
        vh = window.innerHeight;
        ph = getPageHeight();

        bboxGraphic = graphicEl ? graphicEl.getBoundingClientRect() : null;

        offsetMargin = offsetVal * vh;

        stepOffsetHeight = stepEl ? stepEl.map(function(el) {
            return el.offsetHeight;
        }) : [];

        stepOffsetTop = stepEl ? stepEl.map(getOffsetTop) : [];

        if (isEnabled && isReady)
            updateIO();

        if (debugMode)
            update({
                id: id,
                stepOffsetHeight: stepOffsetHeight,
                offsetMargin: offsetMargin,
                offsetVal: offsetVal
            });
    }

    function handleEnable(enable) {
        if (enable && !isEnabled) {
            if (isReady)
                updateIO();
            isEnabled = true;
        } else if (!enable) {
            if (io.top)
                io.top.disconnect();
            if (io.bottom)
                io.bottom.disconnect();
            if (io.stepAbove)
                io.stepAbove.forEach(function(d) {
                    return d.disconnect();
                });
            if (io.stepBelow)
                io.stepBelow.forEach(function(d) {
                    return d.disconnect();
                });
            if (io.stepProgress)
                io.stepProgress.forEach(function(d) {
                    return d.disconnect();
                });
            if (io.viewportAbove)
                io.viewportAbove.forEach(function(d) {
                    return d.disconnect();
                });
            if (io.viewportBelow)
                io.viewportBelow.forEach(function(d) {
                    return d.disconnect();
                });
            isEnabled = false;
        }
    }

    function createThreshold(height) {
        var count = Math.ceil(height / progressThreshold);
        var t = [];
        var ratio = 1 / count;
        for (var i = 0; i < count; i++) {
            t.push(i * ratio);
        }
        return t;
    }

    // NOTIFY CALLBACKS
    function notifyOthers(index, location) {
        if (location === 'above') {
            // check if steps above/below were skipped and should be notified first
            for (var i = 0; i < index; i++) {
                var ss = stepStates[i];
                if (ss.state === 'enter')
                    notifyStepExit(stepEl[i], 'down');
                if (ss.direction === 'up') {
                    notifyStepEnter(stepEl[i], 'down', false);
                    notifyStepExit(stepEl[i], 'down');
                }
            }
        } else if (location === 'below') {
            for (var _i = stepStates.length - 1; _i > index; _i--) {
                var _ss = stepStates[_i];
                if (_ss.state === 'enter') {
                    notifyStepExit(stepEl[_i], 'up');
                }
                if (_ss.direction === 'down') {
                    notifyStepEnter(stepEl[_i], 'up', false);
                    notifyStepExit(stepEl[_i], 'up');
                }
            }
        }
    }

    function notifyStepEnter(element, direction) {
        var check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var index = getIndex(element);
        var resp = {
            element: element,
            index: index,
            direction: direction
        };

        // store most recent trigger
        stepStates[index].direction = direction;
        stepStates[index].state = 'enter';

        if (preserveOrder && check && direction === 'down')
            notifyOthers(index, 'above');

        if (preserveOrder && check && direction === 'up')
            notifyOthers(index, 'below');

        if (callback.stepEnter && typeof callback.stepEnter === 'function' && !exclude[index]) {
            callback.stepEnter(resp, stepStates);
            if (debugMode)
                notifyStep({
                    id: id,
                    index: index,
                    state: 'enter'
                });
            if (triggerOnce)
                exclude[index] = true;
        }

        if (progressMode) {
            if (direction === 'down')
                notifyStepProgress(element, 0);
            else
                notifyStepProgress(element, 1);
        }
    }

    function notifyStepExit(element, direction) {
        var index = getIndex(element);
        var resp = {
            element: element,
            index: index,
            direction: direction
        };

        // store most recent trigger
        stepStates[index].direction = direction;
        stepStates[index].state = 'exit';

        if (progressMode) {
            if (direction === 'down')
                notifyStepProgress(element, 1);
            else
                notifyStepProgress(element, 0);
        }

        if (callback.stepExit && typeof callback.stepExit === 'function') {
            callback.stepExit(resp, stepStates);
            if (debugMode)
                notifyStep({
                    id: id,
                    index: index,
                    state: 'exit'
                });
        }
    }

    function notifyStepProgress(element, progress) {
        var index = getIndex(element);
        var resp = {
            element: element,
            index: index,
            progress: progress
        };
        if (callback.stepProgress && typeof callback.stepProgress === 'function')
            callback.stepProgress(resp);
    }

    function notifyContainerEnter() {
        var resp = {
            direction: direction
        };
        containerState.direction = direction;
        containerState.state = 'enter';
        if (callback.containerEnter && typeof callback.containerEnter === 'function')
            callback.containerEnter(resp);
    }

    function notifyContainerExit() {
        var resp = {
            direction: direction
        };
        containerState.direction = direction;
        containerState.state = 'exit';
        if (callback.containerExit && typeof callback.containerExit === 'function')
            callback.containerExit(resp);
    }

    // OBSERVER - INTERSECT HANDLING

    // if TOP edge of step crosses threshold,
    // bottom must be > 0 which means it is on "screen" (shifted by offset)
    function intersectStepAbove(entries) {
        updateDirection();
        entries.forEach(function(entry) {
            var isIntersecting = entry.isIntersecting
              , boundingClientRect = entry.boundingClientRect
              , target = entry.target;

            // bottom is how far bottom edge of el is from top of viewport

            var bottom = boundingClientRect.bottom
              , height = boundingClientRect.height;

            var bottomAdjusted = bottom - offsetMargin;
            var index = getIndex(target);
            var ss = stepStates[index];

            if (bottomAdjusted >= -ZERO_MOE) {
                if (isIntersecting && direction === 'down' && ss.state !== 'enter')
                    notifyStepEnter(target, direction);
                else if (!isIntersecting && direction === 'up' && ss.state === 'enter')
                    notifyStepExit(target, direction);
                else if (!isIntersecting && bottomAdjusted >= height && direction === 'down' && ss.state === 'enter') {
                    notifyStepExit(target, direction);
                }
            }
        });
    }

    function intersectStepBelow(entries) {
        updateDirection();
        entries.forEach(function(entry) {
            var isIntersecting = entry.isIntersecting
              , boundingClientRect = entry.boundingClientRect
              , target = entry.target;
            var bottom = boundingClientRect.bottom
              , height = boundingClientRect.height;

            var bottomAdjusted = bottom - offsetMargin;
            var index = getIndex(target);
            var ss = stepStates[index];

            if (bottomAdjusted >= -ZERO_MOE && bottomAdjusted < height && isIntersecting && direction === 'up' && ss.state !== 'enter') {
                notifyStepEnter(target, direction);
            } else if (bottomAdjusted <= ZERO_MOE && !isIntersecting && direction === 'down' && ss.state === 'enter') {
                notifyStepExit(target, direction);
            }
        });
    }

    /*
  if there is a scroll event where a step never intersects (therefore
  skipping an enter/exit trigger), use this fallback to detect if it is
  in view
  */
    function intersectViewportAbove(entries) {
        updateDirection();
        entries.forEach(function(entry) {
            var isIntersecting = entry.isIntersecting
              , target = entry.target;

            var index = getIndex(target);
            var ss = stepStates[index];
            if (isIntersecting && direction === 'down' && ss.state !== 'enter' && ss.direction !== 'down') {
                notifyStepEnter(target, 'down');
                notifyStepExit(target, 'down');
            }
        });
    }

    function intersectViewportBelow(entries) {
        updateDirection();
        entries.forEach(function(entry) {
            var isIntersecting = entry.isIntersecting
              , target = entry.target;

            var index = getIndex(target);
            var ss = stepStates[index];
            if (isIntersecting && direction === 'up' && ss.state !== 'enter' && ss.direction !== 'up') {
                notifyStepEnter(target, 'up');
                notifyStepExit(target, 'up');
            }
        });
    }

    function intersectStepProgress(entries) {
        updateDirection();
        entries.forEach(function(_ref) {
            var isIntersecting = _ref.isIntersecting
              , intersectionRatio = _ref.intersectionRatio
              , boundingClientRect = _ref.boundingClientRect
              , target = _ref.target;
            var bottom = boundingClientRect.bottom;

            var bottomAdjusted = bottom - offsetMargin;

            if (isIntersecting && bottomAdjusted >= -ZERO_MOE) {
                notifyStepProgress(target, +intersectionRatio.toFixed(3));
            }
        });
    }

    function intersectTop(entries) {
        updateDirection();
        var _entries$ = entries[0]
          , isIntersecting = _entries$.isIntersecting
          , boundingClientRect = _entries$.boundingClientRect;
        var top = boundingClientRect.top
          , bottom = boundingClientRect.bottom;

        if (bottom > -ZERO_MOE) {
            if (isIntersecting)
                notifyContainerEnter(direction);
            else if (containerState.state === 'enter')
                notifyContainerExit(direction);
        }
    }

    function intersectBottom(entries) {
        updateDirection();
        var _entries$2 = entries[0]
          , isIntersecting = _entries$2.isIntersecting
          , boundingClientRect = _entries$2.boundingClientRect;
        var top = boundingClientRect.top;

        if (top < ZERO_MOE) {
            if (isIntersecting)
                notifyContainerEnter(direction);
            else if (containerState.state === 'enter')
                notifyContainerExit(direction);
        }
    }

    // OBSERVER - CREATION

    function updateTopIO() {
        if (io.top)
            io.top.unobserve(containerEl);

        var options = {
            root: null,
            rootMargin: vh + 'px 0px -' + vh + 'px 0px',
            threshold: 0
        };

        io.top = new IntersectionObserver(intersectTop,options);
        io.top.observe(containerEl);
    }

    function updateBottomIO() {
        if (io.bottom)
            io.bottom.unobserve(containerEl);
        var options = {
            root: null,
            rootMargin: '-' + bboxGraphic.height + 'px 0px ' + bboxGraphic.height + 'px 0px',
            threshold: 0
        };

        io.bottom = new IntersectionObserver(intersectBottom,options);
        io.bottom.observe(containerEl);
    }

    // top edge
    function updateStepAboveIO() {
        if (io.stepAbove)
            io.stepAbove.forEach(function(d) {
                return d.disconnect();
            });

        io.stepAbove = stepEl.map(function(el, i) {
            var marginTop = stepOffsetHeight[i];
            var marginBottom = -vh + offsetMargin;
            var rootMargin = marginTop + 'px 0px ' + marginBottom + 'px 0px';

            var options = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0
            };

            var obs = new IntersectionObserver(intersectStepAbove,options);
            obs.observe(el);
            return obs;
        });
    }

    // bottom edge
    function updateStepBelowIO() {
        if (io.stepBelow)
            io.stepBelow.forEach(function(d) {
                return d.disconnect();
            });

        io.stepBelow = stepEl.map(function(el, i) {
            var marginTop = -offsetMargin;
            var marginBottom = ph - vh + stepOffsetHeight[i] + offsetMargin;
            var rootMargin = marginTop + 'px 0px ' + marginBottom + 'px 0px';

            var options = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0
            };

            var obs = new IntersectionObserver(intersectStepBelow,options);
            obs.observe(el);
            return obs;
        });
    }

    // jump into viewport
    function updateViewportAboveIO() {
        if (io.viewportAbove)
            io.viewportAbove.forEach(function(d) {
                return d.disconnect();
            });
        io.viewportAbove = stepEl.map(function(el, i) {
            var marginTop = stepOffsetTop[i];
            var marginBottom = -(vh - offsetMargin + stepOffsetHeight[i]);
            var rootMargin = marginTop + 'px 0px ' + marginBottom + 'px 0px';
            var options = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0
            };

            var obs = new IntersectionObserver(intersectViewportAbove,options);
            obs.observe(el);
            return obs;
        });
    }

    function updateViewportBelowIO() {
        if (io.viewportBelow)
            io.viewportBelow.forEach(function(d) {
                return d.disconnect();
            });
        io.viewportBelow = stepEl.map(function(el, i) {
            var marginTop = -(offsetMargin + stepOffsetHeight[i]);
            var marginBottom = ph - stepOffsetTop[i] - stepOffsetHeight[i] - offsetMargin;
            var rootMargin = marginTop + 'px 0px ' + marginBottom + 'px 0px';
            var options = {
                root: null,
                rootMargin: rootMargin,
                threshold: 0
            };

            var obs = new IntersectionObserver(intersectViewportBelow,options);
            obs.observe(el);
            return obs;
        });
    }

    // progress progress tracker
    function updateStepProgressIO() {
        if (io.stepProgress)
            io.stepProgress.forEach(function(d) {
                return d.disconnect();
            });

        io.stepProgress = stepEl.map(function(el, i) {
            var marginTop = stepOffsetHeight[i] - offsetMargin;
            var marginBottom = -vh + offsetMargin;
            var rootMargin = marginTop + 'px 0px ' + marginBottom + 'px 0px';

            var threshold = createThreshold(stepOffsetHeight[i]);
            var options = {
                root: null,
                rootMargin: rootMargin,
                threshold: threshold
            };

            var obs = new IntersectionObserver(intersectStepProgress,options);
            obs.observe(el);
            return obs;
        });
    }

    function updateIO() {
        updateViewportAboveIO();
        updateViewportBelowIO();
        updateStepAboveIO();
        updateStepBelowIO();

        if (progressMode)
            updateStepProgressIO();

        if (containerEl && graphicEl) {
            updateTopIO();
            updateBottomIO();
        }
    }

    // SETUP FUNCTIONS

    function indexSteps() {
        stepEl.forEach(function(el, i) {
            return el.setAttribute('data-scrollama-index', i);
        });
    }

    function setupStates() {
        stepStates = stepEl.map(function() {
            return {
                direction: null,
                state: null
            };
        });

        containerState = {
            direction: null,
            state: null
        };
    }

    function addDebug() {
        if (debugMode)
            setup({
                id: id,
                stepEl: stepEl,
                offsetVal: offsetVal
            });
    }

    var S = {};

    S.setup = function(_ref2) {
        var container = _ref2.container
          , graphic = _ref2.graphic
          , step = _ref2.step
          , _ref2$offset = _ref2.offset
          , offset = _ref2$offset === undefined ? 0.5 : _ref2$offset
          , _ref2$progress = _ref2.progress
          , progress = _ref2$progress === undefined ? false : _ref2$progress
          , _ref2$threshold = _ref2.threshold
          , threshold = _ref2$threshold === undefined ? 4 : _ref2$threshold
          , _ref2$debug = _ref2.debug
          , debug = _ref2$debug === undefined ? false : _ref2$debug
          , _ref2$order = _ref2.order
          , order = _ref2$order === undefined ? true : _ref2$order
          , _ref2$once = _ref2.once
          , once = _ref2$once === undefined ? false : _ref2$once;

        id = generateId();
        // elements
        stepEl = selectAll(step);
        containerEl = container ? select(container) : null;
        graphicEl = graphic ? select(graphic) : null;

        // error if no step selected
        if (!stepEl.length) {
            console.error('scrollama error: no step elements');
            return S;
        }

        // options
        debugMode = debug;
        progressMode = progress;
        preserveOrder = order;
        triggerOnce = once;

        S.offsetTrigger(offset);
        progressThreshold = Math.max(1, +threshold);

        isReady = true;

        // customize
        addDebug();
        indexSteps();
        setupStates();
        handleResize();
        handleEnable(true);
        return S;
    }
    ;

    S.resize = function() {
        handleResize();
        return S;
    }
    ;

    S.enable = function() {
        handleEnable(true);
        return S;
    }
    ;

    S.disable = function() {
        handleEnable(false);
        return S;
    }
    ;

    S.destroy = function() {
        handleEnable(false);
        Object.keys(callback).forEach(function(c) {
            return callback[c] = null;
        });
        Object.keys(io).forEach(function(i) {
            return io[i] = null;
        });
    }
    ;

    S.offsetTrigger = function(x) {
        if (x && !isNaN(x)) {
            offsetVal = Math.min(Math.max(0, x), 1);
            return S;
        }
        return offsetVal;
    }
    ;

    S.onStepEnter = function(cb) {
        callback.stepEnter = cb;
        return S;
    }
    ;

    S.onStepExit = function(cb) {
        callback.stepExit = cb;
        return S;
    }
    ;

    S.onStepProgress = function(cb) {
        callback.stepProgress = cb;
        return S;
    }
    ;

    S.onContainerEnter = function(cb) {
        callback.containerEnter = cb;
        return S;
    }
    ;

    S.onContainerExit = function(cb) {
        callback.containerExit = cb;
        return S;
    }
    ;

    return S;
}

var slideContainerClass = '.js-slide-container';
var guideWrapperClass = '.js-guide-wrap';
var slideImageClass = '.js-guide-slide-image';
var slideTriggerClass = '.js-guide-slide-trigger';
var coverSlideClass = '.js-cover-slide';
var coverCaptionClass = '.js-cover-caption';
var slideOffClass = 'guide-slide--off';
// const slideStates = [
//   'slide-exit-up',
//   'slide-exit-down',
//   'slide-in-down',
//   'slide-in-up',
// ];

var Guide = function() {
    function Guide(el) {
        classCallCheck(this, Guide);

        this.el = el;
        this.activeIndex = 0;
        this.slideContainer = this.el.querySelector(slideContainerClass);
        this.coverCaption = this.el.querySelector(coverCaptionClass);
        this.handleGuideEnter = this.handleGuideEnter.bind(this);
        this.handleGuideExit = this.handleGuideExit.bind(this);
        this.handleSectionEnter = this.handleSectionEnter.bind(this);
        this.init();
    }

    createClass(Guide, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var slideOriginals = Array.from(this.el.querySelectorAll(slideImageClass));
            this.slides = slideOriginals.map(function(el) {
                return el.cloneNode(true);
            });
            this.slides.forEach(function(el) {
                _this.slideContainer.appendChild(el);
            });

            slideOriginals.forEach(function(slide) {
                var slideVid = slide.querySelector('.c-ambient-video__video');
                if (slideVid) {
                    slide.querySelector('.c-ambient-video__toggle').remove();
                    slideVid.remove();
                }
            });
            this.slides.unshift(this.el.querySelector(coverSlideClass));
            var wrapScrollWatcher = scrollama();
            wrapScrollWatcher.setup({
                step: guideWrapperClass,
                offset: 0
            }).onStepEnter(this.handleGuideEnter).onStepExit(this.handleGuideExit);

            var sectionScrollWatcher = scrollama();
            sectionScrollWatcher.setup({
                step: slideTriggerClass,
                offset: 0.4
            }).onStepEnter(this.handleSectionEnter);
        }
    }, {
        key: 'handleSectionEnter',
        value: function handleSectionEnter(data) {
            this.handleSlideTransition(data);
        }
    }, {
        key: 'handleGuideEnter',
        value: function handleGuideEnter() {
            this.el.classList.add('guide--active');
        }
    }, {
        key: 'handleGuideExit',
        value: function handleGuideExit(data) {
            if (data.direction === 'up') {
                this.el.classList.remove('guide--active');
            }
        }// clearSlideClasses(i) {
        //   const slide = this.slides[i];
        //   // enter next slide
        //   slide.classList.remove('slide-exit-up');
        //   this.slides[data.index].classList.remove('slide-exit-down');
        //   this.slides[data.index].classList.remove('slide-in-down');
        // }

    }, {
        key: 'handleSlideTransition',
        value: function handleSlideTransition(data) {
            if (data.index === this.activeIndex) {
                return;
            }
            this.setActiveSlide(data.index);

            // this.slides[this.activeIndex].classList.remove(...slideStates);
            this.activeIndex = data.index;

            // Was doing different animation based on scroll direction, but don't need this for now.
            // if (data.direction === 'down') {
            //   // exit current slide
            //   this.slides[this.activeIndex].classList.remove(...slideStates);
            //   this.slides[this.activeIndex].classList.add('slide-exit-up');
            //
            //   // enter next slide
            //   this.slides[data.index].classList.remove(...slideStates);
            //   this.slides[data.index].classList.add('slide-in-up');
            // } else {
            //   // exit current slide
            //   this.slides[this.activeIndex].classList.remove(...slideStates);
            //   this.slides[this.activeIndex].classList.add('slide-exit-down');
            //
            //   // enter next slide
            //   this.slides[data.index].classList.remove(...slideStates);
            //   this.slides[data.index].classList.add('slide-in-down');
            // }
        }
    }, {
        key: 'setActiveSlide',
        value: function setActiveSlide(index) {
            var _this2 = this;

            this.slides.forEach(function(slide, i) {
                if (i === index) {
                    slide.classList.remove(slideOffClass);
                    // handle cover
                    if (i === 0 && _this2.coverCaption) {
                        _this2.coverCaption.classList.remove(slideOffClass);
                    }
                } else {
                    slide.classList.add(slideOffClass);
                    // handle cover
                    if (i === 0 && _this2.coverCaption) {
                        _this2.coverCaption.classList.add(slideOffClass);
                    }
                }
            });
        }
    }]);
    return Guide;
}();

function guideInit() {
    var guideEls = document.querySelectorAll(guideWrapperClass);
    Array.from(guideEls).forEach(function(el) {
        new Guide(el);
    });
}

// import jump from 'jump.js';

var accordionToggleClass = '_accordion-toggle';
var accordionLabelToggleClass = '_accordion-label-toggle';
var accordionOpenClass = '_accordion-panel--open';
var accordionAnimateClass = '_accordion-panel--is-ready';
var accordionDefaultDelay = 500;

function accordionOpen(btn, panel) {
    btn.classList.add(accordionToggleClass + '--open');
    panel.classList.add(accordionOpenClass);
    setTimeout(function() {
        panel.classList.add(accordionAnimateClass);
    }, 10);

    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');

    if (btn.classList.contains('m-subnav__toggle')) {
        document.body.classList.add("m-subnav--open");
    }
}

function accordionClose(btn, panel) {
    btn.classList.remove(accordionToggleClass + '--open');
    panel.classList.remove(accordionAnimateClass);

    if (btn !== undefined && btn.getAttribute('data-closedelay')) {
        setTimeout(function() {
            panel.classList.remove(accordionOpenClass);
        }, btn.getAttribute('data-closedelay'));
    } else {
        setTimeout(function() {
            panel.classList.remove(accordionOpenClass);
        }, accordionDefaultDelay);
    }

    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');

    if (btn.classList.contains('m-subnav__toggle')) {
        document.body.classList.remove("m-subnav--open");
    }
}

function accordionInit() {

    var accordionButtons = document.getElementsByClassName(accordionToggleClass);

    [].forEach.call(accordionButtons, function(btn) {

        btn.addEventListener('click', function() {
            var target = btn.getAttribute('data-targetid');
            var panel = target === 'next' ? btn.nextElementSibling : document.getElementById(target);
            var isOpen = panel.classList.contains('_accordion-panel--open');

            if (isOpen) {
                accordionClose(btn, panel);
            } else {
                accordionOpen(btn, panel);
            }
        });
    });

    var accordionLabelButtons = document.getElementsByClassName(accordionLabelToggleClass);

    [].forEach.call(accordionLabelButtons, function(label) {

        label.addEventListener('click', function(e) {
            e.preventDefault();
            var btn = label.nextElementSibling;
            if (btn.classList.contains(accordionToggleClass)) {
                var event = new Event('click');
                btn.dispatchEvent(event);
            }
        });
    });

    var subNav = document.querySelector('.m-subnav');

    if (subNav) {

        var subNavPanel = subNav.querySelector('.m-subnav__content');
        var subNavButton = document.querySelector('.m-subnav__toggle');
        var subNavWrapper = document.getElementById('subnav-toggle-wrapper');
        // var subNavButton = subNav.querySelector('.m-subnav__toggle');
        var skipLinks = subNav.querySelectorAll('.c-skip-links--submenu');

        [].forEach.call(skipLinks, function(link) {
            link.addEventListener('click', function() {
                accordionClose(subNavButton, subNavPanel);
            });
        });

        var focusable = subNavPanel.querySelectorAll('button, [href]');
        var lastFocusable = focusable[focusable.length - 1];
        lastFocusable.addEventListener('keydown', function(e) {
            console.log(e);
            if (!e.shiftKey && e.keyCode === 9) {
                accordionClose(subNavButton, subNavPanel);
            }
        });

        subNavButton.addEventListener('focusin', function() {
            subNavWrapper.classList.add('subnav-toggle-focused');
        });

        subNavButton.addEventListener('focusout', function() {
            subNavWrapper.classList.remove('subnav-toggle-focused');
        });

        subNavButton.addEventListener('keydown', function(e) {
            if (e.shiftKey && e.keyCode === 9) {
                accordionClose(subNavButton, subNavPanel);
            }
        });
    }

    // Sidebar List Accordion
    var sidebarListToggle = document.getElementById('sidebar-list-toggle');

    if (sidebarListToggle) {
        var sidebarNav = document.getElementById('sidebar-list-nav');

        sidebarListToggle.addEventListener('click', function() {
            var sidebarOpen = sidebarNav.classList.contains('is-open');

            if (sidebarOpen) {
                sidebarNav.classList.remove('is-open');
                sidebarListToggle.classList.remove('is-open');
                sidebarListToggle.setAttribute('aria-expanded', 'false');
                sidebarNav.setAttribute('aria-hidden', 'true');
            } else {
                sidebarNav.classList.add('is-open');
                sidebarListToggle.classList.add('is-open');
                sidebarListToggle.setAttribute('aria-expanded', 'true');
                sidebarNav.setAttribute('aria-hidden', 'false');
            }
        });

        var toggleDisplay = sidebarListToggle.currentStyle ? sidebarListToggle.currentStyle.display : getComputedStyle(sidebarListToggle, null).display;

        if (toggleDisplay === 'block') {
            sidebarNav.setAttribute('aria-hidden', 'true');
        } else if (sidebarListToggle.getAttribute('aria-expanded') === 'false') {
            sidebarNav.setAttribute('aria-hidden', 'false');
        }

        window.addEventListener("resize", function() {

            if (toggleDisplay === 'block') {
                sidebarNav.setAttribute('aria-hidden', 'true');
            } else if (sidebarListToggle.getAttribute('aria-expanded') === 'false') {
                sidebarNav.setAttribute('aria-hidden', 'false');
            }
        });
    }
}

var lineAnimateClass = 'u-hi-lite--is-animating';
var lineClass = 'u-hi-lite';
var animIn = 'is-animating-in';
var slideTime = 5000;
var slideAnimOut = slideTime - 500;
var videoPlayWidth = 970;
var indexWas = 0;
var sliderPaused = false;
var viewportWidth = void 0;

/**
 * Control single slide animation.
 */
function vhSlideSingle(slide) {
    var lines = slide.getElementsByClassName(lineClass);

    slide.classList.add(animIn);

    Array.prototype.forEach.call(lines, function(line) {
        line.classList.add(lineAnimateClass);
    });
}

/**
 * Control multi-slide animations.
 *
 */
function vhSlideAnimation(slide, callback) {

    var lines = slide.getElementsByClassName(lineClass);

    slide.classList.add(animIn);

    Array.prototype.forEach.call(lines, function(line) {
        line.classList.add(lineAnimateClass);
    });

    setTimeout(function() {
        slide.classList.remove(animIn);
    }, slideAnimOut);

    if (callback) {
        callback();
    }
}

function initSlider() {
    var slideWrapper = document.getElementById('vid-slider');
    var sliderSlides = document.getElementsByClassName('video-slider__slide');
    var slides = [].slice.call(sliderSlides);
    var timerInner = document.getElementById('slide-timer-inner');

    // Initialize Flickity
    var slider = new Flickity('.video-slider__slides',{

        // Options
        autoPlay: slideTime,
        pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        accessibility: false,
        pageDots: false,
        wrapAround: true,
        draggable: false,
        on: {
            ready: function ready() {
                // Initialize first slide stuff
                slideWrapper.classList.add('is-ready');
                var flickityWrapper = slideWrapper.querySelector('.flickity-slider');
                flickityWrapper.setAttribute('role', 'list');

                // Init timer
                timerInner.classList.add('video-slider__timer-inner--is-animated');

                // Init Video Play
                var video = slides[0].getElementsByTagName('video');
                if (video.length && viewportWidth > videoPlayWidth) {
                    video[0].play();
                }

                // Init line animation
                if (slides.length == 1) {
                    vhSlideSingle(slides[0]);
                } else {
                    vhSlideAnimation(slides[0]);
                }
            }
        }
    });

    // On slide change
    slider.on('change', function(index) {

        // Reinit the timer animation
        timerInner.classList.remove('video-slider__timer-inner--is-animated');
        void timerInner.offsetWidth;

        // If slider is paused
        if (sliderPaused) {

            // Just animate hi-lite
            var newLines = slides[index].getElementsByClassName(lineClass);
            Array.prototype.forEach.call(newLines, function(line) {
                line.classList.add(lineAnimateClass);
            });

            // Make sure all videos are paused
            var video = slides[indexWas].getElementsByTagName('video');
            var newVideo = slides[index].getElementsByTagName('video');

            if (newVideo.length) {
                newVideo[0].pause();
            }

            if (video.length) {
                video[0].pause();
            }
        } else {

            timerInner.classList.add('video-slider__timer-inner--is-animated');
            slideWrapper.classList.remove('is-paused');

            // Update lines animation
            var lines = slides[indexWas].getElementsByClassName(lineClass);
            Array.prototype.forEach.call(lines, function(line) {
                line.classList.remove(lineAnimateClass);
                void line.offsetWidth;
            });

            var newVideo = slides[index].getElementsByTagName('video');

            if (newVideo.length && !sliderPaused && viewportWidth > videoPlayWidth) {
                newVideo[0].play();
            }

            vhSlideAnimation(slides[index], function() {
                var video = slides[indexWas].getElementsByTagName('video');

                if (video.length) {
                    setTimeout(function() {
                        video[0].pause();
                        video[0].currentTime = 0;
                    }, 600);
                }
            });

            // update old index value to current
            indexWas = index;
        }
    });

    // BUTTONS
    var state = document.getElementById('vid-slider-state');
    var prev = document.getElementById('vid-slider-prev');
    var next = document.getElementById('vid-slider-next');

    // Click Pause
    state.addEventListener('click', function(event) {
        var video = slides[indexWas].getElementsByTagName('video');

        if (sliderPaused) {

            // PLAY THE STUFF
            if (video.length && viewportWidth > videoPlayWidth) {
                video[0].play();
            }
            slider.playPlayer();
            timerInner.classList.add('video-slider__timer-inner--is-animated');
            state.setAttribute('aria-label', 'Pause');
            slideWrapper.classList.remove('is-paused');
            sliderPaused = false;
        } else {
            // PAUSE THE STUFF
            slider.stopPlayer();
            if (video.length) {
                video[0].pause();
            }
            timerInner.classList.remove('video-slider__timer-inner--is-animated');
            void timerInner.offsetWidth;
            slideWrapper.classList.add('is-paused');
            state.setAttribute('aria-label', 'Play');
            sliderPaused = true;
        }
    });

    // Click Previous
    prev.addEventListener('click', function(event) {
        slider.previous();
    });

    // Click Next
    next.addEventListener('click', function(event) {
        slider.next();
    });
}

/**
 * Init Video Header Slider
 *
 */
function homeVideoHeader() {

    if (document.querySelector('#vid-slider') == null) {
        return false;
    }

    var slideWrapper = document.getElementById('vid-slider');
    var allVids = slideWrapper.querySelectorAll('video');

    if (allVids.length >= 0) {
        [].forEach.call(allVids, function(vid, idx) {
            if (idx !== 0) {
                vid.removeAttribute('autoplay');
            }
        });
    }

    var firstVid = slideWrapper.querySelector('video');
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (firstVid == null || viewportWidth < videoPlayWidth) {
        initSlider();
    } else {
        firstVid.oncanplay = initSlider();
    }

    window.addEventListener('resize', function() {
        viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    });
}

function socialGridInit() {

    if (document.querySelector('.social-grid__slider') === null) {
        return false;
    }

    var prevBtn = document.getElementById('social-grid-prev');

    // Initialize Flickity
    var slider = new Flickity('.social-grid__slider',{
        groupCells: '100%',
        contain: true,
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true,
        accessibility: false,
        on: {
            ready: function ready() {
                // Initialize first slide stuff
                var flickityWrapper = document.querySelector('.social-grid__slider .flickity-slider');
                flickityWrapper.setAttribute('role', 'list');
            }
        }
    });

    // On slide change
    slider.on('change', function(index) {
        if (index > 0) {
            prevBtn.classList.add('is-active');
        } else {
            prevBtn.classList.remove('is-active');
        }
    });

    // Click Previous
    prevBtn.addEventListener('click', function(event) {
        slider.previous();
    });

    // Click Next
    document.getElementById('social-grid-next').addEventListener('click', function(event) {
        slider.next();
    });
}

function imageIn(link) {
    var active = document.querySelector('.m-stories-block__featured-item.is-active');
    var parent = link.parentNode.parentNode;
    active.classList.remove('is-active');
    parent.classList.add('is-active');
}

function sizeForBlockImages(wrapper) {

    if (getComputedStyle(wrapper, null).display !== 'block') {
        wrapper.style.height = null;
        return;
    }

    var parent = wrapper.parentNode;
    var imgs = parent.querySelectorAll('img');
    var setHeight = 0;

    [].forEach.call(imgs, function(image) {
        setHeight = setHeight > image.offsetHeight ? setHeight : image.offsetHeight;
    });

    wrapper.style.height = setHeight + 48 + 'px';
}

function sizeMediaBackgrounds(media) {
    var img = media.querySelector('img');
    var bkg = media.querySelector('.c-teaser-story__image-bkg');
    bkg.style.width = img.offsetWidth + 'px';
}

function storyBlockInit() {
    var links = document.querySelectorAll('.m-stories-block__featured-item a');

    if (links === null || links.length === 0) {
        return false;
    }

    [].forEach.call(links, function(link) {

        link.addEventListener('focus', function() {
            imageIn(link);
        });

        link.addEventListener('mouseenter', function() {
            imageIn(link);
        });
    });

    // Initialize Flickity
    var slider = new Flickity('.m-stories-block__featured',{
        contain: true,
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: false,
        watchCSS: true
    });

    var imageWrappers = document.querySelectorAll('.m-stories-block__images');

    [].forEach.call(imageWrappers, function(wrapper) {

        sizeForBlockImages(wrapper);

        window.addEventListener('resize', function() {
            sizeForBlockImages(wrapper);
        });
    });

    var blockFeaturedRows = document.querySelectorAll('.m-stories-block__featured-row .c-teaser-story__image-inner');

    [].forEach.call(blockFeaturedRows, function(media) {
        sizeMediaBackgrounds(media);
        window.addEventListener('resize', function() {
            sizeMediaBackgrounds(media);
        });
    });
}

var inputSelectString = '.input';

var MARKER = '_*_';
var dollarLabel = '$';

// starts with polyfill, can move this somewhere else
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        value: function value(search, pos) {
            return this.substring(!pos || pos < 0 ? 0 : +pos, pos + search.length) === search;
        }
    });
}

function isMarker(str, strStartIndex) {
    for (var i = 0; i < MARKER.length; i++) {
        if (strStartIndex - i < 0 || str.charAt(strStartIndex - i) !== MARKER.charAt(MARKER.length - (i + 1))) {
            return false;
        }
    }
    return true;
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function isNumChar(c) {
    return '0123456789'.indexOf(c) !== -1;
}

function deleteInString(str, startDelete, endDelete) {
    return str.slice(0, startDelete) + str.slice(endDelete);
}

var FancyNumberVal = function() {
    function FancyNumberVal(val) {
        var isDollars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        classCallCheck(this, FancyNumberVal);

        this.val = val.replace(/\D/g, '');
        this.isDollars = isDollars;
    }

    createClass(FancyNumberVal, [{
        key: 'formatVal',
        value: function formatVal(val) {
            if (!val || val === dollarLabel) {
                return '';
            }
            // remove non-digits
            var stripped = val.replace(/\D/g, '');

            if (stripped.length === 0) {
                return '';
            }
            var num = parseInt(stripped, 10);
            console.log(num);
            var formatted = num !== '0' ? num.toLocaleString() : '0';

            if (this.isDollars) {
                formatted = dollarLabel + formatted;
            }
            return formatted;
        }
    }, {
        key: 'formatted',
        get: function get$$1() {
            return this.formatVal(this.val);
        }
    }, {
        key: 'stripped',
        get: function get$$1() {
            return this.val;
        }
    }, {
        key: 'formattedLength',
        get: function get$$1() {
            return this.formatVal(this.val).length;
        }
    }, {
        key: 'strippedLength',
        get: function get$$1() {
            return this.val.length;
        }
    }]);
    return FancyNumberVal;
}();

var FancyTextInput = function() {
    function FancyTextInput(el) {
        var _this = this;

        classCallCheck(this, FancyTextInput);

        this.wrapperEl = el;
        this.inputEl = el.querySelector('input');
        // if no input element, looks for select.
        if (!this.inputEl) {
            this.inputEl = el.querySelector('select');
            if (this.inputEl) {
                this.isSelect = true;
            }
        }
        // if no input or select element, looks for textarea.
        if (!this.inputEl) {
            this.inputEl = el.querySelector('textarea');
            if (this.inputEl) {
                this.isArea = true;
            }
        }

        if (!this.inputEl) {
            console.warn('No Form Element found in Fancy Input');
        }

        // poll for autofill
        this.handleAutofill();
        setTimeout(function() {
            _this.handleAutofill();
        }, 500);
        setTimeout(function() {
            _this.handleAutofill();
        }, 1000);
        setTimeout(function() {
            _this.handleAutofill();
        }, 1500);

        setTimeout(function() {
            if (_this.inputEl == document.activeElement) {
                _this.handleFocus();
            }
        }, 500);

        this.labelEl = el.querySelector('label');
        this.prevVal = '';

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        this.addListeners();
    }

    createClass(FancyTextInput, [{
        key: 'addListeners',
        value: function addListeners() {
            this.inputEl.addEventListener('focus', this.handleFocus);
            this.inputEl.addEventListener('blur', this.handleBlur);
            this.inputEl.addEventListener('change', this.handleChange);
            this.inputEl.addEventListener('click', this.handleClick);
            if (this.wrapperEl.classList.contains('input--fancy-numbers')) {
                this.inputEl.addEventListener('keydown', this.handleKeydown);
                if (this.wrapperEl.classList.contains('input--dollars')) {
                    this.dollarsEnforced = true;
                }
                this.inputEl.addEventListener('input', this.handleInput);
            }

            if (this.isArea) {
                this.inputEl.addEventListener('input', this.setHeight);
            }
        }
    }, {
        key: 'handleAutofill',
        value: function handleAutofill() {

            var webkitAutofill = [];
            try {
                // this errors in firefox, but firefox finds value in inputEl.value
                webkitAutofill = Array.from(document.querySelectorAll('input:-webkit-autofill'));
            } catch (err) {}

            if (this.inputEl.value !== '' || webkitAutofill.indexOf(this.inputEl) !== -1) {
                this.wrapperEl.classList.add('input--has-value');
            }
        }// input processing will not delete or backspace towards a comma, so need to
        // handle that in keydown manually

    }, {
        key: 'handleKeydown',
        value: function handleKeydown(e) {
            // if not delete or backspace, don't need to handle anything
            if (!(e.keyCode === 8 || e.keyCode === 46)) {
                return;
            }

            var selectionStartIndex = this.inputEl.selectionStart;
            var selectionEndIndex = this.inputEl.selectionEnd;

            if (selectionStartIndex !== selectionEndIndex) {
                //there's a selection, so don't have to worry about single comma delete
                return;
            }

            if (e.keyCode === 8) {
                // BACKSPACE key
                // if backspace, if character at selection start index is a comma,
                // delete that and the previous character.
                // console.log('handle backspace');
                // console.log(selectionStartIndex, this.inputEl.value.charAt(selectionStartIndex));

                if (this.inputEl.value.charAt(selectionStartIndex - 1) === ',') {
                    // console.log('is comma + backspace');
                    var modifiedValue = deleteInString(this.inputEl.value, selectionStartIndex - 2, selectionStartIndex);
                    // console.log(modifiedValue);
                    // console.log(modifiedValue, modifiedValue.length, this.inputEl.value, this.inputEl.value.length);
                    this.inputEl.value = modifiedValue;
                    e.preventDefault();
                    console.log(selectionStartIndex);
                    this.setCursorPosition(selectionStartIndex - 2);
                    this.handleInput();
                }
            } else if (e.keyCode === 46) {
                // DELETE key
                // if delete, if character at +1 of selection start index is a comma,
                // delete that and the next character
                // console.log('handle delete key');
                if (this.inputEl.value.charAt(selectionStartIndex) === ',') {
                    // console.log('is comma + delete');
                    var _modifiedValue = deleteInString(this.inputEl.value, selectionStartIndex, selectionStartIndex + 2);
                    // console.log(modifiedValue);
                    this.inputEl.value = _modifiedValue;
                    e.preventDefault();
                    this.setCursorPosition(selectionStartIndex);
                    this.handleInput();
                    // console.log(modifiedValue, modifiedValue.length, this.inputEl.value, this.inputEl.value.length);
                }
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            if (this.isSelect) {
                if (this.inputEl.value !== '') {
                    this.wrapperEl.classList.add('input--has-value');
                } else {
                    this.wrapperEl.classList.remove('input--has-value');
                }
            }
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            if (this.dollarsEnforced && this.inputEl.value === '') {
                this.inputEl.value = '$';
                this.setCursorPosition(1);
            } else if (this.dollarsEnforced && this.inputEl.value === '$') {
                this.setCursorPosition(1);
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.wrapperEl.classList.add('input--has-focus');
            if (this.dollarsEnforced && this.inputEl.value === '') {
                this.inputEl.value = '$';
                this.setCursorPosition(1);
            } else if (this.dollarsEnforced && this.inputEl.value === '$') {
                this.setCursorPosition(1);
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            if (this.dollarsEnforced && this.inputEl.value === '$') {
                this.inputEl.value = '';
            }

            this.wrapperEl.classList.remove('input--has-focus');
            if (this.inputEl.value) {
                this.wrapperEl.classList.add('input--has-value');
            } else {
                this.wrapperEl.classList.remove('input--has-value');
            }
        }
    }, {
        key: 'setCursorPosition',
        value: function setCursorPosition(index) {
            this.inputEl.setSelectionRange(index, index);
        }
    }, {
        key: 'addMarkerAtCursorPos',
        value: function addMarkerAtCursorPos(cursorPos, val) {
            // Insert marker at index before formatting
            if (cursorPos === 0) {
                return MARKER + val;
            } else if (cursorPos === val.length) {
                return val + MARKER;
            } else {
                return insert(val, cursorPos, MARKER);
            }
        }
    }, {
        key: 'handleInput',
        value: function handleInput() {
            // Rather than handle all the crazy edge cases about figuring out how the
            // cursor position needs to be adjusted. We add a marker to the input value,
            // and then put the cursor back where the marker was after processing.

            var inputVal = this.inputEl.value;

            //if 0s are at the beginning
            var valWithMarker = void 0;
            var trimmedVal = inputVal;
            if (this.dollarsEnforced && (trimmedVal === '' || trimmedVal === '$' || trimmedVal === '$$' || trimmedVal === '$ ' || trimmedVal === ' $')) {
                this.inputEl.value = '$';
                this.setCursorPosition(1);
                return;
            }

            // remove dollar sign at beginning so we can strip leading 0s if necessary
            if (this.dollarsEnforced && trimmedVal.startsWith(dollarLabel)) {
                trimmedVal = trimmedVal.substring(dollarLabel.length);
            }

            // strip leading 0s and non-digits
            if ((trimmedVal.charAt(0) === '0' || !isNumChar(trimmedVal.charAt(0))) && trimmedVal.length > 1) {
                while ((trimmedVal.charAt(0) === '0' || !isNumChar(trimmedVal.charAt(0))) && trimmedVal.length > 1) {
                    trimmedVal = trimmedVal.substr(1);
                }
                this.setCursorPosition(this.dollarsEnforced ? 2 : 1);
                valWithMarker = this.addMarkerAtCursorPos(this.dollarsEnforced ? 2 : 1, trimmedVal);
            } else {
                valWithMarker = this.addMarkerAtCursorPos(this.inputEl.selectionStart, this.inputEl.value);
            }

            // process new string and get marker index
            var charCount = 0;
            var numCount = 0;
            var result = '';
            var markerIndexFromEnd = void 0;
            // console.log(valWithMarker);
            for (var i = valWithMarker.length - 1; i >= 0; i--) {

                var char = valWithMarker.charAt(i);
                if (isNumChar(char)) {
                    if (numCount > 0 && numCount % 3 === 0) {
                        result = ',' + result;
                        charCount++;
                    }
                    result = char + result;
                    charCount++;
                    numCount++;
                } else if (isMarker(valWithMarker, i)) {
                    markerIndexFromEnd = charCount;
                }
            }
            var cursorIndex = result.length - markerIndexFromEnd;

            if (this.dollarsEnforced) {
                result = dollarLabel + result;
                cursorIndex++;
            }

            this.inputEl.value = result;
            this.prevVal = result;
            this.setCursorPosition(cursorIndex);
        }
    }, {
        key: 'setHeight',
        value: function setHeight(e) {
            // Text area auto resizes with on input

            e.srcElement.style.height = "";
            // Reset height (for when line count decreases)
            e.srcElement.style.height = e.srcElement.scrollHeight + "px";
        }
    }]);
    return FancyTextInput;
}();

function makeFancyTextInputs(context) {
    var selectClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inputSelectString;

    return Array.from(context.querySelectorAll(selectClass)).map(function(el) {
        return new FancyTextInput(el);
    });
}

var radioSelectString = '.radio-tabs__group';

var FancyRadioTabGroup = function() {
    function FancyRadioTabGroup(el) {
        classCallCheck(this, FancyRadioTabGroup);

        this.wrapperEl = el;
        this.inputEls = Array.from(el.querySelectorAll('input'));
        this.tabEls = Array.from(el.querySelectorAll('.radio-tabs__tab'));
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.addListeners();
    }

    createClass(FancyRadioTabGroup, [{
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            this.inputEls.forEach(function(el) {
                el.addEventListener('change', _this.handleChange);
                el.addEventListener('focus', _this.handleFocus);
                el.addEventListener('blur', _this.handleBlur);
            });
            this.tabEls.forEach(function(el) {
                el.addEventListener('click', _this.handleClick);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.updateHighlight(e.target.parentNode);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            //arrowing between radio buttons fires click event, so have to check to make
            // sure this is only clicks on the parent tab
            if (e.target.classList.contains("radio-tabs__tab")) {
                e.target.querySelector('input').checked = true;
                this.updateHighlight(e.target);
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(e) {
            var tab = e.target.parentNode;
            if (tab.classList.contains("radio-tabs__tab")) {
                tab.classList.add('radio-tabs__tab--has-focus');
            } else if (tab.parentNode) {
                tab.parentNode.classList.add('radio-tabs__tab--has-focus');
            }
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(e) {
            var tab = e.target.parentNode;
            if (tab.classList.contains("radio-tabs__tab")) {
                tab.classList.remove('radio-tabs__tab--has-focus');
            } else if (tab.parentNode) {
                tab.parentNode.classList.remove('radio-tabs__tab--has-focus');
            }
        }
    }, {
        key: 'updateHighlight',
        value: function updateHighlight(el) {
            Array.from(this.wrapperEl.querySelectorAll('.radio-tabs__tab--checked')).forEach(function(el) {
                el.classList.remove('radio-tabs__tab--checked');
            });

            if (el.parentNode.classList.contains('radio-tabs__tab')) {
                el.parentNode.classList.add('radio-tabs__tab--checked');
            } else {
                el.classList.add('radio-tabs__tab--checked');
            }
        }
    }]);
    return FancyRadioTabGroup;
}();

function makeFancyRadioTabs(context) {
    var selectClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : radioSelectString;

    return Array.from(context.querySelectorAll(selectClass)).map(function(el) {
        return new FancyRadioTabGroup(el);
    });
}

var selectString = '.toggletip';
var startOpenClass = '_toggletip--start-open';

var ToggleTip = function() {
    function ToggleTip(el) {
        classCallCheck(this, ToggleTip);

        this.openClass = 'toggletip--open';
        this.revealClass = 'toggletip__content--reveal';
        this.el = el;
        this.toggleBtn = el.querySelector('._toggletip__toggle-btn');
        this.closeBtn = el.querySelector('.toggletip__content__close-btn');
        this.hiddenHolder = el.querySelector('.toggletip__content__holder');
        this.message = el.querySelector('.toggletip__content');
        this.displayRegion = el.querySelector('.toggletip__display');

        // if it has an input, close tab if another input is focused
        if (el.dataset.input) {
            // console.log(`#${el.dataset.input}`);
            this.input = document.querySelector('#' + el.dataset.input);
        }

        this.timeout;
        this.isOpen = false;
        this.openTip = this.openTip.bind(this);
        this.closeTip = this.closeTip.bind(this);
        this.closeTipAndFocus = this.closeTipAndFocus.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.escapeListener = this.escapeListener.bind(this);
        this.addListeners();

        ToggleTip.instances.push(this);
        if (this.el.classList.contains(startOpenClass)) {
            this.openTip();
        }
    }

    createClass(ToggleTip, [{
        key: 'addListeners',
        value: function addListeners() {
            this.toggleBtn.addEventListener('click', this.toggleOpen);
            this.closeBtn.addEventListener('click', this.closeTipAndFocus);
        }
    }, {
        key: 'toggleOpen',
        value: function toggleOpen() {
            if (this.isOpen) {
                this.closeTipAndFocus();
            } else {
                this.openTip();
            }
        }
    }, {
        key: 'openTip',
        value: function openTip() {
            var _this = this;

            // opening a tip closes any others
            ToggleTip.instances.filter(function(inst) {
                return inst.isOpen;
            }).forEach(function(inst) {
                inst.closeTip();
            });

            clearTimeout(this.timeout);
            this.isOpen = true;
            this.displayRegion.appendChild(this.message);
            this.el.classList.add(this.openClass);
            this.timeout = setTimeout(function() {
                _this.message.classList.add(_this.revealClass);
            }, 50);

            this.watchedInputs = Array.from(document.querySelectorAll('input'));
            this.watchedInputs.forEach(function(input) {
                input.addEventListener('focus', _this.handleInputFocus);
            });
            this.toggleBtn.setAttribute('aria-expanded', true);

            window.addEventListener('keydown', this.escapeListener);
        }
    }, {
        key: 'escapeListener',
        value: function escapeListener(e) {
            if (e.keyCode === 27) {
                this.closeTipAndFocus();
            }
        }
    }, {
        key: 'handleInputFocus',
        value: function handleInputFocus(e) {
            if (e.target !== this.input) {
                this.closeTip();
            }
        }
    }, {
        key: 'closeTip',
        value: function closeTip() {
            var _this2 = this;

            this.watchedInputs.forEach(function(input) {
                input.removeEventListener('focus', _this2.handleInputFocus);
            });
            clearTimeout(this.timeout);
            this.isOpen = false;
            this.message.classList.remove(this.revealClass);
            this.el.classList.remove(this.openClass);
            this.timeout = setTimeout(function() {
                _this2.hiddenHolder.appendChild(_this2.message);
            }, 250);
            this.toggleBtn.setAttribute('aria-expanded', false);
            window.removeEventListener('keydown', this.escapeListener);
        }
    }, {
        key: 'closeTipAndFocus',
        value: function closeTipAndFocus() {
            this.closeTip();
            this.toggleBtn.focus();
        }
    }]);
    return ToggleTip;
}();

ToggleTip.instances = [];

function initToggleTips(context) {
    var selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : selectString;

    var toggleTips = Array.from(context.querySelectorAll(selector)).map(function(el) {
        return new ToggleTip(el);
    });
}

// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function(obj) {
    return typeof obj === "undefined" ? "undefined" : _typeof(obj);
}
: function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
}
;

var jumper = function jumper() {
    // private variable cache
    // no variables are created during a jump, preventing memory leaks

    var element = void 0;
    // element to scroll to                   (node)

    var start = void 0;
    // where scroll starts                    (px)
    var stop = void 0;
    // where scroll stops                     (px)

    var offset = void 0;
    // adjustment from the stop position      (px)
    var easing = void 0;
    // easing function                        (function)
    var a11y = void 0;
    // accessibility support flag             (boolean)

    var distance = void 0;
    // distance of scroll                     (px)
    var duration = void 0;
    // scroll duration                        (ms)

    var timeStart = void 0;
    // time scroll started                    (ms)
    var timeElapsed = void 0;
    // time spent scrolling thus far          (ms)

    var next = void 0;
    // next scroll position                   (px)

    var callback = void 0;
    // to call when done scrolling            (function)

    // scroll position helper

    function location() {
        return window.scrollY || window.pageYOffset;
    }

    // element offset helper

    function top(element) {
        return element.getBoundingClientRect().top + start;
    }

    // rAF loop helper

    function loop(timeCurrent) {
        // store time scroll started, if not started already
        if (!timeStart) {
            timeStart = timeCurrent;
        }

        // determine time spent scrolling so far
        timeElapsed = timeCurrent - timeStart;

        // calculate next scroll position
        next = easing(timeElapsed, start, distance, duration);

        // scroll to it
        window.scrollTo(0, next);

        // check progress
        timeElapsed < duration ? window.requestAnimationFrame(loop)// continue scroll loop
        : done();
        // scrolling is done
    }

    // scroll finished helper

    function done() {
        // account for rAF time rounding inaccuracies
        window.scrollTo(0, start + distance);

        // if scrolling to an element, and accessibility is enabled
        if (element && a11y) {
            // add tabindex indicating programmatic focus
            element.setAttribute('tabindex', '-1');

            // focus the element
            element.focus();
        }

        // if it exists, fire the callback
        if (typeof callback === 'function') {
            callback();
        }

        // reset time for next jump
        timeStart = false;
    }

    // API

    function jump(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        // resolve options, or use defaults
        duration = options.duration || 1000;
        offset = options.offset || 0;
        callback = options.callback;
        // "undefined" is a suitable default, and won't be called
        easing = options.easing || easeInOutQuad;
        a11y = options.a11y || false;

        // cache starting position
        start = location();

        // resolve target
        switch (typeof target === 'undefined' ? 'undefined' : _typeof$1(target)) {
            // scroll from current position
        case 'number':
            element = undefined;
            // no element to scroll to
            a11y = false;
            // make sure accessibility is off
            stop = start + target;
            break;

            // scroll to element (node)
            // bounding rect is relative to the viewport
        case 'object':
            element = target;
            stop = top(element);
            break;

            // scroll to element (selector)
            // bounding rect is relative to the viewport
        case 'string':
            element = document.querySelector(target);
            stop = top(element);
            break;
        }

        // resolve scroll distance, accounting for offset
        distance = stop - start + offset;

        // resolve duration
        switch (_typeof$1(options.duration)) {
            // number in ms
        case 'number':
            duration = options.duration;
            break;

            // function passed the distance of the scroll
        case 'function':
            duration = options.duration(distance);
            break;
        }

        // start the loop
        window.requestAnimationFrame(loop);
    }

    // expose only the jump method
    return jump;
};

// export singleton

var singleton = jumper();

var $ = void 0;
var anchorSelectString = '.fancy-anchor';
var stepperSectionSelectString = '.npc-step';
var linkListSelect = '.npc__contents__sidebar__intro li';
var npcWrapperClass = '.npc';
var hasViewedPrice = false;

var FancyAnchor = function() {
    function FancyAnchor(el, listSelector, index, onLinkClick, jumpCallback) {
        classCallCheck(this, FancyAnchor);

        this.el = el;
        this.index = index;
        this.listItemSelector = listSelector;
        this.onLinkClick = onLinkClick;
        this.jumpCallback = jumpCallback;
        this.addListeners();
    }

    createClass(FancyAnchor, [{
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            this.el.addEventListener('click', function(e) {
                _this.handleClick(e);
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var _this2 = this;

            e.preventDefault();
            if (this.onLinkClick) {
                this.onLinkClick(this.index);
            }
            singleton($(this.el).attr('href'), {
                duration: 600,
                offset: 0,
                a11y: true,
                callback: function callback() {
                    if (_this2.jumpCallback) {
                        _this2.jumpCallback();
                    }
                }
            });
        }
    }]);
    return FancyAnchor;
}();

var Stepper = function() {
    function Stepper(sectionSelector, listItemSelect, wrapperClass, anchorSelector, context) {
        var _this3 = this;

        classCallCheck(this, Stepper);

        // console.log('init stepper');
        this.el = context.querySelector(wrapperClass);
        this.listItemSelector = listItemSelect;
        this.sectionSelector = sectionSelector;
        this.handleStepEnter = this.handleStepEnter.bind(this);
        this.onLinkClick = this.onLinkClick.bind(this);
        this.onJumpComplete = this.onJumpComplete.bind(this);
        this.isSkipping = false;
        var scroller = scrollama();

        scroller.setup({
            step: sectionSelector
        }).onStepEnter(this.handleStepEnter);

        this.anchors = Array.from(this.el.querySelectorAll(anchorSelector)).map(function(el, i) {
            return new FancyAnchor(el,listItemSelect,i,_this3.onLinkClick,_this3.onJumpComplete);
        });
    }

    createClass(Stepper, [{
        key: 'onLinkClick',
        value: function onLinkClick(index) {
            this.isSkipping = true;
            this.setSelectedLink(index);
        }
    }, {
        key: 'onJumpComplete',
        value: function onJumpComplete() {
            this.isSkipping = false;
        }
    }, {
        key: 'setSelectedLink',
        value: function setSelectedLink(index) {
            $(this.listItemSelector).removeClass('selected').addClass('has-selected').eq(index).addClass('selected');
        }
    }, {
        key: 'handleStepEnter',
        value: function handleStepEnter(data) {
            if (window.isNPC && window.npcLoading) {
                return;
            }
            if (this.isSkipping)
                return;
            this.setSelectedLink(data.index);
        }
    }]);
    return Stepper;
}();

var NPCStepper = function(_Stepper) {
    inherits(NPCStepper, _Stepper);

    function NPCStepper() {
        var _ref;

        classCallCheck(this, NPCStepper);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this4 = possibleConstructorReturn(this, (_ref = NPCStepper.__proto__ || Object.getPrototypeOf(NPCStepper)).call.apply(_ref, [this].concat(args)));

        _this4.stickyResultsActive = false;
        _this4.$stickyResults = $('.npc__sticky-results');

        _this4.handleStepEnterBottom = _this4.handleStepEnterBottom.bind(_this4);
        var bottomScroller = scrollama();
        bottomScroller.setup({
            step: _this4.sectionSelector,
            offset: 0.9
        }).onStepEnter(_this4.handleStepEnterBottom);
        return _this4;
    }

    createClass(NPCStepper, [{
        key: 'hideStickyFooter',
        value: function hideStickyFooter() {
            this.$stickyResults.removeClass('show');
        }
    }, {
        key: 'showStickyFooter',
        value: function showStickyFooter() {
            if ($('.npc__sticky-results  .c-results__item__value').html() !== '') {
                this.$stickyResults.addClass('show');
            }
        }
    }, {
        key: 'handleStepEnterBottom',
        value: function handleStepEnterBottom(data) {
            if (data.index === 3) {
                this.hideStickyFooter();
            }
        }
    }, {
        key: 'handleStepEnter',
        value: function handleStepEnter(data) {
            get(NPCStepper.prototype.__proto__ || Object.getPrototypeOf(NPCStepper.prototype), 'handleStepEnter', this).call(this, data);
            if (data.index === 3) {
                // init sticky summary
                this.stickyResultsActive = true;
                $('#estimated_net_price .c-results__item_inner').attr('aria-live', 'polite');
                $('#estimated_net_price .c-results__item_inner').attr('aria-atomic', true);

                // reveals edit buttons
                document.body.classList.add('npc--edit-active');
                this.hideStickyFooter();
                if ($('.npc__sticky-results  .c-results__item__value').text() !== '' && !hasViewedPrice) {
                    hasViewedPrice = true;
                    window.dataLayer = window.dataLayer || [];
                    if (dataLayer.push) {
                        dataLayer.push({
                            'event': 'NPC Price View',
                            'ContentType': 'NPC',
                            'ContentCategory': 'NPC',
                            'PrimaryAudience': 'Prospective'
                        });
                    }
                }
            } else if (data.index !== 3) {
                if (this.stickyResultsActive) {
                    this.showStickyFooter();
                }
            }
        }
    }]);
    return NPCStepper;
}(Stepper);

function initFancyAnchors(jQuery, context) {
    var anchorSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : anchorSelectString;
    var stepperSection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : stepperSectionSelectString;
    var stepperListItemSelect = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : linkListSelect;

    $ = jQuery;
    if (context.querySelectorAll(npcWrapperClass).length === 0) {
        return;
    }
    var stepper = new NPCStepper(stepperSection,stepperListItemSelect,npcWrapperClass,anchorSelector,context);
}

var ValidationRule = function() {
    function ValidationRule(_ref) {
        var test = _ref.test
          , failMessage = _ref.failMessage
          , element = _ref.element;
        classCallCheck(this, ValidationRule);

        this.runTest = test;
        this.el = element;
        this.inputEl = element.querySelector('input');
        this.refNode = this.el.querySelector('.input__container');
        this.error_container = this.el.querySelector('.input__error');
        this.failMessageEl = this.createMessageEl(failMessage);
        this.errorActive = false;
    }

    createClass(ValidationRule, [{
        key: 'createMessageEl',
        value: function createMessageEl(message) {
            var el = document.createElement('div');
            el.innerHTML = message;
            return el;
        }
    }, {
        key: 'test',
        value: function test() {
            if (this.runTest()) {
                this.handlePass();
                return true;
            } else {
                this.handleFail();
                return false;
            }
        }
    }, {
        key: 'handlePass',
        value: function handlePass() {
            if (this.errorActive) {
                this.errorActive = false;
                this.removeErrorMessage();
            }
        }
    }, {
        key: 'handleFail',
        value: function handleFail() {
            if (!this.errorActive) {
                this.errorActive = true;
                this.addErrorMessage();
            }
        }
    }, {
        key: 'addErrorMessage',
        value: function addErrorMessage() {
            var inputId = this.inputEl.getAttribute('id');
            this.inputEl.setAttribute('aria-describedby', inputId + '-error');

            this.error_container.setAttribute('aria-live', 'assertive');
            this.error_container.insertBefore(this.failMessageEl, null);

            this.el.classList.add('input--has-error');
        }
    }, {
        key: 'removeErrorMessage',
        value: function removeErrorMessage() {
            this.inputEl.setAttribute('aria-describedby', '');
            this.error_container.setAttribute('aria-live', 'off');
            this.error_container.removeChild(this.failMessageEl);

            this.el.classList.remove('input--has-error');
        }
    }]);
    return ValidationRule;
}();

/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.6
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/*
  STICKYBITS 💉
  --------
  > a lightweight alternative to `position: sticky` polyfills 🍬
  --------
  - each method is documented above it our view the readme
  - Stickybits does not manage polymorphic functionality (position like properties)
  * polymorphic functionality: (in the context of describing Stickybits)
    means making things like `position: sticky` be loosely supported with position fixed.
    It also means that features like `useStickyClasses` takes on styles like `position: fixed`.
  --------
  defaults 🔌
  --------
  - version = `package.json` version
  - userAgent = viewer browser agent
  - target = DOM element selector
  - noStyles = boolean
  - offset = number
  - parentClass = 'string'
  - scrollEl = window || DOM element selector || DOM element
  - stickyClass = 'string'
  - stuckClass = 'string'
  - useStickyClasses = boolean
  - useFixed = boolean
  - useGetBoundingClientRect = boolean
  - verticalPosition = 'string'
  --------
  props🔌
  --------
  - p = props {object}
  --------
  instance note
  --------
  - stickybits parent methods return this
  - stickybits instance methods return an instance item
  --------
  nomenclature
  --------
  - target => el => e
  - props => o || p
  - instance => item => it
  --------
  methods
  --------
  - .definePosition = defines sticky or fixed
  - .addInstance = an array of objects for each Stickybits Target
  - .getClosestParent = gets the parent for non-window scroll
  - .getTopPosition = gets the element top pixel position from the viewport
  - .computeScrollOffsets = computes scroll position
  - .toggleClasses = older browser toggler
  - .manageState = manages sticky state
  - .removeClass = older browser support class remover
  - .removeInstance = removes an instance
  - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
*/
var Stickybits = /*#__PURE__*/
function() {
    function Stickybits(target, obj) {
        var o = typeof obj !== 'undefined' ? obj : {};
        this.version = '3.6.6';
        this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';
        this.props = {
            customStickyChangeNumber: o.customStickyChangeNumber || null,
            noStyles: o.noStyles || false,
            stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
            parentClass: o.parentClass || 'js-stickybit-parent',
            scrollEl: typeof o.scrollEl === 'string' ? document.querySelector(o.scrollEl) : o.scrollEl || window,
            stickyClass: o.stickyClass || 'js-is-sticky',
            stuckClass: o.stuckClass || 'js-is-stuck',
            stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
            useStickyClasses: o.useStickyClasses || false,
            useFixed: o.useFixed || false,
            useGetBoundingClientRect: o.useGetBoundingClientRect || false,
            verticalPosition: o.verticalPosition || 'top'/*
        define positionVal after the setting of props, because definePosition looks at the props.useFixed
        ----
        -  uses a computed (`.definePosition()`)
        -  defined the position
      */

        };
        this.props.positionVal = this.definePosition() || 'fixed';
        this.instances = [];
        var _this$props = this.props
          , positionVal = _this$props.positionVal
          , verticalPosition = _this$props.verticalPosition
          , noStyles = _this$props.noStyles
          , stickyBitStickyOffset = _this$props.stickyBitStickyOffset;
        var verticalPositionStyle = verticalPosition === 'top' && !noStyles ? stickyBitStickyOffset + "px" : '';
        var positionStyle = positionVal !== 'fixed' ? positionVal : '';
        this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;
        if (!('length'in this.els))
            this.els = [this.els];

        for (var i = 0; i < this.els.length; i++) {
            var el = this.els[i];
            // set vertical position

            el.style[verticalPosition] = verticalPositionStyle;
            el.style.position = positionStyle;
            // instances are an array of objects

            this.instances.push(this.addInstance(el, this.props));
        }
    }
    /*
    setStickyPosition ✔️
    --------
    —  most basic thing stickybits does
    => checks to see if position sticky is supported
    => defined the position to be used
    => stickybits works accordingly
  */

    var _proto = Stickybits.prototype;

    _proto.definePosition = function definePosition() {
        var stickyProp;

        if (this.props.useFixed) {
            stickyProp = 'fixed';
        } else {
            var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
            var test = document.head.style;

            for (var i = 0; i < prefix.length; i += 1) {
                test.position = prefix[i] + "sticky";
            }

            stickyProp = test.position ? test.position : 'fixed';
            test.position = '';
        }

        return stickyProp;
    }
    /*
    addInstance ✔️
    --------
    — manages instances of items
    - takes in an el and props
    - returns an item object
    ---
    - target = el
    - o = {object} = props
      - scrollEl = 'string' | object
      - verticalPosition = number
      - off = boolean
      - parentClass = 'string'
      - stickyClass = 'string'
      - stuckClass = 'string'
    ---
    - defined later
      - parent = dom element
      - state = 'string'
      - offset = number
      - stickyStart = number
      - stickyStop = number
    - returns an instance object
  */
    ;

    _proto.addInstance = function addInstance(el, props) {
        var _this = this;

        var item = {
            el: el,
            parent: el.parentNode,
            props: props
        };

        if (props.positionVal === 'fixed' || props.useStickyClasses) {
            this.isWin = this.props.scrollEl === window;
            var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);
            this.computeScrollOffsets(item);
            item.parent.className += " " + props.parentClass;
            item.state = 'default';

            item.stateContainer = function() {
                return _this.manageState(item);
            }
            ;

            se.addEventListener('scroll', item.stateContainer);
        }

        return item;
    }
    /*
    --------
    getParent 👨‍
    --------
    - a helper function that gets the target element's parent selected el
    - only used for non `window` scroll elements
    - supports older browsers
  */
    ;

    _proto.getClosestParent = function getClosestParent(el, match) {
        // p = parent element
        var p = match;
        var e = el;
        if (e.parentElement === p)
            return p;
        // traverse up the dom tree until we get to the parent

        while (e.parentElement !== p) {
            e = e.parentElement;
        }
        // return parent element

        return p;
    }
    /*
    --------
    getTopPosition
    --------
    - a helper function that gets the topPosition of a Stickybit element
    - from the top level of the DOM
  */
    ;

    _proto.getTopPosition = function getTopPosition(el) {
        if (this.props.useGetBoundingClientRect) {
            return el.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);
        }

        var topPosition = 0;

        do {
            topPosition = el.offsetTop + topPosition;
        } while (el = el.offsetParent);

        return topPosition;
    }
    /*
    computeScrollOffsets 📊
    ---
    computeScrollOffsets for Stickybits
    - defines
      - offset
      - start
      - stop
  */
    ;

    _proto.computeScrollOffsets = function computeScrollOffsets(item) {
        var it = item;
        var p = it.props;
        var el = it.el;
        var parent = it.parent;
        var isCustom = !this.isWin && p.positionVal === 'fixed';
        var isTop = p.verticalPosition !== 'bottom';
        var scrollElOffset = isCustom ? this.getTopPosition(p.scrollEl) : 0;
        var stickyStart = isCustom ? this.getTopPosition(parent) - scrollElOffset : this.getTopPosition(parent);
        var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;
        var parentBottom = stickyStart + parent.offsetHeight;
        it.offset = scrollElOffset + p.stickyBitStickyOffset;
        it.stickyStart = isTop ? stickyStart - it.offset : 0;
        it.stickyChange = it.stickyStart + stickyChangeOffset;
        it.stickyStop = isTop ? parentBottom - (el.offsetHeight + it.offset) : parentBottom - window.innerHeight;
    }
    /*
    toggleClasses ⚖️
    ---
    toggles classes (for older browser support)
    r = removed class
    a = added class
  */
    ;

    _proto.toggleClasses = function toggleClasses(el, r, a) {
        var e = el;
        var cArray = e.className.split(' ');
        if (a && cArray.indexOf(a) === -1)
            cArray.push(a);
        var rItem = cArray.indexOf(r);
        if (rItem !== -1)
            cArray.splice(rItem, 1);
        e.className = cArray.join(' ');
    }
    /*
    manageState 📝
    ---
    - defines the state
      - normal
      - sticky
      - stuck
  */
    ;

    _proto.manageState = function manageState(item) {
        // cache object
        var it = item;
        var e = it.el;
        var p = it.props;
        var state = it.state;
        var start = it.stickyStart;
        var change = it.stickyChange;
        var stop = it.stickyStop;
        var stl = e.style;
        // cache props

        var ns = p.noStyles;
        var pv = p.positionVal;
        var se = p.scrollEl;
        var sticky = p.stickyClass;
        var stickyChange = p.stickyChangeClass;
        var stuck = p.stuckClass;
        var vp = p.verticalPosition;
        var isTop = vp !== 'bottom';
        /*
      requestAnimationFrame
      ---
      - use rAF
      - or stub rAF
    */

        var rAFStub = function rAFDummy(f) {
            f();
        };

        var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;
        /*
      define scroll vars
      ---
      - scroll
      - notSticky
      - isSticky
      - isStuck
    */

        var tC = this.toggleClasses;
        var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;
        var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');
        var isSticky = isTop && scroll <= start && (state === 'sticky' || state === 'stuck');
        var isStuck = scroll >= stop && state === 'sticky';
        /*
      Unnamed arrow functions within this block
      ---
      - help wanted or discussion
      - view test.stickybits.js
        - `stickybits .manageState  `position: fixed` interface` for more awareness 👀
    */

        if (notSticky) {
            it.state = 'sticky';
            rAF(function() {
                tC(e, stuck, sticky);
                stl.position = pv;
                if (ns)
                    return;
                stl.bottom = '';
                stl[vp] = p.stickyBitStickyOffset + "px";
            });
        } else if (isSticky) {
            it.state = 'default';
            rAF(function() {
                tC(e, sticky);
                tC(e, stuck);
                if (pv === 'fixed')
                    stl.position = '';
            });
        } else if (isStuck) {
            it.state = 'stuck';
            rAF(function() {
                tC(e, sticky, stuck);
                if (pv !== 'fixed' || ns)
                    return;
                stl.top = '';
                stl.bottom = '0';
                stl.position = 'absolute';
            });
        }

        var isStickyChange = scroll >= change && scroll <= stop;
        var isNotStickyChange = scroll < change / 2 || scroll > stop;
        var stub = 'stub';
        // a stub css class to remove

        if (isNotStickyChange) {
            rAF(function() {
                tC(e, stickyChange);
            });
        } else if (isStickyChange) {
            rAF(function() {
                tC(e, stub, stickyChange);
            });
        }
    }
    ;

    _proto.update = function update(updatedProps) {
        if (updatedProps === void 0) {
            updatedProps = null;
        }

        for (var i = 0; i < this.instances.length; i += 1) {
            var instance = this.instances[i];
            this.computeScrollOffsets(instance);

            if (updatedProps) {
                for (var updatedProp in updatedProps) {
                    instance.props[updatedProp] = updatedProps[updatedProp];
                }
            }
        }

        return this;
    }
    /*
    removes an instance 👋
    --------
    - cleanup instance
  */
    ;

    _proto.removeInstance = function removeInstance(instance) {
        var e = instance.el;
        var p = instance.props;
        var tC = this.toggleClasses;
        e.style.position = '';
        e.style[p.verticalPosition] = '';
        tC(e, p.stickyClass);
        tC(e, p.stuckClass);
        tC(e.parentNode, p.parentClass);
    }
    /*
    cleanup 🛁
    --------
    - cleans up each instance
    - clears instance
  */
    ;

    _proto.cleanup = function cleanup() {
        for (var i = 0; i < this.instances.length; i += 1) {
            var instance = this.instances[i];

            if (instance.stateContainer) {
                instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);
            }

            this.removeInstance(instance);
        }

        this.manageState = false;
        this.instances = [];
    }
    ;

    return Stickybits;
}();
/*
  export
  --------
  exports StickBits to be used 🏁
*/

function stickybits(target, o) {
    return new Stickybits(target,o);
}

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var cipher = 'phqgiumeaylnofdxjkrcvstzwb';

var alphabetUpper = alphabet.toUpperCase();
var cipherUpper = cipher.toUpperCase();

var numbers = '0123456789';
var cipherNumbers = '6143892570';

// Simple substitution cipher
function encrypt(str) {
    var encryptedStr = '';

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);

        if (alphabet.indexOf(char) !== -1) {
            var index = alphabet.indexOf(char);
            encryptedStr += cipher.charAt(index);
        } else if (alphabetUpper.indexOf(char) !== -1) {
            var _index = alphabetUpper.indexOf(char);
            encryptedStr += cipherUpper.charAt(_index);
        } else if (numbers.indexOf(char) !== -1) {
            var _index2 = numbers.indexOf(char);
            encryptedStr += cipherNumbers.charAt(_index2);
        } else {
            encryptedStr += char;
        }
    }
    return encryptedStr;
}

function decrypt(str) {
    var decryptedStr = '';

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);

        if (cipher.indexOf(char) !== -1) {
            var index = cipher.indexOf(char);
            decryptedStr += alphabet.charAt(index);
        } else if (cipherUpper.indexOf(char) !== -1) {
            var _index3 = cipherUpper.indexOf(char);
            decryptedStr += alphabetUpper.charAt(_index3);
        } else if (cipherNumbers.indexOf(char) !== -1) {
            var _index4 = cipherNumbers.indexOf(char);
            decryptedStr += numbers.charAt(_index4);
        } else {
            decryptedStr += char;
        }
    }
    return decryptedStr;
}

var nameToShort = {
    field_residence: 'r',
    field_numberfamily: 'nf',
    field_numbercollege: 'nc',
    field_salary: 's',
    field_interest: 'i',
    field_business: 'b',
    field_realestate: 're',
    field_other: 'o',
    field_assets_cash: 'ac',
    field_assets_businessfarmequity: 'bfe',
    field_realestateequity: 'ree',
    field_assets_other: 'ao',
    field_assets_student: 'as',
    field_region: 'fr',
    field_state: 'fs',
    field_province: 'fp',
    field_citizenship: 'fc'
};
var shortToName = {};
for (var key$2 in nameToShort) {
    shortToName[nameToShort[key$2]] = key$2;
}

var $$1 = void 0;
var numAnnouncements = 0;
var formSelector = '.autoAjaxForm';
var shareButtonSelector = '.npc__share-estimate';
var estimateAnchor = '#net-price-estimate';
var colorResultClass = 'c-results__item--is-color';
//every 15s, screen reader announces if there is still a form error
var announceTimeout = 15 * 1000;

// const formEndpoint = 'https://harvard.local/api/npc/calculate';
// const formEndpoint = 'http://harvard.lndo.site/api/npc/calculate';
// const formEndpoint = 'https://dev.college.harvard.edu/api/npc/calculate';
// const formEndpoint = 'https://college.harvard.edu/api/npc/calculate';

// console.log(window.location.origin + '/api/npc/calculate');
var formEndpoint = window.location.origin + '/api/npc/calculate';

stickybits('.npc__contents__sidebar__inner', {
    stickyBitStickyOffset: 50
});
stickybits('.npc__contents__sidebar__footer', {
    verticalPosition: 'bottom',
    stickyBitStickyOffset: 20
});

function toDollarString(val) {
    if (typeof val === 'string' && val === '') {
        return '$0';
    }
    if (val.toLocaleString) {
        return '$' + val.toLocaleString();
    }
    return '$' + val;
}

function handleSubRegionChange(sourceInput, targetInput) {
    targetInput.value = sourceInput.value;
}

function hideUSDLabels() {
    document.body.classList.remove('npc--show-usd');
}

function showUSDLabels() {
    document.body.classList.add('npc--show-usd');
}

function handleResidenceChange(citizenshipInput, residenceInput, regionInput, stateInputWrap, stateInput, provinceInputWrap, provinceInput) {
    if (regionInput.value === 'USA') {
        hideUSDLabels();
        stateInputWrap.style.display = 'block';
        provinceInputWrap.style.display = 'none';
        provinceInputWrap.classList.remove('input--has-value');
        provinceInput.value = '';

        citizenshipInput.value = 'USA';
    } else if (regionInput.value === 'CANADA') {
        showUSDLabels();
        stateInputWrap.style.display = 'none';
        stateInputWrap.classList.remove('input--has-value');
        stateInput.value = '';

        provinceInputWrap.style.display = 'block';

        // set to USA so user gets summer work
        citizenshipInput.value = 'USA';
    } else {
        showUSDLabels();
        stateInputWrap.style.display = 'none';
        stateInputWrap.classList.remove('input--has-value');
        provinceInputWrap.style.display = 'none';
        provinceInputWrap.classList.remove('input--has-value');
        stateInput.value = '';
        provinceInput.value = '';
        residenceInput.value = regionInput.value;
        citizenshipInput.value = 'non-USA';
    }
}

var ResidenceHandler = function ResidenceHandler(context) {
    classCallCheck(this, ResidenceHandler);

    var residenceInput = context.querySelector('#field_residence');
    var regionInput = context.querySelector('#field_region');
    var citizenshipInput = context.querySelector('#field_citizenship');

    var stateInputWrap = context.querySelector('#input-state');
    var provinceInputWrap = context.querySelector('#input-province');

    var stateInput = context.querySelector('#field_state');
    var provinceInput = context.querySelector('#field_province');

    this.regionHandler = handleResidenceChange.bind(null, citizenshipInput, residenceInput, regionInput, stateInputWrap, stateInput, provinceInputWrap, provinceInput);

    this.stateHandler = handleSubRegionChange.bind(null, stateInput, residenceInput);
    this.provinceHandler = handleSubRegionChange.bind(null, provinceInput, residenceInput);

    stateInput.addEventListener('change', this.stateHandler);
    provinceInput.addEventListener('change', this.provinceHandler);
    regionInput.addEventListener('change', this.regionHandler);

    this.stateHandler();
    this.provinceHandler();
    this.regionHandler();
};

var AjaxForm = function() {
    function AjaxForm(el) {
        classCallCheck(this, AjaxForm);

        this.requestCount = 0;
        this.formTimeoutTimer = 1500;
        this.formEl = el;
        this.validationRules = [];
        // this.handleRadioChange = this.handleRadioChange.bind(this);
        // this.handleRadioClick = this.handleRadioClick.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleTextkeypress = this.handleTextkeypress.bind(this);
        this.sendUpdate = this.sendUpdate.bind(this);
        this.$shareButton = $$1(shareButtonSelector);
        this.srWindow = document.querySelector('.sr-messages');
        this.hasErrors = false;
        this.prevErrors = false;

        this.$shareConfirmation = $$1('<p class="npc__share-confirm">A shareable URL has been copied to your clipboard.</p>');
        window.isNPC = true;
        window.npcLoading = true;

        this.init();
        this.hasErrorAnnouncements = this.hasErrorAnnouncements.bind(this);
    }

    createClass(AjaxForm, [{
        key: 'init',
        value: function init() {
            $$1('.c-results__message').hide();
            this.addListeners();
            this.residenceHandler = new ResidenceHandler(this.formEl);

            this.setupValidationRules();

            if (!this.handleLoadWithParams()) {
                this.handleFormUpdate();
            }
        }
    }, {
        key: 'setupValidationRules',
        value: function setupValidationRules() {
            // num in family has value and is >= 2
            this.createValidationRule({
                test: function test() {
                    var val = parseInt($$1('#field_numberfamily').val(), 10);
                    return val && val >= 2;
                },
                failMessage: 'Error: Number of people in your family must be 2 or greater. ',
                element: $$1('#field_numberfamily').parents('.input')[0]
            });

            // num in college has value and is >= 1
            this.createValidationRule({
                test: function test() {
                    var val = parseInt($$1('#field_numbercollege').val().replace(',', ''), 10);
                    return val && val >= 1;
                },
                failMessage: 'Error: Number of children in college must be 1 or greater. ',
                element: $$1('#field_numbercollege').parents('.input')[0]
            });

            // num in college must be less than num  in family
            this.createValidationRule({
                test: function test() {

                    var numInFamily = parseInt($$1('#field_numberfamily').val().replace(',', ''), 10);
                    var numInCollege = parseInt($$1('#field_numbercollege').val().replace(',', ''), 10);
                    return !isNaN(numInFamily) && !isNaN(numInCollege) && numInCollege < numInFamily;
                },
                failMessage: 'Error: Number of children in college must be less than the number of people in your family. ',
                element: $$1('#field_numbercollege').parents('.input')[0]
            });
        }
    }, {
        key: 'createValidationRule',
        value: function createValidationRule(_ref) {
            var test = _ref.test
              , failMessage = _ref.failMessage
              , element = _ref.element;

            this.validationRules.push(new ValidationRule({
                test: test,
                failMessage: '<p class="form-error">' + failMessage + '</p>',
                element: element
            }));
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            // Share button click
            this.$shareButton.click(this.handleShareEstimate.bind(this));

            // Keyup and input listeners on text inputs
            Array.from(this.formEl.querySelectorAll('input[type=text]')).forEach(function(el) {
                el.addEventListener('keyup', _this.handleTextkeypress);
                el.addEventListener('input', _this.handleInput);
            });

            // input event on select menu
            Array.from(this.formEl.querySelectorAll('select')).forEach(function(el) {
                el.addEventListener('input', function(e) {
                    // there's an option with no value to show blank field.
                    // Make it unselected after load
                    Array.from(e.target.querySelectorAll('option')).forEach(function(el) {
                        if (!el.value && !el.selected) {
                            el.disabled = true;
                            el.hidden = true;
                        }
                    });

                    _this.handleInput();
                });
            });

            // Used to have radio buttons, not anymore
            // Array.from(this.formEl.querySelectorAll('input[type=radio]')).forEach(
            //   el => {
            //     el.addEventListener('change', this.handleRadioChange);
            //     el.parentNode.addEventListener('click', this.handleRadioClick);
            //   }
            // );
        }
    }, {
        key: 'handleLoadWithParams',
        value: function handleLoadWithParams() {
            if (window.location.href.indexOf('?') !== -1) {
                // has params, so populate form
                var encryptedParams = window.location.href.split('?')[1];
                if (encryptedParams.length === 0) {
                    return;
                }
                var decryptedParams = decrypt(encryptedParams);
                var params = decryptedParams.split('&');
                // Get the params in the url and return key values.
                var shareParams = encryptedParams.split('&');
                var splitShareParams = shareParams.map(function(p) {
                    return p.split('=')[0];
                });
                // Dictionary of possible params for share links.
                var shareParamList = ['uk', 'ur', 'ux', 'uq', 'k', 'fu', 'fq', 'r', 'a', 'h', 'ki', 'd', 'pq', 'hui', 'uaing_prricr_kipnircpciijvacw', 'pd', 'pr'];
                // If all the params are set in the url this is a share link.
                var shareLink = true;
                shareParamList.forEach(function(param) {
                    if (!splitShareParams.includes(param)) {
                        shareLink = false;
                    }
                });
                // If this is a not a share link, do not show the NPC popup.
                if (!shareLink) {
                    window.npcLoading = false;
                    return false;
                }
                var splitParams = params.map(function(p) {
                    return p.split('=');
                });
                // populate form vals
                splitParams.forEach(function(param) {
                    param[2] = shortToName[param[0]];
                    param[3] = decodeURIComponent(param[1]);
                    var targetInput = $$1('[name=\'' + shortToName[param[0]] + '\']');
                    targetInput.val(decodeURIComponent(param[1]));
                    if (param[3] !== '') {
                        targetInput.parents('.input').addClass('input--has-value');
                    }
                });
                this.residenceHandler.regionHandler();

                // get results
                this.sendUpdate();
                // clear url
                history.pushState({}, document.title, window.location.href.split('?')[0]);

                document.querySelector('#shared-estimate-message').classList.add('_toggletip--start-open');

                singleton(estimateAnchor, {
                    duration: 0,
                    offset: 0,
                    a11y: true,
                    callback: function callback() {
                        $$1('.npc__contents__sidebar__intro li').removeClass('selected').addClass('has-selected').eq(3).addClass('selected');

                        setTimeout(function() {
                            window.npcLoading = false;
                        }, 1000);
                    }
                });

                return true;
            }
            window.npcLoading = false;
            return false;
        }
    }, {
        key: 'handleShareEstimate',
        value: function handleShareEstimate(e) {
            window.dataLayer = window.dataLayer || [];
            if (dataLayer.push) {
                dataLayer.push({
                    'event': 'NPC Share',
                    'ContentType': 'NPC',
                    'ContentCategory': 'NPC',
                    'PrimaryAudience': 'Prospective'
                });
            }

            // Serialize form and shorten field names
            var formData = $$1(this.formEl).serialize();
            for (var key in nameToShort) {
                formData = formData.replace(key, nameToShort[key]);
            }
            var encryptedURLData = encrypt(formData);

            // Create copy area
            var $clipboardTemplate = $$1('<textarea id="clipboard-template" class="u-sr-only"></textarea>');
            $$1('body').append($clipboardTemplate);

            // select text, copy, and remove it
            $clipboardTemplate.html(location.protocol + '//' + location.host + location.pathname + '?' + encryptedURLData);

            // handle iOS as a special case
            if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
                var el = $clipboardTemplate[0];
                // save current contentEditable/readOnly status
                var editable = el.contentEditable;
                var readOnly = el.readOnly;

                // convert to editable with readonly to stop iOS keyboard opening
                el.contentEditable = true;
                el.readOnly = true;

                // create a selectable range
                var range = document.createRange();
                range.selectNodeContents(el);

                // select the range
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                el.setSelectionRange(0, 999999);

                // restore contentEditable/readOnly to original state
                el.contentEditable = editable;
                el.readOnly = readOnly;
            } else {
                $clipboardTemplate.select();
            }

            document.execCommand('copy');
            $clipboardTemplate.remove();

            // return focus to the button after executing copy
            this.$shareButton.focus();
        }// No radio buttons
        // handleRadioChange(e) {
        //   this.handleFormUpdate();
        // }
        // handleRadioClick(e) {
        //   // click is fired by keyboard arrowing as well, so only handle click if it's
        //   // on the wrapping tab.
        //   if (e.target.tagName === 'INPUT') {
        //     return;
        //   }
        //   this.handleFormUpdate();
        // }

    }, {
        key: 'handleInput',
        value: function handleInput(e) {
            this.handleFormUpdate();
        }
    }, {
        key: 'handleTextkeypress',
        value: function handleTextkeypress(e) {
            // don't do anything on certain keys
            // arrows, shift, tab
            if (e.keyCode === 9 || e.keyCode === 16 || e.keyCode >= 37 && e.keyCode <= 40) {
                return;
            }
            this.handleFormUpdate();
        }
    }, {
        key: 'handleFormUpdate',
        value: function handleFormUpdate() {
            clearTimeout(this.updateTimeout);
            this.updateTimeout = setTimeout(this.sendUpdate, this.formTimeoutTimer);
        }
    }, {
        key: 'handleResponse',
        value: function handleResponse(i, res) {
            // only update if it's the latest request, otherwise UI could get out of
            // sync with response if a few requests get fired off and come back in a
            // different order
            if (i !== this.requestCount) {
                return;
            }
            this.updateResults(res);
        }
    }, {
        key: 'validate',
        value: function validate() {
            // Must pass all validation tests. The validation test function handles
            // showing error messages.

            var validationPass = this.validationRules.reduce(function(acc, cur) {
                if (!cur.test()) {
                    acc = false;
                }
                return acc;
            }, true);

            $$1('.input').removeClass('input--has-error');
            $$1('.form-error').parents('.input').addClass('input--has-error');

            return validationPass;
        }
    }, {
        key: 'shouldStartChecking',
        value: function shouldStartChecking() {
            var testInputs = Array.from(document.querySelectorAll('#income-information input, #asset-information input, #field_numbercollege'));
            return testInputs.reduce(function(acc, cur) {
                if (cur.value.replace('$', '').length > 0) {
                    acc = true;
                }
                return acc;
            }, false);
        }
    }, {
        key: 'createAnnouncement',
        value: function createAnnouncement(message) {
            var liveRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assertive';

            var messageEl = document.createElement('div');
            // Mac doesn't repeat the same message, so you have to force it with a
            // different message each time.
            var spaces = '';
            numAnnouncements++;
            for (var i = 0; i < numAnnouncements; i++) {
                spaces += '\xA0 ';
            }
            messageEl.innerHTML = '<div>' + message + ' ' + spaces + '</div>';
            this.srWindow.setAttribute('aria-live', liveRule);
            this.srWindow.appendChild(messageEl);
        }
    }, {
        key: 'announceErrorsResolved',
        value: function announceErrorsResolved() {
            this.createAnnouncement('All form errors corrected.');
        }
    }, {
        key: 'hasErrorAnnouncements',
        value: function hasErrorAnnouncements() {
            clearTimeout(this.errorAnnounceTimeout);

            // don't re-announce errors if on the inputs with error checking
            if (document.activeElement && (document.activeElement.id === 'field_numberfamily' || document.activeElement.id === 'field_numbercollege')) {
                if (this.hasErrors) {
                    this.errorAnnounceTimeout = setTimeout(this.hasErrorAnnouncements, announceTimeout);
                }
                return;
            }
            if (this.hasErrors) {
                var formErrors = $$1('.form-error').text();
                this.createAnnouncement('Please fix the following errors: ' + formErrors, 'polite');

                this.errorAnnounceTimeout = setTimeout(this.hasErrorAnnouncements, announceTimeout);
            }
        }
    }, {
        key: 'sendUpdate',
        value: function sendUpdate() {
            // Form not submitted and validation not run until a field after the first
            // section is filled out.
            if (!this.shouldStartChecking()) {
                return;
            }

            this.prevErrors = this.hasErrors;
            if (!this.validate()) {
                this.hasErrors = true;
                this.errorAnnounceTimeout = setTimeout(this.hasErrorAnnouncements, announceTimeout);
                return;
            }
            this.hasErrors = false;
            // if passes, but previous had errors, need to announce to Screen Reader
            // that the errors are resolved
            this.srWindow.innerHTML = '';
            if (this.prevErrors) {
                this.announceErrorsResolved();
            }

            var data = {};
            var inputs = Array.from(this.formEl.querySelectorAll('input'));
            inputs.forEach(function(input) {
                var name = input.name;
                var val = input.value;
                // strip out non-digits on formatted number inputs, and cast as numbers
                if (input.className.includes('number-input')) {
                    val = val.replace(/\D/g, '');
                    if (val.length > 0) {
                        val = parseInt(val, 10);
                    } else {
                        val = 0;
                    }
                }
                data[name] = val;
            });

            this.requestCount++;
            $$1.ajax({
                method: 'POST',
                url: formEndpoint,
                data: data,
                dataType: 'json'
            })// Handler has index bound, so it knows if it's the latest request.
            .done(this.handleResponse.bind(this, this.requestCount)).fail(function(er) {
                // TODO: do we need an error state? Internet drops?
                console.log(er);
                // window.alert('Sorry, could not calculate your results at this time.');
            });
        }
    }, {
        key: 'updateResults',
        value: function updateResults(data) {
            // console.log(data);
            this.$shareButton.show();
            if (data.summary_message) {
                // display message and collapse Your Cost accordion
                $$1('.c-results__message').show();
                $$1('button[data-targetid="your_cost_details"]').removeClass('_accordion-toggle--open').hide();
                $$1('#your_cost_details').removeClass('_accordion-panel--open');
            } else {
                // hide message and expand Your Cost accordion
                $$1('.c-results__message').hide();

                $$1('button[data-targetid="your_cost_details"]').addClass('_accordion-toggle--open').show();
                $$1('#your_cost_details').addClass('_accordion-panel--open');
            }
            for (var field in data) {
                if (field !== 'summary_message') {
                    $$1('#' + field + ' .c-results__item__value').first().html(toDollarString(Math.round(data[field])));

                    // update sticky result
                    if (field === 'estimated_net_price') {
                        var costData = data[field];
                        $$1('.npc__sticky-results  .c-results__item__value').html(toDollarString(Math.round(costData)));
                    }
                    // update green color
                    if (field === 'estimated_scholarship') {
                        var scholarshipData = data[field];
                        var $resultField = $$1('#estimated_scholarship');
                        // const $stickyField = $('.npc__sticky-results .c-results__item');

                        if (scholarshipData === 0 || scholarshipData === '0') {
                            $resultField.removeClass(colorResultClass);
                            // $stickyField.removeClass(colorResultClass);
                        } else {
                            $resultField.addClass(colorResultClass);
                            // $stickyField.addClass(colorResultClass);
                        }
                    }
                }
            }
        }
    }]);
    return AjaxForm;
}();

function initNPC(jQuery, context) {
    var selectClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : formSelector;

    $$1 = jQuery;

    // NPC sidebar modals need an h-tag adjustment for a11y
    if ($$1('.npc').length) {
        $$1('.c-modal--sidebar:not(.headers-updated)').each(function() {
            $$1('h3', this).each(function() {
                var $new = $$1('<h2></h2>');
                $new.attr('class', $$1(this).attr('class'));
                $new.html(this.innerHTML);
                $$1(this).replaceWith($new);
            });

            $$1('h4', this).each(function() {
                var $new = $$1('<h3></h3>');
                $new.attr('class', $$1(this).attr('class'));
                $new.html(this.innerHTML);
                $$1(this).replaceWith($new);
            });

            $$1(this).addClass('headers-updated');

            $$1('button', this).each(function() {
                var btn = $$1(this).get(0);

                btn.addEventListener('click', function() {
                    var target = btn.getAttribute('data-targetid');
                    var panel = target === 'next' ? btn.nextElementSibling : document.getElementById(target);
                    var isOpen = panel.classList.contains('_accordion-panel--open');

                    if (isOpen) {
                        accordionClose(btn, panel);
                    } else {
                        accordionOpen(btn, panel);
                    }
                });
            });
        });
    }
    return Array.from(context.querySelectorAll(selectClass)).map(function(el) {
        return new AjaxForm(el);
    });
}

function fancyFormsInit($) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    makeFancyTextInputs(context);
    makeFancyRadioTabs(context);

    // Note, at the moment, NPC must be initialized before the toggle tips,
    // because this affects if the shared estimate message starts open.
    initNPC($, context);
    initFancyAnchors($, context);

    initToggleTips(context);
}

function toggleVideoState(parent, btn, setExplicit, checkExplicit) {

    // If the user explicity set the preview video to pause, do nothing
    if (checkExplicit && parent.getAttribute('data-setpause') == "true") {
        return;
    }

    var vid = parent.querySelector('video');
    var vid_playing = vid.currentTime > 0 && !vid.paused && vid.readyState > 2;
    console.log(vid_playing);
    var addClass = vid_playing ? 'is-paused' : 'is-playing';
    var removeClass = vid_playing ? 'is-playing' : 'is-paused';
    var label = vid_playing ? 'Play video' : 'Pause video';

    if (vid_playing) {
        vid.pause();
    } else {
        vid.play();
    }

    // User explicitly paused video
    if (setExplicit) {
        if (vid_playing) {
            parent.setAttribute('data-setpause', true);
        } else {
            parent.setAttribute('data-setpause', false);
        }
    }

    btn.classList.remove(removeClass);
    btn.classList.add(addClass);
    btn.setAttribute('aria-label', label);
    parent.classList.remove(removeClass);
    parent.classList.add(addClass);
}

function ambientVideoInit() {

    // A11y buttons - toggle state of video and pause/play button
    var btns = document.getElementsByClassName('js-ambient-video-toggle');

    [].forEach.call(btns, function(btn) {
        btn.addEventListener('click', function() {
            var vidID = btn.getAttribute('data-videowrapper');
            var parent = vidID !== null ? document.getElementById(vidID) : btn.closest('.js-ambient-video-parent');

            toggleVideoState(parent, btn, true, false);
        });
    });

    // // Preview buttons - toggle state of video and pause/play button
    var toggleBtns = document.getElementsByClassName('js-ambient-video-toggle--target');

    [].forEach.call(toggleBtns, function(toggle) {
        toggle.addEventListener('click', function() {
            var vidID = toggle.getAttribute('data-videowrapper');
            var vidWrapper = document.getElementById(vidID);
            var btn = vidWrapper.querySelector('.js-ambient-video-toggle');

            toggleVideoState(vidWrapper, btn, false, true);
        });
    });
}

var easeInOutQuad$1 = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1)
        return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

function initSmoothAnchors() {
    window.smoothAnchorJumping = false;

    //
    // If hash is in url
    //
    window.addEventListener('load', function() {
        if (window.location.hash) {
            var hash = window.location.hash;
            var el = document.getElementById(hash.substring(hash.indexOf("#") + 1));

            if (el) {

                // if ('scrollRestoration' in history) {
                //   history.scrollRestoration = 'manual';
                // }

                // let jumpOffset;

                if (el.classList.contains('_accordion-panel')) {
                    var btn = el.previousElementSibling;
                    accordionOpen(btn, el);
                    // jumpOffset = (btn.offsetHeight + 40) * -1;
                }
                // else {
                //   jumpOffset = -40;
                // }

                // jump( el, {
                //   duration: 600,
                //   offset: jumpOffset,
                //   a11y: true,
                //   easing: easeInOutQuad,
                // });
            }
        }
    });

    //
    // Smooth Scroll on click
    //
    var anchors = document.querySelectorAll('.js-smooth-anchor');

    [].forEach.call(anchors, function(anchor) {

        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            var url = anchor.getAttribute('href');
            var el = url.substring(url.indexOf("#") + 1);
            var customOffset = anchor.getAttribute('data-jumpoffset') ? anchor.getAttribute('data-jumpoffset') : '-50';
            customOffset = parseInt(customOffset);
            console.log(customOffset);

            window.smoothAnchorJumping = true;

            singleton('#' + el, {
                duration: 600,
                offset: customOffset,
                a11y: true,
                easing: easeInOutQuad$1,
                callback: function callback() {
                    window.smoothAnchorJumping = false;
                    anchor.dispatchEvent(new Event('jumped'));
                }
            });
        });
    });
}

function exposedFilter($) {
    var allInputs = document.querySelectorAll('.views-exposed-form .form-item select');

    [].forEach.call(allInputs, function(input) {
        console.log(input);
        input.onchange = function(event) {
            console.log('changed');
            var parentForm = input.closest('.views-exposed-form');
            parentForm.querySelector('.form-submit').click();
        }
        ;
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function openAlert(alert, alertID) {
    alert.classList.remove('m-global-alert--closed');
    alert.classList.add('m-global-alert--open');
    var btn = document.getElementById(alertID + '-full-content');
    btn.setAttribute('aria-expanded', false);
    btn.focus();
}

function closeAlert(alert, alertID) {
    alert.classList.remove('m-global-alert--open');
    alert.classList.add('m-global-alert--closed');
    var btn = document.getElementById(alertID + '-teaser-button');
    btn.setAttribute('aria-expanded', false);
    btn.focus();
}

function alertInit() {

    var alertBtns = document.querySelectorAll('.js-alert-button');

    if (alertBtns.length <= 0) {
        return;
    }

    [].forEach.call(alertBtns, function(btn) {

        var alert = btn.closest('.m-global-alert');
        var alertID = alert.getAttribute('id');

        if (getCookie(alertID) == 'closed') {
            alert.classList.remove('m-global-alert--open');
            alert.classList.add('m-global-alert--closed');
        }

        btn.addEventListener('click', function() {
            var isOpen = alert.classList.contains('m-global-alert--open');
            var d = new Date();

            // Set cookie to expire in one hour
            d.setTime(d.getTime() + 1 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();

            // If CLOSING, add a cookie to set to closed, set it to expire in one hour
            if (isOpen) {
                document.cookie = alertID + '=closed; ' + expires + '; path=/';
                closeAlert(alert, alertID);
            }// If OPENING, remove cookie
            else {
                document.cookie = alertID + '=open; ' + expires + '; path=/';
                openAlert(alert, alertID);
            }
        });
    });
}

var SITE_HEADER = document.getElementById('harvard-site-header');
var FIX_CLASS = 'header--fixed';
var SHOW_CLASS = 'header--visible';
var ANIMATE_CLASS = 'header--ready';

var SCROLL_OFFSET = 0;
var SCROLL_OFFSET_CAP = 20;
var SCROLL_TIMEOUT = void 0;

function fixHeader(headerPos) {
    SITE_HEADER.classList.add(FIX_CLASS);
    document.body.classList.add(FIX_CLASS);
    document.body.style.marginTop = headerPos.height + 'px';

    setTimeout(function() {
        SITE_HEADER.classList.add(ANIMATE_CLASS);
    }, 1);
}

function unfixHeader() {
    SITE_HEADER.classList.remove(ANIMATE_CLASS);
    SITE_HEADER.classList.remove(FIX_CLASS);
    SITE_HEADER.classList.remove(SHOW_CLASS);

    document.body.classList.remove(FIX_CLASS);
    document.body.classList.remove(SHOW_CLASS);
    document.body.style.marginTop = null;
}

function showHeader() {
    SITE_HEADER.classList.add(SHOW_CLASS);
    document.body.classList.add(SHOW_CLASS);
}

function hideHeader() {
    SITE_HEADER.classList.remove(SHOW_CLASS);
    document.body.classList.remove(SHOW_CLASS);
}

function testHeader(newScrollPosition, oldScrollPosition) {

    if (newScrollPosition <= 0) {
        unfixHeader();
        return false;
    }

    var scrollingUp = newScrollPosition < oldScrollPosition;
    var headerPos = SITE_HEADER.getBoundingClientRect();

    // Scrolling down, fix header if viewport is past header
    if (!scrollingUp && headerPos.height + headerPos.top - 50 < 0) {

        if (!SITE_HEADER.classList.contains(FIX_CLASS)) {
            fixHeader(headerPos);
            return false;
        } else {
            return false;
        }
    }

    if (scrollingUp) {

        // Fix header
        if (!SITE_HEADER.classList.contains(SHOW_CLASS)) {
            if (SCROLL_OFFSET < SCROLL_OFFSET_CAP) {
                SCROLL_OFFSET++;
                return false;
            } else {
                showHeader();
                return false;
            }
        } else {
            return false;
        }
    } else {
        SCROLL_OFFSET = 0;
        hideHeader();
    }
}

function stickyHeaderInit() {

    if (!SITE_HEADER) {
        return false;
    }

    var oldScrollPosition = 0;

    window.addEventListener('scroll', function() {

        // If there's a timer, cancel it
        if (SCROLL_TIMEOUT) {
            window.cancelAnimationFrame(SCROLL_TIMEOUT);
        }

        SCROLL_TIMEOUT = window.requestAnimationFrame(function() {
            newScrollPosition = window.pageYOffset;
            testHeader(newScrollPosition, oldScrollPosition);
            oldScrollPosition = newScrollPosition;
        });
    }, false);
}

var $$2 = void 0;

function initStepWatcher() {
    if (!document.querySelector('.step-watcher-section')) {
        return;
    }

    $$2 = jQuery;

    var scroller = scrollama();

    scroller.setup({
        step: '.step-watcher-section'
    }).onStepEnter(function(data) {
        if (window.smoothAnchorJumping)
            return;
        $$2('.step-watcher-item').removeClass('selected').addClass('has-selected').eq(data.index).addClass('selected');
    });

    $$2('.step-watcher-anchor').on('jumped', function(e) {
        $$2('.step-watcher-item').removeClass('selected').addClass('has-selected');
        $$2(e.target).closest('.step-watcher-item').addClass('selected');
    });
}

var itemsSelector = '[data-submenu]';
var menusClass = 'm-subnav--primary';
var headerId = 'harvard-site-header';

var debounce = function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var later = function later() {
            timeout = null;
            if (!immediate)
                func.apply();
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply();
    }
    ;
};

function submenusInit() {
    var items = document.querySelectorAll(itemsSelector);
    var header = document.getElementById(headerId);
    var adminToolbarHeight = document.getElementById('toolbar-administration') ? 65 : 0;
    var resizeHandler = debounce(function() {
        var submenu = document.querySelector('.m-subnav--primary.is-open');
        if (submenu) {
            submenu.style.top = header.offsetHeight + adminToolbarHeight + 'px';
        }
    }, 50, false);

    [].forEach.call(items, function(btn) {

        btn.addEventListener('click', function(e) {
            e.preventDefault();
            var target = 'submenu-' + btn.getAttribute('data-submenu');
            var menus = document.getElementsByClassName(menusClass);
            var menuWasOpen = false;
            [].forEach.call(menus, function(menu) {
                var menuOpen = menu.classList.contains('is-open');
                var currentMenu = menu.id == target;
                if (menuOpen || currentMenu) {
                    if (currentMenu) {
                        if (menuOpen) {
                            menu.classList.remove('is-open');
                            menu.setAttribute('aria-hidden', 'true');
                        } else {
                            menuWasOpen = true;
                            var event = new KeyboardEvent("keydown",{
                                keyCode: 27
                            });
                            window.dispatchEvent(event);
                            menu.style.top = header.offsetHeight + adminToolbarHeight + 'px';
                            menu.classList.add('is-open');
                            menu.setAttribute('aria-hidden', 'false');
                        }
                    } else {
                        menu.classList.remove('is-open');
                        menu.setAttribute('aria-hidden', 'true');
                    }
                }
            });

            if (menuWasOpen) {
                window.addEventListener('resize', resizeHandler);
                document.addEventListener('scroll', resizeHandler);
            } else {
                window.removeEventListener('resize', resizeHandler);
                document.removeEventListener('scroll', resizeHandler);
            }
        });
    });
}

if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;

        do {
            if (el.matches(s))
                return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    }
    ;
}

(function($, Drupal, drupalSettings) {
    alertInit();
    guideInit();
    //shoudl be before ambient video
    siteInit();
    modalInit();
    accordionInit($);
    submenusInit();
    // accordionShare();
    homeVideoHeader();
    socialGridInit();
    storyBlockInit();

    ambientVideoInit();
    initSmoothAnchors();
    exposedFilter();
    stickyHeaderInit();

    Drupal.behaviors.nhmla_theme_behavior = {
        attach: function attach(context, settings) {
            exposedFilter();
            fancyFormsInit($, context);
            initStepWatcher($, context);
        },
        detach: function detach(context, settings) {}
    };
}
)(jQuery, Drupal, drupalSettings);

;