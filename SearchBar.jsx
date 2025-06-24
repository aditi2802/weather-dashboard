import React, {useState, useEffect} from 'react';
import './SearchBar.css';

function SearchBar({onSearch}){
  const [input, setInput] = useState('');
  
  const handleSearch = () => {
    if(input.trim()){
      onSearch(input);
    }
  }
  
  return(
    <div className="search-bar">
      <input
        type="text"
        value={input}
        onChange = {(e) => setInput(e.target.value)}
        placeHolder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    );
}

export default SearchBar;