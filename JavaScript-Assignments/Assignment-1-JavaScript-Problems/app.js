// 📘 JavaScript Practice Sheet
// 📅 Level: Beginner to Intermediate
// 🧑‍🏫 Instructor: Sir Waqar Rana

// 1) Write a program that checks whether a number is even or odd.

function evenOrOdd(checknumber) {
  return checknumber % 2 === 0 ? "Even" : "Odd";
}
// console.log(evenOrOdd(1),evenOrOdd(2))

// 2) If someone's age is more than or equal to 18, print "Eligible to vote", otherwise print "Not eligible".

// const age = prompt("Plese Enter your Age")
// if(age >= 18){
//     console.log("You Are Eligible for Vote")
// } else {
//     console.log("You Are not Eligible for Vote")
// }

// 3) Print numbers from 1 to 10 using a for loop.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i <= numbersArray.length; i++) {
  // console.log(i);
}

// 4) Print even numbers between 1 to 20 using a while loop.

let evenNum = 1;
while (evenNum <= 20) {
  if (evenNum % 2 === 0) {
    // console.log(evenNum)
  }
  evenNum++;
}

// 5) Print the reverse of a given string using a for loop.

const string = "Abid Tanoli";
let reversedString = "";
for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}
// console.log(reversedString)

// 6) Write a function that adds two numbers and returns the result.

const addnum = (a, b) => a + b;
// console.log(addnum(3,5))
//

// 7) Write a function that returns the factorial of a number.

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5))

// 8) Write a function that checks if a given string is a palindrome (e.g., "madam").

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};
// console.log(isPalindrome("madam"))

// 9) Create an object student with the following properties:
// name, rollNo, marks, isPassed

const studentsObj = {
  name: "Abid Tanoli",
  rollNo: 241246,
  marks: 80,
  isPassed: true,
};
// console.log(studentsObj)

// 10) Access the properties of the student object using dot and bracket notation.

// used Object of Q-9
// console.log(studentsObj.name,studentsObj.rollNo,studentsObj.marks,studentsObj.isPassed)

// 11) Add a method inside the student object that prints:
// "Hello, I am [name]"

const student = {
  name: "Aquib",
  rollNo: 241246,
  marks: 99,
  isPassed: true,
  greet: function () {
    console.log(`Hello I am ${this.name}`);
  },
};
// student.greet()

// 12) Create a function that takes an object and prints all keys and values using a loop.

const obj = {
  name: "Abid Tanoli",
  rollNo: 241246,
  marks: 80,
  isPassed: true,
};
function objKeyValue(obj) {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
}
// objKeyValue(obj);

// 13) Create an array of your favorite fruits.

const fruites = ["apple", "banana", "mango"];
// console.log(fruites)

// 14) Add a new fruit to the array.

fruites.push("Orange");
// console.log(fruites)

// 15) Remove the last fruit from the array.

fruites.pop();
// console.log(fruites)

// 16) Check if "banana" is present in the array using .includes().

const isBanana = fruites.includes("banana");
// console.log(isBanana);

// 17) Create an array of numbers. Return a new array where each number is multiplied by 2.

const numbersArr = [1, 2, 3, 4, 5];
const multipliedArr = numbersArr.map((numbersArr) => numbersArr * 2);
// console.log(multipliedArr)

// 18) Create an array of ages. Return only those who are 18 or older.

const agesArr = [5, 10, 15, 20, 25, 30];
const adultAge = agesArr.filter((agesArr) => agesArr >= 18);
// console.log(adultAge);

// 19) Use .find() to get the first number greater than 10 from an array.

const num = [5, 10, 15, 20, 25, 30];
const firstGreater = num.find((num) => num > 10);
// console.log(firstGreater);

// 20) Use .forEach() to print every name from an array of names.

const students = [
  { name: "Ali", marks: 80 },
  { name: "Zara", marks: 95 },
  { name: "Umar", marks: 45 },
];
// students.forEach(students => console.log(students.name));

// 21) Use .map() to return an array of only student names.

// used const of Q-20
// const studentsName = students.map(students => console.log(students.name))

// 22) Use .filter() to return students who scored more than 50.

