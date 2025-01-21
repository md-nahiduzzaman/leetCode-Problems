function expect(val) {
  return {
    toBe: function (expected) {
      if (val === expected) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },

    notToBe: function (expected) {
      if (val !== expect) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Example 1: Check if 5 is equal to 5
try {
  console.log(expect(5).toBe(5)); // Output: true
} catch (e) {
  console.error(e.message); // If an error occurs, print the error message
}

// Example 2: Check if 5 is equal to null
try {
  console.log(expect(5).toBe(null)); // This will throw "Not Equal"
} catch (e) {
  console.error(e.message); // Print the error message
}

// Example 3: Check if 5 is not equal to null
try {
  console.log(expect(5).notToBe(null)); // Output: true
} catch (e) {
  console.error(e.message); // If an error occurs, print the error message
}
