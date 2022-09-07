import React from 'react';
import {useNavigate} from 'react-router-dom'
const SideNavigation = ({state,setState}) => {
  console.log(state);
  const navigate = useNavigate()
  return (
    <div className='sideNavigation'>
      <ul className='sideNavigation__items'>
        <li 
        aria-label='Dashboard' 
        className={state.includes('Dashboard') ? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
        (event)=>{
          setState([event.currentTarget.ariaLabel]);
        }}
        >
          <img src='./dashboard.png' alt='list-item-logo' width='30' height='30'/>
          <h3>Dashboard</h3>
        </li>
        <li 
        aria-label='Customers' 
        className={state.includes('Customers') ? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
          (event)=>{
            setState([event.currentTarget.ariaLabel])
            navigate('/customers');
          }}
        >
          <img src='./customer.png' alt='list-item-logo' width='30' height='30'/>
          <h3>Customers</h3>
        </li>
        <li 
        aria-label='Invoices' 
        className={state.includes('Invoices') ? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
        (event)=>{
          setState([event.currentTarget.ariaLabel])
        }}
        >
          <img src='./invoice.png' alt='list-item-logo' width='30' height='30'/>
          <h3>Invoices</h3>
        </li>
      </ul>
    </div>
  )
}

export default SideNavigation
