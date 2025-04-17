// ------------split ----------------
let str = "my name is prince kumar singh";
let splitted = str.split(" "); //split the string using space as a separator
console.log(splitted); //['my', 'name', 'is', 'prince', 'kumar', 'singh']

// ----------------replace-----------
let str1 = str.replace("prince", "rahul"); //replace prince with rahul
console.log(str1); //my name is rahul kumar singh
let str2 = str.replace(/prince/g, "rahul"); //replace all prince with rahul

//--------------------includes method on strings---------------------
// the includes() method is used to check whether a string contains a specified substring or not. It returns true if the substring is found, otherwise false.

let str3 = "who is responsible for this?";
let isPresent = str3.includes("who"); //true

//-------------------includes methods in arrays------------
let arr = ["prince", "sudhanshu", "rahul", "sachin"];
let isPresent1 = arr.includes("sudhan"); //false
console.log(isPresent1); //false

let name = ["prince", "sudhanshu", "rahul", "sachin"];
let isPresent3 = name.includes("sudhanshu"); //true
console.log(isPresent3); //true
//-------------------indexOf method on strings---------------------
// the indexOf() method is used to find the first occurrence of a specified substring within a string. It returns the index of the first occurrence, or -1 if the substring is not found.
let str4 = "Prince kumar singh";
let index = str4.indexOf("kumar"); //index of kumar is 7
console.log(index); //7
