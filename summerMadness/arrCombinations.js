/*
https://www.codewars.com/kata/59e66e48fc3c499ec5000103

In this Kata, you will be given an array of arrays and your task will be to 
return the number of unique arrays that can be formed by picking exactly one 
element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites.
 They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, 
since the extra outcomes are just duplicates.
*/
function solve(arr, n = 0,res=[], current = []){
    if (n === arr.length) res.push(current)
    else arr[n].forEach(item => solve(arr, n+1,res,[...current,item]))
    return res
}
function solvev2(arr){
    let set
    let subArrCounts = [] 
    arr.forEach(sub => {
        set = new Set(sub)
        subArrCounts.push(set.size)
    })
    return subArrCounts.reduce((acc, next)=> (
        acc*next
    ),1)
}
console.log(solvev2([[1,2],[4],[5,6]]))
console.log(solvev2([[1,2],[4,4],[5,6,6]]))
console.log(solvev2([[1,2,4],[2,4],[6]]))