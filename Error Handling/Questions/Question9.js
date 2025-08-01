// Write a JavaScript program that uses a try-catch block to catch and handle a 'URIError' when decoding an invalid URI.

// const myUri = "https://example.com";
// const encodedMyUri = encodeURIComponent(myUri);
// console.log("Encoded URI: ", encodedMyUri);
// const decodedMyUri = decodeURIComponent(encodedMyUri);
// console.log("Decoded URI: ", decodedMyUri);

try {
  const decodeMyUri = decodeURIComponent("%"); // This will throw a URIError
  console.log("Decoded URI : ", decodeMyUri);
} catch (error) {
  console.error("Caught an error :", error.message);
}
