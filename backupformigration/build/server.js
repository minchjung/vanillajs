/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store.js */ \"./src/store.js\"));\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! ./core/Component.js */ \"./src/core/Component.js\"));\n\nvar _PostListPage = _interopRequireDefault(__webpack_require__(/*! ./pages/post-list/PostListPage.js */ \"./src/pages/post-list/PostListPage.js\"));\n\nvar _PostSingle = __webpack_require__(/*! ./pages/post-single/PostSingle.js */ \"./src/pages/post-single/PostSingle.js\");\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ./router.js */ \"./src/router.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar App = /*#__PURE__*/function (_Component) {\n  _inherits(App, _Component);\n\n  var _super = _createSuper(App);\n\n  function App() {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"el\", void 0);\n\n    _this.component = [];\n\n    _this.component.push(new _PostListPage[\"default\"]());\n\n    _this.component.push(new _PostSingle.PostSingle());\n\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"template\",\n    value: function template(renderHtml) {\n      return \"\\n      <div id=\\\"root\\\">\".concat(renderHtml, \"</div>\\n    \");\n    }\n  }, {\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root;\n\n      this.component[_router[\"default\"].getCurIndex()].setEvent();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var cur = _router[\"default\"].getCurIndex();\n\n      var renderHtml = this.template(this.component[cur].render());\n      return renderHtml;\n    }\n  }]);\n\n  return App;\n}(_Component2[\"default\"]);\n\nvar _default = App;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/App.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.replace.js */ \"core-js/modules/es.string.replace.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"core-js/modules/es.array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.name.js */ \"core-js/modules/es.function.name.js\");\n\n__webpack_require__(/*! core-js/modules/es.promise.js */ \"core-js/modules/es.promise.js\");\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App.js */ \"./src/App.js\"));\n\nvar _fs = _interopRequireDefault(__webpack_require__(/*! fs */ \"fs\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _data = __webpack_require__(/*! ./db/data.js */ \"./src/db/data.js\");\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ./store */ \"./src/store.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ./router.js */ \"./src/router.js\"));\n\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar controller = {\n  serverRenderer: function () {\n    var _serverRenderer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {\n      var html, app, pathname;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return _fs[\"default\"].readFileSync(_path[\"default\"].resolve(__dirname, 'index.html'), 'utf-8');\n\n            case 2:\n              html = _context.sent;\n              // file upload error \n              if (!html) res.status(500), end(); // initialize server static rendering \n\n              app = new _App[\"default\"]();\n              pathname = req.url || '/';\n\n              _store[\"default\"].subscribe(app);\n\n              _router[\"default\"].subscribe(app); // update state with new DBdata - state condition is synced with clients\n\n\n              _store[\"default\"].state = (0, _data.updateStateByQueryExecutor)(_store[\"default\"].state); // String - Static Rendering \n\n              html = html.replace(\"<div id=\\\"root\\\"></div>\", _router[\"default\"].setPathCur(pathname));\n              html = html.replace(\"<script>window</script>\", \"<script>window.state=\".concat(JSON.stringify(_store[\"default\"].state), \"</script>\"));\n              res.send(html);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    function serverRenderer(_x, _x2) {\n      return _serverRenderer.apply(this, arguments);\n    }\n\n    return serverRenderer;\n  }(),\n  // update cache data\n  updateCache: function updateCache(req, res) {\n    var state = req.query; // console.log(req.query)\n    // update server side state, too  \n\n    _store[\"default\"].state = (0, _data.updateStateByQueryExecutor)(state);\n    var _store$state = _store[\"default\"].state,\n        filter = _store$state.filter,\n        name = _store$state.name,\n        order = _store$state.order,\n        data = _store$state.data,\n        total = _store$state.total; // response cache data\n\n    res.json({\n      id: _store[\"default\"].getCacheId(),\n      data: data,\n      total: total\n    });\n  },\n  // sync state with client one  \n  updateState: function updateState(req, res) {\n    // console.log(req.body)\n    if (!req.body) return res.status(400).end();\n\n    _store[\"default\"].hydrate(req.body);\n\n    return res.status(204).end();\n  }\n};\nvar _default = controller;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/controller.js?");

/***/ }),

/***/ "./src/core/Component.js":
/*!*******************************!*\
  !*** ./src/core/Component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nvar _Subscriber2 = _interopRequireDefault(__webpack_require__(/*! ./Subscriber.js */ \"./src/core/Subscriber.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Component = /*#__PURE__*/function (_Subscriber) {\n  _inherits(Component, _Subscriber);\n\n  var _super = _createSuper(Component);\n\n  function Component() {\n    var _this;\n\n    _classCallCheck(this, Component);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"el\", void 0);\n\n    return _this;\n  } // add this eventhandler\n\n\n  _createClass(Component, [{\n    key: \"eventHandler\",\n    value: function eventHandler() {}\n  }]);\n\n  return Component;\n}(_Subscriber2[\"default\"]);\n\nexports[\"default\"] = Component;\n\n//# sourceURL=webpack://reset/./src/core/Component.js?");

/***/ }),

/***/ "./src/core/Publisher.js":
/*!*******************************!*\
  !*** ./src/core/Publisher.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"core-js/modules/web.dom-collections.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Publisher = /*#__PURE__*/function () {\n  function Publisher(state) {\n    _classCallCheck(this, Publisher);\n\n    _defineProperty(this, \"observers\", void 0);\n\n    _defineProperty(this, \"state\", void 0);\n\n    this.state = state;\n    this.observers = [];\n  }\n\n  _createClass(Publisher, [{\n    key: \"subscribe\",\n    value: function subscribe(observer) {\n      this.observers.push(observer);\n    }\n  }, {\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      this.observers.forEach(function (observer) {\n        return observer.setEvent(root);\n      });\n    }\n  }, {\n    key: \"setState\",\n    value: function setState() {}\n  }, {\n    key: \"renderAll\",\n    value: function renderAll() {\n      this.observers.forEach(function (observer) {\n        return observer.render();\n      });\n    }\n  }]);\n\n  return Publisher;\n}();\n\nexports[\"default\"] = Publisher;\n\n//# sourceURL=webpack://reset/./src/core/Publisher.js?");

/***/ }),

