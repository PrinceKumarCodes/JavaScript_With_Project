class person {
  constructor(name) {
    console.log("parent construnctor");
    this.species = "homo sepiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("Do, nothing");
  }
}

class Engineer extends person {
  constructor(name) {
    // console.log("enter child constructor");
    super(name); //To invoke parents class constructor
    //its compalsary to call parents constructor with super() keyword otherwise it will give error
    // this.brand = brand;
    // console.log(" exit child constructor");
  }
  work() {
    super.eat(); //parents ke eat function ko yaha eccess kar rahe hai
    console.log("solve problem, build something");
  }
}

class Doctor extends person {
  work() {
    console.log("treat patients");
  }
}

let obj = new Engineer("prince");

console.log(obj);
console.log(obj.work());
