// Write a JavaScript program that uses a try-catch block to catch and handle an 'EvalError' when evaluating an invalid expression.

function evaluate_expression(exp) {
  try {
    const result = eval(exp);
    console.log("Result :", result);
  } catch (error) {
    if (error instanceof EvalError) {
      console.log("EvalError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
}
// evaluate_expression("30 + 30"); //Valid expression
evaluate_expression("43 + "); //Invalid expression
