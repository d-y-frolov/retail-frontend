import { Switch } from 'react-router-dom';
import {SET_REPORT_SALES_DATA,SET_REPORT_GROUP_SALES_DATA, SET_DATE_FROM, SET_DATE_TO} from './actions-report';
const initState = {
    sales : [],
    groupSales : [],
    from: (()=>{const fromDate=new Date(); fromDate.setMonth(fromDate.getMonth() - 1); return fromDate.toISOString().substr(0,10)})(),
    to: new Date().toISOString().substr(0,10)
}
export function reducerReport(state=initState, actions){
    switch(actions.type){
        case SET_REPORT_SALES_DATA: 
                return {...state, sales:actions.payload};
        case SET_REPORT_GROUP_SALES_DATA: 
                return {...state, groupSales:actions.payload};
        case SET_DATE_FROM: 
                return {...state, from:actions.payload};
        case SET_DATE_TO: 
                return {...state, to:actions.payload};
        default:return state;
    }
}