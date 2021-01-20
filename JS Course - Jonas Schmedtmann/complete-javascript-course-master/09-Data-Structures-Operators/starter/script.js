'use strict';

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto', [1, 2]],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order(starter, main) {
//     return [this.starterMenu[starter], this.mainMenu[main]];
//   },

//   delivery(
//     { starter, mains, address: deliveryAddress, time: deliveryTime = '22:00' } // Value has been assigned by default
//   ) {
//     return `Order Recieved! Your orders
//     ${this.starterMenu[starter]} and ${this.mainMenu[mains]}
//   Will be delivered to ${deliveryAddress} at ${deliveryTime}`;
//   },
// };

// //Spread operator (...)
// const arr = [3, 4];
// const badArr = [1, 2, arr[0], arr[1]];
// console.log(badArr);
// const newArr = [...badArr, 5, 6];
// console.log(newArr);
// console.log(...newArr);

// //For of loop

// // const entriesCheck = [...restaurant.categories.entries()];
// // console.log(...entriesCheck[1]);

// for (const [index, item] of restaurant.categories.entries()) {
//   console.log(`${index + 1}: ${item}`);
// }

// console.log(restaurant.openingHours.mon?.open);

// //Optional chaining (?.)
// for (const day of days)
//   console.log(`On ${day} ${restaurant.openingHours[day]?.open ?? 'closed'}`);

// // Optional chaining for arrays
// console.log(restaurant?.main?.food ?? 'value not found');
// console.log(restaurant?.mainMenu ?? 'value not found');

//Looping the Objects

//Iterating using entries function
// for (const [item, { open, close }] of Object.entries(restaurant.openingHours)) {
//   console.log(item, open, close);
// }

// //Iterating using keys function
// for (const item of Object.keys(restaurant.openingHours)) {
//   console.log(item);
// }

// //Iterating using values function
// for (const { open, close } of Object.values(restaurant.openingHours)) {
//   console.log(open, close);
// }

// console.log(
//   restaurant.delivery({
//     starter: 2,
//     mains: 1,
//     address: 'valasaravakkam, Chennai',
//     time: '10 AM',
//   })
// );
// console.log(
//   restaurant.delivery({
//     starter: 2,
//     mains: 1,
//     address: 'valasaravakkam, Chennai',
//   })
// ); //Asigning defalut values to the destructured object
// //Destructuring Objects

// //Default names
// const { name, starterMenu } = restaurant;
// const { place = [], name: restaurantName, starterMenu: starters } = restaurant; //has empty array for values whihch are not present in the original object
// console.log(name, starterMenu);
// console.log(restaurantName, starters, place);

// //Mutating object
// let a = 7;
// let b = 30;
// const obj = { a: 20, b: 90 };
// let { a: first, b: second } = obj;
// ({ a, b } = obj);

// console.log(a, b);
// console.log(first, second);

// //Nested objects

// const {
//   fri: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// //Without destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// //With Destructuring
// const [x, y, z] = arr;

// console.log(arr);
// console.log(x, y, z);

// //Destructuring nested arrays
// const nestedArr = [2, 3, [4, 5]];
// let [p, , [q, r]] = nestedArr;
// console.log(p, q, r);

// //Assigning default values to destructured variables;
// const [o = 1, , [w = 1]] = nestedArr;
// console.log(o, w);

// //Switiching variables
// const arr2 = [5, 6];
// let [s, t] = arr2;
// console.log(s, t);

// //Legacy switching
// const temp = s;
// s = t;
// t = temp;
// console.log(s, t);

// //Using destructuring
// [t, s] = [s, t]; // One line switching
// console.log(s, t);

// //Receiving multiple valuse from a Function
// //Using regular array variable
// const arr3 = restaurant.order(1, 2);
// console.log(arr3);

// //Using destructuring
// const [starterDish, mainDish] = restaurant.order(1, 2);
// console.log(starterDish, mainDish);

//Sets
// const arr = [23, 23];
// const newSet = new Set([
//   'z',
//   'Z',
//   'a',
//   'hi',
//   [23, 23],
//   arr,
//   '23',
//   arr,
//   'Whatsup',
//   23,
// ]);
// console.log(newSet);
// console.log(newSet.size);
// console.log(newSet.has('hi'));
// console.log(newSet.add(['Amazing', 'Grace']));
// console.log(newSet.delete('hi')); //Only one parameter
// // console.log(newSet.clear());
// console.log(newSet);

// for (const values of Object.entries(newSet)) console.log(values);

