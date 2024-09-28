import LeftImg from "../../assets/calendar_left.png";
import RightImg from "../../assets/calendar_right.png";
import { CalendarMonthUIType } from "../type";

const CalendarMonthUI = (props: CalendarMonthUIType) => {
  const { prevMonth, nextMonth, currentMonth } = props;

  return (
    <div className="calendar_month_block">
      <div className="calendar_month_block_inner_right">
        <button type="button" onClick={() => prevMonth}>
          <img
            className="calendar_month_arrow_btn"
            src={LeftImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
      <div className="calendar_month_block_now">{currentMonth}월</div>
      <div className="calendar_month_block_inner_left">
        <button type="button" onClick={() => nextMonth}>
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
