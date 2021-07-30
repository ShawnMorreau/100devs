// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//P: Should I only expect a string? Will there ever be an empty string? Will these words in the string be separated by a delimiter? Will there always be a space? Will there be any special characters in the given string? Will all the words in the string be the same case? 
//R: Will this return a string? Will that string contain words that are just unique consecutive partners?
//E: "one one two three three three four" => "one two three four"
//P:
/*
  make a function that takes in a string of space delimited words
  split string into an array of words
  create a set to remove duplicates
  join to make a string and return 
 */
function dup(input) {
    res = ""
    input.split(" ").forEach(el => {
        if(!res.includes(el)){
            res += `${el} `
        }
    });
    console.log(res)
}

function dup2(input){
    return input.split(' ').filter((word, i, arr) => word !== arr[i+1]).join(' ')
}
dup("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")
dup("a b c abc a b d e abc b")
console.log(dup2("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"))
console.log(dup2("a b c abc a b d e abc b"))