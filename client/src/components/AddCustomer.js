import React from 'react';
import {useNavigate} from 'react-router-dom'


const AddCustomer = ({setIndex}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setIndex((index)=>index + 1);
    navigate('/newclient')
  }
  
  return (
    <div className='customers__AddCustomer'>
      <img src='./plus.png' alt='add-icon' width='50' height='50' onClick={handleClick}/>
      <h2>Add a customer</h2>
    </div>
  )
}

export default AddCustomer
