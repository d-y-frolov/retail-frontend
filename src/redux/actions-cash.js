import {URL, URL_PATH_PRODUCT, URL_PATH_CHECK, URL_PATH_CASH, CASH_ID} from '../config/server'
import Axios, {AxiosResponse,AxiosError} from "axios";
import * as RequestStatusActions from './actions-request-status';
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
            dispatch({type:SET_CASH_INFO, payload:cashInfo?cashInfo:{id:-1,name:`Unknown cash register with CASH_ID=${CASH_ID}`, info:""}});
        }catch(e){console.error(e);}
    }
}
export function saveCheck(details, checkId, cashId, totalSum){
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
            // dateTime:new Date().toJSON(),
            details:detailsToCheck,
            sum:parseFloat(totalSum)
        }
        console.log(body.dateTime);
        // console.log((new Date(body.dateTime)).toLocaleDateString());
        // console.log((new Date(body.dateTime)).toLocaleTime());
        // console.log(new Date());
        // console.log(typeof body.dateTime);
        dispatch(RequestStatusActions.setRequestStatusToSent());
        const response = await Axios.post(`${URL}/${URL_PATH_CHECK}`, body)
            .then(response => {
                const details = []
                dispatch({type:SAVE_CASH_CHECK, payload:details});
                dispatch(RequestStatusActions.setRequestStatusToSucceeded(`${response.data.type}:: ${response.data.payload}`));
                console.log(response.data);
                return response.data;
            })
            .catch(err=>{
                if(err.response){
                    dispatch(RequestStatusActions.setRequestStatusToFailed(err.response.data));
                    console.log(err.response.data);
                }else if(err.request){
                    dispatch(RequestStatusActions.setRequestStatusToFailed(err.request.status));
                    console.log(err.request);
                }else{
                    dispatch(RequestStatusActions.setRequestStatusToFailed(err.message));
                    console.log(err);
                }
            });
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
