"use strict";
exports.id = 654;
exports.ids = [654];
exports.modules = {

/***/ 654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ac": () => (/* binding */ CENTER_DONG),
  "aK": () => (/* binding */ JOB),
  "NH": () => (/* binding */ PLAY),
  "XD": () => (/* binding */ SELECT),
  "tj": () => (/* binding */ START),
  "ZP": () => (/* binding */ reducers)
});

// UNUSED EXPORTS: START_SUCCESS

// NAMESPACE OBJECT: ./reducers/battle.js
var battle_namespaceObject = {};
__webpack_require__.r(battle_namespaceObject);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
;// CONCATENATED MODULE: ./reducers/battle.js
const initialState = {
    npc: {
        att: "8",
        maxHp: "60",
        line: "NO_TEXT",
        name: "\uC801C",
        hp: "60",
        xp: "10"
    }
};
const BATTLE = "BATTLE";
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "BATTLE":
            return {
                ...state,
                player: action.data,
                npc: action.data
            };
        default:
            return state;
    }
};

// EXTERNAL MODULE: ./reducers/memberStat.js
var memberStat = __webpack_require__(472);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
;// CONCATENATED MODULE: ./reducers/index.js




const START = "START";
const START_SUCCESS = "START_SUCCESS";
const CENTER_DONG = "CENTER_DONG";
const JOB = "JOB";
const PLAY = "PLAY";
const SELECT = "SELECT";
const reducers_initialState = {
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
const rootReducer = (0,external_redux_.combineReducers)({
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
    memberStat: memberStat/* default */.ZP,
    battle: battle_namespaceObject["default"]
});
/* harmony default export */ const reducers = (rootReducer);


/***/ })

};
;