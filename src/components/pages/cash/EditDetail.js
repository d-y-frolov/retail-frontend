import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './EditDetail.module.css'
import './EditDetail.css'
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import {normalizeQuantity, normalizeStringQuantity} from '../../../utils/utilFunctions';

const EditDetail =({detail, index, closeHandler})=>{
    console.log("PROPS",detail, index, closeHandler);
    const [quantity, setQuantity]=useState(normalizeStringQuantity(detail.quantity,detail.pieceUnit));
    const [price, setPrice]=useState(detail.price.toFixed(2));
    function okOnClickHandler(){ 
        const normQuality = normalizeQuantity(quantity, detail.pieceUnit );
        closeHandler( {...detail, price:Math.floor(parseFloat(price)*100)/100, quantity:normQuality, sum:Math.floor(price*normQuality*100)/100}, index); 
    }
    // const regexQuantity = detail.pieceUnit ?  /^(?=.*\d)\d*$/ : /^(?=.*\d)\d*(?:\.\d{0,3})?$/;
    function onQuantityChangeHandler(event){
        setQuantity(event.target.value);
    }
    // const regexPrice = /^(?=.\d*)?\d*(?:\.\d{0,2})?$/;
    function onPriceChangeHandler(event){
        setPrice(event.target.value);
    }
    function cancelOnClickHandler(){ closeHandler(); }
    function deleteOnClickHandler(){ 
        closeHandler( {}, index); 
    }
    return (
        <div className="modalBackground">
            {/* <Backdrop className={classes.backdrop} > */}
            <div className="modal">
                <div className="headerWrapper">
                    <span>{detail.id}</span>
                    <span>{detail.name}</span>
                </div>
                <TextField type="number" required label="Quantity" variant="outlined" value={quantity}
                    onChange={onQuantityChangeHandler} 
                    onBlur={(event)=>{if(event.target.value==="")setQuantity(0);}}
                    />
                <TextField type="number" required label="Price" variant="outlined" value={price}
                    onChange={onPriceChangeHandler} 
                    onBlur={(event)=>{if(event.target.value==="")setPrice(0);}}
                    />
                <div className="buttonWrapper">
                    <Button variant="contained" color="primary" onClick={()=>okOnClickHandler()} disableElevation>
                        Ok
                    </Button>
                    <Button variant="contained" color="default" onClick={()=>cancelOnClickHandler()} disableElevation>
                        Cancel
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>deleteOnClickHandler()} disableElevation>
                        Delete
                    </Button>
                </div>
            </div>
            {/* </Backdrop> */}
        </div>
    );
}

EditDetail.propTypes = {
    closeHandler:PropTypes.func.isRequired,
    index:PropTypes.number.isRequired,
    detail:PropTypes.shape({
        id:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        quantity:PropTypes.number.isRequired,
        sum:PropTypes.number,
        tax:PropTypes.number,
        groupId:PropTypes.string,
        pieceUnit:PropTypes.bool.isRequired
    })
};
export default EditDetail;