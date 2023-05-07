import React from "react";
import style from "./CardsContener.module.css";
import Card from "../Card/Card";
//import { useSelector } from "react-redux";

const CardsContener = (props) => {
  const {allVideogames}= props;
 // console.log(allvideogames) 
 // const {id,name, image, released, platforms, genres, created}= props;
 //   const pokemonsByName = useSelector(state => state.allPokemons);
  
  return (  
    <div className={style.cardsContaner} >

      {allVideogames.map((videogames, index)=>{
        return <Card 
          key={videogames.id}
          id={videogames.id}
          name={videogames.name.toUpperCase()}
          image={videogames.image} 
          released= {videogames.released} 
        
          genres= {videogames.genres}
          created= {videogames.created} 
        />
      })}
    </div>
  )
}
    

export default CardsContener;