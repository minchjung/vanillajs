require("source-map-support").install();
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/ssr.js":
/*!***********************!*\
  !*** ./public/ssr.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

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

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.fill.js */ "core-js/modules/es.array.fill.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "core-js/modules/es.array.reverse.js");

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function () {
  "use strict";

  var e = {
    114: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
    },
    220: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "core-js/modules/es.array.fill.js");
    },
    11: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");
    },
    139: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");
    },
    624: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
    },
    887: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
    },
    133: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
    },
    298: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "core-js/modules/es.array.reverse.js");
    },
    257: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");
    },
    879: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");
    },
    941: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
    },
    538: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
    },
    534: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");
    },
    507: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");
    },
    843: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");
    },
    226: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");
    },
    270: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");
    },
    64: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");
    },
    128: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");
    },
    277: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");
    },
    0: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
    },
    117: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");
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
    275: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");
    },
    274: function _(e) {
      e.exports = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
    },
    301: function _(e) {
      e.exports = __webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");
    },
    306: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(0), n(616), n(534), n(843), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0, n(941), n(277), n(64);
      var o,
          i = (o = n(581)) && o.__esModule ? o : {
        "default": o
      },
          a = n(580),
          s = n(929);

      function u(e, t) {
        return u = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, u(e, t);
      }

      function c(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(e);
      }

      function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, l(e);
      }

      var f = new (function (e) {
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
          }), t && u(e, t);
        }(i, e);
        var t,
            n,
            r,
            o = (n = i, r = function () {
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
              t = l(n);

          if (r) {
            var o = l(this).constructor;
            e = Reflect.construct(t, arguments, o);
          } else e = t.apply(this, arguments);

          return c(this, e);
        });

        function i(e) {
          var t,
              n = e.name;
          return function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, i), (t = o.call(this, {
            name: n
          })).components.push(new a.PostListPage({
            name: "postlistpage"
          })), t.components.push(new s.PostSinglePage({
            name: "postsingle"
          })), t;
        }

        return t = i, Object.defineProperty(t, "prototype", {
          writable: !1
        }), t;
      }(i["default"]))({
        name: "app"
      });
      t["default"] = f;
    },
    580: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(616), n(534), n(843), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Sorting = t.SortButton = t.Search = t.RefreshAll = t.Postlist = t.PostListPage = t.PostListHeader = t.PostButton = t.Paging = t.Pagination = void 0, n(941), n(11), n(0), n(538), n(114), n(887), n(133), n(277), n(64);
      var o = s(n(581)),
          i = s(n(996)),
          a = s(n(287));

      function s(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }

      function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
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

      function f(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }

      function d(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(e, "prototype", {
          writable: !1
        }), t && p(e, t);
      }

      function p(e, t) {
        return p = Object.setPrototypeOf || function (e, t) {
          return e.__proto__ = t, e;
        }, p(e, t);
      }

      function v(e) {
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
              r = b(e);

          if (t) {
            var o = b(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);

          return h(this, n);
        };
      }

      function h(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return y(e);
      }

      function y(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function b(e) {
        return b = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, b(e);
      }

      var m = function (e) {
        d(n, e);
        var t = v(n);

        function n(e) {
          var r,
              o = e.name;
          return f(this, n), (r = t.call(this, {
            name: o
          })).child = [], r.child.push(new j({
            name: "postlistheader"
          })), r.child.push(new S({
            name: "postlist"
          })), r.child.push(new E({
            name: "pagination"
          })), r.child.push(new _({
            name: "postbutton"
          })), r;
        }

        return l(n);
      }(o["default"]);

      t.PostListPage = m;

      var j = function (e) {
        d(n, e);
        var t = v(n);

        function n(e) {
          var r,
              o = e.name;
          return f(this, n), u(y(r = t.call(this, {
            name: o
          })), "child", void 0), r.child = [], r.child.push(new g({
            name: "search"
          })), r.child.push(new w({
            name: "paging"
          })), r.child.push(new P({
            name: "sorting"
          })), r.child.push(new O({
            name: "sortbutton"
          })), r.child.push(new k({
            name: "refreshall"
          })), r;
        }

        return l(n);
      }(o["default"]);

      t.PostListHeader = j;

      var g = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.querySelector("button").removeEventListener("click", this.firstBonder), this.el.querySelector("button").addEventListener("click", this.firstBonder), this.el.removeEventListener("keyup", this.secondBonder), this.el.addEventListener("keyup", this.secondBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action;

            if ("searchInput" !== t && "searchBtn" === t) {
              var n = this.el.querySelector("input").value;
              a["default"].setState({
                filter: n,
                page: 1,
                name: ""
              });
            }
          }
        }, {
          key: "secondHandler",
          value: function value(e) {
            this.filter = e.target.value, "Enter" === e.code && this.filter !== a["default"].state.filter && (a["default"].setState({
              filter: e.target.value,
              page: 1
            }), console.log("search button after state==", a["default"].state));
          }
        }, {
          key: "template",
          value: function value() {
            var e = a["default"].state.filter;
            return '\n    <div data-component="search" id="search">\n      <input \n        data-action=\'searchInput\' \n        placeholder="search" \n        type="text" \n        value='.concat(e || "", ">\n      <button data-action='searchBtn'>검색</button>\n    </div>\n  ");
          }
        }]), n;
      }(o["default"]);

      t.Search = g;

      var w = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("change", this.firstBonder), this.el.addEventListener("change", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target;
            a["default"].setState({
              size: Number(t.value),
              page: 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = Number(a["default"].state.size);
            return '\n      <div data-component=paging id="paging">\n        <label for="pagination" value='.concat(a["default"].state.size, '>페이지</label>\n          <select data-action ="page">\n          <option value=5 ').concat(5 === e ? "selected" : "", ">5</option>\n          <option value=10 ").concat(10 === e ? "selected" : "", ">10</option>\n          <option value=20 ").concat(20 === e ? "selected" : "", ">20</option>\n        </select>\n      </div>\n    ");
          }
        }]), n;
      }(o["default"]);

      t.Paging = w;

      var P = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("change", this.firstBonder), this.el.addEventListener("change", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target;
            a["default"].setState({
              order: t.value,
              page: 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = a["default"].state.order;
            return '\n    <div data-component=\'sorting\' id="sorting">\n      <label for="sorting">날짜정렬</label>\n      <select data-action="order">\n        <option \n            name=\'order\' value="dsc" \n            '.concat("dsc" === e ? "selected" : "", ">최신</option>\n        <option \n            name='order' value=\"asc\"\n            ").concat("asc" === e ? "selected" : "", ">예전</option>\n      </select>\n    </div>");
          }
        }]), n;
      }(o["default"]);

      t.Sorting = P;

      var O = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.firstBonder), this.el.addEventListener("click", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            e.target, a["default"].setState({
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
        }]), n;
      }(o["default"]);

      t.SortButton = O;

      var k = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.firstBonder), this.el.addEventListener("click", this.firstBonder);
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
        }]), n;
      }(o["default"]);

      t.RefreshAll = k;

      var S = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.firstBonder), this.el.addEventListener("click", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target,
                n = t.dataset.action;

            if ("writer" === n && a["default"].setState({
              name: t.innerText,
              filter: "",
              page: 1
            }), "title" === n) {
              var r = t.parentElement.dataset.index,
                  o = window.origin + "/post-single" + "?index=".concat(r);
              i["default"].setRouteState(r), i["default"].setPathCur("/post-single"), history.pushState(state, "", o);
            }
          }
        }, {
          key: "template",
          value: function value() {
            var e = a["default"].state.data;
            return console.log("dataaaa===", a["default"].state.data), "\n    <div id='postlist'>\n        ".concat(0 === e.length ? "" : e.map(function (e, t) {
              return "\n          <ul data-index=".concat(t, ">  \n            <li id= ").concat(e.id, ">").concat(e.id, "</li>\n            <li data-action='title'>").concat(e.title, "</li>\n            <li data-action='writer'>").concat(e.writer, "</li>\n            <li>").concat(e.date, "</li>\n          </ul>");
            }).join(""), "\n      </div>");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this;
            console.log("what about yo"), this.el.innerHTML = this.template(), requestAnimationFrame(function () {
              return e.setEvent();
            });
          }
        }]), n;
      }(o["default"]);

      t.Postlist = S;

      var _ = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          return f(this, n), t.apply(this, arguments);
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.eventHandler), this.el.addEventListener("click", this.eventHandler);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            e.target;
          }
        }, {
          key: "template",
          value: function value() {
            return "\n      <div id=postbutton>\n        <button>작성</button>\n      </div>\n    ";
          }
        }]), n;
      }(o["default"]);

      t.PostButton = _;

      var E = function (e) {
        d(n, e);
        var t = v(n);

        function n() {
          var e;
          f(this, n);

          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) {
            o[i] = arguments[i];
          }

          return u(y(e = t.call.apply(t, [this].concat(o))), "page", void 0), u(y(e), "group", void 0), e;
        }

        return l(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.firstBonder), this.el.addEventListener("click", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action,
                n = a["default"].state.page;
            "more" === t && a["default"].setState({
              page: Number(n) + 1
            }), "less" === t && a["default"].setState({
              page: Number(n) - 1
            });
          }
        }, {
          key: "template",
          value: function value() {
            var e = a["default"].state,
                t = e.page,
                n = e.size,
                r = e.total,
                o = (e.data, Number(t) > 1),
                i = Number(n) * Number(t) < Number(r);
            return "\n      <div id=pagination>\n      ".concat(0 === Number(r) ? '<span class="none-display">"게시글이 존재 하지 않습니다."</span>' : "", "\n      ").concat(o ? '<button data-action="less">이전</button>' : "", "\n      ").concat(i ? '<button data-action="more">더보기</button>' : "", "\n      ").concat(Number(r) && !i ? '<span class="none-display">"마지막 페이지 입니다"</span>' : "", "\n      </div>\n    ");
          }
        }]), n;
      }(o["default"]);

      t.Pagination = E;
    },
    929: function _(e, t, n) {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        }, r(e);
      }

      n(277), n(64), n(0), n(616), n(534), n(444), n(76), n(547), n(624), n(47), n(274), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PostSinglePage = t.Header = t.Contents = t.BottomButton = void 0, n(941), n(538), n(114), n(843);
      var o = s(n(581)),
          i = s(n(287)),
          a = s(n(996));

      function s(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }

      function u(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function c(e, t, n) {
        return t && u(e.prototype, t), n && u(e, n), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e;
      }

      function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
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
              r = y(e);

          if (t) {
            var o = y(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);

          return v(this, n);
        };
      }

      function v(e, t) {
        if (t && ("object" === r(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return h(e);
      }

      function h(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }

      function y(e) {
        return y = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, y(e);
      }

      var b = function (e) {
        f(n, e);
        var t = p(n);

        function n(e) {
          var r,
              o,
              i,
              a,
              s = e.name;
          return l(this, n), a = void 0, (i = "child") in (o = h(r = t.call(this, {
            name: s
          }))) ? Object.defineProperty(o, i, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : o[i] = a, r.child = [], r.child.push(new m({
            name: "header"
          })), r.child.push(new j({
            name: "contents"
          })), r.child.push(new g({
            name: "bottombutton"
          })), r;
        }

        return c(n);
      }(o["default"]);

      t.PostSinglePage = b;

      var m = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          return l(this, n), t.apply(this, arguments);
        }

        return c(n, [{
          key: "template",
          value: function value() {
            var e = Number(a["default"].routeState.value),
                t = i["default"].state.data;
            return '\n      <header id="header">\n        <div>\n          <span>글번호</span>\n          <span>제목</span>\n          <span>작성자</span>\n          <span>날짜</span>\n        </div>\n        <div>\n          <span>'.concat(t[e].id, "</span>\n          <span>").concat(t[e].title, "</span>\n          <span>").concat(t[e].writer, "</span>\n          <span>").concat(t[e].date, "</span>\n        </div>\n\n      </header>\n    ");
          }
        }]), n;
      }(o["default"]);

      t.Header = m;

      var j = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          return l(this, n), t.apply(this, arguments);
        }

        return c(n, [{
          key: "template",
          value: function value() {
            var e = Number(router.routeState.value),
                t = i["default"].state.data;
            return '\n      <div id="contents">\n        <p>'.concat(t[e].content, "</p>\n      </div>\n    ");
          }
        }]), n;
      }(o["default"]);

      t.Contents = j;

      var g = function (e) {
        f(n, e);
        var t = p(n);

        function n() {
          return l(this, n), t.apply(this, arguments);
        }

        return c(n, [{
          key: "setEvent",
          value: function value() {
            this.el.removeEventListener("click", this.firstBonder), this.el.addEventListener("click", this.firstBonder);
          }
        }, {
          key: "eventHandler",
          value: function value(e) {
            var t = e.target.dataset.action;
            "edit" === t && console.log(i["default"].state), "list" === t && console.log(history.state);
          }
        }, {
          key: "template",
          value: function value() {
            return '\n      <div id="bottombutton">\n        <button data-action="edit">수정</button>\n        <button data-action="list">목록</button>\n        <button data-action="delete">삭제</button>\n      </div>\n    ';
          }
        }]), n;
      }(o["default"]);

      t.BottomButton = g;
    },
    581: function _(e, t, n) {
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
      }), t["default"] = void 0, n(941), n(879), n(133), n(887), n(114), n(843);

      var i = function () {
        function e(t) {
          var n = t.name;
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), o(this, "el", void 0), o(this, "components", void 0), o(this, "child", void 0), o(this, "firstBonder", void 0), o(this, "secondBonder", void 0), o(this, "name", void 0), o(this, "curPos", void 0), o(this, "oldPos", void 0), o(this, "root", void 0), this.components = [], this.child = [], this.name = n, this.curPos = 0, this.oldPos = 0, this.firstBonder = this.eventHandler.bind(this), this.secondBonder = this.secondEventHandler.bind(this);
        }

        var t, n;
        return t = e, (n = [{
          key: "setRoot",
          value: function value(e) {
            this.root || (this.root = e), this.el = this.root.querySelector("#".concat(this.name)), this.components.length > 0 && this.components[this.curPos].setRoot(e), this.child.length > 0 && this.child.map(function (t) {
              return t.setRoot(e);
            }), this.setEvent();
          }
        }, {
          key: "setEvent",
          value: function value() {}
        }, {
          key: "eventHandler",
          value: function value() {}
        }, {
          key: "secondEventHandler",
          value: function value() {}
        }, {
          key: "template",
          value: function value() {
            var e = "";
            return this.components.length > 0 && (e = this.components[this.curPos].template()), this.child.length > 0 && (e = this.child.map(function (e) {
              return e.template();
            }).join("")), "\n      <div id=".concat(this.name, ">\n        ").concat(e, "\n      </div>\n    ");
          }
        }, {
          key: "render",
          value: function value() {
            var e = this,
                t = (this.el.innerHtml, this.template());
            console.log("rendering here =", this.name, this.el), this.root.innerHTML = t, requestAnimationFrame(function () {
              return e.setRoot();
            });
          }
        }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }();

      t["default"] = i;
    },
    634: function _(e, t, n) {
      n(843), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.totData = void 0, n(133), n(220);

      var r = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        return new Array(e).fill(0).map(function (e, t) {
          return {
            id: t + 1,
            title: "title".concat(t + 1),
            writer: "name".concat(t + 1),
            content: "content".concat(t + 1),
            date: "2022-1-".concat(t + 1)
          };
        });
      }(200);

      t.totData = r;
    },
    996: function _(e, t, n) {
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
      }), t["default"] = void 0, n(11), n(0), n(843);
      var i = new (function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), o(this, "routes", void 0), o(this, "base", void 0), o(this, "routeState", void 0), o(this, "root", void 0), o(this, "app", void 0), o(this, "cur", void 0), this.cur = 0, this.routeState = {
            value: ""
          };
        }

        var t, n;
        return t = e, (n = [{
          key: "subscribe",
          value: function value(e) {
            this.app = e;
          }
        }, {
          key: "setRoutes",
          value: function value(e) {
            this.routes = e;
          }
        }, {
          key: "setRoot",
          value: function value() {
            this.root || (this.root = document.querySelector("#root")), this.app.setRoot(this.root);
          }
        }, {
          key: "setRouteState",
          value: function value(e) {
            this.routeState = {
              value: e
            };
          }
        }, {
          key: "setPathCur",
          value: function value(e) {
            this.cur = this.routes.filter(function (t) {
              return t.path === e;
            })[0].comPosition, this.app.curPos = this.cur, this.templateRender(), this.setRoot();
          }
        }, {
          key: "templateRender",
          value: function value() {
            var e = this.app.template();
            this.root.innerHTML = e;
          }
        }, {
          key: "serverRender",
          value: function value() {
            return this.app.template();
          }
        }]) && r(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }())();
      t["default"] = i;
    },
    287: function _(e, t, n) {
      function r(e, t) {
        var n = Object.keys(e);

        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })), n.push.apply(n, r);
        }

        return n;
      }

      function o(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? r(Object(n), !0).forEach(function (t) {
            a(e, t, n[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
        }

        return e;
      }

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }

      function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e;
      }

      n(444), n(11), n(0), n(226), n(139), n(275), n(270), n(507), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0, n(128), n(843);
      var s = new (function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), a(this, "state", void 0), a(this, "app", void 0), a(this, "cacheHandler", void 0), this.cacheHandler = {};
        }

        var t, n;
        return t = e, (n = [{
          key: "subscribe",
          value: function value(e) {
            this.app = e;
          }
        }, {
          key: "initState",
          value: function value(e) {
            this.state = e;
          }
        }, {
          key: "setState",
          value: function value(e) {
            this.state = o(o({}, this.state), e), this.updateView();
          }
        }, {
          key: "updateView",
          value: function value() {
            0 !== Object.keys(this.cacheHandler).length && this.cacheHandler.searchCache(), this.renderAll();
          }
        }, {
          key: "renderAll",
          value: function value() {
            this.app.render();
          }
        }, {
          key: "hydrate",
          value: function value(e) {
            this.state = e;
          }
        }]) && i(t.prototype, n), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e;
      }())();
      t["default"] = s;
    },
    89: function _(e, t, n) {
      n(843), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0;
      var r,
          o = (r = n(996)) && r.__esModule ? r : {
        "default": r
      };
      n(580), n(929);

      t["default"] = function (e) {
        var t = e.app,
            n = o["default"];
        return n.subscribe(t), n.setRoutes([{
          path: "/",
          comPosition: 0
        }, {
          path: "/post-single",
          comPosition: 1
        }]), n;
      };
    },
    244: function _(e, t, n) {
      n(843), Object.defineProperty(t, "__esModule", {
        value: !0
      }), t["default"] = void 0, n(298), n(257);
      var r,
          o = (r = n(287)) && r.__esModule ? r : {
        "default": r
      },
          i = {
        data: n(634).totData.slice().reverse(),
        page: 1,
        size: 5,
        order: "dsc",
        filter: "",
        name: "",
        total: 1
      };

      t["default"] = function (e) {
        var t = e.state,
            n = e.app;
        t = t || i;
        var r = o["default"];
        return r.initState(t), r.subscribe(n), r;
      };
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
    }), e.ssr_converter = function (e) {
      return new Promise(function () {
        var n,
            r = (n = regeneratorRuntime.mark(function n(r, a) {
          var s, u, c;
          return regeneratorRuntime.wrap(function (n) {
            for (;;) {
              switch (n.prev = n.next) {
                case 0:
                  e.url, s = e.state, (0, i["default"])({
                    state: s,
                    app: t["default"]
                  }), u = (0, o["default"])({
                    app: t["default"]
                  }), (c = u.serverRender()) ? r(c) : a(new Error("SSR error"));

                case 5:
                case "end":
                  return n.stop();
              }
            }
          }, n);
        }), function () {
          var e = this,
              t = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(e, t);

            function a(e) {
              s(i, r, o, a, u, "next", e);
            }

            function u(e) {
              s(i, r, o, a, u, "throw", e);
            }

            a(void 0);
          });
        });
        return function (e, t) {
          return r.apply(this, arguments);
        };
      }());
    }, n(301), n(0), n(117);
    var t = a(n(306)),
        o = a(n(89)),
        i = a(n(244));

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    function s(e, t, n, r, o, i, a) {
      try {
        var s = e[i](a),
            u = s.value;
      } catch (e) {
        return void n(e);
      }

      s.done ? t(u) : Promise.resolve(u).then(r, o);
    }
  })(), module.exports.SSR = r;
})();

