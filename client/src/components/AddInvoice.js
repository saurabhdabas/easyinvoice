import React from 'react';
import AddInvoiceForm from './AddInvoiceForm';
import { AiOutlinePlusCircle } from "react-icons/ai";

const AddInvoice = ({invoices,setInvoices,showInvoiceForm,setShowInvoiceForm,invoiceInputs,setInvoiceInputs,updateInvoiceId,setUpdateInvoiceId,loading,setLoading}) => {  
  return (
    <React.Fragment>
      {!showInvoiceForm ?
        <div className='invoices__AddInvoice'>
          <AiOutlinePlusCircle size={50} onClick={()=>{
            setInvoiceInputs({
              orderid:'',
              customerid:'',
              name:'',
              email:'',
              photo:'',
              logo:'',
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
              total:0,
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
        <AddInvoiceForm invoices={invoices} setInvoices={setInvoices} showInvoiceForm={showInvoiceForm} setShowInvoiceForm={setShowInvoiceForm} invoiceInputs={invoiceInputs} setInvoiceInputs={setInvoiceInputs} updateInvoiceId={updateInvoiceId} setUpdateInvoiceId={setUpdateInvoiceId} loading={loading} setLoading={setLoading}/>
      }
    </React.Fragment>
  )
}

export default AddInvoice
