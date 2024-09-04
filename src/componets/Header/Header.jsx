import React from 'react';
import clsx from 'clsx';

import SearchForm from '../SearchForm/SearchForm';
import Logo from '../Logo';
import AddBookButton from '../AddBookButton';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={clsx('container', styles.root)}>
        <Logo />
        <SearchForm />
        <AddBookButton />
      </div>
    </header>
  );
};

export default Header;
