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


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "core-js/modules/es.reflect.construct.js");

__webpack_require__(/*! core-js/modules/es.object.create.js */ "core-js/modules/es.object.create.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! regenerator-runtime/runtime.js */ "regenerator-runtime/runtime.js");

__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.symbol.js */ "core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "core-js/modules/es.symbol.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "core-js/modules/es.json.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "core-js/modules/es.math.to-string-tag.js");

__webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.function.bind.js */ "core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter.js */ "core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "core-js/modules/es.object.keys.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
  "use strict";

  var t = {
    d: function d(e, n) {
      for (var s in n) {
        t.o(n, s) && !t.o(e, s) && Object.defineProperty(e, s, {
          enumerable: !0,
          get: n[s]
        });
      }
    },
    o: function o(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    },
    r: function r(t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }
  },
      e = {};
  t.r(e), t.d(e, {
    ssr_converter: function ssr_converter() {
      return $;
    }
  });

  var n = /*#__PURE__*/function () {
    function n(_ref) {
      var t = _ref.name,
          e = _ref.state;

      _classCallCheck(this, n);

      _defineProperty(this, "el", void 0);

      _defineProperty(this, "components", void 0);

      _defineProperty(this, "child", void 0);

      _defineProperty(this, "firstBonder", void 0);

      _defineProperty(this, "secondBonder", void 0);

      _defineProperty(this, "name", void 0);

      _defineProperty(this, "curPos", void 0);

      _defineProperty(this, "oldPos", void 0);

      _defineProperty(this, "root", void 0);

      _defineProperty(this, "state", void 0);

      this.components = [], this.child = [], this.name = t, this.state = e, this.curPos = 0, this.oldPos = 0, this.firstBonder = this.eventHandler.bind(this), this.secondBonder = this.secondEventHandler.bind(this);
    }

    _createClass(n, [{
      key: "setState",
      value: function setState(t) {
        this.state = t, this.components.length > 0 && this.components[this.curPos].setState(t), this.child.length > 0 && this.child.map(function (e) {
          return e.setState(t);
        });
      }
    }, {
      key: "setRoot",
      value: function setRoot(t) {
        this.root || (this.root = t), this.el = this.root.querySelector("#".concat(this.name)), this.components.length > 0 && this.components[this.curPos].setRoot(t), this.child.length > 0 && this.child.map(function (e) {
          return e.setRoot(t);
        }), this.setEvent();
      }
    }, {
      key: "setEvent",
      value: function setEvent() {}
    }, {
      key: "eventHandler",
      value: function eventHandler() {}
    }, {
      key: "secondEventHandler",
      value: function secondEventHandler() {}
    }, {
      key: "template",
      value: function template() {
        var t = "";
        return this.components.length > 0 && (t = this.components[this.curPos].template()), this.child.length > 0 && (t = this.child.map(function (t) {
          return t.template();
        }).join("")), "\n      <div id=".concat(this.name, ">\n        ").concat(t, "\n      </div>\n    ");
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        this.el.innerHtml;
        var t = this.template();
        this.el.innerHTML = t, requestAnimationFrame(function () {
          return _this.setRoot();
        });
      }
    }]);

    return n;
  }();

  var s = /*#__PURE__*/function (_n) {
    _inherits(s, _n);

    var _super = _createSuper(s);

    function s(_ref2) {
      var _this2;

      var t = _ref2.name,
          e = _ref2.state;

      _classCallCheck(this, s);

      _this2 = _super.call(this, {
        name: t,
        state: e
      }), _this2.child = [], _this2.child.push(new a({
        name: "postlistheader",
        state: e
      })), _this2.child.push(new d({
        name: "postlist",
        state: e
      })), _this2.child.push(new p({
        name: "pagination",
        state: e
      })), _this2.child.push(new c({
        name: "postbutton",
        state: e
      }));
      return _this2;
    }

    return _createClass(s);
  }(n);

  var a = /*#__PURE__*/function (_n2) {
    _inherits(a, _n2);

    var _super2 = _createSuper(a);

    function a(_ref3) {
      var _this3;

      var t = _ref3.name,
          e = _ref3.state;

      _classCallCheck(this, a);

      (_this3 = _super2.call(this, {
        name: t,
        state: e
      }), _defineProperty(_assertThisInitialized(_this3), "child", void 0)), _this3.child = [], _this3.child.push(new i({
        name: "search",
        state: e
      })), _this3.child.push(new o({
        name: "paging",
        state: e
      })), _this3.child.push(new r({
        name: "sorting",
        state: e
      })), _this3.child.push(new l({
        name: "sortbutton",
        state: e
      })), _this3.child.push(new h({
        name: "refreshall",
        state: e
      }));
      return _this3;
    }

    return _createClass(a);
  }(n);

  var i = /*#__PURE__*/function (_n3) {
    _inherits(i, _n3);

    var _super3 = _createSuper(i);

    function i() {
      _classCallCheck(this, i);

      return _super3.apply(this, arguments);
    }

    _createClass(i, [{
      key: "template",
      value: function template() {
        return "\n    <div data-component=\"search\" id=\"search\">\n      <input \n        data-action='searchInput' \n        placeholder=\"search\" \n        type=\"text\" \n        value=".concat(this.state.filter || "", ">\n      <button data-action='searchBtn'>\uAC80\uC0C9</button>\n    </div>\n  ");
      }
    }]);

    return i;
  }(n);

  var o = /*#__PURE__*/function (_n4) {
    _inherits(o, _n4);

    var _super4 = _createSuper(o);

    function o() {
      _classCallCheck(this, o);

      return _super4.apply(this, arguments);
    }

    _createClass(o, [{
      key: "template",
      value: function template() {
        var t = Number(this.state.size);
        return "\n      <div data-component=paging id=\"paging\">\n        <label for=\"pagination\" value=".concat(t, ">\uD398\uC774\uC9C0</label>\n          <select data-action =\"page\">\n          <option value=5 ").concat(5 === t ? "selected" : "", ">5</option>\n          <option value=10 ").concat(10 === t ? "selected" : "", ">10</option>\n          <option value=20 ").concat(20 === t ? "selected" : "", ">20</option>\n        </select>\n      </div>\n    ");
      }
    }]);

    return o;
  }(n);

  var r = /*#__PURE__*/function (_n5) {
    _inherits(r, _n5);

    var _super5 = _createSuper(r);

    function r() {
      _classCallCheck(this, r);

      return _super5.apply(this, arguments);
    }

    _createClass(r, [{
      key: "template",
      value: function template() {
        var t = this.state.order;
        return "\n    <div data-component='sorting' id=\"sorting\">\n      <label for=\"sorting\">\uB0A0\uC9DC\uC815\uB82C</label>\n      <select data-action=\"order\">\n        <option \n            name='order' value=\"dsc\" \n            ".concat("dsc" === t ? "selected" : "", ">\uCD5C\uC2E0</option>\n        <option \n            name='order' value=\"asc\"\n            ").concat("asc" === t ? "selected" : "", ">\uC608\uC804</option>\n      </select>\n    </div>");
      }
    }]);

    return r;
  }(n);

  var l = /*#__PURE__*/function (_n6) {
    _inherits(l, _n6);

    var _super6 = _createSuper(l);

    function l() {
      _classCallCheck(this, l);

      return _super6.apply(this, arguments);
    }

    _createClass(l, [{
      key: "template",
      value: function template() {
        return '\n      <button id="sortbutton">?????????</button>\n    ';
      }
    }]);

    return l;
  }(n);

  var h = /*#__PURE__*/function (_n7) {
    _inherits(h, _n7);

    var _super7 = _createSuper(h);

    function h() {
      _classCallCheck(this, h);

      return _super7.apply(this, arguments);
    }

    _createClass(h, [{
      key: "template",
      value: function template() {
        return '\n      <button id="refreshall">????????????</button>\n    ';
      }
    }]);

    return h;
  }(n);

  var d = /*#__PURE__*/function (_n8) {
    _inherits(d, _n8);

    var _super8 = _createSuper(d);

    function d() {
      _classCallCheck(this, d);

      return _super8.apply(this, arguments);
    }

    _createClass(d, [{
      key: "template",
      value: function template() {
        var t = this.state.data;
        return "\n    <div id='postlist'>\n        ".concat(0 === t.length ? "" : t.map(function (t, e) {
          return "\n          <ul data-index=".concat(e, ">  \n            <li id= ").concat(t.id, ">").concat(t.id, "</li>\n            <li data-action='title'>").concat(t.title, "</li>\n            <li data-action='writer'>").concat(t.writer, "</li>\n            <li>").concat(t.date, "</li>\n          </ul>");
        }).join(""), "\n      </div>");
      }
    }]);

    return d;
  }(n);

  var c = /*#__PURE__*/function (_n9) {
    _inherits(c, _n9);

    var _super9 = _createSuper(c);

    function c() {
      _classCallCheck(this, c);

      return _super9.apply(this, arguments);
    }

    _createClass(c, [{
      key: "template",
      value: function template() {
        return "\n      <div id=postbutton>\n        <button>??????</button>\n      </div>\n    ";
      }
    }]);

    return c;
  }(n);

  var p = /*#__PURE__*/function (_n10) {
    _inherits(p, _n10);

    var _super10 = _createSuper(p);

    function p() {
      var _this4;

      _classCallCheck(this, p);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this4 = _super10.call.apply(_super10, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this4), "page", void 0);

      _defineProperty(_assertThisInitialized(_this4), "group", void 0);

      return _this4;
    }

    _createClass(p, [{
      key: "template",
      value: function template() {
        var _this$state = this.state,
            t = _this$state.page,
            e = _this$state.size,
            n = _this$state.total,
            s = _this$state.data,
            a = Number(t) > 1,
            i = Number(e) * Number(t) < Number(n);
        return "\n      <div id=pagination>\n      ".concat(0 === Number(n) ? '<span class="none-display">"???????????? ?????? ?????? ????????????."</span>' : "", "\n      ").concat(a ? '<button data-action="less">??????</button>' : "", "\n      ").concat(i ? '<button data-action="more">?????????</button>' : "", "\n      ").concat(Number(n) && !i ? '<span class="none-display">"????????? ????????? ?????????"</span>' : "", "\n      </div>\n    ");
      }
    }]);

    return p;
  }(n);

  var u = /*#__PURE__*/function (_n11) {
    _inherits(u, _n11);

    var _super11 = _createSuper(u);

    function u(_ref4) {
      var _this5;

      var t = _ref4.name,
          e = _ref4.state;

      _classCallCheck(this, u);

      (_this5 = _super11.call(this, {
        name: t,
        state: e
      }), _defineProperty(_assertThisInitialized(_this5), "child", void 0)), _this5.child = [], _this5.child.push(new m({
        name: "header",
        state: e
      })), _this5.child.push(new b({
        name: "contents",
        state: e
      })), _this5.child.push(new v({
        name: "bottombutton",
        state: e
      }));
      return _this5;
    }

    return _createClass(u);
  }(n);

  var m = /*#__PURE__*/function (_n12) {
    _inherits(m, _n12);

    var _super12 = _createSuper(m);

    function m() {
      _classCallCheck(this, m);

      return _super12.apply(this, arguments);
    }

    _createClass(m, [{
      key: "template",
      value: function template() {
        var t = this.index || 0,
            e = this.state.data;
        return "\n      <header id=\"header\">\n        <div>\n          <span>\uAE00\uBC88\uD638</span>\n          <span>\uC81C\uBAA9</span>\n          <span>\uC791\uC131\uC790</span>\n          <span>\uB0A0\uC9DC</span>\n        </div>\n        <div>\n          <span>".concat(e[t].id, "</span>\n          <span>").concat(e[t].title, "</span>\n          <span>").concat(e[t].writer, "</span>\n          <span>").concat(e[t].date, "</span>\n        </div>\n\n      </header>\n    ");
      }
    }]);

    return m;
  }(n);

  var b = /*#__PURE__*/function (_n13) {
    _inherits(b, _n13);

    var _super13 = _createSuper(b);

    function b() {
      _classCallCheck(this, b);

      return _super13.apply(this, arguments);
    }

    _createClass(b, [{
      key: "template",
      value: function template() {
        var t = this.index || 0,
            e = this.state.data;
        return "\n      <div id=\"contents\">\n        <p>".concat(e[t].content, "</p>\n      </div>\n    ");
      }
    }]);

    return b;
  }(n);

  var v = /*#__PURE__*/function (_n14) {
    _inherits(v, _n14);

    var _super14 = _createSuper(v);

    function v() {
      _classCallCheck(this, v);

      return _super14.apply(this, arguments);
    }

    _createClass(v, [{
      key: "template",
      value: function template() {
        return '\n      <div id="bottombutton">\n        <button data-action="edit">??????</button>\n        <button data-action="list">??????</button>\n        <button data-action="delete">??????</button>\n      </div>\n    ';
      }
    }]);

    return v;
  }(n);

  var g = new ( /*#__PURE__*/function (_n15) {
    _inherits(_class2, _n15);

    var _super15 = _createSuper(_class2);

    function _class2(_ref5) {
      var _this6;

      var t = _ref5.name,
          e = _ref5.state;

      _classCallCheck(this, _class2);

      _this6 = _super15.call(this, {
        name: t,
        state: e
      }), _this6.components.push(new s({
        name: "postlistpage",
        state: e
      })), _this6.components.push(new u({
        name: "postsingle",
        state: e
      }));
      return _this6;
    }

    return _createClass(_class2);
  }(n))({
    name: "app"
  });

  function $(t) {
    return new Promise( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, n) {
        var s, a, i, o, r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                s = t.url, a = t.state, i = new ( /*#__PURE__*/function () {
                  function _class4() {
                    _classCallCheck(this, _class4);

                    _defineProperty(this, "state", void 0);

                    _defineProperty(this, "app", void 0);

                    _defineProperty(this, "cacheHandler", void 0);

                    this.cacheHandler = {};
                  }

                  _createClass(_class4, [{
                    key: "subscribe",
                    value: function subscribe(t) {
                      this.app = t;
                    }
                  }, {
                    key: "initState",
                    value: function initState(t) {
                      this.state = t;
                    }
                  }, {
                    key: "setState",
                    value: function setState(t) {
                      this.state = _objectSpread(_objectSpread({}, this.state), t), this.updateView();
                      var _this$state2 = this.state,
                          e = _this$state2.filter,
                          n = _this$state2.name,
                          s = _this$state2.order,
                          a = _this$state2.page,
                          i = _this$state2.size,
                          o = _this$state2.total,
                          r = "/page?filter=".concat(e, "&name=").concat(n, "&order=").concat(s, "&page=").concat(a, "&size=").concat(i, "&total=").concat(o);
                      console.log("after state change all == url to change==", r), history.pushState({
                        state: this.state
                      }, null, location.origin + r);
                    }
                  }, {
                    key: "updateView",
                    value: function updateView() {
                      0 !== Object.keys(this.cacheHandler).length && this.cacheHandler.searchCache(), this.renderAll();
                    }
                  }, {
                    key: "renderAll",
                    value: function renderAll() {
                      this.app.render();
                    }
                  }, {
                    key: "hydrate",
                    value: function hydrate(t) {
                      this.state = t;
                    }
                  }]);

                  return _class4;
                }())(), o = new ( /*#__PURE__*/function () {
                  function _class6() {
                    _classCallCheck(this, _class6);

                    _defineProperty(this, "routes", void 0);

                    _defineProperty(this, "base", void 0);

                    _defineProperty(this, "routeState", void 0);

                    _defineProperty(this, "root", void 0);

                    _defineProperty(this, "app", void 0);

                    _defineProperty(this, "cur", void 0);

                    this.cur = 0, this.routeState = {
                      value: ""
                    };
                  }

                  _createClass(_class6, [{
                    key: "subscribe",
                    value: function subscribe(t) {
                      this.app = t;
                    }
                  }, {
                    key: "setRoutes",
                    value: function setRoutes(t) {
                      this.routes = t;
                    }
                  }, {
                    key: "setRoot",
                    value: function setRoot(t) {
                      this.root = t;

                      try {
                        this.app.setRoot(this.root);
                      } catch (t) {
                        if (t instanceof TypeError) return this.serverRender();
                      }
                    }
                  }, {
                    key: "setRouteState",
                    value: function setRouteState(t) {
                      this.routeState = {
                        value: t
                      };
                    }
                  }, {
                    key: "setPathCur",
                    value: function setPathCur(t) {
                      this.cur = this.routes.filter(function (e) {
                        return e.path === t;
                      })[0].comPosition, this.app.curPos = this.cur, this.templateRender(), this.setRoot();
                    }
                  }, {
                    key: "templateRender",
                    value: function templateRender() {
                      var t = this.app.template();
                      this.root.innerHTML = t;
                    }
                  }, {
                    key: "serverRender",
                    value: function serverRender() {
                      return this.app.template();
                    }
                  }]);

                  return _class6;
                }())();
                o.subscribe(g), o.setRoutes([{
                  path: "/",
                  comPosition: 0
                }, {
                  path: "/post-single",
                  comPosition: 1
                }]), g.setState(a), i.initState(a);
                r = o.serverRender();
                r ? e(r) : n(new Error("SSR error"));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref6.apply(this, arguments);
      };
    }());
  }

  module.exports.SSR = e;
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

