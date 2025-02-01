//Object literal

// decalring a symbol in an object and logging it out
let mySym = Symbol("sampleKey")


let user = {
    name: "abc",
    "fullname": "abc def",
    [mySym]: "sampleKey",
    age: 24,
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Thursday", "Friday"]
}

// console.log(user.name) //method 1 of printing object
// console.log(user["fullname"]) //method 2 of printing object(more preferable)
// console.log(user["lastLoginDays"]);
// console.log(user[mySym]) //logged out symbol through an object

user.name = "Shiv" //updates key value in the object
// Object.freeze(user) //freezes the object or no further changes can be made in the object now
// user.name = "Sample" //this will not get updated
// console.log(user);

//Function in an object

user.greeting = function() {
    console.log("Hello User!");
    
}
user.greetingTwo = function() {
    console.log(`Hello User!, ${this.name}`);
    
}

console.log(user.greeting());
console.log(user.greetingTwo());
