import { useContext } from 'react'
import { DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { divideDay } from './divideDay'
import CalendarDaysUI from '../../view/CalendarDaysUI'
import { rangeToggleDay } from './selectionDay'

const CalendarDayRange = () => {
  const { allDates } = useContext<DayContextType>(DayContext)

  const dateArray: Date[] = allDates.filter(item => item instanceof Date)

  const arrDayState: object[][] | string[][] = divideDay(dateArray)

  return (
    <CalendarDaysUI arrDayState={arrDayState} choiceDate={rangeToggleDay} />
  )
}

export default CalendarDayRange
