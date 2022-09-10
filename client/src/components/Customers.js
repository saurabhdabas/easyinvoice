import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer';
import AddCustomer from './AddCustomer';
import SearchBar from './SearchBar';
const Customers = () => {
  
  const [customers,setCustomers] = useState({list:[]});
  const [showForm,setShowForm] = useState(false);
  const [deleteCustomerId,setDeleteCustomerId] = useState(0);
  const [updateCustomer,setUpdateCustomer] = useState(false);
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    country:'',
    street:'',
    city:'',
    province:'',
    zipcode:'',
    company:'',
    taxnumber:''
  })

  useEffect(()=>{
    axios.get('http://localhost:8080/customers')
    .then((response)=> {
      if(response.data.length){
        setCustomers(({...customers,list:response.data}))
      }
    })
    .catch((err)=>`The Error is:${err}`);
  },[customers.list.length])

  useEffect(()=>{
    if(deleteCustomerId){
      axios.put(`http://localhost:8080/customers/${deleteCustomerId}/delete`,{customerId:deleteCustomerId})
      .then((response)=>{
        setCustomers({...customers,list:response.data.rows})
      })
    }
  },[deleteCustomerId])

  return(
  <div className='customers'>
    {customers.list.length ?
    <React.Fragment>
      <div className='customers__list-wrapper'>
        <div className='customers__list'>
          <SearchBar/>
          {customers.list.map((customer)=>
            <Customer 
              key={customer.id}
              id={customer.id} 
              name={customer.name} 
              country={customer.country}
              city={customer.city}
              province={customer.province}
              company={customer.company}
              taxnumber={customer.taxnumber}
              setShowForm={setShowForm}
              deleteCustomerId={deleteCustomerId}
              setDeleteCustomerId={setDeleteCustomerId}
              updateCustomer={updateCustomer}
              setUpdateCustomer={setUpdateCustomer}
              customers={customers}
              setCustomers={setCustomers}
              inputs={inputs}
              setInputs={setInputs}
            />
          )}
        </div>
      </div>
      <AddCustomer customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomer={updateCustomer} setUpdateCustomer={setUpdateCustomer}/>
    </React.Fragment>
    : 
    <React.Fragment>
      <div className='customers__list-wrapper'>
        <SearchBar/>
        <div className='customers__list'>
          <p>Click&nbsp;
            <span><img src='./plus.png' alt='add-icon' width='20' height='20'/></span> 
            &nbsp;Icon to get started 
          </p>
        </div>
      </div>
      <AddCustomer customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomer={updateCustomer} setUpdateCustomer={setUpdateCustomer}/>
    </React.Fragment>
    }

  </div>)
}

export default Customers
