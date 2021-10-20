let obj = {
    num: 2
  }
  let addToThis = function(...vals){
      let val = this.num + vals.reduce((acc, next)=>{return acc + next},0)
    return val;
  }
  
  console.log(addToThis.call(obj, 5))
  
  let arr=[1,2,3]
  console.log(addToThis.apply(obj, arr))
  
  var boundObj = addToThis.bind(obj)
  console.log(boundObj(1,2,3))
  