import React, { useContext } from 'react'
import RangeCalendar from '../calendar/RangeCalendar'
import DateInputMain from '../input/DateInputMain'
import { RangeBtnContextType } from '../../type/contextType'
import { openModalContext } from '../../context/input-btn/OpenModalProvider'
import { CalendarCheckTimeComponentType } from '../../type/propsType'

const Range = (props: CalendarCheckTimeComponentType) => {
  const { time } = props

  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext)

  return (
    <>
      {openModal === true && <RangeCalendar time={time} />}
      <DateInputMain />
    </>
  )
}

export default Range
