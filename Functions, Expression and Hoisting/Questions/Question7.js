// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
let finalResult = countVowels("The quick brown fox");
console.log(finalResult); // Output: 5
