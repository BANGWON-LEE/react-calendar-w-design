import LeftImg from '../assets/calendar_left.png'
import RightImg from '../assets/calendar_right.png'
import { CalendarMonthUIType } from '../type'
import monthObj from '../data/month.json'

const CalendarMonthUI = (props: CalendarMonthUIType) => {
  const { prevMonth, nextMonth, formatCurrentDate } = props

  const choicedCurrentMonth = formatCurrentDate.getMonth() + 1
  const choicedCurrentYear = formatCurrentDate.getFullYear()

  type MonthKey = keyof typeof monthObj
  const textTypeChoicedCurrentMonth = choicedCurrentMonth.toString() as MonthKey // 선택하는 문자열이 1~12까지임을 단언함.

  const nowMonth = monthObj[textTypeChoicedCurrentMonth] // json에서 import한 데이터를 필터링 하여 가져올 예정

  return (
    <div className="calendar_month_block">
      <div className="calendar_month_block_inner_right">
        <button type="button" onClick={() => prevMonth(formatCurrentDate)}>
          <img
            className="calendar_month_arrow_btn"
            src={LeftImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
      <div className="calendar_month_block_now">
        {choicedCurrentYear} {nowMonth}
      </div>
      <div className="calendar_month_block_inner_left">
        <button type="button" onClick={() => nextMonth(formatCurrentDate)}>
          <img
            className="calendar_month_arrow_btn"
            src={RightImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
    </div>
  )
}

export default CalendarMonthUI
