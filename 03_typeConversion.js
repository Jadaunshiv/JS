//Case 1
let marks = 40
console.log(typeof marks) //number

// Case 2
let marks2 = "44"
console.log(typeof marks2) //string

// Type Conversion String to Number
let marks3 = "60"
let temp = Number(marks3)
console.log(typeof temp) //string is now converted to number

// Type Conversion Number to String
let mark = 54
let tempVar = String(mark)
console.log(typeof tempVar) //number is now converted to string

//Misc
let marks4 = "33edss"
let temp2 = Number(marks4)
console.log(typeof temp2) //string is converted to number but it isn't a number
console.log(temp2) //output is showing it's NaN(Not a Number) 