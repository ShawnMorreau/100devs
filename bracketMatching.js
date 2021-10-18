/*
    Given a string of brackers [], {} or (), determine if 
    the string is valid. 
    Requirements:
    Every open must have a close 
    Must close in the proper order
*/
const brackets = {
    "{":"}",
    "[":"]",
    "(":")"
}
const KEYS = Object.keys(brackets)

const matchBrackets = str => {
    let stack = []
    for(element of str.split("")){
        if(KEYS.includes(element)){
            stack.unshift(element)
        }else{
            let topOfStack = stack.shift()
            if(brackets[topOfStack] !== element){
                return false
            }
        }
    }
    return true;
}

console.log(matchBrackets("{()}")) //valid
console.log(matchBrackets("{({)}"))//invalid
console.log(matchBrackets("{()})"))//invalid
console.log(matchBrackets("{()}[{({})}]"))//valid

/*
    What does this look like?
    Looks a lot like a stack
    Push bracket onto stack. If we encounter 
    a closing bracket pop whatever is on top
    of the stack and if they match. winner.
    else loser. 
*/