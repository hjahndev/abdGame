/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/elevator"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjin%2Ffront%2FabdGame%2Fpages%2Felevator.js&page=%2Felevator!":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjin%2Ffront%2FabdGame%2Fpages%2Felevator.js&page=%2Felevator! ***!
  \***************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/elevator\",\n      function () {\n        return __webpack_require__(/*! ./pages/elevator.js */ \"./pages/elevator.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/elevator\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZob21lJTJGamluJTJGZnJvbnQlMkZhYmRHYW1lJTJGcGFnZXMlMkZlbGV2YXRvci5qcyZwYWdlPSUyRmVsZXZhdG9yIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGdEQUFxQjtBQUM1QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/YmI4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2VsZXZhdG9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9lbGV2YXRvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvZWxldmF0b3JcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjin%2Ffront%2FabdGame%2Fpages%2Felevator.js&page=%2Felevator!\n"));

/***/ }),

/***/ "./pages/elevator.js":
/*!***************************!*\
  !*** ./pages/elevator.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Elevator = function() {\n    _s();\n    var scrollDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"start\"), status = ref[0], setStatus = ref[1];\n    var onClickElevatorBtn = function(e) {\n        e.preventDefault(); //form submit 막음    \n        var pageYOffset = 0;\n        var totalHeight = document.querySelector(\".wall\").scrollHeight;\n        var bodyHeight = document.querySelector(\"body\").scrollHeight;\n        var scrollHeight = totalHeight - bodyHeight + 200;\n        scrollDown.current = setInterval(function() {\n            pageYOffset = window.pageYOffset;\n            window.scrollTo(0, pageYOffset + 5);\n            if (pageYOffset > scrollHeight) {\n                clearInterval(scrollDown.current);\n            }\n        }, 20);\n    };\n    var onClickOpenElev = function(e) {\n        dispatch({\n            type: _reducers__WEBPACK_IMPORTED_MODULE_4__.CENTER_DONG,\n            data: {\n                status: status,\n                gameToken: state.index.gameToken\n            }\n        });\n        router.push(\"/centerDong\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"world\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"ceiling\",\n                children: \"\\uADF8\\uBD84\\uAED8\\uC11C\\uB294 \\uB2F9\\uC2E0\\uC758 \\uC8FC\\uBCC0\\uC73C\\uB85C \\uBE5B\\uC744 \\uD37C\\uD2B8\\uB9AC\\uC2DC\\uACE0, \\uBC14\\uB2E4\\uC758 \\uBC11\\uBC14\\uB2E5\\uC744 \\uBE5B\\uC73C\\uB85C \\uB36E\\uC73C\\uC2ED\\uB2C8\\uB2E4.\"\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-back\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"start-screen\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"\\uCD95\\uD558\\uD569\\uB2C8\\uB2E4! \\uB2F9\\uC2E0\\uC740 \\uD574\\uC800\\uAE30\\uC9C0 \\uC785\\uC0AC \\uC808\\uCC28\\uB97C \\uBAA8\\uB450 \\uB9C8\\uCCE4\\uC2B5\\uB2C8\\uB2E4.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 47,\n                                columnNumber: 23\n                            }, _this),\n                            '\\uD504\\uB9AC\\uC57C \\uCFE0\\uB9C8\\uB9AC: \"\\uD574\\uC800\\uAE30\\uC9C0 \\uC778\\uC6D0\\uC774 \\uB41C \\uAC78 \\uD658\\uC601\\uD569\\uB2C8\\uB2E4.\"',\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 48,\n                                columnNumber: 23\n                            }, _this),\n                            \"\\uB2F9\\uC2E0\\uC740 \\uC911\\uC559 \\uC5D8\\uB9AC\\uBCA0\\uC774\\uD130\\uC5D0 \\uD0D1\\uC2B9\\uD588\\uC2B5\\uB2C8\\uB2E4.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 49,\n                                columnNumber: 23\n                            }, _this),\n                            \" \\uC81C 4\\uD574\\uC800\\uAE30\\uC9C0\\uB85C \\uAC00\\uB294 \\uBC84\\uD2BC\\uC744 \\uB204\\uB974\\uC2ED\\uC2DC\\uC624.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                id: \"elevatorBtn\",\n                                onClick: onClickElevatorBtn,\n                                children: \"B4\"\n                            }, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-left\"\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-right\"\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-front wall-front-a\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wall-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"wall-title\",\n                        children: \"-50m. \\uC81C1\\uD574\\uC800\\uAE30\\uC9C0\"\n                    }, void 0, false, {\n                        fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-front wall-front-b\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wall-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"wall-title\",\n                        children: \"-200m. \\uC81C2\\uD574\\uC800\\uAE30\\uC9C0\"\n                    }, void 0, false, {\n                        fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-front wall-front-c\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wall-content\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"wall-title\",\n                        children: \"-1000m. \\uC81C3\\uD574\\uC800\\uAE30\\uC9C0\"\n                    }, void 0, false, {\n                        fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"wall wall-front wall-front-d\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"wall-content\",\n                    children: [\n                        \"-3000m. \\uC81C4\\uD574\\uC800\\uAE30\\uC9C0\\uC5D0 \\uB3C4\\uCC29\\uD588\\uC2B5\\uB2C8\\uB2E4.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                onClick: onClickOpenElev,\n                                children: '\"\\uC721\\uC9C0\\uC5D0\\uC11C \\uC0AC\\uB294 \\uC0DD\\uBB3C\\uB4E4\\uC740 \\uC5B8\\uC81C\\uB098 \\uBC14\\uB2E4\\uB97C \\uADF8\\uB9AC\\uC6CC\\uD558\\uC9C0\\uB9CC \\uADF8 \\uBC14\\uB2F7\\uBB3C\\uC5D0 \\uC7A0\\uAE34 \\uC21C\\uAC04 \\uB3CC\\uC544\\uAC08 \\uC218 \\uC5C6\\uB2E4.\"'\n                            }, void 0, false, {\n                                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                                lineNumber: 73,\n                                columnNumber: 22\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                            lineNumber: 73,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jin/front/abdGame/pages/elevator.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Elevator, \"ArBNza8xKZV0GaFPuX4/k99oUdQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Elevator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Elevator);\nvar _c;\n$RefreshReg$(_c, \"Elevator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LmpzPzg2NjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENFTlRFUl9ET05HIH0gZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5jb25zdCBFbGV2YXRvciA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGxEb3duID0gdXNlUmVmKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZSk7XG4gICAgY29uc3QgWyBzdGF0dXMsIHNldFN0YXR1cyBdID0gdXNlU3RhdGUoJ3N0YXJ0Jyk7XG4gICAgXG4gICAgY29uc3Qgb25DbGlja0VsZXZhdG9yQnRuID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL2Zvcm0gc3VibWl0IOunieydjCAgICBcbiAgICAgICAgbGV0IHBhZ2VZT2Zmc2V0ID0gMDtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2FsbCcpLnNjcm9sbEhlaWdodDtcbiAgICAgICAgY29uc3QgYm9keUhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IHRvdGFsSGVpZ2h0IC0gYm9keUhlaWdodCArIDIwMDtcbiAgICAgICAgc2Nyb2xsRG93bi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHBhZ2VZT2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhZ2VZT2Zmc2V0ICsgNSk7XG5cbiAgICAgICAgICAgIGlmKHBhZ2VZT2Zmc2V0ID4gc2Nyb2xsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzY3JvbGxEb3duLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25DbGlja09wZW5FbGV2ID0gKGUpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ0VOVEVSX0RPTkcsXG4gICAgICAgICAgICBkYXRhOiB7IHN0YXR1czogc3RhdHVzLCBnYW1lVG9rZW46IHN0YXRlLmluZGV4LmdhbWVUb2tlbiB9XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZXIucHVzaCgnL2NlbnRlckRvbmcnKTsgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZFwiPlxuICAgICAgICA8c2VjdGlvbiBpZD1cImNlaWxpbmdcIj5cbiAgICAgICAgICAgIOq3uOu2hOq7mOyEnOuKlCDri7nsi6DsnZgg7KO867OA7Jy866GcIOu5m+ydhCDtjbztirjrpqzsi5zqs6AsIOuwlOuLpOydmCDrsJHrsJTri6XsnYQg67mb7Jy866GcIOuNruycvOyLreuLiOuLpC5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YWxsIHdhbGwtYmFja1wiPlxuICAgICAgICAgICAgPGZvcm0gaWQ9XCJzdGFydC1zY3JlZW5cIj4gICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIOy2le2VmO2VqeuLiOuLpCEg64u57Iug7J2AIO2VtOyggOq4sOyngCDsnoXsgqwg7KCI7LCo66W8IOuqqOuRkCDrp4jss6TsirXri4jri6QuXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+7ZSE66as7JW8IOy/oOuniOumrDogXCLtlbTsoIDquLDsp4Ag7J247JuQ7J20IOuQnCDqsbgg7ZmY7JiB7ZWp64uI64ukLlwiXG4gICAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+64u57Iug7J2AIOykkeyVmSDsl5jrpqzrsqDsnbTthLDsl5Ag7YOR7Iq57ZaI7Iq164uI64ukLiBcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz4g7KCcIDTtlbTsoIDquLDsp4DroZwg6rCA64qUIOuyhO2KvOydhCDriITrpbTsi63si5zsmKQuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJlbGV2YXRvckJ0blwiIG9uQ2xpY2s9e29uQ2xpY2tFbGV2YXRvckJ0bn0+QjQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YWxsIHdhbGwtbGVmdFwiPjwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2FsbCB3YWxsLXJpZ2h0XCI+PC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YWxsIHdhbGwtZnJvbnQgd2FsbC1mcm9udC1hXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3YWxsLXRpdGxlXCI+LTUwbS4g7KCcMe2VtOyggOq4sOyngDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YWxsIHdhbGwtZnJvbnQgd2FsbC1mcm9udC1iXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3YWxsLXRpdGxlXCI+LTIwMG0uIOygnDLtlbTsoIDquLDsp4A8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2FsbCB3YWxsLWZyb250IHdhbGwtZnJvbnQtY1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwid2FsbC10aXRsZVwiPi0xMDAwbS4g7KCcM+2VtOyggOq4sOyngDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YWxsIHdhbGwtZnJvbnQgd2FsbC1mcm9udC1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGwtY29udGVudFwiPi0zMDAwbS4g7KCcNO2VtOyggOq4sOyngOyXkCDrj4TssKntlojsirXri4jri6QuXG4gICAgICAgICAgICAgICAgPGRpdj48YSBvbkNsaWNrPXtvbkNsaWNrT3BlbkVsZXZ9Plwi7Jyh7KeA7JeQ7IScIOyCrOuKlCDsg53rrLzrk6TsnYAg7Ja47KCc64KYIOuwlOuLpOulvCDqt7jrpqzsm4ztlZjsp4Drp4wg6re4IOuwlOuLt+usvOyXkCDsnqDquLQg7Iic6rCEIOuPjOyVhOqwiCDsiJgg7JeG64ukLlwiPC9hPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFbGV2YXRvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZVJvdXRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJDRU5URVJfRE9ORyIsIkVsZXZhdG9yIiwic2Nyb2xsRG93biIsImRpc3BhdGNoIiwicm91dGVyIiwic3RhdGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJvbkNsaWNrRWxldmF0b3JCdG4iLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWU9mZnNldCIsInRvdGFsSGVpZ2h0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSGVpZ2h0IiwiYm9keUhlaWdodCIsImN1cnJlbnQiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsInNjcm9sbFRvIiwiY2xlYXJJbnRlcnZhbCIsIm9uQ2xpY2tPcGVuRWxldiIsInR5cGUiLCJkYXRhIiwiZ2FtZVRva2VuIiwiaW5kZXgiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImlkIiwiZm9ybSIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImgyIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/elevator.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fhome%2Fjin%2Ffront%2FabdGame%2Fpages%2Felevator.js&page=%2Felevator!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);