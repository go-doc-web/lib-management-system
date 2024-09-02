const fs = require('fs').promises;
const path = require('path');

const booksFilePath = path.join(__dirname, '../db', 'books.json');
console.log('booksFilePath', booksFilePath);

const readBooksFromFile = async () => {
  try {
    const data = await fs.readFile(booksFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

const writeBooksToFile = async books => {
  try {
    await fs.writeFile(booksFilePath, JSON.stringify(books, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

module.exports = {
  readBooksFromFile,
  writeBooksToFile,
};
