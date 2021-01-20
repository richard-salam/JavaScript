'use strict';

//Default values
// const bookings = [];

// //Setting default values
// const createBooking = function (
//   flightNumber,
//   numPassengers = 1,
//   price = 1899 * numPassengers //computation based on defalut value
// ) {
//   const passenger = {
//     flightNumber,
//     numPassengers,
//     price,
//   };
//   console.log(passenger);
//   bookings.push(passenger); //Just to make it complete like storing many bookings in an array
// };
// createBooking('LT2020', 2);
// createBooking('LT2020', 4); //Defalut value computation in action
// // createBooking('LT2020', , 2400); // We cant skip values
// console.log(bookings);

//Creating callback functions

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return `${first.toUpperCase()} ${others.join(' ')}`;
// };

// const oneWord = function (str) {
//   return str.toLowerCase().replaceAll(' ', '');
// };

// //Higher-order Function
// const transformer = function (str, fn) {
//   console.log(`Original String: ` + str);
//   console.log(`Function name: ${fn.name}`, fn(str));
// };

// transformer('Javascript is a cool language', upperFirstWord);
// transformer('Javascript is a cool language', oneWord);

// //JS uses callbacks MORE often
// const high5 = () => console.log('hi5');

// document.addEventListener('click', high5);

// //Foreach
// ['Richard', 'Aravind', 'Paul'].forEach(high5);
// // cartCalculator('userName', cartPrice);

//Using function declaration
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Using arrow function

//Mistake - since arrow function dose not need a curly brace or return statement since there is only one line of code
// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

//Using arrow function
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeter = greet('Hey');
// greeter('Richard');
// greeter('Matthew');

// greet('WhatsUp')('Dude');

//Call and apply method

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LF',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iataCode + flightNum}`);
    this.bookings.push({ flight: `${this.iataCode + flightNum}`, name });
    console.log(this.bookings);
    console.log(this);
  },
};

//Codes property names must match the parent object if its method is used as a copy
const euroWings = {
  airline: 'euroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// console.log(book);

lufthansa.book(1253, 'Richard');
lufthansa.book(4295, 'Williams');

//Dose NOT work
// book(4463, 'Salame');
// euroWings.book(4335, 'Kennith');

//Mentioning the object for which its called using call() methood
book.call(lufthansa, 44478, 'Moria');
book.call(euroWings, 3345, 'Simon');

//Apply methood
const arr = [3334, 'Torins'];
book.apply(lufthansa, arr);

//Apply methood alternate - we can use call with split(...) opertator
const arr2 = [589, 'Fierstien'];
book.call(euroWings, ...arr2);

//Bind Method
const bookEW = book.bind(euroWings, 7763); //This keyworkd is set to eurowings object

bookEW('Salamer');
bookEW('Karthi');

//With EventListeners
lufthansa.planes = 300;
// euroWings.planes = 300;
// console.log(lufthansa);
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
// .addEventListener('click', lufthansa.buyPlane.bind(euroWings)); //Binding euro winds object

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23); //setting this keywork to null since it's of no user here
console.log(addVAT(500));

//Function returining another function
const addTax2 = rate => value => value + value * rate;

const addVAT2 = addTax2(0.25);
console.log(addVAT2(100));

//Challlenge
