class Person {
  constructor() {
    this.species = "Homo sepiens";
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep ");
  }
  work() {
    console.log("Do nothing....");
  }
}

class Engineer extends Person {
  super;
  work() {
    console.log("solve problems, build something");
  }
}
class Doctor extends Person {
  work() {
    console.log("treat patients");
  }
}

let obj = new Engineer();
console.log(obj.work());
