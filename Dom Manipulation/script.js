let firstDivElement = document.getElementById("fdiv");

let firstParaElement = document.getElementById("fpara");
let secondDivElement = document.getElementById("sdiv");

//We want to change  the background color of the first div element
firstDivElement.style.backgroundColor = "blue";

//We can only one property set at a time
// If you want to set multiple properties at once , you can use the cssText property

firstDivElement.style.cssText =
  "background: yellow; color: white; font-size:20px; border:4px";
