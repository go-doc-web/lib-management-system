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
export const updateBook = async (isbn, formData) => {
  const { data } = await api.put(`${isbn}`, formData);

  return data;
};

export const deleteByIsbn = async isbn => {
  const { data } = await api.delete(`${isbn}`);

  return data;
};
export const markAsBorrowed = async isbn => {
  const { data } = await api.patch(`${isbn}/borrow`);

  return data;
};

export const searchBooks = async query => {
  // const encodedQuery = encodeURIComponent(query);
  const { data } = await axios.get(`http://localhost:8000/search`, {
    params: { query: query },
  });

  return data;
};
