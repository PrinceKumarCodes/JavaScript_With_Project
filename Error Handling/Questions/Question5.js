// Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.
function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("The provided array is empty.");
  }
  throw new Error("The provided array is not empty.");
}
try {
  checkArray([3, 4, 5]);
} catch (error) {
  console.error("error message: ", error.message);
}
