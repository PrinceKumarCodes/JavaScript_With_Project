// ​The for...in loop in JavaScript iterates over the enumerable properties (keys) of an object.
let student = {
  name: "prince kumar",
  age: 32,
  salary: 54000,
};

for (let key in student) {
  console.log(`${key} : ${student[key]}`);
  /*
    Output:-
    name : prince kumar
    age : 32
    salary : 54000     
  */
}
