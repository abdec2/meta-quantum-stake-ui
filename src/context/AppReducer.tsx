import {contextType} from './GlobalProvider'

export interface stateType {
    account: string,
    blockChainData: {
        TokenBalance:  number;
        StakedBalance:  number;
        TokenPrice: number;
        TotalRewards: number;
        TotalStaked: number;
    }

}

type actionType =  {
    type: string;
    payload: any;
}

export const AppReducer = (state: contextType, action:actionType) => {
    switch(action.type) {
        case 'UPDATE_TOKEN_BALANCE':
            return {
                ...state,
                data: {
                    ...state.data,
                    blockChainData: {
                        ...state.data.blockChainData, 
                        TokenBalance: action.payload
                    }

                }
            }
        case 'UPDATE_STAKED_BALANCE':
            return {
                ...state,
                data: {
                    ...state.data,
                    blockChainData: {
                        ...state.data.blockChainData, 
                        StakedBalance: action.payload
                    }

                }
            }
        
        case 'UPDATE_TOKEN_PRICE':
            return {
                ...state,
                data: {
                    ...state.data,
                    blockChainData: {
                        ...state.data.blockChainData, 
                        TokenPrice: action.payload
                    }

                }
            }

        case 'UPDATE_TOTAL_REWARDS':
            return {
                ...state,
                data: {
                    ...state.data,
                    blockChainData: {
                        ...state.data.blockChainData, 
                        TotalRewards: action.payload
                    }

                }
            }
        
        case 'UPDATE_TOTAL_STAKED':
            return {
                ...state,
                data: {
                    ...state.data,
                    blockChainData: {
                        ...state.data.blockChainData, 
                        TotalStaked: action.payload
                    }

                }
            }
        case 'UPDATE_ACCOUNT':
        return {
            ...state,
            data: {
                ...state.data,
                account: action.payload
            }
        }
        default:
            return state;
    };
}