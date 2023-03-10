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
// function averagePair(arr, num) {
//   let left = 0;
//   let right = arr.length - 1;
//   let flag = false;
//   if (arr.length === 0) return flag;

//   while (left < right) {
//     let avg = (arr[left] + arr[right]) / 2;
//     if(avg === num){
//         return flag=true;
//     } else if(avg>num){
//         right--;
//     } else {
//         left++;
//     }
//   }

//   return false;
// }

// console.log(averagePair([-1,0,3,4,5,6], 4.1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUESTION:4

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string 
// form a subsequence of the characters in the second string. In other words, the function should check whether the 
// characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

//SOLUTION:1
// isSubsequence Solution - Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

//SOLUTION:2
// isSubsequence Solution - Recursive but not O(1) Space
// function isSubsequence(str1, str2) {
//   if (str1.length === 0) return true;
//   if (str2.length === 0) return false;
//   if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//   return isSubsequence(str1, str2.slice(1));
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// QUESTION:5
// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to 
// the integer passed to the function. If there isn't one, return 0 instead.

// Examples:
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// Time Complexity - O(n)
// Space Complexity - O(1)

// SOLUTION:
function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION:6

// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

//SOLUTION: 
function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// QUESTION:7

// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring 
// with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

//SOLUTION:
// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;
   
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       if (seen[char]) {
//         start = Math.max(start, seen[char]);
//       }
//       // index - beginning of substring + 1 (to include current in count)
//       longest = Math.max(longest, i - start + 1);
//       // store the index of the next char so as to not double count
//       seen[char] = i + 1;
//     }
//     return longest;
//   }