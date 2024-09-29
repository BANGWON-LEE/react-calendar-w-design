import { useContext, useEffect, useMemo } from "react";
import CalendarMonth from "./month/CalendarMonth";
import CalendarDay from "./dates/CalendarDay";
import { MonthContext } from "../context/MonthProvider";
import {
  DayContextType,
  MonthContextType,
  RangeBtnContextType,
} from "../type/contextType";
import { DayContext } from "../context/DayProvider";
import { openModalContext } from "../context/input-btn/OpenModalProvider";

const RangeCalendar = () => {
  // context api로 전역처리 할 예정
  const { choiceMonth, setChoiceMonth } =
    useContext<MonthContextType>(MonthContext);

  const { allDates, setAllDates } = useContext<DayContextType>(DayContext);

  const currentDate = new Date();

  // 선택한 달의 첫 날 (예 : 7월을 선택했을 경우 7월 1일을 가져옴)
  const choiceDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + Number(choiceMonth)
  );

  // 현재 달의 다음 달을 구합니다.
  // JS 월을 나타낼 때, 0 =>1월 1=> 2월 따라서 11월일 12월이기 때문에
  // 현재가 12월(11)이면 다음 달은 1월(0)이 되어야 한다.
  const nextMonth =
    currentDate.getMonth() === 11
      ? 0
      : currentDate.getMonth() + 1 + Number(choiceMonth);

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

  // context로 전역처리 할 곳

  useEffect(() => {
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

    setAllDates((prev) => [...prev, ...datesToAdd]);
  }, [choiceMonth]);

  // console.log("all", allDates);

  const { openModal, setOpenModal } =
    useContext<RangeBtnContextType>(openModalContext);

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="modal">
      <div className="calendar_block">
        <CalendarMonth />
        <CalendarDay />
        <div className="calendar_close_block">
          <button
            className="calendar_close_btn"
            onClick={() => handleCloseModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeCalendar;
