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
exports.id = "pages/intro";
exports.ids = ["pages/intro"];
exports.modules = {

/***/ "./pages/intro.js":
/*!************************!*\
  !*** ./pages/intro.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Intro = ()=>{\n    const { 0: script , 1: setScript  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`다음날 아침, 나는 누군가 깨우는 소리에 눈을 떴다.`);\n    const scriptArr = [\n        `\"일어나세요! 지금 당장 도망쳐야 합니다! 물이 새고 있어요!\"`,\n        `치과의사 박무현이었다. 나는 박무현을 따라 백호동 탈출정 앞으로 움직였다.`,\n        `거기에는 신해량, 서지혁, 백애영, 유금이가 있었다.`\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const index = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        interval.current = setInterval(()=>{\n            if (index.current > 2) {\n                clearInterval(interval.current);\n                router.push(\"/battle\");\n                return;\n            }\n            setScript(scriptArr[index.current]);\n            index.current++;\n        }, 3000);\n        return ()=>{\n            clearInterval(interval.current);\n        };\n    }, [\n        script\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"intro\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"alarm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\uC8FC\\uC758. \\uBCF8 \\uAC8C\\uC784\\uC740 62\\uD654\\uAE4C\\uC9C0\\uC758 \\uC2A4\\uD3EC\\uC77C\\uB7EC\\uB97C \\uD3EC\\uD568\\uD558\\uACE0 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\abdGame\\\\pages\\\\intro.js\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\uB2E8, \\uC804\\uD22C\\uD560 \\uD2B9\\uC815 \\uC778\\uBB3C\\uACFC \\uC9D1\\uB2E8\\uBA85\\uC740 \\uD45C\\uAE30\\uD558\\uC9C0 \\uC54A\\uC558\\uC2B5\\uB2C8\\uB2E4.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\workspace\\\\abdGame\\\\pages\\\\intro.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\workspace\\\\abdGame\\\\pages\\\\intro.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"wake\",\n                children: script\n            }, void 0, false, {\n                fileName: \"C:\\\\workspace\\\\abdGame\\\\pages\\\\intro.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\workspace\\\\abdGame\\\\pages\\\\intro.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFDWjtBQUUvQyxNQUFNTSxLQUFLLEdBQUcsSUFBTTtJQUNoQixNQUFNLEtBQUNDLE1BQU0sTUFBRUMsU0FBUyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7SUFDRSxNQUFsQ1EsU0FBUyxHQUFHO1FBQ2QsQ0FBQztRQUM2QyxDQUE3QztRQUM2RCxDQUE3RDtLQUF1RTtJQUNwQyxNQUFsQ0MsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLE1BQU1NLFFBQVEsR0FBR1QsNkNBQU0sRUFBRTtJQUN6QixNQUFNVSxLQUFLLEdBQUdWLDZDQUFNLENBQUMsQ0FBQyxDQUFDO0lBRXZCQyxnREFBUyxDQUFDLElBQUk7UUFDVlEsUUFBUSxDQUFDRSxPQUFPLEdBQUdDLFdBQVcsQ0FBQyxJQUFLO1lBQ2hDLElBQUdGLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDbEJFLGFBQWEsQ0FBQ0osUUFBUSxDQUFDRSxPQUFPLENBQUMsQ0FBQztnQkFDaENILE1BQU0sQ0FBQ00sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixPQUFPO2FBQ1Y7WUFDRFIsU0FBUyxDQUFDQyxTQUFTLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQ0QsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztTQUNuQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsT0FBTyxJQUFNO1lBQUNFLGFBQWEsQ0FBQ0osUUFBUSxDQUFDRSxPQUFPLENBQUM7U0FBQyxDQUFDO0tBQ2xELEVBQUM7UUFBQ04sTUFBTTtLQUFDLENBQUMsQ0FBQztJQUVaLHFCQUNJLDhEQUFDVSxLQUFHO1FBQUNDLEVBQUUsRUFBQyxPQUFPOzswQkFDWCw4REFBQ0QsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNYLDhEQUFDQyxHQUFDO2tDQUFDLHNKQUFpQzs7Ozs7aUNBQWtEO2tDQUN4Qyw4REFBN0NBLEdBQUM7a0NBQUMsOElBQThCOzs7OztpQ0FBSTs7Ozs7O3lCQUNuQzswQkFDTiw4REFBQ0YsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE1BQU07MEJBQ1RYLE1BQU07Ozs7O3lCQUNMOzs7Ozs7aUJBQ0osQ0FDUjtDQUNMO0FBRUQsaUVBQWVELEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FiZGdhbWUvLi9wYWdlcy9pbnRyby5qcz81YjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIseyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBJbnRybyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzY3JpcHQsIHNldFNjcmlwdF0gPSB1c2VTdGF0ZShg64uk7J2M64KgIOyVhOy5qCwg64KY64qUIOuIhOq1sOqwgCDquajsmrDripQg7IaM66as7JeQIOuIiOydhCDrlrTri6QuYCk7XHJcbiAgICBjb25zdCBzY3JpcHRBcnIgPSBbXHJcbiAgICAgICAgYFwi7J287Ja064KY7IS47JqUISDsp4DquIgg64u57J6lIOuPhOunneyzkOyVvCDtlanri4jri6QhIOusvOydtCDsg4jqs6Ag7J6I7Ja07JqUIVwiYCxcclxuICAgICAgICBg7LmY6rO87J2Y7IKsIOuwleustO2YhOydtOyXiOuLpC4g64KY64qUIOuwleustO2YhOydhCDrlLDrnbwg67Cx7Zi464+ZIO2DiOy2nOyglSDslZ7snLzroZwg7JuA7KeB7JiA64ukLmAsIFxyXG4gICAgICAgIGDqsbDquLDsl5DripQg7Iug7ZW065+JLCDshJzsp4DtmIEsIOuwseyVoOyYgSwg7Jyg6riI7J206rCAIOyeiOyXiOuLpC5gXTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGluZGV4ID0gdXNlUmVmKDApO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGludGVydmFsLmN1cnJlbnQgPSBzZXRJbnRlcnZhbCgoKT0+IHtcclxuICAgICAgICAgICAgaWYoaW5kZXguY3VycmVudCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2JhdHRsZScpOyAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm47ICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTY3JpcHQoc2NyaXB0QXJyW2luZGV4LmN1cnJlbnRdKTtcclxuICAgICAgICAgICAgaW5kZXguY3VycmVudCsrO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge2NsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudCl9O1xyXG4gICAgfSxbc2NyaXB0XSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cImludHJvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbGFybVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+7KO87J2YLiDrs7gg6rKM7J6E7J2AIDYy7ZmU6rmM7KeA7J2YIOyKpO2PrOydvOufrOulvCDtj6ztlajtlZjqs6Ag7J6I7Iq164uI64ukLjwvcD4gXHJcbiAgICAgICAgICAgICAgICA8cD7ri6gsIOyghO2IrO2VoCDtirnsoJUg7J2466y86rO8IOynkeuLqOuqheydgCDtkZzquLDtlZjsp4Ag7JWK7JWY7Iq164uI64ukLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3YWtlXCI+XHJcbiAgICAgICAgICAgICAgICB7c2NyaXB0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiUm91dGVyIiwidXNlUm91dGVyIiwiSW50cm8iLCJzY3JpcHQiLCJzZXRTY3JpcHQiLCJzY3JpcHRBcnIiLCJyb3V0ZXIiLCJpbnRlcnZhbCIsImluZGV4IiwiY3VycmVudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInB1c2giLCJkaXYiLCJpZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/intro.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/intro.js"));
module.exports = __webpack_exports__;

})();