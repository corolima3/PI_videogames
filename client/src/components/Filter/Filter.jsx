import style from "./Filter.module.css";
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { orderByAlp, orderByRate, filterDbGames, filterByGenre,deleteState } from "../../redux/actions";
import {getAllVideogames, getAllGenres, returnVideogames } from '../../redux/actions'
const Filter = (props) => {
    const {setData}= props;
    const dispatch = useDispatch();
    const {allGenres, allVideogames  } = useSelector(state => state)
    const [selectedOption, setSelectedOption] = useState("All");
    const {filterVideogames} = useSelector(state => state)
    console.log(filterVideogames);

    const handleRating = (e) => {
        dispatch(orderByRate(e.target.value))}

    const handleAlp = (e) => {
        dispatch(orderByAlp(e.target.value))
    };

    const handleGenres = (e) => {
        dispatch(returnVideogames(true))
        dispatch(filterByGenre(e.target.value))
        setSelectedOption(e.target.value);
    };

    const handleOringn = (e) => {
        dispatch(returnVideogames(true))
        dispatch(filterDbGames(e.target.value))
    };

    const handleReset = () => {
        setSelectedOption("All");
        setData(allVideogames)
        dispatch(getAllVideogames());
        dispatch(deleteState("ok"))
        dispatch(returnVideogames(false))
            // dispatch(filterDbGames('All'));
            // dispatch(orderByAlp('All'));
            // dispatch(orderByRate('all'));
            // dispatch(filterByGenre('All'));
    }
  

    return (
        <div className={style.row}>

            <div className={style.div}>
                <h3>Alphabet:</h3>
                <select name="order" id="" onChange={ handleAlp} >
                    <option value="All">All</option>
                    <option value="Ascending">Ascendente</option>
                    <option value="Descending">Descendente</option>
                </select>
            </div>
            <div className={style.div}>
                <h3 >Rating:</h3>
                    <select name="rating" onChange={handleRating}>
                        <option value='all'>Normal</option>
                        <option value='alto'>alto</option>
                        <option value='bajo'>bajo</option>  
                    </select>
            </div>
            <div className={style.div}>
                <h3 >Genres:</h3>
                <select  name="Genres" id="Genres" onChange={handleGenres} value={selectedOption}>
                <option>All</option>
                        {allGenres?.map((genre, i) => <option key={i} value={genre.name}>{genre.name}</option>)}
                </select>
                </div>
                <div className={style.div} >
                    <h3 >Origen:</h3>
                    <select name="order" id="" onChange={handleOringn } >
                    <option value="" >Source...</option>
                    <option value="API" >API</option>
                    <option value="DATABASE">DATABASE</option>
                    </select>

                </div>
                <div className={style.button}>
                    <button onClick={handleReset}>RESET FILTERS</button>
                </div>
            
        </div>
    )
};

export default Filter;