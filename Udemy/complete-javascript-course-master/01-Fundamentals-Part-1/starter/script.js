/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log("23");

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// VAriable naming conventions
let jonas_matilda = "jm";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentJob = 'teacher';

console/log(myFirstJob);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

javaScriptIsFun = "yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Simanowitz";
console.log(lastName);


//math opperators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

//2 ** 3 means 2 to the power of 3
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "schmeer";
console.log(firstName + " " + lastName);

//assignment opporators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //25 * 4
x++; //
x--;
x--;
console.log(x);

//comparison opporators
console.log(ageJonas > ageSarah); //< > <= >=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Margaret";
const job = "developer";
const birthYear = 1993;
const year = 2037;

const Margaret =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(Margaret);

const margaretNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; // a template literal
console.log(margaretNew);

console.log(`Just a regular string...`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too youg. Wait another ${yearsLeft} years`);
}


const birthYear = 1993;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Type conversion
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));

console.log(String(23));

//typer coercion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log("10" - "4" - "3" - 2 + "5");


//5 falsy values: 0, ', undefined, null, Nan

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(booolean("jonas"));
// console.log(boolean({}));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 10;
if (height) {
  console.log("yay! height is defined");
} else {
  console.log("height is undefined");
}


const age = 18;
if (age === 18) {
  console.log("You just became an adult");
}

if (age == 18) {
  console.log("you just became an adult ;");
}


const favorite = Number(prompt("whats your favorite number?"));

console.log(favorite);

if (favorite === 23) {
  console.log("23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favorite !== 23) {
  console.log("Why not 23?");
}


const hasDriversLicense = true; //a
const hasGoodVision = true; //b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sarah should drive");
// } else {
//   console.log("someone else should drive");
// }

const isTired = true; //c
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("sarah should drive");
} else {
  console.log("someone else should drive");
}


const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan Course Structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("not a valid day");
// }

if (day === "monday") {
  console.log("Plan Course Structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("not a valid day");
}



//ternary opporator quick decision more simple than if else for simple decision
const age = 23;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);
*/
