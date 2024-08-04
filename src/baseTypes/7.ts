/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekdaysName {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}


// Variable that containts a random weekday number (where 0 is Monday, and 6 is Sunday)
// let randomIndex = Math.floor(Math.random() * 8);


function isWorkday(day: number): boolean {
  if (day > 4) {
    return false
  }

  return true
}

isWorkday(WeekdaysName.MONDAY);
isWorkday(WeekdaysName.THURSDAY);
isWorkday(WeekdaysName.SATURDAY);