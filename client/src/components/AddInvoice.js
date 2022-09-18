import React from 'react';
import AddInvoiceForm from './AddInvoiceForm';


const AddInvoice = ({invoices,setInvoices,showInvoiceForm,setShowInvoiceForm,invoiceInputs,setInvoiceInputs,updateInvoiceId,setUpdateInvoiceId}) => {  
  return (
    <React.Fragment>
      {!showInvoiceForm ?
        <div className='invoices__AddInvoice'>
          <img src='./plus.png' alt='add-icon' width='50' height='50' onClick={()=>{
            setInvoiceInputs({
              name:'',
              email:'',
              country:'',
              street:'',
              city:'',
              province:'',
              zipcode:'',
              company:'',
              taxnumber:'',
              phone:'',
              title:'',
              date:'',
              duedate:'',
              notes:'',
              subtotal:0,
              balance:0,
              message:'Thank You for your business!',
              tabledata:{
                rOne:{
                  description:'',quantity:0,unitprice:0,total:0},
                rTwo:{
                  description:'',quantity:0,unitprice:0,total:0},
                rThree:{
                  description:'',quantity:0,unitprice:0,total:0},
              }
            })
            setShowInvoiceForm(true)
            }}/>
          <h2>Generate an Invoice</h2>
        </div> : 
        <AddInvoiceForm invoices={invoices} setInvoices={setInvoices} showInvoiceForm={showInvoiceForm} setShowInvoiceForm={setShowInvoiceForm} invoiceInputs={invoiceInputs} setInvoiceInputs={setInvoiceInputs} updateInvoiceId={updateInvoiceId} setUpdateInvoiceId={setUpdateInvoiceId}/>
      }
    </React.Fragment>
  )
}

export default AddInvoice
