// interview@topgeek.io

function palindrome(a){
    let len = a.length;

    for(let i =0;i<len/2;i++){
        if(a[i] !== a[len-1-i]){
            return 0;
            break;
        }
    }
    return 1;
}

// console.log(palindrome("hel009leh"))

console.log(550/2 != 275)
