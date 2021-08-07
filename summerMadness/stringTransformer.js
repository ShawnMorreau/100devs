/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
*/

function stringTransformer(str) {
    let res = ""
    for(let i = 0; i < str.length; i++){
        res += str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase()
    }
    console.log(res.split(" ").reverse().join(" "))
}

stringTransformer("Example Input")