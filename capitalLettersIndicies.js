// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
function captialLettersIndicies(word){
    let arr = []
    for(let i = 0; i < word.length; i++){
        console.log(word[i])
        if(word[i] === word[i].toUpperCase()){
            arr = arr.concat(i)
        }
    }
    return arr
}

console.log(captialLettersIndicies('CodEWaRs'))