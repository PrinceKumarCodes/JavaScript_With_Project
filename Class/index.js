/**
 * A simple JavaScript class to demonstrate public and private class fields,
 * along with object-oriented behavior like methods (functions inside a class).
 */

class Human {
  // Public Properties (Accessible outside the class)
  name = "Prince Singh";
  ht = 180; // height in cm
  wt = 30; // weight in kg

  // Private Property (Accessible only inside the class)
  #age = 32;

  //Behavior
  // Public Method
  walking() {
    console.log(`${this.name} is walking`);
    console.log(`age is ${this.#age}`); //This keyword current object ko darshata hai  this keyword ke sath ise under use kar sakte hai but bahar hai
  }

  // Public Method
  running() {
    console.log(`${this.name} is running`);
  }

  // Public Method to access private data
  getAge() {
    return this.#age;
  }
}

// Creating an object (instance) of the Human class
const person = new Human();

// Accessing public property
console.log("Name:", person.name);

// Trying to access private property directly (this will be undefined or throw an error)
console.log("Age (direct access):", person.age); // undefined

// Accessing private property via a method
console.log("Age (via method):", person.getAge());

// Calling methods
person.walking();
person.running();
