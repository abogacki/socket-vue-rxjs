export default class Weather {
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  getDayName(date) {
    return this.days[date.getDay()]
  }
}
