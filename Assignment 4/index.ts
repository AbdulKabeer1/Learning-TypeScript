// Q no 1 (Hello Variable)
let greeting = "Hello, World!";
console.log(greeting);

// Q no 2 (Basic Math)
let num1 = 10;
let num2 = 12;
console.log("sum=", num1 + num2);
console.log("difference=", num1 - num2);
console.log("product=", num1 * num2);
console.log("quotient=", num1 / num2);

// Q no 4 (Type Annotation)
let message: string;
message = "TypeScript";
//message: number = 12;

// Q no 5 (Modulus Operator)
let num3 = 19;
let num4 = 5;
console.log("Reminder=", num3 % num4);

// Q no 6 (Increment Challenge)
let counter = 0;
counter++;
counter += 1;
console.log("increment value=", counter);

//Q no 7 (Logical Gates)
let x = true;
let y = false;
let z = true;
console.log("AND=", x && y);
console.log("OR=", x || y);
console.log("NOT=", !z);

// Q no 8 (Compound Assignment)
let num = 10;
num += 12;
console.log("+=:", num);
num -= 4;
console.log("-=:", num);
num *= 2;
console.log("*=:", num);
num /= 6;
console.log("/=:", num);

// Q no 9 (Even or Odd)
let num5 = 11;
if (num5 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Q no 10 (Voting Eligibility)
let age = 24;
if (age >= 18) {
  console.log("eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Q no 11 (Grading System)
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else if (score >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Q no 12 (Max of Three)
let q = 13;
let r = 6;
let s = 4;
let max = Math.max(q, r, s);
console.log("Max:", max);

// Q no 13 (Leap Year Checker)
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + "is a leap year");
} else {
  console.log(year + "is not a leap year");
}

// Q no 14 (Fahrenheit to Celsius Converter)
let Fahrenheit = 80;
let Celsius = (Fahrenheit - 32) * (5 / 9);
console.log("Celsius:", Celsius.toFixed(2));

// Q no 15 (Positive, Negative, or Zero)\
let number = -5;
if (number > 0) {
  console.log("positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Q no 16 (Multiplication Table)
let num6 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num6 + " x " + i + " = " + num6 * i);
}
