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
