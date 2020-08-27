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

// var whatDoYouDo = function (job, firstName) {
//   switch (job) {
//     case 'teacher':
//       return firstName + ' teaches kids how to code.';
//     case 'driver':
//       return firstName + ' drives an Uber in New York city.';
//     case 'designer':
//       return firstName + ' designs awesome websites in San Francisco.';
//     default:
//       return firstName + ' does something else.';
//   }
// };

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

// var names = ['John', 'Mark', 'Jane'];
// // Second way to create an array
// var years = new Array(1990, 1969, 1948);
// // Console log example for element 0 in array names.
// names[1] = 'Ben';
// // Adding Mary as a new element to the array.
// names.push('Mary');

// console.log(names);

// // Different data types

// var john = ['John', 'Smith', 1990, 'teacher', false];

// // Adding a title/surname to the beginning of the array.
// john.unshift('Mr.');
// // Adding John's favorite color to the end of the array.
// john.push('blue');
// // Removes the last element from the array
// john.pop();
// //  Removes the first element of the array
// john.shift();
// //  Returns the position of the argument we pass into the array.
// john.indexOf(1990);
// console.log(john);

// // Tip Calc Challenge

// var tips = [];
// var total = [];

// function tipCalc(bill) {
//   let tip;
//   if (bill < 50) {
//     tip = bill * 0.2;
//     tips.push(tip);
//   } else if (bill > 50 && bill < 200) {
//     tip = bill * 0.15;
//     tips.push(tip);
//   } else if (bill > 200) {
//     tip = bill * 0.1;
//     tips.push(tip);
//   } else {
//     return;
//   }

//   if (tips) {
//     let totalBill;
//     for (let i = 0; i < tips.length; i++) {
//       totalBill = tips[i] + bill;
//       total.push(totalBill);
//     }
//   }
// }

// tipCalc(70);
// // tipCalc(30);
// tipCalc(400);
// console.log(tips);
// console.log(total);

// Objects and properties section
// Order matters for arrays but it doesn't for objects

// // Object literal
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
// };

// // Viewing the object in the console.
// // console.log(john);

// // Dot notation to access firstName value in the john object
// // console.log(john.firstName);

// // Bracket notation to access birthYear in the john object
// // Must be a string inside the brackets.  This is what I've been forgetting for this format
// // console.log(john['birthYear']);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    // Function Expression
    this.age = 2020 - this.birthYear;
  },
};
john.calcAge();
// console.log(john);

var mark = {
  firstName: 'Mark',
  mass: 78,
  height: 10,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
  },
};

var john = {
  firstName: 'John',
  mass: 100,
  height: 11,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
  },
};

mark.calcBmi();
john.calcBmi();

if (john.bmi > mark.bmi) {
  console.log(`John's bmi is higher.  It is ${john.bmi}`);
} else if (mark.bmi > john.bmi) {
  console.log(`Mark's bmi is higher.  It is ${mark.bmi}`);
} else {
  console.log('It was a tie!');
}
