import './App.css'
import React, { useState, useRef } from 'react'
import Draggable from 'react-draggable'
import data from './data.json'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

function App () {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const [list, setList] = useState([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6'
  ])

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

  const dragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML)
  }

  const drop = e => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  return (
    <>
      <div className='content'>
        <h1>Weekly Planner</h1>
        <Draggable>
          <div>I can now be moved around!</div>
        </Draggable>
        <Draggable>
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        </Draggable>
        <ToDoForm addTask={addTask} />
      </div>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: 'lightblue',
              margin: '20px 25%',
              textAlign: 'center',
              fontSize: '40px'
            }}
            onDragStart={e => dragStart(e, index)}
            onDragEnter={e => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
    </>
  )
}

export default App
