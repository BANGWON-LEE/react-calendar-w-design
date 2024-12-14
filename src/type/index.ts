export interface DayInfoType {
  start: number
  end: number
}
export type CalendarDaysUIType = {
  arrDayState: undefined | object[][] | string[][]
  dateRange: DateRangeType
  // btnDisabled: string;
  toggleDay: (day: string | Date) => void
}

export type CalendarTimeUIType = {
  dateRange: DateRangeType
  // btnDisabled: string;
  toggleTime: (index: number, value: string) => void
}

export const initialDayInfo: DayInfoType = {
  start: 0,
  end: 0,
}
export interface CalendarMonthUIType {
  prevMonth: (choiceMonth: Date) => void
  nextMonth: (choiceMonth: Date) => void
  formatCurrentDate: Date
}

export type OpenModalType = {
  handleOpenModal: () => void
}

export interface DateRangeType {
  start: string | Date
  end: string | Date
}

export interface BtnType {
  action: () => void
  text: string
}
