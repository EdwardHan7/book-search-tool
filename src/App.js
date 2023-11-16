import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import { searchBooks } from './services/BookService';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (title) => {
    const results = await searchBooks(title);
    console.log('Search results for:', title, results); // 这行会打印搜索结果sa
    setBooks(results);
  };

  const sortByTitle = () => {
    const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
    setBooks(sortedBooks);
  };

  const sortByDate = () => {
    const sortedBooks = [...books].sort((a, b) => new Date(b.first_publish_year) - new Date(a.first_publish_year));
    setBooks(sortedBooks);
  };

  return (
    <div className="container">
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="sorting-buttons">
        <button onClick={sortByTitle}>Sort by Title</button>
        <button onClick={sortByDate}>Sort by Published Date</button>
      </div>
      <BookList books={books} className="book-list"/>
    </div>
  );
};

export default App;
