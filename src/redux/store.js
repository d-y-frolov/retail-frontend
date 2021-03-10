import {reducerCash} from './reducer-cash';
import {reducerBackoffice} from './reducer-backoffice';
import {reducerReport} from './reducer-report';
import {reducerRequestStatus} from './reducer-request-status';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    cash : reducerCash,
    backoffice : reducerBackoffice,
    report : reducerReport,
    requestStatus : reducerRequestStatus
});

export const store = createStore(reducers, applyMiddleware(thunk));


