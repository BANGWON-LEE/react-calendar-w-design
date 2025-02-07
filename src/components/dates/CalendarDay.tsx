import { useContext } from 'react'
import CalendarDaysUI from '../../view/CalendarDaysUI'
import { DayContextType } from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'

const CalendarDay = () => {
  const { allDates } = useContext<DayContextType>(DayContext)

  const dateArray: Date[] = allDates.filter(item => item instanceof Date)

  const divideDay = (data: Date[]) => {
    const dayArray: object[][] = []
    const weekArray: Date[] = [new Date()]

    let i = 0
    for (let j = 0; j < data.length; j += 1) {
      console.log('ddd', data[j])
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

  return <CalendarDaysUI arrDayState={arrDayState} />
}

export default CalendarDay
