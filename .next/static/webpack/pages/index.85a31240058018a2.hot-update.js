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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var _pages_index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _pages_index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_index_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder/lib */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _components_context_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/context/SpeakerFilterContext */ \"./src/components/context/SpeakerFilterContext.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SpeakersList() {\n    _s();\n    var ref = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_4__.data), speakersData = ref.data, requestStatus = ref.requestStatus, error = ref.error, updateRecord = ref.updateRecord;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.FAILURE) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: [\n                        \"loading speaker data failed \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 20,\n                    columnNumber: 16\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().container_speaker),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            type: \"media\",\n            rows: 15,\n            className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().speakerslist_placeholder),\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__.REQUEST_STATUS.SUCCESS,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_pages_index_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),\n                children: speakersData.map(function(speaker) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Speaker__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        speaker: speaker,\n                        onFavoriteToggle: function(doneCallback) {\n                            updateRecord((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, speaker), {\n                                favorite: !speaker.favorite\n                            }), doneCallback);\n                        }\n                    }, speaker.id, false, {\n                        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 36,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\SpeakersList.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakersList, \"r1oZQPh1hU+LHosvcdRWpaWFIQU=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUE0QztBQUNNO0FBQ0c7QUFDc0I7QUFDbEM7QUFDeUM7O0FBRWxGLFNBQVNPLFlBQVksR0FBRzs7SUFDdEIsSUFLSUosR0FBMkIsR0FBM0JBLGtFQUFlLENBQUMsSUFBSSxFQUFFRSw4Q0FBSSxDQUFDLEVBSjdCQSxZQUFrQixHQUloQkYsR0FBMkIsQ0FKN0JFLElBQUksRUFDSkksYUFBYSxHQUdYTixHQUEyQixDQUg3Qk0sYUFBYSxFQUNiQyxLQUFLLEdBRUhQLEdBQTJCLENBRjdCTyxLQUFLLEVBQ0xDLFlBQVksR0FDVlIsR0FBMkIsQ0FEN0JRLFlBQVk7SUFHZCxJQUFJRixhQUFhLEtBQUtMLDBFQUFzQixFQUFFO1FBQzVDLHFCQUNFLDhEQUFDUyxLQUFHOztnQkFBQyxTQUNJOzhCQUFBLDhEQUFDQyxHQUFDOzt3QkFBQyw4QkFBNEI7d0JBQUNKLEtBQUs7Ozs7Ozt3QkFBSzs7Ozs7O2dCQUM3QyxDQUNOO0tBQ0g7SUFFRCxxQkFDRSw4REFBQ0csS0FBRztRQUFDRSxTQUFTLEVBQUVkLGtGQUF3QjtrQkFDdEMsNEVBQUNDLDZEQUFnQjtZQUNmZSxJQUFJLEVBQUMsT0FBTztZQUNaQyxJQUFJLEVBQUUsRUFBRTtZQUNSSCxTQUFTLEVBQUVkLHlGQUErQjtZQUMxQ21CLEtBQUssRUFBRVgsYUFBYSxLQUFLTCwwRUFBc0I7c0JBRS9DLDRFQUFDUyxLQUFHO2dCQUFDRSxTQUFTLEVBQUVkLG9FQUFVOzBCQUN2Qk8sWUFBWSxDQUFDZSxHQUFHLENBQUMsU0FBVUMsT0FBTyxFQUFFO29CQUNuQyxxQkFDRSw4REFBQ3hCLDJEQUFPO3dCQUVOd0IsT0FBTyxFQUFFQSxPQUFPO3dCQUNoQkMsZ0JBQWdCLEVBQUUsU0FBQ0MsWUFBWSxFQUFLOzRCQUNsQ2YsWUFBWSxDQUNWLHdLQUFLYSxPQUFPO2dDQUFFRyxRQUFRLEVBQUUsQ0FBQ0gsT0FBTyxDQUFDRyxRQUFROzhCQUFFLEVBQzNDRCxZQUFZLENBQ2IsQ0FBQzt5QkFDSDt1QkFQSUYsT0FBTyxDQUFDSSxFQUFFOzs7OzRCQVFmLENBQ0Y7aUJBQ0gsQ0FBQzs7Ozs7b0JBQ0U7Ozs7O2dCQUNXOzs7OztZQUNmLENBQ047Q0FDSDtHQTNDUXJCLFlBQVk7O1FBTWZKLDhEQUFlOzs7QUFOWkksS0FBQUEsWUFBWTtBQTZDckIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanM/MmE2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3BlYWtlclwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlci9saWJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgeyBSRVFVRVNUX1NUQVRVUyB9IGZyb20gXCIuLi9ob29rcy91c2VSZXF1ZXN0RGVsYXlcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuLi8uLi9TcGVha2VyRGF0YVwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgZXJyb3IsXHJcbiAgICB1cGRhdGVSZWNvcmQsXHJcbiAgfSA9IHVzZVJlcXVlc3REZWxheSgyMDAwLCBkYXRhKTtcclxuXHJcbiAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgRVJST1I6IDxiPmxvYWRpbmcgc3BlYWtlciBkYXRhIGZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfc3BlYWtlcn0+XHJcbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXHJcbiAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICByb3dzPXsxNX1cclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zcGVha2Vyc2xpc3RfcGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICB7c3BlYWtlcnNEYXRhLm1hcChmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICBrZXk9e3NwZWFrZXIuaWR9XHJcbiAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAgeyAuLi5zcGVha2VyLCBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUgfSxcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJTcGVha2VyIiwic3R5bGVzIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwiRkFJTFVSRSIsImRpdiIsImIiLCJjbGFzc05hbWUiLCJjb250YWluZXJfc3BlYWtlciIsInR5cGUiLCJyb3dzIiwic3BlYWtlcnNsaXN0X3BsYWNlaG9sZGVyIiwicmVhZHkiLCJTVUNDRVNTIiwicm93IiwibWFwIiwic3BlYWtlciIsIm9uRmF2b3JpdGVUb2dnbGUiLCJkb25lQ2FsbGJhY2siLCJmYXZvcml0ZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n"));

/***/ })

});