/***/ "./src/core/Router.js":
/*!****************************!*\
  !*** ./src/core/Router.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Router = /*#__PURE__*/function () {\n  function Router() {\n    _classCallCheck(this, Router);\n\n    _defineProperty(this, \"router\", void 0);\n\n    _defineProperty(this, \"$root\", void 0);\n\n    _defineProperty(this, \"app\", void 0);\n\n    _defineProperty(this, \"cur\", void 0);\n\n    _defineProperty(this, \"routeState\", void 0);\n\n    this.router = {\n      '/': 0,\n      '/post-single': 1,\n      '/post-edit': 2\n    };\n    this.cur = 0;\n    this.setup();\n    this.routeState = {\n      value: \"\"\n    };\n  }\n\n  _createClass(Router, [{\n    key: \"setup\",\n    value: function setup() {\n      try {\n        this.$root = document.querySelector('#root');\n        this.app.setRoot();\n      } catch (_unused) {\n        return;\n      }\n    }\n  }, {\n    key: \"subscribe\",\n    value: function subscribe(app) {\n      this.app = app;\n    }\n  }, {\n    key: \"setPathCur\",\n    value: function setPathCur(path) {\n      this.cur = this.router[path] || 0;\n      return this.templateRender();\n    }\n  }, {\n    key: \"getCurIndex\",\n    value: function getCurIndex() {\n      return this.cur;\n    }\n  }, {\n    key: \"setRouteState\",\n    value: function setRouteState(newVal) {\n      // console.log(newVal)\n      this.routeState = {\n        value: newVal\n      };\n    }\n  }, {\n    key: \"templateRender\",\n    value: function templateRender() {\n      var html = this.app.render();\n\n      if (this.$root) {\n        console.log(\"click and then ??\");\n        this.$root.innerHTML = html;\n      }\n\n      return html;\n    }\n  }]);\n\n  return Router;\n}();\n\nvar _default = Router;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/core/Router.js?");

/***/ }),

/***/ "./src/core/Store.js":
/*!***************************!*\
  !*** ./src/core/Store.js ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.keys.js */ \"core-js/modules/es.object.keys.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"core-js/modules/es.object.get-own-property-descriptor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"core-js/modules/web.dom-collections.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"core-js/modules/es.object.get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"core-js/modules/es.object.define-properties.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! regenerator-runtime/runtime.js */ \"regenerator-runtime/runtime.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"core-js/modules/es.array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.name.js */ \"core-js/modules/es.function.name.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.promise.js */ \"core-js/modules/es.promise.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\nvar _Publisher2 = _interopRequireDefault(__webpack_require__(/*! ./Publisher.js */ \"./src/core/Publisher.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Store = /*#__PURE__*/function (_Publisher) {\n  _inherits(Store, _Publisher);\n\n  var _super = _createSuper(Store);\n\n  function Store() {\n    _classCallCheck(this, Store);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Store, [{\n    key: \"setState\",\n    value: function setState(newState) {\n      var initial = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      this.state = _objectSpread(_objectSpread({}, this.state), newState); // initial rending => just to set cache \n\n      if (initial) return this.setCache(); // Check cache on every change of states \n\n      this.searchCache();\n      this.renderAll();\n      return;\n    }\n  }, {\n    key: \"setCache\",\n    value: function setCache() {\n      // First hasCacheChecker \n      var _this$state = this.state,\n          data = _this$state.data,\n          total = _this$state.total;\n\n      var _this$hasCacheChecker = this.hasCacheChecker(),\n          isValid = _this$hasCacheChecker.isValid,\n          cachingData = _this$hasCacheChecker.cachingData;\n\n      var cached = JSON.parse(localStorage.getItem('cached')); // no cache => set cache by newState\n\n      if (!cached) {\n        // console.log(this.getCacheId())\n        return localStorage.setItem('cached', JSON.stringify([{\n          id: this.getCacheId(),\n          data: data,\n          total: total\n        }]));\n      } // cache exists but needs to have more with newState\n\n\n      if (!isValid) {\n        // if cache over 100 => get rid of the first 20  \n        if (isValid && cached.length >= 100) {\n          cached = cached.filter(function (ele, idx) {\n            return idx >= 20;\n          });\n          localStorage.removeItem('cached');\n        } // over 100 or not update cache with newone\n\n\n        cached.push({\n          id: this.getCacheId(),\n          data: data,\n          total: total\n        });\n        return localStorage.setItem('cached', JSON.stringify(cached));\n      }\n    }\n  }, {\n    key: \"getCacheId\",\n    value: function getCacheId() {\n      var _this$state2 = this.state,\n          filter = _this$state2.filter,\n          name = _this$state2.name,\n          order = _this$state2.order,\n          page = _this$state2.page,\n          size = _this$state2.size;\n      var id = \"filter=\".concat(filter, \"&name=\").concat(name, \"&order=\").concat(order, \"&page=\").concat(page, \"&size=\").concat(size);\n      return id;\n    }\n  }, {\n    key: \"hasCacheChecker\",\n    value: function hasCacheChecker() {\n      // check cashdata with current state(updated)\n      var id = this.getCacheId();\n      var cached = JSON.parse(localStorage.getItem('cached')) || []; // filter with id and range\n\n      var filtered = cached.filter(function (ele) {\n        return ele.id === id;\n      });\n      var bool = filtered.length > 0;\n      return {\n        isValid: bool,\n        cachingData: bool ? filtered : []\n      };\n    }\n  }, {\n    key: \"searchCache\",\n    value: function () {\n      var _searchCache = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _this$hasCacheChecker2, isValid, cachingData, result;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                // cache invalid => requestApi or get data from it\n                _this$hasCacheChecker2 = this.hasCacheChecker(), isValid = _this$hasCacheChecker2.isValid, cachingData = _this$hasCacheChecker2.cachingData;\n\n                if (isValid) {\n                  _context.next = 8;\n                  break;\n                }\n\n                _context.next = 4;\n                return this.updateCacheByApi();\n\n              case 4:\n                result = _context.sent;\n\n                if (result) {\n                  this.state = _objectSpread(_objectSpread(_objectSpread({}, this.state), {\n                    data: result.data\n                  }), {\n                    total: result.total\n                  });\n                  this.renderAll();\n                } else {\n                  // need to change this for better UI text\n                  alert(\"Error on cacheing update \");\n                }\n\n                _context.next = 11;\n                break;\n\n              case 8:\n                // cache is valid to use\n                console.log(\"no need to req api for cache but filtered from cache state =\", cachingData); // state update by cache & server side store, too\n\n                this.state = _objectSpread(_objectSpread({}, this.state), {\n                  data: cachingData[0].data,\n                  total: cachingData[0].total\n                });\n                this.updateStateByApi();\n\n              case 11:\n                return _context.abrupt(\"return\");\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function searchCache() {\n        return _searchCache.apply(this, arguments);\n      }\n\n      return searchCache;\n    }()\n  }, {\n    key: \"updateCacheByApi\",\n    value: function () {\n      var _updateCacheByApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var _this$state3, filter, name, order, page, size;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                console.log(\"request cache update\");\n                _this$state3 = this.state, filter = _this$state3.filter, name = _this$state3.name, order = _this$state3.order, page = _this$state3.page, size = _this$state3.size; // cache invalid => request new state and cache \n\n                _context2.next = 4;\n                return fetch(\"/api/cache?\".concat(this.getCacheId()), {\n                  method: 'get'\n                }).then(function (result) {\n                  return result.json();\n                }).then(function (result) {\n                  var cached = JSON.parse(localStorage.getItem('cached'));\n                  if (!cached || cached.length === 0) cached = []; // console.log(result)\n\n                  // console.log(result)\n                  cached.push(result);\n                  localStorage.setItem('cached', JSON.stringify(cached));\n                  return result;\n                })[\"catch\"](function (err) {\n                  return alert(\"일시적인 오류 입니다, 다시 시도해 주세요\");\n                });\n\n              case 4:\n                return _context2.abrupt(\"return\", _context2.sent);\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function updateCacheByApi() {\n        return _updateCacheByApi.apply(this, arguments);\n      }\n\n      return updateCacheByApi;\n    }()\n  }, {\n    key: \"updateStateByApi\",\n    value: function () {\n      var _updateStateByApi = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                console.log(\"request to update state\"); // => sync state on server\n\n                _context3.next = 3;\n                return fetch('/api/state', {\n                  method: 'put',\n                  headers: {\n                    'content-type': 'application/json'\n                  },\n                  body: JSON.stringify(this.state)\n                }).then(function (result) {\n                  var status = result.status;\n                  status === 400 ? alert(\"잘못된 요청에 의한 일시적 장애가 발생 했습니다! 조금 다시 시도해 주세요\") : status === 404 ? alert(\"요청한 페이지를 찾을 수 없습니다.\") : status === 500 ? alert(\"시스템 장애가 발생했습니다. 조금 있다가 다시 시도해 주세요\") : null; // console.log(status)\n                })[\"catch\"](function (err) {\n                  return console.log(err, \"state update failed by internal server error\");\n                });\n\n              case 3:\n                return _context3.abrupt(\"return\", _context3.sent);\n\n              case 4:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function updateStateByApi() {\n        return _updateStateByApi.apply(this, arguments);\n      }\n\n      return updateStateByApi;\n    }()\n  }, {\n    key: \"hydrate\",\n    value: function hydrate(newState) {\n      this.state = _objectSpread({}, newState);\n    }\n  }]);\n\n  return Store;\n}(_Publisher2[\"default\"]);\n\nexports[\"default\"] = Store;\n\n//# sourceURL=webpack://reset/./src/core/Store.js?");

