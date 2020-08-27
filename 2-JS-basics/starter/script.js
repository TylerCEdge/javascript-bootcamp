// var now = 2018;

// var ageJohn = 28;
// var ageMark = 33;

// console.log(ageJohn);

// var added, multiplied, divided, subtracted, remainder;

// // MATH OPERATORS

// multiplied = now * 2;
// added = now + 2;
// divided = now / 2;
// subtracted = now - 2;
// remainder = now % 2;

// // LOGICAL OPERATIONS

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // TYPEOF OPERATOR

// // console.log(typeof johnOlder);
// // console.log(typeof 'something else');

// var now = 2020;
// var ageTyler = 1990;
// var ageAdam = 1993;
// var isAdult = 29;

// var isFullAge = now - ageTyler >= isAdult;
// var average = (ageTyler + ageAdam) / 2;
// console.log(isFullAge);
// console.log(Math.round(average));

// function calc(mass, height) {
//   return mass / (height * height);
// }

// console.log(calc(78, 1.69));
// console.log(calc(92, 1.95));

// var firstName = 'Tyler';
// var civilStatus = 'single';

// if (civilStatus === 'single') {
//   console.log(`${firstName} is single.`);
// } else {
//   console.log(`${firstName} is married.`);
// }

// var isMarried = false;

// Boolean Logic

// var firstName = 'John';
// var age = 21;

// if (age < 13) {
//   console.log(`${firstName} is a boy.`);
// } else if (age >= 13 && age <= 17) {
//   console.log(`${firstName} is a teenager.`);
// } else {
//   console.log(`${firstName} is a man.`);
// }

// ternary option

// age >= 21
//   ? console.log(`${firstName} drinks beer.`)
//   : console.log(`${firstName} drinks soda.`);

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// // Switch Statement

// var job = 'teacher';

// switch (job) {
//   case 'teacher':
//     console.log(`${firstName} teaches kids how to code.`);
//     break;
//   case 'driver':
//     console.log(`${firstName} drives an Uber in New York.`);
//     break;
//   case 'designer':
//     console.log(`${firstName} designs beautiful websites.`);
//     break;
//   default:
//     console.log(`${firstName} does something else`);
// }

// switch (true) {
//   case age < 13:
//     console.log(`${firstName} is a boy.`);
//     break;
//   case age >= 13 && age < 20:
//     console.log(`${firstName} is a teenager.`);
//     break;
//   case age >= 20 && age < 30:
//     console.log(`${firstName} is a young man.`);
//     break;
//   default:
//     console.log(`${firstName} is a man.`);
// }

// var height;

// height = 23;

// if (height || height === 0) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable has NOT been defined.');
// }

// if (height == '23') {
//   console.log('The == does type coercion!');
// }

// var scoreJohn = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;

// var scoreMary = (97 + 134 + 105) / 3;

// console.log(scoreJohn, scoreMike, scoreMary);

// if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
//   console.log(`John's wins with a score of ${scoreJohn}!`);
// } else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
//   console.log(`Mike's team wins with a score of ${scoreMike}!`);
// } else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
//   console.log(`Mary's team wins with a score of ${scoreMary}!`);
// } else {
//   console.log('It was a tie!');
// }

// function calcAge(year) {
//   return 2020 - year;
// }

// var ageJohn = calcAge(1990);
// var ageMike = calcAge(1948);
// var ageJane = calcAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function retireCalc(year, name) {
//   var age = calcAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${name} retires in ${retirement} years!`);
//   } else {
//     console.log(`${name} is retired!`);
//   }
// }

// retireCalc(1990, 'Tyler');

var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case 'teacher':
      return firstName + ' teaches kids how to code.';
    case 'driver':
      return firstName + ' drives an Uber in New York city.';
    case 'designer':
      return firstName + ' designs awesome websites in San Francisco.';
    default:
      return firstName + ' does something else.';
  }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
