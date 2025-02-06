// 1.
// let name = "Abdul Hannan Khan";
// let age = 21;
// let married = false;
// console.log(name + " " + age + " " + married);

// 2.
// function operation(num1, num2, op) {
//     if(op === "+") {
//         return num1 + num2;
//     } else if(op === "-") {
//         return num1 - num2;
//     } else if(op === "*") {
//         return num1 * num2;
//     } else if(op === "/") {
//         return num1 / num2;
//     } else if(op === "%") {
//         return num1 % num2;
//     }
// }
// console.log(operation(10, 10, "+"));
// console.log(operation(10, 10, "-"));
// console.log(operation(10, 10, "*"));
// console.log(operation(10, 10, "/"));
// console.log(operation(10, 10, "%"));

// 3.
// function evenOrOdd(num) {
//     if(num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// let num = 25;
// evenOrOdd(num);

// 4.
// let string = "Karachi is the city of lights";
// let count = 0;
// for(let i = 0; i < string.length; i++) {
//     count++;
// }
// console.log(count);

// 5.
// let firstName = "Abdul Hannan";
// let lastName = "Khan";
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// 6.
// let strNum = "21";
// strNum = parseInt(strNum);
// console.log(strNum);

// 7.
// function posNegOrZero(num) {
//     if(num > 0) {
//         console.log("Positive");
//     } else if(num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero")
//     }
// }
// posNegOrZero(0);

// 8.
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 9.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// function sumOfArr() {
//     for(let i = 0 ; i < nums.length; i++) {
//         sum += nums[i];
//     }
//     console.log(sum);
// }
// sumOfArr();

// 10.
// let string = "Karachi";
// let revString = ""
// for(let i = string.length - 1; i >= 0; i--) {
//     let item = string[i];
//     revString += item;
// }
// console.log(revString);

// 11.
// let arr = [33, 4, 11, 2, 4, 22];
// let largestNumber = 0;
// function largestNum() {
//     for(let i = 0; i < arr.length; i++) {
//         if(largestNumber < arr[i]) {
//             largestNumber = arr[i];
//         }
//     }
//     console.log(largestNumber);
// }
// largestNum();

// 12.
// let num = 15;
// function divisible() {
//     if(num % 3 === 0 && num % 5 === 0) {
//         console.log("This number is divisibel by 3 and 5");
//     } else if(num % 3 === 0) {
//         console.log("This number is divisibel by 3");
//     } else if(num % 5 === 0) {
//         console.log("This number is divisibel by 5");
//     }
// }
// divisible();

// 13.
// function fibonacciSeries(limit) {
//     let a = 0;
//     let b = 1;
//     let fibSeries = [];
//     if(limit >= 0) {
//         fibSeries.push(a);
//     }
//     while(b <= limit) {
//         fibSeries.push(b);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
//     return fibSeries;
// }
// let limit = 50;
// console.log(fibonacciSeries(limit));

// 14.
// let arr = [22, 44, 2, 22, 33, 44, 33, 44, 31, 2, 22, 9];
// function remDup() {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < i; j++) {
//             if(arr[i] === arr[j]) {
//                 arr.splice(i, 1);
//                 i--;
//                 break;
//             }
//         }
//     }
//     console.log(arr);
// }
// remDup();

// 15.
let string = "a brown fox jumps over the lazy dog.";
let char = prompt("Enter a character to find out how many times it is used in the sentence");
let count = 0;
function stringCount() {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (char === string[i]) {
        count++;
    }
  }
  console.log(count);
}
stringCount();