// Write a JavaScript program to check a set of three numbers; if the three numbers are the same return 30; otherwise return 20; and if two numbers are the same return 40.

function checkNumber(a, b, c) {
  if (a === b && b === c) {
    return 30;
  } else if (a === b || b === c || a === c) {
    return 40;
  } else {
    return 20;
  }
}
let firstRandNum = Math.floor(Math.random() * 10) + 100;
let secondRandNum = Math.floor(Math.random() * 10) + 100;
let thirdRandNum = Math.floor(Math.random() * 10) + 100;

let finalResult = checkNumber(firstRandNum, secondRandNum, thirdRandNum);
console.log(
  `If three number will be same, than it will return 30 \n if any two number will be same, than it will return 40 \n Otherwise it will return 20`
);
console.log("Result is here ....", finalResult);
