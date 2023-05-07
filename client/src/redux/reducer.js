
import { ALL_VIDEOGAMES, BY_NAME_VIDEOGAMES, BY_ID_VIDEOGAMES, ALL_GENRES, ORDER_BY_RATING, ORDER_BY_ALP, 
  FILTER_BY_GENRE,FILTER_BY_DDBB, CREATE_GAME} from "./actions";
const initialState = {
    byName:[],
    allVideogames:[],
    orderVideogames:[],
    filterVideogames:[],
    allGenres:[],
    currentPage: 1,
    totalPages: 0,
    errorMsg:{},
}

const reducer=(state=initialState, {type, payload}) =>{
    switch (type) {

        case ALL_VIDEOGAMES:
          return { ...state, 
            filterVideogames:payload,
            allVideogames: payload,
            orderVideogames:payload,
          };
        case BY_ID_VIDEOGAMES:
          return { ...state, allVideogames: payload,
          };
        case BY_NAME_VIDEOGAMES:
          return { ...state, Byname: payload};
        case ALL_GENRES:
            return { ...state, allGenres: payload};
        case CREATE_GAME:
          if(payload.status === 200) {
            return { ...state,  errorMsg: {}
                  } 
          } else {
            return { ...state, errorMsg: payload
                  }
          }
        case ORDER_BY_ALP:
          if (payload === "Ascending") {
            return {
                ...state,
                //filterVideogames: state.filterVideogames.sort((a,b) => a.name > b.name )
                orderVideogames: state.orderVideogames.sort((a, b) => a.name.localeCompare(b.name) )
            };
        }
        else if (payload === "Descending") {
            return {
                ...state,
               //filterVideogames: state.filterVideogames.sort((a,b) => b.name > a.name)
               orderVideogames: state.orderVideogames.sort((a, b) => b.name.localeCompare(a.name))
            };  
        } 
        else {
            return {
                ...state,
                orderVideogames: state.orderVideogames.sort((a,b) => 0.5 - Math.random())
            };
        }
        case ORDER_BY_RATING:
          const filteredByRating = payload === "alto"
          ? state.allVideogames.sort((a, b) => b.rating - a.rating)
          : payload === "bajo"
          ? state.allVideogames.sort((a,b) => a.rating - b.rating)
          : [...state.allVideogames];
          return { ...state,
            filterVideogames: filteredByRating } ;
          
        case FILTER_BY_DDBB:
          const dbOApi = payload === "DATABASE"? 
            state.allVideogames.filter(game => isNaN(parseInt(game.id)))
            : payload === "API"? 
            state.allVideogames.filter(game => !isNaN(parseInt(game.id)))
                           : [...state.allVideogames];
            return {
                ...state,
                filterVideogames: dbOApi
            };
        case FILTER_BY_GENRE:
          const filtered= state.orderVideogames.filter(game => game.genres.includes(payload));
            
            return{
                ...state, filterVideogames:filtered
              }
        default:
            return { ...state };
        }
};
export default reducer;