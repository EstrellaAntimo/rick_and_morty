import React from "react";
import { Validation} from "react";
import styles from "./Form.module.css";

       
export default function Form (props){

    const [userData, setUserData] = React.useState({
    username:'',
    password:''
    })

    const[errors, setErrors] = React.useState({
    username:'',
    password:''
    })

    function handleInputChange(e) {
        setUserData({...userData, [e.target.name]: e.target.value})
        setErrors(Validation({...userData,[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.login(userData)
    }

    return (
      
        <section class="Form-login">
    <div className={styles.Form}>
        
        <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
            <label htmlFor="username"> </label>
            
            <input
            class="controls"
            id="username"
            name="username"
            placeholder="Email"
            type='text'
            value={userData.username}
            onChange={handleInputChange} 
            />
            <p>{errors.username}</p>


            <label  htmlFor="password"> </label>
            <input
            class="cont"
            id="password"
            name="password"
            placeholder="Password"
            type='password'
            value={userData.password}
            onChange={handleInputChange} 
             />
           
             <p>{errors.password}</p>
             <br />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <br />
            <br />
            
            <button type="submit" class="enviar">Enviar</button>
            
        </form>
    </div>
    
    </section>

  
    
    )
}