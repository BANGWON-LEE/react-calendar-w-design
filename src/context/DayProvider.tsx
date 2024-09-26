import React, { createContext, useState } from "react";
import { DayContextType } from "../type/contextType";

// 1. Context 생성

export const DayContext = createContext<DayContextType>({
  allDates: [],
  setAllDates: () => {},
});

// 2. Provider 컴포넌트
const DayProvider = ({ children }: { children: React.ReactNode }) => {
  const [allDates, setAllDates] = useState<(string | number | Date)[]>([]);

  return (
    <DayContext.Provider value={{ allDates, setAllDates }}>
      {children}
    </DayContext.Provider>
  );
};

export default DayProvider;
