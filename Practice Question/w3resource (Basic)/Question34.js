// Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive.
let num1 = Math.floor(Math.random() * (60 - 40 + 1) + 40);
let num2 = Math.floor(Math.random() * (60 - 40 + 1) + 40);
console.log("The two numbers are: " + num1 + ", " + num2);
function findLargest(num1, num2) {
  if (num1 > num2) {
    return num1 + " is the largest number.";
  } else if (num1 === num2) {
    return "Both numbers are equal.";
  } else {
    return num2 + " is the largest number.";
  }
}
console.log(` ${findLargest(num1, num2)}  `);
