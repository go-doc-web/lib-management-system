import React from 'react';
import clsx from 'clsx';

import SearchForm from '../SearchForm/SearchForm';
import Logo from '../Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={clsx('container', styles.root)}>
        <Logo />
        <h1 className={styles.title}>Система управління бібліотекою</h1>
        <SearchForm />
      </div>
    </header>
  );
};

export default Header;
