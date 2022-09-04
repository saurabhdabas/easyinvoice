import React from 'react'

const Customer = () => {
  return (
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__logo'>
          <h2>P</h2>
        </div>
        <div className='customer__name'>
          <h3>Abigail</h3>
          <h3>Portronics Ltd.</h3>
        </div>
      </div>
      <div className='customer__main'>
        <div className='customer__taxnumber'>
          <p>Tax #</p>
          <p>037-9865</p>
        </div>
        <div className='customer__address'>
          <p>Location</p>
          <p>Edmonton,Alberta,Canada</p>
        </div>
      </div>
      <div className='customer__footer'>
        <button className='customer__edit' type='submit'>Edit</button>
        <button className='customer__delete' type='submit'>Delete</button>
      </div>
    </div>
  )
}

export default Customer;
