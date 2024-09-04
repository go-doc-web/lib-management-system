const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBooks,
  markAsBorrowed,
  getBookByIsbn,
} = require('../controllers/booksControllers');

router.get('/', getAllBooks);
router.get('/:isbn', getBookByIsbn);
router.post('/', addBook);
router.put('/:isbn', updateBook);
router.delete('/:isbn', deleteBook);
router.get('/search', searchBooks);
router.patch('/:isbn/borrow', markAsBorrowed);

module.exports = router;
