import axios from 'axios';

const http = axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
  headers: {
    'Content-type': 'application/json',
  },
});

const getAll = () => http.get('/books');

const create = (data) => http.post('/books', data);

const remove = (id) => http.delete(`/books/${id}`);

const bookService = { getAll, create, remove };

//export default bookService;
