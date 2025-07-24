// Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

var str = "JavaScript";
function checkString(str) {
  if (str.length < 4) {
    return false;
  }
  front_four = str.slice(0, 4);
  if (front_four === "Java") {
    return true;
  } else {
    return false;
  }
}
console.log(`The string is: ${str}`); // The string is: JavaScript
console.log(`Does the string start with 'Java'? ${checkString(str)}`); // Does the string start with 'Java'? true
