"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REQUEST_STATUS\": function() { return /* binding */ REQUEST_STATUS; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar _s = $RefreshSig$();\nvar REQUEST_STATUS = {\n    LOADING: \"loading\",\n    SUCCESS: \"success\",\n    FAILURE: \"failure\"\n};\nfunction useRequestDelay() {\n    var delayTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000, initialData = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];\n    var updateRecord = function updateRecord(recordUpdate, doneCallback) {\n        var newRecords = data.map(function(rec) {\n            return rec.id === recordUpdate.id ? recordUpdate : rec;\n        });\n        function delayFunction() {\n            return _delayFunction.apply(this, arguments);\n        }\n        function _delayFunction() {\n            _delayFunction = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            if (doneCallback) {\n                                doneCallback();\n                            }\n                            _ctx.next = 9;\n                            break;\n                        case 6:\n                            _ctx.prev = 6;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            console.log(\"error thrown inside delayFunction\", _ctx.t0);\n                        case 9:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        6\n                    ]\n                ]);\n            }));\n            return _delayFunction.apply(this, arguments);\n        }\n        delayFunction();\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(REQUEST_STATUS.LOADING), requestStatus = ref1[0], setRequestStatus = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), error = ref2[0], setError = ref2[1];\n    var delay = function(ms) {\n        return new Promise(function(resolve) {\n            return setTimeout(resolve, ms);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        function delayFunc() {\n            return _delayFunc.apply(this, arguments);\n        }\n        function _delayFunc() {\n            _delayFunc = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_Arda_ALKAN_code_camp_sessions_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.prev = 0;\n                            _ctx.next = 3;\n                            return delay(delayTime);\n                        case 3:\n                            setRequestStatus(REQUEST_STATUS.SUCCESS);\n                            setData(data);\n                            _ctx.next = 11;\n                            break;\n                        case 7:\n                            _ctx.prev = 7;\n                            _ctx.t0 = _ctx[\"catch\"](0);\n                            setRequestStatus(REQUEST_STATUS.FAILURE);\n                            setError(_ctx.t0);\n                        case 11:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee, null, [\n                    [\n                        0,\n                        7\n                    ]\n                ]);\n            }));\n            return _delayFunc.apply(this, arguments);\n        }\n        delayFunc();\n    }, []);\n    return {\n        data: data,\n        requestStatus: requestStatus,\n        error: error,\n        updateRecord: updateRecord\n    };\n}\n_s(useRequestDelay, \"cCVG4MyK8f9bdZsSFiXYwYDoyQc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequestDelay);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUE0Qzs7QUFFckMsSUFBTUUsY0FBYyxHQUFHO0lBQzVCQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLE9BQU8sRUFBRSxTQUFTO0NBQ25CLENBQUM7QUFFRixTQUFTQyxlQUFlLEdBQXFDO1FBQXBDQyxTQUFTLEdBQVRBLCtDQUFnQixrQkFBSixJQUFJLEVBQUVDLFdBQVcsR0FBWEEsK0NBQWdCLGtCQUFGLEVBQUU7UUFxQmhEQyxZQUFZLEdBQXJCLFNBQVNBLFlBQVksQ0FBQ0MsWUFBWSxFQUFFQyxZQUFZLEVBQUU7UUFDaEQsSUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFVQyxHQUFHLEVBQUU7WUFDekMsT0FBT0EsR0FBRyxDQUFDQyxFQUFFLEtBQUtOLFlBQVksQ0FBQ00sRUFBRSxHQUFHTixZQUFZLEdBQUdLLEdBQUcsQ0FBQztTQUN4RCxDQUFDO2lCQUNhRSxhQUFhO21CQUFiQSxjQUFhOztpQkFBYkEsY0FBYTtZQUFiQSxjQUFhLEdBQTVCLDRQQUErQjs7Ozs7O21DQUVyQkMsS0FBSyxDQUFDWCxTQUFTLENBQUM7OzRCQUN0QixJQUFJSSxZQUFZLEVBQUU7Z0NBQ2hCQSxZQUFZLEVBQUUsQ0FBQzs2QkFDaEI7Ozs7Ozs0QkFFRFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUNBQW1DLFVBQVEsQ0FBQzs7Ozs7Ozs7Ozs7YUFFM0Q7bUJBVGNILGNBQWE7O1FBVTVCQSxhQUFhLEVBQUUsQ0FBQztLQUNqQjs7SUFuQ0QsSUFBd0JqQixHQUFxQixHQUFyQkEsK0NBQVEsQ0FBQ1EsV0FBVyxDQUFDLEVBQXRDSyxJQUFJLEdBQWFiLEdBQXFCLEdBQWxDLEVBQUVxQixPQUFPLEdBQUlyQixHQUFxQixHQUF6QjtJQUNwQixJQUEwQ0EsSUFBZ0MsR0FBaENBLCtDQUFRLENBQUNFLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLEVBQW5FbUIsYUFBYSxHQUFzQnRCLElBQWdDLEdBQXRELEVBQUV1QixnQkFBZ0IsR0FBSXZCLElBQWdDLEdBQXBDO0lBQ3RDLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9Cd0IsS0FBSyxHQUFjeEIsSUFBWSxHQUExQixFQUFFeUIsUUFBUSxHQUFJekIsSUFBWSxHQUFoQjtJQUV0QixJQUFNa0IsS0FBSyxHQUFHLFNBQUNRLEVBQUU7ZUFBSyxJQUFJQyxPQUFPLENBQUMsU0FBQ0MsT0FBTzttQkFBS0MsVUFBVSxDQUFDRCxPQUFPLEVBQUVGLEVBQUUsQ0FBQztTQUFBLENBQUM7S0FBQTtJQUV2RXpCLGdEQUFTLENBQUMsV0FBTTtpQkFDQzZCLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsR0FBeEIsNFBBQTJCOzs7Ozs7bUNBRWpCWixLQUFLLENBQUNYLFNBQVMsQ0FBQzs7NEJBQ3RCZ0IsZ0JBQWdCLENBQUNyQixjQUFjLENBQUNFLE9BQU8sQ0FBQyxDQUFDOzRCQUN6Q2lCLE9BQU8sQ0FBQ1IsSUFBSSxDQUFDLENBQUM7Ozs7Ozs0QkFFZFUsZ0JBQWdCLENBQUNyQixjQUFjLENBQUNHLE9BQU8sQ0FBQyxDQUFDOzRCQUN6Q29CLFFBQVEsU0FBRyxDQUFDOzs7Ozs7Ozs7OzthQUVmO21CQVRjSyxVQUFTOztRQVV4QkEsU0FBUyxFQUFFLENBQUM7S0FDYixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBbUJQLE9BQU87UUFDTGpCLElBQUksRUFBSkEsSUFBSTtRQUNKUyxhQUFhLEVBQWJBLGFBQWE7UUFDYkUsS0FBSyxFQUFMQSxLQUFLO1FBQ0xmLFlBQVksRUFBWkEsWUFBWTtLQUNiLENBQUM7Q0FDSDtHQTVDUUgsZUFBZTtBQThDeEIsK0RBQWVBLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzPzhlZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU1RBVFVTID0ge1xyXG4gIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gIFNVQ0NFU1M6IFwic3VjY2Vzc1wiLFxyXG4gIEZBSUxVUkU6IFwiZmFpbHVyZVwiLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdERlbGF5KGRlbGF5VGltZSA9IDEwMDAsIGluaXRpYWxEYXRhID0gW10pIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcbiAgY29uc3QgW3JlcXVlc3RTdGF0dXMsIHNldFJlcXVlc3RTdGF0dXNdID0gdXNlU3RhdGUoUkVRVUVTVF9TVEFUVVMuTE9BRElORyk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1MpO1xyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWxheUZ1bmMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlY29yZChyZWNvcmRVcGRhdGUsIGRvbmVDYWxsYmFjaykge1xyXG4gICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlLmlkID8gcmVjb3JkVXBkYXRlIDogcmVjO1xyXG4gICAgfSk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGVsYXlGdW5jdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwidXBkYXRlUmVjb3JkIiwicmVjb3JkVXBkYXRlIiwiZG9uZUNhbGxiYWNrIiwibmV3UmVjb3JkcyIsImRhdGEiLCJtYXAiLCJyZWMiLCJpZCIsImRlbGF5RnVuY3Rpb24iLCJkZWxheSIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwicmVxdWVzdFN0YXR1cyIsInNldFJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkZWxheUZ1bmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useRequestDelay.js\n"));

/***/ })

});