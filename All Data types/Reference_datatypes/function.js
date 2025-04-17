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

function greetMe(fullName) {
  console.log("my name is :", fullName);
  greet();
}
function greet() {
  console.log("Greeting for the day");
}
greetMe("Prince kumar");

//Attention Here return function()
function solve(number) {
  return function (number) {
    return number * number;
  };
}
let ans = solve();
console.log(ans(5));

//-------Function inside array-------
//We can use function in data Structure
const arr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
  function (a, b) {
    return a * b;
  },
];
let first = arr[0];
let result = first(10, 10);
console.log(result);

let second = arr[1];
let secondResult = second(4, 5);
console.log(secondResult);

//--------We can also use function in Object---------
let obj = {
  name: "Prince",
  age: 32,
  salary: 32000,
  greet: function () {
    console.log("Hello Prince bhai");
  },
  vote: () => {
    console.log("you can vote");
  },
};
console.log(obj.age);
obj.greet(); //function call
obj.vote();

//-----------Function reference------------
function greets(name) {
  return "Hello" + name;
}
//Creating a function reference
let sayHello = greets;
//Calling the function using the reference
let message = sayHello(" Warld! ");
console.log(message); //Output: Hello Worlds!
