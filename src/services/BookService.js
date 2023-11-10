import axios from 'axios';

const BASE_URL = 'https://openlibrary.org';

export const searchBooks = async (title) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json?q=${encodeURIComponent(title)}`);
    return response.data.docs;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
