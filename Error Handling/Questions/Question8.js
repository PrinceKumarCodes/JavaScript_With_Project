// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.

function riskyOperation(type) {
  switch (type) {
    case "TypeError":
      throw new TypeError("This is a type error");
    case "ReferenceError":
      throw new ReferenceError("This is a reference error");
    case "SyntaxError":
      throw new SystaxError("This is a syntax error");
    default:
      throw new Error("This is a general error");
  }
}
errorTypeArray = ["TypeError", "ReferenceError", "SyntaxError", "GeneralError"];
randomError = Math.floor(Math.random() * errorTypeArray.length);

try {
  riskyOperation(errorTypeArray[randomError]);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Cought a TypeError:", error.message);
  } else if (error instanceof ReferenceError) {
    console.error("Cought a ReferenceError:", error.message);
  } else if (error instanceof SyntaxError) {
    console.error("Cought a SyntaxError:", error.message);
  } else {
    console.error("Cought a general error:", error.message);
  }
}
