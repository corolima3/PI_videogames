const {postGenre} =require('../controllers/postGenre')

const handlePostGenre=async(req,res)=>{
    let {name } = req.body;
    try {
        if (!name ) 
            throw new Error("Faltan datos obligatorios");
        name = name.toLowerCase();
        const newGenre = await postGenre( name );
        res.status(200).json(newGenre);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
}
module.exports={ handlePostGenre };
