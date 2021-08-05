/*
Complete the square sum function so that it squares each number passed into it and 
then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

https://www.codewars.com/kata/515e271a311df0350d00000f/javascript
*/

//return the sum of squared numbers
function squareSum(arr){
    return arr.reduce((acc, next) => next*next + acc,0)
}

function squareSumv2(arr){
    let sum = 0
    arr.forEach(val => sum+= val*val)
    return sum
}

console.log(squareSum([1,2,2])) //9
console.log(squareSum([2,2,2])) //12
console.log(squareSum([0,6,2])) //40
console.log(squareSum([1,1,1])) //3

console.log(squareSumv2([1,2,2])) //9
console.log(squareSumv2([2,2,2])) //12
console.log(squareSumv2([0,6,2])) //40
console.log(squareSumv2([1,1,1])) //3
