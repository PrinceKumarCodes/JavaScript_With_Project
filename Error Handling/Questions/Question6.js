// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function checkString(str) {
  if (str.length === 0) {
    throw new Error("The provided string is empty.");
  }
  throw new Error("The provided string is not empty.");
}
try {
  //   checkString("Hello, World!"); //Output: The provided string is not empty.
  checkString("");
} catch (error) {
  console.error("error message : ", error.message);
}
