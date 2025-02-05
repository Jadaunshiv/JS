let a = 10; //Global scope
const b = 20; //Global scope

{
    let a = 10;
    const b = 20;
    var c = 30;
}

//console.log(a); Not working as it's local/block scope
//console.log(b); Not working as it's local/block scope
//console.log(c); Working instead of being local/block scope that's why var is not used 

console.log(a); //Working now as it's now globally scoped
console.log(b); //Working now as it's now globally scoped


foo(20)
function foo(num1){
    console.log(num1)
} //Hoisting is working on normal functions


sampleName(30)
let sampleName = function foo2(num2){
    console.log(num2);
    
} //Hoisting isn't working before initialization
