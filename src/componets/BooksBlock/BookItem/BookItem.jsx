import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../Title';

import styles from './BookItem.module.css';
const BookItem = ({ isbn, author, title }) => {
  return (
    <li className={styles.listItem}>
      <Link to={`${isbn}`} className={styles.linkItem}>
        <p>ISBN : {isbn}</p>
        <p>Title : </p>
        <Title type="h3" className={styles.title} text={title} />
        <p>Author : {author}</p>
      </Link>
    </li>
  );
};

export default BookItem;
