import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/books';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllBooks = async () => {
  const { data } = await api.get('/');

  return data;
};
