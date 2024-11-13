const {
  getAllBooks,
  insertBook,
  updateBook,
  deleteById,
  getBookById,
} = require("../service/bookService.js");

function getBooks(req, res) {
  try {
    const books = getAllBooks();
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function getBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const book = getBookById(id);
      res.send(book);
    } else {
      res.status(422);
      res.send("Invalid Id");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function postBook(req, res) {
  try {
    const newBook = req.body;
    if (req.body.nome) {
      insertBook(newBook);
      res.status(201);
      res.send("Book added sucessfuly");
    } else {
      res.status(422);
      res.send("The field is required");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function patchBook(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const body = req.body;
      updateBook(body, id);
      res.send("Item successfully modified");
    } else {
      res.status(422);
      res.send("Invalid Id");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

function deleteBook(req, res) {
  try {
    if (id && Number(id)) {
      deleteById(id);
      const id = req.params.id;
      res.send("Book successfully deleted");
    } else {
      res.status(422);
      res.send("Invalid Id");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
};
