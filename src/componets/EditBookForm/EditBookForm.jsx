import React from 'react';
import PropTypes from 'prop-types';
import { Report } from 'notiflix/build/notiflix-report-aio';
import clsx from 'clsx';
import { AppContext } from '../../context/AppContext';
import Input from '../ui/Input/Input';

import { useModal } from '../../context/ModalContext';
import Title from '../Title';

import { updateBook } from '../../api/books-api';
import styles from './EditBookform.module.css';

const EditBookForm = ({ isbn }) => {
  const { books, setBooks } = React.useContext(AppContext);

  const { closeModal } = useModal();
  const [formData, setFormData] = React.useState({
    title: '',
    author: '',
    isBorrowed: false,
  });

  const [error, setError] = React.useState({
    title: null,
    author: null,
  });

  React.useEffect(() => {
    const book = books.find(book => book.isbn === isbn);
    if (book) {
      setFormData({
        title: book.title,
        author: book.author,
        isBorrowed: book.isBorrowed,
      });
    }
  }, [isbn, books]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name.trim() || value.trim()) {
      setError(prevState => ({
        ...prevState,
        [name]: null,
      }));
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = e => {
    const { name, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setError({ title: null, author: null });
      let hasError = false;
      if (!formData.title.trim()) {
        setError(prevError => ({
          ...prevError,
          title: 'Поле "Назва книги" не може бути порожнім.',
        }));
        hasError = true;
      }

      if (!formData.author.trim()) {
        setError(prevError => ({
          ...prevError,
          author: 'Поле "Автор" не може бути порожнім.',
        }));
        hasError = true;
      }

      if (formData.title.length < 2) {
        setError(prevError => ({
          ...prevError,
          title: 'Назва книги має містити щонайменше 2 символи.',
        }));

        hasError = true;
      }

      if (formData.author.length < 2) {
        setError(prevError => ({
          ...prevError,
          author: "Ім'я автора має містити щонайменше 2 символи.",
        }));

        hasError = true;
      }

      if (hasError) return;

      const data = await updateBook(isbn, formData);

      setBooks([...data]);
      closeModal();
      Report.success('Відмінно', 'Змінено успішно!', 'Oк!');

      setFormData({ title: '', author: '', isBorrowed: false });
      setError({ title: null, author: null });
      closeModal();
    } catch (error) {
      Report.failure('Помилка', '"Спробуй пізніше', 'Ok!');
    }
  };

  return (
    <div className={clsx('container', styles.root)}>
      <Title className={styles.title} type="h2" text="Змінити книгу" />
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          id="title"
          label="Назва книги"
          type="text"
          className={styles.input}
          classNameLabel={styles.label}
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          error={error.title}
          requiredSymbol={true}
        />
        <Input
          id="author"
          label="Автор"
          type="text"
          className={styles.input}
          classNameLabel={styles.label}
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          error={error.author}
          requiredSymbol={true}
        />
        <Input
          id="isBorrowed"
          name="isBorrowed"
          type="checkbox"
          className={styles.checkbox}
          checked={formData.isBorrowed}
          label="Відзначити книгу як позичену"
          onChange={handleCheckboxChange}
        />
        <div className={styles.wrapperBtn}>
          <button type="submit" className={styles.submit}>
            Змінити
          </button>
          <button
            onClick={closeModal}
            className={clsx(styles.submit, styles.exitBtn)}
            type="button"
          >
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
};

EditBookForm.propTypes = {
  isbn: PropTypes.string.isRequired,
};

export default EditBookForm;
