import React from 'react'
import { useState } from 'react';
import InputNameChange from './InputNameChange';
import ProfileButton from './ProfileButton';
import ProfileCard from './ProfileCard';


const UserInput = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleChange = (event) =>{
      setName(event.target.value);
      setShowOutput(false);
    }
    const handleAge = (event) =>{
      setAge(event.target.value);
      setShowOutput(false);
      
    }  


    // for button tag
    const [showOutput, setShowOutput] = useState(false);
    const handleClick = () =>{
      setShowOutput(true);
    }
    
  return (
    <>
    <InputNameChange name={name} age={age} handleChange={handleChange} handleAge={handleAge} />
    <ProfileButton showOutput={showOutput} setShowOutput={setShowOutput} handleClick={handleClick} />
    {showOutput && <ProfileCard name={name} age={age} />}
    </>
  )
}

export default UserInput