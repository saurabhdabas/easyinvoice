import React from 'react';
import { useNavigate } from 'react-router-dom';

const Invoice = ({id,name,setState,date,balance,setShowInvoiceForm,setDeleteInvoiceId,setUpdateInvoiceId}) => {
  const navigate = useNavigate();
  const handleStateChange = () => {
    navigate(`/invoices/${id}`)
    setState(['DetailedInvoice'])
  }
  return (
    <div className='invoice'>
      <div className='invoice__header'>
        <div className='invoice__logos'>
          <img src='/id-card.png' alt='name-logo' width='20'/>
          <div>Client</div>
        </div>
        <div className='invoice__name'>
          <h4>{name.toUpperCase()}</h4>
        </div>
      </div>
      <div className='invoice__main'>
        <div className='invoice__number'>
          <p>INV-000{id}&nbsp;|&nbsp;<span>{date}</span></p>
        </div>
        <div className='invoice__balance'>
          <p>$&nbsp;{balance}</p>
        </div>
      </div>
      <div className='invoice__footer'>
        <div className='invoice__footer-btns'>
          <button className='invoice__edit' type='submit' id={id} onClick={
            (event)=>{
              setUpdateInvoiceId(event.currentTarget.id)
              setShowInvoiceForm(true)
            }}>Edit</button>
          <button className='invoice__delete' type='submit' id={id} onClick={
            (event)=>{
              setDeleteInvoiceId(event.currentTarget.id)
            }
            }>Delete</button>
        </div>
        <button className='invoice__details' onClick={handleStateChange} id={id}>Details</button>
      </div>
    </div>
  )
}

export default Invoice;