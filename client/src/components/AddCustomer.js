import React from 'react';
import AddCustomerForm from './AddCustomerForm';
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddCustomer = ({customers,setCustomers,showForm,setShowForm,inputs,setInputs,updateCustomerId,setUpdateCustomerId,loading,setLoading,todaysDate}) => {  
  return (
    <React.Fragment>
      {!showForm ?
        <div className='customers__AddCustomer'>
          <AiOutlinePlusCircle size={50} onClick={()=>{
            setInputs({
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
            })
            setShowForm(true)
            }}/>
          <h2>Add a new customer</h2>
        </div> : 
        <AddCustomerForm customers={customers} setCustomers={setCustomers} showForm={showForm} setShowForm={setShowForm} inputs={inputs} setInputs={setInputs} updateCustomerId={updateCustomerId} setUpdateCustomerId={setUpdateCustomerId} loading={loading} setLoading={setLoading} todaysDate={todaysDate}/>
      }
    </React.Fragment>
  )
}

export default AddCustomer
