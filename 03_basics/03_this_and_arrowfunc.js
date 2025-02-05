// This keyword simply refers to the context of the program/code only available in object

let obj1 = {
    username: "Shiv",
    age: 27,
    welcomeMessage: function(){
        console.log(`${this.username} is ${this.age} years old.`);
        //console.log(this);
        
    }
}


obj1.welcomeMessage()
obj1.username = "XYZ"
obj1.welcomeMessage()


//Arrow Function

let func = () => {
    console.log('This is an arrow function');
    
}
func()