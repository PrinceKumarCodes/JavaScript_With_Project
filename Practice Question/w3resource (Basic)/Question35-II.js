// Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.
function checkCharacterInRange(str, char) {
  let ctr = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  if (ctr == 1) {
    return `The character "${char}" exists between the 2nd and 4th positions.`;
  } else {
    return `The character "${char}" does not exist between the 2nd and 4th positions.`;
  }
}

let result = checkCharacterInRange("prince", "i");
console.log(result); // The character "i" exists between the 2nd and 4th positions.
