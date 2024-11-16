import React from 'react'

const MovieItem = ({movie, onDelete}) => {

    const renderStars = (count) =>{
        return Array.from({length : 5}, (_, i)=>
        <span key={i} style={{color: i < count ?  "green" : "darkgray"}}>&#9733;</span>)
    }

  return (
    <>
        <li>{movie.name} - {renderStars(movie.rating)}
        <button onClick={onDelete} style={{marginLeft: "10px"}}>Delete</button>
        </li>
        
    </>
  )
}

export default MovieItem