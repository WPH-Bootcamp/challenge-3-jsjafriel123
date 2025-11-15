// code here, goodluck!!
"use strict";
const prompt = require("prompt-sync")();

// START  ----- Challenge 3 jsjafriel123
//
// ----------------------------------------------- 1. User Input Handling
//
// Get and validate NUMBER
function getValidNumberInput(n) {
  if (n == "" || isNaN(n)) {
    return false;
  } else {
    return true;
  }
}

let nb_valid = false;
let in_number1 = "";
let in_number2 = "";
let in_operator = "";

while (nb_valid == false) {
  in_number1 = prompt("Enter the 1st number (or 'no' to EXIT): ", "");
  if (in_number1.toLowerCase() == "no") {
    break; // Exit this loop
  }
  nb_valid = getValidNumberInput(in_number1);
  if (nb_valid == true) {
    console.log("Valid number: " + in_number1);
  } else {
    console.log(in_number1 + " Is not a valid number!");
  }
}
if (in_number1.toLowerCase() == "no") {
  console.log("Thank you for using this program!");
  process.exit(0); // Exit the program
}
// Number 2
nb_valid = false;
while (nb_valid == false) {
  in_number2 = prompt("Enter the 2nd number (or 'no' to EXIT): ", "");
  if (in_number2.toLowerCase() == "no") {
    break; // Exit this loop
  }
  nb_valid = getValidNumberInput(in_number2);
  if (nb_valid == true) {
    console.log("Valid number: " + in_number2);
  } else {
    console.log(in_number2 + " Is not a valid number!");
  }
}

if (in_number2.toLowerCase() == "no") {
  console.log("Thank you for using this program!");
  process.exit(0); // Exit the program
}

// Get and validate OPERATOR
function getValidOperatorInput(o) {
  if (o == "" || !/^(\*\*|[+\-*/%])$/.test(o)) {
    return false;
  } else {
    return true;
  }
}

let op_valid = false;

while (op_valid == false) {
  in_operator = prompt("Enter an operator (or 'no' to EXIT): ", "");
  if (in_operator.toLowerCase() == "no") {
    break; // Exit this loop
  }

  op_valid = getValidOperatorInput(in_operator);

  if (op_valid == true) {
    console.log("Valid operator: " + in_operator);
  } else {
    console.log(in_operator + " Is not a valid operator!");
  }
}
if (in_operator.toLowerCase() == "no") {
  console.log("Thank you for using this program!");
  process.exit(0); // Exit the program
}

//
// ----------------------------------------------- 2. Basic Arithmetic Operation (Functions and Operators)
//
function f_add(a, b) {
  return a + b;
}
function f_sub(a, b) {
  return a - b;
}
function f_mul(a, b) {
  return a * b;
}
function f_div(a, b) {
  if (b == 0) {
    return "Error: Division by zero!";
  } else {
    return a / b;
  }
}
function f_mod(a, b) {
  return a % b;
}
function f_pow(a, b) {
  return a ** b;
}

//
// ----------------------------------------------- 3. Main Calculator Logic (Switch & If/Else)
//
let ot_result = "";

switch (
  in_operator //[+,-,*,/,%,**]
) {
  case "+":
    ot_result = f_add(in_number1, in_number2);
    break;
  case "-":
    ot_result = f_sub(in_number1, in_number2);
    break;
  case "*":
    ot_result = f_mul(in_number1, in_number2);
    break;
  case "/":
    ot_result = f_div(in_number1, in_number2);
    break;
  case "%":
    ot_result = f_mod(in_number1, in_number2);
    break;
  case "**":
    ot_result = f_pow(in_number1, in_number2);
    break;
  default:
    // Kode dieksekusi jika tidak ada kasus yang cocok
    console.log("Failed Calculation, No MATCHED operation");
}
//
// ----------------------------------------------- 4. Data Type Analysis & Conditional Output
//
console.log("Number 1: " + in_number1);
console.log("Number 2: " + in_number2);
console.log("Operator: " + in_operator);
console.log("Result  : " + ot_result);
console.log("Type of Result: " + typeof ot_result);

if (isNaN(ot_result)) {
  // If the result is not a number
  console.log("The Result is not a Number!");
  if (typeof ot_result == "string") {
    console.log(ot_result);
  } else {
    console.log(
      ot_result ?? "Result is undefined or null, something went wrong!"
    );
  }
} else {
  if (ot_result >= 0) {
    console.log("The Result is a positive number (or 0)");
  } else {
    console.log("The Result is a negative number");
  }
  if (Number.isInteger(ot_result)) {
    console.log("The Result is an integer");
  } else {
    console.log("The Result is a floating-point");
  }
  console.log(
    ot_result % 2 === 0
      ? "The Result is an even number"
      : "The Result is an odd number"
  );
}
//
// ----------------------------------------------- 5. Exit Mechanism (Loops & Conditionals)
// Done. Using Break in loops and process.exit() in the program root.

//
// ----------------------------------------------- 6. Code Readability & 'use strict'
// Done.
