import React from 'react'
import PropTypes from 'prop-types';
import classes from './TableGrid.module.css'

const TableGrid =  ({datasource, needBtn, onBtnClickCallback, columns})=>{
    const btnWidth = 40;
    const scrollWidth = 20;

    function formatField(value){
        const formattedValue = value;
        switch(typeof value){
            case 'boolean':
                formattedValue = value === true ? 'YES':'no';
                break;
        }
        return formattedValue;
    }

    return (
        datasource.length === 0 && !columns 
        ?
        <>empty datasource</>    
        :
        <>
            <div className={classes.header}>
                {
                   (()=>{
                       const headerArr = [];
                       if (!columns){
                           const obj = datasource[0];
                           for(let key in obj){
                               headerArr.push(<div style={{width:`${100/Object.keys(obj).length}%` }} key={key} className={classes.headerItem}>{key}</div>);
                           }
                       }else{
                            for(let i=0;i<columns.length;i++){
                                headerArr.push(<div style={{width:`${columns[i].width}px`}} key={i} className={classes.headerItem}>{columns[i].headerName}</div>);
                            }
                        }
                       headerArr.push(<div style={{width:`${(needBtn?btnWidth:0)+scrollWidth}px`}} key={headerArr.length} className={classes.headerBtn}>&nbsp;</div>)
                       return headerArr;
                   })()
                }
            </div>
        <div className={classes.wrapper}>
            <div className={classes.body}>
                {
                    datasource.map((obj, i)=>
                        <div key={i} className={classes.bodyLine}>
                           {(()=> {
                               const bodyArr = [];
                               if (!columns){
                                    for(let key in obj){
                                        bodyArr.push(<div style={{width:`${100/Object.keys(obj).length}%` }} key={key} 
                                                className={classes.bodyItem}>
                                            {typeof obj[key] === "boolean"?(obj[key]===true?'YES':'no'):obj[key]}
                                            </div>);
                                    }
                                }else{
                                    for(let i=0; i<columns.length;i++){
                                        bodyArr.push(<div style={{width:`${columns[i].width}px`,textAlign:`${columns[i].type==='number'?'right':'left'}`}} key={i} 
                                                className={classes.bodyItem}>
                                                {   
                                                (()=>{
                                                    const fields = columns[i].field.split(',');
                                                    const field = fields.map(f=>formatField(obj[f])).join(' ');
                                                    return field;
                                                    })()
                                                }
                                            </div>);
                                    }
                                }
                                if (needBtn){
                                    bodyArr.push(<button style={{width:`${btnWidth}px`}} key={bodyArr.length} 
                                                className={classes.bodyBtn} onClick={()=>{onBtnClickCallback(obj,i)}} >
                                                    ...
                                                </button>)
                               }
                               return bodyArr;
                            })() 
                           }
                        </div>
                        )
                }
            </div>
        </div>
        </>
    )
}

TableGrid.propTypes = {
    datasource:PropTypes.array.isRequired,
    needBtn:PropTypes.bool,
    onBtnClickCallback:PropTypes.func,
    columns:PropTypes.array
}

export default TableGrid;