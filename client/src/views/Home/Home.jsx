
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllVideogames, getAllGenres } from '../../redux/actions'
import CardsContener from "../../components/CardsContener/CardsContener";
import Filter from '../../components/Filter/Filter';
import Loading from '../../components/Loading/Loading';
import style from './Home.module.css'
import Error from '../../components/Error/Error';
//import Paginado from "../../components/Paginado/Paginado";

const Home =()=>{
 
 const dispatch = useDispatch();
 const BY_PAGE= 15;

 const { allVideogames, byName, access, filterVideogames, error }= useSelector((state)=>state)
 const [data, setData] = useState(allVideogames);

 useEffect(() => {
  if (!allVideogames.length) dispatch(getAllVideogames());
  if (!getAllGenres.length) dispatch(getAllGenres());
  
}, [allVideogames.length]);

const [currentPage, setCurrentPage] = useState(1);

useEffect(() => {
  if (byName.length && access ) {
    setData(byName);
    setCurrentPage(1)
  } else if(error){
    setData([])
  } else {
    setData(allVideogames);
  }
}, [byName, allVideogames, filterVideogames ]);
//console.log(allVideogames)
//console.log(byName)

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
        pageNumbers.push(i); }
    
    return (
      <div>
      {
        allVideogames.length?
    <div className={style.home}>
    
        <Filter setData={setData} setCurrentPage={setCurrentPage}/>
      <div className={style.center}>
       
          <button className={style.caracol} onClick={handlePrevPage}>{"<"}</button>
            {pageNumbers.map((pageNumber) => (
            <button key={pageNumber} onClick={()=> handlePage(pageNumber)} 
            className={currentPage === pageNumber ? style.activeButton: style.button }>
            {pageNumber}
          </button>
          ))}
          <button className={style.button}onClick={handleNextPage}>{">"}</button>
      </div>
      { pageItems.length? <CardsContener pageItems={pageItems}/> : <Error /> }
      
    </div> : <Loading />
      }
      </div>
    )
};

export default Home;