// const arr2 = ['waiter', 'chef ', 'waiter', 'cleaner', 'manager'];
// console.log(...new Set(arr2));
// const nonDup1 = [...new Set(arr2)];
// console.log(nonDup1);
// const nonDup2 = new Set(arr2);
// console.log(nonDup2);

//Maps

// const newMap = new Map([
//   ['google', 1],
//   ['facebook', 2],
// ]);

// newMap.set('apple', 3).set('amazon', 4);
// console.log(newMap.get('amazon'));
// console.log(newMap.has('facebook'));
// console.log(newMap.delete('apple'));
// console.log(newMap.size);
// console.log(newMap.set(document.querySelector('h1'), 'Heading'));
// console.log(newMap);

//Strings

const airline = 'TAP Air Portugal, Portugal';
const plane = 'A320';

console.log(airline[8]);
console.log('string'[3]);
console.log(airline.length);
console.log('string'.length);
console.log(`Index of 'a': ${airline.indexOf('a')}`);
console.log(`Last index of 'a': ${airline.lastIndexOf('a')}`);
console.log(`Index of Portugal: ${airline.indexOf('Portugal')}`);
console.log(`Last index of Portugal: ${airline.lastIndexOf('Portugal')}`);

console.log(
  airline.slice(airline.indexOf('Portugal'), airline.lastIndexOf(','))
);
console.log(airline.slice(4, 7)); // Start position value is included, End position value is not included
console.log(airline.slice(-1));
//Check Middle seat on a plane
//B and E are middle seats

const checkMilldeSeat = seat => {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log("You've got a Midle Seat :(");
  } else console.log("Your's is not a middle seat :)");
};
checkMilldeSeat('22C');
checkMilldeSeat('44B');
checkMilldeSeat('02A');

//How strigs work behind the scene:
console.log(new String('richie')); //This like object conversion hapens when we use functions on regular a string
console.log(typeof new String('richie').slice(0, 4)); // Even String object returns primitive string value

//To Upper/Lower case

const sampStr = 'sample checkEr, to sample Trim.    \n';
const lowerCase = sampStr.toLowerCase();
const correctString = `${sampStr[0].toUpperCase()}${lowerCase.slice(1)}`;
console.log(correctString);
console.log(sampStr.trimStart().trimEnd()); //The trim() method removes whitespace from both ends of a string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.). //.trimStart() removes whitespaces in the start .trimEnd() vice versa.

console.log(sampStr.replace('sample', 'Test')); //only First occurence
console.log(sampStr.replaceAll('sample', 'Test')); //All

//Practice
const pass1 = 'I have some food and a pocket knife';
const pass2 = 'I have a mobile phone and a gun for protection';
const pass3 = 'I have a laptop, and some snacks';

const checkPass = passenger => {
  passenger = passenger.toLowerCase();
  if (passenger.includes('gun') || passenger.includes('knife')) {
    console.log('Sorry, You are NOT allowed!');
  } else {
    console.log('Welcome Onboard!');
  }
};

checkPass(pass1);
checkPass(pass2);
checkPass(pass3);

//Capitilization of first letters of all words in a sentence. (in progress..)

const capWord = word => {
  const nameArray = [];
  const w = word.toLowerCase().split(' ');

  for (const n of w) {
    nameArray.push(`${n[0].toUpperCase() + n.slice(1)}`);
    //  nameArray.push(`${n.replace(n[0], n[0].toUpperCase())}`); //Using replace function
  }
  return nameArray.join(' ');
};

console.log(capWord('riCHARD sAlaMe rAj m'));

//Padding in String

const str = 'SampleString';
console.log(str.padStart(15, '*'));

//DebitCard Number masking
const creditcardMask = function (n) {
  const str2 = n.toString();
  const str2Length = str2.length;
  let masked = '';

  //Latest solution
  masked = str2.slice(str2Length - 4).padStart(str2Length, 'x');

  //Legacy solution
  // const letterArrray = [];
  // for (let i = 0; i < str2.length; i++) {
  //     //Using If..else
  //     // if (i < str.length - 4) {
  //     //   letterArrray.push('x');
  //     // } else {
  //     //   letterArrray.push(str[i]);
  //     // }

  //     //Usign ternary Operator
  // i < str2Length - 4 ? letterArrray.push('x') : letterArrray.push(str2[i]);
  // }
  // masked = letterArrray.join('');
  return masked;
};

console.log(creditcardMask(4747474747474749494345345345n));

// const str2 = '1234567890234234';
// console.log(str2.slice(str2.length - 4).padStart(str2.length, 'x'));
