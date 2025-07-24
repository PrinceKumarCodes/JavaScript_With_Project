// Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

var arr = [12, 23, 34];
try {
  console.log(arr[5]); // This will throw a RangeError
} catch (error) {
  console.error("Cought an error: ", error.message);
}
