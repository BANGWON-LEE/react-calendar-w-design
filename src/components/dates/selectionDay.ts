import { BtnDateRangeType } from '../../type/contextType'
import { getDayRangeList } from './getDatRangeList'

export function rangeToggleDay(
  day: string | Date,
  setDateRange: React.Dispatch<React.SetStateAction<BtnDateRangeType>>
): void {
  const selectedDate: Date = new Date(day.toString()) || new Date()
  const selectedSecondDate: number =
    new Date(day.toString()).getTime() || new Date().getTime()

  const startDate: Date = new Date(selectedDate.setHours(0, 0, 0, 0))
  const endDate: Date = new Date(selectedDate.setHours(23, 59, 59, 0))

  setDateRange((prevDateRange): any => {
    for (const { check, determine } of getDayRangeList(
      prevDateRange,
      selectedSecondDate,
      startDate,
      endDate
    )) {
      if (check) return determine
    }
  })
}

export function toggleDay(
  day: string | Date,
  setDateRange: React.Dispatch<React.SetStateAction<BtnDateRangeType>>
): void {
  const selectedDate: Date = new Date(day.toString()) || new Date()

  const startDate: Date = new Date(selectedDate.setHours(0, 0, 0, 0))
  const endDate: Date = new Date(selectedDate.setHours(23, 59, 59, 0))

  setDateRange({
    start: startDate,
    end: endDate,
  })
}
