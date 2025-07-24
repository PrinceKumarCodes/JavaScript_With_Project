// Write a JavaScript function that reverses a number.

function reverseNumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(12)));
