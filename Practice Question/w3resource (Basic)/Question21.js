// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

function generateRandomNumber() {
  return Math.floor((Math.random() + 1) * 60);
}

function getRandomString(lengthNumber) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < lengthNumber; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

let str = getRandomString(generateRandomNumber());

let strResult = str.startsWith("Py") ? str : "Py" + str; // "Py" + str if str doesn't start with "Py"
console.log(strResult); // "Py" + str if str doesn't start with "Py"

// while (true) {
//   let str = getRandomString(generateRandomNumber());
//   let strResult = str.startsWith("Py") ? str : "Py" + str; // "Py" + str if str doesn't start with "Py"
//   console.log(strResult); // "Py" + str if str doesn't start with "Py"
// }
