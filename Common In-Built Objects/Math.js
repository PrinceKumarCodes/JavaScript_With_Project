// Math: - it is Used for performing mathematical tasks.

// ** Common Methods:
// 1) Math.random() – Returns a random number between 0 and 1.
console.log("Return a random number between 0 to 1 :- ", Math.random());

// 2) Math.floor(x) – Rounds down to the nearest integer.
console.log("Rounds down to the nearest integer :- ", Math.floor(5.9)); //5

// 3) Math.ceil(x) – Rounds up to the nearest integer.
console.log("Round up to the nearest integer :-", Math.ceil(43.4)); //44

// 4) Math.round(x) – Rounds to the nearest integer.
console.log("Round to the nearest integer:- ", Math.round(43.4)); //Output:43
console.log("Round to the nearest integer:- ", Math.round(43.5)); //Output:44

// 5) Math.max(...args) – Returns the largest value.
console.log("Return largest value :-", Math.max(32, 43, 54, 55, 3, 64, 4));

// 6) Math.min(...args) – Returns the smallest value.
console.log(
  "Returns the smallest value :-",
  Math.min(32, 43, 54, 55, 3, 64, 4)
);

// 7) Math.abs(x) – Returns absolute value.
console.log("Always  return positive value :-", Math.abs(43)); //43
console.log("Always return positive value :-", Math.abs(-32)); //32
console.log(Math.abs(0)); //0

// 8) Math.pow(x, y) – Returns x raised to power y.
console.log("Returns x raised to power y:-", Math.pow(2, 2)); //Output:-4

// 9) Math.sqrt(x) – Returns square root of x.
console.log("Returns square root of x :-", Math.sqrt(64)); //8
