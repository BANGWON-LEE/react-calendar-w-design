import React, { createContext, useState } from "react";
import { MonthContextType } from "../type/contextType";

// 1. Context 생성

const now = new Date();
// const initialMonth = now.getMonth() ;

export const MonthContext = createContext<MonthContextType>({
  choiceMonth: now,
  setChoiceMonth: () => {},
});

// 2. Provider 컴포넌트
const MonthProvider = ({ children }: { children: React.ReactNode }) => {
  const [choiceMonth, setChoiceMonth] = useState< Date | number>(now);

  return (
    <MonthContext.Provider value={{ choiceMonth, setChoiceMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;
