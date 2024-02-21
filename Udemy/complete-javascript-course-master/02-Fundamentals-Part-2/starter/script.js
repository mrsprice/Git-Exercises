"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive");

// const interface = "Audio";


function logger() {
  console.log("my name is Margaret");
}

//calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//function declration //call function declarations can be called before they are defined 
const age1 = calcage1(1991);
function calcage1(birthyear) {
  return 2037 - birthyear;
}
console.log(age1);

//function expression // cannot with this
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};
// const age2 = calcAge2;

// console.log(age2);
//arrow function
const calcAge3 = (birthyear) => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const years = [1990, 1967, 2002, 2010, 2018];

const firstName = "Margaret";
const margaret = [firstName, "Simanowitz", 2037 - 1993, "student", friends];
console.log(margaret);
console.log(margaret.length);

//excercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
//add elements to array .push = add to end
const friends = ["Michael", "Steven", "Peter"];
const newlength = friends.push("Jay");
console.log(friends);
console.log(newlength);
//.unshift = add to beginning
friends.unshift("John");
console.log(friends);
//remove elements from array
friends.pop(); //removes last element
const popped = friends.pop(); //removes last element
console.log(friends);
console.log(popped);

//remove first elements from array
friends.shift();
console.log(friends);

// returns index of element called
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

//.includes uses strict equality
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("bob"));
console.log(friends.includes(23));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
//array = order matters = use for order data
const jonasArray = [
  'jonas',
  'schmear',
  2037 -1991,
  'teacher',
  ['michael', 'peter', 'steven']
]
//object literal = order does not matter = for unordered data
//property: value
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmear',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['michael', 'peter', 'steven']
}

//dot vs bracket notation

const jonas = {
  firstName: "Jonas",
  lastName: "Schmear",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};
console.log(jonas.lastName);
console.log(jonas["lastName"]); // put any expression in bracket

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);
console.log(jonas["first" + nameKey], jonas["last" + nameKey]);

//when we need to first compute the property name use bracket otherwise use dot notation
//prompt creates a popup prompt
const interestedIn = prompt(
  "What do you want to know about jonas? Choose between firstName, lasName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lasName, age, job, and friends"
  );
}

jonas.location = "Potugal";
jonas["twitter"] = "@jonasschmear";
console.log(jonas);

//challenge
//'jonas has 3 friends, and his best friend is called michael.
const jonas = {
  firstName: "Jonas",
  lastName: "Schmear",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
};
console.log(
  jonas.firstName +
    " has 3 friends, and his best friend is called " +
    jonas.friends[0]
);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
*/
//object methods object(jonas) is calling the method (calcage)
const jonas = {
  firstName: "Jonas",
  lastName: "Schmear",
  birthYear: 1991,
  job: "teacher",
  friends: ["michael", "peter", "steven"],
  hasDriversLicense: true,

  // calcage: function (birthYear) {
  //   return 2037 - birthYear;
  // },
  // calcage: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcage: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.firstName} is a ${this.calcage()} year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas["calcage"](1991)); //access property calcage and then call the function in the ()
// console.log(jonas.calcage());

console.log(jonas.getSummery());

// challenge;
// ("joans is a 46 year old teacher, and he has a drivers license.");
