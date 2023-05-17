const {Router}= require('express');
const { handleGenre } = require('../handler/handlerGenre')
const {handlePostGenre}=require('../handler/handlePostGenre')
//fx router express
const routerGenre = Router();

routerGenre.get("/", handleGenre );
routerGenre.post("/", handlePostGenre);

module.exports={ routerGenre};