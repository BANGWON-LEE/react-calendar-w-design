export interface CalendarDayType {
  allDates: Date[];
  currentMonth: string;
}
export interface DayInfoType {
  start: number;
  end: number;
}
export interface CalendarDaysUIType {
  arrDayState: object[][] | string[][] | undefined;
  currentMonth: string;
  dateRange: DayInfoType;
  btnDisabled: string;
  toggleDay: (day: object | string) => void;
}
