// --------Syncronous-------------
//Syncronous means code runs in a particular sequence of instructions given in the programs.

// console.log("code1");
// console.log("code2");
// console.log("code3");

//-----------Asyncronous------------
//Due to syncronous programming , somethings important instructions , whitch causes a delay in the UI.
//Asyncronous code execution allows to execute next instructions immediately and doesn't block the flow.

function hello() {
  console.log("Hello friends");
}

//---First way---
// setTimeout(hello, 4000); //setTimeout function take callback function

//---second way---
// setTimeout(() => {
//   console.log("Helow my friends");
// }, 1000);

//---------------Asynchronous---------------------
console.log("code1");
console.log("code2");
setTimeout(() => {
  console.log("time out");
}, 2000); //two seconds

console.log("code3");