__webpack_require__(/*! core-js/modules/es.array.slice.js */ "core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.reverse.js */ "core-js/modules/es.array.reverse.js");

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
module.exports = {
  totData: totData,
  initialState: {
    data: totData.slice().reverse().slice(0, 5),
    page: 1,
    size: 5,
    order: 'dsc',
    filter: '',
    name: '',
    total: totData.length
  }
};

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

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = __webpack_require__(/*! ./Data.js */ "./src/Data.js"),
    totData = _require.totData; // ---- Query executor ---- 


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
};
module.exports = {
  updateStateByQueryExecutor: function updateStateByQueryExecutor(state) {
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
  },
  getPathURL: function getPathURL(state) {
    var filter = state.filter,
        name = state.name,
        order = state.order,
        data = state.data,
        total = state.total,
        page = state.page,
        size = state.size;
    var id = "filter=".concat(filter, "&name=").concat(name, "&order=").concat(order, "&page=").concat(page, "&size=").concat(size, "&total=").concat(total);
    return id;
  }
};

/***/ }),

/***/ "./src/ssr.service.js":
/*!****************************!*\
  !*** ./src/ssr.service.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


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
            result = template(state, ssrRendered); // console.log(result)
            // console.log(typeof result)

            return _context.abrupt("return", !result ? 'nothing to rend' : result);

          case 6:
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

var _require = __webpack_require__(/*! ./Data */ "./src/Data.js"),
    initialState = _require.initialState;

