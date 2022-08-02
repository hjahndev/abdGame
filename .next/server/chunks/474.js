"use strict";
exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ct": () => (/* binding */ LOCATION),
/* harmony export */   "UD": () => (/* binding */ BATTLE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialState = {
    player: null,
    npc: null,
    select: null,
    scripts: null,
    battle: null,
    selectCode: ""
};
const LOCATION = "LOCATION";
const BATTLE = "BATTLE";
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "LOCATION":
            return {
                ...state
            };
        case "LOCATION_SUCCESS":
            return {
                ...state,
                player: action.data.player,
                select: action.data.select,
                scripts: action.data.scripts,
                selectCode: action.data.selectCode
            };
        case "BATTLE":
            return {
                ...state
            };
        case "BATTLE_SUCCESS":
            return {
                ...state,
                player: action.data.battle.player,
                npc: action.data.battle.npc,
                select: action.data.battle.select,
                scripts: action.data.scripts,
                battle: action.data.battle,
                selectCode: action.data.battle.selectCode
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;