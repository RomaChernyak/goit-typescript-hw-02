/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// First method

enum WeekdaysName {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWorkday1(day: number): boolean {
  return day <= 4;
}

isWorkday1(WeekdaysName.MONDAY);
isWorkday1(WeekdaysName.THURSDAY);
isWorkday1(WeekdaysName.SATURDAY);

// Second method

function isWorkday2(day: WeekdaysName): boolean {
  return day !== WeekdaysName.SATURDAY && day !== WeekdaysName.SUNDAY
}

isWorkday2(WeekdaysName.TUESDAY);
isWorkday2(WeekdaysName.THURSDAY);
isWorkday2(WeekdaysName.SUNDAY);