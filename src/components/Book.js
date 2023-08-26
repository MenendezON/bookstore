/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, progress,
  } = props;
  return (
    <li key={id}>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <h3>{progress}</h3>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default Book;
