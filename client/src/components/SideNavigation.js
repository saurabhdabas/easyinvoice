import React from 'react';
import {useNavigate} from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { AiFillLayout, AiFillSnippets, AiFillCaretDown } from "react-icons/ai";

const SideNavigation = ({state,setState,history}) => {
  const navigate = useNavigate();
  console.log("state:",state);
  const clearLocalStorage = () => {
    localStorage.removeItem('user');
  }
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
          <AiFillLayout size={30}/>
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
          <BsPeopleFill size={30}/>
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
          <AiFillSnippets size={30}/>
          <h3>Invoices</h3>
        </li>
      </ul>
      <div className="sideNavigation__account">
        <div className="sideNavigation__userImage" to="/" onClick={clearLocalStorage}>
          <img src={JSON.parse(localStorage.getItem('user')).avatar} alt='avatar' width='50' height='50'/>
	      </div>
        <div className="sideNavigation__account-description">
          <h3>Account&nbsp;<AiFillCaretDown/></h3>
          <h4>{JSON.parse(localStorage.getItem('user')).email}</h4>
        </div>
      </div>
    </div>
  )
}

export default SideNavigation
