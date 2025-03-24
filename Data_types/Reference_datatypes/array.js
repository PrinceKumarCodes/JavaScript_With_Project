// Arrays in JavaScript is a collection of items of same datatype or different datatype at contiguous memory locations.
//  Arrays are special types of objects that store collections of data.
let fruits = ["Apple", "Mango", "Santra"];
let fruit2 = fruits[1];
console.log(fruit2);

let primeNumber = [3, 5, 7, 9, 11];
let secondPrime = primeNumber[1];
console.log(secondPrime);

let data = [2, "da", "green", "sat"];
let data3 = data[2];

data[1] = "data"; //modify on 1 index;
delete data[3]; //deleting data from the arra
console.log(data);

// We can also modify our array, we can add and delete items in our array using:
// push : Adds an item to the end of the array.
// unshift : Adds an item to the beginning of the array.
// pop : Removes the last item from the array.
// shift : Removes the first item from the array.

let fruits1 = ["Apple", "Banana", "Orange"];
fruits1.push("kiwi");
fruits1.unshift("Grapes");
console.log(fruits1);
// output: ["Grapes", "Apple", "Banana", "Orange", "kiwi"];

let fruits2 = ["Apple", "Banana", "Orange"];
fruits2.pop();
fruits2.shift();
console.log(fruits2);

// We have more methods that can be applied to arrays to modify them, such as slice(), splice(), includes(), indexOf(), etc. We will cover all of these in detail in the upcoming article on arrays, so don't worry.
