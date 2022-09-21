import React from 'react';
import { useNavigate } from 'react-router-dom';

const Customer = ({name,company,logo,photo,setState,country,city,province,taxnumber,setShowForm,setDeleteCustomerId,setUpdateCustomerId,customerId,setCustomerId}) => {
  const navigate = useNavigate();

  return (
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__name'>
          <img src={photo} alt="customer-image" width="30" height="30"/>
          <h5>{name.toUpperCase()}</h5>
        </div>
        <div className='customer__logos'>
          <img src={logo} alt='name-logo' width='20' height='20'/>
          <h3>{company.toUpperCase()}</h3>
        </div>
      </div>
      <hr className="customer__rule"/>
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
          <button className='customer__edit' type='submit' id={customerId} onClick={
            (event)=>{
              setUpdateCustomerId(event.currentTarget.id)
              setShowForm(true)
            }}>Edit</button>
          <button className='customer__delete' type='submit' id={customerId} onClick={
            (event)=>{
              setDeleteCustomerId(event.currentTarget.id)
            }
            }>Delete</button>
        </div>
        <button 
        className='customer__details' 
        onClick={()=>{
          navigate(`/customers/${customerId}`)
          setState(['DetailedCustomer'])
          setCustomerId(customerId)
        }} 
        id={customerId}>Details</button>
      </div>
    </div>
  )
}

export default Customer;
