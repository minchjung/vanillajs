require("source-map-support").install();
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./db/data.js":
/*!********************!*\
  !*** ./db/data.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.fill.js */ "core-js/modules/es.array.fill.js");

var setData = function setData() {
  var dataLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Array(dataLength).fill(0).map(function (ele, idx) {
    return {
      id: idx + 1,
      title: "title".concat(idx + 1),
      writer: "name".concat(idx + 1),
      content: "content".concat(idx + 1),
      date: "2022-1-".concat(idx + 1)
    };
  });
};

var totData = setData(200);
var _default = totData;
exports["default"] = _default;

/***/ }),

/***/ "./public/ssr.js":
/*!***********************!*\
  !*** ./public/ssr.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  "use strict";

  var e = {
    480: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(277), n(64), n(0), n(616), n(534), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.App = void 0, n(843);
      var o,
          i = (o = n(348)) && o.__esModule ? o : {
        "default": o
      },
          u = n(96),
          a = n(54),
          c = n(337);

      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function s(e, t) {
        return s = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, s(e, t);
      }

      function f(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return d(e);
      }

      function d(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function p(e) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, p(e);
      }

      var v = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && s(e, t);
        }(v, e);
        var t,
            n,
            r,
            o,
            i = (r = v, o = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }(), function () {
          var e,
              t = p(r);

          if (o) {
            var n = p(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);

          return f(this, e);
        });

        function v() {
          var e;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, v), function (e, t, n) {
            t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e.el = n;
          }(d(e = i.call(this)), "el", void 0), e.component = [], e.component.push(new u.PostListPage()), e.component.push(new a.PostSingle()), e;
        }

        return t = v, (n = [{
          key: "template",
          value: function value(e) {
            return '\n      <div id="root">'.concat(e, "</div>\n    ");
          }
        }, {
          key: "setEvent",
          value: function value() {
            this.el = c.router.$root, this.component[c.router.getCurIndex()].setEvent();
          }
        }, {
          key: "render",
          value: function value() {
            var e = c.router.getCurIndex();
            return this.template(this.component[e].render());
          }
        }]) && l(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), v;
      }(i["default"]);

      t.App = v;
    },
    348: function _(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0, n(123), n(843);

      var o = function () {
        function e() {
          var t;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), t = void 0, "el" in this ? Object.defineProperty(this, "el", {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : this.el = t;
        }

        var t, n;
        return t = e, (n = [{
          key: "template",
          value: function value() {}
        }, {
          key: "setRoot",
          value: function value() {}
        }, {
          key: "setEvent",
          value: function value(e) {
            this.child && 0 !== this.child.length && this.child.map(function (t) {
              return t.setEvent(e);
            });
          }
        }, {
          key: "render",
          value: function value() {}
        }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }();

      t["default"] = o;
    },
    282: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(277), n(64), n(616), n(534), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Sorting = t.SortButton = t.Search = t.RefreshAll = t.PostListHeader = t.Paging = void 0, n(887), n(123), n(879), n(11), n(0), n(538), n(114), n(843);
      var o,
          i = (o = n(348)) && o.__esModule ? o : {
        "default": o
      },
          u = n(337);

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function l(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && f(e, t);
      }

      function f(e, t) {
        return f = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, f(e, t);
      }

      function d(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }();

        return function () {
          var n,
              r = y(e);

          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);

          return p(this, n);
        };
      }

      function p(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return v(e);
      }

      function v(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function y(e) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, y(e);
      }

      function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      var b = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), h(v(e = t.call(this)), "child", void 0), e.child = [], e.child.push(new m()), e.child.push(new j()), e.child.push(new g()), e.child.push(new w()), e.child.push(new P()), e;
        }

        return l(n, [{
          key: "template",
          value: function value(e) {
            return "\n      <header id=header>\n        ".concat(e, "\n      </header>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this.child.map(function (e) {
              return e.render();
            }).join("");
            return this.template(e);
          }
        }]), n;
      }(i["default"]);

      t.PostListHeader = b;

      var m = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), h(v(e = t.call(this)), "filter", void 0), h(v(e), "el", void 0), e.boundHandler = e.eventHandler.bind(v(e)), e.secondBonder = e.secondHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el = u.router.$root.querySelector("#search"), this.el.querySelector("button").removeEventListener("click", this.boundHandler), this.el.querySelector("button").addEventListener("click", this.boundHandler), this.el.querySelector("input").removeEventListener("keypress", this.secondBonder), this.el.querySelector("input").addEventListener("keypress", this.secondBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action;

            if ("searchInput" !== t && "searchBtn" === t) {
              var n = this.el.querySelector("input").value;
              u.store.setState({
                filter: n,
                page: 1
              });
            }
          }
        }, {
          key: "secondHandler",
          value: function value(e) {
            this.filter = e.target.value, "Enter" === e.code && this.filter !== u.store.state.filter && u.store.setState({
              filter: e.target.value,
              page: 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = u.store.state.filter;
            return '\n    <div data-component="search" id="search">\n      <input \n        data-action=\'searchInput\' \n        placeholder="search" \n        type="text" \n        value='.concat(e || "", ">\n      <button data-action='searchBtn'>검색</button>\n    </div>\n  ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.Search = m;

      var j = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), h(v(e = t.call(this)), "size", void 0), e.boundHandler = e.eventHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el = u.router.$root.querySelector("#paging"), this.el.removeEventListener("change", this.boundHandler), this.el.addEventListener("change", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target;
            u.store.setState({
              size: Number(t.value),
              page: 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = Number(u.store.state.size);
            return '\n      <div data-component=paging id="paging">\n        <label for="pagination" value='.concat(u.store.state.size, '>페이지</label>\n          <select data-action ="page">\n          <option value=5 ').concat(5 === e ? "selected" : "", ">5</option>\n          <option value=10 ").concat(10 === e ? "selected" : "", ">10</option>\n          <option value=20 ").concat(20 === e ? "selected" : "", ">20</option>\n        </select>\n      </div>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.Paging = j;

      var g = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), (e = t.call(this)).boundHandler = e.eventHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el = u.router.$root.querySelector("#sorting"), this.el.removeEventListener("change", this.boundHandler), this.el.addEventListener("change", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target;
            u.store.setState({
              order: t.value,
              page: 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = u.store.state.order;
            return '\n    <div data-component=\'sorting\' id="sorting">\n      <label for="sorting">날짜정렬</label>\n      <select data-action="order">\n        <option \n            name=\'order\' value="dsc" \n            '.concat("dsc" === e ? "selected" : "", ">최신</option>\n        <option \n            name='order' value=\"asc\"\n            ").concat("asc" === e ? "selected" : "", ">예전</option>\n      </select>\n    </div>");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.Sorting = g;

      var w = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), (e = t.call(this)).boundHandler = e.eventHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value(e) {
            this.el = u.router.$root.querySelector("#sortbutton"), this.el.removeEventListener("click", this.boundHandler), this.el.addEventListener("click", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            e.target, u.store.setState({
              filter: "",
              order: "dsc",
              name: "",
              page: 1,
              size: 5
            });
          }
        }, {
          key: "template",
          value: function value() {
            return '\n      <button id="sortbutton">초기화</button>\n    ';
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.SortButton = w;

      var P = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), (e = t.call(this)).boundHandler = e.eventHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el = u.router.$root.querySelector("#refreshall"), this.el.removeEventListener("click", this.boundHandler), this.el.addEventListener("click", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            e.target, window.location.reload();
          }
        }, {
          key: "template",
          value: function value() {
            return '\n      <button id="refreshall">새로고침</button>\n    ';
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.RefreshAll = P;
    },
    96: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(0), n(616), n(534), n(843), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PostListPage = void 0, n(887), n(123), n(277), n(64);
      var o,
          i = n(282),
          u = n(513);

      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function c(e, t) {
        return c = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, c(e, t);
      }

      function l(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }

      function s(e) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, s(e);
      }

      var f = function (e) {
        !function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && c(e, t);
        }(d, e);
        var t,
            n,
            r,
            o,
            f = (r = d, o = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }(), function () {
          var e,
              t = s(r);

          if (o) {
            var n = s(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);

          return l(this, e);
        });

        function d() {
          var e;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, d), (e = f.call(this)).child = [], e.child.push(new i.PostListHeader()), e.child.push(new u.Postlist()), e.child.push(new u.Pagination()), e.child.push(new u.PostButton()), e;
        }

        return t = d, (n = [{
          key: "template",
          value: function value(e) {
            return '\n      <div id="postlistpage">'.concat(e, "</div>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            return this.template(this.child.map(function (e) {
              return e.render();
            }).join(""));
          }
        }]) && a(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), d;
      }(((o = n(348)) && o.__esModule ? o : {
        "default": o
      })["default"]);

      t.PostListPage = f;
    },
    54: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(277), n(64), n(0), n(616), n(534), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PostSingle = t.Header = t.Contents = t.BottomButton = void 0, n(887), n(123), n(538), n(114), n(879), n(843);
      var o,
          i = (o = n(348)) && o.__esModule ? o : {
        "default": o
      },
          u = n(337);

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function l(e, t, n) {
        return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && f(e, t);
      }

      function f(e, t) {
        return f = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, f(e, t);
      }

      function d(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }();

        return function () {
          var n,
              r = y(e);

          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);

          return p(this, n);
        };
      }

      function p(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return v(e);
      }

      function v(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function y(e) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, y(e);
      }

      function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      var b = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), h(v(e = t.call(this)), "child", void 0), e.child = [], e.child.push(new m()), e.child.push(new j()), e.child.push(new g()), e;
        }

        return l(n, [{
          key: "template",
          value: function value(e) {
            return '\n      <section id="postsingle">\n        '.concat(e, "\n      </section>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this.child.map(function (e) {
              return e.render();
            }).join("");
            return this.template(e);
          }
        }]), n;
      }(i["default"]);

      t.PostSingle = b;

      var m = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          return a(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "template",
          value: function value() {
            var e = Number(u.router.routeState.value),
                t = u.store.state.data;
            return '\n      <header id="header">\n        <div>\n          <span>글번호</span>\n          <span>제목</span>\n          <span>작성자</span>\n          <span>날짜</span>\n        </div>\n        <div>\n          <span>'.concat(t[e].id, "</span>\n          <span>").concat(t[e].title, "</span>\n          <span>").concat(t[e].writer, "</span>\n          <span>").concat(t[e].date, "</span>\n        </div>\n\n      </header>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            return this.template();
          }
        }]), n;
      }(i["default"]);

      t.Header = m;

      var j = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          return a(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "template",
          value: function value() {
            var e = Number(u.router.routeState.value),
                t = u.store.state.data;
            return '\n      <div id="contents">\n        <p>'.concat(t[e].content, "</p>\n      </div>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            return this.template();
          }
        }]), n;
      }(i["default"]);

      t.Contents = j;

      var g = function (e) {
        s(n, e);
        var t = d(n);

        function n() {
          var e;
          return a(this, n), h(v(e = t.call(this)), "el", void 0), e.boundHandler = e.eventHandler.bind(v(e)), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el = u.router.$root.querySelector("#bottombutton"), this.el.removeEventListener("click", this.boundHandler), this.el.addEventListener("click", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action;
            "edit" === t && console.log(u.store.state), "list" === t && console.log(history.state);
          }
        }, {
          key: "template",
          value: function value() {
            return '\n      <div id="bottombutton">\n        <button data-action="edit">수정</button>\n        <button data-action="list">목록</button>\n        <button data-action="delete">삭제</button>\n      </div>\n    ';
          }
        }, {
          key: "render",
          value: function value() {
            return this.template();
          }
        }]), n;
      }(i["default"]);

      t.BottomButton = g;
    },
    513: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(0), n(616), n(534), n(843), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Postlist = t.PostButton = t.Pagination = void 0, n(879), n(887), n(123), n(114), n(538), n(277), n(64);
      var o,
          i = (o = n(348)) && o.__esModule ? o : {
        "default": o
      },
          u = n(337);

      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      function c(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function s(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      function f(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && d(e, t);
      }

      function d(e, t) {
        return d = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, d(e, t);
      }

      function p(e) {
        var t = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }();

        return function () {
          var n,
              r = h(e);

          if (t) {
            var o = h(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);

          return v(this, n);
        };
      }

      function v(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return y(e);
      }

      function y(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function h(e) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, h(e);
      }

      var b = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          var e;
          return c(this, n), (e = t.call(this)).boundHandler = e.eventHandler.bind(y(e)), e;
        }

        return s(n, [{
          key: "setEvent",
          value: function value(e) {
            this.el = u.router.$root.querySelector("#postlist"), this.el.removeEventListener("click", this.boundHandler), this.el.addEventListener("click", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target,
                n = t.dataset.action;

            if ("writer" === n && u.store.setState({
              name: t.innerText,
              filter: "",
              page: 1
            }), "title" === n) {
              var r = t.parentElement.dataset.index,
                  o = window.origin + "/post-single" + "?index=".concat(r);
              u.router.setRouteState(r), u.router.setPathCur("/post-single"), history.pushState(state, "", o);
            }
          }
        }, {
          key: "template",
          value: function value() {
            var e = u.store.state.data;
            return "\n    <div id='postlist'>\n        ".concat(0 === e.length ? "" : e.map(function (e, t) {
              return "\n          <ul data-index=".concat(t, ">  \n            <li id= ").concat(e.id, ">").concat(e.id, "</li>\n            <li data-action='title'>").concat(e.title, "</li>\n            <li data-action='writer'>").concat(e.writer, "</li>\n            <li>").concat(e.date, "</li>\n          </ul>");
            }).join(""), "\n      </div>");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.Postlist = b;

      var m = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          return c(this, n), t.call(this);
        }

        return s(n, [{
          key: "setEvent",
          value: function value(e) {
            this.el = u.router.$root.querySelector("#postbutton"), this.el.removeEventListener("click", this.eventHandler), this.el.addEventListener("click", this.eventHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            e.target, u.router.setPathCur("/post-edit");
          }
        }, {
          key: "template",
          value: function value() {
            return "\n      <div id=postbutton>\n        <button>작성</button>\n      </div>\n    ";
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.PostButton = m;

      var j = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          var e;
          return c(this, n), a(y(e = t.call(this)), "page", void 0), a(y(e), "group", void 0), e.boundHandler = e.eventHandler.bind(y(e)), e;
        }

        return s(n, [{
          key: "setEvent",
          value: function value(e) {
            this.el = u.router.$root.querySelector("#pagination"), this.el.removeEventListener("click", this.boundHandler), this.el.addEventListener("click", this.boundHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action,
                n = u.store.state.page;
            "more" === t && u.store.setState({
              page: Number(n) + 1
            }), "less" === t && u.store.setState({
              page: Number(n) - 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = u.store.state,
                t = e.page,
                n = e.size,
                r = e.total,
                o = (e.data, Number(t) > 1),
                i = Number(n) * Number(t) < Number(r);
            return "\n      <div id=pagination>\n      ".concat(0 === Number(r) ? '<span class="none-display">"게시글이 존재 하지 않습니다."</span>' : "", "\n      ").concat(o ? '<button data-action="less">이전</button>' : "", "\n      ").concat(i ? '<button data-action="more">더보기</button>' : "", "\n      ").concat(Number(r) && !i ? '<span class="none-display">"마지막 페이지 입니다"</span>' : "", "\n      </div>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = this.template();
            return this.el && (this.el.innerHTML = t, requestAnimationFrame(function () {
              return e.setEvent();
            })), t;
          }
        }]), n;
      }(i["default"]);

      t.Pagination = j;
    },
    607: function _(e, t, n) {
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0, n(843);

      var i = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), o(this, "router", void 0), o(this, "$root", void 0), o(this, "app", void 0), o(this, "cur", void 0), o(this, "routeState", void 0), this.router = {
            "/": 0,
            "/post-single": 1,
            "/post-edit": 2
          }, this.cur = 0, this.setup(), this.setPathCur(t), this.routeState = {
            value: ""
          };
        }

        var t, n;
        return t = e, (n = [{
          key: "setup",
          value: function value() {
            try {
              this.$root = document.querySelector("#root"), this.app.setRoot();
            } catch (e) {
              return;
            }
          }
        }, {
          key: "subscribe",
          value: function value(e) {
            this.app = e;
          }
        }, {
          key: "setPathCur",
          value: function value(e) {
            this.cur = this.router[e] || 0;
          }
        }, {
          key: "getCurIndex",
          value: function value() {
            return this.cur;
          }
        }, {
          key: "setRouteState",
          value: function value(e) {
            this.routeState = {
              value: e
            };
          }
        }, {
          key: "templateRender",
          value: function value() {
            var e = this.app.render();
            return this.$root && (console.log("click and then ??"), this.$root.innerHTML = e), e;
          }
        }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }();

      t["default"] = i;
    },
    337: function _() {},
    910: function _(e, t, n) {
      n(843), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0;
      var r,
          o = (r = n(607)) && r.__esModule ? r : {
        "default": r
      };

      t["default"] = function (e) {
        return new o["default"](e);
      };
    },
    275: function _(e, t, n) {
      n(843), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0;

      t["default"] = function (e) {
        return new Store(e);
      };
    },
    114: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
    },
    11: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
    },
    624: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
    },
    887: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
    },
    123: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
    },
    879: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
    },
    538: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
    },
    534: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
    },
    843: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
    },
    64: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
    },
    277: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
    },
    0: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
    },
    616: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");
    },
    47: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
    },
    76: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");
    },
    547: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");
    },
    444: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");
    },
    274: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
    }
  },
      t = {};

  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = t[r] = {
      exports: {}
    };
    return e[r](i, i.exports, n), i.exports;
  }

  var r = {};
  (function () {
    var e = r;
    n(843), Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = void 0;
    var t = n(480),
        o = u(n(910)),
        i = u(n(275));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    e["default"] = function (e) {
      var n = e.url,
          r = e.state,
          u = (0, i["default"])(r),
          a = (0, o["default"])(n),
          c = new t.App();
      return u.subscribe(c), a.subscribe(c), a.templateRender();
    };
  })(), module.exports.SSR = r;
})();

/***/ }),

