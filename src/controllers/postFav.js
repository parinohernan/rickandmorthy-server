const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
try {
    const {id, name, status, image, species, gender} = req.body;
    
    if (!id || !name || !status || !image || !species || !gender ) {
        return res.status(401).send('faltan datos')
    }
    await Favorite.findOrCreate({
        where: { id, name, status, image, species, gender}
    })
    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites)
    
} catch (error) {
    return res.status(500).json(error.message)
}
}
module.exports = postFav;