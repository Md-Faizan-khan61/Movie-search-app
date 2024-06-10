import React from "react";

const MovieCard = ({movie}) => {
    return (
        <>
        <div className="movie-card">
           <h3>{movie.Title}</h3>
           <p>{movie.Year}</p>
           <img src={movie.Poster} alt={`${movie.Title} Poster`}/>
        </div>
        </>
    )
}
export default MovieCard