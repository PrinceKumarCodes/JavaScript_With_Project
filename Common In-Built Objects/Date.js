// Date:- It is Used for working with dates and times.

// Common Usage:
// new Date() – Current date and time.
let now = new Date();

// date.getFullYear() – Gets 4-digit year.
console.log("Gets 4 digit year :-", now.getFullYear());

// date.getMonth() – Gets month (0-11).
console.log("Get months 0 to 11 :-", now.getMonth());

// date.getDate() – Gets day of the month.
console.log("Get day of the month:-", now.getDate());

// date.getHours(), getMinutes(), getSeconds()
console.log("Get hours of the day :-", now.getHours());
console.log("Get minutes of the day :-", now.getMinutes());
console.log("Get Seconds of the day:-", now.getSeconds());

// ------------------date.toISOString()-------------------
console.log("Get standardized date and time :-", now.toISOString());
//Note:- Use it when you need a standardized, machine-readable format (e.g., for databases, APIs).

//-------------------toDateString()-----------------------
console.log(
  "Get human readable format and understandable format :-",
  now.toDateString()
);
// Note:- Use it when you want to display a nice, readable date to users.
