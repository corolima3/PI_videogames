const {fnDelete}=require('../controllers/fnDelete')

const handlerDelete=async(req,res)=>{
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";

    try {
 
      const gameDelete = await fnDelete( id, source);

      res.status(201).json(gameDelete);
    } catch (error) {
      res.status(400).send(error.message);
    }

}
  
module.exports={ handlerDelete };
