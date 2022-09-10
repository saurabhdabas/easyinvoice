import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
  }
  
  return (
    <div className='header'>
      <header className='header__header'>
        <span className='header__brand'>
          <img src='./bill.png' alt='brand-logo' width='50' height='50'/>
          <h2>Easy Invoice</h2>
        </span>
        <Link className="header__button" to="/" onClick={clearLocalStorage}>
          <img src={JSON.parse(localStorage.getItem('user')).avatar} alt='avatar' width='50' height='40'/>
          <h4>Logout</h4>
	      </Link>
      </header>
    </div>
  )
}

export default Header

