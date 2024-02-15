import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

// Internal Import
export const CONTEXT = React.createContext();

export const PROVIDER = ({ children }) => {
    const TRADING_BOT = "Trading Bot";
    const [topTokens, setTopTokens] = useState([]);
    const [tradingCount, setTradingCount] = useState(0);
    const [loader, setLoader] = useState(false);

    let length;

    // Load
    const LOAD_INITIAL_DATA = async () => {
        try {
            // data provider of tokens : uniswap subgraph v3
            // https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3
            const URL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3";
            const query = `
            {
                tokens(orderBy: volumeUSD, orderDirection: desc, first:20){
                    id
                    name
                    symbol
                    decimals
                    volume
                    volumeUSD
                    totalSupply
                    feesUSD
                    txCount
                    poolCount
                    totalValueLockedUSD
                    totalValueLocked
                    derivedETH
                }
            }
            `;
            const axiosData = await axios.post(URL, { query: query });
            setTopTokens(axiosData.data.data.tokens);
            // console.log("axiosData");
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        LOAD_INITIAL_DATA();
    },[]);

// UniSwap ABI and Address
const routerAddress = "0xE592427A0AEce92De3Edee1F18E0157C05861564"; // Uniswap Router
const quoterAddress = "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6"; // Uniswap Quoter

const ROUTER = (PROVIDER) => {
  const router = new ethers.Contract(
    routerAddress,
    [
      "function exactInputSingle((address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 deadline, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96)) external payable returns (uint256 amountOut)",
    ],
    PROVIDER
  );
  return router;
};

const QUOTER = (PROVIDER) => {
  const quoter = new ethers.Contract(
    quoterAddress,
    [
      "function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) public view returns (uint256 amountOut)",
    ],
    PROVIDER
  );
  return quoter;
};
const TOKEN = (PROVIDER, TOKEN_B) => {
  const token = new ethers.Contract(
    TOKEN_B,
    [
      "function approve(address spender, uint256 amount) external returns (bool)",
      "function allowance(address owner, address spender) public view returns (uint256)",
    ],
    PROVIDER
  );
  return token;
};


    // Buy
    const buyTokens = async (
        tokenAddress1,
        tokenAddress2,
        fee,
        address,
        buyAmount,
        router
    ) => {
        const deadline = Math.floor(Date.now()/1000)+600;
        const transaction = router.exactInputSingle(
            [tokenAddress1,tokenAddress2,fee,address,deadline,buyAmount,0,0],
            {value:buyAmount}
        )
        transaction.wait()
        console.log(transaction.hash)
        return transaction.hash


        try {

        } catch (error) {
            console.log(error)

        }
    };

    // sellTokens
    const sellTokens = async (
        tokenAddress1,
        tokenAddress2,
        fee,
        userAddress,
        buyAmount,
        router,
        sellAmount,
        account
    ) => {
        try {
            const token = TOKEN(account,tokenAddress2)
            const allowance = await token.allowance(userAddress,routerAddress)
            console.log(`Current allowance: ${allowance}`)

            if(allowance<sellAmount){
                console.log("Approving Send (Bulk approve in production)")
                const atx = await token.approve(routerAddress,sellAmount)
                await atx.wait()
            }

            const deadline =Math.floor(Date.now()/1000) +6000;

        } catch (error) {
            console.log(error)

        }
    };

    // Trading
    const trading = async () => {
        try {

        } catch (error) {
            console.log(error)

        }
    };

    return (<CONTEXT.Provider
        value={{ TRADING_BOT, topTokens, trading, }}
    >{children}</CONTEXT.Provider>
    );
;}