// Q 5. Write a class Rectangle that calculates area using a method.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  getArea() {
    return this.height * this.width; //calculate area of rectangle
  }
}
const rect = new Rectangle(5, 4);
console.log(rect.getArea()); // Output : 20
