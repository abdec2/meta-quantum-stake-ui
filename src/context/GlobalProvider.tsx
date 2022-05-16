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

export type contextType = {
    data: stateType;
    updateTokenBalance: (balance: number) => void;
    updateStakedBalance: (balance: number) => void;
    updateTokenPrice: (price: number) => void;
    updateTotalRewards: (rewards: number) => void;
    updateTotalStaked: (totalStacked: number) => void;
    updateAccount: (account:string) => void;
}

export interface layout {
    children: React.ReactNode
} 

const contextValue:contextType = {
    data: initialState,
    updateTokenBalance: (balance: number) => {},
    updateStakedBalance: (balance: number) => {},
    updateTokenPrice: (price: number) => {},
    updateTotalRewards: (rewards: number) => {},
    updateTotalStaked: (totalStacked: number) => {},
    updateAccount: (account:string) => {}
}


export const GlobalContext = createContext<contextType>(contextValue)

export const GlobalProvider = (props: layout) => {
    const [state, dispatch] = useReducer(AppReducer, contextValue)
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
        dispatch({
            type: 'UPDATE_ACCOUNT',
            payload: account
        })
        console.log(state)
    }

    const ctxVal:contextType = {
        ...state,
        updateTokenBalance,
        updateStakedBalance,
        updateTokenPrice,
        updateTotalRewards,
        updateTotalStaked, 
        updateAccount
    }

    return (
        <GlobalContext.Provider value={ctxVal}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}