/***/ }),

/***/ "./src/core/Subscriber.js":
/*!********************************!*\
  !*** ./src/core/Subscriber.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Subscriber = /*#__PURE__*/function () {\n  function Subscriber() {\n    _classCallCheck(this, Subscriber);\n  }\n\n  _createClass(Subscriber, [{\n    key: \"template\",\n    value: function template() {}\n  }, {\n    key: \"setRoot\",\n    value: function setRoot() {}\n  }, {\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      if (this.child && this.child.length !== 0) {\n        this.child.map(function (node) {\n          return node.setEvent(root);\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {}\n  }]);\n\n  return Subscriber;\n}();\n\nexports[\"default\"] = Subscriber;\n\n//# sourceURL=webpack://reset/./src/core/Subscriber.js?");

/***/ }),

/***/ "./src/db/data.js":
/*!************************!*\
  !*** ./src/db/data.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.array.is-array.js */ \"core-js/modules/es.array.is-array.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.from.js */ \"core-js/modules/es.array.from.js\");\n\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"core-js/modules/es.regexp.exec.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.keys.js */ \"core-js/modules/es.object.keys.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ \"core-js/modules/es.object.get-own-property-descriptor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"core-js/modules/es.array.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"core-js/modules/web.dom-collections.for-each.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ \"core-js/modules/es.object.get-own-property-descriptors.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-properties.js */ \"core-js/modules/es.object.define-properties.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.updateStateByQueryExecutor = exports.setData = exports.queryExecutor = exports.dbTotalData = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.fill.js */ \"core-js/modules/es.array.fill.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"core-js/modules/es.array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.entries.js */ \"core-js/modules/es.object.entries.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.includes.js */ \"core-js/modules/es.array.includes.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.includes.js */ \"core-js/modules/es.string.includes.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"core-js/modules/es.array.reverse.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"core-js/modules/es.array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.name.js */ \"core-js/modules/es.function.name.js\");\n\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"core-js/modules/es.number.constructor.js\");\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// ---- DATABASE ----\n// Total data setter \nvar setData = function setData() {\n  var dataLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;\n  return new Array(dataLength).fill(0).map(function (ele, idx) {\n    return {\n      id: idx + 1,\n      title: \"title\".concat(idx + 1),\n      writer: \"name\".concat(idx + 1),\n      content: \"content\".concat(idx + 1),\n      date: \"2022-1-\".concat(idx + 1)\n    };\n  });\n};\n\nexports.setData = setData;\nvar dbTotalData = setData(100); // Total data  (temporal 100)\n// ---- Query executor ---- \n\nexports.dbTotalData = dbTotalData;\nvar queryExecutor = {\n  // SELECT * FROM _ WHERE all culumn LIKE '%keyword%' \n  filterByKeyWord: function filterByKeyWord(keyword) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dbTotalData;\n    // filter by search keyworkd\n    return keyword === \"\" ? data : data.filter(function (ele) {\n      var bool = false;\n\n      for (var _i = 0, _Object$entries = Object.entries(ele); _i < _Object$entries.length; _i++) {\n        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),\n            key = _Object$entries$_i[0],\n            val = _Object$entries$_i[1];\n\n        if (key === 'id' || key === 'date' || key === 'index') continue; // console.log( val, keyword)\n\n        if (!String(val).includes(keyword)) continue;\n        bool = true; // console.log(ele) \n\n        break;\n      }\n\n      return bool;\n    });\n  },\n  // SELECT * FROM _ WHERE writer = name\n  filterByName: function filterByName(name) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dbTotalData;\n    // filter by writer name\n    return name === \"\" ? data : data.filter(function (ele) {\n      var bool = false;\n\n      for (var _i2 = 0, _Object$entries2 = Object.entries(ele); _i2 < _Object$entries2.length; _i2++) {\n        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),\n            key = _Object$entries2$_i[0],\n            val = _Object$entries2$_i[1];\n\n        if (key === 'writer' && String(val) === name) {\n          bool = true;\n          break;\n        }\n      }\n\n      return bool;\n    });\n  },\n  // LIMIT & OFFSET \n  setRange: function setRange(page, size, offset, end) {\n    // set view data range  \n    var _from = (page - 1) * size - offset;\n\n    _from = _from < 0 ? 0 : _from;\n\n    var _to = _from + size + offset;\n\n    _to = _to >= end ? end : _to; // console.log(page, size, _from, _to)\n\n    return [_from, _to, end];\n  },\n  // ORDER BY & INDEX\n  setIndexData: function setIndexData(order, _data) {\n    _data = order === 'dsc' ? _data.reverse() : _data;\n    return _data.slice().map(function (item, idx) {\n      item['index'] = idx;\n      return item;\n    });\n  }\n}; // set state value \n\nexports.queryExecutor = queryExecutor;\n\nvar updateStateByQueryExecutor = function updateStateByQueryExecutor(state) {\n  var _state = state,\n      filter = _state.filter,\n      name = _state.name,\n      order = _state.order,\n      page = _state.page,\n      size = _state.size,\n      data = _state.data,\n      total = _state.total;\n  page = Number(page);\n  size = Number(size); // console.log(\"executor=\", page, size, filter, name, order)\n\n  var filtered = queryExecutor.filterByName(name, queryExecutor.filterByKeyWord(filter));\n\n  var _queryExecutor$setRan = queryExecutor.setRange(page, size, 0, filtered.length),\n      _queryExecutor$setRan2 = _slicedToArray(_queryExecutor$setRan, 2),\n      from = _queryExecutor$setRan2[0],\n      to = _queryExecutor$setRan2[1];\n\n  var totFilterData = queryExecutor.setIndexData(order, filtered.slice());\n  data = totFilterData.slice(from, to);\n  total = totFilterData.length;\n  state = _objectSpread(_objectSpread({}, state), {}, {\n    data: data,\n    total: total\n  });\n  return state;\n};\n\nexports.updateStateByQueryExecutor = updateStateByQueryExecutor;\n\n//# sourceURL=webpack://reset/./src/db/data.js?");

