var str = "Prince";
var result = "";

function reverseString(str) {
  for (let i = 0; i < str.length; i++) {
    result += str.charAt(str.length - i - 1);
  }
  return result;
}

let output = reverseString(str);
console.log(`The original string is : ${str}`); // The original string is : Prince
console.log(`The new string is : ${output}`); // The new string is : ecnirP
