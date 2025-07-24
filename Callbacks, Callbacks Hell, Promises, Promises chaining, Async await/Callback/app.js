function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumcallback) {
  //such function, which is passed as a arguments in another function, that is called function
  sumcallback(a, b);
}

//first way
calculator(3, 4, sum); //you don't have to write parenthesis

//second way
calculator(3, 4, (a, b) => {
  //with the arrow function
  console.log(a + b);
});

//Third way
calculator(3, 4, function (a, b) {
  // with the function keyword
  console.log(a + b);
});
