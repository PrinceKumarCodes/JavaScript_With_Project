// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.
function checkPositiveNumber(num) {
  if (num < 0) {
    throw new Error("The provided number is negative.");
  }
  throw new Error("Valid positive number provided.");
}
try {
  checkPositiveNumber(-5);
} catch (error) {
  console.error("error message: ", error.message);
  console.error("Error name:", error.name);
}
