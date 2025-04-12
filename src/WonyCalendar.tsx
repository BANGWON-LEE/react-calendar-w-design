// import "./App.css";
import Calendar from './Calendar'
import DateRangeProvider from './context/DateRangeProvider'
import DayProvider from './context/DayProvider'
import OpenModalProvider from './context/input-btn/OpenModalProvider'
import MonthProvider from './context/MonthProvider'
import './styles/calendar.css'
import './styles/calendarInput.css'
import './styles/calendarModal.css'
import { CalendarMainPropsType } from './type/propsType'

function WonyCalendar(props: CalendarMainPropsType) {
  const { type, time } = props

  return (
    <>
      <DayProvider>
        <DateRangeProvider>
          <MonthProvider>
            <OpenModalProvider>
              <Calendar type={type} time={time} />
            </OpenModalProvider>
          </MonthProvider>
        </DateRangeProvider>
      </DayProvider>
    </>
  )
}

export default WonyCalendar
