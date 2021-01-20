/*let js = 'amazing';
if (js === 'amazing') // alert('JavaScript is FUN!');
    20 + 30 + 40;
console.log(20 + 30 + 40);
let LastName = 'Salame Raj';
console.log(LastName);
let testForUnassignedVariable;

console.log(testForUnassignedVariable);
let CONSTANTTEST = 3;
console.log(CONSTANTTEST);
const constantTest = "wordConstant";
console.log(CONSTANTTEST);
var variableExample = "exampleVariable";
console.log(variableExample);
CONSTANTTEST = 4;
console.log(CONSTANTTEST);
constantTest = "diffferentConstant";
console.log(constantTest);
*/

// // Challenge 1: Who has higher BMI? Johna or Mark?

// const weightOfMark = 98;
// const heightOfMark = 1.88;
// const weightOfJona = 85;
// const heightOfJona = 1.76;

// const bmiOfMark = weightOfMark / (heightOfMark ** heightOfMark);
// // console.log('BMI of Mark is ' + bmiOfMark);
// const bmiOfJona = weightOfJona / (heightOfJona ** heightOfJona);
// // console.log('BMI of Jona is ' + bmiOfJona);

// if (bmiOfMark > bmiOfJona) {
//     console.log(`Mark's BMI(${bmiOfMark}) is higher than John's(${bmiOfJona}).`);
// } else {

//     console.log(`Jona's BMI(${bmiOfJona}) is higher than Mark's(${bmiOfMark}).`)
// }
// const markHigherBMI = bmiOfMark > bmiOfJona;

// console.log('BMI Of Mark is higher = ' + markHigherBMI);

const dolphins = 96 + 20 + 89;
const koalas = 88 + 20 + 110;
const dolphinsAverage = dolphins / 3;
const koalasAverage = koalas / 3;
const qualifyDolphins = dolphinsAverage > 100;
const qualifyKoalas = koalasAverage > 100;


if (qualifyDolphins && (dolphinsAverage > koalasAverage)) {

    console.log("Dolphins Wins the match: " + dolphinsAverage);

} else if (qualifyKoalas && (koalasAverage > dolphinsAverage)) {

    console.log("Koalas Wins the match: " + koalasAverage);
} else {
    console.log("Sorry no one was qualified");
}
