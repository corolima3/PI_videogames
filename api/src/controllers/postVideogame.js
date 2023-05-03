const {Videogame} = require('../db')

const postVideogames= async( name, image, released, rating, platforms, description, genre )=>{

    const newVideogame= await Videogame.create({ 
        name, image, released, rating, platforms, description });
        await newVideogame.addGenre(genre);
    // let typeDb = await Type.findAll({
    //   where: { name: typesId}
    // })
    //await create.addType(typeDb);
    return newVideogame;
  
};

module.exports ={ postVideogames };