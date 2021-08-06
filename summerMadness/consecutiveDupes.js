// https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
/*
Your task is to remove all consecutive duplicate words from a string, 
leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => {
    return s.split(" ").filter((word,i,arr) => word != arr[i - 1]).join(" ")
}