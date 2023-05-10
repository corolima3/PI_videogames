import React from 'react';
import {Link} from "react-router-dom";
import style from './Landing.module.css';

const Landing =()=>{
    
    return (

        <div className={style.background}>
            <span className={style.landing}>
                <h1 >Videogames APP</h1>
                <Link to="/home" ><button >INGRESAR</button></Link>
                <div className={style.p}>
                    <p style={{color:'black'}}>By Coro Lima Jose</p>
                </div>
            </span>
            
        </div> 
    )
};

export default Landing;