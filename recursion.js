///////////////////////////////////////////////////////////////////////////////////
// Recursive Version
// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   return countDown(num);
// }
// countDown(3);

// Iterative Version
// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done!");
// }

///////////////////////////////////////////////////////////////////////////////////

//EXAMPLE:
// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// sumRange(4);

///////////////////////////////////////////////////////////////////////////////////
// FACTORIAL ITERATIVE
// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }
// factorial(7)



//FACTORIAL RECURSIVE:
// function factorial(num) {
//   if (num === 1) return 1;
//   // Explanation:
//   //3 * factorial(2)
//   //2 * factorial(1)
//   //2 * 1
//   return num * factorial(num - 1);
// }

// console.log(factorial(3));
