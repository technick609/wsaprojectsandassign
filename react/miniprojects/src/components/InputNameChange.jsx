import React from 'react'

const InputNameChange = ({name, age, handleChange, handleAge}) => {


  return (
    <>
    <input type='text' placeholder='Enter name' value= {name} onChange={handleChange}></input>
    <input type='number' placeholder='Enter age' value= {age} onChange={handleAge}></input>
    </>
  )
}

export default InputNameChange