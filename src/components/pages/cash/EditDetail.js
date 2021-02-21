import  React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './EditDetail.module.css'
import './EditDetail.css'
import TextField from '@material-ui/core/TextField';
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
    function cancelOnClickHandler(){ closeHandler(); }
    function deleteOnClickHandler(){ 
        closeHandler( {}, index); 
    }
    return (
        <div className="modalBackground">
            <div className="modal">
                <div className="headerWrapper">
                    <span>{detail.id}</span>
                    <span>{detail.name}</span>
                </div>
                <TextField type="number" required label="Quantity" variant="outlined" value={quantity}
                    onChange={(event)=>setQuantity(event.target.value)} />
                <TextField type="number" required label="Price" variant="outlined" value={price}
                    onChange={(event)=>setPrice(event.target.value)} />
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