/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// --- Bug 1 
let result = "5" - 2;
console.log("The result is: " + result);
// The "-" operator always forces numeric conversion, so "5" becomes 5. but if we had used "+" instead, it would have concatenated the string and number, resulting in "52" instead of 3.


// --- Bug 2 ---
// PROBLEM: Boolean("false") is TRUE, because "false" is a non-empty string,
// so the if statement always evaluates to true, which is not the intended behavior.
let isValid = "false" === "true"; // explicit comparison instead of Boolean(string)
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); 
}

// --- Bug 3 ---
// PROBLEM: The variable "undefined" is being used as a string, which is not the intended behavior.
let undefinedValue = undefined;
// PROBLEM: age is a string "25", so "+" concatenates instead of adding,
// giving "255" instead of 30.
let age = "25";
let totalAge = Number(age) + 5; // explicitly convert age to a number first
console.log("Total Age: " + totalAge); // now correctly prints "Total Age: 30"
//My own examples of implicit and explicit type conversion:
// Implicit type conversion (JavaScript converts automatically)
let implicitExample = "10" + 5;
console.log(implicitExample); // "105" — the number 5 is automatically converted to a string

// Explicit type conversion (we convert manually)
let explicitExample = Number("10") + 5;
console.log(explicitExample); // 15 — the string "10" is manually converted to a number first

// Edge case example
let edgeCase = Number(undefined);
console.log(edgeCase); // NaN — undefined cannot be converted into a valid number