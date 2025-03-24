// Reference datatypes are classified into 3 types
// functions are a fundamental building block of the language, functions are the reusable piece of code that can be called and executed at any point in our program.

function sum(a, b) {
  let result = a + b;
  return result;
}
let output = sum(3, 5);
console.log(output);

// Anonymous function
// JavaScript also supports anonymous functions, which are functions without a name.
// They are assigned to variables or passed as arguments to other functions.
// They are particularly useful in situations where a function is needed temporarily or as a callback function.

var add = function (a, b) {
  return a + b;
};

// Anonymous functions as callback functions:-
setTimeout(function () {
  console.log("This is an anonymous function called after 1 second.");
}, 1000);
