import React, { useEffect } from 'react';
import searchcustomers from '../Helpers/searchcustomers';
const SearchBar = ({search,setSearch,customers,setSearchedCustomer}) => {
  useEffect(()=>{
    searchcustomers(search,customers)
    if(search){
      setSearchedCustomer([...searchcustomers(search,customers)]);
    }
  },[search])
  return (
    <div className='search'>
      <img src='./loupe.png' alt='search-icon' width='25' height='25'/>
      <input 
        className='search__input' 
        type='text' 
        placeholder='Search Customers'
        value={search} 
        onChange={(event)=>{
          setSearch(event.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar;
