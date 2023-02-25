const favorites = require("../utils/favs");

const postFavorites = (req, res) => {
    const { character } = req.body;
    if (character) {
        favorites.push(character)
    }
    res.status(200).send('add new character to favorite list')
}

module.exports = postFavorites;