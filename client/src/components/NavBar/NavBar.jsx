
import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar=()=>{

    return (
        
        <span className={style.NavBar}>
            <Link to="/home" >HOME</Link>
            <Link to="/create" >NEW VIDEOGAME</Link>
           <SearchBar />
        </span>

    )

};

export default NavBar;