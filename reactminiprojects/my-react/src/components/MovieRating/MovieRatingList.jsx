import React, { useState } from 'react'
import MovieForm from './MovieForm'
import MovieList from './MovieList'
import AverageRating from './AverageRating'

const MovieRatingList = () => {

  const [movies, setMovies] = useState([]);

  const addMovies = (movie) =>{
    setMovies([...movies, movie]);
  }

  const handleDeleteMovies = (index) =>{
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  }

  const calcAvgRating = () => {
    if(movies.length === 0) return 0;
    const totalRating = movies.reduce((sum, movie) => sum + movie.rating, 0)
    return (totalRating / movies.length).toFixed(1);
  }

  return (
    <>
    <h1>Movie Rating App</h1>
    <MovieForm addMovies={addMovies} />
    <MovieList movies={movies} handleDeleteMovies={handleDeleteMovies} />
    <AverageRating calcAvgRating={calcAvgRating()} />
    </>
  )
}

export default MovieRatingList