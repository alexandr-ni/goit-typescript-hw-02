/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

(function isWeekend(day: string) {
  if (day === Week.Sun.toString() || day === Week.Sat.toString()) {
    return true;
  }
  return false;
});
