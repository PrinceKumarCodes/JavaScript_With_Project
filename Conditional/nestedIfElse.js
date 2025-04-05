let first = 10;
let second = 20;
let third = 15;
if (first > second) {
  if (first > third) {
    console.log(`Maximum number is ${first}`);
  } else {
    console.log(`Maximum number is ${third}`);
  }
} else {
  if (second > third) {
    console.log(`Maximum number is ${second}`);
  } else {
    console.log(`Maximum number is ${third}`);
  }
}
