export interface DayInfoType {
  start: number;
  end: number;
}
export interface CalendarDaysUIType {
  arrDayState: object[][] | string[][] | undefined;
  dateRange: DayInfoType;
  btnDisabled: string;
  toggleDay: (day: object | string) => void;
}

export const initialDayInfo: DayInfoType = {
  start: 0,
  end: 0,
};
export interface CalendarMonthUIType {
  prevMonth: (choiceMonth: number) => void;
  nextMonth: (choiceMonth: number) => void;
  currentMonth: number | boolean;
}
