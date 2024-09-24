import React from "react";
import { CalendarDaysUIType } from "../type";

const CalendarDaysUI = (props: CalendarDaysUIType) => {
  const {
    arrDayState,
    currentMonth,
    dateRange,
    btnDisabled,
    toggleDay,
  }: CalendarDaysUIType = props;

  return (
    <div className=".calendar_day_block">
      <div className="calendar_day_week">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      {arrDayState?.slice(0, 6).map((el) => (
        <div className="calendar_day_week" key={Number(el[0])}>
          {el.map((day: string | object) => (
            <div key={Number(day)} className="calendar_day_inner">
              <button
                className={`calendar_day_btn ${
                  currentMonth !== ((day as Date).getMonth() + 1).toString() &&
                  btnDisabled
                }
                    ${
                      dateRange?.end === new Date(day.toString()).getTime() &&
                      "calendar_day_point_right calendar_day_point"
                    }
                    ${
                      dateRange?.start === new Date(day.toString()).getTime() &&
                      "calendar_day_point_left calendar_day_point"
                    }
                    ${
                      (dateRange?.start as number) <
                        new Date(day.toString()).getTime() &&
                      (dateRange?.end as number) >
                        new Date(day.toString()).getTime() &&
                      "calendar_day_range"
                    }
                    `}
                type="button"
                onClick={() => toggleDay(day)}
                disabled={
                  props.currentMonth !==
                  ((day as Date).getMonth() + 1).toString()
                }
              >
                {(day as Date).getDate()}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CalendarDaysUI;
