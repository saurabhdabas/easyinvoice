import React from 'react'
import Customer from './Customer'

const AddCustomer = ({setIndex}) => {

  const handleClick = () => {
    setIndex((index)=>index + 1);
  }
  
  return (
    <div className='Customers__AddCustomer'>
      <img src='./plus.png' alt='add-icon' width='50' height='50' onClick={handleClick}/>
      <h2>Add a customer</h2>
    </div>
  )
}

export default AddCustomer
