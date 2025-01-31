//Arrays

let arr1 = [1,2,3,4,5] //method 1 of declaring an array
// console.log(arr1);
// console.log(arr1[3]);
// console.log(typeof arr1);

let arr2 = new Array(1,2,3,4,5) //method 2 of declaring an array
// console.log(arr2)


/*-------------------Array Methods----------------------- */

// arr1.push(6)
// arr1.push(7) //adds an element in array
// arr1.pop() //removes the last element from the array 
// arr1.unshift(0) //adds an element at the beginning of the array
// arr1.shift() //removes the first element of the array

// console.log(arr1.includes(3)); //checks whether an element is present in array or not
// console.log(arr1.indexOf(4)); //displays at what index does an element is present in the array

// let tempArr = arr1.join() //displays array elements in the form of string


// console.log(arr1)
// console.log(tempArr);


let myArr = [1,2,3,4,5,6]

console.log(myArr)
console.log(myArr.slice(1,3));
console.log(myArr)
console.log(myArr.splice(1,3));
console.log(myArr)

//Important: when slice() function is performed upon the copy of the array but when splice() function is performed it changes the original array
