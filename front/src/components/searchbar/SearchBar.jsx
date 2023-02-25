import { useState } from "react";
import styles from "./SearchBar.module.css";
//import styled from "styled-components"

export default function SearchBar(props) {

   const {onSearch} = props;
   const [character, setCharacter] = useState ("");

   const handleChange = (evento) =>{
      setCharacter(evento.target.value)
   }
   return (
      <div className={styles.SearchBar}>
      <div>
          <input type='search'  value ={character} onChange={handleChange}/>

      <button onClick={() => onSearch(character)}>Agregar</button> 
      </div>
      </div>
      
   );
}
