// ​The forEach() method executes a provided function once for each element in an array, in ascending-index order.

/*
array.forEach(function (currentValue, index, array) {
  // code to execute
}, thisValue);
*/

const numbers = [2, 4, 5, 1, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
