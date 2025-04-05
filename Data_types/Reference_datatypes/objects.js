// Objects are one of the most important data types as we'll be using them everywhere we have to deal with data. Objects store the data in the form of key-value pairs where keys are strings (or Symbols) and values can be of any data type, including other objects, functions, arrays, etc.
let person = {
  name: "prince",
  age: 22,
  gender: "male",
};
console.log(person.name);
console.log(person.age);
console.log(person.gender);

// We can access the properties of an object using:
// Dot notation
// Bracket Notation
let person1 = {
  name: "sumit kumar",
  age: 22,
  gender: "male",
};
// Dot notation
console.log(person1.name);
//Bracket notation
console.log(person1["name"]);

// We can also dynamically add, modify and delete the properties in the objects.
// Changing properties of object.
let person2 = {
  name: "sumit kumar",
  age: 22,
  gender: "male",
};
//Adding properties
person2.isSleeping = false;
//Modifying properties
person2.age = 23;
//Deleting properties
delete person2.name;
console.log(person2);

// Objects can also contain functions as properties. These functions are often referred to as methods.
let person3 = {
  name: "prince kumar singh",
  age: 21,
  country: "india",
  message: function () {
    console.log("My name is " + this.name);
  },
};
person3.message();

let obj = {
  //key ko double quote me likh sakte ho or jab key ke bich me space ho to compulsry ho jata hai
  name: "prince",
  "full name": "Prince kumar",
  age: 22,
  greet: function () {
    console.log("Hello Prince , How are you!");
  },
};
console.log(obj);
obj.greet(); //function call
console.log(typeof obj); //cheak type of obj variable
