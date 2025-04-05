/*
What is Shallow Copy?

When you copy an object using Object.assign or the spread operator (...), 
it only copies the top-level properties. 
But if the object contains another object (nested), 
it doesn’t clone it — it just copies the reference (i.e., a pointer to the same memory).

That means changes in the nested object will reflect in both the original and the copied object.
*/

// ------------------ Shallow Copy Example ------------------

// 👇 Original object with nested structure
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

// 👇 Shallow copy using spread operator
let obj2 = { ...obj }; // Only top-level properties are copied, nested ones are still references

// Modifying nested property in the copied object
obj2.social.facebook.ac1 = "changed";

// Checking results
console.log("Original:", obj.social.facebook.ac1); // ❌ Will show: "changed" (unexpected)
console.log("Copied:  ", obj2.social.facebook.ac1); // ✅ Shows: "changed"

/*
WHY?

Both `obj.social.facebook` and `obj2.social.facebook` point to the same object in memory.
So changing it in `obj2` also changes it in `obj`.
That’s why it’s called a *shallow copy*.
*/
