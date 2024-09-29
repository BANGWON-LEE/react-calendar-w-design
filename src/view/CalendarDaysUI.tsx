import React, { useContext } from "react";
import { CalendarDaysUIType } from "../type";
import { MonthContext } from "../context/MonthProvider";
import { MonthContextType } from "../type/contextType";
// import { DateRangeContext } from "../context/DateRangeProvider";

const CalendarDaysUI = (props: CalendarDaysUIType) => {
  const { arrDayState, btnDisabled, dateRange, toggleDay }: CalendarDaysUIType =
    props;

  console.log("dateRange33", dateRange);

  const { choiceMonth } = useContext<MonthContextType>(MonthContext);

  const currentDate = new Date();

  const initialMonth = currentDate.getMonth() + 1;
  const currentMonth = initialMonth + Number(choiceMonth);

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
                  String(currentMonth) !==
                    ((day as Date).getMonth() + 1).toString() && btnDisabled
                }
                    ${
                      new Date(dateRange?.end).getTime() ===
                        new Date(day.toString()).getTime() &&
                      "calendar_day_point_right calendar_day_point"
                    }
                    ${
                      new Date(dateRange?.start).getTime() ===
                        new Date(day.toString()).getTime() &&
                      "calendar_day_point_left calendar_day_point"
                    }
                    ${
                      new Date(dateRange?.start).getTime() <
                        new Date(day.toString()).getTime() &&
                      new Date(dateRange?.end).getTime() >
                        new Date(day.toString()).getTime() &&
                      "calendar_day_range"
                    }
                    `}
                type="button"
                onClick={() => toggleDay(day as Date | string)}
                disabled={
                  String(currentMonth) !==
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
