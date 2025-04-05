//Q 3. Create a private property #salary and access it via a getter method.
class Employee {
  #salary = 5000; //it is private properties. we can't access outside of this class

  getSalary() {
    return this.#salary;
  }
}
const emp = new Employee();
console.log(emp.getSalary()); //salary :5000
// console.log(emp.#salary); // ❌ Error: private field
