import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Title from '../../Title';

import styles from './BookItem.module.css';
const BookItem = ({ isbn, author = 'Невідомий', title = 'Без назви' }) => {
  const location = useLocation();

  return (
    <li className={styles.listItem}>
      <Link state={location} to={`/book/${isbn}`} className={styles.linkItem}>
        <p>ISBN : {isbn}</p>
        <p>Title : </p>
        <Title type="h3" className={styles.title} text={title} />
        <p>Author : {author}</p>
      </Link>
    </li>
  );
};

BookItem.propTypes = {
  isbn: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookItem;
