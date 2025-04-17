// Question 3 : Write a JavaScript program to get the current date.
// Expected Output :- mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
let today = day + "/" + month + "/" + year;
console.log("Current date: " + today); // Output: Current date: dd/mm/yyyy

today = day + "-" + month + "-" + year;
console.log("Current date: " + today); // Output: Current date: dd-mm-yyyy

today = month + "/" + day + "/" + year;
console.log("Current date: " + today); // Output: Current date: mm/dd/yyyy

today = month + "-" + day + "-" + year;
console.log("Current date: " + today); // Output: Current date: mm-dd-yyyy
