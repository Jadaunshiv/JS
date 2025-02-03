//nesting in objects

let user = {
    userName: {
        fullName: {
            firstname: "Shivam",
            lastname: "Jadaun"
        }
    }
}

//console.log(user.userName.fullName);

let user2 = {
    name: "abc",
    "fullname": "abc def",
    age: 24,
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Thursday", "Friday"]
}


//combining objects

// let obj1 = {1: "a", 2: "b"}
// let obj2 = {3: "a", 4: "b"}

// let obj3 = Object.assign({}, obj1, obj2) //method 1 using assign()
// let obj4 = {...obj1, ...obj2} //method 2 using spread operator
// console.log(obj3);
// console.log(obj4);

// console.log(Object.keys(user2)); //logs out keys present in the object
// console.log(Object.values(user2)); //logs out values of the keys of the object
// console.log(Object.entries(user2)); //logs out keys and it's values in a separate array
// console.log(user2.hasOwnProperty('isLoggedIn')); //tells whether a property is available in object or not

/*--------------------Object Destructuring------------------------ */

let sampleObject = {
    name: "Shiv",
    contactnumber: 8045424552,
    city: "Bulandshahr"
}

let {city} = sampleObject
console.log(city);
let {contactnumber: number} = sampleObject
console.log(number);




