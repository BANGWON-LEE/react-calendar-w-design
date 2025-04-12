import React, { useContext } from 'react'
import DateInputMain from '../input/DateInputMain'
import { RangeBtnContextType } from '../../type/contextType'
import { openModalContext } from '../../context/input-btn/OpenModalProvider'
import { CalendarCheckTimeComponentType } from '../../type/propsType'
import DatePickerCalendar from '../calendar/DatePickerCalendar'

const DatePicker = (props: CalendarCheckTimeComponentType) => {
  const { time } = props

  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext)

  return (
    <>
      {openModal === true && <DatePickerCalendar time={time} />}
      <DateInputMain />
    </>
  )
}

export default DatePicker
