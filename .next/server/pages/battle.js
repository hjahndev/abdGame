(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
exports.modules = {

/***/ 479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_battle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./reducers/memberStat.js
var reducers_memberStat = __webpack_require__(472);
;// CONCATENATED MODULE: external "antd"
const external_antd_namespaceObject = require("antd");
;// CONCATENATED MODULE: ./components/MemberStat.js





const MemberStat = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const isStatsModalVisible = (0,external_react_redux_.useSelector)((state)=>state.memberStat.isStatsModalVisible);
    const memberStat = (0,external_react_redux_.useSelector)((state)=>state.memberStat);
    const pmh = memberStat.pmh;
    const ygy = memberStat.ygy;
    const shr = memberStat.shr;
    const sgh = memberStat.sgh;
    const pay = memberStat.pay;
    const hideStatsModal = ()=>{
        dispatch({
            type: reducers_memberStat/* MEMBER_STAT_VISIBLE */.RP,
            data: {
                isStatsModalVisible: false
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_antd_namespaceObject.Modal, {
        title: "\uC2A4\uD0EF\uBCF4\uAE30",
        style: {
            color: "ivory"
        },
        bodyStyle: {
            backgroundColor: "slategrey"
        },
        visible: isStatsModalVisible,
        onCancel: hideStatsModal,
        footer: null,
        children: pmh !== null ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "character-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/pmh.png",
                            style: {
                                width: "100px",
                                height: "100px"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "stat-view",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        pmh.name,
                                        " (",
                                        pmh.active,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uCCB4\uB825: ",
                                        pmh.hp,
                                        " / ",
                                        pmh.maxHp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hp pmh"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uC815\uC2E0\uB825: ",
                                        pmh.mp,
                                        " / ",
                                        pmh.maxMp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mp pmh"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uACF5\uACA9\uB825: ",
                                        pmh.att
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "character-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/ygy.png",
                            style: {
                                width: "100px",
                                height: "100px"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "stat-view",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        ygy.name,
                                        " (",
                                        ygy.active,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uCCB4\uB825: ",
                                        ygy.hp,
                                        " / ",
                                        ygy.maxHp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hp ygy"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uC815\uC2E0\uB825: ",
                                        ygy.mp,
                                        " / ",
                                        ygy.maxMp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mp ygy"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uACF5\uACA9\uB825: ",
                                        ygy.att
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "character-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/shr.png",
                            style: {
                                width: "100px",
                                height: "100px"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "stat-view",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        shr.name,
                                        " (",
                                        shr.active,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uCCB4\uB825: ",
                                        shr.hp,
                                        " / ",
                                        shr.maxHp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hp shr"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uC815\uC2E0\uB825: ",
                                        shr.mp,
                                        " / ",
                                        shr.maxMp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mp shr"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uACF5\uACA9\uB825: ",
                                        shr.att
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "character-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/sgh.png",
                            style: {
                                width: "100px",
                                height: "100px"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "stat-view",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        sgh.name,
                                        " (",
                                        sgh.active,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uCCB4\uB825: ",
                                        sgh.hp,
                                        " / ",
                                        sgh.maxHp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hp sgh"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uC815\uC2E0\uB825: ",
                                        sgh.mp,
                                        " / ",
                                        sgh.maxMp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mp sgh"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uACF5\uACA9\uB825: ",
                                        sgh.att
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "character-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/images/pay.png",
                            style: {
                                width: "100px",
                                height: "100px"
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "stat-view",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        pay.name,
                                        " (",
                                        pay.active,
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uCCB4\uB825: ",
                                        pay.hp,
                                        " / ",
                                        pay.maxHp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "hp pay"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uC815\uC2E0\uB825: ",
                                        pay.mp,
                                        " / ",
                                        pay.maxMp,
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mp-bar",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "mp pay"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        "\uACF5\uACA9\uB825: ",
                                        pay.att
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }) : null
    });
};
/* harmony default export */ const components_MemberStat = (MemberStat);

;// CONCATENATED MODULE: ./components/Menu.jsx






const Menu = ()=>{
    const state = (0,external_react_redux_.useSelector)((state)=>state);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: isItemsModalVisible , 1: setIsItemsModalVisible  } = (0,external_react_.useState)(false);
    const { 0: isRuleModalVisible , 1: setIsRuleModalVisible  } = (0,external_react_.useState)(false);
    const { 0: isMakerModalVisible , 1: setIsMakerModalVisible  } = (0,external_react_.useState)(false);
    const showStatsModal = ()=>{
        dispatch({
            type: reducers_memberStat/* MEMBER_STAT */.CH,
            data: {
                gameToken: state.index.gameToken
            }
        });
        dispatch({
            type: reducers_memberStat/* MEMBER_STAT_VISIBLE */.RP,
            data: {
                isStatsModalVisible: true
            }
        });
    };
    const showItemsModal = ()=>{
        setIsItemsModalVisible(true);
    };
    const hideItemsModal = ()=>{
        setIsItemsModalVisible(false);
    };
    const showRuleModal = ()=>{
        setIsRuleModalVisible(true);
    };
    const hideRuleModal = ()=>{
        setIsRuleModalVisible(false);
    };
    const showMakerModal = ()=>{
        setIsMakerModalVisible(true);
    };
    const hideMakerModal = ()=>{
        setIsMakerModalVisible(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "menu",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "menu-link",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "menu-item",
                            onClick: showStatsModal,
                            children: "\uC2A4\uD0EF \uBCF4\uAE30"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "menu-item",
                            onClick: showItemsModal,
                            children: "\uC544\uC774\uD15C \uBCF4\uAE30"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "menu-item",
                            onClick: showRuleModal,
                            children: "\uAC8C\uC784 \uC124\uBA85"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "developer-information",
                            onClick: showMakerModal,
                            children: "\uC81C\uC791\uC790 \uC815\uBCF4"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: "button-nav",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hp-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hp pmh"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button-character pmh"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hp-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hp ygy"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button-character ygy"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hp-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hp shr"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button-character shr"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hp-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hp sgh"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button-character sgh"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hp-bar",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hp pay"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "button-character pay"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_MemberStat, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_namespaceObject.Modal, {
                title: "\uC544\uC774\uD15C \uBCF4\uAE30",
                style: {
                    color: "ivory"
                },
                bodyStyle: {
                    backgroundColor: "black"
                },
                visible: isItemsModalVisible,
                onCancel: hideItemsModal,
                footer: null
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_namespaceObject.Modal, {
                title: "\uAC8C\uC784 \uC124\uBA85",
                style: {
                    color: "ivory"
                },
                bodyStyle: {
                    backgroundColor: "black"
                },
                visible: isRuleModalVisible,
                onCancel: hideRuleModal,
                footer: null,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uC81C4\uD574\uC800\uAE30\uC9C0\uC5D0\uC11C \uC81C2\uD574\uC800\uAE30\uC9C0\uAE4C\uC9C0 \uC774\uB3D9\uD574 \uCF00\uC774\uBE14\uCE74\uB97C \uD0C0\uACE0 \uD0C8\uCD9C\uD558\uC2ED\uC2DC\uC624."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "[\uC2A4\uD0EF \uBCF4\uAE30]\uB97C \uC120\uD0DD\uD558\uBA74 \uD300\uC6D0\uC758 \uCCB4\uB825, \uC815\uC2E0\uB825, \uACF5\uACA9\uB825, \uC2E0\uB8B0\uB3C4(\uCE5C\uBC00\uB3C4)\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uC2E0\uD574\uB7C9, \uC11C\uC9C0\uD601, \uBC31\uC560\uC601, \uBC15\uBB34\uD604, \uC720\uAE08\uC774)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "[\uC544\uC774\uD15C \uBCF4\uAE30]\uB97C \uC120\uD0DD\uD558\uBA74 \uADF8\uB3D9\uC548 \uBAA8\uC740 \uC544\uC774\uD15C\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uC2DD\uB7C9, \uCD1D, \uC57D)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uC704 \uB450 \uAC00\uC9C0\uB97C \uD655\uC778\uD55C \uD6C4 \uC774\uB3D9\uD560 \uC7A5\uC18C\uB97C \uC120\uD0DD\uD558\uC2ED\uC2DC\uC624."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uC7A5\uC18C\uC5D0 \uB530\uB77C \uC544\uC774\uD15C \uD68D\uB4DD, \uD734\uC2DD\uC774 \uAC00\uB2A5\uD558\uAC70\uB098 \uC804\uD22C\uAC00 \uC77C\uC5B4\uB0A0 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC01 \uC7A5\uC18C\uC5D0\uC11C \uAC00\uB2A5\uD55C \uC120\uD0DD\uC9C0\uB97C \uD655\uC778\uD55C \uD6C4 \uC120\uD0DD\uD558\uC5EC \uC8FC\uC2ED\uC2DC\uC624."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uD300\uC6D0\uC5D0\uAC8C \uB3C4\uC6C0\uC744 \uCCAD\uD560 \uACBD\uC6B0 \uC2E0\uD574\uB7C9, \uC11C\uC9C0\uD601, \uBC31\uC560\uC601\uC740 \uACF5\uACA9\uC744 \uD55C \uBC88 \uB300\uC2E0\uD560 \uC218 \uC788\uC73C\uBA70 \uBC15\uBB34\uD604, \uC720\uAE08\uC774\uB294 \uCCB4\uB825 \uD639\uC740 \uC815\uC2E0\uB825\uC744 \uD68C\uBCF5\uD558\uAC8C \uD574\uC90D\uB2C8\uB2E4. \uB3C4\uC6C0\uC744 \uBC1B\uC744 \uC218 \uC788\uB294 \uD69F\uC218\uB294 \uD574\uB2F9 \uCE90\uB9AD\uD130\uAC00 \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uAC00\uC9C4 \uC2E0\uB8B0\uB3C4\uC5D0 \uBE44\uB840\uD569\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uCD1D\uC744 \uC2E0\uD574\uB7C9, \uC11C\uC9C0\uD601, \uBC31\uC560\uC601\uC5D0\uAC8C \uC904 \uACBD\uC6B0 \uC2E0\uB8B0\uB3C4\uAC00 \uC99D\uAC00\uD558\uC9C0\uB9CC \uBC15\uBB34\uD604, \uC720\uAE08\uC774\uC5D0\uAC8C \uC904 \uACBD\uC6B0 \uC815\uC2E0\uB825\uC774 \uB5A8\uC5B4\uC9D1\uB2C8\uB2E4."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_antd_namespaceObject.Modal, {
                title: "\uC81C\uC791\uC790 \uC815\uBCF4",
                style: {
                    color: "ivory"
                },
                bodyStyle: {
                    backgroundColor: "black"
                },
                visible: isMakerModalVisible,
                onCancel: hideMakerModal,
                footer: null,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uC5B4\uB450\uC6B4 \uBC14\uB2E4\uC758 \uB4F1\uBD88\uC774 \uB418\uC5B4(\uC5F0\uC0B0\uD638 \uC800)\uC758 \uD32C\uAC8C\uC784\uC785\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uBB38\uD53C\uC544, \uC2DC\uB9AC\uC988, \uB9AC\uB514\uBD81\uC2A4, \uCE74\uCE74\uD398\uC5D0 \uC5F0\uC7AC\uC911\uC774\uB2C8 \uB9CE\uC740 \uAD00\uC2EC \uBD80\uD0C1\uB4DC\uB9BD\uB2C8\uB2E4."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uD504\uB860\uD2B8: hjahn.dev@gmail.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uBC31\uC5D4\uB4DC:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uC774\uBBF8\uC9C0: \uC5B4\uB450\uC6B4 \uBC14\uB2E4\uC758 \uC9C1\uC7A5\uC778"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "* special thanks to"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uB178\uC158 \uC815\uB9AC: \uC6B0\uC5F0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "\uB85C\uB529 \uC774\uBBF8\uC9C0: \uBC14\uB2E4\uC19C\uC0BF\uD0D5"
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./reducers/battle.js
var battle = __webpack_require__(474);
;// CONCATENATED MODULE: ./components/SelectBtnDiv.jsx




const SelectBtnDiv = ({ selectInfo  })=>{
    const { 0: locationValue , 1: setLocationValue  } = (0,external_react_.useState)("");
    const dispatch = (0,external_react_redux_.useDispatch)();
    const state = (0,external_react_redux_.useSelector)((state)=>state);
    const battleData = (0,external_react_redux_.useSelector)((state)=>state.battle);
    const onClickLocation = (e)=>{
        setLocationValue(e.target.value);
        dispatch({
            type: battle/* BATTLE */.UD,
            data: {
                status: "onGoing",
                action: "event",
                gameToken: state.index.gameToken,
                inputData: {
                    selected: {
                        "SELECT_CD": battleData.selectCode,
                        "OPTION_SEQ": e.target.value
                    }
                }
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "selectBtnDiv",
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: "playBtn",
            onClick: onClickLocation,
            value: selectInfo.value,
            children: selectInfo.name
        })
    });
};

;// CONCATENATED MODULE: ./components/Player.jsx



const Player = ()=>{
    const battleData = (0,external_react_redux_.useSelector)((state)=>state.battle);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: battleData.battle !== null ? battleData.battle.npc !== undefined ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "enemy-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "enemy-name",
                            children: battleData.npc.name
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "\uCCB4\uB825:",
                                battleData.npc.hp,
                                "/",
                                battleData.npc.maxHp,
                                " \uACF5\uACA9\uB825:",
                                battleData.npc.att,
                                " \uACBD\uD5D8\uCE58:",
                                battleData.npc.xp,
                                " \uC544\uC774\uD15C:"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "after-desc"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "player-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "player-name",
                            children: battleData.player.name
                        }),
                        "\uCCB4\uB825:",
                        battleData.player.hp,
                        "/",
                        battleData.player.maxHp,
                        " \uC815\uC2E0\uB825:",
                        battleData.player.mp,
                        "/",
                        battleData.player.maxMp,
                        " \uACF5\uACA9\uB825:",
                        battleData.player.att,
                        " \uACBD\uD5D8\uCE58: ",
                        battleData.player.xp,
                        " \uC544\uC774\uD15C:"
                    ]
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "after-desc"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "player-stat",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "player-name",
                            children: battleData.player.name
                        }),
                        "\uCCB4\uB825:",
                        battleData.player.hp,
                        "/",
                        battleData.player.maxHp,
                        " \uC815\uC2E0\uB825:",
                        battleData.player.mp,
                        "/",
                        battleData.player.maxMp,
                        " \uACF5\uACA9\uB825:",
                        battleData.player.att,
                        " \uACBD\uD5D8\uCE58: ",
                        battleData.player.xp,
                        " \uC544\uC774\uD15C:"
                    ]
                })
            ]
        }) : null
    });
};

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(722);
;// CONCATENATED MODULE: ./pages/battle.js







const Battle = ()=>{
    const battleData = (0,external_react_redux_.useSelector)((state)=>state.battle);
    const selectOptions = battleData.select.selectOptions;
    const scripts = battleData.scripts;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "battle-script",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "description",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "battle-content",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "pre-desc",
                            children: scripts !== undefined ? scripts.map((v, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: v
                                }, i);
                            }) : null
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "blue-dragon",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dong-name",
                                children: "\uCCAD\uB8E1\uB3D9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "red-bird",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dong-name",
                                children: "\uC8FC\uC791\uB3D9"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "player-section",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Player, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "description",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "battle-content",
                        children: [
                            battleData.select.selectHead,
                            selectOptions.map((v, i)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(SelectBtnDiv, {
                                    selectInfo: v
                                }, v.value);
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "black-tortoise",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dong-name",
                                children: "\uD604\uBB34\uB3D9"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        id: "white-tiger",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "pin"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "dong-name",
                                children: "\uBC31\uD638\uB3D9"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const pages_battle = (Battle);


/***/ }),

/***/ 722:
/***/ (() => {



/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [474,472], () => (__webpack_exec__(479)));
module.exports = __webpack_exports__;

})();