// Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher',
// };

// Function constructor
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// This works because of inheritence
// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// var personProto = {
//   calculateAge: function () {
//     console.log(2020 - this.yearOfBirth);
//   },
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
// console.log(john);

// var jane = Object.create(personProto, {
//   name: { value: 'jane' },
//   yearOfBirth: { value: 1969 },
//   job: { value: 'designer' },
// });
// console.log(jane);

// Primatives vs Objects

// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
var obj1 = {
  name: 'john',
  age: 26,
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
  name: 'Jonas',
  city: 'Lisbon',
};

function change(a, b) {
  a = 30;
  b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
