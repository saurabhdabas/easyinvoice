import React, {useEffect } from 'react'
import axios from 'axios';
import findSubtotal from '../Helpers/findSubtotal';
import { 
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlinePicture,
  AiOutlineShop,
  AiOutlineNumber,
  AiOutlineEnvironment,
  AiOutlineFlag,
  AiOutlineArrowLeft,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineTag,
  AiOutlineMessage,
  AiOutlineCheckCircle
  } from "react-icons/ai";

const AddInvoiceForm = ({invoices,setInvoices,showInvoiceForm,setShowInvoiceForm,invoiceInputs,setInvoiceInputs,updateInvoiceId,setUpdateInvoiceId,loading,setLoading}) => {

  useEffect(()=>{
    setInvoiceInputs({...invoiceInputs,subtotal:findSubtotal(invoiceInputs,'tabledata')})
  },[invoiceInputs.tabledata])

  useEffect(()=>{
    setInvoiceInputs({...invoiceInputs,balance:((invoiceInputs.subtotal * 5)/100)+ invoiceInputs.subtotal})
  },[invoiceInputs.subtotal])

  const handleSubmission = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(()=>{
      if(updateInvoiceId){
        console.log(updateInvoiceId);
        axios.put(`http://localhost:8080/invoices/${updateInvoiceId}/update`,{data:invoiceInputs,invoiceId:updateInvoiceId})
        .then((response)=>{
          setInvoices(({...invoices,list:response.data}))
        })
        .then(()=>{
          setUpdateInvoiceId(0)
          setShowInvoiceForm(false)
        })
      }
      else {
        axios.post('http://localhost:8080/invoices/add',{data:invoiceInputs})
        .then(()=>{
          axios.get('http://localhost:8080/invoices')
          .then((response)=>{
            setInvoices(({...invoices,list:response.data}))
          })
          setShowInvoiceForm(false)
        })
      }
      setLoading(false)
    },[2000])
  } 

  const handleNavigation = () => {
    setShowInvoiceForm(false)
    setInvoiceInputs({
      orderId:0,
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
        <button className='invoice-info__back-btn' type='submit' onClick={handleNavigation}>
          <AiOutlineArrowLeft size={30}/>
        </button>
      </div>
      <form className='invoice-info__form' onSubmit={handleSubmission}>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='orderid'><h3>Order Id</h3></label>
            <AiOutlineNumber color={'#2287E3'} size={20}/>
          </span>
          <input id='orderid' type='text' name='orderid' value={invoiceInputs.orderId} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,orderId:event.target.value})} placeholder='Enter Order Id'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='name'><h3>Bill To</h3></label>
            <AiOutlineIdcard color={'#2287E3'} size={20}/>
          </span>
          <input id='name' type='text' name='name' value={invoiceInputs.name} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,name:event.target.value})} placeholder='Jane thomas'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='photo'><h3>Photo</h3></label>
            <AiOutlinePicture color={'#2287E3'} size={20}/>
          </span>
          <input id='photo' type='text' name='photo' value={invoiceInputs.photo} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,photo:event.target.value})} placeholder='Paste an image URL'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='company'><h3>Company logo</h3></label>
            <AiOutlinePicture color={'#2287E3'} size={20}/>
          </span>
          <input id='logo' type='text' name='logo' value={invoiceInputs.logo} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,logo:event.target.value})} placeholder='Paste an image URL'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='company'><h3>Company</h3></label>
            <AiOutlineShop color={'#2287E3'} size={20}/>
          </span>
          <input id='name' type='text' name='company' value={invoiceInputs.company} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,company:event.target.value})} placeholder='Microsoft'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='taxnumber'><h3>Tax number</h3></label>
            <AiOutlineNumber color={'#2287E3'} size={20}/>
          </span>
          <input id='taxnumber' type='text' name='taxnumber' value={invoiceInputs.taxnumber} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,taxnumber:event.target.value})} placeholder='002-9865'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='email'><h3>Email id</h3></label>
            <AiOutlineMail color={'#2287E3'} size={20}/>
          </span>
          <input id='email' type='text' name='email' value={invoiceInputs.email} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,email:event.target.value})} placeholder='janethomas@gmail.com'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='phone'><h3>Phone number</h3></label>
            <AiOutlinePhone color={'#2287E3'} size={20}/>
          </span>
          <input id='phone' type='tel' name='phone' value={invoiceInputs.phone} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,phone:event.target.value})} placeholder='438-650-0271'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='date'><h3>Invoice Date</h3></label>
            <AiOutlineCalendar color={'#2287E3'} size={20}/>
          </span>
          <input id='date' type='date' name='date' value={invoiceInputs.date} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,date:event.target.value})}/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='duedate'><h3>Due Date</h3></label>
            <AiOutlineCalendar color={'#2287E3'} size={20}/>
          </span>
          <input id='duedate' type='date' name='duedate' value={invoiceInputs.duedate} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,duedate:event.target.value})} />
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='title'><h3>Invoice title</h3></label>
            <AiOutlineTag color={'#2287E3'} size={20}/>
          </span>
          <input id='title' type='text' name='title' value={invoiceInputs.title} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,title:event.target.value})} placeholder='website redesigning'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='street'><h3>Street</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='street' type='text' name='street' value={invoiceInputs.street} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,street:event.target.value})} placeholder='56 Ave NW'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='city'><h3>City</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='city' type='text' name='city' value={invoiceInputs.city} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,city:event.target.value})} placeholder='Calgary'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='zipcode'><h3>Zipcode</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='zipcode' type='text' name='zipcode' value={invoiceInputs.zipcode} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,zipcode:event.target.value})} placeholder='T3K 0T4'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='province'><h3>Province</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='province' type='text' name='province' value={invoiceInputs.province} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,province:event.target.value})} placeholder='Alberta'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='country'><h3>Country</h3></label>
            <AiOutlineFlag color={'#2287E3'} size={20}/>
          </span>
          <input id='country' type='text' name='country' value={invoiceInputs.country} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,country:event.target.value})} placeholder='Canada'/>
        </div>        
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='message'><h3>Message</h3></label>
            <AiOutlineMessage color={'#2287E3'} size={20}/>
          </span>
          <input id='message' type='text' name='message' value={invoiceInputs.message} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,message:event.target.value})} placeholder='Enter your message'/>
        </div>
        <div className='invoice-info__input'>
          <span>
            <label htmlFor='remarks'><h3>Remarks</h3></label>
            <AiOutlineMessage color={'#2287E3'} size={20}/>
          </span>
          <input id='remarks' type='text' name='remarks' value={invoiceInputs.notes} required onChange={(event)=>setInvoiceInputs({...invoiceInputs,notes:event.target.value})} placeholder='Additional Remarks'/>
        </div>
        <div className='invoice-info__input-table'>
          <div>
            <h3>Services</h3>
            <AiOutlineCheckCircle color={'#2287E3'} size={20}/>
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
                  <input id='quantity' type='number' min='0' name='quantity' value={invoiceInputs.tabledata.rTwo.quantity} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo: { ...invoiceInputs.tabledata.rTwo,quantity:event.target.value } }
                    })
                  }} placeholder='Enter quantity'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='unitprice' type='number' min='0' name='unitprice' value={invoiceInputs.tabledata.rTwo.unitprice} required onChange={(event)=>{
                    setInvoiceInputs(
                    {...invoiceInputs,tabledata:{...invoiceInputs.tabledata,rTwo:{ ...invoiceInputs.tabledata.rTwo,unitprice:event.target.value } }
                    })
                  }} placeholder='Enter unit price'/>
                </td>
                <td className='invoice-table__row'>
                  <input id='total' type='number' min='0' name='total' value={invoiceInputs.tabledata.rTwo.total} required onChange={(event) => {    
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
                <td>$&nbsp;{invoiceInputs.subtotal}</td>
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
                <td>$&nbsp;{invoiceInputs.balance}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <button className='invoice-info__submit-btn' type='submit' name='submit-button'>
          {loading ? <div className="lds-hourglass"></div> : 'Generate Invoice' }
        </button>
      </form>
    </div>
      : 
      null
      }
    </div>
  )
}

export default AddInvoiceForm;
