try {
  console.log(age);
} catch (err) {
  console.log("Error named :", err.name);
  console.log("Erro message :", err.message);
}
console.log(30);
console.log("This will run after the error is caught.");
