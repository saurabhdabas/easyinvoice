import React from 'react';

const SideNavigation = () => {
  return (
    <div className='sideNavigation'>
      <ul className='sideNavigation__items'>
        <li className='sideNavigation__item'>
          <img src='./customer.png' alt='list-item-logo' width='30' height='30'/>
          <h3>Customers</h3>
        </li>
        <li className='sideNavigation__item'>
          <img src='./invoice.png' alt='list-item-logo' width='30' height='30'/>
          <h3>Invoices</h3>
        </li>
      </ul>
    </div>
  )
}

export default SideNavigation
