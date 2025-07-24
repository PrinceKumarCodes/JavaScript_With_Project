//Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

/*
array.reduce((accumulator, currentValue) => {
  // return updated accumulator
}, initialValue);

The accumulator is a temporary "result holder" that gets updated on each iteration of the reduce() function. It carries forward the result as the array is processed element by element.

*/

function longestWord(str) {
  let words = str.split(" ");
  let longest = words.reduce((longestSoFar, currentWord) => {
    return currentWord.length > longestSoFar.length
      ? currentWord
      : longestSoFar;
  });
  return longest;
}
console.log(longestWord("Web Development Tutorial princekumarsingh")); // Output: "Development"
