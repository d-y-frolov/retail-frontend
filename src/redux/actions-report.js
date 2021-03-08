import {URL, URL_PATH_REPORT_SALES,URL_PATH_REPORT_GROUP_SALES} from '../config/server';
import axios from 'axios';

export const SET_REPORT_SALES_DATA='[reports] set sales data';
export const SET_REPORT_GROUP_SALES_DATA='[reports] set group sales data';
export const SET_DATE_FROM='[reports] set start date';
export const SET_DATE_TO='[reports] set finish date';

export function getSalesReportData(from, to){
    return async (dispatch)=>{
        try{
            const salesReportData = await axios.get(`${URL}/${URL_PATH_REPORT_SALES}?from=${from}&to=${to}`)
                .then(response=>response.data);
            dispatch({type:SET_REPORT_SALES_DATA, payload:salesReportData});
        }catch(e){
            console.log('ERROR',e);
        }

    }
}
export function getGroupSalesReportData(from, to){
    return async (dispatch)=>{
        try{
            const salesReportData = await axios.get(`${URL}/${URL_PATH_REPORT_GROUP_SALES}?from=${from}&to=${to}`)
                .then(response=>response.data);
            dispatch({type:SET_REPORT_GROUP_SALES_DATA, payload:salesReportData});
        }catch(e){
            console.log('ERROR',e);
        }

    }
}
export function setDateFrom(from){
    return {type:SET_DATE_FROM, payload:from};
}
export function setDateTo(to){
    return {type:SET_DATE_TO, payload:to};
}