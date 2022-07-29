import React from 'react'

const WeekDays = () => {
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]
  return (
    <>
      {days.map(day => {
        return (
          <div className='day'>
            <h4>{day}</h4>
          </div>
        )
      })}
    </>
  )
}

export default WeekDays
