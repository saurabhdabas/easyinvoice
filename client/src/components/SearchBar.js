import React,{useState} from 'react';

const SearchBar = () => {
  const [search,setSearch] = useState('');
  return (
    <div className='search'>
      <img src='./loupe.png' alt='search-icon' width='25' height='25'/>
      <input 
        className='search__input' 
        type='text' 
        placeholder='Search Customers'
        value={search} 
        onChange={(event)=>setSearch(event.target.value)}
      />
    </div>
  )
}

export default SearchBar;
