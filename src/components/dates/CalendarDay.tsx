import { useContext, useEffect, useState } from 'react'
import CalendarDaysUI from '../../view/CalendarDaysUI'
import { DateRangeContextType, DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { DateRangeContext } from '../../context/DateRangeProvider'

const CalendarDay = () => {
  const { allDates } = useContext<DayContextType>(DayContext)

  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext)

  const dateArray: Date[] = allDates.filter(item => item instanceof Date)

  const toggleDay = (day: string | Date): void => {
    const selectedDate = new Date(day.toString()) || new Date()

    // 20241107 날자 조건문 추가하면 됨.
    setDateRange((prevDateRange: any) => {
      // console.log('Previous date range:', prevDateRange.start > selectedDate)
      if (prevDateRange.start === '' || prevDateRange.end !== '') {
        // console.log('are you start?')
        return {
          start: selectedDate,
          end: '',
        }
      } else if (prevDateRange.start > selectedDate) {
        // console.log('selectedDate is not big than start')
        return {
          start: selectedDate,
          end: prevDateRange.start,
        }
      } else if (prevDateRange.end === '' || prevDateRange.start !== '') {
        // console.log('did you choice end?')
        return {
          ...prevDateRange,
          end: selectedDate,
        }
      } else if (selectedDate > prevDateRange.end) {
        // console.log('selectedDate is not big than end')
        return {
          start: selectedDate,
          end: '',
        }
      } else if (prevDateRange.start === selectedDate) {
        return {
          start: selectedDate,
          end: selectedDate,
        }
      }
    })
  }

  const divideDay = (data: Date[]) => {
    const dayArray: object[][] = []
    const weekArray: Date[] = [new Date()]

    let i = 0
    for (let j = 0; j < data.length; j += 1) {
      // console.log('ddd', data[j]);
      if (data[j] !== undefined) {
        const dayType: string = data[j].getDay().toString()
        const dayValue: Date = data[j]

        if (dayType === '0') {
          weekArray[0] = dayValue
        } else if (dayType === '1') {
          // console.log('1번');
          weekArray[1] = dayValue
        } else if (dayType === '2') {
          weekArray[2] = dayValue
        } else if (dayType === '3') {
          weekArray[3] = dayValue
        } else if (dayType === '4') {
          weekArray[4] = dayValue
        } else if (dayType === '5') {
          weekArray[5] = dayValue
        } else if (dayType === '6') {
          weekArray[6] = dayValue

          dayArray[i] = [...weekArray]
          i += 1
        }
      }
    }

    return dayArray
  }

  const arrDayState: object[][] | string[][] = divideDay(dateArray)

  return (
    <CalendarDaysUI
      arrDayState={arrDayState}
      dateRange={dateRange}
      toggleDay={toggleDay}
    />
  )
}

export default CalendarDay
