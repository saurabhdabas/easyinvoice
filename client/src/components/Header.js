import React from 'react';
import { Link } from 'react-router-dom';
import { GrNorton } from "react-icons/gr";
const Header = () => {

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
  }
  
  return (
    <div className='header'>
      <header className='header__header'>
        <span className='header__brand'>
          <GrNorton size={30}/>
          <h2>Easy Invoice</h2>
        </span>
        <Link className="header__button" to="/" onClick={clearLocalStorage}>
          <img src={JSON.parse(localStorage.getItem('user')).avatar} alt='avatar' width='30' height='30'/>
          <h4>Logout</h4>
	      </Link>
      </header>
    </div>
  )
}

export default Header

