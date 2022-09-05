import React,{useState} from 'react'

const CustomerInfoForm = () => {
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    country:'',
    street:'',
    city:'',
    province:'',
    zipcode:'',
    company:'',
    taxnumber:''
  })
  const handleSubmission = (event) => {
    event.preventDefault();
    console.log('Inputs:',inputs);
  }
  return (
    <div className="customer-info">
      <h1 className='customer-info__form-title'>Client Information</h1>
      <form className='customer-info__form'>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='name'><h3>Client Name</h3></label>
            <img src='/id.png' alt='name-logo' width='20' height='20'/>
          </span>
          <input id='name' type='text' name='name' value={inputs.name} onChange={(event)=>setInputs({...inputs,name:event.target.value})} placeholder='Jane thomas'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='email'><h3>Email</h3></label>
            <img src='/email.png' alt='email-logo' width='20' height='20'/>
          </span>
          <input id='email' type='email' name='email' value={inputs.email} onChange={(event)=>setInputs({...inputs,email:event.target.value})} placeholder='janethomas@gmail.com'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='company'><h3>Company</h3></label>
            <img src='/office.png' alt='company-logo' width='20' height='20'/>
          </span>
          <input id='name' type='text' name='company' value={inputs.company} onChange={(event)=>setInputs({...inputs,company:event.target.value})} placeholder='Enter a company name'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='taxnumber'><h3>Tax number</h3></label>
            <img src='/tax.png' alt='taxnumber-logo' width='20' height='20'/>
          </span>
          <input id='taxnumber' type='text' name='taxnumber' value={inputs.taxnumber} onChange={(event)=>setInputs({...inputs,taxnumber:event.target.value})} placeholder='Enter your tax number'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='street'><h3>Street</h3></label>
            <img src='/street.png' alt='street-logo' width='20' height='20'/>
          </span>
          <input id='street' type='text' name='street' value={inputs.street} onChange={(event)=>setInputs({...inputs,street:event.target.value})} placeholder='Enter your street address'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='city'><h3>City</h3></label>
            <img src='/city.png' alt='city-logo' width='20' height='20'/>
          </span>
          <input id='city' type='text' name='city' value={inputs.city} onChange={(event)=>setInputs({...inputs,city:event.target.value})} placeholder='Enter your city'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='zipcode'><h3>Zipcode</h3></label>
            <img src='/pincode.png' alt='zipcode-logo' width='20' height='20'/>
          </span>
          <input id='zipcode' type='text' name='zipcode' value={inputs.zipcode} onChange={(event)=>setInputs({...inputs,zipcode:event.target.value})} placeholder='Enter your zipcode'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='province'><h3>Province</h3></label>
            <img src='/state.png' alt='province-logo' width='20' height='20'/>
          </span>
          <input id='province' type='text' name='province' value={inputs.province} onChange={(event)=>setInputs({...inputs,province:event.target.value})} placeholder='Enter your province'/>
        </div>
        <div className='customer-info__input'>
          <span>
            <label htmlFor='country'><h3>Country</h3></label>
            <img src='/flag.png' alt='country-logo' width='20' height='20'/>
          </span>
          <input id='country' type='text' name='country' value={inputs.country} onChange={(event)=>setInputs({...inputs,country:event.target.value})} placeholder='Enter your country'/>
        </div>
      </form>
      <button className='customer-info__submit-btn' type='submit' name='submit-button'  onClick={handleSubmission}>Submit</button>
    </div>
  
  )
}

export default CustomerInfoForm