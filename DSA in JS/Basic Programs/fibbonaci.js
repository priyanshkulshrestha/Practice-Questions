//Fibbonaci 

let fibbonaciIterative = (n) => {
    let a = 1, b = 1
    let ans;
    if(n == 1 || n == 2)
        ans = 1;
    for(let i=3;i<=n;i++){
        ans = a + b;
        a = b;
        b = ans;
    }
    return ans;
}

// Recursive

let fibbonaciRecursive = (n)=> {
    if(n <= 1){
        return n;
    }
    else{
        return fibbonaciRecursive(n-1) + fibbonaciRecursive(n-2)
    }
}

console.log(fibbonaciRecursive(8));
console.log(fibbonaciIterative(8));


//////////////////////////////////////////////////////////////////////////////////////////

// one line challanage

let fibbonaciRecursiveOne = (n) => (n<=1) ?  n: (fibbonaciRecursive(n-1) + fibbonaciRecursive(n-2))

console.log(fibbonaciRecursiveOne(10));

//////////////////////////////////////////////////////////////////////////////////////////

// let fibbonaci = () => {
//     let a = 1, b = 1
//     let ans;
//     for(let i=3;i<=9999;i++){
//         ans = a + b;
//         a = b;
//         b = ans;
//         console.log(ans);
//         if(ans > 9999)
//             break;
//     }
// }
// fibbonaci();