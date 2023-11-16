import React from 'react';
import { render, screen } from '@testing-library/react';
import Book from './Book';

describe('Book Component', () => {
  const mockBook = {
    title: 'Test Book',
    cover: 'http://example.com/cover.jpg',
    author: 'Test Author',
    publishedDate: '2021',
  };

  test('renders book information', () => {
    render(
      <Book
        title={mockBook.title}
        cover={mockBook.cover}
        author={mockBook.author}
        publishedDate={mockBook.publishedDate}
      />
    );

    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText(/test author/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/)).toBeInTheDocument(); // Updated line
    expect(screen.getByAltText('Cover of the book titled Test Book')).toBeInTheDocument();
  });

});
