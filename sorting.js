// console.log([6,4,15,10].sort())
// console.log(["Banana","Zebra","Apple","Bread","Fruits"].sort())

// //built in sort-js
// function numberCompare(num1, num2){
//     return num1 - num2
// }
// console.log([6,4,15,10].sort(numberCompare))

// UNOPTIMIZED VERSION OF BUBBLE SORT
//[29,10,14,30,37,14,18]
//[10,14,29,30,14,18,37]
//[10,14,29,14,18,30,37]
//[10,14,14,18,29,30,37]

// function bubbleSort(arr) {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// ES2015 Version
//   function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//     return arr;
//   }

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// Optimized BubbleSort with noSwaps-> breaks if the array is sorted and
//there are still iterations to be done -> means optimization
// function bubbleSort(arr) {
//   var noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// TIME COMPLEXITY:
// Worst case: O(N-square)
// Best Case: O(N)

// //SELECTION SORT:
// //1. find the minimum value and swap it with the start.
// //2. repeat step 1 to sort the array
// function selectionSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var lowest = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       //swapping the smallest element to the start
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }

// console.log(selectionSort([0,2,34,22,10,19,17]))

// TIME COMPLEXITY: O(Nsquare)

//INSERTION SORT:
// function insertionSort(arr) {
//   var currentVal;
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j]; 
//       console.log(arr);
//       console.log(j);
//     }
//     console.log(j);

//     arr[j + 1] = currentVal; //
//     console.log(arr);
//   }
//   return arr;
// }

// insertionSort([2, 1, 9, 76, 4]);

// TIME COMPLEXITY:
// Worst Case: O(Nsquare)
// Best Case: O(Nsquare)

