'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // console.log(containerMovements.innerHTML);

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${Math.abs(mov)}</div>
      </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// Creating a function which creates a new property username in each account i.e initials of the name
const createUserName = function (acnts) {
  for (const acnt of acnts) {
    acnt.username = acnt.owner
      .toLowerCase()
      .split(' ')
      .map(val => val[0])
      .join('');
  }
};

createUserName(accounts);

const calDisplaySummary = function () {
  const deposit = movements
    .filter(value => value > 0)
    .reduce((acc, value) => acc + value, 0);
  labelSumIn.textContent = `${deposit}€`;
  const withdrawl = movements
    .filter(value => value < 0)
    .reduce((acc, value) => acc + Math.abs(value), 0);
  labelSumOut.textContent = `${withdrawl}€`;
};

calDisplaySummary();
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//Slice and Splice methods

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// // console.log(arr);
// console.log('Slice');

// //SLICE method - Dose not mutate the original array instead it returns a new array
// //Inddex value is included
// console.log(arr.slice(1));
// // console.log(arr[0]);
// // console.log(arr.slice());
// console.log(arr.slice(-1));

// //End value is not included
// console.log(arr.slice(1, 4));
// console.log(arr.slice(1, -4));

// //SPLICE method - Alters or Mutates the original array
// console.log('Splice');
// console.log(arr.splice(1));
// console.log(arr);

// //End value is not included
// console.log(arr.splice(1, 4));
// console.log(arr.splice(1, -4));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('--- for of ---');
// //For of loop
// for (const [i, movement] of movements.entries()) {
//   movement > 0
//   ? console.log(`Transaction ${i + 1}: ${movement} Rs. Deposited`)
//   : console.log(`Transaction ${i + 1}: ${Math.abs(movement)} Rs. Withdrewed`);
// }

// console.log('--- forEach ---');
// //forEach loop
// movements.forEach(function (
//   movement,
//   i,
//   array
//   ) /* We should not change the order of the passing parameters*/ {
//     movement > 0
//     ? console.log(`Transaction ${i + 1}: ${movement} Rs. Deposited`)
//     : console.log(`Transaction ${i + 1}: ${Math.abs(movement)} Rs. Withdrewed`);
//     // console.log(array);
//   });

//   //MAP
//   console.log('--- MAP ---');
//   const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound sterling'],
//   ]);

//   currencies.forEach(function (
//     value,
//     key,
//     wholeMap
//     ) /* We should not change the order of the passing parameters*/ {
//       console.log(`${key}: ${value}, ${wholeMap}`);
//     });

//     //SET
//     console.log('--- SET ---');
//     const currenciesSet = new Set(['USD', 'INR', 'INR', 'USD', 'EUR', 'GBP']);
//     console.log(currenciesSet);
//     currenciesSet.forEach(function (
//       value,
//       key,
//       wholeSet
//       ) /* We should not change the order of the passing parameters*/ {
//         console.log(`${key}: ${value}, ${[...wholeSet]}`);
//       });

//MAP, FILTER, REDUCE

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// FILTER
//Same using function expression
// const deposits = movements1.filter(function (mov) {
//   return mov > 0;
// });

const deposits = movements1.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements1.filter(mov => mov < 0);
// console.log(withdrawals);

//REDUCE
const balance = movements1.reduce(function (acc, crnt, i, arr) {
  // console.log(`Acc at Iteration ${i}: ${acc}`);
  return acc + crnt; //The assignment to acc happens by default (i.e) acc = acc + crnt is now just acc + crnt
}, 0);
// console.log(balance);

//Tofind the max value
// const max = movements1.reduce((acc, crnt, i, arr) => {
//   // console.log(`Acc and Crnt at Iteration ${i}: ${acc}, ${crnt}`);
//   if (acc > crnt) return acc;
//   else return crnt;
// }, movements1[0]);

// console.log(max);
//map uses a callBack function
// const eurToUsd = 1.1;

// // const movementsEu = movements1.map(function (mov) {
// //   return mov * eurToUsd;
// // });

// //using Arrow function
// const movementsEu = movements1.map(mov => mov * eurToUsd);

// console.log(movements1);
// console.log(movementsEu);

// //Using for of loop
// const movementsEu1 = [];
// for (const mov of movements1) {
//   movementsEu1.push(mov * eurToUsd);
// }
// console.log(movementsEu1);

// const transactionsDescription = movements1.map(function (mov, i) {
//   return `Transaction ${
//     i + 1
//   }: Rs.${Math.abs(mov)} ${mov > 0 ? 'Withdrew' : 'Deposited'}`;
// });

//Using Arrowfunction
// const transactionsDescription = movements1.map(
//   (mov, i) =>
//     `Transaction ${i + 1}: Rs.${Math.abs(mov)} ${
//       mov > 0 ? 'Deposited' : 'Withdrew'
//     }`
// );

// console.log(transactionsDescription);
