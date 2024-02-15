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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTEXT: () => (/* binding */ CONTEXT),\n/* harmony export */   PROVIDER: () => (/* binding */ PROVIDER)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__]);\n([ethers__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Internal Import\nconst CONTEXT = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nconst PROVIDER = ({ children })=>{\n    const TRADING_BOT = \"Trading Bot\";\n    const [topTokens, setTopTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [tradingCount, setTradingCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let length;\n    // Load\n    const LOAD_INITIAL_DATA = async ()=>{\n        try {\n            // data provider of tokens : uniswap subgraph v3\n            // https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\n            const URL = \"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3\";\n            const query = `\r\n            {\r\n                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){\r\n                    id\r\n                    name\r\n                    symbol\r\n                    decimals\r\n                    volume\r\n                    volumeUSD\r\n                    totalSupply\r\n                    feesUSD\r\n                    txCount\r\n                    poolCount\r\n                    totalValueLockedUSD\r\n                    totalValueLocked\r\n                    derivedETH\r\n                }\r\n            }\r\n            `;\n            const axiosData = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(URL, {\n                query: query\n            });\n            setTopTokens(axiosData.data.data.tokens);\n        // console.log(\"axiosData\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        LOAD_INITIAL_DATA();\n    }, []);\n    // UniSwap ABI and Address\n    const routerAddress = \"0xE592427A0AEce92De3Edee1F18E0157C05861564\"; // Uniswap Router\n    const quoterAddress = \"0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6\"; // Uniswap Quoter\n    const ROUTER = (PROVIDER)=>{\n        const router = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(routerAddress, [\n            \"function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)\"\n        ], PROVIDER);\n        return router;\n    };\n    const QUOTER = (PROVIDER)=>{\n        const quoter = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(quoterAddress, [\n            \"function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) public view returns (uint256 amountOut)\"\n        ], PROVIDER);\n        return quoter;\n    };\n    const TOKEN = (PROVIDER, TOKEN_B)=>{\n        const token = new ethers__WEBPACK_IMPORTED_MODULE_2__.ethers.Contract(TOKEN_B, [\n            \"function approve(address spender, uint256 amount) external returns (bool)\",\n            \"function allowance(address owner, address spender) public view returns (uint256)\"\n        ], PROVIDER);\n        return token;\n    };\n    // Buy\n    const buyTokens = async (tokenAddress1, tokenAddress2, fee, address, buyAmount, router)=>{\n        const deadline = Math.floor(Date.now() / 1000) + 600;\n        const transaction = router.exactInputSingle([\n            tokenAddress1,\n            tokenAddress2,\n            fee,\n            address,\n            deadline,\n            buyAmount,\n            0,\n            0\n        ], {\n            value: buyAmount\n        });\n        transaction.wait();\n        console.log(transaction.hash);\n        return transaction.hash;\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    // sellTokens\n    const sellTokens = async (tokenAddress1, tokenAddress2, fee, userAddress, buyAmount, router, sellAmount, account)=>{\n        try {\n            const token = TOKEN(account, tokenAddress2);\n            const allowance = await token.allowance(userAddress, routerAddress);\n            console.log(`Current allowance: ${allowance}`);\n            if (allowance < sellAmount) {\n                console.log(\"Approving Send (Bulk approve in production)\");\n                const atx = await token.approve(routerAddress, sellAmount);\n                await atx.wait();\n            }\n            const deadline = Math.floor(Date.now() / 1000) + 6000;\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    // Trading\n    const trading = async ()=>{\n        try {} catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CONTEXT.Provider, {\n        value: {\n            TRADING_BOT,\n            topTokens,\n            trading\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\context\\\\context.js\",\n        lineNumber: 158,\n        columnNumber: 13\n    }, undefined);\n    ;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjNEI7Z0JBQzlDLE1BQU1HLElBQUlQLElBQUk7WUFDbEI7WUFFQSxNQUFNUixXQUFVQyxLQUFLQyxLQUFLLENBQUNDLEtBQUtDLEdBQUcsS0FBRyxRQUFPO1FBRWpELEVBQUUsT0FBT3ZCLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBRUEsVUFBVTtJQUNWLE1BQU1vQyxVQUFVO1FBQ1osSUFBSSxDQUVKLEVBQUUsT0FBT3BDLE9BQU87WUFDWkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVoQjtJQUNKO0lBRUEscUJBQVEsOERBQUNuQixRQUFRd0QsUUFBUTtRQUNyQlgsT0FBTztZQUFFekM7WUFBYUM7WUFBV2tEO1FBQVM7a0JBQzVDcEQ7Ozs7Ozs7QUFFTCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWRpdGluZy8uL2NvbnRleHQvY29udGV4dC5qcz83MmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gSW50ZXJuYWwgSW1wb3J0XHJcbmV4cG9ydCBjb25zdCBDT05URVhUID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBST1ZJREVSID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgVFJBRElOR19CT1QgPSBcIlRyYWRpbmcgQm90XCI7XHJcbiAgICBjb25zdCBbdG9wVG9rZW5zLCBzZXRUb3BUb2tlbnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyYWRpbmdDb3VudCwgc2V0VHJhZGluZ0NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBsZXQgbGVuZ3RoO1xyXG5cclxuICAgIC8vIExvYWRcclxuICAgIGNvbnN0IExPQURfSU5JVElBTF9EQVRBID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGRhdGEgcHJvdmlkZXIgb2YgdG9rZW5zIDogdW5pc3dhcCBzdWJncmFwaCB2M1xyXG4gICAgICAgICAgICAvLyBodHRwczovL2FwaS50aGVncmFwaC5jb20vc3ViZ3JhcGhzL25hbWUvdW5pc3dhcC91bmlzd2FwLXYzXHJcbiAgICAgICAgICAgIGNvbnN0IFVSTCA9IFwiaHR0cHM6Ly9hcGkudGhlZ3JhcGguY29tL3N1YmdyYXBocy9uYW1lL3VuaXN3YXAvdW5pc3dhcC12M1wiO1xyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5zKG9yZGVyQnk6IHZvbHVtZVVTRCwgb3JkZXJEaXJlY3Rpb246IGRlc2MsIGZpcnN0OjIwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2xcclxuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsc1xyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVxyXG4gICAgICAgICAgICAgICAgICAgIHZvbHVtZVVTRFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsU3VwcGx5XHJcbiAgICAgICAgICAgICAgICAgICAgZmVlc1VTRFxyXG4gICAgICAgICAgICAgICAgICAgIHR4Q291bnRcclxuICAgICAgICAgICAgICAgICAgICBwb29sQ291bnRcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbFZhbHVlTG9ja2VkVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxWYWx1ZUxvY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcml2ZWRFVEhcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICAgICAgICBjb25zdCBheGlvc0RhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFVSTCwgeyBxdWVyeTogcXVlcnkgfSk7XHJcbiAgICAgICAgICAgIHNldFRvcFRva2VucyhheGlvc0RhdGEuZGF0YS5kYXRhLnRva2Vucyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXhpb3NEYXRhXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgTE9BRF9JTklUSUFMX0RBVEEoKTtcclxuICAgIH0sW10pO1xyXG5cclxuLy8gVW5pU3dhcCBBQkkgYW5kIEFkZHJlc3NcclxuY29uc3Qgcm91dGVyQWRkcmVzcyA9IFwiMHhFNTkyNDI3QTBBRWNlOTJEZTNFZGVlMUYxOEUwMTU3QzA1ODYxNTY0XCI7IC8vIFVuaXN3YXAgUm91dGVyXHJcbmNvbnN0IHF1b3RlckFkZHJlc3MgPSBcIjB4YjI3MzA4ZjlGOTBENjA3NDYzYmIzM2VBMUJlQmI0MUMyN0NFNUFCNlwiOyAvLyBVbmlzd2FwIFF1b3RlclxyXG5cclxuY29uc3QgUk9VVEVSID0gKFBST1ZJREVSKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgIHJvdXRlckFkZHJlc3MsXHJcbiAgICBbXHJcbiAgICAgIFwiZnVuY3Rpb24gZXhhY3RJbnB1dFNpbmdsZSgoYWRkcmVzcyB0b2tlbkluLCBhZGRyZXNzIHRva2VuT3V0LCB1aW50MjQgZmVlLCBhZGRyZXNzIHJlY2lwaWVudCwgdWludDI1NiBkZWFkbGluZSwgdWludDI1NiBhbW91bnRJbiwgdWludDI1NiBhbW91bnRPdXRNaW5pbXVtLCB1aW50MTYwIHNxcnRQcmljZUxpbWl0WDk2KSkgZXh0ZXJuYWwgcGF5YWJsZSByZXR1cm5zICh1aW50MjU2IGFtb3VudE91dClcIixcclxuICAgIF0sXHJcbiAgICBQUk9WSURFUlxyXG4gICk7XHJcbiAgcmV0dXJuIHJvdXRlcjtcclxufTtcclxuXHJcbmNvbnN0IFFVT1RFUiA9IChQUk9WSURFUikgPT4ge1xyXG4gIGNvbnN0IHF1b3RlciA9IG5ldyBldGhlcnMuQ29udHJhY3QoXHJcbiAgICBxdW90ZXJBZGRyZXNzLFxyXG4gICAgW1xyXG4gICAgICBcImZ1bmN0aW9uIHF1b3RlRXhhY3RJbnB1dFNpbmdsZShhZGRyZXNzIHRva2VuSW4sIGFkZHJlc3MgdG9rZW5PdXQsIHVpbnQyNCBmZWUsIHVpbnQyNTYgYW1vdW50SW4sIHVpbnQxNjAgc3FydFByaWNlTGltaXRYOTYpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KVwiLFxyXG4gICAgXSxcclxuICAgIFBST1ZJREVSXHJcbiAgKTtcclxuICByZXR1cm4gcXVvdGVyO1xyXG59O1xyXG5jb25zdCBUT0tFTiA9IChQUk9WSURFUiwgVE9LRU5fQikgPT4ge1xyXG4gIGNvbnN0IHRva2VuID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgIFRPS0VOX0IsXHJcbiAgICBbXHJcbiAgICAgIFwiZnVuY3Rpb24gYXBwcm92ZShhZGRyZXNzIHNwZW5kZXIsIHVpbnQyNTYgYW1vdW50KSBleHRlcm5hbCByZXR1cm5zIChib29sKVwiLFxyXG4gICAgICBcImZ1bmN0aW9uIGFsbG93YW5jZShhZGRyZXNzIG93bmVyLCBhZGRyZXNzIHNwZW5kZXIpIHB1YmxpYyB2aWV3IHJldHVybnMgKHVpbnQyNTYpXCIsXHJcbiAgICBdLFxyXG4gICAgUFJPVklERVJcclxuICApO1xyXG4gIHJldHVybiB0b2tlbjtcclxufTtcclxuXHJcblxyXG4gICAgLy8gQnV5XHJcbiAgICBjb25zdCBidXlUb2tlbnMgPSBhc3luYyAoXHJcbiAgICAgICAgdG9rZW5BZGRyZXNzMSxcclxuICAgICAgICB0b2tlbkFkZHJlc3MyLFxyXG4gICAgICAgIGZlZSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIGJ1eUFtb3VudCxcclxuICAgICAgICByb3V0ZXJcclxuICAgICkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlYWRsaW5lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApKzYwMDtcclxuICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHJvdXRlci5leGFjdElucHV0U2luZ2xlKFxyXG4gICAgICAgICAgICBbdG9rZW5BZGRyZXNzMSx0b2tlbkFkZHJlc3MyLGZlZSxhZGRyZXNzLGRlYWRsaW5lLGJ1eUFtb3VudCwwLDBdLFxyXG4gICAgICAgICAgICB7dmFsdWU6YnV5QW1vdW50fVxyXG4gICAgICAgIClcclxuICAgICAgICB0cmFuc2FjdGlvbi53YWl0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbi5oYXNoKVxyXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbi5oYXNoXHJcblxyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBzZWxsVG9rZW5zXHJcbiAgICBjb25zdCBzZWxsVG9rZW5zID0gYXN5bmMgKFxyXG4gICAgICAgIHRva2VuQWRkcmVzczEsXHJcbiAgICAgICAgdG9rZW5BZGRyZXNzMixcclxuICAgICAgICBmZWUsXHJcbiAgICAgICAgdXNlckFkZHJlc3MsXHJcbiAgICAgICAgYnV5QW1vdW50LFxyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBzZWxsQW1vdW50LFxyXG4gICAgICAgIGFjY291bnRcclxuICAgICkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gVE9LRU4oYWNjb3VudCx0b2tlbkFkZHJlc3MyKVxyXG4gICAgICAgICAgICBjb25zdCBhbGxvd2FuY2UgPSBhd2FpdCB0b2tlbi5hbGxvd2FuY2UodXNlckFkZHJlc3Mscm91dGVyQWRkcmVzcylcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgYWxsb3dhbmNlOiAke2FsbG93YW5jZX1gKVxyXG5cclxuICAgICAgICAgICAgaWYoYWxsb3dhbmNlPHNlbGxBbW91bnQpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBcHByb3ZpbmcgU2VuZCAoQnVsayBhcHByb3ZlIGluIHByb2R1Y3Rpb24pXCIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdHggPSBhd2FpdCB0b2tlbi5hcHByb3ZlKHJvdXRlckFkZHJlc3Msc2VsbEFtb3VudClcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF0eC53YWl0KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVhZGxpbmUgPU1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKSArNjAwMDtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gVHJhZGluZ1xyXG4gICAgY29uc3QgdHJhZGluZyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKDxDT05URVhULlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3sgVFJBRElOR19CT1QsIHRvcFRva2VucywgdHJhZGluZywgfX1cclxuICAgID57Y2hpbGRyZW59PC9DT05URVhULlByb3ZpZGVyPlxyXG4gICAgKTtcclxuO30iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImV0aGVycyIsImF4aW9zIiwiQ09OVEVYVCIsImNyZWF0ZUNvbnRleHQiLCJQUk9WSURFUiIsImNoaWxkcmVuIiwiVFJBRElOR19CT1QiLCJ0b3BUb2tlbnMiLCJzZXRUb3BUb2tlbnMiLCJ0cmFkaW5nQ291bnQiLCJzZXRUcmFkaW5nQ291bnQiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJsZW5ndGgiLCJMT0FEX0lOSVRJQUxfREFUQSIsIlVSTCIsInF1ZXJ5IiwiYXhpb3NEYXRhIiwicG9zdCIsImRhdGEiLCJ0b2tlbnMiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXJBZGRyZXNzIiwicXVvdGVyQWRkcmVzcyIsIlJPVVRFUiIsInJvdXRlciIsIkNvbnRyYWN0IiwiUVVPVEVSIiwicXVvdGVyIiwiVE9LRU4iLCJUT0tFTl9CIiwidG9rZW4iLCJidXlUb2tlbnMiLCJ0b2tlbkFkZHJlc3MxIiwidG9rZW5BZGRyZXNzMiIsImZlZSIsImFkZHJlc3MiLCJidXlBbW91bnQiLCJkZWFkbGluZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJ0cmFuc2FjdGlvbiIsImV4YWN0SW5wdXRTaW5nbGUiLCJ2YWx1ZSIsIndhaXQiLCJoYXNoIiwic2VsbFRva2VucyIsInVzZXJBZGRyZXNzIiwic2VsbEFtb3VudCIsImFjY291bnQiLCJhbGxvd2FuY2UiLCJhdHgiLCJhcHByb3ZlIiwidHJhZGluZyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/context */ \"./context/context.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_context__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);\n([_context_context__WEBPACK_IMPORTED_MODULE_2__, react_hot_toast__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n// Internal Import\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_2__.PROVIDER, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                    lineNumber: 11,\n                    columnNumber: 14\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.Toaster, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                lineNumber: 14,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/jquery.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/plugins.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                lineNumber: 17,\n                columnNumber: 10\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                type: \"text/javascript\",\n                src: \"js/init.js?ver=1.0.0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ComHuT\\\\Desktop\\\\bot1\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 10\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBRS9CLGtCQUFrQjtBQUN5QjtBQUNFO0FBRTlCLFNBQVNHLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0U7OzBCQUNLLDhEQUFDTCxzREFBUUE7MEJBQ0wsNEVBQUNJO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OzBCQUc1Qiw4REFBQ0gsb0RBQU9BOzs7OzswQkFFUiw4REFBQ0k7Z0JBQU9DLE1BQUs7Z0JBQWtCQyxLQUFJOzs7Ozs7MEJBQ25DLDhEQUFDRjtnQkFBT0MsTUFBSztnQkFBa0JDLEtBQUk7Ozs7OzswQkFDbkMsOERBQUNGO2dCQUFPQyxNQUFLO2dCQUFrQkMsS0FBSTs7Ozs7Ozs7QUFHNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lZGl0aW5nLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5cclxuLy8gSW50ZXJuYWwgSW1wb3J0XHJcbmltcG9ydCB7UFJPVklERVJ9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIlxyXG5pbXBvcnQgdG9hc3Qse1RvYXN0ZXJ9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgICA8UFJPVklERVI+XHJcbiAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgIDwvUFJPVklERVI+XHJcblxyXG4gICAgICAgICA8VG9hc3Rlci8+XHJcblxyXG4gICAgICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL3BsdWdpbnMuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2luaXQuanM/dmVyPTEuMC4wXCI+PC9zY3JpcHQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlBST1ZJREVSIiwidG9hc3QiLCJUb2FzdGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2NyaXB0IiwidHlwZSIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("ethers");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();