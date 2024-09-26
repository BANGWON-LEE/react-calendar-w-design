import { useContext, useEffect, useState } from "react";
import { DayInfoType, initialDayInfo } from "../../type";
import CalendarDaysUI from "../../view/CalendarDaysUI";
import { DayContextType } from "../../type/contextType";
import { DayContext } from "../../context/DayProvider";

const CalendarDay = () => {
  // const { currentMonth }: CalendarDayType =
  const { allDates, setAllDates } = useContext<DayContextType>(DayContext);

  const [dateRange, setDateRange] = useState<DayInfoType>(initialDayInfo);

  const toggleDay = (day: object | string): void => {
    const dayInfo: number = new Date(day.toString()).getTime();
    console.log("ffefef", dayInfo);

    setDateRange((prevDateRange) => {
      if (prevDateRange.start === 0) {
        return {
          ...prevDateRange,
          start: dayInfo,
        }; // 이 리턴을 통해 범위의 시작과 끝이 초기화 되지 않음
      }
      if (prevDateRange.start !== 0 && prevDateRange.start < dayInfo) {
        return {
          ...prevDateRange,
          end: dayInfo,
        }; // 이 리턴을 통해 범위의 시작과 끝이 초기화 되지 않음
      }
      return initialDayInfo;
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
      dateRange={dateRange}
      btnDisabled={btnDisabled}
      toggleDay={toggleDay}
    />
  );
};

export default CalendarDay;
