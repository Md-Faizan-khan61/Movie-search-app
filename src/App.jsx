import { useState } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import Axios from 'axios'
import MovieList from './MovieList'
function App() {
  const [movies,setMovies] = useState([])
  const [error , SetError] = useState('')
  const getMovies = (query) => {
  const my_key = import.meta.env.VITE_API_KEY
  Axios.get(`https://omdbapi.com/?s=${query}&apikey=${my_key}`)
       .then((response)=>{
             if(response.data.Search) {
             console.log(response.data);
             setMovies(response.data.Search)
            //  console.log(movies);
             SetError('')
             }
             else {
             setMovies('')
             SetError(<p className='err-text'>Opps! Movie not found....</p>)
             }
       })  
       .catch((error)=>{
        console.log(error)
       })   
  }

  return (
    <div>
   
    <h2 style={{color:'rosybrown'}}>Movie Search App🔎  </h2>
     <SearchBar  getMovies={getMovies}/>
  { movies &&  <div>  
      <MovieList movies={movies}/>
   </div>
  }

  {
    error && <strong>{error}</strong>
  }
    </div>
  )
}

export default App