/***/ "./src/executor.js":
/*!*************************!*\
  !*** ./src/executor.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.from.js */ "core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.entries.js */ "core-js/modules/es.object.entries.js");

__webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var totData = __webpack_require__(/*! ../db/data.js */ "./db/data.js"); // ---- Query executor ---- 


var queryExecutor = {
  // SELECT * FROM _ WHERE all culumn LIKE '%keyword%' 
  filterByKeyWord: function filterByKeyWord(keyword) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : totData;
    // filter by search keyworkd
    return keyword === "" ? data : data.filter(function (ele) {
      var bool = false;

      for (var _i = 0, _Object$entries = Object.entries(ele); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        if (key === 'id' || key === 'date' || key === 'index') continue; // console.log( val, keyword)

        if (!String(val).includes(keyword)) continue;
        bool = true; // console.log(ele) 

        break;
      }

      return bool;
    });
  },
  // SELECT * FROM _ WHERE writer = name
  filterByName: function filterByName(name, data) {
    // filter by writer name
    return name === "" ? data : data.filter(function (ele) {
      var bool = false;

      for (var _i2 = 0, _Object$entries2 = Object.entries(ele); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            key = _Object$entries2$_i[0],
            val = _Object$entries2$_i[1];

        if (key === 'writer' && String(val) === name) {
          bool = true;
          break;
        }
      }

      return bool;
    });
  },
  // LIMIT & OFFSET 
  setRange: function setRange(page, size, offset, end) {
    // set view data range  
    var _from = (page - 1) * size - offset;

    _from = _from < 0 ? 0 : _from;

    var _to = _from + size + offset;

    _to = _to >= end ? end : _to; // console.log(page, size, _from, _to)

    return [_from, _to, end];
  },
  // ORDER BY & INDEX
  setIndexData: function setIndexData(order, _data) {
    _data = order === 'dsc' ? _data.reverse() : _data;
    return _data.slice().map(function (item, idx) {
      item['index'] = idx;
      return item;
    });
  }
}; // set state value 

