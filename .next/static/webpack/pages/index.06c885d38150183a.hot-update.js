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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _pages_index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _pages_index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder/lib */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _components_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/context/SpeakerFilterContext */ \"./src/components/context/SpeakerFilterContext.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersList() {\n    _s();\n    var ref = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data), speakersData = ref.data, requestStatus = ref.requestStatus, error = ref.error, updateRecord = ref.updateRecord;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_components_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext), searchQuery = ref1.searchQuery, eventYear = ref1.eventYear;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading speaker data failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 22,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().container_speaker),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().speakerslist_placeholder),\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().row),\n                children: speakersData.filter(function(speaker) {\n                    return speaker.first.toLowerCase().includes(searchQuery);\n                }).map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speaker: speaker,\n                        onFavoriteToggle: function(doneCallback) {\n                            updateRecord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, speaker), {\n                                favorite: !speaker.favorite\n                            }), doneCallback);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 46,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"8vgtUeJiG7dKWObsTpFVL5Kz078=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQW1DO0FBQ1M7QUFDTTtBQUNHO0FBQ3NCO0FBQ2xDO0FBQ3lDOztBQUVsRixTQUFTUSxZQUFZLEdBQUc7O0lBQ3RCLElBS0lKLEdBQTJCLEdBQTNCQSxrRUFBZSxDQUFDLElBQUksRUFBRUUsOENBQUksQ0FBQyxFQUo3QkEsWUFBa0IsR0FJaEJGLEdBQTJCLENBSjdCRSxJQUFJLEVBQ0pJLGFBQWEsR0FHWE4sR0FBMkIsQ0FIN0JNLGFBQWEsRUFDYkMsS0FBSyxHQUVIUCxHQUEyQixDQUY3Qk8sS0FBSyxFQUNMQyxZQUFZLEdBQ1ZSLEdBQTJCLENBRDdCUSxZQUFZO0lBR2QsSUFBbUNaLElBQWdDLEdBQWhDQSxpREFBVSxDQUFDTywwRkFBb0IsQ0FBQyxFQUEzRE0sV0FBVyxHQUFnQmIsSUFBZ0MsQ0FBM0RhLFdBQVcsRUFBRUMsU0FBUyxHQUFLZCxJQUFnQyxDQUE5Q2MsU0FBUztJQUU5QixJQUFJSixhQUFhLEtBQUtMLDBFQUFzQixFQUFFO1FBQzVDLHFCQUNFLDhEQUFDVyxLQUFHOztnQkFBQyxTQUNJOzhCQUFBLDhEQUFDQyxHQUFDOzt3QkFBQyw4QkFBNEI7d0JBQUNOLEtBQUs7Ozs7Ozt3QkFBSzs7Ozs7O2dCQUM3QyxDQUNOO0tBQ0g7SUFFRCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDRSxTQUFTLEVBQUVoQixrRkFBd0I7a0JBQ3RDLDRFQUFDQyw2REFBZ0I7WUFDZmlCLElBQUksRUFBQyxPQUFPO1lBQ1pDLElBQUksRUFBRSxFQUFFO1lBQ1JILFNBQVMsRUFBRWhCLHlGQUErQjtZQUMxQ3FCLEtBQUssRUFBRWIsYUFBYSxLQUFLTCwwRUFBc0I7c0JBRS9DLDRFQUFDVyxLQUFHO2dCQUFDRSxTQUFTLEVBQUVoQixvRUFBVTswQkFDdkJPLFlBQVksQ0FDWmlCLE1BQU0sQ0FBQyxTQUFVQyxPQUFPLEVBQUU7b0JBQ3pCLE9BQ0VBLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLEVBQUUsQ0FBQ0MsUUFBUSxDQUFDakIsV0FBVyxDQUFDLENBQ2xEO2lCQUNGLENBQUMsQ0FHRGtCLEdBQUcsQ0FBQyxTQUFVSixPQUFPLEVBQUU7b0JBQ3RCLHFCQUNFLDhEQUFDMUIsMkRBQU87d0JBRU4wQixPQUFPLEVBQUVBLE9BQU87d0JBQ2hCSyxnQkFBZ0IsRUFBRSxTQUFDQyxZQUFZLEVBQUs7NEJBQ2xDckIsWUFBWSxDQUNWLHdLQUFLZSxPQUFPO2dDQUFFTyxRQUFRLEVBQUUsQ0FBQ1AsT0FBTyxDQUFDTyxRQUFROzhCQUFFLEVBQzNDRCxZQUFZLENBQ2IsQ0FBQzt5QkFDSDt1QkFQSU4sT0FBTyxDQUFDUSxFQUFFOzs7OzRCQVFmLENBQ0Y7aUJBQ0gsQ0FBQzs7Ozs7b0JBQ0U7Ozs7O2dCQUNXOzs7OztZQUNmLENBQ047Q0FDSDtHQXJEUTNCLFlBQVk7O1FBTWZKLDhEQUFlOzs7QUFOWkksS0FBQUEsWUFBWTtBQXVEckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gXCIuLi9jb21wb25lbnRzL1NwZWFrZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vcGFnZXMvaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXIvbGliXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0RGVsYXksIHsgUkVRVUVTVF9TVEFUVVMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUmVxdWVzdERlbGF5XCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgZGF0YTogc3BlYWtlcnNEYXRhLFxyXG4gICAgcmVxdWVzdFN0YXR1cyxcclxuICAgIGVycm9yLFxyXG4gICAgdXBkYXRlUmVjb3JkLFxyXG4gIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gIGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gIGlmIChyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIHNwZWFrZXIgZGF0YSBmYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX3NwZWFrZXJ9PlxyXG4gICAgICA8UmVhY3RQbGFjZWhvbGRlclxyXG4gICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgcm93cz17MTV9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3BlYWtlcnNsaXN0X3BsYWNlaG9sZGVyfVxyXG4gICAgICAgIHJlYWR5PXtyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5TVUNDRVNTfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAge3NwZWFrZXJzRGF0YVxyXG4gICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXsoZG9uZUNhbGxiYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICB7IC4uLnNwZWFrZXIsIGZhdm9yaXRlOiAhc3BlYWtlci5mYXZvcml0ZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXJzTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTcGVha2VyIiwic3R5bGVzIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwic2VhcmNoUXVlcnkiLCJldmVudFllYXIiLCJGQUlMVVJFIiwiZGl2IiwiYiIsImNsYXNzTmFtZSIsImNvbnRhaW5lcl9zcGVha2VyIiwidHlwZSIsInJvd3MiLCJzcGVha2Vyc2xpc3RfcGxhY2Vob2xkZXIiLCJyZWFkeSIsIlNVQ0NFU1MiLCJyb3ciLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibWFwIiwib25GYXZvcml0ZVRvZ2dsZSIsImRvbmVDYWxsYmFjayIsImZhdm9yaXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});