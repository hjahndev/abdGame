"use strict";
exports.id = 62;
exports.ids = [62];
exports.modules = {

/***/ 62:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ac": () => (/* binding */ CENTER_DONG),
/* harmony export */   "NH": () => (/* binding */ PLAY),
/* harmony export */   "XD": () => (/* binding */ SELECT),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aK": () => (/* binding */ JOB),
/* harmony export */   "tj": () => (/* binding */ START)
/* harmony export */ });
/* unused harmony export START_SUCCESS */
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _memberStat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(472);
/* harmony import */ var _battle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(474);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);




const START = "START";
const START_SUCCESS = "START_SUCCESS";
const CENTER_DONG = "CENTER_DONG";
const JOB = "JOB";
const PLAY = "PLAY";
const SELECT = "SELECT";
const initialState = {
    status: "",
    gameToken: "",
    name: "",
    player: null,
    job: "",
    scripts: null,
    input: null,
    inputVisible: false,
    play: "",
    select: null,
    selectCode: "",
    day: 0,
    sceneStatus: "",
    sceneInfo: ""
};
const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({
    index: (state = {}, action)=>{
        switch(action.type){
            case "HYDRATE":
                return {
                    ...state,
                    ...action.payload
                };
            case "START":
                return {
                    ...state,
                    status: action.data.status,
                    name: action.data.name
                };
            case "START_SUCCESS":
                return {
                    ...state,
                    status: action.data.status,
                    gameToken: action.data.gameToken
                };
            case "CENTER_DONG":
                return {
                    ...state,
                    status: action.data.status,
                    gameToken: action.data.gameToken,
                    scripts: [
                        ""
                    ]
                };
            case "CENTER_DONG_SUCCESS":
                return {
                    ...state,
                    status: action.data.status,
                    scripts: action.data.scripts,
                    input: action.data.input,
                    play: action.data.play,
                    day: action.data.day
                };
            case "JOB":
                return {
                    ...state,
                    job: action.data.userInput
                };
            case "JOB_SUCCESS":
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: "",
                    sceneStatus: action.data.sceneStatus
                };
            case "PLAY":
                return {
                    ...state
                };
            case "PLAY_SUCCESS":
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode,
                    sceneStatus: action.data.sceneStatus,
                    day: action.data.day,
                    sceneInfo: action.data.sceneInfo,
                    inputVisible: false
                };
            case "SELECT":
                return {
                    ...state
                };
            case "SELECT_SUCCESS":
                let isInputVisible = true;
                if (action.data.sceneStatus === "end") {
                    isInputVisible = false;
                }
                return {
                    ...state,
                    scripts: action.data.scripts,
                    player: action.data.player,
                    play: action.data.play,
                    select: action.data.select,
                    selectCode: action.data.selectCode,
                    sceneStatus: action.data.sceneStatus,
                    inputVisible: isInputVisible
                };
            default:
                return state;
        }
    },
    battle: _battle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
    memberStat: _memberStat__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);


/***/ })

};
;