import React, { useState } from 'react'

const ListForms = ({addLists}) => {

    const [isList, setIsList] = useState("")

    const handleClick = () =>{
        if(isList !== ""){
            addLists(isList);
            setIsList("");
        }
    }

  return (
    <>
    <div className="list-form">
        <input type="text" placeholder='List Down Your Task' value={isList} onChange={(e) => setIsList(e.target.value)}/>
        <button onClick={handleClick}>Hit Me!</button>
    </div>
    </>
  )
}

export default ListForms