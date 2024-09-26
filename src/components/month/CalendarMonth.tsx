import { useContext, useState } from "react";
import LeftImg from "../../assets/calendar_left.png";
import RightImg from "../../assets/calendar_right.png";
import { MonthContext } from "../../context/MonthProvider";
import { MonthContextType } from "../../type/contextType";

const CalendarMonth = () => {
  const currentDate = new Date();

  const initialMonth = currentDate.getMonth() + 1;
  // const [choiceMonth, setChoiceMonth] = useState<number>(0);
  const { choiceMonth, setChoiceMonth } =
    useContext<MonthContextType>(MonthContext);

  const prevMonth = (): void => {
    setChoiceMonth(Number(choiceMonth) - 1);
  };

  const nextMonth = (): void => {
    setChoiceMonth(Number(choiceMonth) + 1);
  };

  const currentMonth = initialMonth + Number(choiceMonth);
  return (
    <div className="calendar_month_block">
      <div className="calendar_month_block_inner_right">
        <button type="button" onClick={() => prevMonth()}>
          <img
            className="calendar_month_arrow_btn"
            src={LeftImg}
            alt="달력 라이브러리 이미지"
          />
        </button>
      </div>
      <div className="calendar_month_block_now">{currentMonth}월</div>
      <div className="calendar_month_block_inner_left">
        <button type="button" onClick={() => nextMonth()}>
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

export default CalendarMonth;