var ServerStore = /*#__PURE__*/function () {
  function ServerStore(state) {
    _classCallCheck(this, ServerStore);

    _defineProperty(this, "state", void 0);

    this.state = state;
  }

  _createClass(ServerStore, [{
    key: "setState",
    value: function setState(newState) {
      this.state = _objectSpread(_objectSpread({}, this.state), newState);
    }
  }]);

  return ServerStore;
}();

module.exports = new ServerStore(initialState);

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

/***/ "core-js/modules/es.json.to-string-tag.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.json.to-string-tag.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.json.to-string-tag.js");

/***/ }),

/***/ "core-js/modules/es.math.to-string-tag.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.math.to-string-tag.js" ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.math.to-string-tag.js");

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

/***/ "core-js/modules/es.symbol.to-string-tag.js":
/*!*************************************************************!*\
  !*** external "core-js/modules/es.symbol.to-string-tag.js" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.symbol.to-string-tag.js");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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

__webpack_require__(/*! global-jsdom/register */ "global-jsdom/register");

var express = __webpack_require__(/*! express */ "express");

var cors = __webpack_require__(/*! cors */ "cors");

var fs = __webpack_require__(/*! fs */ "fs");

var path = __webpack_require__(/*! path */ "path");

var server = express();
var PORT = 3001;

