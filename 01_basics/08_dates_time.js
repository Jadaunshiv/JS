//Dates

let todaysDate = new Date() //type of date is OBJECT
// console.log(todaysDate)
// console.log(todaysDate.toLocaleString())
// console.log(todaysDate.toDateString())

// let randomDate = new Date(2024, 5, 15, 7, 6)
// let randomDate = new Date("01-15-2024")
// console.log(randomDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp.toLocaleString());

console.log(Math.floor(Date.now()/1000)) //converting ms into s



