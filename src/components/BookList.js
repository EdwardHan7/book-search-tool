import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <Book
          key={index}
          title={book.title.length > 25 ? book.title.substring(0, 25) + '...' : book.title}
          cover={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'https://via.placeholder.com/128x200?text=No%20Cover'}
          author={book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
          publishedDate={book.first_publish_year ? book.first_publish_year : 'Unknown Date'}
        />
      ))}
    </div>
  );
};

export default BookList;
