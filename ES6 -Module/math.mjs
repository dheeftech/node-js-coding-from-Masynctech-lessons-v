//function to add two numbers
function add(a, b) {
  return a + b;
}
//function to subtract two numbers
function subtract(a, b) {
  return a - b;
}

//export single function
// export default add;

//export multiple function
export default {
  add,
  subtract,
  version: "1.0.0",
  name: "math module",
};
