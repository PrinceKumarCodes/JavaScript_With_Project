/*
2.Spread Operator (...)
Creates a shallow copy of an object.
More concise and modern (ES6+).
Doesn’t modify the original object.
*/

const obj = {
  a: 3,
  b: 5,
};
const obj2 = {
  b: 7,
  c: 9,
};
const merged = { ...obj, ...obj2 };
console.log(merged);
