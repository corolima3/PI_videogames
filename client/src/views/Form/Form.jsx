import { useState,useEffect } from "react";
// from './Form.module.css';
import { useSelector, useDispatch } from "react-redux"
import validate from './validate';
import { createVideogame, getAllGenres } from '../../redux/actions.js';

const Form =()=>{

 const  { allGenres }= useSelector((state)=>state)

 //console.log({errorMsg})
 const dispatch =useDispatch();

 useEffect(()=>{
  dispatch(getAllGenres());
 },[dispatch])

    const [errors, setErrors] = useState({
        name: '', 
        image: '',
        description:'',
        platforms:[],
        released:'',
        rating:0,
        genres:"",
    });
    const platformsApi= [ "PC", "PlayStation 4", "PlayStation 3", "Xbox One", "Xbox Series S/X", "Xbox 360", 
      "Nintendo Switch", "Nintendo 3DS",  "iOS", "Android", "macOS"]
    const [userData, setUserData] = useState({
        name: '', 
        image: '',
        description:'',
        platforms:[],
        released:'',
        genre:"",
        rating:0,
 })

    const handlerInput = (event) => {
            setUserData({
                ...userData, [event.target.name]: event.target.value
            });
            setErrors(validate({...userData, [event.target.name]: event.target.value}));
    };
    function handlerGenres(e) {
      setUserData({
          ...userData,
          //genre: userData.genres.includes(e.target.value) ? userData.genres : [...userData.genres, e.target.value]
          genre: e.target.value
      });
  }
    function handlerPlatforms(e) {
      setUserData({
          ...userData,
          platforms:[...userData.platforms, e.target.value]
      });
  }
  const objecto={
    name: "fortnite",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    released: "2010-08-24",
    description: "ano",
    rating: "2.3",
    platforms: [
      "play",
      "xbox"
    ],
    genre: "Action"
  }
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validate(userData))
        console.log(userData)

        // setTimeout(() => {
        //   dispatch(createVideogame(objecto));
        //    alert("Game Created!")
        // })
        setTimeout(() => { // espera un poco antes de verificar los errores
          if(Object.values(errors).length >0) {
            return alert("Please verify that all fields are filled in correctly");
          } else {
            dispatch(createVideogame(userData));
            alert("Game Created!");
            // window.location.reload();
          }
        }, 100)
  
    }
    //console.log(userData)

    return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Crea tu Videogame</h2>
            <label> Nombre:
        <input type="text" value={userData.name} onChange={handlerInput} name={"name"} />
      </label>
      {errors.name && <p>{errors.name}</p>}
      <label> Imagen:
        <input type="text" value={userData.image} onChange={handlerInput} name={"image"}/>
      </label>
      {errors.image && <p>{errors.image}</p>}
      <label> Descripción:
        <textarea value={userData.description} onChange={handlerInput} name={"description"}/>
      </label>
      {errors.description && <p>{errors.description}</p>}
      <label> Plataformas: </label>
        <select name='platforms' onChange={handlerPlatforms}>
          <option >...</option>
          {platformsApi.map((plat, i) => {return(<option key={i} value={plat}>{plat}</option>)})}
        </select>
        {errors.platforms && <p>{errors.platforms}</p>}
     
      <label> Fecha de lanzamiento:
        <input type="date" value={userData.released} onChange={handlerInput} name={"released"} />
      </label>
      {errors.released && <p>{errors.released}</p>}

      <label> Rating:
        <input type="number" min="0" max="6" step="0.2" value={userData.rating} onChange={handlerInput} name={"rating"} />
      </label>
      {errors.rating && <p>{errors.rating}</p>}
      <label>Géneros: </label>
        <select name='genres'  onChange={ handlerGenres }>
           <option value="genres">...</option>
           {allGenres?.map((genre, i) => {return(<option key={i} value={genre.name}>{genre.name}</option>)})}
        </select>
        {errors.genres && <p>{errors.genres}</p>}
      <button type="submit">Crear videojuego</button>
        </form>
    </> 
    )
};

export default Form;