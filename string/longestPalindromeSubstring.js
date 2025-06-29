// 5. Longest Palindromic Substring

//Brute force 

var longestPalindromeBruteforce = function(s) {
    console.time("brute")
    let ans = "";
    let maxlen = -1;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length+1;j++){
            let rev = s.slice(i,j).split('').reverse().join('')
            console.log(s.slice(i,j) , rev, (j-i), )
            if(s.slice(i,j) == rev && ((j-i) > maxlen)){
                ans = s.slice(i,j);
                console.log("update ans == ", ans);
                
                maxlen = j-i;
            }
        }
    }
    return ans
    console.timeLog("brute")
};
console.log(longestPalindromeBruteforce("cbbd"))

const checkpalindrome = (s, left, right) => {
    while(left>=0 && right<s.length){
        if(s[left] == s[right]){
            left--;
            right++;
        }
        else{
            // console.log(left+1,right-1)
            return s.slice(left+1  ,right);
        }
    }
    // console.log("out",left+1,right-1)
    return s.slice(left+1,right);

}

var longestPalindrome = function(s) {
    if(s.lenght<1) return "";
    if(s.length == 1) return s;

   let ans = "";
   let maxlen = -1;
   for(let i=0;i<s.length-1;i++){
    //   console.log(i);
      let oddPalindrome = checkpalindrome(s, i, i);
      let evenPalindrome = checkpalindrome(s, i, i+1);
        console.log("o -> ", oddPalindrome, "e->",evenPalindrome)
      if(oddPalindrome.length > evenPalindrome.length){
        maxPalindrome = oddPalindrome;
      }else{
        maxPalindrome = evenPalindrome;
      }
      
      if(maxPalindrome.length > maxlen){
        ans = maxPalindrome;
        maxlen = maxPalindrome.length;
      }
   }
   return ans
   
};

console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("babad"))
console.log(longestPalindrome("a"))