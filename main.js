//111
// let x = 5;
// let y = 3;
// let [Sx , Sy] = [y,x]

// console.log(Sx)
// console.log(Sy)

////2
// function GetMaxandMinElementInAnyArray(arr){
//     let max =Math.max(...arr)
//     let min =Math.min(...arr)
//     return [max,min]
// }



// let arr = [1,2,3,4,5,6,0,7,8,9]

// var result = GetMaxandMinElementInAnyArray(arr)
// console.log(result)

///3

var fruits = ["apple", "strawberry", "banana", "orange",
    "mango"]

//1

//  var result = fruits.every((fruit)=> typeof(fruit)===typeof"")
// console.log(result)

//2
//  var result = fruits.some((fruit)=> fruit.startsWith('a'))
// console.log(result)

//3
// var result = fruits.filter((fruit)=>fruit.startsWith('a') || fruit.startsWith('b'))
// console.log(result)

//4
// var result = fruits.map(()=>"apple")
// // console.log(result)

// //5
// result.forEach((fruit)=>
//     console.log(fruit)


//4
// function cloneArray(arr){

//   var Collection = arr.filter(num=>{
//     if(num > 0)
//         return num;
//     }

// )
//   return Collection;
// }

// var arr = [-10,11,-21,3,-5,2,-15,2,-8,3,1,6]
// var result =cloneArray(arr)
// console.log(result)

//5
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((next, pervouis) => {
//   return next + pervouis;
// }, 0);

// console.log(sum)


//6
// var sum = fruits.map(furit=>furit.toUpperCase())
// console.log(sum)

// 7
// function isLowerOrUpper(str){

//     if(str==str.toLowerCase())
//         return `${str} is lower case`
//     else
//      return `${str} is UpperCase case`
// }

// var result = isLowerOrUpper("fjfj")
// console.log(result)


//8

var x  = (arr,len)=> arr.filter(element=>element.length > len)




var result = x(fruits,5)
console.log(result)