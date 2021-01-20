// 'use strict';

// // const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // function checkWinner(avgDolphins, avgKoalas) {

// //     if (avgKoalas >= (2 * avgDolphins)) {

// //         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);

// //     } else if (avgDolphins >= (2 * avgKoalas)) {

// //         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //     }

// // }

// // const avgDolphins = average(85, 54, 41);
// // const avgKoalas = average(23, 34, 27);
// // checkWinner(avgDolphins, avgKoalas);

// // function calcTip(billValue) {

// //     // let tip;

// //     return tip = billValue >= 50 && billValue <= 300 ? billValue * .15 : billValue * .25;

// // }
// // let billValue = 100;
// // const finalTip = calcTip(billValue);
// // console.log(`Tip for ${billValue} is ${finalTip}.`);

// //Using Arrow function
// // const tip = billValue => (billValue >= 50 && billValue <= 300) ? billValue * .15 : billValue * .25;

// //Using regular function

// // function tip(billValue) {

// //     return (billValue >= 50 && billValue <= 300) ? billValue * .15 : billValue * .25;
// // }

// // const bills = [125, 555, 44];
// // const tips = [tip(bills[0]), tip(bills[1]), tip(bills[2])];
// // console.log(bills, tips);

// // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// // console.log(totals);

// //Objects example

// const user = {
//   firstName: 'Richard',
//   secondName: 'Salame Raj',
//   job: 'Developer',
//   age: 2020 - 1996,
//   friends: ['Luke', 'Mike', 'Duke'],
// };

// console.log(user);
// console.log(
//   `${user.firstName} has ${d
//     user.friends.length
//   } friends and his Best Friend is ${
//     user.friends[user.friends.indexOf('Mike')]
//   }`
// );

//Coding Challenges

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
