import React from 'react';

const Book = ({ title, cover, author, publishedDate }) => {
  return (
    <div>
      <img src={cover} alt={title ? `Cover of the book titled ${title}` : 'Book cover'} />
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Published Date: {publishedDate}</p>
    </div>
  );
};

export default Book;
