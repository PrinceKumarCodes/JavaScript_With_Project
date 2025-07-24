// Write a JavaScript program to find the closest value to 100 from two numerical values.
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num1Copy = num1;
let num2Copy = num2;
console.log("The two numbers are: " + num1 + ", " + num2);
function closestTo100(num1, num2) {
  num1 = Math.abs(num1 - 100);
  num2 = Math.abs(num2 - 100);
  if (num1 > num2) {
    return num2Copy + " is the closest to 100.";
  } else if (num1 === num2) {
    return "Both numbers are equally close to 100.";
  } else {
    return num1Copy + " is the closest to 100.";
  }
}
console.log(`Result Here :- ${closestTo100(num1, num2)}`); // 0 is the closest to 100.