var updateStateByQueryExecutor = function updateStateByQueryExecutor(state) {
  var _state = state,
      filter = _state.filter,
      name = _state.name,
      order = _state.order,
      page = _state.page,
      size = _state.size,
      data = _state.data,
      total = _state.total;
  page = Number(page);
  size = Number(size); // console.log("executor=", page, size, filter, name, order, data)

  var filtered = queryExecutor.filterByName(name, queryExecutor.filterByKeyWord(filter));
  console.log(filtered);

  var _queryExecutor$setRan = queryExecutor.setRange(page, size, 0, filtered.length),
      _queryExecutor$setRan2 = _slicedToArray(_queryExecutor$setRan, 2),
      from = _queryExecutor$setRan2[0],
      to = _queryExecutor$setRan2[1];

  var totFilterData = queryExecutor.setIndexData(order, filtered.slice());
  data = totFilterData.slice(from, to);
  total = totFilterData.length;
  state = _objectSpread(_objectSpread({}, state), {}, {
    data: data,
    total: total
  });
  return state;
};

module.exports = updateStateByQueryExecutor;

/***/ }),

/***/ "./src/ssr.service.js":
/*!****************************!*\
  !*** ./src/ssr.service.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = __webpack_require__(/*! ../public/ssr.js */ "./public/ssr.js"),
    SSR = _require.SSR;

