import React from 'react';
import { useParams } from 'react-router-dom';

import placeholderImg from '../../assets/No-Image-Placeholder.svg_.png';
import { getBookByIsbn } from '../../api/books-api';
import Title from '../Title';

import styles from './BookCard.module.css';

const BookCard = () => {
  const [book, setBook] = React.useState({});
  const { isbn } = useParams();

  React.useEffect(() => {
    const fetchBookByIsbn = async () => {
      try {
        const book = await getBookByIsbn(isbn);

        setBook(book);
      } catch (error) {}
    };

    fetchBookByIsbn();
  }, [isbn, setBook]);
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <img
            src={book?.imageUrl ? placeholderImg : placeholderImg}
            alt={book.title}
          />
          <div className={styles.cardDescr}>
            <Title type="h2" text={book.title} className={styles.title} />
            <div className={styles.isbn}>
              <span>ISBN : </span>
              <span className={styles.isbnColor}>{book.isbn}</span>
            </div>
            <div className={styles.author}>
              <span>Author : </span>
              <span>{book.author}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCard;
