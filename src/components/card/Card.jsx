import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  console.log(props);
   return (
      <div className={styles.Card}>
          <button onClick={() => props.onClose(props.id)}>X</button>
          <h6>{props.id}</h6>
          <Link to={`/detail/${props.id}`}>
          <h2>{props.name}</h2>
          </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img  src={props.image} alt={props.name} /> 
      </div>
   );
}
