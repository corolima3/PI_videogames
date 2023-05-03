require('dotenv').config();
const { API_KEY } = process.env;
const axios = require ('axios');
const {Videogame, Genre} = require ('../db')

const cleanInfo = (elem)=> { 

    return {id: elem.id,
            name: elem.name,
            description: elem.description_raw,
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            platforms: elem.platforms.map((elem) => elem.platform.name),
            genres: elem.genres.map((elem) => elem.name),
            created: false,}
}
const getById= async(id,source) => {

    if(source==="api") {

        const videogamesRaw = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;

        const videogames = cleanInfo(videogamesRaw);

        return videogames;
    } else {
        const searchByid= await Videogame.findByPk(id , { include: Genre });
//falta incluir
        const pokemon = { ...searchByid.toJSON()}
                            // ver toJSON
        return pokemon
    }
};
module.exports={ getById }