function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
return innerFunction;
}

let add5to = outerFunction(5);

console.log(add5to(10))

console.log(outerFunction(8)(9));