// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(num) {
  var count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return console.log(`${num} is a prime number.`);
  } else {
    return console.log(`${num} is not a prime number.`);
  }
}
isPrime(7); //Output: 7 is a prime number.
