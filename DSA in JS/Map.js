
// Map
// Map is an unorderd collection of key-value pair. 

// Declaration
let m = new Map([['a',1],['b',2]])

// check size of map
    console.log(m.size);

// Insertion 
m.set("c", 3)

// read a property of map
console.log(m.get("c"))
console.log(m.has("c"))

// travrse
for(let [key, value] of m){
    console.log(`${key}: ${value}`);
}

m.forEach((key, value)=>{
    console.log(key, value);
})

//delete a property
m.delete("c");


console.log(m);
// delete whole map 
m.clear()
