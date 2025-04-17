// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
let side1 = 5;
let side2 = 6;
let side3 = 7;

// Calculate the semi-perimeter
let s = (side1 + side2 + side3) / 2;

// Calculate the area using Heron's formula
let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

console.log("The area of the triangle is: " + area.toFixed(2)); // Output: The area of the triangle is: 14.70
