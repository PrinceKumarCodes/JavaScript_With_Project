// Write a JavaScript exercise to get the filename extension.
// Sample filename: exe.rcx.txt

let fileName = "example.txt"; // Example filename;
let fileExtension = fileName.split(".").pop(); // Split the filename by '.' and get the last part
console.log("File extension: " + fileExtension); // Output the file extension
