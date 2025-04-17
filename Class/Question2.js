//Q 2. Use a constructor to initialize values in a class.

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, My name is ${this.name}`);
  }
}
const person1 = new person("prince kumar singh", 22);
person1.greet(); // Hello, My name is Prince kumar singh
