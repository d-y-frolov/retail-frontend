import {URL, URL_PATH_PRODUCT, URL_PATH_CHECK, URL_PATH_CASH, URL_PATH_GROUP, URL_PATH_UNIT} from '../config/server'
import Axios, {AxiosError} from "axios";

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
        try{
            const prods = await Axios.get(`${URL}/${URL_PATH_PRODUCT}?search=${searchString}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_PRODUCTS, payload:prods});
        }catch(e){console.error(e);}
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
        try{
            const response = await Axios.post(`${URL}/${URL_PATH_PRODUCT}`,body).then(response => response.data);
            console.log(response);
            dispatch({type:ADD_PRODUCT, payload:newProduct});

        }catch(e){console.error(e);}
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
        try{
            const response = await Axios.put(`${URL}/${URL_PATH_PRODUCT}`,body).then(response => response.data);
            console.log(response);
            dispatch({type:UPDATE_PRODUCT, payload:updatedProduct});
        }catch(e){console.error(e);}
    }
}

export function removeProduct(removedProductId){
    return async (dispatch)=>{
        try{
            const response = await Axios.delete(`${URL}/${URL_PATH_PRODUCT}/${removedProductId}`).then(response => response.data);
            console.log(response);
            console.log("ACTIONS_REMOVE_PRODUCT:ID="+removedProductId);
            dispatch({type:REMOVE_PRODUCT, payload:removedProductId});
        }catch(e){console.error(e);}
    }
}


export function findChecks(checkId){
    return async (dispatch)=>{
        try{
            const checks = await Axios.get(`${URL}/${URL_PATH_CHECK}/${checkId}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_CHECKS, payload:checks});
        }catch(e){console.error(e);}
    }
}
export function getCashes(){
    return async (dispatch)=>{
        try{
            const cashes = await Axios.get(`${URL}/${URL_PATH_CASH}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_CASHES, payload:cashes});
        }catch(e){console.error(e);}
    }
}
export function getGroups(){
    return async (dispatch)=>{
        try{
            const groups = await Axios.get(`${URL}/${URL_PATH_GROUP}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_GROUPS, payload:groups});
        }catch(e){console.error(e);}
    }
}
export function getUnits(){
    return async (dispatch)=>{
        try{
            const units = await Axios.get(`${URL}/${URL_PATH_UNIT}`).then(response => response.data);
            dispatch({type:SET_BACKOFFICE_UNITS, payload:units});
        }catch(e){console.error(e);}
    }
}
