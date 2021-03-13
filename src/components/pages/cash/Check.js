import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Check.module.css'
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
import Button from '@material-ui/core/Button';

export default function Check({check, details, closeHandler}){
    const cash = useSelector(state=>state.cash.cashInfo);
    console.log('CASH:', cash);
    console.log('CHECK:',check, details,closeHandler);
    function calculateTax(){
        console.log(typeof details[0].sum);
        console.log(typeof details[0].tax);
        const totalTaxSum = details.map(v=>v.sum*v.tax/100).reduce((v1,v2)=>v1 + v2);
        return totalTaxSum;
    }
    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalWindow}>
                <div className={classes.checkWrapper}>
                    <span> {cash.info} </span>
                    <span> check </span>
                    <div className={classes.headerWrapper}>
                        <div className={classes.detailWrapper}>
                            <span className={classes.spanDetailId}>code</span>
                            <span className={classes.spanDetailName}>product name</span>
                            <span className={classes.spanDetailPrice}>price</span>
                            <span className={classes.spanDetailQuantity}>qnty</span>
                            <span className={classes.spanDetailSum}>sum</span>
                        </div>
                    </div>
                    <div className={classes.detailsWrapper}>
                        {
                            details.map((v,i)=><div className={classes.detailWrapper} key={i}>
                                <span className={classes.spanDetailId}>{v.id}</span>
                                <span className={classes.spanDetailName}>{v.name}</span>
                                <span className={classes.spanDetailPrice}>{v.price}</span>
                                <span className={classes.spanDetailQuantity}>{v.quantity}</span>
                                <span className={classes.spanDetailSum}>{v.sum}</span>
                                </div>)
                        }
                    </div>
                    <span className={classes.spanTotal}> TOTAL: {normalizeStringSum(check.sum)} </span>
                    <span className={classes.spanVAT}> including VAT: {normalizeStringSum(calculateTax())} </span>
                </div>

                {/* <button className={classes.buttonClose} onClick={closeHandler}>Close</button> */}
                <Button variant="contained" color="primary" onClick={closeHandler} disableElevation>
                        Close
                    </Button>

            </div>
        </div>
    )
}