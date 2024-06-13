"use strict";
exports.id = 745;
exports.ids = [745];
exports.modules = {

/***/ 2745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HN": () => (/* binding */ CreativePageBanner),
/* harmony export */   "kU": () => (/* binding */ ImagePageBanner)
/* harmony export */ });
/* unused harmony exports DefaultPageBanner, MapBanner */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5505);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([typed_js__WEBPACK_IMPORTED_MODULE_2__]);
typed_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const AnimationText = ({ typingData , extraClass  })=>{
    // Create Ref element.
    const el = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setTimeout(()=>{
            const typed = new typed_js__WEBPACK_IMPORTED_MODULE_2__["default"](el.current, {
                strings: typingData ? typingData : [
                    "Data with <strong>Azure pipelines</strong> and <strong>SQL</strong>",
                    "AI with <strong>Azure ML Studio</strong> and <strong>Python</strong>",
                    "TikTok <strong>@samueluyyt</strong>", 
                ],
                typeSpeed: 100,
                backSpeed: 100,
                backDelay: 100,
                smartBackspace: true,
                loop: false,
                showCursor: false
            });
            // Destropying
            return ()=>{
                typed.destroy();
            };
        }, 2000);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-subtitles ready",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: extraClass,
            ref: el
        })
    });
};
const BannerContent = ({ pageName , pageTitle , typingData , extraClass  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "centrize full-width",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "vertical-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "started-content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "h-title",
                                children: pageTitle ? pageTitle : pageName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AnimationText, {
                                typingData: typingData,
                                extraClass: extraClass
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "#next_section",
                className: "mouse_btn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "icon fas fa-chevron-down"
                })
            })
        ]
    });
};
const DefaultPageBanner = ({ pageName , pageTitle , typingData , extraClass ,  })=>/*#__PURE__*/ _jsxs("div", {
        className: "section started section-title",
        id: "section-started",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "video-bg",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "video-bg-mask"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "video-bg-texture",
                        id: "grained_container"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(BannerContent, {
                typingData: typingData,
                pageName: pageName,
                pageTitle: pageTitle
            })
        ]
    });
const ImagePageBanner = ({ pageName , pageTitle , typingData , extraClass , bannerImg ,  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let { jarallax , jarallaxVideo  } = __webpack_require__(409);
        jarallaxVideo();
        jarallax(document.querySelectorAll(".jarallax"), {
            speed: 0.5,
            keepImg: true,
            automaticResize: true,
            videoVolume: 0
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "section started section-title",
        id: "section-started",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "video-bg jarallax",
                style: {
                    backgroundImage: `url(${bannerImg ? bannerImg : "images/resume_bg.jpg"})`
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video-bg-mask"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video-bg-texture",
                        id: "grained_container"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerContent, {
                typingData: typingData,
                pageName: pageName,
                pageTitle: pageTitle,
                extraClass: extraClass
            })
        ]
    });
};
const CreativePageBanner = ({ pageName , pageTitle , typingData , extraClass ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "section started layout-creative",
        id: "section-started",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "video-bg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video-bg-mask"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "video-bg-texture",
                        id: "grained_container"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BannerContent, {
                typingData: typingData,
                pageName: pageName,
                pageTitle: pageTitle,
                extraClass: extraClass
            })
        ]
    });
};
const MapBanner = ({ typingData , extraClass  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "section started section-title",
        id: "section-started",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "video-bg",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: "map",
                        children: /*#__PURE__*/ _jsx("iframe", {
                            src: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd",
                            style: {
                                border: 0,
                                width: "100%",
                                height: "100%"
                            },
                            allowFullScreen: "",
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "video-bg-mask"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "video-bg-texture",
                        id: "grained_container"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "centrize full-width",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "vertical-center",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "started-content",
                        children: [
                            /*#__PURE__*/ _jsx("h1", {
                                className: "h-title",
                                children: "Contact Me"
                            }),
                            /*#__PURE__*/ _jsx(AnimationText, {
                                typingData: typingData,
                                extraClass: extraClass
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("a", {
                href: "#next_section",
                className: "mouse_btn",
                children: /*#__PURE__*/ _jsx("span", {
                    className: "icon fas fa-chevron-down"
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;