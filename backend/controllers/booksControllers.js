const httpError = require('../helpers/httpError');
const generateRandomISBN = require('../helpers/generateRandomISBN');
const {
  readBooksFromFile,
  writeBooksToFile,
} = require('../utils/booksFileUtils');

const getAllBooks = async (req, res, next) => {
  try {
    const books = await readBooksFromFile();
    if (!books || (Array.isArray(books) && books.length === 0)) {
      throw httpError(404, 'LMS is empty');
    }

    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const getBookByIsbn = async (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    const books = await readBooksFromFile();
    const book = books.filter(book => book.isbn === isbn);
    res.status(200).json(book[0]);
  } catch (err) {
    next(err);
  }
};
const addBook = async (req, res, next) => {
  try {
    const { title, author, isBorrowed = false } = req.body;

    if (!title || !author) {
      throw httpError(400, 'Title and author are required.');
    }

    const newIsbn = generateRandomISBN();
    const newBook = {
      isbn: newIsbn,
      title,
      author,
      isBorrowed,
    };

    const books = await readBooksFromFile();
    books.push(newBook);
    await writeBooksToFile(books);
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    let books = await readBooksFromFile();

    books = books.map(book =>
      book.isbn === isbn ? { isbn: isbn, ...req.body } : book
    );
    await writeBooksToFile(books);
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const isbn = req.params.isbn;
    let books = await readBooksFromFile();
    books = books.filter(book => book.isbn !== isbn);

    await writeBooksToFile(books);
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const markAsBorrowed = async (req, res, next) => {
  try {
    const isbn = req.params.isbn;

    let books = await readBooksFromFile();
    books = books.map(book =>
      book.isbn === isbn ? { ...book, isBorrowed: !book.isBorrowed } : book
    );

    await writeBooksToFile(books);

    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

const searchBooks = async (req, res, next) => {
  try {
    const query = req.query.query ? req.query.query.toLowerCase() : '';
    if (!query) {
      const err = new Error('Parametr query is required');
      err.status = 400;
      throw err;
    }

    const books = await readBooksFromFile();

    if (!Array.isArray(books) || books.length === 0) {
      return res.status(200).json([]);
    }

    const result = books.filter(
      book =>
        book.title.toLowerCase().includes(query) || book.isbn.includes(query)
    );

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: `No found books by query ${query}` });
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  markAsBorrowed,
  getBookByIsbn,
};
