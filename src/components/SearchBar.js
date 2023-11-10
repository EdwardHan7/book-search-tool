import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      try {
        await onSearch(searchTerm);
      } catch (error) {
        console.error('Failed to search books:', error);
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        id="book-search"
        type="text"
        placeholder="Search for books by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        aria-label="Search for books"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
