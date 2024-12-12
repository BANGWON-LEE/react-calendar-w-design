import React from 'react'

const CalendarTimeUI = () => {
  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  const minuteAndSecond = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  return (
    <div className="calendar_time_container">
      <div className="calendar_time_title_block">
        <p className="calendar_time_title_text">00 : 00 : 00</p>
      </div>
      <div className="calendar_time_container_inner">
        <div className="time_block">
          {hours.map((hour, index) => (
            <button className="time_cell" key={'hour-' + hour}>
              {hour}
            </button>
          ))}
        </div>
        <div className="time_block">
          {minuteAndSecond.map((minute, index) => (
            <button className="time_cell" key={'hour-' + minute}>
              {minute}
            </button>
          ))}
        </div>
        <div className="time_block">
          {minuteAndSecond.map((second, index) => (
            <button className="time_cell" key={'hour-' + second}>
              {second}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarTimeUI
