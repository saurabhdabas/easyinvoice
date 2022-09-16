import React from 'react';

const Invoice = ({id,name,country,city,province,company,taxnumber,invoicetitle,message,setShowInvoiceForm,setDeleteInvoiceId,setUpdateInvoiceId}) => {


  return (
    <div className='invoice'>
      <div className='invoice__header'>
        <div className='invoice__logos'>
          <img src='/id-card.png' alt='name-logo' width='20' height='20'/>
          <p>Client</p>
          <img src='/office-building.png' alt='company-logo' width='20' height='20'/>
          <p>Company</p>
        </div>
        <div className='invoice__name'>
          <h4>{name.toUpperCase()}</h4>
          <h4>{company.toUpperCase()}</h4>
        </div>
      </div>
      <div className='invoice__main'>
        <div className='invoice__taxnumber'>
          <h4>Tax #</h4>
          <p>{taxnumber}</p>
        </div>
        <div className='invoice__address'>
          <h4>Location</h4>
          <p>{`${city.toLowerCase()},${province.toLowerCase()},${country.toLowerCase()}`}</p>
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