// The for...of loop in JavaScript iterates over iterable objects (like arrays, strings, maps, etc.), accessing values directly.
let sum = 0;
let num = [21, 43, 54, 54, 32, 65, 87, 67];
for (let item of num) {
  sum = sum + item;
}
console.log("Sum of arrays data :", sum);

// for (let key of [32, 43, 54]) {
//   console.log(key); //32, 43, 54
// }
