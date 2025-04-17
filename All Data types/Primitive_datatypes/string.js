//----------------string-------------------
// the "Strings" primitive data type represents sequences of characters. Strings are used to store and manipulate textual data, such as words, sentences, or any other sequence of characters.

//we can create string in three ways
let string1 = "prince";
console.log(string1);

let string2 = "prince";
console.log(string2);

let string3 = `prince`;
console.log(string3);

//concatenating strings
// We can concatenate multiple strings in JavaScript using two different ways:
// Using the '+' operator
// String interpolation with template literals

let first = "Mobile";
let second = "Charger";
let finalSentance = first + " and " + second;
console.log(finalSentance);

// Concatenation using string interpolation using template literals(``)
let firstValue = "Mobile";
let secondValue = "Charger";
console.log(`${firstValue} and ${secondValue}`);

//length method on strings
// the length property is used to know the length of various data types such as strings, arrays, and other iterable objects.
let message = "Hello prince!";
let finalMessage = message.length;
console.log(finalMessage);

//upperCase and lowerCase method on strings
// we can convert a string to uppercase or lowercase using the toUpperCase() and toLowerCase() methods, respectively.
let str = "this is my first code";
let upperCaseString = str.toUpperCase();
console.log(upperCaseString); //THIS IS MY FIRST CODE.
let lowerCaseString = str.toLowerCase();
console.log(lowerCaseString); //this is my first code.

//substring method on strings
// the substring() method is used to extract a portion of a string, starting from a specified index position to another specified index position, or to the end of the string.
let message1 = "hello prince";
let substr = message1.substring(3, 7); //lo p
console.log(substr);
let substr1 = message1.substring(2); //llo prince
console.log(substr1);

//split method on strings
// the split() method is used to split a string into an array of substrings based on a specified separator.
let splitted = "once upon a time";
let splittedArray = splitted.split(" ");
console.log(splittedArray);

// join method on strings
// the join() method is used to concatenate all the elements of an array into a single string.
let array = ["prince", "amit", "sumit", "karan"];
let msg1 = array.join(" ");
console.log(msg1);
let msg2 = array.join();
console.log(msg2);
