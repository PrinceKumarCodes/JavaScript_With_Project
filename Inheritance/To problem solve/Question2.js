let Data = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Data is :", Data);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    Data = "some new edited value";
  }
}

// let student1 = new User("prince sinha", "princesinha23@gmail.com");
// let student2 = new User("anamika singh rathor", "anamika004@gmail.com");
// console.log("first student :", student1);
// console.log(student1.viewData());

let teacher1 = new User("Dean", "Dean@college.com");
console.log(teacher1.viewData());

let Admin1 = new Admin("prince", "abs@gmail.com");

console.log(Data);
console.log(Admin1.editData());
console.log(Data);
