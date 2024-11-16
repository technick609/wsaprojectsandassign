import React from 'react'

const Greetings = ({name}) => {
  return (
   <>
   {/* <h1>Hello, {props.name} </h1> */}
   
   {/* without destructuring */}
   <h1>Hello, {name}</h1>
   <h1>Welcome to React!!!!</h1>
   </>
  )
}

export default Greetings