"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 678:
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





const Home = ()=>{
    const { 0: openMail , 1: setOpenMail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("start");
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const audioRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: letterTyping , 1: setLetterTyping  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const letter = `축하드립니다. 귀하께서는 한국, 미국, 캐나다, 호주, 뉴질랜드, 러시아, 일본, 
    중국 총 8개국이 건설한 해저 3000m의 북태평양해저기지(NPIUS)에 합격하였습니다.`;
    const letterArr = letter.split("");
    let charCount = 0;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const typeLetter = ()=>{
        setLetterTyping(letterArr.slice(0, charCount).join(""));
        charCount++;
        if (audioRef.current !== null) {
            audioRef.current.play();
        }
        if (charCount > letter.length) {
            clearInterval(interval.current);
            if (audioRef.current !== null) {
                audioRef.current.pause();
                audioRef.current.currentTimme = 0;
            }
        }
    };
    const onClickLetter = ()=>{
        setOpenMail(true);
        interval.current = setInterval(typeLetter, 100);
    };
    const onChangeInput = (e)=>{
        setName(e.target.value);
    };
    const onSign = (e)=>{
        dispatch({
            type: _reducers__WEBPACK_IMPORTED_MODULE_4__/* .START */ .tj,
            data: {
                status,
                name
            }
        });
        router.push("/elevator");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "start-frame",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "start-letter",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: "\uC5B4\uB450\uC6B4 \uBC14\uB2E4\uC758 \uB4F1\uBD88\uC774 \uB418\uC5B4 - \uC5F0\uC0B0\uD638"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: "\uD32C\uAC8C\uC784 \uD14D\uC2A4\uD2B8 RPG (\uC8FC\uC758: \uC2A4\uD3EC\uC77C\uB7EC\uAC00 \uC788\uC2B5\uB2C8\uB2E4.)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                            ref: audioRef,
                            src: "/audio/typingSound.mp3"
                        }),
                        openMail === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            id: "npius",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    id: "letter-content",
                                    children: letterTyping
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\uB2F9\uC2E0\uC740 \uC81C\uC8FC \uD574\uAD70\uAE30\uC9C0\uC5D0 \uAC00\uC11C \uD574\uC800\uAE30\uC9C0 \uD569\uACA9 \uC11C\uB958\uB97C \uB0B8 \uD6C4 \uC0AC\uD758\uAC04 \uBC30\uC640 \uD5EC\uAE30\uB97C \uD1B5\uD574 \uB300\uD55C\uB3C4\uB85C \uC774\uB3D9\uD558\uC600\uC2B5\uB2C8\uB2E4. \uD504\uB9AC\uC57C \uCFE0\uB9C8\uB9AC\uB294 \uB2F9\uC2E0\uC5D0\uAC8C NEP \uAC00\uC785 \uC11C\uB958 \uBB49\uCE58\uB97C \uB0B4\uBC00\uC5C8\uC2B5\uB2C8\uB2E4."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\uC11C\uBA85\uC744 \uB9C8\uCE58\uBA74 \uB2F9\uC2E0\uC740 \uBC14\uB85C \uC81C 4\uD574\uC800\uAE30\uC9C0\uC758 \uBC31\uD638\uB3D9\uC5D0 \uC9D0\uC744 \uD480\uACE0 \uD574\uC800\uAE30\uC9C0 \uC0DD\uD65C\uC744 \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "\uC11C\uBA85\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    id: "name-input",
                                    placeholder: "\uC131\uBA85",
                                    ref: inputRef,
                                    value: name,
                                    onChange: onChangeInput
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    id: "sign",
                                    onClick: onSign,
                                    children: "\uC11C\uBA85"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    id: "explanation",
                                    children: "21\uC138\uAE30 \uB9D0, \uB300\uD55C\uBBFC\uAD6D \uAD6D\uC801\uC744 \uAC00\uC9C4 \uB2F9\uC2E0\uC740 \uC5B4\uB290\uB0A0 \uD55C \uD1B5\uC758 \uBA54\uC77C\uC744 \uC218\uC2E0\uD558\uC600\uC2B5\uB2C8\uB2E4."
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#",
                                    id: "openMail",
                                    onClick: onClickLetter,
                                    children: "\uBC1C\uC2E0\uC790: North Pacific International Undersea Station"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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
var __webpack_exports__ = __webpack_require__.X(0, [474,472,62], () => (__webpack_exec__(678)));
module.exports = __webpack_exports__;

})();