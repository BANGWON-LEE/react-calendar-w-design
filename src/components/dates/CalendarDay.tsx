import { useContext, useEffect, useState } from 'react'
import CalendarDaysUI from '../../view/CalendarDaysUI'
import { DateRangeContextType, DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { DateRangeContext } from '../../context/DateRangeProvider'
// import { MonthContext } from "../../context/MonthProvider";

const CalendarDay = () => {
  const { allDates } = useContext<DayContextType>(DayContext)

  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext)

  const toggleDay = (day: string | Date): void => {
    const selectedDate = new Date(day.toString()) || new Date()
    console.log('Selected date:', day)

    // 20241107 날자 조건문 추가하면 됨.
    setDateRange((prevDateRange: any) => {
      console.log('Previous date range:', prevDateRange)
      if (prevDateRange.start === '' || prevDateRange.end !== '') {
        console.log('are you start?')
        return {
          start: selectedDate,
          end: '',
        }
      } else if (prevDateRange.end === '' || prevDateRange.start !== '') {
        return {
          ...prevDateRange,
          end: selectedDate,
        }
      } else if (selectedDate > prevDateRange.end) {
        return {
          start: selectedDate,
          end: '',
        }
      } else if (prevDateRange.start === selectedDate) {
        return {
          start: selectedDate,
          end: selectedDate,
        }
      } else if (prevDateRange.start > selectedDate) {
        return {
          start: selectedDate,
          end: '',
        }
      }
    })
  }

  const [arrDayState, setArrDayState] = useState<object[][] | string[][]>()

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
    setArrDayState(dayArray)
  }

  useEffect(() => {
    if (allDates !== undefined) {
      const dateArray: Date[] = allDates.filter(item => item instanceof Date)
      divideDay(dateArray)
    }
  }, [allDates])

  return (
    <CalendarDaysUI
      arrDayState={arrDayState}
      dateRange={dateRange}
      toggleDay={toggleDay}
    />
  )
}

export default CalendarDay
