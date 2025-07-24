// Write a JavaScript program to find the largest of three given integers.
let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
let num3 = Math.floor(Math.random() * 100);
console.log("The three numbers are: " + num1 + ", " + num2 + ", " + num3);
if (num1 > num2 && num1 > num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}