/***/ }),

/***/ "./src/pages/post-list/Header.js":
/*!***************************************!*\
  !*** ./src/pages/post-list/Header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.SortButton = exports.RefreshAll = exports.Header = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.join.js */ \"core-js/modules/es.array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.bind.js */ \"core-js/modules/es.function.bind.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.filter.js */ \"core-js/modules/es.array.filter.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"core-js/modules/es.number.constructor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nvar _Component7 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../../router.js */ \"./src/router.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Header = /*#__PURE__*/function (_Component) {\n  _inherits(Header, _Component);\n\n  var _super = _createSuper(Header);\n\n  function Header() {\n    var _this;\n\n    _classCallCheck(this, Header);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"child\", void 0);\n\n    _this.child = [];\n\n    _this.child.push(new Search());\n\n    _this.child.push(new Paging());\n\n    _this.child.push(new Sorting());\n\n    _this.child.push(new SortButton());\n\n    _this.child.push(new RefreshAll());\n\n    return _this;\n  }\n\n  _createClass(Header, [{\n    key: \"template\",\n    value: function template(renderHtml) {\n      return \"\\n      <header id=header>\\n        \".concat(renderHtml, \"\\n      </header>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderHtml = this.child.map(function (node) {\n        return node.render();\n      }).join(\"\");\n      return this.template(renderHtml);\n    }\n  }]);\n\n  return Header;\n}(_Component7[\"default\"]);\n\nexports.Header = Header;\n\nvar Search = /*#__PURE__*/function (_Component2) {\n  _inherits(Search, _Component2);\n\n  var _super2 = _createSuper(Search);\n\n  function Search() {\n    var _this2;\n\n    _classCallCheck(this, Search);\n\n    _this2 = _super2.call(this);\n\n    _defineProperty(_assertThisInitialized(_this2), \"filter\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this2), \"el\", void 0);\n\n    _this2.boundHandler = _this2.eventHandler.bind(_assertThisInitialized(_this2));\n    _this2.secondBonder = _this2.secondHandler.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(Search, [{\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root.querySelector('#search');\n      this.el.querySelector('button').removeEventListener(\"click\", this.boundHandler);\n      this.el.querySelector('button').addEventListener(\"click\", this.boundHandler);\n      this.el.querySelector('input').removeEventListener(\"keypress\", this.secondBonder);\n      this.el.querySelector('input').addEventListener(\"keypress\", this.secondBonder);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref) {\n      var target = _ref.target;\n      var action = target.dataset.action;\n      if (action === 'searchInput') return;\n\n      if (action === 'searchBtn') {\n        var value = this.el.querySelector('input').value;\n\n        _store[\"default\"].setState({\n          filter: value,\n          page: 1\n        });\n      } // console.log(target)\n      // store.setState(store.state)\n\n    }\n  }, {\n    key: \"secondHandler\",\n    value: function secondHandler(e) {\n      this.filter = e.target.value;\n\n      if (e.code === 'Enter' && this.filter !== _store[\"default\"].state.filter) {\n        _store[\"default\"].setState({\n          filter: e.target.value,\n          page: 1\n        });\n      }\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      var keyword = _store[\"default\"].state.filter;\n      return \"\\n    <div data-component=\\\"search\\\" id=\\\"search\\\">\\n      <input \\n        data-action='searchInput' \\n        placeholder=\\\"search\\\" \\n        type=\\\"text\\\" \\n        value=\".concat(keyword ? keyword : \"\", \">\\n      <button data-action='searchBtn'>\\uAC80\\uC0C9</button>\\n    </div>\\n  \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this3.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return Search;\n}(_Component7[\"default\"]);\n\nvar Paging = /*#__PURE__*/function (_Component3) {\n  _inherits(Paging, _Component3);\n\n  var _super3 = _createSuper(Paging);\n\n  function Paging() {\n    var _this4;\n\n    _classCallCheck(this, Paging);\n\n    _this4 = _super3.call(this);\n\n    _defineProperty(_assertThisInitialized(_this4), \"size\", void 0);\n\n    _this4.boundHandler = _this4.eventHandler.bind(_assertThisInitialized(_this4));\n    return _this4;\n  }\n\n  _createClass(Paging, [{\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root.querySelector(\"#paging\");\n      this.el.removeEventListener(\"change\", this.boundHandler);\n      this.el.addEventListener(\"change\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref2) {\n      var target = _ref2.target;\n\n      _store[\"default\"].setState({\n        size: Number(target.value),\n        page: 1\n      });\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      var select = Number(_store[\"default\"].state.size);\n      return \"\\n      <div data-component=paging id=\\\"paging\\\">\\n        <label for=\\\"pagination\\\" value=\".concat(_store[\"default\"].state.size, \">\\uD398\\uC774\\uC9C0</label>\\n          <select data-action =\\\"page\\\">\\n          <option value=5 \").concat(select === 5 ? \"selected\" : \"\", \">5</option>\\n          <option value=10 \").concat(select === 10 ? \"selected\" : \"\", \">10</option>\\n          <option value=20 \").concat(select === 20 ? \"selected\" : \"\", \">20</option>\\n        </select>\\n      </div>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this5 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this5.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return Paging;\n}(_Component7[\"default\"]);\n\nvar Sorting = /*#__PURE__*/function (_Component4) {\n  _inherits(Sorting, _Component4);\n\n  var _super4 = _createSuper(Sorting);\n\n  function Sorting() {\n    var _this6;\n\n    _classCallCheck(this, Sorting);\n\n    _this6 = _super4.call(this);\n    _this6.boundHandler = _this6.eventHandler.bind(_assertThisInitialized(_this6));\n    return _this6;\n  }\n\n  _createClass(Sorting, [{\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root.querySelector(\"#sorting\");\n      this.el.removeEventListener(\"change\", this.boundHandler);\n      this.el.addEventListener(\"change\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref3) {\n      var target = _ref3.target;\n\n      _store[\"default\"].setState({\n        order: target.value,\n        page: 1\n      });\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      var selected = _store[\"default\"].state.order;\n      return \"\\n    <div data-component='sorting' id=\\\"sorting\\\">\\n      <label for=\\\"sorting\\\">\\uB0A0\\uC9DC\\uC815\\uB82C</label>\\n      <select data-action=\\\"order\\\">\\n        <option \\n            name='order' value=\\\"dsc\\\" \\n            \".concat(selected === 'dsc' ? \"selected\" : \"\", \">\\uCD5C\\uC2E0</option>\\n        <option \\n            name='order' value=\\\"asc\\\"\\n            \").concat(selected === 'asc' ? \"selected\" : \"\", \">\\uC608\\uC804</option>\\n      </select>\\n    </div>\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this7 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this7.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return Sorting;\n}(_Component7[\"default\"]);\n\nvar SortButton = /*#__PURE__*/function (_Component5) {\n  _inherits(SortButton, _Component5);\n\n  var _super5 = _createSuper(SortButton);\n\n  function SortButton() {\n    var _this8;\n\n    _classCallCheck(this, SortButton);\n\n    _this8 = _super5.call(this);\n    _this8.boundHandler = _this8.eventHandler.bind(_assertThisInitialized(_this8));\n    return _this8;\n  }\n\n  _createClass(SortButton, [{\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      this.el = _router[\"default\"].$root.querySelector(\"#sortbutton\");\n      this.el.removeEventListener(\"click\", this.boundHandler);\n      this.el.addEventListener(\"click\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref4) {\n      var target = _ref4.target;\n\n      _store[\"default\"].setState({\n        filter: \"\",\n        order: 'dsc',\n        name: \"\",\n        page: 1,\n        size: 5\n      });\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      return \"\\n      <button id=\\\"sortbutton\\\">\\uCD08\\uAE30\\uD654</button>\\n    \";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this9 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this9.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return SortButton;\n}(_Component7[\"default\"]);\n\nexports.SortButton = SortButton;\n\nvar RefreshAll = /*#__PURE__*/function (_Component6) {\n  _inherits(RefreshAll, _Component6);\n\n  var _super6 = _createSuper(RefreshAll);\n\n  function RefreshAll() {\n    var _this10;\n\n    _classCallCheck(this, RefreshAll);\n\n    _this10 = _super6.call(this);\n    _this10.boundHandler = _this10.eventHandler.bind(_assertThisInitialized(_this10));\n    return _this10;\n  }\n\n  _createClass(RefreshAll, [{\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root.querySelector(\"#refreshall\");\n      this.el.removeEventListener(\"click\", this.boundHandler);\n      this.el.addEventListener(\"click\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref5) {\n      var target = _ref5.target;\n      window.location.reload();\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      return \"\\n      <button id=\\\"refreshall\\\">\\uC0C8\\uB85C\\uACE0\\uCE68</button>\\n    \";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this11 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this11.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return RefreshAll;\n}(_Component7[\"default\"]);\n\nexports.RefreshAll = RefreshAll;\n\n//# sourceURL=webpack://reset/./src/pages/post-list/Header.js?");

