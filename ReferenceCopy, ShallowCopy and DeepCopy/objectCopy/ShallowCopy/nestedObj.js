// ------------------ Shallow Copy ------------------
let obj = {
  name: "prince kumar singh",
  age: 22,
  social: {
    facebook: {
      ac1: "somewhere@gmail.com",
      ac2: "somewhere@gmail.com",
    },
    twitter: {
      free: {
        ac1: "somewhere@gemail.com",
      },
      paid: {
        ac2: "somewhere@gmail.com",
      },
    },
  },
};
let obj2 = { ...obj }; // Only top-level properties are copied, nested ones are still references
obj2.social.facebook.ac1 = "changed";
// Checking results
console.log("Original:", obj.social.facebook.ac1); // ❌ Will show: "changed" (unexpected)
console.log("Copied:  ", obj2.social.facebook.ac1); // ✅ Shows: "changed"
