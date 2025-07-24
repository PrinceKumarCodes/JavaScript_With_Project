// Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function checkInteger(num) {
  try {
    if (!Number.isInteger(num)) {
      throw new Error("The provided value is not an integer.");
    } else {
      throw new Error("Valid integer provided.");
    }
  } catch (error) {
    console.error(error.message);
  }
}
checkInteger(4); // Output: The provided value is not an integer.
checkInteger(4.4); // Output: The provided value is not an integer.
