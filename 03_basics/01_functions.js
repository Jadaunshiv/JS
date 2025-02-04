// Function

function addTwoNumbers(num1, num2) { //------> Parameters
    return num1 + num2
}

let result = addTwoNumbers(50, 20) //------> Arguments
//console.log(result);

//Imp Example

function isUserLoggedIn(username){
    if(!username){
        console.log("Please enter a username");        
    }
    else {
        return `${username} is logged in.`
    }
}

//console.log(isUserLoggedIn()) // if no arguments are given then output will be undefined
//console.log(isUserLoggedIn("Shiv"))

// function calculateVal(num1) {
//     return num1
// }

// console.log(calculateVal(50, 100, 150, 200)); //prints only 50 as num1 as taking 50 as the argument

// function calculateVal(...num1) { //using rest or spread operator(based on usage) we can pass multiple arguments in single parameter
//         return num1
//     }
    
// console.log(calculateVal(50, 100, 150, 200));

/*-------------------Objects in Function------------------------ */

let obj1 = {
    name: "Shiv",
    age: 27
}

function func1(objRef){
    console.log(`Name is ${objRef.name} and age is ${objRef.age}`);   
}

// func1(obj1) //method 1

// func1({
//     name: "abc",
//     age: 20
// }) //method 2 passing values directly 

/*----------------------Arrays in Function------------------- */

let arr1 = [10,20,30,40,50]

function func2(getArr){
    return getArr[2]
}

//console.log(func2(arr1)); //method 1
console.log(func2([10,20,50,30,60])); //method 2 passing values directly

