/*
Write a JavaScript program to display the current day and time in the following format.
Sample Output:-
Today is : Tuesday.
Current time is: 10 PM: 30 : 38
*/

// Get the current date and time
let date = new Date();

// Get the current day of the week (0-6) where 0 is Sunday and 6 is Saturday
let day = date.getDay();

// Create an array of day names
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the name of the current day
let dayName = dayList[day];

// Display the current day
console.log("Today is " + dayName + ".");

// Get the current hour, minute, and second
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

// Determine if it's AM or PM
let prepand = hour >= 12 ? " PM " : "AM ";

// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;

// Adjust hour to 12 if it's 0 in 12-hour format and PM
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon ";
  } else {
    hour = 12;
    prepand = " PM ";
  }
}

// Adjust hour to 12 if it's 0 in 12-hour format and AM
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight ";
  } else {
    hour = 12;
    prepand = " AM ";
  }
}

let currentTime = hour + " " + prepand + " : " + minute + " : " + second;

// Display the current time
console.log("Current Time : " + currentTime);
