import './App.css'
import { Routes, Route, useLocation, useNavigate  } from "react-router-dom"
import Cards from "../../front/src/components/cards/Cards"
import Nav from "../../front/src/components/nav/Nav"
import { useState,  useEffect } from 'react'
import Detail from './components/detail/Detail'
import About from './components/about/About'
import Form from './components/form/Form'



function App () {
  const location = useLocation();
  const navigate = useNavigate ();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'marina@henry.com'
  const password = 'marina0623'
  
  function login (userData){
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate('/home')
    }else{

    }
  }


  function onSearch(character) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/s${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

   const onClose = (id) => {
   setCharacters(characters.filter(char => char.id !== id))
   }

   useEffect(() => {
    !access && navigate('/');
             }, [access]);
 
  return (
    <div className='App' >
   <div>
    {location.pathname !== '/' && <Nav onSearch={onSearch} />}
   </div>
  
    <Routes>
      
      <Route path='/' element={<Form login={login} />} />
      <Route path='/home' element= {<Cards
          characters={characters}
          onClose={onClose}
        />} />
        <Route path='/about' element={ <About/>} />
        <Route path='/detail/:detailId' element={ <Detail/>} />
    </Routes>
   </div>
  )
}

export default App
