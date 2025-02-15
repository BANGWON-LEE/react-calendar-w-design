import { useContext } from 'react'
import CalendarDaysUI from '../../view/CalendarDaysUI'
import { DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { divideDay } from './divideDay'

const CalendarDay = () => {
  const { allDates } = useContext<DayContextType>(DayContext)

  const dateArray: Date[] = allDates.filter(item => item instanceof Date)

  const arrDayState: object[][] | string[][] = divideDay(dateArray)

  return <CalendarDaysUI arrDayState={arrDayState} />
}

export default CalendarDay
