export interface DayInfoType {
  start: number;
  end: number;
}
export interface CalendarDaysUIType {
  arrDayState: object[][] | string[][] | undefined;
  dateRange: DateRangeType;
  // btnDisabled: string;
  toggleDay: (day: string | Date) => void;
}

export const initialDayInfo: DayInfoType = {
  start: 0,
  end: 0,
};
export interface CalendarMonthUIType {
  prevMonth: (choiceMonth: Date) => void;
  nextMonth: (choiceMonth: Date) => void;
  currentMonth:  Date ;
}

export type OpenModalType = {
  handleOpenModal: () => void;
};

// export interface DateRangeType {
//   setDateRange: (prevDateRange: Date | number) => void;
//   // setDateRange: React.Dispatch<React.SetStateAction<number | Date>>;
// }

export interface DateRangeType {
  start: string | Date | number;
  end: string | Date | number;
}
