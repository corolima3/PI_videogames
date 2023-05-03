
import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
import SearchBar from "../SearchBar/SearchBar.jsx";

const NavBar=()=>{

    return (
        <div className={style.NavBar}>
            <Link to="/home" ><button >PÁGINA PRINCIPAL</button></Link>
            <Link to="/create" ><button >CREAR POKEMON</button></Link>
           <SearchBar />
        </div>
    )

};

export default NavBar;