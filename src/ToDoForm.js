import React, { useState } from 'react'

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('')

  const handleChange = e => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={{ marginRight: 10 }}
        value={userInput}
        type='text'
        onChange={handleChange}
        InputProps={{ style: { fontSize: 40 } }}
        InputLabelProps={{ style: { fontSize: 40 } }}
        placeholder=''
      />
      <button>Add Task</button>
    </form>
  )
}

export default ToDoForm
