/*! Built with http://stenciljs.com */
App.loadBundle("chunk-f8d8f6ab.js", ["exports"], function (t) { window.App.h; var e = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}; !function (t) { if (!t.fetch) {
    var e = { searchParams: "URLSearchParams" in t, iterable: "Symbol" in t && "iterator" in Symbol, blob: "FileReader" in t && "Blob" in t && function () { try {
            return new Blob, !0;
        }
        catch (t) {
            return !1;
        } }(), formData: "FormData" in t, arrayBuffer: "ArrayBuffer" in t };
    if (e.arrayBuffer)
        var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], n = function (t) { return t && DataView.prototype.isPrototypeOf(t); }, o = ArrayBuffer.isView || function (t) { return t && r.indexOf(Object.prototype.toString.call(t)) > -1; };
    f.prototype.append = function (t, e) { t = s(t), e = c(e); var r = this.map[t]; this.map[t] = r ? r + "," + e : e; }, f.prototype.delete = function (t) { delete this.map[s(t)]; }, f.prototype.get = function (t) { return t = s(t), this.has(t) ? this.map[t] : null; }, f.prototype.has = function (t) { return this.map.hasOwnProperty(s(t)); }, f.prototype.set = function (t, e) { this.map[s(t)] = c(e); }, f.prototype.forEach = function (t, e) { for (var r in this.map)
        this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this); }, f.prototype.keys = function () { var t = []; return this.forEach(function (e, r) { t.push(r); }), u(t); }, f.prototype.values = function () { var t = []; return this.forEach(function (e) { t.push(e); }), u(t); }, f.prototype.entries = function () { var t = []; return this.forEach(function (e, r) { t.push([r, e]); }), u(t); }, e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
    var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    v.prototype.clone = function () { return new v(this, { body: this._bodyInit }); }, y.call(v.prototype), y.call(m.prototype), m.prototype.clone = function () { return new m(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new f(this.headers), url: this.url }); }, m.error = function () { var t = new m(null, { status: 0, statusText: "" }); return t.type = "error", t; };
    var a = [301, 302, 303, 307, 308];
    m.redirect = function (t, e) { if (-1 === a.indexOf(e))
        throw new RangeError("Invalid status code"); return new m(null, { status: e, headers: { location: t } }); }, t.Headers = f, t.Request = v, t.Response = m, t.fetch = function (t, r) { return new Promise(function (n, o) { var i = new v(t, r), a = new XMLHttpRequest; a.onload = function () { var t, e, r = { status: a.status, statusText: a.statusText, headers: (t = a.getAllResponseHeaders() || "", e = new f, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function (t) { var r = t.split(":"), n = r.shift().trim(); if (n) {
            var o = r.join(":").trim();
            e.append(n, o);
        } }), e) }; r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"); var o = "response" in a ? a.response : a.responseText; n(new m(o, r)); }, a.onerror = function () { o(new TypeError("Network request failed")); }, a.ontimeout = function () { o(new TypeError("Network request failed")); }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && e.blob && (a.responseType = "blob"), i.headers.forEach(function (t, e) { a.setRequestHeader(e, t); }), a.send(void 0 === i._bodyInit ? null : i._bodyInit); }); }, t.fetch.polyfill = !0;
} function s(t) { if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
    throw new TypeError("Invalid character in header field name"); return t.toLowerCase(); } function c(t) { return "string" != typeof t && (t = String(t)), t; } function u(t) { var r = { next: function () { var e = t.shift(); return { done: void 0 === e, value: e }; } }; return e.iterable && (r[Symbol.iterator] = function () { return r; }), r; } function f(t) { this.map = {}, t instanceof f ? t.forEach(function (t, e) { this.append(e, t); }, this) : Array.isArray(t) ? t.forEach(function (t) { this.append(t[0], t[1]); }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) { this.append(e, t[e]); }, this); } function h(t) { if (t.bodyUsed)
    return Promise.reject(new TypeError("Already read")); t.bodyUsed = !0; } function l(t) { return new Promise(function (e, r) { t.onload = function () { e(t.result); }, t.onerror = function () { r(t.error); }; }); } function p(t) { var e = new FileReader, r = l(e); return e.readAsArrayBuffer(t), r; } function d(t) { if (t.slice)
    return t.slice(0); var e = new Uint8Array(t.byteLength); return e.set(new Uint8Array(t)), e.buffer; } function y() { return this.bodyUsed = !1, this._initBody = function (t) { if (this._bodyInit = t, t)
    if ("string" == typeof t)
        this._bodyText = t;
    else if (e.blob && Blob.prototype.isPrototypeOf(t))
        this._bodyBlob = t;
    else if (e.formData && FormData.prototype.isPrototypeOf(t))
        this._bodyFormData = t;
    else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
        this._bodyText = t.toString();
    else if (e.arrayBuffer && e.blob && n(t))
        this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
    else {
        if (!e.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !o(t))
            throw new Error("unsupported BodyInit type");
        this._bodyArrayBuffer = d(t);
    }
else
    this._bodyText = ""; this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")); }, e.blob && (this.blob = function () { var t = h(this); if (t)
    return t; if (this._bodyBlob)
    return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer)
    return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData)
    throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])); }, this.arrayBuffer = function () { return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p); }), this.text = function () { var t, e, r, n = h(this); if (n)
    return n; if (this._bodyBlob)
    return t = this._bodyBlob, r = l(e = new FileReader), e.readAsText(t), r; if (this._bodyArrayBuffer)
    return Promise.resolve(function (t) { for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++)
        r[n] = String.fromCharCode(e[n]); return r.join(""); }(this._bodyArrayBuffer)); if (this._bodyFormData)
    throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText); }, e.formData && (this.formData = function () { return this.text().then(b); }), this.json = function () { return this.text().then(JSON.parse); }, this; } function v(t, e) { var r, n, o = (e = e || {}).body; if (t instanceof v) {
    if (t.bodyUsed)
        throw new TypeError("Already read");
    this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new f(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0);
}
else
    this.url = String(t); if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new f(e.headers)), this.method = (n = (r = e.method || this.method || "GET").toUpperCase(), i.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o)
    throw new TypeError("Body not allowed for GET or HEAD requests"); this._initBody(o); } function b(t) { var e = new FormData; return t.trim().split("&").forEach(function (t) { if (t) {
    var r = t.split("="), n = r.shift().replace(/\+/g, " "), o = r.join("=").replace(/\+/g, " ");
    e.append(decodeURIComponent(n), decodeURIComponent(o));
} }), e; } function m(t, e) { e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new f(e.headers), this.url = e.url || "", this._initBody(t); } }("undefined" != typeof self ? self : void 0); var r = setTimeout; function n() { } function o(t) { if (!(this instanceof o))
    throw new TypeError("Promises must be constructed via new"); if ("function" != typeof t)
    throw new TypeError("not a function"); this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this); } function i(t, e) { for (; 3 === t._state;)
    t = t._value; 0 !== t._state ? (t._handled = !0, o._immediateFn(function () { var r = 1 === t._state ? e.onFulfilled : e.onRejected; if (null !== r) {
    var n;
    try {
        n = r(t._value);
    }
    catch (t) {
        return void s(e.promise, t);
    }
    a(e.promise, n);
}
else
    (1 === t._state ? a : s)(e.promise, t._value); })) : t._deferreds.push(e); } function a(t, e) { try {
    if (e === t)
        throw new TypeError("A promise cannot be resolved with itself.");
    if (e && ("object" == typeof e || "function" == typeof e)) {
        var r = e.then;
        if (e instanceof o)
            return t._state = 3, t._value = e, void c(t);
        if ("function" == typeof r)
            return void u((n = r, i = e, function () { n.apply(i, arguments); }), t);
    }
    t._state = 1, t._value = e, c(t);
}
catch (e) {
    s(t, e);
} var n, i; } function s(t, e) { t._state = 2, t._value = e, c(t); } function c(t) { 2 === t._state && 0 === t._deferreds.length && o._immediateFn(function () { t._handled || o._unhandledRejectionFn(t._value); }); for (var e = 0, r = t._deferreds.length; e < r; e++)
    i(t, t._deferreds[e]); t._deferreds = null; } function u(t, e) { var r = !1; try {
    t(function (t) { r || (r = !0, a(e, t)); }, function (t) { r || (r = !0, s(e, t)); });
}
catch (t) {
    if (r)
        return;
    r = !0, s(e, t);
} } o.prototype.catch = function (t) { return this.then(null, t); }, o.prototype.then = function (t, e) { var r = new this.constructor(n); return i(this, new function (t, e, r) { this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = r; }(t, e, r)), r; }, o.prototype.finally = function (t) { var e = this.constructor; return this.then(function (r) { return e.resolve(t()).then(function () { return r; }); }, function (r) { return e.resolve(t()).then(function () { return e.reject(r); }); }); }, o.all = function (t) { return new o(function (e, r) { if (!t || void 0 === t.length)
    throw new TypeError("Promise.all accepts an array"); var n = Array.prototype.slice.call(t); if (0 === n.length)
    return e([]); var o = n.length; function i(t, a) { try {
    if (a && ("object" == typeof a || "function" == typeof a)) {
        var s = a.then;
        if ("function" == typeof s)
            return void s.call(a, function (e) { i(t, e); }, r);
    }
    n[t] = a, 0 == --o && e(n);
}
catch (t) {
    r(t);
} } for (var a = 0; a < n.length; a++)
    i(a, n[a]); }); }, o.resolve = function (t) { return t && "object" == typeof t && t.constructor === o ? t : new o(function (e) { e(t); }); }, o.reject = function (t) { return new o(function (e, r) { r(t); }); }, o.race = function (t) { return new o(function (e, r) { for (var n = 0, o = t.length; n < o; n++)
    t[n].then(e, r); }); }, o._immediateFn = "function" == typeof setImmediate && function (t) { setImmediate(t); } || function (t) { r(t, 0); }, o._unhandledRejectionFn = function (t) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t); }; var f = function () { if ("undefined" != typeof self)
    return self; if ("undefined" != typeof window)
    return window; if (void 0 !== e)
    return e; throw new Error("unable to locate global object"); }(); function h(t, e) { return t(e = { exports: {} }, e.exports), e.exports; } f.Promise || (f.Promise = o); var l = h(function (t) { var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = e); }), p = h(function (t) { var e = t.exports = { version: "2.5.5" }; "number" == typeof __e && (__e = e); }), d = (p.version, function (t) { return "object" == typeof t ? null !== t : "function" == typeof t; }), y = function (t) { if (!d(t))
    throw TypeError(t + " is not an object!"); return t; }, v = function (t) { try {
    return !!t();
}
catch (t) {
    return !0;
} }, b = !v(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7; } }).a; }), m = l.document, _ = d(m) && d(m.createElement), g = function (t) { return _ ? m.createElement(t) : {}; }, w = !b && !v(function () { return 7 != Object.defineProperty(g("div"), "a", { get: function () { return 7; } }).a; }), S = function (t, e) { if (!d(t))
    return t; var r, n; if (e && "function" == typeof (r = t.toString) && !d(n = r.call(t)))
    return n; if ("function" == typeof (r = t.valueOf) && !d(n = r.call(t)))
    return n; if (!e && "function" == typeof (r = t.toString) && !d(n = r.call(t)))
    return n; throw TypeError("Can't convert object to primitive value"); }, E = Object.defineProperty, A = { f: b ? Object.defineProperty : function (t, e, r) { if (y(t), e = S(e, !0), y(r), w)
        try {
            return E(t, e, r);
        }
        catch (t) { } if ("get" in r || "set" in r)
        throw TypeError("Accessors not supported!"); return "value" in r && (t[e] = r.value), t; } }, O = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e }; }, T = b ? function (t, e, r) { return A.f(t, e, O(1, r)); } : function (t, e, r) { return t[e] = r, t; }, j = {}.hasOwnProperty, P = function (t, e) { return j.call(t, e); }, C = 0, N = Math.random(), D = function (t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++C + N).toString(36)); }, k = h(function (t) { var e = D("src"), r = Function.toString, n = ("" + r).split("toString"); p.inspectSource = function (t) { return r.call(t); }, (t.exports = function (t, r, o, i) { var a = "function" == typeof o; a && (P(o, "name") || T(o, "name", r)), t[r] !== o && (a && (P(o, e) || T(o, e, t[r] ? "" + t[r] : n.join(String(r)))), t === l ? t[r] = o : i ? t[r] ? t[r] = o : T(t, r, o) : (delete t[r], T(t, r, o))); })(Function.prototype, "toString", function () { return "function" == typeof this && this[e] || r.call(this); }); }), x = function (t, e, r) { if (function (e) { if ("function" != typeof t)
    throw TypeError(t + " is not a function!"); }(), void 0 === e)
    return t; switch (r) {
    case 1: return function (r) { return t.call(e, r); };
    case 2: return function (r, n) { return t.call(e, r, n); };
    case 3: return function (r, n, o) { return t.call(e, r, n, o); };
} return function () { return t.apply(e, arguments); }; }, F = function (t, e, r) { var n, o, i, a, s = t & F.F, c = t & F.G, u = t & F.S, f = t & F.P, h = t & F.B, d = c ? l : u ? l[e] || (l[e] = {}) : (l[e] || {}).prototype, y = c ? p : p[e] || (p[e] = {}), v = y.prototype || (y.prototype = {}); for (n in c && (r = e), r)
    i = ((o = !s && d && void 0 !== d[n]) ? d : r)[n], a = h && o ? x(i, l) : f && "function" == typeof i ? x(Function.call, i) : i, d && k(d, n, i, t & F.U), y[n] != i && T(y, n, a), f && v[n] != i && (v[n] = i); }; l.core = p, F.F = 1, F.G = 2, F.S = 4, F.P = 8, F.B = 16, F.W = 32, F.U = 64, F.R = 128; var L = F, B = {}.toString, I = function (t) { return B.call(t).slice(8, -1); }, R = Object("z").propertyIsEnumerable(0) ? Object : function (t) { return "String" == I(t) ? t.split("") : Object(t); }, M = function (t) { if (void 0 == t)
    throw TypeError("Can't call method on  " + t); return t; }, U = function (t) { return Object(M(t)); }, V = Math.ceil, W = Math.floor, z = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? W : V)(t); }, G = Math.min, H = function (t) { return t > 0 ? G(z(t), 9007199254740991) : 0; }, K = Array.isArray || function (t) { return "Array" == I(t); }, q = l["__core-js_shared__"] || (l["__core-js_shared__"] = {}), $ = function (t) { return q[t] || (q[t] = {}); }, J = h(function (t) { var e = $("wks"), r = l.Symbol, n = "function" == typeof r; (t.exports = function (t) { return e[t] || (e[t] = n && r[t] || (n ? r : D)("Symbol." + t)); }).store = e; }), Y = J("species"), X = function (t, e) { return new (function (t) { var e; return K(t) && ("function" != typeof (e = t.constructor) || e !== Array && !K(e.prototype) || (e = void 0), d(e) && null === (e = e[Y]) && (e = void 0)), void 0 === e ? Array : e; }(t))(e); }, Q = function (t, e) { var r = 1 == t, n = 2 == t, o = 3 == t, i = 4 == t, a = 6 == t, s = 5 == t || a, c = e || X; return function (e, u, f) { for (var h, l, p = U(e), d = R(p), y = x(u, f, 3), v = H(d.length), b = 0, m = r ? c(e, v) : n ? c(e, 0) : void 0; v > b; b++)
    if ((s || b in d) && (l = y(h = d[b], b, p), t))
        if (r)
            m[b] = l;
        else if (l)
            switch (t) {
                case 3: return !0;
                case 5: return h;
                case 6: return b;
                case 2: m.push(h);
            }
        else if (i)
            return !1; return a ? -1 : o || i ? i : m; }; }, Z = J("unscopables"), tt = Array.prototype; void 0 == tt[Z] && T(tt, Z, {}); var et = function (t) { tt[Z][t] = !0; }, rt = Q(5), nt = !0; "find" in [] && Array(1).find(function () { nt = !1; }), L(L.P + L.F * nt, "Array", { find: function (t) { return rt(this, t, arguments.length > 1 ? arguments[1] : void 0); } }), et("find"), p.Array.find; var ot = Q(6), it = !0; "findIndex" in [] && Array(1).findIndex(function () { it = !1; }), L(L.P + L.F * it, "Array", { findIndex: function (t) { return ot(this, t, arguments.length > 1 ? arguments[1] : void 0); } }), et("findIndex"), p.Array.findIndex; var at = function (t) { return R(M(t)); }, st = Math.max, ct = Math.min, ut = $("keys"), ft = function (t) { return ut[t] || (ut[t] = D(t)); }, ht = (!1, function (t, e, r) { var n = at(t), o = H(n.length), i = function (t, e) { return (t = z(t)) < 0 ? st(t + e, 0) : ct(t, e); }(r, o); for (0; o > i; i++)
    if (i in n && n[i] === e)
        return i || 0; return -1; }), lt = ft("IE_PROTO"), pt = function (t, e) { var r, n = at(t), o = 0, i = []; for (r in n)
    r != lt && P(n, r) && i.push(r); for (; e.length > o;)
    P(n, r = e[o++]) && (~ht(i, r) || i.push(r)); return i; }, dt = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), yt = Object.keys || function (t) { return pt(t, dt); }, vt = { f: Object.getOwnPropertySymbols }, bt = { f: {}.propertyIsEnumerable }, mt = Object.assign, _t = !mt || v(function () { var t = {}, e = {}, r = Symbol(), n = "abcdefghijklmnopqrst"; return t[r] = 7, n.split("").forEach(function (t) { e[t] = t; }), 7 != mt({}, t)[r] || Object.keys(mt({}, e)).join("") != n; }) ? function (t, e) { for (var r = U(t), n = arguments.length, o = 1, i = vt.f, a = bt.f; n > o;)
    for (var s, c = R(arguments[o++]), u = i ? yt(c).concat(i(c)) : yt(c), f = u.length, h = 0; f > h;)
        a.call(c, s = u[h++]) && (r[s] = c[s]); return r; } : mt; L(L.S + L.F, "Object", { assign: _t }), p.Object.assign; var gt = J("match"), wt = J("match"), St = "".startsWith; L(L.P + L.F * function (t) { var e = /./; try {
    "/./"[t](e);
}
catch (r) {
    try {
        return e[wt] = !1, !"/./"[t](e);
    }
    catch (t) { }
} return !0; }("startsWith"), "String", { startsWith: function (t) { var e = function (t, e, r) { if (d(n = e) && (void 0 !== (o = n[gt]) ? o : "RegExp" == I(n)))
        throw TypeError("String#" + r + " doesn't accept regex!"); var n, o; return String(M(t)); }(this, t, "startsWith"), r = H(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)), n = String(t); return St ? St.call(e, n, r) : e.slice(r, r + n.length) === n; } }), p.String.startsWith, L(L.P, "String", { repeat: function (t) { var e = String(M(this)), r = "", n = z(t); if (n < 0 || n == 1 / 0)
        throw RangeError("Count can't be negative"); for (; n > 0; (n >>>= 1) && (e += e))
        1 & n && (r += e); return r; } }), p.String.repeat; var Et = h(function (t) { var e = D("meta"), r = A.f, n = 0, o = Object.isExtensible || function () { return !0; }, i = !v(function () { return o(Object.preventExtensions({})); }), a = function (t) { r(t, e, { value: { i: "O" + ++n, w: {} } }); }, s = t.exports = { KEY: e, NEED: !1, fastKey: function (t, r) { if (!d(t))
        return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t; if (!P(t, e)) {
        if (!o(t))
            return "F";
        if (!r)
            return "E";
        a(t);
    } return t[e].i; }, getWeak: function (t, r) { if (!P(t, e)) {
        if (!o(t))
            return !0;
        if (!r)
            return !1;
        a(t);
    } return t[e].w; }, onFreeze: function (t) { return i && s.NEED && o(t) && !P(t, e) && a(t), t; } }; }), At = (Et.KEY, Et.NEED, Et.fastKey, Et.getWeak, Et.onFreeze, A.f), Ot = J("toStringTag"), Tt = function (t, e, r) { t && !P(t = r ? t : t.prototype, Ot) && At(t, Ot, { configurable: !0, value: e }); }, jt = { f: J }, Pt = A.f, Ct = function (t) { var e = p.Symbol || (p.Symbol = l.Symbol || {}); "_" == t.charAt(0) || t in e || Pt(e, t, { value: jt.f(t) }); }, Nt = b ? Object.defineProperties : function (t, e) { y(t); for (var r, n = yt(e), o = n.length, i = 0; o > i;)
    A.f(t, r = n[i++], e[r]); return t; }, Dt = l.document, kt = Dt && Dt.documentElement, xt = ft("IE_PROTO"), Ft = function () { }, Lt = function () { var t, e = g("iframe"), r = dt.length; for (e.style.display = "none", kt.appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Lt = t.F; r--;)
    delete Lt.prototype[dt[r]]; return Lt(); }, Bt = Object.create || function (t, e) { var r; return null !== t ? (Ft.prototype = y(t), r = new Ft, Ft.prototype = null, r[xt] = t) : r = Lt(), void 0 === e ? r : Nt(r, e); }, It = dt.concat("length", "prototype"), Rt = { f: Object.getOwnPropertyNames || function (t) { return pt(t, It); } }, Mt = Rt.f, Ut = {}.toString, Vt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], Wt = { f: function (t) { return Vt && "[object Window]" == Ut.call(t) ? function (t) { try {
        return Mt(t);
    }
    catch (t) {
        return Vt.slice();
    } }(t) : Mt(at(t)); } }, zt = Object.getOwnPropertyDescriptor, Gt = { f: b ? zt : function (t, e) { if (t = at(t), e = S(e, !0), w)
        try {
            return zt(t, e);
        }
        catch (t) { } if (P(t, e))
        return O(!bt.f.call(t, e), t[e]); } }, Ht = Et.KEY, Kt = Gt.f, qt = A.f, $t = Wt.f, Jt = l.Symbol, Yt = l.JSON, Xt = Yt && Yt.stringify, Qt = J("_hidden"), Zt = J("toPrimitive"), te = {}.propertyIsEnumerable, ee = $("symbol-registry"), re = $("symbols"), ne = $("op-symbols"), oe = Object.prototype, ie = "function" == typeof Jt, ae = l.QObject, se = !ae || !ae.prototype || !ae.prototype.findChild, ce = b && v(function () { return 7 != Bt(qt({}, "a", { get: function () { return qt(this, "a", { value: 7 }).a; } })).a; }) ? function (t, e, r) { var n = Kt(oe, e); n && delete oe[e], qt(t, e, r), n && t !== oe && qt(oe, e, n); } : qt, ue = function (t) { var e = re[t] = Bt(Jt.prototype); return e._k = t, e; }, fe = ie && "symbol" == typeof Jt.iterator ? function (t) { return "symbol" == typeof t; } : function (t) { return t instanceof Jt; }, he = function (t, e, r) { return t === oe && he(ne, e, r), y(t), e = S(e, !0), y(r), P(re, e) ? (r.enumerable ? (P(t, Qt) && t[Qt][e] && (t[Qt][e] = !1), r = Bt(r, { enumerable: O(0, !1) })) : (P(t, Qt) || qt(t, Qt, O(1, {})), t[Qt][e] = !0), ce(t, e, r)) : qt(t, e, r); }, le = function (t, e) { y(t); for (var r, n = function (t) { var e = yt(t), r = vt.f; if (r)
    for (var n, o = r(t), i = bt.f, a = 0; o.length > a;)
        i.call(t, n = o[a++]) && e.push(n); return e; }(e = at(e)), o = 0, i = n.length; i > o;)
    he(t, r = n[o++], e[r]); return t; }, pe = function (t) { var e = te.call(this, t = S(t, !0)); return !(this === oe && P(re, t) && !P(ne, t)) && (!(e || !P(this, t) || !P(re, t) || P(this, Qt) && this[Qt][t]) || e); }, de = function (t, e) { if (t = at(t), e = S(e, !0), t !== oe || !P(re, e) || P(ne, e)) {
    var r = Kt(t, e);
    return !r || !P(re, e) || P(t, Qt) && t[Qt][e] || (r.enumerable = !0), r;
} }, ye = function (t) { for (var e, r = $t(at(t)), n = [], o = 0; r.length > o;)
    P(re, e = r[o++]) || e == Qt || e == Ht || n.push(e); return n; }, ve = function (t) { for (var e, r = t === oe, n = $t(r ? ne : at(t)), o = [], i = 0; n.length > i;)
    !P(re, e = n[i++]) || r && !P(oe, e) || o.push(re[e]); return o; }; ie || (k((Jt = function () { if (this instanceof Jt)
    throw TypeError("Symbol is not a constructor!"); var t = D(arguments.length > 0 ? arguments[0] : void 0), e = function (r) { this === oe && e.call(ne, r), P(this, Qt) && P(this[Qt], t) && (this[Qt][t] = !1), ce(this, t, O(1, r)); }; return b && se && ce(oe, t, { configurable: !0, set: e }), ue(t); }).prototype, "toString", function () { return this._k; }), Gt.f = de, A.f = he, Rt.f = Wt.f = ye, bt.f = pe, vt.f = ve, b && k(oe, "propertyIsEnumerable", pe, !0), jt.f = function (t) { return ue(J(t)); }), L(L.G + L.W + L.F * !ie, { Symbol: Jt }); for (var be = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), me = 0; be.length > me;)
    J(be[me++]); for (var _e = yt(J.store), ge = 0; _e.length > ge;)
    Ct(_e[ge++]); L(L.S + L.F * !ie, "Symbol", { for: function (t) { return P(ee, t += "") ? ee[t] : ee[t] = Jt(t); }, keyFor: function (t) { if (!fe(t))
        throw TypeError(t + " is not a symbol!"); for (var e in ee)
        if (ee[e] === t)
            return e; }, useSetter: function () { se = !0; }, useSimple: function () { se = !1; } }), L(L.S + L.F * !ie, "Object", { create: function (t, e) { return void 0 === e ? Bt(t) : le(Bt(t), e); }, defineProperty: he, defineProperties: le, getOwnPropertyDescriptor: de, getOwnPropertyNames: ye, getOwnPropertySymbols: ve }), Yt && L(L.S + L.F * (!ie || v(function () { var t = Jt(); return "[null]" != Xt([t]) || "{}" != Xt({ a: t }) || "{}" != Xt(Object(t)); })), "JSON", { stringify: function (t) { for (var e, r, n = [t], o = 1; arguments.length > o;)
        n.push(arguments[o++]); if (r = e = n[1], (d(e) || void 0 !== t) && !fe(t))
        return K(e) || (e = function (t, e) { if ("function" == typeof r && (e = r.call(this, t, e)), !fe(e))
            return e; }), n[1] = e, Xt.apply(Yt, n); } }), Jt.prototype[Zt] || T(Jt.prototype, Zt, Jt.prototype.valueOf), Tt(Jt, "Symbol"), Tt(Math, "Math", !0), Tt(l.JSON, "JSON", !0); var we = J("toStringTag"), Se = "Arguments" == I(function () { return arguments; }()), Ee = {}; Ee[J("toStringTag")] = "z", Ee + "" != "[object z]" && k(Object.prototype, "toString", function () { return "[object " + (void 0 === this ? "Undefined" : null === this ? "Null" : "string" == typeof (e = function (t, e) { try {
    return t[e];
}
catch (t) { } }(t = Object(this), we)) ? e : Se ? I(t) : "Object" == (r = I(t)) && "function" == typeof t.callee ? "Arguments" : r) + "]"; var t, e, r; }, !0), Ct("asyncIterator"), Ct("observable"), p.Symbol; var Ae = {}, Oe = {}; T(Oe, J("iterator"), function () { return this; }); var Te = function (t, e, r) { t.prototype = Bt(Oe, { next: O(1, r) }), Tt(t, e + " Iterator"); }, je = ft("IE_PROTO"), Pe = Object.prototype, Ce = Object.getPrototypeOf || function (t) { return t = U(t), P(t, je) ? t[je] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Pe : null; }, Ne = J("iterator"), De = !([].keys && "next" in [].keys()), ke = function () { return this; }, xe = function (t, e, r, n, o, i, a) { Te(r, e, n); var s, c, u, f = function (t) { if (!De && t in d)
    return d[t]; switch (t) {
    case "keys":
    case "values": return function () { return new r(this, t); };
} return function () { return new r(this, t); }; }, h = e + " Iterator", l = "values" == o, p = !1, d = t.prototype, y = d[Ne] || d["@@iterator"] || o && d[o], v = y || f(o), b = o ? l ? f("entries") : v : void 0, m = "Array" == e && d.entries || y; if (m && (u = Ce(m.call(new t))) !== Object.prototype && u.next && (Tt(u, h, !0), "function" != typeof u[Ne] && T(u, Ne, ke)), l && y && "values" !== y.name && (p = !0, v = function () { return y.call(this); }), (De || p || !d[Ne]) && T(d, Ne, v), Ae[e] = v, Ae[h] = ke, o)
    if (s = { values: l ? v : f("values"), keys: i ? v : f("keys"), entries: b }, a)
        for (c in s)
            c in d || k(d, c, s[c]);
    else
        L(L.P + L.F * (De || p), e, s); return s; }, Fe = (!0, function (t, e) { var r, n, o = String(M(t)), i = z(e), a = o.length; return i < 0 || i >= a ? "" : (r = o.charCodeAt(i)) < 55296 || r > 56319 || i + 1 === a || (n = o.charCodeAt(i + 1)) < 56320 || n > 57343 ? o.charAt(i) : o.slice(i, i + 2); }); xe(String, "String", function (t) { this._t = String(t), this._i = 0; }, function () { var t, e = this._t, r = this._i; return r >= e.length ? { value: void 0, done: !0 } : (t = Fe(e, r), this._i += t.length, { value: t, done: !1 }); }); var Le = function (t, e) { return { value: e, done: !!t }; }, Be = xe(Array, "Array", function (t, e) { this._t = at(t), this._i = 0, this._k = e; }, function () { var t = this._t, e = this._k, r = this._i++; return !t || r >= t.length ? (this._t = void 0, Le(1)) : Le(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]); }, "values"); Ae.Arguments = Ae.Array, et("keys"), et("values"), et("entries"); for (var Ie = J("iterator"), Re = J("toStringTag"), Me = Ae.Array, Ue = { CSSRuleList: !0, CSSStyleDeclaration: !1, CSSValueList: !1, ClientRectList: !1, DOMRectList: !1, DOMStringList: !1, DOMTokenList: !0, DataTransferItemList: !1, FileList: !1, HTMLAllCollection: !1, HTMLCollection: !1, HTMLFormElement: !1, HTMLSelectElement: !1, MediaList: !0, MimeTypeArray: !1, NamedNodeMap: !1, NodeList: !0, PaintRequestList: !1, Plugin: !1, PluginArray: !1, SVGLengthList: !1, SVGNumberList: !1, SVGPathSegList: !1, SVGPointList: !1, SVGStringList: !1, SVGTransformList: !1, SourceBufferList: !1, StyleSheetList: !0, TextTrackCueList: !1, TextTrackList: !1, TouchList: !1 }, Ve = yt(Ue), We = 0; We < Ve.length; We++) {
    var ze, Ge = Ve[We], He = Ue[Ge], Ke = l[Ge], qe = Ke && Ke.prototype;
    if (qe && (qe[Ie] || T(qe, Ie, Me), qe[Re] || T(qe, Re, Ge), Ae[Ge] = Me, He))
        for (ze in Be)
            qe[ze] || k(qe, ze, Be[ze], !0);
} jt.f("iterator"); var $e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var r in e)
    e.hasOwnProperty(r) && (t[r] = e[r]); }; function Je(t, e) { function r() { this.constructor = t; } $e(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r); } var Ye = Object.assign || function (t) { for (var e, r = 1, n = arguments.length; r < n; r++)
    for (var o in e = arguments[r])
        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t; }, Xe = { NODE_CLIENT: !1, NODE_ADMIN: !1, SDK_VERSION: "${JSCORE_VERSION}" }, Qe = function (t) { return new Error("Firebase Database (" + Xe.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + t); }, Ze = function (t) { for (var e = [], r = 0, n = 0; n < t.length; n++) {
    var o = t.charCodeAt(n);
    o < 128 ? e[r++] = o : o < 2048 ? (e[r++] = o >> 6 | 192, e[r++] = 63 & o | 128) : 55296 == (64512 & o) && n + 1 < t.length && 56320 == (64512 & t.charCodeAt(n + 1)) ? (o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++n)), e[r++] = o >> 18 | 240, e[r++] = o >> 12 & 63 | 128, e[r++] = o >> 6 & 63 | 128, e[r++] = 63 & o | 128) : (e[r++] = o >> 12 | 224, e[r++] = o >> 6 & 63 | 128, e[r++] = 63 & o | 128);
} return e; }, tr = { byteToCharMap_: null, charToByteMap_: null, byteToCharMapWebSafe_: null, charToByteMapWebSafe_: null, ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", get ENCODED_VALS() { return this.ENCODED_VALS_BASE + "+/="; }, get ENCODED_VALS_WEBSAFE() { return this.ENCODED_VALS_BASE + "-_."; }, HAS_NATIVE_SUPPORT: "function" == typeof atob, encodeByteArray: function (t, e) { if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter"); this.init_(); for (var r = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, n = [], o = 0; o < t.length; o += 3) {
        var i = t[o], a = o + 1 < t.length, s = a ? t[o + 1] : 0, c = o + 2 < t.length, u = c ? t[o + 2] : 0, f = i >> 2, h = (3 & i) << 4 | s >> 4, l = (15 & s) << 2 | u >> 6, p = 63 & u;
        c || (p = 64, a || (l = 64)), n.push(r[f], r[h], r[l], r[p]);
    } return n.join(""); }, encodeString: function (t, e) { return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Ze(t), e); }, decodeString: function (t, e) { return this.HAS_NATIVE_SUPPORT && !e ? atob(t) : function (t) { for (var e = [], r = 0, n = 0; r < t.length;) {
        var o = t[r++];
        if (o < 128)
            e[n++] = String.fromCharCode(o);
        else if (o > 191 && o < 224) {
            var i = t[r++];
            e[n++] = String.fromCharCode((31 & o) << 6 | 63 & i);
        }
        else if (o > 239 && o < 365) {
            var a = ((7 & o) << 18 | (63 & (i = t[r++])) << 12 | (63 & (s = t[r++])) << 6 | 63 & t[r++]) - 65536;
            e[n++] = String.fromCharCode(55296 + (a >> 10)), e[n++] = String.fromCharCode(56320 + (1023 & a));
        }
        else {
            i = t[r++];
            var s = t[r++];
            e[n++] = String.fromCharCode((15 & o) << 12 | (63 & i) << 6 | 63 & s);
        }
    } return e.join(""); }(this.decodeStringToByteArray(t, e)); }, decodeStringToByteArray: function (t, e) { this.init_(); for (var r = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, n = [], o = 0; o < t.length;) {
        var i = r[t.charAt(o++)], a = o < t.length ? r[t.charAt(o)] : 0, s = ++o < t.length ? r[t.charAt(o)] : 64, c = ++o < t.length ? r[t.charAt(o)] : 64;
        if (++o, null == i || null == a || null == s || null == c)
            throw Error();
        var u = i << 2 | a >> 4;
        if (n.push(u), 64 != s) {
            var f = a << 4 & 240 | s >> 2;
            if (n.push(f), 64 != c) {
                var h = s << 6 & 192 | c;
                n.push(h);
            }
        }
    } return n; }, init_: function () { if (!this.byteToCharMap_) {
        this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
        for (var t = 0; t < this.ENCODED_VALS.length; t++)
            this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t), this.charToByteMap_[this.byteToCharMap_[t]] = t, this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t, t >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t);
    } } }, er = function (t) { try {
    return tr.decodeString(t, !0);
}
catch (t) {
    console.error("base64Decode failed: ", t);
} return null; }; function rr(t) { return nr(void 0, t); } function nr(t, e) { if (!(e instanceof Object))
    return e; switch (e.constructor) {
    case Date: return new Date(e.getTime());
    case Object:
        void 0 === t && (t = {});
        break;
    case Array:
        t = [];
        break;
    default: return e;
} for (var r in e)
    e.hasOwnProperty(r) && (t[r] = nr(t[r], e[r])); return t; } function or(t, e, r) { t[e] = r; } var ir = function () { function t() { var t = this; this.promise = new Promise(function (e, r) { t.resolve = e, t.reject = r; }); } return t.prototype.wrapCallback = function (t) { var e = this; return function (r, n) { r ? e.reject(r) : e.resolve(n), "function" == typeof t && (e.promise.catch(function () { }), 1 === t.length ? t(r) : t(r, n)); }; }, t; }(), ar = Error.captureStackTrace, sr = function (t, e) { if (this.code = t, this.message = e, ar)
    ar(this, cr.prototype.create);
else
    try {
        throw Error.apply(this, arguments);
    }
    catch (t) {
        this.name = "FirebaseError", Object.defineProperty(this, "stack", { get: function () { return t.stack; } });
    } }; sr.prototype = Object.create(Error.prototype), sr.prototype.constructor = sr, sr.prototype.name = "FirebaseError"; var cr = function () { function t(t, e, r) { this.service = t, this.serviceName = e, this.errors = r, this.pattern = /\{\$([^}]+)}/g; } return t.prototype.create = function (t, e) { void 0 === e && (e = {}); var r, n = this.errors[t], o = this.service + "/" + t; r = void 0 === n ? "Error" : n.replace(this.pattern, function (t, r) { var n = e[r]; return void 0 !== n ? n.toString() : "<" + r + "?>"; }), r = this.serviceName + ": " + r + " (" + o + ")."; var i = new sr(o, r); for (var a in e)
    e.hasOwnProperty(a) && "_" !== a.slice(-1) && (i[a] = e[a]); return i; }, t; }(); function ur(t) { return JSON.parse(t); } var fr = function (t) { var e = {}, r = {}, n = {}, o = ""; try {
    var i = t.split(".");
    e = ur(er(i[0]) || ""), r = ur(er(i[1]) || ""), o = i[2], n = r.d || {}, delete r.d;
}
catch (t) { } return { header: e, claims: r, data: n, signature: o }; }, hr = function (t, e) { for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && e(r, t[r]); }, lr = function (t, e, r) { for (var n in t)
    if (e.call(r, t[n], n, t))
        return n; }, pr = function (t) { function e() { var e = t.call(this) || this; e.chain_ = [], e.buf_ = [], e.W_ = [], e.pad_ = [], e.inbuf_ = 0, e.total_ = 0, e.blockSize = 64, e.pad_[0] = 128; for (var r = 1; r < e.blockSize; ++r)
    e.pad_[r] = 0; return e.reset(), e; } return Je(e, t), e.prototype.reset = function () { this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0; }, e.prototype.compress_ = function (t, e) { e || (e = 0); var r = this.W_; if ("string" == typeof t)
    for (var n = 0; n < 16; n++)
        r[n] = t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | t.charCodeAt(e + 3), e += 4;
else
    for (n = 0; n < 16; n++)
        r[n] = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3], e += 4; for (n = 16; n < 80; n++) {
    var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
    r[n] = 4294967295 & (o << 1 | o >>> 31);
} var i, a, s = this.chain_[0], c = this.chain_[1], u = this.chain_[2], f = this.chain_[3], h = this.chain_[4]; for (n = 0; n < 80; n++)
    n < 40 ? n < 20 ? (i = f ^ c & (u ^ f), a = 1518500249) : (i = c ^ u ^ f, a = 1859775393) : n < 60 ? (i = c & u | f & (c | u), a = 2400959708) : (i = c ^ u ^ f, a = 3395469782), o = (s << 5 | s >>> 27) + i + h + a + r[n] & 4294967295, h = f, f = u, u = 4294967295 & (c << 30 | c >>> 2), c = s, s = o; this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + c & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + f & 4294967295, this.chain_[4] = this.chain_[4] + h & 4294967295; }, e.prototype.update = function (t, e) { if (null != t) {
    void 0 === e && (e = t.length);
    for (var r = e - this.blockSize, n = 0, o = this.buf_, i = this.inbuf_; n < e;) {
        if (0 == i)
            for (; n <= r;)
                this.compress_(t, n), n += this.blockSize;
        if ("string" == typeof t) {
            for (; n < e;)
                if (o[i] = t.charCodeAt(n), ++n, ++i == this.blockSize) {
                    this.compress_(o), i = 0;
                    break;
                }
        }
        else
            for (; n < e;)
                if (o[i] = t[n], ++n, ++i == this.blockSize) {
                    this.compress_(o), i = 0;
                    break;
                }
    }
    this.inbuf_ = i, this.total_ += e;
} }, e.prototype.digest = function () { var t = [], e = 8 * this.total_; this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56)); for (var r = this.blockSize - 1; r >= 56; r--)
    this.buf_[r] = 255 & e, e /= 256; this.compress_(this.buf_); var n = 0; for (r = 0; r < 5; r++)
    for (var o = 24; o >= 0; o -= 8)
        t[n] = this.chain_[r] >> o & 255, ++n; return t; }, e; }(function () { this.blockSize = -1; }); function dr(t, e) { var r = new yr(t, e); return r.subscribe.bind(r); } var yr = function () { function t(t, e) { var r = this; this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = e, this.task.then(function () { t(r); }).catch(function (t) { r.error(t); }); } return t.prototype.next = function (t) { this.forEachObserver(function (e) { e.next(t); }); }, t.prototype.error = function (t) { this.forEachObserver(function (e) { e.error(t); }), this.close(t); }, t.prototype.complete = function () { this.forEachObserver(function (t) { t.complete(); }), this.close(); }, t.prototype.subscribe = function (t, e, r) { var n, o = this; if (void 0 === t && void 0 === e && void 0 === r)
    throw new Error("Missing Observer."); void 0 === (n = function (t, e) { if ("object" != typeof t || null === t)
    return !1; for (var r = 0, n = ["next", "error", "complete"]; r < n.length; r++) {
    var o = n[r];
    if (o in t && "function" == typeof t[o])
        return !0;
} return !1; }(t) ? t : { next: t, error: e, complete: r }).next && (n.next = vr), void 0 === n.error && (n.error = vr), void 0 === n.complete && (n.complete = vr); var i = this.unsubscribeOne.bind(this, this.observers.length); return this.finalized && this.task.then(function () { try {
    o.finalError ? n.error(o.finalError) : n.complete();
}
catch (t) { } }), this.observers.push(n), i; }, t.prototype.unsubscribeOne = function (t) { void 0 !== this.observers && void 0 !== this.observers[t] && (delete this.observers[t], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this)); }, t.prototype.forEachObserver = function (t) { if (!this.finalized)
    for (var e = 0; e < this.observers.length; e++)
        this.sendOne(e, t); }, t.prototype.sendOne = function (t, e) { var r = this; this.task.then(function () { if (void 0 !== r.observers && void 0 !== r.observers[t])
    try {
        e(r.observers[t]);
    }
    catch (t) {
        "undefined" != typeof console && console.error && console.error(t);
    } }); }, t.prototype.close = function (t) { var e = this; this.finalized || (this.finalized = !0, void 0 !== t && (this.finalError = t), this.task.then(function () { e.observers = void 0, e.onNoObservers = void 0; })); }, t; }(); function vr() { } function br(t, e, r) { var n = ""; switch (e) {
    case 1:
        n = r ? "first" : "First";
        break;
    case 2:
        n = r ? "second" : "Second";
        break;
    case 3:
        n = r ? "third" : "Third";
        break;
    case 4:
        n = r ? "fourth" : "Fourth";
        break;
    default: throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?");
} return t + " failed: " + (n + " argument "); } var mr = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, _r = "[DEFAULT]", gr = [], wr = function () { function t(t, e, r) { this.firebase_ = r, this.isDeleted_ = !1, this.services_ = {}, this.name_ = e.name, this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled || !1, this.options_ = rr(t), this.INTERNAL = { getUid: function () { return null; }, getToken: function () { return Promise.resolve(null); }, addAuthTokenListener: function (t) { gr.push(t), setTimeout(function () { return t(null); }, 0); }, removeAuthTokenListener: function (t) { gr = gr.filter(function (e) { return e !== t; }); } }; } return Object.defineProperty(t.prototype, "automaticDataCollectionEnabled", { get: function () { return this.checkDestroyed_(), this._automaticDataCollectionEnabled; }, set: function (t) { this.checkDestroyed_(), this._automaticDataCollectionEnabled = t; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "name", { get: function () { return this.checkDestroyed_(), this.name_; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "options", { get: function () { return this.checkDestroyed_(), this.options_; }, enumerable: !0, configurable: !0 }), t.prototype.delete = function () { var t = this; return new Promise(function (e) { t.checkDestroyed_(), e(); }).then(function () { t.firebase_.INTERNAL.removeApp(t.name_); var e = []; return Object.keys(t.services_).forEach(function (r) { Object.keys(t.services_[r]).forEach(function (n) { e.push(t.services_[r][n]); }); }), Promise.all(e.map(function (t) { return t.INTERNAL.delete(); })); }).then(function () { t.isDeleted_ = !0, t.services_ = {}; }); }, t.prototype._getService = function (t, e) { if (void 0 === e && (e = _r), this.checkDestroyed_(), this.services_[t] || (this.services_[t] = {}), !this.services_[t][e]) {
    var r = e !== _r ? e : void 0, n = this.firebase_.INTERNAL.factories[t](this, this.extendApp.bind(this), r);
    this.services_[t][e] = n;
} return this.services_[t][e]; }, t.prototype.extendApp = function (t) { var e = this; nr(this, t), t.INTERNAL && t.INTERNAL.addAuthTokenListener && (gr.forEach(function (t) { e.INTERNAL.addAuthTokenListener(t); }), gr = []); }, t.prototype.checkDestroyed_ = function () { this.isDeleted_ && Sr("app-deleted", { name: this.name_ }); }, t; }(); function Sr(t, e) { throw Er.create(t, e); } wr.prototype.name && wr.prototype.options || wr.prototype.delete || console.log("dc"); var Er = new cr("app", "Firebase", { "no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", "bad-app-name": "Illegal App name: '{$name}", "duplicate-app": "Firebase App named '{$name}' already exists", "app-deleted": "Firebase App named '{$name}' already deleted", "duplicate-service": "Firebase service named '{$name}' already registered", "sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain", "invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance." }), Ar = function t() { var e = {}, r = {}, n = {}, o = { __esModule: !0, initializeApp: function (t, r) { (void 0 === r && (r = {}), "object" != typeof r || null === r) && (r = { name: r }); var n = r; void 0 === n.name && (n.name = _r); var i = n.name; "string" == typeof i && i || Sr("bad-app-name", { name: i + "" }), mr(e, i) && Sr("duplicate-app", { name: i }); var a = new wr(t, n, o); return e[i] = a, s(a, "create"), a; }, app: i, apps: null, Promise: Promise, SDK_VERSION: "5.0.4", INTERNAL: { registerService: function (t, e, s, c, u) { r[t] && Sr("duplicate-service", { name: t }), r[t] = e, c && (n[t] = c, a().forEach(function (t) { c("create", t); })); var f = function (e) { return void 0 === e && (e = i()), "function" != typeof e[t] && Sr("invalid-app-argument", { name: t }), e[t](); }; return void 0 !== s && nr(f, s), o[t] = f, wr.prototype[t] = function () { for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r]; return this._getService.bind(this, t).apply(this, u ? e : []); }, f; }, createFirebaseNamespace: t, extendNamespace: function (t) { nr(o, t); }, createSubscribe: dr, ErrorFactory: cr, removeApp: function (t) { s(e[t], "delete"), delete e[t]; }, factories: r, useAsService: c, Promise: Promise, deepExtend: nr } }; function i(t) { return mr(e, t = t || _r) || Sr("no-app", { name: t }), e[t]; } function a() { return Object.keys(e).map(function (t) { return e[t]; }); } function s(t, e) { Object.keys(r).forEach(function (r) { var o = c(t, r); null !== o && n[o] && n[o](e, t); }); } function c(t, e) { if ("serverAuth" === e)
    return null; var r = e; return t.options, r; } return or(o, "default", o), Object.defineProperty(o, "apps", { get: a }), or(i, "App", wr), o; }(); t.firebase = Ar, t.global = e, t.jsonEval = ur, t.stringify = function (t) { return JSON.stringify(t); }, t.contains = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, t.assert = function (t, e) { if (!t)
    throw Qe(e); }, t.forEach = hr, t.base64 = tr, t.Sha1 = pr, t.stringToByteArray$1 = function (t) { for (var e = [], r = 0, n = 0; n < t.length; n++) {
    var o = t.charCodeAt(n);
    if (o >= 55296 && o <= 56319) {
        var i = o - 55296;
        n++, t.length, o = 65536 + (i << 10) + (t.charCodeAt(n) - 56320);
    }
    o < 128 ? e[r++] = o : o < 2048 ? (e[r++] = o >> 6 | 192, e[r++] = 63 & o | 128) : o < 65536 ? (e[r++] = o >> 12 | 224, e[r++] = o >> 6 & 63 | 128, e[r++] = 63 & o | 128) : (e[r++] = o >> 18 | 240, e[r++] = o >> 12 & 63 | 128, e[r++] = o >> 6 & 63 | 128, e[r++] = 63 & o | 128);
} return e; }, t.isNodeSdk = function () { return !0 === Xe.NODE_ADMIN; }, t.stringLength = function (t) { for (var e = 0, r = 0; r < t.length; r++) {
    var n = t.charCodeAt(r);
    n < 128 ? e++ : n < 2048 ? e += 2 : n >= 55296 && n <= 56319 ? (e += 4, r++) : e += 3;
} return e; }, t.safeGet = function (t, e) { if (Object.prototype.hasOwnProperty.call(t, e))
    return t[e]; }, t.errorPrefix = br, t.validateArgCount = function (t, e, r, n) { var o; if (n < e ? o = "at least " + e : n > r && (o = 0 === r ? "none" : "no more than " + r), o)
    throw new Error(t + " failed: Was called with " + n + (1 === n ? " argument." : " arguments.") + " Expects " + o + "."); }, t.validateCallback = function (t, e, r, n) { if ((!n || r) && "function" != typeof r)
    throw new Error(br(t, e, n) + "must be a valid function."); }, t.Deferred = ir, t.assertionError = Qe, t.clone = function (t) { return e = {}, hr(t, function (t, r) { e[t] = r; }), e; var e; }, t.map = function (t, e, r) { var n = {}; for (var o in t)
    n[o] = e.call(r, t[o], o, t); return n; }, t.getCount = function (t) { var e = 0; for (var r in t)
    e++; return e; }, t.getAnyKey = function (t) { for (var e in t)
    return e; }, t.every = function (t, e) { for (var r in t)
    if (Object.prototype.hasOwnProperty.call(t, r) && !e(r, t[r]))
        return !1; return !0; }, t.validateContextObject = function (t, e, r, n) { if ((!n || r) && ("object" != typeof r || null === r))
    throw new Error(br(t, e, n) + "must be a valid context object."); }, t.isEmpty = function (t) { for (var e in t)
    return !1; return !0; }, t.getValues = function (t) { var e = [], r = 0; for (var n in t)
    e[r++] = t[n]; return e; }, t.findValue = function (t, e, r) { var n = lr(t, e, r); return n && t[n]; }, t.findKey = lr, t.deepCopy = rr, t.isMobileCordova = function () { return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""); }, t.base64Encode = function (t) { var e = Ze(t); return tr.encodeByteArray(e, !0); }, t.CONSTANTS = Xe, t.isAdmin = function (t) { var e = fr(t).claims; return "object" == typeof e && !0 === e.admin; }, t.isValidFormat = function (t) { var e = fr(t), r = e.claims; return !!e.signature && !!r && "object" == typeof r && r.hasOwnProperty("iat"); }, t.isReactNative = function () { return "object" == typeof navigator && "ReactNative" === navigator.product; }, t.querystring = function (t) { var e = []; return hr(t, function (t, r) { Array.isArray(r) ? r.forEach(function (r) { e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r)); }) : e.push(encodeURIComponent(t) + "=" + encodeURIComponent(r)); }), e.length ? "&" + e.join("&") : ""; }, t.__awaiter = function (t, e, r, n) { return new (r || (r = Promise))(function (o, i) { function a(t) { try {
    c(n.next(t));
}
catch (t) {
    i(t);
} } function s(t) { try {
    c(n.throw(t));
}
catch (t) {
    i(t);
} } function c(t) { t.done ? o(t.value) : new r(function (e) { e(t.value); }).then(a, s); } c((n = n.apply(t, e || [])).next()); }); }, t.__generator = function (t, e) { var r, n, o, i, a = { label: 0, sent: function () { if (1 & o[0])
        throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: s(0), throw: s(1), return: s(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function s(i) { return function (s) { return function (i) { if (r)
    throw new TypeError("Generator is already executing."); for (; a;)
    try {
        if (r = 1, n && (o = n[2 & i[0] ? "return" : i[0] ? "throw" : "next"]) && !(o = o.call(n, i[1])).done)
            return o;
        switch (n = 0, o && (i = [0, o.value]), i[0]) {
            case 0:
            case 1:
                o = i;
                break;
            case 4: return a.label++, { value: i[1], done: !1 };
            case 5:
                a.label++, n = i[1], i = [0];
                continue;
            case 7:
                i = a.ops.pop(), a.trys.pop();
                continue;
            default:
                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue;
                }
                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                }
                if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                }
                if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                }
                o[2] && a.ops.pop(), a.trys.pop();
                continue;
        }
        i = e.call(t, a);
    }
    catch (t) {
        i = [6, t], n = 0;
    }
    finally {
        r = o = 0;
    } if (5 & i[0])
    throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, s]); }; } }, t.__extends = Je, t.ErrorFactory = cr, t.createSubscribe = dr, t.__assign = Ye; });
