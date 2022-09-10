import React from 'react';

const Customer = ({name,country,city,province,company,taxnumber}) => {
  return (
    <div className='customer'>
      <div className='customer__header'>
        <div className='customer__logos'>
          <img src='/id-card.png' alt='name-logo' width='20' height='20'/>
          <p>Client</p>
          <img src='/office-building.png' alt='company-logo' width='20' height='20'/>
          <p>Company</p>
        </div>
        <div className='customer__name'>
          <h4>{name.toUpperCase()}</h4>
          <h4>{company.toUpperCase()}</h4>
        </div>
      </div>
      <div className='customer__main'>
        <div className='customer__taxnumber'>
          <h4>Tax #</h4>
          <p>{taxnumber}</p>
        </div>
        <div className='customer__address'>
          <h4>Location</h4>
          <p>{`${city.toUpperCase()},${province.toUpperCase()},${country.toUpperCase()}`}</p>
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
