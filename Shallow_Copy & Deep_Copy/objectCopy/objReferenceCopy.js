let obj = {
  name: "abishek",
  age: 22,
};

let obj2 = obj; //obj2 points obj , it store obj's reference not a actual value.
obj2.name = "Prince singh";
console.log(obj);
console.log(obj2);
