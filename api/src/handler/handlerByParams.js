const {getById}= require ('../controllers/getById')

const handlerByParams=async(req,res)=>{
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    
    try {
        const ByIdRaw = await getById(id, source);
        res.status(200).json(ByIdRaw);
    } catch (error) {
        res.status(400).json({error: error.message});
    };

}

module.exports={ handlerByParams };