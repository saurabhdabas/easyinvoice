import React from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { BsPeopleFill } from "react-icons/bs";
import { GrNorton } from "react-icons/gr";
import { AiFillLayout, AiFillSnippets, AiFillCaretDown, AiFillDatabase } from "react-icons/ai";

const SideNavigation = ({state,setState,history}) => {
  const navigate = useNavigate();
  console.log("state:",state);
  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    setState(['Dashboard']);
  }
  return (
    <div className='sideNavigation'>
      <div className='sideNavigation__header'>
        <div className='sideNavigation__brand'>
          <GrNorton size={40}/>
          <h2>Easy Invoice</h2>
        </div>
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
            <AiFillLayout size={30} style={{marginRight:'10'}}/>
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
          <li 
          aria-label='Orders' 
          className={state.includes('Orders') || state.includes('DetailedOrder')? 'sideNavigation__item active' : 'sideNavigation__item'} 
          onClick={
            (event)=>{
              setState([event.currentTarget.ariaLabel]);
              history.push("/orders", { value: event.currentTarget.ariaLabel });
            }}
          >
            <AiFillDatabase size={30}/>
            <h3>Orders</h3>
          </li>
        </ul>
      </div>
      <div className="sideNavigation__account">
        <div className="sideNavigation__userImage" to="/" onClick={clearLocalStorage}>
          <img src={JSON.parse(localStorage.getItem('user')).avatar} alt='avatar' width='40' height='40'/>
	      </div>
        <div className="sideNavigation__account-description">
          <h4>Account&nbsp;<AiFillCaretDown/></h4>
          <h5>{JSON.parse(localStorage.getItem('user')).email}</h5>
          <Link className="sideNavigation__logout" to="/" onClick={clearLocalStorage}>
          <h4>Logout</h4>
	      </Link>
        </div>
      </div>
    </div>
  )
}

export default SideNavigation
