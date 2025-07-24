function checkInteger(num) {
  if (!Number.isInteger(num)) {
    throw new Error("The provided value is not an integer.");
  }
  throw new Error("Valid integer provided. ");
}

try {
  //checkInteger(4); // Output: Valid integer provided.
  checkInteger(4.4); // Output: The provided value is not an integer.
} catch (error) {
  console.error(error.message);
}
