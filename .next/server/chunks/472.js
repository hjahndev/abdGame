"use strict";
exports.id = 472;
exports.ids = [472];
exports.modules = {

/***/ 472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CH": () => (/* binding */ MEMBER_STAT),
/* harmony export */   "RP": () => (/* binding */ MEMBER_STAT_VISIBLE),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export initialState */
const MEMBER_STAT = "MEMBER_STAT";
const MEMBER_STAT_VISIBLE = "MEMBER_STAT_VISIBLE";
const initialState = {
    isStatsModalVisible: false,
    pmh: null,
    sgh: null,
    shr: null,
    ygy: null,
    pay: null
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case "MEMBER_STAT":
            return {
                ...state
            };
        case "MEMBER_STAT_SUCCESS":
            return {
                ...state,
                pmh: action.data.charaterStatus["\uBC15\uBB34\uD604"],
                sgh: action.data.charaterStatus["\uC11C\uC9C0\uD601"],
                shr: action.data.charaterStatus["\uC2E0\uD574\uB7C9"],
                ygy: action.data.charaterStatus["\uC720\uAE08\uC774"],
                pay: action.data.charaterStatus["\uBC31\uC560\uC601"]
            };
        case "MEMBER_STAT_VISIBLE":
            return {
                ...state,
                isStatsModalVisible: action.data.isStatsModalVisible
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);


/***/ })

};
;