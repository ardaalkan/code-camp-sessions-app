"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n//import { data } from \"../../../SpeakerData\";\n\n\nconst { promisify  } = __webpack_require__(/*! util */ \"util\");\nconst readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));\nconst delay = (ms)=>new Promise((resolve)=>{\n        setTimeout(resolve, ms);\n    });\nasync function handler(req, res) {\n    //res.status(200).send(JSON.stringify(data, null, 2));\n    const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./\", \"db.json\");\n    try {\n        const readFileData = await readFile(jsonFile);\n        await delay(1000);\n        const speakers = JSON.parse(readFileData).speakers;\n        if (speakers) {\n            res.setHeader(\"Content-Type\", \"application/json\");\n            res.status(200).send(JSON.stringify(speakers, null, 2));\n            console.log(\"GET /api/speakers status: 200\");\n        }\n    } catch (e) {\n        console.log(\"/api/speakers error\", e);\n        res.status(404).send(\"File Not Found on server\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDdEI7QUFDSjtBQUVwQixNQUFNLEVBQUVFLFNBQVMsR0FBRSxHQUFHQyxtQkFBTyxDQUFDLGtCQUFNLENBQUM7QUFDckMsTUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNELG9EQUFXLENBQUM7QUFDdkMsTUFBTUksS0FBSyxHQUFHLENBQUNDLEVBQUUsR0FDZixJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxHQUFLO1FBQ3ZCQyxVQUFVLENBQUNELE9BQU8sRUFBRUYsRUFBRSxDQUFDLENBQUM7S0FDekIsQ0FBQztBQUVXLGVBQWVJLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsc0RBQXNEO0lBQ3RELE1BQU1DLFFBQVEsR0FBR2IsbURBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQzlDLElBQUk7UUFDRixNQUFNYyxZQUFZLEdBQUcsTUFBTVYsUUFBUSxDQUFDUyxRQUFRLENBQUM7UUFDN0MsTUFBTVIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU1VLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILFlBQVksQ0FBQyxDQUFDQyxRQUFRO1FBQ2xELElBQUlBLFFBQVEsRUFBRTtZQUNaSCxHQUFHLENBQUNNLFNBQVMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUNsRE4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0osSUFBSSxDQUFDSyxTQUFTLENBQUNOLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUM5QztLQUNGLENBQUMsT0FBT0MsQ0FBQyxFQUFFO1FBQ1ZGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixFQUFFQyxDQUFDLENBQUMsQ0FBQztRQUN0Q1osR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2RlLWNhbXAtc2Vzc2lvbnMtYXBwLy4vcGFnZXMvYXBpL3NwZWFrZXJzL2luZGV4LmpzPzdkOWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuXHJcbmNvbnN0IHsgcHJvbWlzaWZ5IH0gPSByZXF1aXJlKFwidXRpbFwiKTtcclxuY29uc3QgcmVhZEZpbGUgPSBwcm9taXNpZnkoZnMucmVhZEZpbGUpO1xyXG5jb25zdCBkZWxheSA9IChtcykgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XHJcbiAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XHJcbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlYWRGaWxlRGF0YSA9IGF3YWl0IHJlYWRGaWxlKGpzb25GaWxlKTtcclxuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xyXG4gICAgY29uc3Qgc3BlYWtlcnMgPSBKU09OLnBhcnNlKHJlYWRGaWxlRGF0YSkuc3BlYWtlcnM7XHJcbiAgICBpZiAoc3BlYWtlcnMpIHtcclxuICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKEpTT04uc3RyaW5naWZ5KHNwZWFrZXJzLCBudWxsLCAyKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiR0VUIC9hcGkvc3BlYWtlcnMgc3RhdHVzOiAyMDBcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coXCIvYXBpL3NwZWFrZXJzIGVycm9yXCIsIGUpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJGaWxlIE5vdCBGb3VuZCBvbiBzZXJ2ZXJcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJwYXRoIiwiZnMiLCJwcm9taXNpZnkiLCJyZXF1aXJlIiwicmVhZEZpbGUiLCJkZWxheSIsIm1zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25GaWxlIiwicmVhZEZpbGVEYXRhIiwic3BlYWtlcnMiLCJKU09OIiwicGFyc2UiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJzZW5kIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/speakers/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();