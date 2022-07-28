import './App.css'
import React, { useState } from 'react'
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

function App () {
  const [toDoList, setToDoList] = useState(data)

  //add handleToggle (our state is here, so we're doing this here.)
  const handleToggle = id => {
    let mapped = toDoList.map(task => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task }
    })
    setToDoList(mapped)
  }

  //add handleFilter

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const addTask = userInput => {
    let copy = [...toDoList]
    copy.push({ id: toDoList.length + 1, task: userInput, complete: false })
    setToDoList(copy)
  }

  return (
    <div className='content'>
      <h1>Weekly Planner</h1>
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  )
}

export default App
