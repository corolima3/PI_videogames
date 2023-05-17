const { Videogame } = require('../db');

const fnDelete=async(id, source)=>{
    const erase = await Videogame.findByPk(id);
    erase.destroy();
return erase;

};
module.exports={ fnDelete };
