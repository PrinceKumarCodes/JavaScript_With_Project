//Today We learnt  class, object, constructor, and parameterized constructor
class ToyotaCar {
  constructor(brand) {
    console.log("creating new objects...");
    this.brand = brand;
  }
  start() {
    console.log("Start...");
  }
  stop() {
    console.log("stop...");
  }
  setBrand(brand) {
    //take parameter and then assign value in brandName key
    this.brandName = brand;
  }
}

let fortuner = new ToyotaCar("arun");
console.log(fortuner);
fortuner.setBrand("fortuner"); //set Brand
let lexus = new ToyotaCar("prince");
console.log(lexus);
