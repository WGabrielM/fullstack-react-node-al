const { getAllFavorites, deleteFavoriteById, insertFavorite } = require("../services/favorite.js")

function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites()
        res.send(favorites)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postFavorite(req, res) {
    try {
        const idBook = req.params.id
        if(idBook && Number(idBook)) {
            insertFavorite(idBook)
            res.send("Book insert successfuly")
            res.status(201)
        } else {
            res.status(422)
            res.send("Invalid Id")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite(req, res) {
    try {
        const idBook = req.params.id
        if(idBook && Number(idBook)) {
            deleteFavoriteById(idBook)
            res.send("Book deleted sucessfuly")
        } else {
            res.status(422)
            res.send("Invalid Id")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

module.exports = {
    getFavorites,
    postFavorite,
    deleteFavorite
}