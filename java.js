
let arr1=[1,2,3,4,5,6,6,7,7]
let duplicate=arr1.filter((a, index)=>{
     arr1.indexOf(a)==index
     return a==index
}
)
console.log(duplicate)


let numbers=[1,3,6,8,4,4]
let result1=numbers.map (function(n){
 return n*2;
})
let result2= numbers.map( number1 => number1 * 2)

console.log(result1)
console.log(result2)