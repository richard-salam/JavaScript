'use strict';

document.querySelector('first');
//Coding Challenges

// ***************************************
// ***************************************

// JavaScript Fundamentals – Part 1

// ***************************************
// ***************************************

// Coding Challenge #1 and #2
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
// // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// // m tall.

// // Solution:

// //Declating variables:
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 95;
// const johnHeight = 1.88;

// //Funciton to calculat Weight and Height
// const bmi = function (weight, height) {
//   const bmi = weight / height ** 2;
//   return Math.trunc(bmi);
// };

// //To Log the BMIs
// console.log(
//   `BMI of Mark: ${bmi(markWeight, markHeight)}.
// BMI of John: ${bmi(johnWeight, johnHeight)}.`
// );

// //Condition check (Using Ternary operator)
// // const markHigherBMI =
// //   bmi(markWeight, markHeight) > bmi(johnWeight, johnHeight) ? true : false;

// //Condition check (Using if else operator)
// let markHigherBMI;
// if (bmi(markWeight, markHeight) > bmi(johnWeight, johnHeight)) {
//   markHigherBMI = true;
// } else {
//   markHigherBMI = false;
// }

// // O/P:
// console.log(`Mark has higher BMI?
// ${markHigherBMI}.`);

// ***************************************

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//Solution

// // Initializing scores for Teams in an Array
// const dolphins = [97, 112, 10];
// const kolas = [109, 95, 200];

// // Function to calculate and return average
// const average = function (scores) {
//   let averageScore = null;
//   for (let i = 0; i < scores.length; i++) {
//     averageScore += scores[i];
//   }
//   return Math.trunc(averageScore / scores.length - 1);
// };

// // Logging the Average values
// console.log(`Average of Dolphins: ${average(dolphins)}.`);
// console.log(`Average of kolas: ${average(kolas)}.`);

// //Checking for the given condition and O/P the corresponding values
// if (
//   average(dolphins) === average(kolas) &&
//   average(dolphins) > 100 &&
//   average(kolas) > 100
// ) {
//   console.log(`Match Tie!`);
// } else if (average(dolphins) > average(kolas) && average(dolphins) > 100) {
//   console.log(`Dolphins Wins!`);
// } else if (average(kolas) > average(dolphins) && average(kolas) > 100) {
//   console.log(`Kolas Wins!`);
// } else {
//   console.log('Both teams are underqualified (Average score below 100)');
// }

// ***************************************

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// Solution:

// // Passing bill array values
// const bill = [275, 40, 430, 100, 1000];

// // Tip calculator function (Returning final bill array and final tip array)
// const tipCalculator = function (bill) {
//   const finalTip = [];
//   const finalBill = [];
//   for (let i = 0; i < bill.length; i++) {
//     let currentBill = bill[i];
//     let currentTipRef =
//       currentBill >= 50 && currentBill <= 300
//         ? currentBill * 0.2
//         : currentBill * 0.5;

//     finalBill.push(currentTipRef + currentBill);
//     finalTip.push(currentTipRef);
//   }
//   return [finalTip, finalBill];
// };

// // Reciving the returned value from the function
// const [finalTip, finalBill] = tipCalculator(bill);

// // Presention the results
// for (let i = 0; i < finalBill.length; i++) {
//   console.log(
//     `Tip for ${bill[i]} is ${finalTip[i]} And the Final bill is ${finalBill[i]}`
//   );
// }

// ***************************************
// ***************************************

// JavaScript Fundamentals – Part 2

// ***************************************
// ***************************************

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// Solution

// // Arrow function to check the average
// const calcAverage = (round1, round2, round3) => (round1 + round2 + round3) / 3;

// // Arrow function to decide the winner
// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   }
// };

// // Function call and logging
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// ***************************************

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

// Solution

// Please refer JSF #1 coding Challenge #4

// ***************************************

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

//Solution

// Object Mark (Including function inside an object)
// const Mark = {
//   firstName: 'Mark',
//   secondName: 'Miller',
//   weight: 78,
//   height: 1.69,
//   calcBMI: function (weight, height) {
//     const avgBMI = this.weight / this.height ** 2;
//     return Math.trunc(avgBMI * 100) / 100;
//   },
// };

// // Object John (Including function inside an object)
// const John = {
//   firstName: 'John',
//   secondName: 'Smith',
//   weight: 109,
//   height: 1.99,
//   calcBMI: function (weight, height) {
//     const avgBMI = this.weight / this.height ** 2;
//     return Math.trunc(avgBMI * 100) / 100;
//   },
// };

