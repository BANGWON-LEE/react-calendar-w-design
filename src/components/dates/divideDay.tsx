const checkSunDay = (dayType: string) => dayType === '0'
const checkMonDay = (dayType: string) => dayType === '1'
const checkTuseDay = (dayType: string) => dayType === '2'
const checkWednesDay = (dayType: string) => dayType === '3'
const checkTursDay = (dayType: string) => dayType === '4'
const checkFriDay = (dayType: string) => dayType === '5'
const checkSaturDay = (dayType: string) => dayType === '6'

export function divideDay(data: Date[]) {
  const weekArray: Date[] = []
  let dayArray: object[][] = []
  let lineCnt = 0
  data.forEach(day => {
    const dayType: string = day.getDay().toString()
    if (checkSunDay(dayType)) weekArray[0] = day
    if (checkMonDay(dayType)) weekArray[1] = day
    if (checkTuseDay(dayType)) weekArray[2] = day
    if (checkWednesDay(dayType)) weekArray[3] = day
    if (checkTursDay(dayType)) weekArray[4] = day
    if (checkFriDay(dayType)) weekArray[5] = day
    if (checkSaturDay(dayType)) {
      weekArray[6] = day

      dayArray[lineCnt] = [...weekArray]
      lineCnt += 1
    }
  })

  return dayArray
}