/***/ }),

/***/ "./src/pages/post-list/Pagination.js":
/*!*******************************************!*\
  !*** ./src/pages/post-list/Pagination.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Pagination = void 0;\n\n__webpack_require__(/*! core-js/modules/es.function.bind.js */ \"core-js/modules/es.function.bind.js\");\n\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"core-js/modules/es.number.constructor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../../router.js */ \"./src/router.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Pagination = /*#__PURE__*/function (_Component) {\n  _inherits(Pagination, _Component);\n\n  var _super = _createSuper(Pagination);\n\n  function Pagination() {\n    var _this;\n\n    _classCallCheck(this, Pagination);\n\n    _this = _super.call(this);\n\n    _defineProperty(_assertThisInitialized(_this), \"page\", void 0);\n\n    _defineProperty(_assertThisInitialized(_this), \"group\", void 0);\n\n    _this.boundHandler = _this.eventHandler.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Pagination, [{\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      this.el = _router[\"default\"].$root.querySelector(\"#pagination\");\n      this.el.removeEventListener(\"click\", this.boundHandler);\n      this.el.addEventListener(\"click\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref) {\n      var target = _ref.target;\n      var action = target.dataset.action;\n      var page = _store[\"default\"].state.page;\n\n      if (action === 'more') {\n        _store[\"default\"].setState({\n          page: Number(page) + 1\n        });\n      }\n\n      if (action === 'less') {\n        _store[\"default\"].setState({\n          page: Number(page) - 1\n        });\n      }\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      var _store$state = _store[\"default\"].state,\n          page = _store$state.page,\n          size = _store$state.size,\n          total = _store$state.total,\n          data = _store$state.data;\n      var less = Number(page) > 1;\n      var more = Number(size) * Number(page) < Number(total); // console.log(total , more)\n\n      return \"\\n      <div id=pagination>\\n      \".concat(Number(total) === 0 ? \"<span class=\\\"none-display\\\">\\\"\\uAC8C\\uC2DC\\uAE00\\uC774 \\uC874\\uC7AC \\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4.\\\"</span>\" : \"\", \"\\n      \").concat(less ? \"<button data-action=\\\"less\\\">\\uC774\\uC804</button>\" : \"\", \"\\n      \").concat(more ? \"<button data-action=\\\"more\\\">\\uB354\\uBCF4\\uAE30</button>\" : \"\", \"\\n      \").concat(Number(total) && !more ? \"<span class=\\\"none-display\\\">\\\"\\uB9C8\\uC9C0\\uB9C9 \\uD398\\uC774\\uC9C0 \\uC785\\uB2C8\\uB2E4\\\"</span>\" : \"\", \"\\n      </div>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this2.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return Pagination;\n}(_Component2[\"default\"]);\n\nexports.Pagination = Pagination;\n\n//# sourceURL=webpack://reset/./src/pages/post-list/Pagination.js?");