// used const of Q-20

// Method 1 for names and marks
const scoredMore50 = students.filter((student) => student.marks > 50);
// console.log(scoredMore50)

// Method 2 just for names
const scoredMore50Names = students
  .filter((student) => student.marks > 50)
  .map((student) => student.name);
// console.log(scoredMore50Names)

// 23) Use .find() to get the student whose name is "Zara".

// used const of Q-20
const getZara = students.find((student) => student.name === "Zara");
// console.log(getZara)

// 24) Use .forEach() to print each student’s name and marks.

// used const of Q-20
students.forEach((student) => {
  // console.log(`${student.name} : ${student.marks}`)
});

// 25) You have an array [2, 4, 6, 8]. Return a new array with each number squared.
// → Output: [4, 16, 36, 64]

const array = [2, 4, 6, 8];
const newArray = array.map((array) => array * array);
// console.log(newArray)

// 26) Given: ["Ali", "Zara", "Umar", "Ahmed"]. Display each name one by one.

const given = ["Ali", "Zara", "Umar", "Ahmed"];
given.forEach((name) => {
  // console.log(name)
});

// 27) From [12, 25, 17, 20, 16, 30], return only the ages above 18.

const age = [12, 25, 17, 20, 16, 30];
const newAge = age.filter((age) => age > 18);
// console.log(newAge)

// 28) Check if "apple" exists in the array ["banana", "mango", "grapes", "apple"].

const fruitesArry = ["banana", "mango", "grapes", "apple"];
const isPresentApple = fruitesArry.includes("apple");
// console.log(isPresentApple)

// 29) From the following list, find the first student who scored more than 90:
// [
//   { name: "Ali", marks: 75 },
//   { name: "Zara", marks: 92 },
//   { name: "Umar", marks: 85 }
// ]
const ObjOfStudents = [
  { name: "Ali", marks: 75 },
  { name: "Zara", marks: 92 },
  { name: "Umar", marks: 85 },
];
const topScored = ObjOfStudents.filter((student) => student.marks > 90);
// console.log(topScored)

// 30) You have an array [200, 150, 300, 100]. Return the total sum.
// → Output: 750

const arr = [200, 150, 300, 100];
const sumArr = arr.reduce((sum, num) => sum + num, 0);
// console.log(sumArr)

// 31) From this array:
// [
//   { id: 1, username: "ali123" },
//   { id: 2, username: "zara88" },
//   { id: 3, username: "umar_01" }
// ]
// Return a new array of only usernames.

const arrOfObj = [
  { id: 1, username: "ali123" },
  { id: 2, username: "zara88" },
  { id: 3, username: "umar_01" },
];
const userName = arrOfObj.map((user) => user.username);
// console.log(userName)

// 32) From [1, 2, 3, 4, 5, 6], return only odd numbers.
// → Output: [1, 3, 5]

const numArray = [1, 2, 3, 4, 5, 6];
const oddnum = numArray.filter((num) => num % 2 !== 0);
// console.log(oddnum)

// 33) Count how many vowels are present in the string "javascript".

const wordsString = "javascript";
const vowels = ["a", "e", "i", "o", "u"];
const countVowels = wordsString
  .split("")
  .filter((wordsString) => vowels.includes(wordsString)).length;
// console.log(countVowels)

// 34) Loop through this array and log:
// Task: [taskName] - Status: [Completed/Incomplete]
// [
//   { task: "Assignment", completed: true },
//   { task: "Homework", completed: false }
// ]

const tasks = [
  { task: "Assignment", completed: true },
  { task: "Homework", completed: false },
];

tasks.forEach((task) => {
  console.log(
    `${task.task} - Status: ${task.completed ? "Completed" : "Incomplete"}`
  );
});

// 35) From a list of employees, return a new array that adds a new field:
// "status": "active" to each object.

const employees = [
  { name: "Hassan", position: "Developer" },
  { name: "Ahmed", position: "Designer" },
  { name: "Abid", position: "Admin" },
  { name: "Sir Waqar Rana", position: "Teacher" },
];

const updatedEmployees = employees.map((employee) => ({...employee,status: "active"}));
console.log(updatedEmployees);
