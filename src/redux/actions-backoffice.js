import {URL, URL_PATH_PRODUCT, URL_PATH_CHECK, URL_PATH_CASH, URL_PATH_GROUP, URL_PATH_UNIT} from '../config/server'
import Axios, {AxiosResponse, AxiosError} from "axios";
import * as RequestStatusActions from './actions-request-status';

export const SET_BACKOFFICE_PRODUCTS = "[backoffice]-get-products";
export const ADD_PRODUCT             = "[backoffice]-add-product";
export const UPDATE_PRODUCT          = "[backoffice]-update-product";
export const REMOVE_PRODUCT          = "[backoffice]-remove-product";
export const SET_BACKOFFICE_CASHES   = "[backoffice]-get-cashes";
export const SET_BACKOFFICE_GROUPS   = "[backoffice]-get-groups";
export const SET_BACKOFFICE_UNITS    = "[backoffice]-get-units";
export const SET_BACKOFFICE_CHECKS   = "[backoffice]-get-checks";
export function findProducts(searchString){
    return async (dispatch)=>{
            dispatch(RequestStatusActions.setRequestStatusToSent());
            const prods = await Axios.get(`${URL}/${URL_PATH_PRODUCT}?search=${searchString}`)
                .then(response => {
                    dispatch({type:SET_BACKOFFICE_PRODUCTS, payload:response.data});
                    dispatch(RequestStatusActions.setRequestStatusToSucceeded());
                })
                .catch(err=>{
                    if(err.response){
                        dispatch(RequestStatusActions.setRequestStatusToFailed(err.response.data.message));
                        console.error(err.response.data);
                    }else if(err.request){
                        dispatch(RequestStatusActions.setRequestStatusToFailed(err.request.status));
                        console.error(err.request.data);
                    }else{
                        dispatch(RequestStatusActions.setRequestStatusToFailed(err.message));
                        console.error(err);
                    }
                });
    }
}

export function addProduct(newProduct){
    return async (dispatch)=>{
        const body = {
            "id":newProduct.id,
            "name":newProduct.name,
            "groupId":newProduct.groupId,
            "unitId":newProduct.unitId,
            "price":newProduct.price,
            "remainder":newProduct.remainder,
            "tax":newProduct.tax,
            "manufacturer":newProduct.manufacturer,
            "country":newProduct.country
        }
        dispatch(RequestStatusActions.setRequestStatusToSent());
        const response = await Axios.post(`${URL}/${URL_PATH_PRODUCT}`,body)
            .then(response => {
            dispatch({type:ADD_PRODUCT, payload:newProduct});
            dispatch(RequestStatusActions.setRequestStatusToSucceeded('Product added'));
                })
            .catch(err=>{
            if(err.response) {
                dispatch(RequestStatusActions.setRequestStatusToFailed("Not added: "+err.response.data.message));
                console.log("ERR RESPONSE :", err.response);
            }else if(err.request){
                dispatch(RequestStatusActions.setRequestStatusToFailed("Not added: "+err.request.status));
                console.log("ERR REQUEST :", err.request);
            }else{
            dispatch(RequestStatusActions.setRequestStatusToFailed("Not added: "+err.message));
            console.log("ERROR :", err);}
            });
    }
}

export function updateProduct(updatedProduct){
    return async (dispatch)=>{
        const body = {
            "id":updatedProduct.id,
            "name":updatedProduct.name,
            "groupId":updatedProduct.groupId,
            "unitId":updatedProduct.unitId,
            "price":updatedProduct.price,
            "remainder":updatedProduct.remainder,
            "tax":updatedProduct.tax,
            "manufacturer":updatedProduct.manufacturer,
            "country":updatedProduct.country
        }
        // try{
        dispatch(RequestStatusActions.setRequestStatusToSent());
        const response = await Axios.put(`${URL}/${URL_PATH_PRODUCT}`,body)
            .then(response => {
                // response.data
                dispatch({type:UPDATE_PRODUCT, payload:updatedProduct});
                dispatch(RequestStatusActions.setRequestStatusToSucceeded('Product updated'));
            })
            .catch(err=>{
                if (err.response){
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not updated: '+err.response.data.message));
                    console.error(err.response);
                }else if (err.request){
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not updated: '+err.request.status));
                    console.error(err.request);
                }else{
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not updated: '+err.message));
                    console.error(err);
                }
            });
    }
}

export function removeProduct(removedProductId){
    return async (dispatch)=>{
        dispatch(RequestStatusActions.setRequestStatusToSent());
        const response = await Axios.delete(`${URL}/${URL_PATH_PRODUCT}/${removedProductId}`)
            .then(response => {
                dispatch({type:REMOVE_PRODUCT, payload:removedProductId});
                dispatch(RequestStatusActions.setRequestStatusToSucceeded('Product deleted'));
            })
            .catch(err=>{
                if (err.response){
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not deleted: '+err.response.data));
                    console.error("ERROR RESPONSE: "+err.response.data);
                }else if(err.request){
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not deleted: '+err.request.status));
                    console.error("ERROR REQUEST: "+err.request);
                }else{
                    dispatch(RequestStatusActions.setRequestStatusToFailed('Not deleted: '+err.message));
                    console.error("ERROR: "+err);
                }
            });
    }
}


export function findChecks(checkId){
    return async (dispatch)=>{
        try{
            dispatch(RequestStatusActions.setRequestStatusToSent());
            const checks = await Axios.get(`${URL}/${URL_PATH_CHECK}/${checkId}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_CHECKS, payload:checks});
            dispatch(RequestStatusActions.setRequestStatusToSucceeded());
        }catch(e){
            dispatch(RequestStatusActions.setRequestStatusToFailed(e.message));
            console.error(e);}
    }
}
export function getCashes(){
    return async (dispatch)=>{
        try{
            dispatch(RequestStatusActions.setRequestStatusToSent());
            const cashes = await Axios.get(`${URL}/${URL_PATH_CASH}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_CASHES, payload:cashes});
            dispatch(RequestStatusActions.setRequestStatusToSucceeded());
        }catch(e){
            dispatch(RequestStatusActions.setRequestStatusToFailed(e.message));
            console.error(e);}
    }
}
export function getGroups(){
    return async (dispatch)=>{
        try{
            dispatch(RequestStatusActions.setRequestStatusToSent());
            const groups = await Axios.get(`${URL}/${URL_PATH_GROUP}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_GROUPS, payload:groups});
            dispatch(RequestStatusActions.setRequestStatusToSucceeded());
        }catch(e){
            dispatch(RequestStatusActions.setRequestStatusToFailed(e.message));
            console.error(e);}
    }
}
export function getUnits(){
    return async (dispatch)=>{
        try{
            dispatch(RequestStatusActions.setRequestStatusToSent());
            const units = await Axios.get(`${URL}/${URL_PATH_UNIT}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_UNITS, payload:units});
            dispatch(RequestStatusActions.setRequestStatusToSucceeded());
        }catch(e){
            dispatch(RequestStatusActions.setRequestStatusToFailed(e.message));
            console.error(e);}
    }
}
