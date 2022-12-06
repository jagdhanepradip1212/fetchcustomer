//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AddCustomer from './components/AddCustomer';
import CustomersList from './components/CustomersList';

function App() {
  // const dummyCustomers=[
  //   {
  //     Id:1,
  //     name:'dummy Customer 1',
  //     email:'dummycustomer12@bitcode.com',
  //     feedback:'Thanks for Feedbak '
  //   },

  //   {

  //     Id:2,
  //     name:'dummy Customer 2',
  //     email:'dummycustomer123@bitcode.com',
  //     feedback:'Welcome Customer 2 '
  //   }
  // ];
  const [customers, setCustomers]=useState([]);
  const [isLoading, setIsLoading]=useState(false);
  const[error, setError]=useState(false);
  async function fetchCustomersHandler()
  {
    //alert("test");
    // fetch("http://localhost:3000/customers").
    // then((Response)=>{
    //   return Response.json();
    // }).then((data)=>
    // {
    //   setCustomers(data);
    // })
    setIsLoading(true);
    setError(null);
    try{
      const Response = await fetch("http://localhost:3000/customers");
      if(!Response.ok)
      {
        throw new Error ("Something went wrong");
      }
      const data = await Response.json();
      setCustomers(data);
    }
    catch(error)
    {
      setError(error.message);
    }
    setIsLoading(false);
  }

  let content=(<p>No customer Found</p>);
  if(customers.length>0)
  {
    content=<CustomersList customers={customers} />;
  }
  if(error)
  {
    content=<p>{error}</p>;
  }
  if(isLoading)
  {
    content=<p>Data is Loading</p>;
  }
  
  async function AddCustomerHandler(customers)
  {
    //console.log(customers);
    const Response = await fetch("http://localhost:3000/customers",
    {
      method:"POST",
      body:JSON.stringify(customers),
      Headers:
      {
        "Content-type":"application/json"
      }

    })
    const data= await Response.json();
    console.log(data);
  }
    
  return (
    <React.Fragment>
      <section><AddCustomer onAddCustomer={AddCustomerHandler}></AddCustomer></section>
      <section>
        <button onClick={fetchCustomersHandler}>Fetch Customers</button>
      </section>
      <section>
        {/* { !isLoading && error && <p>{error}</p>}
        {!isLoading && customers.length>0 && (<CustomersList customers={customers}/>)}
        {!isLoading && customers.length===0 && (<p>No customer Found</p>)}
        {isLoading && <p>Data Is Loading</p>} 
        {!isLoading && <p>error</p>} */}
        {content}

         </section>
    </React.Fragment>
       );

  }
export default App;
