// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

// let firstNumber = Math.floor(Math.random() * 100);
// let secondNumber = Math.floor(Math.random() * 100);

let firstNumber = 5;
let secondNumber = 5;

if (firstNumber === secondNumber) {
  console.log(
    `The two numbers are the same: ${firstNumber} and ${secondNumber}`
  );
  console.log(
    `The triple of their sum is: ${3 * (firstNumber + secondNumber)}`
  );
} else {
  console.log(
    `The two numbers are different: ${firstNumber} and ${secondNumber}`
  );
  console.log(`The sum of the two numbers is: ${firstNumber + secondNumber}`);
}
