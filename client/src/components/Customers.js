import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer';
import displaySubComponent from '../Helpers/displaySubComponent';
const Customers = () => {
  const [index,setIndex] = useState(0);
  const [customers,setCustomers] = useState([]);
  const stack = ['AddCustomer','CustomerForm']
  useEffect(()=>{
    axios.get('http://localhost:8080/customers')
    .then((response)=>{
      setCustomers((prev)=>[...prev,response.data.customers])
    })
    .catch((err)=>`Error:${err}`);
  },[])

  return (
    <React.Fragment>
      {customers.length ?     
        <div className='customers'>
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
        {displaySubComponent(stack[0 + index],setIndex)}
        </div> :       
        <div className='customers'>
          {displaySubComponent(stack[0 + index],setIndex)}
        </div> 
      }
    </React.Fragment>
  )
}

export default Customers
