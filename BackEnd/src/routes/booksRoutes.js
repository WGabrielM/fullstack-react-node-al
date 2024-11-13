const { Router } = require("express");
const {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook,
} = require("../controllers/bookController.js");

const router = Router();

router.get("/", getBooks);

router.get("/:id", getBook);

router.post("/", postBook);

router.patch("/:id", patchBook);

router.delete("/:id", deleteBook);

module.exports = router;