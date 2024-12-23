import React from 'react'
import { CalendarTimeUIType } from '../type'

const CalendarTimeUI = (props: CalendarTimeUIType) => {
  const { dateRange, toggleTime }: CalendarTimeUIType = props

  const hours = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  const minuteAndSecond = Array.from({ length: 60 }, (_, i) =>
    i.toString().padStart(2, '0')
  )

  const checkIsNaN = (value: string) => {
    return isNaN(Number(value)) ? '00' : value
  }

  // inde 0 is hour, index 1 is minute, index 2 is second

  const dateRangeStart = new Date(dateRange.start)
  const dateRangeEnd = new Date(dateRange.end)

  return (
    <div className="calendar_time_container">
      <div className="calendar_time_title_block">
        <p className="calendar_time_title_text">
          {/* {currentTime[0]} : {currentTime[1]} : {currentTime[2]} */}
          {dateRange.end === ''
            ? checkIsNaN(dateRangeStart.getHours().toString().padStart(2, '0'))
            : checkIsNaN(dateRangeEnd.getHours().toString().padStart(2, '0'))}
          :
          {dateRange.end === ''
            ? checkIsNaN(
                dateRangeStart.getMinutes().toString().padStart(2, '0')
              )
            : checkIsNaN(dateRangeEnd.getMinutes().toString().padStart(2, '0'))}
          :
          {dateRange.end === ''
            ? checkIsNaN(
                dateRangeStart.getSeconds().toString().padStart(2, '0')
              )
            : checkIsNaN(dateRangeEnd.getSeconds().toString().padStart(2, '0'))}
        </p>
      </div>
      <div className="calendar_time_container_inner">
        <div className="time_block">
          {hours.map((hour, index) => (
            <button
              className={`time_cell ${
                dateRange.start !== '' &&
                dateRange.end === '' &&
                checkIsNaN(
                  dateRangeStart.getHours().toString().padStart(2, '0')
                ) === hour &&
                'calendar_time_choiced_block'
              }
              ${
                dateRange.end !== '' &&
                checkIsNaN(
                  dateRangeEnd.getHours().toString().padStart(2, '0')
                ) === hour &&
                'calendar_time_choiced_block'
              }
              `}
              key={'hour-' + hour}
              onClick={() => toggleTime(0, hour)}
            >
              {hour}
            </button>
          ))}
        </div>
        <div className="time_block">
          {minuteAndSecond.map((minute, index) => (
            <button
              className={`time_cell ${
                dateRange.start !== '' &&
                dateRange.end === '' &&
                checkIsNaN(
                  dateRangeStart.getMinutes().toString().padStart(2, '0')
                ) === minute &&
                'calendar_time_choiced_block'
              }
            ${
              dateRange.end !== '' &&
              checkIsNaN(
                dateRangeEnd.getMinutes().toString().padStart(2, '0')
              ) === minute &&
              'calendar_time_choiced_block'
            }
            `}
              key={'hour-' + minute}
              onClick={() => toggleTime(1, minute)}
            >
              {minute}
            </button>
          ))}
        </div>
        <div className="time_block">
          {minuteAndSecond.map((second, index) => (
            <button
              className={`time_cell ${
                dateRange.start !== '' &&
                dateRange.end === '' &&
                checkIsNaN(
                  dateRangeStart.getSeconds().toString().padStart(2, '0')
                ) === second &&
                'calendar_time_choiced_block'
              }
            ${
              dateRange.end !== '' &&
              checkIsNaN(
                dateRangeEnd.getSeconds().toString().padStart(2, '0')
              ) === second &&
              'calendar_time_choiced_block'
            }
            `}
              key={'hour-' + second}
              onClick={() => toggleTime(2, second)}
            >
              {second}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarTimeUI
