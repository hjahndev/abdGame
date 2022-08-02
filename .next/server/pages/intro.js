"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_battle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(474);





const Intro = ()=>{
    const { 0: script , 1: setScript  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`다음날 아침, 나는 누군가 깨우는 소리에 눈을 떴다.`);
    const scriptArr = [
        `"일어나세요! 지금 당장 도망쳐야 합니다! 물이 새고 있어요!"`,
        `치과의사 박무현이었다. 나는 박무현을 따라 백호동 탈출정 앞으로 움직였다.`,
        `거기에는 신해량, 서지혁, 백애영, 유금이가 있었다.`
    ];
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const index = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        interval.current = setInterval(()=>{
            if (index.current > 2) {
                clearInterval(interval.current);
                dispatch({
                    type: _reducers_battle__WEBPACK_IMPORTED_MODULE_4__/* .LOCATION */ .Ct,
                    data: {
                        status: "onGoing",
                        action: "event",
                        gameToken: state.index.gameToken
                    }
                });
                router.push("/battle");
                return;
            }
            setScript(scriptArr[index.current]);
            index.current++;
        }, 3000);
        return ()=>{
            clearInterval(interval.current);
        };
    }, [
        script
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "intro",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "alarm",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "\uC8FC\uC758. \uBCF8 \uAC8C\uC784\uC740 62\uD654\uAE4C\uC9C0\uC758 \uC2A4\uD3EC\uC77C\uB7EC\uB97C \uD3EC\uD568\uD558\uACE0 \uC788\uC2B5\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "\uB2E8, \uC804\uD22C\uD560 \uD2B9\uC815 \uC778\uBB3C\uACFC \uC9D1\uB2E8\uBA85\uC740 \uD45C\uAE30\uD558\uC9C0 \uC54A\uC558\uC2B5\uB2C8\uB2E4."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "wake",
                children: script
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [474], () => (__webpack_exec__(656)));
module.exports = __webpack_exports__;

})();