const { Router } = require("express")
const { getFavorite, postFavorite, deleteFavorite } = require("../controllers/favorite.js")

const router = Router()

router.get('/', getFavorite)
router.post('/:id', postFavorite)
router.delete('/:id', deleteFavorite)

module.exports = router