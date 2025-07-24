// Write a JavaScript program that checks whether the last digit of three positive integers is the same.

function checkLastDigit(num1, num2, num3) {
  const lastDigitNum1 = num1 % 10;
  const lastDigitNum2 = num2 % 10;
  const lastDigitNum3 = num3 % 10;
  if (lastDigitNum1 === lastDigitNum2 && lastDigitNum2 === lastDigitNum3) {
    return `The last digit of ${num1}, ${num2}, and ${num3} are the same.`;
  } else {
    return `The last digit of ${num1}, ${num2}, and ${num3} are not the same.`;
  }
}

console.log(checkLastDigit(123, 343, 543)); // The last digit of 123, 343, and 543 are the same.
