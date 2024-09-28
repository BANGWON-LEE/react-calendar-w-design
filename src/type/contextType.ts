export interface MonthContextType {
  choiceMonth: number | string;
  setChoiceMonth: React.Dispatch<React.SetStateAction<number | string>>;
}

export type DayContextType = {
  allDates: (string | number | Date)[]; // 모든 타입의 데이터를 허용
  setAllDates: React.Dispatch<React.SetStateAction<(string | number | Date)[]>>;
};

export interface RangeBtnContextType {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