/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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
module.exports = totData;

/***/ }),

/***/ "./src/executor.js":
/*!*************************!*\
  !*** ./src/executor.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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

var totData = __webpack_require__(/*! ./Data.js */ "./src/Data.js"); // ---- Query executor ---- 


var queryExecutor = {
  // SELECT * FROM _ WHERE all culumn LIKE '%keyword%' 
  filterByKeyWord: function filterByKeyWord(keyword) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : totData;
    // filter by search keyworkd
    // console.log("datata", data)
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
    // console.log("datata", data)
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

  var filtered = queryExecutor.filterByKeyWord(filter); // console.log(filtered)

  filtered = queryExecutor.filterByName(name, filtered); // console.log(filtered)

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
  }); // console.log(state)

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
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ "./node_modules/console-browserify/index.js");


__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = __webpack_require__(/*! ../public/ssr.js */ "./public/ssr.js"),
    SSR = _require.SSR;

var getStringHtml = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context) {
    var state, ssrRendered, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = context.state; // console.log(context)
            // console.log(SSR.ssr_converter(context))

            _context.next = 3;
            return SSR.ssr_converter(context).then(result);

          case 3:
            ssrRendered = _context.sent;
            result = template(state, ssrRendered);
            console.log(result); // console.log(typeof result)

            return _context.abrupt("return", !result ? 'nothing to rend' : result);

          case 7:
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

var template = function template(state, ssr_html) {
  return "\n  <!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n  <script>window.state=".concat(JSON.stringify(state), "</script>\n</head>\n<body>\n  <div id='root'>\n    ").concat(ssr_html, " \n  </div>\n  <script src=\"./csr.js\"></script>\n</body>\n</html>\n  ");
};

module.exports = getStringHtml;

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! ../../client/src/lib/Store */ "../client/src/lib/Store.js"),
    Store = _require["default"];