/***/ }),

/***/ "./src/pages/post-list/PostButton.js":
/*!*******************************************!*\
  !*** ./src/pages/post-list/PostButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostButton = void 0;\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../../router.js */ \"./src/router.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar PostButton = /*#__PURE__*/function (_Component) {\n  _inherits(PostButton, _Component);\n\n  var _super = _createSuper(PostButton);\n\n  function PostButton() {\n    _classCallCheck(this, PostButton);\n\n    return _super.call(this);\n  }\n\n  _createClass(PostButton, [{\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      this.el = _router[\"default\"].$root.querySelector(\"#postbutton\");\n      this.el.removeEventListener(\"click\", this.eventHandler);\n      this.el.addEventListener(\"click\", this.eventHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref) {\n      var target = _ref.target;\n\n      // const url = location.origin + '/post-edit';\n      _router[\"default\"].setPathCur('/post-edit'); // history.pushState(store.state, \"글작성\", url)\n\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      return \"\\n      <div id=postbutton>\\n        <button>\\uC791\\uC131</button>\\n      </div>\\n    \";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return PostButton;\n}(_Component2[\"default\"]);\n\nexports.PostButton = PostButton;\n\n//# sourceURL=webpack://reset/./src/pages/post-list/PostButton.js?");

/***/ }),

/***/ "./src/pages/post-list/PostListPage.js":
/*!*********************************************!*\
  !*** ./src/pages/post-list/PostListPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.join.js */ \"core-js/modules/es.array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\nvar _Header = __webpack_require__(/*! ./Header.js */ \"./src/pages/post-list/Header.js\");\n\nvar _Postlist = __webpack_require__(/*! ./Postlist.js */ \"./src/pages/post-list/Postlist.js\");\n\nvar _Pagination = __webpack_require__(/*! ./Pagination.js */ \"./src/pages/post-list/Pagination.js\");\n\nvar _PostButton = __webpack_require__(/*! ./PostButton.js */ \"./src/pages/post-list/PostButton.js\");\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar PostListPage = /*#__PURE__*/function (_Component) {\n  _inherits(PostListPage, _Component);\n\n  var _super = _createSuper(PostListPage);\n\n  function PostListPage() {\n    var _this;\n\n    _classCallCheck(this, PostListPage);\n\n    _this = _super.call(this);\n    _this.child = [];\n\n    _this.child.push(new _Header.Header());\n\n    _this.child.push(new _Postlist.PostList());\n\n    _this.child.push(new _Pagination.Pagination());\n\n    _this.child.push(new _PostButton.PostButton());\n\n    return _this;\n  }\n\n  _createClass(PostListPage, [{\n    key: \"template\",\n    value: function template(renderHtml) {\n      return \"\\n      <div id=\\\"postlistpage\\\">\".concat(renderHtml, \"</div>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderHtml = this.template(this.child.map(function (comp) {\n        return comp.render();\n      }).join(\"\"));\n      return renderHtml;\n    }\n  }]);\n\n  return PostListPage;\n}(_Component2[\"default\"]);\n\nvar _default = PostListPage;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/pages/post-list/PostListPage.js?");

/***/ }),

