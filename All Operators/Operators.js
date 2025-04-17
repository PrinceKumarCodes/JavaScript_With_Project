let first = 20;
let second = 10;

//------------Arithmetic operator------------------
// Arithmetic operators allow us to perform mathematical calculations such as addition, subtraction, multiplication, division, and modulus.

//Addtion
let sum = first + second;
console.log(`Addition of ${first} and ${second} is :${sum}`);

// Subtraction
let subtract = first - second;
console.log(`Subtraction of ${first} and ${second} is :${subtract}`);

//Multiplication
let multi = first * second;
console.log(`Multiplication of ${first} and ${second} is : ${multi}`);

//Division
let division = first / second;
console.log(`Division of ${first} and ${second} is :${division}`);

//Modulas
let modul = first % second;
console.log(`Modulas of ${first} and ${second} is : ${modul}`);

//Exponentiation (**)
// The exponentiation operator is denoted by '**'. This operator raises the first operand to the power of second operand.
let power = first ** second;
console.log(`Power of ${first} ^ ${second} is : ${power}`);

// ---------------Unary Operator-----------------

//pre increment(++num)
let num = 10;
console.log(`Pre increment of ${num} is :${++num}`);

//pre decrement(--num1)
let num1 = 10;
console.log(`Pre decrement of ${num1} is :${--num1}`);

//Post increment(num2++)
let num2 = 10;
let postIncrmnt = num2++; //attention here very carefully how does it work 👇
// 👆👆👆first assign value then increment will be do
console.log(`Post increment of ${num2} is : ${postIncrmnt}`);
console.log(`Post increment of ${num2} is :${num2}`);

//Post decrement(num3--)
let num3 = 10;
console.log(`Post decrement of ${num3} is : ${num3--}`);
//output will be 10
console.log(`value of num3 is ${num3}`);
//output will be 11

// ---------------Assignment operator--------------
// The assignment operator assigns value to the variables. The most common assignment operator we use is '='.
let a = 10;
let b = 2;

// a = a + 10
a += 10;
console.log(a);

//a = a - 10;
a -= 10;
console.log(a);

// -------------------Comparision operators-------------------------
// Comparison operators, such as greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them. These return a boolean value in the output.

// --------------Strict Equality v/s Loose Equality-----------------
// Strict equality is denoted by '==='. When we use strict equality operator, both the data-type and the value are checked to determine equality, and it returns a boolean answer.
// Loose equality is denoted by '=='. When we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer.

let fValue = 10;
let sValue = 20;
let thValue = "10";

//Strict equality
if (fValue === sValue) {
  console.log(`Yes , This is strict equality`);
} else {
  console.log(`No , This is not strict eqality`);
}

//Loose equality
if (fValue == thValue) {
  console.log(`Yes , This is loose equality`);
} else {
  console.log(`No , This is not loose equality`);
}
console.log(`${fValue} == ${thValue}} is :${fValue == thValue}`);
//attention above fValue = 10 and thValue = "10", first convert string to number and then compare from other value that'swhy

// -----------------Ternary operator----------------------
// A ternary operator is a shorthand conditional operator that evaluates a condition and returns one of two values based on whether the condition is true or false.
let age = 21;
let status =
  age > 18 ? console.log("you can vote") : console.log("You can not vote");

//--------------------Logical operator--------------------
// Logical operators are used to connect two or more expressions/conditions to make decisions based on the criteria employed.

//AND(&&)
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(`${alert1} and ${alert2} is :${alert1 && alert2}`);
console.log(`${alert2} and ${alert3} is :${alert1 && alert3}`);

//OR(||)
console.log(`${alert1} or ${alert2} is :${alert1 || alert2}`);
console.log(`${alert1} or ${alert3} is : ${alert1 || alert3}`);

// NOT
let isFirst = true;
let gone = false;
let mysum = true;
console.log(!isFirst);
console.log(!gone);
console.log(!mysum);

//-----------------Bitwise operators------------------
// precedence:- ~(highest), <<, >>, &, ^, |(lowest)
// Bitwise operators are used to do manipulation of individual bits within the binary representation of numbers. There are several bitwise operators are used in JavaScript.

//Bitwise AND(&)
let firstNumber = 5; //101
let secondNumber = 20; //10100
console.log(firstNumber & secondNumber);

// Bitwise OR(|)
console.log(firstNumber | secondNumber);

//Bitwise NOT(~)
console.log(~firstNumber);
console.log(~secondNumber);

//Bitwise XOR(^)
// For example : "1 ^ 0 = 1", "0 ^ 0 = 0", "1 ^ 1 = 0", "0 ^ 1 = 1"
console.log(firstNumber ^ secondNumber);

// Left shift(<<)
// Left shift operator is denoted by '<<'. It shifts the bits of the left operand to the left, by a number of positions specified by the right operand. 0 comes in the place of the least significant bit after each shifting is done.
console.log(firstNumber << secondNumber);

//Right shift(>>)
// Right shift operator is denoted by '>>'. It shifts the bits of the left operand to the right, by a number of positions specified by the right operand preserving the sign of the original number.
console.log(firstNumber >> secondNumber);
let s = 4;
let h = 6;
console.log(s | h);
console.log(~0);

console.log(4 ^ 4); //0
console.log(4 >> 1); //answer will be 2 //division by 2
console.log(4 << 1); //answer will be 8  //multiply by 2
