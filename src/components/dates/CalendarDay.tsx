import { useEffect, useState } from "react";
import { CalendarDayType, DayInfoType } from "../../type";
import CalendarDaysUI from "../../view/CalendarDaysUI";

const CalendarDay = (props: CalendarDayType) => {
  const { currentMonth }: CalendarDayType = props;

  const initialDayInfo: DayInfoType = {
    start: 0,
    end: 0,
  };
  const [dateRange, setDateRange] = useState<DayInfoType>(initialDayInfo);

  const toggleDay = (day: object | string): void => {
    const dayInfo: number = new Date(day.toString()).getTime();

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
    if (props.allDates !== undefined) {
      console.log("보기", props.allDates);
      divideDay(props.allDates);
    }
  }, [props.allDates]);

  const btnDisabled = "opacity-25 pointer-events-none";

  return (
    <CalendarDaysUI
      arrDayState={arrDayState}
      currentMonth={currentMonth}
      dateRange={dateRange}
      btnDisabled={btnDisabled}
      toggleDay={toggleDay}
    />
  );
};

export default CalendarDay;
