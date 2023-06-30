// Array

// Declaration

let arr = []

// Insertion

arr[0] = 1; // using index
arr.push(2); // using push method
arr.push(...[3,4,5,6,7,8,9,10]) // push elements of another array using spread operator
// arr.unshift(0) // Insert an element at the begning
// arr.splice(3, 0,"new") // it is a special method in arr used to update it
// console.log(arr);

// traverse
for (let index in arr){
    // console.log(index); // it traverse through index
}
for (let item of arr){
    // console.log(item); // it traverse through values
}
arr.forEach(element => {
    // console.log(element); // it also traverse through values
});



arr.map

// Deletion 

arr.pop() //delete from end
arr.shift() // delete from begning
delete arr[2] // delete at particular index it will make undefined at given index
console.log(typeof arr[2]); // undefined type of given index
arr[3] = undefined // directly assign undefined to arr

// Update

arr[4] = 1000 // we can directly change using index

// Search 

console.log(arr.indexOf(2));

// Sort an array
let arr2 = [1,5,2,7,9,4,3,8]
arr2.sort() // it sort the given arr
console.log(arr2);

// Slicing

arr.slice(1,5) // to iterate from start index to end index

// join method - it joins all element of array and returns a string
arr.join(" ")
// console.log(arr.join(" "))
// console.log(typeof arr.join(" "))