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

// Debugged Code
let resultFixed = Number("5") - 2;
console.log("The result is: " + resultFixed); // Fixed by converting "5" to a number

let isValidFixed = Boolean("false"); // This is actually correct, as non-empty strings are truthy
if (isValidFixed) {
    console.log("This is valid!"); // This will still log because "false" is a non-empty string
} else {
    console.log("This is not valid!");
} // Added else to clarify the logic

let ageFixed = "25";
let totalAgeFixed = Number(ageFixed) + 5; // Fixed by converting age to a number
console.log("Total Age: " + totalAgeFixed); // Now correctly adds 5 to 25         

// Example of Implicit Type Conversion
let implicitExample = "10" * 2; // Implicitly converts "10" to number
console.log("Implicit Conversion Result: " + implicitExample); // Outputs 20    
// Example of Explicit Type Conversion
let explicitExample = String(100); // Explicitly converts 100 to string
console.log("Explicit Conversion Result: " + explicitExample); // Outputs "100" as a string   

// Edge Case Example
let edgeCase = null + 5; // null is treated as 0 in numeric context
console.log("Edge Case Result: " + edgeCase); // Outputs 5    



/* Explanation:
1. In the first fix, we used Number() to convert the string "5" to a number before performing subtraction.
2. The second part was already correct, but we added an else statement for clarity.     
3. In the third fix, we converted the string "25" to a number before adding 5 to it.
4. The implicit example shows how JavaScript automatically converts a string to a number during multiplication.
5. The explicit example demonstrates converting a number to a string using String().
6. The edge case shows how null is treated as 0 in numeric operations.
*/  