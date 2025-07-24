// Write a program to check whether a specified character exists between the 2nd  and 4th positions in a given string.

let gnrtRndmStrLen = Math.floor(Math.random() * (10 - 5 + 1) + 5); // Random length between 5 and 10
var randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));

function generateRandomString(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function checkCharacterInRange(str, char) {
  if (str.length < 4) {
    return " String is too short to check the specified range. ";
  }
  const subString = str.substring(1, 4); // Extract substring from index 1 to 3 (2th to 4th positions)
  if (subString.includes(char)) {
    return `The character "${char}" exists between the 2th and 4th positions.`;
  } else {
    return `The character "${char}" does not exist between the 2th and 4th positions.`;
  }
}

let randomString = generateRandomString(gnrtRndmStrLen);

console.log("Result here : " + checkCharacterInRange(randomString, randomChar));
console.log("Random character: " + randomChar);
console.log("Random string: " + randomString);
