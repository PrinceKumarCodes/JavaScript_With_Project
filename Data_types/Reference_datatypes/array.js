// Arrays in JavaScript is a collection of items of same datatype or different datatype at contiguous memory locations.
//  Arrays are special types of objects that store collections of data.

let fruits = ["Apple", "Mango", "Santra"];
let fruit2 = fruits[1];
console.log(fruit2);

let primeNumber = [3, 5, 7, 9, 11];
let secondPrime = primeNumber[1];
console.log(secondPrime);

//We can create array from two ways
//1)simple array
let brr = ["prince", "kunal", "aman"];
console.log(brr);
console.log(typeof brr);

//2)Array constructor
let arr = new Array("prince", 1, 32, "sumit kumar singh", "karan kumar singh");
console.log(arr);
console.log(typeof arr);
console.log(arr[2]);

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

//--------------Built-in-function--------------

// -------Modifying Arrays--------
// (1) push() → Adds elements to the end of an array.

// (2) pop() → Removes element to the end of an array.

// (3) shift() → Removes element to the start of an array.

// (4) unshift() → Adds elements to the beginning of an array.

// (5) splice(start, deleteCount, ...items) → Modifies an array by adding/removing elements at a specific index.

// ------Extracting & Searching Elements-------
// (6) slice(start, end) → Returns a shallow copy of a portion of an array.

// (7) indexOf(item, fromIndex) → Returns the first index of a specified item, or -1 if not found.

// (8) lastIndexOf(item, fromIndex) → Returns the last index of a specified item, or -1 if not found.

// (9) find(callback) → Returns the first element that satisfies the condition.

// (10) findIndex(callback) → Returns the index of the first element that satisfies the condition.

// (11) includes(item, fromIndex) → Checks if an array includes a certain item.

// --------Transforming & Iterating--------
// (12) map(callback) → Creates a new array with transformed elements.

// (13) filter(callback) → Creates a new array with elements that satisfy the condition.

// (14) reduce(callback, initialValue) → Reduces the array to a single value.

// (15) forEach(callback) → Iterates over each element without returning a new array.

// -------Sorting & Reversing-------
// (16) sort(compareFunction) → Sorts elements in place (default is lexicographical).

// (17) reverse() → Reverses the order of elements in the array.

// ------Joining & Converting-------
// (18) join(separator) → Joins array elements into a string.

// (19) toString() → Converts an array to a string (comma-separated).

// (20) toLocaleString() → Converts an array to a localized string.

//------- Creating & Filling Arrays-----------
// (21) concat(array1, array2, ...) → Merges multiple arrays into a new array.

// (22) fill(value, start, end) → Fills elements with a specified value.

// (23) flat(depth) → Flattens a nested array up to a given depth.

// (24) flatMap(callback) → Maps and flattens an array in one step.
