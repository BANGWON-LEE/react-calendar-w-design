import React, { useContext } from 'react'
import CalendarTimeUI from '../../view/CalendarTimeUI'
import { DateRangeContext } from '../../context/DateRangeProvider'
import { DateRangeContextType } from '../../type/contextType'

const CalendarTime = () => {
  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext)

  function updateDate(date: Date | string, index: number, value: number) {
    if (typeof date === 'string' || !date) return '' // 다른 값들 변동이 없게 하기 위한 코드

    const newDate = new Date(date)

    switch (index) {
      case 0:
        newDate.setHours(value)
        break
      case 1:
        newDate.setMinutes(value)
        break
      case 2:
        newDate.setSeconds(value)
        break
      default:
        return date
    }

    return newDate
  }

  const toggleTime = (index: number, value: string) => {
    const timeValue = Number(value)
    setDateRange(prevDate => {
      const { start, end } = prevDate
      const updatedStart =
        end === '' ? updateDate(start, index, timeValue) : start
      const updatedEnd = start !== '' ? updateDate(end, index, timeValue) : ''

      return { start: updatedStart, end: updatedEnd }
    })
  }

  return <CalendarTimeUI dateRange={dateRange} toggleTime={toggleTime} />
}

export default CalendarTime
