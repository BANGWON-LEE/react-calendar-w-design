import { useContext, useEffect } from 'react'
import CalendarMonth from './month/CalendarMonth'
import CalendarDay from './dates/CalendarDay'
import { MonthContext } from '../context/MonthProvider'
import {
  DayContextType,
  DateContextType,
  RangeBtnContextType,
} from '../type/contextType'
import { DayContext } from '../context/DayProvider'
import { openModalContext } from '../context/input-btn/OpenModalProvider'
import GrayBtn from './button/GrayBtn'

const RangeCalendar = () => {
  // context api로 전역처리 할 예정
  const { nowDate } = useContext<DateContextType>(MonthContext)

  const { allDates, setAllDates } = useContext<DayContextType>(DayContext)

  const currentDate = new Date(nowDate)

  // 선택한 달의 첫 날 (예 : 7월을 선택했을 경우 7월 1일을 가져옴)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 해당 월의 첫째 날 생성
  const firstDay = new Date(year, month, 1)

  // 현재 달의 다음 달을 구합니다.
  // JS 월을 나타낼 때, 0 =>1월 1=> 2월 따라서 11월일 12월이기 때문에
  // 현재가 12월(11)이면 다음 달은 1월(0)이 되어야 한다.
  const nextMonth =
    currentDate.getMonth() === 11
      ? 0
      : currentDate.getMonth() + 1 + Number(firstDay.getMonth())

  const nextMonthYear =
    currentDate.getMonth() === 11
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()

  // 다음 달의 첫째 날을 구합니다.
  const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1)

  // 전달의 마지막 날을 구합니다.
  const lastDayOfPreviousMonth = firstDay.getTime() - 1

  // // 전달의 마지막 주의 일요일을 구합니다.
  const lastSundayOfPreviousMonth = new Date(lastDayOfPreviousMonth)

  lastSundayOfPreviousMonth.setDate(
    lastSundayOfPreviousMonth.getDate() - lastSundayOfPreviousMonth.getDay()
  )

  // 다음 달의 둘째 주의 토요일을 구합니다.
  const secondSaturdayOfNextMonth = firstDayOfNextMonth
  secondSaturdayOfNextMonth.setDate(secondSaturdayOfNextMonth.getDate() + 7) // 첫째 주를 건너뛰기 위해 7일을 추가합니다.

  useEffect(() => {
    const standardDate = new Date(lastSundayOfPreviousMonth)
    const datesToAdd: Date[] = []

    if (allDates.length !== 0) {
      // console.log("체크1");
      setAllDates([])
      // datesToAdd.length = 0;
    }

    while (standardDate <= secondSaturdayOfNextMonth) {
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
        <div className="calendar_main_block">
          <CalendarMonth />
          <CalendarDay />
        </div>
        <div className="calendar_close_block">
          <GrayBtn action={onClose} text={'Close'} />
        </div>
      </div>
    </div>
  )
}

export default RangeCalendar
