const axios =require ('axios')

const {getAll, byName}= require('../controllers/getAll')

const handlerAll=async (req,res)=>{
    let {name} =req.query

    try {
        if (name){
             name=name.toLowerCase();
             const pokemon = await byName (name);
             if (!pokemon) throw Error(`There isn't videogames whith named, ${name}.`);
             res.status(200).send(pokemon);
 
        }else{
            const everyOne=await getAll();
            res.status(200).send(everyOne);
        }

       } catch (error) { res.status(400).json({Message: error.message}) }
}


module.exports={ handlerAll };