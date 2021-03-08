import React,{ useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../../redux/actions-backoffice';
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
import './Backoffice.css';
import classes from './Backoffice.module.css';
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
            console.log("After ProductDetail ADD_PRODUCT: ", product, index);
            dispatch(Actions.addProduct(product));
            return;
        }
        setProductDetail({show:false});
        if (index===Crud.DELETE){ //remove product
            console.log("After ProductDetail REMOVE_PRODUCT: ", product, index);
            dispatch(Actions.removeProduct(product.id));
            return;
        }
        if (product.id){ //update product
            console.log("After ProductDetail UPDATE_PRODUCT: ", product, index);
            dispatch(Actions.updateProduct(product));
            return;
        }
        console.log("After ProductDetail CANCEL: ", product, index);
    }
    const onAddProductBtnClickHandler = ()=>{
        onBodyBtnClickHandler(getEmptyProduct(), Crud.ADD);
    }

    const productColumns = [
        { field: 'id', headerName: 'Code', width: 120 },
        { field: 'name', headerName: 'Name', width: 120 },
        { field: 'groupId', headerName: 'Group', width: 50 },
        { field: 'price', headerName: 'Price', width: 80, type: 'number' },
        { field: 'remainder', headerName: 'Remainder', width: 70, type: 'number' },
        { field: 'unitId', headerName: 'Unit', width: 50 },
        { field: 'tax', headerName: 'Tax %', width: 30, type: 'number' },
        { field: 'country', headerName: 'Country', width: 70},
        { field: 'manufacturer', headerName: 'Manufact', width: 70},
      ];
    return(
        <>
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
            <div className={classes.wrapGroups}>
            <span>product groups</span>
                <TableGrid datasource = {groups} needBtn={false}/>
            </div>
            <div className={classes.wrapUnits}>
            <span>units</span>
                <TableGrid datasource = {units} needBtn={false}/>
            </div>
            {/* <div className={classes.wrapCashes}>
            <span>cashes</span>
                <TableGrid datasource = {cashes} needBtn={false}/>
            </div>
            <div className={classes.wrapChecks}>
            <span>checks</span>
            </div> */}
        </div>
        </>
        )
}

export default Backoffice;