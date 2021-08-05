// https://www.codewars.com/kata/57eaeb9578748ff92a000009/solutions/javascript
function sumMix(x){
    return x.reduce((acc, next) => {
        return typeof next === 'number' ? next + acc : parseInt(next) + acc 
    },0)
}