import React from 'react';
import Input from '../ui/Input';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { AppContext } from '../../context/AppContext';
import styles from './SearchForm.module.css';
import { searchBooks } from '../../api/books-api';

const SearchForm = () => {
  const { setSearchResults } = React.useContext(AppContext);
  const [query, setQuery] = React.useState('');
  // TODO Обробити Errors
  // const [error, setError] = React.useState(null);

  const handleChangeInput = e => {
    const { value } = e.target;
    if (!value) {
      setSearchResults([]);
    }
    setQuery(value);
  };

  const resetSearch = () => {
    setSearchResults([]);
    setQuery('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await searchBooks(query);
      console.log('data', data);
      if (data.length === 0) {
        Notify.failure('На ваш запит нічого не знайдено');
        return;
      }
      if (data.status === 400) {
        Notify.failure('Поле пошуку не повинно бути порожнім');
        return;
      }

      setSearchResults([...data]);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        id="search"
        placeholder="Пошук книгі"
        className={styles.input}
        classNameWrapper={styles.field}
        classNameLabel={styles.label}
        type="text"
        value={query}
        name="search"
        label="Пошук книг за назвою або ISBN "
        onChange={handleChangeInput}
      />
      <button className={styles.btn} type="submit">
        Знайти
      </button>
      <button type="reset" onClick={resetSearch}>
        Reset
      </button>
    </form>
  );
};

export default SearchForm;
