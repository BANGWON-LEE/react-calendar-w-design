import { useContext } from 'react'
import { CalendarDaysUIType } from '../type'
import { MonthContext } from '../context/MonthProvider'
import { BtnDateRangeType, DateContextType } from '../type/contextType'
// import { DateRangeContext } from "../context/DateRangeProvider";

const CalendarDaysUI = (props: CalendarDaysUIType) => {
  const { arrDayState, dateRange, toggleDay }: CalendarDaysUIType = props

  const { nowDate } = useContext<DateContextType>(MonthContext)

  const currentMonth = new Date(nowDate).getMonth()

  let dateRangeBtnValue: BtnDateRangeType =
    dateRange?.start !== '' || dateRange?.end !== ''
      ? dateRange
      : {
          start: '',
          end: '',
        }

  return (
    <div className="calendar_day_block">
      <div className="calendar_day_week">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      {arrDayState?.slice(0, 6).map(el => (
        <div className="calendar_day_week" key={Number(el[0])}>
          {el.map((day: string | object) => (
            <div key={Number(day)} className="calendar_day_inner">
              <button
                className={`calendar_day_btn 
                    ${
                      new Date(dateRangeBtnValue?.end).getTime() ===
                      new Date(day.toString()).getTime()
                        ? 'calendar_day_point_right calendar_day_point'
                        : ''
                    }
                    ${
                      new Date(dateRangeBtnValue?.start).getTime() ===
                      new Date(day.toString()).getTime()
                        ? 'calendar_day_point_left calendar_day_point'
                        : ''
                    }
                    ${
                      new Date(dateRangeBtnValue?.start).getTime() <
                        new Date(day.toString()).getTime() &&
                      new Date(dateRangeBtnValue?.end).getTime() >
                        new Date(day.toString()).getTime()
                        ? 'calendar_day_range'
                        : ''
                    }
                   ${
                     new Date(dateRangeBtnValue?.start).getTime() ===
                       new Date(dateRangeBtnValue?.end).getTime() &&
                     new Date(dateRangeBtnValue?.start).getTime() ===
                       new Date(day.toString()).getTime() &&
                     new Date(dateRangeBtnValue?.end).getTime() ===
                       new Date(day.toString()).getTime()
                       ? 'calendar_day_point_right calendar_day_point'
                       : ''
                   }
              `}
                type="button"
                onClick={() => toggleDay(day as Date | string)}
                disabled={
                  Number(currentMonth) !== new Date(day.toString()).getMonth()
                }
              >
                {(day as Date).getDate()}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalendarDaysUI
