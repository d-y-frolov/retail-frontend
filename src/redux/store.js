import {reducerCash} from './reducer-cash';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

const reducers = combineReducers({
    cash : reducerCash,
});

export const store = createStore(reducers, applyMiddleware(thunk));


