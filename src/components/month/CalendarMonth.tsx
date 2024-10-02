import { useContext } from "react";
import { MonthContext } from "../../context/MonthProvider";
import { MonthContextType } from "../../type/contextType";
import CalendarMonthUI from "../../view/CalendarMonthUI";

const CalendarMonth = () => {


  // const initialMonth = currentDate.getMonth() + 1;
  // const [choiceMonth, setChoiceMonth] = useState<number>(0);
  const { choiceMonth, setChoiceMonth } =
    useContext<MonthContextType>(MonthContext);
  
  // console.log('ui m', c)

  const prevMonth = (currentMonth : Date): void => {
    // console.log('1 c', currentMonth)
   const prevDate =  currentMonth.setMonth(currentMonth.getMonth()-1)
    setChoiceMonth(prevDate);
  };
  
  const nextMonth = (currentMonth : Date): void => {
    // console.log('2 c', typeof currentMonth)
    const nextDate =  currentMonth.setMonth(currentMonth.getMonth()+1)
    setChoiceMonth(nextDate);
  };
  const currentMonth = new Date(choiceMonth)
  
  return (
    <CalendarMonthUI
      prevMonth={prevMonth}
      nextMonth={nextMonth}
      currentMonth={currentMonth}
    />
  );
};

export default CalendarMonth;
