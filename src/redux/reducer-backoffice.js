import {SET_BACKOFFICE_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT, 
        SET_BACKOFFICE_CASHES,SET_BACKOFFICE_GROUPS,SET_BACKOFFICE_UNITS,
        SET_BACKOFFICE_CHECKS} from './actions-backoffice';
const initState = {
    products: [],
    cashes: [],
    groups:[],
    units:[],
    checks:[]
}
export function reducerBackoffice(state = initState, action){
    switch(action.type){
        case SET_BACKOFFICE_PRODUCTS:
            return {...state, products:action.payload};
        case ADD_PRODUCT:
            return {...state, products:[action.payload, ...state.products]};
        case UPDATE_PRODUCT:{
            const updatedProduct = action.payload;
            const index = state.products.findIndex(v=>v.id===updatedProduct.id);
            const newProducts=[...state.products];
            newProducts.splice(index,1,updatedProduct);
            return {...state, products:newProducts};}
        case REMOVE_PRODUCT:{
            const removedProductId = action.payload;
            const index = state.products.findIndex(v=>v.id===removedProductId);
            const newProducts=[...state.products];
            newProducts.splice(index,1);
            return {...state, products:newProducts};}
        case SET_BACKOFFICE_CASHES:
            return {...state, cashes:action.payload};
        case SET_BACKOFFICE_GROUPS:
            return {...state, groups:action.payload};
        case SET_BACKOFFICE_UNITS:
            return {...state, units:action.payload};
        case SET_BACKOFFICE_CHECKS:
            return {...state, checks:action.payload};
        default: 
        return state;
    }
}

