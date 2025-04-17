let obj = {
  //object is a reference type.
  name: "prince kumar singh",
  age: 22,
  department: "software developer",
};
let obj1 = obj; //copy reference not copy's value. whenever you will change value of obj1, so they always point obj and obj value will be change.
obj1.name = "Prince kumar"; //here , we are changing in object obj1  but change actual data in  object obj.
console.log(obj);
console.log(obj1);
