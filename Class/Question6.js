// Q 6. Extend a class using extends and call the parent constructor using super().
class Animals {
  //super class
  constructor(name) {
    this.name = name;
  }
  #speak() {
    // it is private methods
    console.log(`${this.name} makes a sound`);
  }
}
class Dog extends Animals {
  //sub class
  speak() {
    console.log(`${this.name} barks`);
  }
}

const dog = new Dog("Bruno");
dog.speak(); //Bruno barks

const Animal = new Animals("Gander");
Animal.speak(); //it will give error
