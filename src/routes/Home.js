import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BookList from '../components/BookList';
import BookForm from '../components/BookForm';
import { fetchBooksAsync, appId } from '../redux/books/booksSlice';

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    dispatch(fetchBooksAsync(appId));
  }, []);

  return (
    <section className="homePageDiv">
      <div className="bookListDiv">
        <p>{status}</p>
        {books.map((book) => (
          <div className="individualBookDiv" key={uuidv4()}>
            {' '}
            <BookList book={book} randomNum={Math.floor(Math.random() * 100)} />
          </div>
        ))}
        <hr />
        <h2>Add New Book</h2>
        <BookForm />
      </div>
    </section>
  );
};

export default Home;
