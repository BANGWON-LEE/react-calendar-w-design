export const formatDate = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minute}:${second} `
}

export const getLastWeek = (nowDate: number | Date): number => {
  const currentDate = new Date(nowDate)

  // 선택한 달의 첫 날 (예 : 7월을 선택했을 경우 7월 1일을 가져옴)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 해당 월의 첫째 날 생성
  const firstDay = new Date(year, month, 1)
  // 전달의 마지막 날을 구합니다.
  const lastDayOfPreviousMonth = firstDay.getTime() - 1

  // // 전달의 마지막 주의 일요일을 구합니다.
  const lastSundayOfPreviousMonthStore = new Date(lastDayOfPreviousMonth)

  const lastSundayOfPreviousMonth = lastSundayOfPreviousMonthStore.setDate(
    lastSundayOfPreviousMonthStore.getDate() -
      lastSundayOfPreviousMonthStore.getDay()
  )

  return lastSundayOfPreviousMonth
}
export const getNextWeek = (nowDate: number | Date): Date => {
  const currentDate = new Date(nowDate)

  // 선택한 달의 첫 날 (예 : 7월을 선택했을 경우 7월 1일을 가져옴)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 해당 월의 첫째 날 생성
  const firstDay = new Date(year, month, 1)

  // 현재 달의 다음 달을 구합니다.
  // JS 월을 나타낼 때, 0 =>1월 1=> 2월 따라서 11월일 12월이기 때문에
  // 현재가 12월(11)이면 다음 달은 1월(0)이 되어야 한다.
  const nextMonth =
    currentDate.getMonth() === 11
      ? 0
      : currentDate.getMonth() + 1 + Number(firstDay.getMonth())

  const nextMonthYear =
    currentDate.getMonth() === 11
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear()

  // 다음 달의 첫째 날을 구합니다.
  const firstDayOfNextMonth = new Date(nextMonthYear, nextMonth, 1)

  // 다음 달의 둘째 주의 토요일을 구합니다.
  const secondSaturdayOfNextMonth = firstDayOfNextMonth.setDate(
    firstDayOfNextMonth.getDate() + 7
  ) // 첫째 주를 건너뛰기 위해 7일을 추가합니다.

  return new Date(secondSaturdayOfNextMonth)
}
