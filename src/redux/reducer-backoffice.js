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
            console.log({...state, products:action.payload});
            return {...state, products:action.payload};
        case ADD_PRODUCT:
            console.log({...state, products:[action.payload, ...state.products]});
            return {...state, products:[action.payload, ...state.products]};
        case UPDATE_PRODUCT:{
            const updatedProduct = action.payload;
            const index = state.products.findIndex(v=>v.id===updatedProduct.id);
            const newProducts=[...state.products];
            newProducts.splice(index,1,updatedProduct);
            console.log({...state, products:newProducts});
            return {...state, products:newProducts};}
        case REMOVE_PRODUCT:{
            const removedProductId = action.payload;
            const index = state.products.findIndex(v=>v.id===removedProductId);
            const newProducts=[...state.products];
           console.log("REDUCER REMOVE PRODUCT: ID="+removedProductId+", INDEX="+index,[...newProducts] ); 
            newProducts.splice(index,1);
           console.log("REDUCER REMOVE PRODUCT: AFTER SPLICE: ",[...newProducts] ); 
            console.log({...state, products:newProducts});
            return {...state, products:newProducts};}
        case SET_BACKOFFICE_CASHES:
            console.log({...state, cashes:action.payload});
            return {...state, cashes:action.payload};
        case SET_BACKOFFICE_GROUPS:
            console.log({...state, groups:action.payload});
            return {...state, groups:action.payload};
        case SET_BACKOFFICE_UNITS:
            console.log({...state, units:action.payload});
            return {...state, units:action.payload};
        case SET_BACKOFFICE_CHECKS:
            console.log({...state, checks:action.payload});
            return {...state, checks:action.payload};
        default: 
        console.log(state);
        return state;

    }
}

