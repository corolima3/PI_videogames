
// import ALL_POKEMONS from "./actions";
// import POKEMON_BY_ID from "./actions";
// import POKEMONS_BY_NAME from "./actions";
import { ALL_VIDEOGAMES, BY_NAME_VIDEOGAMES, BY_ID_VIDEOGAMES} from "./actions";
const initialState = {
    byName:[],
    allVideogames:[{
      "id": 3498,
      "name": "Grand Theft Auto V",
      "image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
      "released": "2013-09-17",
      "rating": 4.47,
      "platforms": [
        "PlayStation 5",
        "Xbox Series S/X",
        "PlayStation 4",
        "PC",
        "PlayStation 3",
        "Xbox 360",
        "Xbox One"
      ],
      "genres": [
        "Action",
        "Adventure"
      ],
      "created": false
    },
  {
      "id": "79688dba-a754-4358-8e81-0809396efa7c",
      "name": "fortnite",
      "image": "hola",
      "released": "hello",
      "description": "ano",
      "rating": 23,
      "platforms": "sdas",
      "created": true,
      "genres": [
        {
          "id": 1,
          "name": "Action",
          "GenreVideogame": {
            "createdAt": "2023-05-02T16:58:02.195Z",
            "updatedAt": "2023-05-02T16:58:02.195Z",
            "videogameId": "79688dba-a754-4358-8e81-0809396efa7c",
            "genreId": 1
          }
        }
      ]
    }]
}

const reducer=(state=initialState, {type, payload}) =>{
    switch (type) {

        case ALL_VIDEOGAMES:
          return { ...state, allVideogames: payload,
          };
        case BY_ID_VIDEOGAMES:
          return { ...state, allVideogames: payload,
          };
        case BY_NAME_VIDEOGAMES:
          return { ...state, pokemoByname: payload}
        default:
            return { ...state };
        }
};
export default reducer;