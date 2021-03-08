import React,{ useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Cash.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../../../redux/actions-cash';
import {CASH_ID} from '../../../config/server';
import EditDetail from './EditDetail';
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
const LOCALSTORAGE_KEY = 'cash-info';
const Cash=()=>{
    const dispatch = useDispatch();
    const [bar, setBar] = useState('');
    function getEmptyProduct(){
        return {
            "id":"",
            "name":"",
            "groupId":"",
            "unitId":"",
            "price":0,
            "remainder":0,
            "tax":0
        }
    }
    function getStartCashInfo(){
        const info = localStorage.getItem(LOCALSTORAGE_KEY);
        if (info){
            return JSON.parse(info);
        }
        return { nextNumber:1 };
    }
    const [product, setProduct] = useState(getEmptyProduct);
    const [quantity, setQuantity] = useState(1.00);
    const [cashInfo, setCashInfo] = useState(getStartCashInfo());
    const [editDetail, setEditDetail] = useState({show:false});
    

    function saveCashInfo(newCashInfo){
        console.log(newCashInfo);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newCashInfo));
    }
    useEffect( ()=>{
        dispatch( Actions.getProducts() );
        dispatch(Actions.getCashInfo());
    }, [] );
    const products = useSelector(state=>state.cash.products);
    const details = useSelector(state=>state.cash.details);
    const cash = useSelector(state=>state.cash.cashInfo);
    const divRef = useRef(null);
    useEffect(()=>{
        console.log('changed details');
        divRef.current.scrollIntoView(false);
    }, [details]);
    
    function barCodeOnClickHandler(){
        const prod = products.find(v=>v.id===bar);
        if (prod){
            setProduct({...prod});
        }
        setBar('');
    }

    function addOnClickHandler(productFromScan){
        if (productFromScan || (product  && product.id)){
            const prod = productFromScan ? productFromScan : product;
            const normQuantity = normalizeQuantity(quantity, prod.pieceUnit);
            const detail = {
                id:prod.id,
                name:prod.name,
                price:prod.price,
                quantity:normQuantity,
                unitId:prod.unitId,
                sum:Math.floor(prod.price * normQuantity * 100)/100,
                tax:prod.tax,
                groupId:prod.groupId,
                pieceUnit:prod.pieceUnit
            }
            dispatch(Actions.addDetail(detail));
            setProduct(getEmptyProduct());
        }
        setBar('');
        setQuantity(1);
    }

    function scanOnClickHandler(){
        if (!products || !products.length){
            return;
        }
        const maxRange = products.length;
        const index = Math.floor(Math.random() * maxRange);
        const randomBar = products[index].id;
        console.log(maxRange, index, randomBar, products, products[index] );
        addOnClickHandler({...products[index]});
        // setProduct(products[index]);
        // setBar(randomBar) ;
    }
    function totalOnCancelHandler(){
        if (!details.length){
            return
        }
        dispatch(Actions.clearDetails(  ));
        setProduct(getEmptyProduct());
        setBar('');
        setQuantity(1);
    }
    function totalOnClickHandler(){
        if (!details.length){
            return
        }
        dispatch( Actions.saveCheck( details, cashInfo.nextNumber, CASH_ID, parseFloat( calcTotal() ) ) );
        const newCashInfo={nextNumber:cashInfo.nextNumber+1};
        saveCashInfo(newCashInfo);
        setCashInfo(newCashInfo);
    }
    function calcTotal(){
        const totalNum = details.map(v=>v.price*v.quantity).reduce((p,c)=>p+=c,0);
        return normalizeSum(totalNum);
    }
    function calcTotalString(){
        // return (details.map(v=>v.price*v.quantity).reduce((p,c)=>p+=c,0)).toFixed(2);
        const totalNum = details.map(v=>v.price*v.quantity).reduce((p,c)=>p+=c,0);
        return normalizeStringSum(totalNum);
    }
    const columns = [
        { field: '_n', headerName: '№', width: 20/*, type:'number' */},
        { field: 'id', headerName: 'Code', width: 120 },
        { field: 'name', headerName: 'Name', width: 120 },
        { field: 'price', headerName: 'Price', width: 80, type: 'number' },
        { field: 'quantity', headerName: 'Quantity', width: 80, type: 'number' },
        { field: 'unitId', headerName: 'Unit', width: 50 },
        // { field: 'sum', headerName: 'Sum', width: 120, type: 'number' },
        // { field: 'tax', headerName: 'Tax(%)', width: 80, type: 'number' },
        { field: '_btn', headerName: '...', width: 80}
      ];
    function editDetailOnClickHandler(detail, index){
        setEditDetail({show:true, detail, index});
    }
    function closeEditDetailHandler(detail, index){
        setEditDetail( {show:false} );
        if( !detail ){
            console.log("EditDetail result: CANCEL");
            return;
        }
        if (!detail.id){
            console.log("EditDetail result: DELETE");
            dispatch(Actions.deleteDetail(index));
            return;
            }
        console.log("EditDetail result: OK");
        dispatch(Actions.updateDetail(detail, index));
    }
    return  (
        <>
        {editDetail.show ? <EditDetail detail={editDetail.detail} index={editDetail.index} closeHandler={closeEditDetailHandler}/> : <></>}

        <div className={classes.wrapper}>
            <div className={classes.checkwrapper}>
                <div className={classes.infowrapper}>
                    <span>Check № {cashInfo.nextNumber}</span>
                    <span>{cash.name}</span>
                    <span>{cash.info}</span>
                </div>

                <div className={classes.headerwrapper}>
                    <div className={classes.header}>
                    {
                        columns.map((v,i)=><span key={i} style={{width:`${v.width}px`}}>{v.headerName} </span>) 
                    }
                    {/* <span/> */}
                    </div>
                </div>
                <div className={classes.gridwrapper}>
                    {   
                    details.map((v,i)=><div key={i} className={classes.gridrowwrapper}>
                        <span style={{width:`${columns[0].width}px`,textAlign:columns[0].type==="number"?"right":"left"}}>{i+1}</span>
                        <span style={{width:`${columns[1].width}px`,textAlign:columns[1].type==="number"?"right":"left"}}>{v.id}</span>
                        <span style={{width:`${columns[2].width}px`,textAlign:columns[2].type==="number"?"right":"left"}}>{v.name}</span>
                        <span style={{width:`${columns[3].width}px`,textAlign:columns[3].type==="number"?"right":"left"}}>{normalizeStringSum(v.price)}</span>
                        <span style={{width:`${columns[4].width}px`,textAlign:columns[4].type==="number"?"right":"left"}}>{normalizeStringQuantity(v.quantity,v.pieceUnit)}</span>
                        <span style={{width:`${columns[5].width}px`,textAlign:columns[5].type==="number"?"right":"left"}}>{v.unitId}</span>
                        {/* <span style={{width:`${columns[6].width}px`,textAlign:columns[6].type==="number"?"right":"left"}}>{normalizeStringSum(v.sum)}</span>
                        <span style={{width:`${columns[7].width}px`,textAlign:columns[7].type==="number"?"right":"left"}}>{v.tax}</span> */}
                        <Button variant="outlined" disableElevation onClick={()=>editDetailOnClickHandler(v,i)}>...</Button>
                    </div>)
                    }
                    <div ref={divRef}></div>
                </div>
            </div>
            <div className={classes.controlwrapper}>
                <div className={classes.inputwrapper}>
                    <Button variant="contained" color="primary" onClick={()=>scanOnClickHandler()} disableElevation>
                        SCAN
                    </Button>
                    <div className={classes.productinfo}>
                        {
                            (product && product.id) ? <>{product.id}  <br/> {product.name} {(product.price).toFixed(2)} {product.tax}%</>:<></>
                        }
                    </div>
                </div>
                <div className={classes.inputwrapper}>
                    <TextField required id="outlined-required" label="Barcode" variant="outlined" value={bar}
                        onChange={(event)=>setBar(event.target.value)} />
                    <Button variant="outlined" color="primary" onClick={()=>barCodeOnClickHandler()} disableElevation>
                        Find
                    </Button>
                    <TextField type="number" required id="outlined-required" label="Quantity" variant="outlined" value={quantity}
                        onChange={(event)=>setQuantity(event.target.value)} />
                    <Button variant="contained" color="primary" onClick={()=>addOnClickHandler()} disableElevation>
                        ADD
                    </Button>
                </div>
                <div style={{display:"flex"}}>
                <div className={classes.totalwrapper}>
                    <span>TOTAL</span>
                    <span>{calcTotalString()} </span>
                    <Button variant="contained" color="primary" onClick={()=>totalOnClickHandler()} disableElevation>
                        Done / PAY CHECK
                    </Button>
                </div> 
                <div className={classes.cancelwrapper}>
                    <Button variant="contained" color="secondary" onClick={()=>totalOnCancelHandler()} disableElevation>
                        Cancel / Clear check
                    </Button>
                </div> 
                </div>
            </div>
        </div>
        
        </>
    )  
            
}

export default Cash;