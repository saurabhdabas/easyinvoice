import React from 'react';

const Customer = ({name,country,city,province,company,taxnumber}) => {
  return (
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__logo'>
          <h2>{company[0]}</h2>
        </div>
        <div className='customer__name'>
          <h3>{name}</h3>
          <h3>{company}</h3>
        </div>
      </div>
      <div className='customer__main'>
        <div className='customer__taxnumber'>
          <p>Tax #</p>
          <p>{taxnumber}</p>
        </div>
        <div className='customer__address'>
          <p>Location</p>
          <p>{`${city},${province},${country}`}</p>
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
