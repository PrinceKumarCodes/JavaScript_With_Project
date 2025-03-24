// Primitive datatypesNumbers
//1) Numbers
//2) Strings
//3) Boolean
//4) Undefined
//5) Null

//---------------------Numbers----------------------

// Numbers are used to represent numeric values, which can be integers or floating-point numbers.
let integerNumber = 22;
let floatingNumber = 432.4544;
console.log(integerNumber, floatingNumber);

let strNum = "25";
console.log(typeof strNum); // string

let strFloat = "35.63";
console.log(typeof strFloat); // string

let parsedInteger = parseInt(strNum);
let parsedFloat = parseInt(strFloat);

console.log(typeof parsedInteger); // number
console.log(typeof parsedFloat); // number
