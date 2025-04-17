//A deep copy creates a completely independent clone of an object, including nested structures, without referencing the original.

var obj = {
  name: "prince kumar singh",
  age: 22,
  gender: "male",
  social: {
    facebook: {
      ac1: "somewhere@gmail.com",
      ac2: "somewhere@gmail.com",
    },
    twitter: {
      free: {
        ac1: "somewhere@gmail.com",
      },
      pain: {
        ac2: "somewhere@gmail.com",
      },
    },
  },
};

var obj2 = JSON.parse(JSON.stringify(obj)); // it is called deep copy , first real object convert into stringi object and stringi object convert again real object  and asign object in obj2

obj2.social.facebook.ac1 = "changed";
console.log(obj.social.facebook.ac1);
console.log(obj2.social.facebook.ac1);
