import React, { useContext } from 'react'
import DateInputMain from '../input/DateInputMain'
import { RangeBtnContextType } from '../../type/contextType'
import { openModalContext } from '../../context/input-btn/OpenModalProvider'
import { CalendarCheckTimeComponentType } from '../../type/propsType'
import DatePickerCalendar from '../calendar/DatePickerCalendar'

const DatePicker = () => {
  // const { time } = props

  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext)

  return (
    <>
      {openModal === true && <DatePickerCalendar />}
      <DateInputMain />
    </>
  )
}

export default DatePicker