var getStringHtml = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return SSR["default"](context);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", !result ? 'nothing to rend' : result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getStringHtml(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = getStringHtml;

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  data: [],
  page: 1,
  size: 5,
  order: 'dsc',
  filter: '',
  name: '',
  total: 1
};
var store = {
  state: initialState,
  setState: function setState(newState) {
    this.state = _objectSpread(_objectSpread({}, this.state), newState);
  }
};
module.exports = store;

/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*global window, global*/
var util = __webpack_require__(/*! util */ "util")
var assert = __webpack_require__(/*! assert */ "assert")
function now() { return new Date().getTime() }

var slice = Array.prototype.slice
var console
var times = {}

if (typeof global !== "undefined" && global.console) {
    console = global.console
} else if (typeof window !== "undefined" && window.console) {
    console = window.console
} else {
    console = {}
}

var functions = [
    [log, "log"],
    [info, "info"],
    [warn, "warn"],
    [error, "error"],
    [time, "time"],
    [timeEnd, "timeEnd"],
    [trace, "trace"],
    [dir, "dir"],
    [consoleAssert, "assert"]
]

for (var i = 0; i < functions.length; i++) {
    var tuple = functions[i]
    var f = tuple[0]
    var name = tuple[1]

    if (!console[name]) {
        console[name] = f
    }
}

