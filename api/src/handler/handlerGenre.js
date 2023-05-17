const { getGenre } = require ('../controllers/getGenre')

const handleGenre =async(req, res)=>{
    
    try {
        const genre = await getGenre();
        res.status(200).send(genre);
    } catch (error) {
        res.status(400).json({error: error.message});
    };   
};

module.exports = {handleGenre} ;