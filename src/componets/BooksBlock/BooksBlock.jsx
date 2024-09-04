import React from 'react';
import clsx from 'clsx';

import Title from '../Title';
import BooksList from './BooksList/BooksList';
import { AppContext } from '../../context/AppContext';

import { getAllBooks } from '../../api/books-api';
import styles from './BooksBlock.module.css';

const BooksBlock = () => {
  const { setBooks, isLoading, setIsLoading } = React.useContext(AppContext);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const data = await getAllBooks();

        setBooks([...data]);
      } catch (error) {
        setError('Неможливо завантажити список книг. Спробуйте пізніше.');
        console.log('fetching Error: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, [setBooks, setIsLoading]);

  if (isLoading) {
    return (
      <div className={clsx('container', styles.loadingBlock)}>
        <p>Loading ...</p>
      </div>
    );
  }
  return (
    <div className={clsx('container', styles.root)}>
      <Title type="h2" text="Список книг" className={styles.title} />
      {error && <p className={styles.error}>{error}</p>}
      {!error && <BooksList />}
    </div>
  );
};

export default BooksBlock;
