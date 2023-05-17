require('dotenv').config();
const { API_KEY } = process.env;
const axios = require ('axios');
const {Videogame, Genre } = require('../db');
//Genre. En este caso, se establece attributes como un array vacío,
//lo que significa que no se obtendrán atributos adicionales de la tabla intermedia.
const getAll=async()=>{
    let apiRaw = [];  //esto es response
     //DDBB
    let DDBB = await Videogame.findAll({  
        include: {
            model: Genre,
            attributes:  ["name"],
            through: {
                attributes: [],
            },
        } });

                   // verificar
    DDBB = DDBB?.map((game)=> {
        return {
            id: game.id,
            name: game.name,
            genres: game.genres?.map((gen) => gen.name),
            platforms: game.platforms,
            released: game.released,
            image: game.image,
            rating: game.rating,
            description: game.description,
            created:game.created,
        };
    });

    apiRaw.push(...DDBB )

// API
    let count= 0;
    let URL = `https://api.rawg.io/api/games?key=${API_KEY}`

       while (count<5) {
        
           const callApi= await axios.get(URL) ///asincronico

               .then((response)=> { URL = response.data.next;

               return response.data})
            
               .then(data=> data.results.map((elem) => {apiRaw.push({
                         id: elem.id,
                         name: elem.name,
                         image: elem.background_image,
                         released: elem.released,
                         rating: elem.rating,
                         platforms: elem.platforms.map((elem) => elem.platform.name),
                         genres: elem.genres.map((elem) => elem.name),
                         created: false,
                       });
                     }) )
                     count++
       }
   
    return apiRaw ;       
}
//******************************** */
const byName = async (name)=>{ //
    //`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    let URL = `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    

    let newArr=[]; // esto es response
    try {
        //DDBB
       // const pokemonDB = await Pokemon.findOne({ where: { name } });/VER WHERE
       let videogameDDBB = await Videogame.findOne({ where: { name: name },
        include: {
        model: Genre,
        attributes: ["name"],
        through: {
            attributes: [],
        },
    }, });
    videogameDDBB = videogameDDBB ? [videogameDDBB] : [];
    videogameDDBB = videogameDDBB.map((game) => {
            return {
                id: game.id,
                name: game.name,
                genres: game.genres?.map((gen) => gen.name),
                platforms: game.platforms,
                released: game.released,
                image: game.image,
                rating: game.rating,
                description: game.description,
            };
        });
    

       //API by name
        const videogamesRaw = (await axios.get(URL)).data.results.slice(0, 15);

        const Api=async(videogamesRaw)=>{ 
            return await videogamesRaw.map(elem=>{
                return {
                    id: elem.id,
                    name: elem.name,
                    image: elem.background_image,
                    released: elem.released,
                    rating: elem.rating,
                    platforms: elem.platforms.map((elem) => elem.platform.name),
                    genres: elem.genres.map((elem) => elem.name),
                    created: false,
            }
        })
        }
        if(videogameDDBB) {newArr.push(...videogameDDBB) } 
        newArr.push(...(await Api(videogamesRaw)));
       
        return newArr;
    } catch (error) {throw new Error ("Error en la búsqueda del videogame por nombre") }
}

module.exports={ getAll ,byName};