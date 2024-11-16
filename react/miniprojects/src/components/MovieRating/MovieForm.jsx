import React from 'react'
import { useState } from 'react'

const MovieForm = ({addMovies}) => {

  const options = [1, 2, 3, 4, 5];

  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(0);

  const handleClick = () =>{
    if(movieName && rating > 0){
      addMovies({name: movieName, rating: parseInt(rating)});
      setMovieName("");
      setRating(0);
    }
  }

  return (
   <>
   <input type='text' placeholder='Enter Movie Name' value={movieName} onChange={(e)=> setMovieName(e.target.value)} />
   <select value={rating} onChange={(e)=> setRating(e.target.value)}>
        <option value="0">Select Rating</option>
        {options.map((num)=>{
         return <option key={num} value={num}> {num} Star</option>
        })}
   </select>
   <button type='button' onClick={handleClick}>Add Movies</button>
   </>
  )
}

export default MovieForm