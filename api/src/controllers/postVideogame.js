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
    
    return newVideogame;
  
};
module.exports ={ postVideogames };
// busca un género en la tabla "Genre" mediante el método Genre.findAll(). 
// La búsqueda se realiza mediante un objeto de opciones que especifica el nombre del género. 
// La función espera que la base de datos tenga una tabla llamada "Genre" con un campo "name".

// Después de obtener el género correspondiente, se llama al método addGenre() en el objeto "Videogame" creado anteriormente, 
// pasando como argumento el resultado de la búsqueda del género en la base de datos. Este método crea una nueva relación
//  entre el videojuego y el género en la tabla intermedia de la base de datos
