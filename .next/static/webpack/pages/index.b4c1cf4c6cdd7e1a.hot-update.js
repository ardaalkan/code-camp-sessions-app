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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _this = undefined;\n\n\n\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 15\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().session_box),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Session, (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, sessions[0]), void 0, false, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().speaker_list_image),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n            lineNumber: 23,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SpeakerImage;\nvar IndexPage = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().container_speaker),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().row),\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().container_list),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().container_speaker_list),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().speaker_list_col),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerImage, {\n                                        id: id,\n                                        first: first,\n                                        last: last\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_2___default().speaker_info),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    children: [\n                                                        first,\n                                                        \" \",\n                                                        last\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: [\n                                                        bio,\n                                                        \" \",\n                                                        company,\n                                                        \" \",\n                                                        twitterHandle,\n                                                        \" \",\n                                                        favorite\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 23\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sessions, {\n                            sessions: sessions\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\Desktop\\\\code-camp-sessions-app\\\\pages\\\\index.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, _this);\n};\n_c3 = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNHLE9BQU87d0RBQUMsR0FBQzt3REFBQ0QsYUFBYTt3REFBQyxHQUFDO3dEQUFDRCxRQUFROzs7Ozs7d0RBQ3ZDOzs7OztvREFDQTs7Ozs7OzRDQUNGOzs7Ozs7b0NBQ0Y7Ozs7O2dDQUNGO3NDQUNOLDhEQUFDcEIsUUFBUTs0QkFBQ0MsUUFBUSxFQUFFQSxRQUFROzs7OztnQ0FBSTs7Ozs7O3dCQUM1QixDQUNOO2FBQ0gsQ0FBQzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBMUNLYSxNQUFBQSxTQUFTO0FBNENmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+XHJcbiAgICAgIHt0aXRsZX0gPHN0cm9uZz5Sb29tOiB7cm9vbS5uYW1lfTwvc3Ryb25nPlxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHsgc2Vzc2lvbnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlc3Npb25fYm94fT5cclxuICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHtpZCwgZmlyc3QsIGxhc3R9KXtcclxuICByZXR1cm4oXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwZWFrZXJfbGlzdF9pbWFnZX0+XHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfVxyXG4gICAgLz5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJfc3BlYWtlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGJpbyxcclxuICAgICAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgICAgIGxhc3QsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlLFxyXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICBzZXNzaW9ucyxcclxuICAgICAgICAgIH0gPSBzcGVha2VyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX2xpc3R9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX3NwZWFrZXJfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwZWFrZXJfbGlzdF9jb2x9PlxyXG4gICAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwZWFrZXJfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIl0sIm5hbWVzIjpbImRhdGEiLCJzdHlsZXMiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZGl2IiwiY2xhc3NOYW1lIiwic2Vzc2lvbl9ib3giLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsInNwZWFrZXJfbGlzdF9pbWFnZSIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiSW5kZXhQYWdlIiwiY29udGFpbmVyX3NwZWFrZXIiLCJyb3ciLCJtYXAiLCJzcGVha2VyIiwiYmlvIiwiZmF2b3JpdGUiLCJ0d2l0dGVySGFuZGxlIiwiY29tcGFueSIsImNvbnRhaW5lcl9saXN0IiwiY29udGFpbmVyX3NwZWFrZXJfbGlzdCIsInNwZWFrZXJfbGlzdF9jb2wiLCJzcGVha2VyX2luZm8iLCJoMyIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});