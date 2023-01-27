// LINEAR SEARCH:
// function linearSearch(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   // add whatever parameters you deem necessary - good luck!

//   console.log(linearSearch([10, 15, 20, 25, 30], 10))

// TIME COMPLEXITY:
// Best Case: O(1)
// Worst Case: O(N)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BINARY SEARCH:
// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
