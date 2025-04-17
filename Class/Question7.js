// Q 8. Create multiple objects from the same class and show they have independent data.
class student {
  constructor(name) {
    this.name = name;
  }
}

const s1 = new student("prince kumar singh");
const s2 = new student(" sumit kumar singh");
console.log(s1.name);
console.log(s2.name);
