import React, { useState } from 'react';
import './BlogPost.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = e => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform search logic here
    console.log(searchValue);
  };

  return (
    <div className="search-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearch}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
