import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = ({id,name,setState,country,city,province,taxnumber,setShowForm,setDeleteCustomerId,setUpdateCustomerId}) => {
  const navigate = useNavigate();

  const handleStateChange = () => {
    navigate(`/customers/${id}`)
    setState(['DetailedCustomer'])
  }

  return (
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__logos'>
          <img src='/id-card.png' alt='name-logo' width='20' height='20'/>
          <p>Client</p>
        </div>
        <div className='customer__name'>
          <h4>{name.toUpperCase()}</h4>
        </div>
      </div>
      <div className='customer__main'>
        <div className='customer__taxnumber'>
          <p>Tax #</p>
          <p>{taxnumber}</p>
        </div>
        <div className='customer__address'>
          <p>Location</p>
          <p>{`${city.toLowerCase()},${province.toLowerCase()},${country.toLowerCase()}`}</p>
        </div>
      </div>
      <div className='customer__footer'>
        <div className='customer__footer-btns'>
          <button className='customer__edit' type='submit' id={id} onClick={
            (event)=>{
              setUpdateCustomerId(event.currentTarget.id)
              setShowForm(true)
            }}>Edit</button>
          <button className='customer__delete' type='submit' id={id} onClick={
            (event)=>{
              setDeleteCustomerId(event.currentTarget.id)
            }
            }>Delete</button>
        </div>
        <button className='customer__details' onClick={handleStateChange} id={id}>Details</button>
      </div>
    </div>
  )
}

export default Customer;
