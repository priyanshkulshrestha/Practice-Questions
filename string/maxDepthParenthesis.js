// 1614. Maximum Nesting Depth of the Parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let count = 0;
    let maxcount=0;
   for(let char of s){
       if(char == "("){
           count++;
           maxcount = count>maxcount? count : maxcount;
       }else if(char == ")"){
           count--;
       }
   }
   return maxcount;
};
let s = "1+(2*3)/(2-1)"
console.log(maxDepth(s))