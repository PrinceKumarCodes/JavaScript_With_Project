class Parent {
  hello() {
    console.log("Hello Parent friends..");
  }
}
class Child extends Parent {
  hello() {
    console.log("Hello child friends..");
  }
}
let obj = new Child();
console.log(obj.hello());
//if child and parent have same method , child's method will be used. it's called Method overriding
