// Lecture: Let & Const Vs Var
/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicense(passedTest) {
  if (passedTest) {
    var firstName = 'John';
    var yearOfBirth = 1990;

    console.log(firstName + ' ' + yearOfBirth);
  }
}
driversLicense(true);

// ES6

function driversLicense(passedTest) {
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {
    firstName = 'John';
  }
  console.log(firstName + ' ' + yearOfBirth);
}
driversLicense(true);
*/

// Lecture: Blocks & IIFEs
/*
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

console.log(c);

// ES5

(() => {
  var c = 3;
})();
*/
/*
// Lecture: Strings

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(3));
*/
/*
// Lecture: Arrow Functions

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (e) {
  return 2020 - e;
});
console.log(ages5);

// ES6
let ages6 = years.map((e) => 2020 - e);
console.log(ages6);

ages6 = years.map((e, index) => `Age element ${index + 1}: ${2020 - e}`);
console.log(ages6);

ages6 = years.map((e, index) => {
  const now = new Date().getFullYear();
  const age = now - e;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

// Lecture: Arrow Functions 2
/*
// ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector('.green').addEventListener('click', function () {
      var str =
        'This is box number ' + self.position + ' and it is ' + self.color;
      alert(str);
    });
  },
};
box5.clickMe();

// ES6
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      var str =
        'This is box number ' + this.position + ' and it is ' + this.color;
      alert(str);
    });
  },
};
box6.clickMe();

function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (current) {
      return this.name + ' is friends with ' + current;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map(
    (current) => `${this.name} is friends with ${current}.`
  );
  console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends6(friends);
*/
/*
// Lecture: Destructuring

// ES5
var john = ['John', 26];
var name = john[0];
var age = john[1];

console.log(name, age);

// ES6
const [name6, year] = ['John', 26];
console.log(name6, year);

const obj = {
  firstName: 'John',
  lastName: 'Smith',
};

const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;
console.log(a, b);

function calcAgeRetirement(year) {
  const age7 = new Date().getFullYear() - year;
  return [age7, 65 - age7];
}

const [age7, retirement] = calcAgeRetirement(1990);
console.log(age7, retirement);
*/
/*
// Lecture: Arrays

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (current) {
  current.style.backgroundColor = 'dodgerblue';
});

// ES6

const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(
  (current) => (current.style.backgroundColor = 'dodgerblue')
);

// Array.from(boxes).forEach(
//   (current) => (current.style.backgroundColor = 'dodgerblue')
// );

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === 'box blue') {
//     continue;
//   }
//   boxesArr5[i].textContent = 'I Changed To Blue.';
// }

// ES6
for (const item of boxesArr6) {
  if (item.className === 'box blue') {
    continue;
  }
  item.textContent = 'I Changed To Blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (item) {
  return item >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
console.log(ages.findIndex((item) => item >= 18));
console.log(ages.find((item) => item >= 18));
*/
/*
// Lecture: Spread Operator

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach((item) => (item.style.color = '#CC00FF'));
*/
