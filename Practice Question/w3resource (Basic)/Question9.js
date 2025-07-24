// Write a JavaScript program to calculate the days left before Christmas.
let today = new Date();
let christmasYear = today.getFullYear(); // Get the current year
if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}
let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24; // Number of milliseconds in a day

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) / dayMilliseconds
); // Calculate the remaining days until Christmas
console.log("There are " + remainingDays + " days until christmas");
