/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _flux = __webpack_require__(/*! flux */ \"./node_modules/flux/index.js\");\n\nvar flux = _interopRequireWildcard(_flux);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\n// Creates a new dispatcher instance. \"Dispatcher\" is the only useful construct found\n// in the \"flux\" module.\nvar dispatcher = new flux.Dispatcher();\n\n// Registers a callback function, invoked every time an action is dispatched.\n// Imports module namespace object from the \"flux\" module\ndispatcher.register(function (e) {\n    var p;\n    // Determines how to respond to the action. In this case, we're simple creating\n    // new content using the \"payload\" property. The \"type\" property determines how\n    // we create the content.\n    switch (e.type) {\n        case \"hello\":\n            p = document.createElement(\"p\");\n            p.textContent = e.payload;\n            document.body.appendChild(p);\n            break;\n        case \"world\":\n            p = document.createElement(\"p\");\n            p.textContent = e.payload + \"!\";\n            p.style.fontWeight = \"bold\";\n            document.body.appendChild(p);\n            break;\n        default:\n            break;\n    }\n});\n\n// Dispatches a \"hello\" action.\ndispatcher.dispatch({\n    type: \"hello\",\n    payload: \"Hello\"\n});\n\n// Dispatches a \"world\" action.\ndispatcher.dispatch({\n    type: \"world\",\n    payload: \"World\"\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar validateFormat = function validateFormat(format) {};\n\nif (true) {\n  validateFormat = function validateFormat(format) {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  };\n}\n\nfunction invariant(condition, format, a, b, c, d, e, f) {\n  validateFormat(format);\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(format.replace(/%s/g, function () {\n        return args[argIndex++];\n      }));\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n}\n\nmodule.exports = invariant;\n\n//# sourceURL=webpack:///./node_modules/fbjs/lib/invariant.js?");

/***/ }),

/***/ "./node_modules/flux/index.js":
/*!************************************!*\
  !*** ./node_modules/flux/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\nmodule.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ \"./node_modules/flux/lib/Dispatcher.js\");\n\n\n//# sourceURL=webpack:///./node_modules/flux/index.js?");

/***/ }),

