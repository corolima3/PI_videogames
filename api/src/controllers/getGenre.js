
require('dotenv').config();
const { API_KEY } = process.env;
const axios=require('axios');
const { Genre }=require('../db');

const getGenre=async ()=> {

    let URL= `https://api.rawg.io/api/genres?key=${API_KEY} `;
    //DDBB
    const DDBB = await Genre.findAll();
    //si hay
    if (DDBB.length) return DDBB;

    const genreApi = (await axios.get(URL)).data.results;
    const data = genreApi.map(elem => {
        return {
            name: elem.name
        };
    });
    
    const results = await Genre.bulkCreate(data);
    return results;
};
module.exports= {getGenre};