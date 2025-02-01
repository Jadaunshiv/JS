// Arrays Functions

let arr1 = ["str1", "str2", "str3"]
let arr2 = ["str1", "str2", "str3"]

//arr1.push(arr2)
//console.log(arr1) //not giving expected output as the whole array as a single unit is been pushed into arr1

//let arr3 = arr1.concat(arr2)
//console.log(arr3) //giving expected output by instead of pushing array2 into array1 we merged both by using concat() 

// let arr4 = [...arr1, ...arr2]
// console.log(arr4); //spread() is used and functions same as concat() but can take multiple parameters or values and is more preferable than concat()

let sampleArray = [1,2,3,[4,5,6],7,[8,9,[10]]]
let anotherArray = sampleArray.flat(Infinity) //flat() returns all arrays which present in the array into a single array
console.log(anotherArray);

console.log(Array.from('Shiv')); //Array.from() converts string into an array from given value

let score1 = 100
let str2 = "shiv"
console.log(Array.of(score1, str2)); //Array.of() converts values/string multiple values into a single array 

