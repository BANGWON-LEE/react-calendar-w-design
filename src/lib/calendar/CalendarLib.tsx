import { useMemo, useState } from "react";

import CalendarDay from "./components/dates/CalendarDay";
import CalendarMonth from "./components/month/CalendarMonth";

const CalendarLib = () => {
  const [choiceMonth, setChoiceMonth] = useState<number>(0);
  // 현재 시간의 날짜 객체 생성
  const currentDate = new Date();

  // 선택한 달의 첫 날 (예 : 7월을 선택했을 경우 7월 1일을 가져옴)
  const choiceDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + choiceMonth
  );

  // 현재 달의 다음 달을 구합니다.
  // JS 월을 나타낼 때, 0 =>1월 1=> 2월 따라서 11월일 12월이기 때문에
  // 현재가 12월(11)이면 다음 달은 1월(0)이 되어야 한다.
  const nextMonth =
    currentDate.getMonth() === 11
      ? 0
      : currentDate.getMonth() + 1 + choiceMonth;

  const nextMonthYear =
    currentDate.getMonth() === 11
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  // 다음 달의 첫째 날을 구합니다.
  const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1);

  // 전달의 마지막 날을 구합니다.
  const lastDayOfPreviousMonth = new Date(choiceDate.getTime() - 1);

  // 전달의 마지막 주의 일요일을 구합니다.
  const lastSundayOfPreviousMonth = new Date(lastDayOfPreviousMonth);
  lastSundayOfPreviousMonth.setDate(
    lastSundayOfPreviousMonth.getDate() - lastSundayOfPreviousMonth.getDay()
  );

  // 다음 달의 둘째 주의 토요일을 구합니다.
  const secondSaturdayOfNextMonth = new Date(firstDayOfNextMonth);
  secondSaturdayOfNextMonth.setDate(secondSaturdayOfNextMonth.getDate() + 7); // 첫째 주를 건너뛰기 위해 7일을 추가합니다.

  // 둘째 주 토요일을 구함, getDay() !== 6이 아닌 0인 이유는 while문은 true일 때 break 하기 때문에.
  while (secondSaturdayOfNextMonth.getDay() !== 0) {
    secondSaturdayOfNextMonth.setDate(secondSaturdayOfNextMonth.getDate() + 1);
  }

  console.log("토토", secondSaturdayOfNextMonth);

  const [allDates, setAllDates] = useState<Date[]>([]);

  useMemo(() => {
    const standardDate = new Date(lastSundayOfPreviousMonth);
    const datesToAdd: Date[] = [];

    if (allDates.length !== 0) {
      // console.log("체크1");
      setAllDates([]);
      // datesToAdd.length = 0;
    }

    while (standardDate <= secondSaturdayOfNextMonth) {
      datesToAdd.push(new Date(standardDate));

      standardDate.setDate(standardDate.getDate() + 1);
      // console.log("datesToAdd", datesToAdd);
    }

    setAllDates((dates) => [...dates, ...datesToAdd]);
  }, [choiceMonth]);

  // console.log("all", allDates);

  const initialMonth = currentDate.getMonth() + 1;
  const currentMonth = initialMonth + choiceMonth;

  return (
    <div className="calendar_block">
      <CalendarMonth
        choiceMonth={choiceMonth}
        currentMonth={currentMonth.toString()}
        setChoiceMonth={(newState: number | null) => {
          if (newState !== null) {
            setChoiceMonth(newState);
          }
        }}
      />
      <CalendarDay allDates={allDates} currentMonth={currentMonth.toString()} />
    </div>
  );
};

export default CalendarLib;
