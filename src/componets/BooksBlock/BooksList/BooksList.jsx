import React from 'react';
import { AppContext } from '../../../context/AppContext';

import BookItem from '../BookItem';

import styles from './BooksList.module.css';

const BooksList = () => {
  const { books, searchResults } = React.useContext(AppContext);

  let result = null;

  if (searchResults.length !== 0) {
    result = searchResults;
  }
  if (searchResults.length === 0) {
    result = books;
  }

  return (
    <ol className={styles.list}>
      {result?.map((book, index) => (
        <div key={book.isbn} className={styles.wrapper}>
          <span>{index + 1}</span>
          <BookItem {...book} />
        </div>
      ))}
    </ol>
  );
};

export default BooksList;
