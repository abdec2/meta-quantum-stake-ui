import React, { createContext, useReducer } from "react";
import { AppReducer, stateType } from './AppReducer'

const initialState:stateType = {
    account: '',
    blockChainData: {
        TokenBalance: 0,
        StakedBalance: 0,
        TokenPrice:0,
        TotalRewards:0,
        TotalStaked:0
    }
}

export interface layout {
    children: React.ReactNode
} 


export const GlobalContext = createContext(initialState)

export const GlobalProvider: React.FC<React.ReactNode>  = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const updateTokenBalance = (balance:number) => {
        dispatch({
            type: 'UPDATE_TOKEN_BALANCE', 
            payload: balance
        })
    }

    const updateStakedBalance = (balance:number) => {
        dispatch({
            type: 'UPDATE_STAKED_BALANCE',
            payload: balance
        })
    }

    const updateTokenPrice = (price:number) => {
        dispatch({
            type: 'UPDATE_TOKEN_PRICE',
            payload: price
        })
    }

    const updateTotalRewards = (rewards:number) => {
        dispatch({
            type: 'UPDATE_TOTAL_REWARDS',
            payload: rewards
        })
    }

    const updateTotalStaked = (totalStacked:number) => {
        dispatch({
            type: 'UPDATE_TOTAL_STAKED',
            payload: totalStacked
        })
    }
    const updateAccount = (account:string) => {
        console.log(account)
        dispatch({
            type: 'UPDATE_ACCOUNT',
            payload: account
        })
    }


    return (
        <GlobalContext.Provider value={{
            account: state.account,
            blockChainData: state.blockChainData,
            updateTokenBalance,
            updateStakedBalance,
            updateTokenPrice,
            updateTotalRewards,
            updateTotalStaked, 
            updateAccount
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}