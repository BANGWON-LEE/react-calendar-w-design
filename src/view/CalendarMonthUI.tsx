import LeftImg from "../assets/calendar_left.png";
import RightImg from "../assets/calendar_right.png";
import { CalendarMonthUIType } from "../type";

const CalendarMonthUI = (props: CalendarMonthUIType) => {
  const { prevMonth, nextMonth, formatCurrentDate } = props;

  const choicedCurrentMonth = formatCurrentDate.getMonth() + 1;
  const choicedCurrentYear = formatCurrentDate.getFullYear();
  // console.log('fefef', choicedCurrentMonth)

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
        {choicedCurrentYear}년 {choicedCurrentMonth}월
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
  );
};

export default CalendarMonthUI;
