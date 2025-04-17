// Question 4: Write a JavaScript function to extract a specified number of characters from a string.

let truncate_string = function (str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
let result = truncate_string("Prince Kumar Singh", 10);
console.log(result); // "Prince Kum..."
