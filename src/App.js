import React, {useState} from 'react'
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Result from './components/Results';
import Popup from './components/Popup';
function App() {
  const [movie, setMovie] = useState({
      s :"",
      results : [], 
      selected : {}
  })

  const apiurl = 'https://www.omdbapi.com/?apikey=ad838f9b'

   const searchInput = (e) =>{
     if(e.key === "Enter") {
       axios(apiurl+ "&s=" + movie.s)
       .then(( { data} )=>{
         let results = data.Search
           setMovie(prevState=>{
             return { ...prevState , results : results}
           });
       });
     }
  }
  
  const handleInput = (e) =>{
    let s = e.target.value
    setMovie(prevState=>{
      return {...prevState, s: s}
    });
    
  }
// open Popup
const openPopup = (id) =>{
    axios(apiurl + "&i=" + id).then(( { data} )=>{
      let result = data;
        setMovie(prevState=>{
          return { ...prevState , selected: result}
        });
    });
}
// close Popup
const closePopup = () =>{
  setMovie(prevState=>{
    return { ...prevState , selected : {} }
  });
}

  return (
    <div className="App">
       <header>
        <h1> <i class="fas fa-film"></i> React Movie Database</h1>
       </header>
       <main>
          <Search handleInput= {handleInput} search={searchInput}/>
          <Result results ={movie.results} openpopup ={openPopup}/>


           {(typeof movie.selected.Title != "undefined") ?
            <Popup selected ={movie.selected} closepopup ={closePopup}/>: false}
       </main>
    </div>
  );
}

export default App;
