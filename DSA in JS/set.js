// Set
// set is a collection of unique elements.
let s = new Set([1,2,6,1,3,4,5]);
console.log(s);
// add element to set
s.add(100)
console.log(s);
// duplicate element will not be added
s.add(100)
console.log(s);

// delete element from set
s.delete(100)

//check size of set
console.log(s.size);

// delete whole set
s.clear()

// traverse
for(let item of s){
    console.log(item);
}