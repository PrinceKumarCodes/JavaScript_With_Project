// This code sets a timer that will execute the provided function after 1 second (1000 milliseconds).
try {
  console.log(rahul); //rahul is not defined
  // This will cause a reference error
} catch (error) {
  console.log("balle balle ");
  console.log("Error caught: ", error.name); // ReferenceError
  console.log("Error caught: ", error.message); // rahul is not defined
}

setTimeout(() => {
  console.log("This will run after 1 second! wait for it...");
}, 1000);

setTimeout(() => {
  console.log("This will run after 2 second! wait for it...");
}, 2000);

setTimeout(() => {
  console.log("This will run after 3 second! wait for it...");
}, 3000);

try {
  // This will cause a reference error
  console.log(x); // x is not defined
} catch (error) {
  console.log("Error caught: ", error.message); // x is not defined
}