// // Decession and logging using ternary operator
// Mark.calcBMI() > John.calcBMI()
//   ? console.log(
//       `Mark's BMI (${Mark.calcBMI()}) is higher than John's (${John.calcBMI()} )`
//     )
//   : console.log(
//       `John's BMI (${John.calcBMI()}), is higher than Mark's (${Mark.calcBMI()})`
//     );

// ***************************************

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

//Solution

// Please refer JSF #1 coding Challenge #4

// ***************************************
// ***************************************

// Developer Skills & Editor Setup

// ***************************************
// ***************************************

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

//Solution

// Understand the problem
// - Final result should be ONE long STRING with all the values arranged as mentioned

// Break it up into sub-problems
// - Create an empty string.
// - Arrange the given values as required for one iteration
// - Iterate and push the values to the empty array
// - Concatinate the filled array to display as a ONE long STRING

// function printForecast(arr) {
//   // - Create an empty string.
//   const finalString = [];
//   //Using String concatination

//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     // - Arrange the given values as required for one iteration
//     // - Iterate and push the values to the empty array
//     finalString.push(`...${arr[i]}ºC in ${i + 1} days `);

//     //Using String concatination
//     str += `...${arr[i]}ºC in ${i + 1} days `;
//   }
//   // - Concatinate the filled array to display as a ONE long STRING
//   console.log(finalString.join('') + '...');
//   //Using String concatination

//   console.log(str + '...');
// }
// // Function call (Passing the values)
// printForecast([17, 21, 23]);

// ***************************************
// ***************************************

// Data Structures, Modern Operators and Strings

// ***************************************
// ***************************************

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored

//Solution

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 11.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const printGoals = function (...goalPlayer) {
//   console.log(goalPlayer.length, ...goalPlayer);
// };
// //1.
// const [players1, players2] = game.players;

// //2.
// const [gk1, ...others1] = players1;

// //3.
// const allPlayers = [...players1, ...players2];

// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //5.
// const { team1, x: draw, team2 } = game.odds;

// //6.
// printGoals(...game.scored);

// //7.
// team1 > team2 && console.log('Team 1 is likly to win');
// team2 > team1 && console.log('Team 2 is likly to win');

// ***************************************

// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 😉
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//Solution

// //1.
// for (const [key, value] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: ${value}`);
// }

// //2.

// // //Without loop
// // const { team1: odd1, x: odd2, team2: odd3 } = game.odds;
// // console.log((odd1 + odd2 + odd3) / Object.values(game.odds).length);

// //With loop
// let average = 0;
// const odds = Object.values(game.odds);
// for (const item of odds) {
//   average += item;
// }
// console.log(`Average of the Odds are: ${average / odds.length}`);

//3.
// const odds = Object.entries(game.odds);
// for (const [index, value] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${index != 'x' ? `victory ${game[index]}:` : 'draw:'} ${value}`
//   );
// }

//4.
// const scorers = {};

// for (const item of game.scored) {
//   scorers[item] ? scorers[item]++ : (scorers[item] = 1);
//   console.log(scorers);
// }

// for (const item of game.scored) {
//   scorers[item] = 1;
//   //   scorers[item] = 1;
//   //   console.log(
//   //     `Item:                ${item}
//   // Object.keys(scorers): ${String(Object.keys(scorers))}`
//   //   );
// }

// console.log(scorers);

// for (const keys of Object.keys(scorers)) {
//   //   console.log(String(Object.keys(scorers)));
//   console.log(keys);

//   if (scorers.hasOwnProperty(String(keys))) {
//     scorers[keys] = scorers[keys] + 1;

//     console.log(scorers);
//     //       console.log(Object.values(scorers));
//     //       console.log(
//     //         `Item:                 ${keys}
//     // Object.keys(scorers): ${String(Object.keys(scorers))}`
//     //       );
//   } else {
//     scorers[keys] = 1;
//   }
// }
// // console.log(scorers);
// // scorers['Lewandowski'] += 1;

// console.log(scorers);

// Create an object variable as 'scorers'
// Ceate a 'for-of' loop to iterate thru the game.scored array
// Creating a loop to iterate thru the object keys
// Check for the property name in the object
// If same property exists add the value of that property by 1
// Add new property to the object if its unique with value as 1

// Finding repeating value in an array

// let findDuplicates = (array) =>
//   array.filter((item, index) => array.lastIndexOf(item) != index);

// const repeating = function (array) {
//   let repeat = [];
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i]);

