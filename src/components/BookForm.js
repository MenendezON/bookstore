import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const BookForm = () => {
  const categories = [
    { id: 1, name: 'Learning' },
    { id: 2, name: 'Philosophy' },
    { id: 3, name: 'Religion' },
  ];

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Learning');

  const submitAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: '4',
      title,
      author,
      progress: 'currently reading',
      categories: ['All', category],
    }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={(e) => addBook(e)}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <select name="categories" id="categories" onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <button type="submit" onClick={(e) => submitAddBook(e)}>Add</button>
    </form>
  );
};

export default BookForm;
