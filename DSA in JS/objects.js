//Object in JS
//object is an unordered collection of key value pairs, key must be string or symbol, value can be anything

//defining object
let obj = {
    name: "priyansh",
    age: 21,
    male: true,
    hobby: ["coding", "gaming", "reading"],
    printName: function(){
        console.log(this.name);
    }
}
console.log(obj);
//accessing property of object
console.log(obj.name);
console.log(obj["age"]);

//adding property to object
obj["favColor"] = "blue";
obj.favFood = "pizza";
console.log(obj);

//deleting property of object
delete obj.hobby
console.log(obj);

//object function
obj.printName();