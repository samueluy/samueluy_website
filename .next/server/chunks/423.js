"use strict";
exports.id = 423;
exports.ids = [423];
exports.modules = {

/***/ 4423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/popup/ContentModal.js



const Content = ({ content , close  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade popup-box-inline mfp-ready"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-inline-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                id: "popup-2",
                                className: "popup-box mfp-fade",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: content.outerHTML
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>close(),
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        children: "\xd7"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ContentModal = ()=>{
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const { 0: content , 1: setContent  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const popupLink = document.querySelectorAll(".has-popup-media");
            for(let i = 0; i < popupLink.length; i++){
                const element = popupLink[i];
                element.addEventListener("click", ()=>{
                    setOpen(true);
                    const boxItem = element.closest(".box-item"), hidedItem = boxItem.getElementsByClassName("mfp-hide")[0], content = hidedItem.getElementsByClassName("content")[0];
                    setContent(content);
                });
            }
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: open && /*#__PURE__*/ jsx_runtime_.jsx(Content, {
            content: content,
            close: ()=>{
                setContent(null);
                setOpen(false);
            }
        })
    });
};
/* harmony default export */ const popup_ContentModal = (ContentModal);

;// CONCATENATED MODULE: ./src/components/popup/ImageGallery.js


const ImgView = ({ close , imgs  })=>{
    const images = imgs.length > 0 ? imgs : [
        "images/works/work6.jpg",
        "images/works/work1.jpg",
        "images/works/work5.jpg", 
    ];
    const { 0: photoIndex , 1: setPhotoIndex  } = (0,external_react_.useState)(0);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "postion-realtive",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-fade mfp-ready",
                onClick: ()=>close()
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                className: "mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container mfp-s-ready mfp-image-holder",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-content imgGallery_popup",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mfp-iframe-scaler",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "img-container",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                style: {
                                                    width: `100%`
                                                },
                                                className: "mfp-img",
                                                src: images[photoIndex]
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mfp-preloader",
                                    children: "Loading..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Previous (Left arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-left mfp-prevent-close",
                            onClick: ()=>setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            title: "Next (Right arrow key)",
                            type: "button",
                            className: "mfp-arrow mfp-arrow-right mfp-prevent-close",
                            onClick: ()=>{
                                setPhotoIndex((photoIndex + 1) % images.length);
                            // console.log(photoIndex, images[photoIndex]);
                            }
                        })
                    ]
                })
            })
        ]
    });
};
const ImageGallery = ()=>{
    const { 0: imgs , 1: setImgs  } = (0,external_react_.useState)([]);
    const { 0: view , 1: setView  } = (0,external_react_.useState)(false);
    const { 0: imgContainer , 1: setImgContainer  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const imgGallery = document.querySelectorAll(".has-popup-gallery");
            for(let i = 0; i < imgGallery.length; i++){
                const gallery = imgGallery[i];
                gallery.addEventListener("click", ()=>{
                    setView(true);
                    let img_ = [];
                    let parentElement = gallery.closest(".image");
                    let mfpHideItem = parentElement.getElementsByClassName("mfp-hide")[0];
                    let img = mfpHideItem.getElementsByTagName("a");
                    for(let i = 0; i < img.length; i++){
                        const imgHref = img[i].getAttribute("href");
                        img_.push(imgHref);
                    }
                    setImgs(img_);
                });
            }
        }, 1000);
        console.log(imgs);
    }, [
        view
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: view && /*#__PURE__*/ jsx_runtime_.jsx(ImgView, {
            imgs: imgs,
            close: ()=>{
                setView(false);
                setImgs([]);
            }
        })
    });
};
/* harmony default export */ const popup_ImageGallery = (ImageGallery);

;// CONCATENATED MODULE: ./src/components/popup/ImageView.js



