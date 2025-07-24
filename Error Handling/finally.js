try {
  console.log("Before the error.");
  console.log(age);
  console.log("After the error.");
} catch (err) {
  console.log(`Error name: ${err.name}`);
  console.log(`Error message:${err.message}`);
} finally {
  console.log("This is the finally block.");
  console.log("This will always run.");
}
