// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength 
//– replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(input, len){
    return input.length <= len ? input : `${input.substring(0,len - 1)}...`
}
function truncate2(str, maxLength) {
    return str.length <= maxLength ? str : str.slice(0, maxLength - 1) + "..."
  }
console.log(truncate("What I'd like to tell on this topic is:", 20))
console.log(truncate("Hi everyone!", 20))
console.log(truncate("The quick brown fox jumps over the lazy dog",20))
console.log(truncate2("What I'd like to tell on this topic is:", 20))
console.log(truncate2("Hi everyone!", 20))