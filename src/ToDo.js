import React from 'react'
import Draggable from 'react-draggable'

const ToDo = ({ todo }) => {
  return (
    <Draggable>
      <div className={todo.complete ? 'strike' : ''}>{todo.task}</div>
    </Draggable>
  )
}

export default ToDo
