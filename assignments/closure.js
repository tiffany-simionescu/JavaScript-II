// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

let myName = "Tiffany";

function sayHello() {
  return `Hello, ${myName}!`;
}

sayHello();

// Another Example of a closure

function countByTwo() {
  let counter = 0;
  function myFunction() {
    return (counter += 2);
  }
  return myFunction;
}

const incrementByTwo = countByTwo();
const t1 = incrementByTwo();
const t2 = incrementByTwo();
const t3 = incrementByTwo();
const t4 = incrementByTwo();

console.log(t1, t2, t3, t4);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function() {
    return ++count;
  };
};
// Example usage: const newCounter = counter();
const newCounter = counter();

console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  return {
    increment: function() {
      return ++count;
    },
    decrement: function() {
      return --count;
    }
  };
};

const myCounterFactory = counterFactory();

console.log(myCounterFactory.increment());
console.log(myCounterFactory.increment());
console.log(myCounterFactory.decrement());
console.log(myCounterFactory.decrement());
