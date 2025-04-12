import { prevDateRangeType } from './toggleDayType'

const checkInitialRagne = (prevDateRange: prevDateRangeType) =>
  prevDateRange.start === '' || prevDateRange.end !== ''

function determineInitialRange(startDate: Date): prevDateRangeType {
  return { start: startDate, end: '' }
}

const checkEarlyThanStartDay = (
  prevDateRange: prevDateRangeType,
  selectedSecondDate: number
) =>
  new Date(prevDateRange.start).getTime() >
  new Date(selectedSecondDate).getTime()

function determineEarlyThanStartDay(
  prevDateRange: prevDateRangeType,
  startDate: Date
): prevDateRangeType {
  return { start: startDate, end: prevDateRange.start }
}

const checkEndDay = (prevDateRange: prevDateRangeType) =>
  prevDateRange.end === '' || prevDateRange.start !== ''

function determineEndDay(
  prevDateRange: prevDateRangeType,
  endDate: Date
): prevDateRangeType {
  return { ...prevDateRange, end: endDate }
}

const checkLateThanEndDay = (
  prevDateRange: prevDateRangeType,
  selectedSecondDate: number
) =>
  new Date(selectedSecondDate).getTime() > new Date(prevDateRange.end).getTime()

function determineLateThanEndDay(starDate: Date): prevDateRangeType {
  return { start: starDate, end: '' }
}

const checkSameStartAndEnd = (
  prevDateRange: prevDateRangeType,
  selectedSecondDate: number
) =>
  new Date(prevDateRange.start).getTime() ===
  new Date(selectedSecondDate).getTime()

function determineStartAndEnd(
  starDate: Date,
  endDate: Date
): prevDateRangeType {
  return { start: starDate, end: endDate }
}

export function getDayRangeList(
  prevDateRange: any,
  selectedSecondDate: number,
  startDate: Date,
  endDate: Date
) {
  const dayRangeLsit = [
    {
      check: checkInitialRagne(prevDateRange),
      determine: determineInitialRange(startDate),
    },
    {
      check: checkEarlyThanStartDay(prevDateRange, selectedSecondDate),
      determine: determineEarlyThanStartDay(prevDateRange, startDate),
    },
    {
      check: checkEndDay(prevDateRange),
      determine: determineEndDay(prevDateRange, endDate),
    },
    {
      check: checkLateThanEndDay(prevDateRange, selectedSecondDate),
      determine: determineLateThanEndDay(startDate),
    },
    {
      check: checkSameStartAndEnd(prevDateRange, selectedSecondDate),
      determine: determineStartAndEnd(startDate, endDate),
    },
  ]

  return dayRangeLsit
}

export function getDayList(prevDateRange: any, startDate: Date) {
  const dayRangeLsit = [
    {
      check: checkInitialRagne(prevDateRange),
      determine: determineInitialRange(startDate),
    },
  ]

  return dayRangeLsit
}
