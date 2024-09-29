export interface MonthContextType {
  choiceMonth: number | string;
  setChoiceMonth: React.Dispatch<React.SetStateAction<number | string>>;
}

export type DayContextType = {
  allDates: (number | Date)[]; // 모든 타입의 데이터를 허용
  setAllDates: React.Dispatch<React.SetStateAction<(number | Date)[]>>;
};

export interface RangeBtnContextType {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

// export interface DateRangeType {
//   start: Date | string;
//   end: Date | string;
// }

export interface DateRangeType {
  start: Date;
  end: Date;
}

export interface DateRangeContextType {
  dateRange: DateRangeType;
  setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
}
