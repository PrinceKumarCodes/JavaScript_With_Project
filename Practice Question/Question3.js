// Question 3: Write a JavaScript function to split a string and convert it into an array of words.

let string_to_array = function (str) {
  return str.split(" ");
};
let result = string_to_array("prince kumar singh");
console.log(result); // ["prince", "kumar", "singh"]
