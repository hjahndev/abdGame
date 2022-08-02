"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/intro";
exports.ids = ["pages/intro"];
exports.modules = {

/***/ "./pages/intro.js":
/*!************************!*\
  !*** ./pages/intro.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_battle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/battle */ \"./reducers/battle.js\");\n\n\n\n\n\nconst Intro = ()=>{\n    const { 0: script , 1: setScript  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`다음날 아침, 나는 누군가 깨우는 소리에 눈을 떴다.`);\n    const scriptArr = [\n        `\"일어나세요! 지금 당장 도망쳐야 합니다! 물이 새고 있어요!\"`,\n        `치과의사 박무현이었다. 나는 박무현을 따라 백호동 탈출정 앞으로 움직였다.`,\n        `거기에는 신해량, 서지혁, 백애영, 유금이가 있었다.`\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const interval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const index = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        interval.current = setInterval(()=>{\n            if (index.current > 2) {\n                clearInterval(interval.current);\n                dispatch({\n                    type: _reducers_battle__WEBPACK_IMPORTED_MODULE_4__.BATTLE,\n                    data: {\n                        status: \"onGoing\",\n                        action: \"event\",\n                        gameToken: state.index.gameToken\n                    }\n                });\n                router.push(\"/battle\");\n                return;\n            }\n            setScript(scriptArr[index.current]);\n            index.current++;\n        }, 3000);\n        return ()=>{\n            clearInterval(interval.current);\n        };\n    }, [\n        script\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"intro\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"alarm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\uC8FC\\uC758. \\uBCF8 \\uAC8C\\uC784\\uC740 62\\uD654\\uAE4C\\uC9C0\\uC758 \\uC2A4\\uD3EC\\uC77C\\uB7EC\\uB97C \\uD3EC\\uD568\\uD558\\uACE0 \\uC788\\uC2B5\\uB2C8\\uB2E4.\"\n                    }, void 0, false, {\n                        fileName: \"/home/jin/front/abdGame/pages/intro.js\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"\\uB2E8, \\uC804\\uD22C\\uD560 \\uD2B9\\uC815 \\uC778\\uBB3C\\uACFC \\uC9D1\\uB2E8\\uBA85\\uC740 \\uD45C\\uAE30\\uD558\\uC9C0 \\uC54A\\uC558\\uC2B5\\uB2C8\\uB2E4.\"\n                    }, void 0, false, {\n                        fileName: \"/home/jin/front/abdGame/pages/intro.js\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jin/front/abdGame/pages/intro.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"wake\",\n                children: script\n            }, void 0, false, {\n                fileName: \"/home/jin/front/abdGame/pages/intro.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jin/front/abdGame/pages/intro.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnRyby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFDWjtBQUNRO0FBQ1g7QUFFNUMsTUFBTVMsS0FBSyxHQUFHLElBQU07SUFDaEIsTUFBTSxLQUFDQyxNQUFNLE1BQUVDLFNBQVMsTUFBSVYsK0NBQVEsQ0FBQyxDQUFDO0lBQ0UsTUFBbENXLFNBQVMsR0FBRztRQUNkLENBQUM7UUFDNkMsQ0FBN0M7UUFDNkQsQ0FBN0Q7S0FBdUU7SUFDcEMsTUFBbENDLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixNQUFNUyxRQUFRLEdBQUdaLDZDQUFNLEVBQUU7SUFDekIsTUFBTWEsS0FBSyxHQUFHYiw2Q0FBTSxDQUFDLENBQUMsQ0FBQztJQUN2QixNQUFNYyxRQUFRLEdBQUdWLHdEQUFXLEVBQUU7SUFDOUIsTUFBTVcsS0FBSyxHQUFHVix3REFBVyxDQUFDLENBQUNVLEtBQUssR0FBS0EsS0FBSyxDQUFDO0lBRTNDZCxnREFBUyxDQUFDLElBQUk7UUFDVlcsUUFBUSxDQUFDSSxPQUFPLEdBQUdDLFdBQVcsQ0FBQyxJQUFLO1lBQ2hDLElBQUdKLEtBQUssQ0FBQ0csT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDbEJFLGFBQWEsQ0FBQ04sUUFBUSxDQUFDSSxPQUFPLENBQUMsQ0FBQztnQkFDaENGLFFBQVEsQ0FBQztvQkFDTEssSUFBSSxFQUFFYixvREFBTTtvQkFDWmMsSUFBSSxFQUFFO3dCQUFDQyxNQUFNLEVBQUUsU0FBUzt3QkFBRUMsTUFBTSxFQUFFLE9BQU87d0JBQUVDLFNBQVMsRUFBRVIsS0FBSyxDQUFDRixLQUFLLENBQUNVLFNBQVM7cUJBQUU7aUJBQ2hGLENBQUMsQ0FBQztnQkFDSFosTUFBTSxDQUFDYSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU87YUFDVjtZQUNEZixTQUFTLENBQUNDLFNBQVMsQ0FBQ0csS0FBSyxDQUFDRyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BDSCxLQUFLLENBQUNHLE9BQU8sRUFBRSxDQUFDO1NBQ25CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLElBQU07WUFBQ0UsYUFBYSxDQUFDTixRQUFRLENBQUNJLE9BQU8sQ0FBQztTQUFDLENBQUM7S0FDbEQsRUFBQztRQUFDUixNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRVoscUJBQ0ksOERBQUNpQixLQUFHO1FBQUNDLEVBQUUsRUFBQyxPQUFPOzswQkFDWCw4REFBQ0QsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE9BQU87O2tDQUNYLDhEQUFDQyxHQUFDO2tDQUFDLHNKQUFpQzs7Ozs7aUNBQWtEO2tDQUN4Qyw4REFBN0NBLEdBQUM7a0NBQUMsOElBQThCOzs7OztpQ0FBSTs7Ozs7O3lCQUNuQzswQkFDTiw4REFBQ0YsS0FBRztnQkFBQ0MsRUFBRSxFQUFDLE1BQU07MEJBQ1RsQixNQUFNOzs7Ozt5QkFDTDs7Ozs7O2lCQUNKLENBQ1I7Q0FDTDtBQUVELGlFQUFlRCxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hYmRnYW1lLy4vcGFnZXMvaW50cm8uanM/NWI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlcix7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJBVFRMRSB9IGZyb20gJy4uL3JlZHVjZXJzL2JhdHRsZSc7XG5cbmNvbnN0IEludHJvID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzY3JpcHQsIHNldFNjcmlwdF0gPSB1c2VTdGF0ZShg64uk7J2M64KgIOyVhOy5qCwg64KY64qUIOuIhOq1sOqwgCDquajsmrDripQg7IaM66as7JeQIOuIiOydhCDrlrTri6QuYCk7XG4gICAgY29uc3Qgc2NyaXB0QXJyID0gW1xuICAgICAgICBgXCLsnbzslrTrgpjshLjsmpQhIOyngOq4iCDri7nsnqUg64+E66ed7LOQ7JW8IO2VqeuLiOuLpCEg66y87J20IOyDiOqzoCDsnojslrTsmpQhXCJgLFxuICAgICAgICBg7LmY6rO87J2Y7IKsIOuwleustO2YhOydtOyXiOuLpC4g64KY64qUIOuwleustO2YhOydhCDrlLDrnbwg67Cx7Zi464+ZIO2DiOy2nOyglSDslZ7snLzroZwg7JuA7KeB7JiA64ukLmAsIFxuICAgICAgICBg6rGw6riw7JeQ64qUIOyLoO2VtOufiSwg7ISc7KeA7ZiBLCDrsLHslaDsmIEsIOycoOq4iOydtOqwgCDsnojsl4jri6QuYF07XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBpbmRleCA9IHVzZVJlZigwKTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpbnRlcnZhbC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgICAgICBpZihpbmRleC5jdXJyZW50ID4gMikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBCQVRUTEUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtzdGF0dXM6ICdvbkdvaW5nJywgYWN0aW9uOiAnZXZlbnQnLCBnYW1lVG9rZW46IHN0YXRlLmluZGV4LmdhbWVUb2tlbiB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9iYXR0bGUnKTsgIFxuICAgICAgICAgICAgICAgIHJldHVybjsgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0U2NyaXB0KHNjcmlwdEFycltpbmRleC5jdXJyZW50XSk7XG4gICAgICAgICAgICBpbmRleC5jdXJyZW50Kys7XG4gICAgICAgIH0sIDMwMDApO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7Y2xlYXJJbnRlcnZhbChpbnRlcnZhbC5jdXJyZW50KX07XG4gICAgfSxbc2NyaXB0XSk7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImludHJvXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWxhcm1cIj5cbiAgICAgICAgICAgICAgICA8cD7so7zsnZguIOuzuCDqsozsnoTsnYAgNjLtmZTquYzsp4DsnZgg7Iqk7Y+s7J2865+s66W8IO2PrO2VqO2VmOqzoCDsnojsirXri4jri6QuPC9wPiBcbiAgICAgICAgICAgICAgICA8cD7ri6gsIOyghO2IrO2VoCDtirnsoJUg7J2466y86rO8IOynkeuLqOuqheydgCDtkZzquLDtlZjsp4Ag7JWK7JWY7Iq164uI64ukLjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIndha2VcIj5cbiAgICAgICAgICAgICAgICB7c2NyaXB0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludHJvOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkJBVFRMRSIsIkludHJvIiwic2NyaXB0Iiwic2V0U2NyaXB0Iiwic2NyaXB0QXJyIiwicm91dGVyIiwiaW50ZXJ2YWwiLCJpbmRleCIsImRpc3BhdGNoIiwic3RhdGUiLCJjdXJyZW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidHlwZSIsImRhdGEiLCJzdGF0dXMiLCJhY3Rpb24iLCJnYW1lVG9rZW4iLCJwdXNoIiwiZGl2IiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/intro.js\n");

