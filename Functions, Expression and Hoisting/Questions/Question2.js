// Write a JavaScript function that checks whether a passed string is a palindrome or not?
//  e.g madam or radar.

function checkPalindromeNumber(str) {
  let str = "Radar";
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str.charAt(i);
  }
  let str1 = str.toLowerCase();
  reverseStr = reverseStr.toLowerCase();
  if (str1 === reverseStr) {
    console.log(str, "is a palindrome string.");
  } else {
    console.log(reverseStr, "is not a polindrome string .");
  }
}

checkPalindromeNumber("radar");
