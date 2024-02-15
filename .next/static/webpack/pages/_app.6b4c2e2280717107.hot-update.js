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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT: function() { return /* binding */ CONTEXT; },\n/* harmony export */   PROVIDER: function() { return /* binding */ PROVIDER; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// Internal Import\nconst CONTEXT = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst PROVIDER = (param)=>{\n    let { children } = param;\n    _s();\n    const TRADING_BOT = \"Trading Bot\";\n    const [topTokens, setTopTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tradingCount, setTradingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let length;\n    // Load\n    const LOAD_INITIAL_DATA = async ()=>{\n        try {\n            // data provider of tokens : uniswap subgraph v3\n            // https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\n            const URL = \"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\";\n            const query = \"\\n            {\\n                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){\\n                    id\\n                    name\\n                    symbol\\n                    decimals\\n                    volume\\n                    volumeUSD\\n                    totalSupply\\n                    feesUSD\\n                    txCount\\n                    poolCount\\n                    totalValueLockedUSD\\n                    totalValueLocked\\n                    derivedETH\\n                }\\n            }\\n            \";\n            const axiosData = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(URL, {\n                query: query\n            });\n            setTopTokens(axiosData.data.data.tokens);\n        // console.log(\"axiosData\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        LOAD_INITIAL_DATA();\n    }, []);\n    // UniSwap ABI and Address\n    const routerAddress = \"0xE592427A0AEce92De3Edee1F18E0157C05861564\"; // Uniswap Router\n    const quoterAddress = \"0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6\"; // Uniswap Quoter\n    const ROUTER = (PROVIDER)=>{\n        const router = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(routerAddress, [\n            \"function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)\"\n        ], PROVIDER);\n        return router;\n    };\n    const QUOTER = (PROVIDER)=>{\n        const quoter = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(quoterAddress, [\n            \"function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) public view returns (uint256 amountOut)\"\n        ], PROVIDER);\n        return quoter;\n    };\n    const TOKEN = (PROVIDER, TOKEN_B)=>{\n        const token = new ethers__WEBPACK_IMPORTED_MODULE_3__.ethers.Contract(TOKEN_B, [\n            \"function approve(address spender, uint256 amount) external returns (bool)\",\n            \"function allowance(address owner, address spender) public view returns (uint256)\"\n        ], PROVIDER);\n        return token;\n    };\n    // Buy\n    const buyTokens = async (tokenAddress1, tokenAddress2, fee, address, buyAmount, router)=>{\n        const deadline = Math.floor(Date.now() / 1000) + 600;\n        const transaction = router.exactInputSingle([\n            tokenAddress1,\n            tokenAddress2,\n            fee,\n            address,\n            deadline,\n            buyAmount,\n            0,\n            0\n        ], {\n            value: buyAmount\n        });\n        transaction.wait();\n        console.log(transaction.hash);\n        return transaction.hash;\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // sellTokens\n    const sellTokens = async (tokenAddress1, tokenAddress2, fee, userAddress, buyAmount, router, sellAmount, account)=>{\n        try {\n            const token = TOKEN(account, tokenAddress2);\n            const allowance = await token.allowance(userAddress, routerAddress);\n            console.log(\"Current allow\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // Trading\n    const trading = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CONTEXT.Provider, {\n        value: {\n            TRADING_BOT,\n            topTokens,\n            trading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\context\\\\context.js\",\n        lineNumber: 150,\n        columnNumber: 13\n    }, undefined);\n    ;\n};\n_s(PROVIDER, \"Kyxx0plWGSnmIg4VYPQ+M+u3YW0=\");\n_c = PROVIDER;\nvar _c;\n$RefreshReg$(_c, \"PROVIDER\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUSw4REFBQ25CLFFBQVFzRCxRQUFRO1FBQ3JCVCxPQUFPO1lBQUV6QztZQUFhQztZQUFXZ0Q7UUFBUztrQkFDNUNsRDs7Ozs7OztBQUVMLEVBQUM7R0FsSldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvY29udGV4dC5qcz83MmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gSW50ZXJuYWwgSW1wb3J0XHJcbmV4cG9ydCBjb25zdCBDT05URVhUID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBST1ZJREVSID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgVFJBRElOR19CT1QgPSBcIlRyYWRpbmcgQm90XCI7XHJcbiAgICBjb25zdCBbdG9wVG9rZW5zLCBzZXRUb3BUb2tlbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyYWRpbmdDb3VudCwgc2V0VHJhZGluZ0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBsZXQgbGVuZ3RoO1xyXG5cclxuICAgIC8vIExvYWRcclxuICAgIGNvbnN0IExPQURfSU5JVElBTF9EQVRBID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGRhdGEgcHJvdmlkZXIgb2YgdG9rZW5zIDogdW5pc3dhcCBzdWJncmFwaCB2M1xyXG4gICAgICAgICAgICAvLyBodHRwczovL2FwaS50aGVncmFwaC5jb20vc3ViZ3JhcGhzL25hbWUvdW5pc3dhcC91bmlzd2FwLXYzXHJcbiAgICAgICAgICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlZ3JhcGguY29tL3N1YmdyYXBocy9uYW1lL3VuaXN3YXAvdW5pc3dhcC12M1wiO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zKG9yZGVyQnk6IHZvbHVtZVVTRCwgb3JkZXJEaXJlY3Rpb246IGRlc2MsIGZpcnN0OjIwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVxyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVVTRFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU3VwcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlc1VTRFxyXG4gICAgICAgICAgICAgICAgICAgIHR4Q291bnRcclxuICAgICAgICAgICAgICAgICAgICBwb29sQ291bnRcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFZhbHVlTG9ja2VkVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxWYWx1ZUxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcml2ZWRFVEhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBjb25zdCBheGlvc0RhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwgeyBxdWVyeTogcXVlcnkgfSk7XHJcbiAgICAgICAgICAgIHNldFRvcFRva2VucyhheGlvc0RhdGEuZGF0YS5kYXRhLnRva2Vucyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXhpb3NEYXRhXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgTE9BRF9JTklUSUFMX0RBVEEoKTtcclxuICAgIH0sW10pO1xyXG5cclxuLy8gVW5pU3dhcCBBQkkgYW5kIEFkZHJlc3NcclxuY29uc3Qgcm91dGVyQWRkcmVzcyA9IFwiMHhFNTkyNDI3QTBBRWNlOTJEZTNFZGVlMUYxOEUwMTU3QzA1ODYxNTY0XCI7IC8vIFVuaXN3YXAgUm91dGVyXHJcbmNvbnN0IHF1b3RlckFkZHJlc3MgPSBcIjB4YjI3MzA4ZjlGOTBENjA3NDYzYmIzM2VBMUJlQmI0MUMyN0NFNUFCNlwiOyAvLyBVbmlzd2FwIFF1b3RlclxyXG5cclxuY29uc3QgUk9VVEVSID0gKFBST1ZJREVSKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgIHJvdXRlckFkZHJlc3MsXHJcbiAgICBbXHJcbiAgICAgIFwiZnVuY3Rpb24gZXhhY3RJbnB1dFNpbmdsZSgoYWRkcmVzcyB0b2tlbkluLCBhZGRyZXNzIHRva2VuT3V0LCB1aW50MjQgZmVlLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBkZWFkbGluZSwgdWludDI1NiBhbW91bnRJbiwgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtLCB1aW50MTYwIHNxcnRQcmljZUxpbWl0WDk2KSkgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dClcIixcclxuICAgIF0sXHJcbiAgICBQUk9WSURFUlxyXG4gICk7XHJcbiAgcmV0dXJuIHJvdXRlcjtcclxufTtcclxuXHJcbmNvbnN0IFFVT1RFUiA9IChQUk9WSURFUikgPT4ge1xyXG4gIGNvbnN0IHF1b3RlciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICBxdW90ZXJBZGRyZXNzLFxyXG4gICAgW1xyXG4gICAgICBcImZ1bmN0aW9uIHF1b3RlRXhhY3RJbnB1dFNpbmdsZShhZGRyZXNzIHRva2VuSW4sIGFkZHJlc3MgdG9rZW5PdXQsIHVpbnQyNCBmZWUsIHVpbnQyNTYgYW1vdW50SW4sIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTYpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KVwiLFxyXG4gICAgXSxcclxuICAgIFBST1ZJREVSXHJcbiAgKTtcclxuICByZXR1cm4gcXVvdGVyO1xyXG59O1xyXG5jb25zdCBUT0tFTiA9IChQUk9WSURFUiwgVE9LRU5fQikgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgIFRPS0VOX0IsXHJcbiAgICBbXHJcbiAgICAgIFwiZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKVwiLFxyXG4gICAgICBcImZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYpXCIsXHJcbiAgICBdLFxyXG4gICAgUFJPVklERVJcclxuICApO1xyXG4gIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblxyXG4gICAgLy8gQnV5XHJcbiAgICBjb25zdCBidXlUb2tlbnMgPSBhc3luYyAoXHJcbiAgICAgICAgdG9rZW5BZGRyZXNzMSxcclxuICAgICAgICB0b2tlbkFkZHJlc3MyLFxyXG4gICAgICAgIGZlZSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIGJ1eUFtb3VudCxcclxuICAgICAgICByb3V0ZXJcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApKzYwMDtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHJvdXRlci5leGFjdElucHV0U2luZ2xlKFxyXG4gICAgICAgICAgICBbdG9rZW5BZGRyZXNzMSx0b2tlbkFkZHJlc3MyLGZlZSxhZGRyZXNzLGRlYWRsaW5lLGJ1eUFtb3VudCwwLDBdLFxyXG4gICAgICAgICAgICB7dmFsdWU6YnV5QW1vdW50fVxyXG4gICAgICAgIClcclxuICAgICAgICB0cmFuc2FjdGlvbi53YWl0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbi5oYXNoKVxyXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbi5oYXNoXHJcblxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZWxsVG9rZW5zXHJcbiAgICBjb25zdCBzZWxsVG9rZW5zID0gYXN5bmMgKFxyXG4gICAgICAgIHRva2VuQWRkcmVzczEsXHJcbiAgICAgICAgdG9rZW5BZGRyZXNzMixcclxuICAgICAgICBmZWUsXHJcbiAgICAgICAgdXNlckFkZHJlc3MsXHJcbiAgICAgICAgYnV5QW1vdW50LFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgIGFjY291bnRcclxuICAgICkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gVE9LRU4oYWNjb3VudCx0b2tlbkFkZHJlc3MyKVxyXG4gICAgICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCB0b2tlbi5hbGxvd2FuY2UodXNlckFkZHJlc3Mscm91dGVyQWRkcmVzcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgYWxsb3dgKVxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUcmFkaW5nXHJcbiAgICBjb25zdCB0cmFkaW5nID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoPENPTlRFWFQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17eyBUUkFESU5HX0JPVCwgdG9wVG9rZW5zLCB0cmFkaW5nLCB9fVxyXG4gICAgPntjaGlsZHJlbn08L0NPTlRFWFQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG47fSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXRoZXJzIiwiYXhpb3MiLCJDT05URVhUIiwiY3JlYXRlQ29udGV4dCIsIlBST1ZJREVSIiwiY2hpbGRyZW4iLCJUUkFESU5HX0JPVCIsInRvcFRva2VucyIsInNldFRvcFRva2VucyIsInRyYWRpbmdDb3VudCIsInNldFRyYWRpbmdDb3VudCIsImxvYWRlciIsInNldExvYWRlciIsImxlbmd0aCIsIkxPQURfSU5JVElBTF9EQVRBIiwiVVJMIiwicXVlcnkiLCJheGlvc0RhdGEiLCJwb3N0IiwiZGF0YSIsInRva2VucyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJvdXRlckFkZHJlc3MiLCJxdW90ZXJBZGRyZXNzIiwiUk9VVEVSIiwicm91dGVyIiwiQ29udHJhY3QiLCJRVU9URVIiLCJxdW90ZXIiLCJUT0tFTiIsIlRPS0VOX0IiLCJ0b2tlbiIsImJ1eVRva2VucyIsInRva2VuQWRkcmVzczEiLCJ0b2tlbkFkZHJlc3MyIiwiZmVlIiwiYWRkcmVzcyIsImJ1eUFtb3VudCIsImRlYWRsaW5lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsInRyYW5zYWN0aW9uIiwiZXhhY3RJbnB1dFNpbmdsZSIsInZhbHVlIiwid2FpdCIsImhhc2giLCJzZWxsVG9rZW5zIiwidXNlckFkZHJlc3MiLCJzZWxsQW1vdW50IiwiYWNjb3VudCIsImFsbG93YW5jZSIsInRyYWRpbmciLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/context.js\n"));

/***/ })

});