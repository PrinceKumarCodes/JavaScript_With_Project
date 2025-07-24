// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
function secondLowestAndGreatest(arr) {
  let sortedArray = arr.sort();
  let secondLowest = sortedArray[1];
  let secondGreatest = sortedArray[sortedArray.length - 2];
  return {
    secondLowest: secondLowest,
    secondGreatest: secondGreatest,
  };
}
let finalResult = secondLowestAndGreatest([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(finalResult); // Output: { secondLowest: 2, secondGreatest: 8 }
