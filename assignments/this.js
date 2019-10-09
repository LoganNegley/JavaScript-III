/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding- When in the global scope 'this' refers to the window object
 * 2. Implicit only applies to objects with methods. 'This' keyword refers to the what is to the left of the dot when invoking the method.
 * 3. Explicit binding- Being able to explicitly tell the JS engine to point to a certian value using call, apply or bind
 * 4. New binding- Whenever a constructor function is created 'this' refers to the new object that is to be created with this function.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const test = function() {
  //console.log(this);
};

// Principle 2

// code example for Implicit Binding
const user = {
  name: "Logan",
  age: 30,
  location: "Texas",
  sayHello: function() {
    return `Hello my name is ${this.name} I am ${this.age} years old and i live in ${this.location}`;
  }
};

console.log(user.sayHello());
// Principle 3

// code example for New Binding
function User(fn, ln, age, city) {
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;
  this.city = city;
}

let newUser = new User("Logan", "Negley", 30, "League City");
console.log(newUser);

// Principle 4

// code example for Explicit Binding
function ghost() {
  console.log(this.boo);
}
let myGhost = {
  name: "Casper",
  boo: "booooooo"
};

ghost.call(myGhost);
