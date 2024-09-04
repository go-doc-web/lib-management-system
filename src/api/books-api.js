import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/books';

const api = axios.create({
  baseURL: BASE_URL,
});

export const getAllBooks = async () => {
  const { data } = await api.get('/');

  return data;
};

export const getBookByIsbn = async isbn => {
  const { data } = await api.get(`${isbn}`);

  return data;
};

export const addBook = async formData => {
  const { data } = await api.post('/', formData);
  return data;
};
