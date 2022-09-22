import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer';
import AddCustomer from './AddCustomer';
import SearchBar from './SearchBar';
const Customers = ({state,setState,setCustomerId,loading,setLoading}) => {

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const today  = new Date();
  const todaysDate = today.toLocaleDateString("en-US", options); // Date on which client was added to database

  const [customers,setCustomers] = useState({list:[]});
  const [showForm,setShowForm] = useState(false);
  const [deleteCustomerId,setDeleteCustomerId] = useState(0);
  const [updateCustomerId,setUpdateCustomerId] = useState(0);
  const [inputs,setInputs]=useState({
    name:'',
    photo:'',
    phone:'',
    date:todaysDate,
    email:'',
    country:'',
    street:'',
    city:'',
    province:'',
    zipcode:'',
    company:'',
    logo:'',
    taxnumber:''
  });
  const [search,setSearch] = useState('');
  const [searchedCustomer,setSearchedCustomer] = useState([]);
  const [isListening, setIsListening] = useState(false);
  

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      axios.get('http://localhost:8080/customers')
      .then((response)=> {
        if(response.status === 200){
          setCustomers(({...customers,list:response.data}))
        }
        console.log("customers:",customers.list)
      })
      .then(()=>setLoading(false))
      .catch((err)=>`The Error is:${err}`);
    },[400])
  },[customers.list.length])

  useEffect(()=>{
    if(deleteCustomerId){
      axios.put(`http://localhost:8080/customers/${deleteCustomerId}/delete`,{customerId:deleteCustomerId})
      .then((response)=>{
        setCustomers({...customers,list:response.data.rows})
      })
    }
  },[deleteCustomerId])

  useEffect(()=>{
    if(updateCustomerId){
      const updatedCustomer = customers.list.find((customer)=>customer.id == updateCustomerId);
      setInputs({...updatedCustomer})
      setShowForm(true)
    }
  },[updateCustomerId])
  
  const customersList = customers.list.map((customer)=>{
    return (
      <Customer
      key={customer.id}
      customerId={customer.id}
      state={state} 
      setState={setState}
      name={customer.name}
      photo={customer.photo}
      company={customer.company_name}
      businessLocation={`${customer.city}, ${customer.province}`}
      logo={customer.logo}
      taxnumber={customer.taxnumber}
      setShowForm={setShowForm}
      deleteCustomerId={deleteCustomerId}
      setDeleteCustomerId={setDeleteCustomerId}
      updateCustomerId={updateCustomerId}
      setUpdateCustomerId={setUpdateCustomerId}
      customers={customers}
      setCustomerId={setCustomerId}
      setCustomers={setCustomers}
      inputs={inputs}
      setInputs={setInputs}
      todaysDate={todaysDate}
      />
    )
  })
  console.log(customersList)
  return(
    <div className='customers'>
      {customers.list.length ?
      <React.Fragment>
        <div className='customers__list-wrapper'>
        <div className='customers__list'>
            <SearchBar search={search} setSearch={setSearch} 
            customers={customers} setSearchedCustomer={setSearchedCustomer} isListening={isListening} setIsListening={setIsListening}/>
            {search ? 
            <React.Fragment>
              {searchedCustomer.map((customer)=>
                <Customer 
                  key={customer.id}
                  customerId={customer.id}
                  state={state} 
                  setState={setState}
                  name={customer.name}
                  photo={customer.photo}
                  company={customer.company_name}
                  logo={customer.logo}
                  taxnumber={customer.taxnumber}
                  businessLocation={`${customer.city},${customer.province}`}
                  setShowForm={setShowForm}
                  deleteCustomerId={deleteCustomerId}
                  setDeleteCustomerId={setDeleteCustomerId}
                  updateCustomerId={updateCustomerId}
                  setUpdateCustomerId={setUpdateCustomerId}
                  customers={customers}
                  setCustomerId={setCustomerId}
                  setCustomers={setCustomers}
                  inputs={inputs}
                  setInputs={setInputs}
                  todaysDate={todaysDate}
                />
              )} 
            </React.Fragment> : 
            <React.Fragment>
              {customersList} 
            </React.Fragment>
            }
          </div>
        </div>
        <AddCustomer customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomerId={updateCustomerId} setUpdateCustomerId={setUpdateCustomerId} loading={loading} setLoading={setLoading} todaysDate={todaysDate}/>
      </React.Fragment>
      : 
      <React.Fragment>
        <div className='customers__list-wrapper'>
          <SearchBar/>
          {loading 
            ? <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
            : null}
        </div>
        <AddCustomer customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomerId={updateCustomerId} setUpdateCustomerId={setUpdateCustomerId} loading={loading} setLoading={setLoading} todaysDate={todaysDate}/>
      </React.Fragment>
      }
    </div> 
  )
}

export default Customers
