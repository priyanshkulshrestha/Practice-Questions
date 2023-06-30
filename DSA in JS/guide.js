// Debouncing and Throttling in JavaScript

// Debouncing
// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.


// Throttling
// Throttling is a programming practice that ensure that the function is called at most once in a given time interval. In other words, it limits the rate at which a function can fire.

// Debouncing vs Throttling
// Debouncing and throttling are two ways to throttle down the number of events that occur as the user scrolls through a page. Debouncing and throttling are two ways to throttle down the number of events that occur as the user scrolls through a page. Debouncing groups a series of sequential events into one event, throttling enforces a maximum number of times a function can be called over time.


// Call bind and apply
// Call, apply and bind are used to set the this keyword independent of how a function is called. They are used to borrow methods from other objects. They are also used to set the this keyword for methods on one object to refer to another object.


person1 = {
    name: 'Priyansh',
    secName: 'Kulshrestha',
    age: 21,
    details : function (hometown) {
        console.log( this.name + ' ' + this.secName + '  is ' + this.age + ' years old. Hometown is ' + hometown);
    }
}

person2 = {
    name: 'Divyanshi',
    secName: 'Kulshrestha',
    age: 19,
}

person1.details('skb');

person1.details.call(person2, 'ghz');
person1.details.apply(person2, ['ghz']);
let newBindFunc = person1.details.bind(person2, 'ghz');
newBindFunc();

// currying

function multiply(a, b) {
    return a*b;
}

let miltiplyByTwo = multiply.bind(this, 2);

console.log(miltiplyByTwo(4));

let sum = function (a){
    return function (b) {
            console.log(a+b);
    }
}

sum(2)(9);
sum(2, 8);

// Ques - sum1(1)(2)(3)(4)....(n)() write a function to do this

function sum1(a) {
    return function (b){
        if(b){
            return sum1(a+b);
        }
        return a;
    }
}

console.log(sum1(1)(2)(3)(4)(5)());

// Prototypes in JS

// Every object in JS has a prototype property, which makes inheritance possible in JS. The prototype property of an object is where we put methods and properties that we want other objects to inherit. The constructor's prototype property is not the prototype of the Constructor itself, it's the prototype of all instances that are created through it.