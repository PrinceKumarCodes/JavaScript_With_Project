// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
  let obj;
  console.log(obj.property); // This will throw a TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Caught a TypeError: ", error.message);
  } else {
    console.error("Caught an error: ", error.message);
  }
}
