// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.
function parse_JSON(jsonString) {
  try {
    const parseData = JSON.parse(jsonString);
    console.log("Result :", parseData);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.log("SyntexError :", error.message);
    } else {
      console.log("Error :", error.message);
    }
  }
}

// parse_JSON('{"name":"prince kumar", "age" : "32", "salary" : "320000"}'); //valid  JSON
parse_JSON('{"name": "Rowan Octave", "age": 30,}'); // Invalid JSON