/***/ }),

/***/ "./reducers/battle.js":
/*!****************************!*\
  !*** ./reducers/battle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BATTLE\": () => (/* binding */ BATTLE),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst initialState = {\n    player: null,\n    npc: null,\n    selectOptions: null,\n    scripts: null\n};\nconst BATTLE = \"BATTLE\";\nconst reducer = (state = initialState, action)=>{\n    switch(action.type){\n        case \"BATTLE\":\n            return {\n                ...state\n            };\n        case \"BATTLE_SUCCESS\":\n            return {\n                ...state,\n                player: action.data.player,\n                npc: action.data.npc,\n                selectOptions: action.data.select.selectOptions,\n                scripts: action.data.scripts\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9iYXR0bGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUc7SUFDakJDLE1BQU0sRUFBRSxJQUFJO0lBQ1pDLEdBQUcsRUFBRSxJQUFJO0lBQ1RDLGFBQWEsRUFBRSxJQUFJO0lBQ25CQyxPQUFPLEVBQUUsSUFBSTtDQUNoQjtBQUVNLE1BQU1DLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFFL0IsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1AsWUFBWSxFQUFFUSxNQUFNLEdBQUs7SUFDOUMsT0FBUUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2YsS0FBSyxRQUFRO1lBQ1QsT0FBTztnQkFDSCxHQUFHRixLQUFLO2FBQ1g7UUFDTCxLQUFLLGdCQUFnQjtZQUNqQixPQUFPO2dCQUNILEdBQUdBLEtBQUs7Z0JBQ1JOLE1BQU0sRUFBRU8sTUFBTSxDQUFDRSxJQUFJLENBQUNULE1BQU07Z0JBQzFCQyxHQUFHLEVBQUVNLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDUixHQUFHO2dCQUNwQkMsYUFBYSxFQUFFSyxNQUFNLENBQUNFLElBQUksQ0FBQ0MsTUFBTSxDQUFDUixhQUFhO2dCQUMvQ0MsT0FBTyxFQUFFSSxNQUFNLENBQUNFLElBQUksQ0FBQ04sT0FBTzthQUMvQjtRQUNMO1lBQ0ksT0FBT0csS0FBSyxDQUFDO0tBQ3BCO0NBQ0o7QUFFRCxpRUFBZUQsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWJkZ2FtZS8uL3JlZHVjZXJzL2JhdHRsZS5qcz9lZjI1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwbGF5ZXI6IG51bGwsXG4gICAgbnBjOiBudWxsLCAgIFxuICAgIHNlbGVjdE9wdGlvbnM6IG51bGwsICAgIFxuICAgIHNjcmlwdHM6IG51bGwsIFxufVxuXG5leHBvcnQgY29uc3QgQkFUVExFID0gJ0JBVFRMRSc7XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnQkFUVExFJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAnQkFUVExFX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBwbGF5ZXI6IGFjdGlvbi5kYXRhLnBsYXllcixcbiAgICAgICAgICAgICAgICBucGM6IGFjdGlvbi5kYXRhLm5wYyxcbiAgICAgICAgICAgICAgICBzZWxlY3RPcHRpb25zOiBhY3Rpb24uZGF0YS5zZWxlY3Quc2VsZWN0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzY3JpcHRzOiBhY3Rpb24uZGF0YS5zY3JpcHRzXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInBsYXllciIsIm5wYyIsInNlbGVjdE9wdGlvbnMiLCJzY3JpcHRzIiwiQkFUVExFIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEiLCJzZWxlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/battle.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/intro.js"));
module.exports = __webpack_exports__;

})();