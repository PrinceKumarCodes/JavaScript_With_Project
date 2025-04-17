//Function is a block of code that specific task will be perform.
// Functions are the building blocks of JavaScript, allowing developers to encapsulate reusable blocks of code.

//function definition
function sayName() {
  console.log("Prince kumar singh");
}
sayName(); //function use - function call

//function definition
function numCounting() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}
numCounting(); //function call

//function definition
function age(num) {
  if (age >= 18) {
    console.log("You can vote.");
  } else {
    console.log("You can not vote.");
  }
}
age(21); //function call

// function definition
function getAverage(num1, num2) {
  let avg = (num1 + num2) / 2;
  console.log(`Average number is : ${avg}`);
}
getAverage(3, 7); //function call

// ---------------------Return Something---------------------
// Take nothing  and Return nothing
//Take something and Return nothing
//Take nothing  and Return something
//Take something and Return something

function getMyName(fName, lName) {
  let fullName = fName + " " + lName;
  // let fullName = fName + lName;
  return fullName;
  //unreachable statement; //Iske niche wala code run hi nahi hoga
  let a = 10;
  let b = 15;
  let sum = a + b;
  console.log(sum);
}
let result = getMyName("prince", "kumar singh");
// let result = getMyName(7, 7);
console.log(`My name is ${result}`);

//function definition
const getMultiplication = function (a, b) {
  return a * a;
};
let ans = getMultiplication(2, 2); //function call and store in variable
console.log(ans);
// console.log(getMultiplication(2 , 2));
