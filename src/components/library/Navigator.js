import React from "react";
import {NavLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {PATH_CASH,PATH_BACKOFFICE,PATH_REPORTS,PATH_RETAIL,ITEMS} from '../../config/menu'
import classes from './Navigator.module.css'
const Navigator = () => {
    function getLinks() {
        return ITEMS.map((item, index) =>
        <Link component={NavLink} exact to={item.path} key={index} style={{margin: 20}}>{item.label}</Link>)
    }
    return <nav>
        {getLinks()}
    </nav>
}
export default Navigator;