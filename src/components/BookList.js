import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync, appId } from '../redux/books/booksSlice';

function BookList({ book, randomNum }) {
  const [progress, setProgress] = useState(randomNum);

  const strokeDashoffset = 472 - (472 * progress) / 100;

  const style = {
    backgroundColor: `hsl(${randomNum}, 100%, 80%)`,
    strokeWidth: '20px',
    strokeDasharray: '472',
    strokeDashoffset: `${strokeDashoffset}`,
  };
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    await dispatch(removeBookAsync({ appId, itemId: book.item_id }));
  };

  return (
    <div className="book">
      <div className="part-1">
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <sub>{book.author}</sub>
        <ul>
          <li><a href="return false">Comments</a></li>
          <li><a href="return false" onClick={handleRemoveBook}>Remove</a></li>
          <li><a href="return false">Edit</a></li>
        </ul>
      </div>
      <div className="part-2">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#54B4FF" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle style={style} cx="80" cy="80" r="50" strokeLinecap="round" />
        </svg>
        <div>
          {progress}
          %
        </div>
      </div>
      <div className="part-3">
        <p>Current chapter</p>
        <p>Chapter 17</p>
        <button className="delete" type="button" onClick={() => setProgress(progress + 5)}>
          Update progress
        </button>
      </div>
    </div>
  );
}

BookList.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  randomNum: PropTypes.number.isRequired,
};
export default BookList;
