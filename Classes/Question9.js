// Define a simple class called Book
class Book {}

// Create an instance (object) of the Book class
const b1 = new Book();

// Check if b1 is an instance of the Book class
// This will return true because b1 was created using 'new Book()'
console.log(b1 instanceof Book); // true

// Check the type of b1 using 'typeof'
// This will return "object" because all class instances in JavaScript are objects
console.log(typeof b1); // object
