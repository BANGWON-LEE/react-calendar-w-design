import DatePicker from './components/kind/DatePicker'
import Range from './components/kind/Range'
import { CalendarMainPropsType } from './type/propsType'

const Calendar = (props: CalendarMainPropsType) => {
  const { type, time } = props

  const selectionCalendarType = function () {
    switch (type) {
      case 'range':
        return <Range time={time} />
      case 'datePicker':
        return <DatePicker />
    }
  }

  return <div>{selectionCalendarType()}</div>
}

export default Calendar
