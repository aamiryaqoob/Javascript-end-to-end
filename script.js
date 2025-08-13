//Write a js program to find maximum between two numbers and also between  three numbers.
// const numOne = 7;
// const numTwo = 7;
// const numThree = 7;

// if (numOne > numTwo) {
//     console.log(numOne)
// }
// else if (numTwo > numThree) {
//     console.log(numTwo)
// }
// else {
//     console.log(numThree)
// }

// using four variables
// const numOne = 14;
// const numTwo = 7;
// const numThree = 0;
// max = numOne;

// if (numTwo > max) {
//     console.log(numTwo)
// }
// else if (numThree > max) {
//     console.log(numThree)
// }
// else {
//     console.log(numOne)
// }

// Write a js program to check whether a number is negative, positive or zero.
// const num = 100;

// if (num > 0) {
//     console.log("The number you entered greater then Zero and here is the number:",num)
// }
// else if (num < 0) {
//     console.log("The number you entered less then Zero and here is the number:",num)
// } else {
//     console.log("Number is:", num)
// }

// Write a js program to check whether a number is divisible by 5 and 11 or not.
// const num = 01;
// if (num % 5 == 0) {
//     console.log("The Entered Number is divisible by 5.")
// } else if (num % 11 == 0) {
//     console.log("The Entered Number is divisible by 11.")
// } else{
//     console.log("The Entered Number is not divisible by 5 and 11.")
// }

//Write a js program to check whether a number is even or odd.
// const num = 0;
// if (num % 2 !== 0) {
//     console.log("The Number is Odd")
// } else {
//     console.log("The Number is Even")
// }

//Write a js program to input any character and check whether it is alphabet, digit or special character.
// const input = prompt("Enter any character:");

// if (input.length === 1) {
//     const ascii = input.charCodeAt(0);

//     // Check if it's an alphabet (A-Z or a-z)
//     if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
//         console.log(`${input} is an alphabet.`);
//     }
//     // Check if it's a digit (0-9)
//     else if (ascii >= 48 && ascii <= 57) {
//         console.log(`${input} is a digit.`);
//     }
//     // Otherwise, it's a special character
//     else {
//         console.log(`${input} is a special character.`);
//     }
// } else {
//     console.log("Enter one character at a time")
// }

// Write a js program to input any alphabet and check whether it is vowel or consonant.

// const input = prompt("Enter any alphabet").toLowerCase();
// if (input.length == 1) {

//     if (input === 'a' || input === 'e' || input === 'i' || input === 'o' || input === 'u') {
//         console.log("Vowel")
//     } else {
//         console.log("consonant")
//     }
// } else {
//     console.log("Enter One Character Only at a time")

// }

// Write a js program to check whether a year is leap year or not.

// const year = prompt("Enter any year");
// if (year.length == 4) {
//     if (year % 4 === 0 || year) {
//         console.log("Leap Year")
//     } else {
//         console.log("Not a Leap Year")
//     }
// } else {
//     console.log("Enter four digit year in numbers")
// }

// const input = prompt("Enter any Alphabet");

// if (input.length === 1) {
//     const ascii = input.charCodeAt(0);

//     // Check if it's an alphabet (A-Z or a-z)
//     if (ascii >= 65 && ascii <= 90) {
//         console.log(`${input} is uppercase alphabet.`);
//     } else if ((ascii >= 97 && ascii <= 122)) {
//         console.log(`${input} is lowercase alphabet.`)
//     }
// } else {
//     console.log("Enter one character at a time")
// }

// Write a js program to input week number and print week day.
// Similer Question
// Write a js program to input month number and print number of days in that month.

// const input = parseInt(prompt("Enter any number"));

// if (input == 0) {
//     console.log("Sunday")
// }
// else if (input == 1) {
//     console.log("Monday")
// }
// else if (input == 2) {
//     console.log("Tuesday")
// }
// else if (input == 3) {
//     console.log("Wednesday")
// }
// else if (input == 4) {
//     console.log("Thursday")
// }
// else if (input == 5) {
//     console.log("Friday")
// }
// else if (input == 6) {
//     console.log("Saturday")
// }
// else {
//     console.log("You entered the wrong number.")
// }

// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 150 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit

// Similer Question

// Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// const input = parseInt(prompt("Enter your electricity units"));

// if (input <= 50) {
//     sum = input * 0.50
//     console.log("Your electricity bill is:", sum)
// }
// else if (input <= 100) {
//     sum = input * 0.75
//     console.log("Your electricity bill is:", sum)
// }
// else if (input <= 150) {
//     sum = input * 1.20
//     console.log("Your electricity bill is:", sum)
// }
// else if (input <= 250) {
//     sum = input * 1.50
//     console.log("Your electricity bill is:", sum)
// }
// else {
//     console.log("You enter the wrong value.")
// }

// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// const chemistry = parseInt(prompt("Enter your chemistry marks"));
// const physics = parseInt(prompt("Enter your physics marks"));
// const math = parseInt(prompt("Enter your math marks"));
// const computer = parseInt(prompt("Enter your computer marks"));
// const biology = parseInt(prompt("Enter your biology marks"));

// const totalMarks = chemistry + physics + math + computer + biology;
// const percentage = (totalMarks / 500) * 100

// if (percentage >= 90) {
//     console.log("Grade A")
// }
// else if (percentage >= 80) {
//     console.log("Grade B")
// }
// else if (percentage >= 70) {
//     console.log("Grade C")
// }
// else if (percentage >= 60) {
//     console.log("Grade D")
// }
// else if (percentage >= 40) {
//     console.log("Grade E")
// }
// else if (percentage > 40) {
//     console.log("Grade B")
// }

// Write a js program to calculate profit or loss.

// const parchasePrice = parseInt(prompt("Enter parchase price"));
// const sellPrice = parseInt(prompt("Enter sell price"));

// const diff = sellPrice - parchasePrice;

// if (sellPrice > parchasePrice) {
//     console.log("You made a profit of:", diff + "Rs/-")
// } else {
//     console.log("You are in lose!")
// }

// Write a js program to find cube of any number using function.

// function cube(num) {
//     return num = Math.cbrt(3);
// }
// console.log(cube(11));

// Write a js program to find diameter, circumference and area of circle using functions.

// function dia(r) {
//     return 2 * r
// }
// console.log("Diamemter: " + dia(4));

// function getArea(r) {
//     return 3.14 * r * r
// }
// console.log("Area: " + getArea(4));

// function getCircumference(r) {
//     return 2 * 3.14 * r
// }
// console.log("Circumference: " + getCircumference(4));

// Write a js program to find maximum and minimum between two numbers using functions.

// function getMax(a,b) {
//     return (a > b) ? a : b
//  }
// console.log("Maximum number is: "+ getMax(2,3))

// function getMin(a,b) {
//     return (a < b) ? a : b
//  }
// console.log("Minimum number is: "+ getMin(2,3))

// Write a js program to check whether a number is even or odd using functions.

// function getEvenOdd(num) {
//     if (num % 2 == 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }
// console.log(getEvenOdd(44));

//
// Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false; // Numbers less than 2 are not prime
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(3))

// // Function to find all prime numbers in a given interval
// function findPrimesInRange(start, end) {
//     let primes = [];
//     for (let i = start; i <= end; i++) {
//         if (isPrime(i)) {
//             primes.push(i);
//         }
//     }
//     return primes;
// }

// // Test the function
// let startInterval = 1;
// let endInterval = 3;

// console.log("Prime numbers between", startInterval, "and", endInterval, "are:");
// console.log(findPrimesInRange(startInterval, endInterval));

// Write a js program to find power of any number using function.

// function findPower(base, expo) {
//     return Math.pow(base, expo)
// }
// console.log("Result: " + findPower(12,2))

// const numArr = [1,2,3,4,5];
// let sum = 0;
// let index = 0;

// while (index < numArr.length) {
//     if (numArr[index] % 2 !== 0) {
//         sum = sum + numArr[index]
//     }
//     index++
// }

// console.log(sum);

// ***********************

// const num = 1000;
// if (num % 2 === 0) {
//     console.log('Good')
// } else {
//     console.log('Bad')
// }

// **************************

// function testSCope() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   if (true) {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(a, b, c);
//   }
//   console.log(a, b, c);
// }

// testSCope();

// const numbers = [1, -1, 2, -2, 3, 0, 4];
// const newNumbers = numbers
//   .filter((num) => num >= 0)
//   .map((num) => num * num)
//   .slice(1);
// console.log(newNumbers);

// const a = [7, 2, 5];
// const b = [4, 9, 1];
// const c = [...a, ...b]
// .map((num) => {
//   return num % 2 == 0 ? num * 2 : num * 3;
// });

// console.log(c);

// Write a js program to read and print elements of array.
// Write a js program to print all negative elements in an array.
// With filter method

// const arr = [-1, 3, 4, -8, -6, -50];
// const negNumbers = arr.filter((element) => {
//  return element < 0
// });
// console.log(negNumbers)

// With for loop method

// const arr = [-1, 3, 4, -8, -6, -50];
// for (let i = 0; i <= arr.length; i++)
// if (arr[i] < 0) {
//   console.log("Negative number is : ", arr[i]);
// }

//rest and speard opertors

// const stirngArr = ["Ali", "Usman", "Ahmad", "Touqeer"]
// const numsarr = [12,345,212,211,2122,43]
// const newarr= [...numsarr,stirngArr]

// console.log(newarr)
// newarr.push("asdf")
// console.log(newarr)
