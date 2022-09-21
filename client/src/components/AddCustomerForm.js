import React from 'react'
import axios from 'axios';
import { 
  AiOutlineIdcard,
  AiOutlineMail,
  AiOutlinePicture,
  AiOutlineShop,
  AiOutlineNumber,
  AiOutlineEnvironment,
  AiOutlineFlag,
  AiOutlineArrowLeft,
  AiOutlineCalendar,
  AiOutlinePhone
  } from "react-icons/ai";
const AddCustomerForm = ({customers,setCustomers,showForm,setShowForm,inputs,setInputs,updateCustomerId,setUpdateCustomerId,loading,setLoading,todaysDate}) => {

  const handleSubmission = (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(()=>{
      if(updateCustomerId){
        console.log("updateCustomerId:",updateCustomerId);
        axios.put(`http://localhost:8080/customers/${updateCustomerId}/update`,{data:inputs,customerId:updateCustomerId})
        .then((response)=>{
          console.log("response:",response);
          setCustomers(({...customers,list:response.data}))
        })
        .then(()=>{
          setUpdateCustomerId(0)
          setShowForm(false)
        })
      }
      else{
        axios.post('http://localhost:8080/customers/add',{data:inputs})
        .then((response)=>{
          console.log("response:",response);
          axios.get('http://localhost:8080/customers')
          .then((response)=> {
            setCustomers(({...customers,list:response.data}))
            setShowForm(false)
          })
        })
      }
      setLoading(false);
    },2000)
  }

  const handleNavigation = () => {
    setShowForm(false)
    setInputs({
      name:'',
      photo:'',
      phone:'',
      date:todaysDate,
      email:'',
      country:'',
      street:'',
      city:'',
      province:'',
      zipcode:'',
      company:'',
      logo:'',
      taxnumber:''
    })
    setUpdateCustomerId(0)
  }

  return (
    <div className='form'>
      {showForm 
      ?
      <div className="customer-info">
      <div className='customer-info__header'>
        <h1 className='customer-info__form-title'>Client Information</h1>
        <button className='customer-info__back-btn' type='submit' onClick={handleNavigation}>
          <AiOutlineArrowLeft size={30}/>
        </button>
      </div>
      <form className='customer-info__form' onSubmit={handleSubmission}>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='name'><h3>Client Name</h3></label>
            <AiOutlineIdcard color={'#2287E3'} size={20}/>
          </span>
          <input id='name' type='text' name='name' value={inputs.name} required onChange={(event)=>setInputs({...inputs,name:event.target.value})} placeholder='Jane thomas'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='photo'><h3>Photo</h3></label>
            <AiOutlinePicture color={'#2287E3'} size={20}/>
          </span>
          <input id='photo' type='text' name='photo' value={inputs.photo} required onChange={(event)=>setInputs({...inputs,photo:event.target.value})} placeholder='Paste a URL for photo'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='date'><h3>Today's date</h3></label>
            <AiOutlineCalendar color={'#2287E3'} size={20}/>
          </span>
          <input id='date' type='text' name='date' value={inputs.date} disabled required/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='email'><h3>Email</h3></label>
            <AiOutlineMail color={'#2287E3'} size={20}/>
          </span>
          <input id='email' type='email' name='email' value={inputs.email} required onChange={(event)=>setInputs({...inputs,email:event.target.value})} placeholder='janethomas@gmail.com'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='phone'><h3>Phone</h3></label>
            <AiOutlinePhone color={'#2287E3'} size={20}/>
          </span>
          <input id='phone' type='tel' name='phone' value={inputs.phone} required onChange={(event)=>setInputs({...inputs,phone:event.target.value})} placeholder='658-712-0480'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='logo'><h3>Company logo</h3></label>
            <AiOutlinePicture color={'#2287E3'} size={20}/>
          </span>
          <input id='logo' type='text' name='logo' value={inputs.logo} required onChange={(event)=>setInputs({...inputs,logo:event.target.value})} placeholder='Paste a URL for logo'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='company'><h3>Company</h3></label>
            <AiOutlineShop color={'#2287E3'} size={20}/>
          </span>
          <input id='company' type='text' name='company' value={inputs.company} required onChange={(event)=>setInputs({...inputs,company:event.target.value})} placeholder='Computronix'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='taxnumber'><h3>Tax number</h3></label>
            <AiOutlineNumber color={'#2287E3'} size={20}/>
          </span>
          <input id='taxnumber' type='text' name='taxnumber' value={inputs.taxnumber} required onChange={(event)=>setInputs({...inputs,taxnumber:event.target.value})} placeholder='645-4356'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='street'><h3>Street</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='street' type='text' name='street' value={inputs.street} required onChange={(event)=>setInputs({...inputs,street:event.target.value})} placeholder='56 Ave SE'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='city'><h3>City</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='city' type='text' name='city' value={inputs.city} required onChange={(event)=>setInputs({...inputs,city:event.target.value})} placeholder='Lethbridge'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='zipcode'><h3>Zipcode</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='zipcode' type='text' name='zipcode' value={inputs.zipcode} required onChange={(event)=>setInputs({...inputs,zipcode:event.target.value})} placeholder='TK8 0T5'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='province'><h3>Province</h3></label>
            <AiOutlineEnvironment color={'#2287E3'} size={20}/>
          </span>
          <input id='province' type='text' name='province' value={inputs.province} required onChange={(event)=>setInputs({...inputs,province:event.target.value})} placeholder='Yukon'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='country'><h3>Country</h3></label>
            <AiOutlineFlag color={'#2287E3'} size={20}/>
          </span>
          <input id='country' type='text' name='country' value={inputs.country} required onChange={(event)=>setInputs({...inputs,country:event.target.value})} placeholder='Canada'/>
        </div>
        <div className='customer-info__input'>

        </div>
        <button className='customer-info__submit-btn' type='submit' name='submit-button'>
          {loading ? <div className="lds-hourglass"></div> : 'Submit' }
        </button>
      </form>
    </div>
      : 
      null
      }
    </div>
  )
}

export default AddCustomerForm