/***/ "./node_modules/flux/lib/Dispatcher.js":
/*!*********************************************!*\
  !*** ./node_modules/flux/lib/Dispatcher.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule Dispatcher\n * \n * @preventMunge\n */\n\n\n\nexports.__esModule = true;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nvar invariant = __webpack_require__(/*! fbjs/lib/invariant */ \"./node_modules/fbjs/lib/invariant.js\");\n\nvar _prefix = 'ID_';\n\n/**\n * Dispatcher is used to broadcast payloads to registered callbacks. This is\n * different from generic pub-sub systems in two ways:\n *\n *   1) Callbacks are not subscribed to particular events. Every payload is\n *      dispatched to every registered callback.\n *   2) Callbacks can be deferred in whole or part until other callbacks have\n *      been executed.\n *\n * For example, consider this hypothetical flight destination form, which\n * selects a default city when a country is selected:\n *\n *   var flightDispatcher = new Dispatcher();\n *\n *   // Keeps track of which country is selected\n *   var CountryStore = {country: null};\n *\n *   // Keeps track of which city is selected\n *   var CityStore = {city: null};\n *\n *   // Keeps track of the base flight price of the selected city\n *   var FlightPriceStore = {price: null}\n *\n * When a user changes the selected city, we dispatch the payload:\n *\n *   flightDispatcher.dispatch({\n *     actionType: 'city-update',\n *     selectedCity: 'paris'\n *   });\n *\n * This payload is digested by `CityStore`:\n *\n *   flightDispatcher.register(function(payload) {\n *     if (payload.actionType === 'city-update') {\n *       CityStore.city = payload.selectedCity;\n *     }\n *   });\n *\n * When the user selects a country, we dispatch the payload:\n *\n *   flightDispatcher.dispatch({\n *     actionType: 'country-update',\n *     selectedCountry: 'australia'\n *   });\n *\n * This payload is digested by both stores:\n *\n *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {\n *     if (payload.actionType === 'country-update') {\n *       CountryStore.country = payload.selectedCountry;\n *     }\n *   });\n *\n * When the callback to update `CountryStore` is registered, we save a reference\n * to the returned token. Using this token with `waitFor()`, we can guarantee\n * that `CountryStore` is updated before the callback that updates `CityStore`\n * needs to query its data.\n *\n *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {\n *     if (payload.actionType === 'country-update') {\n *       // `CountryStore.country` may not be updated.\n *       flightDispatcher.waitFor([CountryStore.dispatchToken]);\n *       // `CountryStore.country` is now guaranteed to be updated.\n *\n *       // Select the default city for the new country\n *       CityStore.city = getDefaultCityForCountry(CountryStore.country);\n *     }\n *   });\n *\n * The usage of `waitFor()` can be chained, for example:\n *\n *   FlightPriceStore.dispatchToken =\n *     flightDispatcher.register(function(payload) {\n *       switch (payload.actionType) {\n *         case 'country-update':\n *         case 'city-update':\n *           flightDispatcher.waitFor([CityStore.dispatchToken]);\n *           FlightPriceStore.price =\n *             getFlightPriceStore(CountryStore.country, CityStore.city);\n *           break;\n *     }\n *   });\n *\n * The `country-update` payload will be guaranteed to invoke the stores'\n * registered callbacks in order: `CountryStore`, `CityStore`, then\n * `FlightPriceStore`.\n */\n\nvar Dispatcher = (function () {\n  function Dispatcher() {\n    _classCallCheck(this, Dispatcher);\n\n    this._callbacks = {};\n    this._isDispatching = false;\n    this._isHandled = {};\n    this._isPending = {};\n    this._lastID = 1;\n  }\n\n  /**\n   * Registers a callback to be invoked with every dispatched payload. Returns\n   * a token that can be used with `waitFor()`.\n   */\n\n  Dispatcher.prototype.register = function register(callback) {\n    var id = _prefix + this._lastID++;\n    this._callbacks[id] = callback;\n    return id;\n  };\n\n  /**\n   * Removes a callback based on its token.\n   */\n\n  Dispatcher.prototype.unregister = function unregister(id) {\n    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : undefined : undefined;\n    delete this._callbacks[id];\n  };\n\n  /**\n   * Waits for the callbacks specified to be invoked before continuing execution\n   * of the current callback. This method should only be used by a callback in\n   * response to a dispatched payload.\n   */\n\n  Dispatcher.prototype.waitFor = function waitFor(ids) {\n    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : undefined : undefined;\n    for (var ii = 0; ii < ids.length; ii++) {\n      var id = ids[ii];\n      if (this._isPending[id]) {\n        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : undefined : undefined;\n        continue;\n      }\n      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : undefined : undefined;\n      this._invokeCallback(id);\n    }\n  };\n\n  /**\n   * Dispatches a payload to all registered callbacks.\n   */\n\n  Dispatcher.prototype.dispatch = function dispatch(payload) {\n    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : undefined : undefined;\n    this._startDispatching(payload);\n    try {\n      for (var id in this._callbacks) {\n        if (this._isPending[id]) {\n          continue;\n        }\n        this._invokeCallback(id);\n      }\n    } finally {\n      this._stopDispatching();\n    }\n  };\n\n  /**\n   * Is this Dispatcher currently dispatching.\n   */\n\n  Dispatcher.prototype.isDispatching = function isDispatching() {\n    return this._isDispatching;\n  };\n\n  /**\n   * Call the callback stored with the given id. Also do some internal\n   * bookkeeping.\n   *\n   * @internal\n   */\n\n  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {\n    this._isPending[id] = true;\n    this._callbacks[id](this._pendingPayload);\n    this._isHandled[id] = true;\n  };\n\n  /**\n   * Set up bookkeeping needed when dispatching.\n   *\n   * @internal\n   */\n\n  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {\n    for (var id in this._callbacks) {\n      this._isPending[id] = false;\n      this._isHandled[id] = false;\n    }\n    this._pendingPayload = payload;\n    this._isDispatching = true;\n  };\n\n  /**\n   * Clear bookkeeping used for dispatching.\n   *\n   * @internal\n   */\n\n  Dispatcher.prototype._stopDispatching = function _stopDispatching() {\n    delete this._pendingPayload;\n    this._isDispatching = false;\n  };\n\n  return Dispatcher;\n})();\n\nmodule.exports = Dispatcher;\n\n//# sourceURL=webpack:///./node_modules/flux/lib/Dispatcher.js?");

/***/ })

/******/ });