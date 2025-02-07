import { useContext } from 'react'
import { CalendarDaysUIType } from '../type'
import { MonthContext } from '../context/MonthProvider'
import { DateContextType, DateRangeContextType } from '../type/contextType'
import { DateRangeContext } from '../context/DateRangeProvider'
import toggleDay from '../components/dates/toggleDay'

const CalendarDaysUI = (props: CalendarDaysUIType) => {
  const { arrDayState }: CalendarDaysUIType = props

  const { dateRange, setDateRange } =
    useContext<DateRangeContextType>(DateRangeContext)

  const { nowDate } = useContext<DateContextType>(MonthContext)

  const currentMonth = new Date(nowDate).getMonth()

  let dateRangeBtnValue: any =
    dateRange?.start !== '' || dateRange?.end !== ''
      ? dateRange
      : {
          start: '',
          end: '',
        }

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const oneDayInMs = 24 * 60 * 60 * 1000
  const startDatePoint = oneDayInMs - 1000

  return (
    <div className="calendar_day_block">
      <div className="calendar_day_week">
        {days.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>
      {arrDayState?.slice(0, 6).map(el => (
        <div className="calendar_day_week" key={Number(el[0])}>
          {el.map((day: string | object) => (
            <div key={Number(day)} className="calendar_day_inner">
              <button
                className={`calendar_day_btn 
                ${
                  new Date(dateRangeBtnValue?.end).setHours(23, 59, 59) ===
                  new Date(day.toString()).getTime()
                    ? 'calendar_day_point_right calendar_day_point'
                    : ''
                }
                ${
                  new Date(dateRangeBtnValue?.start).setHours(0, 0, 0) ===
                  new Date(day.toString()).getTime() - startDatePoint
                    ? 'calendar_day_point_left calendar_day_point'
                    : ''
                }
                ${
                  new Date(dateRangeBtnValue?.start).getTime() + oneDayInMs <
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
                onClick={() => toggleDay(day as Date | string, setDateRange)}
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
