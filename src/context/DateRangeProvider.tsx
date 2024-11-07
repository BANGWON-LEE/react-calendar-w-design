import React, { createContext, useState } from 'react'
import { BtnDateRangeType } from '../type/contextType'
// import { DayContextType } from "../type/contextType";

// 1. Context 생성

export const DateRangeContext = createContext<{
  dateRange: BtnDateRangeType
  setDateRange: React.Dispatch<React.SetStateAction<BtnDateRangeType>>
}>({
  dateRange: { start: '', end: '' },
  setDateRange: () => {},
})

// 2. Provider 컴포넌트
const DateRangeProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateRange, setDateRange] = useState<BtnDateRangeType>({
    start: '',
    end: '',
  })
  return (
    <DateRangeContext.Provider value={{ dateRange, setDateRange }}>
      {children}
    </DateRangeContext.Provider>
  )
}

export default DateRangeProvider
