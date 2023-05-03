// import { useState } from "react";

const SearchBar=()=>{

    return(
        <div>
            <input type='search' placeholder="Busca un pokemon..." 
             />
            <button onClick={()=> window.alert('No hay personajes con ese ID') }>Agregar</button>
        </div>
    )
} 

export default SearchBar;