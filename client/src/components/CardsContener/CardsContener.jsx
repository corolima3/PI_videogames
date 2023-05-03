import React from "react";
import style from "./CardContener.module.css";
import Card from "../Card/Card";
//import { useSelector } from "react-redux";

const CardsContener = (props) => {
  const {allVidegames}= props;
 // const {id,name, image, released, platforms, genres, created}= props;
 //   const pokemonsByName = useSelector(state => state.allPokemons);
  
  return (
    <div className={style.cardsContainer} >

      {allVidegames.map((videogames, index)=>{
        return <Card 
          key={index}
          id={videogames.id}
          name={videogames.name.toUpperCase()}
          image={videogames.image} 
          released= {videogames.released} 
          platforms={videogames.platforms}
          genres= {videogames.genres}
          created= {videogames.created} 
        />
      })}
    </div>
  )
}
    

export default CardsContener;