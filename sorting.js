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

function bubbleSort(arr){
    for(var i = arr.length; i > 0; i--){
      for(var j = 0; j < i - 1; j++){
        console.log(arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;         
        }
      }
    }
    return arr;
  }
  
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
  
  bubbleSort([8,1,2,3,4,5,6,7]);
