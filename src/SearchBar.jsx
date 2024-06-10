import React, { useState } from "react";

const SearchBar = ({getMovies}) => {
  const [ query , setQuery] = useState('')   
  
  const handleSubmit = (e) => {
   e.preventDefault();
   getMovies(query)
  }
    return(
         <>
         <div className="">
            <form onSubmit={handleSubmit} className="form" >
                <input
                type="text"
                placeholder="Search for A movie..."
                className="input"
                required
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
                <button className="button">Search</button>
            </form>
         </div>
         </>
    )
}
export default SearchBar