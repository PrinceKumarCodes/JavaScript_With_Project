// In function hoisting, function declarations are moved to the top of their scope during compilation,
// allowing them to be called before they are defined.

greet(); //works due to hoisting
function greet() {
  console.log("Good Morning");
}

result(); // Error: Cannot access 'result' before initialization
let result = function () {
  console.log("Hello Prince");
  
};
