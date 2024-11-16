import React from 'react'
import TaskListItem from './TaskListItem'

const TaskLists = ({lists, handleDelList}) => {


  return (
    <>
        <div className="tasks">
            <h2>Your Tasks</h2>
            <ul>
               {lists.map((list, index) =>{
                return <TaskListItem key={index} list={list} onDelete={()=> handleDelList(index)}/>
               })} 
            </ul>
        </div>
    </>
  )
}

export default TaskLists