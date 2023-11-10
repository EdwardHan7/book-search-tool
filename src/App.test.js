import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';

jest.mock('axios');

describe('App Component', () => {
  test('renders and uses search functionality', async () => {
    axios.get.mockResolvedValue({ data: { docs: [{ title: 'Test Book' }] } });
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/search for books by title/i), { target: { value: 'Test' } });
    fireEvent.keyDown(screen.getByPlaceholderText(/search for books by title/i), { key: 'Enter', code: 'Enter' });
    await waitFor(() => expect(screen.getByText('Test Book')).toBeInTheDocument());
  });
});

