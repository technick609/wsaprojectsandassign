import React from 'react'
import Greetings from './Greetings'

const ParentGreet = ({name, age}) => {
  return (
    <>
    <Greetings name={name} />
    <h2>Age: {age} </h2>
    </>
  )
}

export default ParentGreet