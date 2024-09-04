import React from 'react';
import clsx from 'clsx';
import { markAsBorrowed } from '../../api/books-api';
import { AppContext } from '../../context/AppContext';

import styles from './BorrowedBook.module.css';

const BorrowedBook = ({ isBorrowed, isbn }) => {
  const { setBooks } = React.useContext(AppContext);
  const handleClickBorrovedBtn = async isbn => {
    try {
      const data = await markAsBorrowed(isbn);
      console.log('data', data);
      setBooks([...data]);
    } catch (error) {}
  };
  return (
    <button
      onClick={() => handleClickBorrovedBtn(isbn)}
      className={clsx(isBorrowed ? styles.borrovedBook : '')}
      type="button"
    >
      {isBorrowed ? 'Позичена' : 'Повернута'}
    </button>
  );
};

export default BorrowedBook;
