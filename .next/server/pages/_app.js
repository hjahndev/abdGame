"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(648);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(695);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./reducers/index.js + 1 modules
var reducers = __webpack_require__(654);
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./sagas/index.js



function startAPI(data) {
    return external_axios_default().post(`http://52.89.23.86:9090/abd/gameSetup`, data);
}
function centerDongAPI(data) {
    return external_axios_default().post(`http://52.89.23.86:9090/abd/gamePlay`, data);
}
function jobAPI(data) {
    return external_axios_default().post(`http://52.89.23.86:9090/abd/gamePlay`, data);
}
function* watchStart(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(startAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: "START_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: "START_FAILURE",
            data: err.response.data
        });
    }
}
function* watchCenterDong(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(centerDongAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: "CENTER_DONG_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: "CENTER_DONG_FAILURE",
            data: err.response.data
        });
    }
}
function* watchJob(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(jobAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: "JOB_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: "JOB_FAILURE",
            data: err.response.data
        });
    }
}
function* watchPlay(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(jobAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: "PLAY_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: "PLAY_FAILURE",
            data: err.response.data
        });
    }
}
function* watchSelect(action) {
    console.log(action);
    try {
        const result = yield (0,effects_namespaceObject.call)(jobAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: "SELECT_SUCCESS",
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: "SELECT_FAILURE",
            data: err.response.data
        });
    }
}
function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.takeEvery)("START", watchStart),
        (0,effects_namespaceObject.takeEvery)("CENTER_DONG", watchCenterDong),
        (0,effects_namespaceObject.takeEvery)("JOB", watchJob),
        (0,effects_namespaceObject.takeEvery)("PLAY", watchPlay),
        (0,effects_namespaceObject.takeEvery)("SELECT", watchSelect), 
    ]);
};

;// CONCATENATED MODULE: ./store/configureStore.js






const loggerMiddleware = ({ dispatch , getState  })=>(next)=>(action)=>{
            console.log(action);
            return next(action);
        };
const configureStore = ()=>{
    const sagaMiddleware = external_redux_saga_default()();
    const middlewares = [
        sagaMiddleware,
        loggerMiddleware
    ];
    const enhancer =  true ? (0,external_redux_.compose)((0,external_redux_.applyMiddleware)(...middlewares)) : 0;
    const store = (0,external_redux_.createStore)(reducers/* default */.ZP, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
const wrapper = (0,external_next_redux_wrapper_.createWrapper)(configureStore, {
    debug: "production" === "development"
});
/* harmony default export */ const store_configureStore = (wrapper);

;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "\uC5B4\uB450\uC6B4 \uBC14\uB2E4\uC758 \uB4F1\uBD88\uC774 \uB418\uC5B4 \uD32C\uAC8C\uC784"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {})
        ]
    });
}
/* harmony default export */ const _app = (store_configureStore.withRedux(MyApp));


/***/ }),

/***/ 648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [654], () => (__webpack_exec__(794)));
module.exports = __webpack_exports__;

})();