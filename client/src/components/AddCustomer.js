import React from 'react';
import AddCustomerForm from './AddCustomerForm';


const AddCustomer = ({customers,setCustomers,showForm,setShowForm}) => {  
  return (
    <React.Fragment>
      {!showForm ?
        <div className='customers__AddCustomer'>
          <img src='./plus.png' alt='add-icon' width='50' height='50' onClick={()=>setShowForm(true)}/>
          <h2>Add a new customer</h2>
        </div> : 
        <AddCustomerForm customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm}/>
      }
    </React.Fragment>
  )
}

export default AddCustomer
