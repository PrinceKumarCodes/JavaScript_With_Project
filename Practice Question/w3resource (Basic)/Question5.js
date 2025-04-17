// Write a JavaScript program to reverse the string 'w3resource'.
let str = "w3resource";
let n = str.length;
let strArr = str.split(""); // Convert string to array

for (let i = 0; i < n / 2; i++) {
  let temp = strArr[i];
  strArr[i] = strArr[n - i - 1];
  strArr[n - i - 1] = temp;
}
let result = strArr.join(""); // Convert array back to string
console.log(result); // Output: "ecruoser3w"
