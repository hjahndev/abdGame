"use strict";
(() => {
var exports = {};
exports.id = 283;
exports.ids = [283];
exports.modules = {

/***/ 607:
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
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);





const Elevator = ()=>{
    const scrollDown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state);
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("start");
    const onClickElevatorBtn = (e)=>{
        e.preventDefault(); //form submit 막음    
        let pageYOffset = 0;
        const totalHeight = document.querySelector(".wall").scrollHeight;
        const bodyHeight = document.querySelector("body").scrollHeight;
        const scrollHeight = totalHeight - bodyHeight + 200;
        scrollDown.current = setInterval(()=>{
            pageYOffset = window.pageYOffset;
            window.scrollTo(0, pageYOffset + 5);
            if (pageYOffset > scrollHeight) {
                clearInterval(scrollDown.current);
            }
        }, 20);
    };
    const onClickOpenElev = (e)=>{
        dispatch({
            type: _reducers__WEBPACK_IMPORTED_MODULE_4__/* .CENTER_DONG */ .Ac,
            data: {
                status: status,
                gameToken: state.index.gameToken
            }
        });
        router.push("/centerDong");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "world",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "ceiling",
                children: "\uADF8\uBD84\uAED8\uC11C\uB294 \uB2F9\uC2E0\uC758 \uC8FC\uBCC0\uC73C\uB85C \uBE5B\uC744 \uD37C\uD2B8\uB9AC\uC2DC\uACE0, \uBC14\uB2E4\uC758 \uBC11\uBC14\uB2E5\uC744 \uBE5B\uC73C\uB85C \uB36E\uC73C\uC2ED\uB2C8\uB2E4."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-back",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    id: "start-screen",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "\uCD95\uD558\uD569\uB2C8\uB2E4! \uB2F9\uC2E0\uC740 \uD574\uC800\uAE30\uC9C0 \uC785\uC0AC \uC808\uCC28\uB97C \uBAA8\uB450 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            '\uD504\uB9AC\uC57C \uCFE0\uB9C8\uB9AC: "\uD574\uC800\uAE30\uC9C0 \uC778\uC6D0\uC774 \uB41C \uAC78 \uD658\uC601\uD569\uB2C8\uB2E4."',
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\uB2F9\uC2E0\uC740 \uC911\uC559 \uC5D8\uB9AC\uBCA0\uC774\uD130\uC5D0 \uD0D1\uC2B9\uD588\uC2B5\uB2C8\uB2E4.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            " \uC81C 4\uD574\uC800\uAE30\uC9C0\uB85C \uAC00\uB294 \uBC84\uD2BC\uC744 \uB204\uB974\uC2ED\uC2DC\uC624.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                id: "elevatorBtn",
                                onClick: onClickElevatorBtn,
                                children: "B4"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-left"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-right"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-front wall-front-a",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wall-content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "wall-title",
                        children: "-50m. \uC81C1\uD574\uC800\uAE30\uC9C0"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-front wall-front-b",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wall-content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "wall-title",
                        children: "-200m. \uC81C2\uD574\uC800\uAE30\uC9C0"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-front wall-front-c",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "wall-content",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "wall-title",
                        children: "-1000m. \uC81C3\uD574\uC800\uAE30\uC9C0"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "wall wall-front wall-front-d",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "wall-content",
                    children: [
                        "-3000m. \uC81C4\uD574\uC800\uAE30\uC9C0\uC5D0 \uB3C4\uCC29\uD588\uC2B5\uB2C8\uB2E4.",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: onClickOpenElev,
                                children: '"\uC721\uC9C0\uC5D0\uC11C \uC0AC\uB294 \uC0DD\uBB3C\uB4E4\uC740 \uC5B8\uC81C\uB098 \uBC14\uB2E4\uB97C \uADF8\uB9AC\uC6CC\uD558\uC9C0\uB9CC \uADF8 \uBC14\uB2F7\uBB3C\uC5D0 \uC7A0\uAE34 \uC21C\uAC04 \uB3CC\uC544\uAC08 \uC218 \uC5C6\uB2E4."'
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Elevator);


/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

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

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [474,472,62], () => (__webpack_exec__(607)));
module.exports = __webpack_exports__;

})();