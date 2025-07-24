// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the specified range.
let num1 = 20;
let num2 = 40;
let num3 = 60;
function checkRang(num1, num2, num3) {
  if (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 >= 50) ||
    (num3 >= 50 && num3 <= 99)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(checkRang(num1, num2, num3)); //true
