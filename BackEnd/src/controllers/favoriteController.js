import {
  getAllFavorites,
  deleteFavoriteById,
  insertFavorite,
} from "../services/favoriteService.js";

class FavoriteController {
  static async getFavorites(req, res) {
    try {
      const favorites = getAllFavorites();
      res.send(favorites);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static async postFavorite(req, res) {
    try {
      const idBook = req.params.id;
      if (idBook && Number(idBook)) {
        insertFavorite(idBook);
        res.status(201);
        res.send("Book insert successfully");
      } else {
        res.status(422);
        res.send("Invalid Id");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  static async deleteFavorite(req, res) {
    try {
      const idBook = req.params.id;
      if (idBook && Number(idBook)) {
        deleteFavoriteById(idBook);
        res.send("Book deleted successfully");
      } else {
        res.status(422);
        res.send("Invalid Id");
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }
}

export default FavoriteController;
