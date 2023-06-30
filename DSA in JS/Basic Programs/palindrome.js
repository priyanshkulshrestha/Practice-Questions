let checkPalindrome = (n) => {
    let num = n;
    let rev = 0;
    while(num > 0){
        rev = rev*10 + (num % 10);
        num = num/10;
        console.log(rev);
    }
}
checkPalindrome(101)