//  Shallow Copy using Spread Operator

let obj = {
  name: "harsheet",
  age: 22,
};

/*
The ... (spread) operator:
It copies all top-level properties from `obj` into `obj2`.
Since there are no nested objects here, it behaves like a full copy.
Changes in `obj2` won't affect `obj`, and vice versa.
*/

let obj2 = { ...obj }; // Makes a shallow copy of `obj`

// Modify the copy
obj2.name = "Prince kumar singh";

// Output both objects
console.log("Original Object:", obj); // { name: "harsheet", age: 22 }
console.log("Copied Object:  ", obj2); // { name: "Prince kumar singh", age: 22 }
