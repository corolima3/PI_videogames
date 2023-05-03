import React from "react";
// import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllVideogames} from '../../redux/actions'
// //import NavBar from '../../components/NavBar/NavBar'

import CardsContener from "../../components/CardsContener/CardsContener";

const Home =()=>{

const dispatch = useDispatch();
const { allVideogames}= useSelector((state)=>state)
useEffect(() => {
        dispatch(getAllVideogames());
     },[dispatch])
// useEffect(() => {
// if(!allVideogames){dispatch(getAllVideogames())}
// },[allVideogames, dispatch])

    return (
    <div>
        <h1>Estas en home</h1>
        <CardsContener allVideogames={allVideogames}/>
    </div>
    
    )
};

export default Home;