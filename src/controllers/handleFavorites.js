let myFavorites =[];

const postFav = (req,res) =>{
    const character = req.body;
    myFavorites.push(character);
    console.log("fav post agrego uno",character.id, myFavorites);
    return res.json(myFavorites);

}

const deleteFav = (req,res) =>{
    const {id} = req.params;
    console.log("deleteFav");

    myFavorites = myFavorites.filter((char) => {
        return char.id !== id
    })
    console.log("elimino fav",id);
    return res.json(myFavorites)
}

module.exports = {postFav, deleteFav}

