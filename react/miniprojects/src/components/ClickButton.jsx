import React from 'react'

const ClickButton = ({count, handleClick}) => {
  return (
   <>
    <button onClick={handleClick}>Click this</button>
   </>
  )
}

export default ClickButton