var serverStore = /*#__PURE__*/function () {
  function serverStore(state) {
    _classCallCheck(this, serverStore);

    _defineProperty(this, "state", void 0);

    this.state = state;
  }

  _createClass(serverStore, [{
    key: "setState",
    value: function setState(newState) {
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
    }
  }]);

  return serverStore;
}();

var initialState = {
  data: [],
  page: 1,
  size: 5,
  order: 'dsc',
  filter: '',
  name: '',
  total: 1
};
var store = new serverStore(initialState);
module.exports = store; // const store = {
//   state : initialState, 
//   setState(newState){
//     this.state = { ...this.state, ...newState }
//   }
// }

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

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "global-jsdom/register":
/*!****************************************!*\
  !*** external "global-jsdom/register" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("global-jsdom/register");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "../client/src/lib/Store.js":
/*!**********************************!*\
  !*** ../client/src/lib/Store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Store = /*#__PURE__*/function () {
  function Store() {
    _classCallCheck(this, Store);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "app", void 0);

    _defineProperty(this, "cacheHandler", void 0);

    this.cacheHandler = {};
  }

  _createClass(Store, [{
    key: "subscribe",
    value: function subscribe(app) {
      this.app = app;
    }
  }, {
    key: "initState",
    value: function initState(initial) {
      this.state = initial;
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      if (Object.keys(this.cacheHandler).length !== 0) this.cacheHandler.searchCache();
      this.renderAll();
    }
  }, {
    key: "renderAll",
    value: function renderAll() {
      this.app.render();
    }
  }, {
    key: "hydrate",
    value: function hydrate(newState) {
      this.state = newState;
    }
  }]);

  return Store;
}();

