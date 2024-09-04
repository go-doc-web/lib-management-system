import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Title from '../../Title';
import EditBookButton from '../../EditBookButton';
import DeleteBookButton from '../../DeleteBookButton';
import BorrowedBook from '../../BorrowedBook';

import styles from './BookItem.module.css';
const BookItem = ({
  isbn,
  author = 'Невідомий',
  title = 'Без назви',
  isBorrowed,
}) => {
  const location = useLocation();

  return (
    <li className={styles.listItem}>
      <Link state={location} to={`/book/${isbn}`} className={styles.linkItem}>
        <div className={styles.infoBook}>
          <p>ISBN : {isbn}</p>
          <p>Title : </p>
          <Title type="h3" className={styles.title} text={title} />
          <p>Author : {author}</p>
        </div>
      </Link>
      <div className={styles.btnBlock}>
        <Link state={location} to={`/book/${isbn}`}>
          Перегляд
        </Link>
        <BorrowedBook isBorrowed={isBorrowed} isbn={isbn} />
        <EditBookButton isbn={isbn} />
        <DeleteBookButton isbn={isbn} />
      </div>
    </li>
  );
};

BookItem.propTypes = {
  isbn: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookItem;
