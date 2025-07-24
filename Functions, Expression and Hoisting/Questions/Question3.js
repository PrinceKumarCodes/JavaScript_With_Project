// Write a JavaScript function that generates all combinations of a string
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function generateCombination() {
  let str = "dog";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      console.log(str.substring(i, j));
    }
  }
}

generateCombination();
