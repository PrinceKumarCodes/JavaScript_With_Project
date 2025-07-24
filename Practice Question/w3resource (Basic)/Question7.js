// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

let year = 2014;
for (year = 2014; year <= 2050; year++) {
  let date = new Date(1, 0, year);
  if (date.getDay() === 0) {
    //whereas getDay() returns the day of the week (0-6) for the specified date according to local time.
    // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
    console.log("1st january of " + year + " is a Sunday");
  }
}
let date = new Date();
let day = date.getDate(); // Get the current day of the month (1-31)
console.log("The day of the month is: " + day);
