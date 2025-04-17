/*
🎯 When to Use reduce()
You use reduce() when you want to:


✅ 1. Calculate a total (sum/product/average)
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0); // 10


✅ 2. Count occurrences
let fruits = ['apple', 'banana', 'apple'];
let count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// { apple: 2, banana: 1 }


✅ 3. Flatten an array
let nested = [[1, 2], [3, 4]];
let flat = nested.reduce((acc, curr) => acc.concat(curr), []);
// [1, 2, 3, 4]


✅ 4. Build a string
let chars = ['H', 'e', 'l', 'l', 'o'];
let word = chars.reduce((acc, ch) => acc + ch, '');
// "Hello"

✅ 5. Chaining transformations
let nums = [1, 2, 3];
let result = nums.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
// [2, 4, 6]

*/
