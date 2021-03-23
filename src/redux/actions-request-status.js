export const REQUEST_SENT = '[request-status] sent';
export const REQUEST_SUCCEEDED = '[request-status] succeeded';
export const REQUEST_FAILED = '[request-status] failed';
export const REQUEST_NONE = '[request-status] none';
export function setRequestStatusToSent(){
    return {type: REQUEST_SENT};
}
export function setRequestStatusToSucceeded(infoString){
    return {type: REQUEST_SUCCEEDED, payload: infoString};
}
export function setRequestStatusToFailed(errorString){
    return {type: REQUEST_FAILED, payload: errorString};
}
export function setRequestStatusToNone(infoString){
    return {type: REQUEST_NONE, payload: infoString};
}