/*
    If I was asked to sort a list. What do?
*/

const solveWithJS = arr => {
    console.log(arr.sort((a, b) => a - b).reverse())
}

const solveWithBrute = arr => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[i]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
}
let arr = [1, 5, 2, 1, 2, 9]
// solveWithJS(arr)
solveWithBrute(arr)

