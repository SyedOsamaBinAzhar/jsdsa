//REFACTORING: Lets try to solve the problem by frequency counter approach + devise a plan

const validAnagram = (str1, str2) => {
  //1. let's create 2 objects for to strings to maintain each character and it's frequency and a flag to get the output true || false
  let str1Obj = {};
  let str2Obj = {};
  let flag = false;

  if (str1.length !== str2.length) return flag;
  if (str1.length === 0 || str2.length === 0) return flag;

  //2. Let's convert str1(rat) to an object with the keys and it's frequency -> {r:1, a:1, t:1}
  for (const element of str1) {
    str1Obj[element] = (str1Obj[element] || 0) + 1;
  }

  //3. Let's convert str1(car) to an object with the keys and it's frequency -> {c:1, a:1, r:1}
  for (const element of str2) {
    str2Obj[element] = (str2Obj[element] || 0) + 1;
  }

  //4. iterate on str1Obj and check if keyValue of str1Obj is the same in str2Obj if yes then flag = true else flag = false;
  for (const property in str1Obj) {
    if (str1Obj[property] === str2Obj[property]) flag = true;
    else flag = false;
  }
  return flag;
};

console.log(validAnagram("rat", "car"));

// Analyzing the SOLUTION 2:
// 1. Time complexity improved: O(N) because of 3 loop -> O(N + N + N)
// 2. arrays replaced with objects
// 3. for loop replaced with for in and for of loop.
// 4. if else 'blocks' removed.
// 5. Hence frequency counter approach provides a better solution.



function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))
// TIME COMPLEXITY: O(Nsquare)
// SPACE COMPLEXITY: O(1)


function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === 0) return [arr[left],arr[right]];
        else if(sum>0) right--;
        else left++;
    }
}
// TIME COMPLEXITY: O(N)
// SPACE COMPLEXITY: O(1)

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))
