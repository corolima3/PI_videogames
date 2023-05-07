
import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";
//className={style.NavBar}
const NavBar=()=>{

    return (
        
        <span className={style.NavBar}>
            <Link to="/home" className={style.link}>HOME</Link>
            <Link to="/create" className={style.link}>CREAR VIDEOGAME</Link>
           <SearchBar className={style.SearchBar}/>
        </span>

    )

};

export default NavBar;