// Write a JavaScript program to check two given integers whether one is positive and another one is negative

const PositiveNegative = (firstNum, secondNum) => {
  if ((firstNum > 0 && secondNum < 0) || (firstNum < 0 && secondNum > 0)) {
    return true;
  } else {
    return false;
  }
};
console.log(PositiveNegative(5, -3)); // true
console.log(PositiveNegative(-5, 3)); // true
console.log(PositiveNegative(-5, -3)); // false
console.log(PositiveNegative(5, 3)); // false
