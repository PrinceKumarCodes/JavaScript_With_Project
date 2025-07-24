// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.

var num = Math.floor(Math.random() * 100);
function isMultipleOf3Or7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(`The number is: ${num}`);
console.log(`Is the number a multiple of 3 or 7? ${isMultipleOf3Or7(num)}`);
