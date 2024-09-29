import { useContext, useEffect, useState } from "react";
import CalendarDaysUI from "../../view/CalendarDaysUI";
import {
  DateRangeContextType,
  // DateRangeContextType,
  DateRangeType,
  DayContextType,
} from "../../type/contextType";
import { DayContext } from "../../context/DayProvider";
import { DateRangeContext } from "../../context/DateRangeProvider";

const CalendarDay = () => {
  const { allDates } = useContext<DayContextType>(DayContext);

  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext);

  // const [dateRange, setDateRange] = useState({
  //   start: new Date(),
  //   end: new Date(),
  // });

  const toggleDay = (day: string | Date): void => {
    const selectedDate = new Date(day.toString());
    console.log("Selected date:", selectedDate);

    setDateRange((prevDateRange: any) => {
      console.log("Previous date range:", prevDateRange);

      if (prevDateRange.start.getTime() === 0) {
        return {
          ...prevDateRange,
          start: selectedDate,
        };
      } else if (prevDateRange.start < selectedDate) {
        return {
          ...prevDateRange,
          end: selectedDate,
        };
      } else {
        // 다른 조건이나 기본값 처리
        return {
          start: selectedDate,
          end: new Date(0), // 또는 다른 적절한 초기값
        };
      }
    });
  };
  const [arrDayState, setArrDayState] = useState<object[][] | string[][]>();

  const divideDay = (data: Date[]) => {
    const dayArray: object[][] = [];
    const weekArray: Date[] = [new Date()];

    let i = 0;
    for (let j = 0; j < data.length; j += 1) {
      // console.log('ddd', data[j]);
      if (data[j] !== undefined) {
        const dayType: string = data[j].getDay().toString();
        const dayValue: Date = data[j];

        if (dayType === "0") {
          weekArray[0] = dayValue;
        } else if (dayType === "1") {
          // console.log('1번');
          weekArray[1] = dayValue;
        } else if (dayType === "2") {
          weekArray[2] = dayValue;
        } else if (dayType === "3") {
          weekArray[3] = dayValue;
        } else if (dayType === "4") {
          weekArray[4] = dayValue;
        } else if (dayType === "5") {
          weekArray[5] = dayValue;
        } else if (dayType === "6") {
          weekArray[6] = dayValue;

          dayArray[i] = [...weekArray];
          i += 1;
        }
      }
    }
    setArrDayState(dayArray);
  };

  useEffect(() => {
    if (allDates !== undefined) {
      console.log("보기", allDates);
      const dateArray: Date[] = allDates.filter((item) => item instanceof Date);
      divideDay(dateArray);
    }
  }, [allDates]);

  const btnDisabled = "opacity-25 pointer-events-none";

  return (
    <CalendarDaysUI
      arrDayState={arrDayState}
      btnDisabled={btnDisabled}
      dateRange={dateRange}
      toggleDay={toggleDay}
    />
  );
};

export default CalendarDay;
