!function(t) {
    var e = {};
    function s(n) {
        if (e[n])
            return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, s), r.l = !0, r.exports
    }
    s.m = t, s.c = e, s.d = function(t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function(t, e) {
        if (1 & e && (t = s(t)), 8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t)
                s.d(n, r, function(e) {
                    return t[e]
                }.bind(null, r));
        return n
    }, s.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "", s(s.s = 0)
}([function(t, e, s) {
    t.exports = s(3)
}, function(t, e, s) {}, function(t, e, s) {}, function(t, e, s) {
    "use strict";
    function n() {}
    function r(t, e) {
        for (var s in e)
            t[s] = e[s];
        return t
    }
    function i(t, e) {
        for (var s in e)
            t[s] = 1;
        return t
    }
    function o(t) {
        t()
    }
    function a(t, e) {
        t.appendChild(e)
    }
    function l(t, e, s) {
        t.insertBefore(e, s)
    }
    function c(t) {
        t.parentNode.removeChild(t)
    }
    function h(t, e) {
        for (var s = 0; s < t.length; s += 1)
            t[s] && t[s].d(e)
    }
    function m(t) {
        return document.createElement(t)
    }
    function d(t) {
        return document.createTextNode(t)
    }
    function u() {
        return document.createComment("")
    }
    function p(t, e, s, n) {
        t.addEventListener(e, s, n)
    }
    function f(t, e, s, n) {
        t.removeEventListener(e, s, n)
    }
    function g(t, e, s) {
        null == s ? t.removeAttribute(e) : t.setAttribute(e, s)
    }
    function _(t, e) {
        t.data = "" + e
    }
    function v(t, e, s) {
        t.classList.toggle(e, !!s)
    }
    s.r(e);
    function y() {
        return Object.create(null)
    }
    function b(t) {
        this.destroy = n, this.fire("destroy"), this.set = n, this._fragment.d(!1 !== t), this._fragment = null, this._state = {}
    }
    function x(t, e) {
        return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
    }
    function N(t, e) {
        return t != t ? e == e : t !== e
    }
    function w(t, e) {
        var s = t in this._handlers && this._handlers[t].slice();
        if (s)
            for (var n = 0; n < s.length; n += 1) {
                var r = s[n];
                if (!r.__calling)
                    try {
                        r.__calling = !0, r.call(this, e)
                    } finally {
                        r.__calling = !1
                    }
            }
    }
    function C(t) {
        t._lock = !0, P(t._beforecreate), P(t._oncreate), P(t._aftercreate), t._lock = !1
    }
    function S() {
        return this._state
    }
    function k(t, e) {
        t._handlers = y(), t._slots = y(), t._bind = e._bind, t._staged = {}, t.options = e, t.root = e.root || t, t.store = e.store || t.root.store, e.root || (t._beforecreate = [], t._oncreate = [], t._aftercreate = [])
    }
    function O(t, e) {
        var s = this._handlers[t] || (this._handlers[t] = []);
        return s.push(e), {
            cancel: function() {
                var t = s.indexOf(e);
                ~t && s.splice(t, 1)
            }
        }
    }
    function M(t) {
        this._set(r({}, t)), this.root._lock || C(this.root)
    }
    function I(t) {
        var e = this._state,
            s = {},
            n = !1;
        for (var i in t = r(this._staged, t), this._staged = {}, t)
            this._differs(t[i], e[i]) && (s[i] = n = !0);
        n && (this._state = r(r({}, e), t), this._recompute(s, this._state), this._bind && this._bind(s, this._state), this._fragment && (this.fire("state", {
            changed: s,
            current: this._state,
            previous: e
        }), this._fragment.p(s, this._state), this.fire("update", {
            changed: s,
            current: this._state,
            previous: e
        })))
    }
    function L(t) {
        r(this._staged, t)
    }
    function P(t) {
        for (; t && t.length;)
            t.shift()()
    }
    function T(t, e) {
        this._fragment[this._fragment.i ? "i" : "m"](t, e || null)
    }
    function $() {
        this.store._remove(this)
    }
    var j = {
        destroy: b,
        get: S,
        fire: w,
        on: O,
        set: M,
        _recompute: n,
        _set: I,
        _stage: L,
        _mount: T,
        _differs: x
    };
    function A(t, e) {
        this._handlers = {}, this._dependents = [], this._computed = y(), this._sortedComputedProperties = [], this._state = r({}, t), this._differs = e && e.immutable ? N : x
    }
    r(A.prototype, {
        _add(t, e) {
            this._dependents.push({
                component: t,
                props: e
            })
        },
        _init(t) {
            const e = {};
            for (let s = 0; s < t.length; s += 1) {
                const n = t[s];
                e["$" + n] = this._state[n]
            }
            return e
        },
        _remove(t) {
            let e = this._dependents.length;
            for (; e--;)
                if (this._dependents[e].component === t)
                    return void this._dependents.splice(e, 1)
        },
        _set(t, e) {
            const s = this._state;
            this._state = r(r({}, s), t);
            for (let t = 0; t < this._sortedComputedProperties.length; t += 1)
                this._sortedComputedProperties[t].update(this._state, e);
            this.fire("state", {
                changed: e,
                previous: s,
                current: this._state
            }), this._dependents.filter(t => {
                const s = {};
                let n = !1;
                for (let r = 0; r < t.props.length; r += 1) {
                    const i = t.props[r];
                    i in e && (s["$" + i] = this._state[i], n = !0)
                }
                if (n)
                    return t.component._stage(s), !0
            }).forEach(t => {t.component.set({})}), this.fire("update", {
                changed: e,
                previous: s,
                current: this._state
            })
        },
        _sortComputedProperties() {
            const t = this._computed,
                e = this._sortedComputedProperties = [],
                s = y();
            let n;
            function r(i) {
                const o = t[i];
                o && (o.deps.forEach(t => {
                    if (t === n)
                        throw new Error(`Cyclical dependency detected between ${t} <-> ${i}`);
                    r(t)
                }), s[i] || (s[i] = !0, e.push(o)))
            }
            for (const t in this._computed)
                r(n = t)
        },
        compute(t, e, s) {
            let n;
            const i = {
                deps: e,
                update: (r, i, o) => {
                    const a = e.map(t => (t in i && (o = !0), r[t]));
                    if (o) {
                        const e = s.apply(null, a);
                        this._differs(e, n) && (n = e, i[t] = !0, r[t] = n)
                    }
                }
            };
            this._computed[t] = i, this._sortComputedProperties();
            const o = r({}, this._state),
                a = {};
            i.update(o, a, !0), this._set(o, a)
        },
        fire: w,
        get: S,
        on: O,
        set(t) {
            const e = this._state,
                s = this._changed = {};
            let n = !1;
            for (const r in t) {
                if (this._computed[r])
                    throw new Error(`'${r}' is a read-only computed property`);
                this._differs(t[r], e[r]) && (s[r] = n = !0)
            }
            n && this._set(t, s)
        }
    });
    var E = new A({
        showModal: !1,
        variants: [],
        options: {},
        selectedStrap: 0,
        selectedLens: 0,
        selectedFrame: 0
    });
    s(1);
    var F = {
        extractOptions(t) {
            if (t) {
                let e = {
                    lens: [],
                    frame: [],
                    strap: [],
                    parts: [],
                    bg: []
                };
                t.map(t => {
                    let s = t.title.split("-"),
                        n = new Image;
                    	n.setAttribute("crossOrigin", ""), n.src = this.addImageSize(t.featured_image.src), s.length > 1 && e[s[0].toLowerCase()].push({
                        title: s[1],
                        src: t.featured_image.src,
                        img: n,
                        price: t.price
                    })
                }), this.store.set({
                    options: e
                }), this.set({
                    lens: e.lens,
                    frame: e.frame,
                    strap: e.strap
                })
            }
        },
        addImageSize(t) {
            let e = t.split(".png"),
                s = e[0] + "_620x.png" + e[1];
            return e.length > 1 ? s : t
        },
        updateCanvas(t, e, s) {
            switch (t) {
            case "strap":
                this.set({
                    selectedStrap: s
                }), this.store.set({
                    selectedStrap: e
                });
                break;
            case "lens":
                this.set({
                    selectedLens: s
                }), this.store.set({
                    selectedLens: e
                });
                break;
            case "frame":
                this.set({
                    selectedFrame: s
                }), this.store.set({
                    selectedFrame: e
                })
            }
            this.store.fire("UPDATE_CANVAS", {
                lens: this.get().selectedLens,
                strap: this.get().selectedStrap,
                frame: this.get().selectedFrame
            })
        }
    };
    function V(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("strap", s.item.title, s.i)
    }
    function D(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("strap", s.item.title, s.i)
    }
    function U(t, e, s) {
        const n = Object.create(t);
        return n.item = e[s], n.i = s, n
    }
    function z(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("frame", s.item.title, s.i)
    }
    function B(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("frame", s.item.title, s.i)
    }
    function H(t, e, s) {
        const n = Object.create(t);
        return n.item = e[s], n.i = s, n
    }
    function R(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("lens", s.item.title, s.i)
    }
    function G(t) {
        const {component: e, ctx: s} = this._svelte;
        e.updateCanvas("lens", s.item.title, s.i)
    }
    function q(t, e, s) {
        const n = Object.create(t);
        return n.item = e[s], n.i = s, n
    }
    function J(t, e) {
        var s,
            n,
            r,
            i = e.lens.length && K(t, e),
            o = e.frame.length && X(t, e),
            a = e.strap.length && tt(t, e);
        return {
            c() {
                i && i.c(), s = d("\r\n\r\n"), o && o.c(), n = d("\r\n\r\n"), a && a.c(), r = u()
            },
            m(t, e) {
                i && i.m(t, e), l(t, s, e), o && o.m(t, e), l(t, n, e), a && a.m(t, e), l(t, r, e)
            },
            p(e, l) {
                l.lens.length ? i ? i.p(e, l) : ((i = K(t, l)).c(), i.m(s.parentNode, s)) : i && (i.d(1), i = null), l.frame.length ? o ? o.p(e, l) : ((o = X(t, l)).c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null), l.strap.length ? a ? a.p(e, l) : ((a = tt(t, l)).c(), a.m(r.parentNode, r)) : a && (a.d(1), a = null)
            },
            d(t) {
                i && i.d(t), t && c(s), o && o.d(t), t && c(n), a && a.d(t), t && c(r)
            }
        }
    }
    function K(t, e) {
        for (var s, n, r, i, o = e.lens, u = [], p = 0; p < o.length; p += 1)
            u[p] = W(t, q(e, o, p));
        return {
            c() {
                s = m("div"), n = m("fieldset"), (r = m("h2")).textContent = "Lens", i = d("\r\n        ");
                for (var t = 0; t < u.length; t += 1)
                    u[t].c();
                n.name = "lens", n.className = "svelte-15a3gvm", s.className = "ctx-lens"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(n, r), a(n, i);
                for (var o = 0; o < u.length; o += 1)
                    u[o].m(n, null)
            },
            p(e, s) {
                if (e.lens) {
                    o = s.lens;
                    for (var r = 0; r < o.length; r += 1) {
                        const i = q(s, o, r);
                        u[r] ? u[r].p(e, i) : (u[r] = W(t, i), u[r].c(), u[r].m(n, null))
                    }
                    for (; r < u.length; r += 1)
                        u[r].d(1);
                    u.length = o.length
                }
            },
            d(t) {
                t && c(s), h(u, t)
            }
        }
    }
    function Q(t, e) {
        var s,
            n,
            r;
        return {
            c() {
                (s = m("input"))._svelte = {
                    component: t,
                    ctx: e
                }, p(s, "change", G), s.checked = !0, s.id = n = "lens-" + e.item.title, g(s, "type", "radio"), s.value = r = e.item.title, s.name = "lens", s.className = "svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e)
            },
            p(t, i) {
                e = i, s._svelte.ctx = e, t.lens && n !== (n = "lens-" + e.item.title) && (s.id = n), t.lens && r !== (r = e.item.title) && (s.value = r)
            },
            d(t) {
                t && c(s), f(s, "change", G)
            }
        }
    }
    function W(t, e) {
        var s,
            n,
            r,
            i,
            o,
            h,
            u,
            v,
            y,
            b = e.item.title,
            x = 0 === e.i && Q(t, e);
        return {
            c() {
                s = m("label"), n = d(b), r = d("\r\n            "), x && x.c(), i = d("\r\n            "), o = m("input"), v = d("\r\n            "), y = m("span"), o._svelte = {
                    component: t,
                    ctx: e
                }, p(o, "change", R), o.id = h = "lens-" + e.item.title, g(o, "type", "radio"), o.value = u = e.item.title, o.name = "lens", o.className = "svelte-15a3gvm", y.className = "checkmark svelte-15a3gvm", s.className = "container svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(s, r), x && x.m(s, null), a(s, i), a(s, o), a(s, v), a(s, y)
            },
            p(r, a) {
                e = a, r.lens && b !== (b = e.item.title) && _(n, b), 0 === e.i ? x ? x.p(r, e) : ((x = Q(t, e)).c(), x.m(s, i)) : x && (x.d(1), x = null), o._svelte.ctx = e, r.lens && h !== (h = "lens-" + e.item.title) && (o.id = h), r.lens && u !== (u = e.item.title) && (o.value = u)
            },
            d(t) {
                t && c(s), x && x.d(), f(o, "change", R)
            }
        }
    }
    function X(t, e) {
        for (var s, n, r, i, o = e.frame, u = [], p = 0; p < o.length; p += 1)
            u[p] = Z(t, H(e, o, p));
        return {
            c() {
                s = m("div"), n = m("fieldset"), (r = m("h2")).textContent = "Frame", i = d("\r\n        ");
                for (var t = 0; t < u.length; t += 1)
                    u[t].c();
                n.name = "frame", n.className = "svelte-15a3gvm", s.className = "ctx-frame"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(n, r), a(n, i);
                for (var o = 0; o < u.length; o += 1)
                    u[o].m(n, null)
            },
            p(e, s) {
                if (e.frame) {
                    o = s.frame;
                    for (var r = 0; r < o.length; r += 1) {
                        const i = H(s, o, r);
                        u[r] ? u[r].p(e, i) : (u[r] = Z(t, i), u[r].c(), u[r].m(n, null))
                    }
                    for (; r < u.length; r += 1)
                        u[r].d(1);
                    u.length = o.length
                }
            },
            d(t) {
                t && c(s), h(u, t)
            }
        }
    }
    function Y(t, e) {
        var s,
            n,
            r;
        return {
            c() {
                (s = m("input"))._svelte = {
                    component: t,
                    ctx: e
                }, p(s, "change", B), s.checked = !0, s.id = n = "frame-" + e.item.title, g(s, "type", "radio"), s.value = r = e.item.title, s.name = "frame", s.className = "svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e)
            },
            p(t, i) {
                e = i, s._svelte.ctx = e, t.frame && n !== (n = "frame-" + e.item.title) && (s.id = n), t.frame && r !== (r = e.item.title) && (s.value = r)
            },
            d(t) {
                t && c(s), f(s, "change", B)
            }
        }
    }
    function Z(t, e) {
        var s,
            n,
            r,
            i,
            o,
            h,
            u,
            v,
            y,
            b = e.item.title,
            x = 0 === e.i && Y(t, e);
        return {
            c() {
                s = m("label"), n = d(b), r = d("\r\n            "), x && x.c(), i = d("\r\n            "), o = m("input"), v = d("\r\n            "), y = m("span"), o._svelte = {
                    component: t,
                    ctx: e
                }, p(o, "change", z), o.id = h = "frame-" + e.item.title, g(o, "type", "radio"), o.value = u = e.item.title, o.name = "frame", o.className = "svelte-15a3gvm", y.className = "checkmark svelte-15a3gvm", s.className = "container svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(s, r), x && x.m(s, null), a(s, i), a(s, o), a(s, v), a(s, y)
            },
            p(r, a) {
                e = a, r.frame && b !== (b = e.item.title) && _(n, b), 0 === e.i ? x ? x.p(r, e) : ((x = Y(t, e)).c(), x.m(s, i)) : x && (x.d(1), x = null), o._svelte.ctx = e, r.frame && h !== (h = "frame-" + e.item.title) && (o.id = h), r.frame && u !== (u = e.item.title) && (o.value = u)
            },
            d(t) {
                t && c(s), x && x.d(), f(o, "change", z)
            }
        }
    }
    function tt(t, e) {
        for (var s, n, r, i, o = e.strap, u = [], p = 0; p < o.length; p += 1)
            u[p] = st(t, U(e, o, p));
        return {
            c() {
                s = m("div"), n = m("fieldset"), (r = m("h2")).textContent = "Strap", i = d("\r\n        ");
                for (var t = 0; t < u.length; t += 1)
                    u[t].c();
                n.name = "strap", n.className = "svelte-15a3gvm", s.className = "ctx-strap"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(n, r), a(n, i);
                for (var o = 0; o < u.length; o += 1)
                    u[o].m(n, null)
            },
            p(e, s) {
                if (e.strap) {
                    o = s.strap;
                    for (var r = 0; r < o.length; r += 1) {
                        const i = U(s, o, r);
                        u[r] ? u[r].p(e, i) : (u[r] = st(t, i), u[r].c(), u[r].m(n, null))
                    }
                    for (; r < u.length; r += 1)
                        u[r].d(1);
                    u.length = o.length
                }
            },
            d(t) {
                t && c(s), h(u, t)
            }
        }
    }
    function et(t, e) {
        var s,
            n,
            r;
        return {
            c() {
                (s = m("input"))._svelte = {
                    component: t,
                    ctx: e
                }, p(s, "change", D), s.checked = !0, s.id = n = "strap-" + e.item.title, g(s, "type", "radio"), s.value = r = e.item.title, s.name = "strap", s.className = "svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e)
            },
            p(t, i) {
                e = i, s._svelte.ctx = e, t.strap && n !== (n = "strap-" + e.item.title) && (s.id = n), t.strap && r !== (r = e.item.title) && (s.value = r)
            },
            d(t) {
                t && c(s), f(s, "change", D)
            }
        }
    }
    function st(t, e) {
        var s,
            n,
            r,
            i,
            o,
            h,
            u,
            v,
            y,
            b,
            x = e.item.title,
            N = 0 === e.i && et(t, e);
        return {
            c() {
                s = m("label"), n = d(x), r = d("\r\n            "), N && N.c(), i = d("\r\n            "), o = m("input"), v = d("\r\n            "), y = m("span"), b = d("\r\n        "), o._svelte = {
                    component: t,
                    ctx: e
                }, p(o, "change", V), o.id = h = "strap-" + e.item.title, g(o, "type", "radio"), o.value = u = e.item.title, o.name = "strap", o.className = "svelte-15a3gvm", y.className = "checkmark svelte-15a3gvm", s.className = "container svelte-15a3gvm"
            },
            m(t, e) {
                l(t, s, e), a(s, n), a(s, r), N && N.m(s, null), a(s, i), a(s, o), a(s, v), a(s, y), a(s, b)
            },
            p(r, a) {
                e = a, r.strap && x !== (x = e.item.title) && _(n, x), 0 === e.i ? N ? N.p(r, e) : ((N = et(t, e)).c(), N.m(s, i)) : N && (N.d(1), N = null), o._svelte.ctx = e, r.strap && h !== (h = "strap-" + e.item.title) && (o.id = h), r.strap && u !== (u = e.item.title) && (o.value = u)
            },
            d(t) {
                t && c(s), N && N.d(), f(o, "change", V)
            }
        }
    }
    function nt(t) {
        var e,
            s,
            n,
            a,
            h;
        k(this, t), this.store = E, this._state = r(r(this.store._init(["options"]), {
            lens: [],
            strap: [],
            frame: [],
            selectedLens: 0,
            selectedStrap: 0,
            selectedFrame: 0
        }), t.data), this.store._add(this, ["options"]), this._intro = !!t.intro, this._handlers.destroy = [$], this._fragment = (e = this, s = this._state, h = s.$options && J(e, s), {
            c() {
                h && h.c(), n = u()
            },
            m(t, e) {
                h && h.m(t, e), l(t, n, e), a = !0
            },
            p(t, s) {
                s.$options ? h ? h.p(t, s) : ((h = J(e, s)).c(), h.m(n.parentNode, n)) : h && (h.d(1), h = null)
            },
            i(t, e) {
                a || this.m(t, e)
            },
            o: o,
            d(t) {
                h && h.d(t), t && c(n)
            }
        }), this.root._oncreate.push(() => {(function() {
                this.store.on("VARIANTS_SET", () => {
                    let t = this.store.get().variants;
                    this.extractOptions(t)
                })
            }).call(this), this.fire("update", {
                changed: i({}, this._state),
                current: this._state
            })}), t.target && (this._fragment.c(), this._mount(t.target, t.anchor), C(this)), this._intro = !0
    }
    r(nt.prototype, j), r(nt.prototype, F);
    var rt = nt,
        it = {
            renderCanvas(t) {
                let e = this.refs.canvas.getContext("2d"),
                    s = this.store.get().options.lens[0].img.width,
                    n = this.store.get().options.lens[0].img.height;
                this.refs.canvas.width = s, this.refs.canvas.height = n, e.drawImage(this.store.get().options.bg[0].img, 0, 0, s, n), e.drawImage(this.store.get().options.strap[t.strap].img, 0, 0, s, n), e.drawImage(this.store.get().options.parts[0].img, 0, 0, s, n), e.drawImage(this.store.get().options.frame[t.frame].img, 0, 0, s, n), e.drawImage(this.store.get().options.lens[t.lens].img, 0, 0, s, n), this.store.set({
                    selectedLens: this.store.get().options.lens[t.lens]
                    
                }), this.store.set({
                    selectedFrame: this.store.get().options.frame[t.frame]
                }), this.store.set({
                    selectedStrap: this.store.get().options.strap[t.strap]
                });
					let r = this.refs.canvas.toDataURL();
                	this.store.set({
                    productImage: r
                })
            }
        };
    function ot(t, e) {
        var s;
        return {
            c() {
                s = m("canvas")
            },
            m(e, n) {
                l(e, s, n), t.refs.canvas = s
            },
            d(e) {
                e && c(s), t.refs.canvas === s && (t.refs.canvas = null)
            }
        }
    }
    function at(t) {
        var e,
            s,
            n,
            a,
            h;
        k(this, t), this.store = E, this.refs = {}, this._state = r(this.store._init(["options"]), t.data), this.store._add(this, ["options"]), this._intro = !!t.intro, this._handlers.destroy = [$], this._fragment = (e = this, s = this._state, h = s.$options && ot(e), {
            c() {
                h && h.c(), n = u()
            },
            m(t, e) {
                h && h.m(t, e), l(t, n, e), a = !0
            },
            p(t, s) {
                s.$options ? h || ((h = ot(e)).c(), h.m(n.parentNode, n)) : h && (h.d(1), h = null)
            },
            i(t, e) {
                a || this.m(t, e)
            },
            o: o,
            d(t) {
                h && h.d(t), t && c(n)
            }
        }), this.root._oncreate.push(() => {(function() {
                let t = setInterval(() => {"complete" === document.readyState && (this.renderCanvas({
                        strap: 0,
                        lens: 0,
                        frame: 0
                    }), clearInterval(t))}, 100);
                this.store.on("UPDATE_CANVAS", t => {this.renderCanvas(t), console.log("Update Canvas", t)})
            }).call(this), this.fire("update", {
                changed: i({}, this._state),
                current: this._state
            })}), t.target && (this._fragment.c(), this._mount(t.target, t.anchor), C(this)), this._intro = !0
    }
    r(at.prototype, j), r(at.prototype, it);
    var lt = at;
    s(2);
    function ct(t) {
        k(this, t), this.store = E, this._state = r(this.store._init(["showModal"]), t.data), this.store._add(this, ["showModal"]), this._intro = !!t.intro, this._handlers.destroy = [$], this._fragment = function(t, e) {
            var s,
                n,
                r,
                i,
                o,
                h,
                u,
                g,
                _,
                y,
                b,
                x = new lt({
                    root: t.root,
                    store: t.store
                }),
                N = new rt({
                    root: t.root,
                    store: t.store
                });
            function w(e) {
                t.fire("close")
            }
            return {
                c() {
                    s = m("div"), (n = m("div")).innerHTML = '<h1 class="svelte-3r03ya">Build your Goggles</h1>', r = d("\r\n    "), i = m("div"), o = m("div"), x._fragment.c(), h = d("\r\n        "), u = m("div"), N._fragment.c(), g = d("\r\n    "), _ = m("div"), (y = m("button")).textContent = "Save", n.className = "modal-header svelte-3r03ya", o.className = "ctx-image svelte-3r03ya", u.className = "ctx-options svelte-3r03ya", i.className = "modal-content svelte-3r03ya", p(y, "click", w), _.className = "modal-footer svelte-3r03ya", s.id = "hvc-modal", s.className = "svelte-3r03ya", v(s, "hide", !e.$showModal)
                },
                m(t, e) {
                    l(t, s, e), a(s, n), a(s, r), a(s, i), a(i, o), x._mount(o, null), a(i, h), a(i, u), N._mount(u, null), a(s, g), a(s, _), a(_, y), b = !0
                },
                p(t, e) {
                    t.$showModal && v(s, "hide", !e.$showModal)
                },
                i(t, e) {
                    b || this.m(t, e)
                },
                o(t) {
                    var e,
                        s;
                    b && (e = t, 0 == (s = 2) && e(), t = (() => {--s || e()}), x && x._fragment.o(t), N && N._fragment.o(t), b = !1)
                },
                d(t) {
                    t && c(s), x.destroy(), N.destroy(), f(y, "click", w)
                }
            }
        }(this, this._state), t.target && (this._fragment.c(), this._mount(t.target, t.anchor), C(this)), this._intro = !0
    }
    r(ct.prototype, j);
    var ht = ct;
    var mt = {
        toggleModal() {
            this.store.set({
                showModal: !this.store.get().showModal
            }), "hidden" !== document.body.style.overflow ? document.body.style.overflow = "hidden" : (document.body.style.overflow = "auto", this.store.fire("OPTIONS_SAVED", {
                lens: this.store.get().selectedLens.title,
                frame: this.store.get().selectedFrame.title,
                strap: this.store.get().selectedStrap.title,
                productImage: this.store.get().productImage
            }))
        }
    };
    function dt(t) {
        k(this, t), this.store = E, this._state = r({
            btnText: "Customize ($10)"
        }, t.data), this._intro = !!t.intro, this._fragment = function(t, e) {
            var s,
                n,
                r,
                i,
                o,
                h = new ht({
                    root: t.root,
                    store: t.store
                });
            function u(e) {
                t.toggleModal()
            }
            return h.on("close", function(e) {
                t.toggleModal()
            }), {
                c() {
                    s = m("div"), h._fragment.c(), n = d("\r\n\t"), r = m("button"), i = d(e.btnText), p(r, "click", u), s.className = "hvc-app"
                },
                m(t, e) {
                    l(t, s, e), h._mount(s, null), a(s, n), a(s, r), a(r, i), o = !0
                },
                p(t, e) {
                    o && !t.btnText || _(i, e.btnText)
                },
                i(t, e) {
                    o || this.m(t, e)
                },
                o(t) {
                    o && (h && h._fragment.o(t), o = !1)
                },
                d(t) {
                    t && c(s), h.destroy(), f(r, "click", u)
                }
            }
        }(this, this._state), t.target && (this._fragment.c(), this._mount(t.target, t.anchor), C(this)), this._intro = !0
    }
    r(dt.prototype, j), r(dt.prototype, mt);
    var ut = dt;
    window.HVC = ut
}]);

