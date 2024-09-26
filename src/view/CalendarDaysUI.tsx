import React, { useContext } from "react";
import { CalendarDaysUIType } from "../type";
import { MonthContext } from "../context/MonthProvider";
import { MonthContextType } from "../type/contextType";

const CalendarDaysUI = (props: CalendarDaysUIType) => {
  const { arrDayState, dateRange, btnDisabled, toggleDay }: CalendarDaysUIType =
    props;

  const { choiceMonth, setChoiceMonth } =
    useContext<MonthContextType>(MonthContext);

  const currentDate = new Date();

  const initialMonth = currentDate.getMonth() + 1;
  const currentMonth = initialMonth + Number(choiceMonth);
  console.log("fefef11111", currentMonth);

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
