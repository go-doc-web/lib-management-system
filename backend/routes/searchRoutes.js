const express = require('express');
const router = express.Router();
const { searchBooks } = require('../controllers/booksControllers');

router.get('/', searchBooks);

module.exports = router;
