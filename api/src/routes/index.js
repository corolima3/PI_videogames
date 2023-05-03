const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { routerVideogame}= require ('./routerVideogame');
const { routerGenre} =require ('./routerGenre.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', routerVideogame );
router.use('/genres', routerGenre );

module.exports = router;
