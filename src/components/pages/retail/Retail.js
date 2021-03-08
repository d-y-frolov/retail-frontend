import React from 'react';
import * as Menu from '../../../config/menu'
import classes from './Retail.module.css';
const Retail=({history})=>{
    return(
        <div className={classes.wrapper}>
            <h2>Retail Demo Application</h2>
            <button className={`${classes.mrgntop30px} ${classes.cursorPointer}`}
            onClick = {()=>history.push(Menu.PATH_CASH)}
            >POS</button>
            <p>
                The POS tab emulates a POS terminal and allows you to make sales of goods. 
                Pressing the SCAN button simulates the reading of the product by a barcode scanner. 
                In this case, the goods are selected in random order. 
                You can change the quantity and price of a product by clicking the "..." button 
                in the product line. 
                You can also manually enter the desired barcode and immediately indicate 
                the required quantity of goods. 
                The generated check can be paid by pressing "DONE / PAY CHECK" or canceled by 
                pressing "CANCEL / CLEAR CHECK".

            </p>
            <button className={`${classes.mrgntop30px} ${classes.cursorPointer}`}
            onClick = {()=>history.push(Menu.PATH_BACKOFFICE)}
            >BackOffice</button>
            <p>
                The BackOffice tab allows you to search, view, add, modify and delete goods. 
                Also, there you can see what groups of goods and units of measurement of goods are.
            </p>
            <button className={`${classes.mrgntop30px} ${classes.cursorPointer}`}
            onClick = {()=>history.push(Menu.PATH_REPORTS)}
            >Reports</button>
            <p>
                On the REPORTS tab it is possible to see sales by day in the form of a chart and 
                in the form of a report of sales by groups and dates within a certain period.
            </p>
            <h4 className={classes.mrgntop30px}>Backend part</h4>
            <p>
                The backend part was implemented in Java using Spring Web and Spring Data JPA. H2 is used as a database.
            </p>
            <h4 className={classes.mrgntop30px}>Frontend part</h4>
            <p>
                The frontend part is made in Javascript as a single page application using React. 
                Redux is used as a centralized store.
            </p>
        </div>
    )
}

export default Retail;