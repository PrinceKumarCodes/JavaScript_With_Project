// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
// A leap year is divisible by 4, but not divisible by 100, except when it is also divisible by 400.
// For example, the year 2000 is a leap year, but 1900 is not.
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; // Leap year
  } else {
    return false; //Not a leap year
  }
}
isLeapYear(2000); // true
if (isLeapYear(2000)) {
  console.log("2000 is a leap year");
} else {
  console.log("2000 is not a leap year");
}
