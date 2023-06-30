var isPowerOfTwo = function(n) {

    for(let i=0;i<30;i++){
        console.log(Math.pow(2,i))
        if(Math.pow(2,i) == n){
            return 1;
        }
    }
    return 0;
};

let n = 16;
console.log(isPowerOfTwo(n));


