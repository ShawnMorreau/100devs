function duplicateEncode(word){
    const string = word.split("").map(el => word.indexOf(el.toLowerCase()) === word.lastIndexOf(el.toLowerCase()) ? "(" : ")")

    console.log(string)
  }

  duplicateEncode("(( @")
  duplicateEncode("Success")
  duplicateEncode("recede")
  duplicateEncode("din")