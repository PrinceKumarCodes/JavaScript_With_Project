let firsNum = 32; //This variable is a global scope.
for (let i = 0; i < 10; i++) {
  let num = 14; //it is a block scope because it can access only inside the block.
  console.log(`Multiplication of this number is ${num * i}`);
}

function sumNum(a, b) {
  let sum = a + b; // it is a function scope variable.
  return sum;
}

function multiNum(a) {
  var result = a * a;
  return result;
}

console.log(result);
