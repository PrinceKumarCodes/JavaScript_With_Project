// Write a JavaScript program that uses a try-catch block to catch and handle a 'ReferenceError' when accessing an undefined variable.

try {
  console.log(x); // x is not defined  that's why it will give ReferenceError
} catch (error) {
  console.log("ReferenceError :", error.message);
}
