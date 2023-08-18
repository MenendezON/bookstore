import React from 'react';
import PropTypes from 'prop-types';
import template from '../assets/images/template.jpg';

const Book = ({ title, author, onDelete }) => (
  <div className="book">
    <img src={template} alt="" />
    <div>
      <h3>{title}</h3>
      <p>
        Author
        {' : '}
        {author}
      </p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
