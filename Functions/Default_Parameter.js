//---------------First way | single default parameter--------------------
function sayName(name = "prince kumar singh") {
  //Default Parameter
  console.log(`My name is ${name}`);
}
sayName("karan kumar singh"); //Function call

//-----------------Second way | multiple default parameter-----------------
function sayName1(fname, lname = fname.toUpperCase()) {
  console.log(fname + lname);
}
sayName1("prince ", "singh"); //Function call

//---------------Third way | number default parammeter--------------------
function sayName2(number = 32) {
  console.log("Shubh Number :-", number);
}
sayName2(40); //Function call

//------------------Fifth way | object default parameter---------------------
function paraObj(fname, value = { age: 32, salary: 54 }) {
  // you can also pass object.
  console.log(fname, " ", value); //We can't concat Object using plus(+) that'swhy we used comma.
}
paraObj("Prince "); //Function call

//-------------------Sixth way | array default parameter---------------------
function paraArray(fname, value = [43, 54, 65, 33, 56]) {
  //You can also pass array
  console.log(fname + " " + value);
}
paraArray("prince ");

// -----------------Seventh way | undefined/null for Default Parameter -------
function paraUndefinedNull(value = "prince") {
  console.log(value);
}
// paraUndefinedNull(null); //when you will pass null in parameter so null will be print not default value.
paraUndefinedNull(undefined); //when you will pass undefined in parameter, so default value will be print.

//-------------------eighth way | function passed in default parameter------------------
function getAge() {
  return 190;
}
function utility(name = "prince", age = getAge()) {
  //default function parameter
  console.log(name, " ", age);
}
utility();
