// Write a JavaScript program that demonstrates the use of the 'try-catch-finally' statement to catch and handle an error, and then execute some cleanup code in the 'finally' block.

function devide_number(x, y) {
  try {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new TypeError(
        "Invalid arguments! both arguments should be integers"
      );
    }
    if (y === 0) {
      throw new Error("Invalid divisor! can not devide by zero");
    }
    const result = x / y;
    console.log("Result :", result);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("cleanup code Executed! ");
  }
}

devide_number("tre", 43);
