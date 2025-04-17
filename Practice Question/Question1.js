// Question 1: Write a JavaScript function to check whether an 'input' is a string or not.

let isString = function (input) {
  if (typeof input === "string") {
    return true;
  } else {
    return false;
  }
};
console.log(isString("prince kumar singh")); // "input is a string"
console.log(isString(123)); // "input is not a string"
