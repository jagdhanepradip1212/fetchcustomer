import React,{useRef} from "react";

import classes from './AddCustomer.module.css';

function AddCustomer(props){
    const nameRef =useRef('');
    const emailRef =useRef('');
    const phoneRef =useRef('');
    const feedbackRef =useRef('');

    function submitHandler(event){
        event.preventDefault();

        const customer={
            name:nameRef.current.value,
            email:emailRef.current.value,
            phone:phoneRef.current.value,
            feedback:feedbackRef.current.value
        };

        props.onAddCustomer(customer);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" ref={nameRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" ref={emailRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="phone">telePhone</label>
                <input type="text" id="phone" ref={phoneRef} />
            </div>

            <div className={classes.control}>
                <label htmlFor="feedback">Feedback</label>
                <input type="textarea" id="feedback" ref={feedbackRef} />
            </div>

            <button type="submit">Add Customer</button>

        </form>
    );
}
export default AddCustomer;