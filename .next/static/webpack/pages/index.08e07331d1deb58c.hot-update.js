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

/***/ "./src/components/context/SpeakerFilterContext.js":
/*!********************************************************!*\
  !*** ./src/components/context/SpeakerFilterContext.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpeakerFilterContext\": function() { return /* binding */ SpeakerFilterContext; },\n/* harmony export */   \"SpeakerFilterProvider\": function() { return /* binding */ SpeakerFilterProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useSpeakerFilter */ \"./src/hooks/useSpeakerFilter.js\");\n\n\n\nvar _s = $RefreshSig$();\nvar SpeakerFilterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SpeakerFilterProvider(param) {\n    var children = param.children, _startingShowSessions = param.startingShowSessions, startingShowSessions = _startingShowSessions === void 0 ? false : _startingShowSessions;\n    _s();\n    var ref = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startingShowSessions), showSessions = ref.showSessions, setShowSessions = ref.setShowSessions;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.Provider, {\n        value: {\n            showSessions: showSessions,\n            setShowSessions: setShowSessions\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Arda ALKAN\\\\code-camp-sessions-app\\\\src\\\\components\\\\context\\\\SpeakerFilterContext.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(SpeakerFilterProvider, \"EfsUFRZxROfa7SPrTONdVMPEl1M=\", false, function() {\n    return [\n        _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SpeakerFilterProvider;\n\nvar _c;\n$RefreshReg$(_c, \"SpeakerFilterProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb250ZXh0L1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE2QztBQUNlOztBQUU1RCxJQUFNRyxvQkFBb0IsaUJBQUdGLG9EQUFhLEVBQUU7QUFFNUMsU0FBU0cscUJBQXFCLENBQUMsS0FBMEMsRUFBRTtRQUExQ0MsUUFBUSxHQUFWLEtBQTBDLENBQXhDQSxRQUFRLDBCQUFWLEtBQTBDLENBQTlCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQixzQ0FBRyxLQUFLOztJQUNyRSxJQUNFSixHQUFzQyxHQUF0Q0EsbUVBQWdCLENBQUNJLG9CQUFvQixDQUFDLEVBRGhDQyxZQUFZLEdBQ2xCTCxHQUFzQyxDQURoQ0ssWUFBWSxFQUFFQyxlQUFlLEdBQ25DTixHQUFzQyxDQURsQk0sZUFBZTtJQUdyQyxxQkFDRSw4REFBQ0wsb0JBQW9CLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVILFlBQVksRUFBWkEsWUFBWTtZQUFFQyxlQUFlLEVBQWZBLGVBQWU7U0FBRTtrQkFDcEVILFFBQVE7Ozs7O1lBQ3FCLENBQ2hDO0NBQ0g7R0FUUUQscUJBQXFCOztRQUUxQkYsK0RBQWdCOzs7QUFGWEUsS0FBQUEscUJBQXFCO0FBV3lCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbnRleHQvU3BlYWtlckZpbHRlckNvbnRleHQuanM/NTE2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU3BlYWtlckZpbHRlciBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU3BlYWtlckZpbHRlclwiO1xyXG5cclxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRmlsdGVyUHJvdmlkZXIoeyBjaGlsZHJlbiwgc3RhcnRpbmdTaG93U2Vzc2lvbnMgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucyB9ID1cclxuICAgIHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNwZWFrZXJGaWx0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NwZWFrZXJGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0LCBTcGVha2VyRmlsdGVyUHJvdmlkZXIgfTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZVNwZWFrZXJGaWx0ZXIiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/context/SpeakerFilterContext.js\n"));

/***/ })

});