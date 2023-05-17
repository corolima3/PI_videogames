const {postVideogames}= require ('../controllers/postVideogame');

const handlerPost=async(req,res)=>{
    let {name, image, released, rating, platforms, description, genre } = req.body;
    try {
        if ( !name|| !image|| !released|| !rating|| !platforms|| !description|| !genre ) 
            throw new Error("Faltan datos obligatorios");
        name = name.toLowerCase();
        const newVideogames = await postVideogames( name, image, released, rating, platforms, description, genre );
        res.status(200).json(newVideogames);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}

module.exports={ handlerPost };
// ID (deben ser distintos a los que vienen de la API). *
// Nombre. * // Descripción. * // Plataformas. *
// Imagen. * // Fecha de lanzamiento. * // Rating. *
// POST /videogames
//permite manejar req y res,
// Esta ruta recibirá todos los datos necesarios para crear un videojuego 
// y relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y este debe estar 
// relacionado con sus géneros indicados (al menos uno).