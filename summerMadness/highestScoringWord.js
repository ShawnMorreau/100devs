/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the 
original string.

All letters will be lowercase and all inputs will be valid.

*/
const letters = "abcdefghijklmnopqrstuvwxyz"
function high(x){
    let highest = {word:"",score:0}
    let count = 0
    x.split(" ").forEach(word => {
        word.split("").forEach(letter => {
            count += letters.indexOf(letter) + 1
        })
        if(count > highest.score){highest.word = word; highest.score = count}
        count = 0
    })
    return highest.word
}
console.log(high('man i need a taxi up to ubud'))