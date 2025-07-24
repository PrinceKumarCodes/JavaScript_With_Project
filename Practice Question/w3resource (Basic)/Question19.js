// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
const checkNumber = (num) => {
  if (100 - num <= 20 || 400 - num <= 20) {
    return true;
  } else {
    return false;
  }
};

let output = checkNumber(401);
console.log(output); // true
