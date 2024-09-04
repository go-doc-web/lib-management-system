import React from 'react';
import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import { AppContext } from '../../context/AppContext';
import { deleteByIsbn } from '../../api/books-api';

const DeleteBookButton = ({ isbn }) => {
  const { setBooks } = React.useContext(AppContext);
  const handleClickDeleteBtn = async isbn => {
    try {
      const data = await deleteByIsbn(isbn);

      setBooks([...data]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={() => handleClickDeleteBtn(isbn)} type="button">
      <MdDelete />
    </button>
  );
};

DeleteBookButton.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default DeleteBookButton;
