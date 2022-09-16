import React from 'react';

const Invoice = ({id,name,company,date,balance,setShowInvoiceForm,setDeleteInvoiceId,setUpdateInvoiceId}) => {


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
          <p><a href={`/invoices/${id}`}>INV-000{id}</a>&nbsp;|&nbsp;<span>{date}</span></p>
        </div>
        <div className='invoice__balance'>
          <p>$&nbsp;{balance}</p>
        </div>
      </div>
      <div className='invoice__footer'>
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
    </div>
  )
}

export default Invoice;