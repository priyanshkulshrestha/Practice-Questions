// var reverse = function(x) {
//     let num = x;
//     let rev = 0;
//     while(num>0){
//         let rem = num % 10;
//         lnum = Math.floor(num/10);
//         rev = rev*10 + rem;
//     }
//     return rev;
// };

// console.log(reverse(123));
// console.log(reverse(13));
// console.log(reverse(3453));
// console.log(reverse(1232));
// console.log(reverse(123234));
// console.log(reverse(123324));
// console.log(reverse(12354));


function reverse(S){
    //code here
    let stack = [];
    for(let i=0;i<S.length;i++){
        stack.push(S[i]);
    }

    let x = S.length;
    let ans = '';
    while(x>0){
        ans += stack.pop();
        x--;
    }
    
    return ans;
 }
 
 let str = "Hello";

 console.log(reverse(str));

// Hello 
let reverseRecursiveString = (str, start, end) => {
    if(start > end)
        return 
    [str[start++], str[end--]] = [str[end], str[start]];
    console.log(str);
    return reverseRecursiveString(str, start, end);
}
let strn = "HelloJS"

console.log(reverseRecursiveString(strn,0,6))