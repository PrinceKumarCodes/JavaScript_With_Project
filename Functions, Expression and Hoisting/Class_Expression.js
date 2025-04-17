// A class expression is very similar to, and has almost the same syntax as, a class declaration.
// As with class declarations, the body of a class expression is executed in strict mode.
//  The main difference between a class expression and a class declaration is the class name,
//  which can be omitted in class expressions to create anonymous classes.
// Class expressions allow you to redefine classes,

const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};

console.log(new Rectangle(5, 8).area());
// Expected output: 40