module.exports = console

function log() {}

function info() {
    console.log.apply(console, arguments)
}

function warn() {
    console.log.apply(console, arguments)
}

function error() {
    console.warn.apply(console, arguments)
}

function time(label) {
    times[label] = now()
}

function timeEnd(label) {
    var time = times[label]
    if (!time) {
        throw new Error("No such label: " + label)
    }

    delete times[label]
    var duration = now() - time
    console.log(label + ": " + duration + "ms")
}

function trace() {
    var err = new Error()
    err.name = "Trace"
    err.message = util.format.apply(null, arguments)
    console.error(err.stack)
}

function dir(object) {
    console.log(util.inspect(object) + "\n")
}

function consoleAssert(expression) {
    if (!expression) {
        var arr = slice.call(arguments, 1)
        assert.ok(false, util.format.apply(null, arr))
    }
}


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "core-js/modules/es.array.concat.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.concat.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.concat.js");

/***/ }),

/***/ "core-js/modules/es.array.fill.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.fill.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.fill.js");

/***/ }),

/***/ "core-js/modules/es.array.filter.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.filter.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.filter.js");

/***/ }),

/***/ "core-js/modules/es.array.for-each.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.for-each.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.for-each.js");

/***/ }),

/***/ "core-js/modules/es.array.from.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.from.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.from.js");

