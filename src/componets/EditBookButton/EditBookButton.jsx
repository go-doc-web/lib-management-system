import React from 'react';
import PropTypes from 'prop-types';
import { CiEdit } from 'react-icons/ci';
import { useModal } from '../../context/ModalContext';
import EditBookForm from '../EditBookForm';

import styles from './EditButton.module.css';

const EditBookButton = ({ isbn }) => {
  const { openModal } = useModal();

  const handleClickAddBook = isbn => {
    openModal(<EditBookForm isbn={isbn} />);
  };

  return (
    <button className={styles.editBtn} onClick={() => handleClickAddBook(isbn)}>
      <CiEdit />
    </button>
  );
};

EditBookButton.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default EditBookButton;
