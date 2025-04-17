// 📦 Array :- it Used to store multiple values in one variable.
arr = [32, 54, 33, 454, 33243, 544, 22, 43];
arr1 = [43, 54, 44, 54, 44];
// Common Methods:-

// push() – Add to end.
arr.push(30);
console.log("30 add to end:-", arr);

// pop() – Remove from end.
arr.pop();
console.log("Remove from end :-", arr);

// unshift() – Add to beginning.
arr.unshift();
console.log("Add to the begining :-", arr);

// shift() – Remove from beginning
arr.shift();
console.log("Remove from begining :-", arr);

// concat() – Merge arrays
console.log(arr + " " + arr1);

// slice(start, end) – Extracts part of array.
console.log("Extracts part of array :-", arr.slice(4, 5));

// splice(start, deleteCount) – Removes/replaces items.
console.log("Replace items :-", arr.splice(3, 3));

// ---------------------forEach()-------------------
// Purpose: Loops through an array and performs an action on each item.
// Returns: Nothing (undefined).
let nums = [32, 43, 4, 54];
nums.forEach((num) => {
  console.log(num); //[32,43,4,54]
});

// ------------------------map()--------------------
// Purpose: Transforms each item in an array and returns a new array.
// Returns: New array with transformed items.
let doubled = nums.map((num) => num * 2);
console.log(doubled); //[ 64, 86, 8, 108 ]

// -----------------------filter()------------------
// Purpose: Filters items based on a condition.
// Returns: New array with items that pass the test.
let filterNums = nums.filter((num) => num % 2 == 0);
console.log(filterNums); //[ 32, 4, 54 ]

//-------------------reduce()-----------------------
/*
The reduce() method is used to combine all elements of an array into a single value.
This single value can be:
1)a sum
2)a product
3)a string
4)an object
5)even a new array

Returns: A single accumulated value.
*/
