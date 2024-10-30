import React, { createContext, useState } from "react";
import { DateContextType } from "../type/contextType";

// 1. Context 생성

const now = new Date();
// const initialMonth = now.getMonth() ;

export const MonthContext = createContext<DateContextType>({
  // choiceMonth: now,
  // setChoiceMonth: () => {},
  nowDate: now,
  setNowDate: () => {},
});

// 2. Provider 컴포넌트
const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [nowDate, setNowDate] = useState<Date | number>(now);

  return (
    <MonthContext.Provider value={{ nowDate, setNowDate }}>
      {children}
    </MonthContext.Provider>
  );
};

export default DateProvider;
