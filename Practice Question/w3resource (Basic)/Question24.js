// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.

var str = "Prince";
function addFirstCharToFrontAndBack(str) {
  //let firstChar = str.substring(0, 1); // Get the first character of the string
  //return firstChar + str + firstChar; // Add the first character to the front and back of the string

  firstChar = str.charAt(0);
  str = firstChar + str + firstChar; // Add first character to the front and back of the string
  return str;
}
console.log(`The original string is : ${str}`); // The original string is : Prince
console.log(`The new string is : ${addFirstCharToFrontAndBack(str)}`); // The new string is : PrinceP
