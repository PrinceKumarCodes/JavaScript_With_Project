// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

var str = "Prince";
function addLastThreeCharsToFrontAndBack(str) {
  if (str.length >= 3) {
    str = str.slice(-3) + str + str.slice(-3);
  }
  return str;
}
console.log(`The original string is : ${str}`); // The original string is : Prince
console.log(`The new string is : ${addLastThreeCharsToFrontAndBack(str)}`); // The new string is : ncePrincence
