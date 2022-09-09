import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer';
import AddCustomer from './AddCustomer';

const Customers = () => {
  
  const [customers,setCustomers] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/customers')
    .then((response)=>{
      setCustomers((prev)=>[...prev,response.data.customers])
    })
    .catch((err)=>`The Error is:${err}`);
  },[])

  return(
  <div className='customers'>
    {customers.length ? 
    <React.Fragment>
      {customers[0].map((customer)=>
        <Customer 
          key={customer.id} 
          name={customer.name} 
          country={customer.country}
          city={customer.city}
          province={customer.province}
          company={customer.company}
          taxnumber={customer.taxnumber}
        />
      )}
      <AddCustomer/>
    </React.Fragment> : 
    <AddCustomer/>}
  </div>)
}

export default Customers
