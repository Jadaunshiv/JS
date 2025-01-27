/*-------------------------String Declaration--------------------- */

let str = "This is a String" //Method 1
let str2 = new String("This is a String") //Method 2 but this creates a string object
let str3 = "    String    "
// String Methods
console.log(str2.toUpperCase()) //converts the string into uppercase
console.log(str2.charAt(6)) //displays character at specific index
console.log(str2.indexOf("i")) //displays the index of the character
console.log(str2.substring(0,4)) //creates a substring after giving a starting index and an ending index(this is not included)
console.log(str.slice(-15,4)) //functionality of slice is same as substring but in slice -ve values can be provided
console.log(str3)
console.log(str3.trim()) //removes or trims the extra(from front and from end) spaces from the string
console.log(str2.replace("a", "-")) //replaces the character to the desirable character
console.log(str3.includes("is")) //tells whether a character is present in the string or not
console.log(str2.split(" ")) //creates the string into an array based on the searching pattern provided by user




// And Many more.