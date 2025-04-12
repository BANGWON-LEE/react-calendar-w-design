import { useContext, useEffect } from 'react'
import CalendarMonth from '../month/CalendarMonth'
import CalendarDay from '../dates/CalendarDay'
import { MonthContext } from '../../context/MonthProvider'
import {
  DayContextType,
  DateContextType,
  RangeBtnContextType,
} from '../../type/contextType'
import { DayContext } from '../../context/DayProvider'
import { openModalContext } from '../../context/input-btn/OpenModalProvider'
import GrayBtn from '../button/GrayBtn'
import CalendarTime from '../time/CalendarTime'
import { CalendarCheckTimeComponentType } from '../../type/propsType'
import { getLastWeek, getNextWeek } from '../../util'

const DatePickerCalendar = (props: CalendarCheckTimeComponentType) => {
  const { time } = props

  // context api로 전역처리 할 예정
  const { nowDate } = useContext<DateContextType>(MonthContext)

  const { allDates, setAllDates } = useContext<DayContextType>(DayContext)

  useEffect(() => {
    const lastMonth = getLastWeek(nowDate)
    const nextMonth = getNextWeek(nowDate)

    const standardDate = new Date(lastMonth)
    const datesToAdd: Date[] = []

    if (allDates.length !== 0) {
      // console.log("체크1");
      setAllDates([])
      // datesToAdd.length = 0;
    }

    while (standardDate <= nextMonth) {
      datesToAdd.push(new Date(standardDate))

      standardDate.setDate(standardDate.getDate() + 1)
      // console.log("datesToAdd", datesToAdd);
    }

    setAllDates(prev => [...prev, ...datesToAdd])
  }, [nowDate])

  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext)

  const onClose = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="modal">
      <div className="calendar_block">
        <div className="calendar_block_inner">
          <div className="calendar_main_block">
            <CalendarMonth />
            <CalendarDay type={'datePicker'} />
          </div>
          {time && <CalendarTime />}
        </div>
        <div className="calendar_close_block">
          <GrayBtn action={onClose} text={'OK'} />
        </div>
      </div>
    </div>
  )
}

export default DatePickerCalendar
