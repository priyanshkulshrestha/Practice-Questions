function isPalindrome(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "");
    console.log(str)
    let start = 0;
    let end = str.length-1;
    while(start<=end){
        console.log(str[start], str[end])
        if(str[start].toLowerCase() != str[end].toLowerCase())
            return false;
        start++;
        end--;
    }
    return true;
}