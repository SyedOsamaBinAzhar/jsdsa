//checking performance of both algos
// function addUpto(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let t1 = performance.now()
// addUpto(100000000)
// let t2 = performance.now()
// console.log("time elapsed in seconds " + (t2-t1)/1000);

//THIS CODE IS QUICKER
// function addUpto(n) {
//   return (n * (n + 1)) / 2;
// }

// let t1 = performance.now();
// addUpto(100000000);
// let t2 = performance.now();
// console.log("time elapsed in seconds " + (t2 - t1) / 1000);

// function countUpAndDown(n) {
//   console.log("Going up");
//   for (let i = 1; i < n; i++) {
//     //BIGO is O(n)
//     console.log(i)
//   }

//   for (let j = n-1; j >= 0; j--) {
//     //BIGO is O(n)
//     console.log(j)
//   }
//   console.log("Backdown bye!");
// }

// // Total Big O is O(n)
// countUpAndDown(6)

// function printAllPairs(n) {
//   for (var i = 0; i < n; i++) {
//     // BIGO is O(n)
//     for (var j = 0; j < n; j++) {
//       // BIGO is O(n)
//       console.log(i, j);
//     }
//   }
// }

// // Total Big O is O(n * n) = O(n2)
// console.log(printAllPairs(6));

// function logAtLeast5(n) {
//   for (var i = 1; i <= Math.max(5,n); i++) {
//     //the code runs till n if n is greater than 5.
//     //means the BIG O is O(n)
//     console.log(i)
//   }
// }

// function logAtMostt5(n) {
//     for (var i = 1; i <= Math.min(5,n); i++) {
//       //the code runs till 5 even if n becomes 10000.
//       //means the BIG O is O(1)
//       console.log(i)
//     }
//   }

function sum(arr) {
  //we're not gonna include arr in space complexity because arr is an input.
  //space complexity for total is constant
  let total = 0;
  //space complexity for i is constant
  for (let i = 1; i <= arr.length; i++) {
    total += sum[i];
  }
  return total;
}

//so, total space complexity is O(n)

function doubleArr(arr) {
  //we're not gonna include arr in space complexity because arr is an input.
  let newArr = [];
  //space complexity for i is constant
  for (let i = 1; i <= arr.length; i++) {
    //we are allocation new memory locations for newArr[i] -> so the space complexity increases.
    newArr.push(2 * arr[i]);
    // the space complexity would be O(n+1) = O(n)
  }
  return newArr;
}

// let instructor = {
//   firstName: "osama",
//   isInstructor: true,
//   favoriteNumbers: [1, 2, 3, 4],
// };

// Frequency counter pattern
// QUESTION
//given two strings write a function to determine if the second string is the anagram of the first, an anagram is a word,phase
//or name forming by rearranging the letters of another such as cinema -> iceman

//ANSWER

// now solving this by using devise the plan
// 1. Do you understand the problem? Yes
// 2. input types? two strings
// 3. output type? boolean
// 4. Enough inputs to solve the problem? Yes
// 5. sample inputs and outputs?
// validAnagram('','')  -> returns true
// validAnagram('aaz','zza')  -> returns false
// validAnagram('rat','car')  -> returns false
// validAnagram('anagram','nagaram')  -> returns true
// validAnagram('qwerty','qeywrt')  -> returns true

// 6. Breaking problem in to parts.
// SOLUTION:1

// 1. write a function named validAnagram which takes two strings as an argument
const validAnagram = (str1, str2) => {
  // 2. convert the strings into an array
  let arr1 = [...str1];
  let arr2 = [...str2];

  // 3. iterate on arr1 and then iterate on arr2 and check if the arr2 contains arr1[i]
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      // console.log())
      // 4. if arr2 contains the value then get the index of the value
      let index = arr2.indexOf(arr1[i]);
      // 5. remove the element from arr2 which is found
      arr2.splice(index, 1);
    }
  }
  // 6. if length of arr2 is not equal to zero that means that arr2 has elements left after removing every element that
  // was present in arr1 -> that proves not an anagram
  if (arr2.length !== 0) {
    return false;
  } else {
    // 7. if length of arr2 is equal to zero that means that arr2 has no elements left after removing every element that
    // was present in arr1 -> that proves an anagram
    return true;
  }
};

//8.  call the function and pass strings to it.
console.log(validAnagram("ab", "aba"));


// Analyzing the SOLUTION 1:
// 1. Poor Time complexity: O(N square) because of for loop and indexOf method inside for loop -> O(n*n)
// 2. created arrays which occupies more space.
// 3. for loop can be replaced with forEach/for in loop to improve the syntax
// 4. if else 'blocks' can be removed.
// 5. maybe frequency counter approach can be used to solve the problem.




