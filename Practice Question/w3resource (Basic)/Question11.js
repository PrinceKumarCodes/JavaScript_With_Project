// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// The formula to convert from Fahrenheit to Celsius is: c = (f - 32) * 5/9
// The formula to convert from Celsius to Fahrenheit is: f = c * 9/5 + 32

celsieus = 60; // Celsius temperature
fahrenheit = (celsieus * 9) / 5 + 32; // Convert Celsius to Fahrenheit
console.log(celsieus + "°C is " + fahrenheit + "°F"); // Output the result
fahrenheit = 45; // Fahrenheit temperature
celsieus = ((fahrenheit - 32) * 5) / 9; // Convert Fahrenheit to Celsius
console.log(fahrenheit + "°F is " + celsieus + "°C"); // Output the result
// Output:
// 60°C is 140°F
// 45°F is 7.222222222222222°C
// Explanation:
// The code first converts a Celsius temperature of 60°C to Fahrenheit using the formula f = c * 9/5 + 32.
// It then converts a Fahrenheit temperature of 45°F to Celsius using the formula c = (f - 32) * 5/9. The results are printed to the console.
// The output shows the converted temperatures in both Celsius and Fahrenheit.
