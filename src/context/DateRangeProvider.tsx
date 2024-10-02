import React, { createContext, useState } from "react";
import { DateRangeType } from "../type/contextType";
// import { DayContextType } from "../type/contextType";

// 1. Context 생성


export const DateRangeContext = createContext<{
  dateRange: DateRangeType;
  setDateRange: React.Dispatch<React.SetStateAction<DateRangeType>>;
}>({
  dateRange: { start: new Date(), end: new Date() },
  setDateRange: () => {},
});

// 2. Provider 컴포넌트
const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateRange, setDateRange] = useState<DateRangeType>({
    start: new Date(),
    end: new Date(),
  });
  return (
    <DateRangeContext.Provider value={{ dateRange, setDateRange }}>
      {children}
    </DateRangeContext.Provider>
  );
};

export default DateRangeProvider;
