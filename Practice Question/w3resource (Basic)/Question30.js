// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.
let str = "javaScript";
function checkString(str) {
  if (str.substring(4, 10) === "Script") {
    return str.replace("Script", "");
  }
}
console.log(checkString(str)); //java
