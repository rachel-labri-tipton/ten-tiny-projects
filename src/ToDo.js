import React from 'react'
import Draggable from 'react-draggable'

const ToDo = ({ todo }) => {
  const [checked, setChecked] = React.useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <>
      <Draggable>
        <div>
          <label>
            <input
              style={{ marginRight: 10 }}
              type='checkbox'
              checked={checked}
              onChange={handleChange}
            />
            {todo.task}
          </label>
        </div>
      </Draggable>
    </>
  )
}

export default ToDo
