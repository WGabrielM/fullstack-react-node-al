import express from "express";
import FavoriteController from "../controllers/favoriteController.js";

const routes = express.Router();

routes.get("/", FavoriteController.getFavorites);
routes.post("/:id", FavoriteController.postFavorite);
routes.delete("/:id", FavoriteController.deleteFavorite);

export default routes;
