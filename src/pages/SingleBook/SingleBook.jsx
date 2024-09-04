import React from 'react';
import clsx from 'clsx';

import BookCard from '../../componets/BookCard/BookCard';
import GoBackBtn from '../../componets/GoBackBtn/GoBackBtn';
import styles from './SingleBook.module.css';
const SingleBook = () => {
  return (
    <>
      <div className={clsx('container', styles.backBtn)}>
        <GoBackBtn />
      </div>
      <BookCard />
    </>
  );
};

export default SingleBook;
