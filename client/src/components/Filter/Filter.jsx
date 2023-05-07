//import s from "./Filter.module.css"
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { orderByAlp, orderByRate, filterDbGames, filterByGenre } from "../../redux/actions";

const Filter = () => {
    
    const dispatch = useDispatch();
    const {allGenres} = useSelector(state => state)
    const {filterVideogames} = useSelector(state => state)
    console.log(filterVideogames);

    const handleRating = (e) => {
        dispatch(orderByRate(e.target.value))
    };

    const handleAlp = (e) => {
        dispatch(orderByAlp(e.target.value))
    };

    const handleGenres = (e) => {
        dispatch(filterByGenre(e.target.value))
    };

    const handleOringn = (e) => {
        dispatch(filterDbGames(e.target.value))
    };

    const handleReset = async() => {
    
    }
  

    return (
        <div >
            <div >
                <select name="order" id="" onChange={ handleAlp} >
                    <option value="All">All</option>
                    <option value="Ascending">Ascendente</option>
                    <option value="Descending">Descendente</option>
                </select>
            <div >
                <h3 >Rating:</h3>
                    <select name="rating" onChange={handleRating}>
                        <option value='all'>Normal</option>
                        <option value='alto'>alto</option>
                        <option value='bajo'>bajo</option>  
                    </select>
            </div>
            <div>
                <h3 >Genres:</h3>
                <select  name="Genres" id="Genres" onChange={handleGenres}>
                <option>All</option>
                        {allGenres?.map((genre, i) => <option key={i} value={genre.name}>{genre.name}</option>)}
                </select>
                </div>
                <div >
                    <h3 >Origen:</h3>
                    <select name="order" id="" onChange={handleOringn } >
                    <option value="" >Source...</option>
                    <option value="API" >API</option>
                    <option value="DATABASE">DATABASE</option>
                    </select>

                </div>
                <div>
                    <button onClick={handleReset}>RESET FILTERS</button>
                </div>
            </div>
        </div>
    )
};

export default Filter;