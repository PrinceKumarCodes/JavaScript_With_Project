// 9. Demonstrate method overriding using inheritance.
class vahicle {
  start() {
    console.log("vahicle starting....");
  }
}
class Bike extends vahicle {
  start() {
    console.log("Bike starting...");
  }
}
const b1 = new Bike();
b1.start();
