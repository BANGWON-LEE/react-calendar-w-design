import { useContext } from 'react'
// import CalendarDaysUI from '../../view/RangeCalendarDaysUI'
import { DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { divideDay } from './divideDay'
import { CalendarCheckTypeComponentType } from '../../type/propsType'
import RangeCalendarDaysUI from '../../view/RangeCalendarDaysUI'

const CalendarDay = (props: CalendarCheckTypeComponentType) => {
  const { type } = props

  const { allDates } = useContext<DayContextType>(DayContext)

  const dateArray: Date[] = allDates.filter(item => item instanceof Date)

  const arrDayState: object[][] | string[][] = divideDay(dateArray)

  return <RangeCalendarDaysUI arrDayState={arrDayState} type={type} />
}

export default CalendarDay
