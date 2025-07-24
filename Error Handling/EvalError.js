try {
  eval("console.log('hello world')");
} catch (error) {
  console.error("Caught an error :", error.message);
}
