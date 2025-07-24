// Write a JavaScript function which returns the n rows by n columns identity matrix.

function identityMatrix(n) {
  var i;
  var j;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        console.log(" 1");
      } else {
        console.log(" 0");
      }
    }
    console.log("----------\n");
  }
}
identityMatrix(4);
