import React from 'react';
import {Link} from "react-router-dom";
import style from './Landing.module.css';
const Landing =()=>{
    
    return (
    <>
        <div className={style.landing}>
            <h1 >Videogames APP</h1>
            
            <Link to="/home" ><button >INGRESAR</button></Link>
            <p >By Coro Lima Jose</p>
        </div> 
    </> 
    )
};

export default Landing;