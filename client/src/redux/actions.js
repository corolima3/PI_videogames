import axios from "axios";
export const ALL_VIDEOGAMES="ALL_VIDEOGAMES ";
export const BY_ID_VIDEOGAMES="BY_ID_VIDEOGAMES";
export const BY_NAME_VIDEOGAMES="BY_NAME_VIDEOGAMES";

export const getAllVideogames=()=>{
    return async (dispatch) => {
        try {
            const getAll = (await axios.get("http://localhost:3001/videogames").data);
            console.log(getAll.data)
            return dispatch({ type:ALL_VIDEOGAMES, payload: getAll });
            
        } catch (error) { console.log(error.message);
            
        }
    }
}

export const getPokemonsByName = (name) => {
    return async function (dispatch) {
        try {
            const axiosInfo = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            const pokemonsByName = axiosInfo.data;
                dispatch({ type: BY_NAME_VIDEOGAMES, payload: pokemonsByName });
        } catch (error) {
            dispatch({ type: BY_NAME_VIDEOGAMES, payload: [] });
            };
        }; 
    };
    
export const PokemonById = (id) => {
        return async function (dispatch) {
            const axiosInfo = await axios.get(`http://localhost:3001/pokemons/${id}`);
            const pokemonById = axiosInfo.data;
            dispatch({ type: BY_ID_VIDEOGAMES, payload: pokemonById });
        };
    };