var _default = new Store();

exports["default"] = _default;

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


__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(/*! global-jsdom/register */ "global-jsdom/register");

var express = __webpack_require__(/*! express */ "express");

var cors = __webpack_require__(/*! cors */ "cors");

var server = express();

var path = __webpack_require__(/*! path */ "path");

var PORT = 3001;

var store = __webpack_require__(/*! ./src/store.js */ "./src/store.js");

var updateStateByQueryExecutor = __webpack_require__(/*! ./src/executor.js */ "./src/executor.js");

var getStringHtml = __webpack_require__(/*! ./src/ssr.service.js */ "./src/ssr.service.js");

var updateCache = function updateCache(req, res) {
  var state = req.query; // console.log(state)

  store.state = updateStateByQueryExecutor(state);
  var _store$state = store.state,
      filter = _store$state.filter,
      name = _store$state.name,
      order = _store$state.order,
      data = _store$state.data,
      total = _store$state.total,
      page = _store$state.page,
      size = _store$state.size;
  var id = "filter=".concat(filter, "&name=").concat(name, "&order=").concat(order, "&page=").concat(page, "&size=").concat(size);
  res.json({
    id: id,
    data: data,
    total: total
  });
};

var updateState = function updateState(req, res) {
  console.log(req.body);
  if (!req.body) return res.status(400).end();
  store.setState(req.body);
  return res.status(204).end();
}; // server.use(cors());


server.options('*', cors());
server.use(express.json());
server.use(express["static"](path.resolve(__dirname, 'public')));
server.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var url, state, html;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(store.state);
            url = '/';
            state = updateStateByQueryExecutor(store.state);
            store.setState(state);
            _context.next = 6;
            return getStringHtml({
              url: url,
              state: state
            });

          case 6:
            html = _context.sent;
            // console.log("sereroiajpsfjpaowejf", html)
            res.send(html);

          case 8:
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
server.get('/api/cache', updateCache);
server.put('/api/state', updateState);
server.listen(PORT, function () {
  console.log("server listning by Port= " + PORT);
});
})();

/******/ })()
;
//# sourceMappingURL=server.js.map