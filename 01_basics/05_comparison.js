/*----------------------Basic Comparison Operators------------------------- */
// > (Greater Than)
// < (Less Than)
// >= (Greater than or Equals to)
// <= (Less than or Equals to)
// != (Not Equals to)
// == (Equals to)
// === (Strictly equals to or Strict Comparison)

// Misc

//console.log("2" > 1) output is true as JavaScript automatically converted "2" into a number and compares it to another value(not a good practice)
//console.log(Number("2") > 1) same as above but we converted string to number first than compares the value(best practice)

// console.log(null == 0) false
// console.log(null >= 0) true
// console.log(null <= 0) true
// console.log(null != 0) true

// console.log(undefined == 0) false
// console.log(undefined >= 0) false
// console.log(undefined <= 0) false
// console.log(undefined != 0) true

// console.log(undefined == null) true
// console.log(undefined >= null) false
// console.log(undefined <= null) false
// console.log(undefined != null) false

// console.log("2" === 2) false as its strictly checking the types of of the values
// console.log(2 === 2) true as both of the types are same(numbers)