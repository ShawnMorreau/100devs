function checkForImposterSyndrome(input){
    return input.includes('not ready') || input.includes("can't interview yet")
}

console.log(checkForImposterSyndrome("i am not ready yet"), true)
console.log(checkForImposterSyndrome("i am ready now"), false)