/***/ "./src/pages/post-list/Postlist.js":
/*!*****************************************!*\
  !*** ./src/pages/post-list/Postlist.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostList = void 0;\n\n__webpack_require__(/*! core-js/modules/es.function.bind.js */ \"core-js/modules/es.function.bind.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.join.js */ \"core-js/modules/es.array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\nvar _Component2 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../../router.js */ \"./src/router.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar PostList = /*#__PURE__*/function (_Component) {\n  _inherits(PostList, _Component);\n\n  var _super = _createSuper(PostList);\n\n  function PostList() {\n    var _this;\n\n    _classCallCheck(this, PostList);\n\n    _this = _super.call(this);\n    _this.boundHandler = _this.eventHandler.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(PostList, [{\n    key: \"setEvent\",\n    value: function setEvent(root) {\n      this.el = _router[\"default\"].$root.querySelector('#postlist');\n      this.el.removeEventListener(\"click\", this.boundHandler);\n      this.el.addEventListener('click', this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref) {\n      var target = _ref.target;\n      var action = target.dataset.action;\n\n      if (action === 'writer') {\n        _store[\"default\"].setState({\n          name: target.innerText,\n          filter: \"\",\n          page: 1\n        });\n      }\n\n      if (action === 'title') {\n        var index = target.parentElement.dataset.index;\n        var url = window.origin + \"/post-single\" + \"?index=\".concat(index);\n\n        _router[\"default\"].setRouteState(index);\n\n        _router[\"default\"].setPathCur('/post-single');\n\n        history.pushState(state, \"\", url);\n      } // console.log(target.innerText)\n\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      var items = _store[\"default\"].state.data;\n      return \"\\n    <div id='postlist'>\\n        \".concat(items.length === 0 ? \"\" : items.map(function (item, idx) {\n        return \"\\n          <ul data-index=\".concat(idx, \">  \\n            <li id= \").concat(item.id, \">\").concat(item.id, \"</li>\\n            <li data-action='title'>\").concat(item.title, \"</li>\\n            <li data-action='writer'>\").concat(item.writer, \"</li>\\n            <li>\").concat(item.date, \"</li>\\n          </ul>\");\n      }).join(\"\"), \"\\n      </div>\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var renderHtml = this.template();\n\n      if (this.el) {\n        this.el.innerHTML = renderHtml;\n        requestAnimationFrame(function () {\n          return _this2.setEvent();\n        });\n      }\n\n      return renderHtml;\n    }\n  }]);\n\n  return PostList;\n}(_Component2[\"default\"]);\n\nexports.PostList = PostList;\n\n//# sourceURL=webpack://reset/./src/pages/post-list/Postlist.js?");

/***/ }),

/***/ "./src/pages/post-single/PostSingle.js":
/*!*********************************************!*\
  !*** ./src/pages/post-single/PostSingle.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n__webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ \"core-js/modules/es.object.set-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ \"core-js/modules/es.object.get-prototype-of.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"core-js/modules/es.object.to-string.js\");\n\n__webpack_require__(/*! core-js/modules/es.reflect.construct.js */ \"core-js/modules/es.reflect.construct.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.create.js */ \"core-js/modules/es.object.create.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.js */ \"core-js/modules/es.symbol.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.description.js */ \"core-js/modules/es.symbol.description.js\");\n\n__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ \"core-js/modules/es.symbol.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"core-js/modules/es.array.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"core-js/modules/es.string.iterator.js\");\n\n__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"core-js/modules/web.dom-collections.iterator.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PostSingle = exports.Header = exports.Contents = exports.BottomButton = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.join.js */ \"core-js/modules/es.array.join.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.map.js */ \"core-js/modules/es.array.map.js\");\n\n__webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"core-js/modules/es.number.constructor.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.concat.js */ \"core-js/modules/es.array.concat.js\");\n\n__webpack_require__(/*! core-js/modules/es.function.bind.js */ \"core-js/modules/es.function.bind.js\");\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nvar _Component5 = _interopRequireDefault(__webpack_require__(/*! ../../core/Component.js */ \"./src/core/Component.js\"));\n\nvar _router = _interopRequireDefault(__webpack_require__(/*! ../../router.js */ \"./src/router.js\"));\n\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../../store.js */ \"./src/store.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar PostSingle = /*#__PURE__*/function (_Component) {\n  _inherits(PostSingle, _Component);\n\n  var _super = _createSuper(PostSingle);\n\n  function PostSingle() {\n    var _this;\n\n    _classCallCheck(this, PostSingle);\n\n    _this = _super.call(this); // this.root = root;\n\n    _defineProperty(_assertThisInitialized(_this), \"child\", void 0);\n\n    _this.child = [];\n\n    _this.child.push(new Header());\n\n    _this.child.push(new Contents());\n\n    _this.child.push(new BottomButton());\n\n    return _this;\n  }\n\n  _createClass(PostSingle, [{\n    key: \"template\",\n    value: function template(renderHtml) {\n      return \"\\n      <section id=\\\"postsingle\\\">\\n        \".concat(renderHtml, \"\\n      </section>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderHtml = this.child.map(function (node) {\n        return node.render();\n      }).join(\"\");\n      return this.template(renderHtml);\n    }\n  }]);\n\n  return PostSingle;\n}(_Component5[\"default\"]);\n\nexports.PostSingle = PostSingle;\n\nvar Header = /*#__PURE__*/function (_Component2) {\n  _inherits(Header, _Component2);\n\n  var _super2 = _createSuper(Header);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Header, [{\n    key: \"template\",\n    value: function template() {\n      var index = Number(_router[\"default\"].routeState.value);\n      var data = _store[\"default\"].state.data;\n      return \"\\n      <header id=\\\"header\\\">\\n        <div>\\n          <span>\\uAE00\\uBC88\\uD638</span>\\n          <span>\\uC81C\\uBAA9</span>\\n          <span>\\uC791\\uC131\\uC790</span>\\n          <span>\\uB0A0\\uC9DC</span>\\n        </div>\\n        <div>\\n          <span>\".concat(data[index].id, \"</span>\\n          <span>\").concat(data[index].title, \"</span>\\n          <span>\").concat(data[index].writer, \"</span>\\n          <span>\").concat(data[index].date, \"</span>\\n        </div>\\n\\n      </header>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderHtml = this.template();\n      return renderHtml;\n    }\n  }]);\n\n  return Header;\n}(_Component5[\"default\"]);\n\nexports.Header = Header;\n\nvar Contents = /*#__PURE__*/function (_Component3) {\n  _inherits(Contents, _Component3);\n\n  var _super3 = _createSuper(Contents);\n\n  function Contents() {\n    _classCallCheck(this, Contents);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Contents, [{\n    key: \"template\",\n    value: function template() {\n      var index = Number(_router[\"default\"].routeState.value);\n      var data = _store[\"default\"].state.data;\n      return \"\\n      <div id=\\\"contents\\\">\\n        <p>\".concat(data[index].content, \"</p>\\n      </div>\\n    \");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var renderHtml = this.template();\n      return renderHtml;\n    }\n  }]);\n\n  return Contents;\n}(_Component5[\"default\"]);\n\nexports.Contents = Contents;\n\nvar BottomButton = /*#__PURE__*/function (_Component4) {\n  _inherits(BottomButton, _Component4);\n\n  var _super4 = _createSuper(BottomButton);\n\n  function BottomButton() {\n    var _this2;\n\n    _classCallCheck(this, BottomButton);\n\n    _this2 = _super4.call(this);\n\n    _defineProperty(_assertThisInitialized(_this2), \"el\", void 0);\n\n    _this2.boundHandler = _this2.eventHandler.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(BottomButton, [{\n    key: \"setEvent\",\n    value: function setEvent() {\n      this.el = _router[\"default\"].$root.querySelector('#bottombutton');\n      this.el.removeEventListener(\"click\", this.boundHandler);\n      this.el.addEventListener(\"click\", this.boundHandler);\n    }\n  }, {\n    key: \"eventHandler\",\n    value: function eventHandler(_ref) {\n      var target = _ref.target;\n      var action = target.dataset.action;\n\n      if (action === \"edit\") {\n        // routing to edit-page\n        console.log(_store[\"default\"].state);\n      }\n\n      if (action === \"list\") {\n        // routing to list-page\n        console.log(history.state);\n      }\n\n      if (action === \"delete\") {// delete request \n      }\n    }\n  }, {\n    key: \"template\",\n    value: function template() {\n      return \"\\n      <div id=\\\"bottombutton\\\">\\n        <button data-action=\\\"edit\\\">\\uC218\\uC815</button>\\n        <button data-action=\\\"list\\\">\\uBAA9\\uB85D</button>\\n        <button data-action=\\\"delete\\\">\\uC0AD\\uC81C</button>\\n      </div>\\n    \";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.template();\n    }\n  }]);\n\n  return BottomButton;\n}(_Component5[\"default\"]);\n\nexports.BottomButton = BottomButton;\n\n//# sourceURL=webpack://reset/./src/pages/post-single/PostSingle.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _Router = _interopRequireDefault(__webpack_require__(/*! ./core/Router.js */ \"./src/core/Router.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar router = new _Router[\"default\"]();\nvar _default = router;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/router.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/console-browserify/index.js */ \"./node_modules/console-browserify/index.js\");\n\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _path = _interopRequireDefault(__webpack_require__(/*! path */ \"path\"));\n\nvar _controller = _interopRequireDefault(__webpack_require__(/*! ./controller.js */ \"./src/controller.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n// import router from \"./router.js\";\nvar app = (0, _express[\"default\"])();\n\nvar router = _express[\"default\"].Router();\n\nvar PORT = 4000;\nrouter.get('/', _controller[\"default\"].serverRenderer);\nrouter.get('/api/cache', _controller[\"default\"].updateCache);\nrouter.put('/api/state', _controller[\"default\"].updateState);\napp.use(_express[\"default\"].json());\napp.use('/', _express[\"default\"][\"static\"](_path[\"default\"].resolve(__dirname, 'build'))); // app.get('/', (req, res)=> {\n//   console.log(\"\")\n//   res.send(\"ok\")\n// })\n\napp.use('/', router);\napp.get('/favicon.icon', function (req, res) {\n  return res.status(204).end();\n});\napp.listen(PORT, function () {\n  console.log(\"SERVER ON : http://localhost:\".concat(PORT));\n});\nvar _default = app;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/server.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\n__webpack_require__(/*! core-js/modules/es.object.define-property.js */ \"core-js/modules/es.object.define-property.js\");\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n__webpack_require__(/*! core-js/modules/es.array.slice.js */ \"core-js/modules/es.array.slice.js\");\n\n__webpack_require__(/*! core-js/modules/es.array.reverse.js */ \"core-js/modules/es.array.reverse.js\");\n\nvar _Store = _interopRequireDefault(__webpack_require__(/*! ./core/Store.js */ \"./src/core/Store.js\"));\n\nvar _data = __webpack_require__(/*! ./db/data.js */ \"./src/db/data.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nvar initialState = {\n  data: _data.dbTotalData.slice().reverse().slice(0, 5),\n  page: 1,\n  size: 5,\n  order: 'dsc',\n  filter: '',\n  name: '',\n  total: 1\n};\nvar store = new _Store[\"default\"](initialState);\nvar _default = store;\nexports[\"default\"] = _default;\n\n//# sourceURL=webpack://reset/./src/store.js?");

