import {SET_CASH_PRODUCTS,ADD_CASH_DETAIL,UPDATE_CASH_DETAIL,DELETE_CASH_DETAIL,
    CLEAR_CASH_DETAILS,SAVE_CASH_CHECK,SET_CASH_INFO} from './actions-cash';
const initState={
    cashInfo:{},
    details:[],
    products:[]
}
export function reducerCash(cashState=initState, action){    
    switch(action.type){
        case SET_CASH_INFO:
            return {details:cashState.details, products:cashState.products, cashInfo:
                action.payload}
        case SET_CASH_PRODUCTS: 
            return {details:cashState.details, products: action.payload.slice(0), cashInfo:cashState.cashInfo};
        case ADD_CASH_DETAIL:
            return {details:[...cashState.details, action.payload], products:cashState.products, cashInfo:cashState.cashInfo} ;
        case UPDATE_CASH_DETAIL:{
            const newDetails = [...cashState.details];
            newDetails[action.payload.index] = {...action.payload.detail};
            return {details:newDetails,  products:cashState.products, cashInfo:cashState.cashInfo};}
        case DELETE_CASH_DETAIL:{
            const newDetails = [...cashState.details];
            newDetails.splice(action.payload,1);
            return {details:newDetails,  products:cashState.products, cashInfo:cashState.cashInfo};}
        case SAVE_CASH_CHECK:
            return {details:action.payload,  products:cashState.products, cashInfo:cashState.cashInfo};
        case CLEAR_CASH_DETAILS:
            return {...cashState, details:action.payload};
    }
    return cashState;
}