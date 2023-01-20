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

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    // BIGO is O(n)
    for (var j = 0; j < n; j++) {
      // BIGO is O(n)
      console.log(i, j);
    }
  }
}

// Total Big O is O(n * n) = O(n2)
console.log(printAllPairs(6));
