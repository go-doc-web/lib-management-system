import React from 'react';
import { AppContext } from '../../../context/AppContext';
import clsx from 'clsx';

import BookItem from '../BookItem';

import styles from './BooksList.module.css';

const BooksList = () => {
  const { books } = React.useContext(AppContext);

  return (
    <ol className={styles.list}>
      {books?.map(book => (
        <BookItem key={book.isbn} {...book} />
      ))}
    </ol>
  );
};

export default BooksList;
