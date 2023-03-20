console.log("Hello World");

var name = "Flatiron School";
let founded = 2015;
revenue = 10.5;
const pi = 3.1415;
active = true;
characher = `A`;

var name = "GA";
name = "Fullstack Academy";

console.log(name);

founded = 2023;
console.log(founded);

// pi = 3.1514;
console.log(pi);

// javascript operators
// &&, ||, ===, ==
console.log("10" === 10);
sum(90, 30);

// subtract(90, 30);

// let num1 = 200;
// let num2 = 100;

// console.log("The sum of num1 and num2 ", num1 + num2);

// num1 = 350;
// num2 = 21;

// console.log("The sum of num1 and num2 ", num1 + num2);

// What is a function?

// A function is a block of code that performs a specific task. A function is reusable and can be called multiple times. It minimizes the amount of code that you have to write. It is a way to organize your code.

// Function declaration

function sum(a, b) {
  console.log("The sum of num1 and num2 ", a + b);
  return a + b;
}

let result = sum(20, 100);
console.log(result);

// Real world Examples

// 1. You want make an orange juice. You need to get the oranges, cut them, squeeze them, and then drink it. You need to repeat the same steps every time you want to make an orange juice. However, if you have a juicer machine, you can just put the oranges in the machine and it will do all the work for you. You can just drink the juice. The juicer machine is a function. It performs a specific task. You can juice multiple fruits multiple times.

// function juicer(fruit) {
//   console.log(`You ${fruit} juice is ready to drink`);
// }

// Arrow functions
// Arrow functions are a shorter way to write functions. They are also called fat arrow functions. Arrow functions can be anonymous or named. They are always anonymous if they are assigned to a variable. Arrow functions can be as an anonymous callback function.

const juicer = (fruit) => {
  console.log(`You ${fruit} juice is ready to drink`);
};

const subtract = (a, b) => console.log(a - b);

// Callback functions

// A callback function is a function that is passed as an argument to another function. It is executed after the parent function has finished executing.

const calculate = (a, b, callback) => {
  callback(a, b);
};

// const greeting = (name, callback) => {
//   return callback(name);
// };

// greeting("Chris", function (name) {
//   console.log("Good afternoon", name);
// });

calculate(1000, 5, sum);
calculate(33, 11, subtract);

const afternoon_greeting = (name) => console.log("Good Afternoon", name);
const morning_greeting = (name) => console.log("Good morning", name);

// greeting("Peter", afternoon_greeting);

function greeting(name, time_of_day) {
  if (time_of_day === "morning") {
    morning_greeting(name);
  } else if (time_of_day === "afternoon") {
    afternoon_greeting(name);
  } else {
    console.log("Not a valid time");
  }
}

function greetingWithCallback(name, cb) {
  cb(name);
}

// Why do we use a callback function?

// 1. To make sure that a function is executed after another function has finished executing.
// Example:

function firstFunction() {
  console.log("First function is executed");
}

function secondFunction(callback) {
  console.log("Second function is executed");
  callback();
}

secondFunction(firstFunction);

//Second function is executed
//First function is executed
