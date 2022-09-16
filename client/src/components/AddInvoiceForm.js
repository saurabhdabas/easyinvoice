import React, { useEffect } from 'react'
import axios from 'axios';
import findSubtotal from '../Helpers/findSubtotal';
const AddInvoiceForm = ({invoices,setInvoices,showInvoiceForm,setShowInvoiceForm,invoiceInputs,setInvoiceInputs,updateInvoiceId,setUpdateInvoiceId}) => {

  useEffect(()=>{
    setInvoiceInputs({...invoiceInputs,subtotal:findSubtotal(invoiceInputs,'tabledata')})
  },[invoiceInputs.tabledata])

  useEffect(()=>{
    setInvoiceInputs({...invoiceInputs,balance:((invoiceInputs.subtotal * 5)/100)+ invoiceInputs.subtotal})
  },[invoiceInputs.subtotal])

  const handleSubmission = (event) => {
    event.preventDefault();
    if(updateInvoiceId){
      axios.put(`http://localhost:8080/invoice/${updateInvoiceId}/update`,{data:invoiceInputs,invoiceId:updateInvoiceId})
      .then((response)=>{
        setInvoices(({...invoices,list:response.data}))
      })
      .then(()=>{
        setUpdateInvoiceId(0)
        setShowInvoiceForm(false)
      })
    }
    else{
      axios.post('http://localhost:8080/invoices/add',{data:invoiceInputs})
      .then((response)=>{
        console.log("response:",response.data.rows)
        axios.get('http://localhost:8080/invoices')
        .then((response)=> {
          setInvoices(({...invoices,list:response.data}))
          setShowInvoiceForm(false)
          console.log('invoices:',invoices);
        })
      })
    }
  } 
  
  const handleNavigation = () => {
    setShowInvoiceForm(false)
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
      title:'',
      date:'',
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
    setUpdateInvoiceId(0)
  }
  
  return (
    <div className='form'>
      {showInvoiceForm 
      ?
      <div className="invoice-info">
      <div className='invoice-info__header'>
        <h1 className='invoice-info__form-title'>Invoice Information</h1>
        <button className='invoice-info__back-btn' type='submit' onClick={handleNavigation}>Go back</button>
      </div>
      <form className='invoice-info__form' onSubmit={handleSubmission}>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='name'><h3>Bill To</h3></label>
            <img src='/id.png' alt='name-logo' width='20' height='20'/>
          </span>
          <input id='name' type='text' name='name' value={invoiceInputs.name} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,name:event.target.value})} placeholder='Jane thomas'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='company'><h3>Company</h3></label>
            <img src='/office.png' alt='company-logo' width='20' height='20'/>
          </span>
          <input id='name' type='text' name='company' value={invoiceInputs.company} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,company:event.target.value})} placeholder='Enter a company name'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='taxnumber'><h3>Tax number</h3></label>
            <img src='/tax.png' alt='taxnumber-logo' width='20' height='20'/>
          </span>
          <input id='taxnumber' type='text' name='taxnumber' value={invoiceInputs.taxnumber} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,taxnumber:event.target.value})} placeholder='Enter your tax number'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='email'><h3>Email id</h3></label>
            <img src='/invoice-id.png' alt='taxnumber-logo' width='20' height='20'/>
          </span>
          <input id='email' type='text' name='email' value={invoiceInputs.email} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,email:event.target.value})} placeholder='Enter the email id'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='date'><h3>Invoice Date</h3></label>
            <img src='/calendar.png' alt='date-logo' width='20' height='20'/>
          </span>
          <input id='date' type='date' name='date' value={invoiceInputs.date} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,date:event.target.value})} placeholder='janethomas@gmail.com'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='title'><h3>Invoice title</h3></label>
            <img src='/tag.png' alt='invoice-logo' width='20' height='20'/>
          </span>
          <input id='title' type='text' name='title' value={invoiceInputs.title} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,title:event.target.value})} placeholder='Enter an invoice title'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='street'><h3>Street</h3></label>
            <img src='/street.png' alt='street-logo' width='20' height='20'/>
          </span>
          <input id='street' type='text' name='street' value={invoiceInputs.street} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,street:event.target.value})} placeholder='Enter your street address'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='city'><h3>City</h3></label>
            <img src='/city.png' alt='city-logo' width='20' height='20'/>
          </span>
          <input id='city' type='text' name='city' value={invoiceInputs.city} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,city:event.target.value})} placeholder='Enter your city'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='zipcode'><h3>Zipcode</h3></label>
            <img src='/pincode.png' alt='zipcode-logo' width='20' height='20'/>
          </span>
          <input id='zipcode' type='text' name='zipcode' value={invoiceInputs.zipcode} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,zipcode:event.target.value})} placeholder='Enter your zipcode'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='province'><h3>Province</h3></label>
            <img src='/state.png' alt='province-logo' width='20' height='20'/>
          </span>
          <input id='province' type='text' name='province' value={invoiceInputs.province} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,province:event.target.value})} placeholder='Enter your province'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='country'><h3>Country</h3></label>
            <img src='/flag.png' alt='country-logo' width='20' height='20'/>
          </span>
          <input id='country' type='text' name='country' value={invoiceInputs.country} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,country:event.target.value})} placeholder='Enter your country'/>
        </div>        
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='message'><h3>Message</h3></label>
            <img src='/message.png' alt='country-logo' width='20' height='20'/>
          </span>
          <input id='message' type='text' name='message' value={invoiceInputs.message} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,message:event.target.value})} placeholder='Enter your message'/>
        </div>
        <div className='invoice-info__input-table'>
          <div>
            <h3>Services</h3>
            <img src='/creative.png' alt='services-logo' width='20' height='20'/>
          </div>
          <table className='invoice-table'>
            <thead>
              <tr className='invoice-table__header'>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total (CAD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='invoice-table__row'>
                  <input id='description' type='text' name='description' value={invoiceInputs.tabledata.rOne.description} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rOne: { ...invoiceInputs.tabledata.rOne,description:event.target.value } }
                    })
                    }}
                    placeholder='Add a description'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='quantity' type='number' name='quantity' value={invoiceInputs.tabledata.rOne.quantity} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rOne: { ...invoiceInputs.tabledata.rOne,quantity:event.target.value } }
                    })
                    
                  }} placeholder='Enter quantity'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='unitprice' type='number' name='unitprice' value={invoiceInputs.tabledata.rOne.unitprice} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rOne:{ ...invoiceInputs.tabledata.rOne,unitprice:event.target.value } }
                    })
                    
                  }} placeholder='Enter unit price'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='total' type='number' name='total' value={invoiceInputs.tabledata.rOne.total} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rOne: { ...invoiceInputs.tabledata.rOne,total:event.target.value } }
                    })
                    }}
                    placeholder='Enter total'/>
                </td>
              </tr>
              <tr>
                <td className='invoice-table__row'>
                  <input id='description' type='text' name='description' value={invoiceInputs.tabledata.rTwo.description} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo: { ...invoiceInputs.tabledata.rTwo,description:event.target.value } }
                    })
                    }}
                    placeholder='Add a description'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='quantity' type='number' name='quantity' value={invoiceInputs.tabledata.rTwo.quantity} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo: { ...invoiceInputs.tabledata.rTwo,quantity:event.target.value } }
                    })
                  }} placeholder='Enter quantity'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='unitprice' type='number' name='unitprice' value={invoiceInputs.tabledata.rTwo.unitprice} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo:{ ...invoiceInputs.tabledata.rTwo,unitprice:event.target.value } }
                    })
                  }} placeholder='Enter unit price'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='total' type='number' name='total' value={invoiceInputs.tabledata.rTwo.total} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo: { ...invoiceInputs.tabledata.rTwo,total:event.target.value } }
                    })
                    }}
                    placeholder='Enter total'/>
                </td>
              </tr>
              <tr>
                <td className='invoice-table__row'>
                  <input id='description' type='text' name='description' value={invoiceInputs.tabledata.rThree.description} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rThree: { ...invoiceInputs.tabledata.rThree,description:event.target.value } }
                    })
                    }}
                    placeholder='Add a description'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='quantity' type='number' name='quantity' value={invoiceInputs.tabledata.rThree.quantity} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rThree: { ...invoiceInputs.tabledata.rThree,quantity:event.target.value } }
                    })
                  }} placeholder='Enter quantity'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='unitprice' type='number' name='unitprice' value={invoiceInputs.tabledata.rThree.unitprice} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rThree:{ ...invoiceInputs.tabledata.rThree,unitprice:event.target.value } }
                    })
                  }} placeholder='Enter unit price'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='total' type='number' name='total' value={invoiceInputs.tabledata.rThree.total} required onChange={(event) => {    
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rThree: { ...invoiceInputs.tabledata.rThree,total:event.target.value } }
                    })
                    }}
                    placeholder='Enter total'/>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className='invoice-table__footer'>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>{invoiceInputs.subtotal}</td>
              </tr>
              <tr className='invoice-table__footer'>
                <td></td>
                <td></td>
                <td>PST (%)</td>
                <td>0.00</td>
              </tr>
              <tr className='invoice-table__footer'>
                <td></td>
                <td></td>
                <td>GST (%)</td>
                <td>5.00</td>
              </tr>
              <tr className='invoice-table__footer'>
                <td></td>
                <td></td>
                <td>Balance</td>
                <td>{invoiceInputs.balance}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button className='invoice-info__submit-btn' type='submit' name='submit-button'>Generate Invoice</button>
      </form>
    </div>
      : 
      null
      }
    </div>
  )
}

export default AddInvoiceForm;
