const {Router}= require('express');
const { handleGenre } = require('../handler/handlerGenre')

const routerGenre = Router();

routerGenre.get("/", handleGenre );

module.exports={ routerGenre};