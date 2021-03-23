import {REQUEST_SENT, REQUEST_SUCCEEDED, REQUEST_FAILED, REQUEST_NONE} from './actions-request-status';
const initState = {
    requestStatus: REQUEST_NONE,
    infoString:""
}
export function reducerRequestStatus(state = initState, action){
    switch (action.type){
        case REQUEST_SENT:
            return {
            requestStatus:REQUEST_SENT, 
            infoString: action.payload?action.payload:""};
        case REQUEST_SUCCEEDED:
            return {
            requestStatus:REQUEST_SUCCEEDED, 
            infoString: action.payload?action.payload:""};
        case REQUEST_FAILED:
            return {
            requestStatus:REQUEST_FAILED, 
            infoString: action.payload?action.payload:""};
        case REQUEST_NONE:
            return {
            requestStatus:REQUEST_NONE, 
            infoString: action.payload?action.payload:""};
        default:return state;
        }
}