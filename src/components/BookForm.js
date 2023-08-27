import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync, appId } from '../redux/books/booksSlice';

function BookForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = async () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author: 'King Arthur',
      category,
    };
    await dispatch(addBookAsync({ appId, book: newBook }));

    setTitle('');
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.selectedIndex)}>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
      </select>
      <button className="addBook" type="button" onClick={handleAddBook}>
        Add Book
      </button>
    </form>
  );
}

export default BookForm;
