import React from 'react';
import { AppContext } from '../../../context/AppContext';
import clsx from 'clsx';

import BookItem from '../BookItem';

import styles from './BooksList.module.css';

const BooksList = () => {
  const { books } = React.useContext(AppContext);

  return (
    <ol className={styles.list}>
      {books?.map((book, index) => (
        <div className={styles.wrapper}>
          <span>{index + 1}</span>
          <BookItem key={book.isbn} {...book} />
        </div>
      ))}
    </ol>
  );
};

export default BooksList;
