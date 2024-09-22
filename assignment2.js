// Initialize variables
let a = 25; // Variable a
let b = 20; // Variable b
let c = 12; // Variable c
let d = "15"; // Variable d (string)    
const e = 15; // Constant e

// Convert variable d to a number for correct summation
let dNumber = Number(d);

// Calculate the sum of a, b, c, d (converted to number), and e
let totalSum = a + b + c + dNumber + e;

// Display the result
console.log("The sum of the declared variables [a, b, c, d] and constant [e] is: " + totalSum);
console.log(`d > e: {d > e}`);
console.log(`d < e: {d < e}`);
console.log(`d >= e: {d >= e}`);
console.log(`d <= e: {d <= e}`);
console.log(`d === e: {d === e}`);

// 1. Subtract all the values of the declared variables
let subtractionResult = a - b - c - d - e;
console.log(`Subtraction result of all declared variables: {-37}`);

// 2. Multiply the values of variable a and c, divided by constant e
let multiplicationDivisionResult = (a * c) / e;
console.log(`Result of (a * c) / e: {20}`);

// 3. Exponent value of constant e raised to the power of variable c
let exponentResult = Math.pow(e, c);
console.log(`e raised to the power of c: {129746337890625}`);

// 4. Reassign the value of c to constant e,then display the result
c = 3; // Reassign c to 3
console.log(`New value of c: {3}`);