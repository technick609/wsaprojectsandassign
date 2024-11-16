import React, { useState } from 'react'

const TaskListItem = ({list, onDelete}) => {


  return (
    <>
    <li>
      <input type="checkbox" />{list}
      <button onClick={onDelete}>Delete</button></li>
    </>
  )
}

export default TaskListItem