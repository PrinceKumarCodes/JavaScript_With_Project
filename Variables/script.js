// var is an old way of declaring variables that is function-scoped and it can be reassigned.
// let is a newer way of declaring variables that is block - scoped and it can be reassigned.
// const is a newer way of declaring variables that is block - scoped and it cannot be reassigned.

// -------------------var--------------------------

var name = "prince kumar singh";
console.log(name); //prince

var name = "sumit kumar singh"; //Redecalration allowed
console.log(name); //sumit kumar singh

name = "piyush yadav"; //updating value is allowed
console.log(name); //piyush yadav

// -------------------let--------------------------

let age = 22;
console.log(age); //22

// let age = 22;
// age = "name";//it is possible to update from different different value that's why it is called dynamically typed language
age = true;
age = null;

//let age = 43 //it will give you error , we can't redeclare a let variable

age = 32; //updating is allowed
console.log(age); //32

// -------------------const--------------------------

const city = "new york";
console.log(city); //new york

//const city = "new delhi"// ❌ Error , we can't redeclare a const variable

// city = "london"; //❌ Error, we can't update or reassign a const variable
