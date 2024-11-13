import express from "express";
import books from "./booksRoutes.js";
import favorites from "./favoritesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("NodeJS Tutorial"));

  app.use(express.json(), books, favorites);
};

export default routes;