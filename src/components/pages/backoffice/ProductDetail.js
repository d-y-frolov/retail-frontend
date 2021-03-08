import React,{useState} from 'react';
import {useSelector} from "react-redux";
import TextField from '@material-ui/core/TextField';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import classes from './ProductDetail.module.css';
import * as Crud from '../../../config/crudConstants';

export default function ProductDetail({detail, index, closeHandler}){
    const [product, setProduct] = useState({...detail});
    console.log("InProductDetail:", detail, index);
    const groups = useSelector(state=>state.backoffice.groups);
    const units = useSelector(state=>state.backoffice.units);
    const ADD_MODE = index===Crud.ADD ? true : false;

    /* Handlers  */
    const onChangeHandler=({target})=>setProduct({...product, [target.id]:target.type==='checkbox'?target.checked:target.value});
    function okOnClickHandler(){ 
        if (ADD_MODE){
            closeHandler( product, Crud.ADD); 
        }else{
            closeHandler( product, index); 
        }
    }
    function cancelOnClickHandler(){ closeHandler({}); }
    function deleteOnClickHandler(){ closeHandler( product, Crud.DELETE);}

    return (
        <div className={classes.modalBackground}>
            <div className={classes.modal}>
                <div className={classes.headerWrapper}>
                    <TextField type="text" required label="Barcode" variant="outlined" id="id" value={product.id}
                        onChange={onChangeHandler} disabled={!ADD_MODE}/>
                </div>
                <div className={classes.inputWrapper}>
                    <TextField type="text" required label="Name" variant="outlined" id="name" value={product.name}
                        onChange={onChangeHandler} />

                    <FormControl required /*className={classes.formControl}*/>
                        <InputLabel id="group-select-label">Group</InputLabel>
                        <Select labelId="group-select-label" id="group-select" value={product.groupId}
                        onChange={({target})=>{setProduct({...product, groupId:target.value, groupName:groups.find(v=>v.id===target.value).name})}}
                        >   {groups.map((v,i)=><MenuItem key={i} value={v.id}>{v.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField type="number" required label="Price" variant="outlined" id="price" value={product.price}
                        onChange={onChangeHandler} />

                    <TextField type="number" required label="Tax(%)" variant="outlined" id="tax" value={product.tax}
                        onChange={onChangeHandler} />
                    {/* <TextField type="number" required label="Price" variant="outlined" id="price" value={product.price}
                        onChange={onChangeHandler} /> */}
                    <TextField type="number" required label="Remainder" variant="outlined" id="remainder" value={product.remainder}
                        onChange={onChangeHandler} />
                    <FormControl required /*className={classes.formControl}*/>
                        <InputLabel id="unit-select-label">Unit</InputLabel>
                        <Select labelId="unit-select-label" id="unit-select" value={product.unitId}
                        onChange={({target})=>{
                            const unit = units.find(v=>v.id===target.value);
                            setProduct({...product, unitId:target.value, 
                                unitName:unit.name,
                                pieceUnit:unit.pieceUnit
                            })
                        }}
                        >   {units.map((v,i)=><MenuItem key={i} value={v.id}>{v.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField type="text" label="Manufacturer" variant="outlined" id="manufacturer" value={product.manufacturer}
                        onChange={onChangeHandler} />
                    <TextField type="text" label="Country" variant="outlined" id="country" value={product.country}
                        onChange={onChangeHandler} />
                    {/* <FormControlLabel
                    control={
                        <CheckBox required color="primary" checked={product.pieceUnit} id="pieceUnit" value={product.pieceUnit}
                            onChange={onChangeHandler} />
                        }
                        label="Is a piece unit"
                      /> */}
                </div>
                <div className="buttonWrapper">
                    <Button variant="contained" color="primary" onClick={()=>okOnClickHandler()} disableElevation>
                        {ADD_MODE ? "Add": "Ok"}
                    </Button>
                    <Button variant="contained" color="default" onClick={()=>cancelOnClickHandler()} disableElevation>
                        {ADD_MODE ? "Close": "Cancel"}
                    </Button>
                    {ADD_MODE ? <></> : <Button variant="contained" color="secondary" onClick={()=>deleteOnClickHandler()} disableElevation>
                        Delete
                    </Button>}
                </div>
            </div>
        </div>
    )
}