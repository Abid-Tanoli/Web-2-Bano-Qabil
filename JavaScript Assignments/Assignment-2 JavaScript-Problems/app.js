// JavaScript Logical Practice Questions (Mixed Topics)
// ====================================================

// 1. Unique Words Counter
// ------------------------
// Input: A string
const text = "JavaScript is great and JavaScript is powerful";
// Task: Return an object with each unique word and its count.

function countUniqueWords(str) {
  const words = str.toLowerCase().split(" ");
  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });
  return wordCount;
}
// console.log(countUniqueWords(text));


// 2. Group Students by Class
// ---------------------------
// Input: Array of objects
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];
// Task: Return an object like { "10th": [...], "9th": [...] }

const groupByClass = (students) =>
  students.reduce((acc, student) => {
    (acc[student.class] ||= []).push(student);
    return acc;
  }, {});

  // console.log(groupByClass(students));

// 3. Filter Products by Price Range
// ----------------------------------
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];
// Task: Create a function that takes min and max price and returns filtered products

function filterProductsByPrice(products, minPrice, maxPrice) {
  return products
    .filter((product) => product.price >= minPrice && product.price <= maxPrice)
    .sort((a, b) => a.price - b.price);
}
// console.log(filterProductsByPrice(products, 0, 1000));

// 4. Check Palindrome Using Function
// -----------------------------------
// Input: A string like "madam"
// Task: Check if it is palindrome using a function

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
// console.log(isPalindrome("madam"));


// 5. Flatten Array
// -----------------
const nestedArray = [1, [2, [3, 4]], 5];
// Task: Flatten the array to [1, 2, 3, 4, 5] using recursion or array methods

const flattenArray = nestedArray.flat(2);
// console.log(flattenArray);

// 6. Total Salary Calculation (Using Reduce)
// -------------------------------------------
const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];
// Task: Get total salary of all employees

const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
// console.log(totalSalary);


// 10. Sum of All Even Numbers in Nested Array
// --------------------------------------------
const data = [1, 2, [4, 5, [6, 8]], 10];
// Task: Return sum of all even numbers, regardless of depth

const sum = data.flat(2).filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
// console.log(sum);

// 11. Rest Operator in Function
// ------------------------------
// Task: Write a function that takes any number of numbers and returns their average

function average(...numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}
// console.log(average(10, 20, 30, 40, 50));


// 12. Frequency Count with Spread
// -------------------------------
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Task: Count how many times each fruit occurred using spread & reduce

function countFruits(arr) {
  return arr.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});
}
// console.log(countFruits(arr));

// 13. Toggle Status
// ------------------
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
// Task: Write a function that toggles done status of a task by id

function toggleTaskStatus(tasks, id) {
  return tasks.map(task =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}
// console.log(toggleTaskStatus(tasks, 1), toggleTaskStatus(tasks, 2));


// 14. Sort by Name Length
// ------------------------
const names = ["Ali", "Zara", "Ahmed", "Usman", "Abid", "Umi"];
// Task: Sort names by length in ascending order

const sortedNames = names.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }
  return a.localeCompare(b);
});
// console.log(sortedNames);

// Assignment 2 
// last date 30 july
