import {useState} from "react";
import {useDispatch} from "react-redux";
import {getByName} from '../../redux/actions';

const SearchBar=()=>{
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleClick = (e) => {
        e.preventDefault()
        if (search.length) {
        dispatch(getByName(search))
        setSearch("")
        }
    }
    return(
        <div>
            <input onChange={handleSearch} value={search} type='search' placeholder="Search Videogame..." />
            <button onClick={handleClick }>Agregar</button>
        </div>
    )
} 

export default SearchBar;