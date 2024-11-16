import React from 'react'
import Task from './Task'

const TaskList = () => {

    const tasks = ["Wakeup At 7:00 in the Morning", "Breakfast at 9:00 am", "Study till 12:00 pm", "Lunch at 12:30 pm"];

  return (
    <>
    <h1>Task List:</h1>
    <ul>
        {tasks.map((task, index)=>{
           return <Task key={index} taskName={task} />
        })}
    </ul>
    </>
  )
}

export default TaskList