const ImgViews = ({ close , src  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: ` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const { 0: img , 1: setImg  } = (0,external_react_.useState)(false);
    const { 0: imgValue , 1: setImgValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("/images")) {
                    if (a.getAttribute("download") === null) {
                        a.addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const popup_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js



const VideoPopup_ = ({ close , videoID  })=>{
    let domNode = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: domNode,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mfp-iframe-scaler",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        title: "Close (Esc)",
                                        type: "button",
                                        className: "mfp-close",
                                        onClick: ()=>close(),
                                        children: "\xd7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                        src: videoID,
                                        title: "YouTube video player",
                                        frameBorder: "0",
                                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                        allowFullScreen: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const VideoPopup = ()=>{
    const { 0: video , 1: setVideo  } = (0,external_react_.useState)(false);
    const { 0: videoValue , 1: setVideoValue  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
                    a.addEventListener("click", (e)=>{
                        e.preventDefault();
                        setVideoValue(a.href);
                        setVideo(true);
                    });
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: video && /*#__PURE__*/ jsx_runtime_.jsx(VideoPopup_, {
            close: ()=>setVideo(false),
            videoID: videoValue
        })
    });
};
/* harmony default export */ const popup_VideoPopup = (VideoPopup);

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__(0);
;// CONCATENATED MODULE: ./src/layout/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "copy",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "E: contact@samueluy.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "T: +63 956 381 2141"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "soc-box",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "follow-label",
                        children: "Follow Me"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "soc",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.linkedin.com/in/samueluy/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon fab fa-linkedin"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.tiktok.com/@samueluyyt/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon fab fa-tiktok"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.facebook.com/samuyyt/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon fab fa-facebook"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.instagram.com/samueluyyt/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon fab fa-instagram"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                target: "_blank",
                                rel: "noreferrer",
                                href: "https://www.youtube.com/samueluy",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon fab fa-youtube"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "clear"
            })
        ]
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Header.js



const Menu = ()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "logo hover-masks-logo",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    href: "/documents/Samuel_Uy_Resume_2024.pdf",
                    download: "Samuel_Uy_Resume_2024.pdf",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "mask-lnk",
                            children: [
                                "Samuel ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "Uy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "mask-lnk mask-lnk-hover",
                            children: [
                                "Download ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: "CV"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-menu hover-masks",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "top-menu-nav",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "menu-topmenu-container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "menu",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item menu-item-has-children",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Home"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "menu-item menu-item-has-children",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/contacts",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "Contact"
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(MobileHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(DeskTopHeader, {})
        ]
    });
};
/* harmony default export */ const layout_Header = (Header);
const DeskTopHeader = ()=>/*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `header desktopHeader`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "head-top",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
        })
    });
const MobileHeader = ()=>{
    const { 0: toggle , 1: setToggle  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: `header mobileHeader ${toggle ? "active" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "head-top",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "menu-btn",
                    onClick: ()=>setToggle(!toggle),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/layout/Preloader.js


const Preloader = ()=>{
    const { 0: preloader , 1: setPreloader  } = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        // setTimeout(() => {
        //   document.querySelector(".lines").className = "lines finish";
        // }, 1500);
        setTimeout(()=>{
            document.querySelector(".lines").classList.add("ready");
        }, 3000);
        setTimeout(()=>{
            setPreloader(false);
            document.querySelector(".lines").classList.add("finish");
        }, 1000);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "preloader",
            style: {
                display: preloader ? "block" : "none"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "centrize full-width",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "vertical-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "spinner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "double-bounce1"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "double-bounce2"
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const layout_Preloader = (Preloader);

;// CONCATENATED MODULE: ./src/layout/Layout.js










const Layout = ({ children , noHeader  })=>{
    (0,external_react_.useEffect)(()=>{
        (0,utils/* cursor */.oc)();
    }, []);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", utils/* stickyNav */.h4);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(popup_VideoPopup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageView, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ImageGallery, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(popup_ContentModal, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Preloader, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "cursor-follower"
                    }),
                    !noHeader && /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "wrapper",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "lines",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "line-col"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "line-col"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "line-col"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "line-col"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "line-col"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 0:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "av": () => (/* binding */ dotResize),
/* harmony export */   "bR": () => (/* binding */ createSkillsDot),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oc": () => (/* binding */ cursor)
/* harmony export */ });
/* unused harmony export parallax */
const cursor = ()=>{
    document.addEventListener("mousemove", function(e) {
        var x = e.pageX;
        var y = e.pageY;
        var newposX = x;
        var newposY = y;
        const cursor = document.querySelector(".cursor-follower");
        cursor.style.transform = `translate3d(${newposX}px,${newposY}px,0px)`;
        let a = document.querySelectorAll("a");
        a.forEach((element)=>{
            element.addEventListener("mouseenter", function() {
                cursor.classList.add("cursor-hover");
            });
            element.addEventListener("mouseleave", function() {
                cursor.classList.remove("cursor-hover");
            });
        });
    });
};
// parallax
const parallax = ()=>{
    const simpleParallax = __webpack_require__(1614);
    var s_parallax = document.getElementsByClassName("wp-post-image");
    new simpleParallax(s_parallax);
};
// Header
const stickyNav = ()=>{
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header");
    sticky.forEach((sticky)=>{
        if (sticky) {
            if (offset > 100) {
                sticky.classList.add("fixed");
                document.querySelector("body").classList.remove("background-enabled");
            } else {
                sticky.classList.remove("fixed");
                document.querySelector("body").classList.add("background-enabled");
            }
        }
    });
};
const createSkillsDot = ()=>{
    var skills_dotted = document.querySelectorAll(".skills .progress");
    skills_dotted.forEach((skill)=>{
        skill.insertAdjacentHTML("beforeend", '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let percentage = skill.getElementsByClassName("percentage")[0];
        percentage.insertAdjacentHTML("beforeend", '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
        let width = skill.clientWidth, da = percentage.getElementsByClassName("da")[0];
        da.style.width = `${width}px`;
    });
};
const dotResize = ()=>{
    window.addEventListener("resize", ()=>{
        var skills_dotted = document.querySelectorAll(".skills-list.dotted .progress");
        skills_dotted.forEach((skill)=>{
            let width = skill.clientWidth, da = skill.getElementsByClassName("da")[0];
            da.style.width = `${width + 1}px`;
        });
    });
};


/***/ })

};
;