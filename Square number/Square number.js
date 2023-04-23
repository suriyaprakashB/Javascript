/*16-04-2023
Write a program that takes an array of numbers and returns a new array with each number squared. */

const inputArr = [2, 4, 6, 8, 10];
let squaredArr = [];
for (let i = 0; i < inputArr.length; i++) 
squaredArr.push(inputArr[i] ** 2);
console.log("The squared number is: "+ squaredArr);
