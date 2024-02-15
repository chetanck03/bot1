"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT: function() { return /* binding */ CONTEXT; },\n/* harmony export */   PROVIDER: function() { return /* binding */ PROVIDER; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal Import\nconst CONTEXT = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst PROVIDER = (param)=>{\n    let { children } = param;\n    _s();\n    const TRADING_BOT = \"Trading Bot\";\n    const [topTokens, setTopTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tradingCount, setTradingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let length;\n    // Load\n    const LOAD_INITIAL_DATA = async ()=>{\n        try {\n            // data provider of tokens : uniswap subgraph v3\n            // https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\n            const URL = \"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\";\n            const query = \"\\n            {\\n                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){\\n                    id\\n                    name\\n                    symbol\\n                    decimals\\n                    volume\\n                    volumeUSD\\n                    totalSupply\\n                    feesUSD\\n                    txCount\\n                    poolCount\\n                    totalValueLockedUSD\\n                    totalValueLocked\\n                    derivedETH\\n                }\\n            }\\n            \";\n            const axiosData = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(URL, {\n                query: query\n            });\n            setTopTokens(axiosData.data.data.tokens);\n        // console.log(\"axiosData\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        LOAD_INITIAL_DATA();\n    }, []);\n    // Un\n    // Buy\n    const buyTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // sellTokens\n    const sellTokens = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // Trading\n    const trading = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CONTEXT.Provider, {\n        value: {\n            TRADING_BOT,\n            topTokens,\n            trading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\context\\\\context.js\",\n        lineNumber: 85,\n        columnNumber: 13\n    }, undefined);\n    ;\n};\n_s(PROVIDER, \"Kyxx0plWGSnmIg4VYPQ+M+u3YW0=\");\n_c = PROVIDER;\nvar _c;\n$RefreshReg$(_c, \"PROVIDER\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ25CO0FBQ047QUFFMUIsa0JBQWtCO0FBQ1gsTUFBTUssd0JBQVVMLDBEQUFtQixHQUFHO0FBRXRDLE1BQU1PLFdBQVc7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ2pDLE1BQU1DLGNBQWM7SUFDcEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFDN0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBRXJDLElBQUllO0lBRUosT0FBTztJQUNQLE1BQU1DLG9CQUFvQjtRQUN0QixJQUFJO1lBQ0EsZ0RBQWdEO1lBQ2hELDZEQUE2RDtZQUM3RCxNQUFNQyxNQUFNO1lBQ1osTUFBTUMsUUFBUztZQW1CZixNQUFNQyxZQUFZLE1BQU1oQixrREFBVSxDQUFDYyxLQUFLO2dCQUFFQyxPQUFPQTtZQUFNO1lBQ3ZEUixhQUFhUyxVQUFVRSxJQUFJLENBQUNBLElBQUksQ0FBQ0MsTUFBTTtRQUN2Qyw0QkFBNEI7UUFDaEMsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUVBdEIsZ0RBQVNBLENBQUM7UUFDTmU7SUFDSixHQUFFLEVBQUU7SUFFSixLQUFLO0lBRUwsTUFBTTtJQUNOLE1BQU1VLFlBQVk7UUFDZCxJQUFJLENBRUosRUFBRSxPQUFPSCxPQUFPO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFFaEI7SUFDSjtJQUVBLGFBQWE7SUFDYixNQUFNSSxhQUFhO1FBQ2YsSUFBSSxDQUVKLEVBQUUsT0FBT0osT0FBTztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBRWhCO0lBQ0o7SUFFQSxVQUFVO0lBQ1YsTUFBTUssVUFBVTtRQUNaLElBQUksQ0FFSixFQUFFLE9BQU9MLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBRUEscUJBQVEsOERBQUNuQixRQUFReUIsUUFBUTtRQUNyQkMsT0FBTztZQUFFdEI7WUFBYUM7WUFBV21CO1FBQVM7a0JBQzVDckI7Ozs7Ozs7QUFFTCxFQUFDO0dBakZXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0L2NvbnRleHQuanM/NzJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIEludGVybmFsIEltcG9ydFxyXG5leHBvcnQgY29uc3QgQ09OVEVYVCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBQUk9WSURFUiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFRSQURJTkdfQk9UID0gXCJUcmFkaW5nIEJvdFwiO1xyXG4gICAgY29uc3QgW3RvcFRva2Vucywgc2V0VG9wVG9rZW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmFkaW5nQ291bnQsIHNldFRyYWRpbmdDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgbGV0IGxlbmd0aDtcclxuXHJcbiAgICAvLyBMb2FkXHJcbiAgICBjb25zdCBMT0FEX0lOSVRJQUxfREFUQSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBkYXRhIHByb3ZpZGVyIG9mIHRva2VucyA6IHVuaXN3YXAgc3ViZ3JhcGggdjNcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9hcGkudGhlZ3JhcGguY29tL3N1YmdyYXBocy9uYW1lL3VuaXN3YXAvdW5pc3dhcC12M1xyXG4gICAgICAgICAgICBjb25zdCBVUkwgPSBcImh0dHBzOi8vYXBpLnRoZWdyYXBoLmNvbS9zdWJncmFwaHMvbmFtZS91bmlzd2FwL3VuaXN3YXAtdjNcIjtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRva2VucyhvcmRlckJ5OiB2b2x1bWVVU0QsIG9yZGVyRGlyZWN0aW9uOiBkZXNjLCBmaXJzdDoyMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHNcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWVcclxuICAgICAgICAgICAgICAgICAgICB2b2x1bWVVU0RcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFN1cHBseVxyXG4gICAgICAgICAgICAgICAgICAgIGZlZXNVU0RcclxuICAgICAgICAgICAgICAgICAgICB0eENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgcG9vbENvdW50XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxWYWx1ZUxvY2tlZFVTRFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsVmFsdWVMb2NrZWRcclxuICAgICAgICAgICAgICAgICAgICBkZXJpdmVkRVRIXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYDtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3NEYXRhID0gYXdhaXQgYXhpb3MucG9zdChVUkwsIHsgcXVlcnk6IHF1ZXJ5IH0pO1xyXG4gICAgICAgICAgICBzZXRUb3BUb2tlbnMoYXhpb3NEYXRhLmRhdGEuZGF0YS50b2tlbnMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF4aW9zRGF0YVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIExPQURfSU5JVElBTF9EQVRBKCk7XHJcbiAgICB9LFtdKTtcclxuXHJcbiAgICAvLyBVblxyXG5cclxuICAgIC8vIEJ1eVxyXG4gICAgY29uc3QgYnV5VG9rZW5zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIHNlbGxUb2tlbnNcclxuICAgIGNvbnN0IHNlbGxUb2tlbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVHJhZGluZ1xyXG4gICAgY29uc3QgdHJhZGluZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKDxDT05URVhULlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3sgVFJBRElOR19CT1QsIHRvcFRva2VucywgdHJhZGluZywgfX1cclxuICAgID57Y2hpbGRyZW59PC9DT05URVhULlByb3ZpZGVyPlxyXG4gICAgKTtcclxuO30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF4aW9zIiwiQ09OVEVYVCIsImNyZWF0ZUNvbnRleHQiLCJQUk9WSURFUiIsImNoaWxkcmVuIiwiVFJBRElOR19CT1QiLCJ0b3BUb2tlbnMiLCJzZXRUb3BUb2tlbnMiLCJ0cmFkaW5nQ291bnQiLCJzZXRUcmFkaW5nQ291bnQiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJsZW5ndGgiLCJMT0FEX0lOSVRJQUxfREFUQSIsIlVSTCIsInF1ZXJ5IiwiYXhpb3NEYXRhIiwicG9zdCIsImRhdGEiLCJ0b2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJidXlUb2tlbnMiLCJzZWxsVG9rZW5zIiwidHJhZGluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/context.js\n"));

/***/ })

});