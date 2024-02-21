// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const johnWeight = 92;

const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s ${mark.bmi} BMI is higher than ${john.fullName}'s BMI ${john.bmi}`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s ${john.bmi} BMI is higher than ${mark.fullName}'s BMI ${mark.bmi}`
  );
}

// const BMIMark = markWeight / (markHeight * markHeight);
// const BMIJohn = johnWeight / (johnHeight * johnHeight);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log("Mark's BMI:", BMIMark, "John's BMI:", BMIJohn);
// // console.log(markHigherBMI);
// console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`);
