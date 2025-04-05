//It will run infinite times
let value = 1;
while (value < 5) {
  if (value == 3) {
    continue;
  } else {
    console.log("Hi");
  }
  value++;
}
