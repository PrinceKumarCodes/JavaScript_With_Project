// Both Object.assign() and the spread operator (...) are used to copy or merge objects in JavaScript, but they have some differences:

/*
1. Object.assign()
Copies properties from one or more objects to a target object.
Modifies the target object.
Doesn’t copy prototype properties
*/
const obj = {
  a: 4,
  b: 3,
};
const obj2 = {
  b: 5,
  c: 8,
};

const merged = Object.assign({}, obj, obj2);
console.log(merged);
