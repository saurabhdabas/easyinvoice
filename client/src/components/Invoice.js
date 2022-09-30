import React from 'react';

import { useNavigate } from 'react-router-dom';

const Invoice = ({orderId,customerId,name,photo,logo,company,invoiceId,setInvoiceId,setState,date,balance,setShowInvoiceForm,setDeleteInvoiceId,setUpdateInvoiceId}) => {
  const navigate = useNavigate();
  
  return (
    <div className='invoice'>
      <div className='invoice__header'>
        <div className='invoice__name'>
          <img src={photo} alt="customer-image" width="30" height="30"/>
          <h5>{name.toUpperCase()}</h5>
        </div>
        <div className='invoice__logos'>
          <img src={logo} alt='name-logo' width='20' height='20'/>
          <h3>{company.toUpperCase()}</h3>
        </div>
      </div>
      <hr className="invoice__rule"/>
      <div className='invoice__main'>
        <div className='invoice__number'>
          <p>INV-000{invoiceId}&nbsp;|&nbsp;<span>{date}</span></p>
        </div>
        <div className='invoice__balance'>
          <p>$&nbsp;{balance}</p>
        </div>
      </div>
      <div className='invoice__main'>
        <div className='invoice__number'>
          <p className='invoice__customerId'>Customer # 000{customerId}</p>
          &nbsp;|&nbsp;
          <p className='invoice__orderId'>Order # 000{orderId}</p>
        </div>
      </div>
      <div className='invoice__footer'>
        <div className='invoice__footer-btns'>
          <button className='invoice__edit' type='submit' id={invoiceId} onClick={
            (event)=>{
              setUpdateInvoiceId(event.currentTarget.id)
              setShowInvoiceForm(true)
            }}>Edit</button>
          <button className='invoice__delete' type='submit' id={invoiceId} onClick={
            (event)=>{
              setDeleteInvoiceId(event.currentTarget.id)
            }
            }>Delete</button>
        </div>
        <button 
        className='invoice__details'
        id={invoiceId} 
        onClick={()=>{
          setInvoiceId(invoiceId);
          setState(['DetailedInvoice']);
          navigate(`/invoices/${invoiceId}`);
        }} >Details</button>
      </div>
    </div>
  )
}

export default Invoice;