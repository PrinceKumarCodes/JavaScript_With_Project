// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
console.log("The two numbers are: " + num1 + ", " + num2);
function checkRange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return console.log("Both numbers are in the range 40..60.");
  } else if (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100) {
    return console.log("Both numbers are in the range 70.. 100.");
  } else {
    return console.log(
      "Both numbers are not in the ranges 40..60 or 70..100 ."
    );
  }
}
console.log(`Result Here :- ${checkRange(num1, num2)}`); // Both numbers are not in the specified ranges.
