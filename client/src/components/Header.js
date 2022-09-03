import React,{useState} from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  const [search,setSearch] = useState('');
  const [category,setCategory] = useState('');

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
        <span className='header__search'>
          <div className='header__search-wrapper'>
            <img src='./search.png' alt='search-icon' width='25' height='25'/>
            <input className='header__datalist' name="category" list="categories" placeholder="Category" value={category} onChange={(event)=>setCategory(event.target.value)}/>
            <datalist id="categories">
              <option value="Customers"/>
              <option value="Invoices"/>
            </datalist>
            <input 
              className='header__search-input' 
              type='text' 
              placeholder='Enter your search'
              value={search} 
              onChange={(event)=>setSearch(event.target.value)}
            />
          </div>
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

