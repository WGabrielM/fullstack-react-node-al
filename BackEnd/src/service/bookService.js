const fs = require("fs");

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"));
}

function getBookById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const filteredBook = books.filter((book) => book.id === id)[0];
  return filteredBook;
}

function insertBook(newBook) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const newBookList = [...books, newBook];

  fs.writeFileSync("books.json", JSON.stringify(newBookList));
}

function updateBook(modification, id) {
  let currentBooks = JSON.parse(fs.readFileSync("books.json"));
  const indexModified = currentBooks.findIndex((livro) => livro.id === id);

  const contentChanged = { ...currentBooks[indexModified], ...modification };

  currentBooks[indexModified] = contentChanged;

  fs.writeFileSync("books.json", JSON.stringify(currentBooks));
}

function deleteById(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));

  const fiteredBooks = books.filter((livro) => livro.id !== id);
  fs.writeFileSync("books.json", JSON.stringify(fiteredBooks));
}

module.exports = {
  getAllBooks,
  getBookById,
  insertBook,
  updateBook,
  deleteById,
};