//     for (let j = 0; j < array.length; j++) {
//       if (i !== j) {
//         if (array[i] == array[j]) {
//           repeat.push(array[i]);
//           //   console.log(repeat);
//         }
//       }
//     }
//   }
//   return repeat;
// // };
// const array = game.scored;
// // console.log(array);
// console.log(repeating(array));

// ***************************************
// ***************************************

// Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:⚽ GOAL

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

//Solution

// 1. Create an array 'events' of the different game events that happened (no
// duplicates)

// const events = [...new Set(gameEvents.values())];

// for (const eventFor of eventsArray) {
//   const [, value] = eventFor;
//   events.push(value);
// }
// events = new Set([...events]);
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

// console.log(
//   `An event happened, on average, every
//     ${[...gameEvents.keys()].pop() / gameEvents.size} minutes.`
// );

// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17:⚽ GOAL

// for (const [minute, anEvent] of gameEvents) {
//   console.log(
//     `[${minute <= 45 ? 'FIRST' : 'SECOND'} HALF] ${minute}: ${anEvent}`
//   );
// }

// ***************************************
// ***************************************

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
/* 
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
*/
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅

// document.body.append(document.createElement('button'));
// document.body.append(document.createElement('textarea'));

//Solution

// const input = `underscore_case
//  first_name
// Some_Variable
//  calculate_AGE
// delayed_departure`;

//To get the text from the textbox
// document.querySelector('button').addEventListener('click', function () {
//   const input = document.querySelector('textarea').value;
//   camelCase(input);
// });

// //Function to conert the given value to camelCase as required
// const camelCase = function (input) {
//   //Legacy way to iterate
//   // let i = 21;

//   let converted = '';
//   const lowerCase = input.toLowerCase().split('\n');
//   for (let [i, name] of lowerCase.entries()) {
//     let [firstName, lastName] = name.trim().split('_');
//     converted =
//       firstName + lastName.replace(lastName[0], lastName[0].toUpperCase());
//     converted = `${converted.padEnd(20, ' ')}${'✅'.repeat(++i)}`;

//     //Legacy way to iterate
//     // converted = converted.padEnd(20, ' ').padEnd(20 + ++i, '✅');
//     console.log(converted);
//   }
// };

// ***************************************
// ***************************************

// Coding Challenge #2

// This is more of a thinking challenge than a coding challenge 🤓
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that
// changes the color of the selected h1 element ('header') to blue, each time
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all
// the time you need. Think about when exactly the callback function is executed,
// and what that means for the variables involved in this example.

//Solution

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   console.log(header);
//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

// ***************************************
// ***************************************

// Working With Arrays

// ***************************************
// ***************************************

// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉

//Solution

// const checkDogs = function (dogsJulia, dogsKate) {
//   const copyDogsJulia = dogsJulia.slice(1, -2);
//   const corrected = copyDogsJulia.concat(dogsKate);
//   console.log(copyDogsJulia);
//   corrected.forEach(function (dogs, i) {
//     dogs >= 3
//       ? console.log(`Dog number ${i + 1}'s age is ${dogs}, It's is an adult`)
//       : console.log(
//           `Dog number ${i + 1}'s age is ${dogs}, It's still a puppy 🐶`
//         );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge #2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

//Solution
// const calcAverageHumanAge = function (ages) {
//   let humanAge = [];
//   for (const dogAge of ages) {
//     if (dogAge <= 2) humanAge.push(2 * dogAge);
//     else if (dogAge > 2) humanAge.push(16 + dogAge * 4);
//   }
//   return humanAge;
// };

const calcAverageHumanAgeFun = function (ages) {
  //Calucuate Human age of all Dogs
  const humanAge = ages.map(
    (age) => (age <= 2 ? 2 * age : 16 + age * 4)

    // Same as below
    // if (age <= 2) return 2 * age;
    // else if (age > 2) return 16 + age * 4;
  );

  //Filter adult Dogs
  const adultDogs = humanAge.filter((dog) => dog > 18);

  //To add all the ages of the adult dogs
  // const avgDogHumanAge =
  //   adultDogs.reduce((acc, age) => acc + age) / adultDogs.length;
  const avgDogHumanAge = adultDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return avgDogHumanAge;
  // return avgDogHumanAge / adultDogs.length;
};

const dogHumanAge = calcAverageHumanAgeFun([5, 2, 4, 1, 15, 8, 3]);
const dogHumanAge2 = calcAverageHumanAgeFun([16, 6, 10, 5, 6, 1, 4]);
console.log(dogHumanAge);
console.log(dogHumanAge2);
