import React from 'react';
import Input from '../ui/Input';

import styles from './SearchForm.module.css';

const SearchForm = () => {
  return (
    <div>
      <Input
        id="search"
        placeholder="Пошук книгі"
        className={styles.input}
        classNameWrapper={styles.field}
        classNameLabel={styles.label}
        type="text"
      />
    </div>
  );
};

export default SearchForm;
