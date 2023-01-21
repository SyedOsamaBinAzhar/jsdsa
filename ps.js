//problem solving for section#6 problem solving patters.

// 1. frequency counter approach
// 2. sliding window approach
// 3. multiple pointer approach
// 4. divide and conquer approach

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//QUESTION: 1
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency
// of digits.

// Your solution MUST have the following complexities: Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

//SOLUTION:
// function sameFrequency(str1, str2) {
//   str1 = str1.toString();
//   str2 = str2.toString();
//   let str1Obj = {};
//   let str2Obj = {};
//   let flag = false;

//   if (str1.length !== str2.length) return flag;
//   else if (str1.length === 0 && str2.length === 0) return !flag;

//   for (const element of str1) {
//     str1Obj[element] = (str1Obj[element] || 0) + 1;
//   }

//   for (const element of str2) {
//     str2Obj[element] = (str2Obj[element] || 0) + 1;
//   }

//   for (const property in str1Obj) {
//     if (str1Obj[property] === str2Obj[property]) flag = true;
//     else return flag = false;
//   }

//   return flag;
// }

// console.log(sameFrequency(3589578, 5879385));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUESTION:2
// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks
// whether there are any duplicates among the arguments passed in.  You can solve this using the frequency
// counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// SOLUTION:
