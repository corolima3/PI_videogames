const {Router}= require ('express');
const {handlerAll}=require('../handler/handlerAll');
const {handlerByParams}=require('../handler/handlerByParams');
const {handlerPost}=require('../handler/handlerPost');
const {handlerDelete}=require('../handler/handlerDelete');

const routerVideogame=Router();

routerVideogame.get('/',handlerAll);
routerVideogame.get('/:id',handlerByParams);
routerVideogame.delete('/:id',handlerDelete);
routerVideogame.post('/',handlerPost);


module.exports={  routerVideogame }