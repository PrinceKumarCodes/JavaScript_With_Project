// Write a JavaScript program to get the difference between a given number and 13, if the number is broader(greater than) than 13 return double the absolute difference.

const number = Math.random() * 100; // Generate a random number between 0 and 100
if (number > 13) {
  console.log(`The number is greater than 13: ${number}`);
  console.log(`The absolute difference is: ${Math.abs(number - 13) * 2}`);
} else {
  console.log(`The number is less than or equal to 13: ${number}`);
  console.log(`The absolute difference is: ${Math.abs(number - 13)}`);
}
