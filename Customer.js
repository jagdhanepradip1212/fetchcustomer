import React from 'react'
import classes from './Customer.module.css';

const Customer = (props)=>{
     return(
    
        <li className={classes.customer}>
        <h4>{props.id}</h4>   
        <h2>{props.name}</h2>
        <h2>{props.email}</h2>
        <p>{props.feedback}</p>
        </li>
    );
}

export default Customer;