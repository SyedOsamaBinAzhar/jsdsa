console.log([6,4,15,10].sort())
console.log(["Banana","Zebra","Apple","Bread","Fruits"].sort())

//built in sort-js
function numberCompare(num1, num2){
    return num1 - num2
}
console.log([6,4,15,10].sort(numberCompare))