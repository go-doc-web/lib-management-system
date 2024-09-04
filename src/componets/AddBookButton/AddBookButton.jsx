import React from 'react';
import { useModal } from '../../context/ModalContext';
import AddBookForm from '../AddBookForm';

import styles from './AddButton.module.css';

const AddBookButton = () => {
  const { openModal } = useModal();

  const handleClickAddBook = () => {
    openModal(<AddBookForm />);
  };

  return (
    <button className={styles.addBtn} onClick={handleClickAddBook}>
      Додати Книжку
    </button>
  );
};

export default AddBookButton;
