//import the entire math module
// const math = require("./math");

// const addResult = math.addFunction(100, 200);
// const subtractResult = math.subtractFunction(200, 300);
// console.log(addResult);
// console.log(subtractResult);

//better way to importing
const { add, subtract } = require("./math");
console.log(add(500, 600));
console.log(subtract(700, 800));
