import React from 'react';
import {Link} from "react-router-dom";

const Landing =()=>{
    
    return (
    <>
        <div >
            <h1 >Pokemon APP</h1>
            
            <Link to="/home" ><button >INGRESAR</button></Link>
            <p >By Coro Lima Jose</p>
        </div> 
    </> 
    )
};

export default Landing;