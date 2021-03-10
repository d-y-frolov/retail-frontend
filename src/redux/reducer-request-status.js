import {REQUEST_SENT, REQUEST_SUCCEEDED, REQUEST_FAILED} from './actions-request-status';
// import {requestStatusCodes} from './actions-request-status';
const initState = {
    requestStatus: REQUEST_SENT,
    infoString:""
}
export function reducerRequestStatus(state = initState, action){
    switch (action.type){
        case REQUEST_SENT:
            console.log("REDUCER REQUEST STATUS: "+REQUEST_SENT);
            return {
            requestStatus:REQUEST_SENT, 
            infoString: action.payload?action.payload:""};
        case REQUEST_SUCCEEDED:
            console.log("REDUCER REQUEST STATUS: "+REQUEST_SUCCEEDED);
            return {
            requestStatus:REQUEST_SUCCEEDED, 
            infoString: action.payload?action.payload:""};
        case REQUEST_FAILED:
            console.log("REDUCER REQUEST STATUS: "+REQUEST_FAILED);
            return {
            requestStatus:REQUEST_FAILED, 
            infoString: action.payload?action.payload:""};
        default:return state;
        }
}