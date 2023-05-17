const { Genre} = require('../db')


const postGenre=async(name)=>{
    const newGenre= await Genre.create({ name });

        // let genreDDBB = await Genre.findAll({
        //     where: {
        //         name: genre,
        //     },
        // });
        //await newGenre.addGenre(genreDDBB);
    return newGenre;

}
module.exports ={ postGenre };
