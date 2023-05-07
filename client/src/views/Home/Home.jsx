
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllVideogames, getAllGenres } from '../../redux/actions'
//import NavBar from '../../components/NavBar/NavBar'
import CardsContener from "../../components/CardsContener/CardsContener";
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';
import style from './Home.module.css'
const Home =()=>{
 
 const dispatch = useDispatch();
 const BY_PAGE= 15;

 const { allVideogames, byName}= useSelector((state)=>state)
 const [data, setData] = useState(allVideogames);
 useEffect(() => {
  if(!allVideogames.length) dispatch(getAllVideogames());
  if(!getAllGenres.length)dispatch(getAllGenres());
     if (Object.keys(byName).length > 0) {
      setData(byName);
    } else {
      setData(allVideogames);
    }
    },[dispatch,allVideogames.length, byName])
    //eslintreact-hooks/exhaustive-deps
    // useEffect(() => {
        // if(!allVideogames){dispatch(getAllVideogames())}
        // },[allVideogames, dispatch])
        
      //console.log(allGenres)
    const [currentPage, setCurrentPage] = useState(1);
   
   
console.log(data)
    const startIndex = (currentPage - 1) * BY_PAGE;
    const endIndex = startIndex + BY_PAGE;


    const pageItems = data.slice(startIndex, endIndex);
  
    function handlePrevPage() {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  
    function handleNextPage() {
      if (currentPage < Math.ceil(data.length / BY_PAGE)) {
        setCurrentPage(currentPage + 1);
      }
    }

    function handlePage(pageNumber) {
        setCurrentPage(pageNumber);
      }
    
      const pageCount = Math.ceil(data.length / BY_PAGE);
      const pageNumbers = [];
    
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
      }
    
    return (
      <div>
      {
        allVideogames?
    <div className={style.home}>
        <h1>Estas en home {currentPage}</h1>
        <Filter />
        <CardsContener allVideogames={pageItems}/>
        <button onClick={handlePrevPage}>Anterior</button>
        {pageNumbers.map((pageNumber) => (
        <button key={pageNumber} onClick={() => handlePage(pageNumber)}>
          {pageNumber}
        </button>
      ))}
        <button onClick={handleNextPage}>Siguiente</button>
    </div> : <Loading />
      }
      </div>
    )
};

export default Home;