// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function divideNumbers(num1, num2) {
  if (num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  } else {
    throw new Error("Valid division operation.");
  }
}

try {
  // divideNumbers(10, 2); //Output: 5
  divideNumbers(10, 0); //Output: Error: Division by zero is not allowed.
} catch (error) {
  console.error(error.message);
}
