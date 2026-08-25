// 1. Variables & Data Types

// Exercise 1

const gravity = 9.81;

let height = 20;

const mass = 70;

const energy = gravity * height * mass;

console.log(energy);

// Exercise 2

let temperature;

console.log(temperature);

temperature = 25;

console.log(temperature);

// 2. Strings

// Exercise 3

const string = "Learning Javascript";

console.log(string);

console.log(string.length);

console.log(string.toLowerCase());

console.log(string.substring(9, 19));

// Exercise 4

console.log(string.replace("Learning", "Mastering"));

console.log(string.indexOf("Javascript"));

console.log(string.split(""));

// 3. Equality Operators

// Exercise 5

console.log(0 == false);

console.log(0 === false);

/* Den første er loose comparison og tjekker om den første value er lig den anden value uden at tænke på datatyper. Den næste
er stricktly comparison og tjekker om det er samme datatype også. */

// 4. Functions

// Exercise 6

function square() {
  let n = 10;
  let square = n * n;

  console.log(square);
}
square();

const cube = function () {
  let n = 3;
  let cube = n * n * n;

  console.log(cube);
};
cube();

const power = (base, exp) => {
  // let result = base ** exp;

  let result = Math.pow(base, exp);
  console.log(result);
};
power(5, 3);

// Exercise 7

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function applyOperation(op, a, b) {
  return op(a, b);
}

// Test the functions
console.log(applyOperation(add, 5, 3)); // 8
console.log(applyOperation(subtract, 5, 3)); // 2
console.log(applyOperation(multiply, 5, 3)); // 15

// 5. Control flow

// Exercise 8

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(2023)); // false

// Exercise 9

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}

const book = {
  title: "Harry Potter",
  author: "J.K.Rowling",
  pages: 498,
};

// Exercise 10

const bookDetails = () => {
  let string = `The name of the book is ${book.title} and the author is ${book.author} and the book has ${book.pages} pages.`;

  console.log(string);
};
bookDetails();

book.publishedYear = 1998;

console.log(book.publishedYear);

delete book.pages;

console.log(book);

// 9. Arrays

// Exercise 11

const cities = ["Paris", "London", "Tokyo"];

cities.push("Berlin")

cities.shift();

const cityNames = cities.map(city => city + " City");

console.log(cities);

console.log(cityNames);

const filteredCities = cities.filter(city => city.length > 5);

console.log(filteredCities);

// 10. Destructuring & Template Literals

// Exercise 12

// Destructure the array
const [score1, score2, score3] = [100, 200, 300];

console.log(score1); // 100
console.log(score2); // 200
console.log(score3); // 300

// Destructure the object
const { firstName, lastName } = {
    firstName: "John",
    lastName: "Doe"
};

// Use template literals
console.log(`My name is ${firstName} ${lastName} and I scored ${score3} points.`);

// 11. Console

// Exercise 13
// Welcome message
console.log("Welcome to my application!");

// Deprecation warning
console.warn("This feature is deprecated.");

// Invalid input error
console.error("Invalid input!");

// Array of books
const books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien"
    },
    {
        title: "1984",
        author: "George Orwell"
    }
];

// Display books as a table
console.table(books);
