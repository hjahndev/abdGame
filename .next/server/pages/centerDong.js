"use strict";
(() => {
var exports = {};
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ centerDong)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: ./components/Stat.jsx



const Stat = ()=>{
    const player = (0,external_react_redux_.useSelector)((state)=>state.index.player);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "player-stat",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "player-name",
                children: player.name
            }),
            "\uCCB4\uB825:",
            player.hp,
            "/",
            player.maxHp,
            " \uC815\uC2E0\uB825:",
            player.mp,
            "/",
            player.maxMp,
            " \uACF5\uACA9\uB825:",
            player.att,
            " \uACBD\uD5D8\uCE58: ",
            player.xp
        ]
    });
};

;// CONCATENATED MODULE: ./components/Scripts.jsx



const Scripts = ()=>{
    const state = (0,external_react_redux_.useSelector)((state)=>state);
    const scripts = state.index.scripts;
    const day = state.index.day;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "script",
        children: [
            day > 1 && day < 7 ? `${day - 1}일차.` : null,
            scripts !== undefined && day < 7 ? scripts.map((v, i)=>{
                return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: v
                }, i);
            }) : null
        ]
    });
};

// EXTERNAL MODULE: ./reducers/index.js
var reducers = __webpack_require__(62);
;// CONCATENATED MODULE: ./pages/centerDong.js







const CenterDong = ()=>{
    const { 0: job , 1: setJob  } = (0,external_react_.useState)("");
    const { 0: playerInput , 1: setPlayerInput  } = (0,external_react_.useState)("");
    const inputRef = (0,external_react_.useRef)(null);
    const playerInputRef = (0,external_react_.useRef)(null);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(1);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const state = (0,external_react_redux_.useSelector)((state)=>state);
    const select = state.index.select;
    const sceneStatus = state.index.sceneStatus;
    const { 0: status , 1: setStatus  } = (0,external_react_.useState)("onGoing");
    const router = (0,router_.useRouter)();
    const onChangeInput = (e)=>{
        setJob(e.target.value);
    };
    const onClickJobBtn = (e)=>{
        dispatch({
            type: reducers/* JOB */.aK,
            data: {
                status: status,
                action: "event",
                inputData: {
                    userInput: job
                },
                gameToken: state.index.gameToken
            }
        });
    };
    const onChangePlayerInput = (e)=>{
        setPlayerInput(e.target.value);
    };
    const onClickPlayerInputBtn = (e)=>{
        dispatch({
            type: reducers/* PLAY */.NH,
            data: {
                status: status,
                action: "event",
                inputData: {
                    userInput: playerInput
                },
                gameToken: state.index.gameToken
            }
        });
        setPlayerInput("");
    };
    const onClickPlayBtn = (e)=>{
        dispatch({
            type: reducers/* PLAY */.NH,
            data: {
                status: status,
                action: "event",
                gameToken: state.index.gameToken
            }
        });
        if (state.index.day === 6 && sceneStatus === "end") {
            router.push("/intro");
        }
    };
    const handleChangeSelect = (e)=>{
        setSelected(e.target.value);
    };
    const onClickSelectBtn = (e)=>{
        dispatch({
            type: reducers/* SELECT */.XD,
            data: {
                status: status,
                action: "event",
                gameToken: state.index.gameToken,
                inputData: {
                    selected: {
                        "SELECT_CD": state.index.selectCode,
                        "OPTION_SEQ": selected
                    }
                }
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "centerDong",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Scripts, {}),
            state.index.day === 1 && state.index.play === "input" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        ref: inputRef,
                        value: job,
                        onChange: onChangeInput
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "centerDong-btn",
                        onClick: onClickJobBtn,
                        children: "\uC785\uB825"
                    })
                ]
            }) : null,
            state.index.inputVisible ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        ref: playerInputRef,
                        value: playerInput,
                        onChange: onChangePlayerInput,
                        placeholder: "\uC548\uB155\uD558\uC138\uC694? \uC0C8\uB85C\uC628 \uAC1C\uBC1C\uC790 \uC0BC\uBC88\uC785\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "centerDong-btn",
                        onClick: onClickPlayerInputBtn,
                        children: "\uC785\uB825"
                    })
                ]
            }) : null,
            sceneStatus === "end" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "centerDong-btn",
                onClick: onClickPlayBtn,
                children: "\uB2E4\uC74C"
            }) : null,
            state.index.play === "select" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: select.selectHead
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        onChange: handleChangeSelect,
                        value: selected,
                        children: select.selectOptions.map((v)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: v.value,
                                children: v.name
                            }, v.value);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "centerDong-btn",
                        onClick: onClickSelectBtn,
                        children: "\uC120\uD0DD"
                    })
                ]
            }) : null,
            state.index.player !== undefined ? /*#__PURE__*/ jsx_runtime_.jsx(Stat, {}) : null
        ]
    });
};
/* harmony default export */ const centerDong = (CenterDong);


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
var __webpack_exports__ = __webpack_require__.X(0, [474,472,62], () => (__webpack_exec__(203)));
module.exports = __webpack_exports__;

})();