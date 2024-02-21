const markHeight = 1.69;
const markWeight = 78;
const johnHeight = 1.95;
const johnWeight = 92;

// const markHeight = 1.88;
// const markWeight = 95;
// const johnHeight = 1.76;
// const johnWeight = 85;

const BMIMark = markWeight / (markHeight * markHeight);
const BMIJohn = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = BMIMark > BMIJohn;

console.log("Mark's BMI:", BMIMark, "John's BMI:", BMIJohn);
// console.log(markHigherBMI);
console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
