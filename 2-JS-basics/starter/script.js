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

var firstName = 'John';
var age = 21;

if (age < 13) {
  console.log(`${firstName} is a boy.`);
} else if (age >= 13 && age <= 17) {
  console.log(`${firstName} is a teenager.`);
} else {
  console.log(`${firstName} is a man.`);
}

age >= 21
  ? console.log(`${firstName} drinks beer.`)
  : console.log(`${firstName} drinks soda.`);
