// Original nested object
var obj = {
  name: "prince kumar singh",
  age: 22,
  social: {
    facebook: {
      ac1: "somewhere@gmail.com",
      ac2: "somewhere@gmail.com",
    },
    twitter: {
      free: {
        ac1: "somewhere@gmail.com",
      },
      paid: {
        ac1: "somewhere@gmail.com",
      },
    },
  },
};

// Deep copy function using recursion
function makeDeepCopy(obj) {
  // Base case: if obj is not an object (i.e. it's a primitive like number, string, etc.)
  // or if it's null, just return the value as-is.
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Create an empty array or object depending on the original type
  var copiedVal = Array.isArray(obj) ? [] : {};

  // Get all keys of the current object
  var keys = Object.keys(obj);

  // Loop through each key and recursively copy its value
  for (var i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }

  // Return the fully copied object
  return copiedVal;
}

// Perform deep copy of `obj` and assign it to `copy`
var copy = makeDeepCopy(obj);

// Modify a deeply nested value in the copied object
copy.social.facebook.ac1 = "changed";

// Test output:

// This should print: "somewhere@gmail.com"
// Because `obj` should not be affected by the change made in `copy`
console.log(obj.social.facebook.ac1);

// This should print: "changed"
// Because `copy` has been modified independently of the original
console.log(copy.social.facebook.ac1);
