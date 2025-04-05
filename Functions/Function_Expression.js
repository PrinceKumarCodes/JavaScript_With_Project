// A function expression is very similar to, and has almost the same syntax as, a function declaration.
// The main difference between a function expression and a function declaration is the function name,
// which can be omitted in function expressions to create anonymous functions.
// A function expression can be used as an IIFE (Immediately Invoked Function Expression)
// which runs as soon as it is defined.

let getRectArea = function (height, width) {
  return height * width;
};
console.log(getRectArea(32, 14));
//Expected Output : 448
