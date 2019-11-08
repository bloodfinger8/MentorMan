(function() {
    var l;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }

    function ba(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function ca(a) {
        if (!(a instanceof Array)) {
            a = ba(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var da = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ea;
    if ("function" == typeof Object.setPrototypeOf) ea = Object.setPrototypeOf;
    else {
        var fa;
        a: {
            var ha = {
                    Ka: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                fa = ia.Ka;
                break a
            } catch (a) {}
            fa = !1
        }
        ea = fa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = ea;

    function ka(a, b) {
        a.prototype = da(b.prototype);
        a.prototype.constructor = a;
        if (ja) ja(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    }
    var la = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ma = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function na(a, b) {
        if (b) {
            var c = ma;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && la(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    na("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    });
    na("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    na("Object.assign", function(a) {
        return a || oa
    });
    var p = this || self;

    function qa() {
        if (null === ra) a: {
            var a = p.document;
            if ((a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && sa.test(a)) {
                ra = a;
                break a
            }
            ra = ""
        }
        return ra
    }
    var sa = /^[\w+/_-]+[=]{0,2}$/,
        ra = null;

    function ta(a) {
        a = a.split(".");
        for (var b = p, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ua() {}

    function va(a) {
        a.ma = void 0;
        a.j = function() {
            return a.ma ? a.ma : a.ma = new a
        }
    }

    function wa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function xa(a) {
        return null === a
    }

    function ya(a) {
        return "array" == wa(a)
    }

    function za(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function Aa(a) {
        return a[Ba] || (a[Ba] = ++Ca)
    }
    var Ba = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ca = 0;

    function Da(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ea(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Fa(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Fa = Da : Fa = Ea;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function q(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var Ha = (new Date).getTime();

    function Ia(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ja(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            } return d
    }

    function Ka(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function La(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ma(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Na(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Oa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    } a = -1
            }return 0 <= a
    };

    function Pa() {
        return function() {
            return !xa.apply(this, arguments)
        }
    }

    function Qa(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Ra(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function Sa(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Ta(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Ua(a, b) {
        return null !== a && b in a
    }

    function Va(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };

    function Wa(a, b) {
        this.c = a === Xa && b || "";
        this.g = Ya
    }
    Wa.prototype.b = !0;
    Wa.prototype.a = function() {
        return this.c.toString()
    };

    function Za(a) {
        if (a instanceof Wa && a.constructor === Wa && a.g === Ya) return a.c;
        wa(a);
        return "type_error:TrustedResourceUrl"
    }
    var Ya = {},
        Xa = {};

    function $a(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var ab = /&/g,
        bb = /</g,
        cb = />/g,
        db = /"/g,
        eb = /'/g,
        fb = /\x00/g;

    function gb(a, b) {
        return -1 != a.indexOf(b)
    }

    function hb(a, b) {
        var c = 0;
        a = $a(String(a)).split(".");
        b = $a(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = ib(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ib(0 == f[2].length, 0 == g[2].length) || ib(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function ib(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function jb(a, b) {
        this.c = a === kb && b || "";
        this.g = lb
    }
    jb.prototype.b = !0;
    jb.prototype.a = function() {
        return this.c.toString()
    };

    function mb(a) {
        if (a instanceof jb && a.constructor === jb && a.g === lb) return a.c;
        wa(a);
        return "type_error:SafeUrl"
    }
    var nb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        lb = {},
        kb = {};
    var ob;
    a: {
        var pb = p.navigator;
        if (pb) {
            var qb = pb.userAgent;
            if (qb) {
                ob = qb;
                break a
            }
        }
        ob = ""
    }

    function r(a) {
        return gb(ob, a)
    }

    function rb(a) {
        for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };

    function sb() {
        return (r("Chrome") || r("CriOS")) && !r("Edge")
    }

    function tb() {
        function a(e) {
            e = Ma(e, d);
            return c[e] || ""
        }
        var b = ob;
        if (r("Trident") || r("MSIE")) return ub(b);
        b = rb(b);
        var c = {};
        Ia(b, function(e) {
            c[e[0]] = e[1]
        });
        var d = Ga(Ua, c);
        return r("Opera") ? a(["Version", "Opera"]) : r("Edge") ? a(["Edge"]) : r("Edg/") ? a(["Edg"]) : sb() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || ""
    }

    function ub(a) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) return b[1];
        b = "";
        var c = /MSIE +([\d\.]+)/.exec(a);
        if (c && c[1])
            if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                if (a && a[1]) switch (a[1]) {
                    case "4.0":
                        b = "8.0";
                        break;
                    case "5.0":
                        b = "9.0";
                        break;
                    case "6.0":
                        b = "10.0";
                        break;
                    case "7.0":
                        b = "11.0"
                } else b = "7.0";
                else b = c[1];
        return b
    };

    function vb(a, b) {
        a.src = Za(b);
        (b = qa()) && a.setAttribute("nonce", b)
    };
    var xb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        yb = {
            "'": "\\'"
        };

    function zb(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function Ab(a) {
        Ab[" "](a);
        return a
    }
    Ab[" "] = ua;

    function w() {}
    var Bb = "function" == typeof Uint8Array;

    function x(a, b, c, d) {
        a.a = null;
        b || (b = []);
        a.A = void 0;
        a.g = -1;
        a.b = b;
        a: {
            if (b = a.b.length) {
                --b;
                var e = a.b[b];
                if (!(null === e || "object" != typeof e || ya(e) || Bb && e instanceof Uint8Array)) {
                    a.i = b - a.g;
                    a.c = e;
                    break a
                }
            }
            a.i = Number.MAX_VALUE
        }
        a.o = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.i ? (e += a.g, a.b[e] = a.b[e] || Cb) : (Db(a), a.c[e] = a.c[e] || Cb);
        if (d && d.length)
            for (b = 0; b < d.length; b++) Eb(a, d[b])
    }
    var Cb = [];

    function Db(a) {
        var b = a.i + a.g;
        a.b[b] || (a.c = a.b[b] = {})
    }

    function y(a, b) {
        if (b < a.i) {
            b += a.g;
            var c = a.b[b];
            return c === Cb ? a.b[b] = [] : c
        }
        if (a.c) return c = a.c[b], c === Cb ? a.c[b] = [] : c
    }

    function Fb(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function Gb(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function z(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function Hb(a, b) {
        a = Gb(a, b);
        return null == a ? !1 : a
    }

    function Ib(a, b) {
        a = Fb(a, b);
        return null == a ? 0 : a
    }

    function Jb(a, b, c) {
        b < a.i ? a.b[b + a.g] = c : (Db(a), a.c[b] = c);
        return a
    }

    function Eb(a, b) {
        for (var c, d, e = 0; e < b.length; e++) {
            var f = b[e],
                g = y(a, f);
            null != g && (c = f, d = g, Jb(a, f, void 0))
        }
        return c ? (Jb(a, c, d), c) : 0
    }

    function A(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            var d = y(a, c);
            d && (a.a[c] = new b(d))
        }
        return a.a[c]
    }

    function B(a, b, c) {
        a.a || (a.a = {});
        if (!a.a[c]) {
            for (var d = y(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.a[c] = e
        }
        b = a.a[c];
        b == Cb && (b = a.a[c] = []);
        return b
    }

    function Kb(a) {
        if (a.a)
            for (var b in a.a) {
                var c = a.a[b];
                if (ya(c))
                    for (var d = 0; d < c.length; d++) c[d] && Kb(c[d]);
                else c && Kb(c)
            }
        return a.b
    };

    function Lb(a) {
        x(this, a, Mb, null)
    }
    q(Lb, w);

    function Nb(a) {
        x(this, a, null, null)
    }
    q(Nb, w);
    var Mb = [2, 3];

    function Ob(a) {
        x(this, a, null, null)
    }
    q(Ob, w);

    function Pb(a) {
        var b = new Ob;
        return Jb(b, 1, a)
    }

    function Qb(a, b) {
        return Jb(a, 2, b)
    }

    function Rb(a, b) {
        return Jb(a, 3, b)
    }

    function Sb(a, b) {
        return Jb(a, 4, b)
    };
    var Tb = document,
        D = window;
    var Ub = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function Vb(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function Wb() {
        this.a = D.document || {
            cookie: ""
        }
    }
    Wb.prototype.set = function(a, b, c, d, e, f) {
        if ("object" === typeof c) {
            var g = c.c;
            f = c.g;
            e = c.domain;
            d = c.a;
            c = c.b
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === c && (c = -1);
        this.a.cookie = a + "=" + b + (e ? ";domain=" + e : "") + (d ? ";path=" + d : "") + (0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(+new Date + 1E3 * c)).toUTCString()) + (f ? ";secure" : "") + (null != g ? ";samesite=" + g : "")
    };
    Wb.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.a.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = $a(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };

    function Xb(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Yb(a) {
        this.a = a || p.document || document
    }
    Yb.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function Zb(a) {
        $b();
        return new Wa(Xa, a)
    }
    var $b = ua;

    function ac() {
        return !bc() && (r("iPod") || r("iPhone") || r("Android") || r("IEMobile"))
    }

    function bc() {
        return r("iPad") || r("Android") && !r("Mobile") || r("Silk")
    };

    function cc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ab(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function dc(a) {
        for (var b = p, c = 0; b && 40 > c++ && (!cc(b) || !a(b));) a: {
            try {
                var d = b.parent;
                if (d && d != b) {
                    b = d;
                    break a
                }
            } catch (e) {}
            b = null
        }
    }

    function ec() {
        var a = p;
        dc(function(b) {
            a = b;
            return !1
        });
        return a
    }

    function fc(a, b) {
        var c = a.createElement("script");
        vb(c, Zb(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function gc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function hc(a, b, c) {
        var d = !1;
        void 0 === c || c || (d = ic());
        return !d && !jc() && (c = Math.random(), c < b) ? (c = kc(p), a[Math.floor(c * a.length)]) : null
    }

    function kc(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }

    function lc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function mc(a) {
        return Va(a, function(b, c) {
            return Object.prototype.hasOwnProperty.call(a, c) && !0
        })
    }

    function nc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var jc = Qa(function() {
        return La(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], oc) || 1E-4 > Math.random()
    });

    function pc(a, b) {
        var c = -1;
        try {
            a.localStorage && (c = parseInt(a.localStorage.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function qc(a, b) {
        if (jc()) return null;
        var c = Math.floor(1E3 * kc(a));
        try {
            if (a.localStorage) return a.localStorage.setItem(b, String(c)), c
        } catch (d) {}
        return null
    }
    var ic = Qa(function() {
        return oc("MSIE")
    });

    function oc(a) {
        return gb(ob, a)
    }
    var rc = /^([0-9.]+)px$/,
        sc = /^(-?[0-9.]{1,30})$/;

    function tc(a) {
        return sc.test(a) && (a = Number(a), !isNaN(a)) ? a : null
    }

    function uc(a, b) {
        return b ? !/^false$/.test(a) : /^true$/.test(a)
    }

    function E(a) {
        return (a = rc.exec(a)) ? +a[1] : null
    }
    var vc = Qa(function() {
        return ac() ? 2 : bc() ? 1 : 0
    });

    function wc(a) {
        var b = {
            display: "none"
        };
        a.style.setProperty ? lc(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = xc(yc(zc(a.style.cssText), Ac(b, function(c) {
            return c + " !important"
        })))
    }
    var yc = Object.assign || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };

    function Ac(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    }

    function xc(a) {
        var b = [];
        lc(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    }

    function zc(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            Ia((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    }
    var Bc = Qa(function() {
        var a = /Edge\/([^. ]+)/.exec(navigator.userAgent);
        return a ? 18 <= parseInt(a[1], 10) : (a = /Chrome\/([^. ]+)/.exec(navigator.userAgent)) ? 71 <= parseInt(a[1], 10) : (a = /AppleWebKit\/([^. ]+)/.exec(navigator.userAgent)) ? 605 <= parseInt(a[1], 10) : (a = /Firefox\/([^. ]+)/.exec(navigator.userAgent)) ? 64 <= parseInt(a[1], 10) : !1
    });

    function Cc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function Dc(a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function(e) {
                b && b(e);
                c.removeEventListener && c.removeEventListener("load", d, !1);
                c.removeEventListener && c.removeEventListener("error", d, !1)
            };
            Cc(c, "load", d);
            Cc(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    };

    function Ec(a, b) {
        a = parseInt(a, 10);
        return isNaN(a) ? b : a
    }
    var Fc = /^([\w-]+\.)*([\w-]{2,})(:[0-9]+)?$/;

    function Gc(a, b) {
        return a ? (a = a.match(Fc)) ? a[0] : b : b
    };

    function Hc() {
        return "r20191104"
    }
    var Ic = uc("false", !1),
        Jc = uc("false", !1),
        Kc = uc("false", !1),
        Lc = uc("true", !1) || !Jc;

    function Mc() {
        return Gc("", "pagead2.googlesyndication.com")
    };

    function Nc(a) {
        x(this, a, Oc, Pc)
    }
    q(Nc, w);
    var Oc = [2, 8],
        Pc = [
            [3, 4, 5],
            [6, 7]
        ];

    function Qc(a) {
        return null != a ? !a : a
    }

    function Rc(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d].call();
            if (e == b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Sc(a, b) {
        var c = B(a, Nc, 2);
        if (!c.length) return Tc(a, b);
        a = z(a, 1, 0);
        if (1 == a) return Qc(Sc(c[0], b));
        c = Ka(c, function(d) {
            return function() {
                return Sc(d, b)
            }
        });
        switch (a) {
            case 2:
                return Rc(c, !1);
            case 3:
                return Rc(c, !0)
        }
    }

    function Tc(a, b) {
        var c = Eb(a, Pc[0]);
        a: {
            switch (c) {
                case 3:
                    var d = z(a, 3, 0);
                    break a;
                case 4:
                    d = z(a, 4, 0);
                    break a;
                case 5:
                    d = z(a, 5, 0);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, y(a, 8))
            } catch (f) {
                return
            }
            b = z(a, 1, 0);
            if (4 == b) return !!e;
            d = null != e;
            if (5 == b) return d;
            if (12 == b) a = z(a, 7, "");
            else a: {
                switch (c) {
                    case 4:
                        a = Ib(a, 6);
                        break a;
                    case 5:
                        a = z(a, 7, "");
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 == b) return e === a;
                if (9 == b) return 0 == hb(e, a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return (new RegExp(a)).test(e);
                    case 10:
                        return -1 == hb(e, a);
                    case 11:
                        return 1 == hb(e, a)
                }
            }
        }
    }

    function Uc(a, b) {
        return !a || !(!b || !Sc(a, b))
    };

    function Vc(a) {
        x(this, a, Wc, null)
    }
    q(Vc, w);
    var Wc = [4];

    function Xc(a) {
        x(this, a, Yc, Zc)
    }
    q(Xc, w);

    function $c(a) {
        x(this, a, null, null)
    }
    q($c, w);
    var Yc = [5],
        Zc = [
            [1, 2, 3, 6]
        ];

    function ad() {
        var a = {};
        this.a = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    }
    va(ad);
    var bd = uc("false", !1);

    function cd(a, b) {
        switch (b) {
            case 1:
                return z(a, 1, 0);
            case 2:
                return z(a, 2, 0);
            case 3:
                return z(a, 3, 0);
            case 6:
                return z(a, 6, 0);
            default:
                return null
        }
    }

    function dd(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Hb(a, 1);
            case 2:
                return Ib(a, 2);
            case 3:
                return z(a, 3, "");
            case 6:
                return y(a, 4);
            default:
                return null
        }
    }
    var ed = Qa(function() {
        if (!bd) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function fd(a, b, c, d) {
        d = void 0 === d ? 0 : d;
        var e = ed();
        if (e[a] && null != e[a][b]) return e[a][b];
        b = gd(d)[a][b];
        if (!b) return c;
        b = new Xc(b);
        b = hd(b);
        a = dd(b, a);
        return null != a ? a : c
    }

    function hd(a) {
        var b = ad.j().a;
        if (b) {
            var c = Na(B(a, $c, 5), function(d) {
                return Uc(A(d, Nc, 1), b)
            });
            if (c) return A(c, Vc, 2)
        }
        return A(a, Vc, 4)
    }

    function id() {
        this.a = {};
        this.b = []
    }
    va(id);

    function jd(a, b, c) {
        return !!fd(1, a, void 0 === b ? !1 : b, c)
    }

    function kd(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(fd(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function ld(a, b, c) {
        return fd(3, a, void 0 === b ? "" : b, c)
    }

    function md(a, b, c) {
        b = void 0 === b ? [] : b;
        return fd(6, a, b, c)
    }

    function gd(a) {
        var b = {};
        return id.j().a[a] || (id.j().a[a] = (b[1] = {}, b[2] = {}, b[3] = {}, b[6] = {}, b))
    }

    function nd(a, b) {
        var c = gd(b);
        lc(a, function(d, e) {
            return lc(d, function(f, g) {
                return c[e][g] = f
            })
        })
    }

    function od(a, b) {
        var c = gd(b);
        Ia(a, function(d) {
            var e = Eb(d, Zc[0]),
                f = cd(d, e);
            f && (c[e][f] = Kb(d))
        })
    }

    function pd(a, b) {
        var c = gd(b);
        Ia(a, function(d) {
            var e = new Xc(d),
                f = Eb(e, Zc[0]);
            (e = cd(e, f)) && (c[f][e] || (c[f][e] = d))
        })
    }

    function qd() {
        return Ka(Object.keys(id.j().a), function(a) {
            return Number(a)
        })
    }

    function rd(a) {
        Oa(id.j().b, a) || nd(gd(4), a)
    };

    function F(a) {
        this.a = a
    }
    var sd = new F(1),
        td = new F(15),
        ud = new F(2),
        vd = new F(3),
        wd = new F(4),
        xd = new F(5),
        yd = new F(6),
        zd = new F(7),
        Ad = new F(8),
        Bd = new F(9),
        Cd = new F(10),
        Dd = new F(11),
        Ed = new F(12),
        Fd = new F(13),
        Gd = new F(14);

    function G(a, b, c) {
        c.hasOwnProperty(a.a) || Object.defineProperty(c, String(a.a), {
            value: b
        })
    }

    function Hd(a, b, c) {
        return b[a.a] || c || function() {}
    }

    function Id(a) {
        G(xd, jd, a);
        G(yd, kd, a);
        G(zd, ld, a);
        G(Ad, md, a);
        G(Fd, pd, a);
        G(td, rd, a)
    }

    function Jd(a) {
        G(wd, function(b) {
            ad.j().a = b
        }, a);
        G(Bd, function(b, c) {
            var d = ad.j();
            d.a[3][b] || (d.a[3][b] = c)
        }, a);
        G(Cd, function(b, c) {
            var d = ad.j();
            d.a[4][b] || (d.a[4][b] = c)
        }, a);
        G(Dd, function(b, c) {
            var d = ad.j();
            d.a[5][b] || (d.a[5][b] = c)
        }, a);
        G(Gd, function(b) {
            for (var c = ad.j(), d = ba([3, 4, 5]), e = d.next(); !e.done; e = d.next()) {
                var f = e.value;
                e = void 0;
                var g = c.a[f];
                f = b[f];
                for (e in f) g[e] = f[e]
            }
        }, a)
    }

    function Kd(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Ld() {
        this.b = function() {
            return !1
        };
        this.a = function() {}
    }

    function Md(a, b, c) {
        a.b = function(d, e) {
            return Hd(xd, b)(d, e, c)
        };
        a.a = function() {
            Hd(td, b)(c)
        }
    }
    va(Ld);

    function H(a) {
        var b = void 0 === b ? !1 : b;
        return Ld.j().b(a, b)
    };

    function Nd(a) {
        a = void 0 === a ? p : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Od(a) {
        return (a = a || Nd()) ? cc(a.master) ? a.master : null : null
    };

    function Pd(a, b) {
        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Qd(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Rd(a) {
        a = Od(Nd(a)) || a;
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 1
    }

    function Sd(a) {
        a = Od(Nd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var Td = !!window.google_async_iframe_id,
        Ud = Td && window.parent || window;

    function Vd() {
        if (Td && !cc(Ud)) {
            var a = "." + Tb.domain;
            try {
                for (; 2 < a.split(".").length && !cc(Ud);) Tb.domain = a = a.substr(a.indexOf(".") + 1), Ud = window.parent
            } catch (b) {}
            cc(Ud) || (Ud = window)
        }
        return Ud
    }
    var Wd = /(^| )adsbygoogle($| )/;

    function Xd(a) {
        return Ic && a.google_top_window || a.top
    }

    function Yd(a) {
        a = Xd(a);
        return cc(a) ? a : null
    };

    function I(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function K(a, b) {
        a: if (a = I(a).eids || [], a.indexOf) b = a.indexOf(b), b = 0 < b || 0 === b;
            else {
                for (var c = 0; c < a.length; c++)
                    if (a[c] === b) {
                        b = !0;
                        break a
                    } b = !1
            }return b
    }

    function Zd(a, b) {
        a = I(a);
        a.tag_partners = a.tag_partners || [];
        a.tag_partners.push(b)
    }

    function $d(a) {
        I(D).allow_second_reactive_tag = a
    }

    function ae(a, b, c) {
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c) return a[d];
        return null
    };
    var be = {},
        ce = (be.google_ad_client = !0, be.google_ad_host = !0, be.google_ad_host_channel = !0, be.google_adtest = !0, be.google_tag_for_child_directed_treatment = !0, be.google_tag_for_under_age_of_consent = !0, be.google_tag_partner = !0, be);

    function L(a) {
        x(this, a, de, null)
    }
    q(L, w);
    var de = [4];
    L.prototype.Y = function() {
        return y(this, 3)
    };

    function M(a) {
        x(this, a, null, null)
    }
    q(M, w);

    function ee(a) {
        x(this, a, null, fe)
    }
    q(ee, w);

    function ge(a) {
        x(this, a, null, null)
    }
    q(ge, w);

    function he(a) {
        x(this, a, null, null)
    }
    q(he, w);

    function ie(a) {
        x(this, a, null, null)
    }
    q(ie, w);
    var fe = [
        [1, 2, 3]
    ];

    function je(a) {
        x(this, a, null, null)
    }
    q(je, w);

    function ke(a) {
        x(this, a, null, null)
    }
    q(ke, w);

    function le(a) {
        x(this, a, me, null)
    }
    q(le, w);
    var me = [6, 7, 9, 10, 11];

    function ne(a) {
        x(this, a, oe, null)
    }
    q(ne, w);

    function pe(a) {
        x(this, a, null, null)
    }
    q(pe, w);

    function qe(a) {
        x(this, a, re, null)
    }
    q(qe, w);

    function se(a) {
        x(this, a, null, null)
    }
    q(se, w);

    function te(a) {
        x(this, a, null, null)
    }
    q(te, w);

    function ue(a) {
        x(this, a, null, null)
    }
    q(ue, w);

    function ve(a) {
        x(this, a, null, null)
    }
    q(ve, w);
    var oe = [1, 2, 5, 7],
        re = [2, 5, 6];
    var we = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function xe(a, b) {
        a = a.replace(/(^\/)|(\/$)/g, "");
        var c = nc(a),
            d = ye(a);
        return b.find(function(e) {
            var f = null != y(e, 7) ? y(A(e, se, 7), 1) : y(e, 1);
            e = null != y(e, 7) ? y(A(e, se, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function ye(a) {
        for (var b = {};;) {
            b[nc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };

    function ze(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Ae(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Be = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function Ce(a, b) {
        this.a = a;
        this.b = b
    }

    function De(a, b, c) {
        this.url = a;
        this.a = b;
        this.ya = !!c;
        this.depth = null
    };

    function Ee() {
        this.c = "&";
        this.g = !1;
        this.b = {};
        this.i = 0;
        this.a = []
    }

    function Fe(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Ge(a, b, c, d, e) {
        var f = [];
        lc(a, function(g, h) {
            (g = He(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function He(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(He(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Ge(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ie(a, b, c, d) {
        a.a.push(b);
        a.b[b] = Fe(c, d)
    }

    function Je(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ke(a) - c.length;
        if (0 > d) return "";
        a.a.sort(function(m, t) {
            return m - t
        });
        c = null;
        for (var e = "", f = 0; f < a.a.length; f++)
            for (var g = a.a[f], h = a.b[g], k = 0; k < h.length; k++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var n = Ge(h[k], a.c, ",$");
                if (n) {
                    n = e + n;
                    if (d >= n.length) {
                        d -= n.length;
                        b += n;
                        e = a.c;
                        break
                    }
                    a.g && (e = d, n[e - 1] == a.c && --e, b += n.substr(0, e), e = a.c, d = 0);
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ke(a) {
        var b = 1,
            c;
        for (c in a.b) b = c.length > b ? c.length : b;
        return 3997 - b - a.c.length - 1
    };

    function Le() {
        var a = void 0 === a ? D : a;
        this.b = "http:" === a.location.protocol ? "http:" : "https:";
        this.a = Math.random()
    }

    function Me() {
        var a = Ne,
            b = Oe.google_srt;
        0 <= b && 1 >= b && (a.a = b)
    }

    function Pe(a, b, c, d, e, f) {
        if ((d ? a.a : Math.random()) < (e || .01)) try {
            if (c instanceof Ee) var g = c;
            else g = new Ee, lc(c, function(k, n) {
                var m = g,
                    t = m.i++;
                k = Fe(n, k);
                m.a.push(t);
                m.b[t] = k
            });
            var h = Je(g, a.b, "/pagead/gen_204?id=" + b + "&");
            h && ("undefined" === typeof f ? Dc(h, null) : Dc(h, void 0 === f ? null : f))
        } catch (k) {}
    };

    function Qe(a, b) {
        this.start = a < b ? a : b;
        this.a = a < b ? b : a
    };

    function Re(a, b, c) {
        this.b = b >= a ? new Qe(a, b) : null;
        this.a = c
    }

    function Se(a, b) {
        b = void 0 === b ? 0 : b;
        b = 0 != b ? "google_experiment_mod" + b : "google_experiment_mod";
        var c = pc(a, b);
        return null != c ? c : qc(a, b)
    };
    var Te = null;

    function Ue() {
        if (null === Te) {
            Te = "";
            try {
                var a = "";
                try {
                    a = p.top.location.hash
                } catch (c) {
                    a = p.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Te = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Te
    };

    function Ve() {
        var a = p.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : +new Date
    }

    function We() {
        var a = void 0 === a ? p : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Xe(a, b, c) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Ye = p.performance,
        Ze = !!(Ye && Ye.mark && Ye.measure && Ye.clearMarks),
        $e = Qa(function() {
            var a;
            if (a = Ze) a = Ue(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function af() {
        var a = Oe;
        this.b = [];
        this.c = a || p;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.b = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.a = $e() || (null != b ? b : 1 > Math.random())
    }

    function bf(a) {
        a && Ye && $e() && (Ye.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Ye.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    af.prototype.start = function(a, b) {
        if (!this.a) return null;
        var c = We() || Ve();
        a = new Xe(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Ye && $e() && Ye.mark(b);
        return a
    };

    function cf() {
        var a = df;
        this.o = Ne;
        this.c = !0;
        this.b = null;
        this.i = this.M;
        this.a = void 0 === a ? null : a;
        this.g = !1
    }
    l = cf.prototype;
    l.Fa = function(a) {
        this.i = a
    };
    l.na = function(a) {
        this.b = a
    };
    l.Ga = function(a) {
        this.c = a
    };
    l.Ha = function(a) {
        this.g = a
    };
    l.ga = function(a, b, c) {
        try {
            if (this.a && this.a.a) {
                var d = this.a.start(a.toString(), 3);
                var e = b();
                var f = this.a;
                b = d;
                if (f.a && "number" === typeof b.value) {
                    var g = We() || Ve();
                    b.duration = g - b.value;
                    var h = "goog_" + b.label + "_" + b.uniqueId + "_end";
                    Ye && $e() && Ye.mark(h);
                    !f.a || 2048 < f.b.length || f.b.push(b)
                }
            } else e = b()
        } catch (k) {
            f = this.c;
            try {
                bf(d), f = this.i(a, new ze(k, {
                    message: ef(k)
                }), void 0, c)
            } catch (n) {
                this.M(217, n)
            }
            if (!f) throw k;
        }
        return e
    };
    l.Ba = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ga(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    l.M = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new Ee;
            f.g = !0;
            Ie(f, 1, "context", a);
            Ae(b) || (b = new ze(b, {
                message: ef(b)
            }));
            b.msg && Ie(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.b) try {
                this.b(g)
            } catch (pa) {}
            if (d) try {
                d(g)
            } catch (pa) {}
            b = [g];
            f.a.push(3);
            f.b[3] = b;
            d = p;
            b = [];
            g = null;
            do {
                var h = d;
                if (cc(h)) {
                    var k = h.location.href;
                    g = h.document && h.document.referrer || null
                } else k = g, g = null;
                b.push(new De(k || "", h));
                try {
                    d = h.parent
                } catch (pa) {
                    d = null
                }
            } while (d && h != d);
            k = 0;
            for (var n = b.length - 1; k <= n; ++k) b[k].depth = n - k;
            h = p;
            if (h.location && h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                for (n = 1; n < b.length; ++n) {
                    var m = b[n];
                    m.url || (m.url = h.location.ancestorOrigins[n - 1] || "", m.ya = !0)
                }
            var t = new De(p.location.href, p, !1);
            h = null;
            var u = b.length - 1;
            for (m = u; 0 <= m; --m) {
                var v = b[m];
                !h && Be.test(v.url) && (h = v);
                if (v.url && !v.ya) {
                    t = v;
                    break
                }
            }
            v = null;
            var J = b.length && b[u].url;
            0 != t.depth && J && (v = b[u]);
            var C = new Ce(t, v);
            C.b && Ie(f, 4, "top", C.b.url || "");
            Ie(f, 5, "url", C.a.url || "");
            Pe(this.o, e, f, this.g, c)
        } catch (pa) {
            try {
                Pe(this.o, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ef(pa),
                    url: C && C.a.url
                }, this.g, c)
            } catch (wb) {}
        }
        return this.c
    };

    function ef(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };

    function N(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, N) : this.stack = Error().stack || ""
    }
    ka(N, Error);

    function ff() {
        this.b = !1;
        this.a = null;
        this.g = !1;
        this.i = Math.random();
        this.c = this.M
    }
    l = ff.prototype;
    l.na = function(a) {
        this.a = a
    };
    l.Ga = function(a) {
        this.b = a
    };
    l.Ha = function(a) {
        this.g = a
    };
    l.Fa = function(a) {
        this.c = a
    };
    l.M = function(a, b, c, d, e) {
        if ((this.g ? this.i : Math.random()) > (void 0 === c ? .01 : c)) return this.b;
        Ae(b) || (b = new ze(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.a) b.meta = {}, this.a && this.a(b.meta), d && d(b.meta);
        p.google_js_errors = p.google_js_errors || [];
        p.google_js_errors.push(b);
        p.error_rep_loaded || (fc(p.document, p.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), p.error_rep_loaded = !0);
        return this.b
    };
    l.ga = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.c(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    l.Ba = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            return e.ga(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Ne, gf, hf, Oe = Vd(),
        df = new af;

    function jf(a) {
        null != a && (Oe.google_measure_js_timing = a);
        Oe.google_measure_js_timing || (a = df, a.a = !1, a.b != a.c.google_js_reporting_queue && ($e() && Ia(a.b, bf), a.b.length = 0))
    }

    function kf(a) {
        var b = D.jerExpIds;
        if (ya(b) && 0 !== b.length) {
            var c = a.eid;
            if (c) {
                b = ca(c.split(",")).concat(ca(b));
                c = {};
                for (var d = 0, e = 0; e < b.length;) {
                    var f = b[e++];
                    var g = f;
                    g = za(g) ? "o" + Aa(g) : (typeof g).charAt(0) + g;
                    Object.prototype.hasOwnProperty.call(c, g) || (c[g] = !0, b[d++] = f)
                }
                b.length = d;
                a.eid = b.join(",")
            } else a.eid = b.join(",")
        }
    }

    function lf(a) {
        var b = D.jerUserAgent;
        b && (a.useragent = b)
    }(function() {
        Ne = new Le;
        "number" !== typeof Oe.google_srt && (Oe.google_srt = Math.random());
        Me();
        gf = new cf;
        gf.na(function(b) {
            kf(b);
            hf && (b.jc = hf);
            lf(b)
        });
        gf.Ha(!0);
        "complete" == Oe.document.readyState ? jf() : df.a && Cc(Oe, "load", function() {
            jf()
        });
        var a = Tb.currentScript;
        hf = a ? a.dataset.jc : ""
    })();

    function mf() {
        var a = [nf, of ];
        gf.na(function(b) {
            Ia(a, function(c) {
                c(b)
            });
            kf(b);
            hf && (b.jc = hf);
            lf(b)
        })
    }

    function pf(a, b, c) {
        return gf.ga(a, b, c)
    }

    function qf(a, b) {
        return gf.Ba(a, b, void 0, void 0)
    }

    function rf(a, b, c) {
        Pe(Ne, a, b, !0, c, void 0)
    }

    function sf(a, b, c, d) {
        return 0 == (Ae(b) ? b.msg || ef(b.error) : ef(b)).indexOf("TagError") ? (c = b instanceof ze ? b.error : b, c.pbr || (c.pbr = !0, gf.M(a, b, .1, d, "puberror")), !1) : gf.M(a, b, c, d)
    }

    function tf(a) {
        rf("rmvasft", {
            code: "ldr",
            branch: a ? "exp" : "cntr"
        })
    };

    function uf(a, b) {
        this.va = a;
        this.Ca = b
    }

    function vf(a) {
        var b = [].slice.call(arguments).filter(Pa());
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.va || []);
            d = Object.assign(d, e.Ca)
        });
        return new uf(c, d)
    }

    function wf(a) {
        switch (a) {
            case 1:
                return new uf(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new uf(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new uf(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new uf(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    };
    var xf = new uf(["google-auto-placed"], {
        google_tag_origin: "qs"
    });
    var yf = {},
        zf = (yf.google_ad_channel = !0, yf.google_ad_host = !0, yf);

    function Af(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        rf("ama", b, .01)
    }

    function Bf(a) {
        var b = {};
        lc(zf, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };
    var Cf = Ec("2019", 2012);

    function Df(a, b, c) {
        c || (c = Lc ? "https" : "http");
        p.location && "https:" == p.location.protocol && "http" == c && (c = "https");
        return [c, "://", a, b].join("")
    }

    function Ef(a, b, c) {
        a = Df(a, b, c);
        H(182) && 2012 < Cf && (a = a.replace(new RegExp(".js".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), ("_fy" + Cf + ".js").replace(/\$/g, "$$$$")));
        H(202) && (a += (0 < a.indexOf("?") ? "&" : "?") + "cache=bust");
        return a
    };
    var Ff = null;

    function Gf() {
        if (!Ic) return !1;
        if (null != Ff) return Ff;
        Ff = !1;
        try {
            var a = Yd(p);
            a && -1 != a.location.hash.indexOf("google_logging") && (Ff = !0);
            p.localStorage.getItem("google_logging") && (Ff = !0)
        } catch (b) {}
        return Ff
    }

    function Hf(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        p.google_logging_queue || (c = !0, p.google_logging_queue = []);
        p.google_logging_queue.push([a, b]);
        c && Gf() && (a = Ef(Mc(), "/pagead/js/logging_library.js"), fc(p.document, a))
    };

    function If(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c
    }

    function Jf(a, b, c) {
        return {
            top: a.b - c,
            right: a.a + a.c + b,
            bottom: a.b + c,
            left: a.a - b
        }
    };

    function Kf(a) {
        x(this, a, null, null)
    }
    q(Kf, w);

    function Lf(a) {
        x(this, a, null, null)
    }
    q(Lf, w);

    function Mf(a) {
        x(this, a, null, null)
    }
    q(Mf, w);

    function Nf(a) {
        x(this, a, Of, null)
    }
    q(Nf, w);
    var Of = [5];

    function Pf(a) {
        try {
            var b = a.localStorage.getItem("google_ama_settings");
            return b ? new Nf(b ? JSON.parse(b) : null) : null
        } catch (c) {
            return null
        }
    };

    function Qf() {
        this.a = {};
        this.b = {}
    }
    Qf.prototype.set = function(a, b) {
        this.a[a] = b;
        this.b[a] = a
    };
    Qf.prototype.get = function(a, b) {
        return void 0 !== this.a[a] ? this.a[a] : b
    };
    var Rf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function Sf() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.improveCollisionDetection = 1;
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Tf
    }

    function Uf(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Tf) : a.google_reactive_ads_global_state = new Sf;
        return a.google_reactive_ads_global_state
    }

    function Tf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Vf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function O(a) {
        return Vf(a).clientWidth
    };

    function Wf(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = E(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function Xf(a, b) {
        return !((sc.test(b.google_ad_width) || rc.test(a.style.width)) && (sc.test(b.google_ad_height) || rc.test(a.style.height)))
    }

    function Yf(a, b) {
        return (a = Zf(a, b)) ? a.y : 0
    }

    function Zf(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function $f(a, b) {
        do {
            var c = gc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    }

    function ag(a) {
        var b = 0,
            c;
        for (c in Rf) - 1 != a.indexOf(c) && (b |= Rf[c]);
        return b
    }

    function bg(a, b, c, d, e) {
        if (Xd(a) != a) return Yd(a) ? 3 : 16;
        if (!(488 > O(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = O(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = O(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = gc(b, a)) && (e = E(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    } c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function cg(a, b, c, d) {
        var e = bg(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || $f(c, b) ? dg(b) ? a = !0 : (b = O(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function eg(a, b, c) {
        "rtl" == b ? a.style.marginRight = c : a.style.marginLeft = c
    }

    function fg(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = gc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function gg(a, b) {
        for (var c = 0; 100 > c && b.parentElement; ++c) {
            for (var d = b.parentElement.childNodes, e = 0; e < d.length; ++e) {
                var f = d[e];
                if (f != b && fg(a, f)) return
            }
            b = b.parentElement;
            b.style.width = "100%";
            b.style.height = "auto"
        }
    }

    function hg(a, b, c) {
        a = Zf(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function ig(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = gc(c, a)) ? c.direction : "" : "";
        if (c) {
            H(224) && (b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0");
            eg(b, c, "0px");
            b.style.width = O(a) + "px";
            if (0 !== hg(a, b, c)) {
                eg(b, c, "0px");
                var d = hg(a, b, c);
                eg(b, c, -1 * d + "px");
                a = hg(a, b, c);
                0 !== a && a !== d && eg(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }

    function dg(a) {
        return H(233) || a.location && "#bffwroe2etoq" == a.location.hash
    };

    function P(a, b) {
        this.b = a;
        this.a = b
    }
    l = P.prototype;
    l.minWidth = function() {
        return this.b
    };
    l.height = function() {
        return this.a
    };
    l.U = function(a) {
        return 300 < a && 300 < this.a ? this.b : Math.min(1200, Math.round(a))
    };
    l.ka = function(a) {
        return this.U(a) + "x" + this.height()
    };
    l.fa = function() {};

    function Q(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = gc(a, b)) && e[c] && d(e[c]) || null
    }

    function jg(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function kg(a, b, c, d) {
        var e = a && lg(c, b),
            f = mg(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function ng(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function lg(a, b) {
        return Yf(a, b) < Vf(b).clientHeight - 100
    }

    function og(a, b) {
        a = Yf(a, b);
        b = Vf(b).clientHeight;
        return 0 == b ? null : a / b
    }

    function pg(a, b) {
        var c = Q(b, a, "height", E);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Q(b, a, "height", E);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && E(b.style.height)) && (c = Math.min(c, d)), (d = Q(b, a, "maxHeight", E)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function mg(a, b) {
        var c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * Vf(a).clientHeight / 3) : 250
    };

    function qg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function rg(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                } b = !0
        }
        return b
    };

    function sg(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = zb(d.eb);
            a[e] = d.value
        }
    };
    var tg = null;

    function ug() {
        if (!tg) {
            for (var a = p, b = a, c = 0; a && a != a.parent;)
                if (a = a.parent, c++, cc(a)) b = a;
                else break;
            tg = b
        }
        return tg
    };

    function vg(a, b, c, d) {
        this.g = a;
        this.b = b;
        this.c = c;
        this.a = d
    }

    function wg(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.g)
        } catch (g) {}
        if (!c.length) return [];
        b = c;
        c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            b = d
        } else b = [];
        b = xg(a, b);
        "number" === typeof a.b && (c = a.b, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.c) {
            c = [];
            for (d = 0; d < b.length; d++) {
                e = yg(b[d]);
                var f = a.c;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    vg.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.g,
            occurrenceIndex: this.b,
            paragraphIndex: this.c,
            ignoreMode: this.a
        })
    };

    function xg(a, b) {
        if (null == a.a) return b;
        switch (a.a) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.a);
        }
    }

    function yg(a) {
        var b = [];
        qg(a.getElementsByTagName("p"), function(c) {
            100 <= zg(c) && b.push(c)
        });
        return b
    }

    function zg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        qg(a.childNodes, function(c) {
            b += zg(c)
        });
        return b
    }

    function Ag(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Bg(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || a.Y() || 0 < y(a, 4).length) {
            var c = a.Y(),
                d = y(a, 1),
                e = y(a, 4);
            b = y(a, 2);
            var f = y(a, 5);
            a = Cg(y(a, 6));
            var g = "";
            d && (g += d);
            c && (g += "#" + Ag(c));
            if (e)
                for (c = 0; c < e.length; c++) g += "." + Ag(e[c]);
            b = (e = g) ? new vg(e, b, f, a) : null
        } else b = b ? new vg(b, y(a, 2), y(a, 5), Cg(y(a, 6))) : null;
        return b
    }
    var Dg = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Cg(a) {
        return null == a ? a : Dg[a]
    }
    var Eg = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Fg() {
        this.a = {};
        this.b = {}
    }
    Fg.prototype.add = function(a) {
        this.a[a] = !0;
        this.b[a] = a
    };
    Fg.prototype.contains = function(a) {
        return !!this.a[a]
    };

    function Gg() {
        this.a = new Qf
    }
    Gg.prototype.set = function(a, b) {
        var c = this.a.get(a);
        c || (c = new Fg, this.a.set(a, c));
        c.add(b)
    };

    function Hg(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function Ig(a, b) {
        this.b = a;
        this.a = b
    }

    function Jg(a, b) {
        var c = new Gg,
            d = new Fg;
        b.forEach(function(e) {
            if (A(e, ge, 1)) {
                e = A(e, ge, 1);
                if (A(e, M, 1) && A(A(e, M, 1), L, 1) && A(e, M, 2) && A(A(e, M, 2), L, 1)) {
                    var f = Kg(a, A(A(e, M, 1), L, 1)),
                        g = Kg(a, A(A(e, M, 2), L, 1));
                    if (f && g)
                        for (f = ba(Hg({
                                anchor: f,
                                position: y(A(e, M, 1), 2)
                            }, {
                                anchor: g,
                                position: y(A(e, M, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(Aa(g.anchor), g.position)
                }
                A(e, M, 3) && A(A(e, M, 3), L, 1) && (f = Kg(a, A(A(e, M, 3), L, 1))) && c.set(Aa(f), y(A(e, M, 3), 2))
            } else A(e, he, 2) ? Lg(a, A(e, he, 2), c) : A(e, ie, 3) && Mg(a, A(e, ie, 3), d)
        });
        return new Ig(c, d)
    }

    function Lg(a, b, c) {
        A(b, L, 1) && (a = Ng(a, A(b, L, 1))) && a.forEach(function(d) {
            d = Aa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function Mg(a, b, c) {
        A(b, L, 1) && (a = Ng(a, A(b, L, 1))) && a.forEach(function(d) {
            c.add(Aa(d))
        })
    }

    function Kg(a, b) {
        return (a = Ng(a, b)) && 0 < a.length ? a[0] : null
    }

    function Ng(a, b) {
        return (b = Bg(b)) ? wg(b, a) : null
    };

    function Og(a, b, c) {
        var d = Jf(c, b + 1, b + 1);
        return !La(a, function(e) {
            return e.left < d.right && d.left < e.right && e.top < d.bottom && d.top < e.bottom
        })
    };

    function Pg(a, b) {
        if (!a) return !1;
        a = gc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Qg(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Rg(a) {
        return !!a.nextSibling || !!a.parentNode && Rg(a.parentNode)
    };

    function Sg(a, b) {
        return a && null != y(a, 4) && b[y(A(a, ke, 4), 2)] ? !1 : !0
    }

    function Tg(a) {
        var b = {};
        a && y(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function Ug(a, b, c, d) {
        this.a = p;
        this.L = a;
        this.b = b;
        this.i = d || null;
        this.o = (this.A = c) ? Jg(p.document, B(c, ee, 5)) : Jg(p.document, []);
        this.c = 0;
        this.g = !1
    }

    function Vg(a, b) {
        if (a.g) return !0;
        a.g = !0;
        var c = B(a.b, le, 1);
        a.c = 0;
        var d = Tg(a.A),
            e;
        if (e = A(a.b, ve, 15) && Hb(A(a.b, ve, 15), 12)) a: {
            e = Pf(a.a);e = null === e ? null : B(e, Mf, 5);
            var f = Pf(a.a);
            var g = null != f ? A(f, Kf, 6) || null : null;
            if (null == e) e = !1;
            else {
                var h = .3,
                    k = f = 4;
                g && (h = Fb(g, 2) || h, f = y(g, 1) || f, k = y(g, 3) || k);
                g = h;
                h = Pf(a.a);
                h = null !== h && null != y(h, 4) ? Fb(h, 4) : 1;
                g -= h;
                h = [];
                for (var n = 0; n < e.length; n++) {
                    if (.05 > g || (Wg(a).numAutoAdsPlaced || 0) >= f) {
                        e = !0;
                        break a
                    }
                    var m = y(e[n], 1);
                    if (null == m) break;
                    var t = c[m],
                        u = A(e[n], Lf, 2);
                    null != u && null != Fb(u, 1) && null != Fb(u, 2) && null != Fb(u, 3) && (u = new If(Fb(u, 1), Fb(u, 2), Fb(u, 3)), Og(h, k, u) && (m = Xg(a, t, m, b, d, !1), null != m && null != m.W && (m = m.W.getBoundingClientRect(), h.push(m), t = a.a, g -= m.width * m.height / (Vf(t).clientHeight * O(t)))))
                }
                e = 0 < (Wg(a).numAutoAdsPlaced || 0)
            }
        }
        if (e) return !0;
        e = Pf(a.a);
        if (null !== e && Hb(e, 2)) return Wg(a).eatf = !0, Hf(7, [!0, 0, !1]), !0;
        for (e = 0; e < c.length; e++)
            if (Xg(a, c[e], e, b, d, !0)) return !0;
        Hf(7, [!1, a.c, !1]);
        return !1
    }

    function Xg(a, b, c, d, e, f) {
        if (1 !== y(b, 8) || !Sg(b, e)) return null;
        var g = A(b, ke, 4);
        if (!f || g && 2 == y(g, 1)) {
            a.c++;
            if (b = Yg(a, b, d, e)) d = Wg(a), d.placement = c, d.numAutoAdsPlaced || (d.numAutoAdsPlaced = 0), d.numAutoAdsPlaced++, Hf(7, [!1, a.c, !0]);
            return b
        }
        return null
    }

    function Yg(a, b, c, d) {
        if (!Sg(b, d) || 1 != y(b, 8)) return null;
        d = A(b, L, 1);
        if (!d) return null;
        d = Bg(d);
        if (!d) return null;
        d = wg(d, a.a.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = y(b, 2);
        e = Eg[e];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.a;
                switch (e) {
                    case 0:
                        f = Pg(Qg(d), f);
                        break a;
                    case 3:
                        f = Pg(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Pg(g ? 1 == g.nodeType ? g : Qg(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Rg(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !rg(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.o;
            f = y(b, 2);
            g = Aa(d);
            g = c.b.a.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.a.contains(Aa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.a.contains(Aa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (c) return null;
        f = A(b, je, 3);
        c = {};
        f && (c.Ja = y(f, 1), c.ua = y(f, 2), c.Na = !!Gb(f, 3));
        f = A(b, ke, 4) && y(A(b, ke, 4), 2) ? y(A(b, ke, 4), 2) : null;
        f = wf(f);
        b = null == y(b, 12) ? null : y(b, 12);
        b = vf(a.i, f, null == b ? null : new uf(null, {
            google_ml_rank: b
        }));
        f = a.a;
        a = a.L;
        var h = f.document;
        g = Xb((new Yb(h)).a, "DIV");
        var k = g.style;
        k.textAlign = "center";
        k.width = "100%";
        k.height = "auto";
        k.clear = c.Na ? "both" : "none";
        c.Ta && sg(k, c.Ta);
        h = Xb((new Yb(h)).a, "INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.Ja && (k.marginTop = c.Ja);
        c.ua && (k.marginBottom = c.ua);
        c.La && sg(k, c.La);
        g.appendChild(h);
        c = {
            ja: g,
            W: h
        };
        c.W.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.va) c.ja.className = h.join(" ");
        h = c.W;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var n = c.ja;
                switch (e) {
                    case 0:
                        d.parentNode && d.parentNode.insertBefore(n, d);
                        break;
                    case 3:
                        var m = d.parentNode;
                        if (m) {
                            var t = d.nextSibling;
                            if (t && t.parentNode != m)
                                for (; t && 8 == t.nodeType;) t = t.nextSibling;
                            m.insertBefore(n, t)
                        }
                        break;
                    case 1:
                        d.insertBefore(n, d.firstChild);
                        break;
                    case 2:
                        d.appendChild(n)
                }
                rg(d) && (d.setAttribute("data-init-display", d.style.display), d.style.display = "block");
                b: {
                    var u = c.W;u.setAttribute("data-adsbygoogle-status", "reserved");u.className += " adsbygoogle-noablate";n = {
                        element: u
                    };
                    var v = b && b.Ca;
                    if (u.hasAttribute("data-pub-vars")) {
                        try {
                            v = JSON.parse(u.getAttribute("data-pub-vars"))
                        } catch (J) {
                            break b
                        }
                        u.removeAttribute("data-pub-vars")
                    }
                    v && (n.params = v);
                    (f.adsbygoogle = f.adsbygoogle || []).push(n)
                }
            } catch (J) {
                (u = c.ja) && u.parentNode && (v = u.parentNode, v.removeChild(u), rg(v) && (v.style.display = v.getAttribute("data-init-display") || "none"));
                u = !1;
                break a
            }
            u = !0
        }
        return u ? c : null
    }

    function Wg(a) {
        return a.a.google_ama_state = a.a.google_ama_state || {}
    };

    function Zg() {
        this.b = new $g(this);
        this.a = 0
    }

    function ah(a) {
        if (0 != a.a) throw Error("Already resolved/rejected.");
    }

    function $g(a) {
        this.a = a
    }

    function bh(a) {
        switch (a.a.a) {
            case 0:
                break;
            case 1:
                a.b && a.b(a.a.g);
                break;
            case 2:
                a.c && a.c(a.a.c);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function ch(a) {
        this.exception = a
    }

    function dh(a, b) {
        this.c = p;
        this.a = a;
        this.b = b
    }
    dh.prototype.start = function() {
        this.g()
    };
    dh.prototype.g = function() {
        try {
            switch (this.c.document.readyState) {
                case "complete":
                case "interactive":
                    Vg(this.a, !0);
                    eh(this);
                    break;
                default:
                    Vg(this.a, !1) ? eh(this) : this.c.setTimeout(Fa(this.g, this), 100)
            }
        } catch (a) {
            eh(this, a)
        }
    };

    function eh(a, b) {
        try {
            var c = a.b,
                d = a.a;
            Wg(d);
            B(d.b, le, 1);
            var e = new ch(b);
            ah(c);
            c.a = 1;
            c.g = e;
            bh(c.b)
        } catch (f) {
            a = a.b, b = f, ah(a), a.a = 2, a.c = b, bh(a.b)
        }
    };

    function fh(a) {
        Af(a, {
            atf: 1
        })
    }

    function gh(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Af(a, {
            atf: 0
        })
    };

    function hh() {
        this.debugCard = null;
        this.debugCardRequested = !1
    };

    function ih(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = jh(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function jh(a) {
        var b = "";
        Pd(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    var kh = {
        13: "0.001",
        22: "0.01",
        24: "0.05",
        28: "0.001",
        29: "0.01",
        60: "0.03",
        66: "0.1",
        79: "1200",
        82: "3",
        98: "0.01",
        99: "600",
        100: "100",
        103: "0.01",
        118: "false",
        126: "0.001",
        128: "false",
        129: "0.02",
        136: "0.02",
        137: "0.01",
        149: "0",
        150: "1000",
        155: "0.06",
        160: "250",
        161: "150",
        162: "0.1",
        165: "0.02",
        173: "800",
        174: "2",
        177: "0.02",
        179: "100",
        180: "20",
        185: "0.1",
        189: "400",
        190: "0",
        193: "500",
        194: "0"
    };
    var lh = null;

    function mh() {
        this.a = kh
    }

    function R(a, b) {
        a = parseFloat(a.a[b]);
        return isNaN(a) ? 0 : a
    };

    function nh(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload";
            if (gb("preload", "stylesheet")) var f = Za(b).toString();
            else {
                if (b instanceof Wa) var g = Za(b).toString();
                else {
                    if (b instanceof jb) var h = mb(b);
                    else {
                        if (b instanceof jb) var k = b;
                        else b = "object" == typeof b && b.b ? b.a() : String(b), nb.test(b) || (b = "about:invalid#zClosurez"), k = new jb(kb, b);
                        h = mb(k)
                    }
                    g = h
                }
                f = g
            }
            e.href = f
        } catch (n) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (n) {}
    };

    function oh(a) {
        var b = {},
            c = {};
        return c.enable_page_level_ads = (b.pltais = !0, b), c.google_ad_client = a, c
    };

    function ph() {};

    function qh(a) {
        if (!a) return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function rh(a, b, c) {
        return sh(a, void 0 === c ? "" : c, function(d) {
            return La(B(d, Nb, 2), function(e) {
                return y(e, 1) === b
            })
        })
    }

    function th(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = Yd(a) || a;
        return uh(d, b) ? !0 : sh(a, c, function(e) {
            return La(y(e, 3), function(f) {
                return f === b
            })
        })
    }

    function vh(a) {
        return sh(p, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function uh(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Oa(a.split(","), b.toString())
    }

    function sh(a, b, c) {
        a = Yd(a) || a;
        var d = wh(a);
        b && (b = qh(String(b)));
        return Ta(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function wh(a) {
        a = xh(a);
        var b = {};
        Pd(a, function(c, d) {
            try {
                var e = new Lb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function xh(a) {
        try {
            var b = a.localStorage.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Sa(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && ya(d)
            })
        } catch (d) {
            return {}
        }
    };

    function yh() {
        this.a = function() {};
        this.b = function() {
            return []
        }
    }

    function zh(a, b, c) {
        a.a = function(d) {
            Hd(ud, b, function() {
                return []
            })(d, c)
        };
        a.b = function() {
            return Hd(vd, b, function() {
                return []
            })(c)
        }
    }
    va(yh);
    var Ah = {
            f: "368226950",
            h: "368226951"
        },
        Bh = {
            f: "368226960",
            h: "368226961"
        },
        Ch = {
            f: "368226470",
            V: "368226471"
        },
        Dh = {
            f: "368226480",
            V: "368226481"
        },
        Eh = {
            f: "332260030",
            R: "332260031",
            P: "332260032"
        },
        Fh = {
            f: "332260040",
            R: "332260041",
            P: "332260042"
        },
        Gh = {
            f: "368226500",
            h: "368226501"
        },
        Hh = {
            f: "36998750",
            h: "36998751"
        },
        Ih = {
            f: "231196899",
            h: "231196900"
        },
        Jh = {
            f: "231196901",
            h: "231196902"
        },
        Kh = {
            v: "20040067",
            f: "20040068",
            ra: "1337"
        },
        Lh = {
            f: "21060548",
            v: "21060549"
        },
        Mh = {
            f: "21060623",
            v: "21060624"
        },
        Nh = {
            f: "21062271",
            v: "21062272"
        },
        Oh = {
            f: "229739148",
            h: "229739149"
        },
        Ph = {
            f: "229739146",
            h: "229739147"
        },
        Qh = {
            f: "20040012",
            h: "20040013"
        },
        Rh = {
            f: "151527201",
            T: "151527221",
            K: "151527222",
            J: "151527223",
            H: "151527224",
            I: "151527225"
        },
        S = {
            f: "151527001",
            T: "151527021",
            K: "151527022",
            J: "151527023",
            H: "151527024",
            I: "151527025"
        },
        Sh = {
            f: "151527012",
            sa: "151527013"
        };

    function Th(a) {
        return Ic && !!a.google_disable_experiments
    }
    Vd();

    function Uh(a) {
        var b = th(p, 12, a.google_ad_client);
        a = "google_ad_host" in a;
        var c = K(p, Ah.h),
            d = ih(p.location, "google_ads_preview");
        return b && !a && c || d
    }

    function Vh(a) {
        if (p.google_apltlad || Xd(p) != p || !a.google_ad_client) return null;
        var b = Uh(a),
            c = !K(p, Ch.V);
        if (!b && !c) return null;
        p.google_apltlad = !0;
        var d = oh(a.google_ad_client),
            e = d.enable_page_level_ads;
        lc(a, function(f, g) {
            ce[g] && "google_ad_client" != g && (e[g] = f)
        });
        b ? e.google_ad_channel = "AutoInsertAutoAdCode" : c && (e.google_pgb_reactive = 7, "google_ad_section" in a || "google_ad_region" in a) && (e.google_ad_section = a.google_ad_section || a.google_ad_region);
        return d
    }

    function Wh(a) {
        return za(a.enable_page_level_ads) && 7 == a.enable_page_level_ads.google_pgb_reactive
    };

    function of (a) {
        try {
            var b = I(p).eids || [];
            null != b && 0 < b.length && (a.eid = b.join(","))
        } catch (c) {}
    }

    function nf(a) {
        a.shv = Hc()
    }
    gf.Ga(!Ic);

    function Xh(a, b) {
        return Yf(b, a) + Q(b, a, "height", E)
    };

    function Yh() {
        var a = {};
        this[3] = (a[23] = function(b) {
            return rh(D, parseInt(b, 10))
        }, a[24] = function(b) {
            return th(D, parseInt(b, 10))
        }, a);
        this[4] = {};
        this[5] = {}
    }
    va(Yh);
    var Zh = new Re(200, 399, 0),
        $h = new Re(600, 699, 0),
        ai = new Re(800, 899, 0),
        bi = new Re(0, 999, 5),
        ci = new Re(400, 499, 6),
        di = new Re(500, 599, 0);

    function ei(a) {
        a = void 0 === a ? p : a;
        return a.ggeac || (a.ggeac = {})
    };

    function fi() {
        var a = {};
        this[3] = (a[8] = function(b) {
            return !!ta(b)
        }, a[9] = function(b) {
            b = ta(b);
            var c;
            if (c = "function" == wa(b)) b = b && b.toString && b.toString(), c = "string" === typeof b && gb(b, "[native code]");
            return c
        }, a[10] = function() {
            return window == window.top
        }, a[22] = function() {
            return Bc()
        }, a);
        a = {};
        this[4] = (a[3] = function() {
            return vc()
        }, a[5] = function(b) {
            b = Se(window, void 0 === b ? 0 : b);
            return null != b ? b : void 0
        }, a[6] = function(b) {
            b = ta(b);
            return "number" === typeof b ? b : void 0
        }, a);
        a = {};
        this[5] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = ta(b);
            return "string" === typeof b ? b : void 0
        }, a)
    }
    va(fi);

    function gi(a) {
        x(this, a, hi, null)
    }
    q(gi, w);
    var hi = [2];
    gi.prototype.Y = function() {
        return z(this, 1, 0)
    };
    gi.prototype.X = function() {
        return z(this, 7, 0)
    };

    function ii(a) {
        x(this, a, ji, null)
    }
    q(ii, w);
    var ji = [2];
    ii.prototype.X = function() {
        return z(this, 5, 0)
    };

    function ki(a) {
        x(this, a, li, null)
    }
    q(ki, w);

    function mi(a) {
        x(this, a, ni, null)
    }
    q(mi, w);
    var li = [1, 2],
        ni = [2];
    mi.prototype.X = function() {
        return z(this, 1, 0)
    };
    var oi = [12, 13];

    function pi() {}

    function qi(a, b, c, d) {
        var e = void 0 === d ? {} : d;
        d = void 0 === e.xa ? !1 : e.xa;
        var f = void 0 === e.Sa ? {} : e.Sa;
        e = void 0 === e.Za ? [] : e.Za;
        a.a = b;
        a.i = d;
        a.g = f;
        b = {};
        a.b = (b[c] = e, b[4] = [], b);
        a.c = {};
        (c = Ue()) && Ia(c.split(",") || [], function(g) {
            (g = parseInt(g, 10)) && (a.c[g] = !0)
        });
        return a
    }

    function ri(a, b, c) {
        var d = [],
            e = si(a.a, b);
        if (e.length) {
            9 !== b && (a.a = ti(a.a, b));
            var f = Oa(oi, b);
            Ia(e, function(g) {
                if (g = ui(a, g)) {
                    var h = g.Y();
                    d.push(h);
                    vi(a, h, f ? 4 : c);
                    var k = B(g, Xc, 2);
                    k && (f ? Ia(qd(), function(n) {
                        return od(k, n)
                    }) : od(k, c))
                }
            })
        }
        return d
    }

    function vi(a, b, c) {
        a.b[c] || (a.b[c] = []);
        a.b[c].push(b)
    }

    function wi(a, b) {
        a.a.push.apply(a.a, ca(Ja(Ka(b, function(c) {
            return new mi(c)
        }), function(c) {
            return !Oa(oi, c.X())
        })))
    }

    function ui(a, b) {
        var c = ad.j().a;
        if (!Uc(A(b, Nc, 3), c)) return null;
        var d = B(b, gi, 2),
            e = d.length * z(b, 1, 0),
            f = z(b, 6, 0);
        if (f) {
            e = Se(window, f);
            if (null === e) return null;
            b = xi(b, e);
            return !b || c && !Uc(A(b, Nc, 3), c) ? null : yi(a, [b], 1)
        }
        d = c ? Ja(d, function(g) {
            return Uc(A(g, Nc, 3), c)
        }) : d;
        return d.length ? (b = z(b, 4, 0)) ? zi(a, b, e, d) : yi(a, d, e / 1E3) : null
    }

    function zi(a, b, c, d) {
        var e = null != a.g[b] ? a.g[b] : 1E3;
        if (0 >= e) return null;
        d = yi(a, d, c / e);
        a.g[b] = d ? 0 : e - c;
        return d
    }

    function yi(a, b, c) {
        var d = a.c,
            e = Ma(b, function(f) {
                return !!d[f.Y()]
            });
        return e ? e : a.i ? null : hc(b, c, !1)
    }

    function Ai(a, b) {
        G(sd, function(c) {
            a.c[c] = !0
        }, b);
        G(ud, function(c, d) {
            return ri(a, c, d)
        }, b);
        G(vd, function(c) {
            return (a.b[c] || []).concat(a.b[4])
        }, b);
        G(Ed, function(c) {
            return wi(a, c)
        }, b)
    }
    va(pi);

    function si(a, b) {
        return (a = Ma(a, function(c) {
            return c.X() == b
        })) && B(a, ii, 2) || []
    }

    function ti(a, b) {
        return Ja(a, function(c) {
            return c.X() != b
        })
    }

    function xi(a, b) {
        var c = B(a, gi, 2),
            d = c.length,
            e = z(a, 1, 0);
        a = z(a, 8, 0);
        var f = (b - a) % d;
        return b < a || b - a - f >= d * e - 1 ? null : c[f]
    };

    function Bi() {
        this.a = function() {}
    }
    va(Bi);

    function Ci(a) {
        Bi.j().a(a)
    };

    function Di(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? ei() : d;
        e = void 0 === e ? 0 : e;
        d.hasOwnProperty("init-done") ? (Hd(Ed, d)(Ka(B(a, mi, 2), function(f) {
            return Kb(f)
        })), Hd(Fd, d)(Ka(B(a, Xc, 1), function(f) {
            return Kb(f)
        }), e), b && Hd(Gd, d)(b), Ei(d, e)) : (Ai(qi(pi.j(), B(a, mi, 2), e, c), d), Id(d), Jd(d), Kd(d), Ei(d, e), od(B(a, Xc, 1), e), Ci(fi.j()), b && Ci(b))
    }

    function Ei(a, b) {
        a = void 0 === a ? ei() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        zh(yh.j(), c, d);
        c = a;
        b = void 0 === b ? 0 : b;
        Md(Ld.j(), c, b);
        Bi.j().a = Hd(Gd, a);
        Ld.j().a()
    };

    function T(a, b) {
        b && a.push(b)
    }

    function Fi(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        d = Yd(a) || a;
        d = (d = (d = d.location && d.location.hash) && (d.match(/google_plle=([\d,]+)/) || d.match(/deid=([\d,]+)/))) && d[1];
        return !!d && La(c, Ga(gb, d))
    }

    function Gi(a, b, c) {
        for (var d = 0; d < c.length; d++)
            if (Fi(a, c[d])) return c[d];
        return Th(a) ? null : hc(c, b)
    }

    function Hi(a, b, c, d, e, f) {
        f = void 0 === f ? 1 : f;
        for (var g = 0; g < e.length; g++)
            if (Fi(a, e[g])) return e[g];
        Th(a) ? c = null : (f = void 0 === f ? 1 : f, 0 >= d ? c = null : (g = new Qe(c, c + d - 1), (d = d % f || d / f % e.length) || (d = b.b, d = !(d.start <= g.start && d.a >= g.a)), d ? c = null : (a = Se(a, b.a), c = null !== a && g.start <= a && g.a >= a ? e[Math.floor((a - c) / f) % e.length] : null)));
        return c
    };

    function Ii(a, b, c) {
        if (cc(a.document.getElementById(b).contentWindow)) a = a.document.getElementById(b).contentWindow, b = a.document, b.body && b.body.firstChild || (/Firefox/.test(navigator.userAgent) ? b.open("text/html", "replace") : b.open(), a.google_async_iframe_close = !0, b.write(c));
        else {
            a = a.document.getElementById(b).contentWindow;
            c = String(c);
            b = ['"'];
            for (var d = 0; d < c.length; d++) {
                var e = c.charAt(d),
                    f = e.charCodeAt(0),
                    g = d + 1,
                    h;
                if (!(h = xb[e])) {
                    if (!(31 < f && 127 > f))
                        if (f = e, f in yb) e = yb[f];
                        else if (f in xb) e = yb[f] = xb[f];
                    else {
                        h = f.charCodeAt(0);
                        if (31 < h && 127 > h) e = f;
                        else {
                            if (256 > h) {
                                if (e = "\\x", 16 > h || 256 < h) e += "0"
                            } else e = "\\u", 4096 > h && (e += "0");
                            e += h.toString(16).toUpperCase()
                        }
                        e = yb[f] = e
                    }
                    h = e
                }
                b[g] = h
            }
            b.push('"');
            a.location.replace("javascript:" + b.join(""))
        }
    };
    var Ji = null;

    function U(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        P.call(this, a, b);
        this.aa = c;
        this.Ra = d
    }
    ka(U, P);
    U.prototype.ha = function() {
        return this.aa
    };
    U.prototype.fa = function(a, b, c) {
        if (!b.google_ad_resize) {
            c.style.height = this.height() + "px";
            c = K(a, S.f);
            a = K(a, S.T) || K(a, S.K) || K(a, S.J) || K(a, S.H) || K(a, S.I);
            if (c || a) b.ovlp = !0;
            b.rpe = !0
        }
    };

    function Ki(a) {
        return function(b) {
            return !!(b.aa & a)
        }
    };
    var Li = Ab("script");

    function Mi(a, b, c, d, e, f, g, h, k, n, m, t, u, v) {
        this.Z = a;
        this.a = b;
        this.aa = void 0 === c ? null : c;
        this.c = void 0 === d ? null : d;
        this.pa = void 0 === e ? null : e;
        this.b = void 0 === f ? null : f;
        this.g = void 0 === g ? null : g;
        this.A = void 0 === h ? !1 : h;
        this.L = void 0 === k ? !1 : k;
        this.ca = void 0 === n ? null : n;
        this.da = void 0 === m ? null : m;
        this.i = void 0 === t ? null : t;
        this.o = void 0 === u ? null : u;
        this.ea = void 0 === v ? null : v;
        this.qa = this.ba = this.$ = null
    }

    function Ni(a, b, c) {
        null != a.aa && (c.google_responsive_formats = a.aa);
        null != a.pa && (c.google_safe_for_responsive_override = a.pa);
        null != a.b && (!0 === a.b ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.b));
        null != a.g && !0 !== a.g && (c.gfwrnher = a.g);
        a.A && (c.google_bfa = a.A);
        a.L && (c.ebfa = a.L);
        var d = a.o || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.i || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.a.U(b);
        var e = a.a.height();
        c.google_ad_resize || (c.google_ad_width = d, c.google_ad_height = e, c.google_ad_format = a.a.ka(b), c.google_responsive_auto_format = a.Z, null != a.c && (c.armr = a.c), c.google_ad_resizable = !0, c.google_override_format = 1, c.google_loader_features_used = 128, !0 === a.b && (c.gfwrnh = a.a.height() + "px"));
        null != a.ca && (c.gfwroml = a.ca);
        null != a.da && (c.gfwromr = a.da);
        null != a.i && (c.gfwroh = a.i);
        null != a.o && (c.gfwrow = a.o);
        null != a.ea && (c.gfwroz = a.ea);
        null != a.$ && (c.gml = a.$);
        null != a.ba && (c.gmr = a.ba);
        null != a.qa && (c.gzi = a.qa);
        b = Vd();
        b = Yd(b) || b;
        ih(b.location, "google_responsive_slot_debug") && (c.ds = "outline:thick dashed " + (d && e ? !0 !== a.b || !0 !== a.g ? "#ffa500" : "#0f0" : "#f00") + " !important;");
        !ih(b.location, "google_responsive_dummy_ad") || !Oa([1, 2, 3, 4, 5, 6, 7, 8], a.Z) && 1 !== a.c || c.google_ad_resize || 2 === a.c || (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = "<" + Li + ">window.top.postMessage('" + a + "', '*');\n          </" + Li + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    /*

     Copyright 2019 The AMP HTML Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Oi = {},
        Pi = (Oi.image_stacked = 1 / 1.91, Oi.image_sidebyside = 1 / 3.82, Oi.mobile_banner_image_sidebyside = 1 / 3.82, Oi.pub_control_image_stacked = 1 / 1.91, Oi.pub_control_image_sidebyside = 1 / 3.82, Oi.pub_control_image_card_stacked = 1 / 1.91, Oi.pub_control_image_card_sidebyside = 1 / 3.74, Oi.pub_control_text = 0, Oi.pub_control_text_card = 0, Oi),
        Qi = {},
        Ri = (Qi.image_stacked = 80, Qi.image_sidebyside = 0, Qi.mobile_banner_image_sidebyside = 0, Qi.pub_control_image_stacked = 80, Qi.pub_control_image_sidebyside = 0, Qi.pub_control_image_card_stacked = 85, Qi.pub_control_image_card_sidebyside = 0, Qi.pub_control_text = 80, Qi.pub_control_text_card = 80, Qi),
        Si = {},
        Ti = (Si.pub_control_image_stacked = 100, Si.pub_control_image_sidebyside = 200, Si.pub_control_image_card_stacked = 150, Si.pub_control_image_card_sidebyside = 250, Si.pub_control_text = 100, Si.pub_control_text_card = 150, Si);

    function Ui(a) {
        var b = 0;
        a.B && b++;
        a.s && b++;
        a.u && b++;
        if (3 > b) return {
            w: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.B.split(",");
        var c = a.u.split(",");
        a = a.s.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            w: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            w: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g = Number(c[f]);
            if (isNaN(g) || 0 === g) return {
                w: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (isNaN(g) || 0 === g) return {
                w: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            u: d,
            s: e,
            Aa: b
        }
    }

    function Vi(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var Wi = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Xi(a, b) {
        P.call(this, a, b)
    }
    ka(Xi, P);
    Xi.prototype.U = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Yi(a, b) {
        Zi(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new Mi(9, new Xi(a, Math.floor(a * b.google_phwr)));
        var c = ac();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Pi.mobile_banner_image_sidebyside + Ri.mobile_banner_image_sidebyside) + 96), a = {
            O: a,
            N: c,
            s: 1,
            u: 12,
            B: "mobile_banner_image_sidebyside"
        }) : (a = Vi(a), a = {
            O: a.width,
            N: a.height,
            s: 1,
            u: 13,
            B: "image_sidebyside"
        }) : (a = Vi(a), a = {
            O: a.width,
            N: a.height,
            s: 4,
            u: 2,
            B: "image_stacked"
        });
        $i(b, a);
        return new Mi(9, new Xi(a.O, a.N))
    }

    function aj(a, b) {
        Zi(a, b);
        var c = Ui({
            u: b.google_content_recommendation_rows_num,
            s: b.google_content_recommendation_columns_num,
            B: b.google_content_recommendation_ui_type
        });
        if (c.w) a = {
            O: 0,
            N: 0,
            s: 0,
            u: 0,
            B: "image_stacked",
            w: c.w
        };
        else {
            var d = 2 === c.Aa.length && 468 <= a ? 1 : 0;
            var e = c.Aa[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Ti[e];
            for (var g = c.s[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.u[d];
            d = Math.floor(((a - 8 * f - 8) / f * Pi[e] + Ri[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                oa: "Calculated slot width is too large: " + a
            } : 1500 < d ? {
                width: 0,
                height: 0,
                oa: "Calculated slot height is too large: " + d
            } : {
                width: a,
                height: d
            };
            a = a.oa ? {
                O: 0,
                N: 0,
                s: 0,
                u: 0,
                B: e,
                w: a.oa
            } : {
                O: a.width,
                N: a.height,
                s: f,
                u: c,
                B: e
            }
        }
        if (a.w) throw new N(a.w);
        $i(b, a);
        return new Mi(9, new Xi(a.O, a.N))
    }

    function Zi(a, b) {
        if (0 >= a) throw new N("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function $i(a, b) {
        a.google_content_recommendation_ui_type = b.B;
        a.google_content_recommendation_columns_num = b.s;
        a.google_content_recommendation_rows_num = b.u
    };

    function bj(a, b) {
        P.call(this, a, b)
    }
    ka(bj, P);
    bj.prototype.U = function() {
        return this.minWidth()
    };
    bj.prototype.fa = function(a, b, c) {
        ig(a, c);
        if (!b.google_ad_resize) {
            c.style.height = this.height() + "px";
            c = K(a, S.f);
            var d = K(a, S.T) || K(a, S.K) || K(a, S.J) || K(a, S.H) || K(a, S.I);
            if (c || d) b.ovlp = !0;
            b.rpe = !0;
            if (K(a, Fh.f) || K(a, Fh.R) || K(a, Fh.P)) b.ovlp = !0
        }
    };
    var cj = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function dj(a, b) {
        P.call(this, a, b)
    }
    ka(dj, P);
    dj.prototype.U = function() {
        return Math.min(1200, this.minWidth())
    };

    function ej(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f && "false" != e.google_full_width_responsive) {
            var g = bg(b, c, a, .2, e);
            if (!0 !== g) e.gfwrnwer = g;
            else if (g = O(b)) e.google_full_width_responsive_allowed = !0, c.parentElement && (gg(b, c), ig(b, c), a = g)
        }
        if (250 > a) throw new N("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new Mi(11, new P(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new N("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f)) throw new N("Invalid height: height=" + f);
            if (50 > f) throw new N("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new N("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new Mi(11, new P(a, f))
        }
        d = cj[f];
        if (!d) throw new N("Invalid data-ad-layout value: " + f);
        e = !K(b, Sh.sa);
        c = lg(c, b);
        b = O(b);
        b = "in-article" === f && !c && a === b && e ? Math.ceil(1.25 * d(a)) : Math.ceil(d(a));
        return new Mi(11, "in-article" == f ? new dj(a, b) : new P(a, b))
    };

    function fj(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function gj(a, b, c) {
        for (var d = a.length, e = null, f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var V = [new U(970, 90, 2), new U(728, 90, 2), new U(468, 60, 2), new U(336, 280, 1), new U(320, 100, 2), new U(320, 50, 2), new U(300, 600, 4), new U(300, 250, 1), new U(250, 250, 1), new U(234, 60, 2), new U(200, 200, 1), new U(180, 150, 1), new U(160, 600, 4), new U(125, 125, 1), new U(120, 600, 4), new U(120, 240, 4), new U(120, 120, 1, !0)],
        hj = [V[6], V[12], V[3], V[0], V[7], V[14], V[1], V[8], V[10], V[4], V[15], V[2], V[11], V[5], V[13], V[9], V[16]];

    function ij(a, b, c, d, e) {
        "false" != e.google_full_width_responsive || c.location && "#gfwrffwaifhp" == c.location.hash ? "autorelaxed" == b && (e.google_full_width_responsive || K(c, Oh.h)) || jj(b) || e.google_ad_resize ? (488 > O(c) && dg(c) && gg(c, d), b = cg(a, c, d, e), c = !0 !== b ? {
            l: a,
            m: b
        } : {
            l: O(c) || a,
            m: !0
        }) : c = {
            l: a,
            m: 2
        } : c = {
            l: a,
            m: 1
        };
        b = c.m;
        return !0 !== b ? {
            l: a,
            m: b
        } : d.parentElement ? {
            l: c.l,
            m: b
        } : {
            l: a,
            m: b
        }
    }

    function kj(a, b, c, d, e) {
        var f = pf(247, function() {
                return ij(a, b, c, d, e)
            }),
            g = f.l;
        f = f.m;
        var h = !0 === f,
            k = E(d.style.width),
            n = E(d.style.height),
            m = lj(g, b, c, d, e, h);
        g = m.G;
        h = m.F;
        var t = m.C,
            u = m.D,
            v = m.ha;
        m = m.za;
        var J = mj(b, v),
            C, pa = (C = Q(d, c, "marginLeft", E)) ? C + "px" : "",
            wb = (C = Q(d, c, "marginRight", E)) ? C + "px" : "";
        C = Q(d, c, "zIndex") || "";
        return new Mi(J, g, v, null, m, f, h, t, u, pa, wb, n, k, C)
    }

    function jj(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function lj(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, O(c)) ? 4 : 3 : ag(b);
        var g = !1,
            h = !1;
        if (488 > O(c)) {
            var k = $f(d, c);
            var n = lg(d, c);
            g = !n && k;
            h = n && k
        }
        n = 488 > O(c);
        var m = [jg(a), Ki(b)];
        dg(c) || m.push(kg(n, c, d, h));
        null != e.google_max_responsive_height && m.push(ng(e.google_max_responsive_height));
        var t = [function(v) {
            return !v.Ra
        }];
        !g && !h || dg(c) || (g = pg(c, d), t.push(ng(g)));
        var u = n && !f && 3 === b && nj(c) ? new U(a, Math.floor(a / 1.2), 1) : gj(hj.slice(0), fj(m), fj(t));
        if (!u) throw new N("No slot size for availableWidth=" + a);
        t = pf(248, function() {
            var v;
            a: if (f) {
                if (e.gfwrnh && (v = E(e.gfwrnh))) {
                    v = {
                        G: new bj(a, v),
                        F: !0,
                        C: !1,
                        D: !1
                    };
                    break a
                }
                v = !1;
                var J = Vf(c).clientHeight,
                    C = Yf(d, c),
                    pa = c.google_lpabyc,
                    wb = og(d, c);
                if (wb && 2 < wb && !c.google_bfabyc && (!pa || C - pa > J) && (J = .9 * Vf(c).clientHeight, C = Math.min(J, oj(c, d, e)), J && C == J)) {
                    C = c.google_pbfabyc;
                    v = !C;
                    if (K(c, Fh.R) || K(c, Fh.P)) {
                        c.google_bfabyc = Yf(d, c) + J;
                        v = {
                            G: new bj(a, Math.floor(J)),
                            F: !0,
                            C: !0,
                            D: !0
                        };
                        break a
                    }
                    C || (c.google_pbfabyc = Yf(d, c) + J)
                }
                J = a / 1.2;
                if (dg(c)) C = J;
                else if (C = Math.min(J, oj(c, d, e)), C < .5 * J || 100 > C) C = J;
                if (K(c, S.K) || K(c, S.J) || K(c, S.H) || K(c, S.I)) C *= 1.3;
                v = {
                    G: new bj(a, Math.floor(C)),
                    F: C < J ? 102 : !0,
                    C: !1,
                    D: v
                }
            } else v = {
                G: u,
                F: 100,
                C: !1,
                D: !1
            };
            return v
        });
        g = t.G;
        n = t.F;
        m = t.C;
        t = t.D;
        return "in-article" === e.google_ad_layout && pj(c) ? {
            G: qj(a, c, d, g, e),
            F: !1,
            C: !1,
            D: !1,
            ha: b,
            za: k
        } : {
            G: g,
            F: n,
            C: m,
            D: t,
            ha: b,
            za: k
        }
    }

    function oj(a, b, c) {
        if (c.google_resizing_allowed || "true" == c.google_full_width_responsive) a = Infinity;
        else {
            c = Infinity;
            do {
                var d = Q(b, a, "height", E);
                d && (c = Math.min(c, d));
                (d = Q(b, a, "maxHeight", E)) && (c = Math.min(c, d))
            } while ((b = b.parentElement) && "HTML" != b.tagName);
            a = c
        }
        return a
    }

    function mj(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function qj(a, b, c, d, e) {
        var f = e.google_ad_height || Q(c, b, "height", E);
        b = ej(a, b, c, f, e).a;
        return b.minWidth() * b.height() > a * d.height() ? new U(b.minWidth(), b.height(), 1) : d
    }

    function pj(a) {
        return H(227) || a.location && "#hffwroe2etoq" == a.location.hash
    }

    function nj(a) {
        return H(232) || a.location && "#affwroe2etoq" == a.location.hash
    };

    function rj(a, b) {
        P.call(this, a, b)
    }
    ka(rj, P);
    rj.prototype.U = function() {
        return this.minWidth()
    };
    rj.prototype.ka = function(a) {
        return P.prototype.ka.call(this, a) + "_0ads_al"
    };
    var sj = [new rj(728, 15), new rj(468, 15), new rj(200, 90), new rj(180, 90), new rj(160, 90), new rj(120, 90)];

    function tj(a, b, c) {
        var d = 250,
            e = 90;
        d = void 0 === d ? 130 : d;
        e = void 0 === e ? 30 : e;
        var f = gj(sj, jg(a));
        if (!f) throw new N("No link unit size for width=" + a + "px");
        a = Math.min(a, 1200);
        f = f.height();
        b = Math.max(f, b);
        d = (new Mi(10, new rj(a, Math.min(b, 15 == f ? e : d)))).a;
        b = d.minWidth();
        d = d.height();
        15 <= c && (d = c);
        return new Mi(10, new rj(b, d))
    }

    function uj(a, b, c, d) {
        if ("false" == d.google_full_width_responsive) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = 1, a;
        var e = cg(a, b, c, d);
        if (!0 !== e) return d.google_full_width_responsive_allowed = !1, d.gfwrnwer = e, a;
        e = O(b);
        if (!e) return a;
        d.google_full_width_responsive_allowed = !0;
        ig(b, c);
        return e
    };

    function vj(a, b, c, d, e) {
        var f;
        (f = O(b)) ? 488 > O(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, ig(b, c), f = {
            l: f,
            m: !0
        }) : f = {
            l: a,
            m: 5
        } : f = {
            l: a,
            m: 4
        }: f = {
            l: a,
            m: 10
        };
        var g = f;
        f = g.l;
        g = g.m;
        if (!0 !== g || a == f) return new Mi(12, new P(a, d), null, null, !0, g, 100);
        a = lj(f, "auto", b, c, e, !0);
        return new Mi(1, a.G, a.ha, 2, !0, g, a.F, a.C, a.D)
    };

    function wj(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = ba(Wi), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        } b = !1
            }
            return b ? 9 : 5
        }
        if (jj(c)) return 1;
        if ("link" == c) return 4;
        if ("fluid" == c) return "in-article" === b.google_ad_layout && (H(208) || H(227) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash)) ? (b.google_ad_format = "auto", b.armr = 3, 1) : 8
    }

    function xj(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Q(b, d, "width", E) || c.google_ad_width || 0;
        !K(d, Ih.h) || 5 !== a && 9 !== a || (c.google_ad_format = "auto", c.google_ad_slot = "", a = 1);
        var f = (f = yj(a, e, b, c, d)) ? f : kj(e, c.google_ad_format, d, b, c);
        f.a.fa(d, c, b);
        Ni(f, e, c);
        1 != a && (a = f.a.height(), b.style.height = a + "px")
    }

    function yj(a, b, c, d, e) {
        var f = d.google_ad_height || Q(c, e, "height", E);
        switch (a) {
            case 5:
                return a = pf(247, function() {
                    return ij(b, d.google_ad_format, e, c, d)
                }), f = a.l, a = a.m, !0 === a && b != f && ig(e, c), !0 === a ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = a), zj(e) && (d.ovlp = !0), Yi(f, d);
            case 9:
                return aj(b, d);
            case 4:
                return a = uj(b, e, c, d), tj(a, pg(e, c), f);
            case 8:
                return ej(b, e, c, f, d);
            case 10:
                return vj(b, e, c, f, d)
        }
    }

    function zj(a) {
        return K(a, Oh.f) || K(a, Oh.h)
    };

    function W(a) {
        this.g = [];
        this.b = a || window;
        this.a = 0;
        this.c = null;
        this.i = 0
    }
    var Aj;
    l = W.prototype;
    l.Oa = function(a, b) {
        0 != this.a || 0 != this.g.length || b && b != window ? this.wa(a, b) : (this.a = 2, this.Ea(new Bj(a, window)))
    };
    l.wa = function(a, b) {
        this.g.push(new Bj(a, b || this.b));
        Cj(this)
    };
    l.Ua = function(a) {
        this.a = 1;
        if (a) {
            var b = qf(188, Fa(this.Da, this, !0));
            this.c = this.b.setTimeout(b, a)
        }
    };
    l.Da = function(a) {
        a && ++this.i;
        1 == this.a && (null != this.c && (this.b.clearTimeout(this.c), this.c = null), this.a = 0);
        Cj(this)
    };
    l.$a = function() {
        return !(!window || !Array)
    };
    l.Qa = function() {
        return this.i
    };

    function Cj(a) {
        var b = qf(189, Fa(a.ab, a));
        a.b.setTimeout(b, 0)
    }
    l.ab = function() {
        if (0 == this.a && this.g.length) {
            var a = this.g.shift();
            this.a = 2;
            var b = qf(190, Fa(this.Ea, this, a));
            a.a.setTimeout(b, 0);
            Cj(this)
        }
    };
    l.Ea = function(a) {
        this.a = 0;
        a.b()
    };

    function Dj(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }

    function Ej(a) {
        return !!a && ("object" === typeof a || "function" === typeof a) && Dj(a) && Qd(a.nq) && Qd(a.nqa) && Qd(a.al) && Qd(a.rl)
    }

    function Fj() {
        if (Aj && Dj(Aj)) return Aj;
        var a = ug(),
            b = a.google_jobrunner;
        return Ej(b) ? Aj = b : a.google_jobrunner = Aj = new W(a)
    }

    function Gj(a, b) {
        Fj().nq(a, b)
    }

    function Hj(a, b) {
        Fj().nqa(a, b)
    }
    W.prototype.nq = W.prototype.Oa;
    W.prototype.nqa = W.prototype.wa;
    W.prototype.al = W.prototype.Ua;
    W.prototype.rl = W.prototype.Da;
    W.prototype.sz = W.prototype.$a;
    W.prototype.tc = W.prototype.Qa;

    function Bj(a, b) {
        this.b = a;
        this.a = b
    };

    function Ij(a, b) {
        var c = Yd(b);
        if (c) {
            c = O(c);
            var d = gc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" != d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function Jj(a) {
        var b = this;
        this.a = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: function(c, d) {
                var e = Kj("rx", c),
                    f = Number;
                a: {
                    if (c && (c = c.match("dt=([^&]+)")) && 2 == c.length) {
                        c = c[1];
                        break a
                    }
                    c = ""
                }
                f = f(c);
                f = (new Date).getTime() - f;
                e = e.replace(/&dtd=(\d+|-?M)/, "&dtd=" + (1E5 <= f ? "M" : 0 <= f ? f : "-M"));
                b.set(d, e);
                return e
            }
        });
        this.b = a.google_iframe_oncopy
    }
    Jj.prototype.set = function(a, b) {
        var c = this;
        this.b.handlers[a] = b;
        this.a.addEventListener && this.a.addEventListener("load", function() {
            var d = c.a.document.getElementById(a);
            try {
                var e = d.contentWindow.document;
                if (d.onload && e && (!e.body || !e.body.firstChild)) d.onload()
            } catch (f) {}
        }, !1)
    };

    function Kj(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)"),
            d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    var Lj, Mj = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    var X = Mj;
    /[\x00&<>"']/.test(X) && (-1 != X.indexOf("&") && (X = X.replace(ab, "&amp;")), -1 != X.indexOf("<") && (X = X.replace(bb, "&lt;")), -1 != X.indexOf(">") && (X = X.replace(cb, "&gt;")), -1 != X.indexOf('"') && (X = X.replace(db, "&quot;")), -1 != X.indexOf("'") && (X = X.replace(eb, "&#39;")), -1 != X.indexOf("\x00") && (X = X.replace(fb, "&#0;")));
    Mj = X;
    Lj = Mj;
    var Nj = {},
        Oj = (Nj.google_ad_modifications = !0, Nj.google_analytics_domain_name = !0, Nj.google_analytics_uacct = !0, Nj.google_pause_ad_requests = !0, Nj);

    function Pj(a) {
        switch (a) {
            case "":
            case "Test":
            case "Real":
                return !0;
            default:
                return !1
        }
    }

    function Qj(a) {
        this.c = D;
        this.b = void 0 === a ? !1 : a;
        this.a = new Wb
    }

    function Rj(a) {
        var b = a.a.get("__gads", "");
        return a.b && !Pj(b) ? "Real" : b
    }
    Qj.prototype.write = function(a) {
        var b = y(a, 1);
        if (this.b) {
            if (!Pj(this.a.get("__gads", ""))) return;
            Pj(b) || (b = "Real")
        }
        this.a.set("__gads", b, y(a, 2) - this.c.Date.now() / 1E3, y(a, 3), y(a, 4), !1)
    };
    var Sj = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Tj = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;

    function Uj(a) {
        return Sj.test(a) && !Tj.test(a)
    }
    var Vj = p;

    function Wj(a) {
        a = "https://adservice" + (a + "/adsid/integrator.js");
        var b = ["domain=" + encodeURIComponent(p.location.hostname)];
        Y[3] >= +new Date && b.push("adsid=" + encodeURIComponent(Y[1]));
        return a + "?" + b.join("&")
    }
    var Y, Z;

    function Xj() {
        Vj = p;
        Y = Vj.googleToken = Vj.googleToken || {};
        var a = +new Date;
        Y[1] && Y[3] > a && 0 < Y[2] || (Y[1] = "", Y[2] = -1, Y[3] = -1, Y[4] = "", Y[6] = "");
        Z = Vj.googleIMState = Vj.googleIMState || {};
        Uj(Z[1]) || (Z[1] = ".google.com");
        ya(Z[5]) || (Z[5] = []);
        "boolean" !== typeof Z[6] && (Z[6] = !1);
        ya(Z[7]) || (Z[7] = []);
        "number" !== typeof Z[8] && (Z[8] = 0)
    }
    var Yj = {
        la: function() {
            return 0 < Z[8]
        },
        Wa: function() {
            Z[8]++
        },
        Xa: function() {
            0 < Z[8] && Z[8]--
        },
        Ya: function() {
            Z[8] = 0
        },
        fb: function() {
            return !1
        },
        Pa: function() {
            return Z[5]
        },
        Ma: function(a) {
            try {
                a()
            } catch (b) {
                p.setTimeout(function() {
                    throw b;
                }, 0)
            }
        },
        Va: function() {
            if (!Yj.la()) {
                var a = p.document,
                    b = function(e) {
                        e = Wj(e);
                        a: {
                            try {
                                var f = qa();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        nh(a, e, f);
                        f = a.createElement("script");
                        f.type = "text/javascript";
                        f.onerror = function() {
                            return p.processGoogleToken({}, 2)
                        };
                        e = Zb(e);
                        vb(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), Yj.Wa()
                        } catch (g) {}
                    },
                    c = Z[1];
                b(c);
                ".google.com" != c && b(".google.com");
                b = {};
                var d = (b.newToken = "FBT", b);
                p.setTimeout(function() {
                    return p.processGoogleToken(d, 1)
                }, 1E3)
            }
        }
    };

    function Zj() {
        p.processGoogleToken = p.processGoogleToken || function(a, b) {
            var c = a;
            c = void 0 === c ? {} : c;
            b = void 0 === b ? 0 : b;
            a = c.newToken || "";
            var d = "NT" == a,
                e = parseInt(c.freshLifetimeSecs || "", 10),
                f = parseInt(c.validLifetimeSecs || "", 10),
                g = c["1p_jar"] || "";
            c = c.pucrd || "";
            Xj();
            1 == b ? Yj.Ya() : Yj.Xa();
            var h = Vj.googleToken = Vj.googleToken || {},
                k = 0 == b && a && "string" === typeof a && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
            d = d && !Yj.la() && (!(Y[3] >= +new Date) || "NT" == Y[1]);
            var n = !(Y[3] >= +new Date) && 0 != b;
            if (k || d || n) d = +new Date, e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Dc("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + b, null), h[5] = b, h[1] = a, h[2] = e, h[3] = f, h[4] = g, h[6] = c, Xj();
            if (k || !Yj.la()) {
                b = Yj.Pa();
                for (a = 0; a < b.length; a++) Yj.Ma(b[a]);
                b.length = 0
            }
        };
        Xj();
        Y[3] >= +new Date && Y[2] >= +new Date || Yj.Va()
    };
    var ak = Ab("script");

    function bk() {
        D.google_sa_impl && !D.document.getElementById("google_shimpl") && (D.google_sa_queue = null, D.google_sl_win = null, D.google_sa_impl = null);
        if (!D.google_sa_queue) {
            D.google_sa_queue = [];
            D.google_sl_win = D;
            D.google_process_slots = function() {
                return ck(D)
            };
            var a = dk();
            nh(D.document, a);
            !K(D, "20199337") || !sb() || r("iPhone") && !r("iPod") && !r("iPad") || r("iPad") || r("iPod") ? fc(D.document, a).id = "google_shimpl" : (a = Xb(document, "IFRAME"), a.id = "google_shimpl", a.style.display = "none", D.document.documentElement.appendChild(a), Ii(D, "google_shimpl", "<!doctype html><html><body><" + (ak + ">google_sl_win=window.parent;google_async_iframe_id='google_shimpl';</") + (ak + ">") + ek() + "</body></html>"), a.contentWindow.document.close())
        }
    }
    var ck = qf(215, function(a) {
        var b = a.google_sa_queue,
            c = b.shift();
        a.google_sa_impl || rf("shimpl", {
            t: "no_fn"
        });
        "function" == wa(c) && pf(216, c);
        b.length && a.setTimeout(function() {
            return ck(a)
        }, 0)
    });

    function fk(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function ek() {
        var a = dk();
        return "<" + ak + ' src="' + a + '"></' + ak + ">"
    }

    function dk() {
        var a = "/show_ads_impl.js";
        a = void 0 === a ? "/show_ads_impl.js" : a;
        a: {
            if (Ic) try {
                var b = D.google_cafe_host || D.top.google_cafe_host;
                if (b) {
                    var c = b;
                    break a
                }
            } catch (d) {}
            c = Mc()
        }
        return Ef(c, ["/pagead/js/", Hc(), "/r20190131", a, ""].join(""), "https")
    }

    function gk(a, b, c, d) {
        return function() {
            var e = !1;
            d && Fj().al(3E4);
            try {
                Ii(a, b, c), e = !0
            } catch (g) {
                var f = ug().google_jobrunner;
                Ej(f) && f.rl()
            }
            e && (e = Kj("google_async_rrc", c), (new Jj(a)).set(b, gk(a, b, e, !1)))
        }
    }

    function hk(a) {
        if (!Ji) a: {
            for (var b = [p.top], c = [], d = 0, e; e = b[d++];) {
                c.push(e);
                try {
                    if (e.frames)
                        for (var f = e.frames.length, g = 0; g < f && 1024 > b.length; ++g) b.push(e.frames[g])
                } catch (k) {}
            }
            for (b = 0; b < c.length; b++) try {
                var h = c[b].frames.google_esf;
                if (h) {
                    Ji = h;
                    break a
                }
            } catch (k) {}
            Ji = null
        }
        if (!Ji) {
            if (/[^a-z0-9-]/.test(a)) return null;
            c = Xb(document, "IFRAME");
            c.id = "google_esf";
            c.name = "google_esf";
            h = Df(Gc("", "googleads.g.doubleclick.net"), ["/pagead/html/", Hc(), "/r20190131/zrt_lookup.html#", encodeURIComponent("")].join(""));
            c.src = h;
            c.style.display = "none";
            c.setAttribute("data-ad-client", qh(a));
            return c
        }
        return null
    }

    function ik(a, b, c) {
        jk(a, b, c, function(d, e, f) {
            d = d.document;
            for (var g = e.id, h = 0; !g || d.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e.id = g;
            e.name = g;
            g = Number(f.google_ad_width || 0);
            h = Number(f.google_ad_height || 0);
            var k = f.ds || "";
            k && (k += k.endsWith(";") ? "" : ";");
            var n = "";
            if (!f.google_enable_single_iframe) {
                n = ["<iframe"];
                for (m in e) e.hasOwnProperty(m) && n.push(m + "=" + e[m]);
                n.push('style="left:0;position:absolute;top:0;border:0px;width:' + (g + "px;height:" + (h + 'px;"')));
                n.push("></iframe>");
                n = n.join(" ")
            }
            var m = e.id;
            var t = "";
            t = void 0 === t ? "" : t;
            g = "border:none;height:" + h + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + (g + "px;background-color:transparent;");
            m = ['<ins id="' + (m + '_expand"'), ' style="display:inline-table;' + g + (void 0 === k ? "" : k) + '"', t ? ' data-ad-slot="' + t + '">' : ">", '<ins id="' + (m + '_anchor" style="display:block;') + g + '">', n, "</ins></ins>"].join("");
            16 == f.google_reactive_ad_format ? (f = d.createElement("div"), f.innerHTML = m, c.appendChild(f.firstChild)) : c.innerHTML = m;
            return e.id
        })
    }

    function jk(a, b, c, d) {
        var e = b.google_ad_width,
            f = b.google_ad_height;
        K(a, Qh.h) ? (tf(!0), b.google_enable_single_iframe = !0) : K(a, Qh.f) && tf(!1);
        var g = {};
        null != e && (g.width = e && '"' + e + '"');
        null != f && (g.height = f && '"' + f + '"');
        g.frameborder = '"0"';
        g.marginwidth = '"0"';
        g.marginheight = '"0"';
        g.vspace = '"0"';
        g.hspace = '"0"';
        g.allowtransparency = '"true"';
        g.scrolling = '"no"';
        g.allowfullscreen = '"true"';
        g.onload = '"' + Lj + '"';
        d = d(a, g, b);
        kk(a, c, b);
        (c = hk(b.google_ad_client)) && a.document.documentElement.appendChild(c);
        c = Ha;
        e = (new Date).getTime();
        b.google_lrv = Hc();
        b.google_async_iframe_id = d;
        b.google_unique_id = Sd(a);
        b.google_start_time = c;
        b.google_bpp = e > c ? e - c : 1;
        b.google_async_rrc = 0;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[d] = b;
        a.google_t12n_vars = kh;
        if (b.google_enable_single_iframe) {
            var h = {
                pubWin: a,
                iframeWin: null,
                vars: b
            };
            fk(a, function() {
                a.google_sa_impl(h)
            }, a.document.getElementById(d + "_anchor") ? Gj : Hj)
        } else fk(a, gk(a, d, ["<!doctype html><html><body>", "<" + ak + ">", "google_sl_win=window.parent;google_iframe_start_time=new Date().getTime();", 'google_async_iframe_id="' + d + '";', "</" + ak + ">", "<" + ak + ">window.parent.google_sa_impl({iframeWin: window, pubWin: window.parent, vars: window.parent['google_sv_map']['" + (d + "']});</") + ak + ">", "</body></html>"].join(""), !0), a.document.getElementById(d) ? Gj : Hj)
    }

    function kk(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Ub[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = nc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, n = 0, m = 0; m < k.length; ++m) {
                            var t = k[m];
                            if (t.nodeName && t.nodeName.toString().toLowerCase() === g) {
                                if (b === t) {
                                    g = "." + n;
                                    break a
                                }++n
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var u = a.parent;
                for (e = 0; u && u !== a && 25 > e; ++e) {
                    var v = u.frames;
                    for (d = 0; d < v.length; ++d)
                        if (a === v[d]) {
                            b.push(d);
                            break
                        } a = u;
                    u = a.parent
                }
            } catch (J) {}
            c.google_ad_dom_fingerprint = nc(h + b.join()).toString()
        }
    }
    var lk = !Kc;

    function mk(a) {
        var b = a.value,
            c = "https://partner.googleadservices.com/gampad/cookie.js?domain=" + a.domain + "&callback=_gfp_s_&client=" + a.cb;
        a.bb && (c += "&test=1");
        b && (c += "&cookie=" + encodeURIComponent(b) + "&crv=" + Number("Test" !== b));
        return c
    }

    function nk(a) {
        var b = void 0 === b ? mk : b;
        var c = D._gfp_a_;
        if ("boolean" !== typeof c) throw Error("Illegal value of _gfp_a_: " + c);
        if (c) {
            c = D._gfp_p_;
            if ("boolean" !== typeof c) throw Error("Illegal value of _gfp_p_: " + c);
            if (!c) {
                if (H(225)) {
                    c = H(226);
                    var d = new Qj(c);
                    navigator.cookieEnabled && (D._gfp_s_ = qf(629, function(e) {
                        delete D._gfp_s_;
                        if (!e) throw Error("Invalid JSONP response");
                        if (e = e._cookies_) {
                            var f = e[0];
                            if (!f) throw Error("Invalid JSONP response");
                            e = f._value_;
                            var g = f._expires_,
                                h = f._path_;
                            f = f._domain_;
                            if ("string" !== typeof e || "number" !== typeof g || "string" !== typeof h || "string" !== typeof f) throw Error("Invalid JSONP response");
                            d.write(Sb(Rb(Qb(Pb(e), g), h), f))
                        }
                    }), fc(D.document, b({
                        domain: D.location.hostname,
                        cb: a,
                        bb: c,
                        value: Rj(d)
                    })))
                }
                D._gfp_p_ = !0
            }
        }
    };

    function ok(a, b) {
        a = a.attributes;
        for (var c = a.length, d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = $a(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                if (!b.hasOwnProperty(f)) {
                    e = e.value;
                    var g = {};
                    g = (g.google_reactive_ad_format = Ec, g.google_allow_expandable_ads = uc, g);
                    e = g.hasOwnProperty(f) ? g[f](e, null) : e;
                    null !== e && (b[f] = e)
                }
            }
        }
    }

    function pk(a) {
        if (a = Nd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function qk(a, b, c) {
        ok(a, b);
        if (c.document && c.document.body && !wj(c, b) && !b.google_reactive_ad_format) {
            var d = parseInt(a.style.width, 10),
                e = Ij(a, c);
            if (0 < e && d > e) {
                var f = parseInt(a.style.height, 10);
                d = !!Ub[d + "x" + f];
                var g = e;
                if (d) {
                    var h = Vb(e, f);
                    if (h) g = h, b.google_ad_format = h + "x" + f + "_0ads_al";
                    else throw new N("No slot size for availableWidth=" + e);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = g;
                d || (b.google_ad_format = null, b.google_override_format = !0);
                e = g;
                a.style.width = e + "px";
                f = kj(e, "auto", c, a, b);
                g = e;
                f.a.fa(c, b, a);
                Ni(f, g, b);
                f = f.a;
                b.google_responsive_formats = null;
                f.minWidth() > e && !d && (b.google_ad_width = f.minWidth(), a.style.width = f.minWidth() + "px")
            }
        }
        d = a.offsetWidth || Q(a, c, "width", E) || b.google_ad_width || 0;
        e = Ga(kj, d, "auto", c, a, b, !1, !0);
        f = Yd(c) || c;
        g = b.google_ad_client;
        f = f.location && "#ftptohbh" === f.location.hash ? 2 : ih(f.location, "google_responsive_slot_debug") || ih(f.location, "google_responsive_slot_preview") || H(217) ? 1 : H(218) ? 2 : rh(f, 1, g) ? 1 : th(f, 11, g) ? H(219) ? 2 : 1 : 0;
        if (g = 0 !== f) b: if (!ac() && !H(216) || b.google_reactive_ad_format || wj(c, b) || Xf(a, b) || b.google_ad_resize) g = !1;
            else {
                for (g = a; g; g = g.parentElement) {
                    h = gc(g, c);
                    if (!h) {
                        b.gfwrnwer = 18;
                        g = !1;
                        break b
                    }
                    if (!Oa(["static", "relative"], h.position)) {
                        b.gfwrnwer = 17;
                        g = !1;
                        break b
                    }
                }
                if (!H(216) && (g = bg(c, a, d, .3, b), !0 !== g)) {
                    b.gfwrnwer = g;
                    g = !1;
                    break b
                }
                g = Xd(c) == c ? !0 : !1
            } g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === f ? (f = {}, Ni(e(), d, f), b.google_resizing_width = f.google_ad_width, b.google_resizing_height = f.google_ad_height, f.ds && (b.ds = f.ds), b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), th(c, 11, b.google_ad_client) && (d = H(219) ? "AutoOptimizeAdSizeOriginal" : "AutoOptimizeAdSizeVariant", b.google_ad_channel = b.google_ad_channel ? [b.google_ad_channel, d].join("+") : d), d = !0) : d = !1;
        if (e = wj(c, b)) xj(e, a, b, c, d);
        else {
            if (Xf(a, b)) {
                if (d = gc(a, c)) a.style.width = d.width, a.style.height = d.height, Wf(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = pk(c)
            } else Wf(a.style, b), 300 == b.google_ad_width && 250 == b.google_ad_height && (d = a.style.width, a.style.width = "100%", e = a.offsetWidth, a.style.width = d, b.google_available_width = e);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive && !K(c, Gh.h) ? xj(10, a, b, c, !1) : K(c, Hh.h) && 12 == b.google_responsive_auto_format && (a = cg(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function rk(a, b, c) {
        var d = window;
        return function() {
            var e = We(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (We() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function sk(a, b) {
        return rk(a, b, function(c, d) {
            (new ff).M(c, d)
        })
    };

    function tk() {
        var a = this;
        this.L = this.ba = this.i = this.g = this.b = 0;
        this.Z = !1;
        this.o = this.c = this.a = 0;
        if ("number" !== typeof p.goog_pvsid) try {
            Object.defineProperty(p, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52))
            })
        } catch (b) {}
        this.da = Number(p.goog_pvsid) || -1;
        (this.$ = .1 > Math.random()) && uk("https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics&pvsid=" + this.da + "&test=1");
        this.ca = new PerformanceObserver(sk(640, function(b) {
            b = ba(b.getEntries());
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                if ("layout-shift" === c.entryType) {
                    var d = c;
                    d.hadRecentInput || H(241) && !(.01 < d.value) || (a.b += Number(d.value), Number(d.value) > a.g && (a.g = Number(d.value)), a.i += 1)
                }
                "largest-contentful-paint" === c.entryType && (d = c, a.ba = Math.floor(d.renderTime || d.loadTime));
                "first-input" === c.entryType && (d = c, a.L = Number((d.processingStart - d.startTime).toFixed(3)), a.Z = !0);
                "longtask" === c.entryType && (a.a += c.duration, c.duration > a.c && (a.c = c.duration), a.o += 1)
            }
        }));
        this.ea = !1;
        this.A = sk(641, this.A.bind(this))
    }
    ka(tk, ph);
    tk.prototype.A = function() {
        var a = document;
        if (2 === ({
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0) && !this.ea) {
            this.ea = !0;
            this.ca.takeRecords();
            a = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (a += "&cls=" + this.b.toFixed(3), a += "&mls=" + this.g.toFixed(3), a += "&nls=" + this.i);
            window.LargestContentfulPaint && (a += "&lcp=" + Math.floor(this.ba));
            window.PerformanceEventTiming && this.Z && (a += "&fid=" + this.L);
            window.PerformanceLongTaskTiming && (a += "&cbt=" + this.a, a += "&mbt=" + this.c, a += "&nlt=" + this.o);
            var b = yh.j().b();
            a += "&eid=" + b.join();
            a += "&pvsid=" + this.da;
            this.$ && (a += "&test=1");
            uk(a)
        }
    };

    function uk(a) {
        window.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        })
    };

    function vk(a) {
        return Wd.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }

    function wk(a, b) {
        a.setAttribute("data-adsbygoogle-status", "done");
        xk(a, b)
    }

    function xk(a, b) {
        var c = window,
            d = Vd();
        d.google_spfd || (d.google_spfd = qk);
        (d = b.google_reactive_ads_config) || qk(a, b, c);
        if (!yk(a, b, c)) {
            d || (c.google_lpabyc = Xh(c, a));
            if (d) {
                d = d.page_level_pubvars || {};
                if (I(D).page_contains_reactive_tag && !I(D).allow_second_reactive_tag) {
                    if (d.pltais) {
                        $d(!1);
                        return
                    }
                    throw new N("Only one 'enable_page_level_ads' allowed per page.");
                }
                I(D).page_contains_reactive_tag = !0;
                $d(7 === d.google_pgb_reactive)
            } else Rd(c);
            Pd(Oj, function(e, f) {
                b[f] = b[f] || c[f]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (I(D).first_tag_on_page || 0);
            pf(164, function() {
                ik(c, b, a)
            })
        }
    }

    function yk(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d) {
            var e = d.page_level_pubvars;
            var f = (za(e) ? e : {}).google_tag_origin
        }
        e = "string" === typeof a.className && /(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);
        var g = b.google_ad_slot;
        var h = f || b.google_tag_origin;
        f = I(c);
        ae(f.ad_whitelist || [], g, h) ? g = null : (h = f.space_collapsing || "none", g = (g = ae(f.ad_blacklist || [], g)) ? {
            ta: !0,
            Ia: g.space_collapsing || h
        } : f.remove_ads_by_default ? {
            ta: !0,
            Ia: h,
            ia: f.ablation_viewport_offset
        } : null);
        if (g && g.ta && "on" != b.google_adtest && !e && (e = og(a, c), !g.ia || g.ia && (e || 0) >= g.ia)) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = Aa(a), c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == g.Ia && (null !== tc(a.getAttribute("width")) && a.setAttribute("width", 0), null !== tc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0;
        if ((e = gc(a, c)) && "none" == e.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (p.console && p.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function zk(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (vk(e) && "reserved" != e.getAttribute("data-adsbygoogle-status") && (!a || d.id == a)) return d
        }
        return null
    }

    function Ak() {
        var a = Xb(document, "INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        wc(a);
        return a
    }

    function Bk(a) {
        var b = {};
        Pd(we, function(e, f) {
            !1 === a.enable_page_level_ads ? b[f] = !1 : a.hasOwnProperty(f) && (b[f] = a[f])
        });
        za(a.enable_page_level_ads) && (b.page_level_pubvars = a.enable_page_level_ads);
        var c = Ak();
        Tb.body.appendChild(c);
        var d = {};
        d = (d.google_reactive_ads_config = b, d.google_ad_client = a.google_ad_client, d);
        d.google_pause_ad_requests = I(D).pause_ad_requests || !1;
        wk(c, d)
    }

    function Ck(a) {
        return "complete" == a.readyState || "interactive" == a.readyState
    }

    function Dk(a) {
        function b() {
            return Bk(a)
        }
        var c = void 0 === c ? Tb : c;
        var d = Yd(window);
        if (!d) throw new N("Page-level tag does not work inside iframes.");
        Uf(d).wasPlaTagProcessed = !0;
        if (c.body || Ck(c)) b();
        else {
            var e = Ra(qf(191, b));
            Cc(c, "DOMContentLoaded", e);
            (new p.MutationObserver(function(f, g) {
                c.body && (e(), g.disconnect())
            })).observe(c, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Ek(a) {
        var b = {};
        pf(165, function() {
            Fk(a, b)
        }, function(c) {
            c.client = c.client || b.google_ad_client || a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        })
    }

    function Gk(a) {
        delete a.google_checked_head;
        lc(a, function(b, c) {
            ce[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), p.console.warn("AdSense head tag doesn't support " + b + " attribute."))
        })
    }

    function Fk(a, b) {
        if (null == a) throw new N("push() called with no parameters.");
        Ha = (new Date).getTime();
        bk();
        a: {
            if (void 0 != a.enable_page_level_ads) {
                if ("string" === typeof a.google_ad_client) {
                    var c = !0;
                    break a
                }
                throw new N("'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c) Hk(a, b);
        else if ((c = a.params) && Pd(c, function(e, f) {
                b[f] = e
            }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
        else {
            a = Ik(a.element);
            ok(a, b);
            c = I(p).head_tag_slot_vars || {};
            lc(c, function(e, f) {
                b.hasOwnProperty(f) || (b[f] = e)
            });
            if (a.hasAttribute("data-require-head") && !I(p).head_tag_slot_vars) throw new N("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
            if (!b.google_ad_client) throw new N("Ad client is missing from the slot.");
            H(210) && (b.google_apsail = vh(b.google_ad_client));
            var d = (c = 0 === (I(D).first_tag_on_page || 0) && Vh(b)) && Wh(c);
            c && !d && (Hk(c), I(D).skip_next_reactive_tag = !0);
            0 === (I(D).first_tag_on_page || 0) && (I(D).first_tag_on_page = 2);
            "_gfp_p_" in D || (D._gfp_p_ = !1);
            nk(b.google_ad_client);
            b.google_pause_ad_requests = I(D).pause_ad_requests || !1;
            wk(a, b);
            c && d && Jk(c)
        }
    }

    function Jk(a) {
        function b() {
            Uf(p).wasPlaTagProcessed || p.adsbygoogle && p.adsbygoogle.push(a)
        }
        Ck(Tb) ? b() : Cc(Tb, "DOMContentLoaded", Ra(b))
    }

    function Hk(a, b) {
        if (I(D).skip_next_reactive_tag) I(D).skip_next_reactive_tag = !1;
        else {
            0 === (I(D).first_tag_on_page || 0) && (I(D).first_tag_on_page = 1);
            b && a.tag_partner && (Zd(p, a.tag_partner), Zd(b, a.tag_partner));
            a: if (!I(D).ama_ran_on_page) {
                try {
                    var c = p.localStorage.getItem("google_ama_config")
                } catch (v) {
                    c = null
                }
                try {
                    var d = c ? new ne(c ? JSON.parse(c) : null) : null
                } catch (v) {
                    d = null
                }
                if (b = d)
                    if (c = A(b, pe, 3), !c || y(c, 1) <= +new Date) try {
                        p.localStorage.removeItem("google_ama_config")
                    } catch (v) {
                        Af(p, {
                            lserr: 1
                        })
                    } else {
                        if (Wh(a) && (c = xe(p.location.pathname, B(b, qe, 7)), !c || !Gb(c, 8))) break a;
                        I(D).ama_ran_on_page = !0;
                        A(b, te, 13) && 1 === y(A(b, te, 13), 1) && (c = 0, A(A(b, te, 13), ue, 6) && y(A(A(b, te, 13), ue, 6), 3) && (c = y(A(A(b, te, 13), ue, 6), 3) || 0), d = I(p), d.remove_ads_by_default = !0, d.space_collapsing = "slot", d.ablation_viewport_offset = c);
                        Hf(3, [Kb(b)]);
                        c = a.google_ad_client;
                        d = vf(xf, new uf(null, Bf(za(a.enable_page_level_ads) ? a.enable_page_level_ads : {})));
                        try {
                            var e = xe(p.location.pathname, B(b, qe, 7)),
                                f;
                            if (f = e) b: {
                                var g = y(e, 2);
                                if (g)
                                    for (var h = 0; h < g.length; h++)
                                        if (1 == g[h]) {
                                            f = !0;
                                            break b
                                        } f = !1
                            }
                            if (f) {
                                if (y(e, 4)) {
                                    f = {};
                                    var k = new uf(null, (f.google_package = y(e, 4), f));
                                    d = vf(d, k)
                                }
                                var n = new Ug(c, b, e, d),
                                    m = new Zg;
                                (new dh(n, m)).start();
                                var t = m.b;
                                var u = Ga(gh, p);
                                if (t.b) throw Error("Then functions already set.");
                                t.b = Ga(fh, p);
                                t.c = u;
                                bh(t)
                            }
                        } catch (v) {
                            Af(p, {
                                atf: -1
                            })
                        }
                    }
            } Dk(a)
        }
    }

    function Ik(a) {
        if (a) {
            if (!vk(a) && (a.id ? a = zk(a.id) : a = null, !a)) throw new N("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new N("'element' is not a good DOM element.");
        } else if (a = zk(), !a) throw new N("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Kk() {
        mf();
        gf.Fa(sf);
        pf(166, Lk)
    }

    function Lk() {
        var a = Od(Nd(D)) || D,
            b = I(a);
        if (b.plle) Ei(ei(a), 1);
        else {
            b.plle = !0;
            null == pc(a, "google_pem_mod") && qc(a, "google_pem_mod");
            var c = [null, null];
            try {
                var d = JSON.parse("[[[186,null,null,[1]],[189,null,null,[1]],[null,30,null,[null,4]],[196,null,null,[1]],[207,null,null,[1]]],[[12,[[1,[[21064123],[21064124]]],[10,[[21064522],[21064523,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]]]],[13,[[100,[[21064708],[21064709,[[215,null,null,[1]]]]]],[100,[[21065005,null,[4,null,6,null,null,null,null,[\x2221064523\x22]]],[21065006,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\x2221064523\x22]]],[21065011,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\x2221064523\x22]]]],[4,null,9,null,null,null,null,[\x22LayoutShift\x22]]]]],[10,[[500,[[20040030],[20040031,[[182,null,null,[1]]]]]],[2,[[21062810],[21062811]]],[null,[[21063914],[21063915,[[225,null,null,[1]]]]]],[1,[[21063996],[21063997,[[160,null,null,[1]]]]]],[50,[[21064530],[21064537,[[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]]]]]],[50,[[21064602],[21064603,[[226,null,null,[1]],[225,null,null,[1]]]]]],[1,[[21064801],[21064802,[[236,null,null,[1]]]]]],[1,[[21065070],[21065071],[21065072,[[243,null,null,[1]]]],[21065073,[[243,null,null,[1]]]]]],[1000,[[182982000,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982100,[[217,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182982200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]],[182982300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x227\x22]],[7,null,null,5,null,40,null,[\x227\x22]]]]]]],[1000,[[182983000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983100,[[219,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182983200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]],[182983300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2215\x22]],[7,null,null,5,null,1000,null,[\x2215\x22]],[4,null,24,null,null,null,null,[\x2211\x22]]]]]]],[1000,[[182984000,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984100,[[218,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[1000,[[182984200,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]],[182984300,null,[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2212\x22]],[7,null,null,5,null,20,null,[\x2212\x22]],[4,null,23,null,null,null,null,[\x221\x22]]]]]]],[50,[[368226410,[[190,null,null,[1]]]],[368226411,[[224,null,null,[1]],[190,null,null,[1]]]]],null,null,null,19,2],[50,[[368226420],[368226421]],null,null,null,19,2],[50,[[368226430],[368226431]],null,null,null,19,2],[10,[[368226570],[368226571,[[210,null,null,[1]],[211,null,null,[1]]]]],null,null,null,16],[10,[[368226580],[368226581,[[222,null,null,[1]]]]],null,null,null,17,4],[10,[[368226590],[368226591]],null,null,null,17,4],[10,[[368226600,null,[7,null,null,3,null,2]],[368226601,null,[7,null,null,3,null,2]]],null,null,null,14,5],[10,[[368226610,[[218,null,null,[1]],[216,null,null,[1]],[190,null,null,[1]]],[7,null,null,3,null,2]],[368226611,[[216,null,null,[1]],[217,null,null,[1]],[190,null,null,[1]]],[7,null,null,3,null,2]]],null,null,null,14,5],[1000,[[519641231,null,[2,[[12,null,null,5,null,null,\x22[02468]$\x22,[\x2213\x22]],[7,null,null,5,null,100,null,[\x2213\x22]]]]],[519641232,[[230,null,null,[1]],[191,null,null,[1]]],[2,[[12,null,null,5,null,null,\x22[13579]$\x22,[\x2213\x22]],[7,null,null,5,null,100,null,[\x2213\x22]]]]]]],[1,[[633794031,[[190,null,null,[1]]]],[633794032,[[232,null,null,[1]],[190,null,null,[1]]]],[633794033,[[233,null,null,[1]],[190,null,null,[1]]]],[633794034,[[233,null,null,[1]],[232,null,null,[1]],[190,null,null,[1]]]]],null,null,null,21],[50,[[633794041,[[190,null,null,[1]]]],[633794043,[[227,null,null,[1]],[190,null,null,[1]]]]],null,null,null,18],[10,[[633794042,[[208,null,null,[1]],[190,null,null,[1]]]],[633794044,[[190,null,null,[1]]]]],null,null,null,18]]],[11,[[50,[[368226300],[368226301]],null,null,null,11,6],[50,[[368226305],[368226306]],null,null,null,11,6],[50,[[368226310,[[190,null,null,[1]]]],[368226311,[[209,null,null,[1]],[190,null,null,[1]]]]],null,null,null,11,6]]]]]")
            } catch (m) {
                d = c
            }
            Hf(13, [d]);
            Di(new ki(d), Yh.j(), {
                xa: Th(a)
            }, ei(a));
            yh.j().a(12);
            yh.j().a(10);
            b.eids = Ka(yh.j().b(), String).concat(b.eids || []);
            b = b.eids;
            lh || (lh = new mh);
            var e = lh;
            Lc = !0;
            var f;
            d = Gh;
            var g = Gi(a, R(e, 136), [d.f, d.h]);
            T(b, g);
            th(a, 12) && (d = Bh, c = Ah, g = Hi(a, new Re(0, 999, 0), R(e, 149), R(e, 150), [d.f, d.h], 4), T(b, g), g == d.f ? f = c.f : g == d.h ? f = c.h : f = "", T(b, f));
            d = Fh;
            g = Hi(a, Zh, R(e, 160), R(e, 161), [d.f, d.R, d.P]);
            T(b, g);
            c = Eh;
            g == d.f ? f = c.f : g == d.R ? f = c.R : g == d.P ? f = c.P : f = "";
            T(b, f);
            d = Dh;
            g = Hi(a, bi, R(e, 179), R(e, 180), [d.f, d.V]);
            T(b, g);
            c = Ch;
            g == d.f ? f = c.f : g == d.V ? f = c.V : f = "";
            T(b, f);
            $a("") && T(b, "");
            d = Kh;
            g = Gi(a, R(e, 13), [d.v, d.f]);
            T(b, g);
            g = Gi(a, 0, [d.ra]);
            T(b, g);
            d = Lh;
            g = Gi(a, R(e, 60), [d.v, d.f]);
            T(b, g);
            g == Lh.v && (d = Mh, g = Gi(a, R(e, 66), [d.v, d.f]), T(b, g), d = Nh, g = Gi(a, R(e, 137), [d.v, d.f]), T(b, g));
            d = Hh;
            g = Gi(a, R(e, 98), [d.f, d.h]);
            T(b, g);
            d = Ih;
            g = Hi(a, ai, R(e, 173), R(e, 174), [d.f, d.h]);
            T(b, g);
            c = Jh;
            g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
            T(b, f);
            d = Oh;
            g = Hi(a, $h, R(e, 99), R(e, 100), [d.f, d.h]);
            T(b, g);
            c = Ph;
            g == d.f ? f = c.f : g == d.h ? f = c.h : f = "";
            T(b, f);
            d = Qh;
            g = Gi(a, R(e, 165), [d.f, d.h]);
            T(b, g);
            d = S;
            g = Hi(a, ci, R(e, 189), R(e, 190), [d.f, d.T, d.K, d.J, d.H, d.I]);
            T(b, g);
            c = Rh;
            g == d.f ? f = c.f : g == d.T ? f = c.T : g == d.K ? f = c.K : g == d.J ? f = c.J : g == d.H ? f = c.H : g == d.I ? f = c.I : f = "";
            T(b, f);
            d = Sh;
            g = Hi(a, di, R(e, 193), R(e, 194), [d.f, d.sa]);
            T(b, g);
            g = Gi(a, R(e, 185), ["20199337", "20199338"]);
            T(b, g);
            a = Yd(a) || a;
            ih(a.location, "google_mc_lab") && T(b, "242104166")
        }
        if (!r("Trident") && !r("MSIE") || 0 <= hb(tb(), 11)) {
            a = K(D, Mh.v) || K(D, Kh.v) || K(D, Kh.ra);
            jf(a);
            Xj();
            Uj(".google.co.kr") && (Z[1] = ".google.co.kr");
            Zj();
            try {
                if (D.PerformanceObserver && H(203) && !window.google_plmetrics) {
                    var h = new tk;
                    h.ca.observe({
                        entryTypes: ["layout-shift", "largest-contentful-paint", "first-input", "longtask"],
                        buffered: !H(240)
                    });
                    document.addEventListener("visibilitychange", h.A);
                    window.google_plmetrics = !0
                }
            } catch (m) {}
            if (h = Yd(p)) h = Uf(h), h.tagSpecificState[1] || (h.tagSpecificState[1] = new hh);
            if (f = D.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])')) {
                f.setAttribute("data-checked-head", "true");
                a = I(window);
                if (a.head_tag_slot_vars) throw new N("Only one AdSense head tag supported per page. The second tag is ignored.");
                h = {};
                ok(f, h);
                Gk(h);
                f = {};
                for (var k in h) f[k] = h[k];
                a.head_tag_slot_vars = f;
                k = {};
                k = (k.google_ad_client = h.google_ad_client, k.enable_page_level_ads = h, k);
                D.adsbygoogle || (D.adsbygoogle = []);
                h = D.adsbygoogle;
                h.loaded ? h.push(k) : h.splice(0, 0, k)
            }
            k = window.adsbygoogle;
            if (!k || !k.loaded) {
                h = {
                    push: Ek,
                    loaded: !0
                };
                try {
                    Object.defineProperty(h, "requestNonPersonalizedAds", {
                        set: Mk
                    }), Object.defineProperty(h, "pauseAdRequests", {
                        set: Nk
                    }), Object.defineProperty(h, "cookieOptions", {
                        set: Ok
                    }), Object.defineProperty(h, "onload", {
                        set: Pk
                    })
                } catch (m) {}
                if (k)
                    for (a = ba(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), f = a.next(); !f.done; f = a.next()) f = f.value, void 0 !== k[f] && (h[f] = k[f]);
                "_gfp_a_" in window || (window._gfp_a_ = lk);
                if (k && k.shift) try {
                    var n;
                    for (a = 20; 0 < k.length && (n = k.shift()) && 0 < a;) Ek(n), --a
                } catch (m) {
                    throw window.setTimeout(Kk, 0), m;
                }
                window.adsbygoogle = h;
                k && (h.onload = k.onload)
            }
        }
    }

    function Mk(a) {
        if (+a) {
            if ((a = ec()) && a.frames && !a.frames.GoogleSetNPA) try {
                var b = a.document,
                    c = new Yb(b),
                    d = b.body || b.head && b.head.parentElement;
                if (d) {
                    var e = Xb(c.a, "IFRAME");
                    e.name = "GoogleSetNPA";
                    e.id = "GoogleSetNPA";
                    e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                    d.appendChild(e)
                }
            } catch (f) {}
        } else(b = ec().document.getElementById("GoogleSetNPA")) && b.parentNode && b.parentNode.removeChild(b)
    }

    function Nk(a) {
        +a ? I(D).pause_ad_requests = !0 : (I(D).pause_ad_requests = !1, a = function() {
            if (!I(D).pause_ad_requests) {
                var b = Vd(),
                    c = Vd();
                try {
                    if (Tb.createEvent) {
                        var d = Tb.createEvent("CustomEvent");
                        d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !1, !1, "");
                        b.dispatchEvent(d)
                    } else if (Qd(c.CustomEvent)) {
                        var e = new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1,
                            detail: ""
                        });
                        b.dispatchEvent(e)
                    } else if (Qd(c.Event)) {
                        var f = new Event("adsbygoogle-pub-unpause-ad-requests-event", {
                            bubbles: !1,
                            cancelable: !1
                        });
                        b.dispatchEvent(f)
                    }
                } catch (g) {}
            }
        }, p.setTimeout(a, 0), p.setTimeout(a, 1E3))
    }

    function Ok(a) {
        switch (a) {
            case 0:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            case 2:
                a = lk;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        D._gfp_a_ = a;
        "_gfp_p_" in D && (a = D.google_sv_map, nk(a[mc(a)].google_ad_client))
    }

    function Pk(a) {
        Qd(a) && window.setTimeout(a, 0)
    };
    Kk();
}).call(this);