import { useContext } from "react";
import { MonthContext } from "../../context/MonthProvider";
import { DateContextType } from "../../type/contextType";
import CalendarMonthUI from "../../view/CalendarMonthUI";

const CalendarMonth = () => {
  // const initialMonth = currentDate.getMonth() + 1;
  // const [choiceMonth, setChoiceMonth] = useState<number>(0);
  const { nowDate, setNowDate } = useContext<DateContextType>(MonthContext);

  // console.log('ui m', c)

  const prevMonth = (formatCurrentDate: Date): void => {
    // console.log('1 c', currentMonth)
    const prevDate = formatCurrentDate.setMonth(
      formatCurrentDate.getMonth() - 1
    );
    setNowDate(prevDate);
  };

  const nextMonth = (formatCurrentDate: Date): void => {
    // console.log('2 c', typeof currentMonth)
    const nextDate = formatCurrentDate.setMonth(
      formatCurrentDate.getMonth() + 1
    );
    setNowDate(nextDate);
  };
  const formatCurrentDate = new Date(nowDate);

  return (
    <CalendarMonthUI
      prevMonth={prevMonth}
      nextMonth={nextMonth}
      formatCurrentDate={formatCurrentDate}
    />
  );
};

export default CalendarMonth;
