/*
    sum array in constant time?!?
    if you have a sorted continuious arr of integers 

    grab last number in the arr
    gauss' number
    lastnum + (lastnum + 1)/2
*/

const sumContiguousArr = function (arr) {
    const lastNum = arr[arr.length - 1]
    return lastNum + (lastNum + 1) / 2
}

console.log(sumContiguousArr([1,2,3,4,5,6,7,8,9]))
console.log(sumContiguousArr([1,2,3]))