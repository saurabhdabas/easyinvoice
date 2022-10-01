import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteCustomerConfirmation from './DeleteCustomerConfirmation';
const Customer = ({firstname,lastname,company,logo,taxnumber,businessLocation,photo,setState,setShowForm,setDeleteCustomerId,setUpdateCustomerId,customerId,setCustomerId}) => {
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  return (
    <React.Fragment>
      {
      confirm ?
      <DeleteCustomerConfirmation 
      setConfirm={setConfirm} 
      customerId={customerId}
      setDeleteCustomerId={setDeleteCustomerId}
      />
      :
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__name'>
          <img src={photo} alt="customer-image" width="30" height="30"/>
          <h5>{`${firstname.toUpperCase()} ${lastname.toUpperCase()}`}</h5>
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
          <p>{businessLocation}</p>
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
              // setDeleteCustomerId(event.currentTarget.id)
              setShowForm(false)
              setConfirm(true)
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
    }
    </React.Fragment>
  )
}

export default Customer;
