const axios = require(`axios`);
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async(req, res) => {
  const { id } = req.params;
  //console.log("id", URL+id);
  try {
    const respuesta = await axios(URL+id);
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
    
  } catch (error) {
    res.status(500).send(error.messaje);
  }

};

module.exports = getCharById;

// const getCharById = (res,id) => {
//     //console.log(`https://rickandmortyapi.com/api/character/${id}`);
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then (({data}) => {

//         const {name, gender, species, origin, image, status} = data;

//         let character = {
//             id,
//             name,
//             gender,
//             species,
//             origin : origin.name,
//             image,
//             status
//         };
//         res.writeHead(200,{'Content-Type':'application/json'});
//         res.end(JSON.stringify(character));
//     })
//     .catch ((error) => {

//         res.writeHead(500,{'Content-Type':'text/plain'})
//         res.end(error.messaje);
//     });

// }
