const {Videogame, Genre} = require('../db')

const postVideogames= async( name, image, released, rating, platforms, description, genre )=>{

    const newVideogame= await Videogame.create({ 
        name, image, released, rating, platforms, description });

        let genreDDBB = await Genre.findAll({
            where: {
                name: genre,
            },
        });
        await newVideogame.addGenre(genreDDBB);
    // let typeDb = await Type.findAll({
    //   where: { name: typesId}
    // })
    //await create.addType(typeDb);
    return newVideogame;
  
};

module.exports ={ postVideogames };