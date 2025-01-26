// console.log(2 + 3) //addition operation
// console.log(2 - 3) //subtraction operation
// console.log(2 * 3) //multiplication operation
// console.log(6 / 3) //division operation(gives quotient)
// console.log(6 % 3) //modulo operation(gives remainder)
// console.log(2 ** 3) //power operation

// console.log("1" + 2) // output is 12 as first value is string
// console.log(1 + "2") // output is 12 as second value is string
// console.log(1 + 2) // output is 3 as both values are numbers
 /*--------------------------------------------------------------- */

//  Important note as code executes from left to right the output will differ


// console.log(1 + "2" + 3) // output is 123 as second value is string so all values are concatenated
// console.log("1" + 2 + 3) // output is 123 as first value is string so all values are concatenated
// console.log(1 + 2 + "3") // output is 33 as both first and second value are numbers so they get added and last value which is string gets concatenated

// console.log(true) //logs out true 
// console.log(+true) //logs out 1 as the value of true(P.S. not accepted to write this )
// console.log(-true) //logs out -1
// console.log(+"") //logs out 0 as the value of empty string
// console.log(+"text") //Not a Number

let a = 0
let b = ++a
console.log(`a: ${a}, b: ${b}`) //output is a:1, b:1 due to prefix increment(meaning value is returned after incrementing)

let c= 0
let d = c++
console.log(`c: ${c}, d: ${d}`) //output is c:1, d:0 due to postfix increment(meaning value is returned before incrementing)