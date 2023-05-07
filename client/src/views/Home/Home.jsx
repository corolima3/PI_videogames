import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllVideogames, getAllGenres } from '../../redux/actions'
//import NavBar from '../../components/NavBar/NavBar'
import CardsContener from "../../components/CardsContener/CardsContener";
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';

const Home =()=>{
 
 const dispatch = useDispatch();
 const BY_PAGE= 15;

 useEffect(() => {
     if(!getAllVideogames.length) dispatch(getAllVideogames());
     if(!getAllGenres.length)dispatch(getAllGenres());

    },[dispatch])
    //eslintreact-hooks/exhaustive-deps
    // useEffect(() => {
        // if(!allVideogames){dispatch(getAllVideogames())}
        // },[allVideogames, dispatch])
        
      const { allVideogames }= useSelector((state)=>state)
      //console.log(allGenres)
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * BY_PAGE;
    const endIndex = startIndex + BY_PAGE;


    const pageItems = allVideogames.slice(startIndex, endIndex);
  
    function handlePrevPage() {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    }
  
    function handleNextPage() {
      if (currentPage < Math.ceil(allVideogames.length / BY_PAGE)) {
        setCurrentPage(currentPage + 1);
      }
    }

    function handlePage(pageNumber) {
        setCurrentPage(pageNumber);
      }
    
      const pageCount = Math.ceil(allVideogames.length / BY_PAGE);
      const pageNumbers = [];
    
      for (let i = 1; i <= pageCount; i++) {
        pageNumbers.push(i);
      }
    
    return (
      <>
      {
        allVideogames?
    <div>
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
      </>
    )
};

export default Home;