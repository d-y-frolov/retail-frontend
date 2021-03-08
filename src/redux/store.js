import {reducerCash} from './reducer-cash';
import {reducerBackoffice} from './reducer-backoffice';
import {reducerReport} from './reducer-report';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    cash : reducerCash,
    backoffice : reducerBackoffice,
    report : reducerReport
});

export const store = createStore(reducers, applyMiddleware(thunk));


