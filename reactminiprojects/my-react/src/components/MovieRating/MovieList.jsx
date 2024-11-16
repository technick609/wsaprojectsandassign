import React from 'react'
import MovieItem from './MovieItem';

const MovieList = ({movies, handleDeleteMovies}) => {

  // const movies = [
  //   {name: "Dabang", rating: 3},
  //   {name: "Pushpa", rating: 5},
  //   {name: "Animal", rating: 4},
  // ];

  return (
    <>
      <h2>Movies Lists:</h2>
      <ul>
          {movies.map((movie, index)=>{
           return <MovieItem key={index}  movie={movie} onDelete={()=> handleDeleteMovies(index)} />
          })}
      </ul>
    </>
  )
}

export default MovieList