/***/ }),

/***/ "./node_modules/console-browserify/index.js":
/*!**************************************************!*\
  !*** ./node_modules/console-browserify/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*global window, global*/\nvar util = __webpack_require__(/*! util */ \"util\")\nvar assert = __webpack_require__(/*! assert */ \"assert\")\nfunction now() { return new Date().getTime() }\n\nvar slice = Array.prototype.slice\nvar console\nvar times = {}\n\nif (typeof global !== \"undefined\" && global.console) {\n    console = global.console\n} else if (typeof window !== \"undefined\" && window.console) {\n    console = window.console\n} else {\n    console = {}\n}\n\nvar functions = [\n    [log, \"log\"],\n    [info, \"info\"],\n    [warn, \"warn\"],\n    [error, \"error\"],\n    [time, \"time\"],\n    [timeEnd, \"timeEnd\"],\n    [trace, \"trace\"],\n    [dir, \"dir\"],\n    [consoleAssert, \"assert\"]\n]\n\nfor (var i = 0; i < functions.length; i++) {\n    var tuple = functions[i]\n    var f = tuple[0]\n    var name = tuple[1]\n\n    if (!console[name]) {\n        console[name] = f\n    }\n}\n\nmodule.exports = console\n\nfunction log() {}\n\nfunction info() {\n    console.log.apply(console, arguments)\n}\n\nfunction warn() {\n    console.log.apply(console, arguments)\n}\n\nfunction error() {\n    console.warn.apply(console, arguments)\n}\n\nfunction time(label) {\n    times[label] = now()\n}\n\nfunction timeEnd(label) {\n    var time = times[label]\n    if (!time) {\n        throw new Error(\"No such label: \" + label)\n    }\n\n    delete times[label]\n    var duration = now() - time\n    console.log(label + \": \" + duration + \"ms\")\n}\n\nfunction trace() {\n    var err = new Error()\n    err.name = \"Trace\"\n    err.message = util.format.apply(null, arguments)\n    console.error(err.stack)\n}\n\nfunction dir(object) {\n    console.log(util.inspect(object) + \"\\n\")\n}\n\nfunction consoleAssert(expression) {\n    if (!expression) {\n        var arr = slice.call(arguments, 1)\n        assert.ok(false, util.format.apply(null, arr))\n    }\n}\n\n\n//# sourceURL=webpack://reset/./node_modules/console-browserify/index.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ "core-js/modules/es.string.replace.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.string.replace.js" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("core-js/modules/es.string.replace.js");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.js");
/******/ 	
/******/ })()
;