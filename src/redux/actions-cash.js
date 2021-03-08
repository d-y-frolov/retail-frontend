import {URL, URL_PATH_PRODUCT, URL_PATH_CHECK, URL_PATH_CASH, CASH_ID} from '../config/server'
import Axios, {AxiosError} from "axios";
export const SET_CASH_PRODUCTS = "[cash]-set-products";
export const SET_CASH_INFO = "[cash]-set-info";
export const SAVE_CASH_CHECK = "[cash]-save-check";
export const ADD_CASH_DETAIL = "[cash]-add-detail";
export const DELETE_CASH_DETAIL = "[cash]-del-detail";
export const UPDATE_CASH_DETAIL = "[cash]-update-detail";
export const CLEAR_CASH_DETAILS = "[cash]-clear-details";
export function getProducts(){
    return async dispatch => {
        try{
            const prods = await Axios.get(`${URL}/${URL_PATH_PRODUCT}`).then(response => response.data);
            dispatch({type:SET_CASH_PRODUCTS, payload:prods});
        }catch(e){console.error(e);}
    }
}
export function getCashInfo(){
    return async dispatch => {
        try{
            const cashInfo = await Axios.get(`${URL}/${URL_PATH_CASH}/${CASH_ID}`).then(response => response.data);
            console.log('CASH_INFO',cashInfo);
            dispatch({type:SET_CASH_INFO, payload:cashInfo?cashInfo:{id:-1,name:`Unknown cash register with CASH_ID=${CASH_ID}`, info:""}});
        }catch(e){console.error(e);}
    }
}
export function saveCheck(details, checkId, cashId, totalSum){
    // console.log(details);
    return async dispatch => {
        const detailsToCheck = details.map( d => { 
            return {
                productDto:{id:d.id},
                quantity:d.quantity,
                price:d.price,
                sum:parseFloat(d.sum)
                }
            } );
        const body = {
            id:String(checkId),
            cash:{
                id:cashId,
            },
            dateTime:new Date().toJSON(),
            details:detailsToCheck,
            sum:parseFloat(totalSum)
        }
        console.log("CHECK BODY:",body);
        try{
            const response = await Axios.post(`${URL}/${URL_PATH_CHECK}`, body).then(response => response.data);
            console.log(response);
            const details = []
            dispatch({type:SAVE_CASH_CHECK, payload:details});
        }catch(e){console.log(e);}
    };
}

export function clearDetails(){
    return {
        type:CLEAR_CASH_DETAILS,
        payload:[]
    };
}
export function addDetail(detail){
    return {
        type:ADD_CASH_DETAIL,
        payload:detail
    };
}

export function updateDetail(detail, index){
    return {
        type:UPDATE_CASH_DETAIL,
        payload:{detail, index}
    };
}
export function deleteDetail(index){
    return {
        type:DELETE_CASH_DETAIL,
        payload:index
    };
}
