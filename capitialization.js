//Create a function that returns the capitilization of a name. No Arrays, No REGEX!
//leon ~> Leon
//bob ~> Bob
//John ~> John

function capitialize(input){
    console.log(input.substring(0,1).toUpperCase() + input.substring(1, input.length))
}
function c2(input){
    console.log(input.charAt(0).toUpperCase() + input.slice(1))
}
capitialize("leon")
capitialize("shawn")
capitialize("john")
capitialize("Kahn")

c2("leon")
c2("john")
c2("person")