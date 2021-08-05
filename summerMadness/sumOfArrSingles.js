// https://www.codewars.com/kata/59f11118a5e129e591000134
/*
In this Kata, you will be given an array of numbers in which two numbers 
occur once and the rest occur only twice. Your task will be to return the 
sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 
occur once, and their sum is 15. Every other number occurs twice.
*/
function repeats(arr) {
    let count = 0
    let sum = 0
    let ptr = arr.length - 1
    let idxOfPtr
    arr.forEach((val, i, arr) => {
        if(count == 2) arr.slice(1)
        idxOfPtr = arr.indexOf(arr[ptr - i])
        if(idxOfPtr == ptr - i && typeof arr[ptr-i] !== "string"){
            count++
            sum += arr[ptr-i]
        }else{
            arr[idxOfPtr] = arr[idxOfPtr].toString()
        }
    })
    return sum
}

function betterRepeats(arr) {
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((acc,next)=> acc + next, 0)
}

console.log(repeats([9, 10, 19, 13, 19, 13]))//19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]))//12
console.log(betterRepeats([9, 10, 19, 13, 19, 13]))//19
console.log(betterRepeats([16, 0, 11, 4, 8, 16, 0, 11]))//12
