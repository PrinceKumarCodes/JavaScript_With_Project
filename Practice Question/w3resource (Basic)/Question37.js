// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
let randomNumber = Math.floor(Math.random() * 6) + 1;

function generateRandomString(len) {
  const chars = "ABCDEFGHIJKLNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

var randomString = generateRandomString(randomNumber);
var randomStringLength = randomString.length;

function newString(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  } else {
    return str.substring(0, 3).toLowerCase() + str.substring(3);
  }
}
console.log(newString(generateRandomString(randomNumber)));
