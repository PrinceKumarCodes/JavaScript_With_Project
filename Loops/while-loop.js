// The "while" loop in JavaScript provides another method to execute a block of code repeatedly based on a specific condition. The primary difference between the 'for' loop and the 'while' loop lies in their syntax, also we use 'while' loop when the number of iterations is not predetermined or when we want to keep looping until a specific condition is met.

// let number = 10;
// let i = 1;
// while (i <= number) {
//   console.log(i + " ");
//   i++;
// }

//attention here, loop is working infinite time with continue statement
let value = 1;
while (value < 5) {
  if (value == 3) {
    value++;
    continue;
  } else {
    console.log(value);
  }
  value++;
}

// See here
// let value1 = 1;
// while (value1 < 5) {
//   console.log("inside loop");
//   if (value1 == 3) {
//     continue;
//   } else {
//     console.log("Hi");
//   }
//   value1++;
// }
