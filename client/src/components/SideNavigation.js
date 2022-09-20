import React from 'react';
import {useNavigate} from 'react-router-dom';
import { BsPeople } from "react-icons/bs";
import { AiOutlineLayout, AiOutlineSnippets } from "react-icons/ai";

const SideNavigation = ({state,setState,history}) => {
  const navigate = useNavigate();
  console.log("state:",state);
  return (
    <div className='sideNavigation'>
      <ul className='sideNavigation__items'>
        <li 
        aria-label='Dashboard' 
        className={state.includes('Dashboard') ? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
          (event)=>{
            setState([event.currentTarget.ariaLabel])
            history.push("/dashboard", { value: event.currentTarget.ariaLabel });
          }}
        >
          <AiOutlineLayout size={30}/>
          <h3>Dashboard</h3>
        </li>
        <li 
        aria-label='Customers' 
        className={state.includes('Customers')  || state.includes('DetailedCustomer')? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
          (event)=>{
            setState([event.currentTarget.ariaLabel])
            history.push("/customers", { value: event.currentTarget.ariaLabel });
          }}
        >
          <BsPeople size={30}/>
          <h3>Customers</h3>
        </li>
        <li 
        aria-label='Invoices' 
        className={state.includes('Invoices') || state.includes('DetailedInvoice')? 'sideNavigation__item active' : 'sideNavigation__item'} 
        onClick={
          (event)=>{
            setState([event.currentTarget.ariaLabel])
            history.push("/invoices", { value: event.currentTarget.ariaLabel });
          }}
        >
          <AiOutlineSnippets size={30}/>
          <h3>Invoices</h3>
        </li>
      </ul>
    </div>
  )
}

export default SideNavigation
