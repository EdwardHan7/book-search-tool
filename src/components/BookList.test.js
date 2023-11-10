import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from './BookList';

describe('BookList Component', () => {
  test('renders empty list without books', () => {
    render(<BookList books={[]} />);
    expect(screen.queryByText(/author:/i)).toBeNull();
  });

  test('renders list of books', () => {
    const mockBooks = [{ title: 'Book 1', cover_i: 123, author_name: ['Author 1'], first_publish_year: 2000 }];
    render(<BookList books={mockBooks} />);
    expect(screen.getByText('Book 1')).toBeInTheDocument();
  });
});
