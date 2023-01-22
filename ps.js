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
// function areThereDuplicates(...elements) {
//   let left = 0;
//   let right = elements.length - 1;
//   if (elements.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)){
//     elements.sort()
//   }
//     while (left < right) {
//       if (elements[left] === elements[right]) {
//         // console.log("true here")
//         return true;
//       } else {
//         left++;
//         // right--;
//       }
//     }
//   return false;
// }

// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates("a", "b", "c", "a"));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUESTION:3
// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine
// if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//SOLUTION:
function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let flag = false;
  if (arr.length === 0) return flag;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if(avg === num){
        return flag=true;
    } else if(avg>num){
        right--;
    } else {
        left++;
    }
  }

  return false;
}

console.log(averagePair([-1,0,3,4,5,6], 4.1));
