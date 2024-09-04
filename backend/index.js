const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 8000;

const booksRouter = require('./routes/booksRoutes');
const searchRouter = require('./routes/searchRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/books', booksRouter);
app.use('/search', searchRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server found' } = err;
  res.status(status).json({ message });
});

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT} `);
});
