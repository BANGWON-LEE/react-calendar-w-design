import React, { useContext } from 'react'
import CalendarTimeUI from '../../view/CalendarTimeUI'
import { DateRangeContext } from '../../context/DateRangeProvider'
import { DateRangeContextType } from '../../type/contextType'

const CalendarTime = () => {
  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext)

  const toggleTime = (index: number, value: string): void => {
    setDateRange(prevDate => {
      const startDateRagne = new Date(prevDate.start)
      const endDateRagne = new Date(prevDate.end)
      const timeValue = Number(value)
      // console.log('Previous date range:', prevDateRange.start > selectedDate)
      if (dateRange.end === '' && index === 0) {
        return {
          start: new Date(startDateRagne.setHours(timeValue)),
          end: '',
        }
      } else if (dateRange.end === '' && index === 1) {
        return {
          start: new Date(startDateRagne.setMinutes(timeValue)),
          end: '',
        }
      } else if (dateRange.end === '' && index === 2) {
        return {
          start: new Date(startDateRagne.setSeconds(timeValue)),
          end: '',
        }
      } else if (dateRange.start !== '' && index === 0) {
        return {
          start: startDateRagne,
          end: new Date(endDateRagne.setHours(timeValue)),
        }
      } else if (dateRange.start !== '' && index === 1) {
        return {
          start: startDateRagne,
          end: new Date(endDateRagne.setMinutes(timeValue)),
        }
      } else if (dateRange.start !== '' && index === 2) {
        return {
          start: startDateRagne,
          end: new Date(endDateRagne.setSeconds(timeValue)),
        }
      }

      return prevDate
    })
  }

  return <CalendarTimeUI dateRange={dateRange} toggleTime={toggleTime} />
}

export default CalendarTime
