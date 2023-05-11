
import { ALL_VIDEOGAMES, BY_NAME_VIDEOGAMES, BY_ID_VIDEOGAMES, ALL_GENRES, ORDER_BY_RATING, ORDER_BY_ALP, 
  FILTER_BY_GENRE,FILTER_BY_DDBB, CREATE_GAME, RETURN_VIDEOGAMES, DELETE_STATE} from "./actions";
const initialState = {
  primalVideogames:[],
  allVideogames:[],
  orderVideogames:[],
  filterVideogames:[],
  byName:[],
  allGenres:[],
  access:false,
  errorMsg:{},
}

const reducer=(state=initialState, {type, payload}) =>{
    switch (type) {

        case ALL_VIDEOGAMES:
          const primal = [...payload]
          return { ...state, 
            //filterVideogames:payload,
            primalVideogames:primal,
            allVideogames: payload,
            orderVideogames:payload,
          };
        case BY_ID_VIDEOGAMES:
          return { ...state, allVideogames: payload,
          };
        case BY_NAME_VIDEOGAMES:
          return { ...state, byName: payload};
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
                orderVideogames: state.allVideogames.sort((a, b) => a.name.localeCompare(b.name) ),
                filterVideogames:state.filterVideogames?.sort((a, b) => a.name.localeCompare(b.name) )
            };
        }
        else if (payload === "Descending") {
            return {
                ...state,
               //filterVideogames: state.filterVideogames.sort((a,b) => b.name > a.name)
               orderVideogames: state.allVideogames.sort((a, b) => b.name.localeCompare(a.name)) ,
               filterVideogames:state.filterVideogames?.sort((a, b) => b.name.localeCompare(a.name))
            };  
        } else {
            return {
                ...state,
                allVideogames:[...state.primalVideogames],
                //orderVideogames: state.orderVideogames.sort((a,b) => 0.5 - Math.random())
            };
        }
        case ORDER_BY_RATING:
          if (payload === "alto") {return{ ...state, 
                                          orderVideogames:state.allVideogames.sort((a, b) => b.rating - a.rating),
                                          filterVideogames:state.filterVideogames?.sort((a, b) => b.rating - a.rating)}
            }else if(payload==="bajo") { return{...state, 
                                          orderVideogames:state.allVideogames.sort((a,b) => a.rating - b.rating),
                                          filterVideogames:state.filterVideogames?.sort((a,b) => a.rating - b.rating) } 
            }else { return {...state, 
                            allVideogames:[...state.primalVideogames]}}
          // const filteredByRating = payload === "alto"
          // ? state.allVideogames.sort((a, b) => b.rating - a.rating)
          // : payload === "bajo"
          // ? state.allVideogames.sort((a,b) => a.rating - b.rating)
          // : [...state.allVideogames];
          // return { ...state,
          //   filterVideogames: filteredByRating } ;
          
        case FILTER_BY_DDBB:
          
        const dbOApi = payload === "DATABASE"?  state.allVideogames.filter(game => game.created===true)
            : payload === "API"? state.allVideogames.filter(game => game.created===false)
                           : [...state.primalVideogames];
          return {
                  ...state,
                  filterVideogames: dbOApi
              };
          // const dbOApi = payload === "DATABASE"? 
          //   state.allVideogames.filter(game => isNaN(parseInt(game.id)))
          //   : payload === "API"? 
          //   state.allVideogames.filter(game => !isNaN(parseInt(game.id)))
          //                  : [...state.allVideogames];
          //   return {
          //       ...state,
          //       filterVideogames: dbOApi
          //   };
        case FILTER_BY_GENRE:
          const filtered= state.allVideogames.filter(game => game.genres.includes(payload));
          
            return{
                ...state, filterVideogames:filtered,
                
              }
        case RETURN_VIDEOGAMES:
          return{
            ...state, access:payload
          }
        case DELETE_STATE:
          return{
            ...state, filterVideogames:[], byName:[],
          }
        default:
            return { ...state };
        }
};
export default reducer;