var _require = __webpack_require__(/*! ./src/executor.js */ "./src/executor.js"),
    updateStateByQueryExecutor = _require.updateStateByQueryExecutor,
    getPathURL = _require.getPathURL;

var getStringHtml = __webpack_require__(/*! ./src/ssr.service.js */ "./src/ssr.service.js");

var store = __webpack_require__(/*! ./src/store.js */ "./src/store.js");

var _require2 = __webpack_require__(/*! ./src/Data */ "./src/Data.js"),
    initialState = _require2.initialState;

server.options('*', cors());
server.use(express.json());
server.use(express["static"](path.resolve(__dirname, 'public')));

var updateCache = function updateCache(req, res) {
  if (!req.query) return res.status(400).end();
  store.setState(updateStateByQueryExecutor(req.query));
  var _store$state = store.state,
      data = _store$state.data,
      total = _store$state.total;
  res.json({
    id: getPathURL(store.state),
    data: data,
    total: total
  });
};

var updateState = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (req.body) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", res.status(400).end());

          case 2:
            store.setState(req.body);
            return _context.abrupt("return", res.status(203).end());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function updateState(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

server.get('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var redirectTo;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            store.setState(initialState);
            redirectTo = "/page?" + getPathURL(store.state);
            return _context2.abrupt("return", res.redirect(redirectTo));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
server.get('/page', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var filePath, fileURL, state, html, fileHTML;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            filePath = 'page?' + getPathURL(req.query);
            fileURL = path.resolve(__dirname, 'index_' + filePath + '.html');

            if (fs.existsSync(fileURL)) {
              _context3.next = 12;
              break;
            }

            state = store.state;
            _context3.next = 6;
            return getStringHtml({
              url: '/',
              state: state
            });

          case 6:
            html = _context3.sent;
            _context3.next = 9;
            return fs.writeFileSync(fileURL, html);

          case 9:
            return _context3.abrupt("return", res.redirect('/' + filePath));

          case 12:
            _context3.next = 14;
            return fs.readFileSync(fileURL, 'utf-8');

          case 14:
            fileHTML = _context3.sent;
            return _context3.abrupt("return", res.send(fileHTML));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
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