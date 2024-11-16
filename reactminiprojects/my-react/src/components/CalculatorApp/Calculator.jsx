import React, { useState } from 'react'
import Display from './Display'
import Button from './Button'

const Calculator = () => {

    // State variables: input, result
    const [input, setInput] = useState("0");
    const [result, setResult] = useState("");


    // Button Click handler
    const handleButtonClick = (value)=>{
        if(value === "C"){
            setInput("0");
            setResult("");
        }
        else if(value === "DEL"){
            setInput((erase)=> erase.lenght>1 ? erase.slice(0, -1) : "0");
        }
        else if(value === "="){
            try{
                setResult(eval(input).toString());
            }
            catch{
                setResult("Math Error");
            }
        }
    }
  return (
    <>
            {/* <!---------------- Calculator Container --------------> */}
    <div className="calculator-container">
            {/* <!------------- Background circle ----------------> */}
        <div className="background-circle"></div>
            {/* <!------------ Calculator -----------------> */}
        <div className="calculator">

            {/* <!----------- Output screen ------------> */}
                <Display />


            {/* <!----------- Button rows -----------> */}    
                <Button />
        </div>   
    </div>
    </>
  )
}

export default Calculator