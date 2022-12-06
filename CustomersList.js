import React from "react";

import Customer  from "./Customer";
import classes from './CustomersList.module.css'

const CustomersList =(props)=>
{
    return(
        <ul className={classes['customers-list']}>
            {props.customers.map((customer)=>(
                <Customer
                key={customer.id}
                name={customer.name}
                email={customer.email}
                feedback={customer.feedback}/>
            ))}
        </ul>
    );
};

export default CustomersList;