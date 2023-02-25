const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const getChatById = (req, res) => {
    const { id } = req.params

    try {
        axios(`${URL}${id}`)
        .then(result => result.data)
        .then(data => {
            let character = {
                id: data.id,
                image: data.image,
                name: data.name,
                gender: data.gender,
                species: data.species,
            }
            res.status(200).json(character)
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = getChatById;