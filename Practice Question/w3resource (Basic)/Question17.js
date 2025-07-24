// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.

function diff_num(n) {
  if (n <= 19) {
    return 19 - n;
  } else {
    return (n - 19) * 3;
  }
}
console.log(diff_num(10)); // 9
console.log(diff_num(19)); // 0
console.log(diff_num(20)); // 3
console.log(diff_num(25)); // 18
