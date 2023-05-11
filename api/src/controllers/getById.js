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
        //API
    if(source==="api") {

        const videogamesRaw = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;

        const videogames = cleanInfo(videogamesRaw);

        return videogames;
    } else {
        //DDBB
        let searchByid= await Videogame.findByPk(id , { include: Genre });
       const { dataValues}= searchByid
    // console.log(dataValues);
       const result = {
        id: dataValues.id,
        name: dataValues.name,
        genres: dataValues.genres?.map((gen) => gen.name),
        platforms: dataValues.platforms,
        released: dataValues.released,
        image: dataValues.image,
        rating: dataValues.rating,
        description: dataValues.description,
    }

        const gameDDBB =  result ;
                            // ver toJSON
        return gameDDBB
    }
};
module.exports={ getById }