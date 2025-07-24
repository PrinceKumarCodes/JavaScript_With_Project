// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
}
console.log(capitalizeFirstLetter("the quick brown fox")); // Output: 'The Quick Brown Fox'
