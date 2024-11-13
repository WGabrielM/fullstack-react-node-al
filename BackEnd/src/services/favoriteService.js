import fs from "fs";

export function getAllFavorites() {
  return JSON.parse(fs.readFileSync("favorites.json"));
}

export function deleteFavoriteById(id) {
  const books = JSON.parse(fs.readFileSync("favorites.json"));
  const filteredBooks = books.filter((book) => book.id !== id);
  fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks));
}

export function insertFavorite(id) {
  const books = JSON.parse(fs.readFileSync("books.json"));
  const favorites = JSON.parse(fs.readFileSync("favorites.json"));

  const newFavoriteList = [...favorites, books.find((book) => book.id === id)];
  fs.writeFileSync("favorites.json", JSON.stringify(newFavoriteList));
}
