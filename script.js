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
// let string = "a brown fox jumps over the lazy dog.";
// let char = prompt("Enter a character to find out how many times it is used in the sentence");
// let count = 0;
// function stringCount() {
//   string = string.split("");
//   for (let i = 0; i < string.length; i++) {
//     if (char === string[i]) {
//         count++;
//     }
//   }
//   console.log(count);
// }
// stringCount();

// 16.
// let arr = [2, 5, 8, 1, 6, 3, 9];
// let smallestNumber = arr[0];
// function smallestNum(){
//   for(let i = 0; i < arr.length; i++) {
//     if(smallestNumber > arr[i]) {
//       smallestNumber = arr[i];
//     }
//   }
//   console.log(smallestNumber);
// }
// smallestNum();

// 17.
// let string1 = "madam";
// let string2 = string1.split("").reverse().join("");
// if(string1 === string2) {
//   console.log("Palindrome");
// } else {
//   console.log("Not a palindrome");
// }

// 18.
// let num = 123;
// function sumOfDigits() {
//   let strNum = Math.abs(num).toString();
//   let sum = 0;
//   for(let digit of strNum) {
//     sum += Number(digit);
//   }
//   console.log(sum);
// }
// sumOfDigits();

// 19.
// let arr = ["apple", "mango", "banana", "orange", "kiwi"];
// let string = "orange";
// let count = -1;
// function elementIndex() {
//   for(let i = 0; i < arr.length; i++) {
//     count++;
//     if(arr[i] === string) {
//       console.log(count);
//       break;
//     }
//   }
// }
// elementIndex();

// 20.
// let arr1 = [2, 34, 5, 6, 7, 8, 2];
// let arr2 = [4, 1, 2, 3, 7, 5, 2];
// function mergeArr() {
//   let mArr = arr2.concat(arr1);
//   console.log(mArr);
// }
// mergeArr();

// 21.
// let a = +prompt("Enter 1st number");
// let a = 3;
// let b = +prompt("Enter 2nd number");
// let b = 3;
// let c = prompt("Enter operator");
// let c = "+";
// function calculator() {
//   if (c === "+") {
//     console.log(a + b);
//   } else if (c === "-") {
//     console.log(a - b);
//   } else if (c === "*") {
//     console.log(a * b);
//   } else if (c === "/") {
//     console.log(a / b);
//   } else if (c === "%") {
//     console.log(a % b);
//   }
// }
// calculator();

// 22.
// let year = 2020;
// function leapYear() {
//   if(year % 4 === 0) {
//     console.log("Leap year");
//   } else {
//     console.log("Not a leap year");
//   }
// }
// leapYear();

// 23.
// let string = "a brown fox jumps over the lazy dog.";
// function vowelChecker() {
//   string = string.split("");
//   let count = 0;
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowelChecker();

// 24.
// let celcius = 45;
// function celciusToFahrenheit() {
//   console.log((celcius * 9/5) + 32);
// }
// celciusToFahrenheit();

// 25.
// function secondeLargestNum() {
//   let arr = [3, 4, 1, 8, 9, 10, 22];
//   let largestNumber = 0;
//   let secondLargestNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largestNumber) {
//       secondLargestNumber = largestNumber;
//       largestNumber = arr[i];
//     } else if (arr[i] > secondLargestNumber && arr[i] < largestNumber) {
//       secondLargestNumber = arr[i];
//     }
//   }
//   console.log(largestNumber);
//   console.log(secondLargestNumber);
// }
// secondeLargestNum();

// 26.
// let arr = [4, 2, 5, 1, 3];
// function sortArr() {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < i; j++){
//       if(arr[i] < arr[j]) {
//         let swap = arr[j];
//         arr[j] = arr[i];
//         arr[i] = swap;
//       }
//     }
//   }
//   console.log(arr);
// }
// sortArr();

// 27.
// let arr = [1, 2, 3, 4, 5, 6];
// let arr2 = [];
// function evenNums() {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0) {
//       arr2.push(arr[i]);
//     }
//   }
//   console.log(arr2);
// }
// evenNums();

// 28.
// let string = "Karachi is the biggest city of Pakistan";
// string = string.toLowerCase();
// let subStr = "karachi";
// function subString() {
//   return string.includes(subStr);
// }
// console.log(subString());

// 29.
// function addTask() {
//   let taskInput = document.querySelector("#task-input");
//   let taskText = taskInput.value.trim();
//   if (taskText === "") {
//     alert("Please enter a task!");
//     return;
//   }
//   let li = document.createElement("li");
//   li.innerHTML = `
//                 <span onclick="toggleTask(this)">${taskText}</span>
//                 <button onclick="removeTask(this)">Remove</button>
//             `;
//   let ul = document.querySelector("#task-list");
//   ul.appendChild(li);
//   taskInput.value = "";
// }
// function toggleTask(element) {
//   element.classList.toggle("completed");
// }
// function removeTask(button) {
//   button.parentElement.remove();
// }

// 30.
// let string = "Karachi is the city of lights";
// string = string.split("");
// let count = 0;
// function countChar() {
// for(let i = 0; i < string.length; i++) {
//   if(string[i] !== " ") {
//   count++;
//   }
// }
// console.log(count);
// }
// countChar();