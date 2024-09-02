const generateRandomISBN = () => {
  const randomPart = Array.from({ length: 10 }, () =>
    Math.floor(Math.random() * 10)
  ).join('');

  const isbn = `978-${randomPart.slice(0, 1)}-${randomPart.slice(
    1,
    3
  )}-${randomPart.slice(3, 9)}-${randomPart.slice(9, 10)}`;

  return isbn;
};

module.exports = generateRandomISBN;
