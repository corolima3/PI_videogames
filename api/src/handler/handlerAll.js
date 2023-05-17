const axios =require ('axios')

const {getAll, byName}= require('../controllers/getAll')

const handlerAll=async (req,res)=>{
    let {name} =req.query

    try {
        if (name){
             name=name.toLowerCase();
             const videoGame = await byName (name);
             if (!videoGame) throw Error(`There isn't videogames whith named, ${name}.`);
             res.status(200).send(videoGame);
 
        }else{
            const everyOne=await getAll();
            res.status(200).send(everyOne);
        }

       } catch (error) { res.status(400).json({error: error.message}) }
}


module.exports={ handlerAll };