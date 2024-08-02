"use strict";
//ASSIGNMENT #24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:Tests for equality and inequality with string Tests using the lower case functionNumerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal toTests using "and" and "or" operators Test whether an item is in a arrayTest whether an item is not in a array
let person1 = "Bilal";
let persson2 = "Shahzaib";
let num1 = 6;
let num2 = 8;
let price = [10, 20, 30, 40, 50];
//.Test for equality or inequality with  string
console.log(person1 == persson2); // resturns  false
console.log(person1 == "Bilal"); // returns true
//.Test using th lower case function
console.log(person1.toLocaleLowerCase() == "Bilal"); // returns true
console.log(persson2.toLocaleLowerCase() !== "Shahzaib"); //returns false
//. Numerical teste involving equality and inequality, greater than and less than , greater than or equalto, and less thanor equal to 
console.log(num1 == num2); //retuens false
console.log(num1 != num2); // returns true
console.log(num1 > num2); // returns false
console.log(num1 < num2); // returns true
console.log(num1 >= num2); // returns false
//. Test using "and" and  "or" operators
console.log(num1 == num2 && num1 > num2); // returns false
console.log(num1 == num2 || num1 > num2); // returns true
console.log(num1 == num2 && num1 < num2); // returns false
console.log(num1 == num2 || num1 < num2); // returns true
console.log(num1 == num2 && num1 >= num2); // returns false
//.Test whether an item is in a array 
console.log(price.includes(10)); // returns true 
console.log(price.includes(60)); // returns false 
//.Test whether an item is not in a array 
console.log(price.includes(60)); // returns false
console.log(price.includes(10)); // returns true
console.log(price.includes(100)); // returns false 
