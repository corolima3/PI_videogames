require('dotenv').config();
const { API_KEY } = process.env;
const axios = require ('axios');
const {Videogame, Genre } = require('../db');

const getAll=async()=>{

// API
    let count= 0;
    let URL = `https://api.rawg.io/api/games?key=${API_KEY}`

    let apiRaw = [];
       while (count<6) {
        
           const callApi=   await axios.get(URL) ///asincronico
               .then((response)=> {
              // console.log(response.data) 
                URL = response.data.next;
               return response.data})
               //.then(data=>  apiRaw.push(data.results[0].name) )
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
        //console.log(apiRaw);
    //DDBB
    const DDBB = await Videogame.findAll({ include: Genre });
    //console.log(...DDBB)                  verificar
       apiRaw.push(...DDBB)
    return apiRaw ;       
}

const byName = async (name)=>{ //
    //`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    let URL = `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    

    let newArr=[];
    try {
       // const pokemonDB = await Pokemon.findOne({ where: { name } });/VER WHERE
       const videogameDDBB = await Videogame.findOne({ where: { name: name } });
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
        if(videogameDDBB) {newArr.push(videogameDDBB) } 
        newArr.push(...(await Api(videogamesRaw)));
       
        return newArr;
    } catch (error) {throw new Error ("Error en la búsqueda del videogame por nombre") }
}

module.exports={ getAll ,byName};