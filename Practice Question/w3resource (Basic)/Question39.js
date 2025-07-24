// Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

let num1 = Math.floor(Math.random() * 40 + 1) + 20;
let num2 = Math.floor(Math.random() * 40 + 1) + 20;

function sumInRange(a, b) {
  const sum = a + b;
  if (sum >= 50 && sum <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log("Result is : " + sumInRange(num1, num2));
