// ✅ Deep Copy using JSON methods (good for plain objects without functions, Date, Map, Set, etc.)

// Original object with nested structure
const obj = {
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

// ❌ Shallow copy (just for reference — doesn't deep copy nested objects)
// const obj2 = { ...obj };

// ✅ Deep copy using JSON.stringify + JSON.parse
// Converts the object to a JSON string (serialization)
const objString = JSON.stringify(obj);

// Parses the JSON string back to a brand new object (deserialization)
const obj2 = JSON.parse(objString);

// Modifying the deep copied object (no effect on original)
obj2.social.facebook.ac1 = "changed";

// ✅ Output check
// Should print original value — unaffected by the change in obj2
console.log("Original:", obj.social.facebook.ac1); // Output: somewhere@gmail.com

// Should print modified value in deep-copied object
console.log("Copied:", obj2.social.facebook.ac1); // Output: changed
