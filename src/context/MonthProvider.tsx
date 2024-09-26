import React, { createContext, useState } from "react";
import { MonthContextType } from "../type/contextType";

// 1. Context 생성

export const MonthContext = createContext<MonthContextType>({
  choiceMonth: 0,
  setChoiceMonth: () => {},
});

// 2. Provider 컴포넌트
const MonthProvider = ({ children }: { children: React.ReactNode }) => {
  const [choiceMonth, setChoiceMonth] = useState<number | string>(0);

  return (
    <MonthContext.Provider value={{ choiceMonth, setChoiceMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;
