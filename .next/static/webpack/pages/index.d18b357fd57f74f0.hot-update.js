"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index */ \"./components/index.js\");\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/context */ \"./context/context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Internal Import\n\n\nconst index = ()=>{\n    _s();\n    const { TRADING_BOT } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_4__.CONTEXT);\n    // State Variable\n    const [activeComponent, setActiveComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Home\");\n    const [membershipType, setMembershipType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Premium\");\n    const [authBackEndID, setAuthBackEndID] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [networks, setNetworks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [networkName, setNetworkName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // Notification\n    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(msg, {\n            duration: 2000\n        });\n    const notifySuccess = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(msg, {\n            duration: 2000\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.MovingSubmenu, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Preloader, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            activeComponent == \"Signup\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Signup, {\n                axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                setActiveComponent: setActiveComponent,\n                notifyError: notifyError,\n                notifySuccess: notifySuccess\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined) : // Home\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"techwave_fn_wrapper\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"techwave_fn_wrap\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Search, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                            networkName: networkName,\n                            setActiveComponent: setActiveComponent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.SideBar, {\n                            setActiveComponent: setActiveComponent\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, undefined),\n                        activeComponent == \"Home\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Home, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Trade Tokens\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.TradeTokens, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Top Exchange Tokens\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.TopExchangeTokens, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Networks\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Networks, {\n                            networkName: networkName,\n                            setNetworkName: setNetworkName,\n                            notifyError: notifyError,\n                            notifySuccess: notifySuccess\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Add Network\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.AddNetwork, {\n                            axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Trading\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Trading, {\n                            axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Pricing\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Price, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Profile\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Profile, {\n                            setAc: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Setting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Setting, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 17\n                        }, undefined) : activeComponent == \"Add Token Pair\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.AddTokenPair, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 17\n                        }, undefined) : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined),\n            activeComponent == \"Login\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_index__WEBPACK_IMPORTED_MODULE_3__.Login, {\n                setActiveComponent: setActiveComponent,\n                axios: axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                notifyError: notifyError,\n                notifySuccess: notifySuccess\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, undefined) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"fsI/LVkhyCWzAm3GEu8rTgOSmSQ=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUNoQztBQUNJO0FBQ007QUFFcEMsa0JBQWtCO0FBRThGO0FBQ3RFO0FBRTFDLE1BQU0yQixRQUFROztJQUNaLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUd6QixpREFBVUEsQ0FBQ3VCLHFEQUFPQTtJQUUxQyxpQkFBaUI7SUFDakIsTUFBSyxDQUFDRyxpQkFBZ0JDLG1CQUFtQixHQUFHN0IsK0NBQVFBLENBQUM7SUFDckQsTUFBSyxDQUFDOEIsZ0JBQWVDLGtCQUFrQixHQUFHL0IsK0NBQVFBLENBQUM7SUFDbkQsTUFBSyxDQUFDZ0MsZUFBY0MsaUJBQWlCLEdBQUdqQywrQ0FBUUEsQ0FBQztJQUNqRCxNQUFLLENBQUNrQyxVQUFTQyxZQUFZLEdBQUduQywrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3hDLE1BQUssQ0FBQ29DLGFBQVlDLGVBQWUsR0FBR3JDLCtDQUFRQTtJQUU1QyxlQUFlO0lBQ2YsTUFBTXNDLGNBQWMsQ0FBQ0MsTUFBUWxDLDZEQUFXLENBQUNrQyxLQUFJO1lBQUNFLFVBQVM7UUFBSTtJQUMzRCxNQUFNQyxnQkFBZ0IsQ0FBQ0gsTUFBT2xDLCtEQUFhLENBQUNrQyxLQUFJO1lBQUNFLFVBQVM7UUFBSTtJQUM5RCxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDbkMsNERBQWFBOzs7OzswQkFDZCw4REFBQ0Msd0RBQVNBOzs7OztZQUVSa0IsbUJBQW1CLHlCQUNqQiw4REFBQ1QscURBQU1BO2dCQUFDaEIsT0FBUUEsNkNBQUtBO2dCQUFFMEIsb0JBQW9CQTtnQkFDM0NTLGFBQWFBO2dCQUFhSSxlQUFlQTs7Ozs7NEJBRXpDLE9BQU87MEJBQ1AsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNmLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNyQyxxREFBTUE7Ozs7O3NDQUNQLDhEQUFDRixxREFBTUE7NEJBQ1A4QixhQUFhQTs0QkFDYlAsb0JBQW9CQTs7Ozs7O3NDQUVwQiw4REFBQ2xCLHNEQUFPQTs0QkFDUGtCLG9CQUFvQkE7Ozs7Ozt3QkFFbkJELG1CQUFpQix1QkFDZiw4REFBQ2hCLG1EQUFJQTs7Ozt3Q0FDTGdCLG1CQUFpQiwrQkFDakIsOERBQUNmLDBEQUFXQTs7Ozt3Q0FDWmUsbUJBQWlCLHNDQUNqQiw4REFBQ2QsZ0VBQWlCQTs7Ozt3Q0FDbEJjLG1CQUFpQiwyQkFDakIsOERBQUNiLHVEQUFRQTs0QkFDVHFCLGFBQWFBOzRCQUNiQyxnQkFBZ0JBOzRCQUNoQkMsYUFBYUE7NEJBQ2JJLGVBQWVBOzs7Ozt3Q0FDZGQsbUJBQW1CLDhCQUNwQiw4REFBQ1oseURBQVVBOzRCQUFDYixPQUFPQSw2Q0FBS0E7Ozs7O3dDQUN4QnlCLG1CQUFpQiwwQkFDakIsOERBQUNMLHNEQUFPQTs0QkFBQ3BCLE9BQU9BLDZDQUFLQTs7Ozs7d0NBRXJCeUIsbUJBQWlCLDBCQUNqQiw4REFBQ1gsb0RBQUtBOzs7O3dDQUNOVyxtQkFBaUIsMEJBQ2pCLDhEQUFDUixzREFBT0E7NEJBQUMwQixLQUFLOzs7Ozt3Q0FDZGxCLG1CQUFpQiwwQkFDakIsOERBQUNQLHNEQUFPQTs7Ozt3Q0FDUk8sbUJBQWlCLGlDQUNqQiw4REFBQ04sMkRBQVlBOzs7O3dDQUViOzs7Ozs7Ozs7Ozs7WUFRUk0sbUJBQWlCLHdCQUNmLDhEQUFDVixvREFBS0E7Z0JBQUNXLG9CQUFvQkE7Z0JBQW9CMUIsT0FBU0EsNkNBQUtBO2dCQUMzRG1DLGFBQWFBO2dCQUFhSSxlQUFlQTs7Ozs7NEJBRTNDOzs7Ozs7O0FBS1Y7R0E1RU1oQjtBQThFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7ZXRoZXJzfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG4vLyBJbnRlcm5hbCBJbXBvcnRcclxuaW1wb3J0IHtIZWFkZXIsRm9vdGVyLFNlYXJjaCxNb3ZpbmdTdWJtZW51LFByZWxvYWRlcixTaWRlQmFyLEhvbWUsVHJhZGVUb2tlbnMsVG9wRXhjaGFuZ2VUb2tlbnNcclxuLE5ldHdvcmtzLEFkZE5ldHdvcmssUHJpY2UsTG9naW4sU2lnbnVwLFByb2ZpbGUsU2V0dGluZyxBZGRUb2tlblBhaXIsVHJhZGluZyxMb2FkZXIsfSBmcm9tIFwiLi4vY29tcG9uZW50cy9pbmRleFwiXHJcbmltcG9ydCB7Q09OVEVYVH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiXHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB7IFRSQURJTkdfQk9UIH0gPSB1c2VDb250ZXh0KENPTlRFWFQpXHJcblxyXG4gIC8vIFN0YXRlIFZhcmlhYmxlXHJcbiAgY29uc3RbYWN0aXZlQ29tcG9uZW50LHNldEFjdGl2ZUNvbXBvbmVudF0gPSB1c2VTdGF0ZShcIkhvbWVcIilcclxuICBjb25zdFttZW1iZXJzaGlwVHlwZSxzZXRNZW1iZXJzaGlwVHlwZV0gPSB1c2VTdGF0ZShcIlByZW1pdW1cIilcclxuICBjb25zdFthdXRoQmFja0VuZElELHNldEF1dGhCYWNrRW5kSURdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdFtuZXR3b3JrcyxzZXROZXR3b3Jrc10gPSB1c2VTdGF0ZSh7fSlcclxuICBjb25zdFtuZXR3b3JrTmFtZSxzZXROZXR3b3JrTmFtZV0gPSB1c2VTdGF0ZSgpXHJcblxyXG4gIC8vIE5vdGlmaWNhdGlvblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLHtkdXJhdGlvbjoyMDAwfSk7XHJcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9IChtc2cpID0+dG9hc3Quc3VjY2Vzcyhtc2cse2R1cmF0aW9uOjIwMDB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE1vdmluZ1N1Ym1lbnUvPlxyXG4gICAgICA8UHJlbG9hZGVyLz5cclxuICAgICAge1xyXG4gICAgICAgIGFjdGl2ZUNvbXBvbmVudCA9PSBcIlNpZ251cFwiID8gKFxyXG4gICAgICAgICAgPFNpZ251cCBheGlvcyA9e2F4aW9zfSBzZXRBY3RpdmVDb21wb25lbnQ9e3NldEFjdGl2ZUNvbXBvbmVudH0gXHJcbiAgICAgICAgICBub3RpZnlFcnJvcj17bm90aWZ5RXJyb3J9IG5vdGlmeVN1Y2Nlc3M9e25vdGlmeVN1Y2Nlc3N9IC8+XHJcbiAgICAgICAgKTooXHJcbiAgICAgICAgICAvLyBIb21lXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2h3YXZlX2ZuX3dyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaHdhdmVfZm5fd3JhcFwiPlxyXG4gICAgICAgICAgICA8U2VhcmNoLz5cclxuICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICBuZXR3b3JrTmFtZT17bmV0d29ya05hbWV9XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZUNvbXBvbmVudD17c2V0QWN0aXZlQ29tcG9uZW50fS8+XHJcblxyXG4gICAgICAgICAgICA8U2lkZUJhclxyXG4gICAgICAgICAgICAgc2V0QWN0aXZlQ29tcG9uZW50PXtzZXRBY3RpdmVDb21wb25lbnR9XHJcbiAgICAgICAgICAgIC8+e1xyXG4gICAgICAgICAgICAgIGFjdGl2ZUNvbXBvbmVudD09XCJIb21lXCI/KFxyXG4gICAgICAgICAgICAgICAgPEhvbWUvPlxyXG4gICAgICAgICAgICAgICk6YWN0aXZlQ29tcG9uZW50PT1cIlRyYWRlIFRva2Vuc1wiPyhcclxuICAgICAgICAgICAgICAgIDxUcmFkZVRva2Vucy8+XHJcbiAgICAgICAgICAgICAgKTphY3RpdmVDb21wb25lbnQ9PVwiVG9wIEV4Y2hhbmdlIFRva2Vuc1wiPyhcclxuICAgICAgICAgICAgICAgIDxUb3BFeGNoYW5nZVRva2Vucy8+XHJcbiAgICAgICAgICAgICAgKTphY3RpdmVDb21wb25lbnQ9PVwiTmV0d29ya3NcIj8oXHJcbiAgICAgICAgICAgICAgICA8TmV0d29ya3MgXHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrTmFtZT17bmV0d29ya05hbWV9XHJcbiAgICAgICAgICAgICAgICBzZXROZXR3b3JrTmFtZT17c2V0TmV0d29ya05hbWV9XHJcbiAgICAgICAgICAgICAgICBub3RpZnlFcnJvcj17bm90aWZ5RXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgbm90aWZ5U3VjY2Vzcz17bm90aWZ5U3VjY2Vzc30vPlxyXG4gICAgICAgICAgICAgICk6IGFjdGl2ZUNvbXBvbmVudCA9PSBcIkFkZCBOZXR3b3JrXCIgPyhcclxuICAgICAgICAgICAgICAgIDxBZGROZXR3b3JrIGF4aW9zPXtheGlvc30vPlxyXG4gICAgICAgICAgICAgICk6YWN0aXZlQ29tcG9uZW50PT1cIlRyYWRpbmdcIj8oXHJcbiAgICAgICAgICAgICAgICA8VHJhZGluZyBheGlvcz17YXhpb3N9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk6YWN0aXZlQ29tcG9uZW50PT1cIlByaWNpbmdcIj8oXHJcbiAgICAgICAgICAgICAgICA8UHJpY2UvPlxyXG4gICAgICAgICAgICAgICk6YWN0aXZlQ29tcG9uZW50PT1cIlByb2ZpbGVcIj8oXHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZSBzZXRBYy8+XHJcbiAgICAgICAgICAgICAgKTphY3RpdmVDb21wb25lbnQ9PVwiU2V0dGluZ1wiPyhcclxuICAgICAgICAgICAgICAgIDxTZXR0aW5nLz5cclxuICAgICAgICAgICAgICApOmFjdGl2ZUNvbXBvbmVudD09XCJBZGQgVG9rZW4gUGFpclwiPyhcclxuICAgICAgICAgICAgICAgIDxBZGRUb2tlblBhaXIvPlxyXG4gICAgICAgICAgICAgICk6KFxyXG4gICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBhY3RpdmVDb21wb25lbnQ9PVwiTG9naW5cIj8oXHJcbiAgICAgICAgICA8TG9naW4gc2V0QWN0aXZlQ29tcG9uZW50PXtzZXRBY3RpdmVDb21wb25lbnR9IGF4aW9zID0ge2F4aW9zfSBcclxuICAgICAgICAgICAgbm90aWZ5RXJyb3I9e25vdGlmeUVycm9yfSBub3RpZnlTdWNjZXNzPXtub3RpZnlTdWNjZXNzfS8+XHJcbiAgICAgICAgKTooXHJcbiAgICAgICAgICBcIlwiXHJcbiAgICAgICAgKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwiYXhpb3MiLCJldGhlcnMiLCJ0b2FzdCIsIkhlYWRlciIsIkZvb3RlciIsIlNlYXJjaCIsIk1vdmluZ1N1Ym1lbnUiLCJQcmVsb2FkZXIiLCJTaWRlQmFyIiwiSG9tZSIsIlRyYWRlVG9rZW5zIiwiVG9wRXhjaGFuZ2VUb2tlbnMiLCJOZXR3b3JrcyIsIkFkZE5ldHdvcmsiLCJQcmljZSIsIkxvZ2luIiwiU2lnbnVwIiwiUHJvZmlsZSIsIlNldHRpbmciLCJBZGRUb2tlblBhaXIiLCJUcmFkaW5nIiwiTG9hZGVyIiwiQ09OVEVYVCIsImluZGV4IiwiVFJBRElOR19CT1QiLCJhY3RpdmVDb21wb25lbnQiLCJzZXRBY3RpdmVDb21wb25lbnQiLCJtZW1iZXJzaGlwVHlwZSIsInNldE1lbWJlcnNoaXBUeXBlIiwiYXV0aEJhY2tFbmRJRCIsInNldEF1dGhCYWNrRW5kSUQiLCJuZXR3b3JrcyIsInNldE5ldHdvcmtzIiwibmV0d29ya05hbWUiLCJzZXROZXR3b3JrTmFtZSIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2V0QWMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});