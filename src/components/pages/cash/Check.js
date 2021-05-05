import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from './Check.module.css'
import {normalizeSum,normalizeStringSum,normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';
import Button from '@material-ui/core/Button';

export default function Check({check, details, checkId, closeHandler}){
    const cash = useSelector(state=>state.cash.cashInfo);
    function calculateTax(){
        const totalTaxSum = details.map(v=>v.sum*v.tax/100).reduce((v1,v2)=>v1 + v2);
        return totalTaxSum;
    }
    const id = checkId.split('::')[1].split(',')[0];
    const dateTime = new Date(checkId.split('::')[1].split(',')[1]);
    const strDateTime = dateTime.getFullYear()+'-'+dateTime.getMonth()+'-'+dateTime.getDate()+
        ' '+dateTime.getHours()+':'+dateTime.getMinutes();
    console.log(id, strDateTime);
    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalWindow}>
                <div className={classes.checkWrapper}>
                    <span> {cash.info} </span>
                    {/* <span> Check № {checkId.split('::')[1].split(',')[0]}&nbsp;&nbsp;&nbsp;{checkId.split('::')[1].split(',')[1].substr(0,19).replace('T',' ')}</span> */}
                    <span> Check № {id}&nbsp;&nbsp;&nbsp;{dateTime.toLocaleString()}</span>
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

                <Button variant="contained" color="primary" onClick={closeHandler} disableElevation>
                        Close
                    </Button>

            </div>
        </div>
    )
}