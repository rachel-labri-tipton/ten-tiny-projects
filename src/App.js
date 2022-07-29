import './App.css'
import React, { useState } from 'react'
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'
import WeekDays from './WeekDays'

function App () {
  const [toDoList, setToDoList] = useState([])

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
    <>
      <div className='header'>
        <h1>Simple Weekly Planner</h1>
        <p>There are 168 hours in a week. What will you do with them?</p>
      </div>
      <div className='calendar-container'>
        <div className='weekdays-container'>
          <WeekDays className='days' />
        </div>
      </div>
      <div className='form-container'>
        <h1> Things to do this week:</h1>
        <ToDoForm addTask={addTask} />
      </div>
      <div className='task-container'>
        <ToDoList
          toDoList={toDoList}
          handleToggle={handleToggle}
          handleFilter={handleFilter}
        />
      </div>
    </>
  )
}

export default App
