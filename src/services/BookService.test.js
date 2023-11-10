import axios from 'axios';
import { searchBooks } from './BookService';

jest.mock('axios');

describe('BookService', () => {
  test('fetches books from API', async () => {
    const mockBooks = [{ title: 'Book 1' }];
    axios.get.mockResolvedValue({ data: { docs: mockBooks } });

    const books = await searchBooks('Book 1');
    expect(books).toEqual(mockBooks);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('Book 1'));
  });
});
