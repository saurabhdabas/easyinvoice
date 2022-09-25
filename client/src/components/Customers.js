import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Customer from './Customer';
import AddCustomer from './AddCustomer';
import SearchBar from './SearchBar';
const Customers = ({setState,setCustomerId,loading,setLoading}) => {

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const today  = new Date();
  const todaysDate = today.toLocaleDateString("en-US", options); // Date on which client was added to database

  const [customers,setCustomers] = useState({list:[]});
  const [showForm,setShowForm] = useState(false);
  const [deleteCustomerId,setDeleteCustomerId] = useState(0);
  const [updateCustomerId,setUpdateCustomerId] = useState(0);
  const [inputs,setInputs]=useState({
    photo:'',
    firstname:'',
    lastname:'',
    phonenumber:'',
    email:'',
    date:todaysDate,
    company_name:'',
    company_logo:'',
    taxnumber:'',
    street:'',
    city:'',
    zipcode:'',
    province:'',
    country:''
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
      photo={customer.photo}
      firstname={customer.firstname}
      lastname={customer.lastname}
      logo={customer.company_logo}
      company={customer.company_name}
      taxnumber={customer.taxnumber}
      businessLocation={`${customer.city}, ${customer.province}`}
      setState={setState}
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
  
  return(
    <div className='customers'>
      {customers.list.length ?
      <React.Fragment>
        <div className='customers__list-wrapper'>
        <SearchBar search={search} setSearch={setSearch} 
        customers={customers} setSearchedCustomer={setSearchedCustomer} isListening={isListening} setIsListening={setIsListening}/>
        <div className='customers__list'>
            {search ? 
            <React.Fragment>
              {searchedCustomer.map((customer)=>
                <Customer 
                  key={customer.id}
                  customerId={customer.id}
                  firstname={customer.firstname}
                  lastname={customer.lastname}
                  photo={customer.photo}
                  logo={customer.company_logo}
                  company={customer.company_name}
                  taxnumber={customer.taxnumber}
                  businessLocation={`${customer.city},${customer.province}`}
                  setState={setState}
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
            ? <div className="lds-default customer-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> 
            : null}
        </div>
        <AddCustomer customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomerId={updateCustomerId} setUpdateCustomerId={setUpdateCustomerId} loading={loading} setLoading={setLoading} todaysDate={todaysDate}/>
      </React.Fragment>
      }
    </div> 
  )
}

export default Customers
