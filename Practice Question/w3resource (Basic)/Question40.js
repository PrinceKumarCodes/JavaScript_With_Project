// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
let num1 = Math.floor(Math.random() * 15 + 1);
let num2 = Math.floor(Math.random() * 15 + 1);
function checkEight(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
    return true;
  } else {
    return false;
  }
}
console.log("Result is : " + checkEight(num1, num2));
console.log("Num1 is : " + num1);
console.log("Num2 is : " + num2);
