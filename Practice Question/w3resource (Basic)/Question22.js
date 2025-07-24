// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove_char(str, n) {
  return str.slice(0, n) + str.slice(n + 1, str.length);
}

function getRandomString(lengthNum) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < lengthNum; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function generateRandomNum() {
  return Math.floor(Math.random() * 6);
}

let str = getRandomString(6); // Random string of length between 0 and 5);

let n = generateRandomNum(); // Random number between 0 and 5
let ModifyedString = remove_char(str, n);
console.log(`The original string is: ${str}`);
console.log(`The modified string is: ${ModifyedString}`); // The modified string is: str.slice(0, n) + str.slice(n + 1 , str.length)
let removedChar = str.charAt(n);
console.log(`The character removed is: ${removedChar}`); // The character removed is: str.charAt(n)');
