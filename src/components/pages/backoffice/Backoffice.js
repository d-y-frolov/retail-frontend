import React,{ useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../../redux/actions-backoffice';
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
import * as RequestStatusActions from '../../../redux/actions-request-status';
import './Backoffice.css';
import classes from './Backoffice.module.css';
import Snackbar from '@material-ui/core/Snackbar';
import {getEmptyProduct} from '../../../models/product'
import TableGrid from '../../library/tableGrid/TableGrid';
import ProductDetail from './ProductDetail'
import * as Crud from '../../../config/crudConstants';

const Backoffice=()=>{
    const [prodSearchString, setProdSearchString]=useState("");
    const [checkSearchString, setCheckSearchString]=useState("");
    const [productDetail, setProductDetail]=useState({show:false});

    const dispatch = useDispatch();
    const cashes = useSelector(state=>state.backoffice.cashes);
    const groups = useSelector(state=>state.backoffice.groups);
    const units = useSelector(state=>state.backoffice.units);
    const products = useSelector(state=>state.backoffice.products);
    const checks = useSelector(state=>state.backoffice.checks);
    const requestStatus = useSelector(state=>state.requestStatus);
    
    useEffect(()=>{
        dispatch(Actions.getCashes());
        dispatch(Actions.getGroups());
        dispatch(Actions.getUnits());
    }, []);

    const onFindProductChangeHandler=(event)=>setProdSearchString(event.target.value);
    const onFindButtonHandler=()=>dispatch(Actions.findProducts(prodSearchString));
    

    const onBodyBtnClickHandler = (product, index)=>{
        setProductDetail({show:true, product, index })
    };
    const closeProductDetailHandler = (product, index)=>{

        if (index===Crud.ADD){  //add new product
            dispatch(Actions.addProduct(product));
            return;
        }
        setProductDetail({show:false});
        if (index===Crud.DELETE){ //remove product
            dispatch(Actions.removeProduct(product.id));
            return;
        }
        if (product.id){ //update product
            dispatch(Actions.updateProduct(product));
            return;
        }
    }
    const onAddProductBtnClickHandler = ()=>{
        const newProduct = getEmptyProduct();
        if (groups[0]) {
            newProduct.groupId = groups[0].id;
            newProduct.groupName = groups[0].name;
        }
        if (units[0]) {
            newProduct.unitId = units[0].id;
            newProduct.unitName = units[0].name;
            newProduct.pieceUnit = units[0].pieceUnit   ;
        }
        onBodyBtnClickHandler(newProduct, Crud.ADD);
    }

    const productColumns = [
        { field: 'groupId,id,name', headerName: `Group / Code / Name`, width: 120 },
        { field: 'price', headerName: 'Price', width: 65, type: 'number' },
        { field: 'remainder', headerName: 'Remainder', width: 60, type: 'number' },
        { field: 'tax', headerName: 'Tax %', width: 30, type: 'number' },
        { field: 'country,manufacturer', headerName: 'Country Manuf', width: 55},
      ];
    return(
        <>
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"left" }} 
            open={requestStatus.requestStatus===RequestStatusActions.REQUEST_FAILED || 
                requestStatus.requestStatus===RequestStatusActions.REQUEST_SUCCEEDED &&
                requestStatus.infoString!==''
            } 
            autoHideDuration={2000} onClose={()=>dispatch(RequestStatusActions.setRequestStatusToNone())} message={requestStatus.infoString}/>
        {productDetail.show ? <ProductDetail detail={productDetail.product} index={productDetail.index} closeHandler={closeProductDetailHandler}/> : <></>}
        <div className={classes.wrapBackoffice}>
            <div className={classes.wrapProducts}>
                <span>products</span>
                <div className={classes.wrapProductsControl}>
                    <TextField required id="outlined-required" label="Part of barcode or name" variant="outlined" 
                        onChange={onFindProductChangeHandler} value={prodSearchString}></TextField>
                    <Button variant="contained" id="find-products" color="primary" onClick={onFindButtonHandler}>Find</Button>
                    <Button variant="contained" id="add-product" color="primary" onClick={onAddProductBtnClickHandler}>Add</Button>
                </div>
                <TableGrid datasource = {products} columns={productColumns} needBtn={true} onBtnClickCallback={onBodyBtnClickHandler}/>
            </div>
            <div>
            <div className={classes.wrapGroups}>
            <span>product groups</span>
                <TableGrid datasource = {groups} needBtn={false}/>
            </div>
            <div className={classes.wrapUnits}>
            <span>units</span>
                <TableGrid datasource = {units} needBtn={false}/>
            </div>
            </div>
        </div>
        </>
        )
}

export default Backoffice;