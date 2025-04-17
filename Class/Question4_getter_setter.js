// Q 4. Demonstrate how to use a setter method to update a property.

class person {
  constructor(name) {
    this._name = name; //set initial name
  }

  set name(newName) {
    //setter
    this._name = newName; //update name
  }
  get name() {
    //getter
    return this._name; //get current name
  }
}
const prod = new person("Laptop"); //create product with name laptop.
prod.name = "smartPhone"; //update smartPhone
console.log(prod.name); //Print smartPhone
