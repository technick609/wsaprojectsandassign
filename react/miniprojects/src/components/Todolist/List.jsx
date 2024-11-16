import React, { useState } from 'react'
import ListForms from './ListForms'
import TaskLists from './TaskLists'
import '../style/To-Do.css'

const List = () => {

    const [lists, setLists] = useState([]);

    const addLists = (list)=>{
        setLists([...lists, list]);
    }

    const handleDelList = (index)=>{
        const newLists = lists.filter((_, i)=> i !== index);
        setLists(newLists);
    }

  return (
    <>
        <h1 className='headings'>To-Do List</h1>
        <ListForms addLists={addLists} />
        <TaskLists lists={lists} handleDelList={handleDelList} />
    </>
  )
}

export default List