/***/ }),

/***/ "core-js/modules/es.array.includes.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.includes.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.includes.js");

/***/ }),

/***/ "core-js/modules/es.array.is-array.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.is-array.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.is-array.js");

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.iterator.js");

/***/ }),

/***/ "core-js/modules/es.array.join.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.join.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.join.js");

/***/ }),

/***/ "core-js/modules/es.array.map.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.map.js" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.map.js");

/***/ }),

/***/ "core-js/modules/es.array.reverse.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.array.reverse.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.reverse.js");

/***/ }),

/***/ "core-js/modules/es.array.slice.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.slice.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.array.slice.js");

/***/ }),

/***/ "core-js/modules/es.function.bind.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.bind.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.function.bind.js");

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.name.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.function.name.js");

/***/ }),

/***/ "core-js/modules/es.number.constructor.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.number.constructor.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.number.constructor.js");

/***/ }),

/***/ "core-js/modules/es.object.create.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.object.create.js" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.create.js");

/***/ }),

/***/ "core-js/modules/es.object.define-properties.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es.object.define-properties.js" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.define-properties.js");

/***/ }),

/***/ "core-js/modules/es.object.define-property.js":
/*!***************************************************************!*\
  !*** external "core-js/modules/es.object.define-property.js" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.define-property.js");

/***/ }),

