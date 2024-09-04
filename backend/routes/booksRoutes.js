const express = require('express');
const router = express.Router();
const {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  // getSearchingBooks,
  markAsBorrowed,
  getBookByIsbn,
} = require('../controllers/booksControllers');

router.get('/', getAllBooks);
router.get('/:isbn', getBookByIsbn);
router.post('/', addBook);
router.put('/:isbn', updateBook);
router.delete('/:isbn', deleteBook);
// router.get('/search', getSearchingBooks);
router.patch('/:isbn/borrow', markAsBorrowed);

module.exports = router;
