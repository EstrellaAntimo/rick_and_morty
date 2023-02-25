import React from "react";
import { Link } from "react-router-dom";
//import About from "../about/About";
import SearchBar from "../searchbar/SearchBar"
import styles from "./Nav.module.css";

export default function Nav ({onSearch}) {
    return (
    <div className={styles.Nav}>
        
    <div class="home">
      
        <a>
      <Link to="/home">Home</Link>
        </a>
       
        <br/>
      <a>
        <Link class="about"  to="/about">  About</Link>
        </a>
        <br/>

        
        <SearchBar class="agregar" onSearch={onSearch}/>
        </div>
        <br/>
        </div>
       
    )
}