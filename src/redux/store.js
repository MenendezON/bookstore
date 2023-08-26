import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import { categoriesSlice } from '../routes/Category';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesSlice,

  },
});

export default store;
