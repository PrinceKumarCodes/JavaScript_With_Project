// Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.
var str = "Prince";

function reverseFirstandLastChar(str) {
  if (str.length >= 1) {
    str =
      str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0);
  }
  return str;
}
console.log(`The new string is : ${str}`); // The new string is : ecnirP
console.log(`The new string is : ${reverseFirstandLastChar(str)}`); // The new string is : ecnirP