/***/ "core-js/modules/es.object.entries.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.object.entries.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.entries.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptor.js":
/*!***************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptor.js" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptor.js");

/***/ }),

/***/ "core-js/modules/es.object.get-own-property-descriptors.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es.object.get-own-property-descriptors.js" ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-own-property-descriptors.js");

/***/ }),

/***/ "core-js/modules/es.object.get-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.get-prototype-of.js" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.get-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.keys.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.object.keys.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.keys.js");

/***/ }),

/***/ "core-js/modules/es.object.set-prototype-of.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es.object.set-prototype-of.js" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.set-prototype-of.js");

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.object.to-string.js");

/***/ }),

/***/ "core-js/modules/es.promise.js":
/*!************************************************!*\
  !*** external "core-js/modules/es.promise.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.promise.js");

/***/ }),

/***/ "core-js/modules/es.reflect.construct.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es.reflect.construct.js" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.reflect.construct.js");

/***/ }),

/***/ "core-js/modules/es.regexp.exec.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.regexp.exec.js" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.regexp.exec.js");

/***/ }),

/***/ "core-js/modules/es.string.includes.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.includes.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.includes.js");

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.iterator.js");

/***/ }),

/***/ "core-js/modules/es.symbol.description.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.symbol.description.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.description.js");

/***/ }),

/***/ "core-js/modules/es.symbol.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.symbol.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.iterator.js");

/***/ }),

/***/ "core-js/modules/es.symbol.js":
/*!***********************************************!*\
  !*** external "core-js/modules/es.symbol.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.for-each.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.for-each.js");

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/web.dom-collections.iterator.js");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "regenerator-runtime/runtime.js":
/*!*************************************************!*\
  !*** external "regenerator-runtime/runtime.js" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("regenerator-runtime/runtime.js");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var express = __webpack_require__(/*! express */ "express");

var server = express();

var ssrService = __webpack_require__(/*! ./src/ssr.service.js */ "./src/ssr.service.js");

var store = __webpack_require__(/*! ./src/store.js */ "./src/store.js");

var updateStateByQueryExecutor = __webpack_require__(/*! ./src/executor.js */ "./src/executor.js");

var PORT = 3001; // server.use(express.static(path.resolve(__dirname, 'public')))

server.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var state, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = updateStateByQueryExecutor(store.state);
            store.setState(state);
            result = ssrService({
              url: '/',
              state: state
            });
            console.log(result);
            res.send("yoasdfu aasdfasdok");

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
server.listen(PORT, function () {
  console.log("server listning by Port= " + PORT);
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map