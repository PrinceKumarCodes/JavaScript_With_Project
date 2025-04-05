let firstNum = 32; // it is a global scope variable.

for (let i = 0; i < 10; i++) {
  let num = 14; // it is a block scope variable because it can be accessed only inside this block.
  console.log(`Multiplication of this number is ${num * i}`);
}

// --------------------------------------------------
function sumNum(a, b) {
  let sum = a + b; // it is a function scope variable, accessible only within this function.
  return sum;
}

//----------------------------------------------------
{
  var result = 10; // A variable declared with 'var' is always global scoped, even if declared inside a block.
}
console.log(result); // Accessible globally due to 'var'.

// ---------------------------------------------------
console.log(marks); // ReferenceError: Cannot access 'marks' before initialization.
console.log("prince");
console.log("kumar singh");
let marks = 100; // The section from line 21 to line 24 is called the "Temporal Dead Zone (TDZ)"
// because the variable 'marks' is in the global scope but cannot be accessed before its declaration.
