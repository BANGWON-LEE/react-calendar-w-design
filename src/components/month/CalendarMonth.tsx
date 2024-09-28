import { useContext } from "react";
import { MonthContext } from "../../context/MonthProvider";
import { MonthContextType } from "../../type/contextType";
import CalendarMonthUI from "../../view/CalendarMonthUI";

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
    <CalendarMonthUI
      prevMonth={prevMonth}
      nextMonth={nextMonth}
      currentMonth={currentMonth}
    />
  );
};

export default CalendarMonth;
