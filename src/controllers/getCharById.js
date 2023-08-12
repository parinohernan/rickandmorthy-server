const axios = require('axios')

const URL_BASE = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    
    const id = parseInt(req.params.id)
try {
    const respuesta = await axios(`${URL_BASE}${id}`);
    const {data} = respuesta;

    const { name, gender, species, origin, image, status } = data;
  
         let character = {
          id,
          name,
          gender,
          species,
          origin: origin.name,
          image,
          status,
        };
        return character.name
        ? res.status(200).json(character)
        : res.status(404).send('Not found')

 } catch(error) {
        res.status(500).json({error:error.message})
    }
};
module.exports = getCharById;
