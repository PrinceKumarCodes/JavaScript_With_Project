//Question 2: Write a javascript function to check whether a string is blank or not.

let is_Blank = function (input) {
  if (input === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(is_Blank("")); //true
console.log(is_Blank(" ")); //false
console.log(is_Blank(0)); //true
console.log(is_Blank("0")); //false
console.log(is_Blank(null)); //false
console.log(is_Blank(undefined)); //false
console.log(is_Blank(NaN)); //false
