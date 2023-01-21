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

let instructor = {
  firstName: "osama",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};
